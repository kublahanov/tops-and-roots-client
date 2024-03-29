import{R as $e,Q as O,b as Ae,c as ve,j as xe,k as Be,h as Me}from"./QBtn.30bef33e.js";import{i as De,Y as Z,r as T,c as v,D as fe,o as Ee,ag as de,a4 as Qe,h,H as se,N as Fe,P as We,g as be,M as je,w as Q,ae as Ke,B as Ve,C as He}from"./index.8fcf7fad.js";import{a as Ne,u as p}from"./use-tick.475eb034.js";import{d as Oe}from"./QLayout.006a7200.js";import{b as ce}from"./use-timeout.028a53b0.js";import{r as ze}from"./rtl.b51694b1.js";let Ue=0;const Ge=["click","keydown"],Xe={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ue++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ye(e,S,C,u){const r=De(de,Z);if(r===Z)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Z;const{proxy:M}=be(),D=T(null),F=T(null),W=T(null),z=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),$=v(()=>r.currentModel.value===e.name),U=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+($.value===!0?" q-tab--active"+(r.tabProps.value.activeClass?" "+r.tabProps.value.activeClass:"")+(r.tabProps.value.activeColor?` text-${r.tabProps.value.activeColor}`:"")+(r.tabProps.value.activeBgColor?` bg-${r.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&r.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||r.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(u!==void 0?u.linkClass.value:"")),I=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(r.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=v(()=>e.disable===!0||r.hasFocus.value===!0||$.value===!1&&r.hasActiveTab.value===!0?-1:e.tabindex||0);function y(l,b){if(b!==!0&&D.value!==null&&D.value.focus(),e.disable===!0){u!==void 0&&u.hasRouterLink.value===!0&&se(l);return}if(u===void 0){r.updateModel({name:e.name}),C("click",l);return}if(u.hasRouterLink.value===!0){const m=(f={})=>{let w;const q=f.to===void 0||je(f.to,e.to)===!0?r.avoidRouteWatcher=Ne():null;return u.navigateToRouterLink(l,{...f,returnRouterError:!0}).catch(_=>{w=_}).then(_=>{if(q===r.avoidRouteWatcher&&(r.avoidRouteWatcher=!1,w===void 0&&(_===void 0||_.message!==void 0&&_.message.startsWith("Avoided redundant navigation")===!0)&&r.updateModel({name:e.name})),f.returnRouterError===!0)return w!==void 0?Promise.reject(w):_})};C("click",l,m),l.defaultPrevented!==!0&&m();return}C("click",l)}function k(l){Fe(l,[13,32])?y(l,!0):We(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&r.onKbdNavigate(l.keyCode,M.$el)===!0&&se(l),C("keydown",l)}function E(){const l=r.tabProps.value.narrowIndicator,b=[],m=h("div",{ref:W,class:["q-tab__indicator",r.tabProps.value.indicatorClass]});e.icon!==void 0&&b.push(h(O,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&b.push(h("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&b.push(e.alertIcon!==void 0?h(O,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):h("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&b.push(m);const f=[h("div",{class:"q-focus-helper",tabindex:-1,ref:D}),h("div",{class:I.value},Ae(S.default,b))];return l===!1&&f.push(m),f}const A={name:v(()=>e.name),rootRef:F,tabIndicatorRef:W,routeData:u};fe(()=>{r.unregisterTab(A)}),Ee(()=>{r.registerTab(A)});function j(l,b){const m={ref:F,class:U.value,tabindex:g.value,role:"tab","aria-selected":$.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:y,onKeydown:k,...b};return Qe(h(l,m,E()),[[$e,z.value]])}return{renderTab:j,$tabs:r}}var ot=ve({name:"QRouteTab",props:{...xe,...Xe},emits:Ge,setup(e,{slots:S,emit:C}){const u=Be({useDisableForRouterLinkProps:!1}),{renderTab:r,$tabs:M}=Ye(e,S,C,{exact:v(()=>e.exact),...u});return Q(()=>`${e.name} | ${e.exact} | ${(u.resolvedLink.value||{}).href}`,()=>{M.verifyRouteModel()}),()=>r(u.linkTag.value,u.linkAttrs.value)}});function Je(e,S,C){const u=C===!0?["left","right"]:["top","bottom"];return`absolute-${S===!0?u[0]:u[1]}${e?` text-${e}`:""}`}const Ze=["left","center","right","justify"];var rt=ve({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ze.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:S,emit:C}){const{proxy:u}=be(),{$q:r}=u,{registerTick:M}=p(),{registerTick:D}=p(),{registerTick:F}=p(),{registerTimeout:W,removeTimeout:z}=ce(),{registerTimeout:$,removeTimeout:U}=ce(),I=T(null),g=T(null),y=T(e.modelValue),k=T(!1),E=T(!0),A=T(!1),j=T(!1),l=[],b=T(0),m=T(!1);let f=null,w=null,q;const _=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Je(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),he=v(()=>{const t=b.value,a=y.value;for(let n=0;n<t;n++)if(l[n].name.value===a)return!0;return!1}),ge=v(()=>`q-tabs__content--align-${k.value===!0?"left":j.value===!0?"justify":e.align}`),me=v(()=>`q-tabs row no-wrap items-center q-tabs--${k.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Te=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),K=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),V=v(()=>e.vertical!==!0&&r.lang.rtl===!0),G=v(()=>ze===!1&&V.value===!0);Q(V,B),Q(()=>e.modelValue,t=>{X({name:t,setCurrent:!0,skipEmit:!0})}),Q(()=>e.outsideArrows,H);function X({name:t,setCurrent:a,skipEmit:n}){y.value!==t&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&C("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(we(y.value,t),y.value=t))}function H(){M(()=>{ee({width:I.value.offsetWidth,height:I.value.offsetHeight})})}function ee(t){if(K.value===void 0||g.value===null)return;const a=t[K.value.container],n=Math.min(g.value[K.value.scroll],Array.prototype.reduce.call(g.value.children,(c,i)=>c+(i[K.value.content]||0),0)),s=a>0&&n>a;k.value=s,s===!0&&D(B),j.value=a<parseInt(e.breakpoint,10)}function we(t,a){const n=t!=null&&t!==""?l.find(c=>c.name.value===t):null,s=a!=null&&a!==""?l.find(c=>c.name.value===a):null;if(n&&s){const c=n.tabIndicatorRef.value,i=s.tabIndicatorRef.value;f!==null&&(clearTimeout(f),f=null),c.style.transition="none",c.style.transform="none",i.style.transition="none",i.style.transform="none";const o=c.getBoundingClientRect(),d=i.getBoundingClientRect();i.style.transform=e.vertical===!0?`translate3d(0,${o.top-d.top}px,0) scale3d(1,${d.height?o.height/d.height:1},1)`:`translate3d(${o.left-d.left}px,0,0) scale3d(${d.width?o.width/d.width:1},1,1)`,F(()=>{f=setTimeout(()=>{f=null,i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}s&&k.value===!0&&x(s.rootRef.value)}function x(t){const{left:a,width:n,top:s,height:c}=g.value.getBoundingClientRect(),i=t.getBoundingClientRect();let o=e.vertical===!0?i.top-s:i.left-a;if(o<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(o),B();return}o+=e.vertical===!0?i.height-c:i.width-n,o>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(o),B())}function B(){const t=g.value;if(t===null)return;const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);V.value===!0?(E.value=Math.ceil(n+a.width)<t.scrollWidth-1,A.value=n>0):(E.value=n>0,A.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}function te(t){w!==null&&clearInterval(w),w=setInterval(()=>{qe(t)===!0&&L()},5)}function ae(){te(G.value===!0?Number.MAX_SAFE_INTEGER:0)}function ne(){te(G.value===!0?0:Number.MAX_SAFE_INTEGER)}function L(){w!==null&&(clearInterval(w),w=null)}function Ce(t,a){const n=Array.prototype.filter.call(g.value.children,d=>d===a||d.matches&&d.matches(".q-tab.q-focusable")===!0),s=n.length;if(s===0)return;if(t===36)return x(n[0]),n[0].focus(),!0;if(t===35)return x(n[s-1]),n[s-1].focus(),!0;const c=t===(e.vertical===!0?38:37),i=t===(e.vertical===!0?40:39),o=c===!0?-1:i===!0?1:void 0;if(o!==void 0){const d=V.value===!0?-1:1,R=n.indexOf(a)+o*d;return R>=0&&R<s&&(x(n[R]),n[R].focus({preventScroll:!0})),!0}}const ye=v(()=>G.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function qe(t){const a=g.value,{get:n,set:s}=ye.value;let c=!1,i=n(a);const o=t<i?-1:1;return i+=o*5,i<0?(c=!0,i=0):(o===-1&&i<=t||o===1&&i>=t)&&(c=!0,i=t),s(a,i),B(),c}function le(t,a){for(const n in t)if(t[n]!==a[n])return!1;return!0}function Re(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=l.filter(o=>o.routeData!==void 0&&o.routeData.hasRouterLink.value===!0),{hash:s,query:c}=u.$route,i=Object.keys(c).length;for(const o of n){const d=o.routeData.exact.value===!0;if(o.routeData[d===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:R,query:Y,matched:Se,href:Ie}=o.routeData.resolvedLink.value,J=Object.keys(Y).length;if(d===!0){if(R!==s||J!==i||le(c,Y)===!1)continue;t=o.name.value;break}if(R!==""&&R!==s||J!==0&&le(Y,c)===!1)continue;const P={matchedLen:Se.length,queryDiff:i-J,hrefLen:Ie.length-R.length};if(P.matchedLen>a.matchedLen){t=o.name.value,a=P;continue}else if(P.matchedLen!==a.matchedLen)continue;if(P.queryDiff<a.queryDiff)t=o.name.value,a=P;else if(P.queryDiff!==a.queryDiff)continue;P.hrefLen>a.hrefLen&&(t=o.name.value,a=P)}t===null&&l.some(o=>o.routeData===void 0&&o.name.value===y.value)===!0||X({name:t,setCurrent:!0})}function ke(t){if(z(),m.value!==!0&&I.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&I.value.contains(a)===!0&&(m.value=!0,k.value===!0&&x(a))}}function _e(){W(()=>{m.value=!1},30)}function N(){re.avoidRouteWatcher===!1?$(Re):U()}function oe(){if(q===void 0){const t=Q(()=>u.$route.fullPath,N);q=()=>{t(),q=void 0}}}function Le(t){l.push(t),b.value++,H(),t.routeData===void 0||u.$route===void 0?$(()=>{if(k.value===!0){const a=y.value,n=a!=null&&a!==""?l.find(s=>s.name.value===a):null;n&&x(n.rootRef.value)}}):(oe(),t.routeData.hasRouterLink.value===!0&&N())}function Pe(t){l.splice(l.indexOf(t),1),b.value--,H(),q!==void 0&&t.routeData!==void 0&&(l.every(a=>a.routeData===void 0)===!0&&q(),N())}const re={currentModel:y,tabProps:_,hasFocus:m,hasActiveTab:he,registerTab:Le,unregisterTab:Pe,verifyRouteModel:N,updateModel:X,onKbdNavigate:Ce,avoidRouteWatcher:!1};Ke(de,re);function ie(){f!==null&&clearTimeout(f),L(),q!==void 0&&q()}let ue;return fe(ie),Ve(()=>{ue=q!==void 0,ie()}),He(()=>{ue===!0&&oe(),H()}),()=>h("div",{ref:I,class:me.value,role:"tablist",onFocusin:ke,onFocusout:_e},[h(Oe,{onResize:ee}),h("div",{ref:g,class:Te.value,onScroll:B},Me(S.default)),h(O,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||r.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ae,onTouchstartPassive:ae,onMouseupPassive:L,onMouseleavePassive:L,onTouchendPassive:L}),h(O,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(A.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||r.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ne,onTouchstartPassive:ne,onMouseupPassive:L,onMouseleavePassive:L,onTouchendPassive:L})])}});export{rt as Q,ot as a};
