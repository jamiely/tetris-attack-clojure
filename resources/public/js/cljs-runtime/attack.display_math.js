goog.provide('attack.display_math');
attack.display_math.pt_to_display_pt = (function attack$display_math$pt_to_display_pt(p__23338,p__23339){
var map__23340 = p__23338;
var map__23340__$1 = cljs.core.__destructure_map(map__23340);
var total_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23340__$1,new cljs.core.Keyword(null,"total-rows","total-rows",1745495528));
var bheight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23340__$1,new cljs.core.Keyword(null,"block-height","block-height",-365634550));
var bwidth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23340__$1,new cljs.core.Keyword(null,"block-width","block-width",-566982330));
var dheight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23340__$1,new cljs.core.Keyword(null,"display-height","display-height",-457959203));
var vec__23341 = p__23339;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23341,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23341,(1),null);
var diff = (total_rows - y);
var adj_y = ((diff + (1)) * bheight);
var y__$1 = (dheight - adj_y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x * bwidth),y__$1], null);
});

//# sourceMappingURL=attack.display_math.js.map
