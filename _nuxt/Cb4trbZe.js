import{_ as m,o as s,c as n,F as p,r as u,b as c,w as l,a as e,t as a,h,e as g,m as f}from"./WPcax08Y.js";const k={name:"Credits",props:{authors:{type:Array,required:!0}}},b={class:"credits-container"},x={class:"credits-card-content"},$={class:"credits-card-name"},v={class:"credits-card-content-gh"},y={class:"credits-card-nickname"};function N(B,C,o,w,F,I){const r=h,i=g,_=f;return s(),n("div",b,[(s(!0),n(p,null,u(o.authors,(t,d)=>(s(),n("div",{key:d,class:"credits-card"},[c(_,{to:`https://github.com/${t.github_nickname}`,target:"_blank",rel:"noopener noreferrer"},{default:l(()=>[c(r,{class:"credits-card-propic",src:`https://github.com/${t.github_nickname}.png`},null,8,["src"]),e("div",x,[e("span",$,a(t.name),1),e("div",v,[c(i,{name:"icons:mdi-github",size:"24"}),e("span",y,a(t.github_nickname),1)])])]),_:2},1032,["to"])]))),128))])}const V=m(k,[["render",N]]);export{V as default};
