import{_ as b,c as n,a as o,b as l,t as m,j as u,F as c,r as h,o as e,i as v,g as f}from"./BabLlYqm.js";import y from"./Cg95cswL.js";import{_ as i}from"./D-9XHs1y.js";import{u as w,q as x}from"./CAp0HAzN.js";import"./BiyqOr7U.js";const k={components:{ArticlePreview:i},data(){return{sorting:"date",limit:10,offset:0,articles:[]}},setup(){const{data:a}=w("blog",async()=>{try{return await x("blog").sort({date:-1}).find()}catch(t){return console.error(t),[]}});return{articles:a}}},B={class:"blog-header"},N={class:"blog-header-content"},A={class:"blog-heading2"},I={class:"blog-content2"},V={class:"blog-body"},q={class:"blog-sort-container"},C={class:"blog-sort-label-container"},D={class:"blog-sort-label"},F={class:"blog-list"},L={key:0,class:"blog-list-empty"};function P(a,t,Y,s,d,$){const _=f,g=y,p=i;return e(),n(c,null,[o("section",B,[o("div",N,[t[0]||(t[0]=o("div",{class:"blog-heading11"},[o("h2",{class:"blog-header-title"},"Blog"),o("p",{class:"blog-paragraph"}," Yes, we have a blog. It's a place where we share our thoughts, ideas, and experiences. ")],-1)),o("div",A,[o("div",I,[l(_,{src:"/double-plum.png",alt:""})])])])]),o("section",V,[o("div",q,[o("div",C,[o("span",D," sorted by: "+m(d.sorting),1),l(g,{class:"blog-sort-icon",name:"ep:arrow-down-bold",size:"1em",style:{color:"black"}})])]),o("div",F,[s.articles&&!s.articles.length?(e(),n("div",L,t[1]||(t[1]=[o("span",null," Loading... ",-1)]))):u("",!0),(e(!0),n(c,null,h(s.articles,r=>(e(),v(p,{key:r.id,article:r,extended:!0},null,8,["article"]))),128))]),t[2]||(t[2]=o("div",{class:"blog-sort-container blog-list-loadmore-container styled-link unavaible"},[o("span",null," You have reached the end 🤯 ")],-1))])],64)}const H=b(k,[["render",P]]);export{H as default};
