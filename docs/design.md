# MoonSheet Design Notes

## 1. Goals

MoonSheet is a **headless calculation core**, not a spreadsheet application. The design optimizes for:

- clear package boundaries and a reusable public API;
- correct, testable formula semantics;
- predictable recalculation for chains and cycles;
- running on native, wasm, and js without platform-specific code in the core.

The demo layers (`cmd/moonsheet`, `web/`) own IO and rendering only.

## 2. Package layers

```text
types  <- formula  <- eval  <- workbook  <- io
                    ^        ^
                    |        |
                 functions  graph
```

| Package | Responsibility | Explicit non-goal |
|---|---|---|
| `types` | `Value`, `CellError`, `Address`, `Range`, A1 parsing/printing | No formula text |
| `formula` | lexer, Pratt parser, AST, reference collection | No workbook access |
| `functions` | value-based functions, type coercion helpers | No ranges or recalculation |
| `eval` | AST evaluation, errors, control flow, range-aware functions | No recalculation order |
| `graph` | precedents/dependents, topological order, cycle detection | No evaluation |
| `workbook` | cells, formulas, graph cache, full/incremental recalculation | No IO |
| `io` | CSV and JSON boundaries | No calculation semantics |

`eval` depends on `functions`; `workbook` depends on `eval` and `graph`. There is no cycle.

## 3. Value model

`Value` is one of `Number`, `Text`, `Boolean`, `Date`, `Error`, `Blank`.

Design choices:

- **Errors are values.** `#DIV/0!` propagates through expressions instead of raising, so a batch calculation never aborts.
- **Blank is distinct from `Text("")`.** This matters for `COUNT`, `COUNTA`, `COUNTBLANK`, and comparison.
- **Dates are serial numbers.** The 1900 date system is used, including Excel's phantom 1900-02-29 behavior. Formatting belongs to the presentation layer.
- **Coercion is centralized.** `as_number`, `as_text`, and `as_bool` live in the evaluator/function layer and are covered by tests.

## 4. Formula language

The parser is a hand-written lexer plus a Pratt parser.

- Precedence: comparison < additive < multiplicative < power < unary < primary.
- `^` is right-associative.
- Function calls are `Ident(args...)`; names are uppercased.
- Ranges are `Ident:Ident` and are normalized by `Range::new`.
- `TRUE` / `FALSE` are parsed as boolean literals.
- Identifiers that are not cell addresses become `Name`; named ranges are resolved by the evaluator and the dependency-graph builder.
- `Sheet!A1` and `Sheet!A1:B2` are cross-sheet references; sheet names are matched case-insensitively at evaluation time.
- `parse_formula` strips a leading `=`.

`formula::references` walks the AST and expands ranges into individual addresses for the dependency graph. `formula::references_with` additionally resolves named ranges through a callback, so `=SUM(Sales)` contributes the same edges as `=SUM(D2:D4)`. Ranges larger than 10,000 cells are ignored for graph construction; this keeps pathological formulas from exploding the graph, and the evaluator still computes the range for the function call.

Named ranges are sheet-scoped: `Sheet::define_name("Sales", "D2:D4")` stores the name in the sheet's name map. `EvalContext::with_names` exposes a resolver to the evaluator; `Sheet::build_graph` uses the same resolver so evaluation and dependency tracking stay consistent.

`formula::references_across` returns `(sheet, address)` pairs where `None` means the formula's own sheet. The sheet's internal graph only uses same-sheet edges; cross-sheet edges are lifted to the workbook level, because a sheet's recalculation must be finished before its dependents start.

## 5. Dependency graph

`DependencyGraph` keeps two maps:

- `precedents[node]` — cells the formula depends on;
- `dependents[cell]` — formulas that depend on the cell.

`add_dependency` deduplicates edges. `topological_order(nodes)` uses Kahn's algorithm over the given node set and returns `None` on a cycle.

The graph is built from all formula cells after a formula edit. Value edits reuse the cached graph.

## 6. Recalculation

### 6.1 Full path

`Sheet::recalculate_full`:

1. Parse every formula and rebuild the graph.
2. Collect formula keys.
3. Topologically order them.
4. Evaluate in order, reading already-computed values from a snapshot map.
5. Write computed values back to cells.

If `topological_order` returns `None`, every formula cell on the sheet gets `#CIRC!`. This is conservative and easy to explain; it avoids leaving partially updated values around a cycle.

### 6.2 Incremental path

`Sheet::recalculate_dirty`:

1. Snapshot current values.
2. Filter the dirty set to formula cells.
3. Topologically order that subset.
4. Evaluate only those cells.

`set_value` marks the edited cell and all transitive dependents dirty. `set_formula` invalidates the graph and forces a full rebuild, because the edge set changed.

The full path is always available as a correctness baseline. Tests compare value edits, formula edits, chains, and cycles through the public API.

### 6.3 Workbook pass

`Workbook::recalculate_all`:

1. Builds a sheet-level graph from `Sheet!A1` references (`Sheet::depends_on_sheets`).
2. Orders worksheets with Kahn's algorithm. Any sheet left unordered is part of a cross-sheet cycle.
3. Snapshots every sheet's values into a `book` map keyed by upper-cased sheet name.
4. Recalculates each ordered sheet with `Sheet::recalculate_with(book)`, then refreshes its snapshot.
5. Marks only the downstream formulas that read the edited cells dirty (`Sheet::mark_cross_dependents`), so a cross-sheet edit does not rebuild the dependent worksheet. When the upstream sheet rebuilt its graph, every cross-sheet reference is marked instead.
6. Marks every formula cell of a cyclic sheet as `#CIRC!`.

`EvalContext::with_sheets` carries two extra callbacks for cross-sheet reads. A missing sheet yields `#REF!` for single cells and `#REF!`-valued ranges, so `=SUM(Ghost!A1:A2)` reports the error instead of silently summing to zero.

## 7. Function registry

`functions::call` handles value-based functions. `eval` handles:

- `IF` / `IFERROR` — lazy branch evaluation;
- `COUNTIF` / `SUMIF` / `AVERAGEIF` — criteria matching over ranges;
- `INDEX` / `MATCH` / `VLOOKUP` — range shape matters, so they receive the original `Range` AST.

This split keeps `functions` simple and avoids giving it a dependency on the workbook.

## 8. Number formats

Number formatting is a display concern and is isolated in `lib/format`:

- `CellFormat` is `General`, `Number(decimals)`, `Currency(symbol, decimals)`, or `Percent(decimals)`.
- `Cell` stores a format alongside its formula and value.
- `Sheet::set_value` and `set_formula` preserve the existing format, so editing a cell does not reset its presentation.
- `Sheet::display_value` formats a value for rendering; `Sheet::get_value` keeps returning raw values for calculation and export.
- JSON stores `format` as a stable code such as `number:2` or `currency:¥:2`.

This keeps formatting out of the evaluator: formula semantics never depend on how a cell is displayed.

## 9. IO boundaries

- CSV: comma-separated, one row per line; export quotes commas, quotes, and newlines.
- JSON: explicit `{ formula, kind, value, format }` per cell. `kind` preserves the type of non-formula cells, `format` preserves presentation, and formulas are recalculated on import.
- XLSX: not in 0.1.0. A future adapter should reuse an existing xlsx reader and call `Sheet::set_value` / `Sheet::set_formula`.

## 10. Testing strategy

| Layer | What is tested |
|---|---|
| `types` | A1 round-trip, ranges, error codes, display |
| `formula` | precedence, calls, ranges, trailing-token errors, reference collection |
| `eval` | arithmetic, errors, lazy `IF`, range functions |
| `functions` | math, text, dates, statistics |
| `graph` | dependents, topological order, cycles |
| `format` | grouping, decimals, currency, percent, non-numeric fallback |
| `workbook` | chains, incremental edits, cycles, named ranges, formats, cross-sheet order/cycles, conformance table |
| `io` | CSV import/export, JSON round-trip |

Conformance checks go through `Sheet::recalculate`, so they exercise the same path a user sees rather than calling functions in isolation.

## 11. Known limits

- Named ranges are sheet-scoped; workbook-global names are not implemented. Cross-sheet references work for simple sheet names (no spaces or quoting yet).
- Cycle handling is sheet-wide (`#CIRC!` for all formula cells) rather than per strongly connected component.
- Iterative calculation is not implemented.
- Ranges over 10,000 cells are not expanded into graph edges.
- XLSX is deferred.
- Cell styles (fonts, colors, alignment), charts, and collaboration are out of scope.

These limits are deliberate: the product is the calculation core, and each limit has a clear extension point.
