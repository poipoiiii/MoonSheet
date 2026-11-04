/// White-box tests for number formatting.

///|
test "number formatting with grouping and decimals" {
  assert_eq(
    format_value(@types.Value::Number(1234.5), @types.CellFormat::Number(2)),
    "1,234.50",
  )
  assert_eq(
    format_value(@types.Value::Number(-1234.5), @types.CellFormat::Number(2)),
    "-1,234.50",
  )
  assert_eq(
    format_value(@types.Value::Number(0.0), @types.CellFormat::Number(2)),
    "0.00",
  )
}

///|
test "currency and percent formatting" {
  assert_eq(
    format_value(
      @types.Value::Number(1234.5),
      @types.CellFormat::Currency("¥", 2),
    ),
    "¥1,234.50",
  )
  assert_eq(
    format_value(@types.Value::Number(0.125), @types.CellFormat::Percent(1)),
    "12.5%",
  )
}

///|
test "non-numeric values fall back to display" {
  assert_eq(
    format_value(@types.Value::Text("moon"), @types.CellFormat::Number(2)),
    "moon",
  )
}
