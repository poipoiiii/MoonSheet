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
test "number formats persist through value edits" {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_value("A1", @types.Value::Number(1234.5)))
  assert_true(sheet.set_format("A1", @types.CellFormat::Number(2)))
  assert_eq(sheet.display_value("A1"), "1,234.50")
  ignore(sheet.set_value("A1", @types.Value::Number(2000.0)))
  assert_eq(sheet.display_value("A1"), "2,000.00")
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

///|
test "cross-sheet references read other sheets" {
  let workbook = Workbook::new()
  let budget = workbook.add_sheet("Budget")
  ignore(budget.set_value("D2", @types.Value::Number(100.0)))
  ignore(budget.set_value("D3", @types.Value::Number(250.0)))
  ignore(budget.set_formula("D8", "=SUM(D2:D3)"))
  let summary = workbook.add_sheet("Summary")
  ignore(summary.set_formula("B1", "=Budget!D8*2"))
  ignore(summary.set_formula("B2", "=SUM(Budget!D2:D3)"))
  ignore(workbook.recalculate_all())
  assert_eq(budget.get_value("D8"), @types.Value::Number(350.0))
  assert_eq(summary.get_value("B1"), @types.Value::Number(700.0))
  assert_eq(summary.get_value("B2"), @types.Value::Number(350.0))
  let deps = summary.dependencies("B1")
  assert_eq(deps.length(), 1)
  assert_eq(deps[0], "Budget!D8")
}

///|
test "cross-sheet edits propagate downstream" {
  let workbook = Workbook::new()
  let budget = workbook.add_sheet("Budget")
  ignore(budget.set_value("A1", @types.Value::Number(10.0)))
  let summary = workbook.add_sheet("Summary")
  ignore(summary.set_formula("A1", "=Budget!A1+1"))
  ignore(workbook.recalculate_all())
  assert_eq(summary.get_value("A1"), @types.Value::Number(11.0))
  ignore(budget.set_value("A1", @types.Value::Number(40.0)))
  ignore(workbook.recalculate_all())
  assert_eq(summary.get_value("A1"), @types.Value::Number(41.0))
}

///|
test "sheet names are case insensitive" {
  let workbook = Workbook::new()
  let data = workbook.add_sheet("Data")
  ignore(data.set_value("A1", @types.Value::Number(5.0)))
  let report = workbook.add_sheet("Report")
  ignore(report.set_formula("A1", "=data!A1*3"))
  ignore(workbook.recalculate_all())
  assert_eq(report.get_value("A1"), @types.Value::Number(15.0))
}

///|
test "missing sheet becomes ref error" {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_formula("A1", "=Ghost!A1"))
  ignore(sheet.set_formula("A2", "=SUM(Ghost!A1:A2)"))
  ignore(workbook.recalculate_all())
  assert_eq(sheet.get_value("A1"), @types.Value::Error(@types.CellError::Ref))
  assert_eq(sheet.get_value("A2"), @types.Value::Error(@types.CellError::Ref))
}

///|
test "cross-sheet cycles become circ errors" {
  let workbook = Workbook::new()
  let first = workbook.add_sheet("First")
  let second = workbook.add_sheet("Second")
  ignore(first.set_formula("A1", "=Second!A1+1"))
  ignore(second.set_formula("A1", "=First!A1+1"))
  ignore(workbook.recalculate_all())
  assert_eq(
    first.get_value("A1"),
    @types.Value::Error(@types.CellError::Circular),
  )
  assert_eq(
    second.get_value("A1"),
    @types.Value::Error(@types.CellError::Circular),
  )
}

///|
test "cross-sheet edit only recalculates affected cells" {
  let workbook = Workbook::new()
  let data = workbook.add_sheet("Data")
  let report = workbook.add_sheet("Report")
  let mut row = 1
  while row <= 5 {
    ignore(data.set_value("A\{row}", @types.Value::Number(1.0)))
    ignore(report.set_formula("B\{row}", "=Data!A\{row}*2"))
    row = row + 1
  }
  assert_eq(workbook.recalculate_all(), 5)
  ignore(data.set_value("A3", @types.Value::Number(4.0)))
  assert_eq(workbook.recalculate_all(), 1)
  assert_eq(report.get_value("B3"), @types.Value::Number(8.0))
  assert_eq(report.get_value("B4"), @types.Value::Number(2.0))
}

///|
test "unrelated sheet edit does not touch dependents" {
  let workbook = Workbook::new()
  let data = workbook.add_sheet("Data")
  let report = workbook.add_sheet("Report")
  ignore(data.set_value("A1", @types.Value::Number(1.0)))
  ignore(data.set_value("B1", @types.Value::Number(2.0)))
  ignore(report.set_formula("A1", "=Data!A1*3"))
  assert_eq(workbook.recalculate_all(), 1)
  ignore(data.set_value("B1", @types.Value::Number(9.0)))
  assert_eq(workbook.recalculate_all(), 0)
  assert_eq(report.get_value("A1"), @types.Value::Number(3.0))
}

///|
test "sheet order is preserved for tabs" {
  let workbook = Workbook::new()
  ignore(workbook.add_sheet("Budget"))
  ignore(workbook.add_sheet("Summary"))
  let names = workbook.names()
  assert_eq(names.length(), 2)
  assert_eq(names[0], "Budget")
  assert_eq(names[1], "Summary")
}

///|
test "self-sheet references behave like local references" {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_value("A1", @types.Value::Number(4.0)))
  ignore(sheet.set_formula("A2", "=Sheet1!A1*2"))
  ignore(workbook.recalculate_all())
  assert_eq(sheet.get_value("A2"), @types.Value::Number(8.0))
  ignore(sheet.set_value("A1", @types.Value::Number(5.0)))
  ignore(workbook.recalculate_all())
  assert_eq(sheet.get_value("A2"), @types.Value::Number(10.0))
}

///|
test "self-sheet reference cycle is detected" {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_formula("B1", "=Sheet1!B1"))
  ignore(workbook.recalculate_all())
  assert_eq(
    sheet.get_value("B1"),
    @types.Value::Error(@types.CellError::Circular),
  )
}
