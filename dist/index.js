"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=t(function(B,m){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(e,r,i,f){var n,s,a,u;if(e<=0)return NaN;if(e===1||i===0)return v(r[f]);for(s=f,n=v(r[s]),u=1;u<e;u++){if(s+=i,a=v(r[s]),x(a))return a;a<n&&(n=a)}return n}m.exports=l
});var b=t(function(C,c){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=q();function E(e,r,i){return _(e,r,i,R(e,i))}c.exports=E
});var d=t(function(D,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=b(),g=q();O(p,"ndarray",g);y.exports=p
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=d(),o,j=k(h(__dirname,"./native.js"));w(j)?o=z:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
