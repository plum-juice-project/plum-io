import{u}from"./BD7RpG4A.js";import{q as g}from"./oiFomBwm.js";import{A as f}from"./Dai1Yq4n.js";import{c as i,l as d,b as v,a,u as t,F as l,r as p,f as m,o,D as b,g as y}from"./d9-VXocy.js";import"./BLMw4VjQ.js";const w={class:"home-collection"},k={class:"home-main4"},c=4,V={__name:"index",setup(_){let e=[];const{data:h,error:x,refresh:A}=u("blog-preview",async()=>{try{return await g("blog").sort({date:-1}).limit(c).find()}catch(n){return console.error(n),[]}});return e=h,(n,s)=>(o(),i(l,null,[s[2]||(s[2]=d('<section class="home-hero" id="home"><div class="home-heading10"><h1 class="home-header11">It&#39;s not just a raspberry pi cluster</h1><p class="home-caption10">It&#39;s like a fruit salad.</p></div><div class="home-buttons"><a href="https://github.com/plum-juice-project" target="_blank" rel="noopener noreferrer" class="styled-link">View on Github</a></div></section><section class="home-description10"><div class="home-container4"><div class="home-card11"><span class="home-bubble"></span><div class="home-content12"><h2 class="home-header13">What we are aiming for?</h2><span class="home-description10">The goal of our project is to build a versatile and scalable infrastructure that can be used for various types of studies and analyses.</span><ul class="home-bullet-list"><li>Explore the world of High Performance Computing</li><li> Developing a flexible topology, adaptable to different needs and contexts. </li><li> Implementing distributed and parallel algorithms for scientific computing and deep learning. </li><li> Analyzing the network performance and hardware resources of the nodes. </li><li>Providing a platform for future research and experimentation.</li></ul></div></div><div class="home-description11"><span class="home-paragraph1"> We are a team of computer science students passionate about building and optimizing fast, distributed, and juicy architectures. </span><span class="home-paragraph2"><p><strong>PlumJuice</strong> is a small Raspberry Pi <strong>SLURM</strong> cluster created to experiment with different topologies, sharpen our parallel programming skills, and gain hands-on experience in setting up and maintaining a supercomputer. </p></span></div></div></section>',2)),v(b,{color:"white",vspace:"50"}),a("section",w,[s[1]||(s[1]=d('<div class="home-content14"><div class="home-heading11"><h2 class="home-header15">Blog</h2><span class="home-header16"> Discover our work and how we maintain the cluster. </span></div></div><div class="home-blog-divider-container"></div>',2)),a("div",k,[t(e)?(o(!0),i(l,{key:0},p(t(e),r=>(o(),y(f,{key:r.slug,article:r},null,8,["article"]))),128)):m("",!0),t(e)&&t(e).length<c?(o(!0),i(l,{key:1},p(c-t(e).length,r=>(o(),i("div",{key:r},s[0]||(s[0]=[a("div",{class:"home-card13"},[a("div",{class:"home-content15"},[a("span",{class:"home-title"},"Coming Soon..."),a("h3",{class:"home-caption"},"We need writers to write articles :p")])],-1)])))),128)):m("",!0)])])],64))}};export{V as default};
