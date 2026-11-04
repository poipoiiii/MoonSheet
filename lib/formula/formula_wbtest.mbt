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
