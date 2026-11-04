/// Number formatting for display. Values stay raw in the calculation core;
/// formatting is applied only when rendering a cell or exporting for humans.

///|
fn group_digits(text : String) -> String {
  let chars = text.to_array()
  let mut out = ""
  let mut i = 0
  while i < chars.length() {
    if i > 0 && (chars.length() - i) % 3 == 0 {
      out = out + ","
    }
    out = out + chars[i].to_string()
    i = i + 1
  }
  out
}

///|
fn format_number(n : Double, decimals : Int32, grouping : Bool) -> String {
  let digits = if decimals < 0 {
    0
  } else if decimals > 8 {
    8
  } else {
    decimals
  }
  let factor_double = @math.pow(10.0, Double::from_int(digits))
  let scaled = (n.abs() * factor_double).round().to_int64()
  let mut factor : Int64 = Int64::from_int(1)
  let mut step = 0
  while step < digits {
    factor = factor * Int64::from_int(10)
    step = step + 1
  }
  let integer = scaled / factor
  let fraction = (scaled % factor).to_int()
  let integer_text = integer.to_string()
  let mut out = if grouping { group_digits(integer_text) } else { integer_text }
  if digits > 0 {
    let fraction_text = fraction.to_string()
    let mut zeros = ""
    let mut width = fraction_text.char_length()
    while width < digits {
      zeros = zeros + "0"
      width = width + 1
    }
    out = out + "." + zeros + fraction_text
  }
  if n < 0.0 && (integer != 0 || fraction != 0) {
    "-" + out
  } else {
    out
  }
}

///|
pub fn format_value(value : @types.Value, format : @types.CellFormat) -> String {
  match format {
    @types.CellFormat::General => value.to_display()
    @types.CellFormat::Number(decimals) =>
      match value {
        @types.Value::Number(n) => format_number(n, decimals, true)
        _ => value.to_display()
      }
    @types.CellFormat::Currency(symbol, decimals) =>
      match value {
        @types.Value::Number(n) => symbol + format_number(n, decimals, true)
        _ => value.to_display()
      }
    @types.CellFormat::Percent(decimals) =>
      match value {
        @types.Value::Number(n) =>
          format_number(n * 100.0, decimals, false) + "%"
        _ => value.to_display()
      }
  }
}
