///|
fn parsed(text : String) -> Expr {
  match parse_formula(text) {
    Ok(expr) => expr
    Err(_) => abort("unexpected parse error")
  }
}

///|
test "printer keeps minimal parentheses" {
  assert_eq(to_formula(parsed("=1+2*3")), "=1+2*3")
  assert_eq(to_formula(parsed("=(1+2)*3")), "=(1+2)*3")
  assert_eq(to_formula(parsed("=1-(2-3)")), "=1-(2-3)")
  assert_eq(to_formula(parsed("=(1-2)-3")), "=1-2-3")
  assert_eq(to_formula(parsed("=-(1+2)")), "=-(1+2)")
}

///|
test "printer preserves right-associative power" {
  assert_eq(to_formula(parsed("=2^3^2")), "=2^3^2")
  assert_eq(to_formula(parsed("=(2^3)^2")), "=(2^3)^2")
}

///|
test "printer renders references, ranges, and calls" {
  assert_eq(to_formula(parsed("=sum(a1:b2, C3)")), "=SUM(A1:B2,C3)")
  assert_eq(to_formula(parsed("=Budget!D8*2")), "=Budget!D8*2")
  assert_eq(to_formula(parsed("=SUM(Budget!A1:B2)")), "=SUM(Budget!A1:B2)")
  assert_eq(
    to_formula(parsed("=IF(A1>0,\"yes\",\"no\")")),
    "=IF(A1>0,\"yes\",\"no\")",
  )
}

///|
test "printer escapes embedded quotes" {
  assert_eq(to_formula(parsed("=\"a\"\"b\"")), "=\"a\"\"b\"")
}

///|
test "printed formulas parse back to the same tree" {
  let samples : Array[String] = [
    "=1+2*3-4/5", "=(1+2)*(3-4)", "=2^3^2", "=-A1+B2", "=SUM(A1:A3,10,-2)", "=IF(A1>=B1,\"big\",\"small\")",
    "=COUNTIF(C2:C4,\">1\")", "=Sheet1!A1+Sheet2!B2", "=ROUND(A1,2)", "=IFERROR(A1/B1,0)",
  ]
  for sample in samples {
    let once = parsed(sample)
    let printed = to_formula(once)
    let twice = parsed(printed)
    assert_eq(to_text(twice), to_text(once))
  }
}
