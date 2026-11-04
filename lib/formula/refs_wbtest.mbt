/// White-box tests for reference collection.

///|
test "collects direct and nested references" {
  let expr = match parse_formula("=SUM(A1:B2, C3)") {
    Ok(expr) => expr
    Err(_) => {
      assert_true(false)
      return
    }
  }
  let refs = references(expr)
  assert_eq(refs.length(), 5)
  assert_eq(refs[0], @types.Address::new(0, 0))
  assert_eq(refs[4], @types.Address::new(2, 2))
}
