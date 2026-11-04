/// Expression evaluation.
///
/// `lib/eval` only knows how to turn an AST plus a context into a value. It
/// does not own a workbook; references and ranges are resolved through the
/// callbacks in `EvalContext`, which keeps the evaluator testable and avoids a
/// dependency cycle with `lib/workbook`.

///|
pub struct EvalContext {
  get_value : (@types.Address) -> @types.Value
  get_range : (@types.Range) -> Array[@types.Value]
  get_named_range : (String) -> @types.Range?
}

///|
pub fn EvalContext::new(
  get_value : (@types.Address) -> @types.Value,
  get_range : (@types.Range) -> Array[@types.Value],
) -> EvalContext {
  { get_value, get_range, get_named_range: fn(_name) { None }, }
}

///|
pub fn EvalContext::with_names(
  get_value : (@types.Address) -> @types.Value,
  get_range : (@types.Range) -> Array[@types.Value],
  get_named_range : (String) -> @types.Range?,
) -> EvalContext {
  { get_value, get_range, get_named_range, }
}

///|
fn upper_string(s : String) -> String {
  let mut out = ""
  for c in s.to_array() {
    out = out + c.to_ascii_uppercase().to_string()
  }
  out
}

///|
fn as_number(value : @types.Value) -> Double? {
  match value {
    @types.Value::Number(n) => Some(n)
    @types.Value::Boolean(b) => Some(if b { 1.0 } else { 0.0 })
    @types.Value::Blank => Some(0.0)
    _ => None
  }
}

///|
pub fn eval(expr : @formula.Expr, ctx : EvalContext) -> @types.Value {
  match expr {
    @formula.Expr::Number(n) => @types.Value::Number(n)
    @formula.Expr::Text(s) => @types.Value::Text(s)
    @formula.Expr::Boolean(b) => @types.Value::Boolean(b)
    @formula.Expr::Error(e) => @types.Value::Error(e)
    @formula.Expr::Ref(addr) => (ctx.get_value)(addr)
    @formula.Expr::Range(_) => @types.Value::Error(@types.CellError::ValueErr)
    @formula.Expr::Name(name) =>
      match (ctx.get_named_range)(upper_string(name)) {
        Some(range) =>
          if range.start == range.end {
            (ctx.get_value)(range.start)
          } else {
            @types.Value::Error(@types.CellError::ValueErr)
          }
        None => @types.Value::Error(@types.CellError::Name)
      }
    @formula.Expr::Unary(op, inner) => {
      let value = eval(inner, ctx)
      match (op, value) {
        (@formula.UnaryOp::Neg, @types.Value::Number(n)) =>
          @types.Value::Number(-n)
        (@formula.UnaryOp::Plus, @types.Value::Number(n)) =>
          @types.Value::Number(n)
        (_, @types.Value::Error(e)) => @types.Value::Error(e)
        _ => @types.Value::Error(@types.CellError::ValueErr)
      }
    }
    @formula.Expr::Binary(op, left, right) => eval_binary(op, left, right, ctx)
    @formula.Expr::Call(name, args) => eval_call(name, args, ctx)
  }
}

///|
fn eval_binary(
  op : @formula.BinaryOp,
  left : @formula.Expr,
  right : @formula.Expr,
  ctx : EvalContext,
) -> @types.Value {
  let l = eval(left, ctx)
  let r = eval(right, ctx)
  match (l, r) {
    (@types.Value::Error(e), _) => @types.Value::Error(e)
    (_, @types.Value::Error(e)) => @types.Value::Error(e)
    (@types.Value::Text(a), @types.Value::Text(b)) =>
      match op {
        @formula.BinaryOp::Eq => @types.Value::Boolean(a == b)
        @formula.BinaryOp::Ne => @types.Value::Boolean(a != b)
        @formula.BinaryOp::Concat => @types.Value::Text(a + b)
        _ => @types.Value::Error(@types.CellError::ValueErr)
      }
    _ =>
      match (as_number(l), as_number(r)) {
        (Some(a), Some(b)) =>
          match op {
            @formula.BinaryOp::Add => @types.Value::Number(a + b)
            @formula.BinaryOp::Sub => @types.Value::Number(a - b)
            @formula.BinaryOp::Mul => @types.Value::Number(a * b)
            @formula.BinaryOp::Div =>
              if b == 0.0 {
                @types.Value::Error(@types.CellError::DivZero)
              } else {
                @types.Value::Number(a / b)
              }
            @formula.BinaryOp::Pow => @types.Value::Number(@math.pow(a, b))
            @formula.BinaryOp::Eq => @types.Value::Boolean(a == b)
            @formula.BinaryOp::Ne => @types.Value::Boolean(a != b)
            @formula.BinaryOp::Lt => @types.Value::Boolean(a < b)
            @formula.BinaryOp::Le => @types.Value::Boolean(a <= b)
            @formula.BinaryOp::Gt => @types.Value::Boolean(a > b)
            @formula.BinaryOp::Ge => @types.Value::Boolean(a >= b)
            @formula.BinaryOp::Concat =>
              @types.Value::Text(l.to_display() + r.to_display())
          }
        _ => @types.Value::Error(@types.CellError::ValueErr)
      }
  }
}

///|
fn eval_call(
  name : String,
  args : Array[@formula.Expr],
  ctx : EvalContext,
) -> @types.Value {
  let upper = upper_string(name)
  if upper == "IF" {
    if args.length() < 2 {
      return @types.Value::Error(@types.CellError::ValueErr)
    }
    let cond = eval(args[0], ctx)
    let truthy = match cond {
      @types.Value::Boolean(b) => b
      @types.Value::Number(n) => n != 0.0
      @types.Value::Blank => false
      @types.Value::Error(e) => return @types.Value::Error(e)
      _ => return @types.Value::Error(@types.CellError::ValueErr)
    }
    if truthy {
      eval(args[1], ctx)
    } else if args.length() >= 3 {
      eval(args[2], ctx)
    } else {
      @types.Value::Boolean(false)
    }
  } else if upper == "IFERROR" {
    if args.length() < 2 {
      return @types.Value::Error(@types.CellError::ValueErr)
    }
    let first = eval(args[0], ctx)
    match first {
      @types.Value::Error(_) => eval(args[1], ctx)
      _ => first
    }
  } else if upper == "COUNTIF" {
    eval_countif(args, ctx)
  } else if upper == "SUMIF" {
    eval_sumif(args, ctx, false)
  } else if upper == "AVERAGEIF" {
    eval_sumif(args, ctx, true)
  } else if upper == "INDEX" {
    eval_index(args, ctx)
  } else if upper == "MATCH" {
    eval_match(args, ctx)
  } else if upper == "VLOOKUP" {
    eval_vlookup(args, ctx)
  } else {
    let values : Array[@types.Value] = []
    for arg in args {
      match arg {
        @formula.Expr::Range(range) => {
          let items = (ctx.get_range)(range)
          for item in items {
            values.push(item)
          }
        }
        @formula.Expr::Name(name) =>
          match (ctx.get_named_range)(upper_string(name)) {
            Some(range) => {
              let items = (ctx.get_range)(range)
              for item in items {
                values.push(item)
              }
            }
            None => values.push(@types.Value::Error(@types.CellError::Name))
          }
        _ => values.push(eval(arg, ctx))
      }
    }
    match @functions.call(upper, values) {
      Some(value) => value
      None => @types.Value::Error(@types.CellError::Name)
    }
  }
}

///|
/// Parse and evaluate a formula. Parse failures are reported as `#VALUE!` for
/// now; a dedicated parse error code arrives with the diagnostics milestone.
pub fn eval_formula(formula : String, ctx : EvalContext) -> @types.Value {
  match @formula.parse_formula(formula) {
    Ok(expr) => eval(expr, ctx)
    Err(_) => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn as_int(value : @types.Value) -> Int32? {
  match as_number(value) {
    Some(n) => Some(n.to_int())
    None => None
  }
}

///|
fn as_bool(value : @types.Value) -> Bool? {
  match value {
    @types.Value::Boolean(b) => Some(b)
    @types.Value::Number(n) => Some(n != 0.0)
    @types.Value::Blank => Some(false)
    _ => None
  }
}

///|
fn rest_from(text : String, start : Int32) -> String {
  let mut out = ""
  let mut i = start
  while i < text.char_length() {
    match text.get_char(i) {
      Some(c) => out = out + c.to_string()
      None => ()
    }
    i = i + 1
  }
  out
}

///|
fn split_criteria(text : String) -> (String, String) {
  let n = text.char_length()
  if n >= 2 {
    let c0 = match text.get_char(0) {
      Some(c) => c
      None => ' '
    }
    let c1 = match text.get_char(1) {
      Some(c) => c
      None => ' '
    }
    if (c0 == '>' || c0 == '<') && c1 == '=' {
      return (c0.to_string() + "=", rest_from(text, 2))
    }
    if c0 == '<' && c1 == '>' {
      return ("<>", rest_from(text, 2))
    }
  }
  if n >= 1 {
    let c0 = match text.get_char(0) {
      Some(c) => c
      None => ' '
    }
    if c0 == '>' || c0 == '<' || c0 == '=' {
      return (c0.to_string(), rest_from(text, 1))
    }
  }
  ("=", text)
}

///|
fn compare_order(cmp : Int32, op : String) -> Bool {
  if op == "=" {
    cmp == 0
  } else if op == "<>" {
    cmp != 0
  } else if op == ">" {
    cmp > 0
  } else if op == "<" {
    cmp < 0
  } else if op == ">=" {
    cmp >= 0
  } else if op == "<=" {
    cmp <= 0
  } else {
    cmp == 0
  }
}

///|
fn compare_criteria(value : @types.Value, op : String, target : String) -> Bool {
  let target_number = Some(@string.parse_double(target)) catch { _ => None }
  match (as_number(value), target_number) {
    (Some(v), Some(t)) => {
      let cmp : Int32 = if v < t { -1 } else if v > t { 1 } else { 0 }
      compare_order(cmp, op)
    }
    _ => {
      let left = upper_string(value.to_display())
      let right = upper_string(target)
      compare_order(left.compare(right), op)
    }
  }
}

///|
fn criteria_matches(value : @types.Value, criteria : @types.Value) -> Bool {
  match criteria {
    @types.Value::Text(s) => {
      let (op, target) = split_criteria(s)
      compare_criteria(value, op, target)
    }
    @types.Value::Number(n) =>
      match as_number(value) {
        Some(v) => v == n
        None => false
      }
    @types.Value::Boolean(b) =>
      match as_bool(value) {
        Some(v) => v == b
        None => false
      }
    @types.Value::Blank =>
      match value {
        @types.Value::Blank => true
        _ => false
      }
    @types.Value::Date(d) =>
      match as_number(value) {
        Some(v) => v == Double::from_int(d)
        None => false
      }
    @types.Value::Error(_) => false
  }
}

///|
fn range_arg_from(
  range : @types.Range,
  ctx : EvalContext,
) -> (Array[@types.Value], Int32, Int32) {
  let values = (ctx.get_range)(range)
  let rows = range.end.row - range.start.row + 1
  let cols = range.end.col - range.start.col + 1
  (values, rows, cols)
}

///|
fn range_arg(
  arg : @formula.Expr,
  ctx : EvalContext,
) -> (Array[@types.Value], Int32, Int32)? {
  match arg {
    @formula.Expr::Range(range) => Some(range_arg_from(range, ctx))
    @formula.Expr::Name(name) =>
      match (ctx.get_named_range)(upper_string(name)) {
        Some(range) => Some(range_arg_from(range, ctx))
        None => None
      }
    _ => None
  }
}

///|
fn eval_countif(args : Array[@formula.Expr], ctx : EvalContext) -> @types.Value {
  if args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match range_arg(args[0], ctx) {
    Some((values, _, _)) => {
      let criteria = eval(args[1], ctx)
      match criteria {
        @types.Value::Error(e) => @types.Value::Error(e)
        _ => {
          let mut total = 0
          for value in values {
            if criteria_matches(value, criteria) {
              total = total + 1
            }
          }
          @types.Value::Number(Double::from_int(total))
        }
      }
    }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn eval_sumif(
  args : Array[@formula.Expr],
  ctx : EvalContext,
  average : Bool,
) -> @types.Value {
  if args.length() != 2 && args.length() != 3 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match range_arg(args[0], ctx) {
    Some((range_values, _, _)) => {
      let sum_values = if args.length() == 3 {
        match range_arg(args[2], ctx) {
          Some((values, _, _)) => values
          None => return @types.Value::Error(@types.CellError::ValueErr)
        }
      } else {
        range_values
      }
      let criteria = eval(args[1], ctx)
      match criteria {
        @types.Value::Error(e) => @types.Value::Error(e)
        _ => {
          let mut total = 0.0
          let mut count = 0
          let mut i = 0
          while i < range_values.length() && i < sum_values.length() {
            if criteria_matches(range_values[i], criteria) {
              match as_number(sum_values[i]) {
                Some(n) => {
                  total = total + n
                  count = count + 1
                }
                None => ()
              }
            }
            i = i + 1
          }
          if average {
            if count == 0 {
              @types.Value::Error(@types.CellError::DivZero)
            } else {
              @types.Value::Number(total / Double::from_int(count))
            }
          } else {
            @types.Value::Number(total)
          }
        }
      }
    }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn eval_index(args : Array[@formula.Expr], ctx : EvalContext) -> @types.Value {
  if args.length() < 2 || args.length() > 3 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match range_arg(args[0], ctx) {
    Some((values, rows, cols)) => {
      let row = match as_int(eval(args[1], ctx)) {
        Some(n) => n
        None => return @types.Value::Error(@types.CellError::ValueErr)
      }
      if args.length() == 2 {
        if cols == 1 {
          if row < 1 || row > rows {
            @types.Value::Error(@types.CellError::Ref)
          } else {
            values[row - 1]
          }
        } else if rows == 1 {
          if row < 1 || row > cols {
            @types.Value::Error(@types.CellError::Ref)
          } else {
            values[row - 1]
          }
        } else {
          @types.Value::Error(@types.CellError::ValueErr)
        }
      } else {
        let col = match as_int(eval(args[2], ctx)) {
          Some(n) => n
          None => return @types.Value::Error(@types.CellError::ValueErr)
        }
        if row < 1 || row > rows || col < 1 || col > cols {
          @types.Value::Error(@types.CellError::Ref)
        } else {
          values[(row - 1) * cols + (col - 1)]
        }
      }
    }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn value_equal(left : @types.Value, right : @types.Value) -> Bool {
  match (as_number(left), as_number(right)) {
    (Some(a), Some(b)) => a == b
    _ => upper_string(left.to_display()) == upper_string(right.to_display())
  }
}

///|
fn eval_match(args : Array[@formula.Expr], ctx : EvalContext) -> @types.Value {
  if args.length() < 2 || args.length() > 3 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match range_arg(args[1], ctx) {
    Some((values, _, _)) => {
      let lookup = eval(args[0], ctx)
      let match_type = if args.length() == 3 {
        match as_int(eval(args[2], ctx)) {
          Some(n) => n
          None => return @types.Value::Error(@types.CellError::ValueErr)
        }
      } else {
        1
      }
      if match_type == 0 {
        let mut i = 0
        while i < values.length() {
          if value_equal(values[i], lookup) {
            return @types.Value::Number(Double::from_int(i + 1))
          }
          i = i + 1
        }
        @types.Value::Error(@types.CellError::NotAvailable)
      } else {
        match as_number(lookup) {
          Some(target) => {
            let mut found = 0
            let mut i = 0
            while i < values.length() {
              match as_number(values[i]) {
                Some(n) =>
                  if (match_type > 0 && n <= target) ||
                    (match_type < 0 && n >= target) {
                    found = i + 1
                  }
                None => ()
              }
              i = i + 1
            }
            if found == 0 {
              @types.Value::Error(@types.CellError::NotAvailable)
            } else {
              @types.Value::Number(Double::from_int(found))
            }
          }
          None => @types.Value::Error(@types.CellError::NotAvailable)
        }
      }
    }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn eval_vlookup(args : Array[@formula.Expr], ctx : EvalContext) -> @types.Value {
  if args.length() < 3 || args.length() > 4 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match range_arg(args[1], ctx) {
    Some((values, rows, cols)) => {
      let lookup = eval(args[0], ctx)
      let col_index = match as_int(eval(args[2], ctx)) {
        Some(n) => n
        None => return @types.Value::Error(@types.CellError::ValueErr)
      }
      if col_index < 1 || col_index > cols {
        return @types.Value::Error(@types.CellError::Ref)
      }
      let exact = if args.length() == 4 {
        match as_bool(eval(args[3], ctx)) {
          Some(b) => !b
          None => return @types.Value::Error(@types.CellError::ValueErr)
        }
      } else {
        true
      }
      if exact {
        let mut row = 0
        while row < rows {
          if value_equal(values[row * cols], lookup) {
            return values[row * cols + (col_index - 1)]
          }
          row = row + 1
        }
        @types.Value::Error(@types.CellError::NotAvailable)
      } else {
        match as_number(lookup) {
          Some(target) => {
            let mut found = -1
            let mut row = 0
            while row < rows {
              match as_number(values[row * cols]) {
                Some(n) => if n <= target { found = row }
                None => ()
              }
              row = row + 1
            }
            if found < 0 {
              @types.Value::Error(@types.CellError::NotAvailable)
            } else {
              values[found * cols + (col_index - 1)]
            }
          }
          None => @types.Value::Error(@types.CellError::NotAvailable)
        }
      }
    }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}
