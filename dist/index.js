"use strict";var v=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var o=v(function(B,b){
var d=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist');function l(a,e,i,c){var t,s,u,r,n;if(a<=0)return NaN;if(a===1||i===0)return r=f(e[c]),d(r)?NaN:0;for(u=c,n=0;n<a&&(r=f(e[u]),r!==r);n++)u+=i;if(n===a)return NaN;for(s=r,t=r,n+=1,n;n<a;n++)u+=i,r=f(e[u]),!d(r)&&(r<s?s=r:r>t&&(t=r));return t-s}b.exports=l
});var p=v(function(C,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function k(a,e,i){return _(a,e,i,R(a,i))}m.exports=k
});var x=v(function(D,g){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),N=o();E(y,"ndarray",N);g.exports=y
});var O=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=x(),q,j=h(O(__dirname,"./native.js"));w(j)?q=z:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
