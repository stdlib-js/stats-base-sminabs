"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var b=t(function(B,m){
var R=require('@stdlib/math-base-assert-is-nanf/dist'),f=require('@stdlib/math-base-special-abs/dist');function _(e,r,u){var s,i,a,n;if(e<=0)return NaN;if(e===1||u===0)return f(r[0]);for(u<0?i=(1-e)*u:i=0,s=f(r[i]),n=1;n<e;n++){if(i+=u,a=f(r[i]),R(a))return a;a<s&&(s=a)}return s}m.exports=_
});var p=t(function(C,c){
var E=require('@stdlib/math-base-assert-is-nanf/dist'),q=require('@stdlib/math-base-special-abs/dist');function O(e,r,u,s){var i,a,n,v;if(e<=0)return NaN;if(e===1||u===0)return q(r[s]);for(a=s,i=q(r[a]),v=1;v<e;v++){if(a+=u,n=q(r[a]),E(n))return n;n<i&&(i=n)}return i}c.exports=O
});var l=t(function(D,j){
var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=b(),g=p();d(y,"ndarray",g);j.exports=y
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=l(),o,x=k(h(__dirname,"./native.js"));w(x)?o=z:o=x;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
