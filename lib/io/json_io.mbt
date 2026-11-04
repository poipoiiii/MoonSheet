/// JSON workbook import and export.
///
/// The format is intentionally small and stable:
///
/// ```json
/// { "sheets": [ { "name": "Sheet1", "cells": {
///   "A1": { "formula": null, "kind": "number", "value": "10" }
/// } } ] }
/// ```

///|
pub(all) struct CellJson {
  formula : String?
  kind : String
  value : String
} derive(@json.ToJson, @json.FromJson)

///|
pub extend CellJson with @json.ToJson::{to_json}

///|
pub extend CellJson with @json.FromJson::{from_json}

///|
pub(all) struct SheetJson {
  name : String
  cells : Map[String, CellJson]
} derive(@json.ToJson, @json.FromJson)

///|
pub extend SheetJson with @json.ToJson::{to_json}

///|
pub extend SheetJson with @json.FromJson::{from_json}

///|
pub(all) struct WorkbookJson {
  sheets : Array[SheetJson]
} derive(@json.ToJson, @json.FromJson)

///|
pub extend WorkbookJson with @json.ToJson::{to_json}

///|
pub extend WorkbookJson with @json.FromJson::{from_json}

///|
fn kind_of(value : @types.Value) -> String {
  match value {
    @types.Value::Number(_) => "number"
    @types.Value::Text(_) => "text"
    @types.Value::Boolean(_) => "boolean"
    @types.Value::Date(_) => "date"
    @types.Value::Error(_) => "error"
    @types.Value::Blank => "blank"
  }
}

///|
fn error_from_code(code : String) -> @types.CellError {
  match code {
    "#DIV/0!" => @types.CellError::DivZero
    "#REF!" => @types.CellError::Ref
    "#NAME?" => @types.CellError::Name
    "#N/A" => @types.CellError::NotAvailable
    "#NUM!" => @types.CellError::Num
    "#CIRC!" => @types.CellError::Circular
    _ => @types.CellError::ValueErr
  }
}

///|
fn value_from_kind(kind : String, text : String) -> @types.Value {
  if kind == "number" {
    @types.Value::Number(@string.parse_double(text) catch { _ => 0.0 })
  } else if kind == "boolean" {
    @types.Value::Boolean(text == "TRUE")
  } else if kind == "date" {
    @types.Value::Date(@string.parse_int(text) catch { _ => 0 })
  } else if kind == "error" {
    @types.Value::Error(error_from_code(text))
  } else if kind == "blank" {
    @types.Value::Blank
  } else {
    @types.Value::Text(text)
  }
}

///|
pub fn export_json(workbook : @workbook.Workbook) -> String {
  let sheets : Array[SheetJson] = []
  for name in workbook.names() {
    match workbook.sheet(name) {
      Some(sheet) => {
        let cells : Map[String, CellJson] = Map([], capacity=16)
        for entry in sheet.entries() {
          let a1 = entry.0
          let formula = entry.1
          let value = entry.2
          cells[a1] = {
            formula,
            kind: kind_of(value),
            value: value.to_display(),
          }
        }
        sheets.push({ name, cells, })
      }
      None => ()
    }
  }
  let data : WorkbookJson = { sheets, }
  @json.to_json(data).stringify(indent=2)
}

///|
pub fn import_json(text : String) -> @workbook.Workbook? {
  let parsed = @json.parse(text) catch { _ => return None }
  let data : WorkbookJson = @json.from_json(parsed) catch { _ => return None }
  let workbook = @workbook.Workbook::new()
  for sheet_json in data.sheets {
    let sheet = workbook.add_sheet(sheet_json.name)
    for a1 in sheet_json.cells.keys() {
      match sheet_json.cells.get(a1) {
        Some(cell) =>
          match cell.formula {
            Some(formula) => ignore(sheet.set_formula(a1, formula))
            None =>
              ignore(
                sheet.set_value(a1, value_from_kind(cell.kind, cell.value)),
              )
          }
        None => ()
      }
    }
  }
  Some(workbook)
}
