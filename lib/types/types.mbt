/// Core value types for MoonSheet.
///
/// The value model is deliberately small and explicit: spreadsheet errors are
/// values, blank cells are distinct from empty text, and dates are stored as
/// serial numbers so calculations are independent of time zones.

///|
/// A spreadsheet error value.
pub(all) enum CellError {
  DivZero
  ValueErr
  Ref
  Name
  NotAvailable
  Num
  Circular
} derive(Eq, Debug)

///|
pub extend CellError with Eq::{not_equal, equal}

///|
pub extend CellError with @moonbitlang/core/debug.Debug::{to_repr}

///|
/// The display code used by spreadsheets, e.g. `#DIV/0!`.
pub fn CellError::code(self : CellError) -> String {
  match self {
    DivZero => "#DIV/0!"
    ValueErr => "#VALUE!"
    Ref => "#REF!"
    Name => "#NAME?"
    NotAvailable => "#N/A"
    Num => "#NUM!"
    Circular => "#CIRC!"
  }
}

///|
/// A scalar cell value.
pub(all) enum Value {
  Number(Double)
  Text(String)
  Boolean(Bool)
  Date(Int32)
  Error(CellError)
  Blank
} derive(Eq, Debug)

///|
pub extend Value with Eq::{not_equal, equal}

///|
pub extend Value with @moonbitlang/core/debug.Debug::{to_repr}

///|
/// Display format for a number cell.
pub(all) enum CellFormat {
  General
  Number(Int32)
  Currency(String, Int32)
  Percent(Int32)
} derive(Eq, Debug)

///|
pub extend CellFormat with Eq::{not_equal, equal}

///|
pub extend CellFormat with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub fn CellFormat::code(self : CellFormat) -> String {
  match self {
    General => "general"
    Number(decimals) => "number:\{decimals}"
    Currency(symbol, decimals) => "currency:\{symbol}:\{decimals}"
    Percent(decimals) => "percent:\{decimals}"
  }
}

///|
pub fn CellFormat::parse(code : String) -> CellFormat {
  let parts = code.split(":").to_array()
  if parts.length() == 1 && parts[0].to_owned() == "general" {
    General
  } else if parts.length() == 2 && parts[0].to_owned() == "number" {
    Number(@string.parse_int(parts[1]) catch { _ => 2 })
  } else if parts.length() == 3 && parts[0].to_owned() == "currency" {
    Currency(parts[1].to_owned(), @string.parse_int(parts[2]) catch { _ => 2 })
  } else if parts.length() == 2 && parts[0].to_owned() == "percent" {
    Percent(@string.parse_int(parts[1]) catch { _ => 1 })
  } else {
    General
  }
}

///|
/// Render a value for the CLI and CSV export.
pub fn Value::to_display(self : Value) -> String {
  match self {
    Number(n) => n.to_string()
    Text(s) => s
    Boolean(b) => if b { "TRUE" } else { "FALSE" }
    Date(d) => d.to_string()
    Error(e) => e.code()
    Blank => ""
  }
}

///|
/// A zero-based cell address.
pub struct Address {
  row : Int32
  col : Int32
} derive(Eq, Debug)

///|
pub extend Address with Eq::{not_equal, equal}

///|
pub extend Address with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub fn Address::new(row : Int32, col : Int32) -> Address {
  { row, col, }
}

///|
/// Pack an address into a single integer key for sparse maps.
pub fn Address::key(self : Address) -> Int32 {
  self.row * 16384 + self.col
}

///|
/// Unpack an address key produced by `Address::key`.
pub fn Address::from_key(key : Int32) -> Address {
  { row: key / 16384, col: key % 16384, }
}

///|
/// Convert a zero-based column index to spreadsheet letters: 0 -> A, 26 -> AA.
fn column_letters(col : Int32) -> String {
  let mut n = col + 1
  let mut out = ""
  while n > 0 {
    let rem = (n - 1) % 26
    out = ('A'.to_int() + rem).unsafe_to_char().to_string() + out
    n = (n - 1) / 26
  }
  out
}

///|
/// Render an address in A1 notation, e.g. `B3`.
pub fn Address::to_a1(self : Address) -> String {
  column_letters(self.col) + (self.row + 1).to_string()
}

///|
/// Parse A1 notation, accepting optional `$` markers. Returns `None` for
/// malformed addresses.
pub fn Address::parse(a1 : String) -> Address? {
  let mut upper = ""
  for c in a1.to_array() {
    upper = upper + c.to_ascii_uppercase().to_string()
  }
  let chars = upper.to_array()
  let n = chars.length()
  let mut i = 0
  if i < n && chars[i] == '$' {
    i = i + 1
  }
  let mut col = 0
  let mut letters = 0
  while i < n && chars[i] >= 'A' && chars[i] <= 'Z' {
    col = col * 26 + (chars[i].to_int() - 'A'.to_int() + 1)
    i = i + 1
    letters = letters + 1
  }
  if letters == 0 {
    return None
  }
  if i < n && chars[i] == '$' {
    i = i + 1
  }
  let mut row = 0
  let mut digits = 0
  while i < n && chars[i] >= '0' && chars[i] <= '9' {
    row = row * 10 + (chars[i].to_int() - '0'.to_int())
    i = i + 1
    digits = digits + 1
  }
  if digits == 0 || i != n || row < 1 || col < 1 {
    return None
  }
  Some({ row: row - 1, col: col - 1, })
}

///|
/// A rectangular range with inclusive bounds. Bounds are normalized so
/// `B2:A1` and `A1:B2` describe the same range.
pub struct Range {
  start : Address
  end : Address
} derive(Eq, Debug)

///|
pub extend Range with Eq::{not_equal, equal}

///|
pub extend Range with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub fn Range::new(a : Address, b : Address) -> Range {
  let row_start = if a.row <= b.row { a.row } else { b.row }
  let row_end = if a.row <= b.row { b.row } else { a.row }
  let col_start = if a.col <= b.col { a.col } else { b.col }
  let col_end = if a.col <= b.col { b.col } else { a.col }
  {
    start: { row: row_start, col: col_start, },
    end: { row: row_end, col: col_end, },
  }
}

///|
/// Parse `A1` or `A1:B2` into a normalized range.
pub fn Range::parse(text : String) -> Range? {
  let parts = text.trim().split(":").to_array()
  if parts.length() == 1 {
    match Address::parse(parts[0].to_owned()) {
      Some(addr) => Some(Range::new(addr, addr))
      None => None
    }
  } else if parts.length() == 2 {
    match
      (Address::parse(parts[0].to_owned()), Address::parse(parts[1].to_owned())) {
      (Some(a), Some(b)) => Some(Range::new(a, b))
      _ => None
    }
  } else {
    None
  }
}
