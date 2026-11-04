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

///|
test "tracks sheet qualifiers for cross-sheet references" {
  let expr = match parse_formula("=SUM(Budget!A1:B2, C3)") {
    Ok(expr) => expr
    Err(_) => {
      assert_true(false)
      return
    }
  }
  let refs = references_across(expr, fn(_name) { None })
  assert_eq(refs.length(), 5)
  match refs[0] {
    (Some(sheet), addr) => {
      assert_eq(sheet, "Budget")
      assert_eq(addr, @types.Address::new(0, 0))
    }
    _ => assert_true(false)
  }
  match refs[4] {
    (None, addr) => assert_eq(addr, @types.Address::new(2, 2))
    _ => assert_true(false)
  }
}
