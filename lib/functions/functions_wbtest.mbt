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

///|
test "trigonometric and angle conversion" {
  assert_eq(invoke("SIN", [n(0.0)]), n(0.0))
  assert_eq(invoke("COS", [n(0.0)]), n(1.0))
  assert_true(close(invoke("RADIANS", [n(180.0)]), 3.141592653589793))
  assert_true(close(invoke("DEGREES", [n(3.141592653589793)]), 180.0))
  assert_true(close(invoke("ATAN2", [n(1.0), n(1.0)]), 0.7853981633974483))
}

///|
test "factorial and quotient" {
  assert_eq(invoke("FACT", [n(5.0)]), n(120.0))
  assert_eq(invoke("FACT", [n(0.0)]), n(1.0))
  assert_eq(
    invoke("FACT", [n(-1.0)]),
    @types.Value::Error(@types.CellError::Num),
  )
  assert_eq(invoke("QUOTIENT", [n(7.0), n(2.0)]), n(3.0))
  assert_eq(invoke("QUOTIENT", [n(-7.0), n(2.0)]), n(-3.0))
  assert_eq(
    invoke("QUOTIENT", [n(1.0), n(0.0)]),
    @types.Value::Error(@types.CellError::DivZero),
  )
}

///|
test "geomean rejects non-positive values" {
  assert_true(close(invoke("GEOMEAN", [n(1.0), n(4.0)]), 2.0))
  assert_eq(
    invoke("GEOMEAN", [n(1.0), n(0.0)]),
    @types.Value::Error(@types.CellError::Num),
  )
}

///|
test "exact compares case-sensitively" {
  assert_eq(invoke("EXACT", [t("a"), t("a")]), @types.Value::Boolean(true))
  assert_eq(invoke("EXACT", [t("a"), t("A")]), @types.Value::Boolean(false))
}

///|
test "proper capitalises each word" {
  assert_eq(invoke("PROPER", [t("hello wORLD")]), t("Hello World"))
}

///|
fn close(value : @types.Value, expected : Double) -> Bool {
  match value {
    @types.Value::Number(actual) => {
      let diff = if actual > expected {
        actual - expected
      } else {
        expected - actual
      }
      diff < 0.000000001
    }
    _ => false
  }
}
