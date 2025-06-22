goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28218){
var map__28219 = p__28218;
var map__28219__$1 = cljs.core.__destructure_map(map__28219);
var runtime = map__28219__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28219__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_28590 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_28590)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__28224 = runtime;
var G__28225 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_28590);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__28224,G__28225) : shadow.remote.runtime.shared.process.call(null, G__28224,G__28225));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28227,res){
var map__28228 = p__28227;
var map__28228__$1 = cljs.core.__destructure_map(map__28228);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28228__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28228__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28231 = res;
var G__28231__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28231,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28231);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28231__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28231__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28257 = arguments.length;
switch (G__28257) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28263,msg,handlers,timeout_after_ms){
var map__28264 = p__28263;
var map__28264__$1 = cljs.core.__destructure_map(map__28264);
var runtime = map__28264__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28264__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28599 = arguments.length;
var i__5727__auto___28602 = (0);
while(true){
if((i__5727__auto___28602 < len__5726__auto___28599)){
args__5732__auto__.push((arguments[i__5727__auto___28602]));

var G__28603 = (i__5727__auto___28602 + (1));
i__5727__auto___28602 = G__28603;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28281,ev,args){
var map__28283 = p__28281;
var map__28283__$1 = cljs.core.__destructure_map(map__28283);
var runtime = map__28283__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28283__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28342 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28345 = null;
var count__28346 = (0);
var i__28347 = (0);
while(true){
if((i__28347 < count__28346)){
var ext = chunk__28345.cljs$core$IIndexed$_nth$arity$2(null, i__28347);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28613 = seq__28342;
var G__28614 = chunk__28345;
var G__28615 = count__28346;
var G__28616 = (i__28347 + (1));
seq__28342 = G__28613;
chunk__28345 = G__28614;
count__28346 = G__28615;
i__28347 = G__28616;
continue;
} else {
var G__28619 = seq__28342;
var G__28620 = chunk__28345;
var G__28621 = count__28346;
var G__28622 = (i__28347 + (1));
seq__28342 = G__28619;
chunk__28345 = G__28620;
count__28346 = G__28621;
i__28347 = G__28622;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28342);
if(temp__5825__auto__){
var seq__28342__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28342__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28342__$1);
var G__28623 = cljs.core.chunk_rest(seq__28342__$1);
var G__28624 = c__5525__auto__;
var G__28625 = cljs.core.count(c__5525__auto__);
var G__28626 = (0);
seq__28342 = G__28623;
chunk__28345 = G__28624;
count__28346 = G__28625;
i__28347 = G__28626;
continue;
} else {
var ext = cljs.core.first(seq__28342__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28628 = cljs.core.next(seq__28342__$1);
var G__28629 = null;
var G__28630 = (0);
var G__28631 = (0);
seq__28342 = G__28628;
chunk__28345 = G__28629;
count__28346 = G__28630;
i__28347 = G__28631;
continue;
} else {
var G__28637 = cljs.core.next(seq__28342__$1);
var G__28638 = null;
var G__28639 = (0);
var G__28640 = (0);
seq__28342 = G__28637;
chunk__28345 = G__28638;
count__28346 = G__28639;
i__28347 = G__28640;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28271){
var G__28272 = cljs.core.first(seq28271);
var seq28271__$1 = cljs.core.next(seq28271);
var G__28273 = cljs.core.first(seq28271__$1);
var seq28271__$2 = cljs.core.next(seq28271__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28272,G__28273,seq28271__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28409,p__28410){
var map__28415 = p__28409;
var map__28415__$1 = cljs.core.__destructure_map(map__28415);
var runtime = map__28415__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28415__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28418 = p__28410;
var map__28418__$1 = cljs.core.__destructure_map(map__28418);
var msg = map__28418__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28418__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__28423 = cljs.core.deref(state_ref);
var map__28423__$1 = cljs.core.__destructure_map(map__28423);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28423__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28423__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28428,msg){
var map__28431 = p__28428;
var map__28431__$1 = cljs.core.__destructure_map(map__28431);
var runtime = map__28431__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28431__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28457,key,p__28458){
var map__28459 = p__28457;
var map__28459__$1 = cljs.core.__destructure_map(map__28459);
var state = map__28459__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28459__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28460 = p__28458;
var map__28460__$1 = cljs.core.__destructure_map(map__28460);
var spec = map__28460__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28460__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28460__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__28465,key,spec){
var map__28466 = p__28465;
var map__28466__$1 = cljs.core.__destructure_map(map__28466);
var runtime = map__28466__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28466__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___28656 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___28656 == null)){
} else {
var on_welcome_28657 = temp__5829__auto___28656;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_28657.cljs$core$IFn$_invoke$arity$0 ? on_welcome_28657.cljs$core$IFn$_invoke$arity$0() : on_welcome_28657.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__28475_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__28475_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__28477_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__28477_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__28478_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__28478_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__28479_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__28479_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__28480_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__28480_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__28521,key){
var map__28522 = p__28521;
var map__28522__$1 = cljs.core.__destructure_map(map__28522);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28522__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__28530,msg){
var map__28531 = p__28530;
var map__28531__$1 = cljs.core.__destructure_map(map__28531);
var runtime = map__28531__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28531__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__28549,p__28550){
var map__28554 = p__28549;
var map__28554__$1 = cljs.core.__destructure_map(map__28554);
var runtime = map__28554__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28554__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28555 = p__28550;
var map__28555__$1 = cljs.core.__destructure_map(map__28555);
var msg = map__28555__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28555__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28555__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__28570 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28572 = null;
var count__28573 = (0);
var i__28574 = (0);
while(true){
if((i__28574 < count__28573)){
var map__28584 = chunk__28572.cljs$core$IIndexed$_nth$arity$2(null, i__28574);
var map__28584__$1 = cljs.core.__destructure_map(map__28584);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28584__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__28689 = seq__28570;
var G__28690 = chunk__28572;
var G__28691 = count__28573;
var G__28692 = (i__28574 + (1));
seq__28570 = G__28689;
chunk__28572 = G__28690;
count__28573 = G__28691;
i__28574 = G__28692;
continue;
} else {
var G__28699 = seq__28570;
var G__28700 = chunk__28572;
var G__28701 = count__28573;
var G__28702 = (i__28574 + (1));
seq__28570 = G__28699;
chunk__28572 = G__28700;
count__28573 = G__28701;
i__28574 = G__28702;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28570);
if(temp__5825__auto__){
var seq__28570__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28570__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28570__$1);
var G__28708 = cljs.core.chunk_rest(seq__28570__$1);
var G__28709 = c__5525__auto__;
var G__28710 = cljs.core.count(c__5525__auto__);
var G__28711 = (0);
seq__28570 = G__28708;
chunk__28572 = G__28709;
count__28573 = G__28710;
i__28574 = G__28711;
continue;
} else {
var map__28587 = cljs.core.first(seq__28570__$1);
var map__28587__$1 = cljs.core.__destructure_map(map__28587);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28587__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__28717 = cljs.core.next(seq__28570__$1);
var G__28718 = null;
var G__28719 = (0);
var G__28720 = (0);
seq__28570 = G__28717;
chunk__28572 = G__28718;
count__28573 = G__28719;
i__28574 = G__28720;
continue;
} else {
var G__28721 = cljs.core.next(seq__28570__$1);
var G__28722 = null;
var G__28723 = (0);
var G__28724 = (0);
seq__28570 = G__28721;
chunk__28572 = G__28722;
count__28573 = G__28723;
i__28574 = G__28724;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
