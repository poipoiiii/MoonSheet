/// Collect cell references from a formula AST.
///
/// Ranges are expanded into individual addresses so the dependency graph can
/// add precise edges. Very large ranges are capped to keep graph construction
/// predictable; the cap is documented in `docs/design.md`.

///|
pub fn references(expr : Expr) -> Array[@types.Address] {
  let out : Array[@types.Address] = []
  collect_references(expr, out)
  out
}

///|
fn collect_references(expr : Expr, out : Array[@types.Address]) -> Unit {
  match expr {
    Ref(addr) => out.push(addr)
    Range(range) => {
      let rows = range.end.row - range.start.row + 1
      let cols = range.end.col - range.start.col + 1
      if rows * cols <= 10000 {
        let mut row = range.start.row
        while row <= range.end.row {
          let mut col = range.start.col
          while col <= range.end.col {
            out.push(@types.Address::new(row, col))
            col = col + 1
          }
          row = row + 1
        }
      }
    }
    Unary(_, inner) => collect_references(inner, out)
    Binary(_, left, right) => {
      collect_references(left, out)
      collect_references(right, out)
    }
    Call(_, args) =>
      for arg in args {
        collect_references(arg, out)
      }
    _ => ()
  }
}
