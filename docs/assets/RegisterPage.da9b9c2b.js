import{Q as C,_ as I}from"./tops-and-roots_logo_001.850ca239.js";import{Q as b,a}from"./QCard.abcf77c5.js";import{_ as N,o as B,c as P,r as d,l as R,m as p,K as F,f as e,p as t,F as M,L as T,M as l,N as c,O as U,n as h,P as v,Q as i,R as m,S as w,V as E,W as L}from"./index.75f7d35a.js";import{Q as z,a as u}from"./QForm.3f1c137c.js";import{Q as A}from"./QTooltip.398127f1.js";import{u as D}from"./use-quasar.bbfd9b31.js";import"./use-timeout.c40815c2.js";import"./use-dark.8c822ac8.js";import"./use-key-composition.163099e7.js";import"./uid.42677368.js";import"./focus-manager.05708ea9.js";import"./position-engine.6bf23a01.js";import"./use-tick.c31efa11.js";import"./scroll.513f648b.js";const G=n=>(E("data-v-e0619a6e"),n=n(),L(),n),K={class:"text-primary"},O=G(()=>c("div",{class:"g_id_signin","data-type":"standard","data-size":"large","data-theme":"outline","data-text":"signup_with","data-shape":"rectangular","data-logo_alignment":"left","data-width":"255"},null,-1)),W="178464542195-gqrnk9eqe3sncd59is6eb0h5pp5f0p3f.apps.googleusercontent.com",$={__name:"RegisterPage",setup(n){B(()=>{const r=document.createElement("script");r.src="https://accounts.google.com/gsi/client",r.async=!1,document.body.appendChild(r)});const _="\u0412\u0435\u0440\u0448\u043A\u0438 \u0438 \u043A\u043E\u0440\u0435\u0448\u043A\u0438",f=!1,g=D(),Q=P(()=>g.screen.lt.sm),q=d(null),y=d(null),x=d(null),V=T().resolve({name:"user-login"}).path;function k(){g.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u0423\u0441\u043F\u0435\u0448\u043D\u043E"})}return(r,s)=>{const S=R("router-link");return p(),F(M,null,[e(b,{flat:"",class:"text-center q-mb-md custom-margin"},{default:t(()=>[e(a,{class:"q-py-xs"},{default:t(()=>[e(S,{to:"/",tabindex:"-1"},{default:t(()=>[e(C,{src:I,width:"80px",height:"80px",alt:l(_),"no-spinner":"","no-transition":""},null,8,["alt"])]),_:1})]),_:1}),e(a,{class:"q-py-xs"},{default:t(()=>[c("h1",K,U(l(_))+" \xA0\u2022\xA0 \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",1)]),_:1})]),_:1}),e(b,{flat:Q.value,class:"q-px-md q-pt-md q-pb-sm custom-width"},{default:t(()=>[e(z,{onSubmit:k},{default:t(()=>[l(f)?(p(),h(a,{key:0,class:"q-pt-md q-pb-sm"},{default:t(()=>[c("div",{id:"g_id_onload","data-client_id":W,"data-login_uri":"https://your.domain/your_login_endpoint","data-auto_prompt":"false"}),O]),_:1})):v("",!0),l(f)?(p(),h(a,{key:1,class:"q-pa-none text-center"},{default:t(()=>[i(" \u0438\u043B\u0438 ")]),_:1})):v("",!0),e(a,{class:"q-pt-sm q-pb-sm"},{default:t(()=>[e(u,{dense:"",outlined:"",type:"email",modelValue:q.value,"onUpdate:modelValue":s[0]||(s[0]=o=>q.value=o),label:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441"},{prepend:t(()=>[e(m,{name:"email",class:"q-mr-xs"})]),_:1},8,["modelValue"])]),_:1}),e(a,{class:"q-pb-sm q-pt-sm"},{default:t(()=>[e(u,{dense:"",outlined:"",type:"password",modelValue:y.value,"onUpdate:modelValue":s[1]||(s[1]=o=>y.value=o),label:"\u041F\u0430\u0440\u043E\u043B\u044C"},{prepend:t(()=>[e(m,{name:"password",class:"q-mr-xs"})]),_:1},8,["modelValue"])]),_:1}),e(a,{class:"q-pb-md q-pt-sm"},{default:t(()=>[e(u,{dense:"",outlined:"",type:"password",modelValue:x.value,"onUpdate:modelValue":s[2]||(s[2]=o=>x.value=o),label:"\u041F\u043E\u0432\u0442\u043E\u0440 \u043F\u0430\u0440\u043E\u043B\u044F"},{prepend:t(()=>[e(m,{name:"password",class:"q-mr-xs"})]),_:1},8,["modelValue"])]),_:1}),e(a,{class:"q-py-md text-center"},{default:t(()=>[e(w,{disable:"","no-caps":"",label:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442",type:"submit",color:"primary",class:"full-width q-mb-sm"},{default:t(()=>[e(A,{class:"bg-negative"},{default:t(()=>[i(" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 ")]),_:1})]),_:1}),i(" \u0438\u043B\u0438 "),e(w,{"no-caps":"",flat:"",dense:"",label:"\u0412\u043E\u0439\u0442\u0438",type:"a",to:l(V),color:"primary",class:"full-width q-mt-xs"},null,8,["to"])]),_:1})]),_:1})]),_:1},8,["flat"])],64)}}};var pe=N($,[["__scopeId","data-v-e0619a6e"]]);export{pe as default};
