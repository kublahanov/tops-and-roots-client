import{a as l,Q as c}from"./QCard.abcf77c5.js";import{Q as p}from"./QSeparator.3927273f.js";import{Q as o}from"./QTable.6069e495.js";import{Q as u}from"./QPage.dc17b40f.js";import{U as f,m as _,n as b,p as e,f as a,M as h,N as t,O as n}from"./index.75f7d35a.js";import"./use-dark.8c822ac8.js";import"./rtl.2beb9dd5.js";import"./scroll.513f648b.js";import"./use-key-composition.163099e7.js";import"./uid.42677368.js";import"./focus-manager.05708ea9.js";import"./position-engine.6bf23a01.js";import"./use-tick.c31efa11.js";import"./use-timeout.c40815c2.js";const y=t("div",{class:"text-h6"},"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u043B\u0443\u0431",-1),g=t("div",{class:"text-subtitle2"}," \u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0441\u0435\u0431\u0435 \u0434\u0440\u0443\u0437\u0435\u0439 \u043F\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u043C... ",-1),w="\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0440\u0443\u0437\u0435\u0439",s="\u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0434\u0440\u0443\u0437\u0435\u0439 \u043F\u0443\u0441\u0442",i="\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043F\u0443\u0441\u0442",F={__name:"ClubPage",setup(x){const r=[{name:"id",field:"id",label:"ID",type:"number",align:"left",style:"width: 10%",headerClasses:"myClass"},{name:"name",field:"name",label:"\u0418\u043C\u044F",headerClasses:"th-name"},{name:"surname",field:"surname",label:"\u0424\u0430\u043C\u0438\u043B\u0438\u044F",headerClasses:"th-surname"}],d=f.getUserFriends(),m=[];return(C,Q)=>(_(),b(u,null,{default:e(()=>[a(c,{bordered:""},{default:e(()=>[a(l,null,{default:e(()=>[y,g]),_:1}),a(p,{inset:""}),a(l,null,{default:e(()=>[a(o,{columns:r,rows:h(d),"row-key":"name","hide-pagination":"",flat:"",bordered:"",separator:"cell",title:w,"no-data-label":s,"no-results-label":i},{"no-data":e(()=>[t("div",{class:"full-width row flex-center q-py-lg"},[t("span",{class:"text-body1"},n(s))])]),_:1},8,["rows"])]),_:1}),a(l,null,{default:e(()=>[a(o,{columns:r,rows:m,"row-key":"name","hide-pagination":"",flat:"",bordered:"",separator:"cell",title:"\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0440\u0443\u0437\u0435\u0439 2","no-data-label":s,"no-results-label":i},{"no-data":e(()=>[t("div",{class:"full-width row flex-center q-py-lg"},[t("span",{class:"text-body1"},n(s))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{F as default};