///|
test "concat joins text operands" {
  let ctx = EvalContext::new(fn(_addr) { @types.Value::Blank }, fn(_range) {
    ([] : Array[@types.Value])
  })
  let expr = match @formula.parse_formula("=\"a\"&\"b\"") {
    Ok(expr) => expr
    Err(_) => abort("parse failed")
  }
  assert_eq(eval(expr, ctx), @types.Value::Text("ab"))
}

///|
test "concat renders numbers and blank cells as text" {
  let ctx = EvalContext::new(
    fn(addr) {
      if addr.key() == 0 {
        @types.Value::Number(12.0)
      } else {
        @types.Value::Blank
      }
    },
    fn(_range) { ([] : Array[@types.Value]) },
  )
  let expr = match @formula.parse_formula("=A1&\"-\"&B1") {
    Ok(expr) => expr
    Err(_) => abort("parse failed")
  }
  assert_eq(eval(expr, ctx), @types.Value::Text("12-"))
}
