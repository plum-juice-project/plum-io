const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BjGDTqZr.js","./D9z7xjJl.js","./entry.CbWj_SXS.css","./B3uLH62e.js","./YWBGpbHq.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{q as f,w as m,e as v,s as g,j as d,a as l,u as h}from"./B3uLH62e.js";import{H as _,e as y,I as C,M as w,N,O as P,J as $,L as r,n as j}from"./D9z7xjJl.js";import{h as c,u as T}from"./YWBGpbHq.js";const D=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(g())return(await y(()=>import("./BjGDTqZr.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:d(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=N(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&P("dd-navigation").value){const{navigation:n}=l();return{navigation:n}}const{data:s}=await h(`content-navigation-${c(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=$(),{navigation:a}=e,s=o=>r(j,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),b=E;export{b as default};
