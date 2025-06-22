goog.provide('attack.point');
attack.point.point = (function attack$point$point(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
attack.point.point_add = (function attack$point$point_add(p__21444,p__21445){
var vec__21446 = p__21444;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,(1),null);
var vec__21449 = p__21445;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21449,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21449,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
attack.point.up = (function attack$point$up(){
return attack.point.point((0),(-1));
});
attack.point.down = (function attack$point$down(){
return attack.point.point((0),(1));
});
attack.point.left = (function attack$point$left(){
return attack.point.point((-1),(0));
});
attack.point.right = (function attack$point$right(){
return attack.point.point((1),(0));
});
attack.point.above = (function attack$point$above(pt){
return attack.point.point_add(pt,attack.point.up());
});
attack.point.below = (function attack$point$below(pt){
return attack.point.point_add(pt,attack.point.down());
});
attack.point.after = (function attack$point$after(pt){
return attack.point.point_add(pt,attack.point.right());
});
attack.point.before = (function attack$point$before(pt){
return attack.point.point_add(pt,attack.point.left());
});
attack.point.horizontal = (function attack$point$horizontal(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack.point.left(),attack.point.right()], null);
});
attack.point.vertical = (function attack$point$vertical(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack.point.down(),attack.point.up()], null);
});
attack.point.directions = (function attack$point$directions(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attack.point.horizontal(),attack.point.vertical());
});

//# sourceMappingURL=attack.point.js.map
