///|
test "concat operator parses with its own precedence level" {
  assert_eq(to_formula(parsed("=\"a\"&\"b\"")), "=\"a\"&\"b\"")
  assert_eq(to_formula(parsed("=1+2&3+4")), "=1+2&3+4")
  assert_eq(to_formula(parsed("=1+2&(3+4)")), "=1+2&3+4")
  assert_eq(to_formula(parsed("=(1+2)&(3+4)")), "=1+2&3+4")
  assert_eq(to_formula(parsed("=\"a\"&1*2")), "=\"a\"&1*2")
  assert_eq(to_formula(parsed("=\"a\"&(1*2)")), "=\"a\"&1*2")
}

///|
test "concat binds tighter than comparison" {
  assert_eq(to_formula(parsed("=A1&B1=\"ab\"")), "=A1&B1=\"ab\"")
  assert_eq(to_formula(parsed("=(A1&B1)=\"ab\"")), "=A1&B1=\"ab\"")
  assert_eq(to_formula(parsed("=A1&(B1=\"ab\")")), "=A1&(B1=\"ab\")")
}

///|
test "concat with unary operand keeps parentheses" {
  assert_eq(to_formula(parsed("=1&(-2)")), "=1&-2")
}
