import{r as m,d as p,g as f,j as e,f as o,h as n,l as h}from"./index-BTGMLHlo.js";import{u as g,B as j}from"./Button-DL5L6TLJ.js";const w=()=>{const[s,r]=m.useState(""),i=p(),c=f(),{register:t,handleSubmit:d}=g(),u=async x=>{r("");try{if(await n.login(x)){const l=await n.getCurrentUser();l&&c(h(l)),i("/")}}catch(a){r(a.message)}};return e.jsx("div",{className:"w-full h-full flex justify-center flex-col items-center",children:e.jsxs("div",{className:"w-[400px] p-10 shadow-2xl rounded-md",children:[e.jsx("h2",{className:"text-4xl font-serif mb-5 w-full text-center",children:"Login"}),e.jsxs("form",{onSubmit:d(u),className:"w-full max-w-lg rounded-xl border-[1px] border-white flex flex-col gap-9",children:[e.jsx(o,{label:"email :",type:"email",placeHolder:"Enter Your Email",...t("email",{required:!0})}),e.jsx(o,{label:"password :",type:"password",placeHolder:"Enter Your Password",...t("password",{required:!0})}),e.jsx(j,{type:"submit",children:"Sign In"}),s&&e.jsx("p",{className:"text-red-600 text-center",children:s})]})]})})},y=()=>e.jsx("div",{children:e.jsx(w,{})});export{y as default};
