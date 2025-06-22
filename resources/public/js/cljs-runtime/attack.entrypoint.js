goog.provide('attack.entrypoint');
/**
 * Use this to queue a drawing of the board
 */
attack.entrypoint.request_anim_fun = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.requestAnimationFrame,window.mozRequestAnimationFrame,window.msRequestAnimationFrame,window.webkitRequestAnimationFrame], null)));
attack.entrypoint.request_anim = (function attack$entrypoint$request_anim(callback){
return (attack.entrypoint.request_anim_fun.cljs$core$IFn$_invoke$arity$1 ? attack.entrypoint.request_anim_fun.cljs$core$IFn$_invoke$arity$1(callback) : attack.entrypoint.request_anim_fun.call(null, callback));
});
attack.entrypoint.GI = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(attack.game_interface.default$());
attack.entrypoint.initial_render = (function attack$entrypoint$initial_render(){
return attack.display.draw_grid();
});
attack.entrypoint.jstime = (function attack$entrypoint$jstime(){
return (new Date()).getTime();
});
attack.entrypoint.restart = (function attack$entrypoint$restart(_){
return attack.game_interface.default$();
});
attack.entrypoint.log = (function attack$entrypoint$log(msg){
return console.log(msg);
});
attack.entrypoint.step = (function attack$entrypoint$step(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(attack.entrypoint.GI,attack.display.step);
});
attack.entrypoint.floor = (function attack$entrypoint$floor(num){
return Math.floor(num);
});
attack.entrypoint.render = (function attack$entrypoint$render(last_time){
var time_delta = (attack.entrypoint.jstime() - last_time);
var fps = attack.entrypoint.floor((((1) / time_delta) * (1000)));
return attack.display.render(cljs.core.deref(attack.entrypoint.GI),fps);
});
attack.entrypoint.step_rate = (30);
attack.entrypoint.begin_stepping = (function attack$entrypoint$begin_stepping(){
return setInterval(attack.entrypoint.step,attack.entrypoint.step_rate);
});
attack.entrypoint.begin_rendering = (function attack$entrypoint$begin_rendering(){
var current_time = attack.entrypoint.jstime();
return setTimeout((function (){
attack.entrypoint.render(current_time);

return attack.entrypoint.request_anim(attack.entrypoint.begin_rendering);
}),attack.entrypoint.step_rate);
});
attack.entrypoint.which = (function attack$entrypoint$which(num){
var G__23749 = num;
switch (G__23749) {
case (13):
return new cljs.core.Keyword(null,"ENTER","ENTER",-1673322884);

break;
case (49):
return new cljs.core.Keyword(null,"EXCLAMATION","EXCLAMATION",-463432886);

break;
case (39):
return new cljs.core.Keyword(null,"RIGHT","RIGHT",-956441784);

break;
case (37):
return new cljs.core.Keyword(null,"LEFT","LEFT",1005963341);

break;
case (38):
return new cljs.core.Keyword(null,"UP","UP",756346237);

break;
case (32):
return new cljs.core.Keyword(null,"SPACE","SPACE",1554019928);

break;
case (40):
return new cljs.core.Keyword(null,"DOWN","DOWN",1488296947);

break;
case (78):
return new cljs.core.Keyword(null,"N","N",-640629860);

break;
case (80):
return new cljs.core.Keyword(null,"P","P",1668913291);

break;
case (82):
return new cljs.core.Keyword(null,"R","R",-936662523);

break;
case (191):
return new cljs.core.Keyword(null,"QMARK","QMARK",-1169024158);

break;
default:
return new cljs.core.Keyword(null,"UNSUPPORTED","UNSUPPORTED",472120725);

}
});
attack.entrypoint.inspect_key = (function attack$entrypoint$inspect_key(event){
attack.entrypoint.log(event);

return cljs.core.identity;
});
attack.entrypoint.keyup_handler = (function attack$entrypoint$keyup_handler(event){

var func = (function (){var G__23750 = attack.entrypoint.which(event.which);
var G__23750__$1 = (((G__23750 instanceof cljs.core.Keyword))?G__23750.fqn:null);
switch (G__23750__$1) {
case "ENTER":
return attack.display.cursor_swap;

break;
case "SPACE":
return attack.display.cursor_swap;

break;
case "LEFT":
return attack.display.cursor_left;

break;
case "RIGHT":
return attack.display.cursor_right;

break;
case "UP":
return attack.display.cursor_up;

break;
case "DOWN":
return attack.display.cursor_down;

break;
case "R":
return attack.display.add_line;

break;
case "N":
return attack.entrypoint.restart;

break;
case "EXCLAMATION":
return attack.display.add_garbage_block;

break;
case "QMARK":
return attack.display.inspect;

break;
default:
return attack.entrypoint.inspect_key(event);

}
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(attack.entrypoint.GI,func);
});
goog.exportSymbol('attack.entrypoint.keyup_handler', attack.entrypoint.keyup_handler);
attack.entrypoint.init = (function attack$entrypoint$init(key_binder){

attack.entrypoint.log(["Initializing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(attack.entrypoint.GI))].join(''));

attack.entrypoint.initial_render();

attack.entrypoint.begin_stepping();

return attack.entrypoint.begin_rendering();
});
goog.exportSymbol('attack.entrypoint.init', attack.entrypoint.init);

//# sourceMappingURL=attack.entrypoint.js.map
