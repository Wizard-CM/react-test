import{r,u as n,d as l,s as u,j as t,C as c}from"./index-BTGMLHlo.js";import{P as m}from"./Post_Form-Aq1m031J.js";import"./Button-DL5L6TLJ.js";const d=()=>{const[e,i]=r.useState(null),{slug:s}=n(),a=l();return r.useEffect(()=>{s?u.getSinglePost(s).then(o=>{o&&i(o)}):a("/")},[s,a]),e?t.jsx("div",{className:"py-8",children:t.jsx(c,{children:t.jsx(m,{post:e})})}):null};export{d as default};