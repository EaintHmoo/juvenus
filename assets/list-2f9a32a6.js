import{w as z,r as l,j as e,aa as H,ab as r,V as ee,aF as T,ac as te,I as m,ad as ae,a2 as f,P as a,am as ne,ao as se,a6 as ie,B as W,a7 as re,a8 as oe,Z as le,a0 as ce,y as M,a9 as de,x as pe,T as ge,ag as ue,C as he,D as xe,E as je,F as me,G as fe,H as ve,J as ye,K as be,aG as Ce,M as _e,N as Se,A as C,Q as D,W as we}from"./index-019ce5a6.js";import{C as Te,S as Pe}from"./Stack-4cf92a60.js";function Q({no:i,id:o,from_product:_,to_product:h,from_qty:v,to_qty:p,status:d,shop:y,approved_at:A,created_by:E,updated_by:x,approved_by:F,setOpenDialog:I,setDeleteId:S,setOpenApproveDialog:L,setUpdateId:w}){const g=z(),[P,j]=l.useState(!1),b=O=>{j(O.currentTarget)},k=()=>{j(!1),I(!0),S(i)},N=()=>{g(`/conversion/${i}/detail`)},B=()=>{g(`/conversion/${i}/edit`)},$=()=>{j(!1),L(!0),w(i)};return console.log(d),e.jsxs(e.Fragment,{children:[e.jsxs(H,{hover:!0,tabIndex:-1,role:"checkbox",children:[e.jsx(r,{align:"center",children:o}),e.jsx(r,{align:"center",children:_}),e.jsx(r,{align:"center",children:h}),e.jsx(r,{align:"center",children:v}),e.jsx(r,{align:"center",children:p}),e.jsx(r,{align:"center",children:e.jsx(ee,{label:d==T.pending?"pending":"approved",sx:{textTransform:"capitalize"},color:d==T.pending?"warning":"success"})}),e.jsx(r,{align:"center",children:y??"-"}),e.jsx(r,{align:"center",children:A??"-"}),e.jsx(r,{align:"center",children:E??"-"}),e.jsx(r,{align:"center",children:x??"-"}),e.jsx(r,{align:"center",children:F??"-"}),e.jsx(r,{align:"right",children:e.jsx(te,{onClick:b,children:e.jsx(m,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(ae,{open:!!P,anchorEl:P,onClose:()=>j(!1),anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[d===T.pending?e.jsxs(f,{onClick:B,children:[e.jsx(m,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}):e.jsx(e.Fragment,{}),d===T.pending?e.jsxs(f,{onClick:k,sx:{color:"error.main"},children:[e.jsx(m,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]}):e.jsx(e.Fragment,{}),e.jsxs(f,{onClick:N,sx:{mr:2},children:[e.jsx(m,{icon:"ph:eye-bold",sx:{mr:2}}),"View"]}),d===T.pending?e.jsxs(f,{onClick:$,sx:{mr:2},children:[e.jsx(m,{icon:"material-symbols-light:order-approve-outline",sx:{mr:2}}),"Approve"]}):e.jsx(e.Fragment,{})]})]})}Q.propTypes={no:a.number,id:a.number,from_product:a.string,to_product:a.string,from_qty:a.string,to_qty:a.string,status:a.string,shop:a.string,approved_at:a.string,created_by:a.string,updated_by:a.string,approved_by:a.string,setOpenDialog:a.func,setOpenApproveDialog:a.func,setDeleteId:a.func,setUpdateId:a.func};function R({headLabel:i}){return e.jsx(ne,{children:e.jsx(H,{children:i.map(o=>e.jsx(r,{align:o.align||"left",sx:{width:o.width,minWidth:o.minWidth},children:e.jsx(se,{hideSortIcon:!0,children:o.label})},o.id))})})}R.propTypes={headLabel:a.array};function V({filterStatus:i,filterName:o,onFilterName:_,handleClear:h,onFilterStatus:v}){return e.jsx(ie,{sx:{height:96,display:"flex",justifyContent:"space-between",p:p=>p.spacing(0,1,0,3)},children:e.jsxs(W,{sx:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[e.jsx(re,{value:o,onChange:_,placeholder:"Search ...",startAdornment:e.jsx(oe,{position:"start",children:e.jsx(m,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),e.jsx(le,{sx:{width:"150px"},children:e.jsxs(ce,{displayEmpty:!0,value:i||"",onChange:v,children:[e.jsx(f,{disabled:!0,value:"",children:e.jsx("em",{children:"Status"})}),e.jsx(f,{value:"1",children:"Pending"}),e.jsx(f,{value:"2",children:"Approved"})]})}),e.jsx(W,{sx:{alignSelf:"center"},children:e.jsx(M,{variant:"outlined",sx:{ml:3},startIcon:e.jsx(de,{}),onClick:h,children:"Clear"})})]})})}V.propTypes={filterName:a.string,onFilterName:a.func,handleClear:a.func,filterStatus:a.string,onFilterStatus:a.func};function De(){const i=z(),[o]=pe(),_=o.get("page"),h=o.get("keyword"),[v,p]=l.useState([]),[d,y]=l.useState(null),[A,E]=l.useState(!0),[x,F]=l.useState(""),[I,S]=l.useState(!1),[L,w]=l.useState(!1),[g,P]=l.useState(""),[j,b]=l.useState(!1),[k,N]=l.useState(null),[B,$]=l.useState(null),O=async()=>{S(!1),b(!0);const t=await C.DeleteConversion(k);t.code===200?(b(!1),D.success(t.message,{theme:"colored"}),setTimeout(()=>q(),2e3)):D.error(t.message)},J=async()=>{w(!1),b(!0);const t=await C.ApproveConversion(B);t.code===200?(b(!1),D.success(t.message,{theme:"colored"}),setTimeout(()=>q(),2e3)):D.error(t.message)},q=async()=>{var n,c;const t=await C.GetConversionList(_,h),u=(n=t==null?void 0:t.data)==null?void 0:n.data.map(s=>({...s,approved_at:s.approved_at?new Date(s.approved_at).toLocaleString():null}));p(u),y((c=t==null?void 0:t.data)==null?void 0:c.pagination)};l.useEffect(()=>{q()},[]);const K=async t=>{var c,s;i(`/conversion/list?keyword=${t.target.value}&status=${g}&page=1`),F(t.target.value);const n=await C.GetConversionListByName(1,t.target.value,g);p((c=n==null?void 0:n.data)==null?void 0:c.data),y((s=n==null?void 0:n.data)==null?void 0:s.pagination)},Z=async(t,u)=>{var G,U;const c=t.target.value;i(`/conversion/list?keyword=${x}&status=${c}&page=1`),P(t.target.value);const s=await C.GetConversionListByName(1,x,c);p((G=s==null?void 0:s.data)==null?void 0:G.data),y((U=s==null?void 0:s.data)==null?void 0:U.pagination)},X=async(t,u)=>{var c,s;i(`/conversion/list?&keyword=${h===null?"":h}&status=${g}&page=${u}`);const n=await C.GetConversionListByName(u,x,g);p((c=n==null?void 0:n.data)==null?void 0:c.data),y((s=n==null?void 0:n.data)==null?void 0:s.pagination)},Y=async()=>{i("/conversion/list"),window.location.reload()};return e.jsxs(Te,{maxWidth:"xl",children:[e.jsxs(Pe,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(ge,{variant:"h4",children:"Unit Conversion"}),e.jsx(ue,{underline:"hover",color:"primary",href:"/conversion/create",children:e.jsx(M,{variant:"contained",color:"primary",startIcon:e.jsx(m,{icon:"eva:plus-fill"}),children:"New Conversion"})})]}),e.jsxs(he,{children:[e.jsx(V,{filterName:x,filterStatus:g,onFilterName:K,onFilterStatus:Z,handleClear:Y}),e.jsx(xe,{children:e.jsx(je,{sx:{overflow:"unset"},children:e.jsxs(me,{sx:{minWidth:1e3},children:[e.jsx(R,{headLabel:[{id:"id",label:"No",align:"center"},{id:"from_product",label:"From Product",align:"center"},{id:"to_product",label:"To Product",align:"center"},{id:"from_qty",label:"From Qty",align:"center"},{id:"to_qty",label:"To Qty",align:"center"},{id:"status",label:"Status",align:"center"},{id:"pos_shop_id",label:"Shop",align:"center"},{id:"approved_at",label:"Approved At",align:"center"},{id:"created_by",label:"Created By",align:"center"},{id:"updated_by",label:"Updated By",align:"center"},{id:"approved_by",label:"Approved By",align:"center"},{id:"action",label:"Action",align:"center"}]}),e.jsx(fe,{children:v?v.map((t,u)=>e.jsx(Q,{no:t.id,id:u+1,from_product:t.from_product,to_product:t.to_product,from_qty:t.from_qty,to_qty:t.to_qty,status:t.status,shop:t.shop,approved_at:t.approved_at,created_by:t.created_by,updated_by:t.updated_by,approved_by:t.approved_by,setOpenDialog:S,setOpenApproveDialog:w,setDeleteId:N,setUpdateId:$},t.id)):!A&&e.jsx(ve,{query:x})})]})})}),d&&e.jsx(ye,{sx:{float:"right"},count:d.total_page,page:d.page,onChange:X})]}),e.jsx(be,{openDialog:I,setOpenDialog:S,handleDelete:O,disabled:j}),e.jsx(Ce,{openApproveDialog:L,setOpenApproveDialog:w,handleApprove:J,disabled:j}),e.jsx(_e,{position:Se,autoClose:1500})]})}function Ie(){return e.jsxs(e.Fragment,{children:[e.jsx(we,{children:e.jsx("title",{children:" Juvenus POS | Conversion List "})}),e.jsx(De,{})]})}export{Ie as default};
