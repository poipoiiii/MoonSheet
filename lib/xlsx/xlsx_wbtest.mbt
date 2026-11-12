///|
test "xlsx round-trip preserves values, text, and formulas" {
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_value("A1", @types.Value::Number(10.0)))
  ignore(sheet.set_value("A2", @types.Value::Number(20.0)))
  ignore(sheet.set_formula("A3", "=SUM(A1:A2)"))
  ignore(sheet.set_value("B1", @types.Value::Text("hello")))
  ignore(sheet.set_value("C1", @types.Value::Boolean(true)))
  ignore(workbook.recalculate_all())
  match export_bytes(workbook) {
    Err(message) => {
      println(message)
      assert_true(false)
    }
    Ok(bytes) =>
      match import_bytes(bytes) {
        Err(message) => {
          println(message)
          assert_true(false)
        }
        Ok(loaded) => {
          let restored = loaded.sheet("Sheet1").unwrap()
          assert_eq(restored.get_value("A1"), @types.Value::Number(10.0))
          assert_eq(restored.get_value("B1"), @types.Value::Text("hello"))
          assert_eq(restored.get_value("C1"), @types.Value::Boolean(true))
          assert_eq(restored.get_formula("A3"), Some("=SUM(A1:A2)"))
          ignore(loaded.recalculate_all())
          assert_eq(restored.get_value("A3"), @types.Value::Number(30.0))
        }
      }
  }
}

///|
test "xlsx round-trip keeps worksheet names and order" {
  let workbook = @workbook.Workbook::new()
  let first = workbook.add_sheet("Assumptions")
  ignore(first.set_value("A1", @types.Value::Number(1.0)))
  let second = workbook.add_sheet("Report")
  ignore(second.set_formula("A1", "=Assumptions!A1*2"))
  ignore(workbook.recalculate_all())
  match export_bytes(workbook) {
    Err(message) => {
      println(message)
      assert_true(false)
    }
    Ok(bytes) =>
      match import_bytes(bytes) {
        Err(message) => {
          println(message)
          assert_true(false)
        }
        Ok(loaded) => {
          let names = loaded.names()
          assert_eq(names.length(), 2)
          assert_eq(names[0], "Assumptions")
          assert_eq(names[1], "Report")
          let report = loaded.sheet("Report").unwrap()
          assert_eq(report.get_formula("A1"), Some("=Assumptions!A1*2"))
          ignore(loaded.recalculate_all())
          assert_eq(report.get_value("A1"), @types.Value::Number(2.0))
        }
      }
  }
}
