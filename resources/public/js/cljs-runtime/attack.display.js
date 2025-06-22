goog.provide('attack.display');
attack.display.WHITE = "white";
attack.display.BLUE = "blue";
attack.display.BLOCKWIDTH = (30);
attack.display.BLOCKHEIGHT = (30);
attack.display.BLOCKSIZE = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack.display.BLOCKWIDTH,attack.display.BLOCKHEIGHT], null);
attack.display.DISPLAYHEIGHT = (400);
attack.display.DISPLAYWIDTH = ((9) * attack.display.BLOCKWIDTH);
attack.display.disp_info = (function attack$display$disp_info(total_rows){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total-rows","total-rows",1745495528),total_rows,new cljs.core.Keyword(null,"block-height","block-height",-365634550),attack.display.BLOCKHEIGHT,new cljs.core.Keyword(null,"block-width","block-width",-566982330),attack.display.BLOCKWIDTH,new cljs.core.Keyword(null,"display-height","display-height",-457959203),attack.display.DISPLAYHEIGHT], null);
});
attack.display.orect = (function attack$display$orect(context,color,x,y,w,h){
(context.lineWidth = (3));

(context.strokeStyle = color);

return context.strokeRect(x,y,w,h);
});
attack.display.canvas = (function attack$display$canvas(){
return document.getElementById("canvas");
});
attack.display.draw_context = (function attack$display$draw_context(){
return attack.display.canvas().getContext("2d");
});
attack.display.draw_block_fun = (function attack$display$draw_block_fun(total_rows,fun,p__23651){
var map__23652 = p__23651;
var map__23652__$1 = cljs.core.__destructure_map(map__23652);
var pt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23652__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23652__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var vec__23653 = attack.display_math.pt_to_display_pt(attack.display.disp_info(total_rows),pt);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23653,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23653,(1),null);
var G__23656 = attack.display.draw_context();
var G__23657 = cljs.core.name(color);
var G__23658 = x;
var G__23659 = y;
var G__23660 = attack.display.BLOCKWIDTH;
var G__23661 = attack.display.BLOCKHEIGHT;
return (fun.cljs$core$IFn$_invoke$arity$6 ? fun.cljs$core$IFn$_invoke$arity$6(G__23656,G__23657,G__23658,G__23659,G__23660,G__23661) : fun.call(null, G__23656,G__23657,G__23658,G__23659,G__23660,G__23661));
});
attack.display.render_cursor = (function attack$display$render_cursor(total_rows,p__23662){
var map__23663 = p__23662;
var map__23663__$1 = cljs.core.__destructure_map(map__23663);
var cursor = map__23663__$1;
var pt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23663__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var context = attack.display.draw_context();
var nofill_block = (function (pt__$1){
var vec__23664 = attack.display_math.pt_to_display_pt(attack.display.disp_info(total_rows),pt__$1);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23664,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23664,(1),null);
return attack.display.orect(context,"black",x,y,attack.display.BLOCKWIDTH,attack.display.BLOCKHEIGHT);
});
nofill_block(pt);

return nofill_block(attack.point.point_add(pt,attack.point.point((1),(0))));
});
attack.display.fill = (function attack$display$fill(context,color){
return (context.fillStyle = color);
});
attack.display.rect = (function attack$display$rect(context,color,x,y,w,h){
attack.display.fill(context,color);

return context.fillRect(x,y,w,h);
});
attack.display.render_clock = (function attack$display$render_clock(clock){
var context = attack.display.draw_context();
attack.display.fill(context,"black");

(context.font = "bold 12px sans-serif");

return context.fillText(["Clock ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clock)].join(''),attack.display.BLOCKWIDTH,(10));
});
attack.display.render_fps = (function attack$display$render_fps(fps){
var context = attack.display.draw_context();
attack.display.fill(context,"red");

(context.font = "bold 12px sans-serif");

return context.fillText(["FPS ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fps)].join(''),((5) * attack.display.BLOCKWIDTH),(10));
});
attack.display.draw_grid = (function attack$display$draw_grid(){
return attack.display.rect(attack.display.draw_context(),attack.display.WHITE,(0),(0),attack.display.DISPLAYWIDTH,attack.display.DISPLAYHEIGHT);
});
attack.display.brighten_block = (function attack$display$brighten_block(p__23667,factor){
var map__23668 = p__23667;
var map__23668__$1 = cljs.core.__destructure_map(map__23668);
var blk = map__23668__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23668__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(blk,new cljs.core.Keyword(null,"type","type",1174270348),attack.color.brighten(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),factor));
});
attack.display.draw_disappear_block = (function attack$display$draw_disappear_block(total_rows,p__23670){
var map__23671 = p__23670;
var map__23671__$1 = cljs.core.__destructure_map(map__23671);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23671__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23671__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313));
var alter1 = (function (p1__23669_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23669_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"black","black",1294279647));
});
var alter = (function (p__23672){
var map__23673 = p__23672;
var map__23673__$1 = cljs.core.__destructure_map(map__23673);
var blk = map__23673__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23673__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var color = cljs.core.str.cljs$core$IFn$_invoke$arity$1(type);
var max_ticks = (20);
var factor = (((max_ticks - ticks) / (20)) + 0.2);
return attack.display.brighten_block(blk,factor);
});
var bs = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(alter,blocks));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.display.draw_block,total_rows),bs));
});
attack.display.make_gray = (function attack$display$make_gray(block){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"gray","gray",1013268388));
});
attack.display.draw_swap_block = (function attack$display$draw_swap_block(total_rows,p__23674){
var map__23675 = p__23674;
var map__23675__$1 = cljs.core.__destructure_map(map__23675);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23675__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23675__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313));
var bs = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attack.display.make_gray,blocks));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.display.draw_block,total_rows),bs));
});
attack.display.draw_falling_block = (function attack$display$draw_falling_block(total_rows,p__23676){
var map__23677 = p__23676;
var map__23677__$1 = cljs.core.__destructure_map(map__23677);
var inner_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23677__$1,new cljs.core.Keyword(null,"block","block",664686210));
return (attack.display.draw_block.cljs$core$IFn$_invoke$arity$2 ? attack.display.draw_block.cljs$core$IFn$_invoke$arity$2(total_rows,inner_block) : attack.display.draw_block.call(null, total_rows,inner_block));
});
attack.display.draw_swap_empty_block = (function attack$display$draw_swap_empty_block(total_rows,p__23678){
var map__23679 = p__23678;
var map__23679__$1 = cljs.core.__destructure_map(map__23679);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23679__$1,new cljs.core.Keyword(null,"block","block",664686210));
var into_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23679__$1,new cljs.core.Keyword(null,"into-position","into-position",110701399));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.display.draw_block,total_rows),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack.display.make_gray(block)], null));
});
attack.display.draw_garbage_block_with_color = (function attack$display$draw_garbage_block_with_color(total_rows,block,color){
var points = attack.block.garbage_block_points(block);
var blocks = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23680_SHARP_){
return attack.block.new_simple(p1__23680_SHARP_,color);
}),points));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.display.draw_block,total_rows),blocks));
});
attack.display.draw_dissolve_block = (function attack$display$draw_dissolve_block(total_rows,p__23682){
var map__23683 = p__23682;
var map__23683__$1 = cljs.core.__destructure_map(map__23683);
var dissolve = map__23683__$1;
var map__23684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23683__$1,new cljs.core.Keyword(null,"garbage-block","garbage-block",-541624028));
var map__23684__$1 = cljs.core.__destructure_map(map__23684);
var inner = map__23684__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23684__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23684__$1,new cljs.core.Keyword(null,"length","length",588987862));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23684__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23683__$1,new cljs.core.Keyword(null,"pending-blocks","pending-blocks",-1663234721));
var vec__23685 = attack.point.below(pos);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23685,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23685,(1),null);
var apos = attack.point.point((ox + length),(oy + height));
var vec__23688 = attack.display_math.pt_to_display_pt(attack.display.disp_info(total_rows),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ox,oy], null));
var ox_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23688,(0),null);
var oy_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23688,(1),null);
var vec__23691 = attack.display_math.pt_to_display_pt(attack.display.disp_info(total_rows),apos);
var ax_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23691,(0),null);
var ay_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23691,(1),null);
var width = (ax_SINGLEQUOTE_ - ox_SINGLEQUOTE_);
var height__$1 = (oy_SINGLEQUOTE_ - ay_SINGLEQUOTE_);
var context = attack.display.draw_context();
attack.display.draw_garbage_block_with_color(total_rows,inner,new cljs.core.Keyword(null,"AAA","AAA",-300168063));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23681_SHARP_){
var G__23694 = total_rows;
var G__23695 = attack.display.brighten_block(p1__23681_SHARP_,0.9);
return (attack.display.draw_block.cljs$core$IFn$_invoke$arity$2 ? attack.display.draw_block.cljs$core$IFn$_invoke$arity$2(G__23694,G__23695) : attack.display.draw_block.call(null, G__23694,G__23695));
}),pending));

return attack.display.orect(context,"black",ox_SINGLEQUOTE_,oy_SINGLEQUOTE_,width,height__$1);
});
attack.display.draw_garbage_block = (function attack$display$draw_garbage_block(total_rows,block){
return attack.display.draw_garbage_block_with_color(total_rows,block,new cljs.core.Keyword(null,"black","black",1294279647));
});
attack.display.draw_block = (function attack$display$draw_block(total_rows,p__23696){
var map__23697 = p__23696;
var map__23697__$1 = cljs.core.__destructure_map(map__23697);
var block = map__23697__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23697__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fn_draw = (function (){var G__23698 = type;
var G__23698__$1 = (((G__23698 instanceof cljs.core.Keyword))?G__23698.fqn:null);
switch (G__23698__$1) {
case "dissolve":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.display.draw_dissolve_block,total_rows);

break;
case "garbage":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.display.draw_garbage_block,total_rows);

break;
case "swap":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.display.draw_swap_block,total_rows);

break;
case "swap-empty":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.display.draw_swap_empty_block,total_rows);

break;
case "disappear":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.display.draw_disappear_block,total_rows);

break;
case "falling":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.display.draw_falling_block,total_rows);

break;
default:
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(attack.display.draw_block_fun,total_rows,attack.display.rect);

}
})();
return (fn_draw.cljs$core$IFn$_invoke$arity$1 ? fn_draw.cljs$core$IFn$_invoke$arity$1(block) : fn_draw.call(null, block));
});
attack.display.out_of_bounds_QMARK_ = (function attack$display$out_of_bounds_QMARK_(p__23699,p__23700){
var map__23701 = p__23699;
var map__23701__$1 = cljs.core.__destructure_map(map__23701);
var map__23702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23701__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var map__23702__$1 = cljs.core.__destructure_map(map__23702);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23702__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23702__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var vec__23703 = p__23700;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23703,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23703,(1),null);
return (!(((((0) < x)) && (((((0) < y)) && ((((rows >= y)) && ((cols > x)))))))));
});
attack.display.cursor_mod = (function attack$display$cursor_mod(p__23706,pt){
var map__23707 = p__23706;
var map__23707__$1 = cljs.core.__destructure_map(map__23707);
var gi = map__23707__$1;
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23707__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var map__23708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23707__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__23708__$1 = cljs.core.__destructure_map(map__23708);
var cursor = map__23708__$1;
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23708__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var new_orig = attack.point.point_add(origin,pt);
var new_cursor = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"origin","origin",1037372088),new_orig);
if(attack.display.out_of_bounds_QMARK_(game,new_orig)){
return gi;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gi,new cljs.core.Keyword(null,"cursor","cursor",1011937484),new_cursor);
}
});
attack.display.cursor_down = (function attack$display$cursor_down(gi){
return attack.display.cursor_mod(gi,attack.point.point((0),(1)));
});
attack.display.cursor_up = (function attack$display$cursor_up(gi){
return attack.display.cursor_mod(gi,attack.point.point((0),(-1)));
});
attack.display.cursor_left = (function attack$display$cursor_left(gi){
return attack.display.cursor_mod(gi,attack.point.point((-1),(0)));
});
attack.display.cursor_right = (function attack$display$cursor_right(gi){
return attack.display.cursor_mod(gi,attack.point.point((1),(0)));
});
attack.display.cursor_swap_fill = (function attack$display$cursor_swap_fill(p__23709,a,b){
var map__23710 = p__23709;
var map__23710__$1 = cljs.core.__destructure_map(map__23710);
var gi = map__23710__$1;
var map__23711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23710__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var map__23711__$1 = cljs.core.__destructure_map(map__23711);
var game = map__23711__$1;
var gr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23711__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var new_grid = attack.grid.swap_blocks(gr,a,b);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gi,new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"grid","grid",402978600),new_grid));
});
attack.display.cursor_swap_empty = (function attack$display$cursor_swap_empty(p__23712,p__23713){
var map__23714 = p__23712;
var map__23714__$1 = cljs.core.__destructure_map(map__23714);
var gi = map__23714__$1;
var map__23715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23714__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var map__23715__$1 = cljs.core.__destructure_map(map__23715);
var game = map__23715__$1;
var gr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23715__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var vec__23716 = p__23713;
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23716,(0),null);
var after_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23716,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gi,new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"grid","grid",402978600),attack.grid.swap_empty(gr,block,after_pos)));
});
attack.display.cursor_swap = (function attack$display$cursor_swap(p__23720){
var map__23721 = p__23720;
var map__23721__$1 = cljs.core.__destructure_map(map__23721);
var gi = map__23721__$1;
var map__23722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var map__23722__$1 = cljs.core.__destructure_map(map__23722);
var gr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23722__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var map__23723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__23723__$1 = cljs.core.__destructure_map(map__23723);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23723__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var b_pt = attack.point.after(origin);
var vec__23724 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23719_SHARP_){
return attack.grid.block_at(gr,p1__23719_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin,b_pt], null)));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23724,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23724,(1),null);
if(cljs.core.every_QMARK_(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null))){
return gi;
} else {
if(cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null))){
return attack.display.cursor_swap_fill(gi,a,b);
} else {
return attack.display.cursor_swap_empty(gi,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23727){
var vec__23728 = p__23727;
var blk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23728,(0),null);
var pt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23728,(1),null);
return (!((blk == null)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b_pt], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,origin], null)], null))));
}
}
});
attack.display.add_line = (function attack$display$add_line(p__23731){
var map__23732 = p__23731;
var map__23732__$1 = cljs.core.__destructure_map(map__23732);
var gi = map__23732__$1;
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23732__$1,new cljs.core.Keyword(null,"game","game",-441523833));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gi,new cljs.core.Keyword(null,"game","game",-441523833),attack.game.add_line(g));
});
attack.display.add_garbage_block = (function attack$display$add_garbage_block(p__23733){
var map__23734 = p__23733;
var map__23734__$1 = cljs.core.__destructure_map(map__23734);
var gi = map__23734__$1;
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23734__$1,new cljs.core.Keyword(null,"game","game",-441523833));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gi,new cljs.core.Keyword(null,"game","game",-441523833),attack.game.add_garbage(g));
});
attack.display.inspect = (function attack$display$inspect(gi){
var log_23754 = (function (p1__23735_SHARP_){
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23735_SHARP_));
});
var log_blks_23755 = (function (thing){
log_23754(thing);

var blocks_23757 = new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(thing);
if((!((blocks_23757 == null)))){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(log_23754,blocks_23757));
} else {
return null;
}
});
var grid_23756 = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(gi));
var blocks_23757 = new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(grid_23756);
var fallers_23758 = attack.grid.fallers(grid_23756);
log_23754("Game interface");

log_23754(gi);

log_23754("Fallers");

log_23754(fallers_23758);

return gi;
});
attack.display.render_grid = (function attack$display$render_grid(p__23736){
var map__23737 = p__23736;
var map__23737__$1 = cljs.core.__destructure_map(map__23737);
var grid = map__23737__$1;
var total_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23737__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(attack.display.draw_block,total_rows),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(grid)));
});
attack.display.init = (function attack$display$init(){
attack.display.draw_grid();

return attack.game_interface.default$();
});
attack.display.step = (function attack$display$step(game_interface){
return attack.game_interface.step(game_interface);
});
attack.display.render_game_over = (function attack$display$render_game_over(gi){
var context = attack.display.draw_context();
var vec__23738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack.display.BLOCKWIDTH,(attack.display.DISPLAYHEIGHT / (2))], null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23738,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23738,(1),null);
attack.display.rect(context,"black",x,(y - attack.display.BLOCKHEIGHT),attack.display.DISPLAYWIDTH,(attack.display.BLOCKHEIGHT * (2)));

attack.display.fill(context,"white");

(context.font = "bold 20px sans-serif");

return context.fillText("Game over",(x + attack.display.BLOCKWIDTH),y);
});
attack.display.render_game_active = (function attack$display$render_game_active(p__23741){
var map__23742 = p__23741;
var map__23742__$1 = cljs.core.__destructure_map(map__23742);
var map__23743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23742__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var map__23743__$1 = cljs.core.__destructure_map(map__23743);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23743__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var map__23744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23743__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var map__23744__$1 = cljs.core.__destructure_map(map__23744);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23744__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23742__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
attack.display.render_clock(clock);

return attack.display.render_cursor(rows,cursor);
});
attack.display.render = (function attack$display$render(p__23745,fps){
var map__23746 = p__23745;
var map__23746__$1 = cljs.core.__destructure_map(map__23746);
var gi = map__23746__$1;
var map__23747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23746__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var map__23747__$1 = cljs.core.__destructure_map(map__23747);
var game = map__23747__$1;
var map__23748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23747__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var map__23748__$1 = cljs.core.__destructure_map(map__23748);
var grid = map__23748__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23748__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23747__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23746__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
attack.display.draw_grid();

attack.display.render_grid(grid);

attack.display.render_fps(fps);

if(attack.game.game_over_QMARK_(game)){
return attack.display.render_game_over(gi);
} else {
return attack.display.render_game_active(gi);
}
});

//# sourceMappingURL=attack.display.js.map
