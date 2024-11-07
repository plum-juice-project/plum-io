import{a8 as M,a9 as w,L as S,aa as v,ab as T,x as k,N as C,n as F,A as z,ac as $,ad as P}from"./DmgdjNHe.js";const H=Object.freeze({left:0,top:0,width:16,height:16}),V=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),N=Object.freeze({...H,...V});Object.freeze({...N,body:"",hidden:!1});function B(e,n){let s=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in n)s+=" "+o+'="'+n[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+s+">"+e+"</svg>"}const E=/(-?[0-9.]*[0-9]+[0-9.]*)/g,W=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function x(e,n,s){if(n===1)return e;if(s=s||100,typeof e=="number")return Math.ceil(e*n*s)/s;if(typeof e!="string")return e;const o=e.split(E);if(o===null||!o.length)return e;const t=[];let c=o.shift(),i=W.test(c);for(;;){if(i){const r=parseFloat(c);isNaN(r)?t.push(c):t.push(Math.ceil(r*n*s)/s)}else t.push(c);if(c=o.shift(),c===void 0)return t.join("");i=!i}}function _(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function D(e){return"data:image/svg+xml,"+_(e)}function G(e){return'url("'+D(e)+'")'}function U(e){const[n,s,o,t]=e;if(o!==t){const c=Math.max(o,t);return[n-(c-o)/2,s-(c-t)/2,c,c]}return e}const K=Object.freeze({width:null,height:null}),J=Object.freeze({...K,...V});function Q(e,n="defs"){let s="";const o=e.indexOf("<"+n);for(;o>=0;){const t=e.indexOf(">",o),c=e.indexOf("</"+n);if(t===-1||c===-1)break;const i=e.indexOf(">",c);if(i===-1)break;s+=e.slice(t+1,c).trim(),e=e.slice(0,o).trim()+e.slice(i+1)}return{defs:s,content:e}}function X(e,n){return e?"<defs>"+e+"</defs>"+n:n}function Y(e,n,s){const o=Q(e);return X(o.defs,n+o.content+s)}const Z=e=>e==="unset"||e==="undefined"||e==="none";function ee(e,n){const s={...N,...e},o={...J,...n},t={left:s.left,top:s.top,width:s.width,height:s.height};let c=s.body;[s,o].forEach(g=>{const f=[],q=g.hFlip,A=g.vFlip;let m=g.rotate;q?A?m+=2:(f.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),f.push("scale(-1 1)"),t.top=t.left=0):A&&(f.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),f.push("scale(1 -1)"),t.top=t.left=0);let h;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:h=t.height/2+t.top,f.unshift("rotate(90 "+h.toString()+" "+h.toString()+")");break;case 2:f.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:h=t.width/2+t.left,f.unshift("rotate(-90 "+h.toString()+" "+h.toString()+")");break}m%2===1&&(t.left!==t.top&&(h=t.left,t.left=t.top,t.top=h),t.width!==t.height&&(h=t.width,t.width=t.height,t.height=h)),f.length&&(c=Y(c,'<g transform="'+f.join(" ")+'">',"</g>"))});const i=o.width,r=o.height,l=t.width,a=t.height;let u,d;i===null?(d=r===null?"1em":r==="auto"?a:r,u=x(d,l/a)):(u=i==="auto"?l:i,d=r===null?x(u,a/l):r==="auto"?a:r);const y={},I=(g,f)=>{Z(f)||(y[g]=f.toString())};I("width",u),I("height",d);const L=[t.left,t.top,l,a];return y.viewBox=L.join(" "),{attributes:y,viewBox:L,body:c}}function te(e){const n={display:"inline-block",width:"1em",height:"1em"},s=e.varName;switch(e.pseudoSelector&&(n.content="''"),e.mode){case"background":s&&(n["background-image"]="var(--"+s+")"),n["background-repeat"]="no-repeat",n["background-size"]="100% 100%";break;case"mask":n["background-color"]="currentColor",s&&(n["mask-image"]=n["-webkit-mask-image"]="var(--"+s+")"),n["mask-repeat"]=n["-webkit-mask-repeat"]="no-repeat",n["mask-size"]=n["-webkit-mask-size"]="100% 100%";break}return n}function ne(e,n){const s={},o=n.varName,t=ee(e);let c=t.viewBox;c[2]!==c[3]&&(n.forceSquare?c=U(c):s.width=x("1em",c[2]/c[3]));const i=B(t.body.replace(/currentColor/g,n.color||"black"),{viewBox:`${c[0]} ${c[1]} ${c[2]} ${c[3]}`,width:`${c[2]}`,height:`${c[3]}`}),r=G(i);if(o)s["--"+o]=r;else switch(n.mode){case"background":s["background-image"]=r;break;case"mask":s["mask-image"]=s["-webkit-mask-image"]=r;break}return s}const b={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function se(e,n="expanded"){const s=[];for(let o=0;o<e.length;o++){const{selector:t,rules:c}=e[o];let r=(t instanceof Array?t.join(n==="compressed"?",":", "):t)+b.selectorStart[n],l=!0;for(const a in c)l||(r+=";"),r+=b.rule[n].replace("{key}",a)+c[a],l=!1;r+=b.selectorEnd[n],s.push(r)}return s.join(n==="compressed"?"":`
`)}function oe(e,n={}){const s=n.customise?n.customise(e.body):e.body,o=n.mode||(n.color||!s.includes("currentColor")?"background":"mask");let t=n.varName;t===void 0&&o==="mask"&&(t="svg");const c={...n,mode:o,varName:t};o==="background"&&delete c.varName;const i={...n.rules,...te(c),...ne({...N,...e,body:s},c)},r=n.iconSelector||".icon";return se([{selector:r,rules:i}],c.format)}let O=!1;function R(){if(O)return;const e=JSON.parse('[{"prefix":"icons","icons":{"bx-image":{"width":24,"height":24,"body":"<circle cx=\\"7.499\\" cy=\\"9.5\\" r=\\"1.5\\" fill=\\"currentColor\\"/><path fill=\\"currentColor\\" d=\\"m10.499 14l-1.5-2l-3 4h12l-4.5-6z\\"/><path fill=\\"currentColor\\" d=\\"M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m-16 14V6h16l.002 12z\\"/>"},"mdi-github":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2\\"/>"},"mdi-instagram":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3\\"/>"},"mdi-receipt-text-edit":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"m3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5v-.87L13.13 17H6v-2h9.13l2-2H6v-2h12v1.13l3-3V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2zM6 9V7h12v2zm7 13v-2.04l6.13-6.13l2.04 2.04L15.04 22zm8-9.97a.5.5 0 0 1 .53.12l1.32 1.32c.2.2.2.53 0 .72l-.98.98l-2.04-2.04l.98-.98l.02-.02c.05-.04.11-.08.17-.1\\"/>"}}}]');for(const n of e)M(n);O=!0}async function ce(e,n){if(!e)return null;R();const s=v(e);if(s)return s;const o=new Promise(t=>T([e],()=>t())).catch(()=>null);return n>0?await Promise.race([o,new Promise(t=>setTimeout(()=>t(),n))]):await o,v(e)}function j(e){const n=w().icon,s=(n.collections||[]).sort((o,t)=>t.length-o.length);return S(()=>{var i;const o=e(),t=o.startsWith(n.cssSelectorPrefix)?o.slice(n.cssSelectorPrefix.length):o,c=((i=n.aliases)==null?void 0:i[t])||t;if(!c.includes(":")){const r=s.find(l=>c.startsWith(l+"-"));return r?r+":"+c.slice(r.length+1):c}return c})}let p;function re(e){return e.replace(/([^\w-])/g,"\\$1")}function ie(){if(p)return p;p=new Set;const e=s=>{if(s=s.replace(/^:where\((.*)\)$/,"$1").trim(),s.startsWith("."))return s},n=s=>{if(s!=null&&s.length)for(const o of s){o!=null&&o.cssRules&&n(o.cssRules);const t=o==null?void 0:o.selectorText;if(typeof t=="string"){const c=e(t);c&&p.add(c)}}};for(const s of document.styleSheets)try{const o=s.cssRules||s.rules;n(o)}catch{}return p}const le=k({name:"NuxtIconCss",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(e){const n=C(),s=w().icon,o=S(()=>e.name?s.cssSelectorPrefix+e.name:"");function t(r){var u,d;if(!r)return;const l=v(r);if(l)return l;const a=(d=(u=n.payload)==null?void 0:u.data)==null?void 0:d[r];if(a)return $(r,a),a}const c=S(()=>"."+re(o.value));function i(r,l=!0){let a=c.value;s.cssWherePseudo&&(a=`:where(${a})`);const u=oe(r,{iconSelector:a,format:"compressed",customise:e.customize});return s.cssLayer&&l?`@layer ${s.cssLayer} { ${u} }`:u}{const r=ie();async function l(a){if(r.has(c.value))return;const u=document.createElement("style");u.textContent=i(a);const d=document.head.querySelector('style, link[rel="stylesheet"]');d?document.head.insertBefore(u,d):document.head.appendChild(u),r.add(c.value)}F(()=>e.name,()=>{if(r.has(c.value))return;const a=t(e.name);a?l(a):ce(e.name,s.fetchTimeout).then(u=>{u&&l(u)}).catch(()=>null)},{immediate:!0})}return()=>z("span",{class:["iconify",o.value,s.class]})}}),ae=k({name:"NuxtIconSvg",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},async setup(e,{slots:n}){const s=C(),o=w().icon,t=j(()=>e.name),c="i-"+t.value;if(t.value){const i=s.payload.data[c];i?$(t.value,i):R()}return()=>z(P,{icon:t.value,ssr:!0,class:o.class,customise:e.customize},n)}}),fe=k({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1}},async setup(e,{slots:n}){const s=C(),o=w().icon,t=j(()=>e.name),c=S(()=>{var l;return((l=s.vueApp)==null?void 0:l.component(t.value))||((e.mode||o.mode)==="svg"?ae:le)}),i=S(()=>{const l=e.size||o.size;return l?{fontSize:Number.isNaN(+l)?l:l+"px"}:null}),r=e.customize||o.customize;return()=>z(c.value,{...o.attrs,name:t.value,class:o.class,style:i.value,customize:r},n)}});export{fe as default};
