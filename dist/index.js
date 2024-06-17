"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=f(function(D,p){
var m=require('@stdlib/array-base-assert-is-complex128array/dist'),A=require('@stdlib/array-base-assert-is-complex64array/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),C=require('@stdlib/strided-base-reinterpret-complex128/dist'),P=require('@stdlib/strided-base-reinterpret-complex64/dist');function b(r,e,s,u){var a,t,i;for(a=!0,t=u,i=0;i<r.length;i++)a===!0&&!r[i]&&(a=!1),e[t]=a,t+=s;return e}function j(r,e,s,u){var a,t,i,o,n,c,v;for(a=r.data,t=e.data,i=r.accessors[0],o=e.accessors[1],n=!0,c=u,v=0;v<a.length;v++)n===!0&&!i(a,v)&&(n=!1),o(t,c,n),c+=s;return t}function q(r,e,s,u){var a,t,i,o,n;for(t=e.accessors[1],a=e.data,i=!0,o=u,n=0;n<r.length;n+=2)i===!0&&!(r[n]||r[n+1])&&(i=!1),t(a,o,i),o+=s;return a}function k(r,e,s,u){var a=g(r),t=g(e);return a.accessorProtocol||t.accessorProtocol?(m(r)?q(C(r,0),t,s,u):A(r)?q(P(r,0),t,s,u):j(a,t,s,u),e):(b(r,e,s,u),e)}p.exports=k
});var y=f(function(E,d){
var O=require('@stdlib/array-base-filled/dist'),R=l();function w(r){var e=O(!0,r.length);return R(r,e,1,0)}d.exports=w
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=y(),z=l();x(h,"assign",z);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
