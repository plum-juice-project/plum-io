import _ from"./DDRCCt1u.js";import{_ as r,o,i as n,w as d,c,a as t,t as s,e as m}from"./Cy2Ufqd1.js";const h={name:"ArticlePreviewComponent",props:{article:{type:Object,default:()=>({title:"Coming Soon",description:"We need writers to write articles :p",image:""})},extended:{type:Boolean,default:!1}}},g={key:0,class:"home-card13"},u={class:"home-content15"},p={class:"home-title"},x={class:"home-caption"},f={key:1,class:"blog-card"},b={class:"blog-image"},k=["src"],y={class:"blog-content"},v={class:"blog-title"},w={class:"blog-caption"};function B(C,i,e,L,N,S){const a=_,l=m;return o(),n(l,{class:"h-auto",to:"/blog/"+e.article.title.replace(" ","_").toLowerCase()},{default:d(()=>[e.extended?(o(),c("div",f,[t("div",b,[e.article.image?(o(),c("img",{key:0,alt:"image",src:e.article.image},null,8,k)):(o(),n(a,{key:1,name:"icons:bx-image",size:"7em",style:{color:"rgba(0,0,0,0.3)"}}))]),t("div",y,[t("h2",v,s(e.article.title),1),t("span",w,s(e.article.description),1)])])):(o(),c("div",g,[i[0]||(i[0]=t("div",{class:"home-image16"},null,-1)),t("div",u,[t("span",p,s(e.article.title),1),t("h3",x,s(e.article.description),1)])]))]),_:1},8,["to"])}const A=r(h,[["render",B]]);export{A as _};