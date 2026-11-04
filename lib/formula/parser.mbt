/// Lexer and Pratt parser for spreadsheet formulas.
///
/// The parser is intentionally independent of the workbook: it only turns text
/// into an AST. Reference resolution and evaluation happen in `lib/eval`.

///|
enum Token {
  Number(Double)
  Text(String)
  Ident(String)
  Plus
  Minus
  Star
  Slash
  Caret
  LParen
  RParen
  Comma
  Colon
  Bang
  Eq
  Ne
  Lt
  Le
  Gt
  Ge
  Eof
} derive(Eq, Debug)

///|
pub extend Token with Eq::{not_equal, equal}

///|
pub extend Token with @moonbitlang/core/debug.Debug::{to_repr}

///|
fn is_digit(c : Char) -> Bool {
  c >= '0' && c <= '9'
}

///|
fn is_alpha(c : Char) -> Bool {
  (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || c == '_'
}

///|
fn is_ident_char(c : Char) -> Bool {
  is_alpha(c) || is_digit(c) || c == '$' || c == '.'
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
fn lex(input : String) -> Result[Array[Token], ParseError] {
  let tokens : Array[Token] = []
  let n = input.char_length()
  let mut i = 0
  while i < n {
    let c = match input.get_char(i) {
      Some(c) => c
      None => ' '
    }
    if c == ' ' || c == '\t' || c == '\r' || c == '\n' {
      i = i + 1
    } else if is_digit(c) {
      let mut text = ""
      let mut seen_dot = false
      while i < n &&
            is_digit(
              match input.get_char(i) {
                Some(d) => d
                None => ' '
              },
            ) {
        let d = match input.get_char(i) {
          Some(d) => d
          None => '0'
        }
        text = text + d.to_string()
        i = i + 1
      }
      if i < n && input.get_char(i) == Some('.') && !seen_dot {
        seen_dot = true
        text = text + "."
        i = i + 1
        while i < n &&
              is_digit(
                match input.get_char(i) {
                  Some(d) => d
                  None => ' '
                },
              ) {
          let d = match input.get_char(i) {
            Some(d) => d
            None => '0'
          }
          text = text + d.to_string()
          i = i + 1
        }
      }
      let value = @string.parse_double(text) catch { _ => 0.0 }
      tokens.push(Token::Number(value))
    } else if is_alpha(c) || c == '$' {
      let mut text = ""
      while i < n &&
            is_ident_char(
              match input.get_char(i) {
                Some(d) => d
                None => ' '
              },
            ) {
        let d = match input.get_char(i) {
          Some(d) => d
          None => ' '
        }
        text = text + d.to_string()
        i = i + 1
      }
      tokens.push(Token::Ident(text))
    } else if c == '"' {
      i = i + 1
      let mut text = ""
      let mut closed = false
      while i < n {
        let d = match input.get_char(i) {
          Some(d) => d
          None => ' '
        }
        if d == '"' {
          if i + 1 < n && input.get_char(i + 1) == Some('"') {
            text = text + "\""
            i = i + 2
          } else {
            closed = true
            i = i + 1
            break
          }
        } else {
          text = text + d.to_string()
          i = i + 1
        }
      }
      if !closed {
        return Err(ParseError::new("unterminated string", i))
      }
      tokens.push(Token::Text(text))
    } else {
      match c {
        '+' => {
          tokens.push(Token::Plus)
          i = i + 1
        }
        '-' => {
          tokens.push(Token::Minus)
          i = i + 1
        }
        '*' => {
          tokens.push(Token::Star)
          i = i + 1
        }
        '/' => {
          tokens.push(Token::Slash)
          i = i + 1
        }
        '^' => {
          tokens.push(Token::Caret)
          i = i + 1
        }
        '(' => {
          tokens.push(Token::LParen)
          i = i + 1
        }
        ')' => {
          tokens.push(Token::RParen)
          i = i + 1
        }
        ',' => {
          tokens.push(Token::Comma)
          i = i + 1
        }
        ':' => {
          tokens.push(Token::Colon)
          i = i + 1
        }
        '!' => {
          tokens.push(Token::Bang)
          i = i + 1
        }
        '=' => {
          tokens.push(Token::Eq)
          i = i + 1
        }
        '<' =>
          if i + 1 < n && input.get_char(i + 1) == Some('=') {
            tokens.push(Token::Le)
            i = i + 2
          } else if i + 1 < n && input.get_char(i + 1) == Some('>') {
            tokens.push(Token::Ne)
            i = i + 2
          } else {
            tokens.push(Token::Lt)
            i = i + 1
          }
        '>' =>
          if i + 1 < n && input.get_char(i + 1) == Some('=') {
            tokens.push(Token::Ge)
            i = i + 2
          } else {
            tokens.push(Token::Gt)
            i = i + 1
          }
        _ => return Err(ParseError::new("unexpected character", i))
      }
    }
  }
  tokens.push(Token::Eof)
  Ok(tokens)
}

///|
priv struct Parser {
  tokens : Array[Token]
  mut pos : Int32
}

///|
fn Parser::new(tokens : Array[Token]) -> Parser {
  { tokens, pos: 0, }
}

///|
fn Parser::peek(self : Parser) -> Token {
  if self.pos < self.tokens.length() {
    self.tokens[self.pos]
  } else {
    Token::Eof
  }
}

///|
fn Parser::eat(self : Parser, token : Token) -> Bool {
  if self.peek() == token {
    self.pos = self.pos + 1
    true
  } else {
    false
  }
}

///|
fn Parser::parse_expr(self : Parser) -> Result[Expr, ParseError] {
  self.parse_comparison()
}

///|
fn Parser::parse_comparison(self : Parser) -> Result[Expr, ParseError] {
  let first = match self.parse_additive() {
    Ok(e) => e
    Err(e) => return Err(e)
  }
  let mut left = first
  while true {
    let op = match self.peek() {
      Token::Eq => Some(BinaryOp::Eq)
      Token::Ne => Some(BinaryOp::Ne)
      Token::Lt => Some(BinaryOp::Lt)
      Token::Le => Some(BinaryOp::Le)
      Token::Gt => Some(BinaryOp::Gt)
      Token::Ge => Some(BinaryOp::Ge)
      _ => None
    }
    match op {
      Some(op) => {
        self.pos = self.pos + 1
        let right = match self.parse_additive() {
          Ok(e) => e
          Err(e) => return Err(e)
        }
        left = Expr::Binary(op, left, right)
      }
      None => break
    }
  }
  Ok(left)
}

///|
fn Parser::parse_additive(self : Parser) -> Result[Expr, ParseError] {
  let first = match self.parse_multiplicative() {
    Ok(e) => e
    Err(e) => return Err(e)
  }
  let mut left = first
  while true {
    let op = match self.peek() {
      Token::Plus => Some(BinaryOp::Add)
      Token::Minus => Some(BinaryOp::Sub)
      _ => None
    }
    match op {
      Some(op) => {
        self.pos = self.pos + 1
        let right = match self.parse_multiplicative() {
          Ok(e) => e
          Err(e) => return Err(e)
        }
        left = Expr::Binary(op, left, right)
      }
      None => break
    }
  }
  Ok(left)
}

///|
fn Parser::parse_multiplicative(self : Parser) -> Result[Expr, ParseError] {
  let first = match self.parse_power() {
    Ok(e) => e
    Err(e) => return Err(e)
  }
  let mut left = first
  while true {
    let op = match self.peek() {
      Token::Star => Some(BinaryOp::Mul)
      Token::Slash => Some(BinaryOp::Div)
      _ => None
    }
    match op {
      Some(op) => {
        self.pos = self.pos + 1
        let right = match self.parse_power() {
          Ok(e) => e
          Err(e) => return Err(e)
        }
        left = Expr::Binary(op, left, right)
      }
      None => break
    }
  }
  Ok(left)
}

///|
fn Parser::parse_power(self : Parser) -> Result[Expr, ParseError] {
  let base = match self.parse_unary() {
    Ok(e) => e
    Err(e) => return Err(e)
  }
  if self.eat(Token::Caret) {
    let exponent = match self.parse_power() {
      Ok(e) => e
      Err(e) => return Err(e)
    }
    Ok(Expr::Binary(BinaryOp::Pow, base, exponent))
  } else {
    Ok(base)
  }
}

///|
fn Parser::parse_unary(self : Parser) -> Result[Expr, ParseError] {
  match self.peek() {
    Token::Minus => {
      self.pos = self.pos + 1
      let inner = match self.parse_unary() {
        Ok(e) => e
        Err(e) => return Err(e)
      }
      Ok(Expr::Unary(UnaryOp::Neg, inner))
    }
    Token::Plus => {
      self.pos = self.pos + 1
      let inner = match self.parse_unary() {
        Ok(e) => e
        Err(e) => return Err(e)
      }
      Ok(Expr::Unary(UnaryOp::Plus, inner))
    }
    _ => self.parse_primary()
  }
}

///|
fn Parser::parse_primary(self : Parser) -> Result[Expr, ParseError] {
  match self.peek() {
    Token::Number(n) => {
      self.pos = self.pos + 1
      Ok(Expr::Number(n))
    }
    Token::Text(s) => {
      self.pos = self.pos + 1
      Ok(Expr::Text(s))
    }
    Token::Ident(name) => {
      self.pos = self.pos + 1
      if self.eat(Token::LParen) {
        let args : Array[Expr] = []
        if !self.eat(Token::RParen) {
          let mut done = false
          while !done {
            let arg = match self.parse_expr() {
              Ok(e) => e
              Err(e) => return Err(e)
            }
            args.push(arg)
            if self.eat(Token::Comma) {
              // keep parsing arguments
            } else {
              done = true
            }
          }
          if !self.eat(Token::RParen) {
            return Err(ParseError::new("expected ')'", self.pos))
          }
        }
        Ok(Expr::Call(upper_string(name), args))
      } else if self.eat(Token::Bang) {
        match self.peek() {
          Token::Ident(cell) => {
            self.pos = self.pos + 1
            match @types.Address::parse(cell) {
              Some(start) =>
                if self.eat(Token::Colon) {
                  match self.peek() {
                    Token::Ident(last) => {
                      self.pos = self.pos + 1
                      match @types.Address::parse(last) {
                        Some(end_addr) =>
                          Ok(
                            Expr::SheetRange(
                              name,
                              @types.Range::new(start, end_addr),
                            ),
                          )
                        None =>
                          Err(ParseError::new("invalid range end", self.pos))
                      }
                    }
                    _ => Err(ParseError::new("expected range end", self.pos))
                  }
                } else {
                  Ok(Expr::SheetRef(name, start))
                }
              None => Err(ParseError::new("invalid cell reference", self.pos))
            }
          }
          _ => Err(ParseError::new("expected cell after '!'", self.pos))
        }
      } else if self.eat(Token::Colon) {
        match self.peek() {
          Token::Ident(end_name) => {
            self.pos = self.pos + 1
            match
              (@types.Address::parse(name), @types.Address::parse(end_name)) {
              (Some(a), Some(b)) => Ok(Expr::Range(@types.Range::new(a, b)))
              _ => Err(ParseError::new("invalid range", self.pos))
            }
          }
          _ => Err(ParseError::new("expected range end", self.pos))
        }
      } else {
        let upper = upper_string(name)
        if upper == "TRUE" {
          Ok(Expr::Boolean(true))
        } else if upper == "FALSE" {
          Ok(Expr::Boolean(false))
        } else {
          match @types.Address::parse(name) {
            Some(addr) => Ok(Expr::Ref(addr))
            None => Ok(Expr::Name(name))
          }
        }
      }
    }
    Token::LParen => {
      self.pos = self.pos + 1
      let inner = match self.parse_expr() {
        Ok(e) => e
        Err(e) => return Err(e)
      }
      if !self.eat(Token::RParen) {
        return Err(ParseError::new("expected ')'", self.pos))
      }
      Ok(inner)
    }
    _ => Err(ParseError::new("expected expression", self.pos))
  }
}

///|
/// Parse a bare expression such as `1+2*3`.
pub fn parse(input : String) -> Result[Expr, ParseError] {
  let tokens = match lex(input) {
    Ok(t) => t
    Err(e) => return Err(e)
  }
  let parser = Parser::new(tokens)
  let expr = match parser.parse_expr() {
    Ok(e) => e
    Err(e) => return Err(e)
  }
  if parser.peek() != Token::Eof {
    return Err(ParseError::new("unexpected trailing token", parser.pos))
  }
  Ok(expr)
}

///|
/// Parse a formula, stripping a leading `=` if present.
pub fn parse_formula(input : String) -> Result[Expr, ParseError] {
  let trimmed = input.trim().to_owned()
  if trimmed.char_length() > 0 && trimmed.get_char(0) == Some('=') {
    let mut rest = ""
    let mut i = 1
    while i < trimmed.char_length() {
      let c = match trimmed.get_char(i) {
        Some(c) => c
        None => ' '
      }
      rest = rest + c.to_string()
      i = i + 1
    }
    parse(rest)
  } else {
    parse(trimmed)
  }
}
