goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__33368,p__33369){
var map__33370 = p__33368;
var map__33370__$1 = cljs.core.__destructure_map(map__33370);
var svc = map__33370__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33370__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33370__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33370__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__33371 = p__33369;
var map__33371__$1 = cljs.core.__destructure_map(map__33371);
var msg = map__33371__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33371__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33371__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33371__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33371__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__33376,p__33377){
var map__33378 = p__33376;
var map__33378__$1 = cljs.core.__destructure_map(map__33378);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33378__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__33379 = p__33377;
var map__33379__$1 = cljs.core.__destructure_map(map__33379);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33379__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__33384,p__33385){
var map__33386 = p__33384;
var map__33386__$1 = cljs.core.__destructure_map(map__33386);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33386__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33386__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__33387 = p__33385;
var map__33387__$1 = cljs.core.__destructure_map(map__33387);
var msg = map__33387__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33387__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__33393,tid){
var map__33394 = p__33393;
var map__33394__$1 = cljs.core.__destructure_map(map__33394);
var svc = map__33394__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33394__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__33406 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__33407 = null;
var count__33408 = (0);
var i__33409 = (0);
while(true){
if((i__33409 < count__33408)){
var vec__33420 = chunk__33407.cljs$core$IIndexed$_nth$arity$2(null, i__33409);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33420,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33420,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__33595 = seq__33406;
var G__33596 = chunk__33407;
var G__33597 = count__33408;
var G__33598 = (i__33409 + (1));
seq__33406 = G__33595;
chunk__33407 = G__33596;
count__33408 = G__33597;
i__33409 = G__33598;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__33406);
if(temp__5825__auto__){
var seq__33406__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33406__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33406__$1);
var G__33604 = cljs.core.chunk_rest(seq__33406__$1);
var G__33605 = c__5525__auto__;
var G__33606 = cljs.core.count(c__5525__auto__);
var G__33607 = (0);
seq__33406 = G__33604;
chunk__33407 = G__33605;
count__33408 = G__33606;
i__33409 = G__33607;
continue;
} else {
var vec__33511 = cljs.core.first(seq__33406__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__33608 = cljs.core.next(seq__33406__$1);
var G__33609 = null;
var G__33610 = (0);
var G__33611 = (0);
seq__33406 = G__33608;
chunk__33407 = G__33609;
count__33408 = G__33610;
i__33409 = G__33611;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__33397_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__33397_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__33398_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__33398_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__33399_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__33399_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__33400_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__33400_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__33544){
var map__33545 = p__33544;
var map__33545__$1 = cljs.core.__destructure_map(map__33545);
var svc = map__33545__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33545__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33545__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
