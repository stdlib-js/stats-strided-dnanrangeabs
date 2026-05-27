"use strict";var v=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var o=v(function(B,b){
var d=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist');function l(e,a,n,c){var t,s,u,r,i;if(e<=0)return NaN;if(e===1||n===0)return r=f(a[c]),d(r)?NaN:0;for(u=c,i=0;i<e&&(r=f(a[u]),r!==r);i++)u+=n;if(i===e)return NaN;for(s=r,t=r,i+=1,i;i<e;i++)u+=n,r=f(a[u]),!d(r)&&(r<s?s=r:r>t&&(t=r));return t-s}b.exports=l
});var p=v(function(C,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function k(e,a,n){return _(e,a,n,R(e,n))}m.exports=k
});var x=v(function(D,g){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),N=o();E(y,"ndarray",N);g.exports=y
});var O=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=x(),q,j=h(O(__dirname,"./native.js"));w(j)?q=z:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
