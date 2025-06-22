goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32014 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32014(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32016 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32016(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__30681 = coll;
var G__30682 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__30681,G__30682) : shadow.dom.lazy_native_coll_seq.call(null, G__30681,G__30682));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__30708 = arguments.length;
switch (G__30708) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__30710 = arguments.length;
switch (G__30710) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__30718 = arguments.length;
switch (G__30718) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__30720 = arguments.length;
switch (G__30720) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__30732 = arguments.length;
switch (G__30732) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__30747 = arguments.length;
switch (G__30747) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e30774){if((e30774 instanceof Object)){
var e = e30774;
return console.log("didnt support attachEvent",el,e);
} else {
throw e30774;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__30801 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__30802 = null;
var count__30803 = (0);
var i__30804 = (0);
while(true){
if((i__30804 < count__30803)){
var el = chunk__30802.cljs$core$IIndexed$_nth$arity$2(null, i__30804);
var handler_32032__$1 = ((function (seq__30801,chunk__30802,count__30803,i__30804,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__30801,chunk__30802,count__30803,i__30804,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32032__$1);


var G__32033 = seq__30801;
var G__32034 = chunk__30802;
var G__32035 = count__30803;
var G__32036 = (i__30804 + (1));
seq__30801 = G__32033;
chunk__30802 = G__32034;
count__30803 = G__32035;
i__30804 = G__32036;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30801);
if(temp__5825__auto__){
var seq__30801__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30801__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30801__$1);
var G__32037 = cljs.core.chunk_rest(seq__30801__$1);
var G__32038 = c__5525__auto__;
var G__32039 = cljs.core.count(c__5525__auto__);
var G__32040 = (0);
seq__30801 = G__32037;
chunk__30802 = G__32038;
count__30803 = G__32039;
i__30804 = G__32040;
continue;
} else {
var el = cljs.core.first(seq__30801__$1);
var handler_32041__$1 = ((function (seq__30801,chunk__30802,count__30803,i__30804,el,seq__30801__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__30801,chunk__30802,count__30803,i__30804,el,seq__30801__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32041__$1);


var G__32042 = cljs.core.next(seq__30801__$1);
var G__32043 = null;
var G__32044 = (0);
var G__32045 = (0);
seq__30801 = G__32042;
chunk__30802 = G__32043;
count__30803 = G__32044;
i__30804 = G__32045;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__30824 = arguments.length;
switch (G__30824) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__30835 = cljs.core.seq(events);
var chunk__30848 = null;
var count__30849 = (0);
var i__30850 = (0);
while(true){
if((i__30850 < count__30849)){
var vec__30857 = chunk__30848.cljs$core$IIndexed$_nth$arity$2(null, i__30850);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30857,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30857,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32053 = seq__30835;
var G__32054 = chunk__30848;
var G__32055 = count__30849;
var G__32056 = (i__30850 + (1));
seq__30835 = G__32053;
chunk__30848 = G__32054;
count__30849 = G__32055;
i__30850 = G__32056;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30835);
if(temp__5825__auto__){
var seq__30835__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30835__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30835__$1);
var G__32057 = cljs.core.chunk_rest(seq__30835__$1);
var G__32058 = c__5525__auto__;
var G__32059 = cljs.core.count(c__5525__auto__);
var G__32060 = (0);
seq__30835 = G__32057;
chunk__30848 = G__32058;
count__30849 = G__32059;
i__30850 = G__32060;
continue;
} else {
var vec__30861 = cljs.core.first(seq__30835__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30861,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30861,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32061 = cljs.core.next(seq__30835__$1);
var G__32062 = null;
var G__32063 = (0);
var G__32064 = (0);
seq__30835 = G__32061;
chunk__30848 = G__32062;
count__30849 = G__32063;
i__30850 = G__32064;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__30872 = cljs.core.seq(styles);
var chunk__30873 = null;
var count__30874 = (0);
var i__30875 = (0);
while(true){
if((i__30875 < count__30874)){
var vec__30899 = chunk__30873.cljs$core$IIndexed$_nth$arity$2(null, i__30875);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30899,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30899,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32065 = seq__30872;
var G__32066 = chunk__30873;
var G__32067 = count__30874;
var G__32068 = (i__30875 + (1));
seq__30872 = G__32065;
chunk__30873 = G__32066;
count__30874 = G__32067;
i__30875 = G__32068;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30872);
if(temp__5825__auto__){
var seq__30872__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30872__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30872__$1);
var G__32073 = cljs.core.chunk_rest(seq__30872__$1);
var G__32074 = c__5525__auto__;
var G__32075 = cljs.core.count(c__5525__auto__);
var G__32076 = (0);
seq__30872 = G__32073;
chunk__30873 = G__32074;
count__30874 = G__32075;
i__30875 = G__32076;
continue;
} else {
var vec__30904 = cljs.core.first(seq__30872__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30904,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32077 = cljs.core.next(seq__30872__$1);
var G__32078 = null;
var G__32079 = (0);
var G__32080 = (0);
seq__30872 = G__32077;
chunk__30873 = G__32078;
count__30874 = G__32079;
i__30875 = G__32080;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__30913_32081 = key;
var G__30913_32082__$1 = (((G__30913_32081 instanceof cljs.core.Keyword))?G__30913_32081.fqn:null);
switch (G__30913_32082__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32084 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_32084,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_32084,"aria-");
}
})())){
el.setAttribute(ks_32084,value);
} else {
(el[ks_32084] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__30966){
var map__30970 = p__30966;
var map__30970__$1 = cljs.core.__destructure_map(map__30970);
var props = map__30970__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30970__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__30971 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30971,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30971,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30971,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__30974 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__30974,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__30974;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__30979 = arguments.length;
switch (G__30979) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__30994){
var vec__30995 = p__30994;
var seq__30996 = cljs.core.seq(vec__30995);
var first__30997 = cljs.core.first(seq__30996);
var seq__30996__$1 = cljs.core.next(seq__30996);
var nn = first__30997;
var first__30997__$1 = cljs.core.first(seq__30996__$1);
var seq__30996__$2 = cljs.core.next(seq__30996__$1);
var np = first__30997__$1;
var nc = seq__30996__$2;
var node = vec__30995;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30998 = nn;
var G__30999 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30998,G__30999) : create_fn.call(null, G__30998,G__30999));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31000 = nn;
var G__31001 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31000,G__31001) : create_fn.call(null, G__31000,G__31001));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__31002 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31002,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31002,(1),null);
var seq__31011_32093 = cljs.core.seq(node_children);
var chunk__31012_32094 = null;
var count__31013_32095 = (0);
var i__31014_32096 = (0);
while(true){
if((i__31014_32096 < count__31013_32095)){
var child_struct_32097 = chunk__31012_32094.cljs$core$IIndexed$_nth$arity$2(null, i__31014_32096);
var children_32098 = shadow.dom.dom_node(child_struct_32097);
if(cljs.core.seq_QMARK_(children_32098)){
var seq__31047_32099 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32098));
var chunk__31049_32100 = null;
var count__31050_32101 = (0);
var i__31051_32102 = (0);
while(true){
if((i__31051_32102 < count__31050_32101)){
var child_32104 = chunk__31049_32100.cljs$core$IIndexed$_nth$arity$2(null, i__31051_32102);
if(cljs.core.truth_(child_32104)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32104);


var G__32106 = seq__31047_32099;
var G__32107 = chunk__31049_32100;
var G__32108 = count__31050_32101;
var G__32109 = (i__31051_32102 + (1));
seq__31047_32099 = G__32106;
chunk__31049_32100 = G__32107;
count__31050_32101 = G__32108;
i__31051_32102 = G__32109;
continue;
} else {
var G__32110 = seq__31047_32099;
var G__32111 = chunk__31049_32100;
var G__32112 = count__31050_32101;
var G__32113 = (i__31051_32102 + (1));
seq__31047_32099 = G__32110;
chunk__31049_32100 = G__32111;
count__31050_32101 = G__32112;
i__31051_32102 = G__32113;
continue;
}
} else {
var temp__5825__auto___32114 = cljs.core.seq(seq__31047_32099);
if(temp__5825__auto___32114){
var seq__31047_32115__$1 = temp__5825__auto___32114;
if(cljs.core.chunked_seq_QMARK_(seq__31047_32115__$1)){
var c__5525__auto___32116 = cljs.core.chunk_first(seq__31047_32115__$1);
var G__32117 = cljs.core.chunk_rest(seq__31047_32115__$1);
var G__32118 = c__5525__auto___32116;
var G__32119 = cljs.core.count(c__5525__auto___32116);
var G__32120 = (0);
seq__31047_32099 = G__32117;
chunk__31049_32100 = G__32118;
count__31050_32101 = G__32119;
i__31051_32102 = G__32120;
continue;
} else {
var child_32121 = cljs.core.first(seq__31047_32115__$1);
if(cljs.core.truth_(child_32121)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32121);


var G__32122 = cljs.core.next(seq__31047_32115__$1);
var G__32123 = null;
var G__32124 = (0);
var G__32125 = (0);
seq__31047_32099 = G__32122;
chunk__31049_32100 = G__32123;
count__31050_32101 = G__32124;
i__31051_32102 = G__32125;
continue;
} else {
var G__32126 = cljs.core.next(seq__31047_32115__$1);
var G__32127 = null;
var G__32128 = (0);
var G__32129 = (0);
seq__31047_32099 = G__32126;
chunk__31049_32100 = G__32127;
count__31050_32101 = G__32128;
i__31051_32102 = G__32129;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32098);
}


var G__32130 = seq__31011_32093;
var G__32131 = chunk__31012_32094;
var G__32132 = count__31013_32095;
var G__32133 = (i__31014_32096 + (1));
seq__31011_32093 = G__32130;
chunk__31012_32094 = G__32131;
count__31013_32095 = G__32132;
i__31014_32096 = G__32133;
continue;
} else {
var temp__5825__auto___32134 = cljs.core.seq(seq__31011_32093);
if(temp__5825__auto___32134){
var seq__31011_32135__$1 = temp__5825__auto___32134;
if(cljs.core.chunked_seq_QMARK_(seq__31011_32135__$1)){
var c__5525__auto___32136 = cljs.core.chunk_first(seq__31011_32135__$1);
var G__32137 = cljs.core.chunk_rest(seq__31011_32135__$1);
var G__32138 = c__5525__auto___32136;
var G__32139 = cljs.core.count(c__5525__auto___32136);
var G__32140 = (0);
seq__31011_32093 = G__32137;
chunk__31012_32094 = G__32138;
count__31013_32095 = G__32139;
i__31014_32096 = G__32140;
continue;
} else {
var child_struct_32141 = cljs.core.first(seq__31011_32135__$1);
var children_32142 = shadow.dom.dom_node(child_struct_32141);
if(cljs.core.seq_QMARK_(children_32142)){
var seq__31057_32143 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32142));
var chunk__31059_32144 = null;
var count__31060_32145 = (0);
var i__31061_32146 = (0);
while(true){
if((i__31061_32146 < count__31060_32145)){
var child_32147 = chunk__31059_32144.cljs$core$IIndexed$_nth$arity$2(null, i__31061_32146);
if(cljs.core.truth_(child_32147)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32147);


var G__32148 = seq__31057_32143;
var G__32149 = chunk__31059_32144;
var G__32150 = count__31060_32145;
var G__32151 = (i__31061_32146 + (1));
seq__31057_32143 = G__32148;
chunk__31059_32144 = G__32149;
count__31060_32145 = G__32150;
i__31061_32146 = G__32151;
continue;
} else {
var G__32152 = seq__31057_32143;
var G__32153 = chunk__31059_32144;
var G__32154 = count__31060_32145;
var G__32155 = (i__31061_32146 + (1));
seq__31057_32143 = G__32152;
chunk__31059_32144 = G__32153;
count__31060_32145 = G__32154;
i__31061_32146 = G__32155;
continue;
}
} else {
var temp__5825__auto___32156__$1 = cljs.core.seq(seq__31057_32143);
if(temp__5825__auto___32156__$1){
var seq__31057_32157__$1 = temp__5825__auto___32156__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31057_32157__$1)){
var c__5525__auto___32158 = cljs.core.chunk_first(seq__31057_32157__$1);
var G__32159 = cljs.core.chunk_rest(seq__31057_32157__$1);
var G__32160 = c__5525__auto___32158;
var G__32161 = cljs.core.count(c__5525__auto___32158);
var G__32162 = (0);
seq__31057_32143 = G__32159;
chunk__31059_32144 = G__32160;
count__31060_32145 = G__32161;
i__31061_32146 = G__32162;
continue;
} else {
var child_32163 = cljs.core.first(seq__31057_32157__$1);
if(cljs.core.truth_(child_32163)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32163);


var G__32164 = cljs.core.next(seq__31057_32157__$1);
var G__32165 = null;
var G__32166 = (0);
var G__32167 = (0);
seq__31057_32143 = G__32164;
chunk__31059_32144 = G__32165;
count__31060_32145 = G__32166;
i__31061_32146 = G__32167;
continue;
} else {
var G__32168 = cljs.core.next(seq__31057_32157__$1);
var G__32169 = null;
var G__32170 = (0);
var G__32171 = (0);
seq__31057_32143 = G__32168;
chunk__31059_32144 = G__32169;
count__31060_32145 = G__32170;
i__31061_32146 = G__32171;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32142);
}


var G__32172 = cljs.core.next(seq__31011_32135__$1);
var G__32173 = null;
var G__32174 = (0);
var G__32175 = (0);
seq__31011_32093 = G__32172;
chunk__31012_32094 = G__32173;
count__31013_32095 = G__32174;
i__31014_32096 = G__32175;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__31140 = cljs.core.seq(node);
var chunk__31141 = null;
var count__31142 = (0);
var i__31143 = (0);
while(true){
if((i__31143 < count__31142)){
var n = chunk__31141.cljs$core$IIndexed$_nth$arity$2(null, i__31143);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__32179 = seq__31140;
var G__32180 = chunk__31141;
var G__32181 = count__31142;
var G__32182 = (i__31143 + (1));
seq__31140 = G__32179;
chunk__31141 = G__32180;
count__31142 = G__32181;
i__31143 = G__32182;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__31140);
if(temp__5825__auto__){
var seq__31140__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31140__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31140__$1);
var G__32183 = cljs.core.chunk_rest(seq__31140__$1);
var G__32184 = c__5525__auto__;
var G__32185 = cljs.core.count(c__5525__auto__);
var G__32186 = (0);
seq__31140 = G__32183;
chunk__31141 = G__32184;
count__31142 = G__32185;
i__31143 = G__32186;
continue;
} else {
var n = cljs.core.first(seq__31140__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__32187 = cljs.core.next(seq__31140__$1);
var G__32188 = null;
var G__32189 = (0);
var G__32190 = (0);
seq__31140 = G__32187;
chunk__31141 = G__32188;
count__31142 = G__32189;
i__31143 = G__32190;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__31182 = arguments.length;
switch (G__31182) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__31187 = arguments.length;
switch (G__31187) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__31194 = arguments.length;
switch (G__31194) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32223 = arguments.length;
var i__5727__auto___32224 = (0);
while(true){
if((i__5727__auto___32224 < len__5726__auto___32223)){
args__5732__auto__.push((arguments[i__5727__auto___32224]));

var G__32225 = (i__5727__auto___32224 + (1));
i__5727__auto___32224 = G__32225;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__31237_32226 = cljs.core.seq(nodes);
var chunk__31238_32227 = null;
var count__31239_32228 = (0);
var i__31240_32229 = (0);
while(true){
if((i__31240_32229 < count__31239_32228)){
var node_32230 = chunk__31238_32227.cljs$core$IIndexed$_nth$arity$2(null, i__31240_32229);
fragment.appendChild(shadow.dom._to_dom(node_32230));


var G__32231 = seq__31237_32226;
var G__32232 = chunk__31238_32227;
var G__32233 = count__31239_32228;
var G__32234 = (i__31240_32229 + (1));
seq__31237_32226 = G__32231;
chunk__31238_32227 = G__32232;
count__31239_32228 = G__32233;
i__31240_32229 = G__32234;
continue;
} else {
var temp__5825__auto___32236 = cljs.core.seq(seq__31237_32226);
if(temp__5825__auto___32236){
var seq__31237_32237__$1 = temp__5825__auto___32236;
if(cljs.core.chunked_seq_QMARK_(seq__31237_32237__$1)){
var c__5525__auto___32238 = cljs.core.chunk_first(seq__31237_32237__$1);
var G__32239 = cljs.core.chunk_rest(seq__31237_32237__$1);
var G__32240 = c__5525__auto___32238;
var G__32241 = cljs.core.count(c__5525__auto___32238);
var G__32242 = (0);
seq__31237_32226 = G__32239;
chunk__31238_32227 = G__32240;
count__31239_32228 = G__32241;
i__31240_32229 = G__32242;
continue;
} else {
var node_32243 = cljs.core.first(seq__31237_32237__$1);
fragment.appendChild(shadow.dom._to_dom(node_32243));


var G__32244 = cljs.core.next(seq__31237_32237__$1);
var G__32245 = null;
var G__32246 = (0);
var G__32247 = (0);
seq__31237_32226 = G__32244;
chunk__31238_32227 = G__32245;
count__31239_32228 = G__32246;
i__31240_32229 = G__32247;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq31223){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31223));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__31255_32249 = cljs.core.seq(scripts);
var chunk__31256_32250 = null;
var count__31257_32251 = (0);
var i__31258_32252 = (0);
while(true){
if((i__31258_32252 < count__31257_32251)){
var vec__31271_32253 = chunk__31256_32250.cljs$core$IIndexed$_nth$arity$2(null, i__31258_32252);
var script_tag_32254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31271_32253,(0),null);
var script_body_32255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31271_32253,(1),null);
eval(script_body_32255);


var G__32260 = seq__31255_32249;
var G__32261 = chunk__31256_32250;
var G__32262 = count__31257_32251;
var G__32263 = (i__31258_32252 + (1));
seq__31255_32249 = G__32260;
chunk__31256_32250 = G__32261;
count__31257_32251 = G__32262;
i__31258_32252 = G__32263;
continue;
} else {
var temp__5825__auto___32264 = cljs.core.seq(seq__31255_32249);
if(temp__5825__auto___32264){
var seq__31255_32265__$1 = temp__5825__auto___32264;
if(cljs.core.chunked_seq_QMARK_(seq__31255_32265__$1)){
var c__5525__auto___32266 = cljs.core.chunk_first(seq__31255_32265__$1);
var G__32267 = cljs.core.chunk_rest(seq__31255_32265__$1);
var G__32268 = c__5525__auto___32266;
var G__32269 = cljs.core.count(c__5525__auto___32266);
var G__32270 = (0);
seq__31255_32249 = G__32267;
chunk__31256_32250 = G__32268;
count__31257_32251 = G__32269;
i__31258_32252 = G__32270;
continue;
} else {
var vec__31275_32271 = cljs.core.first(seq__31255_32265__$1);
var script_tag_32272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31275_32271,(0),null);
var script_body_32273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31275_32271,(1),null);
eval(script_body_32273);


var G__32278 = cljs.core.next(seq__31255_32265__$1);
var G__32279 = null;
var G__32280 = (0);
var G__32281 = (0);
seq__31255_32249 = G__32278;
chunk__31256_32250 = G__32279;
count__31257_32251 = G__32280;
i__31258_32252 = G__32281;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__31282){
var vec__31283 = p__31282;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31283,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31283,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__31331 = arguments.length;
switch (G__31331) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__31350 = cljs.core.seq(style_keys);
var chunk__31351 = null;
var count__31352 = (0);
var i__31353 = (0);
while(true){
if((i__31353 < count__31352)){
var it = chunk__31351.cljs$core$IIndexed$_nth$arity$2(null, i__31353);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32291 = seq__31350;
var G__32292 = chunk__31351;
var G__32293 = count__31352;
var G__32294 = (i__31353 + (1));
seq__31350 = G__32291;
chunk__31351 = G__32292;
count__31352 = G__32293;
i__31353 = G__32294;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__31350);
if(temp__5825__auto__){
var seq__31350__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31350__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31350__$1);
var G__32295 = cljs.core.chunk_rest(seq__31350__$1);
var G__32296 = c__5525__auto__;
var G__32297 = cljs.core.count(c__5525__auto__);
var G__32298 = (0);
seq__31350 = G__32295;
chunk__31351 = G__32296;
count__31352 = G__32297;
i__31353 = G__32298;
continue;
} else {
var it = cljs.core.first(seq__31350__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32303 = cljs.core.next(seq__31350__$1);
var G__32304 = null;
var G__32305 = (0);
var G__32306 = (0);
seq__31350 = G__32303;
chunk__31351 = G__32304;
count__31352 = G__32305;
i__31353 = G__32306;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k31367,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__31430 = k31367;
var G__31430__$1 = (((G__31430 instanceof cljs.core.Keyword))?G__31430.fqn:null);
switch (G__31430__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31367,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__31431){
var vec__31432 = p__31431;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31432,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31432,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31366){
var self__ = this;
var G__31366__$1 = this;
return (new cljs.core.RecordIter((0),G__31366__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31374,other31375){
var self__ = this;
var this31374__$1 = this;
return (((!((other31375 == null)))) && ((((this31374__$1.constructor === other31375.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31374__$1.x,other31375.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31374__$1.y,other31375.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31374__$1.__extmap,other31375.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k31367){
var self__ = this;
var this__5307__auto____$1 = this;
var G__31482 = k31367;
var G__31482__$1 = (((G__31482 instanceof cljs.core.Keyword))?G__31482.fqn:null);
switch (G__31482__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31367);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__31366){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__31490 = cljs.core.keyword_identical_QMARK_;
var expr__31491 = k__5309__auto__;
if(cljs.core.truth_((pred__31490.cljs$core$IFn$_invoke$arity$2 ? pred__31490.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__31491) : pred__31490.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__31491)))){
return (new shadow.dom.Coordinate(G__31366,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31490.cljs$core$IFn$_invoke$arity$2 ? pred__31490.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__31491) : pred__31490.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__31491)))){
return (new shadow.dom.Coordinate(self__.x,G__31366,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__31366),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__31366){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__31366,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__31420){
var extmap__5342__auto__ = (function (){var G__31513 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31420,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__31420)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31513);
} else {
return G__31513;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__31420),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__31420),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k31532,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__31591 = k31532;
var G__31591__$1 = (((G__31591 instanceof cljs.core.Keyword))?G__31591.fqn:null);
switch (G__31591__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31532,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__31594){
var vec__31595 = p__31594;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31595,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31595,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31531){
var self__ = this;
var G__31531__$1 = this;
return (new cljs.core.RecordIter((0),G__31531__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31534,other31535){
var self__ = this;
var this31534__$1 = this;
return (((!((other31535 == null)))) && ((((this31534__$1.constructor === other31535.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31534__$1.w,other31535.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31534__$1.h,other31535.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31534__$1.__extmap,other31535.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k31532){
var self__ = this;
var this__5307__auto____$1 = this;
var G__31625 = k31532;
var G__31625__$1 = (((G__31625 instanceof cljs.core.Keyword))?G__31625.fqn:null);
switch (G__31625__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31532);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__31531){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__31637 = cljs.core.keyword_identical_QMARK_;
var expr__31638 = k__5309__auto__;
if(cljs.core.truth_((pred__31637.cljs$core$IFn$_invoke$arity$2 ? pred__31637.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__31638) : pred__31637.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__31638)))){
return (new shadow.dom.Size(G__31531,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31637.cljs$core$IFn$_invoke$arity$2 ? pred__31637.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__31638) : pred__31637.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__31638)))){
return (new shadow.dom.Size(self__.w,G__31531,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__31531),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__31531){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__31531,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__31539){
var extmap__5342__auto__ = (function (){var G__31698 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31539,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__31539)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31698);
} else {
return G__31698;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__31539),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__31539),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__32448 = (i + (1));
var G__32449 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__32448;
ret = G__32449;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31768){
var vec__31769 = p__31768;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31769,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31769,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__31786 = arguments.length;
switch (G__31786) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__32456 = ps;
var G__32457 = (i + (1));
el__$1 = G__32456;
i = G__32457;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__31842 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31842,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31842,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31842,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__31857_32463 = cljs.core.seq(props);
var chunk__31858_32464 = null;
var count__31859_32465 = (0);
var i__31860_32466 = (0);
while(true){
if((i__31860_32466 < count__31859_32465)){
var vec__31869_32467 = chunk__31858_32464.cljs$core$IIndexed$_nth$arity$2(null, i__31860_32466);
var k_32468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31869_32467,(0),null);
var v_32469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31869_32467,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_32468);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_32468),v_32469);


var G__32471 = seq__31857_32463;
var G__32472 = chunk__31858_32464;
var G__32473 = count__31859_32465;
var G__32474 = (i__31860_32466 + (1));
seq__31857_32463 = G__32471;
chunk__31858_32464 = G__32472;
count__31859_32465 = G__32473;
i__31860_32466 = G__32474;
continue;
} else {
var temp__5825__auto___32475 = cljs.core.seq(seq__31857_32463);
if(temp__5825__auto___32475){
var seq__31857_32476__$1 = temp__5825__auto___32475;
if(cljs.core.chunked_seq_QMARK_(seq__31857_32476__$1)){
var c__5525__auto___32478 = cljs.core.chunk_first(seq__31857_32476__$1);
var G__32479 = cljs.core.chunk_rest(seq__31857_32476__$1);
var G__32480 = c__5525__auto___32478;
var G__32481 = cljs.core.count(c__5525__auto___32478);
var G__32482 = (0);
seq__31857_32463 = G__32479;
chunk__31858_32464 = G__32480;
count__31859_32465 = G__32481;
i__31860_32466 = G__32482;
continue;
} else {
var vec__31875_32487 = cljs.core.first(seq__31857_32476__$1);
var k_32488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31875_32487,(0),null);
var v_32489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31875_32487,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_32488);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_32488),v_32489);


var G__32493 = cljs.core.next(seq__31857_32476__$1);
var G__32494 = null;
var G__32495 = (0);
var G__32496 = (0);
seq__31857_32463 = G__32493;
chunk__31858_32464 = G__32494;
count__31859_32465 = G__32495;
i__31860_32466 = G__32496;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__31882 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31882,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31882,(1),null);
var seq__31885_32497 = cljs.core.seq(node_children);
var chunk__31887_32498 = null;
var count__31888_32499 = (0);
var i__31889_32500 = (0);
while(true){
if((i__31889_32500 < count__31888_32499)){
var child_struct_32501 = chunk__31887_32498.cljs$core$IIndexed$_nth$arity$2(null, i__31889_32500);
if((!((child_struct_32501 == null)))){
if(typeof child_struct_32501 === 'string'){
var text_32502 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_32502),child_struct_32501].join(''));
} else {
var children_32504 = shadow.dom.svg_node(child_struct_32501);
if(cljs.core.seq_QMARK_(children_32504)){
var seq__31923_32509 = cljs.core.seq(children_32504);
var chunk__31925_32510 = null;
var count__31926_32511 = (0);
var i__31927_32512 = (0);
while(true){
if((i__31927_32512 < count__31926_32511)){
var child_32514 = chunk__31925_32510.cljs$core$IIndexed$_nth$arity$2(null, i__31927_32512);
if(cljs.core.truth_(child_32514)){
node.appendChild(child_32514);


var G__32515 = seq__31923_32509;
var G__32516 = chunk__31925_32510;
var G__32517 = count__31926_32511;
var G__32518 = (i__31927_32512 + (1));
seq__31923_32509 = G__32515;
chunk__31925_32510 = G__32516;
count__31926_32511 = G__32517;
i__31927_32512 = G__32518;
continue;
} else {
var G__32519 = seq__31923_32509;
var G__32520 = chunk__31925_32510;
var G__32521 = count__31926_32511;
var G__32522 = (i__31927_32512 + (1));
seq__31923_32509 = G__32519;
chunk__31925_32510 = G__32520;
count__31926_32511 = G__32521;
i__31927_32512 = G__32522;
continue;
}
} else {
var temp__5825__auto___32523 = cljs.core.seq(seq__31923_32509);
if(temp__5825__auto___32523){
var seq__31923_32525__$1 = temp__5825__auto___32523;
if(cljs.core.chunked_seq_QMARK_(seq__31923_32525__$1)){
var c__5525__auto___32526 = cljs.core.chunk_first(seq__31923_32525__$1);
var G__32527 = cljs.core.chunk_rest(seq__31923_32525__$1);
var G__32528 = c__5525__auto___32526;
var G__32529 = cljs.core.count(c__5525__auto___32526);
var G__32530 = (0);
seq__31923_32509 = G__32527;
chunk__31925_32510 = G__32528;
count__31926_32511 = G__32529;
i__31927_32512 = G__32530;
continue;
} else {
var child_32531 = cljs.core.first(seq__31923_32525__$1);
if(cljs.core.truth_(child_32531)){
node.appendChild(child_32531);


var G__32532 = cljs.core.next(seq__31923_32525__$1);
var G__32533 = null;
var G__32534 = (0);
var G__32535 = (0);
seq__31923_32509 = G__32532;
chunk__31925_32510 = G__32533;
count__31926_32511 = G__32534;
i__31927_32512 = G__32535;
continue;
} else {
var G__32536 = cljs.core.next(seq__31923_32525__$1);
var G__32537 = null;
var G__32538 = (0);
var G__32539 = (0);
seq__31923_32509 = G__32536;
chunk__31925_32510 = G__32537;
count__31926_32511 = G__32538;
i__31927_32512 = G__32539;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_32504);
}
}


var G__32540 = seq__31885_32497;
var G__32541 = chunk__31887_32498;
var G__32542 = count__31888_32499;
var G__32543 = (i__31889_32500 + (1));
seq__31885_32497 = G__32540;
chunk__31887_32498 = G__32541;
count__31888_32499 = G__32542;
i__31889_32500 = G__32543;
continue;
} else {
var G__32545 = seq__31885_32497;
var G__32546 = chunk__31887_32498;
var G__32547 = count__31888_32499;
var G__32548 = (i__31889_32500 + (1));
seq__31885_32497 = G__32545;
chunk__31887_32498 = G__32546;
count__31888_32499 = G__32547;
i__31889_32500 = G__32548;
continue;
}
} else {
var temp__5825__auto___32550 = cljs.core.seq(seq__31885_32497);
if(temp__5825__auto___32550){
var seq__31885_32551__$1 = temp__5825__auto___32550;
if(cljs.core.chunked_seq_QMARK_(seq__31885_32551__$1)){
var c__5525__auto___32552 = cljs.core.chunk_first(seq__31885_32551__$1);
var G__32553 = cljs.core.chunk_rest(seq__31885_32551__$1);
var G__32554 = c__5525__auto___32552;
var G__32555 = cljs.core.count(c__5525__auto___32552);
var G__32556 = (0);
seq__31885_32497 = G__32553;
chunk__31887_32498 = G__32554;
count__31888_32499 = G__32555;
i__31889_32500 = G__32556;
continue;
} else {
var child_struct_32557 = cljs.core.first(seq__31885_32551__$1);
if((!((child_struct_32557 == null)))){
if(typeof child_struct_32557 === 'string'){
var text_32558 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_32558),child_struct_32557].join(''));
} else {
var children_32559 = shadow.dom.svg_node(child_struct_32557);
if(cljs.core.seq_QMARK_(children_32559)){
var seq__31938_32561 = cljs.core.seq(children_32559);
var chunk__31940_32562 = null;
var count__31941_32563 = (0);
var i__31942_32564 = (0);
while(true){
if((i__31942_32564 < count__31941_32563)){
var child_32565 = chunk__31940_32562.cljs$core$IIndexed$_nth$arity$2(null, i__31942_32564);
if(cljs.core.truth_(child_32565)){
node.appendChild(child_32565);


var G__32566 = seq__31938_32561;
var G__32567 = chunk__31940_32562;
var G__32568 = count__31941_32563;
var G__32569 = (i__31942_32564 + (1));
seq__31938_32561 = G__32566;
chunk__31940_32562 = G__32567;
count__31941_32563 = G__32568;
i__31942_32564 = G__32569;
continue;
} else {
var G__32570 = seq__31938_32561;
var G__32571 = chunk__31940_32562;
var G__32572 = count__31941_32563;
var G__32573 = (i__31942_32564 + (1));
seq__31938_32561 = G__32570;
chunk__31940_32562 = G__32571;
count__31941_32563 = G__32572;
i__31942_32564 = G__32573;
continue;
}
} else {
var temp__5825__auto___32574__$1 = cljs.core.seq(seq__31938_32561);
if(temp__5825__auto___32574__$1){
var seq__31938_32575__$1 = temp__5825__auto___32574__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31938_32575__$1)){
var c__5525__auto___32576 = cljs.core.chunk_first(seq__31938_32575__$1);
var G__32577 = cljs.core.chunk_rest(seq__31938_32575__$1);
var G__32578 = c__5525__auto___32576;
var G__32579 = cljs.core.count(c__5525__auto___32576);
var G__32580 = (0);
seq__31938_32561 = G__32577;
chunk__31940_32562 = G__32578;
count__31941_32563 = G__32579;
i__31942_32564 = G__32580;
continue;
} else {
var child_32581 = cljs.core.first(seq__31938_32575__$1);
if(cljs.core.truth_(child_32581)){
node.appendChild(child_32581);


var G__32582 = cljs.core.next(seq__31938_32575__$1);
var G__32583 = null;
var G__32584 = (0);
var G__32585 = (0);
seq__31938_32561 = G__32582;
chunk__31940_32562 = G__32583;
count__31941_32563 = G__32584;
i__31942_32564 = G__32585;
continue;
} else {
var G__32586 = cljs.core.next(seq__31938_32575__$1);
var G__32587 = null;
var G__32588 = (0);
var G__32589 = (0);
seq__31938_32561 = G__32586;
chunk__31940_32562 = G__32587;
count__31941_32563 = G__32588;
i__31942_32564 = G__32589;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_32559);
}
}


var G__32591 = cljs.core.next(seq__31885_32551__$1);
var G__32592 = null;
var G__32593 = (0);
var G__32594 = (0);
seq__31885_32497 = G__32591;
chunk__31887_32498 = G__32592;
count__31888_32499 = G__32593;
i__31889_32500 = G__32594;
continue;
} else {
var G__32595 = cljs.core.next(seq__31885_32551__$1);
var G__32596 = null;
var G__32597 = (0);
var G__32598 = (0);
seq__31885_32497 = G__32595;
chunk__31887_32498 = G__32596;
count__31888_32499 = G__32597;
i__31889_32500 = G__32598;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32600 = arguments.length;
var i__5727__auto___32601 = (0);
while(true){
if((i__5727__auto___32601 < len__5726__auto___32600)){
args__5732__auto__.push((arguments[i__5727__auto___32601]));

var G__32602 = (i__5727__auto___32601 + (1));
i__5727__auto___32601 = G__32602;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq31956){
var G__31957 = cljs.core.first(seq31956);
var seq31956__$1 = cljs.core.next(seq31956);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31957,seq31956__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__31964 = arguments.length;
switch (G__31964) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__28054__auto___32621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_31985){
var state_val_31986 = (state_31985[(1)]);
if((state_val_31986 === (1))){
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31985__$1,(2),once_or_cleanup);
} else {
if((state_val_31986 === (2))){
var inst_31979 = (state_31985[(2)]);
var inst_31980 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_31985__$1 = (function (){var statearr_31996 = state_31985;
(statearr_31996[(7)] = inst_31979);

return statearr_31996;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31985__$1,inst_31980);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27803__auto__ = null;
var shadow$dom$state_machine__27803__auto____0 = (function (){
var statearr_31998 = [null,null,null,null,null,null,null,null];
(statearr_31998[(0)] = shadow$dom$state_machine__27803__auto__);

(statearr_31998[(1)] = (1));

return statearr_31998;
});
var shadow$dom$state_machine__27803__auto____1 = (function (state_31985){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_31985);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e31999){var ex__27806__auto__ = e31999;
var statearr_32000_32624 = state_31985;
(statearr_32000_32624[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_31985[(4)]))){
var statearr_32001_32625 = state_31985;
(statearr_32001_32625[(1)] = cljs.core.first((state_31985[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32626 = state_31985;
state_31985 = G__32626;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
shadow$dom$state_machine__27803__auto__ = function(state_31985){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27803__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27803__auto____1.call(this,state_31985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27803__auto____0;
shadow$dom$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27803__auto____1;
return shadow$dom$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_32005 = f__28055__auto__();
(statearr_32005[(6)] = c__28054__auto___32621);

return statearr_32005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
