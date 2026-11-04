# MoonSheet

**A headless spreadsheet calculation engine for MoonBit: formula parsing, typed evaluation, dependency-aware recalculation, CSV/JSON IO, a CLI, and a browser grid.**

MoonSheet is not an Excel clone. It is the reusable calculation core that report generators, document tools, and data tools can depend on. The web grid and CLI are demo layers on top of the library.

## What works

- **Formula language** — numbers, strings, booleans, A1 references, ranges, cross-sheet references (`Budget!D8`, `SUM(Budget!A1:B2)`), function calls, arithmetic, comparison, unary operators, and `^` power.
- **Typed values** — number, text, boolean, date serial, error, and blank; spreadsheet error codes (`#DIV/0!`, `#VALUE!`, `#REF!`, `#NAME?`, `#N/A`, `#NUM!`, `#CIRC!`).
- **Function library** — 55+ functions across math, statistics, text, logic, lookup, date, and finance.
- **Dependency graph** — precedents/dependents, topological order, cycle detection, and dirty-subgraph incremental recalculation.
- **Workbook model** — sparse cells, formulas, multiple worksheets, full and incremental recalculation, A1 addressing.
- **Cross-sheet references** — `=Budget!D8`, `=SUM(Budget!D2:D4)`, case-insensitive sheet names; worksheets are recalculated in dependency order and cross-sheet cycles become `#CIRC!`.
- **Named ranges** — sheet-scoped names such as `Sales = D2:D4`; `=SUM(Sales)` works in evaluation and dependency tracking.
- **Number formats** — General, fixed decimals with thousands grouping, currency, and percent; formats survive edits and JSON round-trips.
- **IO** — CSV import/export and a stable JSON workbook format.
- **CLI** — `eval`, `calc`, `json`, `validate`, `stress`.
- **Web demo** — an interactive grid with worksheet tabs, formula bar, dependency highlighting, CSV import/export, and live recalculation.

The test suite has 65 tests covering parsing, evaluation, errors, functions, dates, dependency graphs, named ranges, number formats, incremental recalculation, cross-sheet references, cycles, CSV, and JSON.

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
moon run cmd/moonsheet -- calc "10,20\n=A1+B1,30"
moon run cmd/moonsheet -- validate '{"sheets":[]}'
moon run cmd/moonsheet -- stress 100
```

`calc` treats `\n` as a row break and prints the recalculated CSV. `stress` builds a synthetic sheet and exercises the engine end to end.

## Web demo

```bash
powershell -ExecutionPolicy Bypass -File web/build.ps1
python -m http.server 8000 --directory web
```

Open http://localhost:8000/. Click a cell to select it, edit the formula bar, and press Enter. Formula cells show a corner mark; the selected cell and its direct dependencies are highlighted. Worksheet tabs switch between `Budget` and `Summary`, where the summary reads `=Budget!D8`; the `+` tab adds a worksheet. `Load CSV` reads a local file into `Sheet1` and `Export CSV` downloads the active sheet.

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
