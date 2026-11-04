/// Workbook, worksheet, dependency-aware recalculation.
///
/// A sheet keeps a dependency graph built from formula references. `recalculate`
/// performs a full graph rebuild and topological evaluation when the formula
/// set changed, and a dirty-subgraph evaluation when only values changed.

///|
pub struct Cell {
  formula : String?
  value : @types.Value
  format : @types.CellFormat
}

///|
pub struct Sheet {
  name : String
  cells : Map[Int32, Cell]
  mut graph : @graph.DependencyGraph
  mut dirty : Map[Int32, Bool]
  mut graph_valid : Bool
  mut full_recalc : Bool
  /// Set when values or formulas changed and not yet recalculated.
  mut pending : Bool
  names : Map[String, @types.Range]
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
    pending: false,
    names: Map([], capacity=4),
  }
}

///|
pub struct Workbook {
  sheets : Map[String, Sheet]
  /// Insertion order, used for stable sheet tabs and recalculation order.
  order : Array[String]
}

///|
pub fn Workbook::new() -> Workbook {
  { sheets: Map([], capacity=4), order: [], }
}

///|
pub fn Workbook::add_sheet(self : Workbook, name : String) -> Sheet {
  let sheet = Sheet::new(name)
  match self.sheets.get(name) {
    Some(_) => ()
    None => self.order.push(name)
  }
  self.sheets[name] = sheet
  sheet
}

///|
pub fn Workbook::has_sheet(self : Workbook, name : String) -> Bool {
  self.sheets.get(name) is Some(_)
}

///|
pub fn Workbook::sheet(self : Workbook, name : String) -> Sheet? {
  self.sheets.get(name)
}

///|
pub fn Workbook::names(self : Workbook) -> Array[String] {
  let out : Array[String] = []
  for name in self.order {
    match self.sheets.get(name) {
      Some(_) => out.push(name)
      None => ()
    }
  }
  out
}

///|
pub fn Workbook::define_name(
  self : Workbook,
  sheet_name : String,
  name : String,
  a1_range : String,
) -> Bool {
  match self.sheet(sheet_name) {
    Some(sheet) => sheet.define_name(name, a1_range)
    None => false
  }
}

///|
/// A sheet-level evaluation plan derived from cross-sheet references.
priv struct SheetPlan {
  order : Array[String]
  cyclic : Array[String]
  dependents : Map[String, Array[String]]
}

///|
/// Order worksheets so that every sheet is calculated after the sheets it
/// reads from. Sheets that take part in a cross-sheet cycle are reported
/// separately instead of being ordered.
fn Workbook::plan(self : Workbook) -> SheetPlan {
  let names = self.names()
  let count = names.length()
  let index : Map[String, Int32] = Map([], capacity=count)
  let mut i = 0
  while i < count {
    index[upper_name(names[i])] = i
    i = i + 1
  }
  let graph = @graph.DependencyGraph::new()
  let mut node = 0
  while node < count {
    match self.sheets.get(names[node]) {
      Some(sheet) =>
        for dependency in sheet.depends_on_sheets() {
          match index.get(upper_name(dependency)) {
            Some(target) =>
              if target != node {
                graph.add_dependency(node, target)
              }
            None => ()
          }
        }
      None => ()
    }
    node = node + 1
  }
  let indegree : Map[Int32, Int32] = Map([], capacity=count)
  let mut k = 0
  while k < count {
    indegree[k] = 0
    k = k + 1
  }
  k = 0
  while k < count {
    for dependency in graph.precedents_of(k) {
      match indegree.get(dependency) {
        Some(_) => indegree[k] = indegree[k] + 1
        None => ()
      }
    }
    k = k + 1
  }
  let queue : Array[Int32] = []
  k = 0
  while k < count {
    if indegree[k] == 0 {
      queue.push(k)
    }
    k = k + 1
  }
  let ordered_ids : Array[Int32] = []
  let mut head = 0
  while head < queue.length() {
    let current = queue[head]
    head = head + 1
    ordered_ids.push(current)
    for dependent in graph.dependents_of(current) {
      match indegree.get(dependent) {
        Some(_) => {
          indegree[dependent] = indegree[dependent] - 1
          if indegree[dependent] == 0 {
            queue.push(dependent)
          }
        }
        None => ()
      }
    }
  }
  let ordered : Map[Int32, Bool] = Map([], capacity=count)
  let order : Array[String] = []
  for id in ordered_ids {
    ordered[id] = true
    order.push(names[id])
  }
  let cyclic : Array[String] = []
  k = 0
  while k < count {
    match ordered.get(k) {
      Some(_) => ()
      None => cyclic.push(names[k])
    }
    k = k + 1
  }
  let dependents : Map[String, Array[String]] = Map([], capacity=count)
  k = 0
  while k < count {
    let children : Array[String] = []
    for dependent in graph.dependents_of(k) {
      children.push(names[dependent])
    }
    dependents[upper_name(names[k])] = children
    k = k + 1
  }
  { order, cyclic, dependents, }
}

///|
/// Recalculate every worksheet in dependency order. Cross-sheet references
/// read the values produced earlier in the same pass; worksheets on a
/// cross-sheet cycle are marked with `#CIRC!`.
pub fn Workbook::recalculate_all(self : Workbook) -> Int32 {
  let plan = self.plan()
  let book : Map[String, Map[Int32, @types.Value]] = Map(
    [],
    capacity=self.names().length(),
  )
  for name in self.names() {
    match self.sheets.get(name) {
      Some(sheet) => book[upper_name(name)] = sheet.snapshot_values()
      None => ()
    }
  }
  let mut total = 0
  for name in plan.order {
    match self.sheets.get(name) {
      Some(sheet) => {
        let pending = sheet.pending
        let changed = sheet.recalculate_with(book)
        total = total + changed
        book[upper_name(name)] = sheet.snapshot_values()
        if pending || changed > 0 {
          match plan.dependents.get(upper_name(name)) {
            Some(children) =>
              for child in children {
                match self.sheets.get(child) {
                  Some(target) => target.mark_stale()
                  None => ()
                }
              }
            None => ()
          }
        }
      }
      None => ()
    }
  }
  for name in plan.cyclic {
    match self.sheets.get(name) {
      Some(sheet) => total = total + sheet.mark_circular()
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
      let existing_format = match self.cells.get(key) {
        Some(cell) => cell.format
        None => @types.CellFormat::General
      }
      self.cells[key] = { formula: None, value, format: existing_format, }
      self.pending = true
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
      let key = addr.key()
      let existing_format = match self.cells.get(key) {
        Some(cell) => cell.format
        None => @types.CellFormat::General
      }
      self.cells[key] = {
        formula: Some(formula),
        value: @types.Value::Blank,
        format: existing_format,
      }
      self.graph_valid = false
      self.full_recalc = true
      self.pending = true
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
pub fn Sheet::set_format(
  self : Sheet,
  a1 : String,
  format : @types.CellFormat,
) -> Bool {
  match @types.Address::parse(a1) {
    Some(addr) => {
      let key = addr.key()
      match self.cells.get(key) {
        Some(cell) =>
          self.cells[key] = {
            formula: cell.formula,
            value: cell.value,
            format,
          }
        None =>
          self.cells[key] = {
            formula: None,
            value: @types.Value::Blank,
            format,
          }
      }
      true
    }
    None => false
  }
}

///|
pub fn Sheet::get_format(self : Sheet, a1 : String) -> @types.CellFormat {
  match @types.Address::parse(a1) {
    Some(addr) =>
      match self.cells.get(addr.key()) {
        Some(cell) => cell.format
        None => @types.CellFormat::General
      }
    None => @types.CellFormat::General
  }
}

///|
/// Format a cell value for display. Raw values stay unchanged for calculation.
pub fn Sheet::display_value(self : Sheet, a1 : String) -> String {
  @format.format_value(self.get_value(a1), self.get_format(a1))
}

///|
fn upper_name(name : String) -> String {
  let mut out = ""
  for c in name.to_array() {
    out = out + c.to_ascii_uppercase().to_string()
  }
  out
}

///|
/// Define (or replace) a sheet-scoped named range, e.g. `Sales` = `D2:D4`.
pub fn Sheet::define_name(
  self : Sheet,
  name : String,
  a1_range : String,
) -> Bool {
  match @types.Range::parse(a1_range) {
    Some(range) => {
      self.names[upper_name(name)] = range
      self.graph_valid = false
      self.full_recalc = true
      self.pending = true
      true
    }
    None => false
  }
}

///|
pub fn Sheet::remove_name(self : Sheet, name : String) -> Bool {
  let key = upper_name(name)
  let existed = self.names.get(key) is Some(_)
  if existed {
    ignore(self.names.remove(key))
    self.graph_valid = false
    self.full_recalc = true
    self.pending = true
  }
  existed
}

///|
pub fn Sheet::named_range(self : Sheet, name : String) -> @types.Range? {
  self.names.get(upper_name(name))
}

///|
pub fn Sheet::name_list(self : Sheet) -> Array[String] {
  let out : Array[String] = []
  for name in self.names.keys() {
    out.push(name)
  }
  out
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
/// Direct references of a formula cell, rendered as A1 strings. Cross-sheet
/// references keep their `Sheet!` prefix.
pub fn Sheet::dependencies(self : Sheet, a1 : String) -> Array[String] {
  let out : Array[String] = []
  match self.get_formula(a1) {
    Some(text) =>
      match @formula.parse_formula(text) {
        Ok(expr) =>
          for
            pair in @formula.references_across(expr, fn(name) {
              self.named_range(name)
            }) {
            let (sheet, addr) = pair
            match sheet {
              Some(name) => out.push(name + "!" + addr.to_a1())
              None => out.push(addr.to_a1())
            }
          }
        Err(_) => ()
      }
    None => ()
  }
  out
}

///|
/// Worksheet names this sheet reads from through `Sheet!A1` formulas.
pub fn Sheet::depends_on_sheets(self : Sheet) -> Array[String] {
  let out : Array[String] = []
  for key in self.cells.keys() {
    match self.cells.get(key) {
      Some(cell) =>
        match cell.formula {
          Some(text) =>
            match @formula.parse_formula(text) {
              Ok(expr) =>
                for pair in @formula.references_across(expr, fn(_name) { None }) {
                  match pair.0 {
                    Some(name) =>
                      if !contains_name(out, name) {
                        out.push(name)
                      }
                    None => ()
                  }
                }
              Err(_) => ()
            }
          None => ()
        }
      None => ()
    }
  }
  out
}

///|
fn contains_name(names : Array[String], name : String) -> Bool {
  for item in names {
    if item == name {
      return true
    }
  }
  false
}

///|
/// Force a sheet to rebuild its dependency graph on the next recalculation.
pub fn Sheet::mark_stale(self : Sheet) -> Unit {
  self.graph_valid = false
  self.full_recalc = true
}

///|
/// Mark every formula cell on the sheet as `#CIRC!` and return the count.
pub fn Sheet::mark_circular(self : Sheet) -> Int32 {
  let mut count = 0
  for key in self.cells.keys() {
    match self.cells.get(key) {
      Some(cell) =>
        match cell.formula {
          Some(text) => {
            self.cells[key] = {
              formula: Some(text),
              value: @types.Value::Error(@types.CellError::Circular),
              format: cell.format,
            }
            count = count + 1
          }
          None => ()
        }
      None => ()
    }
  }
  self.mark_stale()
  count
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
fn empty_book() -> Map[String, Map[Int32, @types.Value]] {
  Map([], capacity=0)
}

///|
fn ref_error_values(range : @types.Range) -> Array[@types.Value] {
  let out : Array[@types.Value] = []
  let rows = range.end.row - range.start.row + 1
  let cols = range.end.col - range.start.col + 1
  let mut i = 0
  while i < rows * cols {
    out.push(@types.Value::Error(@types.CellError::Ref))
    i = i + 1
  }
  out
}

///|
fn eval_expr(
  expr : @formula.Expr,
  values : Map[Int32, @types.Value],
  names : Map[String, @types.Range],
  book : Map[String, Map[Int32, @types.Value]],
  sheet_name : String,
) -> @types.Value {
  let self_name = upper_name(sheet_name)
  let ctx = @eval.EvalContext::with_sheets(
    fn(addr) {
      match values.get(addr.key()) {
        Some(value) => value
        None => @types.Value::Blank
      }
    },
    fn(range) { range_values(values, range) },
    fn(name) { names.get(name) },
    fn(sheet, addr) {
      if upper_name(sheet) == self_name {
        match values.get(addr.key()) {
          Some(value) => value
          None => @types.Value::Blank
        }
      } else {
        match book.get(upper_name(sheet)) {
          Some(sheet_values) =>
            match sheet_values.get(addr.key()) {
              Some(value) => value
              None => @types.Value::Blank
            }
          None => @types.Value::Error(@types.CellError::Ref)
        }
      }
    },
    fn(sheet, range) {
      if upper_name(sheet) == self_name {
        range_values(values, range)
      } else {
        match book.get(upper_name(sheet)) {
          Some(sheet_values) => range_values(sheet_values, range)
          None => ref_error_values(range)
        }
      }
    },
  )
  @eval.eval(expr, ctx)
}

///|
fn eval_formula_text(
  text : String,
  values : Map[Int32, @types.Value],
  names : Map[String, @types.Range],
  book : Map[String, Map[Int32, @types.Value]],
  sheet_name : String,
) -> @types.Value {
  match @formula.parse_formula(text) {
    Ok(expr) => eval_expr(expr, values, names, book, sheet_name)
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
        Some(formula) =>
          self.cells[key] = {
            formula: Some(formula),
            value,
            format: cell.format,
          }
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
                for
                  pair in @formula.references_across(expr, fn(name) {
                    self.named_range(name)
                  }) {
                  let (sheet, addr) = pair
                  let same_sheet = match sheet {
                    Some(name) => upper_name(name) == upper_name(self.name)
                    None => true
                  }
                  if same_sheet {
                    graph.add_dependency(key, addr.key())
                  }
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
  self.recalculate_full_in(empty_book())
}

///|
fn Sheet::recalculate_full_in(
  self : Sheet,
  book : Map[String, Map[Int32, @types.Value]],
) -> Int32 {
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
            let value = eval_expr(expr, values, self.names, book, self.name)
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
  self.recalculate_dirty_in(empty_book())
}

///|
fn Sheet::recalculate_dirty_in(
  self : Sheet,
  book : Map[String, Map[Int32, @types.Value]],
) -> Int32 {
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
                let value = eval_formula_text(
                  text,
                  values,
                  self.names,
                  book,
                  self.name,
                )
                values[key] = value
                self.cells[key] = {
                  formula: Some(text),
                  value,
                  format: cell.format,
                }
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
      self.recalculate_full_in(book)
    }
  }
}

///|
/// Recalculate a single sheet. Cross-sheet references resolve through `book`,
/// which maps upper-cased worksheet names to value snapshots.
pub fn Sheet::recalculate_with(
  self : Sheet,
  book : Map[String, Map[Int32, @types.Value]],
) -> Int32 {
  let evaluated = if self.full_recalc || !self.graph_valid {
    self.recalculate_full_in(book)
  } else {
    self.recalculate_dirty_in(book)
  }
  self.pending = false
  evaluated
}

///|
/// Public entry point: choose incremental or full recalculation.
pub fn Sheet::recalculate(self : Sheet) -> Int32 {
  self.recalculate_with(empty_book())
}
