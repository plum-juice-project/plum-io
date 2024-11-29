import{_ as u,o,c as l,t as d,p as k,h as _,w as C,a as e,g as x,b as h,i as b,f as $,n as y,F as p,r as v}from"./D9z7xjJl.js";const T={name:"TeamTag",props:{role:{type:String,required:!0}},methods:{getColor(){return this.role.split(":").length==3?this.role.split(":")[2]:"#000"},getBgColor(){return this.role.split(":").length>1?this.role.split(":")[1]:"#FFCF77"},getName(){return this.role.split(":")[0]}}};function F(n,a,t,g,i,s){return o(),l("div",{class:"team-tag",style:k({backgroundColor:s.getBgColor(),color:s.getColor()})},d(s.getName()),5)}const N=u(T,[["render",F]]),S={name:"TeamCard",props:{member:{type:Object,required:!0}},mounted(){this.scrollText()},methods:{scrollText(){const n=this.$el.querySelector(".team-card-name"),a=n.scrollWidth,t=n.parentElement.clientWidth;a>t&&n.classList.add("scroll-text")}}},B={class:"team-card"},P={class:"team-card-header"},z={class:"team-card-content"},L={class:"team-card-name"},q={class:"team-card-github"},W={class:"team-card-nickname"};function w(n,a,t,g,i,s){const c=N,m=b,r=$,f=y;return o(),_(f,{class:"flex items-center justify-center",to:`https://github.com/${t.member.github_nickname}`,target:"_blank",rel:"noopener noreferrer"},{default:C(()=>[e("div",B,[e("div",P,[t.member.role.length>0?(o(),_(c,{key:0,class:"team-card-header-tag",role:t.member.role},null,8,["role"])):x("",!0),h(m,{class:"team-card-propic",src:`https://github.com/${t.member.github_nickname}.png`},null,8,["src"])]),e("div",z,[e("span",L,d(t.member.name),1),e("div",q,[h(r,{name:"icons:mdi-github",size:"21"}),e("span",W,d(t.member.github_nickname),1)])])])]),_:1},8,["to"])}const A=u(S,[["render",w]]),D=[{name:"Lorenzo Piarulli",role:"Founder:#bd1308:#fff",github_nickname:"lor3ny",description:""},{name:"Saverio Pasqualoni",role:"Co-Founder:#7a0901:#fff",github_nickname:"DaXor-0",description:""},{name:"Francesco Fazzari",role:"",github_nickname:"CiZ01",description:""},{name:"Ernesto Montada Romero",role:"SysAdmin",github_nickname:"n4y0n",description:""},{name:"Lachitha Perera",role:"",github_nickname:"ironmask2003",description:""},{name:"Alessio Olivieri",role:"",github_nickname:"Alessio-Olivieri",description:""},{name:"Simone Palmieri",role:"",github_nickname:"sudo-err",description:""}],E={data(){return{team:D}}},I={class:"title-header"},O={class:"title-header-content"},V={class:"team-header-img"},j={class:"content-body"},M={class:"team-list"};function J(n,a,t,g,i,s){const c=b,m=A;return o(),l(p,null,[e("section",I,[e("div",O,[a[0]||(a[0]=e("div",{class:"title-heading"},[e("h2",{class:"title-header-title"},"Team"),e("span",{class:"title-paragraph"}," Meet the gang! These are the cooks who made the Plum Juice. ")],-1)),e("div",V,[h(c,{src:"/drinkself-plum.png"})])])]),e("section",j,[e("div",M,[(o(!0),l(p,null,v(i.team,r=>(o(),_(m,{key:r.github_nickname,member:r},null,8,["member"]))),128))])])],64)}const X=u(E,[["render",J]]);export{X as default};
