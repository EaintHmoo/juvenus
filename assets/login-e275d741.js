import{w as h,r as i,j as e,S as c,Y as l,a8 as m,ac as p,I as j,a3 as f,M as S,A as v,Q as d,aJ as w,B as b,aV as y,q as I,aW as C,C as L,T as P,W as k}from"./index-019ce5a6.js";function A(){const n=h(),[a,u]=i.useState({username:"",password:""}),[o,g]=i.useState(!1),x=async t=>{t.preventDefault();const s=await v.Login(a);s.code===200?(localStorage.setItem("ACCESS_TOKEN",s.data.access_token),localStorage.setItem("user",JSON.stringify(s.data.user)),d.success(s.message,{theme:"colored"}),setTimeout(()=>{n("/dashboard")},2e3)):d.error(s.message)},r=t=>{u({...a,[t.target.name]:t.target.value})};return e.jsxs("form",{onSubmit:x,children:[e.jsxs(c,{spacing:3,children:[e.jsx(l,{name:"username",label:"User Name",value:a.username,onChange:r}),e.jsx(l,{name:"password",label:"Password",type:o?"text":"password",value:a.password,onChange:r,InputProps:{endAdornment:e.jsx(m,{position:"end",children:e.jsx(p,{onClick:()=>g(!o),edge:"end",children:e.jsx(j,{icon:o?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),e.jsx(f,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",sx:{mt:3},children:"Login"}),e.jsx(S,{position:"bottom-right",autoClose:1500})]})}function T(){const n=w();return e.jsxs(b,{sx:{...y({color:I(n.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(C,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),e.jsx(c,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(L,{sx:{p:5,width:1,maxWidth:420},children:[e.jsx(P,{sx:{textAlign:"center",mb:3},variant:"h4",children:"Sign in to Juvenus POS"}),e.jsx(A,{})]})})]})}function E(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx("title",{children:" Login | Juvenus POS "})}),e.jsx(T,{})]})}export{E as default};
