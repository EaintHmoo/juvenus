import{aI as ot,w as it,r as s,j as e,t as lt,S as rt,O as ct,L as h,T as dt,y as P,C as ut,B as r,Z as i,Y as n,aj as c,a3 as ht,M as xt,N as mt,A as o,Q as k,W as ft}from"./index-019ce5a6.js";function bt(){const x=ot(),{owner_id:d,pos_treatment_name:T,transaction_id:w}=x.state||{};console.log(x.state);const O=it(),[W,m]=s.useState(!1),[jt,A]=s.useState([]);s.useState(null);const[pt,G]=s.useState([]);s.useState(d);const[f,R]=s.useState([]),[b,j]=s.useState(null),[p,B]=s.useState([]),[g,C]=s.useState(null),[S,Q]=s.useState([]),[y,v]=s.useState(null),[_,q]=s.useState([]),[D,I]=s.useState(null);s.useState(null);const[L,E]=s.useState(1),[F,U]=s.useState(null),[u,N]=s.useState(null),z=async()=>{const t=await o.GetTransactionDetailLists();A(t==null?void 0:t.data)},J=async()=>{const t=await o.GetCustomerLists();G(t==null?void 0:t.data)},M=async()=>{const t=await o.GetDoctorLists();R(t==null?void 0:t.data)},Y=async()=>{const t=await o.GetTherapist();B(t==null?void 0:t.data)},Z=async()=>{const t=await o.GetAssistant();Q(t==null?void 0:t.data)},H=async()=>{const t=await o.GetSalePerson();q(t==null?void 0:t.data)},K=async()=>{const t=await o.GetCustomerDetail(d);N(t==null?void 0:t.data)};s.useEffect(()=>{z(),J(),M(),Y(),Z(),H(),K()},[]);const X=async t=>{t.preventDefault();const a={transaction_detail_id:w,used_qty:L,customer_id:d,doctor_id:b,therapist_id:g,assistant_id:y,sale_person_id:D,offset_date:Date.now(),doctor_remark:F};m(!0),console.log(a);const l=await o.CreateOffset(a);console.log(l),l.code===200?(k.success(l.message,{theme:"colored"}),setTimeout(()=>O("/customer/packages/list"),2e3)):(m(!1),k.error(l.message))},$=()=>{window.history.back()},V=t=>{E(t.target.value)},tt=(t,a)=>{j(a?a.id:null)},et=(t,a)=>{C(a?a.id:null)},st=(t,a)=>{v(a?a.id:null)},at=(t,a)=>{I(a?a.id:null)},nt=t=>{U(t.target.value)};return e.jsxs(lt,{maxWidth:"lg",children:[e.jsxs(rt,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsxs(ct,{"aria-label":"breadcrumb",children:[e.jsx(h,{underline:"hover",color:"inherit",to:"/dashboard",children:"Dashbaord"}),e.jsx(h,{underline:"hover",color:"inherit",to:"/users",children:"Offset"}),e.jsx(dt,{color:"text.primary",children:"Create"})]}),e.jsx(P,{variant:"contained",color:"primary",onClick:()=>$(),children:"Back"})]}),e.jsx(ut,{children:e.jsx(r,{sx:{p:4},children:e.jsxs("form",{onSubmit:X,children:[e.jsx(i,{fullWidth:!0,sx:{mb:3},children:e.jsx(n,{value:u==null?void 0:u.name,disabled:!0})}),e.jsx(i,{fullWidth:!0,sx:{mb:3},children:e.jsx(n,{value:T,disabled:!0})}),e.jsx(r,{sx:{mb:3},children:e.jsx(n,{value:L,name:"used_qty",id:"outlined-basic",fullWidth:!0,label:"Used Qty",variant:"outlined",onChange:V,required:!0})}),e.jsx(i,{fullWidth:!0,sx:{mb:3},children:e.jsx(c,{disablePortal:!0,options:f,getOptionLabel:t=>t.name_english,value:f.find(t=>t.id===b)||null,onChange:tt,renderInput:t=>e.jsx(n,{...t,label:"Doctor"})})}),e.jsx(i,{fullWidth:!0,sx:{mb:3},children:e.jsx(c,{disablePortal:!0,options:p,getOptionLabel:t=>t.name_english,value:p.find(t=>t.id===g)||null,onChange:et,renderInput:t=>e.jsx(n,{...t,label:"Therapist"})})}),e.jsx(i,{fullWidth:!0,sx:{mb:3},children:e.jsx(c,{disablePortal:!0,options:S,getOptionLabel:t=>t.name_english,value:S.find(t=>t.id===y)||null,onChange:st,renderInput:t=>e.jsx(n,{...t,label:"Assistant"})})}),e.jsx(i,{fullWidth:!0,sx:{mb:3},children:e.jsx(c,{disablePortal:!0,options:_,getOptionLabel:t=>t.name_english,value:_.find(t=>t.id===D)||null,onChange:at,renderInput:t=>e.jsx(n,{...t,label:"Sale Person"})})}),e.jsx(r,{sx:{mb:3},children:e.jsx(n,{multiline:!0,rows:3,name:"doctor_remark",id:"outlined-basic",fullWidth:!0,label:"Doctor Remark",variant:"outlined",onChange:nt})}),e.jsxs(r,{sx:{pb:3,display:"flex",mt:2,float:"right"},children:[e.jsx(h,{underline:"hover",color:"primary",to:"/offset/list",children:e.jsx(P,{variant:"outlined",color:"primary",sx:{borderRadius:1,marginRight:1},children:"Cancel"})}),e.jsx(ht,{type:"submit",size:"medium",variant:"contained",sx:{borderRadius:1},loading:W,children:"Create"})]})]})})}),e.jsx(xt,{position:mt,autoClose:1500})]})}function Ct(){return e.jsxs(e.Fragment,{children:[e.jsx(ft,{children:e.jsx("title",{children:" Juvenus | Create Offset "})}),e.jsx(bt,{})]})}export{Ct as default};
