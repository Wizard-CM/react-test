import{j as e,L as o,p as y,s as n,r as c,a as F,C}from"./index-BTGMLHlo.js";import{m as f,L as $}from"./data-6bVgx-4t.js";const i=({children:r})=>e.jsx("h3",{className:"text-xl font-light font-serif",children:r}),h=({post:r,newdate:a})=>e.jsx(o,{to:`/post/${r.$id}`,children:e.jsxs("div",{className:"flex items-center border-b-[1px] border-gray-300 py-1",children:[e.jsxs("div",{className:"left w-full",children:[e.jsxs("div",{className:"flex gap-3 font-mono",children:[e.jsx("p",{className:"text-[0.7rem] capitalize",children:r.userName}),e.jsxs("p",{className:"text-[0.7rem]",children:[f[a==null?void 0:a.getMonth()]," ",a==null?void 0:a.getDate(),",",a==null?void 0:a.getFullYear()]})]}),e.jsx("h3",{className:"mt-1 font-semibold capitalize",children:r==null?void 0:r.title}),e.jsx("span",{className:"font-[0.6rem] mb-2 text-[0.8rem] text-gray-700",children:y(r.content)}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:"my-2 px-2 bg-[#F0F0F0] border-[1px] text-[0.9rem] font-serif rounded-lg capitalize text-blue-600",children:r.category}),e.jsxs("div",{className:"flex items-center",children:[e.jsx($,{}),e.jsx("p",{className:" px-1  text-[0.7rem]  font-bold",children:r==null?void 0:r.likes})]})]})]}),e.jsx("div",{className:"right",children:e.jsx("img",{src:n.getFilePreview(r==null?void 0:r.featuredImage),className:"w-44 h-28 shadow-sm object-cover",alt:""})})]})}),A=({children:r})=>e.jsx("button",{className:" text-blue-600 px-2 bg-[#F0F0F0] border-[1px] font-serif rounded-lg capitalize",children:r}),t=["All"],p=()=>{const[r,a]=c.useState([]),[d,m]=c.useState([]),[j,g]=c.useState(!0),[u,N]=c.useState("All");c.useEffect(()=>{n.getAllPosts().then(s=>{s&&(s.documents.map(l=>{t.find(v=>v.toLocaleUpperCase()==l.category.toLocaleUpperCase())||t.push(l.category)}),a(s.documents),g(!1))})},[]);function b(s){N(s);const l=r.filter(x=>x.category==s);s!="All"?m(l):m(r)}return j?e.jsx(F,{}):e.jsx("div",{className:"w-full",children:e.jsx(C,{children:e.jsxs("div",{className:"parent flex gap-5 flex-col-reverse md:flex-row",children:[e.jsxs("div",{className:"home-left w-full md:w-[70%] min-h-96  md:border-r-[2px] border-gray-900 pe-5",children:[e.jsx("div",{className:"w-full border-b-[1px] py-2 mb-3 border-gray-900 uppercase",children:e.jsx(i,{children:u})}),d.length>0?d.map(s=>{const l=new Date(s==null?void 0:s.$createdAt);return e.jsx(h,{newdate:l,post:s},s.$id)}):r.map(s=>{const l=new Date(s==null?void 0:s.$createdAt);return e.jsx(h,{newdate:l,post:s},s.$id)}),r.length==0&&e.jsx("h2",{className:"text-3xl w-full font-semibold text-center",children:"No Posts To Show"})]}),e.jsxs("div",{className:"home-right w-full md:w-[30%]  ",children:[e.jsxs("div",{className:"top",children:[e.jsx("div",{className:"my-3",children:e.jsx(i,{children:"Available  Categories"})}),e.jsx("div",{className:"flex gap-3 flex-wrap",children:t.map((s,l)=>e.jsx("span",{onClick:()=>{b(s)},children:e.jsx(A,{children:s})},l))})]}),e.jsxs("div",{className:"hidden md:block bottom",children:[e.jsx("div",{className:"my-3",children:e.jsx(i,{children:"Trending"})}),r.slice(3).map(s=>{const l=new Date(s==null?void 0:s.$createdAt);return e.jsx(o,{to:`/post/${s.$id}`,className:"",children:e.jsxs("div",{className:"flex gap-3 items-center border-b-[1px] border-gray-300 py-3",children:[e.jsx("div",{className:"left",children:e.jsx("img",{src:n.getFilePreview(s==null?void 0:s.featuredImage),className:"w-24 h-16 shadow-sm object-cover",alt:""})}),e.jsxs("div",{className:"right w-full",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("p",{className:"text-[0.7rem] font-mono capitalize",children:s.userName}),e.jsxs("p",{className:"text-[0.7rem]",children:[f[l==null?void 0:l.getMonth()]," ",l==null?void 0:l.getDate(),",",l==null?void 0:l.getFullYear()]})]}),e.jsx("h3",{className:"mt-2 font-semibold text-[0.8rem] capitalize",children:s==null?void 0:s.title})]})]})},s.$id)})]})]})]})})})};export{p as default};