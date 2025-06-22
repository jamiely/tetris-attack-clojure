goog.provide('attack.tick');
attack.tick.ticks0_QMARK_ = (function attack$tick$ticks0_QMARK_(p__21442){
var map__21443 = p__21442;
var map__21443__$1 = cljs.core.__destructure_map(map__21443);
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21443__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313));
return (((!((ticks == null)))) && ((ticks === (0))));
});
attack.tick.dec_ticks = (function attack$tick$dec_ticks(p__21452){
var map__21453 = p__21452;
var map__21453__$1 = cljs.core.__destructure_map(map__21453);
var thing = map__21453__$1;
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21453__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313));

if((ticks == null)){
return thing;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(thing,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(ticks - (1)));
}
});

//# sourceMappingURL=attack.tick.js.map
