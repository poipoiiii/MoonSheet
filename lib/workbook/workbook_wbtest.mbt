/// White-box tests for workbook recalculation.

///|
test "formula chain recalculates" {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  assert_true(sheet.set_value("A1", @types.Value::Number(10.0)))
  assert_true(sheet.set_formula("A2", "=A1*2"))
  assert_true(sheet.set_formula("A3", "=SUM(A1:A2)"))
  let passes = sheet.recalculate()
  assert_true(passes > 0)
  assert_eq(sheet.get_value("A2"), @types.Value::Number(20.0))
  assert_eq(sheet.get_value("A3"), @types.Value::Number(30.0))
}

///|
test "value edit triggers incremental recalculation" {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  assert_true(sheet.set_value("A1", @types.Value::Number(10.0)))
  assert_true(sheet.set_formula("A2", "=A1*2"))
  ignore(sheet.recalculate())
  assert_true(sheet.set_value("A1", @types.Value::Number(20.0)))
  ignore(sheet.recalculate())
  assert_eq(sheet.get_value("A2"), @types.Value::Number(40.0))
}

///|
test "cycles become circ errors" {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  assert_true(sheet.set_formula("A1", "=A2+1"))
  assert_true(sheet.set_formula("A2", "=A1+1"))
  ignore(sheet.recalculate())
  assert_eq(
    sheet.get_value("A1"),
    @types.Value::Error(@types.CellError::Circular),
  )
  assert_eq(
    sheet.get_value("A2"),
    @types.Value::Error(@types.CellError::Circular),
  )
}

///|
test "named ranges resolve in formulas" {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_value("B2", @types.Value::Number(10.0)))
  ignore(sheet.set_value("B3", @types.Value::Number(20.0)))
  ignore(sheet.set_value("B4", @types.Value::Number(30.0)))
  assert_true(sheet.define_name("Sales", "B2:B4"))
  assert_true(sheet.set_formula("B6", "=SUM(Sales)"))
  ignore(sheet.recalculate())
  assert_eq(sheet.get_value("B6"), @types.Value::Number(60.0))
  assert_eq(sheet.dependencies("B6").length(), 3)
}

///|
test "single-cell named range works as a scalar" {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_value("B1", @types.Value::Number(0.08)))
  ignore(sheet.set_value("B2", @types.Value::Number(100.0)))
  assert_true(sheet.define_name("TaxRate", "B1"))
  assert_true(sheet.set_formula("B3", "=B2*TaxRate"))
  ignore(sheet.recalculate())
  assert_eq(sheet.get_value("B3"), @types.Value::Number(8.0))
}

///|
test "invalid address is rejected" {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  assert_true(!sheet.set_value("nope", @types.Value::Blank))
  assert_eq(sheet.get_value("nope"), @types.Value::Error(@types.CellError::Ref))
}

///|
test "formula text is preserved" {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  assert_true(sheet.set_formula("B2", "=1+2"))
  assert_eq(sheet.get_formula("B2"), Some("=1+2"))
}
