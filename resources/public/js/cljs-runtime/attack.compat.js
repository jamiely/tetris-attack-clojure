goog.provide('attack.compat');
attack.compat.log = (function attack$compat$log(msg){
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg));
});
attack.compat.compat_read_string = (function attack$compat$compat_read_string(val){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(val);
});
attack.compat.zip = (function attack$compat$zip(p__23416,p__23417){
var vec__23418 = p__23416;
var seq__23419 = cljs.core.seq(vec__23418);
var first__23420 = cljs.core.first(seq__23419);
var seq__23419__$1 = cljs.core.next(seq__23419);
var a = first__23420;
var as = seq__23419__$1;
var vec__23421 = p__23417;
var seq__23422 = cljs.core.seq(vec__23421);
var first__23423 = cljs.core.first(seq__23422);
var seq__23422__$1 = cljs.core.next(seq__23422);
var b = first__23423;
var bs = seq__23422__$1;
if((((a == null)) || ((b == null)))){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),(attack.compat.zip.cljs$core$IFn$_invoke$arity$2 ? attack.compat.zip.cljs$core$IFn$_invoke$arity$2(as,bs) : attack.compat.zip.call(null, as,bs)));
}
});
attack.compat.length = (function attack$compat$length(str){
return str.length;
});
attack.compat.pow = (function attack$compat$pow(base,exp){
return Math.pow(base,exp);
});
attack.compat.hex_multipliers = (function attack$compat$hex_multipliers(len){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.compat.pow,(16)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),len)));
});
attack.compat.int_digit_to_hex = (function attack$compat$int_digit_to_hex(int_dig){
var G__23466 = int_dig;
switch (G__23466) {
case "15":
return "F";

break;
case "14":
return "E";

break;
case "13":
return "D";

break;
case "12":
return "C";

break;
case "11":
return "B";

break;
case "10":
return "A";

break;
case "9":
return "9";

break;
case "8":
return "8";

break;
case "7":
return "7";

break;
case "6":
return "6";

break;
case "5":
return "5";

break;
case "4":
return "4";

break;
case "3":
return "3";

break;
case "2":
return "2";

break;
case "1":
return "1";

break;
case "0":
return "0";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23466)].join('')));

}
});
attack.compat.hex_digit_to_int = (function attack$compat$hex_digit_to_int(hex_dig){
var G__23468 = hex_dig;
switch (G__23468) {
case "F":
return (15);

break;
case "E":
return (14);

break;
case "D":
return (13);

break;
case "C":
return (12);

break;
case "B":
return (11);

break;
case "A":
return (10);

break;
case "9":
return (9);

break;
case "8":
return (8);

break;
case "7":
return (7);

break;
case "6":
return (6);

break;
case "5":
return (5);

break;
case "4":
return (4);

break;
case "3":
return (3);

break;
case "2":
return (2);

break;
case "1":
return (1);

break;
case "0":
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23468)].join('')));

}
});
attack.compat.hex_to_int = (function attack$compat$hex_to_int(hex_str){
var l = attack.compat.length(hex_str);
var mults = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(attack.compat.hex_multipliers(l));
var hex_digits = cljs.core.reverse(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.compat.hex_digit_to_int,hex_str)));
var parts = attack.compat.zip(mults,hex_digits);
var vals = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23469){
var vec__23470 = p__23469;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23470,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23470,(1),null);
return (a * b);
}),parts));
var sum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,vals);
return sum;
});
attack.compat.int_to_hex = (function attack$compat$int_to_hex(i){
var a = ((i / (16)) | (0));
var b = cljs.core.mod(i,(16));
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(attack.compat.int_digit_to_hex,cljs.core.str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
});

//# sourceMappingURL=attack.compat.js.map
