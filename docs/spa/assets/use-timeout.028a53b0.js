import{l as P,m as V,v as W,n as z}from"./QBtn.30bef33e.js";import{w as S,o as C,g as E,E as x,B as O,D as U}from"./index.8fcf7fad.js";const A=[null,document,document.body,document.scrollingElement,document.documentElement];function B(e,o){let t=P(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return A.includes(t)?window:t}function D(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function X(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function H(e,o,t=0){const i=arguments[3]===void 0?performance.now():arguments[3],s=D(e);if(t<=0){s!==o&&p(e,o);return}requestAnimationFrame(u=>{const r=u-i,l=s+(o-s)/Math.max(r,t)*r;p(e,l),l!==o&&H(e,o,t-r,u)})}function L(e,o,t=0){const i=arguments[3]===void 0?performance.now():arguments[3],s=X(e);if(t<=0){s!==o&&w(e,o);return}requestAnimationFrame(u=>{const r=u-i,l=s+(o-s)/Math.max(r,t)*r;w(e,l),l!==o&&L(e,o,t-r,u)})}function p(e,o){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}e.scrollTop=o}function w(e,o){if(e===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=o}function F(e,o,t){if(t){H(e,o,t);return}p(e,o)}function N(e,o,t){if(t){L(e,o,t);return}w(e,o)}let f;function I(){if(f!==void 0)return f;const e=document.createElement("p"),o=document.createElement("div");V(e,{width:"100%",height:"200px"}),V(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let i=e.offsetWidth;return t===i&&(i=o.clientWidth),o.remove(),f=t-i,f}function j(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const k={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},_=["beforeShow","show","beforeHide","hide"];function $({showing:e,canShow:o,hideOnRouteChange:t,handleShow:i,handleHide:s,processOnMount:u}){const r=E(),{props:l,emit:c,proxy:v}=r;let a;function M(n){e.value===!0?m(n):g(n)}function g(n){if(l.disable===!0||n!==void 0&&n.qAnchorHandled===!0||o!==void 0&&o(n)!==!0)return;const d=l["onUpdate:modelValue"]!==void 0;d===!0&&(c("update:modelValue",!0),a=n,x(()=>{a===n&&(a=void 0)})),(l.modelValue===null||d===!1)&&h(n)}function h(n){e.value!==!0&&(e.value=!0,c("beforeShow",n),i!==void 0?i(n):c("show",n))}function m(n){if(l.disable===!0)return;const d=l["onUpdate:modelValue"]!==void 0;d===!0&&(c("update:modelValue",!1),a=n,x(()=>{a===n&&(a=void 0)})),(l.modelValue===null||d===!1)&&b(n)}function b(n){e.value!==!1&&(e.value=!1,c("beforeHide",n),s!==void 0?s(n):c("hide",n))}function y(n){l.disable===!0&&n===!0?l["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):n===!0!==e.value&&(n===!0?h:b)(a)}S(()=>l.modelValue,y),t!==void 0&&W(r)===!0&&S(()=>v.$route.fullPath,()=>{t.value===!0&&e.value===!0&&m()}),u===!0&&C(()=>{y(l.modelValue)});const T={show:g,hide:m,toggle:M};return Object.assign(v,T),T}function G(){let e=null;const o=E();function t(){e!==null&&(clearTimeout(e),e=null)}return O(t),U(t),{removeTimeout:t,registerTimeout(i,s){t(),z(o)===!1&&(e=setTimeout(()=>{e=null,i()},s))}}}export{_ as a,G as b,$ as c,X as d,D as e,I as f,B as g,j as h,N as i,F as s,k as u};
