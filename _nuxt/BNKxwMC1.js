const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./article.Dq4jl0JB.css"])))=>i.map(i=>d[i]);
import{_ as h,o as e,c as n,a as o,b as a,F as p,f as y,g as D,h as N,w as k,r as u,t as f,i as E}from"./6QdekgmQ.js";import F from"./D6QSDzXz.js";import L from"./DgvYON6A.js";import"./DHWJ_qpE.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./BoDdvOOl.js";import"./0NIBGjZs.js";import"./BNe6uwck.js";import"./P_bklceD.js";const b={name:"DocNotFound"},w={class:"error-content"};function B(i,t,r,s,$,x){const _=y,d=D;return e(),n(p,null,[t[1]||(t[1]=o("div",{class:"error-header"},[o("h1",{class:"error-header-title"},"Not found"),o("span",null,"The page you are looking for does not exist.")],-1)),a(_,{color:"white",vspace:"20"}),o("div",w,[t[0]||(t[0]=o("h1",{class:"error-code-label"},"404",-1)),a(d,{src:"/dead-plum-250x250.png"})])],64)}const v=h(b,[["render",B]]);N(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);const I={components:{DocNotFound:v},mounted(){const i=new IntersectionObserver(t=>{t.forEach(r=>{const s=document.querySelector(`a[href="#${r.target.id}"]`);r.isIntersecting?s.classList.add("active"):s.classList.remove("active")})},{root:null,rootMargin:"0px",threshold:.1});document.querySelectorAll(".doc-content h1, .doc-content h2").forEach(t=>{i.observe(t)})}},C={key:0,class:"doc-container"},S={class:"doc-toc-container"},V={class:"doc-toc"},q=["href"],A=["href"],O={class:"doc-content"};function P(i,t,r,s,$,x){const _=F,d=v,g=L;return e(),n("main",null,[a(g,null,{default:k(({doc:l})=>[l?(e(),n("div",C,[o("div",S,[o("ol",V,[(e(!0),n(p,null,u(l.body.toc.links,(c,R)=>(e(),n("li",{key:c.id},[o("a",{href:`#${c.id}`},f(c.text),9,q),(e(!0),n(p,null,u(c.children,(m,T)=>(e(),n("ol",{key:m.id},[o("a",{href:`#${m.id}`},f(m.text),9,A)]))),128))]))),128))])]),o("div",O,[a(_,{value:l},null,8,["value"])])])):(e(),E(d,{key:1}))]),_:1})])}const X=h(I,[["render",P]]);export{X as default};
