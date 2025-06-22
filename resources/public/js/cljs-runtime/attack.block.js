goog.provide('attack.block');
attack.block.types = (function attack$block$types(){

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#996633","#FFFF00","#FF6699","#00FFFF","#00FF00","#9900CC","#FF0000"], null);
});
attack.block.rand_type = (function attack$block$rand_type(){

return cljs.core.rand_nth(attack.block.types());
});
attack.block.new_simple = (function attack$block$new_simple(pos,type){

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"position","position",-2011731912),pos], null);
});
attack.block.new_complex = (function attack$block$new_complex(blocks){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks], null);
});
attack.block.swap_block_default_ticks = (function attack$block$swap_block_default_ticks(){
return (5);
});
attack.block.new_swap = (function attack$block$new_swap(a,b){

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.Keyword(null,"ticks","ticks",-406190313),attack.block.swap_block_default_ticks(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"swap","swap",228675637)], null);
});
attack.block.new_swap_empty = (function attack$block$new_swap_empty(blk,pos){

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"swap-empty","swap-empty",925625243),new cljs.core.Keyword(null,"block","block",664686210),blk,new cljs.core.Keyword(null,"into-position","into-position",110701399),pos,new cljs.core.Keyword(null,"ticks","ticks",-406190313),attack.block.swap_block_default_ticks()], null);
});
attack.block.new_garbage = (function attack$block$new_garbage(position,length,height){

var simple = (function (x,y){

attack.point.point(x,y);

return new cljs.core.Keyword(null,"black","black",1294279647);
});
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"garbage","garbage",-2063107600),new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"length","length",588987862),length,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
});
attack.block.dissolve_block_default_ticks = (function attack$block$dissolve_block_default_ticks(block){
return (30);
});
attack.block.garbage_block_points = (function attack$block$garbage_block_points(p__21670){
var map__21671 = p__21670;
var map__21671__$1 = cljs.core.__destructure_map(map__21671);
var block = map__21671__$1;
var vec__21672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21672,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21672,(1),null);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"length","length",588987862));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var iter__5480__auto__ = (function attack$block$garbage_block_points_$_iter__21676(s__21677){
return (new cljs.core.LazySeq(null,(function (){
var s__21677__$1 = s__21677;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21677__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var x = cljs.core.first(xs__6385__auto__);
var iterys__5476__auto__ = ((function (s__21677__$1,x,xs__6385__auto__,temp__5825__auto__,map__21671,map__21671__$1,block,vec__21672,ox,oy,length,height){
return (function attack$block$garbage_block_points_$_iter__21676_$_iter__21678(s__21679){
return (new cljs.core.LazySeq(null,((function (s__21677__$1,x,xs__6385__auto__,temp__5825__auto__,map__21671,map__21671__$1,block,vec__21672,ox,oy,length,height){
return (function (){
var s__21679__$1 = s__21679;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21679__$1);
if(temp__5825__auto____$1){
var s__21679__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21679__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21679__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21681 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21680 = (0);
while(true){
if((i__21680 < size__5479__auto__)){
var y = cljs.core._nth(c__5478__auto__,i__21680);
cljs.core.chunk_append(b__21681,attack.point.point((ox + x),(oy - y)));

var G__21906 = (i__21680 + (1));
i__21680 = G__21906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21681),attack$block$garbage_block_points_$_iter__21676_$_iter__21678(cljs.core.chunk_rest(s__21679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21681),null);
}
} else {
var y = cljs.core.first(s__21679__$2);
return cljs.core.cons(attack.point.point((ox + x),(oy - y)),attack$block$garbage_block_points_$_iter__21676_$_iter__21678(cljs.core.rest(s__21679__$2)));
}
} else {
return null;
}
break;
}
});})(s__21677__$1,x,xs__6385__auto__,temp__5825__auto__,map__21671,map__21671__$1,block,vec__21672,ox,oy,length,height))
,null,null));
});})(s__21677__$1,x,xs__6385__auto__,temp__5825__auto__,map__21671,map__21671__$1,block,vec__21672,ox,oy,length,height))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),height)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,attack$block$garbage_block_points_$_iter__21676(cljs.core.rest(s__21677__$1)));
} else {
var G__21907 = cljs.core.rest(s__21677__$1);
s__21677__$1 = G__21907;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),length));
});
attack.block.new_dissolve = (function attack$block$new_dissolve(block){
var ticks = attack.block.dissolve_block_default_ticks(block);
var pending_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21690_SHARP_){
return attack.block.new_simple(p1__21690_SHARP_,attack.block.rand_type());
}),attack.block.garbage_block_points(block));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dissolve","dissolve",-629896345),new cljs.core.Keyword(null,"garbage-block","garbage-block",-541624028),block,new cljs.core.Keyword(null,"ticks","ticks",-406190313),ticks,new cljs.core.Keyword(null,"pending-blocks","pending-blocks",-1663234721),pending_blocks,new cljs.core.Keyword(null,"starting-ticks","starting-ticks",-829737896),ticks], null);
});
attack.block.resolve_dissolve = (function attack$block$resolve_dissolve(p__21792){
var map__21795 = p__21792;
var map__21795__$1 = cljs.core.__destructure_map(map__21795);
var block = map__21795__$1;
var pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21795__$1,new cljs.core.Keyword(null,"pending-blocks","pending-blocks",-1663234721));
if(attack.tick.ticks0_QMARK_(block)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,pending);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([block]);
}
});
attack.block.new_disappear = (function attack$block$new_disappear(blocks){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attack.block.new_complex(blocks),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ticks","ticks",-406190313),(15),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"disappear","disappear",-2047879521)], null)], 0));
});
attack.block.falling_block_default_ticks = (function attack$block$falling_block_default_ticks(){
return (5);
});
attack.block.new_falling = (function attack$block$new_falling(p__21815){
var map__21819 = p__21815;
var map__21819__$1 = cljs.core.__destructure_map(map__21819);
var block = map__21819__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21819__$1,new cljs.core.Keyword(null,"position","position",-2011731912));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"falling","falling",-1681942569),new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"ticks","ticks",-406190313),attack.block.falling_block_default_ticks(),new cljs.core.Keyword(null,"falling-to","falling-to",-978995383),attack.point.below(pos)], null);
});
attack.block.compare_type_QMARK_ = (function attack$block$compare_type_QMARK_(p__21821,compare_type){
var map__21822 = p__21821;
var map__21822__$1 = cljs.core.__destructure_map(map__21822);
var block_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21822__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_type,compare_type);
});
attack.block.falling_QMARK_ = (function attack$block$falling_QMARK_(blk){
return attack.block.compare_type_QMARK_(blk,new cljs.core.Keyword(null,"falling","falling",-1681942569));
});
attack.block.dissolve_QMARK_ = (function attack$block$dissolve_QMARK_(blk){
return attack.block.compare_type_QMARK_(blk,new cljs.core.Keyword(null,"dissolve","dissolve",-629896345));
});
attack.block.swap_empty_QMARK_ = (function attack$block$swap_empty_QMARK_(blk){
return attack.block.compare_type_QMARK_(blk,new cljs.core.Keyword(null,"swap-empty","swap-empty",925625243));
});
attack.block.garbage_QMARK_ = (function attack$block$garbage_QMARK_(block){
return attack.block.compare_type_QMARK_(block,new cljs.core.Keyword(null,"garbage","garbage",-2063107600));
});
attack.block.simple_QMARK_ = (function attack$block$simple_QMARK_(blk){
return ((cljs.core.contains_QMARK_(blk,new cljs.core.Keyword(null,"position","position",-2011731912))) && ((((!(attack.block.garbage_QMARK_(blk)))) && ((!(attack.block.falling_QMARK_(blk)))))));
});
attack.block.disappear_QMARK_ = (function attack$block$disappear_QMARK_(block){
return attack.block.compare_type_QMARK_(block,new cljs.core.Keyword(null,"disappear","disappear",-2047879521));
});
attack.block.unwrap_falling = (function attack$block$unwrap_falling(p__21823){
var map__21827 = p__21823;
var map__21827__$1 = cljs.core.__destructure_map(map__21827);
var block = map__21827__$1;
var inner_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21827__$1,new cljs.core.Keyword(null,"block","block",664686210));
var fall_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21827__$1,new cljs.core.Keyword(null,"falling-to","falling-to",-978995383));

if(attack.block.falling_QMARK_(block)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inner_block,new cljs.core.Keyword(null,"position","position",-2011731912),fall_to);
} else {
return block;
}
});
attack.block.should_resolve_falling_QMARK_ = (function attack$block$should_resolve_falling_QMARK_(p__21828){
var map__21830 = p__21828;
var map__21830__$1 = cljs.core.__destructure_map(map__21830);
var block = map__21830__$1;
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21830__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313));

return attack.tick.ticks0_QMARK_(block);
});
attack.block.resolve_falling = (function attack$block$resolve_falling(p__21831){
var map__21832 = p__21831;
var map__21832__$1 = cljs.core.__destructure_map(map__21832);
var block = map__21832__$1;
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21832__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313));

return attack.block.unwrap_falling(block);
});
attack.block.should_resolve_swap_empty_QMARK_ = (function attack$block$should_resolve_swap_empty_QMARK_(p__21840){
var map__21841 = p__21840;
var map__21841__$1 = cljs.core.__destructure_map(map__21841);
var block = map__21841__$1;
var inner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21841__$1,new cljs.core.Keyword(null,"block","block",664686210));
var into_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21841__$1,new cljs.core.Keyword(null,"into-position","into-position",110701399));
return ((attack.tick.ticks0_QMARK_(block)) && (attack.block.swap_empty_QMARK_(block)));
});
attack.block.resolve_swap_empty = (function attack$block$resolve_swap_empty(p__21842){
var map__21843 = p__21842;
var map__21843__$1 = cljs.core.__destructure_map(map__21843);
var block = map__21843__$1;
var inner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21843__$1,new cljs.core.Keyword(null,"block","block",664686210));
var into_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21843__$1,new cljs.core.Keyword(null,"into-position","into-position",110701399));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inner,new cljs.core.Keyword(null,"position","position",-2011731912),into_pos);
});
attack.block.swap_QMARK_ = (function attack$block$swap_QMARK_(p__21848){
var map__21852 = p__21848;
var map__21852__$1 = cljs.core.__destructure_map(map__21852);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21852__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"swap","swap",228675637));
});
attack.block.blocks_swap_BANG_ = (function attack$block$blocks_swap_BANG_(p__21856){
var vec__21857 = p__21856;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21857,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21857,(1),null);
var map__21860 = a;
var map__21860__$1 = cljs.core.__destructure_map(map__21860);
var a_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21860__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var map__21861 = b;
var map__21861__$1 = cljs.core.__destructure_map(map__21861);
var b_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21861__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"position","position",-2011731912),b_pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword(null,"position","position",-2011731912),a_pos)], null);
});
attack.block.should_resolve_swap_QMARK_ = (function attack$block$should_resolve_swap_QMARK_(blk){
return ((attack.block.swap_QMARK_(blk)) && (attack.tick.ticks0_QMARK_(blk)));
});
attack.block.resolve_swaps = (function attack$block$resolve_swaps(blocks){

return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (blk){
if(((attack.block.swap_QMARK_(blk)) && (attack.tick.ticks0_QMARK_(blk)))){
return attack.block.blocks_swap_BANG_(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(blk));
} else {
return blk;
}
}),blocks));
});
attack.block.same_type_QMARK_ = (function attack$block$same_type_QMARK_(p__21863,p__21864){
var map__21865 = p__21863;
var map__21865__$1 = cljs.core.__destructure_map(map__21865);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21865__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__21866 = p__21864;
var map__21866__$1 = cljs.core.__destructure_map(map__21866);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21866__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
});

//# sourceMappingURL=attack.block.js.map
