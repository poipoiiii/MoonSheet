const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
function _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib5types5Value6Number.prototype.$tag = 0;
function _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib5types5Value4Text.prototype.$tag = 1;
function _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean.prototype.$tag = 2;
function _M0DTP49poipoiiii9moonsheet3lib5types5Value4Date(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib5types5Value4Date.prototype.$tag = 3;
function _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib5types5Value5Error.prototype.$tag = 4;
function _M0DTP49poipoiiii9moonsheet3lib5types5Value5Blank() {}
_M0DTP49poipoiiii9moonsheet3lib5types5Value5Blank.prototype.$tag = 5;
const _M0DTP49poipoiiii9moonsheet3lib5types5Value5Blank__ = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Blank();
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP49poipoiiii9moonsheet3lib7formula4Expr6Number(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib7formula4Expr6Number.prototype.$tag = 0;
function _M0DTP49poipoiiii9moonsheet3lib7formula4Expr4Text(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib7formula4Expr4Text.prototype.$tag = 1;
function _M0DTP49poipoiiii9moonsheet3lib7formula4Expr7Boolean(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib7formula4Expr7Boolean.prototype.$tag = 2;
function _M0DTP49poipoiiii9moonsheet3lib7formula4Expr5Error(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib7formula4Expr5Error.prototype.$tag = 3;
function _M0DTP49poipoiiii9moonsheet3lib7formula4Expr3Ref(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib7formula4Expr3Ref.prototype.$tag = 4;
function _M0DTP49poipoiiii9moonsheet3lib7formula4Expr5Range(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib7formula4Expr5Range.prototype.$tag = 5;
function _M0DTP49poipoiiii9moonsheet3lib7formula4Expr5Unary(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP49poipoiiii9moonsheet3lib7formula4Expr5Unary.prototype.$tag = 6;
function _M0DTP49poipoiiii9moonsheet3lib7formula4Expr6Binary(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP49poipoiiii9moonsheet3lib7formula4Expr6Binary.prototype.$tag = 7;
function _M0DTP49poipoiiii9moonsheet3lib7formula4Expr4Call(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP49poipoiiii9moonsheet3lib7formula4Expr4Call.prototype.$tag = 8;
function _M0DTP49poipoiiii9moonsheet3lib7formula4Expr4Name(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib7formula4Expr4Name.prototype.$tag = 9;
function _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGiE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $oob() {
  throw new Error("Index out of bounds");
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function _M0TPB3MapGsbE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGibE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRP49poipoiiii9moonsheet3lib8workbook4CellE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRP49poipoiiii9moonsheet3lib7formula4ExprE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRP49poipoiiii9moonsheet3lib5types5ValueE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRPB5ArrayGiEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsbE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRP49poipoiiii9moonsheet3lib8workbook4CellE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGibE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRP49poipoiiii9moonsheet3lib5types5ValueE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRP49poipoiiii9moonsheet3lib7formula4ExprE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRPB5ArrayGiEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGRPB5ArrayGiEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGiEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGiEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGiEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGiEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPB5EntryGiRP49poipoiiii9moonsheet3lib8workbook4CellEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGiRP49poipoiiii9moonsheet3lib7formula4ExprEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGibEE(param0) {
  this.val = param0;
}
function _M0TPB12MutArrayViewGdE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $i64_clz(a) {
  a = BigInt.asUintN(64, a);
  if (a === 0n) return 64;
  const hi = Number(a >> 32n);
  if (hi !== 0) {
    return Math.clz32(hi);
  }
  return 32 + Math.clz32(Number(a & 0xffffffffn));
}
function _M0TPC28internal7strconv12EiselProduct(param0, param1) {
  this.lo = param0;
  this.hi = param1;
}
function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
  this.overflowed = param5;
}
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $f64_convert_i64_u(a) {
  return Number(a);
}
function _M0TP49poipoiiii9moonsheet3lib5types7Address(param0, param1) {
  this.row = param0;
  this.col = param1;
}
function _M0TP49poipoiiii9moonsheet3lib5types5Range(param0, param1) {
  this.start = param0;
  this.end = param1;
}
function _M0TP49poipoiiii9moonsheet3lib7formula10ParseError(param0, param1) {
  this.message = param0;
  this.position = param1;
}
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token6Number(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token6Number.prototype.$tag = 0;
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token4Text(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token4Text.prototype.$tag = 1;
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Ident(param0) {
  this._0 = param0;
}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token5Ident.prototype.$tag = 2;
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token4Plus() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token4Plus.prototype.$tag = 3;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token4Plus__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token4Plus();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Minus() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token5Minus.prototype.$tag = 4;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Minus__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Minus();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token4Star() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token4Star.prototype.$tag = 5;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token4Star__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token4Star();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Slash() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token5Slash.prototype.$tag = 6;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Slash__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Slash();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Caret() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token5Caret.prototype.$tag = 7;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Caret__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Caret();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token6LParen() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token6LParen.prototype.$tag = 8;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token6LParen__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token6LParen();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token6RParen() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token6RParen.prototype.$tag = 9;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token6RParen__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token6RParen();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Comma() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token5Comma.prototype.$tag = 10;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Comma__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Comma();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Colon() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token5Colon.prototype.$tag = 11;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Colon__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Colon();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Eq() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token2Eq.prototype.$tag = 12;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Eq__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Eq();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Ne() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token2Ne.prototype.$tag = 13;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Ne__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Ne();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Lt() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token2Lt.prototype.$tag = 14;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Lt__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Lt();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Le() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token2Le.prototype.$tag = 15;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Le__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Le();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Gt() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token2Gt.prototype.$tag = 16;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Gt__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Gt();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Ge() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token2Ge.prototype.$tag = 17;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Ge__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Ge();
function _M0DTP49poipoiiii9moonsheet3lib7formula5Token3Eof() {}
_M0DTP49poipoiiii9moonsheet3lib7formula5Token3Eof.prototype.$tag = 18;
const _M0DTP49poipoiiii9moonsheet3lib7formula5Token3Eof__ = new _M0DTP49poipoiiii9moonsheet3lib7formula5Token3Eof();
function _M0DTPC16result6ResultGRPB5ArrayGRP49poipoiiii9moonsheet3lib7formula5TokenERP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP49poipoiiii9moonsheet3lib7formula5TokenERP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP49poipoiiii9moonsheet3lib7formula5TokenERP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP49poipoiiii9moonsheet3lib7formula5TokenERP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP49poipoiiii9moonsheet3lib7formula6Parser(param0, param1) {
  this.tokens = param0;
  this.pos = param1;
}
function _M0TP49poipoiiii9moonsheet3lib4eval11EvalContext(param0, param1) {
  this.get_value = param0;
  this.get_range = param1;
}
function _M0TP49poipoiiii9moonsheet3lib5graph15DependencyGraph(param0, param1) {
  this.precedents = param0;
  this.dependents = param1;
}
function _M0TPB9ArrayViewGUiRPB5ArrayGiEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP49poipoiiii9moonsheet3lib8workbook5Sheet(param0, param1, param2, param3, param4, param5) {
  this.name = param0;
  this.cells = param1;
  this.graph = param2;
  this.dirty = param3;
  this.graph_valid = param4;
  this.full_recalc = param5;
}
function _M0TPB9ArrayViewGUiRP49poipoiiii9moonsheet3lib8workbook4CellEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUibEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP49poipoiiii9moonsheet3lib8workbook8Workbook(param0) {
  this.sheets = param0;
}
function _M0TPB9ArrayViewGUsRP49poipoiiii9moonsheet3lib8workbook5SheetEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiRP49poipoiiii9moonsheet3lib7formula4ExprEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiRP49poipoiiii9moonsheet3lib5types5ValueEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP49poipoiiii9moonsheet3lib8workbook4Cell(param0, param1) {
  this.formula = param0;
  this.value = param1;
}
function _M0TP39poipoiiii9moonsheet3web3App(param0, param1, param2, param3, param4, param5) {
  this.sheet = param0;
  this.selected_row = param1;
  this.selected_col = param2;
  this.recalc_count = param3;
  this.rows = param4;
  this.cols = param5;
}
const _M0FP39poipoiiii9moonsheet3web16js__render__cell = function(row, col, text, kind, formula, selected, dependency) {
   const el = document.getElementById('cell-' + row + '-' + col);
   if (!el) return;
   el.className = 'cell ' + kind;
   el.textContent = text;
   if (formula) {
     el.classList.add('formula');
     el.title = formula;
   } else {
     el.removeAttribute('title');
   }
   if (selected) el.classList.add('selected');
   if (dependency) el.classList.add('dep');
   el.dataset.value = text;
 };
const _M0FP39poipoiiii9moonsheet3web22js__set__cell__details = function(value, formula) {
   document.getElementById('cellValue').textContent = value || '—';
   document.getElementById('cellFormula').textContent = formula || '—';
 };
const _M0FP39poipoiiii9moonsheet3web21js__set__dependencies = function(text) {
   document.getElementById('dependencies').textContent = text || '—';
 };
const _M0FP39poipoiiii9moonsheet3web22js__set__engine__state = function(text) {
   document.getElementById('engineState').textContent = text;
 };
const _M0FP39poipoiiii9moonsheet3web16js__set__formula = function(text) {
   document.getElementById('formulaInput').value = text;
 };
const _M0FP39poipoiiii9moonsheet3web22js__set__recalc__count = function(count) {
   document.getElementById('recalcCount').textContent = String(count);
 };
const _M0FP39poipoiiii9moonsheet3web24js__set__selected__label = function(text) {
   document.getElementById('cellLabel').textContent = text;
   document.getElementById('cellBadge').textContent = text;
 };
const _M0FP39poipoiiii9moonsheet3web14js__set__stats = function(text) {
   document.getElementById('stats').textContent = text;
 };
const _M0FP39poipoiiii9moonsheet3web15js__set__status = function(text) {
   document.getElementById('status').textContent = text;
 };
function _M0TPB9ArrayViewGUsbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FP39poipoiiii9moonsheet3web9js__toast = function(text) {
   const g = (globalThis.__ms = globalThis.__ms || {});
   const toast = document.getElementById('toast');
   toast.textContent = text;
   toast.classList.add('show');
   if (g.toastTimer) clearTimeout(g.toastTimer);
   g.toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
 };
const _M0FP39poipoiiii9moonsheet3web17js__download__csv = function(text) {
   const blob = new Blob([text], { type: 'text/csv;charset=utf-8' });
   const link = document.createElement('a');
   link.href = URL.createObjectURL(blob);
   link.download = 'moonsheet.csv';
   link.click();
   setTimeout(() => URL.revokeObjectURL(link.href), 1200);
 };
const _M0FP39poipoiiii9moonsheet3web17js__bind__actions = function(onNew, onExport) {
   const g = globalThis.__ms;
   const input = document.getElementById('formulaInput');
   const commit = () => {
     if (g.onCommit) g.onCommit(input.value);
   };
   const newBtn = document.getElementById('newBtn');
   if (newBtn) newBtn.addEventListener('click', onNew);
   const exportBtn = document.getElementById('exportBtn');
   if (exportBtn) exportBtn.addEventListener('click', onExport);
   const commitBtn = document.getElementById('commitBtn');
   if (commitBtn) commitBtn.addEventListener('click', commit);
   input.addEventListener('keydown', (e) => {
     if (e.key === 'Enter') {
       e.preventDefault();
       commit();
     }
   });
   const loadBtn = document.getElementById('loadBtn');
   const file = document.getElementById('csvFile');
   if (loadBtn && file) {
     loadBtn.addEventListener('click', () => file.click());
     file.addEventListener('change', (e) => {
       const picked = e.target.files && e.target.files[0];
       if (!picked) return;
       const reader = new FileReader();
       reader.onload = () => {
         if (g.onCsvText) g.onCsvText(String(reader.result));
       };
       reader.readAsText(picked);
       e.target.value = '';
     });
   }
   document.querySelectorAll('.chip[data-formula]').forEach((chip) => {
     chip.addEventListener('click', () => {
       input.value = chip.dataset.formula;
       input.focus();
     });
   });
 };
const _M0FP39poipoiiii9moonsheet3web14js__init__grid = function(rows, cols) {
   const g = (globalThis.__ms = globalThis.__ms || {});
   const host = document.getElementById('sheet');
   host.innerHTML = '';
   host.style.gridTemplateColumns = '46px repeat(' + cols + ', minmax(92px, 1fr))';
   const colName = (i) => {
     let s = '';
     let n = i + 1;
     while (n > 0) {
       const m = (n - 1) % 26;
       s = String.fromCharCode(65 + m) + s;
       n = Math.floor((n - 1) / 26);
     }
     return s;
   };
   const corner = document.createElement('div');
   corner.className = 'corner';
   host.appendChild(corner);
   for (let c = 0; c < cols; c++) {
     const head = document.createElement('div');
     head.className = 'colhead';
     head.textContent = colName(c);
     host.appendChild(head);
   }
   for (let r = 0; r < rows; r++) {
     const rowHead = document.createElement('div');
     rowHead.className = 'rowhead';
     rowHead.textContent = String(r + 1);
     host.appendChild(rowHead);
     for (let c = 0; c < cols; c++) {
       const cell = document.createElement('div');
       cell.className = 'cell';
       cell.id = 'cell-' + r + '-' + c;
       cell.dataset.row = String(r);
       cell.dataset.col = String(c);
       cell.tabIndex = 0;
       cell.addEventListener('click', () => {
         if (g.onCellClick) g.onCellClick(r, c);
       });
       cell.addEventListener('keydown', (e) => {
         if (e.key === 'Enter') {
           e.preventDefault();
           if (g.onCellClick) g.onCellClick(r, c);
           document.getElementById('formulaInput').focus();
         }
       });
       host.appendChild(cell);
     }
   }
 };
const _M0FP39poipoiiii9moonsheet3web17js__set__on__cell = function(cb) {
   (globalThis.__ms = globalThis.__ms || {}).onCellClick = cb;
 };
const _M0FP39poipoiiii9moonsheet3web19js__set__on__commit = function(cb) {
   (globalThis.__ms = globalThis.__ms || {}).onCommit = cb;
 };
const _M0FP39poipoiiii9moonsheet3web16js__set__on__csv = function(cb) {
   (globalThis.__ms = globalThis.__ms || {}).onCsvText = cb;
 };
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPB4Iter4nextN6constrS80GiE = 0;
const _M0MPB4Iter4nextN6constrS81GiE = 0;
const _M0MPB4Iter4nextN6constrS88GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS89GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS96GcE = 0;
const _M0MPB4Iter4nextN6constrS97GcE = 0;
const _M0MPB4Iter3newN6constrS106GiE = 0;
const _M0MPB4Iter3newN6constrS112GRPC16string10StringViewE = 0;
const _M0MPB4Iter3newN6constrS118GcE = 0;
const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
const _M0FPC28internal7strconv27eisel__lemire__pow10__table = [18054884314459144840n, 1671618768450675795n, 11284302696536965525n, 1044761730281672372n, 14105378370671206906n, 5917638181279478369n, 17631722963339008632n, 16620419763454123769n, 11019826852086880395n, 10387762352158827356n, 13774783565108600494n, 8373016921771146291n, 17218479456385750618n, 1242899115359157055n, 10761549660241094136n, 5388497965526861063n, 13451937075301367670n, 6735622456908576329n, 16814921344126709587n, 17642900107990496220n, 10509325840079193492n, 8720969558280366185n, 13136657300098991865n, 10901211947850457732n, 16420821625123739831n, 18238200953240460069n, 10263013515702337394n, 18316404623416369399n, 12828766894627921743n, 13672133742415685941n, 16035958618284902179n, 12478481159592219522n, 10022474136428063862n, 5493207715531443249n, 12528092670535079827n, 16089881681269079869n, 15660115838168849784n, 15500666083158961933n, 9787572398855531115n, 9687916301974351208n, 12234465498569413894n, 7498209359040551106n, 15293081873211767368n, 149389661945913074n, 9558176170757354605n, 93368538716195671n, 11947720213446693256n, 4728396691822632493n, 14934650266808366570n, 5910495864778290617n, 9334156416755229106n, 8305745933913819539n, 11667695520944036383n, 1158810380537498616n, 14584619401180045478n, 15283571030954036982n, 18230774251475056848n, 9881091751837770420n, 11394233907171910530n, 6175682344898606512n, 14242792383964888162n, 16942974967978033949n, 17803490479956110203n, 11955346673117766628n, 11127181549972568877n, 5166248661484910190n, 13908976937465711096n, 11069496845283525642n, 17386221171832138870n, 13836871056604407053n, 10866388232395086794n, 4036358391950366504n, 13582985290493858492n, 14268820026792733938n, 16978731613117323115n, 17836025033490917422n, 10611707258198326947n, 8841672636718129437n, 13264634072747908684n, 6440404777470273892n, 16580792590934885855n, 8050505971837842365n, 10362995369334303659n, 11949095260039733334n, 12953744211667879574n, 10324683056622278764n, 16192180264584849468n, 3682481783923072647n, 10120112665365530917n, 11524923151806696212n, 12650140831706913647n, 571095884476206553n, 15812676039633642058n, 14548927910877421904n, 9882922524771026286n, 13704765962725776594n, 12353653155963782858n, 7907585416552444934n, 15442066444954728573n, 661109733835780360n, 9651291528096705358n, 2719036592861056677n, 12064114410120881697n, 12622167777931096654n, 15080143012651102122n, 1942651667131707105n, 9425089382906938826n, 5825843310384704845n, 11781361728633673532n, 16505676174835656864n, 14726702160792091916n, 2185351144835019464n, 18408377700990114895n, 2731688931043774330n, 11505236063118821809n, 8624834609543440812n, 14381545078898527261n, 15392729280356688919n, 17976931348623159077n, 5405853545163697437n, 11235582092889474423n, 5684501474941004850n, 14044477616111843029n, 2493940825248868159n, 17555597020139803786n, 7729112049988473103n, 10972248137587377366n, 9442381049670183593n, 13715310171984221708n, 2579604275232953683n, 17144137714980277135n, 3224505344041192104n, 10715086071862673209n, 8932844867666826921n, 13393857589828341511n, 15777742103010921555n, 16742321987285426889n, 15110491610336264040n, 10463951242053391806n, 2526528228819083169n, 13079939052566739757n, 12381532322878629770n, 16349923815708424697n, 1641857348316123500n, 10218702384817765435n, 12555375888766046947n, 12773377981022206794n, 11082533842530170780n, 15966722476277758493n, 4629795266307937667n, 9979201547673599058n, 5199465050656154994n, 12474001934591998822n, 15722703350174969551n, 15592502418239998528n, 10430007150863936130n, 9745314011399999080n, 6518754469289960081n, 12181642514249998850n, 8148443086612450102n, 15227053142812498563n, 962181821410786819n, 9516908214257811601n, 16742264702877599426n, 11896135267822264502n, 7092772823314835570n, 14870169084777830627n, 18089338065998320271n, 9293855677986144142n, 8999993282035256217n, 11617319597482680178n, 2026619565689294464n, 14521649496853350222n, 11756646493966393888n, 18152061871066687778n, 5472436080603216552n, 11345038669416679861n, 8031958568804398249n, 14181298336770849826n, 14651634229432885715n, 17726622920963562283n, 9091170749936331336n, 11079139325602226427n, 3376138709496513133n, 13848924157002783033n, 18055231442152805128n, 17311155196253478792n, 8733981247408842698n, 10819471997658424245n, 5458738279630526686n, 13524339997073030306n, 11435108867965546262n, 16905424996341287883n, 5070514048102157020n, 10565890622713304927n, 863228270850154185n, 13207363278391631158n, 14914093393844856443n, 16509204097989538948n, 9419244705451294746n, 10318252561243461842n, 15110399977761835024n, 12897815701554327303n, 9664627935347517973n, 16122269626942909129n, 7469098900757009562n, 10076418516839318205n, 16197401859041600736n, 12595523146049147757n, 6411694268519837208n, 15744403932561434696n, 12626303854077184414n, 9840252457850896685n, 7891439908798240259n, 12300315572313620856n, 14475985904425188227n, 15375394465392026070n, 18094982380531485284n, 9609621540870016294n, 6697677969404790399n, 12012026926087520367n, 17595469498610763806n, 15015033657609400459n, 17382650854836066854n, 9384396036005875287n, 8558313775058847832n, 11730495045007344109n, 6086206200396171886n, 14663118806259180136n, 12219443768922602761n, 18328898507823975170n, 15274304711153253452n, 11455561567389984481n, 14158126462898171311n, 14319451959237480602n, 3862600023340550427n, 17899314949046850752n, 14051622066030463842n, 11187071843154281720n, 8782263791269039901n, 13983839803942852150n, 10977829739086299876n, 17479799754928565188n, 4498915137003099037n, 10924874846830353242n, 12035193997481712706n, 13656093558537941553n, 5820620459997365075n, 17070116948172426941n, 11887461593424094248n, 10668823092607766838n, 9735506505103752857n, 13336028865759708548n, 2946011094524915263n, 16670036082199635685n, 3682513868156144079n, 10418772551374772303n, 4607414176811284001n, 13023465689218465379n, 1147581702586717097n, 16279332111523081723n, 15269535183515560084n, 10174582569701926077n, 7237616480483531100n, 12718228212127407596n, 13658706619031801779n, 15897785265159259495n, 17073383273789752224n, 9936115790724537184n, 17588393573759676996n, 12420144738405671481n, 3538747893490044629n, 15525180923007089351n, 9035120885289943691n, 9703238076879430844n, 12564479580947296663n, 12129047596099288555n, 15705599476184120828n, 15161309495124110694n, 15020313326802763131n, 9475818434452569184n, 4776009810824339053n, 11844773043065711480n, 5970012263530423816n, 14805966303832139350n, 7462515329413029771n, 9253728939895087094n, 52386062455755702n, 11567161174868858867n, 9288854614924470436n, 14458951468586073584n, 6999382250228200141n, 18073689335732591980n, 8749227812785250177n, 11296055834832869987n, 14691639419845557168n, 14120069793541087484n, 13752863256379558556n, 17650087241926359355n, 17191079070474448196n, 11031304526203974597n, 8438581409832836170n, 13789130657754968246n, 15159912780718433117n, 17236413322193710308n, 9726518939043265588n, 10772758326371068942n, 15302446373756816800n, 13465947907963836178n, 9904685930341245193n, 16832434884954795223n, 3157485376071780683n, 10520271803096747014n, 8890957387685944783n, 13150339753870933768n, 1890324697752655170n, 16437924692338667210n, 2362905872190818963n, 10273702932711667006n, 6088502188546649756n, 12842128665889583757n, 16833999772538088003n, 16052660832361979697n, 7207441660390446292n, 10032913020226237310n, 16033866083812498692n, 12541141275282796638n, 10818960567910847557n, 15676426594103495798n, 4300328673033783639n, 9797766621314684873n, 16522763475928278486n, 12247208276643356092n, 6818396289628184396n, 15309010345804195115n, 8522995362035230495n, 9568131466127621947n, 3021029092058325107n, 11960164332659527433n, 17611344420355070096n, 14950205415824409292n, 8179122470161673908n, 9343878384890255807n, 14335323580705822000n, 11679847981112819759n, 13307468457454889596n, 14599809976391024699n, 12022649553391224092n, 18249762470488780874n, 10416625923311642211n, 11406101544055488046n, 11122077220497164286n, 14257626930069360058n, 4679224488766679549n, 17822033662586700072n, 15072402647813125244n, 11138771039116687545n, 9420251654883203278n, 13923463798895859431n, 16387000587031392001n, 17404329748619824289n, 15872064715361852097n, 10877706092887390181n, 3002511419460075705n, 13597132616109237726n, 8364825292752482535n, 16996415770136547158n, 1232659579085827361n, 10622759856335341973n, 14605470292210805812n, 13278449820419177467n, 4421779809981343554n, 16598062275523971834n, 915538744049291538n, 10373788922202482396n, 5183897733458195115n, 12967236152753102995n, 6479872166822743894n, 16209045190941378744n, 3488154190101041964n, 10130653244338361715n, 2180096368813151227n, 12663316555422952143n, 16560178516298602746n, 15829145694278690179n, 16088537126945865529n, 9893216058924181362n, 7749492695127472003n, 12366520073655226703n, 463493832054564196n, 15458150092069033378n, 14414425345350368957n, 9661343807543145861n, 13620701859271368502n, 12076679759428932327n, 3190819268807046916n, 15095849699286165408n, 17823582141290972357n, 9434906062053853380n, 11139738838306857723n, 11793632577567316725n, 13924673547883572154n, 14742040721959145907n, 3570783879572301480n, 18427550902448932383n, 18298537904747540562n, 11517219314030582739n, 18354115218108294707n, 14396524142538228424n, 18330958004207980480n, 17995655178172785531n, 4466953431550423984n, 11247284486357990957n, 486002885505321038n, 14059105607947488696n, 5219189625309039202n, 17573882009934360870n, 6523987031636299002n, 10983676256208975543n, 17912549950054850588n, 13729595320261219429n, 17779001419141175331n, 17161994150326524287n, 8388693718644305452n, 10726246343954077679n, 12160462601793772764n, 13407807929942597099n, 10588892233814828051n, 16759759912428246374n, 8624429273841147159n, 10474849945267653984n, 778582277723329070n, 13093562431584567480n, 973227847154161338n, 16366953039480709350n, 1216534808942701673n, 10229345649675443343n, 14595392310871352257n, 12786682062094304179n, 13632554370161802418n, 15983352577617880224n, 12429006944274865118n, 9989595361011175140n, 7768129340171790699n, 12486994201263968925n, 9710161675214738374n, 15608742751579961156n, 16749388112445810871n, 9755464219737475723n, 1244995533423855986n, 12194330274671844653n, 15391302472061983695n, 15242912843339805817n, 5404070034795315907n, 9526820527087378635n, 14906758817815542202n, 11908525658859223294n, 14021762503842039848n, 14885657073574029118n, 8303831092947774002n, 9303535670983768199n, 578208414664970847n, 11629419588729710248n, 14557818573613377271n, 14536774485912137810n, 18197273217016721589n, 18170968107390172263n, 13523219484416126178n, 11356855067118857664n, 15369541205401160717n, 14196068833898572081n, 765182433041899281n, 17745086042373215101n, 5568164059729762005n, 11090678776483259438n, 5785945546544795205n, 13863348470604074297n, 16455803970035769814n, 17329185588255092872n, 6734696907262548556n, 10830740992659433045n, 4209185567039092847n, 13538426240824291306n, 9873167977226253963n, 16923032801030364133n, 3118087934678041646n, 10576895500643977583n, 4254647968387469981n, 13221119375804971979n, 706623942056949572n, 16526399219756214973n, 14718337982853350677n, 10328999512347634358n, 11504804248497038125n, 12911249390434542948n, 5157633273766521849n, 16139061738043178685n, 6447041592208152311n, 10086913586276986678n, 6335244004343789146n, 12608641982846233347n, 17142427042284512241n, 15760802478557791684n, 16816347784428252397n, 9850501549098619803n, 1286845328412881940n, 12313126936373274753n, 15443614715798266137n, 15391408670466593442n, 5469460339465668959n, 9619630419041620901n, 8030098730593431003n, 12024538023802026126n, 14649309431669176658n, 15030672529752532658n, 9088264752731695015n, 9394170331095332911n, 10291851488884697288n, 11742712913869166139n, 8253128342678483706n, 14678391142336457674n, 5704724409920716729n, 18347988927920572092n, 16354277549255671720n, 11467493079950357558n, 998051431430019017n, 14334366349937946947n, 10470936326142299579n, 17917957937422433684n, 8476984389250486570n, 11198723710889021052n, 14521487280136329914n, 13998404638611276315n, 18151859100170412392n, 17498005798264095394n, 18078137856785627587n, 10936253623915059621n, 15910522178918405146n, 13670317029893824527n, 6053094668365842720n, 17087896287367280659n, 2954682317029915496n, 10679935179604550411n, 17987577512639554849n, 13349918974505688014n, 17872785872372055657n, 16687398718132110018n, 13117610303610293764n, 10429624198832568761n, 12810192458183821506n, 13037030248540710952n, 2177682517447613171n, 16296287810675888690n, 2722103146809516464n, 10185179881672430431n, 6313000485183335694n, 12731474852090538039n, 3279564588051781713n, 15914343565113172548n, 17934513790346890853n, 9946464728195732843n, 1985699082112030975n, 12433080910244666053n, 16317181907922202431n, 15541351137805832567n, 6561419329620589327n, 9713344461128645354n, 11018416108653950185n, 12141680576410806693n, 4549648098962661924n, 15177100720513508366n, 10298746142130715309n, 9485687950320942729n, 1825030320404309164n, 11857109937901178411n, 6892973918932774359n, 14821387422376473014n, 4004531380238580045n, 9263367138985295633n, 16337890167931276240n, 11579208923731619542n, 6587304654631931588n, 14474011154664524427n, 17457502855144690293n, 18092513943330655534n, 17210192550503474962n, 11307821214581659709n, 6144684325637283947n, 14134776518227074636n, 12292541425473992838n, 17668470647783843295n, 15365676781842491048n, 11042794154864902059n, 16521077016292638761n, 13803492693581127574n, 16039660251938410547n, 17254365866976409468n, 10826203278068237376n, 10783978666860255917n, 15989749085647424168n, 13479973333575319897n, 6152128301777116498n, 16849966666969149871n, 12301846395648783526n, 10531229166855718669n, 14606183024921571560n, 13164036458569648337n, 4422670725869800738n, 16455045573212060421n, 10140024425764638826n, 10284403483257537763n, 8643358275316593218n, 12855504354071922204n, 6192511825718353619n, 16069380442589902755n, 7740639782147942024n, 10043362776618689222n, 2532056854628769813n, 12554203470773361527n, 12388443105140738074n, 15692754338466701909n, 10873867862998534689n, 9807971461541688693n, 9102010423587778132n, 12259964326927110866n, 15989199047912110569n, 15324955408658888583n, 10763126773035362404n, 9578097130411805364n, 13644483260788183358n, 11972621413014756705n, 17055604075985229198n, 14965776766268445882n, 7484447039699372786n, 9353610478917778676n, 9289465418239495895n, 11692013098647223345n, 11611831772799369869n, 14615016373309029182n, 679731660717048624n, 18268770466636286477n, 10073036612751086588n, 11417981541647679048n, 8601490892183123069n, 14272476927059598810n, 10751863615228903837n, 17840596158824498513n, 4216457482181353988n, 11150372599265311570n, 14164500972431816002n, 13937965749081639463n, 8482254178684994195n, 17422457186352049329n, 5991131704928854840n, 10889035741470030830n, 15273672361649004035n, 13611294676837538538n, 9868718415206479236n, 17014118346046923173n, 3112525982153323237n, 10633823966279326983n, 4251171748059520975n, 13292279957849158729n, 702278666647013314n, 16615349947311448411n, 5489534351736154547n, 10384593717069655257n, 1125115960621402640n, 12980742146337069071n, 6018080969204141204n, 16225927682921336339n, 2910915193077788601n, 10141204801825835211n, 17960223060169475539n, 12676506002282294014n, 17838592806784456520n, 15845632502852867518n, 13074868971625794843n, 9903520314283042199n, 3560107088838733872n, 12379400392853802748n, 18285191916330581053n, 15474250491067253436n, 4409745821703674700n, 9671406556917033397n, 11979463175419572495n, 12089258196146291747n, 1139270913992301907n, 15111572745182864683n, 15259146697772541096n, 9444732965739290427n, 7231123676894144233n, 11805916207174113034n, 4427218577690292387n, 14757395258967641292n, 14757395258967641292n, 9223372036854775808n, 0n, 11529215046068469760n, 0n, 14411518807585587200n, 0n, 18014398509481984000n, 0n, 11258999068426240000n, 0n, 14073748835532800000n, 0n, 17592186044416000000n, 0n, 10995116277760000000n, 0n, 13743895347200000000n, 0n, 17179869184000000000n, 0n, 10737418240000000000n, 0n, 13421772800000000000n, 0n, 16777216000000000000n, 0n, 10485760000000000000n, 0n, 13107200000000000000n, 0n, 16384000000000000000n, 0n, 10240000000000000000n, 0n, 12800000000000000000n, 0n, 16000000000000000000n, 0n, 10000000000000000000n, 0n, 12500000000000000000n, 0n, 15625000000000000000n, 0n, 9765625000000000000n, 0n, 12207031250000000000n, 0n, 15258789062500000000n, 0n, 9536743164062500000n, 0n, 11920928955078125000n, 0n, 14901161193847656250n, 0n, 9313225746154785156n, 4611686018427387904n, 11641532182693481445n, 5764607523034234880n, 14551915228366851806n, 11817445422220181504n, 18189894035458564758n, 5548434740920451072n, 11368683772161602973n, 17302829768357445632n, 14210854715202003717n, 7793479155164643328n, 17763568394002504646n, 14353534962383192064n, 11102230246251565404n, 4359273333062107136n, 13877787807814456755n, 5449091666327633920n, 17347234759768070944n, 2199678564482154496n, 10842021724855044340n, 1374799102801346560n, 13552527156068805425n, 1718498878501683200n, 16940658945086006781n, 6759809616554491904n, 10587911840678754238n, 6530724019560251392n, 13234889800848442797n, 17386777061305090048n, 16543612251060553497n, 7898413271349198848n, 10339757656912845935n, 16465723340661719040n, 12924697071141057419n, 15970468157399760896n, 16155871338926321774n, 15351399178322313216n, 10097419586828951109n, 4982938468024057856n, 12621774483536188886n, 10840359103457460224n, 15777218104420236108n, 4327076842467049472n, 9860761315262647567n, 11927795063396681728n, 12325951644078309459n, 10298057810818464256n, 15407439555097886824n, 8260886245095692416n, 9629649721936179265n, 5163053903184807760n, 12037062152420224081n, 11065503397408397604n, 15046327690525280101n, 18443565265187884909n, 9403954806578300063n, 13833071299956122020n, 11754943508222875079n, 12679653106517764621n, 14693679385278593849n, 11237880364719817872n, 18367099231598242312n, 212292400617608628n, 11479437019748901445n, 132682750386005392n, 14349296274686126806n, 4777539456409894645n, 17936620343357658507n, 15195296357367144114n, 11210387714598536567n, 7191217214140771119n, 14012984643248170709n, 4377335499248575995n, 17516230804060213386n, 10083355392488107898n, 10947644252537633366n, 10913783138732455340n, 13684555315672041708n, 4418856886560793367n, 17105694144590052135n, 5523571108200991709n, 10691058840368782584n, 10369760970266701674n, 13363823550460978230n, 12962201212833377092n, 16704779438076222788n, 6979379479186945558n, 10440487148797639242n, 13585484211346616781n, 13050608935997049053n, 7758483227328495169n, 16313261169996311316n, 14309790052588006865n, 10195788231247694572n, 18166990819722280098n, 12744735289059618216n, 4261994450943298507n, 15930919111324522770n, 5327493063679123134n, 9956824444577826731n, 7941369183226839863n, 12446030555722283414n, 5315025460606161924n, 15557538194652854267n, 15867153862612478214n, 9723461371658033917n, 7611128154919104931n, 12154326714572542396n, 14125596212076269068n, 15192908393215677995n, 17656995265095336336n, 9495567745759798747n, 8729779031470891258n, 11869459682199748434n, 6300537770911226168n, 14836824602749685542n, 17099044250493808518n, 9273015376718553464n, 6075216638131242420n, 11591269220898191830n, 7594020797664053025n, 14489086526122739788n, 269153960225290473n, 18111358157653424735n, 336442450281613091n, 11319598848533390459n, 7127805559067090038n, 14149498560666738074n, 4298070930406474644n, 17686873200833422592n, 14595960699862869113n, 11054295750520889120n, 9122475437414293195n, 13817869688151111400n, 11403094296767866494n, 17272337110188889250n, 14253867870959833118n, 10795210693868055781n, 13520353437777283602n, 13494013367335069727n, 3065383741939440791n, 16867516709168837158n, 17666787732706464701n, 10542197943230523224n, 6430056314514152534n, 13177747429038154030n, 8037570393142690668n, 16472184286297692538n, 823590954573587527n, 10295115178936057836n, 5126430365035880108n, 12868893973670072295n, 6408037956294850135n, 16086117467087590369n, 3398361426941174765n, 10053823416929743980n, 13653190937906703988n, 12567279271162179975n, 17066488672383379985n, 15709099088952724969n, 16721424822051837077n, 9818186930595453106n, 3533361486141316317n, 12272733663244316382n, 13640073894531421205n, 15340917079055395478n, 7826720331309500698n, 9588073174409622174n, 280014188641050032n, 11985091468012027717n, 9573389772656088348n, 14981364335015034646n, 16578423234247498339n, 9363352709384396654n, 5749828502977298558n, 11704190886730495817n, 16410657665576399005n, 14630238608413119772n, 6678264026688335045n, 18287798260516399715n, 8347830033360418806n, 11429873912822749822n, 2911550761636567802n, 14287342391028437277n, 12862810488900485560n, 17859177988785546597n, 2243455055843443238n, 11161986242990966623n, 3708002419115845976n, 13952482803738708279n, 23317005467419566n, 17440603504673385348n, 13864204312116438170n, 10900377190420865842n, 17888499731927549664n, 13625471488026082303n, 13137252628054661272n, 17031839360032602879n, 11809879766640938686n, 10644899600020376799n, 14298703881791668535n, 13306124500025470999n, 13261693833812197764n, 16632655625031838749n, 11965431273837859301n, 10395409765644899218n, 9784237555362356015n, 12994262207056124023n, 3006924907348169211n, 16242827758820155028n, 17593714189467375226n, 10151767349262596893n, 1772699331562333708n, 12689709186578246116n, 6827560182880305039n, 15862136483222807645n, 8534450228600381299n, 9913835302014254778n, 7639874402088932264n, 12392294127517818473n, 326470965756389522n, 15490367659397273091n, 5019774725622874806n, 9681479787123295682n, 831516194300602802n, 12101849733904119602n, 10262767279730529310n, 15127312167380149503n, 3605087062808385830n, 9454570104612593439n, 9170708441896323000n, 11818212630765741799n, 6851699533943015846n, 14772765788457177249n, 3952938399001381903n, 9232978617785735780n, 13999801545444333449n, 11541223272232169725n, 17499751931805416812n, 14426529090290212157n, 8039631859474607303n, 18033161362862765196n, 14661225842770647033n, 11270725851789228247n, 18386638188586430203n, 14088407314736535309n, 18371611717305649850n, 17610509143420669137n, 9129456591349898601n, 11006568214637918210n, 17235125415662156385n, 13758210268297397763n, 12320534732722919674n, 17197762835371747204n, 10788982397476261688n, 10748601772107342002n, 15966486035277439363n, 13435752215134177503n, 10734735507242023396n, 16794690268917721879n, 8806733365625141341n, 10496681418073576174n, 12421737381156795194n, 13120851772591970218n, 6303799689591218185n, 16401064715739962772n, 17103121648843798539n, 10250665447337476733n, 1466078993672598279n, 12813331809171845916n, 6444284760518135752n, 16016664761464807395n, 8055355950647669691n, 10010415475915504622n, 2728754459941099604n, 12513019344894380777n, 12634315111781150314n, 15641274181117975972n, 1957835834444274180n, 9775796363198734982n, 10447019433382447170n, 12219745453998418728n, 3835402254873283155n, 15274681817498023410n, 4794252818591603944n, 9546676135936264631n, 7608094030047140369n, 11933345169920330789n, 4898431519131537557n, 14916681462400413486n, 10734725417341809851n, 9322925914000258429n, 2097517367411243253n, 11653657392500323036n, 7233582727691441970n, 14567071740625403795n, 9041978409614302462n, 18208839675781754744n, 6690786993590490174n, 11380524797363596715n, 4181741870994056359n, 14225655996704495894n, 615491320315182544n, 17782069995880619867n, 9992736187248753989n, 11113793747425387417n, 3939617107816777291n, 13892242184281734271n, 9536207403198359517n, 17365302730352167839n, 7308573235570561493n, 10853314206470104899n, 11485387299872682789n, 13566642758087631124n, 9745048106413465582n, 16958303447609538905n, 12181310133016831978n, 10598939654755961816n, 695789805494438130n, 13248674568444952270n, 869737256868047663n, 16560843210556190337n, 10310543607939835386n, 10350527006597618960n, 17973304801030866876n, 12938158758247023701n, 4019886927579031980n, 16172698447808779626n, 9636544677901177879n, 10107936529880487266n, 10634526442115624078n, 12634920662350609083n, 4069786015789754290n, 15793650827938261354n, 475546501309804958n, 9871031767461413346n, 4908902581746016003n, 12338789709326766682n, 15359500264037295811n, 15423487136658458353n, 9976003293191843956n, 9639679460411536470n, 17764217104313372233n, 12049599325514420588n, 12981899343536939483n, 15061999156893025735n, 16227374179421174354n, 9413749473058141084n, 17059637889779315827n, 11767186841322676356n, 2877803288514593168n, 14708983551653345445n, 3597254110643241460n, 18386229439566681806n, 9108253656731439729n, 11491393399729176129n, 1080972517029761926n, 14364241749661470161n, 5962901664714590312n, 17955302187076837701n, 12065313099320625794n, 11222063866923023563n, 9846663696289085073n, 14027579833653779454n, 7696643601933968437n, 17534474792067224318n, 397432465562684739n, 10959046745042015198n, 14083453346258841674n, 13698808431302518998n, 8380944645968776284n, 17123510539128148748n, 1252808770606194547n, 10702194086955092967n, 10006377518483647400n, 13377742608693866209n, 7896285879677171346n, 16722178260867332761n, 14482043368023852087n, 10451361413042082976n, 2133748077373825698n, 13064201766302603720n, 2667185096717282123n, 16330252207878254650n, 3333981370896602653n, 10206407629923909156n, 6695424375237764562n, 12758009537404886445n, 8369280469047205703n, 15947511921756108056n, 15073286604736395033n, 9967194951097567535n, 9420804127960246895n, 12458993688871959419n, 7164319141522920715n, 15573742111089949274n, 4343712908476262990n, 9733588819431218296n, 7326506586225052273n, 12166986024289022870n, 9158133232781315341n, 15208732530361278588n, 2224294504121868368n, 9505457831475799117n, 10613556101930943538n, 11881822289344748896n, 17878631145841067327n, 14852277861680936121n, 3901544858591782542n, 9282673663550585075n, 13967680582688333849n, 11603342079438231344n, 12847914709933029407n, 14504177599297789180n, 16059893387416286759n, 18130221999122236476n, 1628122660560806833n, 11331388749451397797n, 10240948699705280078n, 14164235936814247246n, 17412871893058988002n, 17705294921017809058n, 12542717829468959195n, 11065809325636130661n, 12450884661845487401n, 13832261657045163327n, 1728547772024695539n, 17290327071306454158n, 15995742770313033136n, 10806454419566533849n, 5385653213018257806n, 13508068024458167311n, 11343752534700210161n, 16885085030572709139n, 9568004649947874797n, 10553178144107943212n, 3674159897003727796n, 13191472680134929015n, 4592699871254659745n, 16489340850168661269n, 1129188820640936778n, 10305838031355413293n, 3011586022114279438n, 12882297539194266616n, 8376168546070237202n, 16102871923992833270n, 10470210682587796502n, 10064294952495520794n, 1932195658189984910n, 12580368690619400992n, 11638616609592256945n, 15725460863274251240n, 14548270761990321182n, 9828413039546407025n, 9092669226243950738n, 12285516299433008781n, 15977522551232326327n, 15356895374291260977n, 6136845133758244197n, 9598059608932038110n, 15364743254667372383n, 11997574511165047638n, 9982557031479439671n, 14996968138956309548n, 3254824252494523781n, 9373105086847693467n, 11257637194663853171n, 11716381358559616834n, 9460360474902428559n, 14645476698199521043n, 2602078556773259891n, 18306845872749401303n, 17087656251248738576n, 11441778670468375814n, 17597314184671543466n, 14302223338085469768n, 12773270693984653525n, 17877779172606837210n, 15966588367480816906n, 11173611982879273256n, 14590803748102898470n, 13967014978599091570n, 18238504685128623088n, 17458768723248864463n, 13574758819556003052n, 10911730452030540289n, 15401753289863583763n, 13639663065038175362n, 5417133557047315992n, 17049578831297719202n, 15994788983163920798n, 10655986769561074501n, 14608429132904838403n, 13319983461951343127n, 4425478360848884291n, 16649979327439178909n, 920161932633717460n, 10406237079649486818n, 2880944217109767365n, 13007796349561858522n, 12824552308241985014n, 16259745436952323153n, 6807318348447705459n, 10162340898095201970n, 15783789013848285672n, 12702926122619002463n, 10506364230455581282n, 15878657653273753079n, 8521269269642088699n, 9924161033296095674n, 12243322321167387293n, 12405201291620119593n, 6080780864604458308n, 15506501614525149491n, 12212662099182960789n, 9691563509078218432n, 5327070802775656541n, 12114454386347773040n, 6658838503469570676n, 15143067982934716300n, 8323548129336963345n, 9464417489334197687n, 14425589617690377899n, 11830521861667747109n, 13420301003685584469n, 14788152327084683887n, 2940318199324816875n, 9242595204427927429n, 8755227902219092403n, 11553244005534909286n, 15555720896201253407n, 14441555006918636608n, 10221279083396790951n, 18051943758648295760n, 12776598854245988689n, 11282464849155184850n, 7985374283903742931n, 14103081061443981063n, 758345818024902856n, 17628851326804976328n, 14782990327813292282n, 11018032079253110205n, 9239368954883307676n, 13772540099066387756n, 16160897212031522499n, 17215675123832984696n, 1754377441329851508n, 10759796952395615435n, 1096485900831157192n, 13449746190494519293n, 15205665431321110202n, 16812182738118149117n, 5172023733869224041n, 10507614211323843198n, 5538357842881958977n, 13134517764154803997n, 16146319340457224530n, 16418147205193504997n, 6347841120289366950n, 10261342003245940623n, 6273243709394548296n, 12826677504057425779n, 3229868618315797466n, 16033346880071782223n, 17872393828176910545n, 10020841800044863889n, 18087775170251650946n, 12526052250056079862n, 8774660907532399971n, 15657565312570099828n, 1744954097560724156n, 9785978320356312392n, 10313968347830228405n, 12232472900445390490n, 12892460434787785506n, 15290591125556738113n, 6892203506629956075n, 9556619453472961320n, 15836842237712192307n, 11945774316841201651n, 1349308723430688768n, 14932217896051502063n, 15521693959570524672n, 9332636185032188789n, 16618587752372659776n, 11665795231290235987n, 6938176635183661008n, 14582244039112794984n, 4061034775552188356n, 18227805048890993730n, 5076293469440235445n, 11392378155556871081n, 7784369436827535057n, 14240472694446088851n, 14342147814461806725n, 17800590868057611064n, 13315998749649870503n, 11125369292536006915n, 8322499218531169064n, 13906711615670008644n, 5791438004736573426n, 17383389519587510805n, 7239297505920716783n, 10864618449742194253n, 6830403950414141941n, 13580773062177742816n, 13149690956445065330n, 16975966327722178520n, 16437113695556331663n, 10609978954826361575n, 10273196059722707289n, 13262473693532951969n, 8229809056225996208n, 16578092116916189961n, 14898947338709883164n, 10361307573072618726n, 2394313059052595121n, 12951634466340773407n, 12216263360670519709n, 16189543082925966759n, 10658643182410761733n, 10118464426828729224n, 13579181016647807939n, 12648080533535911530n, 16973976270809759924n, 15810100666919889413n, 11994098301657424097n, 9881312916824930883n, 9802154447749584012n, 12351641146031163604n, 7641007041259592112n, 15439551432538954505n, 9551258801574490140n, 9649719645336846565n, 17498751797052526097n, 12062149556671058207n, 8038381691033493909n, 15077686945838822759n, 5436291095364479483n];
const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1327 = { _0: 0, _1: "" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1328 = { _0: 1, _1: "5" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1329 = { _0: 1, _1: "25" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1330 = { _0: 1, _1: "125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1331 = { _0: 2, _1: "625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1332 = { _0: 2, _1: "3125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1333 = { _0: 2, _1: "15625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1334 = { _0: 3, _1: "78125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1335 = { _0: 3, _1: "390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1336 = { _0: 3, _1: "1953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1337 = { _0: 4, _1: "9765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1338 = { _0: 4, _1: "48828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1339 = { _0: 4, _1: "244140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1340 = { _0: 4, _1: "1220703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1341 = { _0: 5, _1: "6103515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1342 = { _0: 5, _1: "30517578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1343 = { _0: 5, _1: "152587890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1344 = { _0: 6, _1: "762939453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1345 = { _0: 6, _1: "3814697265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1346 = { _0: 6, _1: "19073486328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1347 = { _0: 7, _1: "95367431640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1348 = { _0: 7, _1: "476837158203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1349 = { _0: 7, _1: "2384185791015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1350 = { _0: 7, _1: "11920928955078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1351 = { _0: 8, _1: "59604644775390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1352 = { _0: 8, _1: "298023223876953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1353 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1354 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1355 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1356 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1357 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1358 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1359 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1360 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1361 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1362 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1363 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1364 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1365 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1366 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1367 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1368 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1369 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1370 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1371 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1372 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1373 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1374 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1375 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1376 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1377 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1378 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1379 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1380 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1381 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1382 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1383 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1384 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1385 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1386 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1387 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS1327, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1328, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1329, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1330, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1331, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1332, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1333, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1334, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1335, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1336, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1337, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1338, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1339, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1340, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1341, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1342, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1343, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1344, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1345, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1346, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1347, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1348, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1349, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1350, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1351, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1352, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1353, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1354, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1355, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1356, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1357, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1358, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1359, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1360, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1361, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1362, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1363, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1364, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1365, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1366, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1367, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1368, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1369, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1370, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1371, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1372, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1373, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1374, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1375, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1376, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1377, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1378, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1379, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1380, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1381, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1382, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1383, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1384, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1385, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1386, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1387];
const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC28internal7strconv12checked__mulN6constrS1524 = 0n;
const _M0FP49poipoiiii9moonsheet3lib9functions8as__boolN6constrS2084 = false;
const _M0FP49poipoiiii9moonsheet3lib9functions9pi__valueN6constrS2432 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9pi__valueN6constrS2433 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(3.1415926535897931);
const _M0FP49poipoiiii9moonsheet3lib4eval10as__numberN6constrS2823 = new _M0DTPC16option6OptionGdE4Some(0);
const _M0FP49poipoiiii9moonsheet3lib4eval8as__boolN6constrS2829 = false;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0MPC16string6String4trimN6recordS409 = new _M0TPC16string10StringView("\t\n\r ", 0, 4);
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1902 = 6;
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1903 = 7;
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1904 = 8;
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1905 = 9;
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1906 = 10;
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1907 = 11;
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser15parse__additiveN6constrS1925 = 0;
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser15parse__additiveN6constrS1926 = 1;
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser21parse__multiplicativeN6constrS1944 = 2;
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser21parse__multiplicativeN6constrS1945 = 3;
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser14parse__primaryN6constrS1986 = new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr7Boolean(true);
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser14parse__primaryN6constrS1987 = new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(_M0MP49poipoiiii9moonsheet3lib7formula6Parser14parse__primaryN6constrS1986);
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser14parse__primaryN6constrS1988 = new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr7Boolean(false);
const _M0MP49poipoiiii9moonsheet3lib7formula6Parser14parse__primaryN6constrS1989 = new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(_M0MP49poipoiiii9moonsheet3lib7formula6Parser14parse__primaryN6constrS1988);
const _M0FPC28internal7strconv17parse__scientificN8exp__numS1425 = 0n;
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S1528 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S1504 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
const _M0FP49poipoiiii9moonsheet3lib7formula3lexN6constrS1853 = 46;
const _M0FP49poipoiiii9moonsheet3lib7formula3lexN6constrS1854 = 34;
const _M0FP49poipoiiii9moonsheet3lib7formula3lexN6constrS1855 = 61;
const _M0FP49poipoiiii9moonsheet3lib7formula3lexN6constrS1856 = 62;
const _M0FP49poipoiiii9moonsheet3lib7formula3lexN6constrS1857 = 61;
const _M0FP49poipoiiii9moonsheet3lib7formula14parse__formulaN6constrS2037 = 61;
const _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10get__valueN6constrS3387 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(2);
const _M0MP39poipoiiii9moonsheet3web3App6renderN6constrS3534 = 8;
const _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet16snapshot__valuesN6constrS3260 = 16;
const _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph3newN6constrS3140 = 0;
const _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph3newN6constrS3141 = 0;
const _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12build__graphN6constrS3236 = 8;
const _M0FP49poipoiiii9moonsheet3lib9functions10as__numberN6constrS2069 = new _M0DTPC16option6OptionGdE4Some(0);
const _M0FP49poipoiiii9moonsheet3lib9functions8varianceN6constrS2265 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(0);
const _M0FP49poipoiiii9moonsheet3lib9functions5rightN6constrS2453 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions5rightN6constrS2454 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions5rightN6constrS2455 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2752 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2753 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2754 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2755 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2756 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2757 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions8textjoinN6constrS2509 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions8textjoinN6constrS2510 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions8textjoinN6constrS2511 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12large__smallN6constrS2298 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12large__smallN6constrS2299 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12large__smallN6constrS2300 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(5);
const _M0FP49poipoiiii9moonsheet3lib9functions10mod__valueN6constrS2373 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10mod__valueN6constrS2374 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10mod__valueN6constrS2375 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10mod__valueN6constrS2376 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(0);
const _M0FP49poipoiiii9moonsheet3lib9functions11date__valueN6constrS2679 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11date__valueN6constrS2680 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11date__valueN6constrS2681 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11date__valueN6constrS2682 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions4signN6constrS2320 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions4signN6constrS2321 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(1);
const _M0FP49poipoiiii9moonsheet3lib9functions4signN6constrS2322 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(-1);
const _M0FP49poipoiiii9moonsheet3lib9functions4signN6constrS2323 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(0);
const _M0FP49poipoiiii9moonsheet3lib9functions4signN6constrS2324 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions7averageN6constrS2207 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(0);
const _M0FP49poipoiiii9moonsheet3lib9functions9ln__valueN6constrS2407 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9ln__valueN6constrS2408 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(5);
const _M0FP49poipoiiii9moonsheet3lib9functions9ln__valueN6constrS2409 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10trim__textN6constrS2494 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10trim__textN6constrS2495 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10log__valueN6constrS2414 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10log__valueN6constrS2415 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10log__valueN6constrS2416 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10log__valueN6constrS2417 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(5);
const _M0FP49poipoiiii9moonsheet3lib9functions6medianN6constrS2258 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(0);
const _M0FP49poipoiiii9moonsheet3lib9functions10max__valueN6constrS2229 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(0);
const _M0FP49poipoiiii9moonsheet3lib9functions7eomonthN6constrS2714 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions7eomonthN6constrS2715 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions7eomonthN6constrS2716 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions5lowerN6constrS2488 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions5lowerN6constrS2489 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12trunc__valueN6constrS2335 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12trunc__valueN6constrS2336 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12trunc__valueN6constrS2337 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12logical__andN6constrS2627 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions4reptN6constrS2524 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions4reptN6constrS2525 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions4reptN6constrS2526 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10int__valueN6constrS2329 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10int__valueN6constrS2330 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions14ceiling__floorN6constrS2360 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions14ceiling__floorN6constrS2361 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions14ceiling__floorN6constrS2362 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions14ceiling__floorN6constrS2363 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(0);
const _M0FP49poipoiiii9moonsheet3lib9functions11logical__orN6constrS2640 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11char__valueN6constrS2610 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11char__valueN6constrS2611 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11char__valueN6constrS2612 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12log10__valueN6constrS2425 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12log10__valueN6constrS2426 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(5);
const _M0FP49poipoiiii9moonsheet3lib9functions12log10__valueN6constrS2427 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2775 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2776 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2777 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2778 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2779 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2780 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11code__valueN6constrS2617 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11code__valueN6constrS2618 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11code__valueN6constrS2619 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions6chooseN6constrS2672 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions6chooseN6constrS2673 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions6chooseN6constrS2674 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions3midN6constrS2467 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions3midN6constrS2468 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions3midN6constrS2469 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions3midN6constrS2470 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions3midN6constrS2471 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions3lenN6constrS2435 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions3lenN6constrS2436 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10npv__valueN6constrS2798 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10npv__valueN6constrS2799 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10npv__valueN6constrS2800 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(5);
const _M0FP49poipoiiii9moonsheet3lib9functions12power__valueN6constrS2384 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12power__valueN6constrS2385 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2728 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2729 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2730 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2731 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2732 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2733 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2734 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(5);
const _M0FP49poipoiiii9moonsheet3lib9functions12logical__xorN6constrS2653 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2580 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2581 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2582 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2583 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2584 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2585 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10min__valueN6constrS2218 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(0);
const _M0FP49poipoiiii9moonsheet3lib9functions11find__valueN6constrS2539 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11find__valueN6constrS2540 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11find__valueN6constrS2541 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11find__valueN6constrS2542 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11find__valueN6constrS2543 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions5upperN6constrS2482 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions5upperN6constrS2483 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12round__valueN6constrS2346 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12round__valueN6constrS2347 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12round__valueN6constrS2348 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11value__textN6constrS2601 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11value__textN6constrS2602 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11value__textN6constrS2603 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions4leftN6constrS2441 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions4leftN6constrS2442 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions4leftN6constrS2443 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11sqrt__valueN6constrS2394 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions11sqrt__valueN6constrS2395 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(5);
const _M0FP49poipoiiii9moonsheet3lib9functions11sqrt__valueN6constrS2396 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions3absN6constrS2312 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions3absN6constrS2313 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions7productN6constrS2196 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(0);
const _M0FP49poipoiiii9moonsheet3lib9functions12logical__notN6constrS2666 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions12logical__notN6constrS2667 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10substituteN6constrS2560 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10substituteN6constrS2561 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10substituteN6constrS2562 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10substituteN6constrS2563 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10substituteN6constrS2564 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10exp__valueN6constrS2401 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10exp__valueN6constrS2402 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions5edateN6constrS2704 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions5edateN6constrS2705 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions5edateN6constrS2706 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10date__partN6constrS2693 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib9functions10date__partN6constrS2694 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval4evalN6constrS2914 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval4evalN6constrS2915 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(3);
const _M0FP49poipoiiii9moonsheet3lib4eval4evalN6constrS2916 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval12eval__binaryN6constrS2952 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval12eval__binaryN6constrS2953 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(0);
const _M0FP49poipoiiii9moonsheet3lib4eval12eval__binaryN6constrS2954 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval10eval__callN6constrS2977 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval10eval__callN6constrS2978 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval10eval__callN6constrS2979 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(false);
const _M0FP49poipoiiii9moonsheet3lib4eval10eval__callN6constrS2980 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval10eval__callN6constrS2981 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(3);
const _M0FP49poipoiiii9moonsheet3lib4eval13eval__countifN6constrS3009 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval13eval__countifN6constrS3010 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__sumifN6constrS3074 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__sumifN6constrS3075 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__sumifN6constrS3076 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(0);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__sumifN6constrS3077 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3025 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3026 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3027 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(2);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3028 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(2);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3029 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3030 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3031 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(2);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3032 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3047 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3048 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3049 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(4);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3050 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(4);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3051 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(4);
const _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3052 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3099 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3100 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3101 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(2);
const _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3102 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3103 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(4);
const _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3104 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(4);
const _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3105 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(4);
const _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3106 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet17recalculate__fullN6constrS3281 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet17recalculate__fullN5valueS3282 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(6);
const _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet17recalculate__fullN6constrS3283 = 0;
const _M0FP49poipoiiii9moonsheet3lib8workbook19eval__formula__textN6constrS3230 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(1);
const _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet18recalculate__dirtyN6constrS3319 = 0;
const _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet18recalculate__dirtyN6constrS3320 = 0;
const _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet18recalculate__dirtyN6constrS3321 = 0;
const _M0MP49poipoiiii9moonsheet3lib8workbook8Workbook3newN6constrS3207 = 4;
const _M0MPC16string10StringView4trimN6recordS402 = new _M0TPC16string10StringView("\t\n\r ", 0, 4);
const _M0MPC16string10StringView4findN6constrS270 = 0;
const _M0FP49poipoiiii9moonsheet3lib2io10parse__csvN6recordS3432 = new _M0TPC16string10StringView("\n", 0, 1);
const _M0FP49poipoiiii9moonsheet3lib2io10parse__csvN6recordS3433 = new _M0TPC16string10StringView(",", 0, 1);
const _M0FP49poipoiiii9moonsheet3lib2io12parse__valueN6constrS3448 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(true);
const _M0FP49poipoiiii9moonsheet3lib2io12parse__valueN6constrS3449 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(false);
const _M0FP49poipoiiii9moonsheet3lib2io9load__csvN6constrS3455 = 61;
const _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet3newN6constrS3202 = 16;
const _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet3newN6constrS3203 = 0;
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3506 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("Item");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3507 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("Qty");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3508 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("Unit price");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3509 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("Total");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3510 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("Note");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3511 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("MoonBit license");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3512 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(1);
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3513 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(0);
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3514 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("open source");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3515 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("Compiler seats");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3516 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(5);
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3517 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(120);
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3518 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("team");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3519 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("CI minutes");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3520 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(200);
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3521 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(0.5);
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3522 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("monthly");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3523 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("Subtotal");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3524 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("Tax 8%");
const _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3525 = new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text("Grand total");
const _M0FP39poipoiiii9moonsheet3web3app = _M0FP39poipoiiii9moonsheet3web9make__app();
const _M0MP39poipoiiii9moonsheet3web3App6commitN6constrS3573 = 61;
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC16string6String20char__length_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_index = _tmp;
      const char_count = _tmp$2;
      if (utf16_index < end_offset$2) {
        const c1 = self.charCodeAt(utf16_index);
        if (c1 >= 55296 && c1 <= 56319 && (utf16_index + 1 | 0) < end_offset$2) {
          const c2 = self.charCodeAt(utf16_index + 1 | 0);
          if (c2 >= 56320 && c2 <= 57343) {
            _tmp = utf16_index + 2 | 0;
            _tmp$2 = char_count + 1 | 0;
            continue;
          } else {
            $panic();
          }
        }
        _tmp = utf16_index + 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        return char_count;
      }
    }
  } else {
    return $panic();
  }
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (c1 >= 55296 && c1 <= 56319) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return c1;
  }
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
    return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB2Eq10not__equalGRP49poipoiiii9moonsheet3lib7formula5TokenE(x, y) {
  return !_M0IP49poipoiiii9moonsheet3lib7formula5TokenPB2Eq5equal(x, y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  let _tmp;
  if (lo > 0) {
    let _tmp$2;
    if (lo < len) {
      let _tmp$3;
      const _p = self.charCodeAt(lo);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(lo - 1 | 0);
        _tmp$3 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    lo = lo + 1 | 0;
  }
  let _tmp$2;
  if (hi > 0) {
    let _tmp$3;
    if (hi < len) {
      let _tmp$4;
      const _p = self.charCodeAt(hi);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(hi - 1 | 0);
        _tmp$4 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    } else {
      _tmp$3 = false;
    }
    _tmp$2 = _tmp$3;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0MPB4Iter4nextGiE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS81GiE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS80GiE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGRPC16string10StringViewE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS89GRPC16string10StringViewE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS88GRPC16string10StringViewE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS97GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS96GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGiE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS106GiE;
  }
  return new _M0TPB4IterGiE(f, size_hint$2);
}
function _M0MPB4Iter3newGRPC16string10StringViewE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS112GRPC16string10StringViewE;
  }
  return new _M0TPB4IterGRPC16string10StringViewE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS118GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (c1 >= 55296 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          $panic();
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (c >= 56320 && c <= 57343) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (c >= 55296 && c <= 56319) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return $panic();
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    return new _M0TPC16string10StringView(self, start_offset, end_offset$2);
  } else {
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      let _tmp$2;
      const _p = data.charCodeAt(pos);
      if (_p === first) {
        const _p$2 = data.charCodeAt(pos + last_offset | 0);
        _tmp$2 = _p$2 === last;
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      const _p = left.charCodeAt(left_start + i | 0);
      const _p$2 = right.charCodeAt(right_start + i | 0);
      if (_p !== _p$2) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = target.start;
  const pattern_start = pattern.start;
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(target.str, pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(target.str, found + 1 | 0, pattern.str, pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (failures$2 > 64 || failures$2 > (4 + (scanned / 8 | 0) | 0)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      const _p = data.charCodeAt(pos);
      if (_p === code) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = target.start;
  const found = _M0FPB30find__code__unit__from__string(target.str, target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS270;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC15array5Array4pushGsE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRPB5ArrayGsEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGdE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const _p = str.charCodeAt(i);
      if (_p === code) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$4;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$4;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      const code = _decoded_char;
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind = code >>> 5 | 0;
    switch (_bind) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    let _tmp$2;
    if (pos < end) {
      const _p = str.charCodeAt(pos);
      _tmp$2 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    let _tmp$2;
    if (pos > start) {
      const _p = str.charCodeAt(pos - 1 | 0);
      _tmp$2 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                const _p = self.str.charCodeAt(self.start + i | 0);
                if (_p === high$2) {
                  const _p$2 = self.str.charCodeAt(self.start + (i + 1 | 0) | 0);
                  if (_p$2 === low) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string10StringView4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = _M0MPC16string10StringView4trimN6recordS402;
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string10StringView12trim_2einner(self, chars);
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = _M0MPC16string6String4trimN6recordS409;
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC14char4Char20is__ascii__lowercase(self) {
  return self >= 97 && self <= 122;
}
function _M0MPC16string6String9get__char(self, idx) {
  if (idx >= 0 && idx < self.length) {
    const c = self.charCodeAt(idx);
    if (c >= 55296 && c <= 56319) {
      if ((idx + 1 | 0) < self.length) {
        const next = self.charCodeAt(idx + 1 | 0);
        return next >= 56320 && next <= 57343 ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return c >= 56320 && c <= 57343 ? -1 : c;
    }
  } else {
    return -1;
  }
}
function _M0IPC16string6StringPB7Compare7compare(self, other) {
  const len = self.length;
  const _bind = $compare_int(len, other.length);
  if (_bind === 0) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const x = self.charCodeAt(i);
        const y = other.charCodeAt(i);
        if (x !== y) {
          return x < y ? -1 : 1;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return 0;
  } else {
    return _bind;
  }
}
function _M0MPC16string6String9to__array(self) {
  const chars = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = self.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = self.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$2;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      _M0MPC15array5Array4pushGcE(chars, _decoded_char);
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return chars;
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0IPC16option6OptionPB2Eq5equalGcE(self, other) {
  if (self === -1) {
    return other === -1;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === -1) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsbE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsbE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGibE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGibE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGiRP49poipoiiii9moonsheet3lib8workbook4CellE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRP49poipoiiii9moonsheet3lib8workbook4CellE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGiRP49poipoiiii9moonsheet3lib7formula4ExprE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRP49poipoiiii9moonsheet3lib7formula4ExprE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGiRP49poipoiiii9moonsheet3lib5types5ValueE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRP49poipoiiii9moonsheet3lib5types5ValueE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGiiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiiE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGiRPB5ArrayGiEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRPB5ArrayGiEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiiE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsbE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGibE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiiE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRPB5ArrayGiEE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsbE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGibE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGibE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGibE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiiE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiiE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRPB5ArrayGiEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRPB5ArrayGiEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRPB5ArrayGiEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsbE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsbE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGibE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGibE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGibE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGibE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiiE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiiE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRPB5ArrayGiEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRPB5ArrayGiEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsbE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsbE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGibE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGibE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRP49poipoiiii9moonsheet3lib5types5ValueE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiiE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRPB5ArrayGiEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRPB5ArrayGiEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsbE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsbE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsbE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsbE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsbE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsbE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRP49poipoiiii9moonsheet3lib8workbook4CellE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRP49poipoiiii9moonsheet3lib8workbook4CellE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGibE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGibE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGibE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGibE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGibE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGibE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRP49poipoiiii9moonsheet3lib5types5ValueE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRP49poipoiiii9moonsheet3lib5types5ValueE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP49poipoiiii9moonsheet3lib5types5ValueE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRP49poipoiiii9moonsheet3lib5types5ValueE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRP49poipoiiii9moonsheet3lib7formula4ExprE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRP49poipoiiii9moonsheet3lib7formula4ExprE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiiE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiiE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiiE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiiE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiiE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiiE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiiE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRPB5ArrayGiEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRPB5ArrayGiEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRPB5ArrayGiEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRPB5ArrayGiEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRPB5ArrayGiEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRPB5ArrayGiEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsbE(self, key, value) {
  _M0MPB3Map15set__with__hashGsbE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGibE(self, key, value) {
  _M0MPB3Map15set__with__hashGibE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGiiE(self, key, value) {
  _M0MPB3Map15set__with__hashGiiE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRPB5ArrayGiEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRPB5ArrayGiEE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsbE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsbE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsbE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGibE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGibE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGibE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRP49poipoiiii9moonsheet3lib8workbook4CellE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGiRP49poipoiiii9moonsheet3lib8workbook4CellE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib8workbook4CellE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRP49poipoiiii9moonsheet3lib7formula4ExprE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGiRP49poipoiiii9moonsheet3lib7formula4ExprE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib7formula4ExprE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRP49poipoiiii9moonsheet3lib5types5ValueE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGiRP49poipoiiii9moonsheet3lib5types5ValueE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib5types5ValueE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGiiE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiiE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRPB5ArrayGiEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGiRPB5ArrayGiEE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRPB5ArrayGiEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsbE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return -1;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return -1;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGibE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return -1;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return -1;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRPB5ArrayGiEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGiEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGiEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiiE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib5types5ValueE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map2atGiiE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      $panic();
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp = i + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function _M0MPB3Map4keysGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGiRP49poipoiiii9moonsheet3lib8workbook4CellEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGiE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return _key;
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map4keysGiRP49poipoiiii9moonsheet3lib7formula4ExprE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGiRP49poipoiiii9moonsheet3lib7formula4ExprEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGiE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return _key;
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map4keysGibE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGibEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGiE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return _key;
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double5trunc(_tmp) {
  return Math.trunc(_tmp);
}
function _M0MPC16double6Double4ceil(_tmp) {
  return Math.ceil(_tmp);
}
function _M0MPC16double6Double5floor(_tmp) {
  return Math.floor(_tmp);
}
function _M0MPC16double6Double5round(_tmp) {
  return Math.round(_tmp);
}
function _M0MPC14char4Char20to__ascii__lowercase(self) {
  if (_M0MPC14char4Char20is__ascii__uppercase(self)) {
    return self + 32 | 0;
  }
  return self;
}
function _M0MPC14char4Char20to__ascii__uppercase(self) {
  if (_M0MPC14char4Char20is__ascii__lowercase(self)) {
    return self - 32 | 0;
  }
  return self;
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGdE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array12MutArrayView4swapGdE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGdE(arr, start, end) {
  const _bind = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGdE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array12MutArrayView14rev__in__placeGdE(arr) {
  const len = arr.end - arr.start | 0;
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp = len;
  let _tmp$2 = 0;
  while (true) {
    const len$2 = _tmp;
    const limit = _tmp$2;
    if (len$2 > 0) {
      _tmp = len$2 / 2 | 0;
      _tmp$2 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB19fixed__bubble__sortGdE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGdE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__choose__pivotN7sort__2S1247GdE(_env, a, b) {
  const arr = _env._1;
  const swaps = _env._0;
  if (arr.buf[arr.start + a | 0] > arr.buf[arr.start + b | 0]) {
    _M0MPC15array12MutArrayView4swapGdE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB20fixed__choose__pivotN7sort__3S1248GdE(_env, a, b, c) {
  _M0FPB20fixed__choose__pivotN7sort__2S1247GdE(_env, a, b);
  _M0FPB20fixed__choose__pivotN7sort__2S1247GdE(_env, b, c);
  _M0FPB20fixed__choose__pivotN7sort__2S1247GdE(_env, a, b);
}
function _M0FPB20fixed__choose__pivotGdE(arr) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: arr };
    if (len > 50) {
      _M0FPB20fixed__choose__pivotN7sort__3S1248GdE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S1248GdE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S1248GdE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB20fixed__choose__pivotN7sort__3S1248GdE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGdE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB17fixed__sift__downGdE(arr, index) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && arr.buf[arr.start + child | 0] < arr.buf[arr.start + (child + 1 | 0) | 0] ? child + 1 | 0 : child;
      if (arr.buf[arr.start + index$2 | 0] >= arr.buf[arr.start + child$2 | 0]) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGdE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__heap__sortGdE(arr) {
  const len = arr.end - arr.start | 0;
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  let _tmp$2 = _bind > 0;
  while (true) {
    const i = _tmp;
    const _more = _tmp$2;
    if (_more) {
      _M0FPB17fixed__sift__downGdE(arr, i);
      _tmp = i - 1 | 0;
      _tmp$2 = i > 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = len - 1 | 0;
  let _tmp$4 = len > 1;
  while (true) {
    const i = _tmp$3;
    const _more = _tmp$4;
    if (_more) {
      _M0MPC15array12MutArrayView4swapGdE(arr, 0, i);
      _M0FPB17fixed__sift__downGdE(_M0MPC15array12MutArrayView5sliceGdE(arr, 0, i), 0);
      _tmp$3 = i - 1 | 0;
      _tmp$4 = i > 1;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB16fixed__partitionGdE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGdE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
      if (arr.buf[arr.start + j | 0] < pivot) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGdE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGdE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGdE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGdE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB18fixed__quick__sortGdE(arr, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB19fixed__bubble__sortGdE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB17fixed__heap__sortGdE(arr$2);
      return undefined;
    }
    const _bind = _M0FPB20fixed__choose__pivotGdE(arr$2);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGdE(arr$2)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB16fixed__partitionGdE(arr$2, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    const _p = len - _pivot | 0;
    const balanced$2 = (_pivot > _p ? _p : _pivot) >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2.$tag === 1) {
      const _Some = pred$2;
      const _p$2 = _Some._0;
      if (_p$2 === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$6 = _pivot;
        while (true) {
          const i$2 = _tmp$6;
          if (i$2 < len && _p$2 === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$6 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGdE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGdE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGdE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGdE(left, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = new _M0DTPC16option6OptionGdE4Some(arr$2.buf[arr$2.start + _pivot | 0]);
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGdE(right, new _M0DTPC16option6OptionGdE4Some(arr$2.buf[arr$2.start + _pivot | 0]), limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView4sortGdE(self) {
  _M0FPB18fixed__quick__sortGdE(self, _M0DTPC16option6OptionGdE4None__, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGdE(self) {
  const _bind = self.length;
  _M0MPC15array12MutArrayView4sortGdE(new _M0TPB12MutArrayViewGdE(self, 0, _bind));
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE() {
  return new _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
  let _tmp = self;
  let _tmp$2 = init;
  let _tmp$3 = 0;
  while (true) {
    const str = _tmp;
    const ret = _tmp$2;
    const len = _tmp$3;
    _L: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          _tmp = _x$2;
          _tmp$2 = f(_x - 48 | 0, ret);
          _tmp$3 = len + 1 | 0;
          continue;
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp = _x$2;
            continue;
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    return { _0: str, _1: ret, _2: len };
  }
}
function _M0FPC28internal7strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
}
function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const s$2 = _tmp;
    let s$3;
    _L: {
      if ((s$2.end - s$2.start | 0) >= 1) {
        const _x = s$2.str.charCodeAt(s$2.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
          if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        }
      } else {
        s$3 = s$2;
        break _L;
      }
    }
    return { _0: s$3, _1: x$2, _2: len };
  }
}
function _M0FPC28internal7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind = s$2;
      if ((_bind.end - _bind.start | 0) >= 1) {
        const _x = _bind.str.charCodeAt(_bind.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind = s$2;
    if ((_bind.end - _bind.start | 0) >= 1) {
      const _x = _bind.str.charCodeAt(_bind.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$2 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS1425, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$2._0;
        const _exp_num = _bind$2._1;
        return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC28internal7strconv13parse__number(s) {
  let s$2;
  let negative;
  _L: {
    let rest;
    _L$2: {
      if ((s.end - s.start | 0) >= 1) {
        const _x = s.str.charCodeAt(s.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            s$2 = _x$2;
            negative = true;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
    }
    s$2 = rest;
    negative = false;
    break _L;
  }
  if ((s$2.end - s$2.start | 0) === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  const _bind = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind._0;
  const _mantissa = _bind._1;
  const _consumed = _bind._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$2 = s$3;
  if ((_bind$2.end - _bind$2.start | 0) >= 1) {
    const _x = _bind$2.str.charCodeAt(_bind$2.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
      s$3 = _x$2;
      const _bind$3 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$3._0;
      const _new_mantissa = _bind$3._1;
      const _consumed_digit = _bind$3._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  let exp_number = 0n;
  let rest;
  _L$2: {
    _L$3: {
      const _bind$3 = s$3;
      if ((_bind$3.end - _bind$3.start | 0) >= 1) {
        const _x = _bind$3.str.charCodeAt(_bind$3.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$3 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$4;
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$3;
      _bind$4 = _Some;
    }
    const _new_s = _bind$4._0;
    const _exp_number_val = _bind$4._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$3 = s$3;
  if ((_bind$3.end - _bind$3.start | 0) === 0) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s.str;
    let _tmp$2 = s.start;
    let _tmp$3 = s.end;
    _L$3: while (true) {
      const s_str = _tmp;
      const s_start = _tmp$2;
      const s_end = _tmp$3;
      _L$4: {
        let rest$2;
        let ch;
        _L$5: {
          if ((s_end - s_start | 0) >= 1) {
            const _x = s_str.charCodeAt(s_start);
            switch (_x) {
              case 48: {
                const _x$2 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$2;
                ch = _x;
                break _L$5;
              }
              case 46: {
                const _x$3 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$3;
                ch = _x;
                break _L$5;
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
        n_digits = n_digits - ((ch - 46 | 0) / 2 | 0) | 0;
        _tmp = rest$2.str;
        _tmp$2 = rest$2.start;
        _tmp$3 = rest$2.end;
        continue;
      }
      break;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = 0n;
      const _bind$4 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$4._0;
      const _new_mantissa = _bind$4._1;
      const _consumed_digit = _bind$4._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$5 = _s$2.str;
          const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$6;
          if (_bind$5 === undefined) {
            _tmp$6 = _s$2.end;
          } else {
            const _Some = _bind$5;
            _tmp$6 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _s$2.end);
          const _bind$6 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$6._1;
          const _consumed_digit$2 = _bind$6._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$4 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
        }
      }
      exponent = BigInt.asUintN(64, BigInt(_tmp$4));
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
  } else {
    return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
  }
}
function _M0FPC28internal7strconv15parse__inf__nan(rest) {
  let pos;
  let rest$2;
  _L: {
    let rest$3;
    _L$2: {
      if ((rest.end - rest.start | 0) >= 1) {
        const _x = rest.str.charCodeAt(rest.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            pos = false;
            rest$2 = _x$2;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            rest$3 = _x$3;
            break _L$2;
          }
          default: {
            rest$3 = rest;
            break _L$2;
          }
        }
      } else {
        rest$3 = rest;
        break _L$2;
      }
    }
    pos = true;
    rest$2 = rest$3;
    break _L;
  }
  let _cursor_295 = 0;
  const _input_end_297 = rest$2.end - rest$2.start | 0;
  const _start_296 = _cursor_295;
  let _accept_state_298 = -1;
  let _match_end_299 = -1;
  let _state_300 = 2;
  while (true) {
    if (_state_300 !== 14) {
      if (_state_300 < 2) {
        _accept_state_298 = _state_300;
        _match_end_299 = _cursor_295;
      }
      const _tmp = Math.imul(_state_300, 8) | 0;
      let _next_char_303;
      if (_cursor_295 < _input_end_297) {
        const _char_302 = rest$2.str.charCodeAt(rest$2.start + _cursor_295 | 0);
        _cursor_295 = _cursor_295 + 1 | 0;
        _next_char_303 = _char_302;
      } else {
        _next_char_303 = -1;
      }
      const _p = _tmp + (_next_char_303 < 90 ? (_next_char_303 < 73 ? (_next_char_303 < 66 ? (_next_char_303 < 0 ? 0 : _next_char_303 > 64 ? 1 : 7) : _next_char_303 > 69 ? (_next_char_303 < 71 ? 2 : 7) : 7) : _next_char_303 > 73 ? (_next_char_303 < 84 ? (_next_char_303 < 78 ? 7 : _next_char_303 > 78 ? 7 : 4) : _next_char_303 > 84 ? (_next_char_303 < 89 ? 7 : 6) : 5) : 3) : _next_char_303 > 96 ? (_next_char_303 < 110 ? (_next_char_303 < 103 ? (_next_char_303 < 98 ? 1 : _next_char_303 > 101 ? 2 : 7) : _next_char_303 > 104 ? (_next_char_303 < 106 ? 3 : 7) : 7) : _next_char_303 > 110 ? (_next_char_303 < 117 ? (_next_char_303 < 116 ? 7 : 5) : _next_char_303 > 120 ? (_next_char_303 < 122 ? 6 : 7) : 7) : 4) : 7) | 0;
      _state_300 = _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S1504[_p];
      continue;
    } else {
      break;
    }
  }
  const _bind = _accept_state_298;
  switch (_bind) {
    case 0: {
      _cursor_295 = _match_end_299;
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      _cursor_295 = _match_end_299;
      return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      _cursor_295 = _start_296;
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
}
function _M0FPC28internal7strconv12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC28internal7strconv12checked__mulN6constrS1524;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
    return undefined;
  }
  return BigInt.asUintN(64, a * b);
}
function _M0FPC28internal7strconv17check__underscore(str) {
  const _p = 95;
  if (_M0MPC16string10StringView20contains__code__unit(str, _p)) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      let _cursor_213 = 0;
      const _input_end_215 = rest.end - rest.start | 0;
      const _start_214 = _cursor_213;
      let _accept_state_216 = -1;
      let _match_end_217 = -1;
      let _state_218 = 3;
      while (true) {
        if (_state_218 !== 5) {
          if (_state_218 < 3) {
            _accept_state_216 = _state_218;
            _match_end_217 = _cursor_213;
          }
          const _tmp = Math.imul(_state_218, 5) | 0;
          let _next_char_221;
          if (_cursor_213 < _input_end_215) {
            const _char_220 = rest.str.charCodeAt(rest.start + _cursor_213 | 0);
            _cursor_213 = _cursor_213 + 1 | 0;
            _next_char_221 = _char_220;
          } else {
            _next_char_221 = -1;
          }
          const _p$2 = _tmp + (_next_char_221 < 88 ? (_next_char_221 < 66 ? (_next_char_221 < 48 ? 4 : _next_char_221 > 48 ? 4 : 0) : _next_char_221 > 66 ? (_next_char_221 < 79 ? 4 : _next_char_221 > 79 ? 4 : 2) : 1) : _next_char_221 > 88 ? (_next_char_221 < 111 ? (_next_char_221 < 98 ? 4 : _next_char_221 > 98 ? 4 : 1) : _next_char_221 > 111 ? (_next_char_221 < 120 ? 4 : _next_char_221 > 120 ? 4 : 3) : 2) : 3) | 0;
          _state_218 = _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S1528[_p$2];
          continue;
        } else {
          break;
        }
      }
      const _bind = _accept_state_216;
      switch (_bind) {
        case 0: {
          _cursor_213 = _match_end_217;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 1: {
          _cursor_213 = _match_end_217;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 2: {
          _cursor_213 = _match_end_217;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        default: {
          _cursor_213 = _start_214;
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp = rest$2.str;
    let _tmp$2 = rest$2.start;
    let _tmp$3 = rest$2.end;
    let _tmp$4 = allow_underscore;
    let _tmp$5 = false;
    while (true) {
      const rest_str = _tmp;
      const rest_start = _tmp$2;
      const rest_end = _tmp$3;
      const allow_underscore$2 = _tmp$4;
      const follow_underscore = _tmp$5;
      let rest$3;
      _L$2: {
        _L$3: {
          let rest$4;
          _L$4: {
            _L$5: {
              let rest$5;
              _L$6: {
                let rest$6;
                _L$7: {
                  if ((rest_end - rest_start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest_end - rest_start | 0) === 1) {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _bind = rest_start + 1 | 0;
                          _tmp$2 = _bind;
                          _tmp$4 = false;
                          _tmp$5 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                _tmp = rest$6.str;
                _tmp$2 = rest$6.start;
                _tmp$3 = rest$6.end;
                _tmp$4 = true;
                _tmp$5 = false;
                continue;
              }
              _tmp = rest$5.str;
              _tmp$2 = rest$5.start;
              _tmp$3 = rest$5.end;
              _tmp$4 = true;
              _tmp$5 = false;
              continue;
            }
            return false;
          }
          _tmp = rest$4.str;
          _tmp$2 = rest$4.start;
          _tmp$3 = rest$4.end;
          _tmp$4 = false;
          _tmp$5 = false;
          continue;
        }
        return false;
      }
      _tmp = rest$3.str;
      _tmp$2 = rest$3.start;
      _tmp$3 = rest$3.end;
      _tmp$4 = false;
      _tmp$5 = false;
      continue;
    }
  } else {
    return true;
  }
}
function _M0FPC28internal7strconv14eisel__umul128(a, b) {
  const a_lo = BigInt.asUintN(64, a & 4294967295n);
  const a_hi = BigInt.asUintN(64, BigInt.asUintN(64, a) >> BigInt(32 & 63));
  const b_lo = BigInt.asUintN(64, b & 4294967295n);
  const b_hi = BigInt.asUintN(64, BigInt.asUintN(64, b) >> BigInt(32 & 63));
  const x = BigInt.asUintN(64, a_lo * b_lo);
  const y = BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_lo) + BigInt.asUintN(64, BigInt.asUintN(64, x) >> BigInt(32 & 63)));
  const z = BigInt.asUintN(64, BigInt.asUintN(64, a_lo * b_hi) + BigInt.asUintN(64, y & 4294967295n));
  const hi = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_hi) + BigInt.asUintN(64, BigInt.asUintN(64, y) >> BigInt(32 & 63))) + BigInt.asUintN(64, BigInt.asUintN(64, z) >> BigInt(32 & 63)));
  return new _M0TPC28internal7strconv12EiselProduct(BigInt.asUintN(64, a * b), hi);
}
function _M0FPC28internal7strconv20try__eisel__lemire64(mantissa, exponent, negative) {
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, 0n)) {
    return negative ? $i64_reinterpret_f64(9223372036854775808n) : 0;
  }
  if (BigInt.asIntN(64, exponent) < BigInt.asIntN(64, 18446744073709551268n) || BigInt.asIntN(64, exponent) > BigInt.asIntN(64, 347n)) {
    return _M0FPC16double14not__a__number;
  }
  const exponent$2 = Number(BigInt.asIntN(32, exponent)) | 0;
  const table_index = Math.imul(exponent$2 - -348 | 0, 2) | 0;
  const pow_hi = table_index >>> 0 < _M0FPC28internal7strconv27eisel__lemire__pow10__table.length ? _M0FPC28internal7strconv27eisel__lemire__pow10__table[table_index] : $oob();
  const _p = table_index + 1 | 0;
  const pow_lo = _p >>> 0 < _M0FPC28internal7strconv27eisel__lemire__pow10__table.length ? _M0FPC28internal7strconv27eisel__lemire__pow10__table[_p] : $oob();
  const pow_exp2 = 1 + (Math.imul(exponent$2, 108853) >> 15) | 0;
  const leading_zeros = $i64_clz(mantissa);
  const normalized = BigInt.asUintN(64, mantissa << BigInt(leading_zeros & 63));
  let result_exp2 = ((pow_exp2 + 63 | 0) + 1023 | 0) - leading_zeros | 0;
  const product = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_hi);
  let product_hi = product.hi;
  let product_lo = product.lo;
  if (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 511n) && BigInt.asUintN(64, BigInt.asUintN(64, product_lo + normalized)) < BigInt.asUintN(64, normalized)) {
    const wider = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_lo);
    let merged_hi = product_hi;
    const merged_lo = BigInt.asUintN(64, product_lo + wider.hi);
    if (BigInt.asUintN(64, merged_lo) < BigInt.asUintN(64, product_lo)) {
      merged_hi = BigInt.asUintN(64, merged_hi + 1n);
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, merged_hi & 511n)) === BigInt.asUintN(64, 511n) && (BigInt.asUintN(64, BigInt.asUintN(64, merged_lo + 1n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, wider.lo + normalized)) < BigInt.asUintN(64, normalized))) {
      return _M0FPC16double14not__a__number;
    }
    product_hi = merged_hi;
    product_lo = merged_lo;
  }
  const top_bit = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(63 & 63)))) | 0;
  let result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(top_bit + 9 & 63));
  result_exp2 = result_exp2 - (1 - top_bit | 0) | 0;
  if (BigInt.asUintN(64, product_lo) === BigInt.asUintN(64, 0n) && (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa & 3n)) === BigInt.asUintN(64, 1n))) {
    return _M0FPC16double14not__a__number;
  }
  result_mantissa = BigInt.asUintN(64, result_mantissa + BigInt.asUintN(64, result_mantissa & 1n));
  result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
  if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(53 & 63))) > BigInt.asUintN(64, 0n)) {
    result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
    result_exp2 = result_exp2 + 1 | 0;
  }
  if (result_exp2 <= 0 || result_exp2 >= 2047) {
    return _M0FPC16double14not__a__number;
  }
  const exponent_bits = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(result_exp2 >>> 0)) << BigInt(52 & 63));
  let result_bits = BigInt.asUintN(64, exponent_bits | BigInt.asUintN(64, result_mantissa & 4503599627370495n));
  if (negative) {
    result_bits = BigInt.asUintN(64, result_bits | 9223372036854775808n);
  }
  return $i64_reinterpret_f64(result_bits);
}
function _M0MPC28internal7strconv7Decimal9new__priv() {
  return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
}
function _M0MPC28internal7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      const _p = _tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob();
      const _p$2 = 0;
      _tmp = _p === _p$2;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
  const d = _M0MPC28internal7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const rest$3 = _tmp;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$3.end - rest$3.start | 0) >= 1) {
          const _x = rest$3.str.charCodeAt(rest$3.start);
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
            _tmp = _x$2;
            continue;
          } else {
            if (_x === 46) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              if (!has_dp) {
                has_dp = true;
                d.decimal_point = d.digits_num;
                _tmp = _x$2;
                continue;
              } else {
                const _bind = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  _ok._0;
                } else {
                  return _bind;
                }
              }
            } else {
              if (_x >= 48 && _x <= 57) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                has_digits = true;
                if (_x === 48 && d.digits_num === 0) {
                  d.decimal_point = d.decimal_point - 1 | 0;
                  _tmp = _x$2;
                  continue;
                }
                if (d.digits_num < d.digits.length) {
                  const _tmp$2 = d.digits;
                  const _tmp$3 = d.digits_num;
                  if (_tmp$3 >>> 0 < _tmp$2.length) {
                    _tmp$2[_tmp$3] = (_x - 48 | 0) & 255;
                  } else {
                    $oob();
                  }
                  d.digits_num = d.digits_num + 1 | 0;
                } else {
                  if (!has_dp) {
                    d.overflowed = d.overflowed + 1 | 0;
                  }
                  if (_x !== 48) {
                    d.truncated = true;
                  }
                }
                _tmp = _x$2;
                continue;
              } else {
                rest$4 = rest$3;
                break _L$3;
              }
            }
          }
        } else {
          rest$4 = rest$3;
          break _L$3;
        }
        break _L$2;
      }
      rest$2 = rest$4;
      break;
    }
    continue;
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x = rest$2.str.charCodeAt(rest$2.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if ((rest$4.end - rest$4.start | 0) >= 1) {
        const _x = rest$4.str.charCodeAt(rest$4.start);
        switch (_x) {
          case 43: {
            rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            break;
          }
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if ((rest$5.end - rest$5.start | 0) >= 1) {
            const _x = rest$5.str.charCodeAt(rest$5.start);
            if (_x >= 48 && _x <= 57) {
              const effective_dp = d.decimal_point + d.overflowed | 0;
              const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const rest$7 = _tmp$2;
                let rest$8;
                _L$6: {
                  if ((rest$7.end - rest$7.start | 0) >= 1) {
                    const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                    if (_x$2 === 95) {
                      const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      if (_x$2 >= 48 && _x$2 <= 57) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        if (exp < exp_limit) {
                          exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                          if (exp > exp_limit) {
                            exp = exp_limit;
                          }
                        }
                        _tmp$2 = _x$3;
                        continue;
                      } else {
                        rest$8 = rest$7;
                        break _L$6;
                      }
                    }
                  } else {
                    rest$8 = rest$7;
                    break _L$6;
                  }
                }
                rest$6 = rest$8;
                break;
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind = _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          rest$3 = _ok._0;
        } else {
          return _bind;
        }
      }
    }
    if ((rest$3.end - rest$3.start | 0) === 0) {
      _M0MPC28internal7strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
    } else {
      return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
  }
}
function _M0FPC28internal7strconv20parse__decimal__priv(str) {
  return _M0FPC28internal7strconv26parse__decimal__from__view(str);
}
function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
  let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
  const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
  bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
  if (negative) {
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
  }
  return bits;
}
function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  if ((d >>> 0 < _tmp$2.length ? _tmp$2[d] : $oob()) === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      _tmp$3 = ((_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()) % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  return (d >>> 0 < _tmp$3.length ? _tmp$3[d] : $oob()) >= 5;
}
function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return 18446744073709551615n;
  }
  let _tmp = 0n;
  let _tmp$2 = 0;
  while (true) {
    const n = _tmp;
    const i = _tmp$2;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$3 = BigInt.asUintN(64, n * 10n);
      const _tmp$4 = self.digits;
      const _p = i >>> 0 < _tmp$4.length ? _tmp$4[i] : $oob();
      _tmp = BigInt.asUintN(64, _tmp$3 + BigInt.asUintN(64, BigInt(_p)));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      let n$2;
      let _tmp$3 = n;
      let _tmp$4 = i;
      while (true) {
        const n$3 = _tmp$3;
        const i$2 = _tmp$4;
        if (i$2 < self.decimal_point) {
          _tmp$3 = BigInt.asUintN(64, n$3 * 10n);
          _tmp$4 = i$2 + 1 | 0;
          continue;
        } else {
          n$2 = n$3;
          break;
        }
      }
      return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
    }
  }
}
function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
  const new_digits = (s >>> 0 < _M0FPC28internal7strconv19left__shift__cheats.length ? _M0FPC28internal7strconv19left__shift__cheats[s] : $oob())._0;
  const cheat_num = (s >>> 0 < _M0FPC28internal7strconv19left__shift__cheats.length ? _M0FPC28internal7strconv19left__shift__cheats[s] : $oob())._1;
  const _bind = cheat_num.length;
  let less;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const code_unit = cheat_num.charCodeAt(i);
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = code_unit - 48 | 0;
      const _tmp$2 = self.digits;
      if ((i >>> 0 < _tmp$2.length ? _tmp$2[i] : $oob()) !== d) {
        const _tmp$3 = self.digits;
        less = (i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob()) < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const _p = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
      const d = BigInt.asUintN(64, BigInt(_p));
      acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        if (_tmp$4 >>> 0 < _tmp$3.length) {
          _tmp$3[_tmp$4] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
            acc = BigInt.asUintN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      if (_tmp$2 >>> 0 < _tmp.length) {
        _tmp[_tmp$2] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
      } else {
        $oob();
      }
      write_index = write_index + 1 | 0;
      acc = BigInt.asUintN(64, acc & mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      const d = _tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
        } else {
          $oob();
        }
        write_index = write_index + 1 | 0;
      } else {
        if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
          self.truncated = true;
        }
      }
      acc = BigInt.asUintN(64, acc & mask);
      acc = BigInt.asUintN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = 0n;
  const effective_dp = self.decimal_point + self.overflowed | 0;
  if (self.digits_num === 0 || effective_dp < -330) {
    mantissa = 0n;
    exponent = _M0FPC28internal7strconv12double__info.bias;
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  if (self.decimal_point > 310) {
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  self.decimal_point = self.decimal_point + self.overflowed | 0;
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0FPC28internal7strconv6powtab.length) {
        n = 60;
      } else {
        const _p = self.decimal_point;
        n = _p >>> 0 < _M0FPC28internal7strconv6powtab.length ? _M0FPC28internal7strconv6powtab[_p] : $oob();
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        _tmp$2 = (0 >>> 0 < _tmp$3.length ? _tmp$3[0] : $oob()) < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0FPC28internal7strconv6powtab.length) {
        n = 60;
      } else {
        const _p = -self.decimal_point | 0;
        n = _p >>> 0 < _M0FPC28internal7strconv6powtab.length ? _M0FPC28internal7strconv6powtab[_p] : $oob();
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind = _M0FPC28internal7strconv10range__errGuE();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
  }
  if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
    exponent = _M0FPC28internal7strconv12double__info.bias;
  }
  const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
}
function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
  const _p = exponent & 31;
  return _p >>> 0 < _M0FPC28internal7strconv5table.length ? _M0FPC28internal7strconv5table[_p] : $oob();
}
function _M0MPC28internal7strconv6Number14is__fast__path(self) {
  return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC28internal7strconv6Number15try__fast__path(self) {
  if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
    let value;
    if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
      const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
      value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
    } else {
      const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
      const _tmp = self.mantissa;
      const _p = Number(BigInt.asIntN(32, shift)) | 0;
      const _bind = _M0FPC28internal7strconv12checked__mul(_tmp, _p >>> 0 < _M0FPC28internal7strconv10int__pow10.length ? _M0FPC28internal7strconv10int__pow10[_p] : $oob());
      if (_bind === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind;
        const _mantissa = _Some;
        if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
          return _M0DTPC16option6OptionGdE4None__;
        }
        value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
      }
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC28internal7strconv13parse__double(str) {
  if (!((str.end - str.start | 0) === 0)) {
    if (_M0FPC28internal7strconv17check__underscore(str)) {
      const _bind = _M0FPC28internal7strconv13parse__number(str);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        return _bind;
      }
      if (_bind$2 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$2;
        const _num = _Some;
        const _bind$3 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$3.$tag === 1) {
          const _Some$2 = _bind$3;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
          if (fast !== fast) {
            const _bind$4 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _tmp = _ok._0;
            } else {
              return _bind$4;
            }
            return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp);
          } else {
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(fast);
          }
        }
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGdE();
  }
}
function _M0FPC14math13math__pow__js(_tmp, _tmp$2) {
  return Math.pow(_tmp, _tmp$2);
}
function _M0FPC14math3pow(base, exponent) {
  if (base === 1) {
    return 1;
  }
  if (base === -1 && (exponent === _M0FPC16double8infinity || exponent === _M0FPC16double13neg__infinity)) {
    return 1;
  }
  return _M0FPC14math13math__pow__js(base, exponent);
}
function _M0FPC14math2ln(_tmp) {
  return Math.log(_tmp);
}
function _M0FPC14math5log10(_tmp) {
  return Math.log10(_tmp);
}
function _M0FPC14math3exp(_tmp) {
  return Math.exp(_tmp);
}
function _M0MP49poipoiiii9moonsheet3lib5types9CellError4code(self) {
  switch (self) {
    case 0: {
      return "#DIV/0!";
    }
    case 1: {
      return "#VALUE!";
    }
    case 2: {
      return "#REF!";
    }
    case 3: {
      return "#NAME?";
    }
    case 4: {
      return "#N/A";
    }
    case 5: {
      return "#NUM!";
    }
    default: {
      return "#CIRC!";
    }
  }
}
function _M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(self) {
  switch (self.$tag) {
    case 0: {
      const _Number = self;
      const _n = _Number._0;
      return String(_n);
    }
    case 1: {
      const _Text = self;
      return _Text._0;
    }
    case 2: {
      const _Boolean = self;
      const _b = _Boolean._0;
      return _b ? "TRUE" : "FALSE";
    }
    case 3: {
      const _Date = self;
      const _d = _Date._0;
      return _M0MPC13int3Int18to__string_2einner(_d, 10);
    }
    case 4: {
      const _Error = self;
      const _e = _Error._0;
      return _M0MP49poipoiiii9moonsheet3lib5types9CellError4code(_e);
    }
    default: {
      return "";
    }
  }
}
function _M0MP49poipoiiii9moonsheet3lib5types7Address3new(row, col) {
  return new _M0TP49poipoiiii9moonsheet3lib5types7Address(row, col);
}
function _M0MP49poipoiiii9moonsheet3lib5types7Address9from__key(key) {
  return new _M0TP49poipoiiii9moonsheet3lib5types7Address(key / 16384 | 0, key % 16384 | 0);
}
function _M0FP49poipoiiii9moonsheet3lib5types15column__letters(col) {
  let n = col + 1 | 0;
  let out = "";
  while (true) {
    if (n > 0) {
      const rem = (n - 1 | 0) % 26 | 0;
      out = `${_M0IPC14char4CharPB4Show10to__string(65 + rem | 0)}${out}`;
      n = (n - 1 | 0) / 26 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0MP49poipoiiii9moonsheet3lib5types7Address6to__a1(self) {
  return `${_M0FP49poipoiiii9moonsheet3lib5types15column__letters(self.col)}${_M0MPC13int3Int18to__string_2einner(self.row + 1 | 0, 10)}`;
}
function _M0MP49poipoiiii9moonsheet3lib5types7Address5parse(a1) {
  let upper = "";
  const _bind = _M0MPC16string6String9to__array(a1);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const c = _bind[_];
      upper = `${upper}${_M0IPC14char4CharPB4Show10to__string(_M0MPC14char4Char20to__ascii__uppercase(c))}`;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const chars = _M0MPC16string6String9to__array(upper);
  const n = chars.length;
  let i = 0;
  if (i < n && _M0MPC15array5Array2atGcE(chars, i) === 36) {
    i = i + 1 | 0;
  }
  let col = 0;
  let letters = 0;
  while (true) {
    if (i < n && (_M0MPC15array5Array2atGcE(chars, i) >= 65 && _M0MPC15array5Array2atGcE(chars, i) <= 90)) {
      col = (Math.imul(col, 26) | 0) + ((_M0MPC15array5Array2atGcE(chars, i) - 65 | 0) + 1 | 0) | 0;
      i = i + 1 | 0;
      letters = letters + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (letters === 0) {
    return undefined;
  }
  if (i < n && _M0MPC15array5Array2atGcE(chars, i) === 36) {
    i = i + 1 | 0;
  }
  let row = 0;
  let digits = 0;
  while (true) {
    if (i < n && (_M0MPC15array5Array2atGcE(chars, i) >= 48 && _M0MPC15array5Array2atGcE(chars, i) <= 57)) {
      row = (Math.imul(row, 10) | 0) + (_M0MPC15array5Array2atGcE(chars, i) - 48 | 0) | 0;
      i = i + 1 | 0;
      digits = digits + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (digits === 0 || (i !== n || (row < 1 || col < 1))) {
    return undefined;
  }
  return new _M0TP49poipoiiii9moonsheet3lib5types7Address(row - 1 | 0, col - 1 | 0);
}
function _M0MP49poipoiiii9moonsheet3lib5types5Range3new(a, b) {
  const row_start = a.row <= b.row ? a.row : b.row;
  const row_end = a.row <= b.row ? b.row : a.row;
  const col_start = a.col <= b.col ? a.col : b.col;
  const col_end = a.col <= b.col ? b.col : a.col;
  return new _M0TP49poipoiiii9moonsheet3lib5types5Range(new _M0TP49poipoiiii9moonsheet3lib5types7Address(row_start, col_start), new _M0TP49poipoiiii9moonsheet3lib5types7Address(row_end, col_end));
}
function _M0IP49poipoiiii9moonsheet3lib7formula5TokenPB2Eq5equal(_x_141, _x_142) {
  switch (_x_141.$tag) {
    case 0: {
      const _Number = _x_141;
      const _$42$x0_143 = _Number._0;
      if (_x_142.$tag === 0) {
        const _Number$2 = _x_142;
        const _$42$y0_144 = _Number$2._0;
        return _$42$x0_143 === _$42$y0_144;
      } else {
        return false;
      }
    }
    case 1: {
      const _Text = _x_141;
      const _$42$x0_145 = _Text._0;
      if (_x_142.$tag === 1) {
        const _Text$2 = _x_142;
        const _$42$y0_146 = _Text$2._0;
        return _$42$x0_145 === _$42$y0_146;
      } else {
        return false;
      }
    }
    case 2: {
      const _Ident = _x_141;
      const _$42$x0_147 = _Ident._0;
      if (_x_142.$tag === 2) {
        const _Ident$2 = _x_142;
        const _$42$y0_148 = _Ident$2._0;
        return _$42$x0_147 === _$42$y0_148;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_142.$tag === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_142.$tag === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_142.$tag === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_142.$tag === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_142.$tag === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_142.$tag === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_142.$tag === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_142.$tag === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_142.$tag === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_142.$tag === 12) {
        return true;
      } else {
        return false;
      }
    }
    case 13: {
      if (_x_142.$tag === 13) {
        return true;
      } else {
        return false;
      }
    }
    case 14: {
      if (_x_142.$tag === 14) {
        return true;
      } else {
        return false;
      }
    }
    case 15: {
      if (_x_142.$tag === 15) {
        return true;
      } else {
        return false;
      }
    }
    case 16: {
      if (_x_142.$tag === 16) {
        return true;
      } else {
        return false;
      }
    }
    case 17: {
      if (_x_142.$tag === 17) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_142.$tag === 18) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib7formula19collect__references(expr, out) {
  let _tmp = expr;
  _L: while (true) {
    const expr$2 = _tmp;
    switch (expr$2.$tag) {
      case 4: {
        const _Ref = expr$2;
        const _addr = _Ref._0;
        _M0MPC15array5Array4pushGsE(out, _addr);
        return;
      }
      case 5: {
        const _Range = expr$2;
        const _range = _Range._0;
        const rows = (_range.end.row - _range.start.row | 0) + 1 | 0;
        const cols = (_range.end.col - _range.start.col | 0) + 1 | 0;
        if ((Math.imul(rows, cols) | 0) <= 10000) {
          let row = _range.start.row;
          while (true) {
            if (row <= _range.end.row) {
              let col = _range.start.col;
              while (true) {
                if (col <= _range.end.col) {
                  _M0MPC15array5Array4pushGsE(out, _M0MP49poipoiiii9moonsheet3lib5types7Address3new(row, col));
                  col = col + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              row = row + 1 | 0;
              continue;
            } else {
              return;
            }
          }
        } else {
          return;
        }
      }
      case 6: {
        const _Unary = expr$2;
        const _inner = _Unary._1;
        _tmp = _inner;
        continue _L;
      }
      case 7: {
        const _Binary = expr$2;
        const _left = _Binary._1;
        const _right = _Binary._2;
        _M0FP49poipoiiii9moonsheet3lib7formula19collect__references(_left, out);
        _tmp = _right;
        continue _L;
      }
      case 8: {
        const _Call = expr$2;
        const _args = _Call._1;
        const _bind = _args.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind) {
            const arg = _args[_];
            _M0FP49poipoiiii9moonsheet3lib7formula19collect__references(arg, out);
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
      default: {
        return;
      }
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib7formula10references(expr) {
  const out = [];
  _M0FP49poipoiiii9moonsheet3lib7formula19collect__references(expr, out);
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib7formula9is__alpha(c) {
  return c >= 65 && c <= 90 || (c >= 97 && c <= 122 || c === 95);
}
function _M0FP49poipoiiii9moonsheet3lib7formula15is__ident__char(c) {
  return _M0FP49poipoiiii9moonsheet3lib7formula9is__alpha(c) || (c >= 48 && c <= 57 || (c === 36 || c === 46));
}
function _M0FP49poipoiiii9moonsheet3lib7formula13upper__string(s) {
  let out = "";
  const _bind = _M0MPC16string6String9to__array(s);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const c = _bind[_];
      out = `${out}${_M0IPC14char4CharPB4Show10to__string(_M0MPC14char4Char20to__ascii__uppercase(c))}`;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0MP49poipoiiii9moonsheet3lib7formula10ParseError3new(message, position) {
  return new _M0TP49poipoiiii9moonsheet3lib7formula10ParseError(message, position);
}
function _M0FP49poipoiiii9moonsheet3lib7formula3lex(input) {
  const tokens = [];
  const n = _M0MPC16string6String20char__length_2einner(input, 0, undefined);
  let i = 0;
  while (true) {
    if (i < n) {
      const _bind = _M0MPC16string6String9get__char(input, i);
      const c = _bind === -1 ? 32 : _bind;
      if (c === 32 || (c === 9 || (c === 13 || c === 10))) {
        i = i + 1 | 0;
      } else {
        if (c >= 48 && c <= 57) {
          let text = "";
          let seen_dot = false;
          while (true) {
            let _tmp;
            if (i < n) {
              const _bind$2 = _M0MPC16string6String9get__char(input, i);
              const _p = _bind$2 === -1 ? 32 : _bind$2;
              _tmp = _p >= 48 && _p <= 57;
            } else {
              _tmp = false;
            }
            if (_tmp) {
              const _bind$2 = _M0MPC16string6String9get__char(input, i);
              const d = _bind$2 === -1 ? 48 : _bind$2;
              text = `${text}${_M0IPC14char4CharPB4Show10to__string(d)}`;
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i < n && (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC16string6String9get__char(input, i), _M0FP49poipoiiii9moonsheet3lib7formula3lexN6constrS1853) && !seen_dot)) {
            seen_dot = true;
            text = `${text}.`;
            i = i + 1 | 0;
            while (true) {
              let _tmp;
              if (i < n) {
                const _bind$2 = _M0MPC16string6String9get__char(input, i);
                const _p = _bind$2 === -1 ? 32 : _bind$2;
                _tmp = _p >= 48 && _p <= 57;
              } else {
                _tmp = false;
              }
              if (_tmp) {
                const _bind$2 = _M0MPC16string6String9get__char(input, i);
                const d = _bind$2 === -1 ? 48 : _bind$2;
                text = `${text}${_M0IPC14char4CharPB4Show10to__string(d)}`;
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          let value;
          let _try_err;
          _L: {
            _L$2: {
              const _bind$2 = text;
              const _bind$3 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                value = _ok._0;
              } else {
                const _err = _bind$3;
                _try_err = _err._0;
                break _L$2;
              }
              break _L;
            }
            value = 0;
          }
          _M0MPC15array5Array4pushGsE(tokens, new _M0DTP49poipoiiii9moonsheet3lib7formula5Token6Number(value));
        } else {
          if (_M0FP49poipoiiii9moonsheet3lib7formula9is__alpha(c) || c === 36) {
            let text = "";
            while (true) {
              let _tmp;
              if (i < n) {
                const _bind$2 = _M0MPC16string6String9get__char(input, i);
                _tmp = _M0FP49poipoiiii9moonsheet3lib7formula15is__ident__char(_bind$2 === -1 ? 32 : _bind$2);
              } else {
                _tmp = false;
              }
              if (_tmp) {
                const _bind$2 = _M0MPC16string6String9get__char(input, i);
                const d = _bind$2 === -1 ? 32 : _bind$2;
                text = `${text}${_M0IPC14char4CharPB4Show10to__string(d)}`;
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGsE(tokens, new _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Ident(text));
          } else {
            if (c === 34) {
              i = i + 1 | 0;
              let text = "";
              let closed = false;
              while (true) {
                if (i < n) {
                  const _bind$2 = _M0MPC16string6String9get__char(input, i);
                  const d = _bind$2 === -1 ? 32 : _bind$2;
                  if (d === 34) {
                    if ((i + 1 | 0) < n && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC16string6String9get__char(input, i + 1 | 0), _M0FP49poipoiiii9moonsheet3lib7formula3lexN6constrS1854)) {
                      text = `${text}\"`;
                      i = i + 2 | 0;
                    } else {
                      closed = true;
                      i = i + 1 | 0;
                      break;
                    }
                  } else {
                    text = `${text}${_M0IPC14char4CharPB4Show10to__string(d)}`;
                    i = i + 1 | 0;
                  }
                  continue;
                } else {
                  break;
                }
              }
              if (!closed) {
                return new _M0DTPC16result6ResultGRPB5ArrayGRP49poipoiiii9moonsheet3lib7formula5TokenERP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_M0MP49poipoiiii9moonsheet3lib7formula10ParseError3new("unterminated string", i));
              }
              _M0MPC15array5Array4pushGsE(tokens, new _M0DTP49poipoiiii9moonsheet3lib7formula5Token4Text(text));
            } else {
              switch (c) {
                case 43: {
                  _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token4Plus__);
                  i = i + 1 | 0;
                  break;
                }
                case 45: {
                  _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Minus__);
                  i = i + 1 | 0;
                  break;
                }
                case 42: {
                  _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token4Star__);
                  i = i + 1 | 0;
                  break;
                }
                case 47: {
                  _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Slash__);
                  i = i + 1 | 0;
                  break;
                }
                case 94: {
                  _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Caret__);
                  i = i + 1 | 0;
                  break;
                }
                case 40: {
                  _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token6LParen__);
                  i = i + 1 | 0;
                  break;
                }
                case 41: {
                  _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token6RParen__);
                  i = i + 1 | 0;
                  break;
                }
                case 44: {
                  _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Comma__);
                  i = i + 1 | 0;
                  break;
                }
                case 58: {
                  _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Colon__);
                  i = i + 1 | 0;
                  break;
                }
                case 61: {
                  _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Eq__);
                  i = i + 1 | 0;
                  break;
                }
                case 60: {
                  if ((i + 1 | 0) < n && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC16string6String9get__char(input, i + 1 | 0), _M0FP49poipoiiii9moonsheet3lib7formula3lexN6constrS1855)) {
                    _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Le__);
                    i = i + 2 | 0;
                  } else {
                    if ((i + 1 | 0) < n && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC16string6String9get__char(input, i + 1 | 0), _M0FP49poipoiiii9moonsheet3lib7formula3lexN6constrS1856)) {
                      _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Ne__);
                      i = i + 2 | 0;
                    } else {
                      _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Lt__);
                      i = i + 1 | 0;
                    }
                  }
                  break;
                }
                case 62: {
                  if ((i + 1 | 0) < n && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC16string6String9get__char(input, i + 1 | 0), _M0FP49poipoiiii9moonsheet3lib7formula3lexN6constrS1857)) {
                    _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Ge__);
                    i = i + 2 | 0;
                  } else {
                    _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token2Gt__);
                    i = i + 1 | 0;
                  }
                  break;
                }
                default: {
                  return new _M0DTPC16result6ResultGRPB5ArrayGRP49poipoiiii9moonsheet3lib7formula5TokenERP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_M0MP49poipoiiii9moonsheet3lib7formula10ParseError3new("unexpected character", i));
                }
              }
            }
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGsE(tokens, _M0DTP49poipoiiii9moonsheet3lib7formula5Token3Eof__);
  return new _M0DTPC16result6ResultGRPB5ArrayGRP49poipoiiii9moonsheet3lib7formula5TokenERP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(tokens);
}
function _M0MP49poipoiiii9moonsheet3lib7formula6Parser3new(tokens) {
  return new _M0TP49poipoiiii9moonsheet3lib7formula6Parser(tokens, 0);
}
function _M0MP49poipoiiii9moonsheet3lib7formula6Parser4peek(self) {
  return self.pos < self.tokens.length ? _M0MPC15array5Array2atGsE(self.tokens, self.pos) : _M0DTP49poipoiiii9moonsheet3lib7formula5Token3Eof__;
}
function _M0MP49poipoiiii9moonsheet3lib7formula6Parser3eat(self, token) {
  if (_M0IP49poipoiiii9moonsheet3lib7formula5TokenPB2Eq5equal(_M0MP49poipoiiii9moonsheet3lib7formula6Parser4peek(self), token)) {
    self.pos = self.pos + 1 | 0;
    return true;
  } else {
    return false;
  }
}
function _M0MP49poipoiiii9moonsheet3lib7formula6Parser11parse__expr(self) {
  return _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparison(self);
}
function _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparison(self) {
  const _bind = _M0MP49poipoiiii9moonsheet3lib7formula6Parser15parse__additive(self);
  let first;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    first = _Ok._0;
  } else {
    const _Err = _bind;
    const _e = _Err._0;
    return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
  }
  let left = first;
  while (true) {
    const _bind$2 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser4peek(self);
    let op;
    switch (_bind$2.$tag) {
      case 12: {
        op = _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1902;
        break;
      }
      case 13: {
        op = _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1903;
        break;
      }
      case 14: {
        op = _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1904;
        break;
      }
      case 15: {
        op = _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1905;
        break;
      }
      case 16: {
        op = _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1906;
        break;
      }
      case 17: {
        op = _M0MP49poipoiiii9moonsheet3lib7formula6Parser17parse__comparisonN6constrS1907;
        break;
      }
      default: {
        op = undefined;
      }
    }
    if (op === undefined) {
      break;
    } else {
      const _Some = op;
      const _op = _Some;
      self.pos = self.pos + 1 | 0;
      const _bind$3 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser15parse__additive(self);
      let right;
      if (_bind$3.$tag === 1) {
        const _Ok = _bind$3;
        right = _Ok._0;
      } else {
        const _Err = _bind$3;
        const _e = _Err._0;
        return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
      }
      left = new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr6Binary(_op, left, right);
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(left);
}
function _M0MP49poipoiiii9moonsheet3lib7formula6Parser15parse__additive(self) {
  const _bind = _M0MP49poipoiiii9moonsheet3lib7formula6Parser21parse__multiplicative(self);
  let first;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    first = _Ok._0;
  } else {
    const _Err = _bind;
    const _e = _Err._0;
    return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
  }
  let left = first;
  while (true) {
    const _bind$2 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser4peek(self);
    let op;
    switch (_bind$2.$tag) {
      case 3: {
        op = _M0MP49poipoiiii9moonsheet3lib7formula6Parser15parse__additiveN6constrS1925;
        break;
      }
      case 4: {
        op = _M0MP49poipoiiii9moonsheet3lib7formula6Parser15parse__additiveN6constrS1926;
        break;
      }
      default: {
        op = undefined;
      }
    }
    if (op === undefined) {
      break;
    } else {
      const _Some = op;
      const _op = _Some;
      self.pos = self.pos + 1 | 0;
      const _bind$3 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser21parse__multiplicative(self);
      let right;
      if (_bind$3.$tag === 1) {
        const _Ok = _bind$3;
        right = _Ok._0;
      } else {
        const _Err = _bind$3;
        const _e = _Err._0;
        return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
      }
      left = new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr6Binary(_op, left, right);
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(left);
}
function _M0MP49poipoiiii9moonsheet3lib7formula6Parser21parse__multiplicative(self) {
  const _bind = _M0MP49poipoiiii9moonsheet3lib7formula6Parser12parse__power(self);
  let first;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    first = _Ok._0;
  } else {
    const _Err = _bind;
    const _e = _Err._0;
    return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
  }
  let left = first;
  while (true) {
    const _bind$2 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser4peek(self);
    let op;
    switch (_bind$2.$tag) {
      case 5: {
        op = _M0MP49poipoiiii9moonsheet3lib7formula6Parser21parse__multiplicativeN6constrS1944;
        break;
      }
      case 6: {
        op = _M0MP49poipoiiii9moonsheet3lib7formula6Parser21parse__multiplicativeN6constrS1945;
        break;
      }
      default: {
        op = undefined;
      }
    }
    if (op === undefined) {
      break;
    } else {
      const _Some = op;
      const _op = _Some;
      self.pos = self.pos + 1 | 0;
      const _bind$3 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser12parse__power(self);
      let right;
      if (_bind$3.$tag === 1) {
        const _Ok = _bind$3;
        right = _Ok._0;
      } else {
        const _Err = _bind$3;
        const _e = _Err._0;
        return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
      }
      left = new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr6Binary(_op, left, right);
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(left);
}
function _M0MP49poipoiiii9moonsheet3lib7formula6Parser12parse__power(self) {
  const _bind = _M0MP49poipoiiii9moonsheet3lib7formula6Parser12parse__unary(self);
  let base;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    base = _Ok._0;
  } else {
    const _Err = _bind;
    const _e = _Err._0;
    return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
  }
  if (_M0MP49poipoiiii9moonsheet3lib7formula6Parser3eat(self, _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Caret__)) {
    const _bind$2 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser12parse__power(self);
    let exponent;
    if (_bind$2.$tag === 1) {
      const _Ok = _bind$2;
      exponent = _Ok._0;
    } else {
      const _Err = _bind$2;
      const _e = _Err._0;
      return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
    }
    return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr6Binary(4, base, exponent));
  } else {
    return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(base);
  }
}
function _M0MP49poipoiiii9moonsheet3lib7formula6Parser12parse__unary(self) {
  const _bind = _M0MP49poipoiiii9moonsheet3lib7formula6Parser4peek(self);
  switch (_bind.$tag) {
    case 4: {
      self.pos = self.pos + 1 | 0;
      const _bind$2 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser12parse__unary(self);
      let inner;
      if (_bind$2.$tag === 1) {
        const _Ok = _bind$2;
        inner = _Ok._0;
      } else {
        const _Err = _bind$2;
        const _e = _Err._0;
        return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
      }
      return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr5Unary(0, inner));
    }
    case 3: {
      self.pos = self.pos + 1 | 0;
      const _bind$3 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser12parse__unary(self);
      let inner$2;
      if (_bind$3.$tag === 1) {
        const _Ok = _bind$3;
        inner$2 = _Ok._0;
      } else {
        const _Err = _bind$3;
        const _e = _Err._0;
        return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
      }
      return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr5Unary(1, inner$2));
    }
    default: {
      return _M0MP49poipoiiii9moonsheet3lib7formula6Parser14parse__primary(self);
    }
  }
}
function _M0MP49poipoiiii9moonsheet3lib7formula6Parser14parse__primary(self) {
  const _bind = _M0MP49poipoiiii9moonsheet3lib7formula6Parser4peek(self);
  switch (_bind.$tag) {
    case 0: {
      const _Number = _bind;
      const _n = _Number._0;
      self.pos = self.pos + 1 | 0;
      return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr6Number(_n));
    }
    case 1: {
      const _Text = _bind;
      const _s = _Text._0;
      self.pos = self.pos + 1 | 0;
      return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr4Text(_s));
    }
    case 2: {
      const _Ident = _bind;
      const _name = _Ident._0;
      self.pos = self.pos + 1 | 0;
      if (_M0MP49poipoiiii9moonsheet3lib7formula6Parser3eat(self, _M0DTP49poipoiiii9moonsheet3lib7formula5Token6LParen__)) {
        const args = [];
        if (!_M0MP49poipoiiii9moonsheet3lib7formula6Parser3eat(self, _M0DTP49poipoiiii9moonsheet3lib7formula5Token6RParen__)) {
          let done = false;
          while (true) {
            if (!done) {
              const _bind$2 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser11parse__expr(self);
              let arg;
              if (_bind$2.$tag === 1) {
                const _Ok = _bind$2;
                arg = _Ok._0;
              } else {
                const _Err = _bind$2;
                const _e = _Err._0;
                return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
              }
              _M0MPC15array5Array4pushGsE(args, arg);
              if (_M0MP49poipoiiii9moonsheet3lib7formula6Parser3eat(self, _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Comma__)) {
              } else {
                done = true;
              }
              continue;
            } else {
              break;
            }
          }
          if (!_M0MP49poipoiiii9moonsheet3lib7formula6Parser3eat(self, _M0DTP49poipoiiii9moonsheet3lib7formula5Token6RParen__)) {
            return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_M0MP49poipoiiii9moonsheet3lib7formula10ParseError3new("expected ')'", self.pos));
          }
        }
        return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr4Call(_M0FP49poipoiiii9moonsheet3lib7formula13upper__string(_name), args));
      } else {
        if (_M0MP49poipoiiii9moonsheet3lib7formula6Parser3eat(self, _M0DTP49poipoiiii9moonsheet3lib7formula5Token5Colon__)) {
          const _bind$2 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser4peek(self);
          if (_bind$2.$tag === 2) {
            const _Ident$2 = _bind$2;
            const _end_name = _Ident$2._0;
            self.pos = self.pos + 1 | 0;
            _L: {
              const _bind$3 = _M0MP49poipoiiii9moonsheet3lib5types7Address5parse(_name);
              const _bind$4 = _M0MP49poipoiiii9moonsheet3lib5types7Address5parse(_end_name);
              if (_bind$3 === undefined) {
                break _L;
              } else {
                const _Some = _bind$3;
                const _a = _Some;
                if (_bind$4 === undefined) {
                  break _L;
                } else {
                  const _Some$2 = _bind$4;
                  const _b = _Some$2;
                  return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr5Range(_M0MP49poipoiiii9moonsheet3lib5types5Range3new(_a, _b)));
                }
              }
            }
            return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_M0MP49poipoiiii9moonsheet3lib7formula10ParseError3new("invalid range", self.pos));
          } else {
            return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_M0MP49poipoiiii9moonsheet3lib7formula10ParseError3new("expected range end", self.pos));
          }
        } else {
          const upper = _M0FP49poipoiiii9moonsheet3lib7formula13upper__string(_name);
          if (upper === "TRUE") {
            return _M0MP49poipoiiii9moonsheet3lib7formula6Parser14parse__primaryN6constrS1987;
          } else {
            if (upper === "FALSE") {
              return _M0MP49poipoiiii9moonsheet3lib7formula6Parser14parse__primaryN6constrS1989;
            } else {
              const _bind$2 = _M0MP49poipoiiii9moonsheet3lib5types7Address5parse(_name);
              if (_bind$2 === undefined) {
                return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr4Name(_name));
              } else {
                const _Some = _bind$2;
                const _addr = _Some;
                return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(new _M0DTP49poipoiiii9moonsheet3lib7formula4Expr3Ref(_addr));
              }
            }
          }
        }
      }
    }
    case 8: {
      self.pos = self.pos + 1 | 0;
      const _bind$2 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser11parse__expr(self);
      let inner;
      if (_bind$2.$tag === 1) {
        const _Ok = _bind$2;
        inner = _Ok._0;
      } else {
        const _Err = _bind$2;
        const _e = _Err._0;
        return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
      }
      if (!_M0MP49poipoiiii9moonsheet3lib7formula6Parser3eat(self, _M0DTP49poipoiiii9moonsheet3lib7formula5Token6RParen__)) {
        return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_M0MP49poipoiiii9moonsheet3lib7formula10ParseError3new("expected ')'", self.pos));
      }
      return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(inner);
    }
    default: {
      return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_M0MP49poipoiiii9moonsheet3lib7formula10ParseError3new("expected expression", self.pos));
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib7formula5parse(input) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib7formula3lex(input);
  let tokens;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    tokens = _Ok._0;
  } else {
    const _Err = _bind;
    const _e = _Err._0;
    return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
  }
  const parser = _M0MP49poipoiiii9moonsheet3lib7formula6Parser3new(tokens);
  const _bind$2 = _M0MP49poipoiiii9moonsheet3lib7formula6Parser11parse__expr(parser);
  let expr;
  if (_bind$2.$tag === 1) {
    const _Ok = _bind$2;
    expr = _Ok._0;
  } else {
    const _Err = _bind$2;
    const _e = _Err._0;
    return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_e);
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGRP49poipoiiii9moonsheet3lib7formula5TokenE(_M0MP49poipoiiii9moonsheet3lib7formula6Parser4peek(parser), _M0DTP49poipoiiii9moonsheet3lib7formula5Token3Eof__)) {
    return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE3Err(_M0MP49poipoiiii9moonsheet3lib7formula10ParseError3new("unexpected trailing token", parser.pos));
  }
  return new _M0DTPC16result6ResultGRP49poipoiiii9moonsheet3lib7formula4ExprRP49poipoiiii9moonsheet3lib7formula10ParseErrorE2Ok(expr);
}
function _M0FP49poipoiiii9moonsheet3lib7formula14parse__formula(input) {
  const trimmed = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(input, undefined));
  if (_M0MPC16string6String20char__length_2einner(trimmed, 0, undefined) > 0 && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC16string6String9get__char(trimmed, 0), _M0FP49poipoiiii9moonsheet3lib7formula14parse__formulaN6constrS2037)) {
    let rest = "";
    let i = 1;
    while (true) {
      if (i < _M0MPC16string6String20char__length_2einner(trimmed, 0, undefined)) {
        const _bind = _M0MPC16string6String9get__char(trimmed, i);
        const c = _bind === -1 ? 32 : _bind;
        rest = `${rest}${_M0IPC14char4CharPB4Show10to__string(c)}`;
        i = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0FP49poipoiiii9moonsheet3lib7formula5parse(rest);
  } else {
    return _M0FP49poipoiiii9moonsheet3lib7formula5parse(trimmed);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions13upper__string(s) {
  let out = "";
  const _bind = _M0MPC16string6String9to__array(s);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const c = _bind[_];
      out = `${out}${_M0IPC14char4CharPB4Show10to__string(_M0MPC14char4Char20to__ascii__uppercase(c))}`;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib9functions13lower__string(s) {
  let out = "";
  const _bind = _M0MPC16string6String9to__array(s);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const c = _bind[_];
      out = `${out}${_M0IPC14char4CharPB4Show10to__string(_M0MPC14char4Char20to__ascii__lowercase(c))}`;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args) {
  const _bind = args.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const value = args[_];
      if (value.$tag === 4) {
        const _Error = value;
        const _e = _Error._0;
        return _e;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP49poipoiiii9moonsheet3lib9functions13number__value(n) {
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(n + 0);
}
function _M0FP49poipoiiii9moonsheet3lib9functions10as__number(value) {
  switch (value.$tag) {
    case 0: {
      const _Number = value;
      const _n = _Number._0;
      return new _M0DTPC16option6OptionGdE4Some(_n);
    }
    case 2: {
      const _Boolean = value;
      const _b = _Boolean._0;
      return new _M0DTPC16option6OptionGdE4Some(_b ? 1 : 0);
    }
    case 5: {
      return _M0FP49poipoiiii9moonsheet3lib9functions10as__numberN6constrS2069;
    }
    case 3: {
      const _Date = value;
      const _d = _Date._0;
      return new _M0DTPC16option6OptionGdE4Some(_d + 0);
    }
    default: {
      return _M0DTPC16option6OptionGdE4None__;
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions7as__int(value) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(value);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _n = _Some._0;
    return _M0MPC16double6Double7to__int(_n);
  } else {
    return undefined;
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions8as__text(value) {
  if (value.$tag === 1) {
    const _Text = value;
    const _s = _Text._0;
    return _s;
  } else {
    return undefined;
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions8as__bool(value) {
  switch (value.$tag) {
    case 2: {
      const _Boolean = value;
      const _b = _Boolean._0;
      return _b;
    }
    case 0: {
      const _Number = value;
      const _n = _Number._0;
      return _n !== 0;
    }
    case 5: {
      return _M0FP49poipoiiii9moonsheet3lib9functions8as__boolN6constrS2084;
    }
    default: {
      return -1;
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions7numbers(args) {
  const out = [];
  const _bind = args.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const value = args[_];
      const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(value);
      if (_bind$2.$tag === 1) {
        const _Some = _bind$2;
        const _n = _Some._0;
        _M0MPC15array5Array4pushGdE(out, _n);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib9functions16substring__chars(s, start, length) {
  const n = _M0MPC16string6String20char__length_2einner(s, 0, undefined);
  const from = start < 0 ? 0 : start;
  const to = (from + length | 0) > n ? n : from + length | 0;
  let i = from;
  let out = "";
  while (true) {
    if (i < to) {
      const _bind = _M0MPC16string6String9get__char(s, i);
      if (_bind === -1) {
      } else {
        const _Some = _bind;
        const _c = _Some;
        out = `${out}${_M0IPC14char4CharPB4Show10to__string(_c)}`;
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib9functions9find__sub(haystack, needle, start, ignore_case) {
  const h = ignore_case ? _M0FP49poipoiiii9moonsheet3lib9functions13upper__string(haystack) : haystack;
  const n = ignore_case ? _M0FP49poipoiiii9moonsheet3lib9functions13upper__string(needle) : needle;
  const hchars = _M0MPC16string6String9to__array(h);
  const nchars = _M0MPC16string6String9to__array(n);
  if (nchars.length === 0) {
    return start;
  }
  const from = start < 0 ? 0 : start;
  let i = from;
  while (true) {
    if ((i + nchars.length | 0) <= hchars.length) {
      let j = 0;
      let matched = true;
      while (true) {
        if (j < nchars.length) {
          if (_M0MPC15array5Array2atGcE(hchars, i + j | 0) !== _M0MPC15array5Array2atGcE(nchars, j)) {
            matched = false;
            break;
          }
          j = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (matched) {
        return i;
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP49poipoiiii9moonsheet3lib9functions13replace__text(text, old, new_, instance) {
  const chars = _M0MPC16string6String9to__array(text);
  const old_chars = _M0MPC16string6String9to__array(old);
  if (old_chars.length === 0) {
    return text;
  }
  let out = "";
  let i = 0;
  let count = 0;
  while (true) {
    if (i < chars.length) {
      let matched = false;
      if ((i + old_chars.length | 0) <= chars.length) {
        let j = 0;
        let ok = true;
        while (true) {
          if (j < old_chars.length) {
            if (_M0MPC15array5Array2atGcE(chars, i + j | 0) !== _M0MPC15array5Array2atGcE(old_chars, j)) {
              ok = false;
              break;
            }
            j = j + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        matched = ok;
      }
      if (matched && (instance === 0 || count === (instance - 1 | 0))) {
        out = `${out}${new_}`;
        i = i + old_chars.length | 0;
        count = count + 1 | 0;
        if (instance !== 0) {
          return `${out}${_M0FP49poipoiiii9moonsheet3lib9functions16substring__chars(text, i, chars.length - i | 0)}`;
        }
      } else {
        out = `${out}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(chars, i))}`;
        i = i + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib9functions17days__from__civil(year, month, day) {
  const y = month <= 2 ? year - 1 | 0 : year;
  const era = y >= 0 ? y / 400 | 0 : (y - 399 | 0) / 400 | 0;
  const yoe = y - (Math.imul(era, 400) | 0) | 0;
  const mp = (month + 9 | 0) % 12 | 0;
  const doy = ((((Math.imul(153, mp) | 0) + 2 | 0) / 5 | 0) + day | 0) - 1 | 0;
  const doe = (((Math.imul(yoe, 365) | 0) + (yoe / 4 | 0) | 0) - (yoe / 100 | 0) | 0) + doy | 0;
  return ((Math.imul(era, 146097) | 0) + doe | 0) - 719468 | 0;
}
function _M0FP49poipoiiii9moonsheet3lib9functions17civil__from__days(days) {
  const z = days + 719468 | 0;
  const era = z >= 0 ? z / 146097 | 0 : (z - 146096 | 0) / 146097 | 0;
  const doe = z - (Math.imul(era, 146097) | 0) | 0;
  const yoe = (((doe - (doe / 1460 | 0) | 0) + (doe / 36524 | 0) | 0) - (doe / 146096 | 0) | 0) / 365 | 0;
  const y = yoe + (Math.imul(era, 400) | 0) | 0;
  const doy = doe - (((Math.imul(365, yoe) | 0) + (yoe / 4 | 0) | 0) - (yoe / 100 | 0) | 0) | 0;
  const mp = ((Math.imul(5, doy) | 0) + 2 | 0) / 153 | 0;
  const d = (doy - (((Math.imul(153, mp) | 0) + 2 | 0) / 5 | 0) | 0) + 1 | 0;
  const m = mp < 10 ? mp + 3 | 0 : mp - 9 | 0;
  const year = m <= 2 ? y + 1 | 0 : y;
  return { _0: year, _1: m, _2: d };
}
function _M0FP49poipoiiii9moonsheet3lib9functions16date__to__serial(year, month, day) {
  const m0 = month - 1 | 0;
  const y = year + (m0 / 12 | 0) | 0;
  const m = (m0 % 12 | 0) + 1 | 0;
  const epoch = _M0FP49poipoiiii9moonsheet3lib9functions17days__from__civil(1899, 12, 30);
  const diff = _M0FP49poipoiiii9moonsheet3lib9functions17days__from__civil(y, m, day) - epoch | 0;
  return _M0FP49poipoiiii9moonsheet3lib9functions17days__from__civil(y, m, day) < _M0FP49poipoiiii9moonsheet3lib9functions17days__from__civil(1900, 3, 1) ? diff - 1 | 0 : diff;
}
function _M0FP49poipoiiii9moonsheet3lib9functions16serial__to__date(serial) {
  const diff = serial < 61 ? serial + 1 | 0 : serial;
  const epoch = _M0FP49poipoiiii9moonsheet3lib9functions17days__from__civil(1899, 12, 30);
  return _M0FP49poipoiiii9moonsheet3lib9functions17civil__from__days(epoch + diff | 0);
}
function _M0FP49poipoiiii9moonsheet3lib9functions11add__months(serial, months) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions16serial__to__date(serial);
  const _year = _bind._0;
  const _month = _bind._1;
  const _day = _bind._2;
  const m0 = (_month - 1 | 0) + months | 0;
  const y = _year + (m0 / 12 | 0) | 0;
  const m = (m0 % 12 | 0) + 1 | 0;
  let d = _day;
  while (true) {
    if (d > 28) {
      const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions16serial__to__date(_M0FP49poipoiiii9moonsheet3lib9functions16date__to__serial(y, m, d));
      const _actual_month = _bind$2._1;
      if (_actual_month === m) {
        break;
      }
      d = d - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP49poipoiiii9moonsheet3lib9functions16date__to__serial(y, m, d);
}
function _M0FP49poipoiiii9moonsheet3lib9functions20last__day__of__month(year, month) {
  const next = _M0FP49poipoiiii9moonsheet3lib9functions16date__to__serial(year, month + 1 | 0, 1);
  return _M0FP49poipoiiii9moonsheet3lib9functions16serial__to__date(next - 1 | 0)._2;
}
function _M0FP49poipoiiii9moonsheet3lib9functions3sum(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    let total = 0;
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7numbers(args);
    const _bind$3 = _bind$2.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$3) {
        const n = _bind$2[_];
        total = total + n;
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(total);
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions7product(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    const values = _M0FP49poipoiiii9moonsheet3lib9functions7numbers(args);
    if (values.length === 0) {
      return _M0FP49poipoiiii9moonsheet3lib9functions7productN6constrS2196;
    }
    let total = 1;
    const _bind$2 = values.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const n = values[_];
        total = total * n;
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(total);
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions7average(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    const values = _M0FP49poipoiiii9moonsheet3lib9functions7numbers(args);
    if (values.length === 0) {
      return _M0FP49poipoiiii9moonsheet3lib9functions7averageN6constrS2207;
    }
    let total = 0;
    const _bind$2 = values.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const n = values[_];
        total = total + n;
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _tmp$2 = total;
    const _p = values.length;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_tmp$2 / (_p + 0));
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions10min__value(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    const values = _M0FP49poipoiiii9moonsheet3lib9functions7numbers(args);
    if (values.length === 0) {
      return _M0FP49poipoiiii9moonsheet3lib9functions10min__valueN6constrS2218;
    }
    let best = _M0MPC15array5Array2atGdE(values, 0);
    const _bind$2 = values.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const n = values[_];
        if (n < best) {
          best = n;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(best);
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions10max__value(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    const values = _M0FP49poipoiiii9moonsheet3lib9functions7numbers(args);
    if (values.length === 0) {
      return _M0FP49poipoiiii9moonsheet3lib9functions10max__valueN6constrS2229;
    }
    let best = _M0MPC15array5Array2atGdE(values, 0);
    const _bind$2 = values.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const n = values[_];
        if (n > best) {
          best = n;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(best);
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions5count(args) {
  let total = 0;
  const _bind = args.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const value = args[_];
      if (value.$tag === 0) {
        total = total + 1 | 0;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP49poipoiiii9moonsheet3lib9functions13number__value(total);
}
function _M0FP49poipoiiii9moonsheet3lib9functions6counta(args) {
  let total = 0;
  const _bind = args.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const value = args[_];
      if (value.$tag === 5) {
      } else {
        total = total + 1 | 0;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP49poipoiiii9moonsheet3lib9functions13number__value(total);
}
function _M0FP49poipoiiii9moonsheet3lib9functions10countblank(args) {
  let total = 0;
  const _bind = args.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const value = args[_];
      if (value.$tag === 5) {
        total = total + 1 | 0;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP49poipoiiii9moonsheet3lib9functions13number__value(total);
}
function _M0FP49poipoiiii9moonsheet3lib9functions6median(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    const values = _M0FP49poipoiiii9moonsheet3lib9functions7numbers(args);
    if (values.length === 0) {
      return _M0FP49poipoiiii9moonsheet3lib9functions6medianN6constrS2258;
    }
    _M0MPC15array5Array4sortGdE(values);
    const n = values.length;
    return (n % 2 | 0) === 1 ? new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_M0MPC15array5Array2atGdE(values, n / 2 | 0)) : new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number((_M0MPC15array5Array2atGdE(values, (n / 2 | 0) - 1 | 0) + _M0MPC15array5Array2atGdE(values, n / 2 | 0)) / 2);
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions8variance(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    const values = _M0FP49poipoiiii9moonsheet3lib9functions7numbers(args);
    const n = values.length;
    if (n < 2) {
      return _M0FP49poipoiiii9moonsheet3lib9functions8varianceN6constrS2265;
    }
    let total = 0;
    const _bind$2 = values.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const x = values[_];
        total = total + x;
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const mean = total / (n + 0);
    let squares = 0;
    const _bind$3 = values.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$3) {
        const x = values[_];
        const d = x - mean;
        squares = squares + d * d;
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _tmp$3 = squares;
    const _p = n - 1 | 0;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_tmp$3 / (_p + 0));
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions5stdev(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8variance(args);
  if (_bind.$tag === 0) {
    const _Number = _bind;
    const _v = _Number._0;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(Math.sqrt(_v));
  } else {
    return _bind;
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions5sumsq(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    let total = 0;
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7numbers(args);
    const _bind$3 = _bind$2.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$3) {
        const n = _bind$2[_];
        total = total + n * n;
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(total);
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions12large__small(args, largest) {
  if (args.length < 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions12large__smallN6constrS2298;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, args.length - 1 | 0));
  let k;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions12large__smallN6constrS2299;
  } else {
    const _Some = _bind;
    k = _Some;
  }
  const values = [];
  let i = 0;
  while (true) {
    if (i < (args.length - 1 | 0)) {
      const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, i));
      if (_bind$2.$tag === 1) {
        const _Some = _bind$2;
        const _n = _Some._0;
        _M0MPC15array5Array4pushGdE(values, _n);
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (k < 1 || k > values.length) {
    return _M0FP49poipoiiii9moonsheet3lib9functions12large__smallN6constrS2300;
  }
  _M0MPC15array5Array4sortGdE(values);
  return largest ? new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_M0MPC15array5Array2atGdE(values, values.length - k | 0)) : new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_M0MPC15array5Array2atGdE(values, k - 1 | 0));
}
function _M0FP49poipoiiii9moonsheet3lib9functions3abs(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions3absN6constrS2312;
  }
  const _bind = _M0MPC15array5Array2atGsE(args, 0);
  switch (_bind.$tag) {
    case 0: {
      const _Number = _bind;
      const _n = _Number._0;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_n < 0 ? -_n : _n);
    }
    case 4: {
      const _Error = _bind;
      const _e = _Error._0;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
    }
    default: {
      return _M0FP49poipoiiii9moonsheet3lib9functions3absN6constrS2313;
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions4sign(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions4signN6constrS2320;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _n = _Some._0;
    return _n > 0 ? _M0FP49poipoiiii9moonsheet3lib9functions4signN6constrS2321 : _n < 0 ? _M0FP49poipoiiii9moonsheet3lib9functions4signN6constrS2322 : _M0FP49poipoiiii9moonsheet3lib9functions4signN6constrS2323;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions4signN6constrS2324;
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions10int__value(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10int__valueN6constrS2329;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _n = _Some._0;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_M0MPC16double6Double5floor(_n));
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions10int__valueN6constrS2330;
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions12trunc__value(args) {
  if (args.length !== 1 && args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions12trunc__valueN6constrS2335;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  let n;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    n = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions12trunc__valueN6constrS2336;
  }
  let digits;
  if (args.length === 2) {
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 1));
    if (_bind$2 === undefined) {
      return _M0FP49poipoiiii9moonsheet3lib9functions12trunc__valueN6constrS2337;
    } else {
      const _Some = _bind$2;
      digits = _Some;
    }
  } else {
    digits = 0;
  }
  const factor = _M0FPC14math3pow(10, digits + 0);
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_M0MPC16double6Double5trunc(n * factor) / factor);
}
function _M0FP49poipoiiii9moonsheet3lib9functions12round__value(args, mode) {
  if (args.length !== 1 && args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions12round__valueN6constrS2346;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  let n;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    n = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions12round__valueN6constrS2347;
  }
  let digits;
  if (args.length === 2) {
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 1));
    if (_bind$2 === undefined) {
      return _M0FP49poipoiiii9moonsheet3lib9functions12round__valueN6constrS2348;
    } else {
      const _Some = _bind$2;
      digits = _Some;
    }
  } else {
    digits = 0;
  }
  const factor = _M0FPC14math3pow(10, digits + 0);
  const scaled = n * factor;
  const rounded = mode === 0 ? _M0MPC16double6Double5round(scaled) : mode > 0 ? (scaled >= 0 ? _M0MPC16double6Double4ceil(scaled) : _M0MPC16double6Double5floor(scaled)) : _M0MPC16double6Double5trunc(scaled);
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(rounded / factor);
}
function _M0FP49poipoiiii9moonsheet3lib9functions14ceiling__floor(args, up) {
  if (args.length !== 1 && args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions14ceiling__floorN6constrS2360;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  let n;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    n = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions14ceiling__floorN6constrS2361;
  }
  let significance;
  if (args.length === 2) {
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 1));
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      significance = _Some._0;
    } else {
      return _M0FP49poipoiiii9moonsheet3lib9functions14ceiling__floorN6constrS2362;
    }
  } else {
    significance = 1;
  }
  if (significance === 0) {
    return _M0FP49poipoiiii9moonsheet3lib9functions14ceiling__floorN6constrS2363;
  }
  const q = n / significance;
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(up ? _M0MPC16double6Double4ceil(q) * significance : _M0MPC16double6Double5floor(q) * significance);
}
function _M0FP49poipoiiii9moonsheet3lib9functions10mod__value(args) {
  if (args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10mod__valueN6constrS2373;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  let a;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    a = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions10mod__valueN6constrS2374;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 1));
  let b;
  if (_bind$2.$tag === 1) {
    const _Some = _bind$2;
    b = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions10mod__valueN6constrS2375;
  }
  return b === 0 ? _M0FP49poipoiiii9moonsheet3lib9functions10mod__valueN6constrS2376 : new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(a - b * _M0MPC16double6Double5floor(a / b));
}
function _M0FP49poipoiiii9moonsheet3lib9functions12power__value(args) {
  if (args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions12power__valueN6constrS2384;
  }
  _L: {
    const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 1));
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _a = _Some._0;
      if (_bind$2.$tag === 1) {
        const _Some$2 = _bind$2;
        const _b = _Some$2._0;
        return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_M0FPC14math3pow(_a, _b));
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return _M0FP49poipoiiii9moonsheet3lib9functions12power__valueN6constrS2385;
}
function _M0FP49poipoiiii9moonsheet3lib9functions11sqrt__value(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11sqrt__valueN6constrS2394;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _n = _Some._0;
    return _n < 0 ? _M0FP49poipoiiii9moonsheet3lib9functions11sqrt__valueN6constrS2395 : new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(Math.sqrt(_n));
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions11sqrt__valueN6constrS2396;
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions10exp__value(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10exp__valueN6constrS2401;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _n = _Some._0;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_M0FPC14math3exp(_n));
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions10exp__valueN6constrS2402;
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions9ln__value(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions9ln__valueN6constrS2407;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _n = _Some._0;
    return _n <= 0 ? _M0FP49poipoiiii9moonsheet3lib9functions9ln__valueN6constrS2408 : new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_M0FPC14math2ln(_n));
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions9ln__valueN6constrS2409;
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions10log__value(args) {
  if (args.length !== 1 && args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10log__valueN6constrS2414;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  let n;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    n = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions10log__valueN6constrS2415;
  }
  let base;
  if (args.length === 2) {
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 1));
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      base = _Some._0;
    } else {
      return _M0FP49poipoiiii9moonsheet3lib9functions10log__valueN6constrS2416;
    }
  } else {
    base = 10;
  }
  return n <= 0 || (base <= 0 || base === 1) ? _M0FP49poipoiiii9moonsheet3lib9functions10log__valueN6constrS2417 : new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_M0FPC14math2ln(n) / _M0FPC14math2ln(base));
}
function _M0FP49poipoiiii9moonsheet3lib9functions12log10__value(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions12log10__valueN6constrS2425;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _n = _Some._0;
    return _n <= 0 ? _M0FP49poipoiiii9moonsheet3lib9functions12log10__valueN6constrS2426 : new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_M0FPC14math5log10(_n));
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions12log10__valueN6constrS2427;
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions9pi__value(args) {
  if (args.length !== 0) {
    return _M0FP49poipoiiii9moonsheet3lib9functions9pi__valueN6constrS2432;
  }
  return _M0FP49poipoiiii9moonsheet3lib9functions9pi__valueN6constrS2433;
}
function _M0FP49poipoiiii9moonsheet3lib9functions3len(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions3lenN6constrS2435;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions3lenN6constrS2436;
  } else {
    const _Some = _bind;
    const _s = _Some;
    return _M0FP49poipoiiii9moonsheet3lib9functions13number__value(_M0MPC16string6String20char__length_2einner(_s, 0, undefined));
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions4left(args) {
  if (args.length !== 1 && args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions4leftN6constrS2441;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  let s;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions4leftN6constrS2442;
  } else {
    const _Some = _bind;
    s = _Some;
  }
  let n;
  if (args.length === 2) {
    _L: {
      _L$2: {
        const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 1));
        if (_bind$2 === undefined) {
          break _L$2;
        } else {
          const _Some = _bind$2;
          const _n = _Some;
          if (_n >= 0) {
            n = _n;
          } else {
            break _L$2;
          }
        }
        break _L;
      }
      return _M0FP49poipoiiii9moonsheet3lib9functions4leftN6constrS2443;
    }
  } else {
    n = 1;
  }
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(_M0FP49poipoiiii9moonsheet3lib9functions16substring__chars(s, 0, n));
}
function _M0FP49poipoiiii9moonsheet3lib9functions5right(args) {
  if (args.length !== 1 && args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions5rightN6constrS2453;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  let s;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions5rightN6constrS2454;
  } else {
    const _Some = _bind;
    s = _Some;
  }
  let n;
  if (args.length === 2) {
    _L: {
      _L$2: {
        const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 1));
        if (_bind$2 === undefined) {
          break _L$2;
        } else {
          const _Some = _bind$2;
          const _n = _Some;
          if (_n >= 0) {
            n = _n;
          } else {
            break _L$2;
          }
        }
        break _L;
      }
      return _M0FP49poipoiiii9moonsheet3lib9functions5rightN6constrS2455;
    }
  } else {
    n = 1;
  }
  const length = _M0MPC16string6String20char__length_2einner(s, 0, undefined);
  const start = n >= length ? 0 : length - n | 0;
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(_M0FP49poipoiiii9moonsheet3lib9functions16substring__chars(s, start, n));
}
function _M0FP49poipoiiii9moonsheet3lib9functions3mid(args) {
  if (args.length !== 3) {
    return _M0FP49poipoiiii9moonsheet3lib9functions3midN6constrS2467;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  let s;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions3midN6constrS2468;
  } else {
    const _Some = _bind;
    s = _Some;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 1));
  let start;
  if (_bind$2 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions3midN6constrS2469;
  } else {
    const _Some = _bind$2;
    start = _Some;
  }
  const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 2));
  let length;
  if (_bind$3 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions3midN6constrS2470;
  } else {
    const _Some = _bind$3;
    length = _Some;
  }
  if (start < 1 || length < 0) {
    return _M0FP49poipoiiii9moonsheet3lib9functions3midN6constrS2471;
  }
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(_M0FP49poipoiiii9moonsheet3lib9functions16substring__chars(s, start - 1 | 0, length));
}
function _M0FP49poipoiiii9moonsheet3lib9functions5upper(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions5upperN6constrS2482;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions5upperN6constrS2483;
  } else {
    const _Some = _bind;
    const _s = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(_M0FP49poipoiiii9moonsheet3lib9functions13upper__string(_s));
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions5lower(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions5lowerN6constrS2488;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions5lowerN6constrS2489;
  } else {
    const _Some = _bind;
    const _s = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(_M0FP49poipoiiii9moonsheet3lib9functions13lower__string(_s));
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions10trim__text(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10trim__textN6constrS2494;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10trim__textN6constrS2495;
  } else {
    const _Some = _bind;
    const _s = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(_M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_s, undefined)));
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions6concat(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    let out = "";
    const _bind$2 = args.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const value = args[_];
        if (value.$tag === 5) {
        } else {
          out = `${out}${_M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(value)}`;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(out);
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions8textjoin(args) {
  if (args.length < 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions8textjoinN6constrS2509;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  let delimiter;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions8textjoinN6constrS2510;
  } else {
    const _Some = _bind;
    delimiter = _Some;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions8as__bool(_M0MPC15array5Array2atGsE(args, 1));
  let ignore_empty;
  if (_bind$2 === -1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions8textjoinN6constrS2511;
  } else {
    ignore_empty = _bind$2;
  }
  let out = "";
  let first = true;
  let i = 2;
  while (true) {
    if (i < args.length) {
      const piece = _M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(_M0MPC15array5Array2atGsE(args, i));
      if (!(ignore_empty && piece.length === 0)) {
        if (!first) {
          out = `${out}${delimiter}`;
        }
        out = `${out}${piece}`;
        first = false;
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(out);
}
function _M0FP49poipoiiii9moonsheet3lib9functions4rept(args) {
  if (args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions4reptN6constrS2524;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  let s;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions4reptN6constrS2525;
  } else {
    const _Some = _bind;
    s = _Some;
  }
  let n;
  _L: {
    _L$2: {
      const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 1));
      if (_bind$2 === undefined) {
        break _L$2;
      } else {
        const _Some = _bind$2;
        const _n = _Some;
        if (_n >= 0) {
          n = _n;
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    return _M0FP49poipoiiii9moonsheet3lib9functions4reptN6constrS2526;
  }
  let out = "";
  let i = 0;
  while (true) {
    if (i < n) {
      out = `${out}${s}`;
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(out);
}
function _M0FP49poipoiiii9moonsheet3lib9functions11find__value(args, ignore_case) {
  if (args.length !== 2 && args.length !== 3) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11find__valueN6constrS2539;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  let needle;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11find__valueN6constrS2540;
  } else {
    const _Some = _bind;
    needle = _Some;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 1));
  let haystack;
  if (_bind$2 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11find__valueN6constrS2541;
  } else {
    const _Some = _bind$2;
    haystack = _Some;
  }
  let start;
  if (args.length === 3) {
    _L: {
      _L$2: {
        const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 2));
        if (_bind$3 === undefined) {
          break _L$2;
        } else {
          const _Some = _bind$3;
          const _n = _Some;
          if (_n >= 1) {
            start = _n - 1 | 0;
          } else {
            break _L$2;
          }
        }
        break _L;
      }
      return _M0FP49poipoiiii9moonsheet3lib9functions11find__valueN6constrS2542;
    }
  } else {
    start = 0;
  }
  const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions9find__sub(haystack, needle, start, ignore_case);
  if (_bind$3 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11find__valueN6constrS2543;
  } else {
    const _Some = _bind$3;
    const _index = _Some;
    return _M0FP49poipoiiii9moonsheet3lib9functions13number__value(_index + 1 | 0);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions10substitute(args) {
  if (args.length !== 3 && args.length !== 4) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10substituteN6constrS2560;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  let text;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10substituteN6constrS2561;
  } else {
    const _Some = _bind;
    text = _Some;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 1));
  let old;
  if (_bind$2 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10substituteN6constrS2562;
  } else {
    const _Some = _bind$2;
    old = _Some;
  }
  const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 2));
  let new_;
  if (_bind$3 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10substituteN6constrS2563;
  } else {
    const _Some = _bind$3;
    new_ = _Some;
  }
  let instance;
  if (args.length === 4) {
    _L: {
      _L$2: {
        const _bind$4 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 3));
        if (_bind$4 === undefined) {
          break _L$2;
        } else {
          const _Some = _bind$4;
          const _n = _Some;
          if (_n >= 1) {
            instance = _n;
          } else {
            break _L$2;
          }
        }
        break _L;
      }
      return _M0FP49poipoiiii9moonsheet3lib9functions10substituteN6constrS2564;
    }
  } else {
    instance = 0;
  }
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(_M0FP49poipoiiii9moonsheet3lib9functions13replace__text(text, old, new_, instance));
}
function _M0FP49poipoiiii9moonsheet3lib9functions14replace__value(args) {
  if (args.length !== 4) {
    return _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2580;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  let text;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2581;
  } else {
    const _Some = _bind;
    text = _Some;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 1));
  let start;
  if (_bind$2 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2582;
  } else {
    const _Some = _bind$2;
    start = _Some;
  }
  const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 2));
  let length;
  if (_bind$3 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2583;
  } else {
    const _Some = _bind$3;
    length = _Some;
  }
  const _bind$4 = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 3));
  let new_;
  if (_bind$4 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2584;
  } else {
    const _Some = _bind$4;
    new_ = _Some;
  }
  if (start < 1 || length < 0) {
    return _M0FP49poipoiiii9moonsheet3lib9functions14replace__valueN6constrS2585;
  }
  const prefix = _M0FP49poipoiiii9moonsheet3lib9functions16substring__chars(text, 0, start - 1 | 0);
  const suffix = _M0FP49poipoiiii9moonsheet3lib9functions16substring__chars(text, (start - 1 | 0) + length | 0, _M0MPC16string6String20char__length_2einner(text, 0, undefined));
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(`${prefix}${new_}${suffix}`);
}
function _M0FP49poipoiiii9moonsheet3lib9functions11value__text(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11value__textN6constrS2601;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11value__textN6constrS2603;
  } else {
    const _Some = _bind;
    const _s = _Some;
    let _try_err;
    _L: {
      const _bind$2 = _M0FPC28internal7strconv13parse__double(_M0MPC16string6String4trim(_s, undefined));
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_tmp);
    }
    return _M0FP49poipoiiii9moonsheet3lib9functions11value__textN6constrS2602;
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions11char__value(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11char__valueN6constrS2610;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11char__valueN6constrS2612;
  } else {
    const _Some = _bind;
    const _n = _Some;
    return _n < 0 || _n > 255 ? _M0FP49poipoiiii9moonsheet3lib9functions11char__valueN6constrS2611 : new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(_M0IPC14char4CharPB4Show10to__string(_n));
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions11code__value(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11code__valueN6constrS2617;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__text(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11code__valueN6constrS2619;
  } else {
    const _Some = _bind;
    const _s = _Some;
    const _bind$2 = _M0MPC16string6String9get__char(_s, 0);
    if (_bind$2 === -1) {
      return _M0FP49poipoiiii9moonsheet3lib9functions11code__valueN6constrS2618;
    } else {
      const _Some$2 = _bind$2;
      const _c = _Some$2;
      return _M0FP49poipoiiii9moonsheet3lib9functions13number__value(_c);
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions12logical__and(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    let result = true;
    const _bind$2 = args.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const value = args[_];
        const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions8as__bool(value);
        if (_bind$3 === -1) {
          return _M0FP49poipoiiii9moonsheet3lib9functions12logical__andN6constrS2627;
        } else {
          const _Some = _bind$3;
          const _b = _Some;
          result = result && _b;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _p = result;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_p);
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions11logical__or(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    let result = false;
    const _bind$2 = args.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const value = args[_];
        const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions8as__bool(value);
        if (_bind$3 === -1) {
          return _M0FP49poipoiiii9moonsheet3lib9functions11logical__orN6constrS2640;
        } else {
          const _Some = _bind$3;
          const _b = _Some;
          result = result || _b;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _p = result;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_p);
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions12logical__xor(args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions12first__error(args);
  if (_bind === undefined) {
    let result = false;
    const _bind$2 = args.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const value = args[_];
        const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions8as__bool(value);
        if (_bind$3 === -1) {
          return _M0FP49poipoiiii9moonsheet3lib9functions12logical__xorN6constrS2653;
        } else {
          const _Some = _bind$3;
          const _b = _Some;
          result = _b ? !result : result;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _p = result;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_p);
  } else {
    const _Some = _bind;
    const _e = _Some;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions12logical__not(args) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions12logical__notN6constrS2666;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions8as__bool(_M0MPC15array5Array2atGsE(args, 0));
  if (_bind === -1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions12logical__notN6constrS2667;
  } else {
    const _Some = _bind;
    const _b = _Some;
    const _p = !_b;
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_p);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions6choose(args) {
  if (args.length < 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions6chooseN6constrS2672;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 0));
  let index;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions6chooseN6constrS2673;
  } else {
    const _Some = _bind;
    index = _Some;
  }
  if (index < 1 || index >= args.length) {
    return _M0FP49poipoiiii9moonsheet3lib9functions6chooseN6constrS2674;
  }
  return _M0MPC15array5Array2atGsE(args, index);
}
function _M0FP49poipoiiii9moonsheet3lib9functions11date__value(args) {
  if (args.length !== 3) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11date__valueN6constrS2679;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 0));
  let y;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11date__valueN6constrS2680;
  } else {
    const _Some = _bind;
    y = _Some;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 1));
  let m;
  if (_bind$2 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11date__valueN6constrS2681;
  } else {
    const _Some = _bind$2;
    m = _Some;
  }
  const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 2));
  let d;
  if (_bind$3 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions11date__valueN6constrS2682;
  } else {
    const _Some = _bind$3;
    d = _Some;
  }
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Date(_M0FP49poipoiiii9moonsheet3lib9functions16date__to__serial(y, m, d));
}
function _M0FP49poipoiiii9moonsheet3lib9functions10date__part(args, part) {
  if (args.length !== 1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10date__partN6constrS2693;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 0));
  let serial;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10date__partN6constrS2694;
  } else {
    const _Some = _bind;
    serial = _Some;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions16serial__to__date(serial);
  const _year = _bind$2._0;
  const _month = _bind$2._1;
  const _day = _bind$2._2;
  return _M0FP49poipoiiii9moonsheet3lib9functions13number__value(part === 0 ? _year : part === 1 ? _month : _day);
}
function _M0FP49poipoiiii9moonsheet3lib9functions5edate(args) {
  if (args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions5edateN6constrS2704;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 0));
  let serial;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions5edateN6constrS2705;
  } else {
    const _Some = _bind;
    serial = _Some;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 1));
  let months;
  if (_bind$2 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions5edateN6constrS2706;
  } else {
    const _Some = _bind$2;
    months = _Some;
  }
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Date(_M0FP49poipoiiii9moonsheet3lib9functions11add__months(serial, months));
}
function _M0FP49poipoiiii9moonsheet3lib9functions7eomonth(args) {
  if (args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions7eomonthN6constrS2714;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 0));
  let serial;
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions7eomonthN6constrS2715;
  } else {
    const _Some = _bind;
    serial = _Some;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions7as__int(_M0MPC15array5Array2atGsE(args, 1));
  let months;
  if (_bind$2 === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib9functions7eomonthN6constrS2716;
  } else {
    const _Some = _bind$2;
    months = _Some;
  }
  const shifted = _M0FP49poipoiiii9moonsheet3lib9functions11add__months(serial, months);
  const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions16serial__to__date(shifted);
  const _year = _bind$3._0;
  const _month = _bind$3._1;
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Date(_M0FP49poipoiiii9moonsheet3lib9functions16date__to__serial(_year, _month, _M0FP49poipoiiii9moonsheet3lib9functions20last__day__of__month(_year, _month)));
}
function _M0FP49poipoiiii9moonsheet3lib9functions10pmt__value(args) {
  if (args.length < 3 || args.length > 5) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2728;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  let rate;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    rate = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2729;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 1));
  let nper;
  if (_bind$2.$tag === 1) {
    const _Some = _bind$2;
    nper = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2730;
  }
  const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 2));
  let pv;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    pv = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2731;
  }
  let fv;
  if (args.length > 3) {
    const _bind$4 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 3));
    if (_bind$4.$tag === 1) {
      const _Some = _bind$4;
      fv = _Some._0;
    } else {
      return _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2732;
    }
  } else {
    fv = 0;
  }
  let typ;
  if (args.length > 4) {
    const _bind$4 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 4));
    if (_bind$4.$tag === 1) {
      const _Some = _bind$4;
      typ = _Some._0;
    } else {
      return _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2733;
    }
  } else {
    typ = 0;
  }
  if (nper === 0) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10pmt__valueN6constrS2734;
  }
  if (rate === 0) {
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(-(pv + fv) / nper);
  } else {
    const growth = _M0FPC14math3pow(1 + rate, nper);
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(-(rate * (pv * growth + fv)) / ((1 + rate * typ) * (growth - 1)));
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions9fv__value(args) {
  if (args.length < 3 || args.length > 5) {
    return _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2752;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  let rate;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    rate = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2753;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 1));
  let nper;
  if (_bind$2.$tag === 1) {
    const _Some = _bind$2;
    nper = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2754;
  }
  const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 2));
  let pmt;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    pmt = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2755;
  }
  let pv;
  if (args.length > 3) {
    const _bind$4 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 3));
    if (_bind$4.$tag === 1) {
      const _Some = _bind$4;
      pv = _Some._0;
    } else {
      return _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2756;
    }
  } else {
    pv = 0;
  }
  let typ;
  if (args.length > 4) {
    const _bind$4 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 4));
    if (_bind$4.$tag === 1) {
      const _Some = _bind$4;
      typ = _Some._0;
    } else {
      return _M0FP49poipoiiii9moonsheet3lib9functions9fv__valueN6constrS2757;
    }
  } else {
    typ = 0;
  }
  if (rate === 0) {
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(-(pv + pmt * nper));
  } else {
    const growth = _M0FPC14math3pow(1 + rate, nper);
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(-(pv * growth + pmt * (1 + rate * typ) * (growth - 1) / rate));
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions9pv__value(args) {
  if (args.length < 3 || args.length > 5) {
    return _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2775;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  let rate;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    rate = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2776;
  }
  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 1));
  let nper;
  if (_bind$2.$tag === 1) {
    const _Some = _bind$2;
    nper = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2777;
  }
  const _bind$3 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 2));
  let pmt;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    pmt = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2778;
  }
  let fv;
  if (args.length > 3) {
    const _bind$4 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 3));
    if (_bind$4.$tag === 1) {
      const _Some = _bind$4;
      fv = _Some._0;
    } else {
      return _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2779;
    }
  } else {
    fv = 0;
  }
  let typ;
  if (args.length > 4) {
    const _bind$4 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 4));
    if (_bind$4.$tag === 1) {
      const _Some = _bind$4;
      typ = _Some._0;
    } else {
      return _M0FP49poipoiiii9moonsheet3lib9functions9pv__valueN6constrS2780;
    }
  } else {
    typ = 0;
  }
  if (rate === 0) {
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(-(fv + pmt * nper));
  } else {
    const growth = _M0FPC14math3pow(1 + rate, nper);
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(-(fv + pmt * (1 + rate * typ) * (growth - 1) / rate) / growth);
  }
}
function _M0FP49poipoiiii9moonsheet3lib9functions10npv__value(args) {
  if (args.length < 2) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10npv__valueN6constrS2798;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, 0));
  let rate;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    rate = _Some._0;
  } else {
    return _M0FP49poipoiiii9moonsheet3lib9functions10npv__valueN6constrS2799;
  }
  if (rate <= -1) {
    return _M0FP49poipoiiii9moonsheet3lib9functions10npv__valueN6constrS2800;
  }
  let total = 0;
  let i = 1;
  while (true) {
    if (i < args.length) {
      const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions10as__number(_M0MPC15array5Array2atGsE(args, i));
      if (_bind$2.$tag === 1) {
        const _Some = _bind$2;
        const _n = _Some._0;
        const _tmp = total;
        const _tmp$2 = 1 + rate;
        const _p = i;
        total = _tmp + _n / _M0FPC14math3pow(_tmp$2, _p + 0);
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(total);
}
function _M0FP49poipoiiii9moonsheet3lib9functions4call(name, args) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib9functions13upper__string(name);
  switch (_bind) {
    case "SUM": {
      return _M0FP49poipoiiii9moonsheet3lib9functions3sum(args);
    }
    case "PRODUCT": {
      return _M0FP49poipoiiii9moonsheet3lib9functions7product(args);
    }
    case "AVERAGE": {
      return _M0FP49poipoiiii9moonsheet3lib9functions7average(args);
    }
    case "MIN": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10min__value(args);
    }
    case "MAX": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10max__value(args);
    }
    case "COUNT": {
      return _M0FP49poipoiiii9moonsheet3lib9functions5count(args);
    }
    case "COUNTA": {
      return _M0FP49poipoiiii9moonsheet3lib9functions6counta(args);
    }
    case "COUNTBLANK": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10countblank(args);
    }
    case "MEDIAN": {
      return _M0FP49poipoiiii9moonsheet3lib9functions6median(args);
    }
    case "VAR": {
      return _M0FP49poipoiiii9moonsheet3lib9functions8variance(args);
    }
    case "STDEV": {
      return _M0FP49poipoiiii9moonsheet3lib9functions5stdev(args);
    }
    case "SUMSQ": {
      return _M0FP49poipoiiii9moonsheet3lib9functions5sumsq(args);
    }
    case "LARGE": {
      return _M0FP49poipoiiii9moonsheet3lib9functions12large__small(args, true);
    }
    case "SMALL": {
      return _M0FP49poipoiiii9moonsheet3lib9functions12large__small(args, false);
    }
    case "ABS": {
      return _M0FP49poipoiiii9moonsheet3lib9functions3abs(args);
    }
    case "SIGN": {
      return _M0FP49poipoiiii9moonsheet3lib9functions4sign(args);
    }
    case "INT": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10int__value(args);
    }
    case "TRUNC": {
      return _M0FP49poipoiiii9moonsheet3lib9functions12trunc__value(args);
    }
    case "ROUND": {
      return _M0FP49poipoiiii9moonsheet3lib9functions12round__value(args, 0);
    }
    case "ROUNDUP": {
      return _M0FP49poipoiiii9moonsheet3lib9functions12round__value(args, 1);
    }
    case "ROUNDDOWN": {
      return _M0FP49poipoiiii9moonsheet3lib9functions12round__value(args, -1);
    }
    case "CEILING": {
      return _M0FP49poipoiiii9moonsheet3lib9functions14ceiling__floor(args, true);
    }
    case "FLOOR": {
      return _M0FP49poipoiiii9moonsheet3lib9functions14ceiling__floor(args, false);
    }
    case "MOD": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10mod__value(args);
    }
    case "POWER": {
      return _M0FP49poipoiiii9moonsheet3lib9functions12power__value(args);
    }
    case "SQRT": {
      return _M0FP49poipoiiii9moonsheet3lib9functions11sqrt__value(args);
    }
    case "EXP": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10exp__value(args);
    }
    case "LN": {
      return _M0FP49poipoiiii9moonsheet3lib9functions9ln__value(args);
    }
    case "LOG": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10log__value(args);
    }
    case "LOG10": {
      return _M0FP49poipoiiii9moonsheet3lib9functions12log10__value(args);
    }
    case "PI": {
      return _M0FP49poipoiiii9moonsheet3lib9functions9pi__value(args);
    }
    case "LEN": {
      return _M0FP49poipoiiii9moonsheet3lib9functions3len(args);
    }
    case "LEFT": {
      return _M0FP49poipoiiii9moonsheet3lib9functions4left(args);
    }
    case "RIGHT": {
      return _M0FP49poipoiiii9moonsheet3lib9functions5right(args);
    }
    case "MID": {
      return _M0FP49poipoiiii9moonsheet3lib9functions3mid(args);
    }
    case "UPPER": {
      return _M0FP49poipoiiii9moonsheet3lib9functions5upper(args);
    }
    case "LOWER": {
      return _M0FP49poipoiiii9moonsheet3lib9functions5lower(args);
    }
    case "TRIM": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10trim__text(args);
    }
    case "CONCAT": {
      return _M0FP49poipoiiii9moonsheet3lib9functions6concat(args);
    }
    case "CONCATENATE": {
      return _M0FP49poipoiiii9moonsheet3lib9functions6concat(args);
    }
    case "TEXTJOIN": {
      return _M0FP49poipoiiii9moonsheet3lib9functions8textjoin(args);
    }
    case "REPT": {
      return _M0FP49poipoiiii9moonsheet3lib9functions4rept(args);
    }
    case "FIND": {
      return _M0FP49poipoiiii9moonsheet3lib9functions11find__value(args, false);
    }
    case "SEARCH": {
      return _M0FP49poipoiiii9moonsheet3lib9functions11find__value(args, true);
    }
    case "SUBSTITUTE": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10substitute(args);
    }
    case "REPLACE": {
      return _M0FP49poipoiiii9moonsheet3lib9functions14replace__value(args);
    }
    case "VALUE": {
      return _M0FP49poipoiiii9moonsheet3lib9functions11value__text(args);
    }
    case "CHAR": {
      return _M0FP49poipoiiii9moonsheet3lib9functions11char__value(args);
    }
    case "CODE": {
      return _M0FP49poipoiiii9moonsheet3lib9functions11code__value(args);
    }
    case "AND": {
      return _M0FP49poipoiiii9moonsheet3lib9functions12logical__and(args);
    }
    case "OR": {
      return _M0FP49poipoiiii9moonsheet3lib9functions11logical__or(args);
    }
    case "XOR": {
      return _M0FP49poipoiiii9moonsheet3lib9functions12logical__xor(args);
    }
    case "NOT": {
      return _M0FP49poipoiiii9moonsheet3lib9functions12logical__not(args);
    }
    case "TRUE": {
      const _p = true;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_p);
    }
    case "FALSE": {
      const _p$2 = false;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_p$2);
    }
    case "CHOOSE": {
      return _M0FP49poipoiiii9moonsheet3lib9functions6choose(args);
    }
    case "DATE": {
      return _M0FP49poipoiiii9moonsheet3lib9functions11date__value(args);
    }
    case "YEAR": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10date__part(args, 0);
    }
    case "MONTH": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10date__part(args, 1);
    }
    case "DAY": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10date__part(args, 2);
    }
    case "EDATE": {
      return _M0FP49poipoiiii9moonsheet3lib9functions5edate(args);
    }
    case "EOMONTH": {
      return _M0FP49poipoiiii9moonsheet3lib9functions7eomonth(args);
    }
    case "PMT": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10pmt__value(args);
    }
    case "FV": {
      return _M0FP49poipoiiii9moonsheet3lib9functions9fv__value(args);
    }
    case "PV": {
      return _M0FP49poipoiiii9moonsheet3lib9functions9pv__value(args);
    }
    case "NPV": {
      return _M0FP49poipoiiii9moonsheet3lib9functions10npv__value(args);
    }
    default: {
      return undefined;
    }
  }
}
function _M0MP49poipoiiii9moonsheet3lib4eval11EvalContext3new(get_value, get_range) {
  return new _M0TP49poipoiiii9moonsheet3lib4eval11EvalContext(get_value, get_range);
}
function _M0FP49poipoiiii9moonsheet3lib4eval13upper__string(s) {
  let out = "";
  const _bind = _M0MPC16string6String9to__array(s);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const c = _bind[_];
      out = `${out}${_M0IPC14char4CharPB4Show10to__string(_M0MPC14char4Char20to__ascii__uppercase(c))}`;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib4eval10as__number(value) {
  switch (value.$tag) {
    case 0: {
      const _Number = value;
      const _n = _Number._0;
      return new _M0DTPC16option6OptionGdE4Some(_n);
    }
    case 2: {
      const _Boolean = value;
      const _b = _Boolean._0;
      return new _M0DTPC16option6OptionGdE4Some(_b ? 1 : 0);
    }
    case 5: {
      return _M0FP49poipoiiii9moonsheet3lib4eval10as__numberN6constrS2823;
    }
    default: {
      return _M0DTPC16option6OptionGdE4None__;
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib4eval8as__bool(value) {
  switch (value.$tag) {
    case 2: {
      const _Boolean = value;
      const _b = _Boolean._0;
      return _b;
    }
    case 0: {
      const _Number = value;
      const _n = _Number._0;
      return _n !== 0;
    }
    case 5: {
      return _M0FP49poipoiiii9moonsheet3lib4eval8as__boolN6constrS2829;
    }
    default: {
      return -1;
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib4eval14compare__order(cmp, op) {
  return op === "=" ? cmp === 0 : op === "<>" ? cmp !== 0 : op === ">" ? cmp > 0 : op === "<" ? cmp < 0 : op === ">=" ? cmp >= 0 : op === "<=" ? cmp <= 0 : cmp === 0;
}
function _M0FP49poipoiiii9moonsheet3lib4eval17compare__criteria(value, op, target) {
  let target_number;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(target, 0, target.length));
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      target_number = new _M0DTPC16option6OptionGdE4Some(_tmp);
      break _L;
    }
    target_number = _M0DTPC16option6OptionGdE4None__;
  }
  _L$2: {
    const _bind = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(value);
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _v = _Some._0;
      if (target_number.$tag === 1) {
        const _Some$2 = target_number;
        const _t = _Some$2._0;
        const cmp = _v < _t ? -1 : _v > _t ? 1 : 0;
        return _M0FP49poipoiiii9moonsheet3lib4eval14compare__order(cmp, op);
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  const left = _M0FP49poipoiiii9moonsheet3lib4eval13upper__string(_M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(value));
  const right = _M0FP49poipoiiii9moonsheet3lib4eval13upper__string(target);
  return _M0FP49poipoiiii9moonsheet3lib4eval14compare__order(_M0IPC16string6StringPB7Compare7compare(left, right), op);
}
function _M0FP49poipoiiii9moonsheet3lib4eval10rest__from(text, start) {
  let out = "";
  let i = start;
  while (true) {
    if (i < _M0MPC16string6String20char__length_2einner(text, 0, undefined)) {
      const _bind = _M0MPC16string6String9get__char(text, i);
      if (_bind === -1) {
      } else {
        const _Some = _bind;
        const _c = _Some;
        out = `${out}${_M0IPC14char4CharPB4Show10to__string(_c)}`;
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib4eval15split__criteria(text) {
  const n = _M0MPC16string6String20char__length_2einner(text, 0, undefined);
  if (n >= 2) {
    const _bind = _M0MPC16string6String9get__char(text, 0);
    const c0 = _bind === -1 ? 32 : _bind;
    const _bind$2 = _M0MPC16string6String9get__char(text, 1);
    const c1 = _bind$2 === -1 ? 32 : _bind$2;
    if ((c0 === 62 || c0 === 60) && c1 === 61) {
      return { _0: `${_M0IPC14char4CharPB4Show10to__string(c0)}=`, _1: _M0FP49poipoiiii9moonsheet3lib4eval10rest__from(text, 2) };
    }
    if (c0 === 60 && c1 === 62) {
      return { _0: "<>", _1: _M0FP49poipoiiii9moonsheet3lib4eval10rest__from(text, 2) };
    }
  }
  if (n >= 1) {
    const _bind = _M0MPC16string6String9get__char(text, 0);
    const c0 = _bind === -1 ? 32 : _bind;
    if (c0 === 62 || (c0 === 60 || c0 === 61)) {
      return { _0: _M0IPC14char4CharPB4Show10to__string(c0), _1: _M0FP49poipoiiii9moonsheet3lib4eval10rest__from(text, 1) };
    }
  }
  return { _0: "=", _1: text };
}
function _M0FP49poipoiiii9moonsheet3lib4eval17criteria__matches(value, criteria) {
  switch (criteria.$tag) {
    case 1: {
      const _Text = criteria;
      const _s = _Text._0;
      const _bind = _M0FP49poipoiiii9moonsheet3lib4eval15split__criteria(_s);
      const _op = _bind._0;
      const _target = _bind._1;
      return _M0FP49poipoiiii9moonsheet3lib4eval17compare__criteria(value, _op, _target);
    }
    case 0: {
      const _Number = criteria;
      const _n = _Number._0;
      const _bind$2 = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(value);
      if (_bind$2.$tag === 1) {
        const _Some = _bind$2;
        const _v = _Some._0;
        return _v === _n;
      } else {
        return false;
      }
    }
    case 2: {
      const _Boolean = criteria;
      const _b = _Boolean._0;
      const _bind$3 = _M0FP49poipoiiii9moonsheet3lib4eval8as__bool(value);
      if (_bind$3 === -1) {
        return false;
      } else {
        const _Some = _bind$3;
        const _v = _Some;
        return _v === _b;
      }
    }
    case 5: {
      if (value.$tag === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      const _Date = criteria;
      const _d = _Date._0;
      const _bind$4 = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(value);
      if (_bind$4.$tag === 1) {
        const _Some = _bind$4;
        const _v = _Some._0;
        return _v === _d + 0;
      } else {
        return false;
      }
    }
    default: {
      return false;
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib4eval10range__arg(arg, ctx) {
  if (arg.$tag === 5) {
    const _Range = arg;
    const _range = _Range._0;
    const _func = ctx.get_range;
    const values = _func(_range);
    const rows = (_range.end.row - _range.start.row | 0) + 1 | 0;
    const cols = (_range.end.col - _range.start.col | 0) + 1 | 0;
    return { _0: values, _1: rows, _2: cols };
  } else {
    return undefined;
  }
}
function _M0FP49poipoiiii9moonsheet3lib4eval7as__int(value) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(value);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _n = _Some._0;
    return _M0MPC16double6Double7to__int(_n);
  } else {
    return undefined;
  }
}
function _M0FP49poipoiiii9moonsheet3lib4eval12value__equal(left, right) {
  _L: {
    const _bind = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(left);
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(right);
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _a = _Some._0;
      if (_bind$2.$tag === 1) {
        const _Some$2 = _bind$2;
        const _b = _Some$2._0;
        return _a === _b;
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return _M0FP49poipoiiii9moonsheet3lib4eval13upper__string(_M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(left)) === _M0FP49poipoiiii9moonsheet3lib4eval13upper__string(_M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(right));
}
function _M0FP49poipoiiii9moonsheet3lib4eval4eval(expr, ctx) {
  switch (expr.$tag) {
    case 0: {
      const _Number = expr;
      const _n = _Number._0;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_n);
    }
    case 1: {
      const _Text = expr;
      const _s = _Text._0;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(_s);
    }
    case 2: {
      const _Boolean = expr;
      const _b = _Boolean._0;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_b);
    }
    case 3: {
      const _Error = expr;
      const _e = _Error._0;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
    }
    case 4: {
      const _Ref = expr;
      const _addr = _Ref._0;
      const _func = ctx.get_value;
      return _func(_addr);
    }
    case 5: {
      return _M0FP49poipoiiii9moonsheet3lib4eval4evalN6constrS2914;
    }
    case 9: {
      return _M0FP49poipoiiii9moonsheet3lib4eval4evalN6constrS2915;
    }
    case 6: {
      const _Unary = expr;
      const _op = _Unary._0;
      const _inner = _Unary._1;
      const value = _M0FP49poipoiiii9moonsheet3lib4eval4eval(_inner, ctx);
      _L: {
        let e;
        _L$2: {
          if (_op === 0) {
            switch (value.$tag) {
              case 0: {
                const _Number$2 = value;
                const _n$2 = _Number$2._0;
                return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(-_n$2);
              }
              case 4: {
                const _Error$2 = value;
                const _e$2 = _Error$2._0;
                e = _e$2;
                break _L$2;
              }
              default: {
                break _L;
              }
            }
          } else {
            switch (value.$tag) {
              case 0: {
                const _Number$2 = value;
                const _n$2 = _Number$2._0;
                return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_n$2);
              }
              case 4: {
                const _Error$2 = value;
                const _e$2 = _Error$2._0;
                e = _e$2;
                break _L$2;
              }
              default: {
                break _L;
              }
            }
          }
        }
        return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(e);
      }
      return _M0FP49poipoiiii9moonsheet3lib4eval4evalN6constrS2916;
    }
    case 7: {
      const _Binary = expr;
      const _op$2 = _Binary._0;
      const _left = _Binary._1;
      const _right = _Binary._2;
      return _M0FP49poipoiiii9moonsheet3lib4eval12eval__binary(_op$2, _left, _right, ctx);
    }
    default: {
      const _Call = expr;
      const _name = _Call._0;
      const _args = _Call._1;
      return _M0FP49poipoiiii9moonsheet3lib4eval10eval__call(_name, _args, ctx);
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib4eval12eval__binary(op, left, right, ctx) {
  const l = _M0FP49poipoiiii9moonsheet3lib4eval4eval(left, ctx);
  const r = _M0FP49poipoiiii9moonsheet3lib4eval4eval(right, ctx);
  _L: {
    if (l.$tag === 4) {
      const _Error = l;
      const _e = _Error._0;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
    } else {
      if (r.$tag === 4) {
        const _Error = r;
        const _e = _Error._0;
        return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
      } else {
        if (l.$tag === 1) {
          const _Text = l;
          const _a = _Text._0;
          if (r.$tag === 1) {
            const _Text$2 = r;
            const _b = _Text$2._0;
            switch (op) {
              case 6: {
                return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_a === _b);
              }
              case 7: {
                return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(!(_a === _b));
              }
              case 5: {
                return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(`${_a}${_b}`);
              }
              default: {
                return _M0FP49poipoiiii9moonsheet3lib4eval12eval__binaryN6constrS2954;
              }
            }
          } else {
            break _L;
          }
        } else {
          break _L;
        }
      }
    }
  }
  _L$2: {
    const _bind = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(l);
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(r);
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _a = _Some._0;
      if (_bind$2.$tag === 1) {
        const _Some$2 = _bind$2;
        const _b = _Some$2._0;
        switch (op) {
          case 0: {
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_a + _b);
          }
          case 1: {
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_a - _b);
          }
          case 2: {
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_a * _b);
          }
          case 3: {
            return _b === 0 ? _M0FP49poipoiiii9moonsheet3lib4eval12eval__binaryN6constrS2953 : new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_a / _b);
          }
          case 4: {
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_M0FPC14math3pow(_a, _b));
          }
          case 6: {
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_a === _b);
          }
          case 7: {
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_a !== _b);
          }
          case 8: {
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_a < _b);
          }
          case 9: {
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_a <= _b);
          }
          case 10: {
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_a > _b);
          }
          case 11: {
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value7Boolean(_a >= _b);
          }
          default: {
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(`${_M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(l)}${_M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(r)}`);
          }
        }
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return _M0FP49poipoiiii9moonsheet3lib4eval12eval__binaryN6constrS2952;
}
function _M0FP49poipoiiii9moonsheet3lib4eval10eval__call(name, args, ctx) {
  const upper = _M0FP49poipoiiii9moonsheet3lib4eval13upper__string(name);
  if (upper === "IF") {
    if (args.length < 2) {
      return _M0FP49poipoiiii9moonsheet3lib4eval10eval__callN6constrS2977;
    }
    const cond = _M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 0), ctx);
    let truthy;
    switch (cond.$tag) {
      case 2: {
        const _Boolean = cond;
        truthy = _Boolean._0;
        break;
      }
      case 0: {
        const _Number = cond;
        const _n = _Number._0;
        truthy = _n !== 0;
        break;
      }
      case 5: {
        truthy = false;
        break;
      }
      case 4: {
        const _Error = cond;
        const _e = _Error._0;
        return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
      }
      default: {
        return _M0FP49poipoiiii9moonsheet3lib4eval10eval__callN6constrS2978;
      }
    }
    return truthy ? _M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 1), ctx) : args.length >= 3 ? _M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 2), ctx) : _M0FP49poipoiiii9moonsheet3lib4eval10eval__callN6constrS2979;
  } else {
    if (upper === "IFERROR") {
      if (args.length < 2) {
        return _M0FP49poipoiiii9moonsheet3lib4eval10eval__callN6constrS2980;
      }
      const first = _M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 0), ctx);
      if (first.$tag === 4) {
        return _M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 1), ctx);
      } else {
        return first;
      }
    } else {
      if (upper === "COUNTIF") {
        return _M0FP49poipoiiii9moonsheet3lib4eval13eval__countif(args, ctx);
      } else {
        if (upper === "SUMIF") {
          return _M0FP49poipoiiii9moonsheet3lib4eval11eval__sumif(args, ctx, false);
        } else {
          if (upper === "AVERAGEIF") {
            return _M0FP49poipoiiii9moonsheet3lib4eval11eval__sumif(args, ctx, true);
          } else {
            if (upper === "INDEX") {
              return _M0FP49poipoiiii9moonsheet3lib4eval11eval__index(args, ctx);
            } else {
              if (upper === "MATCH") {
                return _M0FP49poipoiiii9moonsheet3lib4eval11eval__match(args, ctx);
              } else {
                if (upper === "VLOOKUP") {
                  return _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookup(args, ctx);
                } else {
                  const values = [];
                  const _bind = args.length;
                  let _tmp = 0;
                  while (true) {
                    const _ = _tmp;
                    if (_ < _bind) {
                      const arg = args[_];
                      if (arg.$tag === 5) {
                        const _Range = arg;
                        const _range = _Range._0;
                        const _func = ctx.get_range;
                        const items = _func(_range);
                        const _bind$2 = items.length;
                        let _tmp$2 = 0;
                        while (true) {
                          const _$2 = _tmp$2;
                          if (_$2 < _bind$2) {
                            const item = items[_$2];
                            _M0MPC15array5Array4pushGsE(values, item);
                            _tmp$2 = _$2 + 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                      } else {
                        _M0MPC15array5Array4pushGsE(values, _M0FP49poipoiiii9moonsheet3lib4eval4eval(arg, ctx));
                      }
                      _tmp = _ + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  const _bind$2 = _M0FP49poipoiiii9moonsheet3lib9functions4call(upper, values);
                  if (_bind$2 === undefined) {
                    return _M0FP49poipoiiii9moonsheet3lib4eval10eval__callN6constrS2981;
                  } else {
                    const _Some = _bind$2;
                    return _Some;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib4eval13eval__countif(args, ctx) {
  if (args.length !== 2) {
    return _M0FP49poipoiiii9moonsheet3lib4eval13eval__countifN6constrS3009;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib4eval10range__arg(_M0MPC15array5Array2atGsE(args, 0), ctx);
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib4eval13eval__countifN6constrS3010;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _values = _x._0;
    const criteria = _M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 1), ctx);
    if (criteria.$tag === 4) {
      const _Error = criteria;
      const _e = _Error._0;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
    } else {
      let total = 0;
      const _bind$2 = _values.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const value = _values[_];
          if (_M0FP49poipoiiii9moonsheet3lib4eval17criteria__matches(value, criteria)) {
            total = total + 1 | 0;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _p = total;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_p + 0);
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib4eval11eval__index(args, ctx) {
  if (args.length < 2 || args.length > 3) {
    return _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3025;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib4eval10range__arg(_M0MPC15array5Array2atGsE(args, 0), ctx);
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3032;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _values = _x._0;
    const _rows = _x._1;
    const _cols = _x._2;
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib4eval7as__int(_M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 1), ctx));
    let row;
    if (_bind$2 === undefined) {
      return _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3026;
    } else {
      const _Some$2 = _bind$2;
      row = _Some$2;
    }
    if (args.length === 2) {
      return _cols === 1 ? (row < 1 || row > _rows ? _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3027 : _M0MPC15array5Array2atGsE(_values, row - 1 | 0)) : _rows === 1 ? (row < 1 || row > _cols ? _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3028 : _M0MPC15array5Array2atGsE(_values, row - 1 | 0)) : _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3029;
    } else {
      const _bind$3 = _M0FP49poipoiiii9moonsheet3lib4eval7as__int(_M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 2), ctx));
      let col;
      if (_bind$3 === undefined) {
        return _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3030;
      } else {
        const _Some$2 = _bind$3;
        col = _Some$2;
      }
      return row < 1 || (row > _rows || (col < 1 || col > _cols)) ? _M0FP49poipoiiii9moonsheet3lib4eval11eval__indexN6constrS3031 : _M0MPC15array5Array2atGsE(_values, (Math.imul(row - 1 | 0, _cols) | 0) + (col - 1 | 0) | 0);
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib4eval11eval__match(args, ctx) {
  if (args.length < 2 || args.length > 3) {
    return _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3047;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib4eval10range__arg(_M0MPC15array5Array2atGsE(args, 1), ctx);
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3052;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _values = _x._0;
    const lookup = _M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 0), ctx);
    let match_type;
    if (args.length === 3) {
      const _bind$2 = _M0FP49poipoiiii9moonsheet3lib4eval7as__int(_M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 2), ctx));
      if (_bind$2 === undefined) {
        return _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3048;
      } else {
        const _Some$2 = _bind$2;
        match_type = _Some$2;
      }
    } else {
      match_type = 1;
    }
    if (match_type === 0) {
      let i = 0;
      while (true) {
        if (i < _values.length) {
          if (_M0FP49poipoiiii9moonsheet3lib4eval12value__equal(_M0MPC15array5Array2atGsE(_values, i), lookup)) {
            const _p = i + 1 | 0;
            return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_p + 0);
          }
          i = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3049;
    } else {
      const _bind$2 = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(lookup);
      if (_bind$2.$tag === 1) {
        const _Some$2 = _bind$2;
        const _target = _Some$2._0;
        let found = 0;
        let i = 0;
        while (true) {
          if (i < _values.length) {
            const _bind$3 = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(_M0MPC15array5Array2atGsE(_values, i));
            if (_bind$3.$tag === 1) {
              const _Some$3 = _bind$3;
              const _n = _Some$3._0;
              if (match_type > 0 && _n <= _target || match_type < 0 && _n >= _target) {
                found = i + 1 | 0;
              }
            }
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (found === 0) {
          return _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3050;
        } else {
          const _p = found;
          return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_p + 0);
        }
      } else {
        return _M0FP49poipoiiii9moonsheet3lib4eval11eval__matchN6constrS3051;
      }
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib4eval11eval__sumif(args, ctx, average) {
  if (args.length !== 2 && args.length !== 3) {
    return _M0FP49poipoiiii9moonsheet3lib4eval11eval__sumifN6constrS3074;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib4eval10range__arg(_M0MPC15array5Array2atGsE(args, 0), ctx);
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib4eval11eval__sumifN6constrS3077;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _range_values = _x._0;
    let sum_values;
    if (args.length === 3) {
      const _bind$2 = _M0FP49poipoiiii9moonsheet3lib4eval10range__arg(_M0MPC15array5Array2atGsE(args, 2), ctx);
      if (_bind$2 === undefined) {
        return _M0FP49poipoiiii9moonsheet3lib4eval11eval__sumifN6constrS3075;
      } else {
        const _Some$2 = _bind$2;
        const _x$2 = _Some$2;
        sum_values = _x$2._0;
      }
    } else {
      sum_values = _range_values;
    }
    const criteria = _M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 1), ctx);
    if (criteria.$tag === 4) {
      const _Error = criteria;
      const _e = _Error._0;
      return new _M0DTP49poipoiiii9moonsheet3lib5types5Value5Error(_e);
    } else {
      let total = 0;
      let count = 0;
      let i = 0;
      while (true) {
        if (i < _range_values.length && i < sum_values.length) {
          if (_M0FP49poipoiiii9moonsheet3lib4eval17criteria__matches(_M0MPC15array5Array2atGsE(_range_values, i), criteria)) {
            const _bind$2 = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(_M0MPC15array5Array2atGsE(sum_values, i));
            if (_bind$2.$tag === 1) {
              const _Some$2 = _bind$2;
              const _n = _Some$2._0;
              total = total + _n;
              count = count + 1 | 0;
            }
          }
          i = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (average) {
        if (count === 0) {
          return _M0FP49poipoiiii9moonsheet3lib4eval11eval__sumifN6constrS3076;
        } else {
          const _tmp = total;
          const _p = count;
          return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_tmp / (_p + 0));
        }
      } else {
        return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(total);
      }
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookup(args, ctx) {
  if (args.length < 3 || args.length > 4) {
    return _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3099;
  }
  const _bind = _M0FP49poipoiiii9moonsheet3lib4eval10range__arg(_M0MPC15array5Array2atGsE(args, 1), ctx);
  if (_bind === undefined) {
    return _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3106;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _values = _x._0;
    const _rows = _x._1;
    const _cols = _x._2;
    const lookup = _M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 0), ctx);
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib4eval7as__int(_M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 2), ctx));
    let col_index;
    if (_bind$2 === undefined) {
      return _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3100;
    } else {
      const _Some$2 = _bind$2;
      col_index = _Some$2;
    }
    if (col_index < 1 || col_index > _cols) {
      return _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3101;
    }
    let exact;
    if (args.length === 4) {
      const _bind$3 = _M0FP49poipoiiii9moonsheet3lib4eval8as__bool(_M0FP49poipoiiii9moonsheet3lib4eval4eval(_M0MPC15array5Array2atGsE(args, 3), ctx));
      if (_bind$3 === -1) {
        return _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3102;
      } else {
        const _Some$2 = _bind$3;
        const _b = _Some$2;
        exact = !_b;
      }
    } else {
      exact = true;
    }
    if (exact) {
      let row = 0;
      while (true) {
        if (row < _rows) {
          if (_M0FP49poipoiiii9moonsheet3lib4eval12value__equal(_M0MPC15array5Array2atGsE(_values, Math.imul(row, _cols) | 0), lookup)) {
            return _M0MPC15array5Array2atGsE(_values, (Math.imul(row, _cols) | 0) + (col_index - 1 | 0) | 0);
          }
          row = row + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3103;
    } else {
      const _bind$3 = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(lookup);
      if (_bind$3.$tag === 1) {
        const _Some$2 = _bind$3;
        const _target = _Some$2._0;
        let found = -1;
        let row = 0;
        while (true) {
          if (row < _rows) {
            const _bind$4 = _M0FP49poipoiiii9moonsheet3lib4eval10as__number(_M0MPC15array5Array2atGsE(_values, Math.imul(row, _cols) | 0));
            if (_bind$4.$tag === 1) {
              const _Some$3 = _bind$4;
              const _n = _Some$3._0;
              if (_n <= _target) {
                found = row;
              }
            }
            row = row + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return found < 0 ? _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3104 : _M0MPC15array5Array2atGsE(_values, (Math.imul(found, _cols) | 0) + (col_index - 1 | 0) | 0);
      } else {
        return _M0FP49poipoiiii9moonsheet3lib4eval13eval__vlookupN6constrS3105;
      }
    }
  }
}
function _M0FP49poipoiiii9moonsheet3lib5graph8contains(values, value) {
  const _bind = values.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const item = values[_];
      if (item === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph3new() {
  const _bind = [];
  const _tmp = _M0MPB3Map3MapGiRPB5ArrayGiEE(new _M0TPB9ArrayViewGUiRPB5ArrayGiEEE(_bind, 0, 0), _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph3newN6constrS3140);
  const _bind$2 = [];
  return new _M0TP49poipoiiii9moonsheet3lib5graph15DependencyGraph(_tmp, _M0MPB3Map3MapGiRPB5ArrayGiEE(new _M0TPB9ArrayViewGUiRPB5ArrayGiEEE(_bind$2, 0, 0), _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph3newN6constrS3141));
}
function _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph15add__dependency(self, node, depends_on) {
  const _bind = _M0MPB3Map3getGiRPB5ArrayGiEE(self.precedents, node);
  let forward;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    forward = _Some._0;
  } else {
    const items = [];
    _M0MPB3Map3setGiRPB5ArrayGiEE(self.precedents, node, items);
    forward = items;
  }
  if (!_M0FP49poipoiiii9moonsheet3lib5graph8contains(forward, depends_on)) {
    _M0MPC15array5Array4pushGiE(forward, depends_on);
  }
  const _bind$2 = _M0MPB3Map3getGiRPB5ArrayGiEE(self.dependents, depends_on);
  let reverse;
  if (_bind$2.$tag === 1) {
    const _Some = _bind$2;
    reverse = _Some._0;
  } else {
    const items = [];
    _M0MPB3Map3setGiRPB5ArrayGiEE(self.dependents, depends_on, items);
    reverse = items;
  }
  if (!_M0FP49poipoiiii9moonsheet3lib5graph8contains(reverse, node)) {
    _M0MPC15array5Array4pushGiE(reverse, node);
    return;
  } else {
    return;
  }
}
function _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph14dependents__of(self, node) {
  const out = [];
  const _bind = _M0MPB3Map3getGiRPB5ArrayGiEE(self.dependents, node);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _items = _Some._0;
    const _bind$2 = _items.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const item = _items[_];
        _M0MPC15array5Array4pushGiE(out, item);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return out;
}
function _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph18topological__order(self, nodes) {
  const _bind = [];
  const indegree = _M0MPB3Map3MapGiiE(new _M0TPB9ArrayViewGUiiEE(_bind, 0, 0), nodes.length);
  const _bind$2 = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const node = nodes[_];
      _M0MPB3Map3setGiiE(indegree, node, 0);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = nodes.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const node = nodes[_];
      const _bind$4 = _M0MPB3Map3getGiRPB5ArrayGiEE(self.precedents, node);
      if (_bind$4.$tag === 1) {
        const _Some = _bind$4;
        const _deps = _Some._0;
        const _bind$5 = _deps.length;
        let _tmp$3 = 0;
        while (true) {
          const _$2 = _tmp$3;
          if (_$2 < _bind$5) {
            const dep = _deps[_$2];
            const _bind$6 = _M0MPB3Map3getGiiE(indegree, dep);
            if (_bind$6 === undefined) {
            } else {
              _M0MPB3Map3setGiiE(indegree, node, _M0MPB3Map2atGiiE(indegree, node) + 1 | 0);
            }
            _tmp$3 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const queue = [];
  const _bind$4 = nodes.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$4) {
      const node = nodes[_];
      if (_M0MPB3Map2atGiiE(indegree, node) === 0) {
        _M0MPC15array5Array4pushGiE(queue, node);
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const result = [];
  let head = 0;
  while (true) {
    if (head < queue.length) {
      const node = _M0MPC15array5Array2atGiE(queue, head);
      head = head + 1 | 0;
      _M0MPC15array5Array4pushGiE(result, node);
      const _bind$5 = _M0MPB3Map3getGiRPB5ArrayGiEE(self.dependents, node);
      if (_bind$5.$tag === 1) {
        const _Some = _bind$5;
        const _children = _Some._0;
        const _bind$6 = _children.length;
        let _tmp$4 = 0;
        while (true) {
          const _ = _tmp$4;
          if (_ < _bind$6) {
            const child = _children[_];
            const _bind$7 = _M0MPB3Map3getGiiE(indegree, child);
            if (_bind$7 === undefined) {
            } else {
              _M0MPB3Map3setGiiE(indegree, child, _M0MPB3Map2atGiiE(indegree, child) - 1 | 0);
              if (_M0MPB3Map2atGiiE(indegree, child) === 0) {
                _M0MPC15array5Array4pushGiE(queue, child);
              }
            }
            _tmp$4 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  return result.length === nodes.length ? new _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(result) : _M0DTPC16option6OptionGRPB5ArrayGiEE4None__;
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet3new(name) {
  const _bind = [];
  const _tmp = _M0MPB3Map3MapGiRP49poipoiiii9moonsheet3lib8workbook4CellE(new _M0TPB9ArrayViewGUiRP49poipoiiii9moonsheet3lib8workbook4CellEE(_bind, 0, 0), _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet3newN6constrS3202);
  const _tmp$2 = _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph3new();
  const _bind$2 = [];
  return new _M0TP49poipoiiii9moonsheet3lib8workbook5Sheet(name, _tmp, _tmp$2, _M0MPB3Map3MapGibE(new _M0TPB9ArrayViewGUibEE(_bind$2, 0, 0), _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet3newN6constrS3203), false, true);
}
function _M0MP49poipoiiii9moonsheet3lib8workbook8Workbook3new() {
  const _bind = [];
  return new _M0TP49poipoiiii9moonsheet3lib8workbook8Workbook(_M0MPB3Map3MapGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(new _M0TPB9ArrayViewGUsRP49poipoiiii9moonsheet3lib8workbook5SheetEE(_bind, 0, 0), _M0MP49poipoiiii9moonsheet3lib8workbook8Workbook3newN6constrS3207));
}
function _M0MP49poipoiiii9moonsheet3lib8workbook8Workbook10add__sheet(self, name) {
  const sheet = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet3new(name);
  _M0MPB3Map3setGsRP49poipoiiii9moonsheet3lib8workbook5SheetE(self.sheets, name, sheet);
  return sheet;
}
function _M0FP49poipoiiii9moonsheet3lib8workbook13range__values(values, range) {
  const out = [];
  let row = range.start.row;
  while (true) {
    if (row <= range.end.row) {
      let col = range.start.col;
      while (true) {
        if (col <= range.end.col) {
          const key = (Math.imul(row, 16384) | 0) + col | 0;
          const _bind = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib5types5ValueE(values, key);
          if (_bind === undefined) {
            _M0MPC15array5Array4pushGsE(out, _M0DTP49poipoiiii9moonsheet3lib5types5Value5Blank__);
          } else {
            const _Some = _bind;
            const _value = _Some;
            _M0MPC15array5Array4pushGsE(out, _value);
          }
          col = col + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      row = row + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib8workbook10eval__expr(expr, values) {
  const ctx = _M0MP49poipoiiii9moonsheet3lib4eval11EvalContext3new((addr) => {
    const _bind = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib5types5ValueE(values, (Math.imul(addr.row, 16384) | 0) + addr.col | 0);
    if (_bind === undefined) {
      return _M0DTP49poipoiiii9moonsheet3lib5types5Value5Blank__;
    } else {
      const _Some = _bind;
      return _Some;
    }
  }, (range) => _M0FP49poipoiiii9moonsheet3lib8workbook13range__values(values, range));
  return _M0FP49poipoiiii9moonsheet3lib4eval4eval(expr, ctx);
}
function _M0FP49poipoiiii9moonsheet3lib8workbook19eval__formula__text(text, values) {
  const _bind = _M0FP49poipoiiii9moonsheet3lib7formula14parse__formula(text);
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    const _expr = _Ok._0;
    return _M0FP49poipoiiii9moonsheet3lib8workbook10eval__expr(_expr, values);
  } else {
    return _M0FP49poipoiiii9moonsheet3lib8workbook19eval__formula__textN6constrS3230;
  }
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12build__graph(self) {
  const graph = _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph3new();
  const _bind = [];
  const exprs = _M0MPB3Map3MapGiRP49poipoiiii9moonsheet3lib7formula4ExprE(new _M0TPB9ArrayViewGUiRP49poipoiiii9moonsheet3lib7formula4ExprEE(_bind, 0, 0), _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12build__graphN6constrS3236);
  const _it = _M0MPB3Map4keysGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells);
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGiE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _key = _Some;
      const _bind$3 = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, _key);
      if (_bind$3 === undefined) {
      } else {
        const _Some$2 = _bind$3;
        const _cell = _Some$2;
        const _bind$4 = _cell.formula;
        if (_bind$4 === undefined) {
        } else {
          const _Some$3 = _bind$4;
          const _text = _Some$3;
          const _bind$5 = _M0FP49poipoiiii9moonsheet3lib7formula14parse__formula(_text);
          if (_bind$5.$tag === 1) {
            const _Ok = _bind$5;
            const _expr = _Ok._0;
            _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib7formula4ExprE(exprs, _key, _expr);
            const _bind$6 = _M0FP49poipoiiii9moonsheet3lib7formula10references(_expr);
            const _bind$7 = _bind$6.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind$7) {
                const addr = _bind$6[_];
                _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph15add__dependency(graph, _key, (Math.imul(addr.row, 16384) | 0) + addr.col | 0);
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
        }
      }
      continue;
    }
  }
  self.graph = graph;
  self.graph_valid = true;
  return exprs;
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet16snapshot__values(self) {
  const _bind = [];
  const values = _M0MPB3Map3MapGiRP49poipoiiii9moonsheet3lib5types5ValueE(new _M0TPB9ArrayViewGUiRP49poipoiiii9moonsheet3lib5types5ValueEE(_bind, 0, 0), _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet16snapshot__valuesN6constrS3260);
  const _it = _M0MPB3Map4keysGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells);
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGiE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _key = _Some;
      const _bind$3 = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, _key);
      if (_bind$3 === undefined) {
      } else {
        const _Some$2 = _bind$3;
        const _cell = _Some$2;
        _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib5types5ValueE(values, _key, _cell.value);
      }
      continue;
    }
  }
  return values;
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet21write__formula__value(self, key, value) {
  const _bind = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, key);
  if (_bind === undefined) {
    return;
  } else {
    const _Some = _bind;
    const _cell = _Some;
    const _bind$2 = _cell.formula;
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$2;
      const _formula = _Some$2;
      _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, key, new _M0TP49poipoiiii9moonsheet3lib8workbook4Cell(_formula, value));
      return;
    }
  }
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet17recalculate__full(self) {
  const exprs = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12build__graph(self);
  const values = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet16snapshot__values(self);
  const formula_keys = [];
  const _it = _M0MPB3Map4keysGiRP49poipoiiii9moonsheet3lib7formula4ExprE(exprs);
  while (true) {
    const _bind = _M0MPB4Iter4nextGiE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _key = _Some;
      _M0MPC15array5Array4pushGiE(formula_keys, _key);
      continue;
    }
  }
  const _it$2 = _M0MPB3Map4keysGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells);
  while (true) {
    const _bind = _M0MPB4Iter4nextGiE(_it$2);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _key = _Some;
      const _bind$2 = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, _key);
      if (_bind$2 === undefined) {
      } else {
        const _Some$2 = _bind$2;
        const _cell = _Some$2;
        const _bind$3 = _cell.formula;
        if (_bind$3 === undefined) {
        } else {
          const _bind$4 = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib7formula4ExprE(exprs, _key);
          if (_bind$4 === undefined) {
            _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib5types5ValueE(values, _key, _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet17recalculate__fullN6constrS3281);
          }
        }
      }
      continue;
    }
  }
  const _bind = _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph18topological__order(self.graph, formula_keys);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _order = _Some._0;
    const _bind$2 = _order.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const key = _order[_];
        const _bind$3 = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib7formula4ExprE(exprs, key);
        if (_bind$3 === undefined) {
        } else {
          const _Some$2 = _bind$3;
          const _expr = _Some$2;
          const value = _M0FP49poipoiiii9moonsheet3lib8workbook10eval__expr(_expr, values);
          _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib5types5ValueE(values, key, value);
          _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet21write__formula__value(self, key, value);
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    const _bind$2 = formula_keys.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const key = formula_keys[_];
        _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib5types5ValueE(values, key, _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet17recalculate__fullN5valueS3282);
        _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet21write__formula__value(self, key, _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet17recalculate__fullN5valueS3282);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const _bind$2 = [];
  self.dirty = _M0MPB3Map3MapGibE(new _M0TPB9ArrayViewGUibEE(_bind$2, 0, 0), _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet17recalculate__fullN6constrS3283);
  self.full_recalc = false;
  return formula_keys.length;
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet18recalculate__dirty(self) {
  const values = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet16snapshot__values(self);
  const dirty_formulas = [];
  const _it = _M0MPB3Map4keysGibE(self.dirty);
  while (true) {
    const _bind = _M0MPB4Iter4nextGiE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _key = _Some;
      const _bind$2 = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, _key);
      if (_bind$2 === undefined) {
      } else {
        const _Some$2 = _bind$2;
        const _cell = _Some$2;
        const _bind$3 = _cell.formula;
        if (_bind$3 === undefined) {
        } else {
          _M0MPC15array5Array4pushGiE(dirty_formulas, _key);
        }
      }
      continue;
    }
  }
  if (dirty_formulas.length === 0) {
    const _bind = [];
    self.dirty = _M0MPB3Map3MapGibE(new _M0TPB9ArrayViewGUibEE(_bind, 0, 0), _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet18recalculate__dirtyN6constrS3319);
    return 0;
  }
  const _bind = _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph18topological__order(self.graph, dirty_formulas);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _order = _Some._0;
    const _bind$2 = _order.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const key = _order[_];
        const _bind$3 = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, key);
        if (_bind$3 === undefined) {
        } else {
          const _Some$2 = _bind$3;
          const _cell = _Some$2;
          const _bind$4 = _cell.formula;
          if (_bind$4 === undefined) {
          } else {
            const _Some$3 = _bind$4;
            const _text = _Some$3;
            const value = _M0FP49poipoiiii9moonsheet3lib8workbook19eval__formula__text(_text, values);
            _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib5types5ValueE(values, key, value);
            _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, key, new _M0TP49poipoiiii9moonsheet3lib8workbook4Cell(_text, value));
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$3 = [];
    self.dirty = _M0MPB3Map3MapGibE(new _M0TPB9ArrayViewGUibEE(_bind$3, 0, 0), _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet18recalculate__dirtyN6constrS3320);
    return dirty_formulas.length;
  } else {
    self.full_recalc = true;
    const _bind$2 = [];
    self.dirty = _M0MPB3Map3MapGibE(new _M0TPB9ArrayViewGUibEE(_bind$2, 0, 0), _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet18recalculate__dirtyN6constrS3321);
    return _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet17recalculate__full(self);
  }
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet11recalculate(self) {
  return self.full_recalc || !self.graph_valid ? _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet17recalculate__full(self) : _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet18recalculate__dirty(self);
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet11mark__dirty(self, key) {
  if (!self.graph_valid) {
    self.full_recalc = true;
    return undefined;
  }
  const stack = [key];
  let index = 0;
  while (true) {
    if (index < stack.length) {
      const current = _M0MPC15array5Array2atGiE(stack, index);
      index = index + 1 | 0;
      const _bind = _M0MPB3Map3getGibE(self.dirty, current);
      if (_bind === -1) {
        _M0MPB3Map3setGibE(self.dirty, current, true);
        const _bind$2 = _M0MP49poipoiiii9moonsheet3lib5graph15DependencyGraph14dependents__of(self.graph, current);
        const _bind$3 = _bind$2.length;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind$3) {
            const dependent = _bind$2[_];
            _M0MPC15array5Array4pushGiE(stack, dependent);
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      continue;
    } else {
      return;
    }
  }
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(self, a1, value) {
  const _bind = _M0MP49poipoiiii9moonsheet3lib5types7Address5parse(a1);
  if (_bind === undefined) {
    return false;
  } else {
    const _Some = _bind;
    const _addr = _Some;
    const key = (Math.imul(_addr.row, 16384) | 0) + _addr.col | 0;
    const _bind$2 = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, key);
    let had_formula;
    if (_bind$2 === undefined) {
      had_formula = false;
    } else {
      const _Some$2 = _bind$2;
      const _cell = _Some$2;
      const _bind$3 = _cell.formula;
      had_formula = !(_bind$3 === undefined);
    }
    _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, key, new _M0TP49poipoiiii9moonsheet3lib8workbook4Cell(undefined, value));
    if (had_formula) {
      self.graph_valid = false;
      self.full_recalc = true;
    } else {
      _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet11mark__dirty(self, key);
    }
    return true;
  }
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(self, a1, formula) {
  const _bind = _M0MP49poipoiiii9moonsheet3lib5types7Address5parse(a1);
  if (_bind === undefined) {
    return false;
  } else {
    const _Some = _bind;
    const _addr = _Some;
    _M0MPB3Map3setGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, (Math.imul(_addr.row, 16384) | 0) + _addr.col | 0, new _M0TP49poipoiiii9moonsheet3lib8workbook4Cell(formula, _M0DTP49poipoiiii9moonsheet3lib5types5Value5Blank__));
    self.graph_valid = false;
    self.full_recalc = true;
    return true;
  }
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet9value__at(self, addr) {
  const _bind = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, (Math.imul(addr.row, 16384) | 0) + addr.col | 0);
  if (_bind === undefined) {
    return _M0DTP49poipoiiii9moonsheet3lib5types5Value5Blank__;
  } else {
    const _Some = _bind;
    const _cell = _Some;
    return _cell.value;
  }
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10get__value(self, a1) {
  const _bind = _M0MP49poipoiiii9moonsheet3lib5types7Address5parse(a1);
  if (_bind === undefined) {
    return _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10get__valueN6constrS3387;
  } else {
    const _Some = _bind;
    const _addr = _Some;
    return _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet9value__at(self, _addr);
  }
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12get__formula(self, a1) {
  const _bind = _M0MP49poipoiiii9moonsheet3lib5types7Address5parse(a1);
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _addr = _Some;
    const _bind$2 = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, (Math.imul(_addr.row, 16384) | 0) + _addr.col | 0);
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some$2 = _bind$2;
      const _cell = _Some$2;
      return _cell.formula;
    }
  }
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12dependencies(self, a1) {
  const out = [];
  const _bind = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12get__formula(self, a1);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _text = _Some;
    const _bind$2 = _M0FP49poipoiiii9moonsheet3lib7formula14parse__formula(_text);
    if (_bind$2.$tag === 1) {
      const _Ok = _bind$2;
      const _expr = _Ok._0;
      const _bind$3 = _M0FP49poipoiiii9moonsheet3lib7formula10references(_expr);
      const _bind$4 = _bind$3.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$4) {
          const addr = _bind$3[_];
          _M0MPC15array5Array4pushGsE(out, _M0MP49poipoiiii9moonsheet3lib5types7Address6to__a1(addr));
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  }
  return out;
}
function _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet7entries(self) {
  const out = [];
  const _it = _M0MPB3Map4keysGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells);
  while (true) {
    const _bind = _M0MPB4Iter4nextGiE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _key = _Some;
      const _bind$2 = _M0MPB3Map3getGiRP49poipoiiii9moonsheet3lib8workbook4CellE(self.cells, _key);
      if (_bind$2 === undefined) {
      } else {
        const _Some$2 = _bind$2;
        const _cell = _Some$2;
        _M0MPC15array5Array4pushGsE(out, { _0: _M0MP49poipoiiii9moonsheet3lib5types7Address6to__a1(_M0MP49poipoiiii9moonsheet3lib5types7Address9from__key(_key)), _1: _cell.formula, _2: _cell.value });
      }
      continue;
    }
  }
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib2io13upper__string(s) {
  let out = "";
  const _bind = _M0MPC16string6String9to__array(s);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const c = _bind[_];
      out = `${out}${_M0IPC14char4CharPB4Show10to__string(_M0MPC14char4Char20to__ascii__uppercase(c))}`;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib2io10parse__csv(text) {
  const rows = [];
  const _it = _M0MPC16string6String5split(text, _M0FP49poipoiiii9moonsheet3lib2io10parse__csvN6recordS3432);
  while (true) {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _line = _Some;
      const trimmed = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_line, undefined));
      if (trimmed.length > 0) {
        const columns = [];
        const _it$2 = _M0MPC16string6String5split(trimmed, _M0FP49poipoiiii9moonsheet3lib2io10parse__csvN6recordS3433);
        while (true) {
          const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it$2);
          if (_bind$2 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$2;
            const _column = _Some$2;
            _M0MPC15array5Array4pushGsE(columns, _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_column, undefined)));
            continue;
          }
        }
        _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, columns);
      }
      continue;
    }
  }
  return rows;
}
function _M0FP49poipoiiii9moonsheet3lib2io12parse__value(text) {
  if (text.length === 0) {
    return _M0DTP49poipoiiii9moonsheet3lib5types5Value5Blank__;
  }
  const upper = _M0FP49poipoiiii9moonsheet3lib2io13upper__string(text);
  if (upper === "TRUE") {
    return _M0FP49poipoiiii9moonsheet3lib2io12parse__valueN6constrS3448;
  }
  if (upper === "FALSE") {
    return _M0FP49poipoiiii9moonsheet3lib2io12parse__valueN6constrS3449;
  }
  let _try_err;
  _L: {
    const _bind = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(text, 0, text.length));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTP49poipoiiii9moonsheet3lib5types5Value6Number(_tmp);
  }
  return new _M0DTP49poipoiiii9moonsheet3lib5types5Value4Text(text);
}
function _M0FP49poipoiiii9moonsheet3lib2io18parse__cell__value(text) {
  return _M0FP49poipoiiii9moonsheet3lib2io12parse__value(_M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(text, undefined)));
}
function _M0FP49poipoiiii9moonsheet3lib2io9load__csv(sheet, text) {
  const rows = _M0FP49poipoiiii9moonsheet3lib2io10parse__csv(text);
  let row_index = 0;
  const _bind = rows.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const row = rows[_];
      let column_index = 0;
      const _bind$2 = row.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$2) {
          const cell = row[_$2];
          const address = _M0MP49poipoiiii9moonsheet3lib5types7Address3new(row_index, column_index);
          const a1 = _M0MP49poipoiiii9moonsheet3lib5types7Address6to__a1(address);
          const trimmed = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(cell, undefined));
          if (trimmed.length > 0 && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC16string6String9get__char(trimmed, 0), _M0FP49poipoiiii9moonsheet3lib2io9load__csvN6constrS3455)) {
            _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(sheet, a1, trimmed);
          } else {
            _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, a1, _M0FP49poipoiiii9moonsheet3lib2io12parse__value(trimmed));
          }
          column_index = column_index + 1 | 0;
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      row_index = row_index + 1 | 0;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return rows.length;
}
function _M0FP49poipoiiii9moonsheet3lib2io14contains__char(text, target) {
  const _bind = _M0MPC16string6String9to__array(text);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const c = _bind[_];
      if (c === target) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP49poipoiiii9moonsheet3lib2io11escape__csv(text) {
  if (_M0FP49poipoiiii9moonsheet3lib2io14contains__char(text, 44) || (_M0FP49poipoiiii9moonsheet3lib2io14contains__char(text, 34) || (_M0FP49poipoiiii9moonsheet3lib2io14contains__char(text, 10) || _M0FP49poipoiiii9moonsheet3lib2io14contains__char(text, 13)))) {
    let out = "\"";
    const _bind = _M0MPC16string6String9to__array(text);
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const c = _bind[_];
        if (c === 34) {
          out = `${out}\"\"`;
        } else {
          out = `${out}${_M0IPC14char4CharPB4Show10to__string(c)}`;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return `${out}\"`;
  } else {
    return text;
  }
}
function _M0FP49poipoiiii9moonsheet3lib2io11export__csv(sheet, rows, cols) {
  let out = "";
  let row = 0;
  while (true) {
    if (row < rows) {
      let col = 0;
      while (true) {
        if (col < cols) {
          if (col > 0) {
            out = `${out},`;
          }
          const address = _M0MP49poipoiiii9moonsheet3lib5types7Address3new(row, col);
          out = `${out}${_M0FP49poipoiiii9moonsheet3lib2io11escape__csv(_M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(_M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10get__value(sheet, _M0MP49poipoiiii9moonsheet3lib5types7Address6to__a1(address))))}`;
          col = col + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      out = `${out}\n`;
      row = row + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP49poipoiiii9moonsheet3lib2io17export__csv__auto(sheet) {
  const entries = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet7entries(sheet);
  let max_row = 1;
  let max_col = 1;
  const _bind = entries.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const entry = entries[_];
      const _bind$2 = _M0MP49poipoiiii9moonsheet3lib5types7Address5parse(entry._0);
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _addr = _Some;
        if ((_addr.row + 1 | 0) > max_row) {
          max_row = _addr.row + 1 | 0;
        }
        if ((_addr.col + 1 | 0) > max_col) {
          max_col = _addr.col + 1 | 0;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP49poipoiiii9moonsheet3lib2io11export__csv(sheet, max_row, max_col);
}
function _M0FP39poipoiiii9moonsheet3web19make__sample__sheet() {
  const workbook = _M0MP49poipoiiii9moonsheet3lib8workbook8Workbook3new();
  const sheet = _M0MP49poipoiiii9moonsheet3lib8workbook8Workbook10add__sheet(workbook, "Sheet1");
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "A1", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3506);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "B1", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3507);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "C1", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3508);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "D1", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3509);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "E1", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3510);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "A2", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3511);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "B2", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3512);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "C2", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3513);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(sheet, "D2", "=B2*C2");
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "E2", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3514);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "A3", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3515);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "B3", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3516);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "C3", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3517);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(sheet, "D3", "=B3*C3");
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "E3", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3518);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "A4", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3519);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "B4", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3520);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "C4", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3521);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(sheet, "D4", "=B4*C4");
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "E4", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3522);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "A6", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3523);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(sheet, "D6", "=SUM(D2:D4)");
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(sheet, "E6", "=IF(D8>1000,\"over\",\"ok\")");
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "A7", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3524);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(sheet, "D7", "=D6*0.08");
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(sheet, "E7", "=COUNTIF(C2:C4,\">1\")");
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(sheet, "A8", _M0FP39poipoiiii9moonsheet3web19make__sample__sheetN6constrS3525);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(sheet, "D8", "=D6+D7");
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(sheet, "E8", "=ROUND(D8,2)");
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet11recalculate(sheet);
  return sheet;
}
function _M0FP39poipoiiii9moonsheet3web9make__app() {
  return new _M0TP39poipoiiii9moonsheet3web3App(_M0FP39poipoiiii9moonsheet3web19make__sample__sheet(), 0, 0, 1, 20, 8);
}
function _M0FP39poipoiiii9moonsheet3web4join(items, separator) {
  let out = "";
  let i = 0;
  while (true) {
    if (i < items.length) {
      if (i > 0) {
        out = `${out}${separator}`;
      }
      out = `${out}${_M0MPC15array5Array2atGsE(items, i)}`;
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP39poipoiiii9moonsheet3web8kind__of(value) {
  switch (value.$tag) {
    case 0: {
      return "num";
    }
    case 1: {
      return "text";
    }
    case 2: {
      return "bool";
    }
    case 3: {
      return "date";
    }
    case 4: {
      return "error";
    }
    default: {
      return "empty";
    }
  }
}
function _M0MP39poipoiiii9moonsheet3web3App6render(self) {
  const selected = _M0MP49poipoiiii9moonsheet3lib5types7Address6to__a1(_M0MP49poipoiiii9moonsheet3lib5types7Address3new(self.selected_row, self.selected_col));
  const dependencies = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12dependencies(self.sheet, selected);
  const _bind = [];
  const dep_map = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind, 0, 0), _M0MP39poipoiiii9moonsheet3web3App6renderN6constrS3534);
  const _bind$2 = dependencies.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const dep = dependencies[_];
      _M0MPB3Map3setGsbE(dep_map, dep, true);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let row = 0;
  while (true) {
    if (row < self.rows) {
      let col = 0;
      while (true) {
        if (col < self.cols) {
          const a1 = _M0MP49poipoiiii9moonsheet3lib5types7Address6to__a1(_M0MP49poipoiiii9moonsheet3lib5types7Address3new(row, col));
          const value = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10get__value(self.sheet, a1);
          const _bind$3 = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12get__formula(self.sheet, a1);
          let formula;
          if (_bind$3 === undefined) {
            formula = "";
          } else {
            const _Some = _bind$3;
            formula = _Some;
          }
          let text;
          if (value.$tag === 5) {
            text = "";
          } else {
            text = _M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(value);
          }
          const _bind$4 = _M0MPB3Map3getGsbE(dep_map, a1);
          const dependency = !(_bind$4 === -1);
          const is_selected = row === self.selected_row && col === self.selected_col;
          _M0FP39poipoiiii9moonsheet3web16js__render__cell(row, col, text, _M0FP39poipoiiii9moonsheet3web8kind__of(value), formula, is_selected, dependency);
          col = col + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      row = row + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const selected_value = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10get__value(self.sheet, selected);
  const _bind$3 = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12get__formula(self.sheet, selected);
  let selected_formula;
  if (_bind$3 === undefined) {
    selected_formula = "";
  } else {
    const _Some = _bind$3;
    selected_formula = _Some;
  }
  let bar;
  const _p = "";
  if (!(selected_formula === _p)) {
    bar = selected_formula;
  } else {
    bar = _M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(selected_value);
  }
  _M0FP39poipoiiii9moonsheet3web16js__set__formula(bar);
  _M0FP39poipoiiii9moonsheet3web24js__set__selected__label(selected);
  _M0FP39poipoiiii9moonsheet3web21js__set__dependencies(_M0FP39poipoiiii9moonsheet3web4join(dependencies, ", "));
  _M0FP39poipoiiii9moonsheet3web22js__set__cell__details(_M0MP49poipoiiii9moonsheet3lib5types5Value11to__display(selected_value), selected_formula);
  _M0FP39poipoiiii9moonsheet3web15js__set__status("Ready · click a cell, edit the formula bar, press Enter");
  _M0FP39poipoiiii9moonsheet3web22js__set__engine__state("ready");
  _M0FP39poipoiiii9moonsheet3web22js__set__recalc__count(self.recalc_count);
  const entries = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet7entries(self.sheet);
  let formula_count = 0;
  const _bind$4 = entries.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const entry = entries[_];
      const _bind$5 = entry._1;
      if (_bind$5 === undefined) {
      } else {
        formula_count = formula_count + 1 | 0;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, entries.length);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " populated cells · ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, formula_count);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " formulas");
  _M0FP39poipoiiii9moonsheet3web14js__set__stats(_string_builder.val);
}
function _M0MP39poipoiiii9moonsheet3web3App6select(self, row, col) {
  if (row >= 0 && (row < self.rows && (col >= 0 && col < self.cols))) {
    self.selected_row = row;
    self.selected_col = col;
    _M0MP39poipoiiii9moonsheet3web3App6render(self);
    return;
  } else {
    return;
  }
}
function _M0MP39poipoiiii9moonsheet3web3App6commit(self, text) {
  const a1 = _M0MP49poipoiiii9moonsheet3lib5types7Address6to__a1(_M0MP49poipoiiii9moonsheet3lib5types7Address3new(self.selected_row, self.selected_col));
  const trimmed = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(text, undefined));
  if (trimmed.length === 0) {
    _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(self.sheet, a1, _M0DTP49poipoiiii9moonsheet3lib5types5Value5Blank__);
  } else {
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC16string6String9get__char(trimmed, 0), _M0MP39poipoiiii9moonsheet3web3App6commitN6constrS3573)) {
      _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet12set__formula(self.sheet, a1, trimmed);
    } else {
      _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet10set__value(self.sheet, a1, _M0FP49poipoiiii9moonsheet3lib2io18parse__cell__value(trimmed));
    }
  }
  const changed = _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet11recalculate(self.sheet);
  self.recalc_count = self.recalc_count + 1 | 0;
  _M0MP39poipoiiii9moonsheet3web3App6render(self);
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Recalculated ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, changed);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " formula cell(s)");
  _M0FP39poipoiiii9moonsheet3web9js__toast(_string_builder.val);
}
function _M0MP39poipoiiii9moonsheet3web3App9load__csv(self, text) {
  const workbook = _M0MP49poipoiiii9moonsheet3lib8workbook8Workbook3new();
  const sheet = _M0MP49poipoiiii9moonsheet3lib8workbook8Workbook10add__sheet(workbook, "Sheet1");
  _M0FP49poipoiiii9moonsheet3lib2io9load__csv(sheet, text);
  _M0MP49poipoiiii9moonsheet3lib8workbook5Sheet11recalculate(sheet);
  self.sheet = sheet;
  self.selected_row = 0;
  self.selected_col = 0;
  self.recalc_count = self.recalc_count + 1 | 0;
  _M0MP39poipoiiii9moonsheet3web3App6render(self);
  _M0FP39poipoiiii9moonsheet3web9js__toast("CSV loaded");
}
function _M0MP39poipoiiii9moonsheet3web3App5reset(self) {
  self.sheet = _M0FP39poipoiiii9moonsheet3web19make__sample__sheet();
  self.selected_row = 0;
  self.selected_col = 0;
  self.recalc_count = self.recalc_count + 1 | 0;
  _M0MP39poipoiiii9moonsheet3web3App6render(self);
  _M0FP39poipoiiii9moonsheet3web9js__toast("Sample sheet restored");
}
function _M0MP39poipoiiii9moonsheet3web3App11export__csv(self) {
  _M0FP39poipoiiii9moonsheet3web17js__download__csv(_M0FP49poipoiiii9moonsheet3lib2io17export__csv__auto(self.sheet));
  _M0FP39poipoiiii9moonsheet3web9js__toast("CSV exported");
}
(() => {
  _M0FP39poipoiiii9moonsheet3web14js__init__grid(_M0FP39poipoiiii9moonsheet3web3app.rows, _M0FP39poipoiiii9moonsheet3web3app.cols);
  _M0FP39poipoiiii9moonsheet3web17js__set__on__cell((row, col) => {
    _M0MP39poipoiiii9moonsheet3web3App6select(_M0FP39poipoiiii9moonsheet3web3app, row, col);
  });
  _M0FP39poipoiiii9moonsheet3web19js__set__on__commit((text) => {
    _M0MP39poipoiiii9moonsheet3web3App6commit(_M0FP39poipoiiii9moonsheet3web3app, text);
  });
  _M0FP39poipoiiii9moonsheet3web16js__set__on__csv((text) => {
    _M0MP39poipoiiii9moonsheet3web3App9load__csv(_M0FP39poipoiiii9moonsheet3web3app, text);
  });
  _M0FP39poipoiiii9moonsheet3web17js__bind__actions(() => {
    _M0MP39poipoiiii9moonsheet3web3App5reset(_M0FP39poipoiiii9moonsheet3web3app);
  }, () => {
    _M0MP39poipoiiii9moonsheet3web3App11export__csv(_M0FP39poipoiiii9moonsheet3web3app);
  });
  _M0MP39poipoiiii9moonsheet3web3App6render(_M0FP39poipoiiii9moonsheet3web3app);
})();
