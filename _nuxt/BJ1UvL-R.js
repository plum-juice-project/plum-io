import{G as o,E as i,h,L as u,o as l,g as m,B as r,a7 as d,X as g,I as f,Y as p}from"./CZ2tqTO5.js";const w=o({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const n=i().public.mdc.useNuxtImage?h:"img",t=e,c=u(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=g(f(i().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return p(s,t.src)}return t.src});return(a,s)=>(l(),m(d(r(n)),{src:r(c),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{w as default};
