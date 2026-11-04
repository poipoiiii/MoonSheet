/// White-box tests for the built-in function registry.

///|
fn n(value : Double) -> @types.Value {
  @types.Value::Number(value)
}

///|
fn t(value : String) -> @types.Value {
  @types.Value::Text(value)
}

///|
fn invoke(name : String, args : Array[@types.Value]) -> @types.Value {
  match call(name, args) {
    Some(value) => value
    None => @types.Value::Error(@types.CellError::Name)
  }
}

///|
test "sum and average" {
  assert_eq(invoke("SUM", [n(1.0), n(2.0), n(3.0)]), n(6.0))
  assert_eq(invoke("AVERAGE", [n(2.0), n(4.0)]), n(3.0))
}

///|
test "round and mod" {
  assert_eq(invoke("ROUND", [n(3.14159), n(2.0)]), n(3.14))
  assert_eq(invoke("MOD", [n(-3.0), n(2.0)]), n(1.0))
}

///|
test "text functions" {
  assert_eq(invoke("LEFT", [t("hello"), n(2.0)]), t("he"))
  assert_eq(invoke("MID", [t("hello"), n(2.0), n(3.0)]), t("ell"))
  assert_eq(invoke("UPPER", [t("moon")]), t("MOON"))
  assert_eq(invoke("SUBSTITUTE", [t("a-b-c"), t("-"), t("/")]), t("a/b/c"))
}

///|
test "date round-trips" {
  let serial = invoke("DATE", [n(2024.0), n(1.0), n(15.0)])
  assert_eq(invoke("YEAR", [serial]), n(2024.0))
  assert_eq(invoke("MONTH", [serial]), n(1.0))
  assert_eq(invoke("DAY", [serial]), n(15.0))
}

///|
test "median and large" {
  assert_eq(invoke("MEDIAN", [n(3.0), n(1.0), n(2.0)]), n(2.0))
  assert_eq(invoke("LARGE", [n(1.0), n(9.0), n(4.0), n(2.0), n(1.0)]), n(9.0))
}
