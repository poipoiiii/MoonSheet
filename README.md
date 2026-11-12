# MoonSheet

**An embeddable formula-and-recalculation kernel for MoonBit: parse formulas, evaluate with typed errors, track dependencies, and recompute only what changed.**

MoonSheet is not a spreadsheet file library and not a grid UI. It is the calculation layer you put *behind* a report generator, a budgeting model, a rule engine, a document tool, or a teaching demo. The CLI and the browser grid are thin demo shells over the library.

## Where it sits in the MoonBit ecosystem

The MoonBit ecosystem already covers file formats and columnar data. MoonSheet deliberately covers the layer neither of them owns, and composes with both instead of reimplementing them.

| Capability | `bobzhang/mbtexcel` | `ihb2032/MoonFrame` | MoonSheet |
|---|---|---|---|
| XLSX read / write | ✅ | — | ✅ via `lib/xlsx` adapter |
| DataFrame / columnar operations | — | ✅ | — |
| CSV in / out | — | ✅ | ✅ (interchange only) |
| Formula parsing (A1, ranges, cross-sheet) | — | — | ✅ |
| Typed evaluation with error propagation | — | — | ✅ (`#DIV/0!`, `#REF!`, `#N/A`, `#CIRC!` …) |
| Dependency graph, topological order, cycle detection | — | — | ✅ |
| Incremental recalculation of a dirty subgraph | — | — | ✅ |
| Workbook-level recalculation across sheets | — | — | ✅ |

In short: **mbtexcel moves bytes, MoonFrame moves columns, MoonSheet moves dependencies.** A typical pipeline reads a workbook with `mbtexcel`, hands the values and formula strings to MoonSheet, and writes the recalculated result back — MoonSheet does not need to own the file format.

## Who it is for

- **Report and document generators** — templates with computed fields, recalculated when data changes.
- **Budget / financial models** — three-statement style sheets where a single assumption change must flow through every dependent cell.
- **Low-code form and rule engines** — formulas as validation and linkage rules, with deterministic error values.
- **Teaching and tooling** — an inspectable formula parser, dependency graph, and evaluator.

## What works
  
- **Formula language** — numbers, strings, booleans, A1 references, ranges, cross-sheet references (`Budget!D8`, `SUM(Budget!A1:B2)`), function calls, arithmetic, comparison, unary operators, and `^` power.
- **Typed values** — number, text, boolean, date serial, error, and blank; spreadsheet error codes (`#DIV/0!`, `#VALUE!`, `#REF!`, `#NAME?`, `#N/A`, `#NUM!`, `#CIRC!`).
- **Function library** — 55+ functions across math, statistics, text, logic, lookup, date, and finance.
- **Dependency graph** — precedents/dependents, topological order, cycle detection, and dirty-subgraph incremental recalculation.
- **Workbook model** — sparse cells, formulas, multiple worksheets, full and incremental recalculation, A1 addressing.
- **Cross-sheet references** — `=Budget!D8`, `=SUM(Budget!D2:D4)`, case-insensitive sheet names; worksheets are recalculated in dependency order and cross-sheet cycles become `#CIRC!`.
- **Named ranges** — sheet-scoped names such as `Sales = D2:D4`; `=SUM(Sales)` works in evaluation and dependency tracking.
- **Number formats** — General, fixed decimals with thousands grouping, currency, and percent; formats survive edits and JSON round-trips.
- **Formula printer** — AST back to canonical text with only the parentheses that precedence requires, so `parse(print(parse(text)))` is equivalent to `parse(text)`. Useful for normalising formulas, explaining them, and migrating them.
- **IO** — CSV import/export, a stable JSON workbook format, and XLSX in/out through the `lib/xlsx` adapter over [`moonbitlang/mbtexcel`](https://mooncakes.io/docs/moonbitlang/mbtexcel). MoonSheet does not implement OOXML itself.
- **CLI** — `eval`, `calc`, `format`, `json`, `validate`, `stress`, `bench`, `xlsx-in`, `xlsx-out`.
- **Web demo** — an interactive grid with worksheet tabs, formula bar, dependency highlighting, CSV import/export, and live recalculation. The sample workbook is a three-sheet model (`Budget` → `Summary` → `Scenarios`) where every sheet reads across sheet boundaries.

The test suite has 76 tests covering parsing, printing round-trips, evaluation, errors, functions, dates, dependency graphs, named ranges, number formats, incremental recalculation, cross-sheet references, cycles, CSV, JSON, and XLSX round-trips.

## Incremental recalculation, measured

`moonsheet bench` reports how many formula cells are actually evaluated. The metric is deterministic, so it can be checked on any machine and in CI.

```text
$ moon run cmd/moonsheet -- bench 200
bench: 200 rows, 400 formula cells (value -> formula -> formula chain)
  full recalculation         : 400 cells evaluated
  one value edit, incremental: 2 cells evaluated (0.5% of full)
  one formula edit           : 400 cells evaluated (graph rebuild)
  no edit                    : 0 cells evaluated

workbook: Assumptions!A1:A200 -> Income!B1:B200
  full recalculation         : 200 cells evaluated
  one assumption edit        : 1 cells evaluated (0.5% of full)
```

The cross-sheet case invalidates by *cell*, not by sheet: editing `Assumptions!A100` marks only the downstream formulas that read `Assumptions!A100`. This is the behaviour no file-format or DataFrame library provides, and it is covered by regression tests.

## Quick start

```bash
moon check --target native
moon test --target native
moon run cmd/moonsheet -- eval "=1+2*3"
```

If the local Windows machine does not have the MSVC build tools, use the wasm backend for verification:

```bash
moon check --target wasm
moon test --target wasm
moon run cmd/moonsheet --target wasm -- eval "=1+2*3"
```

Expected output:

```text
7
```

## CLI

```bash
moon run cmd/moonsheet -- eval "=SUM(1,2,3)"
moon run cmd/moonsheet -- format "=sum( a1:b2 , c3 )*2"
moon run cmd/moonsheet -- calc "10,20\n=A1+B1,30"
moon run cmd/moonsheet -- validate '{"sheets":[]}'
moon run cmd/moonsheet -- stress 100
moon run cmd/moonsheet -- bench 200
moon run cmd/moonsheet -- xlsx-in path/to/book.xlsx
moon run cmd/moonsheet -- xlsx-out path/to/model.xlsx
```

`calc` treats `\n` as a row break and prints the recalculated CSV. `stress` builds a synthetic sheet and exercises the engine end to end. `bench` compares full and incremental recalculation on a synthetic chain and on a two-sheet workbook. `xlsx-in` imports a workbook through `mbtexcel`, recalculates it, and reports the sheets it found; `xlsx-out` writes the built-in three-sheet model as XLSX.

## Web demo

```bash
powershell -ExecutionPolicy Bypass -File web/build.ps1
python -m http.server 8000 --directory web
```

Open http://localhost:8000/. Click a cell to select it, edit the formula bar, and press Enter. Formula cells show a corner mark; the selected cell and its direct dependencies are highlighted. Worksheet tabs switch between `Budget`, `Summary`, and `Scenarios`; `Scenarios` reads `=Budget!D6+Summary!B5`, so one edit in `Budget` flows through all three sheets. The `+` tab adds a worksheet. `Load CSV` reads a local file into `Sheet1` and `Export CSV` downloads the active sheet.

The browser demo is a JavaScript target of the same MoonBit core. MoonBit owns the workbook and calculation; JavaScript only renders the DOM.

## Library usage

```moonbit
let wb = @workbook.Workbook::new()
let sheet = wb.add_sheet("Sheet1")

sheet.set_value("A1", @types.Value::Number(10.0))
sheet.set_formula("A2", "=A1 * 2")
sheet.define_name("Sales", "A1:A2")
sheet.set_formula("A3", "=SUM(Sales)")

let summary = wb.add_sheet("Summary")
summary.set_formula("B1", "=Sheet1!A3 * 2")

ignore(wb.recalculate_all())
println(sheet.get_value("A3").to_display())  // 30
println(summary.get_value("B1").to_display()) // 60
```

After the first recalculation the dependency graph is cached. Editing a value marks only that cell and its transitive dependents dirty; `recalculate()` evaluates just that subgraph. Editing a formula rebuilds the graph and falls back to a full topological recalculation.

`Workbook::recalculate_all` orders worksheets by their cross-sheet references and recalculates each sheet with a snapshot of the sheets it reads from. A sheet that has pending edits causes its dependents to be recalculated; worksheets that take part in a cross-sheet cycle are marked `#CIRC!`.

### JSON workbook

```json
{
  "sheets": [
    {
      "name": "Sheet1",
      "cells": {
        "A1": { "formula": null, "kind": "number", "value": "10", "format": "general" },
        "A2": { "formula": "=A1*2", "kind": "number", "value": "20", "format": "currency:¥:2" }
      }
    }
  ]
}
```

`@io.export_json` and `@io.import_json` round-trip this format.

## Architecture

```text
lib/types/        value model, cell errors, addresses, ranges
lib/formula/      lexer, Pratt parser, AST, reference collection
lib/eval/         evaluator, coercion, IF/IFERROR, range-aware functions
lib/functions/    value-based built-in function registry
lib/graph/        dependency graph, topological order, cycle detection
lib/format/       number formatting (decimals, grouping, currency, percent)
lib/workbook/     workbook, worksheet, full/incremental recalculation
lib/io/           CSV import/export, JSON workbook
cmd/moonsheet/    CLI
web/              JavaScript grid demo
docs/             proposal and design notes
```

Core packages are platform-independent. The library checks on `native`, `wasm`, and `js`; the web demo is a `js` executable.

## Function coverage

- **Math / statistics** — `SUM`, `PRODUCT`, `AVERAGE`, `MIN`, `MAX`, `COUNT`, `COUNTA`, `COUNTBLANK`, `MEDIAN`, `VAR`, `STDEV`, `SUMSQ`, `LARGE`, `SMALL`, `ABS`, `SIGN`, `INT`, `TRUNC`, `ROUND`, `ROUNDUP`, `ROUNDDOWN`, `CEILING`, `FLOOR`, `MOD`, `POWER`, `SQRT`, `EXP`, `LN`, `LOG`, `LOG10`, `PI`
- **Text** — `LEN`, `LEFT`, `RIGHT`, `MID`, `UPPER`, `LOWER`, `TRIM`, `CONCAT`, `CONCATENATE`, `TEXTJOIN`, `REPT`, `FIND`, `SEARCH`, `SUBSTITUTE`, `REPLACE`, `VALUE`, `CHAR`, `CODE`
- **Logic** — `IF`, `IFERROR`, `AND`, `OR`, `NOT`, `XOR`, `TRUE`, `FALSE`
- **Lookup** — `CHOOSE`, `INDEX`, `MATCH`, `VLOOKUP`
- **Conditional aggregates** — `COUNTIF`, `SUMIF`, `AVERAGEIF`
- **Date** — `DATE`, `YEAR`, `MONTH`, `DAY`, `EDATE`, `EOMONTH`
- **Finance** — `PMT`, `FV`, `PV`, `NPV`

## Scope

CSV and JSON are supported. XLSX import/export is intentionally outside 0.1.0: a reliable xlsx layer needs ZIP, shared strings, styles, and formula compatibility, and would dilute the calculation core. The planned integration point is to reuse an existing MoonBit xlsx reader and feed values/formulas into `lib/io`.

## License

MIT
