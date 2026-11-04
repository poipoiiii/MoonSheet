/// Workbook, worksheet, dependency-aware recalculation.
///
/// A sheet keeps a dependency graph built from formula references. `recalculate`
/// performs a full graph rebuild and topological evaluation when the formula
/// set changed, and a dirty-subgraph evaluation when only values changed.

///|
pub struct Cell {
  formula : String?
  value : @types.Value
}

///|
pub struct Sheet {
  name : String
  cells : Map[Int32, Cell]
  mut graph : @graph.DependencyGraph
  mut dirty : Map[Int32, Bool]
  mut graph_valid : Bool
  mut full_recalc : Bool
}

///|
pub fn Sheet::new(name : String) -> Sheet {
  {
    name,
    cells: Map([], capacity=16),
    graph: @graph.DependencyGraph::new(),
    dirty: Map([], capacity=0),
    graph_valid: false,
    full_recalc: true,
  }
}

///|
pub struct Workbook {
  sheets : Map[String, Sheet]
}

///|
pub fn Workbook::new() -> Workbook {
  { sheets: Map([], capacity=4), }
}

///|
pub fn Workbook::add_sheet(self : Workbook, name : String) -> Sheet {
  let sheet = Sheet::new(name)
  self.sheets[name] = sheet
  sheet
}

///|
pub fn Workbook::sheet(self : Workbook, name : String) -> Sheet? {
  self.sheets.get(name)
}

///|
pub fn Workbook::names(self : Workbook) -> Array[String] {
  let out : Array[String] = []
  for name in self.sheets.keys() {
    out.push(name)
  }
  out
}

///|
pub fn Workbook::recalculate_all(self : Workbook) -> Int32 {
  let mut total = 0
  for name in self.sheets.keys() {
    match self.sheets.get(name) {
      Some(sheet) => total = total + sheet.recalculate()
      None => ()
    }
  }
  total
}

///|
pub fn Sheet::set_value(
  self : Sheet,
  a1 : String,
  value : @types.Value,
) -> Bool {
  match @types.Address::parse(a1) {
    Some(addr) => {
      let key = addr.key()
      let had_formula = match self.cells.get(key) {
        Some(cell) => cell.formula is Some(_)
        None => false
      }
      self.cells[key] = { formula: None, value, }
      if had_formula {
        self.graph_valid = false
        self.full_recalc = true
      } else {
        self.mark_dirty(key)
      }
      true
    }
    None => false
  }
}

///|
pub fn Sheet::set_formula(self : Sheet, a1 : String, formula : String) -> Bool {
  match @types.Address::parse(a1) {
    Some(addr) => {
      self.cells[addr.key()] = {
        formula: Some(formula),
        value: @types.Value::Blank,
      }
      self.graph_valid = false
      self.full_recalc = true
      true
    }
    None => false
  }
}

///|
pub fn Sheet::value_at(self : Sheet, addr : @types.Address) -> @types.Value {
  match self.cells.get(addr.key()) {
    Some(cell) => cell.value
    None => @types.Value::Blank
  }
}

///|
pub fn Sheet::get_value(self : Sheet, a1 : String) -> @types.Value {
  match @types.Address::parse(a1) {
    Some(addr) => self.value_at(addr)
    None => @types.Value::Error(@types.CellError::Ref)
  }
}

///|
pub fn Sheet::get_formula(self : Sheet, a1 : String) -> String? {
  match @types.Address::parse(a1) {
    Some(addr) =>
      match self.cells.get(addr.key()) {
        Some(cell) => cell.formula
        None => None
      }
    None => None
  }
}

///|
/// Direct references of a formula cell, rendered as A1 strings.
pub fn Sheet::dependencies(self : Sheet, a1 : String) -> Array[String] {
  let out : Array[String] = []
  match self.get_formula(a1) {
    Some(text) =>
      match @formula.parse_formula(text) {
        Ok(expr) =>
          for addr in @formula.references(expr) {
            out.push(addr.to_a1())
          }
        Err(_) => ()
      }
    None => ()
  }
  out
}

///|
/// Snapshot of non-empty cells as `(A1, formula, value)` tuples.
pub fn Sheet::entries(self : Sheet) -> Array[(String, String?, @types.Value)] {
  let out : Array[(String, String?, @types.Value)] = []
  for key in self.cells.keys() {
    match self.cells.get(key) {
      Some(cell) =>
        out.push(
          (@types.Address::from_key(key).to_a1(), cell.formula, cell.value),
        )
      None => ()
    }
  }
  out
}

///|
fn range_values(
  values : Map[Int32, @types.Value],
  range : @types.Range,
) -> Array[@types.Value] {
  let out : Array[@types.Value] = []
  let mut row = range.start.row
  while row <= range.end.row {
    let mut col = range.start.col
    while col <= range.end.col {
      let key = row * 16384 + col
      match values.get(key) {
        Some(value) => out.push(value)
        None => out.push(@types.Value::Blank)
      }
      col = col + 1
    }
    row = row + 1
  }
  out
}

///|
fn eval_expr(
  expr : @formula.Expr,
  values : Map[Int32, @types.Value],
) -> @types.Value {
  let ctx = @eval.EvalContext::new(
    fn(addr) {
      match values.get(addr.key()) {
        Some(value) => value
        None => @types.Value::Blank
      }
    },
    fn(range) { range_values(values, range) },
  )
  @eval.eval(expr, ctx)
}

///|
fn eval_formula_text(
  text : String,
  values : Map[Int32, @types.Value],
) -> @types.Value {
  match @formula.parse_formula(text) {
    Ok(expr) => eval_expr(expr, values)
    Err(_) => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn Sheet::snapshot_values(self : Sheet) -> Map[Int32, @types.Value] {
  let values : Map[Int32, @types.Value] = Map([], capacity=16)
  for key in self.cells.keys() {
    match self.cells.get(key) {
      Some(cell) => values[key] = cell.value
      None => ()
    }
  }
  values
}

///|
fn Sheet::write_formula_value(
  self : Sheet,
  key : Int32,
  value : @types.Value,
) -> Unit {
  match self.cells.get(key) {
    Some(cell) =>
      match cell.formula {
        Some(formula) => self.cells[key] = { formula: Some(formula), value, }
        None => ()
      }
    None => ()
  }
}

///|
/// Rebuild the dependency graph from all formulas and return parsed formulas.
fn Sheet::build_graph(self : Sheet) -> Map[Int32, @formula.Expr] {
  let graph = @graph.DependencyGraph::new()
  let exprs : Map[Int32, @formula.Expr] = Map([], capacity=8)
  for key in self.cells.keys() {
    match self.cells.get(key) {
      Some(cell) =>
        match cell.formula {
          Some(text) =>
            match @formula.parse_formula(text) {
              Ok(expr) => {
                exprs[key] = expr
                for addr in @formula.references(expr) {
                  graph.add_dependency(key, addr.key())
                }
              }
              Err(_) => ()
            }
          None => ()
        }
      None => ()
    }
  }
  self.graph = graph
  self.graph_valid = true
  exprs
}

///|
/// Mark a cell and all transitive dependents dirty.
fn Sheet::mark_dirty(self : Sheet, key : Int32) -> Unit {
  if !self.graph_valid {
    self.full_recalc = true
    return
  }
  let stack : Array[Int32] = [key]
  let mut index = 0
  while index < stack.length() {
    let current = stack[index]
    index = index + 1
    if self.dirty.get(current) is None {
      self.dirty[current] = true
      for dependent in self.graph.dependents_of(current) {
        stack.push(dependent)
      }
    }
  }
}

///|
/// Full graph rebuild and topological evaluation. Cycles mark every formula
/// cell on the sheet as `#CIRC!` (conservative, documented behaviour).
pub fn Sheet::recalculate_full(self : Sheet) -> Int32 {
  let exprs = self.build_graph()
  let values = self.snapshot_values()
  let formula_keys : Array[Int32] = []
  for key in exprs.keys() {
    formula_keys.push(key)
  }
  for key in self.cells.keys() {
    match self.cells.get(key) {
      Some(cell) =>
        match cell.formula {
          Some(_) =>
            if exprs.get(key) is None {
              values[key] = @types.Value::Error(@types.CellError::ValueErr)
            }
          None => ()
        }
      None => ()
    }
  }
  match self.graph.topological_order(formula_keys) {
    Some(order) =>
      for key in order {
        match exprs.get(key) {
          Some(expr) => {
            let value = eval_expr(expr, values)
            values[key] = value
            self.write_formula_value(key, value)
          }
          None => ()
        }
      }
    None =>
      for key in formula_keys {
        let value = @types.Value::Error(@types.CellError::Circular)
        values[key] = value
        self.write_formula_value(key, value)
      }
  }
  self.dirty = Map([], capacity=0)
  self.full_recalc = false
  formula_keys.length()
}

///|
/// Re-evaluate only dirty formula cells in topological order.
pub fn Sheet::recalculate_dirty(self : Sheet) -> Int32 {
  let values = self.snapshot_values()
  let dirty_formulas : Array[Int32] = []
  for key in self.dirty.keys() {
    match self.cells.get(key) {
      Some(cell) =>
        match cell.formula {
          Some(_) => dirty_formulas.push(key)
          None => ()
        }
      None => ()
    }
  }
  if dirty_formulas.length() == 0 {
    self.dirty = Map([], capacity=0)
    return 0
  }
  match self.graph.topological_order(dirty_formulas) {
    Some(order) => {
      for key in order {
        match self.cells.get(key) {
          Some(cell) =>
            match cell.formula {
              Some(text) => {
                let value = eval_formula_text(text, values)
                values[key] = value
                self.cells[key] = { formula: Some(text), value, }
              }
              None => ()
            }
          None => ()
        }
      }
      self.dirty = Map([], capacity=0)
      dirty_formulas.length()
    }
    None => {
      self.full_recalc = true
      self.dirty = Map([], capacity=0)
      self.recalculate_full()
    }
  }
}

///|
/// Public entry point: choose incremental or full recalculation.
pub fn Sheet::recalculate(self : Sheet) -> Int32 {
  if self.full_recalc || !self.graph_valid {
    self.recalculate_full()
  } else {
    self.recalculate_dirty()
  }
}
