import{j as t,a6 as rt,B as N,Y as I,Z as ot,aj as st,y as R,a9 as lt,P as o,am as it,aa as G,ab as x,ao as ct,w as B,aJ as dt,r as i,ad as ut,a2 as pt,I as mt,x as ft,T as ht,C as gt,z as xt,D as jt,E as _t,F as yt,G as bt,H as Dt,J as Ct,K as St,M as $t,N as Ft,A as g,Q as Pt,W as wt}from"./index-019ce5a6.js";import{C as Tt,S as Ot}from"./Stack-4cf92a60.js";function A({filterStatus:m,filterName:f,onFilterName:C,onFilterFromDate:S,onFilterToDate:j,handleClear:h,onFilterCustomer:_,onFilterShop:$,customer:y,product:P,shop:b,onFilterProduct:F,fromCurrentDate:d,toCurrentDate:w}){return t.jsx(rt,{sx:{height:96,display:"flex",justifyContent:"space-between",p:n=>n.spacing(0,1,0,3)},children:t.jsxs(N,{sx:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[t.jsx(I,{type:"date",InputLabelProps:{shrink:!0},name:"from-date",onChange:S,id:"from-date",label:"From Date",variant:"outlined",value:w}),t.jsx(I,{type:"date",InputLabelProps:{shrink:!0},name:"from-date",onChange:j,id:"from-date",label:"To Date",variant:"outlined",value:d}),t.jsx(ot,{sx:{width:"150px"},children:t.jsx(st,{disablePortal:!0,options:y,getOptionLabel:n=>n.name,onChange:(n,T)=>_(n,T),renderInput:n=>t.jsx(I,{...n,label:"Customer"})})}),t.jsx(N,{sx:{alignSelf:"center"},children:t.jsx(R,{variant:"outlined",sx:{ml:3},startIcon:t.jsx(lt,{}),onClick:h,children:"Clear"})})]})})}A.propTypes={filterName:o.string,onFilterName:o.func,handleClear:o.func,onFilterFromDate:o.func,onFilterToDate:o.func,filterStatus:o.string,onFilterCustomer:o.func,onFilterShop:o.func,customer:o.any,product:o.any,shop:o.any,onFilterProduct:o.func,fromCurrentDate:o.any,toCurrentDate:o.any};function E({headLabel:m}){return t.jsx(it,{children:t.jsx(G,{children:m.map(f=>t.jsx(x,{align:f.align||"left",sx:{width:f.width,minWidth:f.minWidth},children:t.jsx(ct,{hideSortIcon:!0,children:f.label})},f.id))})})}E.propTypes={headLabel:o.array};function q({no:m,id:f,date:C,doctor_name:S,therapist_name:j,assistant_nurse_name:h,procedure_name:_,offset_qty:$,offset_price:y,remark:P}){B(),dt();const[b,F]=i.useState(!1),d=()=>{F(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(G,{hover:!0,tabIndex:-1,role:"checkbox",children:[t.jsx(x,{align:"center",children:f}),t.jsx(x,{align:"center",children:C??"-"}),t.jsx(x,{align:"center",children:S??"-"}),t.jsx(x,{align:"center",children:j??"-"}),t.jsx(x,{align:"center",children:h??"-"}),t.jsx(x,{align:"center",children:_??"-"}),t.jsx(x,{align:"center",children:$??"-"}),t.jsx(x,{align:"center",children:y??"-"})]}),t.jsx(ut,{open:!!b,anchorEl:b,onClose:()=>F(!1),anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:t.jsxs(pt,{onClick:d,sx:{mr:2},children:[t.jsx(mt,{icon:"mdi:delete",sx:{mr:2}}),"Delete"]})})]})}q.propTypes={no:o.number,id:o.number,date:o.string,doctor_name:o.string,therapist_name:o.string,assistant_nurse_name:o.string,procedure_name:o.string,offset_qty:o.string,offset_price:o.string,remark:o.string};function It(){const m=B(),[f]=ft();f.get("page"),f.get("keyword");const[C,S]=i.useState(null),[j,h]=i.useState(null),[_,$]=i.useState(!0),[y,P]=i.useState(!1),[b,F]=i.useState(!1),[d,w]=i.useState(null),[n,T]=i.useState(new Date().toISOString().slice(0,10)),[c,W]=i.useState(new Date().toISOString().slice(0,10)),[L,D]=i.useState([]),[u,z]=i.useState(null),[O,H]=i.useState(null),[v,J]=i.useState(null),[M,Q]=i.useState([]),[p,Lt]=i.useState(1),V=async()=>{var r,e;const a=await g.GetDoctorOffsetLists();console.log(a),D((r=a==null?void 0:a.data)==null?void 0:r.data),h((e=a==null?void 0:a.data)==null?void 0:e.pagination),$(!1)},K=async()=>{const a=await g.GetCustomerLists();Q(a==null?void 0:a.data)};i.useEffect(()=>{V(),K()},[]);const Y=async(a,r)=>{var s,l;w(r),m(`/doctor-offset-report?page=${r===null?"":r}&from_date=${n===null?"":n}&to_date=${c===null?"":c}&customer_id=${u===null?"":u}&type=${p===null?"":p}`);const e=await g.GetDoctorOffsetLists(r,n,c,u);D((s=e==null?void 0:e.data)==null?void 0:s.data),h((l=e==null?void 0:e.data)==null?void 0:l.pagination)},Z=async a=>{var s,l;const r=a.target.value;T(r),m(`/doctor-offset-report?page=${d===null?"":d}&from_date=${r===null?"":r}&to_date=${c===null?"":c}&customer_id=${u===null?"":u}&type=${p===null?"":p}`);const e=await g.GetDoctorOffsetLists("",r,"","");D((s=e==null?void 0:e.data)==null?void 0:s.data),h((l=e==null?void 0:e.data)==null?void 0:l.pagination)},U=async a=>{var s,l;const r=a.target.value;W(r),m(`/doctor-offset-report?page=${d===null?"":d}&from_date=${n===null?"":n}&to_date=${r===null?"":r}&customer_id=${u===null?"":u}&type=${p===null?"":p}`);const e=await g.GetDoctorOffsetLists("",n,r,"");D((s=e==null?void 0:e.data)==null?void 0:s.data),h((l=e==null?void 0:e.data)==null?void 0:l.pagination)},X=async(a,r)=>{var l,k;const e=r.id;z(r.id),m(`/doctor-offset-report?page=${d===null?"":d}&from_date=${n===null?"":n}&to_date=${c===null?"":c}&customer_id=${e===null?"":e}&type=${p===null?"":p}`);const s=await g.GetDoctorOffsetLists("",n,c,e);D((l=s==null?void 0:s.data)==null?void 0:l.data),h((k=s==null?void 0:s.data)==null?void 0:k.pagination)},tt=async(a,r)=>{var l;const e=r.id;H(e),m(`/patient-sales-report?page=${d===null?"":d}&from_date=${n===null?"":n}&to_date=${c===null?"":c}&customer_id=${u===null?"":u}&product_id=${e===null?"":e}&shop_id=${v===null?"":v}&type=${p===null?"":p}`);const s=await g.GetPatientReportLists("",n,c,u,e);h((l=s==null?void 0:s.data)==null?void 0:l.pagination)},et=async(a,r)=>{var l;const e=r.id;J(e),m(`/patient-sales-report?page=${d===null?"":d}&from_date=${n===null?"":n}&to_date=${c===null?"":c}&customer_id=${u===null?"":u}&product_id=${O===null?"":O}&shop_id=${e===null?"":e}&type=${p===null?"":p}`);const s=await g.GetPatientReportLists("",n,c,u,O,e);h((l=s==null?void 0:s.data)==null?void 0:l.pagination)},at=async()=>{m("/doctor-offset-report"),window.location.reload()},nt=async()=>{try{const a=await g.DownloadDoctorOffsetReport("",n,c,u,p)}catch(a){console.error("Failed to download the report:",a),Pt.error("Failed to download the report.")}};return t.jsxs(Tt,{maxWidth:"xl",children:[t.jsxs(Ot,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[t.jsx(ht,{variant:"h4",children:"Doctor Offset Report"}),t.jsx(R,{variant:"contained",onClick:()=>nt(),children:"Export"})]}),t.jsxs(gt,{children:[t.jsx(A,{onFilterFromDate:Z,onFilterToDate:U,fromCurrentDate:n,toCurrentDate:n,onFilterCustomer:X,onFilterShop:et,handleClear:at,customer:M,onFilterProduct:tt}),_&&t.jsx(xt,{color:"secondary"}),t.jsx(jt,{children:t.jsx(_t,{sx:{overflow:"unset"},children:t.jsxs(yt,{sx:{minWidth:1e3},children:[t.jsx(E,{headLabel:[{id:"id",label:"No",align:"center"},{id:"date",label:"Date",align:"center"},{id:"doctor_name",label:"Doctor Name",align:"center"},{id:"therapist_name",label:"Therapist Name",align:"center"},{id:"assistant_nurse_name",label:"Assistant Nurse Name",align:"center"},{id:"procedure_name",label:"Procedure Name",align:"center"},{id:"offset_qty",label:"Offset Qty",align:"center"},{id:"offset_price",label:"Price Of Offset Procedure",align:"center"},{id:"remark",label:"Remark",align:"center"}]}),t.jsx(bt,{children:L?L.map((a,r)=>t.jsx(q,{no:a.id,id:r+1,date:a.date,doctor_name:a.doctor_name,therapist_name:a.therapist_name,assistant_nurse_name:a.assistant_nurse_name,procedure_name:a.procedure_name,offset_qty:a.offset_qty,offset_price:a.offset_price,remark:a.remark},a.id)):!_&&t.jsx(Dt,{query:C})})]})})}),j&&t.jsx(Ct,{sx:{float:"right"},count:j.total_page,page:j.page,onChange:Y})]}),t.jsx(St,{openDialog:y,setOpenDialog:P,disabled:b}),t.jsx($t,{position:Ft,autoClose:1500})]})}function Nt(){return t.jsxs(t.Fragment,{children:[t.jsx(wt,{children:t.jsx("title",{children:" Juvenus POS | Doctor Offset Report List "})}),t.jsx(It,{})]})}export{Nt as default};
