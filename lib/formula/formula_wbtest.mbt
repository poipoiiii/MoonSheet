/// White-box tests for the formula parser.

///|
test "parses arithmetic precedence" {
  assert_true(parse("1+2*3") is Ok(_))
}

///|
test "parses formula with leading equals" {
  assert_true(parse_formula("=SUM(A1:A3)") is Ok(_))
}

///|
test "rejects trailing operator" {
  assert_true(parse("1+") is Err(_))
}

///|
test "parses range" {
  match parse("A1:B2") {
    Ok(Expr::Range(range)) => {
      assert_eq(range.start, @types.Address::new(0, 0))
      assert_eq(range.end, @types.Address::new(1, 1))
    }
    _ => assert_true(false)
  }
}

///|
test "parses function call" {
  match parse("sum(1, 2, 3)") {
    Ok(Expr::Call(name, args)) => {
      assert_eq(name, "SUM")
      assert_eq(args.length(), 3)
    }
    _ => assert_true(false)
  }
}

///|
test "parses cross-sheet reference" {
  match parse("Budget!D8") {
    Ok(Expr::SheetRef(sheet, addr)) => {
      assert_eq(sheet, "Budget")
      assert_eq(addr, @types.Address::new(7, 3))
    }
    _ => assert_true(false)
  }
}

///|
test "parses cross-sheet range in a call" {
  match parse("SUM(Budget!A1:B2)") {
    Ok(Expr::Call(name, args)) => {
      assert_eq(name, "SUM")
      assert_eq(args.length(), 1)
      match args[0] {
        Expr::SheetRange(sheet, range) => {
          assert_eq(sheet, "Budget")
          assert_eq(range.start, @types.Address::new(0, 0))
          assert_eq(range.end, @types.Address::new(1, 1))
        }
        _ => assert_true(false)
      }
    }
    _ => assert_true(false)
  }
}

///|
test "rejects incomplete cross-sheet reference" {
  assert_true(parse("Budget!") is Err(_))
  assert_true(parse("Budget!A1:") is Err(_))
}
