const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./article.D5QXXU0b.css"])))=>i.map(i=>d[i]);
import{_ as $,o as n,c as s,a as t,b as c,F as p,d as y,e as w,w as f,r as v,t as l,f as N}from"./D9z7xjJl.js";import E from"./Cdiw809J.js";import F from"./Dh2-iIVS.js";import"./LijTNul6.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./YWBGpbHq.js";import"./DWkKvmHg.js";import"./B3uLH62e.js";const L={name:"DocNotFound"};function A(a,e,o,r,i,h){const m=y;return n(),s(p,null,[e[0]||(e[0]=t("div",{class:"error-header"},[t("h1",{class:"error-header-title"},"Not found"),t("span",null,"The page you are looking for does not exist.")],-1)),c(m,{color:"white",vspace:"20"}),e[1]||(e[1]=t("div",{class:"error-content"},[t("h1",{class:"error-code-label"},"404")],-1))],64)}const I=$(L,[["render",A]]);w(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);const M={afterMount(){if(!doc)return;const a=new IntersectionObserver(e=>{e.forEach(o=>{const r=document.querySelector(`a[href="#${o.target.id}"]`);if(o.isIntersecting)try{r.classList.add("active")}catch{}else try{r.classList.remove("active")}catch{}})},{root:null,rootMargin:"0px",threshold:.1});document.querySelectorAll(".doc-content h1, .doc-content h2").forEach(e=>{a.observe(e)})},methods:{dateParser(a){const[e,o,r]=a.split("T")[0].split("-");return`${r} ${["January","February","March","April","May","June","July","August","September","October","November","December"][o-1]} ${e}`}}},P={class:"doc-container"},S={class:"doc-toc-container"},B={class:"doc-toc"},C=["href"],J=["href"],O={class:"doc-content"},T={class:"doc-content-date"},V={class:"plum-article-title"};function k(a,e,o,r,i,h){const m=N,x=y,g=E,b=I,D=F;return n(),s("main",null,[c(D,null,{default:f(({doc:_})=>[t("div",P,[t("div",S,[t("ol",B,[(n(!0),s(p,null,v(_.body.toc.links,(d,q)=>(n(),s("li",{key:d.id},[t("a",{href:`#${d.id}`},l(d.text),9,C),(n(!0),s(p,null,v(d.children,(u,R)=>(n(),s("ol",{key:u.id},[t("a",{href:`#${u.id}`},l(u.text),9,J)]))),128))]))),128))])]),t("div",O,[t("div",T,[c(m,{name:"icons:mdi-receipt-text-edit",style:{opacity:"0.7","margin-right":"0.6em"}}),t("span",null,l(h.dateParser(_.date)),1)]),c(x,{color:"white",width:"100%",vspace:"40"}),t("span",V,l(_.title),1),c(g,{class:"mt-10",value:_},null,8,["value"])])])]),"not-found":f(()=>[c(b)]),_:1})])}const Y=$(M,[["render",k]]);export{Y as default};