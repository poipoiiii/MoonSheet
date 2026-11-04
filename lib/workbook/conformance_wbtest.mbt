/// Formula conformance checks against a real sheet recalculation path.

///|
fn eval_one(formula : String) -> @types.Value {
  let workbook = Workbook::new()
  let sheet = workbook.add_sheet("Sheet1")
  ignore(sheet.set_formula("A1", formula))
  ignore(sheet.recalculate())
  sheet.get_value("A1")
}

///|
fn check_num(formula : String, expected : Double) -> Unit raise {
  match eval_one(formula) {
    @types.Value::Number(n) => assert_true((n - expected).abs() < 0.000000001)
    other => {
      println("\{formula} => \{other.to_display()}, expected \{expected}")
      assert_true(false)
    }
  }
}

///|
fn check_text(formula : String, expected : String) -> Unit raise {
  match eval_one(formula) {
    @types.Value::Text(text) => assert_eq(text, expected)
    other => {
      println("\{formula} => \{other.to_display()}, expected text \{expected}")
      assert_true(false)
    }
  }
}

///|
fn check_error(formula : String, expected : @types.CellError) -> Unit raise {
  match eval_one(formula) {
    @types.Value::Error(error) => assert_eq(error, expected)
    other => {
      println("\{formula} => \{other.to_display()}, expected error")
      assert_true(false)
    }
  }
}

///|
test "conformance: arithmetic" {
  check_num("=1+2", 3.0)
  check_num("=2*3+4", 10.0)
  check_num("=2^3", 8.0)
  check_num("=10/4", 2.5)
  check_num("=-3+5", 2.0)
  check_error("=1/0", @types.CellError::DivZero)
}

///|
test "conformance: math and stats" {
  check_num("=SUM(1,2,3)", 6.0)
  check_num("=AVERAGE(2,4,6)", 4.0)
  check_num("=MIN(3,1,2)", 1.0)
  check_num("=MAX(3,1,2)", 3.0)
  check_num("=PRODUCT(2,3,4)", 24.0)
  check_num("=ABS(-5)", 5.0)
  check_num("=ROUND(3.14159,2)", 3.14)
  check_num("=ROUNDUP(3.14159,2)", 3.15)
  check_num("=ROUNDDOWN(3.14159,2)", 3.14)
  check_num("=MOD(-3,2)", 1.0)
  check_num("=POWER(2,10)", 1024.0)
  check_num("=SQRT(9)", 3.0)
  check_num("=INT(-2.5)", -3.0)
  check_num("=TRUNC(-2.5)", -2.0)
  check_num("=SIGN(-3)", -1.0)
  check_num("=PI()", 3.141592653589793)
}

///|
test "conformance: text" {
  check_text("=LEFT(\"moonbit\",4)", "moon")
  check_text("=RIGHT(\"moonbit\",3)", "bit")
  check_text("=MID(\"moonbit\",2,3)", "oon")
  check_text("=UPPER(\"moon\")", "MOON")
  check_text("=LOWER(\"MOON\")", "moon")
  check_text("=TRIM(\"  a  \")", "a")
  check_text("=CONCAT(\"a\",\"b\",\"c\")", "abc")
  check_text("=REPT(\"ab\",3)", "ababab")
  check_text("=SUBSTITUTE(\"a-b-c\",\"-\",\"/\")", "a/b/c")
  check_text("=REPLACE(\"moonbit\",1,4,\"sun\")", "sunbit")
  check_text("=CHAR(65)", "A")
}

///|
test "conformance: numbers returned as text checks" {
  check_num("=LEN(\"moonbit\")", 7.0)
  check_num("=FIND(\"oo\",\"moonbit\")", 2.0)
  check_num("=SEARCH(\"OO\",\"moonbit\")", 2.0)
  check_num("=VALUE(\"12.5\")", 12.5)
  check_num("=CODE(\"A\")", 65.0)
}

///|
test "conformance: logic" {
  check_num("=IF(1>0,10,20)", 10.0)
  check_num("=IFERROR(1/0,42)", 42.0)
  check_text("=IF(TRUE,\"yes\",\"no\")", "yes")
  check_text("=CHOOSE(2,\"a\",\"b\",\"c\")", "b")
}

///|
test "conformance: dates" {
  check_num("=YEAR(DATE(2024,1,15))", 2024.0)
  check_num("=MONTH(DATE(2024,1,15))", 1.0)
  check_num("=DAY(DATE(2024,1,15))", 15.0)
  check_num("=DAY(EDATE(DATE(2024,1,31),1))", 29.0)
  check_num("=DAY(EOMONTH(DATE(2024,2,1),0))", 29.0)
  check_num("=MONTH(EOMONTH(DATE(2024,2,1),0))", 2.0)
}

///|
test "conformance: financial" {
  check_num("=PMT(0,10,1000)", -100.0)
  check_num("=FV(0,10,-100,0)", 1000.0)
  check_num("=PV(0,10,-100,0)", 1000.0)
}
