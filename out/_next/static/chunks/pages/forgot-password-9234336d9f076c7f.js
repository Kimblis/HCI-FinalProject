(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{7627:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return n(9094)}])},9094:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return A},default:function(){return I}});var t=n(5893),i=n(7294),s=n(2580),a=n(6310),l=n(7747),c=n(2757),u=n(5674),o=n(8519),d=n(4225),h=n(4153),m=n(7405),x=n(3717),f=n(1293),p=n(2883),j=n(8618);function w(e){let{breakpoint:r,hide:n,children:t,ssr:i}=e,[s]=(0,j.a)(r,{ssr:i});return(n?!s:s)?t:null}var v=n(8940),y=(e,r)=>{var n,t;return null!=(t=null==(n=null==e?void 0:e.breakpoints)?void 0:n[r])?t:r};function g(e){let{children:r,ssr:n}=e,i=function(e){let{breakpoint:r="",below:n,above:t}=e,i=(0,v.F)(),s=y(i,n),a=y(i,t),l=r;return s?l=`(max-width: ${s})`:a&&(l=`(min-width: ${a})`),l}(e);return(0,t.jsx)(w,{breakpoint:i,ssr:n,children:r})}g.displayName="Show";var _=n(8783),b=n(8365),S=n(2564),E=()=>(0,t.jsx)(_.g,{w:"full",h:"full",py:0,spacing:10,alignItems:"flext-start",children:"Logo"});let N=()=>(0,t.jsx)(l.xu,{textAlign:"center",w:"full",children:(0,t.jsx)(c.X,{size:"2xl",fontFamily:"Shadows into light",children:"Recover Password"})}),k=()=>{let{resetPassword:e}=(0,b.a)(),[r,n]=(0,i.useState)(""),[l,c]=(0,i.useState)(""),[x,f]=(0,i.useState)(!1);return(0,t.jsx)(s.J9,{initialValues:{email:""},validationSchema:a.Ry({email:a.Z_().email("Must be a valid email").required("Email is required")}),onSubmit:async r=>{let{email:t}=r;try{n(""),f(!0),await e(t),c("Check your email for instructions on how to recover you password. Email usually arrives within 5 minutes")}catch(e){console.warn(e),n("Failed to reset password. Please try again later")}f(!1)},children:e=>(0,t.jsx)("form",{onSubmit:e.handleSubmit,children:(0,t.jsxs)(u.M,{columns:2,columnGap:3,rowGap:6,w:"full",children:[(0,t.jsx)(o.P,{colSpan:2,children:(0,t.jsx)(S.Z,{name:"email",placeholder:"Please enter email",type:"email"})}),(0,t.jsx)(o.P,{colSpan:2,children:(0,t.jsx)(d.z,{isLoading:x,variant:"primary",width:"full",mt:4,type:"submit",children:"Reset password"})}),r&&(0,t.jsx)(o.P,{colSpan:2,children:(0,t.jsxs)(h.b,{status:"error",children:[(0,t.jsx)(m.z,{}),r]})}),l&&(0,t.jsx)(o.P,{colSpan:2,children:(0,t.jsxs)(h.b,{status:"success",children:[(0,t.jsx)(m.z,{}),l]})})]})})})},L=()=>(0,t.jsxs)(x.k,{w:"full",direction:"row",children:[(0,t.jsx)(l.xu,{textAlign:"start",w:"full",children:(0,t.jsxs)(f.x,{children:["Do not have an account yet?",(0,t.jsx)(p.r,{color:"teal.500",pl:2,href:"/register",children:"sign up"})]})}),(0,t.jsx)(l.xu,{textAlign:"end",w:"full",children:(0,t.jsxs)(f.x,{children:["Remembered your password?",(0,t.jsx)(p.r,{color:"teal.500",pl:2,href:"/login",children:"sign in"})]})})]});var P=()=>(0,t.jsxs)(x.k,{h:{base:"auto",md:"100vh"},w:"full",py:[0,10,20],direction:{base:"column-reverse",md:"row"},children:[(0,t.jsx)(g,{above:"md",children:(0,t.jsx)(E,{})}),(0,t.jsxs)(_.g,{w:"full",h:"full",p:8,spacing:8,alignItems:"center",justify:"center",border:"1px",children:[(0,t.jsx)(N,{}),(0,t.jsx)(k,{}),(0,t.jsx)(L,{})]})]}),A=!0,I=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(P,{})})},2564:function(e,r,n){"use strict";n.d(r,{Z:function(){return f}});var t=n(5893),i=n(5970),s=n(5418),a=n(6105),l=n(8912),c=n(6554),u=n(7030),o=n(3179),d=n(2548),h=n(5432),m=(0,c.G)(function(e,r){let{htmlSize:n,...i}=e,s=(0,u.jC)("Input",i),a=(0,o.Lr)(i),c=(0,l.Y)(a),m=(0,h.cx)("chakra-input",e.className);return(0,t.jsx)(d.m.input,{size:n,...c,__css:s.field,ref:r,className:m})});m.displayName="Input",m.id="Input";var x=n(2580),f=e=>{let{label:r,isRequired:n,...l}=e,[c,u]=(0,x.U$)(l);return(0,t.jsxs)(i.NI,{isInvalid:!!(u.error&&u.touched),isRequired:n,children:[r&&(0,t.jsx)(s.l,{children:r}),(0,t.jsx)(x.gN,{as:m,...c,...l}),(0,t.jsx)(a.J1,{children:u.error})]})}},8618:function(e,r,n){"use strict";n.d(r,{a:function(){return s}});var t=n(6336),i=n(7294);function s(e,r={}){let{ssr:n=!0,fallback:s}=r,{getWindow:a}=(0,t.O)(),l=Array.isArray(e)?e:[e],c=Array.isArray(s)?s:[s];c=c.filter(e=>null!=e);let[u,o]=(0,i.useState)(()=>l.map((e,r)=>({media:e,matches:n?!!c[r]:a().matchMedia(e).matches})));return(0,i.useEffect)(()=>{let e=a();o(l.map(r=>({media:r,matches:e.matchMedia(r).matches})));let r=l.map(r=>e.matchMedia(r)),n=e=>{o(r=>r.slice().map(r=>r.media===e.media?{...r,matches:e.matches}:r))};return r.forEach(e=>{"function"==typeof e.addListener?e.addListener(n):e.addEventListener("change",n)}),()=>{r.forEach(e=>{"function"==typeof e.removeListener?e.removeListener(n):e.removeEventListener("change",n)})}},[a]),u.map(e=>e.matches)}}},function(e){e.O(0,[178,774,888,179],function(){return e(e.s=7627)}),_N_E=e.O()}]);