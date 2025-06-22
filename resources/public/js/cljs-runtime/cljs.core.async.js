goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28117 = (function (f,blockable,meta28118){
this.f = f;
this.blockable = blockable;
this.meta28118 = meta28118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28119,meta28118__$1){
var self__ = this;
var _28119__$1 = this;
return (new cljs.core.async.t_cljs$core$async28117(self__.f,self__.blockable,meta28118__$1));
}));

(cljs.core.async.t_cljs$core$async28117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28119){
var self__ = this;
var _28119__$1 = this;
return self__.meta28118;
}));

(cljs.core.async.t_cljs$core$async28117.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28118","meta28118",-1851772613,null)], null);
}));

(cljs.core.async.t_cljs$core$async28117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28117");

(cljs.core.async.t_cljs$core$async28117.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28117.
 */
cljs.core.async.__GT_t_cljs$core$async28117 = (function cljs$core$async$__GT_t_cljs$core$async28117(f,blockable,meta28118){
return (new cljs.core.async.t_cljs$core$async28117(f,blockable,meta28118));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28112 = arguments.length;
switch (G__28112) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async28117(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28144 = arguments.length;
switch (G__28144) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28149 = arguments.length;
switch (G__28149) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28151 = arguments.length;
switch (G__28151) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_30668 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30668) : fn1.call(null, val_30668));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30668) : fn1.call(null, val_30668));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28153 = arguments.length;
switch (G__28153) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___30674 = n;
var x_30675 = (0);
while(true){
if((x_30675 < n__5593__auto___30674)){
(a[x_30675] = x_30675);

var G__30676 = (x_30675 + (1));
x_30675 = G__30676;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28154 = (function (flag,meta28155){
this.flag = flag;
this.meta28155 = meta28155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28156,meta28155__$1){
var self__ = this;
var _28156__$1 = this;
return (new cljs.core.async.t_cljs$core$async28154(self__.flag,meta28155__$1));
}));

(cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28156){
var self__ = this;
var _28156__$1 = this;
return self__.meta28155;
}));

(cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28155","meta28155",-1101424425,null)], null);
}));

(cljs.core.async.t_cljs$core$async28154.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28154");

(cljs.core.async.t_cljs$core$async28154.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28154");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28154.
 */
cljs.core.async.__GT_t_cljs$core$async28154 = (function cljs$core$async$__GT_t_cljs$core$async28154(flag,meta28155){
return (new cljs.core.async.t_cljs$core$async28154(flag,meta28155));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async28154(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28157 = (function (flag,cb,meta28158){
this.flag = flag;
this.cb = cb;
this.meta28158 = meta28158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28159,meta28158__$1){
var self__ = this;
var _28159__$1 = this;
return (new cljs.core.async.t_cljs$core$async28157(self__.flag,self__.cb,meta28158__$1));
}));

(cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28159){
var self__ = this;
var _28159__$1 = this;
return self__.meta28158;
}));

(cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28158","meta28158",446014237,null)], null);
}));

(cljs.core.async.t_cljs$core$async28157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28157");

(cljs.core.async.t_cljs$core$async28157.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28157.
 */
cljs.core.async.__GT_t_cljs$core$async28157 = (function cljs$core$async$__GT_t_cljs$core$async28157(flag,cb,meta28158){
return (new cljs.core.async.t_cljs$core$async28157(flag,cb,meta28158));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async28157(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28160_SHARP_){
var G__28162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28160_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28162) : fret.call(null, G__28162));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28161_SHARP_){
var G__28163 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28161_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28163) : fret.call(null, G__28163));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30680 = (i + (1));
i = G__30680;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___30683 = arguments.length;
var i__5727__auto___30684 = (0);
while(true){
if((i__5727__auto___30684 < len__5726__auto___30683)){
args__5732__auto__.push((arguments[i__5727__auto___30684]));

var G__30685 = (i__5727__auto___30684 + (1));
i__5727__auto___30684 = G__30685;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28166){
var map__28167 = p__28166;
var map__28167__$1 = cljs.core.__destructure_map(map__28167);
var opts = map__28167__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28164){
var G__28165 = cljs.core.first(seq28164);
var seq28164__$1 = cljs.core.next(seq28164);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28165,seq28164__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28169 = arguments.length;
switch (G__28169) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28054__auto___30687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_28193){
var state_val_28194 = (state_28193[(1)]);
if((state_val_28194 === (7))){
var inst_28189 = (state_28193[(2)]);
var state_28193__$1 = state_28193;
var statearr_28198_30688 = state_28193__$1;
(statearr_28198_30688[(2)] = inst_28189);

(statearr_28198_30688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28194 === (1))){
var state_28193__$1 = state_28193;
var statearr_28199_30689 = state_28193__$1;
(statearr_28199_30689[(2)] = null);

(statearr_28199_30689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28194 === (4))){
var inst_28172 = (state_28193[(7)]);
var inst_28172__$1 = (state_28193[(2)]);
var inst_28173 = (inst_28172__$1 == null);
var state_28193__$1 = (function (){var statearr_28201 = state_28193;
(statearr_28201[(7)] = inst_28172__$1);

return statearr_28201;
})();
if(cljs.core.truth_(inst_28173)){
var statearr_28202_30691 = state_28193__$1;
(statearr_28202_30691[(1)] = (5));

} else {
var statearr_28203_30692 = state_28193__$1;
(statearr_28203_30692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28194 === (13))){
var state_28193__$1 = state_28193;
var statearr_28205_30693 = state_28193__$1;
(statearr_28205_30693[(2)] = null);

(statearr_28205_30693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28194 === (6))){
var inst_28172 = (state_28193[(7)]);
var state_28193__$1 = state_28193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28193__$1,(11),to,inst_28172);
} else {
if((state_val_28194 === (3))){
var inst_28191 = (state_28193[(2)]);
var state_28193__$1 = state_28193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28193__$1,inst_28191);
} else {
if((state_val_28194 === (12))){
var state_28193__$1 = state_28193;
var statearr_28206_30697 = state_28193__$1;
(statearr_28206_30697[(2)] = null);

(statearr_28206_30697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28194 === (2))){
var state_28193__$1 = state_28193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28193__$1,(4),from);
} else {
if((state_val_28194 === (11))){
var inst_28182 = (state_28193[(2)]);
var state_28193__$1 = state_28193;
if(cljs.core.truth_(inst_28182)){
var statearr_28207_30698 = state_28193__$1;
(statearr_28207_30698[(1)] = (12));

} else {
var statearr_28209_30699 = state_28193__$1;
(statearr_28209_30699[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28194 === (9))){
var state_28193__$1 = state_28193;
var statearr_28210_30700 = state_28193__$1;
(statearr_28210_30700[(2)] = null);

(statearr_28210_30700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28194 === (5))){
var state_28193__$1 = state_28193;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28211_30701 = state_28193__$1;
(statearr_28211_30701[(1)] = (8));

} else {
var statearr_28212_30702 = state_28193__$1;
(statearr_28212_30702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28194 === (14))){
var inst_28187 = (state_28193[(2)]);
var state_28193__$1 = state_28193;
var statearr_28213_30703 = state_28193__$1;
(statearr_28213_30703[(2)] = inst_28187);

(statearr_28213_30703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28194 === (10))){
var inst_28179 = (state_28193[(2)]);
var state_28193__$1 = state_28193;
var statearr_28214_30704 = state_28193__$1;
(statearr_28214_30704[(2)] = inst_28179);

(statearr_28214_30704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28194 === (8))){
var inst_28176 = cljs.core.async.close_BANG_(to);
var state_28193__$1 = state_28193;
var statearr_28216_30705 = state_28193__$1;
(statearr_28216_30705[(2)] = inst_28176);

(statearr_28216_30705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27803__auto__ = null;
var cljs$core$async$state_machine__27803__auto____0 = (function (){
var statearr_28221 = [null,null,null,null,null,null,null,null];
(statearr_28221[(0)] = cljs$core$async$state_machine__27803__auto__);

(statearr_28221[(1)] = (1));

return statearr_28221;
});
var cljs$core$async$state_machine__27803__auto____1 = (function (state_28193){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_28193);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e28222){var ex__27806__auto__ = e28222;
var statearr_28223_30724 = state_28193;
(statearr_28223_30724[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_28193[(4)]))){
var statearr_28226_30725 = state_28193;
(statearr_28226_30725[(1)] = cljs.core.first((state_28193[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30726 = state_28193;
state_28193 = G__30726;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$state_machine__27803__auto__ = function(state_28193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27803__auto____1.call(this,state_28193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27803__auto____0;
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27803__auto____1;
return cljs$core$async$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_28230 = f__28055__auto__();
(statearr_28230[(6)] = c__28054__auto___30687);

return statearr_28230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__28258){
var vec__28259 = p__28258;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28259,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28259,(1),null);
var job = vec__28259;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28054__auto___30775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_28269){
var state_val_28270 = (state_28269[(1)]);
if((state_val_28270 === (1))){
var state_28269__$1 = state_28269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28269__$1,(2),res,v);
} else {
if((state_val_28270 === (2))){
var inst_28266 = (state_28269[(2)]);
var inst_28267 = cljs.core.async.close_BANG_(res);
var state_28269__$1 = (function (){var statearr_28274 = state_28269;
(statearr_28274[(7)] = inst_28266);

return statearr_28274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28269__$1,inst_28267);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0 = (function (){
var statearr_28277 = [null,null,null,null,null,null,null,null];
(statearr_28277[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__);

(statearr_28277[(1)] = (1));

return statearr_28277;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1 = (function (state_28269){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_28269);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e28278){var ex__27806__auto__ = e28278;
var statearr_28279_30806 = state_28269;
(statearr_28279_30806[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_28269[(4)]))){
var statearr_28280_30807 = state_28269;
(statearr_28280_30807[(1)] = cljs.core.first((state_28269[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30808 = state_28269;
state_28269 = G__30808;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__ = function(state_28269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1.call(this,state_28269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_28282 = f__28055__auto__();
(statearr_28282[(6)] = c__28054__auto___30775);

return statearr_28282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28355){
var vec__28356 = p__28355;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28356,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28356,(1),null);
var job = vec__28356;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___30815 = n;
var __30816 = (0);
while(true){
if((__30816 < n__5593__auto___30815)){
var G__28359_30817 = type;
var G__28359_30818__$1 = (((G__28359_30817 instanceof cljs.core.Keyword))?G__28359_30817.fqn:null);
switch (G__28359_30818__$1) {
case "compute":
var c__28054__auto___30825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30816,c__28054__auto___30825,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async){
return (function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = ((function (__30816,c__28054__auto___30825,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async){
return (function (state_28372){
var state_val_28373 = (state_28372[(1)]);
if((state_val_28373 === (1))){
var state_28372__$1 = state_28372;
var statearr_28374_30826 = state_28372__$1;
(statearr_28374_30826[(2)] = null);

(statearr_28374_30826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28373 === (2))){
var state_28372__$1 = state_28372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28372__$1,(4),jobs);
} else {
if((state_val_28373 === (3))){
var inst_28370 = (state_28372[(2)]);
var state_28372__$1 = state_28372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28372__$1,inst_28370);
} else {
if((state_val_28373 === (4))){
var inst_28362 = (state_28372[(2)]);
var inst_28363 = process__$1(inst_28362);
var state_28372__$1 = state_28372;
if(cljs.core.truth_(inst_28363)){
var statearr_28375_30827 = state_28372__$1;
(statearr_28375_30827[(1)] = (5));

} else {
var statearr_28376_30828 = state_28372__$1;
(statearr_28376_30828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28373 === (5))){
var state_28372__$1 = state_28372;
var statearr_28377_30829 = state_28372__$1;
(statearr_28377_30829[(2)] = null);

(statearr_28377_30829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28373 === (6))){
var state_28372__$1 = state_28372;
var statearr_28378_30830 = state_28372__$1;
(statearr_28378_30830[(2)] = null);

(statearr_28378_30830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28373 === (7))){
var inst_28368 = (state_28372[(2)]);
var state_28372__$1 = state_28372;
var statearr_28379_30831 = state_28372__$1;
(statearr_28379_30831[(2)] = inst_28368);

(statearr_28379_30831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30816,c__28054__auto___30825,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async))
;
return ((function (__30816,switch__27802__auto__,c__28054__auto___30825,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0 = (function (){
var statearr_28380 = [null,null,null,null,null,null,null];
(statearr_28380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__);

(statearr_28380[(1)] = (1));

return statearr_28380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1 = (function (state_28372){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_28372);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e28381){var ex__27806__auto__ = e28381;
var statearr_28382_30832 = state_28372;
(statearr_28382_30832[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_28372[(4)]))){
var statearr_28383_30833 = state_28372;
(statearr_28383_30833[(1)] = cljs.core.first((state_28372[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30834 = state_28372;
state_28372 = G__30834;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__ = function(state_28372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1.call(this,state_28372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__;
})()
;})(__30816,switch__27802__auto__,c__28054__auto___30825,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async))
})();
var state__28056__auto__ = (function (){var statearr_28384 = f__28055__auto__();
(statearr_28384[(6)] = c__28054__auto___30825);

return statearr_28384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
});})(__30816,c__28054__auto___30825,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async))
);


break;
case "async":
var c__28054__auto___30860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30816,c__28054__auto___30860,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async){
return (function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = ((function (__30816,c__28054__auto___30860,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async){
return (function (state_28398){
var state_val_28399 = (state_28398[(1)]);
if((state_val_28399 === (1))){
var state_28398__$1 = state_28398;
var statearr_28400_30864 = state_28398__$1;
(statearr_28400_30864[(2)] = null);

(statearr_28400_30864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (2))){
var state_28398__$1 = state_28398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28398__$1,(4),jobs);
} else {
if((state_val_28399 === (3))){
var inst_28396 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28398__$1,inst_28396);
} else {
if((state_val_28399 === (4))){
var inst_28387 = (state_28398[(2)]);
var inst_28388 = async(inst_28387);
var state_28398__$1 = state_28398;
if(cljs.core.truth_(inst_28388)){
var statearr_28417_30865 = state_28398__$1;
(statearr_28417_30865[(1)] = (5));

} else {
var statearr_28419_30866 = state_28398__$1;
(statearr_28419_30866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (5))){
var state_28398__$1 = state_28398;
var statearr_28420_30867 = state_28398__$1;
(statearr_28420_30867[(2)] = null);

(statearr_28420_30867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (6))){
var state_28398__$1 = state_28398;
var statearr_28421_30868 = state_28398__$1;
(statearr_28421_30868[(2)] = null);

(statearr_28421_30868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (7))){
var inst_28394 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
var statearr_28422_30869 = state_28398__$1;
(statearr_28422_30869[(2)] = inst_28394);

(statearr_28422_30869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30816,c__28054__auto___30860,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async))
;
return ((function (__30816,switch__27802__auto__,c__28054__auto___30860,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0 = (function (){
var statearr_28424 = [null,null,null,null,null,null,null];
(statearr_28424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__);

(statearr_28424[(1)] = (1));

return statearr_28424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1 = (function (state_28398){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_28398);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e28425){var ex__27806__auto__ = e28425;
var statearr_28426_30870 = state_28398;
(statearr_28426_30870[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_28398[(4)]))){
var statearr_28427_30871 = state_28398;
(statearr_28427_30871[(1)] = cljs.core.first((state_28398[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30889 = state_28398;
state_28398 = G__30889;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__ = function(state_28398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1.call(this,state_28398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__;
})()
;})(__30816,switch__27802__auto__,c__28054__auto___30860,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async))
})();
var state__28056__auto__ = (function (){var statearr_28430 = f__28055__auto__();
(statearr_28430[(6)] = c__28054__auto___30860);

return statearr_28430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
});})(__30816,c__28054__auto___30860,G__28359_30817,G__28359_30818__$1,n__5593__auto___30815,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28359_30818__$1)].join('')));

}

var G__30902 = (__30816 + (1));
__30816 = G__30902;
continue;
} else {
}
break;
}

var c__28054__auto___30903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_28453){
var state_val_28454 = (state_28453[(1)]);
if((state_val_28454 === (7))){
var inst_28449 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28456_30907 = state_28453__$1;
(statearr_28456_30907[(2)] = inst_28449);

(statearr_28456_30907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (1))){
var state_28453__$1 = state_28453;
var statearr_28461_30908 = state_28453__$1;
(statearr_28461_30908[(2)] = null);

(statearr_28461_30908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (4))){
var inst_28434 = (state_28453[(7)]);
var inst_28434__$1 = (state_28453[(2)]);
var inst_28435 = (inst_28434__$1 == null);
var state_28453__$1 = (function (){var statearr_28462 = state_28453;
(statearr_28462[(7)] = inst_28434__$1);

return statearr_28462;
})();
if(cljs.core.truth_(inst_28435)){
var statearr_28463_30909 = state_28453__$1;
(statearr_28463_30909[(1)] = (5));

} else {
var statearr_28464_30910 = state_28453__$1;
(statearr_28464_30910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (6))){
var inst_28434 = (state_28453[(7)]);
var inst_28439 = (state_28453[(8)]);
var inst_28439__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28440 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28441 = [inst_28434,inst_28439__$1];
var inst_28442 = (new cljs.core.PersistentVector(null,2,(5),inst_28440,inst_28441,null));
var state_28453__$1 = (function (){var statearr_28467 = state_28453;
(statearr_28467[(8)] = inst_28439__$1);

return statearr_28467;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28453__$1,(8),jobs,inst_28442);
} else {
if((state_val_28454 === (3))){
var inst_28451 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28453__$1,inst_28451);
} else {
if((state_val_28454 === (2))){
var state_28453__$1 = state_28453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28453__$1,(4),from);
} else {
if((state_val_28454 === (9))){
var inst_28446 = (state_28453[(2)]);
var state_28453__$1 = (function (){var statearr_28468 = state_28453;
(statearr_28468[(9)] = inst_28446);

return statearr_28468;
})();
var statearr_28469_30911 = state_28453__$1;
(statearr_28469_30911[(2)] = null);

(statearr_28469_30911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (5))){
var inst_28437 = cljs.core.async.close_BANG_(jobs);
var state_28453__$1 = state_28453;
var statearr_28470_30912 = state_28453__$1;
(statearr_28470_30912[(2)] = inst_28437);

(statearr_28470_30912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (8))){
var inst_28439 = (state_28453[(8)]);
var inst_28444 = (state_28453[(2)]);
var state_28453__$1 = (function (){var statearr_28471 = state_28453;
(statearr_28471[(10)] = inst_28444);

return statearr_28471;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28453__$1,(9),results,inst_28439);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0 = (function (){
var statearr_28472 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28472[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__);

(statearr_28472[(1)] = (1));

return statearr_28472;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1 = (function (state_28453){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_28453);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e28473){var ex__27806__auto__ = e28473;
var statearr_28474_30914 = state_28453;
(statearr_28474_30914[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_28453[(4)]))){
var statearr_28476_30915 = state_28453;
(statearr_28476_30915[(1)] = cljs.core.first((state_28453[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30916 = state_28453;
state_28453 = G__30916;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__ = function(state_28453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1.call(this,state_28453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_28481 = f__28055__auto__();
(statearr_28481[(6)] = c__28054__auto___30903);

return statearr_28481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


var c__28054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_28519){
var state_val_28520 = (state_28519[(1)]);
if((state_val_28520 === (7))){
var inst_28515 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
var statearr_28523_30917 = state_28519__$1;
(statearr_28523_30917[(2)] = inst_28515);

(statearr_28523_30917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (20))){
var state_28519__$1 = state_28519;
var statearr_28524_30918 = state_28519__$1;
(statearr_28524_30918[(2)] = null);

(statearr_28524_30918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (1))){
var state_28519__$1 = state_28519;
var statearr_28525_30919 = state_28519__$1;
(statearr_28525_30919[(2)] = null);

(statearr_28525_30919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (4))){
var inst_28484 = (state_28519[(7)]);
var inst_28484__$1 = (state_28519[(2)]);
var inst_28485 = (inst_28484__$1 == null);
var state_28519__$1 = (function (){var statearr_28526 = state_28519;
(statearr_28526[(7)] = inst_28484__$1);

return statearr_28526;
})();
if(cljs.core.truth_(inst_28485)){
var statearr_28527_30920 = state_28519__$1;
(statearr_28527_30920[(1)] = (5));

} else {
var statearr_28528_30921 = state_28519__$1;
(statearr_28528_30921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (15))){
var inst_28497 = (state_28519[(8)]);
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28519__$1,(18),to,inst_28497);
} else {
if((state_val_28520 === (21))){
var inst_28510 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
var statearr_28529_30922 = state_28519__$1;
(statearr_28529_30922[(2)] = inst_28510);

(statearr_28529_30922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (13))){
var inst_28512 = (state_28519[(2)]);
var state_28519__$1 = (function (){var statearr_28532 = state_28519;
(statearr_28532[(9)] = inst_28512);

return statearr_28532;
})();
var statearr_28533_30923 = state_28519__$1;
(statearr_28533_30923[(2)] = null);

(statearr_28533_30923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (6))){
var inst_28484 = (state_28519[(7)]);
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28519__$1,(11),inst_28484);
} else {
if((state_val_28520 === (17))){
var inst_28505 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
if(cljs.core.truth_(inst_28505)){
var statearr_28534_30924 = state_28519__$1;
(statearr_28534_30924[(1)] = (19));

} else {
var statearr_28535_30925 = state_28519__$1;
(statearr_28535_30925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (3))){
var inst_28517 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28519__$1,inst_28517);
} else {
if((state_val_28520 === (12))){
var inst_28494 = (state_28519[(10)]);
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28519__$1,(14),inst_28494);
} else {
if((state_val_28520 === (2))){
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28519__$1,(4),results);
} else {
if((state_val_28520 === (19))){
var state_28519__$1 = state_28519;
var statearr_28536_30943 = state_28519__$1;
(statearr_28536_30943[(2)] = null);

(statearr_28536_30943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (11))){
var inst_28494 = (state_28519[(2)]);
var state_28519__$1 = (function (){var statearr_28537 = state_28519;
(statearr_28537[(10)] = inst_28494);

return statearr_28537;
})();
var statearr_28538_30944 = state_28519__$1;
(statearr_28538_30944[(2)] = null);

(statearr_28538_30944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (9))){
var state_28519__$1 = state_28519;
var statearr_28539_30945 = state_28519__$1;
(statearr_28539_30945[(2)] = null);

(statearr_28539_30945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (5))){
var state_28519__$1 = state_28519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28541_30946 = state_28519__$1;
(statearr_28541_30946[(1)] = (8));

} else {
var statearr_28542_30947 = state_28519__$1;
(statearr_28542_30947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (14))){
var inst_28499 = (state_28519[(11)]);
var inst_28497 = (state_28519[(8)]);
var inst_28497__$1 = (state_28519[(2)]);
var inst_28498 = (inst_28497__$1 == null);
var inst_28499__$1 = cljs.core.not(inst_28498);
var state_28519__$1 = (function (){var statearr_28543 = state_28519;
(statearr_28543[(11)] = inst_28499__$1);

(statearr_28543[(8)] = inst_28497__$1);

return statearr_28543;
})();
if(inst_28499__$1){
var statearr_28544_30948 = state_28519__$1;
(statearr_28544_30948[(1)] = (15));

} else {
var statearr_28545_30949 = state_28519__$1;
(statearr_28545_30949[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (16))){
var inst_28499 = (state_28519[(11)]);
var state_28519__$1 = state_28519;
var statearr_28551_30950 = state_28519__$1;
(statearr_28551_30950[(2)] = inst_28499);

(statearr_28551_30950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (10))){
var inst_28491 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
var statearr_28557_30951 = state_28519__$1;
(statearr_28557_30951[(2)] = inst_28491);

(statearr_28557_30951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (18))){
var inst_28502 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
var statearr_28558_30952 = state_28519__$1;
(statearr_28558_30952[(2)] = inst_28502);

(statearr_28558_30952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (8))){
var inst_28488 = cljs.core.async.close_BANG_(to);
var state_28519__$1 = state_28519;
var statearr_28559_30953 = state_28519__$1;
(statearr_28559_30953[(2)] = inst_28488);

(statearr_28559_30953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0 = (function (){
var statearr_28565 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__);

(statearr_28565[(1)] = (1));

return statearr_28565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1 = (function (state_28519){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_28519);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e28567){var ex__27806__auto__ = e28567;
var statearr_28568_30963 = state_28519;
(statearr_28568_30963[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_28519[(4)]))){
var statearr_28569_30964 = state_28519;
(statearr_28569_30964[(1)] = cljs.core.first((state_28519[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30965 = state_28519;
state_28519 = G__30965;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__ = function(state_28519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1.call(this,state_28519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27803__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_28581 = f__28055__auto__();
(statearr_28581[(6)] = c__28054__auto__);

return statearr_28581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));

return c__28054__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28586 = arguments.length;
switch (G__28586) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28594 = arguments.length;
switch (G__28594) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28672 = arguments.length;
switch (G__28672) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28054__auto___31032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_28757){
var state_val_28758 = (state_28757[(1)]);
if((state_val_28758 === (7))){
var inst_28753 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
var statearr_28759_31033 = state_28757__$1;
(statearr_28759_31033[(2)] = inst_28753);

(statearr_28759_31033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (1))){
var state_28757__$1 = state_28757;
var statearr_28760_31037 = state_28757__$1;
(statearr_28760_31037[(2)] = null);

(statearr_28760_31037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (4))){
var inst_28734 = (state_28757[(7)]);
var inst_28734__$1 = (state_28757[(2)]);
var inst_28735 = (inst_28734__$1 == null);
var state_28757__$1 = (function (){var statearr_28761 = state_28757;
(statearr_28761[(7)] = inst_28734__$1);

return statearr_28761;
})();
if(cljs.core.truth_(inst_28735)){
var statearr_28762_31038 = state_28757__$1;
(statearr_28762_31038[(1)] = (5));

} else {
var statearr_28763_31039 = state_28757__$1;
(statearr_28763_31039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (13))){
var state_28757__$1 = state_28757;
var statearr_28764_31040 = state_28757__$1;
(statearr_28764_31040[(2)] = null);

(statearr_28764_31040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (6))){
var inst_28734 = (state_28757[(7)]);
var inst_28740 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28734) : p.call(null, inst_28734));
var state_28757__$1 = state_28757;
if(cljs.core.truth_(inst_28740)){
var statearr_28782_31041 = state_28757__$1;
(statearr_28782_31041[(1)] = (9));

} else {
var statearr_28785_31042 = state_28757__$1;
(statearr_28785_31042[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (3))){
var inst_28755 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28757__$1,inst_28755);
} else {
if((state_val_28758 === (12))){
var state_28757__$1 = state_28757;
var statearr_28786_31043 = state_28757__$1;
(statearr_28786_31043[(2)] = null);

(statearr_28786_31043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (2))){
var state_28757__$1 = state_28757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28757__$1,(4),ch);
} else {
if((state_val_28758 === (11))){
var inst_28734 = (state_28757[(7)]);
var inst_28744 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28757__$1,(8),inst_28744,inst_28734);
} else {
if((state_val_28758 === (9))){
var state_28757__$1 = state_28757;
var statearr_28790_31045 = state_28757__$1;
(statearr_28790_31045[(2)] = tc);

(statearr_28790_31045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (5))){
var inst_28737 = cljs.core.async.close_BANG_(tc);
var inst_28738 = cljs.core.async.close_BANG_(fc);
var state_28757__$1 = (function (){var statearr_28791 = state_28757;
(statearr_28791[(8)] = inst_28737);

return statearr_28791;
})();
var statearr_28792_31046 = state_28757__$1;
(statearr_28792_31046[(2)] = inst_28738);

(statearr_28792_31046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (14))){
var inst_28751 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
var statearr_28793_31053 = state_28757__$1;
(statearr_28793_31053[(2)] = inst_28751);

(statearr_28793_31053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (10))){
var state_28757__$1 = state_28757;
var statearr_28794_31054 = state_28757__$1;
(statearr_28794_31054[(2)] = fc);

(statearr_28794_31054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (8))){
var inst_28746 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
if(cljs.core.truth_(inst_28746)){
var statearr_28796_31055 = state_28757__$1;
(statearr_28796_31055[(1)] = (12));

} else {
var statearr_28797_31056 = state_28757__$1;
(statearr_28797_31056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27803__auto__ = null;
var cljs$core$async$state_machine__27803__auto____0 = (function (){
var statearr_28799 = [null,null,null,null,null,null,null,null,null];
(statearr_28799[(0)] = cljs$core$async$state_machine__27803__auto__);

(statearr_28799[(1)] = (1));

return statearr_28799;
});
var cljs$core$async$state_machine__27803__auto____1 = (function (state_28757){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_28757);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e28800){var ex__27806__auto__ = e28800;
var statearr_28801_31066 = state_28757;
(statearr_28801_31066[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_28757[(4)]))){
var statearr_28802_31067 = state_28757;
(statearr_28802_31067[(1)] = cljs.core.first((state_28757[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31068 = state_28757;
state_28757 = G__31068;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$state_machine__27803__auto__ = function(state_28757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27803__auto____1.call(this,state_28757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27803__auto____0;
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27803__auto____1;
return cljs$core$async$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_28803 = f__28055__auto__();
(statearr_28803[(6)] = c__28054__auto___31032);

return statearr_28803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_28825){
var state_val_28826 = (state_28825[(1)]);
if((state_val_28826 === (7))){
var inst_28821 = (state_28825[(2)]);
var state_28825__$1 = state_28825;
var statearr_28830_31069 = state_28825__$1;
(statearr_28830_31069[(2)] = inst_28821);

(statearr_28830_31069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28826 === (1))){
var inst_28804 = init;
var inst_28805 = inst_28804;
var state_28825__$1 = (function (){var statearr_28835 = state_28825;
(statearr_28835[(7)] = inst_28805);

return statearr_28835;
})();
var statearr_28836_31073 = state_28825__$1;
(statearr_28836_31073[(2)] = null);

(statearr_28836_31073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28826 === (4))){
var inst_28808 = (state_28825[(8)]);
var inst_28808__$1 = (state_28825[(2)]);
var inst_28809 = (inst_28808__$1 == null);
var state_28825__$1 = (function (){var statearr_28837 = state_28825;
(statearr_28837[(8)] = inst_28808__$1);

return statearr_28837;
})();
if(cljs.core.truth_(inst_28809)){
var statearr_28838_31074 = state_28825__$1;
(statearr_28838_31074[(1)] = (5));

} else {
var statearr_28839_31075 = state_28825__$1;
(statearr_28839_31075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28826 === (6))){
var inst_28812 = (state_28825[(9)]);
var inst_28805 = (state_28825[(7)]);
var inst_28808 = (state_28825[(8)]);
var inst_28812__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28805,inst_28808) : f.call(null, inst_28805,inst_28808));
var inst_28813 = cljs.core.reduced_QMARK_(inst_28812__$1);
var state_28825__$1 = (function (){var statearr_28841 = state_28825;
(statearr_28841[(9)] = inst_28812__$1);

return statearr_28841;
})();
if(inst_28813){
var statearr_28845_31076 = state_28825__$1;
(statearr_28845_31076[(1)] = (8));

} else {
var statearr_28846_31077 = state_28825__$1;
(statearr_28846_31077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28826 === (3))){
var inst_28823 = (state_28825[(2)]);
var state_28825__$1 = state_28825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28825__$1,inst_28823);
} else {
if((state_val_28826 === (2))){
var state_28825__$1 = state_28825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28825__$1,(4),ch);
} else {
if((state_val_28826 === (9))){
var inst_28812 = (state_28825[(9)]);
var inst_28805 = inst_28812;
var state_28825__$1 = (function (){var statearr_28851 = state_28825;
(statearr_28851[(7)] = inst_28805);

return statearr_28851;
})();
var statearr_28852_31078 = state_28825__$1;
(statearr_28852_31078[(2)] = null);

(statearr_28852_31078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28826 === (5))){
var inst_28805 = (state_28825[(7)]);
var state_28825__$1 = state_28825;
var statearr_28854_31082 = state_28825__$1;
(statearr_28854_31082[(2)] = inst_28805);

(statearr_28854_31082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28826 === (10))){
var inst_28819 = (state_28825[(2)]);
var state_28825__$1 = state_28825;
var statearr_28855_31083 = state_28825__$1;
(statearr_28855_31083[(2)] = inst_28819);

(statearr_28855_31083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28826 === (8))){
var inst_28812 = (state_28825[(9)]);
var inst_28815 = cljs.core.deref(inst_28812);
var state_28825__$1 = state_28825;
var statearr_28859_31084 = state_28825__$1;
(statearr_28859_31084[(2)] = inst_28815);

(statearr_28859_31084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27803__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27803__auto____0 = (function (){
var statearr_28863 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28863[(0)] = cljs$core$async$reduce_$_state_machine__27803__auto__);

(statearr_28863[(1)] = (1));

return statearr_28863;
});
var cljs$core$async$reduce_$_state_machine__27803__auto____1 = (function (state_28825){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_28825);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e28864){var ex__27806__auto__ = e28864;
var statearr_28865_31088 = state_28825;
(statearr_28865_31088[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_28825[(4)]))){
var statearr_28866_31089 = state_28825;
(statearr_28866_31089[(1)] = cljs.core.first((state_28825[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31090 = state_28825;
state_28825 = G__31090;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27803__auto__ = function(state_28825){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27803__auto____1.call(this,state_28825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27803__auto____0;
cljs$core$async$reduce_$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27803__auto____1;
return cljs$core$async$reduce_$_state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_28872 = f__28055__auto__();
(statearr_28872[(6)] = c__28054__auto__);

return statearr_28872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));

return c__28054__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__28054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_28884){
var state_val_28885 = (state_28884[(1)]);
if((state_val_28885 === (1))){
var inst_28879 = cljs.core.async.reduce(f__$1,init,ch);
var state_28884__$1 = state_28884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28884__$1,(2),inst_28879);
} else {
if((state_val_28885 === (2))){
var inst_28881 = (state_28884[(2)]);
var inst_28882 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28881) : f__$1.call(null, inst_28881));
var state_28884__$1 = state_28884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28884__$1,inst_28882);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27803__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27803__auto____0 = (function (){
var statearr_28892 = [null,null,null,null,null,null,null];
(statearr_28892[(0)] = cljs$core$async$transduce_$_state_machine__27803__auto__);

(statearr_28892[(1)] = (1));

return statearr_28892;
});
var cljs$core$async$transduce_$_state_machine__27803__auto____1 = (function (state_28884){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_28884);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e28893){var ex__27806__auto__ = e28893;
var statearr_28898_31094 = state_28884;
(statearr_28898_31094[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_28884[(4)]))){
var statearr_28899_31095 = state_28884;
(statearr_28899_31095[(1)] = cljs.core.first((state_28884[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31096 = state_28884;
state_28884 = G__31096;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27803__auto__ = function(state_28884){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27803__auto____1.call(this,state_28884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27803__auto____0;
cljs$core$async$transduce_$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27803__auto____1;
return cljs$core$async$transduce_$_state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_28906 = f__28055__auto__();
(statearr_28906[(6)] = c__28054__auto__);

return statearr_28906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));

return c__28054__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__28915 = arguments.length;
switch (G__28915) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_28944){
var state_val_28945 = (state_28944[(1)]);
if((state_val_28945 === (7))){
var inst_28926 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28946_31100 = state_28944__$1;
(statearr_28946_31100[(2)] = inst_28926);

(statearr_28946_31100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (1))){
var inst_28920 = cljs.core.seq(coll);
var inst_28921 = inst_28920;
var state_28944__$1 = (function (){var statearr_28951 = state_28944;
(statearr_28951[(7)] = inst_28921);

return statearr_28951;
})();
var statearr_28952_31104 = state_28944__$1;
(statearr_28952_31104[(2)] = null);

(statearr_28952_31104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (4))){
var inst_28921 = (state_28944[(7)]);
var inst_28924 = cljs.core.first(inst_28921);
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28944__$1,(7),ch,inst_28924);
} else {
if((state_val_28945 === (13))){
var inst_28938 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28953_31105 = state_28944__$1;
(statearr_28953_31105[(2)] = inst_28938);

(statearr_28953_31105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (6))){
var inst_28929 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
if(cljs.core.truth_(inst_28929)){
var statearr_28957_31110 = state_28944__$1;
(statearr_28957_31110[(1)] = (8));

} else {
var statearr_28958_31111 = state_28944__$1;
(statearr_28958_31111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (3))){
var inst_28942 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28944__$1,inst_28942);
} else {
if((state_val_28945 === (12))){
var state_28944__$1 = state_28944;
var statearr_28959_31118 = state_28944__$1;
(statearr_28959_31118[(2)] = null);

(statearr_28959_31118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (2))){
var inst_28921 = (state_28944[(7)]);
var state_28944__$1 = state_28944;
if(cljs.core.truth_(inst_28921)){
var statearr_28960_31121 = state_28944__$1;
(statearr_28960_31121[(1)] = (4));

} else {
var statearr_28961_31122 = state_28944__$1;
(statearr_28961_31122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (11))){
var inst_28935 = cljs.core.async.close_BANG_(ch);
var state_28944__$1 = state_28944;
var statearr_28962_31126 = state_28944__$1;
(statearr_28962_31126[(2)] = inst_28935);

(statearr_28962_31126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (9))){
var state_28944__$1 = state_28944;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28964_31127 = state_28944__$1;
(statearr_28964_31127[(1)] = (11));

} else {
var statearr_28965_31128 = state_28944__$1;
(statearr_28965_31128[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (5))){
var inst_28921 = (state_28944[(7)]);
var state_28944__$1 = state_28944;
var statearr_28966_31129 = state_28944__$1;
(statearr_28966_31129[(2)] = inst_28921);

(statearr_28966_31129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (10))){
var inst_28940 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28967_31131 = state_28944__$1;
(statearr_28967_31131[(2)] = inst_28940);

(statearr_28967_31131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (8))){
var inst_28921 = (state_28944[(7)]);
var inst_28931 = cljs.core.next(inst_28921);
var inst_28921__$1 = inst_28931;
var state_28944__$1 = (function (){var statearr_28968 = state_28944;
(statearr_28968[(7)] = inst_28921__$1);

return statearr_28968;
})();
var statearr_28969_31132 = state_28944__$1;
(statearr_28969_31132[(2)] = null);

(statearr_28969_31132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27803__auto__ = null;
var cljs$core$async$state_machine__27803__auto____0 = (function (){
var statearr_28970 = [null,null,null,null,null,null,null,null];
(statearr_28970[(0)] = cljs$core$async$state_machine__27803__auto__);

(statearr_28970[(1)] = (1));

return statearr_28970;
});
var cljs$core$async$state_machine__27803__auto____1 = (function (state_28944){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_28944);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e28971){var ex__27806__auto__ = e28971;
var statearr_28972_31147 = state_28944;
(statearr_28972_31147[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_28944[(4)]))){
var statearr_28973_31148 = state_28944;
(statearr_28973_31148[(1)] = cljs.core.first((state_28944[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31149 = state_28944;
state_28944 = G__31149;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$state_machine__27803__auto__ = function(state_28944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27803__auto____1.call(this,state_28944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27803__auto____0;
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27803__auto____1;
return cljs$core$async$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_28975 = f__28055__auto__();
(statearr_28975[(6)] = c__28054__auto__);

return statearr_28975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));

return c__28054__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28979 = arguments.length;
switch (G__28979) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_31163 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_31163(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31185 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_31185(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31188 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_31188(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_31192 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_31192(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28984 = (function (ch,cs,meta28985){
this.ch = ch;
this.cs = cs;
this.meta28985 = meta28985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28986,meta28985__$1){
var self__ = this;
var _28986__$1 = this;
return (new cljs.core.async.t_cljs$core$async28984(self__.ch,self__.cs,meta28985__$1));
}));

(cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28986){
var self__ = this;
var _28986__$1 = this;
return self__.meta28985;
}));

(cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28985","meta28985",1939963646,null)], null);
}));

(cljs.core.async.t_cljs$core$async28984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28984");

(cljs.core.async.t_cljs$core$async28984.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28984.
 */
cljs.core.async.__GT_t_cljs$core$async28984 = (function cljs$core$async$__GT_t_cljs$core$async28984(ch,cs,meta28985){
return (new cljs.core.async.t_cljs$core$async28984(ch,cs,meta28985));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async28984(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28054__auto___31201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_29135){
var state_val_29137 = (state_29135[(1)]);
if((state_val_29137 === (7))){
var inst_29131 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29139_31202 = state_29135__$1;
(statearr_29139_31202[(2)] = inst_29131);

(statearr_29139_31202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (20))){
var inst_29031 = (state_29135[(7)]);
var inst_29044 = cljs.core.first(inst_29031);
var inst_29045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29044,(0),null);
var inst_29046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29044,(1),null);
var state_29135__$1 = (function (){var statearr_29141 = state_29135;
(statearr_29141[(8)] = inst_29045);

return statearr_29141;
})();
if(cljs.core.truth_(inst_29046)){
var statearr_29142_31203 = state_29135__$1;
(statearr_29142_31203[(1)] = (22));

} else {
var statearr_29143_31204 = state_29135__$1;
(statearr_29143_31204[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (27))){
var inst_29000 = (state_29135[(9)]);
var inst_29074 = (state_29135[(10)]);
var inst_29076 = (state_29135[(11)]);
var inst_29081 = (state_29135[(12)]);
var inst_29081__$1 = cljs.core._nth(inst_29074,inst_29076);
var inst_29082 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29081__$1,inst_29000,done);
var state_29135__$1 = (function (){var statearr_29148 = state_29135;
(statearr_29148[(12)] = inst_29081__$1);

return statearr_29148;
})();
if(cljs.core.truth_(inst_29082)){
var statearr_29150_31205 = state_29135__$1;
(statearr_29150_31205[(1)] = (30));

} else {
var statearr_29151_31206 = state_29135__$1;
(statearr_29151_31206[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (1))){
var state_29135__$1 = state_29135;
var statearr_29152_31207 = state_29135__$1;
(statearr_29152_31207[(2)] = null);

(statearr_29152_31207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (24))){
var inst_29031 = (state_29135[(7)]);
var inst_29051 = (state_29135[(2)]);
var inst_29052 = cljs.core.next(inst_29031);
var inst_29009 = inst_29052;
var inst_29010 = null;
var inst_29011 = (0);
var inst_29012 = (0);
var state_29135__$1 = (function (){var statearr_29153 = state_29135;
(statearr_29153[(13)] = inst_29009);

(statearr_29153[(14)] = inst_29051);

(statearr_29153[(15)] = inst_29011);

(statearr_29153[(16)] = inst_29010);

(statearr_29153[(17)] = inst_29012);

return statearr_29153;
})();
var statearr_29154_31208 = state_29135__$1;
(statearr_29154_31208[(2)] = null);

(statearr_29154_31208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (39))){
var state_29135__$1 = state_29135;
var statearr_29158_31209 = state_29135__$1;
(statearr_29158_31209[(2)] = null);

(statearr_29158_31209[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (4))){
var inst_29000 = (state_29135[(9)]);
var inst_29000__$1 = (state_29135[(2)]);
var inst_29001 = (inst_29000__$1 == null);
var state_29135__$1 = (function (){var statearr_29159 = state_29135;
(statearr_29159[(9)] = inst_29000__$1);

return statearr_29159;
})();
if(cljs.core.truth_(inst_29001)){
var statearr_29160_31210 = state_29135__$1;
(statearr_29160_31210[(1)] = (5));

} else {
var statearr_29161_31211 = state_29135__$1;
(statearr_29161_31211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (15))){
var inst_29009 = (state_29135[(13)]);
var inst_29011 = (state_29135[(15)]);
var inst_29010 = (state_29135[(16)]);
var inst_29012 = (state_29135[(17)]);
var inst_29027 = (state_29135[(2)]);
var inst_29028 = (inst_29012 + (1));
var tmp29155 = inst_29009;
var tmp29156 = inst_29011;
var tmp29157 = inst_29010;
var inst_29009__$1 = tmp29155;
var inst_29010__$1 = tmp29157;
var inst_29011__$1 = tmp29156;
var inst_29012__$1 = inst_29028;
var state_29135__$1 = (function (){var statearr_29163 = state_29135;
(statearr_29163[(13)] = inst_29009__$1);

(statearr_29163[(18)] = inst_29027);

(statearr_29163[(15)] = inst_29011__$1);

(statearr_29163[(16)] = inst_29010__$1);

(statearr_29163[(17)] = inst_29012__$1);

return statearr_29163;
})();
var statearr_29164_31215 = state_29135__$1;
(statearr_29164_31215[(2)] = null);

(statearr_29164_31215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (21))){
var inst_29055 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29168_31216 = state_29135__$1;
(statearr_29168_31216[(2)] = inst_29055);

(statearr_29168_31216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (31))){
var inst_29081 = (state_29135[(12)]);
var inst_29085 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_29081);
var state_29135__$1 = state_29135;
var statearr_29169_31217 = state_29135__$1;
(statearr_29169_31217[(2)] = inst_29085);

(statearr_29169_31217[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (32))){
var inst_29074 = (state_29135[(10)]);
var inst_29076 = (state_29135[(11)]);
var inst_29075 = (state_29135[(19)]);
var inst_29073 = (state_29135[(20)]);
var inst_29087 = (state_29135[(2)]);
var inst_29088 = (inst_29076 + (1));
var tmp29165 = inst_29074;
var tmp29166 = inst_29075;
var tmp29167 = inst_29073;
var inst_29073__$1 = tmp29167;
var inst_29074__$1 = tmp29165;
var inst_29075__$1 = tmp29166;
var inst_29076__$1 = inst_29088;
var state_29135__$1 = (function (){var statearr_29171 = state_29135;
(statearr_29171[(10)] = inst_29074__$1);

(statearr_29171[(11)] = inst_29076__$1);

(statearr_29171[(21)] = inst_29087);

(statearr_29171[(19)] = inst_29075__$1);

(statearr_29171[(20)] = inst_29073__$1);

return statearr_29171;
})();
var statearr_29172_31218 = state_29135__$1;
(statearr_29172_31218[(2)] = null);

(statearr_29172_31218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (40))){
var inst_29104 = (state_29135[(22)]);
var inst_29108 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_29104);
var state_29135__$1 = state_29135;
var statearr_29173_31221 = state_29135__$1;
(statearr_29173_31221[(2)] = inst_29108);

(statearr_29173_31221[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (33))){
var inst_29091 = (state_29135[(23)]);
var inst_29093 = cljs.core.chunked_seq_QMARK_(inst_29091);
var state_29135__$1 = state_29135;
if(inst_29093){
var statearr_29174_31222 = state_29135__$1;
(statearr_29174_31222[(1)] = (36));

} else {
var statearr_29175_31224 = state_29135__$1;
(statearr_29175_31224[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (13))){
var inst_29021 = (state_29135[(24)]);
var inst_29024 = cljs.core.async.close_BANG_(inst_29021);
var state_29135__$1 = state_29135;
var statearr_29176_31225 = state_29135__$1;
(statearr_29176_31225[(2)] = inst_29024);

(statearr_29176_31225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (22))){
var inst_29045 = (state_29135[(8)]);
var inst_29048 = cljs.core.async.close_BANG_(inst_29045);
var state_29135__$1 = state_29135;
var statearr_29178_31241 = state_29135__$1;
(statearr_29178_31241[(2)] = inst_29048);

(statearr_29178_31241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (36))){
var inst_29091 = (state_29135[(23)]);
var inst_29095 = cljs.core.chunk_first(inst_29091);
var inst_29096 = cljs.core.chunk_rest(inst_29091);
var inst_29097 = cljs.core.count(inst_29095);
var inst_29073 = inst_29096;
var inst_29074 = inst_29095;
var inst_29075 = inst_29097;
var inst_29076 = (0);
var state_29135__$1 = (function (){var statearr_29183 = state_29135;
(statearr_29183[(10)] = inst_29074);

(statearr_29183[(11)] = inst_29076);

(statearr_29183[(19)] = inst_29075);

(statearr_29183[(20)] = inst_29073);

return statearr_29183;
})();
var statearr_29184_31243 = state_29135__$1;
(statearr_29184_31243[(2)] = null);

(statearr_29184_31243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (41))){
var inst_29091 = (state_29135[(23)]);
var inst_29110 = (state_29135[(2)]);
var inst_29111 = cljs.core.next(inst_29091);
var inst_29073 = inst_29111;
var inst_29074 = null;
var inst_29075 = (0);
var inst_29076 = (0);
var state_29135__$1 = (function (){var statearr_29185 = state_29135;
(statearr_29185[(10)] = inst_29074);

(statearr_29185[(11)] = inst_29076);

(statearr_29185[(25)] = inst_29110);

(statearr_29185[(19)] = inst_29075);

(statearr_29185[(20)] = inst_29073);

return statearr_29185;
})();
var statearr_29186_31248 = state_29135__$1;
(statearr_29186_31248[(2)] = null);

(statearr_29186_31248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (43))){
var state_29135__$1 = state_29135;
var statearr_29187_31249 = state_29135__$1;
(statearr_29187_31249[(2)] = null);

(statearr_29187_31249[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (29))){
var inst_29119 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29188_31250 = state_29135__$1;
(statearr_29188_31250[(2)] = inst_29119);

(statearr_29188_31250[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (44))){
var inst_29128 = (state_29135[(2)]);
var state_29135__$1 = (function (){var statearr_29189 = state_29135;
(statearr_29189[(26)] = inst_29128);

return statearr_29189;
})();
var statearr_29190_31254 = state_29135__$1;
(statearr_29190_31254[(2)] = null);

(statearr_29190_31254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (6))){
var inst_29065 = (state_29135[(27)]);
var inst_29064 = cljs.core.deref(cs);
var inst_29065__$1 = cljs.core.keys(inst_29064);
var inst_29066 = cljs.core.count(inst_29065__$1);
var inst_29067 = cljs.core.reset_BANG_(dctr,inst_29066);
var inst_29072 = cljs.core.seq(inst_29065__$1);
var inst_29073 = inst_29072;
var inst_29074 = null;
var inst_29075 = (0);
var inst_29076 = (0);
var state_29135__$1 = (function (){var statearr_29191 = state_29135;
(statearr_29191[(28)] = inst_29067);

(statearr_29191[(27)] = inst_29065__$1);

(statearr_29191[(10)] = inst_29074);

(statearr_29191[(11)] = inst_29076);

(statearr_29191[(19)] = inst_29075);

(statearr_29191[(20)] = inst_29073);

return statearr_29191;
})();
var statearr_29192_31259 = state_29135__$1;
(statearr_29192_31259[(2)] = null);

(statearr_29192_31259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (28))){
var inst_29091 = (state_29135[(23)]);
var inst_29073 = (state_29135[(20)]);
var inst_29091__$1 = cljs.core.seq(inst_29073);
var state_29135__$1 = (function (){var statearr_29194 = state_29135;
(statearr_29194[(23)] = inst_29091__$1);

return statearr_29194;
})();
if(inst_29091__$1){
var statearr_29195_31260 = state_29135__$1;
(statearr_29195_31260[(1)] = (33));

} else {
var statearr_29196_31261 = state_29135__$1;
(statearr_29196_31261[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (25))){
var inst_29076 = (state_29135[(11)]);
var inst_29075 = (state_29135[(19)]);
var inst_29078 = (inst_29076 < inst_29075);
var inst_29079 = inst_29078;
var state_29135__$1 = state_29135;
if(cljs.core.truth_(inst_29079)){
var statearr_29197_31265 = state_29135__$1;
(statearr_29197_31265[(1)] = (27));

} else {
var statearr_29198_31266 = state_29135__$1;
(statearr_29198_31266[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (34))){
var state_29135__$1 = state_29135;
var statearr_29199_31270 = state_29135__$1;
(statearr_29199_31270[(2)] = null);

(statearr_29199_31270[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (17))){
var state_29135__$1 = state_29135;
var statearr_29202_31274 = state_29135__$1;
(statearr_29202_31274[(2)] = null);

(statearr_29202_31274[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (3))){
var inst_29133 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29135__$1,inst_29133);
} else {
if((state_val_29137 === (12))){
var inst_29060 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29203_31281 = state_29135__$1;
(statearr_29203_31281[(2)] = inst_29060);

(statearr_29203_31281[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (2))){
var state_29135__$1 = state_29135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29135__$1,(4),ch);
} else {
if((state_val_29137 === (23))){
var state_29135__$1 = state_29135;
var statearr_29204_31286 = state_29135__$1;
(statearr_29204_31286[(2)] = null);

(statearr_29204_31286[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (35))){
var inst_29117 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29205_31287 = state_29135__$1;
(statearr_29205_31287[(2)] = inst_29117);

(statearr_29205_31287[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (19))){
var inst_29031 = (state_29135[(7)]);
var inst_29035 = cljs.core.chunk_first(inst_29031);
var inst_29036 = cljs.core.chunk_rest(inst_29031);
var inst_29037 = cljs.core.count(inst_29035);
var inst_29009 = inst_29036;
var inst_29010 = inst_29035;
var inst_29011 = inst_29037;
var inst_29012 = (0);
var state_29135__$1 = (function (){var statearr_29207 = state_29135;
(statearr_29207[(13)] = inst_29009);

(statearr_29207[(15)] = inst_29011);

(statearr_29207[(16)] = inst_29010);

(statearr_29207[(17)] = inst_29012);

return statearr_29207;
})();
var statearr_29208_31288 = state_29135__$1;
(statearr_29208_31288[(2)] = null);

(statearr_29208_31288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (11))){
var inst_29031 = (state_29135[(7)]);
var inst_29009 = (state_29135[(13)]);
var inst_29031__$1 = cljs.core.seq(inst_29009);
var state_29135__$1 = (function (){var statearr_29209 = state_29135;
(statearr_29209[(7)] = inst_29031__$1);

return statearr_29209;
})();
if(inst_29031__$1){
var statearr_29210_31289 = state_29135__$1;
(statearr_29210_31289[(1)] = (16));

} else {
var statearr_29211_31290 = state_29135__$1;
(statearr_29211_31290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (9))){
var inst_29062 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29212_31291 = state_29135__$1;
(statearr_29212_31291[(2)] = inst_29062);

(statearr_29212_31291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (5))){
var inst_29007 = cljs.core.deref(cs);
var inst_29008 = cljs.core.seq(inst_29007);
var inst_29009 = inst_29008;
var inst_29010 = null;
var inst_29011 = (0);
var inst_29012 = (0);
var state_29135__$1 = (function (){var statearr_29213 = state_29135;
(statearr_29213[(13)] = inst_29009);

(statearr_29213[(15)] = inst_29011);

(statearr_29213[(16)] = inst_29010);

(statearr_29213[(17)] = inst_29012);

return statearr_29213;
})();
var statearr_29214_31294 = state_29135__$1;
(statearr_29214_31294[(2)] = null);

(statearr_29214_31294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (14))){
var state_29135__$1 = state_29135;
var statearr_29215_31295 = state_29135__$1;
(statearr_29215_31295[(2)] = null);

(statearr_29215_31295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (45))){
var inst_29125 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29216_31296 = state_29135__$1;
(statearr_29216_31296[(2)] = inst_29125);

(statearr_29216_31296[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (26))){
var inst_29065 = (state_29135[(27)]);
var inst_29121 = (state_29135[(2)]);
var inst_29122 = cljs.core.seq(inst_29065);
var state_29135__$1 = (function (){var statearr_29217 = state_29135;
(statearr_29217[(29)] = inst_29121);

return statearr_29217;
})();
if(inst_29122){
var statearr_29218_31297 = state_29135__$1;
(statearr_29218_31297[(1)] = (42));

} else {
var statearr_29219_31301 = state_29135__$1;
(statearr_29219_31301[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (16))){
var inst_29031 = (state_29135[(7)]);
var inst_29033 = cljs.core.chunked_seq_QMARK_(inst_29031);
var state_29135__$1 = state_29135;
if(inst_29033){
var statearr_29224_31302 = state_29135__$1;
(statearr_29224_31302[(1)] = (19));

} else {
var statearr_29225_31303 = state_29135__$1;
(statearr_29225_31303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (38))){
var inst_29114 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29227_31305 = state_29135__$1;
(statearr_29227_31305[(2)] = inst_29114);

(statearr_29227_31305[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (30))){
var state_29135__$1 = state_29135;
var statearr_29228_31306 = state_29135__$1;
(statearr_29228_31306[(2)] = null);

(statearr_29228_31306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (10))){
var inst_29010 = (state_29135[(16)]);
var inst_29012 = (state_29135[(17)]);
var inst_29020 = cljs.core._nth(inst_29010,inst_29012);
var inst_29021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29020,(0),null);
var inst_29022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29020,(1),null);
var state_29135__$1 = (function (){var statearr_29229 = state_29135;
(statearr_29229[(24)] = inst_29021);

return statearr_29229;
})();
if(cljs.core.truth_(inst_29022)){
var statearr_29230_31307 = state_29135__$1;
(statearr_29230_31307[(1)] = (13));

} else {
var statearr_29231_31308 = state_29135__$1;
(statearr_29231_31308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (18))){
var inst_29058 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29232_31309 = state_29135__$1;
(statearr_29232_31309[(2)] = inst_29058);

(statearr_29232_31309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (42))){
var state_29135__$1 = state_29135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29135__$1,(45),dchan);
} else {
if((state_val_29137 === (37))){
var inst_29000 = (state_29135[(9)]);
var inst_29091 = (state_29135[(23)]);
var inst_29104 = (state_29135[(22)]);
var inst_29104__$1 = cljs.core.first(inst_29091);
var inst_29105 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29104__$1,inst_29000,done);
var state_29135__$1 = (function (){var statearr_29235 = state_29135;
(statearr_29235[(22)] = inst_29104__$1);

return statearr_29235;
})();
if(cljs.core.truth_(inst_29105)){
var statearr_29236_31310 = state_29135__$1;
(statearr_29236_31310[(1)] = (39));

} else {
var statearr_29237_31311 = state_29135__$1;
(statearr_29237_31311[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (8))){
var inst_29011 = (state_29135[(15)]);
var inst_29012 = (state_29135[(17)]);
var inst_29014 = (inst_29012 < inst_29011);
var inst_29015 = inst_29014;
var state_29135__$1 = state_29135;
if(cljs.core.truth_(inst_29015)){
var statearr_29242_31312 = state_29135__$1;
(statearr_29242_31312[(1)] = (10));

} else {
var statearr_29243_31313 = state_29135__$1;
(statearr_29243_31313[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__27803__auto__ = null;
var cljs$core$async$mult_$_state_machine__27803__auto____0 = (function (){
var statearr_29244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29244[(0)] = cljs$core$async$mult_$_state_machine__27803__auto__);

(statearr_29244[(1)] = (1));

return statearr_29244;
});
var cljs$core$async$mult_$_state_machine__27803__auto____1 = (function (state_29135){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_29135);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e29246){var ex__27806__auto__ = e29246;
var statearr_29247_31314 = state_29135;
(statearr_29247_31314[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_29135[(4)]))){
var statearr_29248_31315 = state_29135;
(statearr_29248_31315[(1)] = cljs.core.first((state_29135[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31316 = state_29135;
state_29135 = G__31316;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27803__auto__ = function(state_29135){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27803__auto____1.call(this,state_29135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27803__auto____0;
cljs$core$async$mult_$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27803__auto____1;
return cljs$core$async$mult_$_state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_29249 = f__28055__auto__();
(statearr_29249[(6)] = c__28054__auto___31201);

return statearr_29249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29251 = arguments.length;
switch (G__29251) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_31318 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_31318(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_31319 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_31319(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_31330 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_31330(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_31332 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_31332(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_31336 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_31336(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31337 = arguments.length;
var i__5727__auto___31338 = (0);
while(true){
if((i__5727__auto___31338 < len__5726__auto___31337)){
args__5732__auto__.push((arguments[i__5727__auto___31338]));

var G__31339 = (i__5727__auto___31338 + (1));
i__5727__auto___31338 = G__31339;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29277){
var map__29278 = p__29277;
var map__29278__$1 = cljs.core.__destructure_map(map__29278);
var opts = map__29278__$1;
var statearr_29279_31340 = state;
(statearr_29279_31340[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_29280_31341 = state;
(statearr_29280_31341[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_29282_31342 = state;
(statearr_29282_31342[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29272){
var G__29273 = cljs.core.first(seq29272);
var seq29272__$1 = cljs.core.next(seq29272);
var G__29274 = cljs.core.first(seq29272__$1);
var seq29272__$2 = cljs.core.next(seq29272__$1);
var G__29275 = cljs.core.first(seq29272__$2);
var seq29272__$3 = cljs.core.next(seq29272__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29273,G__29274,G__29275,seq29272__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29289 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29290){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29290 = meta29290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29291,meta29290__$1){
var self__ = this;
var _29291__$1 = this;
return (new cljs.core.async.t_cljs$core$async29289(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29290__$1));
}));

(cljs.core.async.t_cljs$core$async29289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29291){
var self__ = this;
var _29291__$1 = this;
return self__.meta29290;
}));

(cljs.core.async.t_cljs$core$async29289.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29289.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29289.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async29289.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async29289.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async29289.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async29289.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async29289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29290","meta29290",1796339484,null)], null);
}));

(cljs.core.async.t_cljs$core$async29289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29289");

(cljs.core.async.t_cljs$core$async29289.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async29289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29289.
 */
cljs.core.async.__GT_t_cljs$core$async29289 = (function cljs$core$async$__GT_t_cljs$core$async29289(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29290){
return (new cljs.core.async.t_cljs$core$async29289(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29290));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async29289(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__28054__auto___31359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_29375){
var state_val_29376 = (state_29375[(1)]);
if((state_val_29376 === (7))){
var inst_29335 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
if(cljs.core.truth_(inst_29335)){
var statearr_29378_31360 = state_29375__$1;
(statearr_29378_31360[(1)] = (8));

} else {
var statearr_29379_31361 = state_29375__$1;
(statearr_29379_31361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (20))){
var inst_29328 = (state_29375[(7)]);
var state_29375__$1 = state_29375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29375__$1,(23),out,inst_29328);
} else {
if((state_val_29376 === (1))){
var inst_29310 = calc_state();
var inst_29311 = cljs.core.__destructure_map(inst_29310);
var inst_29312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29311,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29311,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29311,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29315 = inst_29310;
var state_29375__$1 = (function (){var statearr_29381 = state_29375;
(statearr_29381[(8)] = inst_29314);

(statearr_29381[(9)] = inst_29313);

(statearr_29381[(10)] = inst_29315);

(statearr_29381[(11)] = inst_29312);

return statearr_29381;
})();
var statearr_29382_31362 = state_29375__$1;
(statearr_29382_31362[(2)] = null);

(statearr_29382_31362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (24))){
var inst_29318 = (state_29375[(12)]);
var inst_29315 = inst_29318;
var state_29375__$1 = (function (){var statearr_29383 = state_29375;
(statearr_29383[(10)] = inst_29315);

return statearr_29383;
})();
var statearr_29384_31363 = state_29375__$1;
(statearr_29384_31363[(2)] = null);

(statearr_29384_31363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (4))){
var inst_29330 = (state_29375[(13)]);
var inst_29328 = (state_29375[(7)]);
var inst_29327 = (state_29375[(2)]);
var inst_29328__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29327,(0),null);
var inst_29329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29327,(1),null);
var inst_29330__$1 = (inst_29328__$1 == null);
var state_29375__$1 = (function (){var statearr_29385 = state_29375;
(statearr_29385[(13)] = inst_29330__$1);

(statearr_29385[(7)] = inst_29328__$1);

(statearr_29385[(14)] = inst_29329);

return statearr_29385;
})();
if(cljs.core.truth_(inst_29330__$1)){
var statearr_29386_31364 = state_29375__$1;
(statearr_29386_31364[(1)] = (5));

} else {
var statearr_29387_31365 = state_29375__$1;
(statearr_29387_31365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (15))){
var inst_29319 = (state_29375[(15)]);
var inst_29349 = (state_29375[(16)]);
var inst_29349__$1 = cljs.core.empty_QMARK_(inst_29319);
var state_29375__$1 = (function (){var statearr_29388 = state_29375;
(statearr_29388[(16)] = inst_29349__$1);

return statearr_29388;
})();
if(inst_29349__$1){
var statearr_29392_31368 = state_29375__$1;
(statearr_29392_31368[(1)] = (17));

} else {
var statearr_29393_31369 = state_29375__$1;
(statearr_29393_31369[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (21))){
var inst_29318 = (state_29375[(12)]);
var inst_29315 = inst_29318;
var state_29375__$1 = (function (){var statearr_29394 = state_29375;
(statearr_29394[(10)] = inst_29315);

return statearr_29394;
})();
var statearr_29395_31370 = state_29375__$1;
(statearr_29395_31370[(2)] = null);

(statearr_29395_31370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (13))){
var inst_29342 = (state_29375[(2)]);
var inst_29343 = calc_state();
var inst_29315 = inst_29343;
var state_29375__$1 = (function (){var statearr_29397 = state_29375;
(statearr_29397[(10)] = inst_29315);

(statearr_29397[(17)] = inst_29342);

return statearr_29397;
})();
var statearr_29398_31371 = state_29375__$1;
(statearr_29398_31371[(2)] = null);

(statearr_29398_31371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (22))){
var inst_29369 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29399_31372 = state_29375__$1;
(statearr_29399_31372[(2)] = inst_29369);

(statearr_29399_31372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (6))){
var inst_29329 = (state_29375[(14)]);
var inst_29333 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29329,change);
var state_29375__$1 = state_29375;
var statearr_29400_31373 = state_29375__$1;
(statearr_29400_31373[(2)] = inst_29333);

(statearr_29400_31373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (25))){
var state_29375__$1 = state_29375;
var statearr_29401_31376 = state_29375__$1;
(statearr_29401_31376[(2)] = null);

(statearr_29401_31376[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (17))){
var inst_29320 = (state_29375[(18)]);
var inst_29329 = (state_29375[(14)]);
var inst_29351 = (inst_29320.cljs$core$IFn$_invoke$arity$1 ? inst_29320.cljs$core$IFn$_invoke$arity$1(inst_29329) : inst_29320.call(null, inst_29329));
var inst_29352 = cljs.core.not(inst_29351);
var state_29375__$1 = state_29375;
var statearr_29402_31377 = state_29375__$1;
(statearr_29402_31377[(2)] = inst_29352);

(statearr_29402_31377[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (3))){
var inst_29373 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29375__$1,inst_29373);
} else {
if((state_val_29376 === (12))){
var state_29375__$1 = state_29375;
var statearr_29403_31378 = state_29375__$1;
(statearr_29403_31378[(2)] = null);

(statearr_29403_31378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (2))){
var inst_29318 = (state_29375[(12)]);
var inst_29315 = (state_29375[(10)]);
var inst_29318__$1 = cljs.core.__destructure_map(inst_29315);
var inst_29319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29318__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29318__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29318__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29375__$1 = (function (){var statearr_29404 = state_29375;
(statearr_29404[(18)] = inst_29320);

(statearr_29404[(12)] = inst_29318__$1);

(statearr_29404[(15)] = inst_29319);

return statearr_29404;
})();
return cljs.core.async.ioc_alts_BANG_(state_29375__$1,(4),inst_29321);
} else {
if((state_val_29376 === (23))){
var inst_29360 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
if(cljs.core.truth_(inst_29360)){
var statearr_29406_31437 = state_29375__$1;
(statearr_29406_31437[(1)] = (24));

} else {
var statearr_29407_31438 = state_29375__$1;
(statearr_29407_31438[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (19))){
var inst_29355 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29408_31440 = state_29375__$1;
(statearr_29408_31440[(2)] = inst_29355);

(statearr_29408_31440[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (11))){
var inst_29329 = (state_29375[(14)]);
var inst_29339 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29329);
var state_29375__$1 = state_29375;
var statearr_29410_31442 = state_29375__$1;
(statearr_29410_31442[(2)] = inst_29339);

(statearr_29410_31442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (9))){
var inst_29346 = (state_29375[(19)]);
var inst_29329 = (state_29375[(14)]);
var inst_29319 = (state_29375[(15)]);
var inst_29346__$1 = (inst_29319.cljs$core$IFn$_invoke$arity$1 ? inst_29319.cljs$core$IFn$_invoke$arity$1(inst_29329) : inst_29319.call(null, inst_29329));
var state_29375__$1 = (function (){var statearr_29412 = state_29375;
(statearr_29412[(19)] = inst_29346__$1);

return statearr_29412;
})();
if(cljs.core.truth_(inst_29346__$1)){
var statearr_29419_31443 = state_29375__$1;
(statearr_29419_31443[(1)] = (14));

} else {
var statearr_29420_31444 = state_29375__$1;
(statearr_29420_31444[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (5))){
var inst_29330 = (state_29375[(13)]);
var state_29375__$1 = state_29375;
var statearr_29421_31445 = state_29375__$1;
(statearr_29421_31445[(2)] = inst_29330);

(statearr_29421_31445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (14))){
var inst_29346 = (state_29375[(19)]);
var state_29375__$1 = state_29375;
var statearr_29423_31446 = state_29375__$1;
(statearr_29423_31446[(2)] = inst_29346);

(statearr_29423_31446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (26))){
var inst_29365 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29424_31447 = state_29375__$1;
(statearr_29424_31447[(2)] = inst_29365);

(statearr_29424_31447[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (16))){
var inst_29357 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
if(cljs.core.truth_(inst_29357)){
var statearr_29429_31448 = state_29375__$1;
(statearr_29429_31448[(1)] = (20));

} else {
var statearr_29430_31449 = state_29375__$1;
(statearr_29430_31449[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (10))){
var inst_29371 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29431_31450 = state_29375__$1;
(statearr_29431_31450[(2)] = inst_29371);

(statearr_29431_31450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (18))){
var inst_29349 = (state_29375[(16)]);
var state_29375__$1 = state_29375;
var statearr_29433_31451 = state_29375__$1;
(statearr_29433_31451[(2)] = inst_29349);

(statearr_29433_31451[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (8))){
var inst_29328 = (state_29375[(7)]);
var inst_29337 = (inst_29328 == null);
var state_29375__$1 = state_29375;
if(cljs.core.truth_(inst_29337)){
var statearr_29435_31453 = state_29375__$1;
(statearr_29435_31453[(1)] = (11));

} else {
var statearr_29436_31460 = state_29375__$1;
(statearr_29436_31460[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__27803__auto__ = null;
var cljs$core$async$mix_$_state_machine__27803__auto____0 = (function (){
var statearr_29437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29437[(0)] = cljs$core$async$mix_$_state_machine__27803__auto__);

(statearr_29437[(1)] = (1));

return statearr_29437;
});
var cljs$core$async$mix_$_state_machine__27803__auto____1 = (function (state_29375){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_29375);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e29438){var ex__27806__auto__ = e29438;
var statearr_29439_31461 = state_29375;
(statearr_29439_31461[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_29375[(4)]))){
var statearr_29440_31466 = state_29375;
(statearr_29440_31466[(1)] = cljs.core.first((state_29375[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31470 = state_29375;
state_29375 = G__31470;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27803__auto__ = function(state_29375){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27803__auto____1.call(this,state_29375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27803__auto____0;
cljs$core$async$mix_$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27803__auto____1;
return cljs$core$async$mix_$_state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_29441 = f__28055__auto__();
(statearr_29441[(6)] = c__28054__auto___31359);

return statearr_29441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_31478 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_31478(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_31483 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_31483(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_31485 = (function() {
var G__31486 = null;
var G__31486__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__31486__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__31486 = function(p,v){
switch(arguments.length){
case 1:
return G__31486__1.call(this,p);
case 2:
return G__31486__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31486.cljs$core$IFn$_invoke$arity$1 = G__31486__1;
G__31486.cljs$core$IFn$_invoke$arity$2 = G__31486__2;
return G__31486;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29458 = arguments.length;
switch (G__29458) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31485(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31485(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29469 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29470){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29470 = meta29470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29471,meta29470__$1){
var self__ = this;
var _29471__$1 = this;
return (new cljs.core.async.t_cljs$core$async29469(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29470__$1));
}));

(cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29471){
var self__ = this;
var _29471__$1 = this;
return self__.meta29470;
}));

(cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29470","meta29470",-1560174056,null)], null);
}));

(cljs.core.async.t_cljs$core$async29469.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29469");

(cljs.core.async.t_cljs$core$async29469.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async29469");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29469.
 */
cljs.core.async.__GT_t_cljs$core$async29469 = (function cljs$core$async$__GT_t_cljs$core$async29469(ch,topic_fn,buf_fn,mults,ensure_mult,meta29470){
return (new cljs.core.async.t_cljs$core$async29469(ch,topic_fn,buf_fn,mults,ensure_mult,meta29470));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29467 = arguments.length;
switch (G__29467) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__29464_SHARP_){
if(cljs.core.truth_((p1__29464_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29464_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29464_SHARP_.call(null, topic)))){
return p1__29464_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29464_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async29469(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__28054__auto___31496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_29556){
var state_val_29558 = (state_29556[(1)]);
if((state_val_29558 === (7))){
var inst_29549 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
var statearr_29567_31497 = state_29556__$1;
(statearr_29567_31497[(2)] = inst_29549);

(statearr_29567_31497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (20))){
var state_29556__$1 = state_29556;
var statearr_29571_31498 = state_29556__$1;
(statearr_29571_31498[(2)] = null);

(statearr_29571_31498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (1))){
var state_29556__$1 = state_29556;
var statearr_29574_31499 = state_29556__$1;
(statearr_29574_31499[(2)] = null);

(statearr_29574_31499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (24))){
var inst_29532 = (state_29556[(7)]);
var inst_29541 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29532);
var state_29556__$1 = state_29556;
var statearr_29578_31500 = state_29556__$1;
(statearr_29578_31500[(2)] = inst_29541);

(statearr_29578_31500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (4))){
var inst_29484 = (state_29556[(8)]);
var inst_29484__$1 = (state_29556[(2)]);
var inst_29485 = (inst_29484__$1 == null);
var state_29556__$1 = (function (){var statearr_29580 = state_29556;
(statearr_29580[(8)] = inst_29484__$1);

return statearr_29580;
})();
if(cljs.core.truth_(inst_29485)){
var statearr_29585_31501 = state_29556__$1;
(statearr_29585_31501[(1)] = (5));

} else {
var statearr_29587_31502 = state_29556__$1;
(statearr_29587_31502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (15))){
var inst_29526 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
var statearr_29588_31503 = state_29556__$1;
(statearr_29588_31503[(2)] = inst_29526);

(statearr_29588_31503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (21))){
var inst_29546 = (state_29556[(2)]);
var state_29556__$1 = (function (){var statearr_29589 = state_29556;
(statearr_29589[(9)] = inst_29546);

return statearr_29589;
})();
var statearr_29590_31504 = state_29556__$1;
(statearr_29590_31504[(2)] = null);

(statearr_29590_31504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (13))){
var inst_29508 = (state_29556[(10)]);
var inst_29510 = cljs.core.chunked_seq_QMARK_(inst_29508);
var state_29556__$1 = state_29556;
if(inst_29510){
var statearr_29591_31505 = state_29556__$1;
(statearr_29591_31505[(1)] = (16));

} else {
var statearr_29592_31506 = state_29556__$1;
(statearr_29592_31506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (22))){
var inst_29538 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
if(cljs.core.truth_(inst_29538)){
var statearr_29593_31507 = state_29556__$1;
(statearr_29593_31507[(1)] = (23));

} else {
var statearr_29594_31508 = state_29556__$1;
(statearr_29594_31508[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (6))){
var inst_29484 = (state_29556[(8)]);
var inst_29532 = (state_29556[(7)]);
var inst_29534 = (state_29556[(11)]);
var inst_29532__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29484) : topic_fn.call(null, inst_29484));
var inst_29533 = cljs.core.deref(mults);
var inst_29534__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29533,inst_29532__$1);
var state_29556__$1 = (function (){var statearr_29598 = state_29556;
(statearr_29598[(7)] = inst_29532__$1);

(statearr_29598[(11)] = inst_29534__$1);

return statearr_29598;
})();
if(cljs.core.truth_(inst_29534__$1)){
var statearr_29599_31509 = state_29556__$1;
(statearr_29599_31509[(1)] = (19));

} else {
var statearr_29600_31510 = state_29556__$1;
(statearr_29600_31510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (25))){
var inst_29543 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
var statearr_29601_31511 = state_29556__$1;
(statearr_29601_31511[(2)] = inst_29543);

(statearr_29601_31511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (17))){
var inst_29508 = (state_29556[(10)]);
var inst_29517 = cljs.core.first(inst_29508);
var inst_29518 = cljs.core.async.muxch_STAR_(inst_29517);
var inst_29519 = cljs.core.async.close_BANG_(inst_29518);
var inst_29520 = cljs.core.next(inst_29508);
var inst_29494 = inst_29520;
var inst_29495 = null;
var inst_29496 = (0);
var inst_29497 = (0);
var state_29556__$1 = (function (){var statearr_29603 = state_29556;
(statearr_29603[(12)] = inst_29497);

(statearr_29603[(13)] = inst_29519);

(statearr_29603[(14)] = inst_29495);

(statearr_29603[(15)] = inst_29496);

(statearr_29603[(16)] = inst_29494);

return statearr_29603;
})();
var statearr_29604_31512 = state_29556__$1;
(statearr_29604_31512[(2)] = null);

(statearr_29604_31512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (3))){
var inst_29551 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29556__$1,inst_29551);
} else {
if((state_val_29558 === (12))){
var inst_29528 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
var statearr_29607_31514 = state_29556__$1;
(statearr_29607_31514[(2)] = inst_29528);

(statearr_29607_31514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (2))){
var state_29556__$1 = state_29556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29556__$1,(4),ch);
} else {
if((state_val_29558 === (23))){
var state_29556__$1 = state_29556;
var statearr_29608_31515 = state_29556__$1;
(statearr_29608_31515[(2)] = null);

(statearr_29608_31515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (19))){
var inst_29484 = (state_29556[(8)]);
var inst_29534 = (state_29556[(11)]);
var inst_29536 = cljs.core.async.muxch_STAR_(inst_29534);
var state_29556__$1 = state_29556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29556__$1,(22),inst_29536,inst_29484);
} else {
if((state_val_29558 === (11))){
var inst_29508 = (state_29556[(10)]);
var inst_29494 = (state_29556[(16)]);
var inst_29508__$1 = cljs.core.seq(inst_29494);
var state_29556__$1 = (function (){var statearr_29610 = state_29556;
(statearr_29610[(10)] = inst_29508__$1);

return statearr_29610;
})();
if(inst_29508__$1){
var statearr_29611_31516 = state_29556__$1;
(statearr_29611_31516[(1)] = (13));

} else {
var statearr_29612_31517 = state_29556__$1;
(statearr_29612_31517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (9))){
var inst_29530 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
var statearr_29616_31518 = state_29556__$1;
(statearr_29616_31518[(2)] = inst_29530);

(statearr_29616_31518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (5))){
var inst_29491 = cljs.core.deref(mults);
var inst_29492 = cljs.core.vals(inst_29491);
var inst_29493 = cljs.core.seq(inst_29492);
var inst_29494 = inst_29493;
var inst_29495 = null;
var inst_29496 = (0);
var inst_29497 = (0);
var state_29556__$1 = (function (){var statearr_29618 = state_29556;
(statearr_29618[(12)] = inst_29497);

(statearr_29618[(14)] = inst_29495);

(statearr_29618[(15)] = inst_29496);

(statearr_29618[(16)] = inst_29494);

return statearr_29618;
})();
var statearr_29619_31519 = state_29556__$1;
(statearr_29619_31519[(2)] = null);

(statearr_29619_31519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (14))){
var state_29556__$1 = state_29556;
var statearr_29626_31520 = state_29556__$1;
(statearr_29626_31520[(2)] = null);

(statearr_29626_31520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (16))){
var inst_29508 = (state_29556[(10)]);
var inst_29512 = cljs.core.chunk_first(inst_29508);
var inst_29513 = cljs.core.chunk_rest(inst_29508);
var inst_29514 = cljs.core.count(inst_29512);
var inst_29494 = inst_29513;
var inst_29495 = inst_29512;
var inst_29496 = inst_29514;
var inst_29497 = (0);
var state_29556__$1 = (function (){var statearr_29628 = state_29556;
(statearr_29628[(12)] = inst_29497);

(statearr_29628[(14)] = inst_29495);

(statearr_29628[(15)] = inst_29496);

(statearr_29628[(16)] = inst_29494);

return statearr_29628;
})();
var statearr_29629_31521 = state_29556__$1;
(statearr_29629_31521[(2)] = null);

(statearr_29629_31521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (10))){
var inst_29497 = (state_29556[(12)]);
var inst_29495 = (state_29556[(14)]);
var inst_29496 = (state_29556[(15)]);
var inst_29494 = (state_29556[(16)]);
var inst_29502 = cljs.core._nth(inst_29495,inst_29497);
var inst_29503 = cljs.core.async.muxch_STAR_(inst_29502);
var inst_29504 = cljs.core.async.close_BANG_(inst_29503);
var inst_29505 = (inst_29497 + (1));
var tmp29622 = inst_29495;
var tmp29623 = inst_29496;
var tmp29624 = inst_29494;
var inst_29494__$1 = tmp29624;
var inst_29495__$1 = tmp29622;
var inst_29496__$1 = tmp29623;
var inst_29497__$1 = inst_29505;
var state_29556__$1 = (function (){var statearr_29633 = state_29556;
(statearr_29633[(17)] = inst_29504);

(statearr_29633[(12)] = inst_29497__$1);

(statearr_29633[(14)] = inst_29495__$1);

(statearr_29633[(15)] = inst_29496__$1);

(statearr_29633[(16)] = inst_29494__$1);

return statearr_29633;
})();
var statearr_29635_31522 = state_29556__$1;
(statearr_29635_31522[(2)] = null);

(statearr_29635_31522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (18))){
var inst_29523 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
var statearr_29637_31523 = state_29556__$1;
(statearr_29637_31523[(2)] = inst_29523);

(statearr_29637_31523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (8))){
var inst_29497 = (state_29556[(12)]);
var inst_29496 = (state_29556[(15)]);
var inst_29499 = (inst_29497 < inst_29496);
var inst_29500 = inst_29499;
var state_29556__$1 = state_29556;
if(cljs.core.truth_(inst_29500)){
var statearr_29645_31524 = state_29556__$1;
(statearr_29645_31524[(1)] = (10));

} else {
var statearr_29646_31525 = state_29556__$1;
(statearr_29646_31525[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27803__auto__ = null;
var cljs$core$async$state_machine__27803__auto____0 = (function (){
var statearr_29658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29658[(0)] = cljs$core$async$state_machine__27803__auto__);

(statearr_29658[(1)] = (1));

return statearr_29658;
});
var cljs$core$async$state_machine__27803__auto____1 = (function (state_29556){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_29556);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e29660){var ex__27806__auto__ = e29660;
var statearr_29661_31526 = state_29556;
(statearr_29661_31526[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_29556[(4)]))){
var statearr_29662_31527 = state_29556;
(statearr_29662_31527[(1)] = cljs.core.first((state_29556[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31528 = state_29556;
state_29556 = G__31528;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$state_machine__27803__auto__ = function(state_29556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27803__auto____1.call(this,state_29556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27803__auto____0;
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27803__auto____1;
return cljs$core$async$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_29663 = f__28055__auto__();
(statearr_29663[(6)] = c__28054__auto___31496);

return statearr_29663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29665 = arguments.length;
switch (G__29665) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29677 = arguments.length;
switch (G__29677) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29694 = arguments.length;
switch (G__29694) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__28054__auto___31541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_29770){
var state_val_29772 = (state_29770[(1)]);
if((state_val_29772 === (7))){
var state_29770__$1 = state_29770;
var statearr_29778_31543 = state_29770__$1;
(statearr_29778_31543[(2)] = null);

(statearr_29778_31543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (1))){
var state_29770__$1 = state_29770;
var statearr_29781_31550 = state_29770__$1;
(statearr_29781_31550[(2)] = null);

(statearr_29781_31550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (4))){
var inst_29706 = (state_29770[(7)]);
var inst_29711 = (state_29770[(8)]);
var inst_29716 = (inst_29711 < inst_29706);
var state_29770__$1 = state_29770;
if(cljs.core.truth_(inst_29716)){
var statearr_29783_31551 = state_29770__$1;
(statearr_29783_31551[(1)] = (6));

} else {
var statearr_29785_31552 = state_29770__$1;
(statearr_29785_31552[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (15))){
var inst_29746 = (state_29770[(9)]);
var inst_29752 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29746);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29770__$1,(17),out,inst_29752);
} else {
if((state_val_29772 === (13))){
var inst_29746 = (state_29770[(9)]);
var inst_29746__$1 = (state_29770[(2)]);
var inst_29748 = cljs.core.some(cljs.core.nil_QMARK_,inst_29746__$1);
var state_29770__$1 = (function (){var statearr_29786 = state_29770;
(statearr_29786[(9)] = inst_29746__$1);

return statearr_29786;
})();
if(cljs.core.truth_(inst_29748)){
var statearr_29787_31553 = state_29770__$1;
(statearr_29787_31553[(1)] = (14));

} else {
var statearr_29788_31554 = state_29770__$1;
(statearr_29788_31554[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (6))){
var state_29770__$1 = state_29770;
var statearr_29789_31555 = state_29770__$1;
(statearr_29789_31555[(2)] = null);

(statearr_29789_31555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (17))){
var inst_29755 = (state_29770[(2)]);
var state_29770__$1 = (function (){var statearr_29799 = state_29770;
(statearr_29799[(10)] = inst_29755);

return statearr_29799;
})();
var statearr_29803_31556 = state_29770__$1;
(statearr_29803_31556[(2)] = null);

(statearr_29803_31556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (3))){
var inst_29760 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29770__$1,inst_29760);
} else {
if((state_val_29772 === (12))){
var _ = (function (){var statearr_29809 = state_29770;
(statearr_29809[(4)] = cljs.core.rest((state_29770[(4)])));

return statearr_29809;
})();
var state_29770__$1 = state_29770;
var ex29797 = (state_29770__$1[(2)]);
var statearr_29810_31558 = state_29770__$1;
(statearr_29810_31558[(5)] = ex29797);


if((ex29797 instanceof Object)){
var statearr_29814_31559 = state_29770__$1;
(statearr_29814_31559[(1)] = (11));

(statearr_29814_31559[(5)] = null);

} else {
throw ex29797;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (2))){
var inst_29704 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29706 = cnt;
var inst_29711 = (0);
var state_29770__$1 = (function (){var statearr_29819 = state_29770;
(statearr_29819[(7)] = inst_29706);

(statearr_29819[(11)] = inst_29704);

(statearr_29819[(8)] = inst_29711);

return statearr_29819;
})();
var statearr_29824_31560 = state_29770__$1;
(statearr_29824_31560[(2)] = null);

(statearr_29824_31560[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (11))){
var inst_29719 = (state_29770[(2)]);
var inst_29720 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29770__$1 = (function (){var statearr_29831 = state_29770;
(statearr_29831[(12)] = inst_29719);

return statearr_29831;
})();
var statearr_29834_31561 = state_29770__$1;
(statearr_29834_31561[(2)] = inst_29720);

(statearr_29834_31561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (9))){
var inst_29711 = (state_29770[(8)]);
var _ = (function (){var statearr_29836 = state_29770;
(statearr_29836[(4)] = cljs.core.cons((12),(state_29770[(4)])));

return statearr_29836;
})();
var inst_29731 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29711) : chs__$1.call(null, inst_29711));
var inst_29732 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29711) : done.call(null, inst_29711));
var inst_29733 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29731,inst_29732);
var ___$1 = (function (){var statearr_29838 = state_29770;
(statearr_29838[(4)] = cljs.core.rest((state_29770[(4)])));

return statearr_29838;
})();
var state_29770__$1 = state_29770;
var statearr_29839_31562 = state_29770__$1;
(statearr_29839_31562[(2)] = inst_29733);

(statearr_29839_31562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (5))){
var inst_29743 = (state_29770[(2)]);
var state_29770__$1 = (function (){var statearr_29843 = state_29770;
(statearr_29843[(13)] = inst_29743);

return statearr_29843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29770__$1,(13),dchan);
} else {
if((state_val_29772 === (14))){
var inst_29750 = cljs.core.async.close_BANG_(out);
var state_29770__$1 = state_29770;
var statearr_29845_31563 = state_29770__$1;
(statearr_29845_31563[(2)] = inst_29750);

(statearr_29845_31563[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (16))){
var inst_29758 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29848_31564 = state_29770__$1;
(statearr_29848_31564[(2)] = inst_29758);

(statearr_29848_31564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (10))){
var inst_29711 = (state_29770[(8)]);
var inst_29736 = (state_29770[(2)]);
var inst_29737 = (inst_29711 + (1));
var inst_29711__$1 = inst_29737;
var state_29770__$1 = (function (){var statearr_29851 = state_29770;
(statearr_29851[(14)] = inst_29736);

(statearr_29851[(8)] = inst_29711__$1);

return statearr_29851;
})();
var statearr_29855_31565 = state_29770__$1;
(statearr_29855_31565[(2)] = null);

(statearr_29855_31565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (8))){
var inst_29741 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29864_31566 = state_29770__$1;
(statearr_29864_31566[(2)] = inst_29741);

(statearr_29864_31566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27803__auto__ = null;
var cljs$core$async$state_machine__27803__auto____0 = (function (){
var statearr_29866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29866[(0)] = cljs$core$async$state_machine__27803__auto__);

(statearr_29866[(1)] = (1));

return statearr_29866;
});
var cljs$core$async$state_machine__27803__auto____1 = (function (state_29770){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_29770);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e29867){var ex__27806__auto__ = e29867;
var statearr_29868_31569 = state_29770;
(statearr_29868_31569[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_29770[(4)]))){
var statearr_29869_31570 = state_29770;
(statearr_29869_31570[(1)] = cljs.core.first((state_29770[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31571 = state_29770;
state_29770 = G__31571;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$state_machine__27803__auto__ = function(state_29770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27803__auto____1.call(this,state_29770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27803__auto____0;
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27803__auto____1;
return cljs$core$async$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_29870 = f__28055__auto__();
(statearr_29870[(6)] = c__28054__auto___31541);

return statearr_29870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29873 = arguments.length;
switch (G__29873) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28054__auto___31575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_29907){
var state_val_29908 = (state_29907[(1)]);
if((state_val_29908 === (7))){
var inst_29887 = (state_29907[(7)]);
var inst_29886 = (state_29907[(8)]);
var inst_29886__$1 = (state_29907[(2)]);
var inst_29887__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29886__$1,(0),null);
var inst_29888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29886__$1,(1),null);
var inst_29889 = (inst_29887__$1 == null);
var state_29907__$1 = (function (){var statearr_29916 = state_29907;
(statearr_29916[(9)] = inst_29888);

(statearr_29916[(7)] = inst_29887__$1);

(statearr_29916[(8)] = inst_29886__$1);

return statearr_29916;
})();
if(cljs.core.truth_(inst_29889)){
var statearr_29917_31576 = state_29907__$1;
(statearr_29917_31576[(1)] = (8));

} else {
var statearr_29918_31577 = state_29907__$1;
(statearr_29918_31577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (1))){
var inst_29876 = cljs.core.vec(chs);
var inst_29877 = inst_29876;
var state_29907__$1 = (function (){var statearr_29919 = state_29907;
(statearr_29919[(10)] = inst_29877);

return statearr_29919;
})();
var statearr_29920_31578 = state_29907__$1;
(statearr_29920_31578[(2)] = null);

(statearr_29920_31578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (4))){
var inst_29877 = (state_29907[(10)]);
var state_29907__$1 = state_29907;
return cljs.core.async.ioc_alts_BANG_(state_29907__$1,(7),inst_29877);
} else {
if((state_val_29908 === (6))){
var inst_29903 = (state_29907[(2)]);
var state_29907__$1 = state_29907;
var statearr_29921_31579 = state_29907__$1;
(statearr_29921_31579[(2)] = inst_29903);

(statearr_29921_31579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (3))){
var inst_29905 = (state_29907[(2)]);
var state_29907__$1 = state_29907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29907__$1,inst_29905);
} else {
if((state_val_29908 === (2))){
var inst_29877 = (state_29907[(10)]);
var inst_29879 = cljs.core.count(inst_29877);
var inst_29880 = (inst_29879 > (0));
var state_29907__$1 = state_29907;
if(cljs.core.truth_(inst_29880)){
var statearr_29923_31580 = state_29907__$1;
(statearr_29923_31580[(1)] = (4));

} else {
var statearr_29924_31581 = state_29907__$1;
(statearr_29924_31581[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (11))){
var inst_29877 = (state_29907[(10)]);
var inst_29896 = (state_29907[(2)]);
var tmp29922 = inst_29877;
var inst_29877__$1 = tmp29922;
var state_29907__$1 = (function (){var statearr_29925 = state_29907;
(statearr_29925[(11)] = inst_29896);

(statearr_29925[(10)] = inst_29877__$1);

return statearr_29925;
})();
var statearr_29926_31582 = state_29907__$1;
(statearr_29926_31582[(2)] = null);

(statearr_29926_31582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (9))){
var inst_29887 = (state_29907[(7)]);
var state_29907__$1 = state_29907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29907__$1,(11),out,inst_29887);
} else {
if((state_val_29908 === (5))){
var inst_29901 = cljs.core.async.close_BANG_(out);
var state_29907__$1 = state_29907;
var statearr_29927_31584 = state_29907__$1;
(statearr_29927_31584[(2)] = inst_29901);

(statearr_29927_31584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (10))){
var inst_29899 = (state_29907[(2)]);
var state_29907__$1 = state_29907;
var statearr_29928_31585 = state_29907__$1;
(statearr_29928_31585[(2)] = inst_29899);

(statearr_29928_31585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (8))){
var inst_29888 = (state_29907[(9)]);
var inst_29887 = (state_29907[(7)]);
var inst_29877 = (state_29907[(10)]);
var inst_29886 = (state_29907[(8)]);
var inst_29891 = (function (){var cs = inst_29877;
var vec__29882 = inst_29886;
var v = inst_29887;
var c = inst_29888;
return (function (p1__29871_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29871_SHARP_);
});
})();
var inst_29892 = cljs.core.filterv(inst_29891,inst_29877);
var inst_29877__$1 = inst_29892;
var state_29907__$1 = (function (){var statearr_29929 = state_29907;
(statearr_29929[(10)] = inst_29877__$1);

return statearr_29929;
})();
var statearr_29930_31586 = state_29907__$1;
(statearr_29930_31586[(2)] = null);

(statearr_29930_31586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27803__auto__ = null;
var cljs$core$async$state_machine__27803__auto____0 = (function (){
var statearr_29931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29931[(0)] = cljs$core$async$state_machine__27803__auto__);

(statearr_29931[(1)] = (1));

return statearr_29931;
});
var cljs$core$async$state_machine__27803__auto____1 = (function (state_29907){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_29907);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e29932){var ex__27806__auto__ = e29932;
var statearr_29933_31588 = state_29907;
(statearr_29933_31588[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_29907[(4)]))){
var statearr_29934_31589 = state_29907;
(statearr_29934_31589[(1)] = cljs.core.first((state_29907[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31590 = state_29907;
state_29907 = G__31590;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$state_machine__27803__auto__ = function(state_29907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27803__auto____1.call(this,state_29907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27803__auto____0;
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27803__auto____1;
return cljs$core$async$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_29935 = f__28055__auto__();
(statearr_29935[(6)] = c__28054__auto___31575);

return statearr_29935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29943 = arguments.length;
switch (G__29943) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28054__auto___31593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_29976){
var state_val_29981 = (state_29976[(1)]);
if((state_val_29981 === (7))){
var inst_29957 = (state_29976[(7)]);
var inst_29957__$1 = (state_29976[(2)]);
var inst_29958 = (inst_29957__$1 == null);
var inst_29959 = cljs.core.not(inst_29958);
var state_29976__$1 = (function (){var statearr_29989 = state_29976;
(statearr_29989[(7)] = inst_29957__$1);

return statearr_29989;
})();
if(inst_29959){
var statearr_29991_31598 = state_29976__$1;
(statearr_29991_31598[(1)] = (8));

} else {
var statearr_29992_31599 = state_29976__$1;
(statearr_29992_31599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (1))){
var inst_29948 = (0);
var state_29976__$1 = (function (){var statearr_29993 = state_29976;
(statearr_29993[(8)] = inst_29948);

return statearr_29993;
})();
var statearr_29994_31600 = state_29976__$1;
(statearr_29994_31600[(2)] = null);

(statearr_29994_31600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (4))){
var state_29976__$1 = state_29976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29976__$1,(7),ch);
} else {
if((state_val_29981 === (6))){
var inst_29971 = (state_29976[(2)]);
var state_29976__$1 = state_29976;
var statearr_29999_31601 = state_29976__$1;
(statearr_29999_31601[(2)] = inst_29971);

(statearr_29999_31601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (3))){
var inst_29973 = (state_29976[(2)]);
var inst_29974 = cljs.core.async.close_BANG_(out);
var state_29976__$1 = (function (){var statearr_30003 = state_29976;
(statearr_30003[(9)] = inst_29973);

return statearr_30003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29976__$1,inst_29974);
} else {
if((state_val_29981 === (2))){
var inst_29948 = (state_29976[(8)]);
var inst_29954 = (inst_29948 < n);
var state_29976__$1 = state_29976;
if(cljs.core.truth_(inst_29954)){
var statearr_30005_31602 = state_29976__$1;
(statearr_30005_31602[(1)] = (4));

} else {
var statearr_30006_31603 = state_29976__$1;
(statearr_30006_31603[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (11))){
var inst_29948 = (state_29976[(8)]);
var inst_29963 = (state_29976[(2)]);
var inst_29964 = (inst_29948 + (1));
var inst_29948__$1 = inst_29964;
var state_29976__$1 = (function (){var statearr_30007 = state_29976;
(statearr_30007[(8)] = inst_29948__$1);

(statearr_30007[(10)] = inst_29963);

return statearr_30007;
})();
var statearr_30008_31604 = state_29976__$1;
(statearr_30008_31604[(2)] = null);

(statearr_30008_31604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (9))){
var state_29976__$1 = state_29976;
var statearr_30009_31605 = state_29976__$1;
(statearr_30009_31605[(2)] = null);

(statearr_30009_31605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (5))){
var state_29976__$1 = state_29976;
var statearr_30010_31606 = state_29976__$1;
(statearr_30010_31606[(2)] = null);

(statearr_30010_31606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (10))){
var inst_29968 = (state_29976[(2)]);
var state_29976__$1 = state_29976;
var statearr_30015_31607 = state_29976__$1;
(statearr_30015_31607[(2)] = inst_29968);

(statearr_30015_31607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (8))){
var inst_29957 = (state_29976[(7)]);
var state_29976__$1 = state_29976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29976__$1,(11),out,inst_29957);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27803__auto__ = null;
var cljs$core$async$state_machine__27803__auto____0 = (function (){
var statearr_30016 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30016[(0)] = cljs$core$async$state_machine__27803__auto__);

(statearr_30016[(1)] = (1));

return statearr_30016;
});
var cljs$core$async$state_machine__27803__auto____1 = (function (state_29976){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_29976);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e30021){var ex__27806__auto__ = e30021;
var statearr_30022_31608 = state_29976;
(statearr_30022_31608[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_29976[(4)]))){
var statearr_30023_31609 = state_29976;
(statearr_30023_31609[(1)] = cljs.core.first((state_29976[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31610 = state_29976;
state_29976 = G__31610;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$state_machine__27803__auto__ = function(state_29976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27803__auto____1.call(this,state_29976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27803__auto____0;
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27803__auto____1;
return cljs$core$async$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_30028 = f__28055__auto__();
(statearr_30028[(6)] = c__28054__auto___31593);

return statearr_30028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30047 = (function (f,ch,meta30038,_,fn1,meta30048){
this.f = f;
this.ch = ch;
this.meta30038 = meta30038;
this._ = _;
this.fn1 = fn1;
this.meta30048 = meta30048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30049,meta30048__$1){
var self__ = this;
var _30049__$1 = this;
return (new cljs.core.async.t_cljs$core$async30047(self__.f,self__.ch,self__.meta30038,self__._,self__.fn1,meta30048__$1));
}));

(cljs.core.async.t_cljs$core$async30047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30049){
var self__ = this;
var _30049__$1 = this;
return self__.meta30048;
}));

(cljs.core.async.t_cljs$core$async30047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30033_SHARP_){
var G__30052 = (((p1__30033_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30033_SHARP_) : self__.f.call(null, p1__30033_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30052) : f1.call(null, G__30052));
});
}));

(cljs.core.async.t_cljs$core$async30047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30038","meta30038",2013974357,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30037","cljs.core.async/t_cljs$core$async30037",753489824,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30048","meta30048",393644674,null)], null);
}));

(cljs.core.async.t_cljs$core$async30047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30047");

(cljs.core.async.t_cljs$core$async30047.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async30047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30047.
 */
cljs.core.async.__GT_t_cljs$core$async30047 = (function cljs$core$async$__GT_t_cljs$core$async30047(f,ch,meta30038,_,fn1,meta30048){
return (new cljs.core.async.t_cljs$core$async30047(f,ch,meta30038,_,fn1,meta30048));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30037 = (function (f,ch,meta30038){
this.f = f;
this.ch = ch;
this.meta30038 = meta30038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30039,meta30038__$1){
var self__ = this;
var _30039__$1 = this;
return (new cljs.core.async.t_cljs$core$async30037(self__.f,self__.ch,meta30038__$1));
}));

(cljs.core.async.t_cljs$core$async30037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30039){
var self__ = this;
var _30039__$1 = this;
return self__.meta30038;
}));

(cljs.core.async.t_cljs$core$async30037.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30037.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30037.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async30047(self__.f,self__.ch,self__.meta30038,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30068 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30068) : self__.f.call(null, G__30068));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30037.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30038","meta30038",2013974357,null)], null);
}));

(cljs.core.async.t_cljs$core$async30037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30037");

(cljs.core.async.t_cljs$core$async30037.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async30037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30037.
 */
cljs.core.async.__GT_t_cljs$core$async30037 = (function cljs$core$async$__GT_t_cljs$core$async30037(f,ch,meta30038){
return (new cljs.core.async.t_cljs$core$async30037(f,ch,meta30038));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async30037(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30074 = (function (f,ch,meta30075){
this.f = f;
this.ch = ch;
this.meta30075 = meta30075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30076,meta30075__$1){
var self__ = this;
var _30076__$1 = this;
return (new cljs.core.async.t_cljs$core$async30074(self__.f,self__.ch,meta30075__$1));
}));

(cljs.core.async.t_cljs$core$async30074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30076){
var self__ = this;
var _30076__$1 = this;
return self__.meta30075;
}));

(cljs.core.async.t_cljs$core$async30074.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30074.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30074.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30074.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30074.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30074.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30075","meta30075",-26708501,null)], null);
}));

(cljs.core.async.t_cljs$core$async30074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30074");

(cljs.core.async.t_cljs$core$async30074.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async30074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30074.
 */
cljs.core.async.__GT_t_cljs$core$async30074 = (function cljs$core$async$__GT_t_cljs$core$async30074(f,ch,meta30075){
return (new cljs.core.async.t_cljs$core$async30074(f,ch,meta30075));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async30074(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30090 = (function (p,ch,meta30091){
this.p = p;
this.ch = ch;
this.meta30091 = meta30091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30092,meta30091__$1){
var self__ = this;
var _30092__$1 = this;
return (new cljs.core.async.t_cljs$core$async30090(self__.p,self__.ch,meta30091__$1));
}));

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30092){
var self__ = this;
var _30092__$1 = this;
return self__.meta30091;
}));

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30091","meta30091",-1798148299,null)], null);
}));

(cljs.core.async.t_cljs$core$async30090.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30090");

(cljs.core.async.t_cljs$core$async30090.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async30090");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30090.
 */
cljs.core.async.__GT_t_cljs$core$async30090 = (function cljs$core$async$__GT_t_cljs$core$async30090(p,ch,meta30091){
return (new cljs.core.async.t_cljs$core$async30090(p,ch,meta30091));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async30090(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30109 = arguments.length;
switch (G__30109) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28054__auto___31627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_30132){
var state_val_30133 = (state_30132[(1)]);
if((state_val_30133 === (7))){
var inst_30128 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30134_31628 = state_30132__$1;
(statearr_30134_31628[(2)] = inst_30128);

(statearr_30134_31628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (1))){
var state_30132__$1 = state_30132;
var statearr_30135_31629 = state_30132__$1;
(statearr_30135_31629[(2)] = null);

(statearr_30135_31629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (4))){
var inst_30113 = (state_30132[(7)]);
var inst_30113__$1 = (state_30132[(2)]);
var inst_30114 = (inst_30113__$1 == null);
var state_30132__$1 = (function (){var statearr_30137 = state_30132;
(statearr_30137[(7)] = inst_30113__$1);

return statearr_30137;
})();
if(cljs.core.truth_(inst_30114)){
var statearr_30138_31630 = state_30132__$1;
(statearr_30138_31630[(1)] = (5));

} else {
var statearr_30139_31631 = state_30132__$1;
(statearr_30139_31631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (6))){
var inst_30113 = (state_30132[(7)]);
var inst_30119 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30113) : p.call(null, inst_30113));
var state_30132__$1 = state_30132;
if(cljs.core.truth_(inst_30119)){
var statearr_30140_31632 = state_30132__$1;
(statearr_30140_31632[(1)] = (8));

} else {
var statearr_30141_31633 = state_30132__$1;
(statearr_30141_31633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (3))){
var inst_30130 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30132__$1,inst_30130);
} else {
if((state_val_30133 === (2))){
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30132__$1,(4),ch);
} else {
if((state_val_30133 === (11))){
var inst_30122 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30144_31634 = state_30132__$1;
(statearr_30144_31634[(2)] = inst_30122);

(statearr_30144_31634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (9))){
var state_30132__$1 = state_30132;
var statearr_30145_31635 = state_30132__$1;
(statearr_30145_31635[(2)] = null);

(statearr_30145_31635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (5))){
var inst_30116 = cljs.core.async.close_BANG_(out);
var state_30132__$1 = state_30132;
var statearr_30146_31636 = state_30132__$1;
(statearr_30146_31636[(2)] = inst_30116);

(statearr_30146_31636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (10))){
var inst_30125 = (state_30132[(2)]);
var state_30132__$1 = (function (){var statearr_30147 = state_30132;
(statearr_30147[(8)] = inst_30125);

return statearr_30147;
})();
var statearr_30148_31640 = state_30132__$1;
(statearr_30148_31640[(2)] = null);

(statearr_30148_31640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (8))){
var inst_30113 = (state_30132[(7)]);
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30132__$1,(11),out,inst_30113);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27803__auto__ = null;
var cljs$core$async$state_machine__27803__auto____0 = (function (){
var statearr_30149 = [null,null,null,null,null,null,null,null,null];
(statearr_30149[(0)] = cljs$core$async$state_machine__27803__auto__);

(statearr_30149[(1)] = (1));

return statearr_30149;
});
var cljs$core$async$state_machine__27803__auto____1 = (function (state_30132){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_30132);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e30150){var ex__27806__auto__ = e30150;
var statearr_30151_31641 = state_30132;
(statearr_30151_31641[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_30132[(4)]))){
var statearr_30152_31642 = state_30132;
(statearr_30152_31642[(1)] = cljs.core.first((state_30132[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31643 = state_30132;
state_30132 = G__31643;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$state_machine__27803__auto__ = function(state_30132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27803__auto____1.call(this,state_30132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27803__auto____0;
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27803__auto____1;
return cljs$core$async$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_30155 = f__28055__auto__();
(statearr_30155[(6)] = c__28054__auto___31627);

return statearr_30155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30157 = arguments.length;
switch (G__30157) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_30251){
var state_val_30252 = (state_30251[(1)]);
if((state_val_30252 === (7))){
var inst_30247 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
var statearr_30255_31645 = state_30251__$1;
(statearr_30255_31645[(2)] = inst_30247);

(statearr_30255_31645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (20))){
var inst_30209 = (state_30251[(7)]);
var inst_30228 = (state_30251[(2)]);
var inst_30229 = cljs.core.next(inst_30209);
var inst_30195 = inst_30229;
var inst_30196 = null;
var inst_30197 = (0);
var inst_30198 = (0);
var state_30251__$1 = (function (){var statearr_30258 = state_30251;
(statearr_30258[(8)] = inst_30197);

(statearr_30258[(9)] = inst_30228);

(statearr_30258[(10)] = inst_30198);

(statearr_30258[(11)] = inst_30196);

(statearr_30258[(12)] = inst_30195);

return statearr_30258;
})();
var statearr_30262_31646 = state_30251__$1;
(statearr_30262_31646[(2)] = null);

(statearr_30262_31646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (1))){
var state_30251__$1 = state_30251;
var statearr_30263_31647 = state_30251__$1;
(statearr_30263_31647[(2)] = null);

(statearr_30263_31647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (4))){
var inst_30184 = (state_30251[(13)]);
var inst_30184__$1 = (state_30251[(2)]);
var inst_30185 = (inst_30184__$1 == null);
var state_30251__$1 = (function (){var statearr_30265 = state_30251;
(statearr_30265[(13)] = inst_30184__$1);

return statearr_30265;
})();
if(cljs.core.truth_(inst_30185)){
var statearr_30266_31648 = state_30251__$1;
(statearr_30266_31648[(1)] = (5));

} else {
var statearr_30267_31649 = state_30251__$1;
(statearr_30267_31649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (15))){
var state_30251__$1 = state_30251;
var statearr_30271_31650 = state_30251__$1;
(statearr_30271_31650[(2)] = null);

(statearr_30271_31650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (21))){
var state_30251__$1 = state_30251;
var statearr_30273_31651 = state_30251__$1;
(statearr_30273_31651[(2)] = null);

(statearr_30273_31651[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (13))){
var inst_30197 = (state_30251[(8)]);
var inst_30198 = (state_30251[(10)]);
var inst_30196 = (state_30251[(11)]);
var inst_30195 = (state_30251[(12)]);
var inst_30205 = (state_30251[(2)]);
var inst_30206 = (inst_30198 + (1));
var tmp30268 = inst_30197;
var tmp30269 = inst_30196;
var tmp30270 = inst_30195;
var inst_30195__$1 = tmp30270;
var inst_30196__$1 = tmp30269;
var inst_30197__$1 = tmp30268;
var inst_30198__$1 = inst_30206;
var state_30251__$1 = (function (){var statearr_30275 = state_30251;
(statearr_30275[(8)] = inst_30197__$1);

(statearr_30275[(14)] = inst_30205);

(statearr_30275[(10)] = inst_30198__$1);

(statearr_30275[(11)] = inst_30196__$1);

(statearr_30275[(12)] = inst_30195__$1);

return statearr_30275;
})();
var statearr_30276_31652 = state_30251__$1;
(statearr_30276_31652[(2)] = null);

(statearr_30276_31652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (22))){
var state_30251__$1 = state_30251;
var statearr_30277_31653 = state_30251__$1;
(statearr_30277_31653[(2)] = null);

(statearr_30277_31653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (6))){
var inst_30184 = (state_30251[(13)]);
var inst_30193 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30184) : f.call(null, inst_30184));
var inst_30194 = cljs.core.seq(inst_30193);
var inst_30195 = inst_30194;
var inst_30196 = null;
var inst_30197 = (0);
var inst_30198 = (0);
var state_30251__$1 = (function (){var statearr_30278 = state_30251;
(statearr_30278[(8)] = inst_30197);

(statearr_30278[(10)] = inst_30198);

(statearr_30278[(11)] = inst_30196);

(statearr_30278[(12)] = inst_30195);

return statearr_30278;
})();
var statearr_30279_31654 = state_30251__$1;
(statearr_30279_31654[(2)] = null);

(statearr_30279_31654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (17))){
var inst_30209 = (state_30251[(7)]);
var inst_30220 = cljs.core.chunk_first(inst_30209);
var inst_30221 = cljs.core.chunk_rest(inst_30209);
var inst_30222 = cljs.core.count(inst_30220);
var inst_30195 = inst_30221;
var inst_30196 = inst_30220;
var inst_30197 = inst_30222;
var inst_30198 = (0);
var state_30251__$1 = (function (){var statearr_30293 = state_30251;
(statearr_30293[(8)] = inst_30197);

(statearr_30293[(10)] = inst_30198);

(statearr_30293[(11)] = inst_30196);

(statearr_30293[(12)] = inst_30195);

return statearr_30293;
})();
var statearr_30294_31655 = state_30251__$1;
(statearr_30294_31655[(2)] = null);

(statearr_30294_31655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (3))){
var inst_30249 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30251__$1,inst_30249);
} else {
if((state_val_30252 === (12))){
var inst_30237 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
var statearr_30299_31656 = state_30251__$1;
(statearr_30299_31656[(2)] = inst_30237);

(statearr_30299_31656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (2))){
var state_30251__$1 = state_30251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30251__$1,(4),in$);
} else {
if((state_val_30252 === (23))){
var inst_30245 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
var statearr_30301_31663 = state_30251__$1;
(statearr_30301_31663[(2)] = inst_30245);

(statearr_30301_31663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (19))){
var inst_30232 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
var statearr_30303_31664 = state_30251__$1;
(statearr_30303_31664[(2)] = inst_30232);

(statearr_30303_31664[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (11))){
var inst_30209 = (state_30251[(7)]);
var inst_30195 = (state_30251[(12)]);
var inst_30209__$1 = cljs.core.seq(inst_30195);
var state_30251__$1 = (function (){var statearr_30304 = state_30251;
(statearr_30304[(7)] = inst_30209__$1);

return statearr_30304;
})();
if(inst_30209__$1){
var statearr_30305_31665 = state_30251__$1;
(statearr_30305_31665[(1)] = (14));

} else {
var statearr_30306_31666 = state_30251__$1;
(statearr_30306_31666[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (9))){
var inst_30239 = (state_30251[(2)]);
var inst_30240 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30251__$1 = (function (){var statearr_30308 = state_30251;
(statearr_30308[(15)] = inst_30239);

return statearr_30308;
})();
if(cljs.core.truth_(inst_30240)){
var statearr_30309_31667 = state_30251__$1;
(statearr_30309_31667[(1)] = (21));

} else {
var statearr_30310_31668 = state_30251__$1;
(statearr_30310_31668[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (5))){
var inst_30187 = cljs.core.async.close_BANG_(out);
var state_30251__$1 = state_30251;
var statearr_30315_31669 = state_30251__$1;
(statearr_30315_31669[(2)] = inst_30187);

(statearr_30315_31669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (14))){
var inst_30209 = (state_30251[(7)]);
var inst_30217 = cljs.core.chunked_seq_QMARK_(inst_30209);
var state_30251__$1 = state_30251;
if(inst_30217){
var statearr_30316_31673 = state_30251__$1;
(statearr_30316_31673[(1)] = (17));

} else {
var statearr_30317_31674 = state_30251__$1;
(statearr_30317_31674[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (16))){
var inst_30235 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
var statearr_30318_31675 = state_30251__$1;
(statearr_30318_31675[(2)] = inst_30235);

(statearr_30318_31675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (10))){
var inst_30198 = (state_30251[(10)]);
var inst_30196 = (state_30251[(11)]);
var inst_30203 = cljs.core._nth(inst_30196,inst_30198);
var state_30251__$1 = state_30251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30251__$1,(13),out,inst_30203);
} else {
if((state_val_30252 === (18))){
var inst_30209 = (state_30251[(7)]);
var inst_30225 = cljs.core.first(inst_30209);
var state_30251__$1 = state_30251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30251__$1,(20),out,inst_30225);
} else {
if((state_val_30252 === (8))){
var inst_30197 = (state_30251[(8)]);
var inst_30198 = (state_30251[(10)]);
var inst_30200 = (inst_30198 < inst_30197);
var inst_30201 = inst_30200;
var state_30251__$1 = state_30251;
if(cljs.core.truth_(inst_30201)){
var statearr_30319_31677 = state_30251__$1;
(statearr_30319_31677[(1)] = (10));

} else {
var statearr_30323_31678 = state_30251__$1;
(statearr_30323_31678[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27803__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27803__auto____0 = (function (){
var statearr_30324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30324[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27803__auto__);

(statearr_30324[(1)] = (1));

return statearr_30324;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27803__auto____1 = (function (state_30251){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_30251);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e30325){var ex__27806__auto__ = e30325;
var statearr_30326_31682 = state_30251;
(statearr_30326_31682[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_30251[(4)]))){
var statearr_30327_31683 = state_30251;
(statearr_30327_31683[(1)] = cljs.core.first((state_30251[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31684 = state_30251;
state_30251 = G__31684;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27803__auto__ = function(state_30251){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27803__auto____1.call(this,state_30251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27803__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27803__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_30328 = f__28055__auto__();
(statearr_30328[(6)] = c__28054__auto__);

return statearr_30328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));

return c__28054__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30330 = arguments.length;
switch (G__30330) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30332 = arguments.length;
switch (G__30332) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30334 = arguments.length;
switch (G__30334) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28054__auto___31724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_30395){
var state_val_30396 = (state_30395[(1)]);
if((state_val_30396 === (7))){
var inst_30390 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30397_31725 = state_30395__$1;
(statearr_30397_31725[(2)] = inst_30390);

(statearr_30397_31725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (1))){
var inst_30372 = null;
var state_30395__$1 = (function (){var statearr_30398 = state_30395;
(statearr_30398[(7)] = inst_30372);

return statearr_30398;
})();
var statearr_30399_31726 = state_30395__$1;
(statearr_30399_31726[(2)] = null);

(statearr_30399_31726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (4))){
var inst_30375 = (state_30395[(8)]);
var inst_30375__$1 = (state_30395[(2)]);
var inst_30376 = (inst_30375__$1 == null);
var inst_30377 = cljs.core.not(inst_30376);
var state_30395__$1 = (function (){var statearr_30400 = state_30395;
(statearr_30400[(8)] = inst_30375__$1);

return statearr_30400;
})();
if(inst_30377){
var statearr_30401_31727 = state_30395__$1;
(statearr_30401_31727[(1)] = (5));

} else {
var statearr_30402_31728 = state_30395__$1;
(statearr_30402_31728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (6))){
var state_30395__$1 = state_30395;
var statearr_30403_31729 = state_30395__$1;
(statearr_30403_31729[(2)] = null);

(statearr_30403_31729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (3))){
var inst_30392 = (state_30395[(2)]);
var inst_30393 = cljs.core.async.close_BANG_(out);
var state_30395__$1 = (function (){var statearr_30407 = state_30395;
(statearr_30407[(9)] = inst_30392);

return statearr_30407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30395__$1,inst_30393);
} else {
if((state_val_30396 === (2))){
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30395__$1,(4),ch);
} else {
if((state_val_30396 === (11))){
var inst_30375 = (state_30395[(8)]);
var inst_30384 = (state_30395[(2)]);
var inst_30372 = inst_30375;
var state_30395__$1 = (function (){var statearr_30408 = state_30395;
(statearr_30408[(7)] = inst_30372);

(statearr_30408[(10)] = inst_30384);

return statearr_30408;
})();
var statearr_30409_31731 = state_30395__$1;
(statearr_30409_31731[(2)] = null);

(statearr_30409_31731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (9))){
var inst_30375 = (state_30395[(8)]);
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30395__$1,(11),out,inst_30375);
} else {
if((state_val_30396 === (5))){
var inst_30372 = (state_30395[(7)]);
var inst_30375 = (state_30395[(8)]);
var inst_30379 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30375,inst_30372);
var state_30395__$1 = state_30395;
if(inst_30379){
var statearr_30411_31732 = state_30395__$1;
(statearr_30411_31732[(1)] = (8));

} else {
var statearr_30412_31733 = state_30395__$1;
(statearr_30412_31733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (10))){
var inst_30387 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30413_31739 = state_30395__$1;
(statearr_30413_31739[(2)] = inst_30387);

(statearr_30413_31739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (8))){
var inst_30372 = (state_30395[(7)]);
var tmp30410 = inst_30372;
var inst_30372__$1 = tmp30410;
var state_30395__$1 = (function (){var statearr_30416 = state_30395;
(statearr_30416[(7)] = inst_30372__$1);

return statearr_30416;
})();
var statearr_30417_31740 = state_30395__$1;
(statearr_30417_31740[(2)] = null);

(statearr_30417_31740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27803__auto__ = null;
var cljs$core$async$state_machine__27803__auto____0 = (function (){
var statearr_30422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30422[(0)] = cljs$core$async$state_machine__27803__auto__);

(statearr_30422[(1)] = (1));

return statearr_30422;
});
var cljs$core$async$state_machine__27803__auto____1 = (function (state_30395){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_30395);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e30423){var ex__27806__auto__ = e30423;
var statearr_30424_31745 = state_30395;
(statearr_30424_31745[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_30395[(4)]))){
var statearr_30425_31746 = state_30395;
(statearr_30425_31746[(1)] = cljs.core.first((state_30395[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31747 = state_30395;
state_30395 = G__31747;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$state_machine__27803__auto__ = function(state_30395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27803__auto____1.call(this,state_30395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27803__auto____0;
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27803__auto____1;
return cljs$core$async$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_30426 = f__28055__auto__();
(statearr_30426[(6)] = c__28054__auto___31724);

return statearr_30426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30437 = arguments.length;
switch (G__30437) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28054__auto___31772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_30484){
var state_val_30485 = (state_30484[(1)]);
if((state_val_30485 === (7))){
var inst_30480 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30488_31776 = state_30484__$1;
(statearr_30488_31776[(2)] = inst_30480);

(statearr_30488_31776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (1))){
var inst_30447 = (new Array(n));
var inst_30448 = inst_30447;
var inst_30449 = (0);
var state_30484__$1 = (function (){var statearr_30489 = state_30484;
(statearr_30489[(7)] = inst_30449);

(statearr_30489[(8)] = inst_30448);

return statearr_30489;
})();
var statearr_30490_31777 = state_30484__$1;
(statearr_30490_31777[(2)] = null);

(statearr_30490_31777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (4))){
var inst_30452 = (state_30484[(9)]);
var inst_30452__$1 = (state_30484[(2)]);
var inst_30453 = (inst_30452__$1 == null);
var inst_30454 = cljs.core.not(inst_30453);
var state_30484__$1 = (function (){var statearr_30491 = state_30484;
(statearr_30491[(9)] = inst_30452__$1);

return statearr_30491;
})();
if(inst_30454){
var statearr_30492_31778 = state_30484__$1;
(statearr_30492_31778[(1)] = (5));

} else {
var statearr_30493_31780 = state_30484__$1;
(statearr_30493_31780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (15))){
var inst_30474 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30494_31781 = state_30484__$1;
(statearr_30494_31781[(2)] = inst_30474);

(statearr_30494_31781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (13))){
var state_30484__$1 = state_30484;
var statearr_30496_31782 = state_30484__$1;
(statearr_30496_31782[(2)] = null);

(statearr_30496_31782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (6))){
var inst_30449 = (state_30484[(7)]);
var inst_30470 = (inst_30449 > (0));
var state_30484__$1 = state_30484;
if(cljs.core.truth_(inst_30470)){
var statearr_30498_31783 = state_30484__$1;
(statearr_30498_31783[(1)] = (12));

} else {
var statearr_30500_31784 = state_30484__$1;
(statearr_30500_31784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (3))){
var inst_30482 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30484__$1,inst_30482);
} else {
if((state_val_30485 === (12))){
var inst_30448 = (state_30484[(8)]);
var inst_30472 = cljs.core.vec(inst_30448);
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30484__$1,(15),out,inst_30472);
} else {
if((state_val_30485 === (2))){
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30484__$1,(4),ch);
} else {
if((state_val_30485 === (11))){
var inst_30464 = (state_30484[(2)]);
var inst_30465 = (new Array(n));
var inst_30448 = inst_30465;
var inst_30449 = (0);
var state_30484__$1 = (function (){var statearr_30507 = state_30484;
(statearr_30507[(7)] = inst_30449);

(statearr_30507[(8)] = inst_30448);

(statearr_30507[(10)] = inst_30464);

return statearr_30507;
})();
var statearr_30508_31785 = state_30484__$1;
(statearr_30508_31785[(2)] = null);

(statearr_30508_31785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (9))){
var inst_30448 = (state_30484[(8)]);
var inst_30462 = cljs.core.vec(inst_30448);
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30484__$1,(11),out,inst_30462);
} else {
if((state_val_30485 === (5))){
var inst_30449 = (state_30484[(7)]);
var inst_30452 = (state_30484[(9)]);
var inst_30448 = (state_30484[(8)]);
var inst_30457 = (state_30484[(11)]);
var inst_30456 = (inst_30448[inst_30449] = inst_30452);
var inst_30457__$1 = (inst_30449 + (1));
var inst_30458 = (inst_30457__$1 < n);
var state_30484__$1 = (function (){var statearr_30509 = state_30484;
(statearr_30509[(12)] = inst_30456);

(statearr_30509[(11)] = inst_30457__$1);

return statearr_30509;
})();
if(cljs.core.truth_(inst_30458)){
var statearr_30510_31787 = state_30484__$1;
(statearr_30510_31787[(1)] = (8));

} else {
var statearr_30511_31788 = state_30484__$1;
(statearr_30511_31788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (14))){
var inst_30477 = (state_30484[(2)]);
var inst_30478 = cljs.core.async.close_BANG_(out);
var state_30484__$1 = (function (){var statearr_30513 = state_30484;
(statearr_30513[(13)] = inst_30477);

return statearr_30513;
})();
var statearr_30514_31789 = state_30484__$1;
(statearr_30514_31789[(2)] = inst_30478);

(statearr_30514_31789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (10))){
var inst_30468 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30515_31790 = state_30484__$1;
(statearr_30515_31790[(2)] = inst_30468);

(statearr_30515_31790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (8))){
var inst_30448 = (state_30484[(8)]);
var inst_30457 = (state_30484[(11)]);
var tmp30512 = inst_30448;
var inst_30448__$1 = tmp30512;
var inst_30449 = inst_30457;
var state_30484__$1 = (function (){var statearr_30516 = state_30484;
(statearr_30516[(7)] = inst_30449);

(statearr_30516[(8)] = inst_30448__$1);

return statearr_30516;
})();
var statearr_30517_31791 = state_30484__$1;
(statearr_30517_31791[(2)] = null);

(statearr_30517_31791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27803__auto__ = null;
var cljs$core$async$state_machine__27803__auto____0 = (function (){
var statearr_30518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30518[(0)] = cljs$core$async$state_machine__27803__auto__);

(statearr_30518[(1)] = (1));

return statearr_30518;
});
var cljs$core$async$state_machine__27803__auto____1 = (function (state_30484){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_30484);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e30519){var ex__27806__auto__ = e30519;
var statearr_30520_31792 = state_30484;
(statearr_30520_31792[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_30484[(4)]))){
var statearr_30521_31793 = state_30484;
(statearr_30521_31793[(1)] = cljs.core.first((state_30484[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31794 = state_30484;
state_30484 = G__31794;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$state_machine__27803__auto__ = function(state_30484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27803__auto____1.call(this,state_30484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27803__auto____0;
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27803__auto____1;
return cljs$core$async$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_30523 = f__28055__auto__();
(statearr_30523[(6)] = c__28054__auto___31772);

return statearr_30523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30526 = arguments.length;
switch (G__30526) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28054__auto___31804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28055__auto__ = (function (){var switch__27802__auto__ = (function (state_30583){
var state_val_30584 = (state_30583[(1)]);
if((state_val_30584 === (7))){
var inst_30579 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30585_31805 = state_30583__$1;
(statearr_30585_31805[(2)] = inst_30579);

(statearr_30585_31805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (1))){
var inst_30539 = [];
var inst_30540 = inst_30539;
var inst_30541 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30583__$1 = (function (){var statearr_30587 = state_30583;
(statearr_30587[(7)] = inst_30540);

(statearr_30587[(8)] = inst_30541);

return statearr_30587;
})();
var statearr_30588_31806 = state_30583__$1;
(statearr_30588_31806[(2)] = null);

(statearr_30588_31806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (4))){
var inst_30544 = (state_30583[(9)]);
var inst_30544__$1 = (state_30583[(2)]);
var inst_30545 = (inst_30544__$1 == null);
var inst_30546 = cljs.core.not(inst_30545);
var state_30583__$1 = (function (){var statearr_30590 = state_30583;
(statearr_30590[(9)] = inst_30544__$1);

return statearr_30590;
})();
if(inst_30546){
var statearr_30593_31807 = state_30583__$1;
(statearr_30593_31807[(1)] = (5));

} else {
var statearr_30594_31812 = state_30583__$1;
(statearr_30594_31812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (15))){
var inst_30540 = (state_30583[(7)]);
var inst_30571 = cljs.core.vec(inst_30540);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30583__$1,(18),out,inst_30571);
} else {
if((state_val_30584 === (13))){
var inst_30566 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30596_31813 = state_30583__$1;
(statearr_30596_31813[(2)] = inst_30566);

(statearr_30596_31813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (6))){
var inst_30540 = (state_30583[(7)]);
var inst_30568 = inst_30540.length;
var inst_30569 = (inst_30568 > (0));
var state_30583__$1 = state_30583;
if(cljs.core.truth_(inst_30569)){
var statearr_30597_31814 = state_30583__$1;
(statearr_30597_31814[(1)] = (15));

} else {
var statearr_30598_31815 = state_30583__$1;
(statearr_30598_31815[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (17))){
var inst_30576 = (state_30583[(2)]);
var inst_30577 = cljs.core.async.close_BANG_(out);
var state_30583__$1 = (function (){var statearr_30599 = state_30583;
(statearr_30599[(10)] = inst_30576);

return statearr_30599;
})();
var statearr_30600_31816 = state_30583__$1;
(statearr_30600_31816[(2)] = inst_30577);

(statearr_30600_31816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (3))){
var inst_30581 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30583__$1,inst_30581);
} else {
if((state_val_30584 === (12))){
var inst_30540 = (state_30583[(7)]);
var inst_30559 = cljs.core.vec(inst_30540);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30583__$1,(14),out,inst_30559);
} else {
if((state_val_30584 === (2))){
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30583__$1,(4),ch);
} else {
if((state_val_30584 === (11))){
var inst_30544 = (state_30583[(9)]);
var inst_30540 = (state_30583[(7)]);
var inst_30548 = (state_30583[(11)]);
var inst_30556 = inst_30540.push(inst_30544);
var tmp30601 = inst_30540;
var inst_30540__$1 = tmp30601;
var inst_30541 = inst_30548;
var state_30583__$1 = (function (){var statearr_30605 = state_30583;
(statearr_30605[(7)] = inst_30540__$1);

(statearr_30605[(12)] = inst_30556);

(statearr_30605[(8)] = inst_30541);

return statearr_30605;
})();
var statearr_30606_31817 = state_30583__$1;
(statearr_30606_31817[(2)] = null);

(statearr_30606_31817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (9))){
var inst_30541 = (state_30583[(8)]);
var inst_30552 = cljs.core.keyword_identical_QMARK_(inst_30541,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_30583__$1 = state_30583;
var statearr_30608_31818 = state_30583__$1;
(statearr_30608_31818[(2)] = inst_30552);

(statearr_30608_31818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (5))){
var inst_30544 = (state_30583[(9)]);
var inst_30548 = (state_30583[(11)]);
var inst_30549 = (state_30583[(13)]);
var inst_30541 = (state_30583[(8)]);
var inst_30548__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30544) : f.call(null, inst_30544));
var inst_30549__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30548__$1,inst_30541);
var state_30583__$1 = (function (){var statearr_30610 = state_30583;
(statearr_30610[(11)] = inst_30548__$1);

(statearr_30610[(13)] = inst_30549__$1);

return statearr_30610;
})();
if(inst_30549__$1){
var statearr_30611_31819 = state_30583__$1;
(statearr_30611_31819[(1)] = (8));

} else {
var statearr_30612_31820 = state_30583__$1;
(statearr_30612_31820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (14))){
var inst_30544 = (state_30583[(9)]);
var inst_30548 = (state_30583[(11)]);
var inst_30561 = (state_30583[(2)]);
var inst_30562 = [];
var inst_30563 = inst_30562.push(inst_30544);
var inst_30540 = inst_30562;
var inst_30541 = inst_30548;
var state_30583__$1 = (function (){var statearr_30613 = state_30583;
(statearr_30613[(14)] = inst_30563);

(statearr_30613[(7)] = inst_30540);

(statearr_30613[(15)] = inst_30561);

(statearr_30613[(8)] = inst_30541);

return statearr_30613;
})();
var statearr_30614_31821 = state_30583__$1;
(statearr_30614_31821[(2)] = null);

(statearr_30614_31821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (16))){
var state_30583__$1 = state_30583;
var statearr_30615_31822 = state_30583__$1;
(statearr_30615_31822[(2)] = null);

(statearr_30615_31822[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (10))){
var inst_30554 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
if(cljs.core.truth_(inst_30554)){
var statearr_30617_31823 = state_30583__$1;
(statearr_30617_31823[(1)] = (11));

} else {
var statearr_30618_31824 = state_30583__$1;
(statearr_30618_31824[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (18))){
var inst_30573 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30619_31825 = state_30583__$1;
(statearr_30619_31825[(2)] = inst_30573);

(statearr_30619_31825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (8))){
var inst_30549 = (state_30583[(13)]);
var state_30583__$1 = state_30583;
var statearr_30620_31826 = state_30583__$1;
(statearr_30620_31826[(2)] = inst_30549);

(statearr_30620_31826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27803__auto__ = null;
var cljs$core$async$state_machine__27803__auto____0 = (function (){
var statearr_30623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30623[(0)] = cljs$core$async$state_machine__27803__auto__);

(statearr_30623[(1)] = (1));

return statearr_30623;
});
var cljs$core$async$state_machine__27803__auto____1 = (function (state_30583){
while(true){
var ret_value__27804__auto__ = (function (){try{while(true){
var result__27805__auto__ = switch__27802__auto__(state_30583);
if(cljs.core.keyword_identical_QMARK_(result__27805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27805__auto__;
}
break;
}
}catch (e30624){var ex__27806__auto__ = e30624;
var statearr_30625_31827 = state_30583;
(statearr_30625_31827[(2)] = ex__27806__auto__);


if(cljs.core.seq((state_30583[(4)]))){
var statearr_30629_31828 = state_30583;
(statearr_30629_31828[(1)] = cljs.core.first((state_30583[(4)])));

} else {
throw ex__27806__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31829 = state_30583;
state_30583 = G__31829;
continue;
} else {
return ret_value__27804__auto__;
}
break;
}
});
cljs$core$async$state_machine__27803__auto__ = function(state_30583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27803__auto____1.call(this,state_30583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27803__auto____0;
cljs$core$async$state_machine__27803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27803__auto____1;
return cljs$core$async$state_machine__27803__auto__;
})()
})();
var state__28056__auto__ = (function (){var statearr_30631 = f__28055__auto__();
(statearr_30631[(6)] = c__28054__auto___31804);

return statearr_30631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28056__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
