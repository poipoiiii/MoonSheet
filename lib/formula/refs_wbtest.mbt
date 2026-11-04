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

///|
test "named ranges contribute references" {
  let expr = match parse_formula("=SUM(Sales)") {
    Ok(expr) => expr
    Err(_) => {
      assert_true(false)
      return
    }
  }
  let refs = references_with(expr, fn(name) {
    if name == "Sales" {
      Some(
        @types.Range::new(@types.Address::new(1, 1), @types.Address::new(3, 1)),
      )
    } else {
      None
    }
  })
  assert_eq(refs.length(), 3)
}
