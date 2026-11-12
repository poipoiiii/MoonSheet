/// Built-in function registry.
///
/// Functions receive already-evaluated arguments. Control-flow functions such
/// as `IF` and `IFERROR` are handled by the evaluator because they must not
/// evaluate every branch. Range-aware functions (`SUMIF`, `INDEX`, ...) also
/// live in the evaluator because they need the original range shape.

///|
fn upper_string(s : String) -> String {
  let mut out = ""
  for c in s.to_array() {
    out = out + c.to_ascii_uppercase().to_string()
  }
  out
}

///|
fn lower_string(s : String) -> String {
  let mut out = ""
  for c in s.to_array() {
    out = out + c.to_ascii_lowercase().to_string()
  }
  out
}

///|
fn first_error(args : Array[@types.Value]) -> @types.CellError? {
  for value in args {
    match value {
      @types.Value::Error(e) => return Some(e)
      _ => ()
    }
  }
  None
}

///|
fn number_value(n : Int32) -> @types.Value {
  @types.Value::Number(Double::from_int(n))
}

///|
fn bool_value(b : Bool) -> @types.Value {
  @types.Value::Boolean(b)
}

///|
fn as_number(value : @types.Value) -> Double? {
  match value {
    @types.Value::Number(n) => Some(n)
    @types.Value::Boolean(b) => Some(if b { 1.0 } else { 0.0 })
    @types.Value::Blank => Some(0.0)
    @types.Value::Date(d) => Some(Double::from_int(d))
    _ => None
  }
}

///|
fn as_int(value : @types.Value) -> Int32? {
  match as_number(value) {
    Some(n) => Some(n.to_int())
    None => None
  }
}

///|
fn as_text(value : @types.Value) -> String? {
  match value {
    @types.Value::Text(s) => Some(s)
    _ => None
  }
}

///|
fn as_bool(value : @types.Value) -> Bool? {
  match value {
    @types.Value::Boolean(b) => Some(b)
    @types.Value::Number(n) => Some(n != 0.0)
    @types.Value::Blank => Some(false)
    _ => None
  }
}

///|
fn numbers(args : Array[@types.Value]) -> Array[Double] {
  let out : Array[Double] = []
  for value in args {
    match as_number(value) {
      Some(n) => out.push(n)
      None => ()
    }
  }
  out
}

///|
fn substring_chars(s : String, start : Int32, length : Int32) -> String {
  let n = s.char_length()
  let from = if start < 0 { 0 } else { start }
  let to = if from + length > n { n } else { from + length }
  let mut i = from
  let mut out = ""
  while i < to {
    match s.get_char(i) {
      Some(c) => out = out + c.to_string()
      None => ()
    }
    i = i + 1
  }
  out
}

///|
fn find_sub(
  haystack : String,
  needle : String,
  start : Int32,
  ignore_case : Bool,
) -> Int32? {
  let h = if ignore_case { upper_string(haystack) } else { haystack }
  let n = if ignore_case { upper_string(needle) } else { needle }
  let hchars = h.to_array()
  let nchars = n.to_array()
  if nchars.length() == 0 {
    return Some(start)
  }
  let from = if start < 0 { 0 } else { start }
  let mut i = from
  while i + nchars.length() <= hchars.length() {
    let mut j = 0
    let mut matched = true
    while j < nchars.length() {
      if hchars[i + j] != nchars[j] {
        matched = false
        break
      }
      j = j + 1
    }
    if matched {
      return Some(i)
    }
    i = i + 1
  }
  None
}

///|
fn replace_text(
  text : String,
  old : String,
  new : String,
  instance : Int32,
) -> String {
  let chars = text.to_array()
  let old_chars = old.to_array()
  if old_chars.length() == 0 {
    return text
  }
  let mut out = ""
  let mut i = 0
  let mut count = 0
  while i < chars.length() {
    let mut matched = false
    if i + old_chars.length() <= chars.length() {
      let mut j = 0
      let mut ok = true
      while j < old_chars.length() {
        if chars[i + j] != old_chars[j] {
          ok = false
          break
        }
        j = j + 1
      }
      matched = ok
    }
    if matched && (instance == 0 || count == instance - 1) {
      out = out + new
      i = i + old_chars.length()
      count = count + 1
      if instance != 0 {
        return out + substring_chars(text, i, chars.length() - i)
      }
    } else {
      out = out + chars[i].to_string()
      i = i + 1
    }
  }
  out
}

///|
fn days_from_civil(year : Int32, month : Int32, day : Int32) -> Int32 {
  let y = if month <= 2 { year - 1 } else { year }
  let era = if y >= 0 { y / 400 } else { (y - 399) / 400 }
  let yoe = y - era * 400
  let mp = (month + 9) % 12
  let doy = (153 * mp + 2) / 5 + day - 1
  let doe = yoe * 365 + yoe / 4 - yoe / 100 + doy
  era * 146097 + doe - 719468
}

///|
fn civil_from_days(days : Int32) -> (Int32, Int32, Int32) {
  let z = days + 719468
  let era = if z >= 0 { z / 146097 } else { (z - 146096) / 146097 }
  let doe = z - era * 146097
  let yoe = (doe - doe / 1460 + doe / 36524 - doe / 146096) / 365
  let y = yoe + era * 400
  let doy = doe - (365 * yoe + yoe / 4 - yoe / 100)
  let mp = (5 * doy + 2) / 153
  let d = doy - (153 * mp + 2) / 5 + 1
  let m = if mp < 10 { mp + 3 } else { mp - 9 }
  let year = if m <= 2 { y + 1 } else { y }
  (year, m, d)
}

///|
fn date_to_serial(year : Int32, month : Int32, day : Int32) -> Int32 {
  let m0 = month - 1
  let y = year + m0 / 12
  let m = m0 % 12 + 1
  let epoch = days_from_civil(1899, 12, 30)
  let diff = days_from_civil(y, m, day) - epoch
  // Excel's 1900 leap-year bug: serial 60 is the phantom 1900-02-29.
  if days_from_civil(y, m, day) < days_from_civil(1900, 3, 1) {
    diff - 1
  } else {
    diff
  }
}

///|
fn serial_to_date(serial : Int32) -> (Int32, Int32, Int32) {
  let diff = if serial < 61 { serial + 1 } else { serial }
  let epoch = days_from_civil(1899, 12, 30)
  civil_from_days(epoch + diff)
}

///|
fn add_months(serial : Int32, months : Int32) -> Int32 {
  let (year, month, day) = serial_to_date(serial)
  let m0 = month - 1 + months
  let y = year + m0 / 12
  let m = m0 % 12 + 1
  // Clamp to the last valid day of the target month.
  let mut d = day
  while d > 28 {
    let (_, actual_month, _) = serial_to_date(date_to_serial(y, m, d))
    if actual_month == m {
      break
    }
    d = d - 1
  }
  date_to_serial(y, m, d)
}

///|
fn last_day_of_month(year : Int32, month : Int32) -> Int32 {
  let next = date_to_serial(year, month + 1, 1)
  serial_to_date(next - 1).2
}

///|
fn sum(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let mut total = 0.0
      for n in numbers(args) {
        total = total + n
      }
      @types.Value::Number(total)
    }
  }
}

///|
fn product(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let values = numbers(args)
      if values.length() == 0 {
        return @types.Value::Number(0.0)
      }
      let mut total = 1.0
      for n in values {
        total = total * n
      }
      @types.Value::Number(total)
    }
  }
}

///|
fn average(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let values = numbers(args)
      if values.length() == 0 {
        return @types.Value::Error(@types.CellError::DivZero)
      }
      let mut total = 0.0
      for n in values {
        total = total + n
      }
      @types.Value::Number(total / Double::from_int(values.length()))
    }
  }
}

///|
fn min_value(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let values = numbers(args)
      if values.length() == 0 {
        return @types.Value::Number(0.0)
      }
      let mut best = values[0]
      for n in values {
        if n < best {
          best = n
        }
      }
      @types.Value::Number(best)
    }
  }
}

///|
fn max_value(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let values = numbers(args)
      if values.length() == 0 {
        return @types.Value::Number(0.0)
      }
      let mut best = values[0]
      for n in values {
        if n > best {
          best = n
        }
      }
      @types.Value::Number(best)
    }
  }
}

///|
fn count(args : Array[@types.Value]) -> @types.Value {
  let mut total = 0
  for value in args {
    match value {
      @types.Value::Number(_) => total = total + 1
      _ => ()
    }
  }
  number_value(total)
}

///|
fn counta(args : Array[@types.Value]) -> @types.Value {
  let mut total = 0
  for value in args {
    match value {
      @types.Value::Blank => ()
      _ => total = total + 1
    }
  }
  number_value(total)
}

///|
fn countblank(args : Array[@types.Value]) -> @types.Value {
  let mut total = 0
  for value in args {
    match value {
      @types.Value::Blank => total = total + 1
      _ => ()
    }
  }
  number_value(total)
}

///|
fn median(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let values = numbers(args)
      if values.length() == 0 {
        return @types.Value::Error(@types.CellError::DivZero)
      }
      values.sort()
      let n = values.length()
      if n % 2 == 1 {
        @types.Value::Number(values[n / 2])
      } else {
        @types.Value::Number((values[n / 2 - 1] + values[n / 2]) / 2.0)
      }
    }
  }
}

///|
fn variance(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let values = numbers(args)
      let n = values.length()
      if n < 2 {
        return @types.Value::Error(@types.CellError::DivZero)
      }
      let mut total = 0.0
      for x in values {
        total = total + x
      }
      let mean = total / Double::from_int(n)
      let mut squares = 0.0
      for x in values {
        let d = x - mean
        squares = squares + d * d
      }
      @types.Value::Number(squares / Double::from_int(n - 1))
    }
  }
}

///|
fn stdev(args : Array[@types.Value]) -> @types.Value {
  match variance(args) {
    @types.Value::Number(v) => @types.Value::Number(v.sqrt())
    other => other
  }
}

///|
fn sumsq(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let mut total = 0.0
      for n in numbers(args) {
        total = total + n * n
      }
      @types.Value::Number(total)
    }
  }
}

///|
fn large_small(args : Array[@types.Value], largest : Bool) -> @types.Value {
  if args.length() < 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let k = match as_int(args[args.length() - 1]) {
    Some(k) => k
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let values : Array[Double] = []
  let mut i = 0
  while i < args.length() - 1 {
    match as_number(args[i]) {
      Some(n) => values.push(n)
      None => ()
    }
    i = i + 1
  }
  if k < 1 || k > values.length() {
    return @types.Value::Error(@types.CellError::Num)
  }
  values.sort()
  if largest {
    @types.Value::Number(values[values.length() - k])
  } else {
    @types.Value::Number(values[k - 1])
  }
}

///|
fn abs(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match args[0] {
    @types.Value::Number(n) =>
      @types.Value::Number(if n < 0.0 { -n } else { n })
    @types.Value::Error(e) => @types.Value::Error(e)
    _ => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn sign(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_number(args[0]) {
    Some(n) =>
      if n > 0.0 {
        @types.Value::Number(1.0)
      } else if n < 0.0 {
        @types.Value::Number(-1.0)
      } else {
        @types.Value::Number(0.0)
      }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn int_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_number(args[0]) {
    Some(n) => @types.Value::Number(n.floor())
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn trunc_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 && args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let n = match as_number(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let digits = if args.length() == 2 {
    match as_int(args[1]) {
      Some(d) => d
      None => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    0
  }
  let factor = @math.pow(10.0, Double::from_int(digits))
  @types.Value::Number((n * factor).trunc() / factor)
}

///|
fn round_value(args : Array[@types.Value], mode : Int32) -> @types.Value {
  if args.length() != 1 && args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let n = match as_number(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let digits = if args.length() == 2 {
    match as_int(args[1]) {
      Some(d) => d
      None => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    0
  }
  let factor = @math.pow(10.0, Double::from_int(digits))
  let scaled = n * factor
  let rounded = if mode == 0 {
    scaled.round()
  } else if mode > 0 {
    if scaled >= 0.0 {
      scaled.ceil()
    } else {
      scaled.floor()
    }
  } else {
    scaled.trunc()
  }
  @types.Value::Number(rounded / factor)
}

///|
fn ceiling_floor(args : Array[@types.Value], up : Bool) -> @types.Value {
  if args.length() != 1 && args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let n = match as_number(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let significance = if args.length() == 2 {
    match as_number(args[1]) {
      Some(s) => s
      None => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    1.0
  }
  if significance == 0.0 {
    return @types.Value::Error(@types.CellError::DivZero)
  }
  let q = n / significance
  @types.Value::Number(
    if up {
      q.ceil() * significance
    } else {
      q.floor() * significance
    },
  )
}

///|
fn mod_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let a = match as_number(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let b = match as_number(args[1]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  if b == 0.0 {
    @types.Value::Error(@types.CellError::DivZero)
  } else {
    @types.Value::Number(a - b * (a / b).floor())
  }
}

///|
fn power_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match (as_number(args[0]), as_number(args[1])) {
    (Some(a), Some(b)) => @types.Value::Number(@math.pow(a, b))
    _ => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn sqrt_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_number(args[0]) {
    Some(n) =>
      if n < 0.0 {
        @types.Value::Error(@types.CellError::Num)
      } else {
        @types.Value::Number(n.sqrt())
      }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn exp_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_number(args[0]) {
    Some(n) => @types.Value::Number(@math.exp(n))
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn ln_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_number(args[0]) {
    Some(n) =>
      if n <= 0.0 {
        @types.Value::Error(@types.CellError::Num)
      } else {
        @types.Value::Number(@math.ln(n))
      }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn log_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 && args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let n = match as_number(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let base = if args.length() == 2 {
    match as_number(args[1]) {
      Some(b) => b
      None => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    10.0
  }
  if n <= 0.0 || base <= 0.0 || base == 1.0 {
    @types.Value::Error(@types.CellError::Num)
  } else {
    @types.Value::Number(@math.ln(n) / @math.ln(base))
  }
}

///|
fn log10_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_number(args[0]) {
    Some(n) =>
      if n <= 0.0 {
        @types.Value::Error(@types.CellError::Num)
      } else {
        @types.Value::Number(@math.log10(n))
      }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn pi_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 0 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  @types.Value::Number(3.141592653589793)
}

///|
fn len(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_text(args[0]) {
    Some(s) => number_value(s.char_length())
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn left(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 && args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let s = match as_text(args[0]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let n = if args.length() == 2 {
    match as_int(args[1]) {
      Some(n) if n >= 0 => n
      _ => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    1
  }
  @types.Value::Text(substring_chars(s, 0, n))
}

///|
fn right(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 && args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let s = match as_text(args[0]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let n = if args.length() == 2 {
    match as_int(args[1]) {
      Some(n) if n >= 0 => n
      _ => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    1
  }
  let length = s.char_length()
  let start = if n >= length { 0 } else { length - n }
  @types.Value::Text(substring_chars(s, start, n))
}

///|
fn mid(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 3 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let s = match as_text(args[0]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let start = match as_int(args[1]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let length = match as_int(args[2]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  if start < 1 || length < 0 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  @types.Value::Text(substring_chars(s, start - 1, length))
}

///|
fn upper(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_text(args[0]) {
    Some(s) => @types.Value::Text(upper_string(s))
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn lower(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_text(args[0]) {
    Some(s) => @types.Value::Text(lower_string(s))
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn trim_text(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_text(args[0]) {
    Some(s) => @types.Value::Text(s.trim().to_owned())
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn concat(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let mut out = ""
      for value in args {
        match value {
          @types.Value::Blank => ()
          _ => out = out + value.to_display()
        }
      }
      @types.Value::Text(out)
    }
  }
}

///|
fn textjoin(args : Array[@types.Value]) -> @types.Value {
  if args.length() < 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let delimiter = match as_text(args[0]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let ignore_empty = match as_bool(args[1]) {
    Some(b) => b
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let mut out = ""
  let mut first = true
  let mut i = 2
  while i < args.length() {
    let piece = args[i].to_display()
    if !(ignore_empty && piece.length() == 0) {
      if !first {
        out = out + delimiter
      }
      out = out + piece
      first = false
    }
    i = i + 1
  }
  @types.Value::Text(out)
}

///|
fn rept(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let s = match as_text(args[0]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let n = match as_int(args[1]) {
    Some(n) if n >= 0 => n
    _ => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let mut out = ""
  let mut i = 0
  while i < n {
    out = out + s
    i = i + 1
  }
  @types.Value::Text(out)
}

///|
fn find_value(args : Array[@types.Value], ignore_case : Bool) -> @types.Value {
  if args.length() != 2 && args.length() != 3 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let needle = match as_text(args[0]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let haystack = match as_text(args[1]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let start = if args.length() == 3 {
    match as_int(args[2]) {
      Some(n) if n >= 1 => n - 1
      _ => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    0
  }
  match find_sub(haystack, needle, start, ignore_case) {
    Some(index) => number_value(index + 1)
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn substitute(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 3 && args.length() != 4 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let text = match as_text(args[0]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let old = match as_text(args[1]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let new = match as_text(args[2]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let instance = if args.length() == 4 {
    match as_int(args[3]) {
      Some(n) if n >= 1 => n
      _ => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    0
  }
  @types.Value::Text(replace_text(text, old, new, instance))
}

///|
fn replace_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 4 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let text = match as_text(args[0]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let start = match as_int(args[1]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let length = match as_int(args[2]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let new = match as_text(args[3]) {
    Some(s) => s
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  if start < 1 || length < 0 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let prefix = substring_chars(text, 0, start - 1)
  let suffix = substring_chars(text, start - 1 + length, text.char_length())
  @types.Value::Text(prefix + new + suffix)
}

///|
fn value_text(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_text(args[0]) {
    Some(s) =>
      @types.Value::Number(@string.parse_double(s.trim())) catch {
        _ => @types.Value::Error(@types.CellError::ValueErr)
      }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn char_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_int(args[0]) {
    Some(n) =>
      if n < 0 || n > 255 {
        @types.Value::Error(@types.CellError::ValueErr)
      } else {
        @types.Value::Text(n.unsafe_to_char().to_string())
      }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn code_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_text(args[0]) {
    Some(s) =>
      match s.get_char(0) {
        Some(c) => number_value(c.to_int())
        None => @types.Value::Error(@types.CellError::ValueErr)
      }
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn logical_and(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let mut result = true
      for value in args {
        match as_bool(value) {
          Some(b) => result = result && b
          None => return @types.Value::Error(@types.CellError::ValueErr)
        }
      }
      bool_value(result)
    }
  }
}

///|
fn logical_or(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let mut result = false
      for value in args {
        match as_bool(value) {
          Some(b) => result = result || b
          None => return @types.Value::Error(@types.CellError::ValueErr)
        }
      }
      bool_value(result)
    }
  }
}

///|
fn logical_xor(args : Array[@types.Value]) -> @types.Value {
  match first_error(args) {
    Some(e) => @types.Value::Error(e)
    None => {
      let mut result = false
      for value in args {
        match as_bool(value) {
          Some(b) => result = if b { !result } else { result }
          None => return @types.Value::Error(@types.CellError::ValueErr)
        }
      }
      bool_value(result)
    }
  }
}

///|
fn logical_not(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match as_bool(args[0]) {
    Some(b) => bool_value(!b)
    None => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn choose(args : Array[@types.Value]) -> @types.Value {
  if args.length() < 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let index = match as_int(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  if index < 1 || index >= args.length() {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  args[index]
}

///|
fn date_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 3 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let y = match as_int(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let m = match as_int(args[1]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let d = match as_int(args[2]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  @types.Value::Date(date_to_serial(y, m, d))
}

///|
fn date_part(args : Array[@types.Value], part : Int32) -> @types.Value {
  if args.length() != 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let serial = match as_int(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let (year, month, day) = serial_to_date(serial)
  number_value(if part == 0 { year } else if part == 1 { month } else { day })
}

///|
fn edate(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let serial = match as_int(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let months = match as_int(args[1]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  @types.Value::Date(add_months(serial, months))
}

///|
fn eomonth(args : Array[@types.Value]) -> @types.Value {
  if args.length() != 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let serial = match as_int(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let months = match as_int(args[1]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let shifted = add_months(serial, months)
  let (year, month, _) = serial_to_date(shifted)
  @types.Value::Date(
    date_to_serial(year, month, last_day_of_month(year, month)),
  )
}

///|
fn pmt_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() < 3 || args.length() > 5 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let rate = match as_number(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let nper = match as_number(args[1]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let pv = match as_number(args[2]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let fv = if args.length() > 3 {
    match as_number(args[3]) {
      Some(n) => n
      None => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    0.0
  }
  let typ = if args.length() > 4 {
    match as_number(args[4]) {
      Some(n) => n
      None => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    0.0
  }
  if nper == 0.0 {
    return @types.Value::Error(@types.CellError::Num)
  }
  if rate == 0.0 {
    @types.Value::Number(-(pv + fv) / nper)
  } else {
    let growth = @math.pow(1.0 + rate, nper)
    @types.Value::Number(
      -(rate * (pv * growth + fv)) / ((1.0 + rate * typ) * (growth - 1.0)),
    )
  }
}

///|
fn fv_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() < 3 || args.length() > 5 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let rate = match as_number(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let nper = match as_number(args[1]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let pmt = match as_number(args[2]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let pv = if args.length() > 3 {
    match as_number(args[3]) {
      Some(n) => n
      None => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    0.0
  }
  let typ = if args.length() > 4 {
    match as_number(args[4]) {
      Some(n) => n
      None => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    0.0
  }
  if rate == 0.0 {
    @types.Value::Number(-(pv + pmt * nper))
  } else {
    let growth = @math.pow(1.0 + rate, nper)
    @types.Value::Number(
      -(pv * growth + pmt * (1.0 + rate * typ) * (growth - 1.0) / rate),
    )
  }
}

///|
fn pv_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() < 3 || args.length() > 5 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let rate = match as_number(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let nper = match as_number(args[1]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let pmt = match as_number(args[2]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let fv = if args.length() > 3 {
    match as_number(args[3]) {
      Some(n) => n
      None => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    0.0
  }
  let typ = if args.length() > 4 {
    match as_number(args[4]) {
      Some(n) => n
      None => return @types.Value::Error(@types.CellError::ValueErr)
    }
  } else {
    0.0
  }
  if rate == 0.0 {
    @types.Value::Number(-(fv + pmt * nper))
  } else {
    let growth = @math.pow(1.0 + rate, nper)
    @types.Value::Number(
      -(fv + pmt * (1.0 + rate * typ) * (growth - 1.0) / rate) / growth,
    )
  }
}

///|
fn npv_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() < 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let rate = match as_number(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  if rate <= -1.0 {
    return @types.Value::Error(@types.CellError::Num)
  }
  let mut total = 0.0
  let mut i = 1
  while i < args.length() {
    match as_number(args[i]) {
      Some(n) => total = total + n / @math.pow(1.0 + rate, Double::from_int(i))
      None => ()
    }
    i = i + 1
  }
  @types.Value::Number(total)
}

///|
pub fn call(name : String, args : Array[@types.Value]) -> @types.Value? {
  match upper_string(name) {
    "SUM" => Some(sum(args))
    "PRODUCT" => Some(product(args))
    "AVERAGE" => Some(average(args))
    "MIN" => Some(min_value(args))
    "MAX" => Some(max_value(args))
    "COUNT" => Some(count(args))
    "COUNTA" => Some(counta(args))
    "COUNTBLANK" => Some(countblank(args))
    "MEDIAN" => Some(median(args))
    "VAR" => Some(variance(args))
    "STDEV" => Some(stdev(args))
    "SUMSQ" => Some(sumsq(args))
    "LARGE" => Some(large_small(args, true))
    "SMALL" => Some(large_small(args, false))
    "ABS" => Some(abs(args))
    "SIGN" => Some(sign(args))
    "INT" => Some(int_value(args))
    "TRUNC" => Some(trunc_value(args))
    "ROUND" => Some(round_value(args, 0))
    "ROUNDUP" => Some(round_value(args, 1))
    "ROUNDDOWN" => Some(round_value(args, -1))
    "CEILING" => Some(ceiling_floor(args, true))
    "FLOOR" => Some(ceiling_floor(args, false))
    "MOD" => Some(mod_value(args))
    "POWER" => Some(power_value(args))
    "SQRT" => Some(sqrt_value(args))
    "EXP" => Some(exp_value(args))
    "LN" => Some(ln_value(args))
    "LOG" => Some(log_value(args))
    "LOG10" => Some(log10_value(args))
    "PI" => Some(pi_value(args))
    "LEN" => Some(len(args))
    "LEFT" => Some(left(args))
    "RIGHT" => Some(right(args))
    "MID" => Some(mid(args))
    "UPPER" => Some(upper(args))
    "LOWER" => Some(lower(args))
    "TRIM" => Some(trim_text(args))
    "CONCAT" => Some(concat(args))
    "CONCATENATE" => Some(concat(args))
    "TEXTJOIN" => Some(textjoin(args))
    "REPT" => Some(rept(args))
    "FIND" => Some(find_value(args, false))
    "SEARCH" => Some(find_value(args, true))
    "SUBSTITUTE" => Some(substitute(args))
    "REPLACE" => Some(replace_value(args))
    "VALUE" => Some(value_text(args))
    "CHAR" => Some(char_value(args))
    "CODE" => Some(code_value(args))
    "AND" => Some(logical_and(args))
    "OR" => Some(logical_or(args))
    "XOR" => Some(logical_xor(args))
    "NOT" => Some(logical_not(args))
    "TRUE" => Some(bool_value(true))
    "FALSE" => Some(bool_value(false))
    "CHOOSE" => Some(choose(args))
    "DATE" => Some(date_value(args))
    "YEAR" => Some(date_part(args, 0))
    "MONTH" => Some(date_part(args, 1))
    "DAY" => Some(date_part(args, 2))
    "EDATE" => Some(edate(args))
    "EOMONTH" => Some(eomonth(args))
    "PMT" => Some(pmt_value(args))
    "FV" => Some(fv_value(args))
    "PV" => Some(pv_value(args))
    "NPV" => Some(npv_value(args))
    "SIN" => Some(trig(args, 0))
    "COS" => Some(trig(args, 1))
    "TAN" => Some(trig(args, 2))
    "ATAN" => Some(trig(args, 3))
    "ATAN2" => Some(atan2_value(args))
    "RADIANS" => Some(trig(args, 4))
    "DEGREES" => Some(trig(args, 5))
    "FACT" => Some(fact_value(args))
    "QUOTIENT" => Some(quotient_value(args))
    "GEOMEAN" => Some(geomean(args))
    "EXACT" => Some(exact_value(args))
    "PROPER" => Some(proper(args))
    _ => None
  }
}

///|
/// Shared implementation for one-argument trigonometric and angle functions.
/// `kind` selects the operation so the registry stays a flat table.
fn trig(args : Array[@types.Value], kind : Int32) -> @types.Value {
  if args.length() < 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let x = match as_number(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  let result = match kind {
    0 => @math.sin(x)
    1 => @math.cos(x)
    2 => @math.tan(x)
    3 => @math.atan(x)
    4 => x * 3.141592653589793 / 180.0
    _ => x * 180.0 / 3.141592653589793
  }
  @types.Value::Number(result)
}

///|
fn atan2_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() < 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match (as_number(args[0]), as_number(args[1])) {
    (Some(y), Some(x)) => @types.Value::Number(@math.atan2(y, x))
    _ => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn fact_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() < 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let n = match as_int(args[0]) {
    Some(n) => n
    None => return @types.Value::Error(@types.CellError::ValueErr)
  }
  if n < 0 || n > 170 {
    return @types.Value::Error(@types.CellError::Num)
  }
  let mut product = 1.0
  let mut index = 2
  while index <= n {
    product = product * Double::from_int(index)
    index = index + 1
  }
  @types.Value::Number(product)
}

///|
fn quotient_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() < 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  match (as_number(args[0]), as_number(args[1])) {
    (Some(numerator), Some(denominator)) =>
      if denominator == 0.0 {
        @types.Value::Error(@types.CellError::DivZero)
      } else {
        @types.Value::Number(
          Double::from_int((numerator / denominator).to_int()),
        )
      }
    _ => @types.Value::Error(@types.CellError::ValueErr)
  }
}

///|
fn geomean(args : Array[@types.Value]) -> @types.Value {
  let values = numbers(args)
  if values.length() == 0 {
    return @types.Value::Error(@types.CellError::Num)
  }
  let mut total = 0.0
  for value in values {
    if value <= 0.0 {
      return @types.Value::Error(@types.CellError::Num)
    }
    total = total + @math.ln(value)
  }
  @types.Value::Number(@math.exp(total / Double::from_int(values.length())))
}

///|
fn exact_value(args : Array[@types.Value]) -> @types.Value {
  if args.length() < 2 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  @types.Value::Boolean(args[0].to_display() == args[1].to_display())
}

///|
fn is_letter(c : Char) -> Bool {
  (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')
}

///|
fn proper(args : Array[@types.Value]) -> @types.Value {
  if args.length() < 1 {
    return @types.Value::Error(@types.CellError::ValueErr)
  }
  let text = args[0].to_display()
  let mut out = ""
  let mut fresh = true
  for c in text.to_array() {
    if is_letter(c) {
      if fresh {
        out = out + c.to_ascii_uppercase().to_string()
      } else {
        out = out + c.to_ascii_lowercase().to_string()
      }
      fresh = false
    } else {
      out = out + c.to_string()
      fresh = true
    }
  }
  @types.Value::Text(out)
}
