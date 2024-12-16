import{j as n}from"./jsx-runtime-BjG_zV1W.js";/* empty css              */const s="_FollowingStatus_1vm9d_1",a="_following_1vm9d_26",l="_resend_1vm9d_37",t={FollowingStatus:s,following:a,resend:l},r=e=>n.jsx("div",{className:`${t.FollowingStatus} ${t[e.varient]}`,children:n.jsx("label",{children:e.varient=="following"?"Following":e.varient=="resend"?"Resend":"Not Following"})});r.__docgenInfo={description:"",methods:[],displayName:"FollowingStatus",props:{varient:{required:!0,tsType:{name:"string"},description:""}}};const c={component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{varient:{options:["following","resend","not-following"],control:{type:"select"}}},args:{}},o={args:{},render:e=>n.jsx(r,{...e})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <FollowingStatus {...args} />;
  }
}`,...o.parameters?.docs?.source}}};const g=["Primary"];export{o as Primary,g as __namedExportsOrder,c as default};
