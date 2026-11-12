/// Command-line front end for MoonSheet.

///|
fn usage() -> Unit {
  println("moonsheet 0.1.0")
  println("usage:")
  println("  moonsheet eval <formula>       evaluate a single formula")
  println("  moonsheet calc <csv>           calculate an inline CSV workbook")
  println("  moonsheet json <workbook-json> round-trip a JSON workbook")
  println(
    "  moonsheet validate <json>      validate and recalculate a JSON workbook",
  )
  println(
    "  moonsheet stress <rows>        build and recalculate a synthetic sheet",
  )
  println(
    "  moonsheet bench [rows]         compare full vs incremental recalculation",
  )
  println(
    "  moonsheet xlsx-in <file>       import an XLSX file and recalculate",
  )
  println("  moonsheet xlsx-out <file>      write the sample model as XLSX")
  println("  moonsheet help                 show this help")
  println("")
  println("In inline CSV, use \\n for a new row: \"10,20\\n=A1+B1,30\"")
}

///|
fn normalize_escapes(text : String) -> String {
  let chars = text.to_array()
  let mut out = ""
  let mut i = 0
  while i < chars.length() {
    if chars[i] == '\\' && i + 1 < chars.length() {
      let next = chars[i + 1]
      if next == 'n' {
        out = out + "\n"
        i = i + 2
      } else if next == 't' {
        out = out + "\t"
        i = i + 2
      } else if next == '\\' {
        out = out + "\\"
        i = i + 2
      } else {
        out = out + chars[i].to_string()
        i = i + 1
      }
    } else {
      out = out + chars[i].to_string()
      i = i + 1
    }
  }
  out
}

///|
fn eval_command(args : Array[String]) -> Unit {
  if args.length() < 3 {
    println("usage: moonsheet eval <formula>")
    return
  }
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_formula("A1", args[2]))
  ignore(sheet.recalculate())
  println(sheet.get_value("A1").to_display())
}

///|
fn calc_command(args : Array[String]) -> Unit {
  if args.length() < 3 {
    println("usage: moonsheet calc <csv>")
    return
  }
  let csv = normalize_escapes(args[2])
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(@io.load_csv(sheet, csv))
  ignore(sheet.recalculate())
  println(@io.export_csv_auto(sheet))
}

///|
fn json_command(args : Array[String]) -> Unit {
  if args.length() < 3 {
    println("usage: moonsheet json <workbook-json>")
    return
  }
  match @io.import_json(args[2]) {
    Some(workbook) => {
      ignore(workbook.recalculate_all())
      println(@io.export_json(workbook))
    }
    None => println("invalid workbook json")
  }
}

///|
fn validate_command(args : Array[String]) -> Unit {
  if args.length() < 3 {
    println("usage: moonsheet validate <workbook-json>")
    return
  }
  match @io.import_json(args[2]) {
    Some(workbook) => {
      let cells = workbook.recalculate_all()
      println(
        "ok: \{workbook.names().length()} sheet(s), \{cells} formula cell(s)",
      )
    }
    None => println("invalid workbook json")
  }
}

///|
fn stress_command(args : Array[String]) -> Unit {
  let rows = if args.length() >= 3 { parse_rows(args[2]) } else { 100 }
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  let mut row = 1
  while row <= rows {
    ignore(sheet.set_value("A\{row}", @types.Value::Number(1.0)))
    ignore(sheet.set_formula("B\{row}", "=A\{row}+1"))
    ignore(sheet.set_formula("C\{row}", "=B\{row}*2"))
    row = row + 1
  }
  ignore(sheet.recalculate())
  println("ok: \{rows} rows, \{rows * 3} cells")
}

///|
/// Compare full and incremental recalculation on the same workbook. The metric
/// is the number of formula cells actually evaluated, which is deterministic
/// and does not depend on the machine or the backend.
fn bench_command(args : Array[String]) -> Unit {
  let rows = if args.length() >= 3 { parse_rows(args[2]) } else { 500 }
  let workbook = @workbook.Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  let mut row = 1
  while row <= rows {
    ignore(sheet.set_value("A\{row}", @types.Value::Number(1.0)))
    ignore(sheet.set_formula("B\{row}", "=A\{row}+1"))
    ignore(sheet.set_formula("C\{row}", "=B\{row}*2"))
    row = row + 1
  }
  let formula_cells = rows * 2
  let full = sheet.recalculate()
  println(
    "bench: \{rows} rows, \{formula_cells} formula cells (value -> formula -> formula chain)",
  )
  println("  full recalculation         : \{full} cells evaluated")
  ignore(sheet.set_value("A1", @types.Value::Number(2.0)))
  let incremental = sheet.recalculate()
  println(
    "  one value edit, incremental: \{incremental} cells evaluated (\{percent(incremental, full)} of full)",
  )
  ignore(sheet.set_formula("B2", "=A2+2"))
  let after_formula_edit = sheet.recalculate()
  println(
    "  one formula edit           : \{after_formula_edit} cells evaluated (graph rebuild)",
  )
  let unchanged = sheet.recalculate()
  println("  no edit                    : \{unchanged} cells evaluated")

  let book = @workbook.Workbook::new()
  let assumptions = book.add_sheet("Assumptions")
  let income = book.add_sheet("Income")
  let mut index = 1
  while index <= rows {
    ignore(assumptions.set_value("A\{index}", @types.Value::Number(1000.0)))
    ignore(income.set_formula("B\{index}", "=Assumptions!A\{index}*2"))
    index = index + 1
  }
  let book_full = book.recalculate_all()
  ignore(assumptions.set_value("A\{rows / 2}", @types.Value::Number(1200.0)))
  let book_incremental = book.recalculate_all()
  println("")
  println("workbook: Assumptions!A1:A\{rows} -> Income!B1:B\{rows}")
  println("  full recalculation         : \{book_full} cells evaluated")
  println(
    "  one assumption edit        : \{book_incremental} cells evaluated (\{percent(book_incremental, book_full)} of full)",
  )
}

///|
/// Read an XLSX file through the `mbtexcel` adapter, recalculate, and report.
fn xlsx_in_command(args : Array[String]) -> Unit {
  if args.length() < 3 {
    println("usage: moonsheet xlsx-in <file.xlsx>")
    return
  }
  let read : Result[Bytes, Error] = Ok(@fs.read_file_to_bytes(args[2])) catch {
    error => Err(error)
  }
  match read {
    Err(error) => println("read failed: \{error}")
    Ok(bytes) =>
      match @xlsx.import_bytes(bytes) {
        Err(message) => println(message)
        Ok(workbook) => {
          let cells = workbook.recalculate_all()
          println(
            "ok: \{workbook.names().length()} sheet(s), \{cells} formula cell(s) recalculated",
          )
          for name in workbook.names() {
            match workbook.sheet(name) {
              Some(sheet) =>
                println(
                  "  \{name}: \{sheet.entries().length()} populated cell(s)",
                )
              None => ()
            }
          }
        }
      }
  }
}

///|
/// Write the built-in three-sheet model to an XLSX file.
fn xlsx_out_command(args : Array[String]) -> Unit {
  if args.length() < 3 {
    println("usage: moonsheet xlsx-out <file.xlsx>")
    return
  }
  let workbook = @workbook.Workbook::new()
  let assumptions = workbook.add_sheet("Assumptions")
  ignore(assumptions.set_value("A1", @types.Value::Text("Driver")))
  ignore(assumptions.set_value("B1", @types.Value::Text("Value")))
  ignore(assumptions.set_value("A2", @types.Value::Text("Units")))
  ignore(assumptions.set_value("B2", @types.Value::Number(120.0)))
  ignore(assumptions.set_value("A3", @types.Value::Text("Price")))
  ignore(assumptions.set_value("B3", @types.Value::Number(25.0)))
  ignore(assumptions.set_value("A4", @types.Value::Text("Tax rate")))
  ignore(assumptions.set_value("B4", @types.Value::Number(0.08)))
  let income = workbook.add_sheet("Income")
  ignore(income.set_formula("B2", "=Assumptions!B2*Assumptions!B3"))
  ignore(income.set_formula("B3", "=B2*Assumptions!B4"))
  ignore(income.set_formula("B4", "=B2-B3"))
  let balance = workbook.add_sheet("Balance")
  ignore(balance.set_formula("B2", "=Income!B4"))
  ignore(balance.set_formula("B3", "=B2*0.3"))
  ignore(workbook.recalculate_all())
  match @xlsx.export_bytes(workbook) {
    Err(message) => println(message)
    Ok(bytes) => {
      let write : Result[Unit, Error] = Ok(
        @fs.write_bytes_to_file(args[2], bytes),
      ) catch {
        error => Err(error)
      }
      match write {
        Err(error) => println("write failed: \{error}")
        Ok(_) =>
          println("ok: wrote \{args[2]} (\{workbook.names().length()} sheets)")
      }
    }
  }
}

///|
fn percent(part : Int32, whole : Int32) -> String {
  if whole <= 0 {
    return "n/a"
  }
  let tenths = part * 1000 / whole
  "\{tenths / 10}.\{tenths % 10}%"
}

///|
fn parse_rows(text : String) -> Int32 {
  let mut value = 0
  for c in text.to_array() {
    if c >= '0' && c <= '9' {
      value = value * 10 + (c.to_int() - '0'.to_int())
    } else {
      return 100
    }
  }
  if value <= 0 {
    100
  } else {
    value
  }
}

///|
fn main {
  let args = @env.args()
  if args.length() < 2 {
    usage()
    return
  }
  match args[1] {
    "eval" => eval_command(args)
    "calc" => calc_command(args)
    "json" => json_command(args)
    "validate" => validate_command(args)
    "stress" => stress_command(args)
    "bench" => bench_command(args)
    "xlsx-in" => xlsx_in_command(args)
    "xlsx-out" => xlsx_out_command(args)
    "help" => usage()
    _ => {
      println("unknown command: \{args[1]}")
      usage()
    }
  }
}
