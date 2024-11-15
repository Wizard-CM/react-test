import{d as v,e as S,j as t,f as c,R as y,s as i,S as $}from"./index-yag6wL5M.js";import{u as q}from"./index.esm-BOc36_KT.js";import{B as F}from"./Button-j7ZomHxx.js";function V({post:e}){var g,d,o,x,f;const{register:r,handleSubmit:j,setValue:N,getValues:h,formState:{errors:l}}=q({defaultValues:{title:(e==null?void 0:e.title)||"",slug:(e==null?void 0:e.$id)||"",content:(e==null?void 0:e.content)||"",status:(e==null?void 0:e.status)||"active"}}),n=v(),u=S(a=>a.auth.userData),w=async a=>{if(console.log(a),e){const s=a.image[0]?await i.uploadFile(a.image[0]):null;s&&i.deleteFile(e.featuredImage);const m=await i.updatePost({slug:e.$id,content:a.content,title:a.title,featuredImage:s?s.$id:e.featuredImage});m&&(n(`/post/${m.$id}`),console.log(m.$id))}else{const s=await i.uploadFile(a.image[0]);if(s){console.log(s.bucketId);const m=new Image;m.src=i.getFilePreview(s.bucketId);const I=s.$id;a.featuredImage=I;const b=await i.createPost({...a,userId:u.$id,userName:u.name});console.log(a),b&&n(`/post/${b.$id}`)}}};return t.jsxs("form",{onSubmit:j(w),className:"flex flex-wrap mt-5",children:[t.jsxs("div",{className:"w-full md:w-2/3 px-2",children:[t.jsx(c,{label:"Title :",placeholder:"Title",className:"",...r("title",{required:"Title is required"})}),l.title&&t.jsx("p",{className:"text-red-600 text-[0.8rem] m-0 mb-4",role:"alert",children:(g=l.title)==null?void 0:g.message}),t.jsx(c,{label:"Slug :",placeholder:"Slug",className:"",...r("slug",{required:"Slug is required"})}),l.slug&&t.jsx("p",{className:"text-red-600 text-[0.8rem] m-0 mb-4",role:"alert",children:(d=l.slug)==null?void 0:d.message}),t.jsx(y,{label:"Content :",defaultValue:h("content"),onChange:a=>{N("content",a)},...r("content")}),l.content&&t.jsx("p",{className:"text-red-600 text-[0.8rem] m-0 mb-4",role:"alert",children:(o=l.content)==null?void 0:o.message})]}),t.jsxs("div",{className:"w-full md:w-1/3 px-2 mt-5 md:mt-0",children:[t.jsx(c,{label:"Featured Image :",type:"file",className:"",accept:"image/png, image/jpg, image/jpeg, image/gif",...r("image",{required:"Image is required"})}),l.image&&t.jsx("p",{className:"text-red-600 text-[0.8rem] m-0 mb-4",role:"alert",children:(x=l.image)==null?void 0:x.message}),t.jsx(c,{label:"Category :",type:"text",className:"",placeholder:"category",...r("category",{required:"Category is required"})}),l.category&&t.jsx("p",{className:"text-red-600 text-[0.8rem] m-0 mb-4",role:"alert",children:(f=l.category)==null?void 0:f.message}),e&&t.jsx("div",{className:"w-full ",children:t.jsx("img",{src:i.getFilePreview(e.featuredImage),alt:e.title,className:"rounded-lg"})}),t.jsx($,{options:["active","inactive"],label:"Status",className:"",...r("status",{required:!0})}),t.jsx(F,{type:"submit",bgColor:e?"bg-green-500":void 0,className:"w-full",children:e?"Update":"Submit"})]})]})}export{V as P};
