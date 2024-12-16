import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{T as a}from"./TextField-C9kbt43R.js";import{f as n}from"./index-Dr6mi46l.js";import{F as c}from"./index-C7_Vjq1d.js";import"./index-D1lroltp.js";import"./clsx-B-dksMZM.js";/* empty css              */const x={component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:{type:"text"}},required:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},size:{options:["450px","100%"],control:{type:"select"}},minHeight:{options:["81px","max-content"],control:{type:"select"}},variant:{options:["text","number","password"],control:{type:"select"}},disabled:{control:{type:"boolean"}},errorMsg:{control:{type:"text"}}},args:{onChange:n(),onIconClick:n(),label:"Hello"}},e={args:{},render:r=>s.jsx(a,{...r})},o={args:{errorMsg:"This can't be empty."},render:r=>s.jsx(a,{...r})},t={args:{icon:s.jsx(c,{color:"#fff"})},render:r=>s.jsx(a,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <TextField {...args} />;
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    errorMsg: "This can't be empty."
  },
  render: args => {
    return <TextField {...args} />;
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FaBeer color="#fff" />
  },
  render: args => {
    return <TextField {...args} />;
  }
}`,...t.parameters?.docs?.source}}};const y=["Primary","Error","WithIcon"];export{o as Error,e as Primary,t as WithIcon,y as __namedExportsOrder,x as default};
