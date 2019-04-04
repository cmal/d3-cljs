// Compiled by ClojureScript 1.9.671 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13862){
var map__13863 = p__13862;
var map__13863__$1 = ((((!((map__13863 == null)))?((((map__13863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13863):map__13863);
var m = map__13863__$1;
var n = cljs.core.get.call(null,map__13863__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13863__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13865_13887 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13866_13888 = null;
var count__13867_13889 = (0);
var i__13868_13890 = (0);
while(true){
if((i__13868_13890 < count__13867_13889)){
var f_13891 = cljs.core._nth.call(null,chunk__13866_13888,i__13868_13890);
cljs.core.println.call(null,"  ",f_13891);

var G__13892 = seq__13865_13887;
var G__13893 = chunk__13866_13888;
var G__13894 = count__13867_13889;
var G__13895 = (i__13868_13890 + (1));
seq__13865_13887 = G__13892;
chunk__13866_13888 = G__13893;
count__13867_13889 = G__13894;
i__13868_13890 = G__13895;
continue;
} else {
var temp__4657__auto___13896 = cljs.core.seq.call(null,seq__13865_13887);
if(temp__4657__auto___13896){
var seq__13865_13897__$1 = temp__4657__auto___13896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13865_13897__$1)){
var c__10947__auto___13898 = cljs.core.chunk_first.call(null,seq__13865_13897__$1);
var G__13899 = cljs.core.chunk_rest.call(null,seq__13865_13897__$1);
var G__13900 = c__10947__auto___13898;
var G__13901 = cljs.core.count.call(null,c__10947__auto___13898);
var G__13902 = (0);
seq__13865_13887 = G__13899;
chunk__13866_13888 = G__13900;
count__13867_13889 = G__13901;
i__13868_13890 = G__13902;
continue;
} else {
var f_13903 = cljs.core.first.call(null,seq__13865_13897__$1);
cljs.core.println.call(null,"  ",f_13903);

var G__13904 = cljs.core.next.call(null,seq__13865_13897__$1);
var G__13905 = null;
var G__13906 = (0);
var G__13907 = (0);
seq__13865_13887 = G__13904;
chunk__13866_13888 = G__13905;
count__13867_13889 = G__13906;
i__13868_13890 = G__13907;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13908 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__10127__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10127__auto__)){
return or__10127__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13908);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13908)))?cljs.core.second.call(null,arglists_13908):arglists_13908));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13869_13909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13870_13910 = null;
var count__13871_13911 = (0);
var i__13872_13912 = (0);
while(true){
if((i__13872_13912 < count__13871_13911)){
var vec__13873_13913 = cljs.core._nth.call(null,chunk__13870_13910,i__13872_13912);
var name_13914 = cljs.core.nth.call(null,vec__13873_13913,(0),null);
var map__13876_13915 = cljs.core.nth.call(null,vec__13873_13913,(1),null);
var map__13876_13916__$1 = ((((!((map__13876_13915 == null)))?((((map__13876_13915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13876_13915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13876_13915):map__13876_13915);
var doc_13917 = cljs.core.get.call(null,map__13876_13916__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13918 = cljs.core.get.call(null,map__13876_13916__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13914);

cljs.core.println.call(null," ",arglists_13918);

if(cljs.core.truth_(doc_13917)){
cljs.core.println.call(null," ",doc_13917);
} else {
}

var G__13919 = seq__13869_13909;
var G__13920 = chunk__13870_13910;
var G__13921 = count__13871_13911;
var G__13922 = (i__13872_13912 + (1));
seq__13869_13909 = G__13919;
chunk__13870_13910 = G__13920;
count__13871_13911 = G__13921;
i__13872_13912 = G__13922;
continue;
} else {
var temp__4657__auto___13923 = cljs.core.seq.call(null,seq__13869_13909);
if(temp__4657__auto___13923){
var seq__13869_13924__$1 = temp__4657__auto___13923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13869_13924__$1)){
var c__10947__auto___13925 = cljs.core.chunk_first.call(null,seq__13869_13924__$1);
var G__13926 = cljs.core.chunk_rest.call(null,seq__13869_13924__$1);
var G__13927 = c__10947__auto___13925;
var G__13928 = cljs.core.count.call(null,c__10947__auto___13925);
var G__13929 = (0);
seq__13869_13909 = G__13926;
chunk__13870_13910 = G__13927;
count__13871_13911 = G__13928;
i__13872_13912 = G__13929;
continue;
} else {
var vec__13878_13930 = cljs.core.first.call(null,seq__13869_13924__$1);
var name_13931 = cljs.core.nth.call(null,vec__13878_13930,(0),null);
var map__13881_13932 = cljs.core.nth.call(null,vec__13878_13930,(1),null);
var map__13881_13933__$1 = ((((!((map__13881_13932 == null)))?((((map__13881_13932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13881_13932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13881_13932):map__13881_13932);
var doc_13934 = cljs.core.get.call(null,map__13881_13933__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13935 = cljs.core.get.call(null,map__13881_13933__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13931);

cljs.core.println.call(null," ",arglists_13935);

if(cljs.core.truth_(doc_13934)){
cljs.core.println.call(null," ",doc_13934);
} else {
}

var G__13936 = cljs.core.next.call(null,seq__13869_13924__$1);
var G__13937 = null;
var G__13938 = (0);
var G__13939 = (0);
seq__13869_13909 = G__13936;
chunk__13870_13910 = G__13937;
count__13871_13911 = G__13938;
i__13872_13912 = G__13939;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__13883 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13884 = null;
var count__13885 = (0);
var i__13886 = (0);
while(true){
if((i__13886 < count__13885)){
var role = cljs.core._nth.call(null,chunk__13884,i__13886);
var temp__4657__auto___13940__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13940__$1)){
var spec_13941 = temp__4657__auto___13940__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_13941));
} else {
}

var G__13942 = seq__13883;
var G__13943 = chunk__13884;
var G__13944 = count__13885;
var G__13945 = (i__13886 + (1));
seq__13883 = G__13942;
chunk__13884 = G__13943;
count__13885 = G__13944;
i__13886 = G__13945;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13883);
if(temp__4657__auto____$1){
var seq__13883__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13883__$1)){
var c__10947__auto__ = cljs.core.chunk_first.call(null,seq__13883__$1);
var G__13946 = cljs.core.chunk_rest.call(null,seq__13883__$1);
var G__13947 = c__10947__auto__;
var G__13948 = cljs.core.count.call(null,c__10947__auto__);
var G__13949 = (0);
seq__13883 = G__13946;
chunk__13884 = G__13947;
count__13885 = G__13948;
i__13886 = G__13949;
continue;
} else {
var role = cljs.core.first.call(null,seq__13883__$1);
var temp__4657__auto___13950__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13950__$2)){
var spec_13951 = temp__4657__auto___13950__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_13951));
} else {
}

var G__13952 = cljs.core.next.call(null,seq__13883__$1);
var G__13953 = null;
var G__13954 = (0);
var G__13955 = (0);
seq__13883 = G__13952;
chunk__13884 = G__13953;
count__13885 = G__13954;
i__13886 = G__13955;
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

//# sourceMappingURL=repl.js.map