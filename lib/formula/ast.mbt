/// Formula AST and parse errors.

///|
pub(all) enum UnaryOp {
  Neg
  Plus
} derive(Eq, Debug)

///|
pub extend UnaryOp with Eq::{not_equal, equal}

///|
pub extend UnaryOp with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub(all) enum BinaryOp {
  Add
  Sub
  Mul
  Div
  Pow
  Concat
  Eq
  Ne
  Lt
  Le
  Gt
  Ge
} derive(Eq, Debug)

///|
pub extend BinaryOp with Eq::{not_equal, equal}

///|
pub extend BinaryOp with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub(all) enum Expr {
  Number(Double)
  Text(String)
  Boolean(Bool)
  Error(@types.CellError)
  Ref(@types.Address)
  Range(@types.Range)
  SheetRef(String, @types.Address)
  SheetRange(String, @types.Range)
  Unary(UnaryOp, Expr)
  Binary(BinaryOp, Expr, Expr)
  Call(String, Array[Expr])
  Name(String)
} derive(Eq, Debug)

///|
pub extend Expr with Eq::{not_equal, equal}

///|
pub extend Expr with @moonbitlang/core/debug.Debug::{to_repr}

///|
/// A parse diagnostic. `position` is a character offset into the input.
pub struct ParseError {
  message : String
  position : Int32
} derive(Eq, Debug)

///|
pub extend ParseError with Eq::{not_equal, equal}

///|
pub extend ParseError with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub fn ParseError::new(message : String, position : Int32) -> ParseError {
  { message, position, }
}
