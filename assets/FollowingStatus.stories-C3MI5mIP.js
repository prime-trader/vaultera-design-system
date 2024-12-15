import{j as n}from"./jsx-runtime-BjG_zV1W.js";/* empty css              */const i="_FollowingStatus_1vm9d_1",d="_following_1vm9d_26",c="_resend_1vm9d_37",t={FollowingStatus:i,following:d,resend:c},r=e=>n.jsx("div",{className:`${t.FollowingStatus} ${t[e.varient]}`,children:n.jsx("label",{children:e.varient=="following"?"Following":e.varient=="resend"?"Resend":"Not Following"})});r.__docgenInfo={description:"",methods:[],displayName:"FollowingStatus",props:{varient:{required:!0,tsType:{name:"string"},description:""}}};const u={component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{varient:{options:["following","resend","not-following"],control:{type:"select"}}},args:{}},o={args:{},render:e=>n.jsx(r,{...e})};var s,a,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <FollowingStatus {...args} />;
  }
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const p=["Primary"];export{o as Primary,p as __namedExportsOrder,u as default};
