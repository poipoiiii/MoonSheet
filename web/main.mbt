/// Browser demo for MoonSheet.
///
/// The DOM is created and updated through `ffi_js.mbt`; the workbook, formula
/// evaluation, dependency analysis, and CSV/JSON IO all run in MoonBit.

///|
struct App {
  mut workbook : @workbook.Workbook
  mut active : String
  mut selected_row : Int32
  mut selected_col : Int32
  mut recalc_count : Int32
  rows : Int32
  cols : Int32
}

///|
fn make_sample_workbook() -> @workbook.Workbook {
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Budget")
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

  ignore(sheet.set_format("C2", @types.CellFormat::Currency("¥", 2)))
  ignore(sheet.set_format("C3", @types.CellFormat::Currency("¥", 2)))
  ignore(sheet.set_format("C4", @types.CellFormat::Currency("¥", 2)))
  ignore(sheet.set_format("D2", @types.CellFormat::Currency("¥", 2)))
  ignore(sheet.set_format("D3", @types.CellFormat::Currency("¥", 2)))
  ignore(sheet.set_format("D4", @types.CellFormat::Currency("¥", 2)))
  ignore(sheet.define_name("Sales", "D2:D4"))
  ignore(sheet.set_value("A6", @types.Value::Text("Subtotal")))
  ignore(sheet.set_formula("D6", "=SUM(Sales)"))
  ignore(sheet.set_formula("E6", "=IF(D8>1000,\"over\",\"ok\")"))

  ignore(sheet.set_value("A7", @types.Value::Text("Tax 8%")))
  ignore(sheet.set_formula("D7", "=D6*0.08"))
  ignore(sheet.set_formula("E7", "=COUNTIF(C2:C4,\">1\")"))

  ignore(sheet.set_value("A8", @types.Value::Text("Grand total")))
  ignore(sheet.set_formula("D8", "=D6+D7"))
  ignore(sheet.set_formula("E8", "=ROUND(D8,2)"))
  ignore(sheet.set_format("D6", @types.CellFormat::Currency("¥", 2)))
  ignore(sheet.set_format("D7", @types.CellFormat::Currency("¥", 2)))
  ignore(sheet.set_format("D8", @types.CellFormat::Currency("¥", 2)))

  let summary = workbook.add_sheet("Summary")
  ignore(summary.set_value("A1", @types.Value::Text("Metric")))
  ignore(summary.set_value("B1", @types.Value::Text("Value")))
  ignore(summary.set_value("A2", @types.Value::Text("Line items")))
  ignore(summary.set_formula("B2", "=COUNT(Budget!D2:D4)"))
  ignore(summary.set_value("A3", @types.Value::Text("Subtotal")))
  ignore(summary.set_formula("B3", "=Budget!D6"))
  ignore(summary.set_value("A4", @types.Value::Text("Tax")))
  ignore(summary.set_formula("B4", "=Budget!D7"))
  ignore(summary.set_value("A5", @types.Value::Text("Grand total")))
  ignore(summary.set_formula("B5", "=Budget!D8"))
  ignore(summary.set_format("B3", @types.CellFormat::Currency("¥", 2)))
  ignore(summary.set_format("B4", @types.CellFormat::Currency("¥", 2)))
  ignore(summary.set_format("B5", @types.CellFormat::Currency("¥", 2)))
  ignore(summary.set_value("A7", @types.Value::Text("Share of tax")))
  ignore(summary.set_formula("B7", "=IFERROR(Budget!D7/Budget!D8*100,0)"))
  ignore(summary.set_format("B7", @types.CellFormat::Percent(1)))
  ignore(workbook.recalculate_all())
  workbook
}

///|
fn make_app() -> App {
  {
    workbook: make_sample_workbook(),
    active: "Budget",
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
fn App::sheet(self : App) -> @workbook.Sheet {
  match self.workbook.sheet(self.active) {
    Some(sheet) => sheet
    None => self.workbook.add_sheet(self.active)
  }
}

///|
fn App::render(self : App) -> Unit {
  let sheet = self.sheet()
  let selected = @types.Address::new(self.selected_row, self.selected_col).to_a1()
  let dependencies = sheet.dependencies(selected)
  let dep_map : Map[String, Bool] = Map([], capacity=8)
  for dep in dependencies {
    dep_map[dep] = true
  }
  let mut row = 0
  while row < self.rows {
    let mut col = 0
    while col < self.cols {
      let a1 = @types.Address::new(row, col).to_a1()
      let value = sheet.get_value(a1)
      let formula = match sheet.get_formula(a1) {
        Some(text) => text
        None => ""
      }
      let text = sheet.display_value(a1)
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
  let sheet_names = self.workbook.names()
  js_render_tabs(join(sheet_names, "\n"), self.active)
  let selected_value = sheet.get_value(selected)
  let selected_formula = match sheet.get_formula(selected) {
    Some(text) => text
    None => ""
  }
  let bar = if selected_formula != "" {
    selected_formula
  } else {
    selected_value.to_display()
  }
  js_set_formula(bar)
  js_set_selected_label(self.active + "!" + selected)
  js_set_dependencies(join(dependencies, ", "))
  js_set_cell_details(sheet.display_value(selected), selected_formula)
  js_set_format(sheet.get_format(selected).code())
  js_set_status(
    "Ready · \{self.active} · \{sheet_names.length()} worksheet(s)",
  )
  js_set_engine_state("ready")
  js_set_recalc_count(self.recalc_count)
  let entries = sheet.entries()
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
fn App::switch_sheet(self : App, name : String) -> Unit {
  if self.workbook.has_sheet(name) {
    self.active = name
    self.render()
    js_toast("Switched to \{name}")
  }
}

///|
fn App::add_sheet(self : App) -> Unit {
  let mut index = self.workbook.names().length() + 1
  let mut name = "Sheet\{index}"
  while self.workbook.has_sheet(name) {
    index = index + 1
    name = "Sheet\{index}"
  }
  ignore(self.workbook.add_sheet(name))
  self.active = name
  self.selected_row = 0
  self.selected_col = 0
  self.render()
  js_toast("Added worksheet \{name}")
}

///|
fn App::set_format(self : App, code : String) -> Unit {
  let a1 = @types.Address::new(self.selected_row, self.selected_col).to_a1()
  ignore(self.sheet().set_format(a1, @types.CellFormat::parse(code)))
  self.render()
  js_toast("Format updated")
}

///|
fn App::commit(self : App, text : String) -> Unit {
  let sheet = self.sheet()
  let a1 = @types.Address::new(self.selected_row, self.selected_col).to_a1()
  let trimmed = text.trim().to_owned()
  if trimmed.length() == 0 {
    ignore(sheet.set_value(a1, @types.Value::Blank))
  } else if trimmed.get_char(0) == Some('=') {
    ignore(sheet.set_formula(a1, trimmed))
  } else {
    ignore(sheet.set_value(a1, @io.parse_cell_value(trimmed)))
  }
  let changed = self.workbook.recalculate_all()
  self.recalc_count = self.recalc_count + 1
  self.render()
  js_toast("Recalculated \{changed} formula cell(s)")
}

///|
fn App::load_csv(self : App, text : String) -> Unit {
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(@io.load_csv(sheet, text))
  ignore(workbook.recalculate_all())
  self.workbook = workbook
  self.active = "Sheet1"
  self.selected_row = 0
  self.selected_col = 0
  self.recalc_count = self.recalc_count + 1
  self.render()
  js_toast("CSV loaded into Sheet1")
}

///|
fn App::reset(self : App) -> Unit {
  self.workbook = make_sample_workbook()
  self.active = "Budget"
  self.selected_row = 0
  self.selected_col = 0
  self.recalc_count = self.recalc_count + 1
  self.render()
  js_toast("Sample workbook restored")
}

///|
fn App::export_csv(self : App) -> Unit {
  js_download_csv(@io.export_csv_auto(self.sheet()))
  js_toast("Exported \{self.active}.csv")
}

///|
fn main {
  js_init_grid(app.rows, app.cols)
  js_set_on_cell(fn(row, col) { app.select(row, col) })
  js_set_on_commit(fn(text) { app.commit(text) })
  js_set_on_csv(fn(text) { app.load_csv(text) })
  js_set_on_format(fn(code) { app.set_format(code) })
  js_set_on_sheet_select(fn(name) { app.switch_sheet(name) })
  js_bind_actions(fn() { app.reset() }, fn() { app.export_csv() }, fn() {
    app.add_sheet()
  })
  app.render()
}
