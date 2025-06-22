goog.provide('attack.game');
attack.game.adjusted_grid = (function attack$game$adjusted_grid(cols,rows){
var def = attack.grid.default$(cols,(13));
var removed = attack.grid.remove_blocks(def,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(def)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (grid,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(grid) : f.call(null, grid));
}),removed,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,attack.grid.add_row));
});
attack.game.default$ = (function attack$game$default(){
var vec__23607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6)], null);
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23607,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23607,(1),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"grid","grid",402978600),attack.game.adjusted_grid(cols,rows),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"max-lines","max-lines",-125998785),(13),new cljs.core.Keyword(null,"clock","clock",-894301127),(0),new cljs.core.Keyword(null,"dirty","dirty",729553281),false,new cljs.core.Keyword(null,"add-line-ticks","add-line-ticks",-1670781538),(120)], null);
});
attack.game.game_over_QMARK_ = (function attack$game$game_over_QMARK_(p__23610){
var map__23611 = p__23610;
var map__23611__$1 = cljs.core.__destructure_map(map__23611);
var game = map__23611__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23611__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var max_lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23611__$1,new cljs.core.Keyword(null,"max-lines","max-lines",-125998785));
return (attack.grid.line_count(grid) > max_lines);
});
attack.game.tick = (function attack$game$tick(p__23612){
var map__23613 = p__23612;
var map__23613__$1 = cljs.core.__destructure_map(map__23613);
var game = map__23613__$1;
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23613__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23613__$1,new cljs.core.Keyword(null,"grid","grid",402978600));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"clock","clock",-894301127),(clock + (1)));
});
attack.game.mod_clock_QMARK_ = (function attack$game$mod_clock_QMARK_(p__23614,operand){
var map__23615 = p__23614;
var map__23615__$1 = cljs.core.__destructure_map(map__23615);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23615__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(clock,operand));
});
attack.game.add_line = (function attack$game$add_line(p__23616){
var map__23617 = p__23616;
var map__23617__$1 = cljs.core.__destructure_map(map__23617);
var game = map__23617__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23617__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"grid","grid",402978600),attack.grid.add_row(grid));
});
attack.game.step_add_line = (function attack$game$step_add_line(p__23618){
var map__23619 = p__23618;
var map__23619__$1 = cljs.core.__destructure_map(map__23619);
var game = map__23619__$1;
var add_line_ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,new cljs.core.Keyword(null,"add-line-ticks","add-line-ticks",-1670781538));
if(attack.game.mod_clock_QMARK_(game,add_line_ticks)){
return attack.game.add_line(game);
} else {
return game;
}
});
attack.game.mark_dirty = (function attack$game$mark_dirty(p__23620,p__23621){
var map__23622 = p__23620;
var map__23622__$1 = cljs.core.__destructure_map(map__23622);
var old_grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23622__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var map__23623 = p__23621;
var map__23623__$1 = cljs.core.__destructure_map(map__23623);
var new_game = map__23623__$1;
var new_grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23623__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_game,new cljs.core.Keyword(null,"dirty","dirty",729553281),(!(attack.grid.simple_blocks_match_QMARK_(old_grid,new_grid))));
});
attack.game.add_garbage_block = (function attack$game$add_garbage_block(p__23628,garbage){
var map__23629 = p__23628;
var map__23629__$1 = cljs.core.__destructure_map(map__23629);
var game = map__23629__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23629__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var new_grid = attack.grid.add_blocks(grid,cljs.core.PersistentHashSet.createAsIfByAssoc([garbage]));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"grid","grid",402978600),new_grid);
});
attack.game.add_garbage = (function attack$game$add_garbage(p__23630){
var map__23631 = p__23630;
var map__23631__$1 = cljs.core.__destructure_map(map__23631);
var game = map__23631__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23631__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var garbage = attack.block.new_garbage(attack.point.point((1),(1)),(5),(1));
return attack.game.add_garbage_block(game,garbage);
});
attack.game.random_garbage_block = (function attack$game$random_garbage_block(p__23632){
var map__23633 = p__23632;
var map__23633__$1 = cljs.core.__destructure_map(map__23633);
var grid = map__23633__$1;
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23633__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23633__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var length = ((3) + cljs.core.rand_int((cols - (3))));
var x = ((1) + cljs.core.rand_int(((cols - length) - (-1))));
return attack.block.new_garbage(attack.point.point(x,(rows - (11))),length,((1) + cljs.core.rand_int((2))));
});
attack.game.add_random_garbage_every_n_steps = (function attack$game$add_random_garbage_every_n_steps(p__23634,n_steps){
var map__23635 = p__23634;
var map__23635__$1 = cljs.core.__destructure_map(map__23635);
var game = map__23635__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(clock,n_steps))){
return attack.game.add_garbage_block(game,attack.game.random_garbage_block(grid));
} else {
return game;
}
});
attack.game.cache_grid_clock = (function attack$game$cache_grid_clock(p__23636){
var map__23637 = p__23636;
var map__23637__$1 = cljs.core.__destructure_map(map__23637);
var game = map__23637__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23637__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23637__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grid,new cljs.core.Keyword(null,"cache-clock","cache-clock",-908494309),clock));
});
attack.game.step = (function attack$game$step(p__23639){
var map__23640 = p__23639;
var map__23640__$1 = cljs.core.__destructure_map(map__23640);
var game = map__23640__$1;
var dirty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23640__$1,new cljs.core.Keyword(null,"dirty","dirty",729553281));

if(attack.game.game_over_QMARK_(game)){
var map__23642 = game;
var map__23642__$1 = cljs.core.__destructure_map(map__23642);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23642__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
var map__23643 = attack.game.tick(game);
var map__23643__$1 = cljs.core.__destructure_map(map__23643);
var g = map__23643__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23643__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var dirty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23643__$1,new cljs.core.Keyword(null,"dirty","dirty",729553281));
var new_grid = attack.grid.resolve_grid(grid,dirty_QMARK_);
var new_game = attack.game.add_random_garbage_every_n_steps(attack.game.step_add_line(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(g,new cljs.core.Keyword(null,"grid","grid",402978600),new_grid)),(201));
return attack.game.mark_dirty(game,attack.game.cache_grid_clock(new_game));
}
});

//# sourceMappingURL=attack.game.js.map
