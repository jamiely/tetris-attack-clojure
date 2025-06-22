goog.provide('attack.grid');
attack.grid.empty_grid = (function attack$grid$empty_grid(cols){

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"cols","cols",-1914801295),cols,new cljs.core.Keyword(null,"blocks-hash","blocks-hash",2054019079),cljs.core.PersistentArrayMap.EMPTY], null);
});
attack.grid.replace_blocks = (function attack$grid$replace_blocks(grid,replacement_blocks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grid,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,replacement_blocks));
});
attack.grid.block_points = (function attack$grid$block_points(block){

if(attack.block.garbage_QMARK_(block)){
return attack.block.garbage_block_points(block);
} else {
if(((attack.block.swap_QMARK_(block)) || (attack.block.disappear_QMARK_(block)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.grid.block_points,new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(block)));
} else {
if(attack.block.swap_empty_QMARK_(block)){
return cljs.core.cons(new cljs.core.Keyword(null,"into-position","into-position",110701399).cljs$core$IFn$_invoke$arity$1(block),(function (){var G__34130 = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(block);
return (attack.grid.block_points.cljs$core$IFn$_invoke$arity$1 ? attack.grid.block_points.cljs$core$IFn$_invoke$arity$1(G__34130) : attack.grid.block_points.call(null, G__34130));
})());
} else {
if(attack.block.dissolve_QMARK_(block)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.grid.block_points,new cljs.core.Keyword(null,"pending-blocks","pending-blocks",-1663234721).cljs$core$IFn$_invoke$arity$1(block)));
} else {
if(cljs.core.contains_QMARK_(block,new cljs.core.Keyword(null,"position","position",-2011731912))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(block)], null);
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
}
}
}
});
attack.grid.hash_blocks = (function attack$grid$hash_blocks(p__34133,blocks){
var map__34134 = p__34133;
var map__34134__$1 = cljs.core.__destructure_map(map__34134);
var grid = map__34134__$1;
var blocks_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34134__$1,new cljs.core.Keyword(null,"blocks-hash","blocks-hash",2054019079));
var new_hash = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mem,blk){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (in_mem,pos){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in_mem,pos,blk);
}),mem,attack.grid.block_points(blk));
}),blocks_hash,blocks);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grid,new cljs.core.Keyword(null,"blocks-hash","blocks-hash",2054019079),new_hash);
});
attack.grid.unhash_blocks = (function attack$grid$unhash_blocks(p__34135,blocks){
var map__34136 = p__34135;
var map__34136__$1 = cljs.core.__destructure_map(map__34136);
var grid = map__34136__$1;
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34136__$1,new cljs.core.Keyword(null,"blocks-hash","blocks-hash",2054019079));
var positions = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.grid.block_points,blocks));
var new_h = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mem,pos){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(mem,pos);
}),h,positions);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grid,new cljs.core.Keyword(null,"blocks-hash","blocks-hash",2054019079),new_h);
});
attack.grid.add_blocks = (function attack$grid$add_blocks(p__34137,new_blocks){
var map__34138 = p__34137;
var map__34138__$1 = cljs.core.__destructure_map(map__34138);
var grid = map__34138__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34138__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

return attack.grid.hash_blocks(attack.grid.replace_blocks(grid,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(blocks,new_blocks)),new_blocks);
});
attack.grid.remove_blocks = (function attack$grid$remove_blocks(p__34139,blks_to_remove){
var map__34140 = p__34139;
var map__34140__$1 = cljs.core.__destructure_map(map__34140);
var grid = map__34140__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34140__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

return attack.grid.unhash_blocks(attack.grid.replace_blocks(grid,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(blks_to_remove,blocks)),blks_to_remove);
});
attack.grid.remove_and_add_blocks = (function attack$grid$remove_and_add_blocks(grid,blocks_to_remove,blocks_to_add){
return attack.grid.add_blocks(attack.grid.remove_blocks(grid,blocks_to_remove),blocks_to_add);
});
attack.grid.all_simple_blocks = (function attack$grid$all_simple_blocks(p__34141){
var map__34142 = p__34141;
var map__34142__$1 = cljs.core.__destructure_map(map__34142);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34142__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.block.simple_QMARK_,blocks),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34144){
var map__34145 = p__34144;
var map__34145__$1 = cljs.core.__destructure_map(map__34145);
var blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34145__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if((blocks__$1 == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return blocks__$1;
}
}),blocks)));
});
attack.grid.simple_blocks_match_QMARK_ = (function attack$grid$simple_blocks_match_QMARK_(old,new$){
var blk_set = (function (p1__34147_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,attack.grid.all_simple_blocks(p1__34147_SHARP_));
});
var old_set = old;
var new_set = new$;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_set,new_set);
});
attack.grid.garbage_blocks = (function attack$grid$garbage_blocks(p__34151){
var map__34152 = p__34151;
var map__34152__$1 = cljs.core.__destructure_map(map__34152);
var grid = map__34152__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34152__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.block.garbage_QMARK_,blocks);
});
attack.grid.garbage_block_points = (function attack$grid$garbage_block_points(grid){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (all,blk){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all,attack.block.garbage_block_points(blk));
}),cljs.core.PersistentVector.EMPTY,attack.grid.garbage_blocks(grid));
});
attack.grid.garbage_block_points_set = (function attack$grid$garbage_block_points_set(grid){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,attack.grid.garbage_block_points(grid));
});
attack.grid.swap_empty_points = (function attack$grid$swap_empty_points(p__34154){
var map__34155 = p__34154;
var map__34155__$1 = cljs.core.__destructure_map(map__34155);
var grid = map__34155__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34155__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34153_SHARP_){
return new cljs.core.Keyword(null,"into-position","into-position",110701399).cljs$core$IFn$_invoke$arity$1(p1__34153_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.block.swap_empty_QMARK_,blocks));
});
attack.grid.swap_empty_points_set = (function attack$grid$swap_empty_points_set(grid){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,attack.grid.swap_empty_points(grid));
});
attack.grid.simple_block_points = (function attack$grid$simple_block_points(grid){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34156_SHARP_){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__34156_SHARP_);
}),attack.grid.all_simple_blocks(grid));
});
attack.grid.simple_block_points_set = (function attack$grid$simple_block_points_set(grid){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,attack.grid.simple_block_points(grid));
});
attack.grid.all_occupied_pts_without_falling = (function attack$grid$all_occupied_pts_without_falling(p__34157){
var map__34158 = p__34157;
var map__34158__$1 = cljs.core.__destructure_map(map__34158);
var grid = map__34158__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34158__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(attack.grid.simple_block_points(grid),attack.grid.swap_empty_points(grid),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attack.grid.garbage_block_points(grid)], 0));
});
attack.grid.all_occupied_pts = (function attack$grid$all_occupied_pts(p__34159){
var map__34160 = p__34159;
var map__34160__$1 = cljs.core.__destructure_map(map__34160);
var grid = map__34160__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34160__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attack.grid.all_occupied_pts_without_falling(grid),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mem,p__34161){
var map__34162 = p__34161;
var map__34162__$1 = cljs.core.__destructure_map(map__34162);
var map__34163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34162__$1,new cljs.core.Keyword(null,"block","block",664686210));
var map__34163__$1 = cljs.core.__destructure_map(map__34163);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34163__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var fall_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34162__$1,new cljs.core.Keyword(null,"falling-to","falling-to",-978995383));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(mem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,fall_pos], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.block.falling_QMARK_,blocks)));
});
attack.grid.all_occupied_pts_without_falling_set = (function attack$grid$all_occupied_pts_without_falling_set(grid){
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(attack.grid.simple_block_points_set(grid),attack.grid.swap_empty_points_set(grid),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attack.grid.garbage_block_points_set(grid)], 0));
});
attack.grid.cache_occupied_blocks_BANG_ = (function attack$grid$cache_occupied_blocks_BANG_(p__34165){
var map__34166 = p__34165;
var map__34166__$1 = cljs.core.__destructure_map(map__34166);
var grid = map__34166__$1;
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34166__$1,new cljs.core.Keyword(null,"cache-clock","cache-clock",-908494309));
var fn_raw = (function (){
return attack.grid.all_occupied_pts_without_falling_set(grid);
});
var fn_cache = (function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grid,new cljs.core.Keyword(null,"cache-occupied","cache-occupied",-413696455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clock","clock",-894301127),clock,new cljs.core.Keyword(null,"occupied","occupied",-1962123949),fn_raw()], null));
});
var fn_clock = (function (){
return new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cache-occupied","cache-occupied",-413696455).cljs$core$IFn$_invoke$arity$1(grid));
});
if((((clock == null)) || ((((new cljs.core.Keyword(null,"cache-occupied","cache-occupied",-413696455).cljs$core$IFn$_invoke$arity$1(grid) == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clock,fn_clock())))))){
return fn_cache();
} else {
return grid;
}
});
attack.grid.cached_occupied_blocks = (function attack$grid$cached_occupied_blocks(grid){

var gr = attack.grid.cache_occupied_blocks_BANG_(grid);
return new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cache-occupied","cache-occupied",-413696455).cljs$core$IFn$_invoke$arity$1(gr));
});
attack.grid.occupied_at_without_falling_QMARK_ = (function attack$grid$occupied_at_without_falling_QMARK_(grid,point){
return cljs.core.contains_QMARK_(attack.grid.cached_occupied_blocks(grid),point);
});
attack.grid.occupied_at_QMARK_ = (function attack$grid$occupied_at_QMARK_(grid,point){
return cljs.core.contains_QMARK_(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,attack.grid.all_occupied_pts(grid)),point);
});
attack.grid.line_count = (function attack$grid$line_count(grid){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34171){
var vec__34172 = p__34171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34172,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34172,(1),null);
return y;
}),attack.grid.all_occupied_pts(grid))));
});
attack.grid.swap_empty = (function attack$grid$swap_empty(p__34175,replace_block,new_pos){
var map__34176 = p__34175;
var map__34176__$1 = cljs.core.__destructure_map(map__34176);
var grid = map__34176__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34176__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

if(attack.grid.occupied_at_QMARK_(grid,new_pos)){
return grid;
} else {
var new_block = attack.block.new_swap_empty(replace_block,new_pos);
return attack.grid.remove_and_add_blocks(grid,cljs.core.PersistentHashSet.createAsIfByAssoc([replace_block]),cljs.core.PersistentHashSet.createAsIfByAssoc([new_block]));
}
});
attack.grid.swap_blocks = (function attack$grid$swap_blocks(p__34177,a,b){
var map__34178 = p__34177;
var map__34178__$1 = cljs.core.__destructure_map(map__34178);
var grid = map__34178__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34178__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

if(cljs.core.every_QMARK_(attack.block.simple_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null))){
var swap_blk = attack.block.new_swap(a,b);
return attack.grid.remove_and_add_blocks(grid,cljs.core.PersistentHashSet.createAsIfByAssoc([a,b]),cljs.core.PersistentHashSet.createAsIfByAssoc([swap_blk]));
} else {
return grid;
}
});
attack.grid.block_at = (function attack$grid$block_at(p__34179,point){
var map__34180 = p__34179;
var map__34180__$1 = cljs.core.__destructure_map(map__34180);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34180__$1,new cljs.core.Keyword(null,"blocks-hash","blocks-hash",2054019079));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(h,point);
});
attack.grid.add_row = (function attack$grid$add_row(p__34182){
var map__34185 = p__34182;
var map__34185__$1 = cljs.core.__destructure_map(map__34185);
var grid = map__34185__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34185__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34185__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34185__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var new_last = (rows + (1));
var new_block = (function (x){
return attack.block.new_simple(attack.point.point(x,new_last),attack.block.rand_type());
});
var new_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new_block,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cols + (1))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attack.grid.add_blocks(grid,new_blocks),new cljs.core.Keyword(null,"rows","rows",850049680),new_last);
});
attack.grid.default$ = (function attack$grid$default(cols,rows){
var grid = attack.grid.empty_grid(cols);
var fns = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,attack.grid.add_row);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,func){
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(g) : func.call(null, g));
}),grid,fns);
});
attack.grid.block_in_direction = (function attack$grid$block_in_direction(grid,p__34192,dir){
var map__34193 = p__34192;
var map__34193__$1 = cljs.core.__destructure_map(map__34193);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34193__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return attack.grid.block_at(grid,attack.point.point_add(pos,dir));
});
attack.grid.matches_in_direction_matching_block_with_quota = (function attack$grid$matches_in_direction_matching_block_with_quota(grid,dir,blk){
var next_blk = attack.grid.block_in_direction(grid,blk,dir);
var recurse_QMARK_ = (((!((next_blk == null)))) && (attack.block.same_type_QMARK_(blk,next_blk)));
if(recurse_QMARK_){
return cljs.core.cons(blk,(attack.grid.matches_in_direction_matching_block_with_quota.cljs$core$IFn$_invoke$arity$3 ? attack.grid.matches_in_direction_matching_block_with_quota.cljs$core$IFn$_invoke$arity$3(grid,dir,next_blk) : attack.grid.matches_in_direction_matching_block_with_quota.call(null, grid,dir,next_blk)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blk], null);
}
});
attack.grid.find_matches_with_grid_block_in_directions = (function attack$grid$find_matches_with_grid_block_in_directions(grid,blk,dirs){

var fn_match_dir = (function (p1__34210_SHARP_){
return attack.grid.matches_in_direction_matching_block_with_quota(grid,p1__34210_SHARP_,blk);
});
var matches = cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_match_dir,dirs);
var length_matches = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34213_SHARP_){
return ((3) <= cljs.core.count(p1__34213_SHARP_));
}),matches);
var flat_matches = cljs.core.flatten(length_matches);
return flat_matches;
});
attack.grid.find_matches_with_grid_block = (function attack$grid$find_matches_with_grid_block(grid,blk){

var fn_find = (function (p1__34214_SHARP_){
return attack.grid.find_matches_with_grid_block_in_directions(grid,blk,p1__34214_SHARP_);
});
var horizontal = fn_find(attack.point.horizontal());
var vertical = fn_find(attack.point.vertical());
var matches = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horizontal,vertical], null);
return cljs.core.flatten(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.empty_QMARK_),matches));
});
attack.grid.is_not_equal_subset_QMARK_ = (function attack$grid$is_not_equal_subset_QMARK_(set1,set2){
return ((clojure.set.subset_QMARK_(set1,set2)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(set1,set2)));
});
attack.grid.isnt_subset_of_another_QMARK_ = (function attack$grid$isnt_subset_of_another_QMARK_(set1,large_set){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.grid.is_not_equal_subset_QMARK_,set1),large_set));
});
attack.grid.condense_match_set = (function attack$grid$condense_match_set(match_set){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (condensed,mset){
if(attack.grid.isnt_subset_of_another_QMARK_(mset,match_set)){
return cljs.core.cons(condensed,mset);
} else {
return condensed;
}
}),match_set);
});
attack.grid.to_superset = (function attack$grid$to_superset(orig_set){

var coll = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,orig_set);
var result = cljs.core.List.EMPTY;
var coll__$1 = coll;
while(true){
if(cljs.core.empty_QMARK_(coll__$1)){
return result;
} else {
var x = cljs.core.first(coll__$1);
var xs = cljs.core.rest(coll__$1);
if(cljs.core.truth_(cljs.core.some(((function (result,coll__$1,x,xs,coll){
return (function (p1__34219_SHARP_){
return clojure.set.subset_QMARK_(x,p1__34219_SHARP_);
});})(result,coll__$1,x,xs,coll))
,xs))){
var G__34411 = result;
var G__34412 = xs;
result = G__34411;
coll__$1 = G__34412;
continue;
} else {
var G__34413 = cljs.core.cons(x,result);
var G__34414 = xs;
result = G__34413;
coll__$1 = G__34414;
continue;
}
}
break;
}
});
attack.grid.condense_match_set2 = (function attack$grid$condense_match_set2(match_set){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,attack.grid.to_superset(match_set));
});
attack.grid.disappear_blocks = (function attack$grid$disappear_blocks(p__34223,blocks_to_disappear){
var map__34224 = p__34223;
var map__34224__$1 = cljs.core.__destructure_map(map__34224);
var grid = map__34224__$1;
var grid_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34224__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

if(cljs.core.empty_QMARK_(blocks_to_disappear)){
return grid;
} else {
return attack.grid.remove_and_add_blocks(grid,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,blocks_to_disappear),cljs.core.PersistentHashSet.createAsIfByAssoc([attack.block.new_disappear(blocks_to_disappear)]));
}
});
attack.grid.reduce_matches = (function attack$grid$reduce_matches(grid,matches,block){
return cljs.core.cons(attack.grid.find_matches_with_grid_block(grid,block),matches);
});
attack.grid.match_sets = (function attack$grid$match_sets(p__34227){
var map__34228 = p__34227;
var map__34228__$1 = cljs.core.__destructure_map(map__34228);
var grid = map__34228__$1;
var all_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34228__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

var simple_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.block.simple_QMARK_,all_blocks);
var set_vectors = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.grid.reduce_matches,grid),cljs.core.PersistentVector.EMPTY,simple_blocks);
var non_nil_set_vectors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),set_vectors);
var sets = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34226_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,p1__34226_SHARP_);
}),non_nil_set_vectors);
var filtered_sets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.empty_QMARK_),sets);
return attack.grid.condense_match_set2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,filtered_sets));
});
attack.grid.disappear_blocks_from_match_set = (function attack$grid$disappear_blocks_from_match_set(grid,match_set){
return attack.grid.disappear_blocks(grid,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.List.EMPTY),match_set)));
});
attack.grid.remove_blocks_with_pred = (function attack$grid$remove_blocks_with_pred(p__34231,pred){
var map__34232 = p__34231;
var map__34232__$1 = cljs.core.__destructure_map(map__34232);
var grid = map__34232__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34232__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

return attack.grid.remove_blocks(grid,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,blocks)));
});
attack.grid.position_valid = (function attack$grid$position_valid(p__34235,p__34236){
var map__34238 = p__34235;
var map__34238__$1 = cljs.core.__destructure_map(map__34238);
var grid = map__34238__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34238__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34238__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var vec__34239 = p__34236;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34239,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34239,(1),null);

return ((((0) < x)) && (((((0) < y)) && ((((rows >= y)) && ((cols >= x)))))));
});
attack.grid.should_position_fall_QMARK_ = (function attack$grid$should_position_fall_QMARK_(grid,pos){
var pt_below = attack.point.below(pos);
if(attack.grid.position_valid(grid,pt_below)){
if(attack.grid.occupied_at_without_falling_QMARK_(grid,pt_below)){
return false;
} else {
return true;
}
} else {
return false;
}
});
attack.grid.garbage_block_bottom_points = (function attack$grid$garbage_block_bottom_points(p__34266){
var map__34267 = p__34266;
var map__34267__$1 = cljs.core.__destructure_map(map__34267);
var garbage_block = map__34267__$1;
var vec__34268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34267__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34268,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34268,(1),null);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34267__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34267__$1,new cljs.core.Keyword(null,"length","length",588987862));
if(attack.block.garbage_QMARK_(garbage_block)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34264_SHARP_){
return attack.point.point((ox + p1__34264_SHARP_),oy);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),length));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
attack.grid.should_garbage_block_fall_QMARK_ = (function attack$grid$should_garbage_block_fall_QMARK_(grid,garbage_block){

if(attack.block.garbage_QMARK_(garbage_block)){
var bottom_points = attack.grid.garbage_block_bottom_points(garbage_block);
return cljs.core.every_QMARK_((function (p1__34272_SHARP_){
return attack.grid.should_position_fall_QMARK_(grid,p1__34272_SHARP_) === true;
}),bottom_points);
} else {
return false;
}
});
attack.grid.should_simple_block_fall_QMARK_ = (function attack$grid$should_simple_block_fall_QMARK_(grid,p__34274){
var map__34275 = p__34274;
var map__34275__$1 = cljs.core.__destructure_map(map__34275);
var block = map__34275__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34275__$1,new cljs.core.Keyword(null,"position","position",-2011731912));

if((((pos == null)) || ((!(attack.block.simple_QMARK_(block)))))){
return false;
} else {
return attack.grid.should_position_fall_QMARK_(grid,pos);
}
});
attack.grid.should_block_fall_QMARK_ = (function attack$grid$should_block_fall_QMARK_(grid,block){

return ((attack.grid.should_simple_block_fall_QMARK_(grid,block)) || (attack.grid.should_garbage_block_fall_QMARK_(grid,block)));
});
attack.grid.create_falling_blocks = (function attack$grid$create_falling_blocks(p__34279){
var map__34280 = p__34279;
var map__34280__$1 = cljs.core.__destructure_map(map__34280);
var grid = map__34280__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34280__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

var falling_blocks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(attack.grid.fallers.cljs$core$IFn$_invoke$arity$1 ? attack.grid.fallers.cljs$core$IFn$_invoke$arity$1(grid) : attack.grid.fallers.call(null, grid)));
return attack.grid.remove_and_add_blocks(grid,falling_blocks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.block.new_falling,falling_blocks));
});
attack.grid.resolve_swap_empty_blocks = (function attack$grid$resolve_swap_empty_blocks(p__34282){
var map__34283 = p__34282;
var map__34283__$1 = cljs.core.__destructure_map(map__34283);
var grid = map__34283__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34283__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var to_resolve = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.block.should_resolve_swap_empty_QMARK_,blocks));
return attack.grid.remove_and_add_blocks(grid,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,to_resolve),cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.block.resolve_swap_empty,to_resolve));
});
attack.grid.resolve_falling_blocks = (function attack$grid$resolve_falling_blocks(p__34285){
var map__34286 = p__34285;
var map__34286__$1 = cljs.core.__destructure_map(map__34286);
var grid = map__34286__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34286__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

var to_resolve = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.block.should_resolve_falling_QMARK_,blocks));
return attack.grid.remove_and_add_blocks(grid,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,to_resolve),cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.block.resolve_falling,to_resolve));
});
attack.grid.resolve_disappear_blocks = (function attack$grid$resolve_disappear_blocks(grid){
return attack.grid.remove_blocks_with_pred(grid,(function (p1__34287_SHARP_){
return ((attack.block.disappear_QMARK_(p1__34287_SHARP_)) && (attack.tick.ticks0_QMARK_(p1__34287_SHARP_)));
}));
});
attack.grid.resolve_swaps = (function attack$grid$resolve_swaps(p__34289){
var map__34290 = p__34289;
var map__34290__$1 = cljs.core.__destructure_map(map__34290);
var grid = map__34290__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34290__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

var to_resolve = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.block.should_resolve_swap_QMARK_,blocks);
var to_add = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34288_SHARP_){
return attack.block.blocks_swap_BANG_(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(p1__34288_SHARP_));
}),to_resolve));
return attack.grid.remove_and_add_blocks(grid,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,to_resolve),to_add);
});
attack.grid.step_blocks = (function attack$grid$step_blocks(p__34302){
var map__34303 = p__34302;
var map__34303__$1 = cljs.core.__destructure_map(map__34303);
var grid = map__34303__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34303__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

var have_ticks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34295_SHARP_){
return cljs.core.contains_QMARK_(p1__34295_SHARP_,new cljs.core.Keyword(null,"ticks","ticks",-406190313));
}),blocks);
var ticked = cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.tick.dec_ticks,have_ticks);
return attack.grid.remove_and_add_blocks(grid,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,have_ticks),ticked);
});
attack.grid.resolve_dissolve_blocks = (function attack$grid$resolve_dissolve_blocks(p__34306){
var map__34307 = p__34306;
var map__34307__$1 = cljs.core.__destructure_map(map__34307);
var grid = map__34307__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34307__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

var dissolves = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.block.dissolve_QMARK_,blocks);
var ready = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.tick.ticks0_QMARK_,dissolves);
var new_grid = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,blk){
return attack.grid.remove_and_add_blocks(g,cljs.core.PersistentHashSet.createAsIfByAssoc([blk]),attack.block.resolve_dissolve(blk));
}),grid,ready);
return new_grid;
});
attack.grid.dissolve_blocks_from_garbage_blocks = (function attack$grid$dissolve_blocks_from_garbage_blocks(grid,blocks){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.block.new_dissolve,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.block.garbage_QMARK_,blocks)));
});
attack.grid.garbage_block_boundary_points = (function attack$grid$garbage_block_boundary_points(grid,p__34310){
var map__34311 = p__34310;
var map__34311__$1 = cljs.core.__destructure_map(map__34311);
var block = map__34311__$1;
var vec__34312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34311__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34312,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34312,(1),null);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34311__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34311__$1,new cljs.core.Keyword(null,"length","length",588987862));

var x_min = (ox - (1));
var x_max = (ox + length);
var y_max = (oy + (1));
var y_min = (oy - height);
var top_and_bottom = (function (){var iter__5480__auto__ = (function attack$grid$garbage_block_boundary_points_$_iter__34315(s__34316){
return (new cljs.core.LazySeq(null,(function (){
var s__34316__$1 = s__34316;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__34316__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var x = cljs.core.first(xs__6385__auto__);
var iterys__5476__auto__ = ((function (s__34316__$1,x,xs__6385__auto__,temp__5825__auto__,x_min,x_max,y_max,y_min,map__34311,map__34311__$1,block,vec__34312,ox,oy,height,length){
return (function attack$grid$garbage_block_boundary_points_$_iter__34315_$_iter__34317(s__34318){
return (new cljs.core.LazySeq(null,((function (s__34316__$1,x,xs__6385__auto__,temp__5825__auto__,x_min,x_max,y_max,y_min,map__34311,map__34311__$1,block,vec__34312,ox,oy,height,length){
return (function (){
var s__34318__$1 = s__34318;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__34318__$1);
if(temp__5825__auto____$1){
var s__34318__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34318__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__34318__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__34320 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__34319 = (0);
while(true){
if((i__34319 < size__5479__auto__)){
var y = cljs.core._nth(c__5478__auto__,i__34319);
cljs.core.chunk_append(b__34320,attack.point.point(x,y));

var G__34422 = (i__34319 + (1));
i__34319 = G__34422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34320),attack$grid$garbage_block_boundary_points_$_iter__34315_$_iter__34317(cljs.core.chunk_rest(s__34318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34320),null);
}
} else {
var y = cljs.core.first(s__34318__$2);
return cljs.core.cons(attack.point.point(x,y),attack$grid$garbage_block_boundary_points_$_iter__34315_$_iter__34317(cljs.core.rest(s__34318__$2)));
}
} else {
return null;
}
break;
}
});})(s__34316__$1,x,xs__6385__auto__,temp__5825__auto__,x_min,x_max,y_max,y_min,map__34311,map__34311__$1,block,vec__34312,ox,oy,height,length))
,null,null));
});})(s__34316__$1,x,xs__6385__auto__,temp__5825__auto__,x_min,x_max,y_max,y_min,map__34311,map__34311__$1,block,vec__34312,ox,oy,height,length))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_min,y_max], null)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,attack$grid$garbage_block_boundary_points_$_iter__34315(cljs.core.rest(s__34316__$1)));
} else {
var G__34423 = cljs.core.rest(s__34316__$1);
s__34316__$1 = G__34423;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(ox,x_max));
})();
var left_and_right = (function (){var iter__5480__auto__ = (function attack$grid$garbage_block_boundary_points_$_iter__34324(s__34325){
return (new cljs.core.LazySeq(null,(function (){
var s__34325__$1 = s__34325;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__34325__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var x = cljs.core.first(xs__6385__auto__);
var iterys__5476__auto__ = ((function (s__34325__$1,x,xs__6385__auto__,temp__5825__auto__,x_min,x_max,y_max,y_min,top_and_bottom,map__34311,map__34311__$1,block,vec__34312,ox,oy,height,length){
return (function attack$grid$garbage_block_boundary_points_$_iter__34324_$_iter__34326(s__34327){
return (new cljs.core.LazySeq(null,((function (s__34325__$1,x,xs__6385__auto__,temp__5825__auto__,x_min,x_max,y_max,y_min,top_and_bottom,map__34311,map__34311__$1,block,vec__34312,ox,oy,height,length){
return (function (){
var s__34327__$1 = s__34327;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__34327__$1);
if(temp__5825__auto____$1){
var s__34327__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34327__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__34327__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__34329 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__34328 = (0);
while(true){
if((i__34328 < size__5479__auto__)){
var y = cljs.core._nth(c__5478__auto__,i__34328);
cljs.core.chunk_append(b__34329,attack.point.point(x,y));

var G__34425 = (i__34328 + (1));
i__34328 = G__34425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34329),attack$grid$garbage_block_boundary_points_$_iter__34324_$_iter__34326(cljs.core.chunk_rest(s__34327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34329),null);
}
} else {
var y = cljs.core.first(s__34327__$2);
return cljs.core.cons(attack.point.point(x,y),attack$grid$garbage_block_boundary_points_$_iter__34324_$_iter__34326(cljs.core.rest(s__34327__$2)));
}
} else {
return null;
}
break;
}
});})(s__34325__$1,x,xs__6385__auto__,temp__5825__auto__,x_min,x_max,y_max,y_min,top_and_bottom,map__34311,map__34311__$1,block,vec__34312,ox,oy,height,length))
,null,null));
});})(s__34325__$1,x,xs__6385__auto__,temp__5825__auto__,x_min,x_max,y_max,y_min,top_and_bottom,map__34311,map__34311__$1,block,vec__34312,ox,oy,height,length))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(oy,y_max,(1))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,attack$grid$garbage_block_boundary_points_$_iter__34324(cljs.core.rest(s__34325__$1)));
} else {
var G__34426 = cljs.core.rest(s__34325__$1);
s__34325__$1 = G__34426;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_min,x_max], null));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.grid.position_valid,grid),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(top_and_bottom,left_and_right)));
});
attack.grid.matchset_points = (function attack$grid$matchset_points(matches){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,m_set){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(res,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34334_SHARP_){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__34334_SHARP_);
}),m_set));
}),cljs.core.PersistentVector.EMPTY,matches));
});
attack.grid.garbage_blocks_adjacent_to_matches = (function attack$grid$garbage_blocks_adjacent_to_matches(p__34343,matches){
var map__34344 = p__34343;
var map__34344__$1 = cljs.core.__destructure_map(map__34344);
var grid = map__34344__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34344__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));

var matchset_pts = attack.grid.matchset_points(matches);
var garbage_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.block.garbage_QMARK_,blocks);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34341_SHARP_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.empty_QMARK_)(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(attack.grid.garbage_block_boundary_points(grid,p1__34341_SHARP_),matchset_pts));
}),garbage_blocks));
});
attack.grid.resolve_garbage_blocks_with_match_sets = (function attack$grid$resolve_garbage_blocks_with_match_sets(grid,matches){

var garbage_blocks = attack.grid.garbage_blocks_adjacent_to_matches(grid,matches);
var dissolve_blocks = attack.grid.dissolve_blocks_from_garbage_blocks(grid,garbage_blocks);
return attack.grid.remove_and_add_blocks(grid,garbage_blocks,dissolve_blocks);
});
attack.grid.resolve_matches = (function attack$grid$resolve_matches(should_resolve_matches_QMARK_,grid){
if(cljs.core.truth_(should_resolve_matches_QMARK_)){
var matches = attack.grid.match_sets(grid);
return attack.grid.resolve_garbage_blocks_with_match_sets(attack.grid.resolve_disappear_blocks(attack.grid.disappear_blocks_from_match_set(grid,matches)),matches);
} else {
return grid;
}
});
attack.grid.resolve_grid = (function attack$grid$resolve_grid(grid,should_resolve_matches_QMARK_){
return attack.grid.resolve_swap_empty_blocks(attack.grid.resolve_falling_blocks(attack.grid.resolve_dissolve_blocks(attack.grid.resolve_matches(should_resolve_matches_QMARK_,attack.grid.create_falling_blocks(attack.grid.resolve_swaps(attack.grid.step_blocks(grid)))))));
});
attack.grid.block_can_fall_QMARK_ = (function attack$grid$block_can_fall_QMARK_(block){
return ((attack.block.simple_QMARK_(block)) || (attack.block.garbage_QMARK_(block)));
});
attack.grid.blocks_that_can_fall = (function attack$grid$blocks_that_can_fall(grid){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attack.grid.block_can_fall_QMARK_,new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(grid));
});
attack.grid.grid_bottom_row_index_blocks = attack.grid.blocks_that_can_fall;
attack.grid.grid_block_bottom_y = (function attack$grid$grid_block_bottom_y(block){
if(attack.block.garbage_QMARK_(block)){
var map__34347 = block;
var map__34347__$1 = cljs.core.__destructure_map(map__34347);
var vec__34348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34347__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34348,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34348,(1),null);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34347__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return ((y + height) - (1));
} else {
if(attack.block.simple_QMARK_(block)){
var map__34351 = block;
var map__34351__$1 = cljs.core.__destructure_map(map__34351);
var vec__34352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34351__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34352,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34352,(1),null);
return y;
} else {
return null;

}
}
});
attack.grid.grid_bottom_row_index = (function attack$grid$grid_bottom_row_index(grid){

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.grid.grid_block_bottom_y,(attack.grid.grid_bottom_row_index_blocks.cljs$core$IFn$_invoke$arity$1 ? attack.grid.grid_bottom_row_index_blocks.cljs$core$IFn$_invoke$arity$1(grid) : attack.grid.grid_bottom_row_index_blocks.call(null, grid)))));
});
attack.grid.fallers_in_bottom_row_QMARK_ = (function attack$grid$fallers_in_bottom_row_QMARK_(bottom_index,block){

var y = attack.grid.grid_block_bottom_y(block);
if((y == null)){
return false;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,bottom_index);
}
});
attack.grid.fallers_block_below = (function attack$grid$fallers_block_below(grid,block){

var pts_fun = ((attack.block.simple_QMARK_(block))?(function (p1__34355_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__34355_SHARP_)],null));
}):((attack.block.garbage_QMARK_(block))?attack.grid.garbage_block_bottom_points:((attack.block.swap_QMARK_(block))?(function (blk){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.grid.fallers_block_below,grid),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(blk)));
}):((attack.block.swap_empty_QMARK_(block))?(function (blk){
return cljs.core.cons(new cljs.core.Keyword(null,"into-position","into-position",110701399).cljs$core$IFn$_invoke$arity$1(blk),(function (){var G__34356 = grid;
var G__34357 = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(blk);
return (attack.grid.fallers_block_below.cljs$core$IFn$_invoke$arity$2 ? attack.grid.fallers_block_below.cljs$core$IFn$_invoke$arity$2(G__34356,G__34357) : attack.grid.fallers_block_below.call(null, G__34356,G__34357));
})());
}):(function (_){
return cljs.core.PersistentVector.EMPTY;
})
))));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.grid.block_at,grid),attack.point.below),(pts_fun.cljs$core$IFn$_invoke$arity$1 ? pts_fun.cljs$core$IFn$_invoke$arity$1(block) : pts_fun.call(null, block))));
});
/**
 * Returns a memoized recursive function that takes a block and determines if it is falling.
 */
attack.grid.fall_map_recur = cljs.core.memoize((function (grid,bottom_index,block){
if((block == null)){
return false;
} else {
if(attack.grid.block_can_fall_QMARK_(block) === false){
return false;
} else {
if(attack.grid.fallers_in_bottom_row_QMARK_(bottom_index,block)){
return false;
} else {
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(attack.grid.fall_map_recur,grid,bottom_index),attack.grid.fallers_block_below(grid,block));

}
}
}
}));
attack.grid.make_is_falling2 = (function attack$grid$make_is_falling2(grid){
var bottom_index = attack.grid.grid_bottom_row_index(grid);
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(attack.grid.fall_map_recur,grid,bottom_index);
});
attack.grid.make_is_falling = (function attack$grid$make_is_falling(grid){

var bottom_index = attack.grid.grid_bottom_row_index(grid);
var G__34366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack.grid.fall_map,cljs.core.memoize((function (block){
if((block == null)){
return false;
} else {
if(attack.grid.block_can_fall_QMARK_(block) === false){
return false;
} else {
if(attack.grid.fallers_in_bottom_row_QMARK_(bottom_index,block)){
return false;
} else {
var blocks_below = attack.grid.fallers_block_below(grid,block);
if(cljs.core.empty_QMARK_(blocks_below)){
return true;
} else {
return cljs.core.every_QMARK_(attack.grid.fall_map,blocks_below);
}

}
}
}
}))], null);
var G__34367 = attack.grid.fall_map.bindRoot(cljs.core.deref(attack.grid.fall_map));
var G__34368 = cljs.core.deref(attack.grid.fall_map);
return (attack.grid.with_local_vars.cljs$core$IFn$_invoke$arity$3 ? attack.grid.with_local_vars.cljs$core$IFn$_invoke$arity$3(G__34366,G__34367,G__34368) : attack.grid.with_local_vars.call(null, G__34366,G__34367,G__34368));
});
attack.grid.fallers_falling_map_all = (function attack$grid$fallers_falling_map_all(grid){

var f = attack.grid.make_is_falling2(grid);
var blocks = attack.grid.blocks_that_can_fall(grid);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34384_SHARP_,p2__34385_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34384_SHARP_,p2__34385_SHARP_,f(p2__34385_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,blocks);
});
attack.grid.fallers = (function attack$grid$fallers(grid){

var fallers_map = attack.grid.fallers_falling_map_all(grid);
var fs = (function (){var iter__5480__auto__ = (function attack$grid$fallers_$_iter__34387(s__34388){
return (new cljs.core.LazySeq(null,(function (){
var s__34388__$1 = s__34388;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__34388__$1);
if(temp__5825__auto__){
var s__34388__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34388__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__34388__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__34390 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__34389 = (0);
while(true){
if((i__34389 < size__5479__auto__)){
var vec__34391 = cljs.core._nth(c__5478__auto__,i__34389);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34391,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34391,(1),null);
if(value === true){
cljs.core.chunk_append(b__34390,block);

var G__34427 = (i__34389 + (1));
i__34389 = G__34427;
continue;
} else {
var G__34428 = (i__34389 + (1));
i__34389 = G__34428;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34390),attack$grid$fallers_$_iter__34387(cljs.core.chunk_rest(s__34388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34390),null);
}
} else {
var vec__34394 = cljs.core.first(s__34388__$2);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34394,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34394,(1),null);
if(value === true){
return cljs.core.cons(block,attack$grid$fallers_$_iter__34387(cljs.core.rest(s__34388__$2)));
} else {
var G__34429 = cljs.core.rest(s__34388__$2);
s__34388__$1 = G__34429;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(fallers_map);
})();
return fs;
});

//# sourceMappingURL=attack.grid.js.map
