# Changelog

All notable changes to this project are documented in this file.

## [0.1.0] - Unreleased

### Added

- Project skeleton: `moon.mod`, package layout, CI workflow, fixtures directory.
- Value model with spreadsheet error values: `#DIV/0!`, `#VALUE!`, `#REF!`, `#NAME?`, `#N/A`, `#NUM!`, `#CIRC!`.
- A1 address parsing/formatting (including `$` markers), rectangular ranges, packed cell keys.
- Formula lexer, Pratt parser, AST, and reference collection.
- Boolean literals, string literals, function calls, ranges, arithmetic, comparison, unary operators, and power.
- Expression evaluator with error propagation and lazy `IF` / `IFERROR`.
- Function library: math/statistics, text, logic, lookup, conditional aggregates, date, and finance (55+ functions).
- Sheet-scoped named ranges (`Sales = D2:D4`), resolved during evaluation and dependency-graph construction.
- Cross-sheet references (`=Budget!D8`, `=SUM(Budget!D2:D4)`) with case-insensitive sheet names.
- Workbook-level recalculation in dependency order, with downstream invalidation after edits and `#CIRC!` marking for cross-sheet cycles.
- Worksheet insertion order is preserved for stable tabs and JSON round-trips.
- Browser demo: worksheet tabs, add-sheet action, and a `Budget` / `Summary` sample workbook that reads values across sheets.
- Per-cell number formats: General, fixed decimals with thousands grouping, currency, and percent. Formats survive value edits and JSON round-trips.
- Dependency graph with precedents, dependents, topological order, and cycle detection.
- Workbook / worksheet model with full and dirty-subgraph incremental recalculation.
- Cycle handling: formula cells become `#CIRC!` when a cycle is detected.
- CSV import/export with quoting.
- JSON workbook import/export with type-preserving cell records.
- CLI: `eval`, `calc`, `json`, `validate`, `stress`.
- Browser demo: grid, formula bar, selection, dependency highlighting, CSV import/export, live recalculation.
- Design system document and design notes.
- 65 tests covering types, parsing, evaluation, functions, dates, graphs, named ranges, formats, recalculation, cross-sheet references, cycles, CSV, and JSON.
