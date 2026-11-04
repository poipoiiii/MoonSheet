/// Collect cell references from a formula AST.
///
/// Ranges are expanded into individual addresses so the dependency graph can
/// add precise edges. Named ranges are resolved through the supplied callback.
/// Very large ranges are capped to keep graph construction predictable; the cap
/// is documented in `docs/design.md`.

///|
pub fn references(expr : Expr) -> Array[@types.Address] {
  references_with(expr, fn(_name) { None })
}

///|
pub fn references_with(
  expr : Expr,
  resolve_name : (String) -> @types.Range?,
) -> Array[@types.Address] {
  let out : Array[@types.Address] = []
  collect_references(expr, out, resolve_name)
  out
}

///|
fn expand_range(range : @types.Range, out : Array[@types.Address]) -> Unit {
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

///|
fn collect_references(
  expr : Expr,
  out : Array[@types.Address],
  resolve_name : (String) -> @types.Range?,
) -> Unit {
  match expr {
    Ref(addr) => out.push(addr)
    Range(range) => expand_range(range, out)
    Name(name) =>
      match resolve_name(name) {
        Some(range) => expand_range(range, out)
        None => ()
      }
    Unary(_, inner) => collect_references(inner, out, resolve_name)
    Binary(_, left, right) => {
      collect_references(left, out, resolve_name)
      collect_references(right, out, resolve_name)
    }
    Call(_, args) =>
      for arg in args {
        collect_references(arg, out, resolve_name)
      }
    _ => ()
  }
}
