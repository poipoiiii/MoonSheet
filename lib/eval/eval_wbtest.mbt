/// White-box tests for expression evaluation.

///|
fn empty_context() -> EvalContext {
  EvalContext::new(fn(_addr) { @types.Value::Blank }, fn(_range) { [] })
}

///|
test "arithmetic precedence" {
  assert_eq(eval_formula("=1+2*3", empty_context()), @types.Value::Number(7.0))
}

///|
test "divide by zero" {
  assert_eq(
    eval_formula("=1/0", empty_context()),
    @types.Value::Error(@types.CellError::DivZero),
  )
}

///|
test "sum function" {
  assert_eq(
    eval_formula("=SUM(1,2,3)", empty_context()),
    @types.Value::Number(6.0),
  )
}

///|
test "if only evaluates the chosen branch" {
  assert_eq(
    eval_formula("=IF(1>0,10,1/0)", empty_context()),
    @types.Value::Number(10.0),
  )
}

///|
test "unknown function" {
  assert_eq(
    eval_formula("=NOPE(1)", empty_context()),
    @types.Value::Error(@types.CellError::Name),
  )
}

///|
fn table_context(values : Array[@types.Value]) -> EvalContext {
  EvalContext::new(fn(_addr) { @types.Value::Blank }, fn(_range) { values })
}

///|
test "boolean literals" {
  assert_eq(
    eval_formula("=IF(TRUE,1,2)", empty_context()),
    @types.Value::Number(1.0),
  )
}

///|
test "countif and sumif" {
  let ctx = table_context([
    @types.Value::Number(10.0),
    @types.Value::Number(20.0),
    @types.Value::Number(30.0),
    @types.Value::Number(40.0),
  ])
  assert_eq(
    eval_formula("=COUNTIF(A1:A4,\">15\")", ctx),
    @types.Value::Number(3.0),
  )
  assert_eq(
    eval_formula("=SUMIF(A1:A4,\">15\")", ctx),
    @types.Value::Number(90.0),
  )
}

///|
test "index and match" {
  let ctx = table_context([
    @types.Value::Number(1.0),
    @types.Value::Text("a"),
    @types.Value::Number(2.0),
    @types.Value::Text("b"),
  ])
  assert_eq(eval_formula("=INDEX(A1:B2,2,1)", ctx), @types.Value::Number(2.0))
  assert_eq(
    eval_formula("=VLOOKUP(2,A1:B2,2,FALSE)", ctx),
    @types.Value::Text("b"),
  )
}
