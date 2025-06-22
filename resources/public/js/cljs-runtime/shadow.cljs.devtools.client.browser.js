goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___34672 = arguments.length;
var i__5727__auto___34673 = (0);
while(true){
if((i__5727__auto___34673 < len__5726__auto___34672)){
args__5732__auto__.push((arguments[i__5727__auto___34673]));

var G__34674 = (i__5727__auto___34673 + (1));
i__5727__auto___34673 = G__34674;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34359){
var G__34360 = cljs.core.first(seq34359);
var seq34359__$1 = cljs.core.next(seq34359);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34360,seq34359__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34370 = cljs.core.seq(sources);
var chunk__34372 = null;
var count__34373 = (0);
var i__34374 = (0);
while(true){
if((i__34374 < count__34373)){
var map__34381 = chunk__34372.cljs$core$IIndexed$_nth$arity$2(null, i__34374);
var map__34381__$1 = cljs.core.__destructure_map(map__34381);
var src = map__34381__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34381__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34381__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34381__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34381__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e34382){var e_34675 = e34382;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34675);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34675.message)].join('')));
}

var G__34676 = seq__34370;
var G__34677 = chunk__34372;
var G__34678 = count__34373;
var G__34679 = (i__34374 + (1));
seq__34370 = G__34676;
chunk__34372 = G__34677;
count__34373 = G__34678;
i__34374 = G__34679;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__34370);
if(temp__5825__auto__){
var seq__34370__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34370__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__34370__$1);
var G__34680 = cljs.core.chunk_rest(seq__34370__$1);
var G__34681 = c__5525__auto__;
var G__34682 = cljs.core.count(c__5525__auto__);
var G__34683 = (0);
seq__34370 = G__34680;
chunk__34372 = G__34681;
count__34373 = G__34682;
i__34374 = G__34683;
continue;
} else {
var map__34383 = cljs.core.first(seq__34370__$1);
var map__34383__$1 = cljs.core.__destructure_map(map__34383);
var src = map__34383__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34383__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34383__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34383__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34383__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e34386){var e_34684 = e34386;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34684);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34684.message)].join('')));
}

var G__34685 = cljs.core.next(seq__34370__$1);
var G__34686 = null;
var G__34687 = (0);
var G__34688 = (0);
seq__34370 = G__34685;
chunk__34372 = G__34686;
count__34373 = G__34687;
i__34374 = G__34688;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34397 = cljs.core.seq(js_requires);
var chunk__34398 = null;
var count__34399 = (0);
var i__34400 = (0);
while(true){
if((i__34400 < count__34399)){
var js_ns = chunk__34398.cljs$core$IIndexed$_nth$arity$2(null, i__34400);
var require_str_34689 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34689);


var G__34690 = seq__34397;
var G__34691 = chunk__34398;
var G__34692 = count__34399;
var G__34693 = (i__34400 + (1));
seq__34397 = G__34690;
chunk__34398 = G__34691;
count__34399 = G__34692;
i__34400 = G__34693;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__34397);
if(temp__5825__auto__){
var seq__34397__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34397__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__34397__$1);
var G__34694 = cljs.core.chunk_rest(seq__34397__$1);
var G__34695 = c__5525__auto__;
var G__34696 = cljs.core.count(c__5525__auto__);
var G__34697 = (0);
seq__34397 = G__34694;
chunk__34398 = G__34695;
count__34399 = G__34696;
i__34400 = G__34697;
continue;
} else {
var js_ns = cljs.core.first(seq__34397__$1);
var require_str_34698 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34698);


var G__34699 = cljs.core.next(seq__34397__$1);
var G__34700 = null;
var G__34701 = (0);
var G__34702 = (0);
seq__34397 = G__34699;
chunk__34398 = G__34700;
count__34399 = G__34701;
i__34400 = G__34702;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__34402){
var map__34403 = p__34402;
var map__34403__$1 = cljs.core.__destructure_map(map__34403);
var msg = map__34403__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34403__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34403__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34404(s__34405){
return (new cljs.core.LazySeq(null,(function (){
var s__34405__$1 = s__34405;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__34405__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__34410 = cljs.core.first(xs__6385__auto__);
var map__34410__$1 = cljs.core.__destructure_map(map__34410);
var src = map__34410__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34410__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34410__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__34405__$1,map__34410,map__34410__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__34403,map__34403__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34404_$_iter__34406(s__34407){
return (new cljs.core.LazySeq(null,((function (s__34405__$1,map__34410,map__34410__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__34403,map__34403__$1,msg,info,reload_info){
return (function (){
var s__34407__$1 = s__34407;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__34407__$1);
if(temp__5825__auto____$1){
var s__34407__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34407__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__34407__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__34409 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__34408 = (0);
while(true){
if((i__34408 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__34408);
cljs.core.chunk_append(b__34409,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34703 = (i__34408 + (1));
i__34408 = G__34703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34409),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34404_$_iter__34406(cljs.core.chunk_rest(s__34407__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34409),null);
}
} else {
var warning = cljs.core.first(s__34407__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34404_$_iter__34406(cljs.core.rest(s__34407__$2)));
}
} else {
return null;
}
break;
}
});})(s__34405__$1,map__34410,map__34410__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__34403,map__34403__$1,msg,info,reload_info))
,null,null));
});})(s__34405__$1,map__34410,map__34410__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__34403,map__34403__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34404(cljs.core.rest(s__34405__$1)));
} else {
var G__34704 = cljs.core.rest(s__34405__$1);
s__34405__$1 = G__34704;
continue;
}
} else {
var G__34705 = cljs.core.rest(s__34405__$1);
s__34405__$1 = G__34705;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__34415_34706 = cljs.core.seq(warnings);
var chunk__34416_34707 = null;
var count__34417_34708 = (0);
var i__34418_34709 = (0);
while(true){
if((i__34418_34709 < count__34417_34708)){
var map__34421_34710 = chunk__34416_34707.cljs$core$IIndexed$_nth$arity$2(null, i__34418_34709);
var map__34421_34711__$1 = cljs.core.__destructure_map(map__34421_34710);
var w_34712 = map__34421_34711__$1;
var msg_34713__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34421_34711__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34421_34711__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34421_34711__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34421_34711__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34716)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34714),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34715),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34713__$1)].join(''));


var G__34717 = seq__34415_34706;
var G__34718 = chunk__34416_34707;
var G__34719 = count__34417_34708;
var G__34720 = (i__34418_34709 + (1));
seq__34415_34706 = G__34717;
chunk__34416_34707 = G__34718;
count__34417_34708 = G__34719;
i__34418_34709 = G__34720;
continue;
} else {
var temp__5825__auto___34721 = cljs.core.seq(seq__34415_34706);
if(temp__5825__auto___34721){
var seq__34415_34722__$1 = temp__5825__auto___34721;
if(cljs.core.chunked_seq_QMARK_(seq__34415_34722__$1)){
var c__5525__auto___34723 = cljs.core.chunk_first(seq__34415_34722__$1);
var G__34724 = cljs.core.chunk_rest(seq__34415_34722__$1);
var G__34725 = c__5525__auto___34723;
var G__34726 = cljs.core.count(c__5525__auto___34723);
var G__34727 = (0);
seq__34415_34706 = G__34724;
chunk__34416_34707 = G__34725;
count__34417_34708 = G__34726;
i__34418_34709 = G__34727;
continue;
} else {
var map__34424_34728 = cljs.core.first(seq__34415_34722__$1);
var map__34424_34729__$1 = cljs.core.__destructure_map(map__34424_34728);
var w_34730 = map__34424_34729__$1;
var msg_34731__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34424_34729__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34424_34729__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34424_34729__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34424_34729__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34734)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34732),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34733),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34731__$1)].join(''));


var G__34735 = cljs.core.next(seq__34415_34722__$1);
var G__34736 = null;
var G__34737 = (0);
var G__34738 = (0);
seq__34415_34706 = G__34735;
chunk__34416_34707 = G__34736;
count__34417_34708 = G__34737;
i__34418_34709 = G__34738;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__34401_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34401_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__34430){
var map__34431 = p__34430;
var map__34431__$1 = cljs.core.__destructure_map(map__34431);
var msg = map__34431__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34431__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34431__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__34432 = cljs.core.seq(updates);
var chunk__34434 = null;
var count__34435 = (0);
var i__34436 = (0);
while(true){
if((i__34436 < count__34435)){
var path = chunk__34434.cljs$core$IIndexed$_nth$arity$2(null, i__34436);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34546_34739 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34550_34740 = null;
var count__34551_34741 = (0);
var i__34552_34742 = (0);
while(true){
if((i__34552_34742 < count__34551_34741)){
var node_34743 = chunk__34550_34740.cljs$core$IIndexed$_nth$arity$2(null, i__34552_34742);
if(cljs.core.not(node_34743.shadow$old)){
var path_match_34744 = shadow.cljs.devtools.client.browser.match_paths(node_34743.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34744)){
var new_link_34745 = (function (){var G__34578 = node_34743.cloneNode(true);
G__34578.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34744),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34578;
})();
(node_34743.shadow$old = true);

(new_link_34745.onload = ((function (seq__34546_34739,chunk__34550_34740,count__34551_34741,i__34552_34742,seq__34432,chunk__34434,count__34435,i__34436,new_link_34745,path_match_34744,node_34743,path,map__34431,map__34431__$1,msg,updates,reload_info){
return (function (e){
var seq__34579_34746 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34581_34747 = null;
var count__34582_34748 = (0);
var i__34583_34749 = (0);
while(true){
if((i__34583_34749 < count__34582_34748)){
var map__34587_34750 = chunk__34581_34747.cljs$core$IIndexed$_nth$arity$2(null, i__34583_34749);
var map__34587_34751__$1 = cljs.core.__destructure_map(map__34587_34750);
var task_34752 = map__34587_34751__$1;
var fn_str_34753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34587_34751__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34587_34751__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34755 = goog.getObjectByName(fn_str_34753,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34754)].join(''));

(fn_obj_34755.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34755.cljs$core$IFn$_invoke$arity$2(path,new_link_34745) : fn_obj_34755.call(null, path,new_link_34745));


var G__34756 = seq__34579_34746;
var G__34757 = chunk__34581_34747;
var G__34758 = count__34582_34748;
var G__34759 = (i__34583_34749 + (1));
seq__34579_34746 = G__34756;
chunk__34581_34747 = G__34757;
count__34582_34748 = G__34758;
i__34583_34749 = G__34759;
continue;
} else {
var temp__5825__auto___34760 = cljs.core.seq(seq__34579_34746);
if(temp__5825__auto___34760){
var seq__34579_34761__$1 = temp__5825__auto___34760;
if(cljs.core.chunked_seq_QMARK_(seq__34579_34761__$1)){
var c__5525__auto___34762 = cljs.core.chunk_first(seq__34579_34761__$1);
var G__34763 = cljs.core.chunk_rest(seq__34579_34761__$1);
var G__34764 = c__5525__auto___34762;
var G__34765 = cljs.core.count(c__5525__auto___34762);
var G__34766 = (0);
seq__34579_34746 = G__34763;
chunk__34581_34747 = G__34764;
count__34582_34748 = G__34765;
i__34583_34749 = G__34766;
continue;
} else {
var map__34588_34767 = cljs.core.first(seq__34579_34761__$1);
var map__34588_34768__$1 = cljs.core.__destructure_map(map__34588_34767);
var task_34769 = map__34588_34768__$1;
var fn_str_34770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34588_34768__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34588_34768__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34772 = goog.getObjectByName(fn_str_34770,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34771)].join(''));

(fn_obj_34772.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34772.cljs$core$IFn$_invoke$arity$2(path,new_link_34745) : fn_obj_34772.call(null, path,new_link_34745));


var G__34773 = cljs.core.next(seq__34579_34761__$1);
var G__34774 = null;
var G__34775 = (0);
var G__34776 = (0);
seq__34579_34746 = G__34773;
chunk__34581_34747 = G__34774;
count__34582_34748 = G__34775;
i__34583_34749 = G__34776;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34743);
});})(seq__34546_34739,chunk__34550_34740,count__34551_34741,i__34552_34742,seq__34432,chunk__34434,count__34435,i__34436,new_link_34745,path_match_34744,node_34743,path,map__34431,map__34431__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34744], 0));

goog.dom.insertSiblingAfter(new_link_34745,node_34743);


var G__34777 = seq__34546_34739;
var G__34778 = chunk__34550_34740;
var G__34779 = count__34551_34741;
var G__34780 = (i__34552_34742 + (1));
seq__34546_34739 = G__34777;
chunk__34550_34740 = G__34778;
count__34551_34741 = G__34779;
i__34552_34742 = G__34780;
continue;
} else {
var G__34781 = seq__34546_34739;
var G__34782 = chunk__34550_34740;
var G__34783 = count__34551_34741;
var G__34784 = (i__34552_34742 + (1));
seq__34546_34739 = G__34781;
chunk__34550_34740 = G__34782;
count__34551_34741 = G__34783;
i__34552_34742 = G__34784;
continue;
}
} else {
var G__34785 = seq__34546_34739;
var G__34786 = chunk__34550_34740;
var G__34787 = count__34551_34741;
var G__34788 = (i__34552_34742 + (1));
seq__34546_34739 = G__34785;
chunk__34550_34740 = G__34786;
count__34551_34741 = G__34787;
i__34552_34742 = G__34788;
continue;
}
} else {
var temp__5825__auto___34789 = cljs.core.seq(seq__34546_34739);
if(temp__5825__auto___34789){
var seq__34546_34790__$1 = temp__5825__auto___34789;
if(cljs.core.chunked_seq_QMARK_(seq__34546_34790__$1)){
var c__5525__auto___34791 = cljs.core.chunk_first(seq__34546_34790__$1);
var G__34792 = cljs.core.chunk_rest(seq__34546_34790__$1);
var G__34793 = c__5525__auto___34791;
var G__34794 = cljs.core.count(c__5525__auto___34791);
var G__34795 = (0);
seq__34546_34739 = G__34792;
chunk__34550_34740 = G__34793;
count__34551_34741 = G__34794;
i__34552_34742 = G__34795;
continue;
} else {
var node_34796 = cljs.core.first(seq__34546_34790__$1);
if(cljs.core.not(node_34796.shadow$old)){
var path_match_34797 = shadow.cljs.devtools.client.browser.match_paths(node_34796.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34797)){
var new_link_34798 = (function (){var G__34589 = node_34796.cloneNode(true);
G__34589.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34797),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34589;
})();
(node_34796.shadow$old = true);

(new_link_34798.onload = ((function (seq__34546_34739,chunk__34550_34740,count__34551_34741,i__34552_34742,seq__34432,chunk__34434,count__34435,i__34436,new_link_34798,path_match_34797,node_34796,seq__34546_34790__$1,temp__5825__auto___34789,path,map__34431,map__34431__$1,msg,updates,reload_info){
return (function (e){
var seq__34590_34799 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34592_34800 = null;
var count__34593_34801 = (0);
var i__34594_34802 = (0);
while(true){
if((i__34594_34802 < count__34593_34801)){
var map__34598_34803 = chunk__34592_34800.cljs$core$IIndexed$_nth$arity$2(null, i__34594_34802);
var map__34598_34804__$1 = cljs.core.__destructure_map(map__34598_34803);
var task_34805 = map__34598_34804__$1;
var fn_str_34806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34598_34804__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34598_34804__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34808 = goog.getObjectByName(fn_str_34806,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34807)].join(''));

(fn_obj_34808.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34808.cljs$core$IFn$_invoke$arity$2(path,new_link_34798) : fn_obj_34808.call(null, path,new_link_34798));


var G__34809 = seq__34590_34799;
var G__34810 = chunk__34592_34800;
var G__34811 = count__34593_34801;
var G__34812 = (i__34594_34802 + (1));
seq__34590_34799 = G__34809;
chunk__34592_34800 = G__34810;
count__34593_34801 = G__34811;
i__34594_34802 = G__34812;
continue;
} else {
var temp__5825__auto___34813__$1 = cljs.core.seq(seq__34590_34799);
if(temp__5825__auto___34813__$1){
var seq__34590_34814__$1 = temp__5825__auto___34813__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34590_34814__$1)){
var c__5525__auto___34815 = cljs.core.chunk_first(seq__34590_34814__$1);
var G__34816 = cljs.core.chunk_rest(seq__34590_34814__$1);
var G__34817 = c__5525__auto___34815;
var G__34818 = cljs.core.count(c__5525__auto___34815);
var G__34819 = (0);
seq__34590_34799 = G__34816;
chunk__34592_34800 = G__34817;
count__34593_34801 = G__34818;
i__34594_34802 = G__34819;
continue;
} else {
var map__34599_34820 = cljs.core.first(seq__34590_34814__$1);
var map__34599_34821__$1 = cljs.core.__destructure_map(map__34599_34820);
var task_34822 = map__34599_34821__$1;
var fn_str_34823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34599_34821__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34599_34821__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34825 = goog.getObjectByName(fn_str_34823,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34824)].join(''));

(fn_obj_34825.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34825.cljs$core$IFn$_invoke$arity$2(path,new_link_34798) : fn_obj_34825.call(null, path,new_link_34798));


var G__34826 = cljs.core.next(seq__34590_34814__$1);
var G__34827 = null;
var G__34828 = (0);
var G__34829 = (0);
seq__34590_34799 = G__34826;
chunk__34592_34800 = G__34827;
count__34593_34801 = G__34828;
i__34594_34802 = G__34829;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34796);
});})(seq__34546_34739,chunk__34550_34740,count__34551_34741,i__34552_34742,seq__34432,chunk__34434,count__34435,i__34436,new_link_34798,path_match_34797,node_34796,seq__34546_34790__$1,temp__5825__auto___34789,path,map__34431,map__34431__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34797], 0));

goog.dom.insertSiblingAfter(new_link_34798,node_34796);


var G__34830 = cljs.core.next(seq__34546_34790__$1);
var G__34831 = null;
var G__34832 = (0);
var G__34833 = (0);
seq__34546_34739 = G__34830;
chunk__34550_34740 = G__34831;
count__34551_34741 = G__34832;
i__34552_34742 = G__34833;
continue;
} else {
var G__34834 = cljs.core.next(seq__34546_34790__$1);
var G__34835 = null;
var G__34836 = (0);
var G__34837 = (0);
seq__34546_34739 = G__34834;
chunk__34550_34740 = G__34835;
count__34551_34741 = G__34836;
i__34552_34742 = G__34837;
continue;
}
} else {
var G__34838 = cljs.core.next(seq__34546_34790__$1);
var G__34839 = null;
var G__34840 = (0);
var G__34841 = (0);
seq__34546_34739 = G__34838;
chunk__34550_34740 = G__34839;
count__34551_34741 = G__34840;
i__34552_34742 = G__34841;
continue;
}
}
} else {
}
}
break;
}


var G__34842 = seq__34432;
var G__34843 = chunk__34434;
var G__34844 = count__34435;
var G__34845 = (i__34436 + (1));
seq__34432 = G__34842;
chunk__34434 = G__34843;
count__34435 = G__34844;
i__34436 = G__34845;
continue;
} else {
var G__34846 = seq__34432;
var G__34847 = chunk__34434;
var G__34848 = count__34435;
var G__34849 = (i__34436 + (1));
seq__34432 = G__34846;
chunk__34434 = G__34847;
count__34435 = G__34848;
i__34436 = G__34849;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__34432);
if(temp__5825__auto__){
var seq__34432__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34432__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__34432__$1);
var G__34850 = cljs.core.chunk_rest(seq__34432__$1);
var G__34851 = c__5525__auto__;
var G__34852 = cljs.core.count(c__5525__auto__);
var G__34853 = (0);
seq__34432 = G__34850;
chunk__34434 = G__34851;
count__34435 = G__34852;
i__34436 = G__34853;
continue;
} else {
var path = cljs.core.first(seq__34432__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34600_34854 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34604_34855 = null;
var count__34605_34856 = (0);
var i__34606_34857 = (0);
while(true){
if((i__34606_34857 < count__34605_34856)){
var node_34858 = chunk__34604_34855.cljs$core$IIndexed$_nth$arity$2(null, i__34606_34857);
if(cljs.core.not(node_34858.shadow$old)){
var path_match_34859 = shadow.cljs.devtools.client.browser.match_paths(node_34858.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34859)){
var new_link_34860 = (function (){var G__34632 = node_34858.cloneNode(true);
G__34632.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34859),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34632;
})();
(node_34858.shadow$old = true);

(new_link_34860.onload = ((function (seq__34600_34854,chunk__34604_34855,count__34605_34856,i__34606_34857,seq__34432,chunk__34434,count__34435,i__34436,new_link_34860,path_match_34859,node_34858,path,seq__34432__$1,temp__5825__auto__,map__34431,map__34431__$1,msg,updates,reload_info){
return (function (e){
var seq__34633_34861 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34635_34862 = null;
var count__34636_34863 = (0);
var i__34637_34864 = (0);
while(true){
if((i__34637_34864 < count__34636_34863)){
var map__34641_34865 = chunk__34635_34862.cljs$core$IIndexed$_nth$arity$2(null, i__34637_34864);
var map__34641_34866__$1 = cljs.core.__destructure_map(map__34641_34865);
var task_34867 = map__34641_34866__$1;
var fn_str_34868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641_34866__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641_34866__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34870 = goog.getObjectByName(fn_str_34868,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34869)].join(''));

(fn_obj_34870.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34870.cljs$core$IFn$_invoke$arity$2(path,new_link_34860) : fn_obj_34870.call(null, path,new_link_34860));


var G__34871 = seq__34633_34861;
var G__34872 = chunk__34635_34862;
var G__34873 = count__34636_34863;
var G__34874 = (i__34637_34864 + (1));
seq__34633_34861 = G__34871;
chunk__34635_34862 = G__34872;
count__34636_34863 = G__34873;
i__34637_34864 = G__34874;
continue;
} else {
var temp__5825__auto___34875__$1 = cljs.core.seq(seq__34633_34861);
if(temp__5825__auto___34875__$1){
var seq__34633_34876__$1 = temp__5825__auto___34875__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34633_34876__$1)){
var c__5525__auto___34877 = cljs.core.chunk_first(seq__34633_34876__$1);
var G__34878 = cljs.core.chunk_rest(seq__34633_34876__$1);
var G__34879 = c__5525__auto___34877;
var G__34880 = cljs.core.count(c__5525__auto___34877);
var G__34881 = (0);
seq__34633_34861 = G__34878;
chunk__34635_34862 = G__34879;
count__34636_34863 = G__34880;
i__34637_34864 = G__34881;
continue;
} else {
var map__34642_34882 = cljs.core.first(seq__34633_34876__$1);
var map__34642_34883__$1 = cljs.core.__destructure_map(map__34642_34882);
var task_34884 = map__34642_34883__$1;
var fn_str_34885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34642_34883__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34642_34883__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34887 = goog.getObjectByName(fn_str_34885,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34886)].join(''));

(fn_obj_34887.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34887.cljs$core$IFn$_invoke$arity$2(path,new_link_34860) : fn_obj_34887.call(null, path,new_link_34860));


var G__34888 = cljs.core.next(seq__34633_34876__$1);
var G__34889 = null;
var G__34890 = (0);
var G__34891 = (0);
seq__34633_34861 = G__34888;
chunk__34635_34862 = G__34889;
count__34636_34863 = G__34890;
i__34637_34864 = G__34891;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34858);
});})(seq__34600_34854,chunk__34604_34855,count__34605_34856,i__34606_34857,seq__34432,chunk__34434,count__34435,i__34436,new_link_34860,path_match_34859,node_34858,path,seq__34432__$1,temp__5825__auto__,map__34431,map__34431__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34859], 0));

goog.dom.insertSiblingAfter(new_link_34860,node_34858);


var G__34892 = seq__34600_34854;
var G__34893 = chunk__34604_34855;
var G__34894 = count__34605_34856;
var G__34895 = (i__34606_34857 + (1));
seq__34600_34854 = G__34892;
chunk__34604_34855 = G__34893;
count__34605_34856 = G__34894;
i__34606_34857 = G__34895;
continue;
} else {
var G__34896 = seq__34600_34854;
var G__34897 = chunk__34604_34855;
var G__34898 = count__34605_34856;
var G__34899 = (i__34606_34857 + (1));
seq__34600_34854 = G__34896;
chunk__34604_34855 = G__34897;
count__34605_34856 = G__34898;
i__34606_34857 = G__34899;
continue;
}
} else {
var G__34900 = seq__34600_34854;
var G__34901 = chunk__34604_34855;
var G__34902 = count__34605_34856;
var G__34903 = (i__34606_34857 + (1));
seq__34600_34854 = G__34900;
chunk__34604_34855 = G__34901;
count__34605_34856 = G__34902;
i__34606_34857 = G__34903;
continue;
}
} else {
var temp__5825__auto___34904__$1 = cljs.core.seq(seq__34600_34854);
if(temp__5825__auto___34904__$1){
var seq__34600_34905__$1 = temp__5825__auto___34904__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34600_34905__$1)){
var c__5525__auto___34906 = cljs.core.chunk_first(seq__34600_34905__$1);
var G__34907 = cljs.core.chunk_rest(seq__34600_34905__$1);
var G__34908 = c__5525__auto___34906;
var G__34909 = cljs.core.count(c__5525__auto___34906);
var G__34910 = (0);
seq__34600_34854 = G__34907;
chunk__34604_34855 = G__34908;
count__34605_34856 = G__34909;
i__34606_34857 = G__34910;
continue;
} else {
var node_34911 = cljs.core.first(seq__34600_34905__$1);
if(cljs.core.not(node_34911.shadow$old)){
var path_match_34912 = shadow.cljs.devtools.client.browser.match_paths(node_34911.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34912)){
var new_link_34913 = (function (){var G__34643 = node_34911.cloneNode(true);
G__34643.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34912),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34643;
})();
(node_34911.shadow$old = true);

(new_link_34913.onload = ((function (seq__34600_34854,chunk__34604_34855,count__34605_34856,i__34606_34857,seq__34432,chunk__34434,count__34435,i__34436,new_link_34913,path_match_34912,node_34911,seq__34600_34905__$1,temp__5825__auto___34904__$1,path,seq__34432__$1,temp__5825__auto__,map__34431,map__34431__$1,msg,updates,reload_info){
return (function (e){
var seq__34644_34914 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34646_34915 = null;
var count__34647_34916 = (0);
var i__34648_34917 = (0);
while(true){
if((i__34648_34917 < count__34647_34916)){
var map__34652_34918 = chunk__34646_34915.cljs$core$IIndexed$_nth$arity$2(null, i__34648_34917);
var map__34652_34919__$1 = cljs.core.__destructure_map(map__34652_34918);
var task_34920 = map__34652_34919__$1;
var fn_str_34921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34652_34919__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34652_34919__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34923 = goog.getObjectByName(fn_str_34921,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34922)].join(''));

(fn_obj_34923.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34923.cljs$core$IFn$_invoke$arity$2(path,new_link_34913) : fn_obj_34923.call(null, path,new_link_34913));


var G__34924 = seq__34644_34914;
var G__34925 = chunk__34646_34915;
var G__34926 = count__34647_34916;
var G__34927 = (i__34648_34917 + (1));
seq__34644_34914 = G__34924;
chunk__34646_34915 = G__34925;
count__34647_34916 = G__34926;
i__34648_34917 = G__34927;
continue;
} else {
var temp__5825__auto___34928__$2 = cljs.core.seq(seq__34644_34914);
if(temp__5825__auto___34928__$2){
var seq__34644_34929__$1 = temp__5825__auto___34928__$2;
if(cljs.core.chunked_seq_QMARK_(seq__34644_34929__$1)){
var c__5525__auto___34930 = cljs.core.chunk_first(seq__34644_34929__$1);
var G__34931 = cljs.core.chunk_rest(seq__34644_34929__$1);
var G__34932 = c__5525__auto___34930;
var G__34933 = cljs.core.count(c__5525__auto___34930);
var G__34934 = (0);
seq__34644_34914 = G__34931;
chunk__34646_34915 = G__34932;
count__34647_34916 = G__34933;
i__34648_34917 = G__34934;
continue;
} else {
var map__34653_34935 = cljs.core.first(seq__34644_34929__$1);
var map__34653_34936__$1 = cljs.core.__destructure_map(map__34653_34935);
var task_34937 = map__34653_34936__$1;
var fn_str_34938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34653_34936__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34653_34936__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34940 = goog.getObjectByName(fn_str_34938,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34939)].join(''));

(fn_obj_34940.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34940.cljs$core$IFn$_invoke$arity$2(path,new_link_34913) : fn_obj_34940.call(null, path,new_link_34913));


var G__34941 = cljs.core.next(seq__34644_34929__$1);
var G__34942 = null;
var G__34943 = (0);
var G__34944 = (0);
seq__34644_34914 = G__34941;
chunk__34646_34915 = G__34942;
count__34647_34916 = G__34943;
i__34648_34917 = G__34944;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34911);
});})(seq__34600_34854,chunk__34604_34855,count__34605_34856,i__34606_34857,seq__34432,chunk__34434,count__34435,i__34436,new_link_34913,path_match_34912,node_34911,seq__34600_34905__$1,temp__5825__auto___34904__$1,path,seq__34432__$1,temp__5825__auto__,map__34431,map__34431__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34912], 0));

goog.dom.insertSiblingAfter(new_link_34913,node_34911);


var G__34945 = cljs.core.next(seq__34600_34905__$1);
var G__34946 = null;
var G__34947 = (0);
var G__34948 = (0);
seq__34600_34854 = G__34945;
chunk__34604_34855 = G__34946;
count__34605_34856 = G__34947;
i__34606_34857 = G__34948;
continue;
} else {
var G__34949 = cljs.core.next(seq__34600_34905__$1);
var G__34950 = null;
var G__34951 = (0);
var G__34952 = (0);
seq__34600_34854 = G__34949;
chunk__34604_34855 = G__34950;
count__34605_34856 = G__34951;
i__34606_34857 = G__34952;
continue;
}
} else {
var G__34953 = cljs.core.next(seq__34600_34905__$1);
var G__34954 = null;
var G__34955 = (0);
var G__34956 = (0);
seq__34600_34854 = G__34953;
chunk__34604_34855 = G__34954;
count__34605_34856 = G__34955;
i__34606_34857 = G__34956;
continue;
}
}
} else {
}
}
break;
}


var G__34957 = cljs.core.next(seq__34432__$1);
var G__34958 = null;
var G__34959 = (0);
var G__34960 = (0);
seq__34432 = G__34957;
chunk__34434 = G__34958;
count__34435 = G__34959;
i__34436 = G__34960;
continue;
} else {
var G__34961 = cljs.core.next(seq__34432__$1);
var G__34962 = null;
var G__34963 = (0);
var G__34964 = (0);
seq__34432 = G__34961;
chunk__34434 = G__34962;
count__34435 = G__34963;
i__34436 = G__34964;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__34654){
var map__34655 = p__34654;
var map__34655__$1 = cljs.core.__destructure_map(map__34655);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34655__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__34656,done,error){
var map__34657 = p__34656;
var map__34657__$1 = cljs.core.__destructure_map(map__34657);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34657__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__34658,done,error){
var map__34659 = p__34658;
var map__34659__$1 = cljs.core.__destructure_map(map__34659);
var msg = map__34659__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34659__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34659__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34659__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34660){
var map__34661 = p__34660;
var map__34661__$1 = cljs.core.__destructure_map(map__34661);
var src = map__34661__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34661__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__34662 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__34662) : done.call(null, G__34662));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__34663){
var map__34664 = p__34663;
var map__34664__$1 = cljs.core.__destructure_map(map__34664);
var msg__$1 = map__34664__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e34665){var ex = e34665;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__34666){
var map__34667 = p__34666;
var map__34667__$1 = cljs.core.__destructure_map(map__34667);
var env = map__34667__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34667__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__34668){
var map__34669 = p__34668;
var map__34669__$1 = cljs.core.__destructure_map(map__34669);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34669__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34669__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__34670){
var map__34671 = p__34670;
var map__34671__$1 = cljs.core.__destructure_map(map__34671);
var svc = map__34671__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34671__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
