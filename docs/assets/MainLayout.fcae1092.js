import{Q as V,a as b}from"./QLayout.06ed91cb.js";import{Q as x,u as A,_ as M,A as B,a as T}from"./MainHeader.387db707.js";import{_ as Q,ak as F,c as N,m as y,K as k,f as a,p as i,N as l,al as U,O as c,M as u,r as s,u as L,w as $,k as q,o as O,l as I,n as Y}from"./index.75f7d35a.js";import{_ as j}from"./MainTabs.d9015899.js";import{Q as z,_ as E}from"./tops-and-roots_logo_001.850ca239.js";import"./scroll.513f648b.js";import"./QSeparator.3927273f.js";import"./use-dark.8c822ac8.js";import"./rtl.2beb9dd5.js";import"./use-tick.c31efa11.js";import"./use-timeout.c40815c2.js";import"./uid.42677368.js";const H={class:"q-pa-lg"},K={class:"footer-logo column items-center"},P={class:"app-name"},R={class:"copyrights"},G={__name:"MainFooter",props:{color:{type:String,required:!0},sectionName:{type:String,required:!0}},setup(f){F(e=>({"563e983c":e.textColor}));const o=f,t="\u0412\u0435\u0440\u0448\u043A\u0438 \u0438 \u043A\u043E\u0440\u0435\u0448\u043A\u0438",m="0.1",_=()=>new Date().getFullYear(),p=N(()=>"text-"+o.color);return(e,r)=>(y(),k("footer",H,[a(x,{class:"justify-center my-layout"},{default:i(()=>[l("div",K,[l("div",{class:U(["app-section-name",p.value])},c(o.sectionName),3),a(z,{src:E,width:"100px",height:"100px",alt:u(t)},null,8,["alt"]),l("div",P,c(u(t)),1),l("div",R," \u0412\u0435\u0440\u0441\u0438\u044F "+c(u(m))+", "+c(_())+" \xA9 ",1)])]),_:1})]))}};var J=Q(G,[["__scopeId","data-v-90818e56"]]);const ce={__name:"MainLayout",setup(f){const o=s(!1),t=s(!1),m=()=>o.value=!o.value,_=()=>t.value=!t.value,p="\u0412\u0435\u0440\u0448\u043A\u0438 \u0438 \u043A\u043E\u0440\u0435\u0448\u043A\u0438",e=L(),r=s(""),v=s(""),g=s(!1),S=s([]),h=N(()=>"bg-"+v.value);function w(){r.value=e.getAppSectionName,v.value=e.getAppSectionColor,g.value=e.hasAppSectionTabs,S.value=e.getAppSectionTabs}return $(()=>e.appSectionData,(C,n)=>{w()}),q(()=>{e.updateLayoutName("MainLayout")}),O(()=>{w(),A(()=>({title:r.value+" | "+p}))}),(C,n)=>{const D=I("router-view");return y(),Y(V,{view:"hHh lpR fFf"},{default:i(()=>[a(M,{appSectionBgColor:h.value,appName:u(p),appSectionName:r.value,toggleAppSectionDrawer:m,toggleUserDrawer:_},{tabs:i(()=>[a(j,{hasTabs:g.value,tabs:S.value},null,8,["hasTabs","tabs"])]),_:1},8,["appSectionBgColor","appName","appSectionName"]),a(B,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=d=>o.value=d)},null,8,["modelValue"]),a(T,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=d=>t.value=d)},null,8,["modelValue"]),a(b,{class:"my-layout"},{default:i(()=>[a(D)]),_:1}),a(J,{color:v.value,sectionName:r.value},null,8,["color","sectionName"])]),_:1})}}};export{ce as default};
