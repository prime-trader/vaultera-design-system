import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{T as a}from"./TextField-BCHBPYEs.js";import{f as n}from"./index-B5ZI-g0m.js";import{F as y}from"./index-C7_Vjq1d.js";import"./index-D1lroltp.js";import"./clsx-B-dksMZM.js";/* empty css              */const I={component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:{type:"text"}},required:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},size:{options:["450px","100%"],control:{type:"select"}},minHeight:{options:["81px","max-content"],control:{type:"select"}},variant:{options:["text","number","password"],control:{type:"select"}},disabled:{control:{type:"boolean"}},errorMsg:{control:{type:"text"}}},args:{onChange:n(),onIconClick:n(),label:"Hello"}},e={args:{},render:r=>s.jsx(a,{...r})},o={args:{errorMsg:"This can't be empty."},render:r=>s.jsx(a,{...r})},t={args:{icon:s.jsx(y,{color:"#fff"})},render:r=>s.jsx(a,{...r})};var c,p,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <TextField {...args} />;
  }
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    errorMsg: "This can't be empty."
  },
  render: args => {
    return <TextField {...args} />;
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,u,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: <FaBeer color="#fff" />
  },
  render: args => {
    return <TextField {...args} />;
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const M=["Primary","Error","WithIcon"];export{o as Error,e as Primary,t as WithIcon,M as __namedExportsOrder,I as default};
