goog.provide('attack.color');
attack.color.no_hash = (function attack$color$no_hash(color_str){
return clojure.string.replace_first(color_str,"#","");
});
attack.color.color_parts = (function attack$color$color_parts(color_str){

return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),attack.color.no_hash(color_str)));
});
attack.color.hex_to_int = (function attack$color$hex_to_int(hex_val){
return attack.compat.hex_to_int(hex_val);
});
attack.color.color_values = (function attack$color$color_values(color_str){

return cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.color.hex_to_int,attack.color.color_parts(color_str));
});
attack.color.color_parts_to_str = (function attack$color$color_parts_to_str(color_parts){

return ["#",clojure.string.upper_case(clojure.string.join.cljs$core$IFn$_invoke$arity$1(color_parts))].join('');
});
attack.color.color_values_to_str = (function attack$color$color_values_to_str(color_values){

return attack.color.color_parts_to_str(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.compat.int_to_hex,color_values));
});
attack.color.increase_value_by_pct_with_cap = (function attack$color$increase_value_by_pct_with_cap(val,pct,cap){
var x__5090__auto__ = (((1) + pct) * (val + (100)));
var y__5091__auto__ = cap;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
});
attack.color.brighten_values = (function attack$color$brighten_values(color_vals,pct){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23475_SHARP_){
return attack.color.increase_value_by_pct_with_cap(p1__23475_SHARP_,pct,(255));
}),color_vals));
});
attack.color.brighten = (function attack$color$brighten(color_str,pct){
return attack.color.color_values_to_str(attack.color.brighten_values(attack.color.color_values(color_str),pct));
});

//# sourceMappingURL=attack.color.js.map
