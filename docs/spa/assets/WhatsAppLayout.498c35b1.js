import{c as ke,b as Oe,i as U,Q as le,R as je}from"./QBtn.30bef33e.js";import{u as Be,Q as de}from"./use-quasar.36a5720a.js";import{Q as we}from"./QSpace.d96c8b5e.js";import{u as He,a as Ie,h as ne,Q as re,f as K,d as D,e as oe,m as De,_ as $e}from"./EssentialLink.e53db5e8.js";import{u as Ne,k as Ke,a as Ze,l as We,c as Ue,b as Ye,m as ze,g as Xe,n as Ge,Q as Me}from"./use-key-composition.2260c0fd.js";import{d as be,e as Je,Q as et,b as tt,a as ie,c as at}from"./QLayout.006a7200.js";import{r as q,w as $,E as ae,P as lt,c as y,D as _e,o as nt,h as j,X as rt,g as Se,O as xe,z as ot,B as it,C as ut,a4 as ye,i as st,Y as fe,ab as ct,Z as dt,ad as ft,k as te,q as ve,f as i,m as s,ak as vt,p as se,t as ue,n as H,F as pe,u as Ce,v as mt,l as me,a2 as Ve,x as ht}from"./index.8fcf7fad.js";import{T as Ae,Q as gt}from"./QDrawer.bc2ecce4.js";import{s as Fe,i as he}from"./use-timeout.028a53b0.js";import"./use-id.058b22be.js";import"./use-tick.475eb034.js";const qe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ce={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Le=Object.keys(ce);Le.forEach(e=>{ce[e].regex=new RegExp(ce[e].pattern)});const bt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Le.join("")+"])|(.)","g"),Re=/[.*+?^${}()|[\]\\]/g,P=String.fromCharCode(1),yt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function kt(e,E,N,z){let u,h,f,l,A,M;const x=q(null),k=q(O());function R(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}$(()=>e.type+e.autogrow,T),$(()=>e.mask,o=>{if(o!==void 0)L(k.value,!0);else{const n=B(k.value);T(),e.modelValue!==n&&E("update:modelValue",n)}}),$(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&L(k.value,!0)}),$(()=>e.unmaskedValue,()=>{x.value===!0&&L(k.value)});function O(){if(T(),x.value===!0){const o=m(B(e.modelValue));return e.fillMask!==!1?J(o):o}return e.modelValue}function w(o){if(o<u.length)return u.slice(-o);let n="",c=u;const r=c.indexOf(P);if(r!==-1){for(let v=o-c.length;v>0;v--)n+=P;c=c.slice(0,r)+n+c.slice(r)}return c}function T(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&R(),x.value===!1){l=void 0,u="",h="";return}const o=qe[e.mask]===void 0?e.mask:qe[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",c=n.replace(Re,"\\$&"),r=[],v=[],g=[];let V=e.reverseFillMask===!0,b="",t="";o.replace(bt,(p,a,C,Z,W)=>{if(Z!==void 0){const I=ce[Z];g.push(I),t=I.negate,V===!0&&(v.push("(?:"+t+"+)?("+I.pattern+"+)?(?:"+t+"+)?("+I.pattern+"+)?"),V=!1),v.push("(?:"+t+"+)?("+I.pattern+")?")}else if(C!==void 0)b="\\"+(C==="\\"?"":C),g.push(C),r.push("([^"+b+"]+)?"+b+"?");else{const I=a!==void 0?a:W;b=I==="\\"?"\\\\\\\\":I.replace(Re,"\\\\$&"),g.push(I),r.push("([^"+b+"]+)?"+b+"?")}});const d=new RegExp("^"+r.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?"+(b===""?"":"["+b+"]*")+"$"),_=v.length-1,S=v.map((p,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+c+"*"+p):a===_?new RegExp("^"+p+"("+(t===""?".":t)+"+)?"+(e.reverseFillMask===!0?"$":c+"*")):new RegExp("^"+p));f=g,l=p=>{const a=d.exec(e.reverseFillMask===!0?p:p.slice(0,g.length+1));a!==null&&(p=a.slice(1).join(""));const C=[],Z=S.length;for(let W=0,I=p;W<Z;W++){const ee=S[W].exec(I);if(ee===null)break;I=I.slice(ee.shift().length),C.push(...ee)}return C.length!==0?C.join(""):p},u=g.map(p=>typeof p=="string"?p:P).join(""),h=u.split(P).join(n)}function L(o,n,c){const r=z.value,v=r.selectionEnd,g=r.value.length-v,V=B(o);n===!0&&T();const b=m(V),t=e.fillMask!==!1?J(b):b,d=k.value!==t;r.value!==t&&(r.value=t),d===!0&&(k.value=t),document.activeElement===r&&ae(()=>{if(t===h){const S=e.reverseFillMask===!0?h.length:0;r.setSelectionRange(S,S,"forward");return}if(c==="insertFromPaste"&&e.reverseFillMask!==!0){const S=r.selectionEnd;let p=v-1;for(let a=A;a<=p&&a<S;a++)u[a]!==P&&p++;Q.right(r,p);return}if(["deleteContentBackward","deleteContentForward"].indexOf(c)!==-1){const S=e.reverseFillMask===!0?v===0?t.length>b.length?1:0:Math.max(0,t.length-(t===h?0:Math.min(b.length,g)+1))+1:v;r.setSelectionRange(S,S,"forward");return}if(e.reverseFillMask===!0)if(d===!0){const S=Math.max(0,t.length-(t===h?0:Math.min(b.length,g+1)));S===1&&v===1?r.setSelectionRange(S,S,"forward"):Q.rightReverse(r,S)}else{const S=t.length-g;r.setSelectionRange(S,S,"backward")}else if(d===!0){const S=Math.max(0,u.indexOf(P),Math.min(b.length,v)-1);Q.right(r,S)}else{const S=v-1;Q.right(r,S)}});const _=e.unmaskedValue===!0?B(t):t;String(e.modelValue)!==_&&(e.modelValue!==null||_!=="")&&N(_,!0)}function X(o,n,c){const r=m(B(o.value));n=Math.max(0,u.indexOf(P),Math.min(r.length,n)),A=n,o.setSelectionRange(n,c,"forward")}const Q={left(o,n){const c=u.slice(n-1).indexOf(P)===-1;let r=Math.max(0,n-1);for(;r>=0;r--)if(u[r]===P){n=r,c===!0&&n++;break}if(r<0&&u[n]!==void 0&&u[n]!==P)return Q.right(o,0);n>=0&&o.setSelectionRange(n,n,"backward")},right(o,n){const c=o.value.length;let r=Math.min(c,n+1);for(;r<=c;r++)if(u[r]===P){n=r;break}else u[r-1]===P&&(n=r);if(r>c&&u[n-1]!==void 0&&u[n-1]!==P)return Q.left(o,c);o.setSelectionRange(n,n,"forward")},leftReverse(o,n){const c=w(o.value.length);let r=Math.max(0,n-1);for(;r>=0;r--)if(c[r-1]===P){n=r;break}else if(c[r]===P&&(n=r,r===0))break;if(r<0&&c[n]!==void 0&&c[n]!==P)return Q.rightReverse(o,0);n>=0&&o.setSelectionRange(n,n,"backward")},rightReverse(o,n){const c=o.value.length,r=w(c),v=r.slice(0,n+1).indexOf(P)===-1;let g=Math.min(c,n+1);for(;g<=c;g++)if(r[g-1]===P){n=g,n>0&&v===!0&&n--;break}if(g>c&&r[n-1]!==void 0&&r[n-1]!==P)return Q.leftReverse(o,c);o.setSelectionRange(n,n,"forward")}};function G(o){E("click",o),M=void 0}function Y(o){if(E("keydown",o),lt(o)===!0||o.altKey===!0)return;const n=z.value,c=n.selectionStart,r=n.selectionEnd;if(o.shiftKey||(M=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&M===void 0&&(M=n.selectionDirection==="forward"?c:r);const v=Q[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),v(n,M===c?r:c),o.shiftKey){const g=n.selectionStart;n.setSelectionRange(Math.min(M,g),Math.max(M,g),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&c===r?(Q.left(n,c),n.setSelectionRange(n.selectionStart,r,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&c===r&&(Q.rightReverse(n,r),n.setSelectionRange(c,n.selectionEnd,"forward"))}function m(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return F(o);const n=f;let c=0,r="";for(let v=0;v<n.length;v++){const g=o[c],V=n[v];if(typeof V=="string")r+=V,g===V&&c++;else if(g!==void 0&&V.regex.test(g))r+=V.transform!==void 0?V.transform(g):g,c++;else return r}return r}function F(o){const n=f,c=u.indexOf(P);let r=o.length-1,v="";for(let g=n.length-1;g>=0&&r!==-1;g--){const V=n[g];let b=o[r];if(typeof V=="string")v=V+v,b===V&&r--;else if(b!==void 0&&V.regex.test(b))do v=(V.transform!==void 0?V.transform(b):b)+v,r--,b=o[r];while(c===g&&b!==void 0&&V.regex.test(b));else return v}return v}function B(o){return typeof o!="string"||l===void 0?typeof o=="number"?l(""+o):o:l(o)}function J(o){return h.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?h.slice(0,-o.length)+o:o+h.slice(o.length)}return{innerValue:k,hasMask:x,moveCursorForPaste:X,updateMaskValue:L,onMaskedKeydown:Y,onMaskedClick:G}}function _t(e,E){function N(){const z=e.modelValue;try{const u="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(z)===z&&("length"in z?Array.from(z):[z]).forEach(h=>{u.items.add(h)}),{files:u.files}}catch{return{files:void 0}}}return E===!0?y(()=>{if(e.type==="file")return N()}):y(N)}var Te=ke({name:"QInput",inheritAttrs:!1,props:{...Ne,...yt,...Ke,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ze,"paste","change","keydown","click","animationend"],setup(e,{emit:E,attrs:N}){const{proxy:z}=Se(),{$q:u}=z,h={};let f=NaN,l,A,M=null,x;const k=q(null),R=We(e),{innerValue:O,hasMask:w,moveCursorForPaste:T,updateMaskValue:L,onMaskedKeydown:X,onMaskedClick:Q}=kt(e,E,b,k),G=_t(e,!0),Y=y(()=>ze(O.value)),m=Ge(g),F=Ue(),B=y(()=>e.type==="textarea"||e.autogrow===!0),J=y(()=>B.value===!0||["text","search","url","tel","password"].includes(e.type)),o=y(()=>{const a={...F.splitAttrs.listeners.value,onInput:g,onPaste:v,onChange:d,onBlur:_,onFocus:xe};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=m,w.value===!0&&(a.onKeydown=X,a.onClick=Q),e.autogrow===!0&&(a.onAnimationend=V),a}),n=y(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:R.value,...F.splitAttrs.attributes.value,id:F.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return B.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});$(()=>e.type,()=>{k.value&&(k.value.value=e.modelValue)}),$(()=>e.modelValue,a=>{if(w.value===!0){if(A===!0&&(A=!1,String(a)===f))return;L(a)}else O.value!==a&&(O.value=a,e.type==="number"&&h.hasOwnProperty("value")===!0&&(l===!0?l=!1:delete h.value));e.autogrow===!0&&ae(t)}),$(()=>e.autogrow,a=>{a===!0?ae(t):k.value!==null&&N.rows>0&&(k.value.style.height="auto")}),$(()=>e.dense,()=>{e.autogrow===!0&&ae(t)});function c(){Xe(()=>{const a=document.activeElement;k.value!==null&&k.value!==a&&(a===null||a.id!==F.targetUid.value)&&k.value.focus({preventScroll:!0})})}function r(){k.value!==null&&k.value.select()}function v(a){if(w.value===!0&&e.reverseFillMask!==!0){const C=a.target;T(C,C.selectionStart,C.selectionEnd)}E("paste",a)}function g(a){if(!a||!a.target)return;if(e.type==="file"){E("update:modelValue",a.target.files);return}const C=a.target.value;if(a.target.qComposing===!0){h.value=C;return}if(w.value===!0)L(C,!1,a.inputType);else if(b(C),J.value===!0&&a.target===document.activeElement){const{selectionStart:Z,selectionEnd:W}=a.target;Z!==void 0&&W!==void 0&&ae(()=>{a.target===document.activeElement&&C.indexOf(a.target.value)===0&&a.target.setSelectionRange(Z,W)})}e.autogrow===!0&&t()}function V(a){E("animationend",a),t()}function b(a,C){x=()=>{M=null,e.type!=="number"&&h.hasOwnProperty("value")===!0&&delete h.value,e.modelValue!==a&&f!==a&&(f=a,C===!0&&(A=!0),E("update:modelValue",a),ae(()=>{f===a&&(f=NaN)})),x=void 0},e.type==="number"&&(l=!0,h.value=a),e.debounce!==void 0?(M!==null&&clearTimeout(M),h.value=a,M=setTimeout(x,e.debounce)):x()}function t(){requestAnimationFrame(()=>{const a=k.value;if(a!==null){const C=a.parentNode.style,{scrollTop:Z}=a,{overflowY:W,maxHeight:I}=u.platform.is.firefox===!0?{}:window.getComputedStyle(a),ee=W!==void 0&&W!=="scroll";ee===!0&&(a.style.overflowY="hidden"),C.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",ee===!0&&(a.style.overflowY=parseInt(I,10)<a.scrollHeight?"auto":"hidden"),C.marginBottom="",a.scrollTop=Z}})}function d(a){m(a),M!==null&&(clearTimeout(M),M=null),x!==void 0&&x(),E("change",a.target.value)}function _(a){a!==void 0&&xe(a),M!==null&&(clearTimeout(M),M=null),x!==void 0&&x(),l=!1,A=!1,delete h.value,e.type!=="file"&&setTimeout(()=>{k.value!==null&&(k.value.value=O.value!==void 0?O.value:"")})}function S(){return h.hasOwnProperty("value")===!0?h.value:O.value!==void 0?O.value:""}_e(()=>{_()}),nt(()=>{e.autogrow===!0&&t()}),Object.assign(F,{innerValue:O,fieldClass:y(()=>`q-${B.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:k,emitValue:b,hasValue:Y,floatingLabel:y(()=>Y.value===!0&&(e.type!=="number"||isNaN(O.value)===!1)||ze(e.displayValue)),getControl:()=>j(B.value===!0?"textarea":"input",{ref:k,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...o.value,...e.type!=="file"?{value:S()}:G.value}),getShadowControl:()=>j("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(B.value===!0?"":" text-no-wrap")},[j("span",{class:"invisible"},S()),j("span",e.shadowText)])});const p=Ye(F);return Object.assign(z,{focus:c,select:r,getNativeElement:()=>k.value}),rt(z,"nativeEl",()=>k.value),p}});const Pe=["vertical","horizontal"],ge={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ee={prevent:!0,mouse:!0,mouseAllDir:!0},Qe=e=>e>=250?50:Math.ceil(e/5);var St=ke({name:"QScrollArea",props:{...He,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:E,emit:N}){const z=q(!1),u=q(!1),h=q(!1),f={vertical:q(0),horizontal:q(0)},l={vertical:{ref:q(null),position:q(0),size:q(0)},horizontal:{ref:q(null),position:q(0),size:q(0)}},{proxy:A}=Se(),M=Ie(e,A.$q);let x=null,k;const R=q(null),O=y(()=>"q-scrollarea"+(M.value===!0?" q-scrollarea--dark":""));l.vertical.percentage=y(()=>{const t=l.vertical.size.value-f.vertical.value;if(t<=0)return 0;const d=ne(l.vertical.position.value/t,0,1);return Math.round(d*1e4)/1e4}),l.vertical.thumbHidden=y(()=>(e.visible===null?h.value:e.visible)!==!0&&z.value===!1&&u.value===!1||l.vertical.size.value<=f.vertical.value+1),l.vertical.thumbStart=y(()=>l.vertical.percentage.value*(f.vertical.value-l.vertical.thumbSize.value)),l.vertical.thumbSize=y(()=>Math.round(ne(f.vertical.value*f.vertical.value/l.vertical.size.value,Qe(f.vertical.value),f.vertical.value))),l.vertical.style=y(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${l.vertical.thumbStart.value}px`,height:`${l.vertical.thumbSize.value}px`})),l.vertical.thumbClass=y(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.vertical.barClass=y(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),l.horizontal.percentage=y(()=>{const t=l.horizontal.size.value-f.horizontal.value;if(t<=0)return 0;const d=ne(Math.abs(l.horizontal.position.value)/t,0,1);return Math.round(d*1e4)/1e4}),l.horizontal.thumbHidden=y(()=>(e.visible===null?h.value:e.visible)!==!0&&z.value===!1&&u.value===!1||l.horizontal.size.value<=f.horizontal.value+1),l.horizontal.thumbStart=y(()=>l.horizontal.percentage.value*(f.horizontal.value-l.horizontal.thumbSize.value)),l.horizontal.thumbSize=y(()=>Math.round(ne(f.horizontal.value*f.horizontal.value/l.horizontal.size.value,Qe(f.horizontal.value),f.horizontal.value))),l.horizontal.style=y(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[A.$q.lang.rtl===!0?"right":"left"]:`${l.horizontal.thumbStart.value}px`,width:`${l.horizontal.thumbSize.value}px`})),l.horizontal.thumbClass=y(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.horizontal.barClass=y(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const w=y(()=>l.vertical.thumbHidden.value===!0&&l.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),T=[[Ae,t=>{B(t,"vertical")},void 0,{vertical:!0,...Ee}]],L=[[Ae,t=>{B(t,"horizontal")},void 0,{horizontal:!0,...Ee}]];function X(){const t={};return Pe.forEach(d=>{const _=l[d];t[d+"Position"]=_.position.value,t[d+"Percentage"]=_.percentage.value,t[d+"Size"]=_.size.value,t[d+"ContainerSize"]=f[d].value}),t}const Q=ot(()=>{const t=X();t.ref=A,N("scroll",t)},0);function G(t,d,_){if(Pe.includes(t)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(t==="vertical"?Fe:he)(R.value,d,_)}function Y({height:t,width:d}){let _=!1;f.vertical.value!==t&&(f.vertical.value=t,_=!0),f.horizontal.value!==d&&(f.horizontal.value=d,_=!0),_===!0&&c()}function m({position:t}){let d=!1;l.vertical.position.value!==t.top&&(l.vertical.position.value=t.top,d=!0),l.horizontal.position.value!==t.left&&(l.horizontal.position.value=t.left,d=!0),d===!0&&c()}function F({height:t,width:d}){l.horizontal.size.value!==d&&(l.horizontal.size.value=d,c()),l.vertical.size.value!==t&&(l.vertical.size.value=t,c())}function B(t,d){const _=l[d];if(t.isFirst===!0){if(_.thumbHidden.value===!0)return;k=_.position.value,u.value=!0}else if(u.value!==!0)return;t.isFinal===!0&&(u.value=!1);const S=ge[d],p=f[d].value,a=(_.size.value-p)/(p-_.thumbSize.value),C=t.distance[S.dist],Z=k+(t.direction===S.dir?1:-1)*C*a;r(Z,d)}function J(t,d){const _=l[d];if(_.thumbHidden.value!==!0){const S=t[ge[d].offset];if(S<_.thumbStart.value||S>_.thumbStart.value+_.thumbSize.value){const p=S-_.thumbSize.value/2;r(p/f[d].value*_.size.value,d)}_.ref.value!==null&&_.ref.value.dispatchEvent(new MouseEvent(t.type,t))}}function o(t){J(t,"vertical")}function n(t){J(t,"horizontal")}function c(){z.value=!0,x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,z.value=!1},e.delay),e.onScroll!==void 0&&Q()}function r(t,d){R.value[ge[d].scroll]=t}let v=null;function g(){v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,h.value=!0},A.$q.platform.is.ios?50:0)}function V(){v!==null&&(clearTimeout(v),v=null),h.value=!1}let b=null;return $(()=>A.$q.lang.rtl,t=>{R.value!==null&&he(R.value,Math.abs(l.horizontal.position.value)*(t===!0?-1:1))}),it(()=>{b={top:l.vertical.position.value,left:l.horizontal.position.value}}),ut(()=>{if(b===null)return;const t=R.value;t!==null&&(he(t,b.left),Fe(t,b.top))}),_e(Q.cancel),Object.assign(A,{getScrollTarget:()=>R.value,getScroll:X,getScrollPosition:()=>({top:l.vertical.position.value,left:l.horizontal.position.value}),getScrollPercentage:()=>({top:l.vertical.percentage.value,left:l.horizontal.percentage.value}),setScrollPosition:G,setScrollPercentage(t,d,_){G(t,d*(l[t].size.value-f[t].value)*(t==="horizontal"&&A.$q.lang.rtl===!0?-1:1),_)}}),()=>j("div",{class:O.value,onMouseenter:g,onMouseleave:V},[j("div",{ref:R,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[j("div",{class:"q-scrollarea__content absolute",style:w.value},Oe(E.default,[j(be,{debounce:0,onResize:F})])),j(Je,{axis:"both",onScroll:m})]),j(be,{debounce:0,onResize:Y}),j("div",{class:l.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:o}),j("div",{class:l.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:n}),ye(j("div",{ref:l.vertical.ref,class:l.vertical.thumbClass.value,style:l.vertical.style.value,"aria-hidden":"true"}),T),ye(j("div",{ref:l.horizontal.ref,class:l.horizontal.thumbClass.value,style:l.horizontal.style.value,"aria-hidden":"true"}),L)])}}),wt=ke({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:E,emit:N}){const{proxy:{$q:z}}=Se(),u=st(dt,fe);if(u===fe)return console.error("QFooter needs to be child of QLayout"),fe;const h=q(parseInt(e.heightHint,10)),f=q(!0),l=q(ct.value===!0||u.isContainer.value===!0?0:window.innerHeight),A=y(()=>e.reveal===!0||u.view.value.indexOf("F")!==-1||z.platform.is.ios&&u.isContainer.value===!0),M=y(()=>u.isContainer.value===!0?u.containerHeight.value:l.value),x=y(()=>{if(e.modelValue!==!0)return 0;if(A.value===!0)return f.value===!0?h.value:0;const m=u.scroll.value.position+M.value+h.value-u.height.value;return m>0?m:0}),k=y(()=>e.modelValue!==!0||A.value===!0&&f.value!==!0),R=y(()=>e.modelValue===!0&&k.value===!0&&e.reveal===!0),O=y(()=>"q-footer q-layout__section--marginal "+(A.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(k.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(A.value!==!0?" hidden":""):"")),w=y(()=>{const m=u.rows.value.bottom,F={};return m[0]==="l"&&u.left.space===!0&&(F[z.lang.rtl===!0?"right":"left"]=`${u.left.size}px`),m[2]==="r"&&u.right.space===!0&&(F[z.lang.rtl===!0?"left":"right"]=`${u.right.size}px`),F});function T(m,F){u.update("footer",m,F)}function L(m,F){m.value!==F&&(m.value=F)}function X({height:m}){L(h,m),T("size",m)}function Q(){if(e.reveal!==!0)return;const{direction:m,position:F,inflectionPoint:B}=u.scroll.value;L(f,m==="up"||F-B<100||u.height.value-M.value-F-h.value<300)}function G(m){R.value===!0&&L(f,!0),N("focusin",m)}$(()=>e.modelValue,m=>{T("space",m),L(f,!0),u.animate()}),$(x,m=>{T("offset",m)}),$(()=>e.reveal,m=>{m===!1&&L(f,e.modelValue)}),$(f,m=>{u.animate(),N("reveal",m)}),$([h,u.scroll,u.height],Q),$(()=>z.screen.height,m=>{u.isContainer.value!==!0&&L(l,m)});const Y={};return u.instances.footer=Y,e.modelValue===!0&&T("size",h.value),T("space",e.modelValue),T("offset",x.value),_e(()=>{u.instances.footer===Y&&(u.instances.footer=void 0,T("size",0),T("offset",0),T("space",!1))}),()=>{const m=Oe(E.default,[j(be,{debounce:0,onResize:X})]);return e.elevated===!0&&m.push(j("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),j("footer",{class:O.value,style:w.value,onFocusin:G},m)}}});const zt=["src"],Mt={class:"q-subtitle-1 q-pl-md"},xt=se("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo.svg"},null,-1),pt=["src"],Lt={__name:"WhatsAppLayout",setup(e){const E=[{id:1,person:"Razvan Stoenescu",avatar:"https://cdn.quasar.dev/team/razvan_stoenescu.jpeg",caption:"I'm working on Quasar!",time:"15:00",sent:!0},{id:2,person:"Dan Popescu",avatar:"https://cdn.quasar.dev/team/dan_popescu.jpg",caption:"I'm working on Quasar!",time:"16:00",sent:!0},{id:3,person:"Jeff Galbraith",avatar:"https://cdn.quasar.dev/team/jeff_galbraith.jpg",caption:"I'm working on Quasar!",time:"18:00",sent:!0},{id:4,person:"Allan Gaunt",avatar:"https://cdn.quasar.dev/team/allan_gaunt.png",caption:"I'm working on Quasar!",time:"17:00",sent:!0}],N=Be(),z=q(!1),u=q(""),h=q(""),f=q(0),l=y(()=>E[f.value]),A=y(()=>({height:N.screen.height+"px"}));function M(){z.value=!z.value}function x(k){f.value=k}return(k,R)=>{const O=ft("router-view");return te(),ve("div",{class:"WAL position-relative bg-grey-4",style:vt(A.value)},[i(et,{view:"lHh Lpr lFf",class:"WAL__layout shadow-3",container:""},{default:s(()=>[i(tt,{elevated:""},{default:s(()=>[i(ie,{class:"bg-grey-3 text-black"},{default:s(()=>[i(U,{round:"",flat:"",icon:"keyboard_arrow_left",class:"WAL__drawer-open q-mr-sm",onClick:M}),i(U,{round:"",flat:""},{default:s(()=>[i(de,null,{default:s(()=>[se("img",{src:l.value.avatar},null,8,zt)]),_:1})]),_:1}),se("span",Mt,ue(l.value.person),1),i(we),i(U,{round:"",flat:"",icon:"search"}),i(U,{round:"",flat:""},{default:s(()=>[i(le,{name:"attachment",class:"rotate-135"})]),_:1}),i(U,{round:"",flat:"",icon:"more_vert"},{default:s(()=>[i(Me,{"auto-close":"",offset:[110,0]},{default:s(()=>[i(re,{style:{"min-width":"150px"}},{default:s(()=>[i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("Contact data")]),_:1})]),_:1}),i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("Block")]),_:1})]),_:1}),i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("Select messages")]),_:1})]),_:1}),i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("Silence")]),_:1})]),_:1}),i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("Clear messages")]),_:1})]),_:1}),i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("Erase messages")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(gt,{modelValue:z.value,"onUpdate:modelValue":R[1]||(R[1]=w=>z.value=w),"show-if-above":"",bordered:"",breakpoint:690},{default:s(()=>[i(ie,{class:"bg-grey-3"},{default:s(()=>[i(de,{class:"cursor-pointer"},{default:s(()=>[xt]),_:1}),i(we),i(U,{round:"",flat:"",icon:"message"}),i(U,{round:"",flat:"",icon:"more_vert"},{default:s(()=>[i(Me,{"auto-close":"",offset:[110,8]},{default:s(()=>[i(re,{style:{"min-width":"150px"}},{default:s(()=>[i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("New group")]),_:1})]),_:1}),i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("Profile")]),_:1})]),_:1}),i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("Archived")]),_:1})]),_:1}),i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("Favorites")]),_:1})]),_:1}),i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("Settings")]),_:1})]),_:1}),i(K,{clickable:""},{default:s(()=>[i(D,null,{default:s(()=>[H("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(U,{round:"",flat:"",icon:"close",class:"WAL__drawer-close",onClick:M})]),_:1}),i(ie,{class:"bg-grey-2"},{default:s(()=>[i(Te,{rounded:"",outlined:"",dense:"",class:"WAL__field full-width","bg-color":"white",modelValue:u.value,"onUpdate:modelValue":R[0]||(R[0]=w=>u.value=w),placeholder:"Search or start a new conversation"},{prepend:s(()=>[i(le,{name:"search"})]),_:1},8,["modelValue"])]),_:1}),i(St,{style:{height:"calc(100% - 100px)"}},{default:s(()=>[i(re,null,{default:s(()=>[(te(),ve(pe,null,Ce(E,(w,T)=>ye(i(K,{key:w.id,clickable:"",onClick:L=>x(T)},{default:s(()=>[i(D,{avatar:""},{default:s(()=>[i(de,null,{default:s(()=>[se("img",{src:w.avatar},null,8,pt)]),_:2},1024)]),_:2},1024),i(D,null,{default:s(()=>[i(oe,{lines:"1"},{default:s(()=>[H(ue(w.person),1)]),_:2},1024),i(oe,{class:"conversation__summary",caption:""},{default:s(()=>[w.sent?(te(),me(le,{key:0,name:"check"})):Ve("",!0),w.deleted?(te(),me(le,{key:1,name:"not_interested"})):Ve("",!0),H(" "+ue(w.caption),1)]),_:2},1024)]),_:2},1024),i(D,{side:""},{default:s(()=>[i(oe,{caption:""},{default:s(()=>[H(ue(w.time),1)]),_:2},1024),i(le,{name:"keyboard_arrow_down"})]),_:2},1024)]),_:2},1032,["onClick"]),[[je]])),64))]),_:1}),i(re,null,{default:s(()=>[i(oe,{header:""},{default:s(()=>[H("\u041C\u0435\u043D\u044E")]),_:1}),(te(!0),ve(pe,null,Ce(mt(De),w=>(te(),me($e,ht({key:w.title},w,{title:w.title}),null,16,["title"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(at,{class:"bg-grey-2"},{default:s(()=>[i(O)]),_:1}),i(wt,null,{default:s(()=>[i(ie,{class:"bg-grey-3 text-black row"},{default:s(()=>[i(U,{round:"",flat:"",icon:"insert_emoticon",class:"q-mr-sm"}),i(Te,{rounded:"",outlined:"",dense:"",class:"WAL__field col-grow q-mr-sm","bg-color":"white",modelValue:h.value,"onUpdate:modelValue":R[2]||(R[2]=w=>h.value=w),placeholder:"Type a message"},null,8,["modelValue"]),i(U,{round:"",flat:"",icon:"mic"})]),_:1})]),_:1})]),_:1})],4)}}};export{Lt as default};
