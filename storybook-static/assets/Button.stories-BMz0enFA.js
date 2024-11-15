import{j as c}from"./jsx-runtime-CkxqCPlQ.js";import{B as l}from"./Button-CbT1wY8q.js";import{f as V}from"./index-DQLiMaGX.js";import{R as o}from"./index-DJO9vBfz.js";/* empty css              */var N={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v=o.createContext&&o.createContext(N),W=["attr","size","title"];function R(e,r){if(e==null)return{};var t=T(e,r),n,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function T(e,r){if(e==null)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},f.apply(this,arguments)}function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?y(Object(t),!0).forEach(function(n){F(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function F(e,r,t){return r=H(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function H(e){var r=L(e,"string");return typeof r=="symbol"?r:r+""}function L(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function D(e){return e&&e.map((r,t)=>o.createElement(r.tag,g({key:t},r.attr),D(r.child)))}function M(e){return r=>o.createElement(G,f({attr:g({},e.attr)},r),D(e.child))}function G(e){var r=t=>{var{attr:n,size:a,title:s}=e,I=R(e,W),b=a||t.size||"1em",i;return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),o.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,I,{className:i,style:g(g({color:e.color||t.color},t.style),e.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),s&&o.createElement("title",null,s),e.children)};return v!==void 0?o.createElement(v.Consumer,null,t=>r(t)):r(N)}function K(e){return M({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"},child:[]}]})(e)}const X={component:l,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},size:{options:["150px","100%"],control:{type:"select"}},variant:{options:["primary","outline"],control:{type:"select"}},disabled:{control:{type:"boolean"}},type:{options:["button","submit"],control:{type:"select"}}},args:{onClick:V(),label:"Hi"}},u={args:{},render:e=>c.jsx(l,{...e})},m={args:{variant:"outline"},render:e=>c.jsx(l,{...e})},p={args:{icon:c.jsx(K,{})},render:e=>c.jsx(l,{...e})},d={args:{disabled:!0},render:e=>c.jsx(l,{...e})};var O,h,j;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <Button {...args} />;
  }
}`,...(j=(h=u.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var P,w,x;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  },
  render: args => {
    return <Button {...args} />;
  }
}`,...(x=(w=m.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var E,S,z;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    icon: <FaBeer />
  },
  render: args => {
    return <Button {...args} />;
  }
}`,...(z=(S=p.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var B,C,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    return <Button {...args} />;
  }
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const Y=["Primary","Outline","WithIcon","Disabled"];export{d as Disabled,m as Outline,u as Primary,p as WithIcon,Y as __namedExportsOrder,X as default};
