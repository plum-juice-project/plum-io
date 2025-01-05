import{_ as d,o as n,c as r,a as e,j as c,v as u,k as h,t as y,b as a,F as v,i as x,l as k,d as S}from"./CcBFWkLl.js";const w={name:"Form",data(){return{form:{name:"",email:"",message:""},submitted:!1,errmsg:""}},methods:{async handleSubmit(){const m={name:this.form.name,email:this.form.email,message:this.form.message};try{const i=await(await fetch("https://fabform.io/f/PMM4PBu",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(m)})).json();this.submitted=!!i.success}catch(s){console.error("Error submitting form:",s),this.errmsg="Error submitting form. Please try again later. 😥"}}}},E={class:"form-group"},$={class:"form-group"},j={class:"form-group"},F={key:1,class:"form-submit-message-container"},M={key:0,class:"form-submit-message-error"},N={key:1,class:"form-submit-message-success"};function P(m,s,i,p,t,l){return t.submitted?(n(),r("div",F,[t.errmsg?(n(),r("div",M,[e("span",null,y(t.errmsg),1)])):(n(),r("div",N,s[8]||(s[8]=[e("span",null," Your message has been sent successfully. Thank you! 😊 ",-1)])))])):(n(),r("form",{key:0,onSubmit:s[3]||(s[3]=h((...o)=>l.handleSubmit&&l.handleSubmit(...o),["prevent"])),method:"POST",class:"form-container"},[e("div",E,[s[4]||(s[4]=e("label",{for:"name",class:"form-label"},"Name:",-1)),c(e("input",{name:"name","onUpdate:modelValue":s[0]||(s[0]=o=>t.form.name=o),type:"text",id:"name",class:"form-input",placeholder:"Enter your name",required:""},null,512),[[u,t.form.name]])]),e("div",$,[s[5]||(s[5]=e("label",{for:"email",class:"form-label"},"Email:",-1)),c(e("input",{name:"email","onUpdate:modelValue":s[1]||(s[1]=o=>t.form.email=o),type:"email",id:"email",class:"form-input",placeholder:"Enter your email",required:""},null,512),[[u,t.form.email]])]),e("div",j,[s[6]||(s[6]=e("label",{for:"message",class:"form-label"},"Message:",-1)),c(e("textarea",{"onUpdate:modelValue":s[2]||(s[2]=o=>t.form.message=o),id:"message",class:"form-input",rows:"5",placeholder:"Your message",required:""},null,512),[[u,t.form.message]])]),s[7]||(s[7]=e("button",{type:"submit",class:"form-button"}," Submit ",-1))],32))}const f=d(w,[["render",P]]),T={name:"contacts",components:{Form:f}},V={class:"contacts-header"},q={class:"contacts-header-content"},B={class:"contacts-header-img"},O={class:"content-body contacts-content"},U={class:"contatcs-content-socials"},C={class:"mt-6 text-8xl w-full flex justify-center"},D={class:"contacts-content-header"},I={class:"contacts-content-form-content"};function Y(m,s,i,p,t,l){const o=x,_=k,g=S,b=f;return n(),r(v,null,[e("div",V,[s[1]||(s[1]=e("h1",{class:"contacts-header-title"},"Contacts",-1)),e("div",q,[s[0]||(s[0]=e("span",{class:"contacts-header-paragraph"}," If you have any questions, please feel free to contact us. ",-1)),e("div",B,[a(o,{src:"/computer-logo.png"})])])]),e("div",O,[e("div",U,[s[2]||(s[2]=e("h1",{class:"contacts-content-socials-title"},"Our socials",-1)),e("div",C,[a(_)])]),a(g,{color:"white",vspace:"30"}),e("div",D,[s[3]||(s[3]=e("h1",{class:"contacts-content-form-title"},"Contact form",-1)),e("div",I,[a(b)])])])],64)}const J=d(T,[["render",Y]]);export{J as default};
