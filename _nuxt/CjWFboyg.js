const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./IVq8q4tA.js","./B4V5o9BX.js","./entry.D8otgEpH.css","./BYZrtTy2.js","./BtcBme3n.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{q as m,w as f,e as v,s as l,j as d,a as g,u as y}from"./BYZrtTy2.js";import{k as h,D as _,E as w,G as C,H as P,l as $,I as x,J as N,m as E,q as p,e as T}from"./B4V5o9BX.js";import{h as c,u as j}from"./BtcBme3n.js";const D=async t=>{const{content:e}=h().public;typeof(t==null?void 0:t.params)!="function"&&(t=m(t));const n=t.params(),o=e.experimental.stripQueryParameters?f(`/navigation/${`${c(n)}.${e.integrity}`}/${v(n)}.json`):f(`/navigation/${c(n)}.${e.integrity}.json`);if(l())return(await _(()=>import("./IVq8q4tA.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(s=>s.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:d(n),previewToken:j().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},S="$s";function b(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=w(),s=C(r.payload.state,a);if(s.value===void 0&&o){const i=o();if(P(i))return r.payload.state[a]=i,i;s.value=i}return s}const R=$({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=x(t),n=N(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:o}=await y(`content-navigation-${c(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=E(),{navigation:n}=t,o=s=>p(T,{to:s._path},()=>s.title),a=(s,i)=>p("ul",i?{"data-level":i}:null,s.map(u=>u.children?p("li",null,[o(u),a(u.children,i+1)]):p("li",null,o(u)))),r=s=>a(s,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),O=R;export{O as default};
