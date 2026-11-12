/// Formula printer: AST back to text.
///
/// `to_text` produces a canonical, parseable formula body without the leading
/// `=`. Printing only inserts parentheses where precedence requires them, so
/// `parse(to_text(parse(s)))` is equivalent to `parse(s)`.

///|
/// Precedence levels used for parenthesisation decisions.
fn precedence_of(op : BinaryOp) -> Int32 {
  match op {
    Eq | Ne | Lt | Le | Gt | Ge => 1
    Add | Sub => 2
    Mul | Div => 3
    Pow => 4
    Concat => 2
  }
}

///|
fn is_right_associative(op : BinaryOp) -> Bool {
  op is Pow
}

///|
fn quote_text(text : String) -> String {
  let mut out = "\""
  for c in text.to_array() {
    if c == '"' {
      out = out + "\"\""
    } else {
      out = out + c.to_string()
    }
  }
  out + "\""
}

///|
fn range_text(range : @types.Range) -> String {
  range.start.to_a1() + ":" + range.end.to_a1()
}

///|
/// Render an expression as formula text without the leading `=`.
pub fn to_text(expr : Expr) -> String {
  match expr {
    Number(n) => n.to_string()
    Text(text) => quote_text(text)
    Boolean(flag) => if flag { "TRUE" } else { "FALSE" }
    Error(error) => error.code()
    Ref(addr) => addr.to_a1()
    Range(range) => range_text(range)
    SheetRef(sheet, addr) => sheet + "!" + addr.to_a1()
    SheetRange(sheet, range) => sheet + "!" + range_text(range)
    Name(name) => name
    Unary(op, inner) => {
      let symbol = match op {
        Neg => "-"
        Plus => "+"
      }
      symbol + wrap(inner, 5)
    }
    Binary(op, left, right) => {
      let precedence = precedence_of(op)
      let symbol = match op {
        Add => "+"
        Sub => "-"
        Mul => "*"
        Div => "/"
        Pow => "^"
        Concat => "&"
        Eq => "="
        Ne => "<>"
        Lt => "<"
        Le => "<="
        Gt => ">"
        Ge => ">="
      }
      let left_minimum = if is_right_associative(op) {
        precedence + 1
      } else {
        precedence
      }
      let right_minimum = if is_right_associative(op) {
        precedence
      } else {
        precedence + 1
      }
      wrap(left, left_minimum) + symbol + wrap(right, right_minimum)
    }
    Call(name, args) => {
      let parts : Array[String] = []
      for arg in args {
        parts.push(to_text(arg))
      }
      name + "(" + join(parts, ",") + ")"
    }
  }
}

///|
/// Wrap a child expression in parentheses when its precedence is below
/// `minimum`. Equal precedence needs no parentheses for left-associative
/// operators, which is why the two call sites pass different minimums.
fn wrap(expr : Expr, minimum : Int32) -> String {
  let text = to_text(expr)
  match expr {
    Binary(op, _, _) =>
      if precedence_of(op) < minimum {
        "(" + text + ")"
      } else {
        text
      }
    _ => text
  }
}

///|
fn join(parts : Array[String], separator : String) -> String {
  let mut out = ""
  let mut index = 0
  while index < parts.length() {
    if index > 0 {
      out = out + separator
    }
    out = out + parts[index]
    index = index + 1
  }
  out
}

///|
/// Render an expression as a full formula, including the leading `=`.
pub fn to_formula(expr : Expr) -> String {
  "=" + to_text(expr)
}
