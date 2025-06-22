goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32176){
var map__32177 = p__32176;
var map__32177__$1 = cljs.core.__destructure_map(map__32177);
var m = map__32177__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32177__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32177__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32206_32687 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32207_32688 = null;
var count__32208_32689 = (0);
var i__32209_32690 = (0);
while(true){
if((i__32209_32690 < count__32208_32689)){
var f_32692 = chunk__32207_32688.cljs$core$IIndexed$_nth$arity$2(null, i__32209_32690);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32692], 0));


var G__32693 = seq__32206_32687;
var G__32694 = chunk__32207_32688;
var G__32695 = count__32208_32689;
var G__32696 = (i__32209_32690 + (1));
seq__32206_32687 = G__32693;
chunk__32207_32688 = G__32694;
count__32208_32689 = G__32695;
i__32209_32690 = G__32696;
continue;
} else {
var temp__5825__auto___32697 = cljs.core.seq(seq__32206_32687);
if(temp__5825__auto___32697){
var seq__32206_32698__$1 = temp__5825__auto___32697;
if(cljs.core.chunked_seq_QMARK_(seq__32206_32698__$1)){
var c__5525__auto___32699 = cljs.core.chunk_first(seq__32206_32698__$1);
var G__32700 = cljs.core.chunk_rest(seq__32206_32698__$1);
var G__32701 = c__5525__auto___32699;
var G__32702 = cljs.core.count(c__5525__auto___32699);
var G__32703 = (0);
seq__32206_32687 = G__32700;
chunk__32207_32688 = G__32701;
count__32208_32689 = G__32702;
i__32209_32690 = G__32703;
continue;
} else {
var f_32704 = cljs.core.first(seq__32206_32698__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32704], 0));


var G__32705 = cljs.core.next(seq__32206_32698__$1);
var G__32706 = null;
var G__32707 = (0);
var G__32708 = (0);
seq__32206_32687 = G__32705;
chunk__32207_32688 = G__32706;
count__32208_32689 = G__32707;
i__32209_32690 = G__32708;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32709 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_32709], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_32709)))?cljs.core.second(arglists_32709):arglists_32709)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32256_32710 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32257_32711 = null;
var count__32258_32712 = (0);
var i__32259_32713 = (0);
while(true){
if((i__32259_32713 < count__32258_32712)){
var vec__32287_32714 = chunk__32257_32711.cljs$core$IIndexed$_nth$arity$2(null, i__32259_32713);
var name_32715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32287_32714,(0),null);
var map__32290_32716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32287_32714,(1),null);
var map__32290_32717__$1 = cljs.core.__destructure_map(map__32290_32716);
var doc_32718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32290_32717__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32290_32717__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32715], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32719], 0));

if(cljs.core.truth_(doc_32718)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32718], 0));
} else {
}


var G__32728 = seq__32256_32710;
var G__32729 = chunk__32257_32711;
var G__32730 = count__32258_32712;
var G__32731 = (i__32259_32713 + (1));
seq__32256_32710 = G__32728;
chunk__32257_32711 = G__32729;
count__32258_32712 = G__32730;
i__32259_32713 = G__32731;
continue;
} else {
var temp__5825__auto___32738 = cljs.core.seq(seq__32256_32710);
if(temp__5825__auto___32738){
var seq__32256_32739__$1 = temp__5825__auto___32738;
if(cljs.core.chunked_seq_QMARK_(seq__32256_32739__$1)){
var c__5525__auto___32740 = cljs.core.chunk_first(seq__32256_32739__$1);
var G__32741 = cljs.core.chunk_rest(seq__32256_32739__$1);
var G__32742 = c__5525__auto___32740;
var G__32743 = cljs.core.count(c__5525__auto___32740);
var G__32744 = (0);
seq__32256_32710 = G__32741;
chunk__32257_32711 = G__32742;
count__32258_32712 = G__32743;
i__32259_32713 = G__32744;
continue;
} else {
var vec__32299_32745 = cljs.core.first(seq__32256_32739__$1);
var name_32746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32299_32745,(0),null);
var map__32302_32747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32299_32745,(1),null);
var map__32302_32748__$1 = cljs.core.__destructure_map(map__32302_32747);
var doc_32749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32302_32748__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32302_32748__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32746], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32750], 0));

if(cljs.core.truth_(doc_32749)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32749], 0));
} else {
}


var G__32753 = cljs.core.next(seq__32256_32739__$1);
var G__32754 = null;
var G__32755 = (0);
var G__32756 = (0);
seq__32256_32710 = G__32753;
chunk__32257_32711 = G__32754;
count__32258_32712 = G__32755;
i__32259_32713 = G__32756;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__32307 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32308 = null;
var count__32309 = (0);
var i__32310 = (0);
while(true){
if((i__32310 < count__32309)){
var role = chunk__32308.cljs$core$IIndexed$_nth$arity$2(null, i__32310);
var temp__5825__auto___32757__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___32757__$1)){
var spec_32758 = temp__5825__auto___32757__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32758)], 0));
} else {
}


var G__32759 = seq__32307;
var G__32760 = chunk__32308;
var G__32761 = count__32309;
var G__32762 = (i__32310 + (1));
seq__32307 = G__32759;
chunk__32308 = G__32760;
count__32309 = G__32761;
i__32310 = G__32762;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__32307);
if(temp__5825__auto____$1){
var seq__32307__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32307__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__32307__$1);
var G__32764 = cljs.core.chunk_rest(seq__32307__$1);
var G__32765 = c__5525__auto__;
var G__32766 = cljs.core.count(c__5525__auto__);
var G__32767 = (0);
seq__32307 = G__32764;
chunk__32308 = G__32765;
count__32309 = G__32766;
i__32310 = G__32767;
continue;
} else {
var role = cljs.core.first(seq__32307__$1);
var temp__5825__auto___32768__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___32768__$2)){
var spec_32769 = temp__5825__auto___32768__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32769)], 0));
} else {
}


var G__32770 = cljs.core.next(seq__32307__$1);
var G__32771 = null;
var G__32772 = (0);
var G__32773 = (0);
seq__32307 = G__32770;
chunk__32308 = G__32771;
count__32309 = G__32772;
i__32310 = G__32773;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__32410 = datafied_throwable;
var map__32410__$1 = cljs.core.__destructure_map(map__32410);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32410__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32410__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32410__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32415 = cljs.core.last(via);
var map__32415__$1 = cljs.core.__destructure_map(map__32415);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32415__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32415__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32415__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32416 = data;
var map__32416__$1 = cljs.core.__destructure_map(map__32416);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32416__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32416__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32416__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32417 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__32417__$1 = cljs.core.__destructure_map(map__32417);
var top_data = map__32417__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32417__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__32437 = phase;
var G__32437__$1 = (((G__32437 instanceof cljs.core.Keyword))?G__32437.fqn:null);
switch (G__32437__$1) {
case "read-source":
var map__32442 = data;
var map__32442__$1 = cljs.core.__destructure_map(map__32442);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32442__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32442__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32447 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__32447__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32447,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32447);
var G__32447__$2 = (cljs.core.truth_((function (){var fexpr__32450 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32450.cljs$core$IFn$_invoke$arity$1 ? fexpr__32450.cljs$core$IFn$_invoke$arity$1(source) : fexpr__32450.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32447__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32447__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32447__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32447__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32453 = top_data;
var G__32453__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32453,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32453);
var G__32453__$2 = (cljs.core.truth_((function (){var fexpr__32455 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32455.cljs$core$IFn$_invoke$arity$1 ? fexpr__32455.cljs$core$IFn$_invoke$arity$1(source) : fexpr__32455.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32453__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32453__$1);
var G__32453__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32453__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32453__$2);
var G__32453__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32453__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32453__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32453__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32453__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32458 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32458,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32458,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32458,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32458,(3),null);
var G__32461 = top_data;
var G__32461__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32461,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32461);
var G__32461__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32461__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32461__$1);
var G__32461__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32461__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32461__$2);
var G__32461__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32461__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32461__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32461__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32461__$4;
}

break;
case "execution":
var vec__32490 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__32376_SHARP_){
var or__5002__auto__ = (p1__32376_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__32524 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32524.cljs$core$IFn$_invoke$arity$1 ? fexpr__32524.cljs$core$IFn$_invoke$arity$1(p1__32376_SHARP_) : fexpr__32524.call(null, p1__32376_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__32549 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32549__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32549,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32549);
var G__32549__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32549__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32549__$1);
var G__32549__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32549__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32549__$2);
var G__32549__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32549__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32549__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32549__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32549__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32437__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32627){
var map__32629 = p__32627;
var map__32629__$1 = cljs.core.__destructure_map(map__32629);
var triage_data = map__32629__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32634 = phase;
var G__32634__$1 = (((G__32634 instanceof cljs.core.Keyword))?G__32634.fqn:null);
switch (G__32634__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__32635 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__32636 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32637 = loc;
var G__32638 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32641_32777 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32642_32778 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32643_32779 = true;
var _STAR_print_fn_STAR__temp_val__32644_32780 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32643_32779);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32644_32780);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32615_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32615_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32642_32778);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32641_32777);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32635,G__32636,G__32637,G__32638) : format.call(null, G__32635,G__32636,G__32637,G__32638));

break;
case "macroexpansion":
var G__32650 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__32651 = cause_type;
var G__32652 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32653 = loc;
var G__32654 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32650,G__32651,G__32652,G__32653,G__32654) : format.call(null, G__32650,G__32651,G__32652,G__32653,G__32654));

break;
case "compile-syntax-check":
var G__32655 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__32656 = cause_type;
var G__32657 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32658 = loc;
var G__32659 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32655,G__32656,G__32657,G__32658,G__32659) : format.call(null, G__32655,G__32656,G__32657,G__32658,G__32659));

break;
case "compilation":
var G__32660 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__32661 = cause_type;
var G__32662 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32663 = loc;
var G__32664 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32660,G__32661,G__32662,G__32663,G__32664) : format.call(null, G__32660,G__32661,G__32662,G__32663,G__32664));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__32665 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__32666 = symbol;
var G__32667 = loc;
var G__32668 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32669_32784 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32670_32785 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32671_32786 = true;
var _STAR_print_fn_STAR__temp_val__32672_32787 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32671_32786);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32672_32787);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32622_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32622_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32670_32785);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32669_32784);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32665,G__32666,G__32667,G__32668) : format.call(null, G__32665,G__32666,G__32667,G__32668));
} else {
var G__32673 = "Execution error%s at %s(%s).\n%s\n";
var G__32674 = cause_type;
var G__32675 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32676 = loc;
var G__32677 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32673,G__32674,G__32675,G__32676,G__32677) : format.call(null, G__32673,G__32674,G__32675,G__32676,G__32677));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32634__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
