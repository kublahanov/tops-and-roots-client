import{ai as A,w as y,aj as U,o as w,g as T,E as d,a2 as H,A as R,Y as S}from"./index.75f7d35a.js";function P(){if(window.getSelection!==void 0){const o=window.getSelection();o.empty!==void 0?o.empty():o.removeAllRanges!==void 0&&(o.removeAllRanges(),A.is.mobile!==!0&&o.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const h={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},j=["beforeShow","show","beforeHide","hide"];function B({showing:o,canShow:n,hideOnRouteChange:i,handleShow:s,handleHide:f,processOnMount:M}){const c=T(),{props:l,emit:t,proxy:m}=c;let u;function k(e){o.value===!0?r(e):p(e)}function p(e){if(l.disable===!0||e!==void 0&&e.qAnchorHandled===!0||n!==void 0&&n(e)!==!0)return;const a=l["onUpdate:modelValue"]!==void 0;a===!0&&(t("update:modelValue",!0),u=e,d(()=>{u===e&&(u=void 0)})),(l.modelValue===null||a===!1)&&v(e)}function v(e){o.value!==!0&&(o.value=!0,t("beforeShow",e),s!==void 0?s(e):t("show",e))}function r(e){if(l.disable===!0)return;const a=l["onUpdate:modelValue"]!==void 0;a===!0&&(t("update:modelValue",!1),u=e,d(()=>{u===e&&(u=void 0)})),(l.modelValue===null||a===!1)&&g(e)}function g(e){o.value!==!1&&(o.value=!1,t("beforeHide",e),f!==void 0?f(e):t("hide",e))}function V(e){l.disable===!0&&e===!0?l["onUpdate:modelValue"]!==void 0&&t("update:modelValue",!1):e===!0!==o.value&&(e===!0?v:g)(u)}y(()=>l.modelValue,V),i!==void 0&&U(c)===!0&&y(()=>m.$route.fullPath,()=>{i.value===!0&&o.value===!0&&r()}),M===!0&&w(()=>{V(l.modelValue)});const b={show:p,hide:r,toggle:k};return Object.assign(m,b),b}function D(){let o;const n=T();function i(){o=void 0}return H(i),R(i),{removeTick:i,registerTick(s){o=s,d(()=>{o===s&&(S(n)===!1&&o(),o=void 0)})}}}export{j as a,D as b,B as c,P as d,h as u};