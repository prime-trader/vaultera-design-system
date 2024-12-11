import{j as r}from"./jsx-runtime-OAISXtky.js";/* empty css              */import"./index-qVDZzPEr.js";const i="_FollowingStatus_1vm9d_1",d="_following_1vm9d_26",c="_resend_1vm9d_37",n={FollowingStatus:i,following:d,resend:c},t=o=>r.jsx("div",{className:`${n.FollowingStatus} ${n[o.varient]}`,children:r.jsx("label",{children:o.varient=="following"?"Following":o.varient=="resend"?"Resend":"Not Following"})});t.__docgenInfo={description:"",methods:[],displayName:"FollowingStatus",props:{varient:{required:!0,tsType:{name:"string"},description:""}}};const p={component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{varient:{options:["following","resend","not-following"],control:{type:"select"}}},args:{}},e={args:{},render:o=>r.jsx(t,{...o})};var s,a,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <FollowingStatus {...args} />;
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const w=["Primary"];export{e as Primary,w as __namedExportsOrder,p as default};
