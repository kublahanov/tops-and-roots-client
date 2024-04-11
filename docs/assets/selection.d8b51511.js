import{c as f,h as m,g as A,q as ye,E as H,G as pe,H as ke,I as ue,J as we,r as Y,K as F,L as xe,M as qe,N as _,O as Ee,P as Se,Q as se,R as W,w as G,o as $e,S as Le}from"./index.6c8298e1.js";import{c as X,h as Re,a as V,b as Te}from"./render.ca61af5d.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},ce={size:String};function de(e,t=Q){return f(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const J="0 0 24 24",Z=e=>e,I=e=>`ionicons ${e}`,fe={"mdi-":e=>`mdi ${e}`,"icon-":Z,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":I,"ion-ios":I,"ion-logo":I,"iconfont ":Z,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ve={o_:"-outlined",r_:"-round",s_:"-sharp"},me={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ce=new RegExp("^("+Object.keys(fe).join("|")+")"),Be=new RegExp("^("+Object.keys(ve).join("|")+")"),ee=new RegExp("^("+Object.keys(me).join("|")+")"),_e=/^[Mm]\s?[-+]?\.?\d/,Pe=/^img:/,Me=/^svguse:/,Oe=/^ion-/,Ae=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var te=X({name:"QIcon",props:{...ce,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=A(),n=de(e),o=f(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),v=f(()=>{let s,r=e.name;if(r==="none"||!r)return{none:!0};if(l.iconMapFn!==null){const u=l.iconMapFn(r);if(u!==void 0)if(u.icon!==void 0){if(r=u.icon,r==="none"||!r)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(_e.test(r)===!0){const[u,q=J]=r.split("|");return{svg:!0,viewBox:q,nodes:u.split("&&").map(i=>{const[k,h,w]=i.split("@@");return m("path",{style:h,d:k,transform:w})})}}if(Pe.test(r)===!0)return{img:!0,src:r.substring(4)};if(Me.test(r)===!0){const[u,q=J]=r.split("|");return{svguse:!0,src:u.substring(7),viewBox:q}}let b=" ";const p=r.match(Ce);if(p!==null)s=fe[p[1]](r);else if(Ae.test(r)===!0)s=r;else if(Oe.test(r)===!0)s=`ionicons ion-${l.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(ee.test(r)===!0){s="notranslate material-symbols";const u=r.match(ee);u!==null&&(r=r.substring(6),s+=me[u[1]]),b=r}else{s="notranslate material-icons";const u=r.match(Be);u!==null&&(r=r.substring(2),s+=ve[u[1]]),b=r}return{cls:s,content:b}});return()=>{const s={class:o.value,style:n.value,"aria-hidden":"true",role:"presentation"};return v.value.none===!0?m(e.tag,s,Re(t.default)):v.value.img===!0?m(e.tag,s,V(t.default,[m("img",{src:v.value.src})])):v.value.svg===!0?m(e.tag,s,V(t.default,[m("svg",{viewBox:v.value.viewBox||"0 0 24 24"},v.value.nodes)])):v.value.svguse===!0?m(e.tag,s,V(t.default,[m("svg",{viewBox:v.value.viewBox},[m("use",{"xlink:href":v.value.src})])])):(v.value.cls!==void 0&&(s.class+=" "+v.value.cls),m(e.tag,s,V(t.default,[v.value.content])))}}});const je={size:{type:[Number,String],default:"1em"},color:String};function ze(e){return{cSize:f(()=>e.size in Q?`${Q[e.size]}px`:e.size),classes:f(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ve=X({name:"QSpinner",props:{...je,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:l}=ze(e);return()=>m("svg",{class:l.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[m("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function U(e,t){const l=e.style;for(const n in t)l[n]=t[n]}function Ke(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=ye(e);if(t)return t.$el||t}function Ne(e,t=250){let l=!1,n;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},t),n=e.apply(this,arguments)),n}}function ne(e,t,l,n){l.modifiers.stop===!0&&ue(e);const o=l.modifiers.color;let v=l.modifiers.center;v=v===!0||n===!0;const s=document.createElement("span"),r=document.createElement("span"),b=we(e),{left:p,top:u,width:q,height:i}=t.getBoundingClientRect(),k=Math.sqrt(q*q+i*i),h=k/2,w=`${(q-k)/2}px`,c=v?w:`${b.left-p-h}px`,x=`${(i-k)/2}px`,d=v?x:`${b.top-u-h}px`;r.className="q-ripple__inner",U(r,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${c},${d},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${o?" text-"+o:""}`,s.setAttribute("dir","ltr"),s.appendChild(r),t.appendChild(s);const E=()=>{s.remove(),clearTimeout(B)};l.abort.push(E);let B=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${w},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,B=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,B=setTimeout(()=>{s.remove(),l.abort.splice(l.abort.indexOf(E),1)},275)},250)},50)}function le(e,{modifiers:t,value:l,arg:n}){const o=Object.assign({},e.cfg.ripple,t,l);e.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||n,keyCodes:[].concat(o.keyCodes||13)}}var De=Te({name:"ripple",beforeMount(e,t){const l=t.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const n={cfg:l,enabled:t.value!==!1,modifiers:{},abort:[],start(o){n.enabled===!0&&o.qSkipRipple!==!0&&o.type===(n.modifiers.early===!0?"pointerdown":"click")&&ne(o,e,n,o.qKeyEvent===!0)},keystart:Ne(o=>{n.enabled===!0&&o.qSkipRipple!==!0&&H(o,n.modifiers.keyCodes)===!0&&o.type===`key${n.modifiers.early===!0?"down":"up"}`&&ne(o,e,n,!0)},300)};le(n,t),e.__qripple=n,pe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const l=e.__qripple;l!==void 0&&(l.enabled=t.value!==!1,l.enabled===!0&&Object(t.value)===t.value&&le(l,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(l=>{l()}),ke(t,"main"),delete e._qripple)}});const ge={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ie=Object.keys(ge),He={align:{type:String,validator:e=>Ie.includes(e)}};function We(e){return f(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ge[t]}`})}function he(e){return e.appContext.config.globalProperties.$router!==void 0}function be(e){return e.isUnmounted===!0||e.isDeactivated===!0}function re(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ie(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qe(e,t){for(const l in t){const n=t[l],o=e[l];if(typeof n=="string"){if(n!==o)return!1}else if(Array.isArray(o)===!1||o.length!==n.length||n.some((v,s)=>v!==o[s]))return!1}return!0}function ae(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((l,n)=>l===t[n]):e.length===1&&e[0]===t}function Ue(e,t){return Array.isArray(e)===!0?ae(e,t):Array.isArray(t)===!0?ae(t,e):e===t}function Fe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const l in e)if(Ue(e[l],t[l])===!1)return!1;return!0}const Xe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ye({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const l=A(),{props:n,proxy:o,emit:v}=l,s=he(l),r=f(()=>n.disable!==!0&&n.href!==void 0),b=t===!0?f(()=>s===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):f(()=>s===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),p=f(()=>b.value===!0?d(n.to):null),u=f(()=>p.value!==null),q=f(()=>r.value===!0||u.value===!0),i=f(()=>n.type==="a"||q.value===!0?"a":n.tag||e||"div"),k=f(()=>r.value===!0?{href:n.href,target:n.target}:u.value===!0?{href:p.value.href,target:n.target}:{}),h=f(()=>{if(u.value===!1)return-1;const{matched:g}=p.value,{length:S}=g,L=g[S-1];if(L===void 0)return-1;const T=o.$route.matched;if(T.length===0)return-1;const C=T.findIndex(ie.bind(null,L));if(C!==-1)return C;const K=re(g[S-2]);return S>1&&re(L)===K&&T[T.length-1].path!==K?T.findIndex(ie.bind(null,g[S-2])):C}),w=f(()=>u.value===!0&&h.value!==-1&&Qe(o.$route.params,p.value.params)),c=f(()=>w.value===!0&&h.value===o.$route.matched.length-1&&Fe(o.$route.params,p.value.params)),x=f(()=>u.value===!0?c.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":w.value===!0?` ${n.activeClass}`:"":"");function d(g){try{return o.$router.resolve(g)}catch{}return null}function E(g,{returnRouterError:S,to:L=n.to,replace:T=n.replace}={}){if(n.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||n.target==="_blank")return Promise.resolve(!1);g.preventDefault();const C=o.$router[T===!0?"replace":"push"](L);return S===!0?C:C.then(()=>{}).catch(()=>{})}function B(g){if(u.value===!0){const S=L=>E(g,L);v("click",g,S),g.defaultPrevented!==!0&&S()}else v("click",g)}return{hasRouterLink:u,hasHrefLink:r,hasLink:q,linkTag:i,resolvedLink:p,linkIsActive:w,linkIsExactActive:c,linkClass:x,linkAttrs:k,getLink:d,navigateToRouterLink:E,navigateOnClick:B}}const oe={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ge={xs:8,sm:10,md:14,lg:20,xl:24},Je=["button","submit","reset"],Ze=/[^\s]\/[^\s]/,et=["flat","outline","push","unelevated"],tt=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,nt={...ce,...Xe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...et.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...He.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function lt(e){const t=de(e,Ge),l=We(e),{hasRouterLink:n,hasLink:o,linkTag:v,linkAttrs:s,navigateOnClick:r}=Ye({fallbackTag:"button"}),b=f(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(x=>x in oe?oe[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):c}),p=f(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),u=f(()=>e.disable!==!0&&e.loading!==!0),q=f(()=>u.value===!0?e.tabindex||0:-1),i=f(()=>tt(e,"standard")),k=f(()=>{const c={tabindex:q.value};return o.value===!0?Object.assign(c,s.value):Je.includes(e.type)===!0&&(c.type=e.type),v.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),n.value!==!0&&Ze.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),h=f(()=>{let c;e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${p.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${i.value} q-btn--${x}`+(c!==void 0?" "+c:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),w=f(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:b,innerClasses:w,attributes:k,hasLink:o,linkTag:v,navigateOnClick:r,isActionable:u}}const{passiveCapture:$}=Se;let P=null,M=null,O=null;var ot=X({name:"QBtn",props:{...nt,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:l}){const{proxy:n}=A(),{classes:o,style:v,innerClasses:s,attributes:r,hasLink:b,linkTag:p,navigateOnClick:u,isActionable:q}=lt(e),i=Y(null),k=Y(null);let h=null,w,c=null;const x=f(()=>e.label!==void 0&&e.label!==null&&e.label!==""),d=f(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:b.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),E=f(()=>({center:e.round})),B=f(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),g=f(()=>{if(e.loading===!0)return{onMousedown:z,onTouchstart:z,onClick:z,onKeydown:z,onKeyup:z};if(q.value===!0){const a={onClick:L,onKeydown:T,onMousedown:K};if(n.$q.platform.has.touch===!0){const y=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${y}`]=C}return a}return{onClick:_}}),S=f(()=>({ref:i,class:"q-btn q-btn-item non-selectable no-outline "+o.value,style:v.value,...r.value,...g.value}));function L(a){if(i.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const y=document.activeElement;if(e.type==="submit"&&y!==document.body&&i.value.contains(y)===!1&&y.contains(i.value)===!1){i.value.focus();const N=()=>{document.removeEventListener("keydown",_,!0),document.removeEventListener("keyup",N,$),i.value!==null&&i.value.removeEventListener("blur",N,$)};document.addEventListener("keydown",_,!0),document.addEventListener("keyup",N,$),i.value.addEventListener("blur",N,$)}}u(a)}}function T(a){i.value!==null&&(l("keydown",a),H(a,[13,32])===!0&&M!==i.value&&(M!==null&&j(),a.defaultPrevented!==!0&&(i.value.focus(),M=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),i.value.addEventListener("blur",R,$)),_(a)))}function C(a){i.value!==null&&(l("touchstart",a),a.defaultPrevented!==!0&&(P!==i.value&&(P!==null&&j(),P=i.value,h=a.target,h.addEventListener("touchcancel",R,$),h.addEventListener("touchend",R,$)),w=!0,c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,w=!1},200)))}function K(a){i.value!==null&&(a.qSkipRipple=w===!0,l("mousedown",a),a.defaultPrevented!==!0&&O!==i.value&&(O!==null&&j(),O=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,$)))}function R(a){if(i.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===i.value)){if(a!==void 0&&a.type==="keyup"){if(M===i.value&&H(a,[13,32])===!0){const y=new MouseEvent("click",a);y.qKeyEvent=!0,a.defaultPrevented===!0&&Ee(y),a.cancelBubble===!0&&ue(y),i.value.dispatchEvent(y),_(a),a.qKeyEvent=!0}l("keyup",a)}j()}}function j(a){const y=k.value;a!==!0&&(P===i.value||O===i.value)&&y!==null&&y!==document.activeElement&&(y.setAttribute("tabindex",-1),y.focus()),P===i.value&&(h!==null&&(h.removeEventListener("touchcancel",R,$),h.removeEventListener("touchend",R,$)),P=h=null),O===i.value&&(document.removeEventListener("mouseup",R,$),O=null),M===i.value&&(document.removeEventListener("keyup",R,!0),i.value!==null&&i.value.removeEventListener("blur",R,$),M=null),i.value!==null&&i.value.classList.remove("q-btn--active")}function z(a){_(a),a.qSkipRipple=!0}return F(()=>{j(!0)}),Object.assign(n,{click:L}),()=>{let a=[];e.icon!==void 0&&a.push(m(te,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&a.push(m("span",{class:"block"},[e.label])),a=V(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(m(te,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const y=[m("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&y.push(m("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[m("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),y.push(m("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},a)),e.loading!==null&&y.push(m(xe,{name:"q-transition--fade"},()=>e.loading===!0?[m("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[m(Ve)])]:null)),qe(m(p.value,S.value,y),[[De,d.value,void 0,E.value]])}}});function ut(){let e;const t=A();function l(){e=void 0}return se(l),F(l),{removeTick:l,registerTick(n){e=n,W(()=>{e===n&&(be(t)===!1&&e(),e=void 0)})}}}function st(){let e=null;const t=A();function l(){e!==null&&(clearTimeout(e),e=null)}return se(l),F(l),{removeTimeout:l,registerTimeout(n,o){l(),be(t)===!1&&(e=setTimeout(()=>{e=null,n()},o))}}}const ct={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},dt=["beforeShow","show","beforeHide","hide"];function ft({showing:e,canShow:t,hideOnRouteChange:l,handleShow:n,handleHide:o,processOnMount:v}){const s=A(),{props:r,emit:b,proxy:p}=s;let u;function q(d){e.value===!0?h(d):i(d)}function i(d){if(r.disable===!0||d!==void 0&&d.qAnchorHandled===!0||t!==void 0&&t(d)!==!0)return;const E=r["onUpdate:modelValue"]!==void 0;E===!0&&(b("update:modelValue",!0),u=d,W(()=>{u===d&&(u=void 0)})),(r.modelValue===null||E===!1)&&k(d)}function k(d){e.value!==!0&&(e.value=!0,b("beforeShow",d),n!==void 0?n(d):b("show",d))}function h(d){if(r.disable===!0)return;const E=r["onUpdate:modelValue"]!==void 0;E===!0&&(b("update:modelValue",!1),u=d,W(()=>{u===d&&(u=void 0)})),(r.modelValue===null||E===!1)&&w(d)}function w(d){e.value!==!1&&(e.value=!1,b("beforeHide",d),o!==void 0?o(d):b("hide",d))}function c(d){r.disable===!0&&d===!0?r["onUpdate:modelValue"]!==void 0&&b("update:modelValue",!1):d===!0!==e.value&&(d===!0?k:w)(u)}G(()=>r.modelValue,c),l!==void 0&&he(s)===!0&&G(()=>p.$route.fullPath,()=>{l.value===!0&&e.value===!0&&h()}),v===!0&&$e(()=>{c(r.modelValue)});const x={show:i,hide:h,toggle:q};return Object.assign(p,x),x}const rt=[null,document,document.body,document.scrollingElement,document.documentElement];function vt(e,t){let l=Ke(t);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return rt.includes(l)?window:l}function mt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function gt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let D;function ht(){if(D!==void 0)return D;const e=document.createElement("p"),t=document.createElement("div");U(e,{width:"100%",height:"200px"}),U(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const l=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return l===n&&(n=t.clientWidth),t.remove(),D=l-n,D}function bt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function yt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Le.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{ot as Q,De as R,Ye as a,te as b,ut as c,st as d,mt as e,yt as f,gt as g,bt as h,ct as i,dt as j,ft as k,vt as l,ht as m,Ve as n,Xe as u,be as v};
