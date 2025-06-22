goog.provide('attack.game_interface');
attack.game_interface.default$ = (function attack$game_interface$default(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game","game",-441523833),attack.game.default$(),new cljs.core.Keyword(null,"cursor","cursor",1011937484),attack.cursor.default$()], null);
});
attack.game_interface.step = (function attack$game_interface$step(p__23649){
var map__23650 = p__23649;
var map__23650__$1 = cljs.core.__destructure_map(map__23650);
var gi = map__23650__$1;
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23650__$1,new cljs.core.Keyword(null,"game","game",-441523833));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gi,new cljs.core.Keyword(null,"game","game",-441523833),attack.game.step(game));
});

//# sourceMappingURL=attack.game_interface.js.map
