(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1584],{94361:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/acceleraytor/list",function(){return l(9944)}])},99881:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});var s=l(72573);function i(e){let{groupSeparator:t=",",fractionLength:l=2,groupSize:i=3}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e?"0":[e=>(0,s.B)(e),e=>"auto"===l?e:function(e,t){var l;let[,s="",i="",o=""]=null!==(l=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==l?l:[];return o?o.length<t?String(e):Number(e).toFixed(t):String(e)}(e,l),e=>{var l;let[,s="",o="",n=""]=null!==(l=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==l?l:[],a=[...o].reduceRight((e,l,s,o)=>{let n=o.length-1-s;return l+(0!==n&&n%i==0?t:"")+e},"");return n?"".concat(s).concat(a,".").concat(n):"".concat(s).concat(a)}].reduce((e,t)=>t(e),e)}},58819:function(e,t,l){"use strict";l.d(t,{K:function(){return r}});var s=l(91148),i=l(4465),o=l(17097),n=l(16938),a=l(27993);function r(e){var t;let{text:l,shouldSortResultAfterSearch:r=!0,matchConfigs:d,searchMode:m,sortBetweenSamePriority:x,priorityMergeMode:u}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!l)return Array.from(e);let h=Array.from(e).map(e=>(function(e){var t;let{item:l,searchText:r,matchConfigs:d=function(e){if((0,o.HD)(e)||(0,o.hj)(e))return[{text:String(e)}];if((0,o.Kn)(e)){let t=(0,n.xh)((0,n.CE)(e,["id","key"]),e=>(0,o.HD)(e)||(0,o.hj)(e)?{text:String(e)}:void 0);return(0,s.Do)(Object.values(t))}return[{text:""}]}(l),searchMode:c="greedy"}=e,m=String(r).trim().split(/\s|-/),x=(0,s.Do)((Array.isArray(t=(0,a.u)(d,[l]))?t:[t]).map(e=>(0,o.HD)(e)?{text:e}:e)),u=function(e){let t={item:e.item,allConfigs:e.matchRules,matched:!1,matchedConfigs:[]},l="eagle"===e.searchMode||"greedy"===e.searchMode,s="greedy"===e.searchMode,o=e.searchKeyWords,n=e.matchRules,a=[];for(let[e,s]of o.entries()){let o=!1,r=[];for(let[l,a]of n.entries()){let n,d;let c=a.entirely,m=()=>{if(null==n){let e=(0,i.X0)(a.text,s);n=e}return n},x=()=>{if(null==d){let e=(0,i.vR)(a.text,s);d=e}return d},u=c?m():x();u&&(o=!0,r.push(l),t.matched=!0,t.matchedConfigs.push({config:a,configIdx:l,isEntirelyMatched:m(),searchedKeywordIdx:e,searchedKeywordText:s}))}if(a.push({keywordIndex:e,matchedConfigIndexes:r}),l&&!o)return}return s?(()=>{let e=a.length,t=new Set;for(let{matchedConfigIndexes:e}of a)for(let l of e)t.add(l);return t.size>=e})()?t:void 0:t}({item:l,searchKeyWords:m,matchRules:x,searchMode:c});return u})({item:e,searchText:l,matchConfigs:d,searchMode:m})),b=h.filter(e=>null==e?void 0:e.matched),f=r?(t={priorityMergeMode:u,sortBetweenSamePriority:x},[...b].sort((e,l)=>{let s=c(l,t.priorityMergeMode)-c(e,t.priorityMergeMode);return 0===s&&t.sortBetweenSamePriority?-1*Number(t.sortBetweenSamePriority(e,l)):s})):b,g=(0,s.Do)(f.map(e=>e.item));return g}let d=new WeakMap;function c(e,t){if(d.has(e))return d.get(e);let l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"max",l=e.allConfigs,s=Array.from({length:l.length},()=>0);for(let{configIdx:t,isEntirelyMatched:l}of e.matchedConfigs)s[t]=l?2:1;return({max:()=>Math.max(...s),add:()=>s.reduce((e,t)=>e+t,0),"with-order":()=>s.reduce((e,t,l)=>e+t*3**(s.length-l),0)})[t]()}(e,t);return d.set(e,l),l}},9944:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return K}});var s=l(85893),i=l(67294),o=l(91371),n=l(96662),a=l(87479),r=l(43487),d=l(4929),c=l(31555),m=l(65737),x=l(31166),u=l(53002),h=l(68186),b=l(43067),f=l(70745),g=l(54592),j=l(23484),p=l(88132),v=l(28948),N=l(60421),Z=l(48162),w=l(89593),y=l(40471),C=l(82727),k=l(66042),F=l(99645),P=l(85830),T=l(69651),A=l(51800),S=l(29197),B=l(56419),M=l(95793),I=l(99881),W=l(3363),U=l(94059),E=l(18074),O=l(81451),q=l(72573),D=l(58819),R=l(43066),z=l(66180);function K(){(0,r.Z)();let e=(0,d.Z)(e=>e.idoHydratedInfos);return(0,s.jsxs)(P.Z,{mobileBarTitle:"AcceleRaytor",metaTitle:"AcceleRaytor - Raydium",children:[(0,s.jsx)(_,{}),Object.keys(e).length?(0,s.jsx)(L,{}):(0,s.jsx)(F.Z,{className:"mx-auto my-12"})]})}function _(){return(0,s.jsx)(g.Z,{className:"items-center gap-20 mb-11",children:(0,s.jsxs)(g.Z,{className:"items-center cyberpunk-bg-light-acceleraytor mobile:scale-75 mobile:translate-y-4",children:[(0,s.jsx)(y.Z,{src:"/logo/accecleraytor-text-logo.svg"}),(0,s.jsx)("div",{className:"text-[20px] mt-2 font-medium text-[#ABC4FF80] whitespace-nowrap",children:"A launchpad for new Solana projects"})]})})}function L(){let e=(0,d.Z)(e=>e.currentTab),t=(0,d.Z)(e=>e.idoHydratedInfos),l=(0,d.Z)(e=>e.searchText),n=(0,o.ZP)(e=>e.isMobile),a=(0,i.useMemo)(()=>Object.values(t).filter(e=>e.isUpcoming),[t]),r=Object.values(t).filter(e=>e.isOpen),c=Object.values(t).filter(e=>e.isClosed||e.canWithdrawBase),m=(0,i.useRef)(!1);!m.current&&a.length&&(d.Z.setState({currentTab:"Upcoming Pools"}),m.current=!0);let u="Upcoming Pools"===e?a:c,h=(0,x.ZP)(e=>e.isTokenUnnamedAndNotUserCustomized),b=(0,i.useMemo)(()=>(0,D.K)(u,{text:l,matchConfigs:e=>{var t,l;return[{text:e.id,entirely:!0},{text:(0,W.ZP)(null===(t=e.base)||void 0===t?void 0:t.mint),entirely:!0},{text:(0,W.ZP)(null===(l=e.quote)||void 0===l?void 0:l.mint),entirely:!0},e.projectName,e.base&&!h(e.base.mint)?e.base.symbol:void 0,e.quote&&!h(e.quote.mint)?e.quote.symbol:void 0]}}),[u,l]);return(0,s.jsxs)(s.Fragment,{children:[r.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"text-2xl mobile:text-base mobile:px-4 mb-6 mobile:mb-4 font-semibold text-white w-[min(890px,100%)] self-center",children:["Open Pool",r.length>1?"s":""]}),(0,s.jsx)(g.Z,{className:"gap-10 mobile:gap-8 w-[min(890px,100%)] mx-auto mobile:w-full",children:r.map(e=>(0,s.jsx)("div",{children:(0,s.jsx)(p.Z,{children:(0,s.jsxs)(j.Z,{defaultOpen:!0,children:[(0,s.jsx)(j.Z.Face,{children:t=>{let{isOpen:l}=t;return(0,s.jsx)(H,{open:l,info:e})}}),(0,s.jsx)(j.Z.Body,{children:(0,s.jsx)(J,{info:e})})]})})},e.id))})]}),(0,s.jsx)(S.Z,{currentValue:e,values:["Upcoming Pools","Closed Pools"],onChange:e=>{d.Z.setState({currentTab:e})},className:"self-center mobile:col-span-full ".concat(a.length>0?" mt-24 mobile:mt-16 mb-10 mobile:mb-8":r.length>0?"invisible mt-12 mobile:mt-8 mb-10 mobile:mb-8":"invisible m-0"),itemClassName:n?"min-w-[112px] h-[30px] px-2":"min-w-[128px]"}),(a.length>0||c.length>0)&&(0,s.jsxs)(A.Z,{className:"mobile:px-4 gap-6 mb-6 mobile:mb-4 justify-between w-[min(890px,100%)] self-center",children:[(0,s.jsx)("div",{className:"text-2xl mobile:text-base font-semibold text-white",children:e}),"Closed Pools"===e&&(0,s.jsx)(V,{className:"mobile:w-[12em]"})]}),(0,s.jsx)(g.Z,{className:"gap-12 mobile:gap-8 w-[min(890px,100%)] mx-auto mobile:w-full",children:b.length>0?b.map(t=>(0,s.jsx)("div",{children:(0,s.jsx)(p.Z,{children:(0,s.jsxs)(j.Z,{defaultOpen:"Upcoming Pools"===e,children:[(0,s.jsx)(j.Z.Face,{children:e=>{let{isOpen:l}=e;return(0,s.jsx)(H,{open:l,info:t})}}),(0,s.jsx)(j.Z.Body,{children:(0,s.jsx)(J,{info:t})})]})})},t.id)):(0,s.jsxs)("div",{className:"text-xl mobile:text-lg text-[#ABC4FF80] mx-auto",children:["( ","Closed Pools"===e&&l?"Searched Not Found":"Empty"," )"]})})]})}function V(e){let{className:t}=e,l=(0,o.ZP)(e=>e.isMobile),i=(0,d.Z)(e=>e.searchText);return(0,s.jsx)(C.Z,{value:i,className:(0,z.m)("px-2 py-2 mobile:py-1 gap-2 border-1.5 border-[rgba(196,214,255,0.5)] rounded-xl mobile:rounded-lg",t),inputClassName:"font-medium mobile:text-xs text-[rgba(196,214,255,0.5)] placeholder-[rgba(196,214,255,0.5)]",prefix:(0,s.jsx)(Z.Z,{heroIconName:"search",size:l?"sm":"md",className:"text-[rgba(196,214,255,0.5)]"}),suffix:(0,s.jsx)(Z.Z,{heroIconName:"x",size:l?"xs":"sm",className:"text-[rgba(196,214,255,0.5)] transition clickable ".concat(i?"opacity-100":"opacity-0 pointer-events-none"),onClick:()=>{d.Z.setState({searchText:""})}}),placeholder:"Search All",onUserInput:e=>{d.Z.setState({searchText:e})}})}function H(e){let{open:t,info:l}=e,i=(0,o.ZP)(e=>e.isMobile),a=(0,n.ZP)(e=>e.getChainDate);return(0,s.jsxs)("div",{className:"py-6 px-8 mobile:py-4 mobile:px-5 bg-[#141041]  rounded-t-3xl mobile:rounded-t-lg  ".concat(t?"":"rounded-b-3xl mobile:rounded-b-lg"),children:[(0,s.jsxs)(h.Z,{is:i?"Col":"Row",className:"flex-wrap items-stretch gap-5",children:[(0,s.jsxs)(A.Z,{className:"items-center gap-4 mobile:w-full",children:[(0,s.jsxs)(A.Z,{className:"items-center min-w-[160px] mobile:min-w-[120px] gap-4 mobile:gap-3 mobile:w-auto clickable",onClick:()=>(0,c.Eh)("/acceleraytor/detail",{queryProps:{idoId:l.id}}),children:[(0,s.jsx)(f.Z,{noCoinIconBorder:!0,size:i?"md":"lg",token:l.base}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-base mobile:text-sm font-semibold text-white",children:l.baseSymbol}),(0,s.jsx)("div",{className:"text-sm mobile:text-xs text-[#ABC4FF80]",children:l.projectName})]})]}),l.filled&&(0,s.jsx)(A.Z,{className:"flex-wrap gap-4  items-center border-l border-[rgba(171,196,255,0.5)] w-full self-center pl-6 mobile:pl-4",children:(0,s.jsx)(T.Z,{borderThemeMode:!0,className:"w-[180px] mobile:w-full",labelClassName:"text-sm font-bold",value:(0,U.Z)(l.filled),labelFormat:e=>"Filled: ".concat((0,E.Z)(e,{fixed:0}))})})]}),(0,s.jsx)(A.Z,{className:"gap-4 mobile:gap-6 grow justify-end mobile:justify-center",children:l.isUpcoming?(0,s.jsx)(X,{info:l}):l.isOpen?(0,s.jsx)(Y,{info:l}):(0,s.jsx)($,{idoInfo:l})})]}),(0,M.Sl)(a(),l.endTime)&&(0,s.jsx)("div",{className:"mx-auto w-max -mt-3 -mb-3 translate-y-3 mobile:mt-3 mobile:mb-0",children:(0,s.jsx)(Z.Z,{iconSrc:"/icons/acceleraytor-list-collapse-open.svg",className:"clickable hover:brightness-110 "})})]})}function X(e){let{info:t}=e,l=(0,o.ZP)(e=>e.isMobile);return(0,s.jsxs)(h.Z,{is:l?"Col":"Row",className:"items-center mobile:w-full",children:[(0,s.jsx)(b.Z,{size:l?"xs":"md",className:"frosted-glass-skygray mobile:mb-3 mobile:self-stretch",suffix:(0,s.jsx)(Z.Z,{className:"inline-block",size:"sm",heroIconName:"arrow-circle-right"}),onClick:()=>(0,c.Eh)("/acceleraytor/detail",{queryProps:{idoId:t.id}}),children:"Pool Information"}),l&&(0,s.jsx)(k.Z,{href:t.projectDetailLink,className:"text-[#ABC4FF80] font-medium text-xs",children:"Read Full Detail"})]})}function Y(e){let{info:t}=e,l=(0,o.ZP)(e=>e.isMobile);return(0,s.jsx)(b.Z,{size:l?"xs":"md",className:"frosted-glass-teal mobile:w-full",validators:[{should:t.isOpen}],onClick:e=>{let{ev:l}=e;l.stopPropagation(),(0,c.Eh)("/acceleraytor/detail",{queryProps:{idoId:t.id}})},children:"Join Lottery"})}function $(e){var t,l,n,r,c,m,x,h,f,j,p,N,Z,y,C,k,F,P,T,A,S;let{idoInfo:B}=e,M=(0,o.ZP)(e=>e.isMobile),I=(0,u.Z)(e=>e.connected),W=(0,u.Z)(e=>e.owner),U=(0,d.Z)(e=>e.refreshIdo),E=(0,o.ZP)(e=>e.isApprovePanelShown),[,q]=(0,R.N)(),[D,z]=(0,i.useState)(!1),[K,_]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{z(!1),_(!1)},[W]),(0,i.useEffect)(()=>{var e,t;(0,O.$u)(null==B?void 0:null===(e=B.ledger)||void 0===e?void 0:e.baseWithdrawn)&&z(!0),(0,O.$u)(null==B?void 0:null===(t=B.ledger)||void 0===t?void 0:t.quoteWithdrawn)&&_(!0)},[B]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(g.Z,{className:"items-center mobile:grow",children:[(0,s.jsx)(b.Z,{size:M?"xs":"md",className:"frosted-glass-teal mobile:self-stretch w-[160px] mobile:w-[100%] whitespace-normal",isLoading:E,validators:[{should:!D},{should:I,fallbackProps:{onClick:()=>o.ZP.setState({isWalletSelectorShown:!0})}},{should:B.ledger&&(0,O.gt)(null==B?void 0:null===(t=B.winningTickets)||void 0===t?void 0:t.length,0)&&(0,O.eq)(B.ledger.baseWithdrawn,0)},{should:B.canWithdrawBase,fallbackProps:{children:(0,s.jsxs)("div",{children:["Claim ",null!==(C=null===(l=B.base)||void 0===l?void 0:l.symbol)&&void 0!==C?C:"UNKNOWN"," in"," ",(0,s.jsx)(w.Z,{className:"justify-center",singleValueMode:!0,labelClassName:"text-base",endTime:Number(B.startWithdrawTime),onEnd:q})]})}}],onClick:e=>{let{ev:t}=e;t.stopPropagation(),(0,a.Z)({idoInfo:B,side:"base",onTxSuccess:()=>{z(!0),U(B.id)}})},children:D?"".concat(null!==(k=null===(n=B.base)||void 0===n?void 0:n.symbol)&&void 0!==k?k:"UNKNOWN"," Claimed"):"Claim ".concat(null!==(F=null===(r=B.base)||void 0===r?void 0:r.symbol)&&void 0!==F?F:"UNKNOWN")}),(0,s.jsx)(v.U,{children:(0,O.gt)(null===(c=B.winningTickets)||void 0===c?void 0:c.length,0)&&(0,O.eq)(null===(m=B.ledger)||void 0===m?void 0:m.baseWithdrawn,0)&&(0,s.jsxs)("div",{className:"text-xs mt-1 font-semibold text-[#ABC4FF80]",children:[null===(x=B.winningTickets)||void 0===x?void 0:x.length," winning tickets"]})})]}),(0,s.jsxs)(g.Z,{className:"items-center mobile:grow",children:[(0,s.jsx)(b.Z,{size:M?"xs":"md",className:"frosted-glass-teal mobile:self-stretch w-[160px] mobile:w-[100%] whitespace-normal",isLoading:E,validators:[{should:!K},{should:(null===(h=B.ledger)||void 0===h?void 0:h.quoteWithdrawn)&&!(0,O.eq)(null===(f=B.ledger)||void 0===f?void 0:f.quoteWithdrawn,0)},{should:B.isClosed},{should:I,forceActive:!0,fallbackProps:{onClick:()=>o.ZP.setState({isWalletSelectorShown:!0})}}],onClick:e=>{let{ev:t}=e;t.stopPropagation(),(0,a.Z)({idoInfo:B,side:"quote",onTxSuccess:()=>{_(!0),U(B.id)}})},children:K?"".concat(null!==(P=null===(j=B.quote)||void 0===j?void 0:j.symbol)&&void 0!==P?P:"UNKNOWN"," Claimed"):"Claim ".concat(null!==(T=null===(p=B.quote)||void 0===p?void 0:p.symbol)&&void 0!==T?T:"UNKNOWN")}),(0,s.jsx)(v.U,{children:(0,O.eq)(null===(N=B.ledger)||void 0===N?void 0:N.quoteWithdrawn,0)&&(0,s.jsxs)("div",{className:"text-xs mt-1 font-semibold text-[#ABC4FF80]",children:[(null!==(A=null===(Z=B.depositedTickets)||void 0===Z?void 0:Z.length)&&void 0!==A?A:0)-(null!==(S=null===(y=B.winningTickets)||void 0===y?void 0:y.length)&&void 0!==S?S:0)," non-winning tickets"]})})]})]})}function J(e){var t,l,i,a,r,m;let{info:x}=e,u=(0,o.ZP)(e=>e.isMobile),h=(0,n.ZP)(e=>e.getChainDate),b=(0,d.Z)(e=>e.refreshIdo);return(0,s.jsxs)("div",{className:"p-6 mobile:p-3",children:[(0,s.jsx)(G,{info:x}),(0,s.jsxs)(A.Z,{className:"flex-wrap gap-6 mobile:gap-3 rounded-b-3xl mobile:rounded-b-lg items-center",children:[(0,s.jsxs)("div",{className:"relative rounded-xl overflow-hidden mobile:w-full",children:[(0,s.jsx)(y.Z,{src:x.projectPosters,fallbackColor:"#abc4ff1a",className:"w-[360px] mobile:w-full h-[202.5px] /* 16/9 */ mobile:h-[106px] shrink-0 object-cover mobile:object-cover clickable",onClick:()=>(0,c.Eh)("/acceleraytor/detail",{queryProps:{idoId:x.id}})}),!u&&(0,s.jsx)("div",{className:"bg-[#141041cc] absolute bottom-0 w-full  ",children:(0,s.jsxs)(A.Z,{className:"py-1 justify-center items-center",children:[(0,s.jsx)(Z.Z,{className:"mr-2",iconSrc:"/icons/acceleraytor-list-medium.svg"}),(0,s.jsx)(k.Z,{href:x.projectDetailLink,className:"text-[#ABC4FF80] font-medium text-xs",children:"Read Full Details"})]})})]}),(0,s.jsx)(g.Z,{className:"grow justify-between",children:(0,s.jsxs)("div",{className:"grid grid-flow-row grid-cols-2 mobile:grid-cols-1 mobile:gap-board px-6 mobile:p-0",children:[(0,s.jsx)(ee,{fieldName:"Total Raise",fieldValue:(0,s.jsxs)(A.Z,{className:"items-baseline gap-1",children:[(0,s.jsx)("div",{className:"text-white font-medium",children:(0,I.Z)((0,q.B)(x.totalRaise))}),(0,s.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:x.baseSymbol})]})}),(0,s.jsx)(ee,{fieldName:"Per ".concat(null!==(a=null===(t=x.base)||void 0===t?void 0:t.symbol)&&void 0!==a?a:"UNKNOWN"),fieldValue:(0,s.jsxs)(A.Z,{className:"items-baseline gap-1",children:[(0,s.jsx)("div",{className:"text-white font-medium",children:(0,I.Z)((0,q.B)(x.coinPrice),{fractionLength:"auto"})}),(0,s.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:null!==(r=null===(l=x.quote)||void 0===l?void 0:l.symbol)&&void 0!==r?r:"UNKNOWN"})]})}),(0,s.jsx)(ee,{fieldName:"Total tickets deposited",fieldValue:(0,s.jsxs)(A.Z,{className:"items-baseline gap-1",children:[(0,s.jsx)("div",{className:"text-white font-medium",children:(0,I.Z)(x.depositedTicketCount)}),(0,s.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"Tickets"})]})}),(0,s.jsx)(ee,{fieldName:"Allocation / Winning Ticket",fieldValue:(0,s.jsxs)(A.Z,{className:"items-baseline gap-1",children:[(0,s.jsx)("div",{className:"text-white font-medium",children:(0,I.Z)((0,q.B)(x.ticketPrice),{fractionLength:"auto"})}),(0,s.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:null!==(m=null===(i=x.quote)||void 0===i?void 0:i.symbol)&&void 0!==m?m:"UNKNOWN"})]})}),(0,s.jsx)(ee,{fieldName:"Pool open",fieldValue:(0,s.jsx)(A.Z,{className:"items-baseline gap-1",children:(0,M.hF)(h(),x.startTime)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"in"}),(0,s.jsx)("div",{className:"text-white font-medium",children:(0,s.jsx)(w.Z,{endTime:x.startTime,onEnd:()=>{setTimeout(()=>{b(x.id)},1e3)}})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-white font-medium",children:(0,B.xn)(x.startTime,{hideUTCBadge:!0})}),(0,s.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"UTC"})]})})}),(0,s.jsx)(ee,{fieldName:"Pool close",fieldValue:(0,s.jsx)(A.Z,{className:"items-baseline gap-1",children:(0,M.hF)(h(),x.endTime)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"in"}),(0,s.jsx)("div",{className:"text-white font-medium",children:(0,s.jsx)(w.Z,{endTime:x.endTime,onEnd:()=>{setTimeout(()=>{b(x.id)},1e3)}})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-white font-medium",children:(0,B.xn)(x.endTime,{hideUTCBadge:!0})}),(0,s.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"UTC"})]})})})]})}),(0,s.jsx)(Q,{className:"w-full",info:x})]})]})}function G(e){let{info:t}=e,l=(0,o.ZP)(e=>e.isMobile),i=(0,u.Z)(e=>e.connected),a=(0,n.ZP)(e=>e.getChainDate);return l||(0,M.Sl)(a(),t.stakeTimeEnd)?null:(0,s.jsxs)(A.Z,{className:"AlertText items-center bg-[#abc4ff1a] p-3 rounded-xl mb-6",children:[(0,s.jsx)(Z.Z,{className:"flex-none text-[#ABC4FF80] mr-2",size:"sm",heroIconName:"exclamation-circle"}),(0,s.jsxs)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:["To be eligible for the lottery, you need to ",(0,s.jsx)("span",{className:"text-[#ABC4FF]",children:"stake 100 RAY"})," with a deadline of ",(0,s.jsx)("span",{className:"text-[#ABC4FF]",children:(0,B.xn)(t.stakeTimeEnd)}),"."]}),(0,s.jsx)(b.Z,{className:"frosted-glass-skygray ml-auto",size:"xs",validators:[{should:i,forceActive:!0,fallbackProps:{onClick:()=>o.ZP.setState({isWalletSelectorShown:!0})}}],disabled:!(0,M.hF)(a(),t.stakeTimeEnd),onClick:()=>{m.Z.setState({isStakeDialogOpen:!0,stakeDialogMode:"deposit"})},children:"Stake"})]})}function Q(e){let{className:t,info:l}=e,i=(0,o.ZP)(e=>e.isMobile),a=(0,u.Z)(e=>e.connected),r=(0,m.Z)(e=>e.stakeDialogInfo),d=(0,n.ZP)(e=>e.getChainDate);return l.isUpcoming?i&&(0,M.hF)(d(),l.stakeTimeEnd)?(0,s.jsxs)(g.Z,{className:(0,z.m)("justify-between bg-[#14104180] px-6 py-3 mr-4 mobile:pt-0 mobile:pb-2 mobile:px-4 mobile:-mx-4 mobile:-mb-4 rounded-xl mobile:rounded-none",t),children:[(0,s.jsx)(ee,{fieldValue:(0,s.jsx)(A.Z,{className:"items-baseline gap-1",children:(0,s.jsxs)("div",{className:"text-white font-medium",children:[(0,q.B)(null==r?void 0:r.userStakedLpAmount)||"--"," RAY"]})}),fieldName:(0,s.jsx)(A.Z,{className:"gap-1 items-center",children:(0,s.jsx)("div",{className:"text-xs font-bold text-[#ABC4FF80]",children:"Your staking"})})}),(0,s.jsxs)(g.Z,{children:[(0,s.jsx)(b.Z,{className:"frosted-glass-skygray",size:"xs",validators:[{should:a,forceActive:!0,fallbackProps:{onClick:()=>o.ZP.setState({isWalletSelectorShown:!0})}}],disabled:!(0,M.hF)(d(),l.stakeTimeEnd),onClick:()=>{m.Z.setState({isStakeDialogOpen:!0,stakeDialogMode:"deposit"})},children:"Stake"}),(0,s.jsxs)("div",{className:"text-xs text-center text-[#ABC4FF80] my-1",children:["APR: ",(0,E.Z)(null==r?void 0:r.totalApr7d)]})]})]}):null:(0,s.jsxs)(h.Z,{is:i?"Col":"Row",className:(0,z.m)("".concat(i?"":"flex-row-reverse"," items-center mx-4 mobile:mx-0 mobile:-mt-3 pt-4 border-t-1.5 border-[rgba(171,196,255,0.1)]"),t),children:[(0,s.jsx)(b.Z,{size:i?"xs":"md",className:"frosted-glass-skygray mobile:mb-3 mobile:self-stretch",suffix:(0,s.jsx)(Z.Z,{className:"inline-block",size:"sm",heroIconName:"arrow-circle-right"}),onClick:()=>(0,c.Eh)("/acceleraytor/detail",{queryProps:{idoId:l.id}}),children:"Pool Information"}),(0,s.jsx)(k.Z,{href:l.projectDetailLink,className:"mx-4 text-[#ABC4FF80] font-bold mobile:text-xs",children:"Full Details"})]})}function ee(e){let{fieldName:t,fieldValue:l}=e,i=(0,o.ZP)(e=>e.isMobile);return i?(0,s.jsxs)(N.Z,{className:"grid-cols-[3fr,4fr] items-center py-3 px-2 gap-8",children:[(0,s.jsx)("div",{className:"text-xs font-bold text-[#ABC4FF80]",children:t}),(0,s.jsx)("div",{className:"text-sm font-semibold text-white",children:l})]}):(0,s.jsxs)("div",{className:"top-info-panel-field-item py-3",children:[(0,s.jsx)("div",{children:l}),(0,s.jsx)("div",{className:"text-[#ABC4FF] font-bold text-xs opacity-50 mt-1",children:t})]})}}},function(e){e.O(0,[7239,5830,2820,1690,9774,2888,179],function(){return e(e.s=94361)}),_N_E=e.O()}]);