// Compiled by ClojureScript 1.9.671 {:target :nodejs}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__10738__auto__,writer__10739__auto__,opt__10740__auto__){
return cljs.core._write.call(null,writer__10739__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14534 = arguments.length;
var i__11253__auto___14535 = (0);
while(true){
if((i__11253__auto___14535 < len__11252__auto___14534)){
args__11259__auto__.push((arguments[i__11253__auto___14535]));

var G__14536 = (i__11253__auto___14535 + (1));
i__11253__auto___14535 = G__14536;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq14533){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14533));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14538 = arguments.length;
var i__11253__auto___14539 = (0);
while(true){
if((i__11253__auto___14539 < len__11252__auto___14538)){
args__11259__auto__.push((arguments[i__11253__auto___14539]));

var G__14540 = (i__11253__auto___14539 + (1));
i__11253__auto___14539 = G__14540;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq14537){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14537));
});

var g_QMARK__14541 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_14542 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__14541){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__14541))
,null));
var mkg_14543 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__14541,g_14542){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__14541,g_14542))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__14541,g_14542,mkg_14543){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__14541).call(null,x);
});})(g_QMARK__14541,g_14542,mkg_14543))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__14541,g_14542,mkg_14543){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_14543).call(null,gfn);
});})(g_QMARK__14541,g_14542,mkg_14543))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__14541,g_14542,mkg_14543){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_14542).call(null,generator);
});})(g_QMARK__14541,g_14542,mkg_14543))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__11346__auto___14563 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__11346__auto___14563){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14564 = arguments.length;
var i__11253__auto___14565 = (0);
while(true){
if((i__11253__auto___14565 < len__11252__auto___14564)){
args__11259__auto__.push((arguments[i__11253__auto___14565]));

var G__14566 = (i__11253__auto___14565 + (1));
i__11253__auto___14565 = G__14566;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14563))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14563){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14563),args);
});})(g__11346__auto___14563))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__11346__auto___14563){
return (function (seq14544){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14544));
});})(g__11346__auto___14563))
;


var g__11346__auto___14567 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__11346__auto___14567){
return (function cljs$spec$gen$alpha$list(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14568 = arguments.length;
var i__11253__auto___14569 = (0);
while(true){
if((i__11253__auto___14569 < len__11252__auto___14568)){
args__11259__auto__.push((arguments[i__11253__auto___14569]));

var G__14570 = (i__11253__auto___14569 + (1));
i__11253__auto___14569 = G__14570;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14567))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14567){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14567),args);
});})(g__11346__auto___14567))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__11346__auto___14567){
return (function (seq14545){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14545));
});})(g__11346__auto___14567))
;


var g__11346__auto___14571 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__11346__auto___14571){
return (function cljs$spec$gen$alpha$map(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14572 = arguments.length;
var i__11253__auto___14573 = (0);
while(true){
if((i__11253__auto___14573 < len__11252__auto___14572)){
args__11259__auto__.push((arguments[i__11253__auto___14573]));

var G__14574 = (i__11253__auto___14573 + (1));
i__11253__auto___14573 = G__14574;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14571))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14571){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14571),args);
});})(g__11346__auto___14571))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__11346__auto___14571){
return (function (seq14546){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14546));
});})(g__11346__auto___14571))
;


var g__11346__auto___14575 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__11346__auto___14575){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14576 = arguments.length;
var i__11253__auto___14577 = (0);
while(true){
if((i__11253__auto___14577 < len__11252__auto___14576)){
args__11259__auto__.push((arguments[i__11253__auto___14577]));

var G__14578 = (i__11253__auto___14577 + (1));
i__11253__auto___14577 = G__14578;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14575))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14575){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14575),args);
});})(g__11346__auto___14575))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__11346__auto___14575){
return (function (seq14547){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14547));
});})(g__11346__auto___14575))
;


var g__11346__auto___14579 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__11346__auto___14579){
return (function cljs$spec$gen$alpha$set(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14580 = arguments.length;
var i__11253__auto___14581 = (0);
while(true){
if((i__11253__auto___14581 < len__11252__auto___14580)){
args__11259__auto__.push((arguments[i__11253__auto___14581]));

var G__14582 = (i__11253__auto___14581 + (1));
i__11253__auto___14581 = G__14582;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14579))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14579){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14579),args);
});})(g__11346__auto___14579))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__11346__auto___14579){
return (function (seq14548){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14548));
});})(g__11346__auto___14579))
;


var g__11346__auto___14583 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__11346__auto___14583){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14584 = arguments.length;
var i__11253__auto___14585 = (0);
while(true){
if((i__11253__auto___14585 < len__11252__auto___14584)){
args__11259__auto__.push((arguments[i__11253__auto___14585]));

var G__14586 = (i__11253__auto___14585 + (1));
i__11253__auto___14585 = G__14586;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14583))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14583){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14583),args);
});})(g__11346__auto___14583))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__11346__auto___14583){
return (function (seq14549){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14549));
});})(g__11346__auto___14583))
;


var g__11346__auto___14587 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__11346__auto___14587){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14588 = arguments.length;
var i__11253__auto___14589 = (0);
while(true){
if((i__11253__auto___14589 < len__11252__auto___14588)){
args__11259__auto__.push((arguments[i__11253__auto___14589]));

var G__14590 = (i__11253__auto___14589 + (1));
i__11253__auto___14589 = G__14590;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14587))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14587){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14587),args);
});})(g__11346__auto___14587))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__11346__auto___14587){
return (function (seq14550){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14550));
});})(g__11346__auto___14587))
;


var g__11346__auto___14591 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__11346__auto___14591){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14592 = arguments.length;
var i__11253__auto___14593 = (0);
while(true){
if((i__11253__auto___14593 < len__11252__auto___14592)){
args__11259__auto__.push((arguments[i__11253__auto___14593]));

var G__14594 = (i__11253__auto___14593 + (1));
i__11253__auto___14593 = G__14594;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14591))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14591){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14591),args);
});})(g__11346__auto___14591))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__11346__auto___14591){
return (function (seq14551){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14551));
});})(g__11346__auto___14591))
;


var g__11346__auto___14595 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__11346__auto___14595){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14596 = arguments.length;
var i__11253__auto___14597 = (0);
while(true){
if((i__11253__auto___14597 < len__11252__auto___14596)){
args__11259__auto__.push((arguments[i__11253__auto___14597]));

var G__14598 = (i__11253__auto___14597 + (1));
i__11253__auto___14597 = G__14598;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14595))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14595){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14595),args);
});})(g__11346__auto___14595))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__11346__auto___14595){
return (function (seq14552){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14552));
});})(g__11346__auto___14595))
;


var g__11346__auto___14599 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__11346__auto___14599){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14600 = arguments.length;
var i__11253__auto___14601 = (0);
while(true){
if((i__11253__auto___14601 < len__11252__auto___14600)){
args__11259__auto__.push((arguments[i__11253__auto___14601]));

var G__14602 = (i__11253__auto___14601 + (1));
i__11253__auto___14601 = G__14602;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14599))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14599){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14599),args);
});})(g__11346__auto___14599))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__11346__auto___14599){
return (function (seq14553){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14553));
});})(g__11346__auto___14599))
;


var g__11346__auto___14603 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__11346__auto___14603){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14604 = arguments.length;
var i__11253__auto___14605 = (0);
while(true){
if((i__11253__auto___14605 < len__11252__auto___14604)){
args__11259__auto__.push((arguments[i__11253__auto___14605]));

var G__14606 = (i__11253__auto___14605 + (1));
i__11253__auto___14605 = G__14606;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14603))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14603){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14603),args);
});})(g__11346__auto___14603))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__11346__auto___14603){
return (function (seq14554){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14554));
});})(g__11346__auto___14603))
;


var g__11346__auto___14607 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__11346__auto___14607){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14608 = arguments.length;
var i__11253__auto___14609 = (0);
while(true){
if((i__11253__auto___14609 < len__11252__auto___14608)){
args__11259__auto__.push((arguments[i__11253__auto___14609]));

var G__14610 = (i__11253__auto___14609 + (1));
i__11253__auto___14609 = G__14610;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14607))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14607){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14607),args);
});})(g__11346__auto___14607))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__11346__auto___14607){
return (function (seq14555){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14555));
});})(g__11346__auto___14607))
;


var g__11346__auto___14611 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__11346__auto___14611){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14612 = arguments.length;
var i__11253__auto___14613 = (0);
while(true){
if((i__11253__auto___14613 < len__11252__auto___14612)){
args__11259__auto__.push((arguments[i__11253__auto___14613]));

var G__14614 = (i__11253__auto___14613 + (1));
i__11253__auto___14613 = G__14614;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14611))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14611){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14611),args);
});})(g__11346__auto___14611))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__11346__auto___14611){
return (function (seq14556){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14556));
});})(g__11346__auto___14611))
;


var g__11346__auto___14615 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__11346__auto___14615){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14616 = arguments.length;
var i__11253__auto___14617 = (0);
while(true){
if((i__11253__auto___14617 < len__11252__auto___14616)){
args__11259__auto__.push((arguments[i__11253__auto___14617]));

var G__14618 = (i__11253__auto___14617 + (1));
i__11253__auto___14617 = G__14618;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14615))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14615){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14615),args);
});})(g__11346__auto___14615))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__11346__auto___14615){
return (function (seq14557){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14557));
});})(g__11346__auto___14615))
;


var g__11346__auto___14619 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__11346__auto___14619){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14620 = arguments.length;
var i__11253__auto___14621 = (0);
while(true){
if((i__11253__auto___14621 < len__11252__auto___14620)){
args__11259__auto__.push((arguments[i__11253__auto___14621]));

var G__14622 = (i__11253__auto___14621 + (1));
i__11253__auto___14621 = G__14622;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14619))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14619){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14619),args);
});})(g__11346__auto___14619))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__11346__auto___14619){
return (function (seq14558){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14558));
});})(g__11346__auto___14619))
;


var g__11346__auto___14623 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__11346__auto___14623){
return (function cljs$spec$gen$alpha$return(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14624 = arguments.length;
var i__11253__auto___14625 = (0);
while(true){
if((i__11253__auto___14625 < len__11252__auto___14624)){
args__11259__auto__.push((arguments[i__11253__auto___14625]));

var G__14626 = (i__11253__auto___14625 + (1));
i__11253__auto___14625 = G__14626;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14623))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14623){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14623),args);
});})(g__11346__auto___14623))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__11346__auto___14623){
return (function (seq14559){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14559));
});})(g__11346__auto___14623))
;


var g__11346__auto___14627 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__11346__auto___14627){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14628 = arguments.length;
var i__11253__auto___14629 = (0);
while(true){
if((i__11253__auto___14629 < len__11252__auto___14628)){
args__11259__auto__.push((arguments[i__11253__auto___14629]));

var G__14630 = (i__11253__auto___14629 + (1));
i__11253__auto___14629 = G__14630;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14627))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14627){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14627),args);
});})(g__11346__auto___14627))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11346__auto___14627){
return (function (seq14560){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14560));
});})(g__11346__auto___14627))
;


var g__11346__auto___14631 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__11346__auto___14631){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14632 = arguments.length;
var i__11253__auto___14633 = (0);
while(true){
if((i__11253__auto___14633 < len__11252__auto___14632)){
args__11259__auto__.push((arguments[i__11253__auto___14633]));

var G__14634 = (i__11253__auto___14633 + (1));
i__11253__auto___14633 = G__14634;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14631))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14631){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14631),args);
});})(g__11346__auto___14631))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__11346__auto___14631){
return (function (seq14561){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14561));
});})(g__11346__auto___14631))
;


var g__11346__auto___14635 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__11346__auto___14635){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14636 = arguments.length;
var i__11253__auto___14637 = (0);
while(true){
if((i__11253__auto___14637 < len__11252__auto___14636)){
args__11259__auto__.push((arguments[i__11253__auto___14637]));

var G__14638 = (i__11253__auto___14637 + (1));
i__11253__auto___14637 = G__14638;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11346__auto___14635))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11346__auto___14635){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11346__auto___14635),args);
});})(g__11346__auto___14635))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__11346__auto___14635){
return (function (seq14562){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14562));
});})(g__11346__auto___14635))
;

var g__11359__auto___14660 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__11359__auto___14660){
return (function cljs$spec$gen$alpha$any(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14661 = arguments.length;
var i__11253__auto___14662 = (0);
while(true){
if((i__11253__auto___14662 < len__11252__auto___14661)){
args__11259__auto__.push((arguments[i__11253__auto___14662]));

var G__14663 = (i__11253__auto___14662 + (1));
i__11253__auto___14662 = G__14663;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14660))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14660){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14660);
});})(g__11359__auto___14660))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__11359__auto___14660){
return (function (seq14639){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14639));
});})(g__11359__auto___14660))
;


var g__11359__auto___14664 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__11359__auto___14664){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14665 = arguments.length;
var i__11253__auto___14666 = (0);
while(true){
if((i__11253__auto___14666 < len__11252__auto___14665)){
args__11259__auto__.push((arguments[i__11253__auto___14666]));

var G__14667 = (i__11253__auto___14666 + (1));
i__11253__auto___14666 = G__14667;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14664))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14664){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14664);
});})(g__11359__auto___14664))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__11359__auto___14664){
return (function (seq14640){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14640));
});})(g__11359__auto___14664))
;


var g__11359__auto___14668 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__11359__auto___14668){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14669 = arguments.length;
var i__11253__auto___14670 = (0);
while(true){
if((i__11253__auto___14670 < len__11252__auto___14669)){
args__11259__auto__.push((arguments[i__11253__auto___14670]));

var G__14671 = (i__11253__auto___14670 + (1));
i__11253__auto___14670 = G__14671;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14668))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14668){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14668);
});})(g__11359__auto___14668))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__11359__auto___14668){
return (function (seq14641){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14641));
});})(g__11359__auto___14668))
;


var g__11359__auto___14672 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__11359__auto___14672){
return (function cljs$spec$gen$alpha$char(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14673 = arguments.length;
var i__11253__auto___14674 = (0);
while(true){
if((i__11253__auto___14674 < len__11252__auto___14673)){
args__11259__auto__.push((arguments[i__11253__auto___14674]));

var G__14675 = (i__11253__auto___14674 + (1));
i__11253__auto___14674 = G__14675;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14672))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14672){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14672);
});})(g__11359__auto___14672))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__11359__auto___14672){
return (function (seq14642){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14642));
});})(g__11359__auto___14672))
;


var g__11359__auto___14676 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__11359__auto___14676){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14677 = arguments.length;
var i__11253__auto___14678 = (0);
while(true){
if((i__11253__auto___14678 < len__11252__auto___14677)){
args__11259__auto__.push((arguments[i__11253__auto___14678]));

var G__14679 = (i__11253__auto___14678 + (1));
i__11253__auto___14678 = G__14679;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14676))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14676){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14676);
});})(g__11359__auto___14676))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__11359__auto___14676){
return (function (seq14643){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14643));
});})(g__11359__auto___14676))
;


var g__11359__auto___14680 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__11359__auto___14680){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14681 = arguments.length;
var i__11253__auto___14682 = (0);
while(true){
if((i__11253__auto___14682 < len__11252__auto___14681)){
args__11259__auto__.push((arguments[i__11253__auto___14682]));

var G__14683 = (i__11253__auto___14682 + (1));
i__11253__auto___14682 = G__14683;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14680))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14680){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14680);
});})(g__11359__auto___14680))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__11359__auto___14680){
return (function (seq14644){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14644));
});})(g__11359__auto___14680))
;


var g__11359__auto___14684 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__11359__auto___14684){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14685 = arguments.length;
var i__11253__auto___14686 = (0);
while(true){
if((i__11253__auto___14686 < len__11252__auto___14685)){
args__11259__auto__.push((arguments[i__11253__auto___14686]));

var G__14687 = (i__11253__auto___14686 + (1));
i__11253__auto___14686 = G__14687;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14684))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14684){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14684);
});})(g__11359__auto___14684))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__11359__auto___14684){
return (function (seq14645){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14645));
});})(g__11359__auto___14684))
;


var g__11359__auto___14688 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__11359__auto___14688){
return (function cljs$spec$gen$alpha$double(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14689 = arguments.length;
var i__11253__auto___14690 = (0);
while(true){
if((i__11253__auto___14690 < len__11252__auto___14689)){
args__11259__auto__.push((arguments[i__11253__auto___14690]));

var G__14691 = (i__11253__auto___14690 + (1));
i__11253__auto___14690 = G__14691;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14688))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14688){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14688);
});})(g__11359__auto___14688))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__11359__auto___14688){
return (function (seq14646){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14646));
});})(g__11359__auto___14688))
;


var g__11359__auto___14692 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__11359__auto___14692){
return (function cljs$spec$gen$alpha$int(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14693 = arguments.length;
var i__11253__auto___14694 = (0);
while(true){
if((i__11253__auto___14694 < len__11252__auto___14693)){
args__11259__auto__.push((arguments[i__11253__auto___14694]));

var G__14695 = (i__11253__auto___14694 + (1));
i__11253__auto___14694 = G__14695;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14692))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14692){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14692);
});})(g__11359__auto___14692))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__11359__auto___14692){
return (function (seq14647){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14647));
});})(g__11359__auto___14692))
;


var g__11359__auto___14696 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__11359__auto___14696){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14697 = arguments.length;
var i__11253__auto___14698 = (0);
while(true){
if((i__11253__auto___14698 < len__11252__auto___14697)){
args__11259__auto__.push((arguments[i__11253__auto___14698]));

var G__14699 = (i__11253__auto___14698 + (1));
i__11253__auto___14698 = G__14699;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14696))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14696){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14696);
});})(g__11359__auto___14696))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__11359__auto___14696){
return (function (seq14648){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14648));
});})(g__11359__auto___14696))
;


var g__11359__auto___14700 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__11359__auto___14700){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14701 = arguments.length;
var i__11253__auto___14702 = (0);
while(true){
if((i__11253__auto___14702 < len__11252__auto___14701)){
args__11259__auto__.push((arguments[i__11253__auto___14702]));

var G__14703 = (i__11253__auto___14702 + (1));
i__11253__auto___14702 = G__14703;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14700))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14700){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14700);
});})(g__11359__auto___14700))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__11359__auto___14700){
return (function (seq14649){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14649));
});})(g__11359__auto___14700))
;


var g__11359__auto___14704 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__11359__auto___14704){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14705 = arguments.length;
var i__11253__auto___14706 = (0);
while(true){
if((i__11253__auto___14706 < len__11252__auto___14705)){
args__11259__auto__.push((arguments[i__11253__auto___14706]));

var G__14707 = (i__11253__auto___14706 + (1));
i__11253__auto___14706 = G__14707;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14704))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14704){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14704);
});})(g__11359__auto___14704))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__11359__auto___14704){
return (function (seq14650){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14650));
});})(g__11359__auto___14704))
;


var g__11359__auto___14708 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__11359__auto___14708){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14709 = arguments.length;
var i__11253__auto___14710 = (0);
while(true){
if((i__11253__auto___14710 < len__11252__auto___14709)){
args__11259__auto__.push((arguments[i__11253__auto___14710]));

var G__14711 = (i__11253__auto___14710 + (1));
i__11253__auto___14710 = G__14711;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14708))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14708){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14708);
});})(g__11359__auto___14708))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__11359__auto___14708){
return (function (seq14651){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14651));
});})(g__11359__auto___14708))
;


var g__11359__auto___14712 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__11359__auto___14712){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14713 = arguments.length;
var i__11253__auto___14714 = (0);
while(true){
if((i__11253__auto___14714 < len__11252__auto___14713)){
args__11259__auto__.push((arguments[i__11253__auto___14714]));

var G__14715 = (i__11253__auto___14714 + (1));
i__11253__auto___14714 = G__14715;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14712))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14712){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14712);
});})(g__11359__auto___14712))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__11359__auto___14712){
return (function (seq14652){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14652));
});})(g__11359__auto___14712))
;


var g__11359__auto___14716 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__11359__auto___14716){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14717 = arguments.length;
var i__11253__auto___14718 = (0);
while(true){
if((i__11253__auto___14718 < len__11252__auto___14717)){
args__11259__auto__.push((arguments[i__11253__auto___14718]));

var G__14719 = (i__11253__auto___14718 + (1));
i__11253__auto___14718 = G__14719;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14716))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14716){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14716);
});})(g__11359__auto___14716))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__11359__auto___14716){
return (function (seq14653){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14653));
});})(g__11359__auto___14716))
;


var g__11359__auto___14720 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__11359__auto___14720){
return (function cljs$spec$gen$alpha$string(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14721 = arguments.length;
var i__11253__auto___14722 = (0);
while(true){
if((i__11253__auto___14722 < len__11252__auto___14721)){
args__11259__auto__.push((arguments[i__11253__auto___14722]));

var G__14723 = (i__11253__auto___14722 + (1));
i__11253__auto___14722 = G__14723;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14720))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14720){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14720);
});})(g__11359__auto___14720))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__11359__auto___14720){
return (function (seq14654){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14654));
});})(g__11359__auto___14720))
;


var g__11359__auto___14724 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__11359__auto___14724){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14725 = arguments.length;
var i__11253__auto___14726 = (0);
while(true){
if((i__11253__auto___14726 < len__11252__auto___14725)){
args__11259__auto__.push((arguments[i__11253__auto___14726]));

var G__14727 = (i__11253__auto___14726 + (1));
i__11253__auto___14726 = G__14727;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14724))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14724){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14724);
});})(g__11359__auto___14724))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__11359__auto___14724){
return (function (seq14655){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14655));
});})(g__11359__auto___14724))
;


var g__11359__auto___14728 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__11359__auto___14728){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14729 = arguments.length;
var i__11253__auto___14730 = (0);
while(true){
if((i__11253__auto___14730 < len__11252__auto___14729)){
args__11259__auto__.push((arguments[i__11253__auto___14730]));

var G__14731 = (i__11253__auto___14730 + (1));
i__11253__auto___14730 = G__14731;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14728))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14728){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14728);
});})(g__11359__auto___14728))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__11359__auto___14728){
return (function (seq14656){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14656));
});})(g__11359__auto___14728))
;


var g__11359__auto___14732 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__11359__auto___14732){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14733 = arguments.length;
var i__11253__auto___14734 = (0);
while(true){
if((i__11253__auto___14734 < len__11252__auto___14733)){
args__11259__auto__.push((arguments[i__11253__auto___14734]));

var G__14735 = (i__11253__auto___14734 + (1));
i__11253__auto___14734 = G__14735;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14732))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14732){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14732);
});})(g__11359__auto___14732))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__11359__auto___14732){
return (function (seq14657){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14657));
});})(g__11359__auto___14732))
;


var g__11359__auto___14736 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__11359__auto___14736){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14737 = arguments.length;
var i__11253__auto___14738 = (0);
while(true){
if((i__11253__auto___14738 < len__11252__auto___14737)){
args__11259__auto__.push((arguments[i__11253__auto___14738]));

var G__14739 = (i__11253__auto___14738 + (1));
i__11253__auto___14738 = G__14739;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14736))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14736){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14736);
});})(g__11359__auto___14736))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__11359__auto___14736){
return (function (seq14658){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14658));
});})(g__11359__auto___14736))
;


var g__11359__auto___14740 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__11359__auto___14740){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14741 = arguments.length;
var i__11253__auto___14742 = (0);
while(true){
if((i__11253__auto___14742 < len__11252__auto___14741)){
args__11259__auto__.push((arguments[i__11253__auto___14742]));

var G__14743 = (i__11253__auto___14742 + (1));
i__11253__auto___14742 = G__14743;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});})(g__11359__auto___14740))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11359__auto___14740){
return (function (args){
return cljs.core.deref.call(null,g__11359__auto___14740);
});})(g__11359__auto___14740))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__11359__auto___14740){
return (function (seq14659){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14659));
});})(g__11359__auto___14740))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__11259__auto__ = [];
var len__11252__auto___14746 = arguments.length;
var i__11253__auto___14747 = (0);
while(true){
if((i__11253__auto___14747 < len__11252__auto___14746)){
args__11259__auto__.push((arguments[i__11253__auto___14747]));

var G__14748 = (i__11253__auto___14747 + (1));
i__11253__auto___14747 = G__14748;
continue;
} else {
}
break;
}

var argseq__11260__auto__ = ((((0) < args__11259__auto__.length))?(new cljs.core.IndexedSeq(args__11259__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__11260__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__14744_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__14744_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq14745){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14745));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__14749_SHARP_){
return (new Date(p1__14749_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map