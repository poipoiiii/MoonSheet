/// XLSX adapter over `moonbitlang/mbtexcel`.
///
/// This package exists so MoonSheet does not own the spreadsheet file format.
/// `mbtexcel` reads and writes OOXML; this adapter only translates between its
/// cell model and MoonSheet's workbook model, then hands control back so the
/// engine can recalculate.

///|
/// Convert an XLSX byte buffer into a workbook. Worksheet order and names are
/// preserved; formula text is stored with a leading `=`.
pub fn import_bytes(bytes : BytesView) -> Result[@workbook.Workbook, String] {
  let opened : Result[@mbtexcel.Workbook, Error] = Ok(@mbtexcel.read(bytes)) catch {
    error => Err(error)
  }
  match opened {
    Err(error) => Err("xlsx read failed: \{error}")
    Ok(source) => {
      let workbook = @workbook.Workbook::new()
      for sheet_name in source.get_sheet_list() {
        let sheet = workbook.add_sheet(sheet_name)
        copy_sheet(source, sheet_name, sheet)
      }
      Ok(workbook)
    }
  }
}

///|
/// Write a workbook (values and formulas, not formats) into XLSX bytes.
pub fn export_bytes(workbook : @workbook.Workbook) -> Result[Bytes, String] {
  let target = @mbtexcel.Workbook::new()
  for sheet_name in workbook.names() {
    match workbook.sheet(sheet_name) {
      Some(sheet) => {
        let target_sheet : Result[@mbtexcel.Worksheet, Error] = Ok(
          target.add_sheet(sheet_name),
        ) catch {
          error => Err(error)
        }
        match target_sheet {
          Err(error) => return Err("xlsx sheet failed: \{error}")
          Ok(out) =>
            for entry in sheet.entries() {
              let (a1, formula, value) = entry
              match formula {
                Some(text) => {
                  let cached = match value {
                    @types.Value::Blank => None
                    _ => Some(value.to_display())
                  }
                  let written : Result[Unit, Error] = Ok(
                    out.set_cell_formula(a1, text, value?=cached),
                  ) catch {
                    error => Err(error)
                  }
                  match written {
                    Err(error) => return Err("xlsx formula failed: \{error}")
                    Ok(_) => ()
                  }
                }
                None =>
                  match value_to_cell(value) {
                    Some(cell_value) => {
                      let written : Result[Unit, Error] = Ok(
                        out.set_cell_value(a1, cell_value),
                      ) catch {
                        error => Err(error)
                      }
                      match written {
                        Err(error) => return Err("xlsx value failed: \{error}")
                        Ok(_) => ()
                      }
                    }
                    None => ()
                  }
              }
            }
        }
      }
      None => ()
    }
  }
  let written : Result[Bytes, Error] = Ok(@mbtexcel.write(target)) catch {
    error => Err(error)
  }
  match written {
    Ok(bytes) => Ok(bytes)
    Err(error) => Err("xlsx write failed: \{error}")
  }
}

///|
fn copy_sheet(
  source : @mbtexcel.Workbook,
  sheet_name : String,
  target : @workbook.Sheet,
) -> Unit {
  let rows : Result[Array[Array[String]], Error] = Ok(
    source.get_rows(sheet_name),
  ) catch {
    error => Err(error)
  }
  match rows {
    Err(_) => ()
    Ok(grid) => {
      let mut row = 0
      while row < grid.length() {
        let cells = grid[row]
        let mut col = 0
        while col < cells.length() {
          if cells[col] != "" {
            let a1 = @types.Address::new(row, col).to_a1()
            match formula_at(source, sheet_name, a1) {
              Some(text) => ignore(target.set_formula(a1, text))
              None =>
                match value_at(source, sheet_name, a1) {
                  Some(value) => ignore(target.set_value(a1, value))
                  None => ()
                }
            }
          }
          col = col + 1
        }
        row = row + 1
      }
    }
  }
}

///|
fn formula_at(
  source : @mbtexcel.Workbook,
  sheet_name : String,
  a1 : String,
) -> String? {
  let found : Result[String?, Error] = Ok(
    source.get_cell_formula(sheet_name, a1),
  ) catch {
    error => Err(error)
  }
  match found {
    Err(_) => None
    Ok(None) => None
    Ok(Some(text)) =>
      if text.has_prefix("=") {
        Some(text)
      } else {
        Some("=" + text)
      }
  }
}

///|
fn value_at(
  source : @mbtexcel.Workbook,
  sheet_name : String,
  a1 : String,
) -> @types.Value? {
  let found : Result[@mbtexcel.CellValue?, Error] = Ok(
    source.get_cell_value_raw(sheet_name, a1),
  ) catch {
    error => Err(error)
  }
  match found {
    Ok(Some(cell_value)) => cell_to_value(cell_value)
    _ => None
  }
}

///|
fn cell_to_value(cell_value : @mbtexcel.CellValue) -> @types.Value? {
  match cell_value {
    @mbtexcel.CellValue::Numeric(number) => Some(@types.Value::Number(number))
    @mbtexcel.CellValue::Bool(flag) => Some(@types.Value::Boolean(flag))
    @mbtexcel.CellValue::String(text) =>
      if text == "" {
        None
      } else {
        Some(@types.Value::Text(text))
      }
    @mbtexcel.CellValue::Error(_) => None
  }
}

///|
fn value_to_cell(value : @types.Value) -> @mbtexcel.CellValue? {
  match value {
    @types.Value::Number(number) => Some(@mbtexcel.CellValue::Numeric(number))
    @types.Value::Boolean(flag) => Some(@mbtexcel.CellValue::Bool(flag))
    @types.Value::Text(text) => Some(@mbtexcel.CellValue::String(text))
    @types.Value::Date(serial) =>
      Some(@mbtexcel.CellValue::Numeric(serial.to_double()))
    @types.Value::Error(_) => None
    @types.Value::Blank => None
  }
}
