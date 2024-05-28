"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5469],{55469:function(e,n,t){t.d(n,{e:function(){return P}});var s=t(85893),i=t(94355),a=t(99522),l=t(6547),r=t(68186),o=t(70745),c=t(54531),d=t(54592),m=t(60421),u=t(48162),x=t(99645),f=t(51800),j=t(92618),h=t(91148),v=t(9191),p=t(3363),N=t(18074),b=t(51523),g=t(72573),k=t(27993),Z=t(66180),w=t(91371),C=t(83496),y=t(14200);let F={harvest:{token:"Final Token Fee",reward:"Harvest Reward"},openPosition:{amount:"Token Amount"},increase:{amount:"Final Deposit"},decrease:{token:"Final Token Fee",reward:"Harvest Reward",amount:"Minimum Received Amount"}},T={harvest:{token:"Initial Token Fee",reward:"Total Reward"},openPosition:{amount:"Selected Amount"},increase:{amount:"Initial Amount"},decrease:{token:"Initial Token Fee",reward:"Total Reward",amount:"Initial Amount"}};function P(e){var n;let t,{amount:a,onCancel:r,onConfirm:o,caseName:c,groupInfo:d}=e,m=new Promise((e,n)=>{t=e}),u=(0,C.w)({amount:(0,h.Do)([a].flat())}),j=null===(n=[a].flat())||void 0===n?void 0:n.map(e=>null==e?void 0:e.token.mint),N=(0,h.Do)(j);return!function(e){if(!e||!(0,y.W)(e))return!0;let n=(0,v.Jt)("USER_CONFIRMED_TOKEN_2022");return!!n&&(0,h.Do)([e].flat()).every(e=>n.includes((0,p.ZP)(e)))}(N)?(i.Z.getState().popConfirm({cardWidth:"lg",type:"warning",title:"Confirm Token2022",description:(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"mb-2 text-center",children:"This token uses the Token2022 program, which is unaudited and still in beta. The token may include extensions, such as transfer fees. Confirm that you understand the risks and interact with caution."})}),additionalContent:e=>{let{updateConfig:n}=e;return(0,s.jsx)(l.j,{promise:u,fallback:(0,s.jsx)(f.Z,{className:"justify-center",children:(0,s.jsx)(x.Z,{className:"mx-auto"})}),onFullfilled:()=>n({disableConfirmButton:!1}),children:e=>e&&d?(0,s.jsxs)("div",{className:"bg-[#abc4ff1a] rounded-xl",children:[(0,s.jsx)(B,{ammPool:d.ammPool,priceLower:d.priceLower,priceUpper:d.priceUpper}),(0,s.jsx)("div",{className:"flex-grow px-4 rounded-xl divide-y-1.5 divide-[#abc4ff1a]",children:e.map((e,n)=>e?(0,s.jsx)(R,{type:"amount",className:"py-4",amount:e.amount,fee:e.fee,caseName:c},n):void 0)})]}):e&&(0,s.jsx)("div",{className:"space-y-2 text-left w-full",children:e.map(e=>(0,s.jsx)("div",{className:"bg-[#abc4ff1a] rounded-xl px-4",children:(0,s.jsx)(R,{type:"amount",className:"py-4",amount:e.amount,fee:e.fee,caseName:c})},(0,p.ZP)(e.amount.token.mint)))})})},confirmButtonIsMainButton:!0,disableConfirmButton:!0,cancelButtonText:"Cancel",confirmButtonText:"Confirm",onConfirm:()=>{t(!0),null==o||o()},onCancel:()=>{t(!1),null==r||r()}}),{hasConfirmed:m}):{hasConfirmed:Promise.resolve(!0)}}function R(e){var n,t;let{caseName:i,className:a,amount:l,fee:r,type:c}=e;return(0,s.jsxs)(m.Z,{className:(0,Z.m)("grid-cols-2 mobile:grid-cols-1 gap-4 items-center text-[#abc4ff]",a),children:[(0,s.jsxs)(d.Z,{className:"gap-3",children:[(0,s.jsx)("div",{className:"text-sm",children:i&&c?(0,k.u)(null===(n=F[i])||void 0===n?void 0:n[c],[l.token]):"Deposit amount"}),(0,s.jsxs)(f.Z,{className:"items-center gap-1",children:[(0,s.jsx)(o.Z,{token:l.token,size:"sm"}),(0,s.jsx)("div",{className:"text-white",children:(0,g.B)((0,b.h9)(l,null!=r?r:0),{decimalLength:"auto ".concat(l.token.decimals)})}),(0,s.jsx)("div",{children:l.token.symbol})]})]}),(0,s.jsxs)(f.Z,{className:"gap-2 text-xs flex-wrap justify-between",children:[(0,s.jsxs)(d.Z,{className:"gap-4",children:[(0,s.jsx)("div",{className:"text-[#abc4ff80]",children:i&&c?(0,k.u)(null===(t=T[i])||void 0===t?void 0:t[c],[l.token]):"Initial amount"}),(0,s.jsxs)(f.Z,{className:"items-center gap-1",children:[(0,s.jsx)("div",{children:(0,g.B)(l)}),(0,s.jsx)("div",{children:l.token.symbol})]})]}),(0,s.jsxs)(d.Z,{className:"gap-4",children:[(0,s.jsx)("div",{className:"text-[#abc4ff80]",children:"Transfer Fee"}),(0,s.jsxs)(f.Z,{className:"items-center gap-1",children:[(0,s.jsx)("div",{children:(0,g.B)(null!=r?r:0)}),(0,s.jsx)("div",{children:null==r?void 0:r.token.symbol})]})]})]})]})}function B(e){let{ammPool:n,priceLower:t,priceUpper:i}=e,l=(0,w.ZP)(e=>e.isMobile),x=e=>Math.min(e+2,15);return(0,s.jsxs)(f.Z,{className:"gap-4 p-4 bg-[#141041] rounded-xl justify-between",children:[(0,s.jsxs)(r.Z,{is:l?"Col":"Row",className:"clickable flex-wrap items-center mobile:items-start",children:[(0,s.jsx)(c.Z,{className:"justify-self-center mr-2",size:l?"sm":"md",token1:n.base,token2:n.quote}),(0,s.jsx)(f.Z,{className:"mobile:text-xs font-medium mobile:mt-px items-center flex-wrap gap-2",children:(0,s.jsxs)(d.Z,{children:[(0,s.jsxs)(f.Z,{className:"items-center text-[#abc4ff]",children:[(0,s.jsx)("div",{className:"text-[#fff]",children:n.name}),(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(u.Z,{iconClassName:"ml-1",size:"sm",heroIconName:"information-circle"}),(0,s.jsx)(j.Z.Panel,{children:(0,s.jsx)("div",{className:"max-w-[300px] space-y-1.5",children:[null==n?void 0:n.base,null==n?void 0:n.quote].map((e,n)=>e?(0,s.jsxs)(f.Z,{className:"gap-2",children:[(0,s.jsx)(o.Z,{size:"xs",token:e}),(0,s.jsx)(a.U,{className:"grow",showDigitCount:5,addressType:"token",canCopy:!0,canExternalLink:!0,textClassName:"flex text-xs text-[#abc4ff] justify-start ",iconClassName:"text-[#abc4ff]",children:e.mintString})]},n):null)})})]})]}),(0,s.jsxs)("div",{className:"font-medium text-xs text-[#ABC4FF80]",children:["Fee ",(0,N.Z)(n.tradeFeeRate)]})]})})]}),t?(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-xs text-[#abc4ff80] font-medium",children:"My Position"}),(0,s.jsxs)(m.Z,{className:"items-center text-[#abc4ff] mobile:text-sm",children:[(0,g.B)(t,{decimalLength:15,maxSignificantCount:x(6)})," ","-"," ",(0,g.B)(i,{decimalLength:15,maxSignificantCount:x(6)})]})]}):void 0]})}},6547:function(e,n,t){t.d(n,{j:function(){return r}});var s=t(85893),i=t(27993),a=t(96398),l=t(67294);function r(e){var n,t;let[r,o]=(0,l.useState)(null!==(t=e.forceDebugStatus)&&void 0!==t?t:"pending"),[c,d]=(0,l.useState)(null);return(0,a.L)(()=>{let n=Promise.resolve(e.promise);n.then(n=>{var t;return e.forceDebugStatus||o("fullfilled"),null===(t=e.onFullfilled)||void 0===t||t.call(e,n),n},n=>{var t;return e.forceDebugStatus||o("rejected"),null===(t=e.onReject)||void 0===t||t.call(e),Promise.reject(n)}).then(e=>{d(e)})},[e.promise]),(0,s.jsx)(s.Fragment,{children:"pending"!==r&&c?null===(n=e.children)||void 0===n?void 0:n.call(e,c):(0,i.u)(e.fallback,[r])})}},68186:function(e,n,t){t.d(n,{Z:function(){return o}});var s=t(85893),i=t(16938),a=t(54592),l=t(60421),r=t(51800);function o(e){let{is:n,ColProps:t,RowProps:o,GridProps:c,...d}=e;return"Row"===n?(0,s.jsx)(r.Z,{...d,...o}):"Col"===n?(0,s.jsx)(a.Z,{...d,...t}):"Grid"===n?(0,s.jsx)(l.Z,{...d,...c}):"div"===n?(0,s.jsx)("div",{...(0,i.CE)(d,["domRef"]),ref:d.domRef}):(0,s.jsx)(s.Fragment,{children:d.children})}},99645:function(e,n,t){t.d(n,{Z:function(){return i}});var s=t(85893);function i(e){let{className:n}=e;return(0,s.jsxs)("div",{className:"lds-roller ".concat(null!=n?n:""," mobile:scale-75"),children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}}}]);