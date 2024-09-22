import{_ as m,h as p,c as l,f as b,b as s,a as t,F as d,r as y,o as n,g as w}from"./B4V5o9BX.js";import{_ as h}from"./BeLAW7jg.js";import{u as x,q as k}from"./BYZrtTy2.js";import"./Cxvbl4L6.js";import"./BtcBme3n.js";const $={data(){return{items:[{title:"2013",content:"The international year of mathematics on planet Earth. The international year of mathematics on planet Earth",color:"#2785ab"},{title:"2014",content:"International Year of Family Farming",color:"#f89714"},{title:"2015",content:"International Year of Light and Light-Based Technologies",color:"#f65b78"}]}}};function P(o,e,i,a,f,g){return null}const u=m($,[["render",P]]),B={name:"Home",components:{ArticlePreview:h,Roadmap:u,Divider:p},head:{title:"Plum Juice"},setup(){const{data:o}=x("blog",async()=>{try{return await k("blog").sort({date:-1}).find()}catch(e){return console.error(e),[]}});return{articles:o}}},j={class:"home-collection"},D={class:"home-main4"},E={id:"roadmap",class:"home-roadmap"};function I(o,e,i,a,f,g){const r=p,_=h,v=u;return n(),l(d,null,[e[2]||(e[2]=b('<section class="home-hero" id="home"><div class="home-heading10"><h1 class="home-header11">It&#39;s not just a raspberrypi cluster</h1><p class="home-caption10"> It&#39;s like a fruit salad. </p></div><div class="home-buttons"><a href="https://github.com/plum-juice-project" class="styled-link">View on Github</a></div></section><section class="home-description10"><div class="home-container4"><div class="home-card11"><span class="home-bubble"></span><div class="home-content12"><h2 class="home-header13">What we aim?</h2><span class="home-description10">The goal of our project is to build a versatile and scalable infrastructure that can be used for various types of studies and analyses.</span><ul class="home-bullet-list"><li> Explore the world of High Performance Computing </li><li> Developing a flexible topology, adaptable to different needs and contexts. </li><li> Implementing distributed and parallel algorithms for scientific computing and deep learning. </li><li> Analyzing the network performance and hardware resources of the nodes. </li><li> Evaluating energy consumption to improve system efficiency. </li><li> Providing a platform for future research and experimentation. </li></ul></div></div><div class="home-description11"><span class="home-paragraph1"> We are a team of computer science students passionate about building and optimizing fast, distributed, and juicy architectures. </span><span class="home-paragraph2"><p><strong>PlumJuice</strong> is a small Raspberry Pi <strong>SLURM</strong> cluster created to experiment with different topologies, sharpen our parallel programming skills, and gain hands-on experience in setting up and maintaining a supercomputer.</p></span></div></div></section>',2)),s(r,{color:"white",vspace:"50"}),t("section",j,[e[0]||(e[0]=t("div",{class:"home-content14"},[t("div",{class:"home-heading11"},[t("h2",{class:"home-header15"},"Blog"),t("span",{class:"home-header16"}," Discover our work and how we maintain the cluster. ")])],-1)),t("div",D,[(n(!0),l(d,null,y(a.articles,c=>(n(),w(_,{key:c.slug,article:c},null,8,["article"]))),128))])]),s(r,{color:"white",vspace:"50"}),t("section",E,[e[1]||(e[1]=t("div",{class:"home-heading14"},[t("h2",{class:"home-header21"},"Roadmap"),t("span",{class:"home-header22"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ")],-1)),s(v)])],64)}const V=m(B,[["render",I]]);export{V as default};
