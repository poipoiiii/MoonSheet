/// White-box tests for the core value types.

///|
test "address round-trips A1" {
  let a = Address::new(0, 0)
  assert_eq(a.to_a1(), "A1")
  assert_eq(Address::parse("A1"), Some(a))
  assert_eq(Address::new(9, 25).to_a1(), "Z10")
  assert_eq(Address::new(0, 26).to_a1(), "AA1")
  assert_eq(Address::parse("$B$2"), Some(Address::new(1, 1)))
}

///|
test "address rejects malformed input" {
  assert_eq(Address::parse(""), None)
  assert_eq(Address::parse("1A"), None)
  assert_eq(Address::parse("A0"), None)
  assert_eq(Address::parse("A"), None)
}

///|
test "range normalizes bounds" {
  let range = Range::new(Address::new(2, 2), Address::new(0, 0))
  assert_eq(range.start, Address::new(0, 0))
  assert_eq(range.end, Address::new(2, 2))
}

///|
test "cell error codes" {
  assert_eq(CellError::DivZero.code(), "#DIV/0!")
  assert_eq(CellError::Name.code(), "#NAME?")
}

///|
test "value display" {
  assert_eq(Value::Number(3.0).to_display(), "3")
  assert_eq(Value::Boolean(true).to_display(), "TRUE")
  assert_eq(Value::Blank.to_display(), "")
}
