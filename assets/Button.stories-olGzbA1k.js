import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as t}from"./Button-7eBQR1-h.js";import{f as c}from"./index-Dr6mi46l.js";import{F as i}from"./index-C7_Vjq1d.js";import"./clsx-B-dksMZM.js";/* empty css              */import"./index-D1lroltp.js";const y={component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:{type:"text"}},size:{options:["150px","100%"],control:{type:"select"}},variant:{options:["primary","outline"],control:{type:"select"}},disabled:{control:{type:"boolean"}},type:{options:["button","submit"],control:{type:"select"}}},args:{onClick:c(),label:"Hello"}},s={args:{},render:r=>e.jsx(t,{...r})},a={args:{variant:"outline"},render:r=>e.jsx(t,{...r})},n={args:{icon:e.jsx(i,{})},render:r=>e.jsx(t,{...r})},o={args:{disabled:!0},render:r=>e.jsx(t,{...r})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <Button {...args} />;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: args => {
    return <Button {...args} />;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FaBeer />
  },
  render: args => {
    return <Button {...args} />;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    return <Button {...args} />;
  }
}`,...o.parameters?.docs?.source}}};const b=["Primary","Outline","WithIcon","Disabled"];export{o as Disabled,a as Outline,s as Primary,n as WithIcon,b as __namedExportsOrder,y as default};
