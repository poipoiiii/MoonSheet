/// The web demo is a JavaScript target. This stub keeps non-JS backend checks
/// green without pulling DOM FFI into wasm/native builds.

///|
fn main {
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_value("A1", @types.Value::Number(1.0)))
  ignore(@io.parse_cell_value("1"))
  println("MoonSheet web demo targets JavaScript. Run web/build.ps1.")
}
