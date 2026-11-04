/// White-box tests for CSV import.

///|
test "parse csv" {
  let rows = parse_csv("a,b\n1,2\n")
  assert_eq(rows.length(), 2)
  assert_eq(rows[0][0], "a")
  assert_eq(rows[1][1], "2")
}

///|
test "load csv into sheet" {
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  let count = load_csv(sheet, "10,20\n=A1+B1,30\n")
  assert_eq(count, 2)
  ignore(sheet.recalculate())
  assert_eq(sheet.get_value("A2"), @types.Value::Number(30.0))
  assert_eq(sheet.get_value("B2"), @types.Value::Number(30.0))
}

///|
test "csv export" {
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(load_csv(sheet, "10,20\n=A1+B1,30\n"))
  ignore(sheet.recalculate())
  assert_eq(export_csv_auto(sheet), "10,20\n30,30\n")
}

///|
test "json round trip" {
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_value("A1", @types.Value::Number(10.0)))
  ignore(sheet.set_formula("A2", "=A1*2"))
  ignore(sheet.recalculate())
  let text = export_json(workbook)
  match import_json(text) {
    Some(restored) =>
      match restored.sheet("Sheet1") {
        Some(restored_sheet) => {
          ignore(restored_sheet.recalculate())
          assert_eq(restored_sheet.get_value("A2"), @types.Value::Number(20.0))
        }
        None => assert_true(false)
      }
    None => assert_true(false)
  }
}
