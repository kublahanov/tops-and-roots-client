import{a as i}from"./use-tick.7a0643c7.js";import{ac as s,r,o as d,w as a,c}from"./index.f83c29bb.js";function e(n){return n==null?null:n}function t(n,u){return n==null?u===!0?`f_${i()}`:null:n}function p({getValue:n,required:u=!0}={}){if(s.value===!0){const o=n!==void 0?r(e(n())):r(null);return u===!0&&o.value===null&&d(()=>{o.value=`f_${i()}`}),n!==void 0&&a(n,f=>{o.value=t(f,u)}),o}return n!==void 0?c(()=>t(n(),u)):r(`f_${i()}`)}export{p as u};
