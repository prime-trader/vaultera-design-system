import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const S="_shimmer_1wwoi_1",z={"animate-shimmer":"_animate-shimmer_1wwoi_9",shimmer:S},d=({loading:n,height:r="100px",width:t="100px",borderRadius:a="4px",children:o,className:b="",loadingStyle:f="pulse"})=>{const v={height:typeof r=="number"?`${r}px`:r,width:typeof t=="number"?`${t}px`:t,borderRadius:typeof a=="number"?`${a}px`:a},j=f==="pulse"?"animate-pulse bg-gray-300":z["animate-shimmer"];return e.jsx("div",{className:`${j} ${b}`,style:v,children:o&&n&&e.jsx("div",{className:"relative flex items-center justify-center h-full w-full",children:o})})};d.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{loading:{required:!0,tsType:{name:"boolean"},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"100px"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"100px"',computed:!1}},borderRadius:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"4px"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},loadingStyle:{required:!1,tsType:{name:"union",raw:'"shimmer" | "pulse"',elements:[{name:"literal",value:'"shimmer"'},{name:"literal",value:'"pulse"'}]},description:"",defaultValue:{value:'"pulse"',computed:!1}}}};const A={component:d,tags:["autodocs"],argTypes:{loading:{control:"boolean"},height:{control:"text"},width:{control:"text"},borderRadius:{control:{type:"text"}},children:{control:"text"},loadingStyle:{control:{type:"select"},options:["pulse","shimmer"]}},args:{loading:!0,height:"100px",width:"100px",loadingStyle:"pulse",borderRadius:"8px"}},s={args:{loading:!0,height:"150px",width:"150px",borderRadius:"12px",loadingStyle:"pulse",children:"Content will render when loading is false"},render:n=>e.jsx(d,{...n})},l={args:{loading:!0,height:"50px",width:"50px",borderRadius:"50%",loadingStyle:"pulse",children:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"})})})},render:n=>n.loading?e.jsx(d,{...n,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),e.jsx("path",{d:"M11 6h2v6h-2zM11 14h2v2h-2z"})]})}):e.jsx("h1",{children:"Hello with Icon"})},i={args:{loading:!0,height:"20px",width:"100%",borderRadius:"4px",loadingStyle:"pulse"},render:n=>e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginTop:"16px",border:"1px solid #ddd"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #ddd",textAlign:"left"},children:"Name"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #ddd",textAlign:"left"},children:"Age"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #ddd",textAlign:"left"},children:"Status"})]})}),e.jsx("tbody",{children:[...Array(5)].map((r,t)=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #ddd"},children:n.loading?e.jsx(d,{...n}):`Name ${t+1}`}),e.jsx("td",{style:{padding:"8px",border:"1px solid #ddd"},children:n.loading?e.jsx(d,{...n}):`${20+t} years`}),e.jsx("td",{style:{padding:"8px",border:"1px solid #ddd"},children:n.loading?e.jsx(d,{...n}):"Active"})]},t))})]})};var p,h,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    loading: true,
    height: "150px",
    width: "150px",
    borderRadius: "12px",
    loadingStyle: "pulse",
    children: "Content will render when loading is false"
  },
  render: args => <Skeleton {...args} />
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,c,m;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    loading: true,
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    loadingStyle: "pulse",
    children: <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%"
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      </div>
  },
  render: args => args.loading ? <Skeleton {...args}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M11 6h2v6h-2zM11 14h2v2h-2z" />
        </svg>
      </Skeleton> : <h1>Hello with Icon</h1>
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,y,w;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    loading: true,
    height: "20px",
    width: "100%",
    borderRadius: "4px",
    loadingStyle: "pulse"
  },
  render: args => <table style={{
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px",
    border: "1px solid #ddd"
  }}>
      <thead>
        <tr>
          <th style={{
          padding: "8px",
          border: "1px solid #ddd",
          textAlign: "left"
        }}>
            Name
          </th>
          <th style={{
          padding: "8px",
          border: "1px solid #ddd",
          textAlign: "left"
        }}>
            Age
          </th>
          <th style={{
          padding: "8px",
          border: "1px solid #ddd",
          textAlign: "left"
        }}>
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((_, index) => <tr key={index}>
            <td style={{
          padding: "8px",
          border: "1px solid #ddd"
        }}>
              {args.loading ? <Skeleton {...args} /> : \`Name \${index + 1}\`}
            </td>
            <td style={{
          padding: "8px",
          border: "1px solid #ddd"
        }}>
              {args.loading ? <Skeleton {...args} /> : \`\${20 + index} years\`}
            </td>
            <td style={{
          padding: "8px",
          border: "1px solid #ddd"
        }}>
              {args.loading ? <Skeleton {...args} /> : \`Active\`}
            </td>
          </tr>)}
      </tbody>
    </table>
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const T=["Default","WithIcon","Table"];export{s as Default,i as Table,l as WithIcon,T as __namedExportsOrder,A as default};
