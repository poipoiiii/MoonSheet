/// Browser demo for MoonSheet.
///
/// The DOM is created and updated through `ffi_js.mbt`; the workbook, formula
/// evaluation, dependency analysis, and CSV/JSON IO all run in MoonBit.

///|
struct App {
  mut sheet : @workbook.Sheet
  mut selected_row : Int32
  mut selected_col : Int32
  mut recalc_count : Int32
  rows : Int32
  cols : Int32
}

///|
fn make_sample_sheet() -> @workbook.Sheet {
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_value("A1", @types.Value::Text("Item")))
  ignore(sheet.set_value("B1", @types.Value::Text("Qty")))
  ignore(sheet.set_value("C1", @types.Value::Text("Unit price")))
  ignore(sheet.set_value("D1", @types.Value::Text("Total")))
  ignore(sheet.set_value("E1", @types.Value::Text("Note")))

  ignore(sheet.set_value("A2", @types.Value::Text("MoonBit license")))
  ignore(sheet.set_value("B2", @types.Value::Number(1.0)))
  ignore(sheet.set_value("C2", @types.Value::Number(0.0)))
  ignore(sheet.set_formula("D2", "=B2*C2"))
  ignore(sheet.set_value("E2", @types.Value::Text("open source")))

  ignore(sheet.set_value("A3", @types.Value::Text("Compiler seats")))
  ignore(sheet.set_value("B3", @types.Value::Number(5.0)))
  ignore(sheet.set_value("C3", @types.Value::Number(120.0)))
  ignore(sheet.set_formula("D3", "=B3*C3"))
  ignore(sheet.set_value("E3", @types.Value::Text("team")))

  ignore(sheet.set_value("A4", @types.Value::Text("CI minutes")))
  ignore(sheet.set_value("B4", @types.Value::Number(200.0)))
  ignore(sheet.set_value("C4", @types.Value::Number(0.5)))
  ignore(sheet.set_formula("D4", "=B4*C4"))
  ignore(sheet.set_value("E4", @types.Value::Text("monthly")))

  ignore(sheet.set_value("A6", @types.Value::Text("Subtotal")))
  ignore(sheet.set_formula("D6", "=SUM(D2:D4)"))
  ignore(sheet.set_formula("E6", "=IF(D8>1000,\"over\",\"ok\")"))

  ignore(sheet.set_value("A7", @types.Value::Text("Tax 8%")))
  ignore(sheet.set_formula("D7", "=D6*0.08"))
  ignore(sheet.set_formula("E7", "=COUNTIF(C2:C4,\">1\")"))

  ignore(sheet.set_value("A8", @types.Value::Text("Grand total")))
  ignore(sheet.set_formula("D8", "=D6+D7"))
  ignore(sheet.set_formula("E8", "=ROUND(D8,2)"))
  ignore(sheet.recalculate())
  sheet
}

///|
fn make_app() -> App {
  {
    sheet: make_sample_sheet(),
    selected_row: 0,
    selected_col: 0,
    recalc_count: 1,
    rows: 20,
    cols: 8,
  }
}

///|
let app : App = make_app()

///|
fn join(items : Array[String], separator : String) -> String {
  let mut out = ""
  let mut i = 0
  while i < items.length() {
    if i > 0 {
      out = out + separator
    }
    out = out + items[i]
    i = i + 1
  }
  out
}

///|
fn kind_of(value : @types.Value) -> String {
  match value {
    @types.Value::Number(_) => "num"
    @types.Value::Text(_) => "text"
    @types.Value::Boolean(_) => "bool"
    @types.Value::Date(_) => "date"
    @types.Value::Error(_) => "error"
    @types.Value::Blank => "empty"
  }
}

///|
fn App::render(self : App) -> Unit {
  let selected = @types.Address::new(self.selected_row, self.selected_col).to_a1()
  let dependencies = self.sheet.dependencies(selected)
  let dep_map : Map[String, Bool] = Map([], capacity=8)
  for dep in dependencies {
    dep_map[dep] = true
  }
  let mut row = 0
  while row < self.rows {
    let mut col = 0
    while col < self.cols {
      let a1 = @types.Address::new(row, col).to_a1()
      let value = self.sheet.get_value(a1)
      let formula = match self.sheet.get_formula(a1) {
        Some(text) => text
        None => ""
      }
      let text = match value {
        @types.Value::Blank => ""
        _ => value.to_display()
      }
      let dependency = dep_map.get(a1) is Some(_)
      let is_selected = row == self.selected_row && col == self.selected_col
      js_render_cell(
        row,
        col,
        text,
        kind_of(value),
        formula,
        is_selected,
        dependency,
      )
      col = col + 1
    }
    row = row + 1
  }
  let selected_value = self.sheet.get_value(selected)
  let selected_formula = match self.sheet.get_formula(selected) {
    Some(text) => text
    None => ""
  }
  let bar = if selected_formula != "" {
    selected_formula
  } else {
    selected_value.to_display()
  }
  js_set_formula(bar)
  js_set_selected_label(selected)
  js_set_dependencies(join(dependencies, ", "))
  js_set_cell_details(selected_value.to_display(), selected_formula)
  js_set_status("Ready · click a cell, edit the formula bar, press Enter")
  js_set_engine_state("ready")
  js_set_recalc_count(self.recalc_count)
  let entries = self.sheet.entries()
  let mut formula_count = 0
  for entry in entries {
    if entry.1 is Some(_) {
      formula_count = formula_count + 1
    }
  }
  js_set_stats(
    "\{entries.length()} populated cells · \{formula_count} formulas",
  )
}

///|
fn App::select(self : App, row : Int32, col : Int32) -> Unit {
  if row >= 0 && row < self.rows && col >= 0 && col < self.cols {
    self.selected_row = row
    self.selected_col = col
    self.render()
  }
}

///|
fn App::commit(self : App, text : String) -> Unit {
  let a1 = @types.Address::new(self.selected_row, self.selected_col).to_a1()
  let trimmed = text.trim().to_owned()
  if trimmed.length() == 0 {
    ignore(self.sheet.set_value(a1, @types.Value::Blank))
  } else if trimmed.get_char(0) == Some('=') {
    ignore(self.sheet.set_formula(a1, trimmed))
  } else {
    ignore(self.sheet.set_value(a1, @io.parse_cell_value(trimmed)))
  }
  let changed = self.sheet.recalculate()
  self.recalc_count = self.recalc_count + 1
  self.render()
  js_toast("Recalculated \{changed} formula cell(s)")
}

///|
fn App::load_csv(self : App, text : String) -> Unit {
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(@io.load_csv(sheet, text))
  ignore(sheet.recalculate())
  self.sheet = sheet
  self.selected_row = 0
  self.selected_col = 0
  self.recalc_count = self.recalc_count + 1
  self.render()
  js_toast("CSV loaded")
}

///|
fn App::reset(self : App) -> Unit {
  self.sheet = make_sample_sheet()
  self.selected_row = 0
  self.selected_col = 0
  self.recalc_count = self.recalc_count + 1
  self.render()
  js_toast("Sample sheet restored")
}

///|
fn App::export_csv(self : App) -> Unit {
  js_download_csv(@io.export_csv_auto(self.sheet))
  js_toast("CSV exported")
}

///|
fn main {
  js_init_grid(app.rows, app.cols)
  js_set_on_cell(fn(row, col) { app.select(row, col) })
  js_set_on_commit(fn(text) { app.commit(text) })
  js_set_on_csv(fn(text) { app.load_csv(text) })
  js_bind_actions(fn() { app.reset() }, fn() { app.export_csv() })
  app.render()
}
