/// CSV import and export.
///
/// The reader supports a small, predictable subset: comma-separated fields,
/// one row per line, optional surrounding whitespace. The writer quotes fields
/// that contain commas, quotes, or newlines.

///|
fn upper_string(s : String) -> String {
  let mut out = ""
  for c in s.to_array() {
    out = out + c.to_ascii_uppercase().to_string()
  }
  out
}

///|
pub fn parse_csv(text : String) -> Array[Array[String]] {
  let rows : Array[Array[String]] = []
  for line in text.split("\n") {
    let trimmed = line.trim().to_owned()
    if trimmed.length() > 0 {
      let columns : Array[String] = []
      for column in trimmed.split(",") {
        columns.push(column.trim().to_owned())
      }
      rows.push(columns)
    }
  }
  rows
}

///|
fn parse_value(text : String) -> @types.Value {
  if text.length() == 0 {
    return @types.Value::Blank
  }
  let upper = upper_string(text)
  if upper == "TRUE" {
    return @types.Value::Boolean(true)
  }
  if upper == "FALSE" {
    return @types.Value::Boolean(false)
  }
  @types.Value::Number(@string.parse_double(text)) catch {
    _ => @types.Value::Text(text)
  }
}

///|
/// Parse a single cell input: blank, boolean, number, or text.
pub fn parse_cell_value(text : String) -> @types.Value {
  parse_value(text.trim().to_owned())
}

///|
/// Load CSV text into a sheet starting at A1. Fields beginning with `=` are
/// stored as formulas.
pub fn load_csv(sheet : @workbook.Sheet, text : String) -> Int32 {
  let rows = parse_csv(text)
  let mut row_index = 0
  for row in rows {
    let mut column_index = 0
    for cell in row {
      let address = @types.Address::new(row_index, column_index)
      let a1 = address.to_a1()
      let trimmed = cell.trim().to_owned()
      if trimmed.length() > 0 && trimmed.get_char(0) == Some('=') {
        ignore(sheet.set_formula(a1, trimmed))
      } else {
        ignore(sheet.set_value(a1, parse_value(trimmed)))
      }
      column_index = column_index + 1
    }
    row_index = row_index + 1
  }
  rows.length()
}

///|
fn contains_char(text : String, target : Char) -> Bool {
  for c in text.to_array() {
    if c == target {
      return true
    }
  }
  false
}

///|
fn escape_csv(text : String) -> String {
  if contains_char(text, ',') ||
    contains_char(text, '"') ||
    contains_char(text, '\n') ||
    contains_char(text, '\r') {
    let mut out = "\""
    for c in text.to_array() {
      if c == '"' {
        out = out + "\"\""
      } else {
        out = out + c.to_string()
      }
    }
    out + "\""
  } else {
    text
  }
}

///|
pub fn export_csv(
  sheet : @workbook.Sheet,
  rows : Int32,
  cols : Int32,
) -> String {
  let mut out = ""
  let mut row = 0
  while row < rows {
    let mut col = 0
    while col < cols {
      if col > 0 {
        out = out + ","
      }
      let address = @types.Address::new(row, col)
      out = out + escape_csv(sheet.get_value(address.to_a1()).to_display())
      col = col + 1
    }
    out = out + "\n"
    row = row + 1
  }
  out
}

///|
pub fn export_csv_auto(sheet : @workbook.Sheet) -> String {
  let entries = sheet.entries()
  let mut max_row = 1
  let mut max_col = 1
  for entry in entries {
    match @types.Address::parse(entry.0) {
      Some(addr) => {
        if addr.row + 1 > max_row {
          max_row = addr.row + 1
        }
        if addr.col + 1 > max_col {
          max_col = addr.col + 1
        }
      }
      None => ()
    }
  }
  export_csv(sheet, max_row, max_col)
}
