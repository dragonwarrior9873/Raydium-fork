"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2314],{52869:function(e,t,n){function a(e){let t=void 0!==e.jsonInfo;return!t}function l(e){let t=void 0!==e.jsonInfo;return t}function s(e){return"rewardInfos"in e&&"lpMint"in e&&"category"in e&&"authority"in e}n.d(t,{aE:function(){return a},ef:function(){return s},lr:function(){return l}})},61813:function(e,t,n){n.d(t,{u:function(){return l}});var a=n(53002);async function l(){let{adapter:e}=a.Z.getState();return e&&"standard"in e&&"fuse:getEphemeralSigners"in e.wallet.features&&e.wallet.features["fuse:getEphemeralSigners"].getEphemeralSigners}},29197:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(85893),l=n(18074),s=n(27993),i=n(66180),r=n(45826),o=n(91107);function c(e){let{className:t,style:n,vertical:l,itemClassName:r,itemStyle:c,values:d,currentValue:u=d[0],labels:m=d,onChange:f}=e;return d.filter(Boolean).length?(0,a.jsx)(o.E,{value:u,onChange:null!=f?f:()=>{},className:(0,i.m)("".concat(l?"flex-col":"flex"," ").concat(null!=t?t:"")),style:n,children:d.map((e,t,n)=>(0,a.jsx)(o.E.Option,{value:e,className:"cursor-pointer flex grow",children:i=>{let{checked:o}=i;return e&&(0,a.jsx)("div",{className:"grid grow ".concat(l?"":"place-items-center"," ").concat((0,s.u)(r,[o])),style:(0,s.u)(c,[o,t,n]),children:(0,s.u)(m[t],[o,t,n])})}},t))}):(0,a.jsx)(a.Fragment,{})}function d(e){let{size:t,$valuesLength:n,$transparentBg:o,urlSearchQueryKey:d,className:u,...m}=e;(0,r.i)({currentValue:m.currentValue,values:m.values,onChange:m.onChange,queryKey:d});let f=m.currentValue&&m.values.includes(m.currentValue),p=null!=n?n:m.values.length,x=(f?m.values.findIndex(e=>e===m.currentValue):0)+0;return(0,a.jsx)(c,{...m,currentValue:m.currentValue,className:(0,i.m)("rounded-full p-1",o?"bg-transparent":"bg-cyberpunk-card-bg",u),itemClassName:e=>(0,i.m)("sm"===t?"min-w-[82px] mobile:min-w-[64px] px-2 mobile:px-1.5 h-7 mobile:h-5 text-sm mobile:text-xs":"min-w-[96px] mobile:min-w-[76px] px-3 mobile:px-2 h-9 mobile:h-7 text-sm mobile:text-xs ","grid rounded-full place-items-center font-medium whitespace-nowrap ".concat(e?"text-white":"text-[#ABC4FF]"),(0,s.u)(m.itemClassName,[e])),itemStyle:e=>e?{background:"linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216))",backgroundSize:"".concat(p,"00% 100%"),backgroundPosition:(0,l.Z)(1/(p-1)*x)}:{}})}},61652:function(e,t,n){n.d(t,{Z:function(){return es}});var a=n(85893),l=n(67294),s=n(84207),i=n(72305),r=n(27713);function o(e){let{tick:t,price:n}=i.jsJ.getPriceAndTick({baseIn:"base"===e.baseSide,poolInfo:e.info,price:(0,r.I2)((0,s.Z)(e.price))});return{tick:t,price:(0,r.eZ)(n)}}var c=n(62952),d=n(79162),u=n(92867);async function m(e){let{info:t,baseAmount:n,quoteAmount:a,tickLower:l,tickUpper:s,slippage:r}=e,[o,m]=await Promise.all([(0,d.b)({mints:[t.mintA.mint,t.mintB.mint]}),(0,u.$)()]),{amountA:f,amountB:p,liquidity:x,amountSlippageA:b,amountSlippageB:v}=i.jsJ.getLiquidityFromAmounts({add:!0,poolInfo:t,amountA:n.raw,amountB:a.raw,tickLower:Math.min(l,s),tickUpper:Math.max(l,s),slippage:r,token2022Infos:o,epochInfo:m,amountHasFee:!0});return{resultBaseAmount:(0,c.n)(n.token,f.amount),resultQuoteAmount:(0,c.n)(a.token,p.amount),liquidity:x,amountSlippageBase:b,amountSlippageQuote:v}}var f=n(13550),p=n.n(f),x=n(34003),b=n(3363),v=n(49641),g=n(57435),h=n(475),j=n(61813),y=n(79938),N=n(19036),Z=n(53002),k=n(62707),w=n(69221),C=n(91371),P=n(94678),S=n(52869),E=n(26427),R=n(96662),M=n(31166),I=n(49047),T=n(21686),A=n(43067),B=n(6994),q=n(70745),F=n(54592),L=n(32029),O=n(60421),D=n(48162),z=n(66042),G=n(40816),V=n(6325),U=n(51800),H=n(91148),_=n(72616),K=n(18074),W=n(4465),$=n(81451),J=n(51523),Q=n(72573),Y=n(99111),X=n(47857),ee=n(62361),et=n(92224),en=n(67858),ea=n(71122),el=n(66180);function es(e){let{info:t,open:n,onClose:s}=e,i=(0,w.p)(e=>e.loadedHydratedClmmInfos),r=(0,w.p)(e=>e.jsonInfos),o=(0,l.useMemo)(()=>r.find(e=>(0,S.ef)(t)?e.farmIds.includes((0,b.ZP)(t.id)):e.ammId===(0,b.ZP)(t.id)),[r,t]),c=(0,l.useMemo)(()=>{if(!o)return;let e=[...i.values()];return e.find(e=>(0,b.ZP)(e.id)===(null==o?void 0:o.clmmId))},[o,i]),d=(0,S.ef)(t)&&(0,S.lr)(t),u=(0,Y.Z)(()=>{if(!d)return t;if(!o)return;let e=(0,b.ZP)(o.ammId),{hydrated:n}=function(e){let t=!1,n=()=>{t=!0},a=g.Z.getState(),{jsonInfos:l,sdkParsedInfos:s}=a,i=R.ZP.getState(),{connection:r}=i,o=(0,E.ZP)(s,e=>(0,b.ZP)(e.id)),c=e=>!!o[(0,b.ZP)(e)],d=(0,T.Z)(l.filter(t=>e.includes(t.id)&&!c(t.id)),r).then(e=>{let t=(0,E.ZP)(e,e=>(0,b.ZP)(e.id));return g.Z.setState(t=>({sdkParsedInfos:[...t.sdkParsedInfos,...e]})),{...t,...o}}),u=d.then(e=>{if(t)return;let{getLpToken:n,getToken:a}=M.ZP.getState(),{pureRawBalances:l}=Z.Z.getState(),{hydratedInfos:s}=g.Z.getState(),i=(0,E.ZP)(s,e=>(0,b.ZP)(e.id)),r=e=>!!i[(0,b.ZP)(e)],o=Object.values(e).filter(e=>!r(e.id)).map(e=>(0,I.Z)(e,{getToken:a,getLpToken:n,lpBalance:l[(0,b.ZP)(e.lpMint)]}));g.Z.setState(e=>({hydratedInfos:[...e.hydratedInfos,...o]}));let c=(0,E.ZP)(o,e=>(0,b.ZP)(e.id));return{...i,...c}});return{abort:n,hydrated:u,sdkParsed:d}}([e]);return n.then(t=>null==t?void 0:t[e])},[d,t,o]);(0,l.useEffect)(()=>{w.p.setState({shouldLoadedClmmIds:new Set(r.map(e=>e.clmmId))})},[r]);let m=e=>(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"relative mb-5",children:[(0,a.jsx)("div",{className:"text-white text-lg font-medium mb-3",children:"Migrate to Concentrated Liquidity pool"}),(0,a.jsxs)("div",{className:"text-[#abc4ff] text-sm",children:["Migrate below or learn more about CLMM pools and risks"," ",(0,a.jsx)(z.Z,{className:"inline-block font-bold",href:"https://docs.raydium.io/raydium/liquidity-providers/providing-concentrated-liquidity-clmm",children:"here"}),"."]}),(0,a.jsx)(D.Z,{heroIconName:"x",size:"lg",className:"absolute top-0 right-0 text-[#abc4ff] text-sm cursor-pointer",onClick:e})]}),(0,a.jsx)(ei,{clmmInfo:c,migrationJsonInfo:o,farmInfo:d?t:void 0,liquidityInfo:u,onMigrateSuccess:e})]});return(0,a.jsx)(V.Z,{placement:"from-bottom",open:n,onClose:()=>{s()},children:e=>{let{close:t}=e;return(0,a.jsx)(B.Z,{className:"p-6 mobile:p-4 rounded-3xl mobile:rounded-lg ".concat("w-[min(600px,90vw)]"," mobile:w-full max-h-[80vh] overflow-auto border-1.5 border-[rgba(171,196,255,0.2)] bg-cyberpunk-card-bg shadow-cyberpunk-card transition"),size:"lg",children:m(t)})}})}function ei(e){var t,n,s,r,d,u,f,w,S,E,M,I,T,B,z;let{liquidityInfo:V,farmInfo:Y,migrationJsonInfo:ea,clmmInfo:el,onMigrateSuccess:es}=e,ei=(0,R.ZP)(e=>e.connection),ec=(0,Z.Z)(e=>e.pureRawBalances),ed=(0,C.ZP)(e=>e.slippageTolerance),eu=Number((0,Q.B)(ed)),[em,{on:ef,off:ep}]=(0,et.ZP)(),[ex,eb]=(0,l.useState)("quick"),[ev,eg]=(0,l.useState)("base"),eh=(0,l.useMemo)(()=>{let e=el&&(0,_.y)((0,J.hi)(el.ammConfig.tradeFeeRate,1e4),{alreadyDecimaled:!0});return(0,K.Z)(e,{fixed:4,alreadyPercented:!0})},[el]),ej=null==V?void 0:V.lpToken,ey=Y?Y.userStakedLpAmount:V&&ej&&(0,c.n)(ej,ec[(0,b.ZP)(V.lpMint)]),eN=(0,P.ZP)(e=>e.timeBasis),eZ=(0,l.useMemo)(()=>{var e,t;return(0,W.aT)(null==V?void 0:V.baseMint,null==el?void 0:null===(e=el.quote)||void 0===e?void 0:e.mint)&&(0,W.aT)(null==V?void 0:V.quoteMint,null==el?void 0:null===(t=el.base)||void 0===t?void 0:t.mint)},[el,V])//! it may base-quote in lp/liquidity, but quote-base in clmm
,ek=(0,l.useMemo)(()=>eZ?null==V?void 0:V.quoteToken:null==V?void 0:V.baseToken,[V,eZ]),ew=(0,l.useMemo)(()=>eZ?null==V?void 0:V.baseToken:null==V?void 0:V.quoteToken,[V,eZ]),eC=V&&ej&&ek&&(0,J.hi)((0,c.n)(ek,eZ?V.quoteReserve:V.baseReserve),(0,c.n)(ej,V.lpSupply)),eP=V&&ej&&ew&&(0,J.hi)((0,c.n)(ew,eZ?V.baseReserve:V.quoteReserve),(0,c.n)(ej,V.lpSupply)),eS=ey&&eC?(0,c.n)(ek,(0,J.dC)(ey,eC),{alreadyDecimaled:!0}):void 0,eE=ey&&eP?(0,c.n)(ew,(0,J.dC)(ey,eP),{alreadyDecimaled:!0}):void 0,eR=null==el?void 0:el.currentPrice,eM="base"===ev&&ea?ea.defaultPriceMin:1/ea.defaultPriceMax,eI="base"===ev&&ea?ea.defaultPriceMax:1/ea.defaultPriceMin,[eT,eA,eB]=(0,ee.$)((0,J.dC)(eR,.85));(0,l.useEffect)(()=>{eA((0,J.dC)(eR,.85))},[eR]);let[eq,eF]=(0,l.useState)(),eL=(0,l.useRef)(),[eO,eD]=(0,l.useState)(),[ez,eG,eV]=(0,ee.$)((0,J.dC)(eR,1.15));(0,l.useEffect)(()=>{eG((0,J.dC)(eR,1.15))},[eR]);let eU=(0,l.useRef)(),[eH,e_]=(0,l.useState)(),[eK,eW]=(0,l.useState)(),[e$,eJ]=(0,l.useState)(),eQ=(0,C.ZP)(e=>e.isApprovePanelShown),eY=(0,l.useMemo)(()=>eS&&(0,c.n)(eS.token,(0,J.h9)(eS,eK),{alreadyDecimaled:!0}),[eS,eK]),eX=(0,l.useMemo)(()=>eE&&(0,c.n)(eE.token,(0,J.h9)(eE,e$),{alreadyDecimaled:!0}),[eE,e$]),e0=(0,l.useRef)(),e4=()=>"quick"===ex?eM:eB(),e1=()=>"quick"===ex?eI:eV(),e2=(0,X.z)(()=>{eg("base"===ev?"quote":"base"),eA(ez&&(0,$.gt)(ez,0)?(0,J.hi)(1,ez):ez),eG(eT&&(0,$.gt)(eT,0)?(0,J.hi)(1,eT):eT)}),e6=(0,l.useMemo)(()=>{var e;return eR&&eT&&ez&&(e="base"===ev?eR:(0,J.hi)(1,eR),(0,$.eg)(e,eT)&&(0,$.G)(e,ez))},[eR,ev,eT,ez]),e5=(0,l.useMemo)(()=>(0,$.gt)(eT,0)&&(0,$.gt)(ez,0)&&(0,$.gt)(ez,eT),[eT,ez]);return(0,l.useEffect)(()=>{let e,t;if(el&&eR){if((0,$.gt)(e4(),0)){let{price:t,tick:n}=o({baseSide:ev,price:e4(),info:el.state});eL.current=t,eD(n),e=n,"custom"===ex&&eA(t)}if((0,$.gt)(e1(),0)){let{price:e,tick:n}=o({baseSide:ev,price:e1(),info:el.state});eU.current=e,e_(n),t=n,"custom"===ex&&eG(e)}if(null!=e&&null!=t&&t===e&&(t+=1,eD((e-=1)-1),e_(t+1)),ei){if(eS&&eE&&null!=e&&null!=t){let n={connection:ei,info:el.state,baseAmount:eS,quoteAmount:eE,tickLower:e,tickUpper:t,slippage:eu};m(n).then(e=>{let{resultBaseAmount:t,resultQuoteAmount:n,liquidity:a,amountSlippageBase:l,amountSlippageQuote:s}=e;e0.current={liquidity:a,amountSlippageBase:l.amount,amountSlippageQuote:s.amount},eF(a),eW(t),eJ(n)})}}else eF(void 0),eW(void 0),eJ(void 0)}},[eu,(0,Q.B)(eS),(0,Q.B)(eE),(0,Q.B)(eT),(0,Q.B)(ez),el,ea,eR,ev,ex]),(0,a.jsxs)(O.Z,{className:"gap-4",children:[(0,a.jsxs)(O.Z,{className:"grid-cols-2 gap-3",children:[(0,a.jsx)(eo,{selected:"quick"===ex,title:"Quick migration",description:"Very wide price range for a more passive strategy.",onClick:()=>{eb("quick")}}),(0,a.jsx)(eo,{selected:"custom"===ex,title:"Custom migration",description:"Set a custom price range for higher capital efficiency.",onClick:()=>{eb("custom")}})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-[#abc4ff] font-medium mb-2",children:"CLMM Pool"}),(0,a.jsxs)(U.Z,{className:"border-1.5 border-[#abc4ff40] rounded-xl py-2 px-4 justify-between",children:[(0,a.jsxs)(U.Z,{className:"gap-2",children:[(0,a.jsxs)("div",{className:"text-[#abc4ff] font-medium",children:[null!==(t=null==ek?void 0:ek.symbol)&&void 0!==t?t:"--","/",null!==(n=null==ew?void 0:ew.symbol)&&void 0!==n?n:"--"]}),(0,a.jsxs)("div",{className:"text-[#abc4ff] bg-[#abc4ff1f] text-xs rounded-full py-0.5 px-2 font-medium self-center",children:["Fee ",(0,K.Z)(eh)]})]}),(0,a.jsxs)(U.Z,{className:"items-center gap-2",children:[(0,a.jsx)("div",{className:"text-[#abc4ff80] text-sm font-medium",children:"Current price: "}),(0,a.jsx)("div",{className:"text-[#abc4ff] text-base font-medium",children:(0,Q.B)("base"===ev?eR:(0,J.hi)(1,eR))}),(0,a.jsx)("div",{className:"text-[#abc4ff80] text-xs font-medium",children:"base"===ev?"".concat(null!==(s=null==ew?void 0:ew.symbol)&&void 0!==s?s:"--"," per ").concat(null!==(r=null==ek?void 0:ek.symbol)&&void 0!==r?r:"--"):"".concat(null!==(d=null==ek?void 0:ek.symbol)&&void 0!==d?d:"--"," per ").concat(null!==(u=null==ew?void 0:ew.symbol)&&void 0!==u?u:"--")})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(U.Z,{className:"items-center justify-between mb-1",children:[(0,a.jsx)("div",{className:"text-[#abc4ff] font-medium",children:"Price Range"}),(0,a.jsx)(G.Z,{tabs:[{label:"".concat(null!==(f=null==ek?void 0:ek.symbol)&&void 0!==f?f:"--"," price"),value:"base"},{label:"".concat(null!==(w=null==ew?void 0:ew.symbol)&&void 0!==w?w:"--"," price"),value:"quote"}],selectedValue:ev,onChange:()=>{e2()}})]}),"quick"===ex&&(0,a.jsxs)(U.Z,{className:"border-1.5 border-[#abc4ff40] rounded-xl py-2 px-4 justify-between",children:[(0,a.jsxs)("div",{className:"text-[#abc4ff] font-medium text-sm",children:[eM||"--"," - ",eI||"--"]}),(0,a.jsx)(U.Z,{className:"items-center gap-2",children:(0,a.jsx)("div",{className:"text-[#abc4ff80] text-sm font-medium",children:"base"===ev?"".concat(null!==(S=null==ew?void 0:ew.symbol)&&void 0!==S?S:"--"," per ").concat(null!==(E=null==ek?void 0:ek.symbol)&&void 0!==E?E:"--"):"".concat(null!==(M=null==ek?void 0:ek.symbol)&&void 0!==M?M:"--"," per ").concat(null!==(I=null==ew?void 0:ew.symbol)&&void 0!==I?I:"--")})})]}),"custom"===ex&&(0,a.jsxs)("div",{children:[(0,a.jsxs)(O.Z,{className:"grid-cols-2-fr gap-3",children:[(0,a.jsxs)(U.Z,{className:"border-1.5 ".concat(e6&&e5?"border-[#abc4ff40]":"border-[#DA2EEF]"," rounded-xl py-2 px-4 justify-between items-center"),children:[(0,a.jsx)("div",{className:"text-[#abc4ff80] text-sm",children:"Min"}),(0,a.jsx)(L.Z,{className:"font-medium text-sm text-white flex-grow",inputClassName:"text-right",decimalCount:ek&&ew&&Math.max(null==ek?void 0:ek.decimals,null==ew?void 0:ew.decimals),value:eT,onUserInput:e=>{null!=e&&eA(e)}})]}),(0,a.jsxs)(U.Z,{className:"border-1.5 ".concat(e6&&e5?"border-[#abc4ff40]":"border-[#DA2EEF]"," rounded-xl py-2 px-4 justify-between items-center"),children:[(0,a.jsx)("div",{className:"text-[#abc4ff80] text-sm",children:"Max"}),(0,a.jsx)(L.Z,{className:"font-medium text-sm text-white flex-grow",inputClassName:"text-right",decimalCount:ek&&ew&&Math.max(null==ek?void 0:ek.decimals,null==ew?void 0:ew.decimals),value:ez,onUserInput:e=>{null!=e&&eG(e)}})]})]}),e5?e6?null:(0,a.jsx)("div",{className:"text-[#da2eef] text-sm mt-1",children:"The current price is out of this range."}):(0,a.jsx)("div",{className:"text-[#da2eef] text-sm mt-1",children:"This range is invalid."})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(U.Z,{className:"pt-6 items-center gap-4",children:[(0,a.jsxs)(F.Z,{className:"relative grow border-1.5 border-[#abc4ff40] rounded-xl p-2 gap-1",children:[(0,a.jsx)("div",{className:"absolute -top-7 text-center left-0 right-0 text-sm text-[#abc4ff]",children:"Current position"}),(0,a.jsxs)(U.Z,{className:"justify-between items-center gap-4",children:[(0,a.jsxs)(U.Z,{className:"gap-1.5 items-center",children:[(0,a.jsx)(q.Z,{token:ek,size:"xs"}),(0,a.jsx)("div",{className:"text-[#abc4ff] text-xs",children:null!==(T=null==ek?void 0:ek.symbol)&&void 0!==T?T:"--"})]}),(0,a.jsx)("div",{className:"text-[#abc4ff] text-xs",children:eS?(0,Q.B)(eS,{decimalLength:null==ek?void 0:ek.decimals}):"--"})]}),(0,a.jsxs)(U.Z,{className:"justify-between items-center gap-4",children:[(0,a.jsxs)(U.Z,{className:"gap-1.5 items-center",children:[(0,a.jsx)(q.Z,{token:ew,size:"xs"}),(0,a.jsx)("div",{className:"text-[#abc4ff] text-xs",children:null!==(B=null==ew?void 0:ew.symbol)&&void 0!==B?B:"--"})]}),(0,a.jsx)("div",{className:"text-[#abc4ff] text-xs",children:eE?(0,Q.B)(eE,{decimalLength:null==ew?void 0:ew.decimals}):"--"})]})]}),(0,a.jsx)(D.Z,{iconSrc:"/icons/migrate-clmm-right-arrow.svg",className:"w-6 h-6",iconClassName:"w-6 h-6"}),(0,a.jsxs)(F.Z,{className:"relative grow border-1.5 border-[#abc4ff40] border-dashed rounded-xl p-2 gap-1",children:[(0,a.jsx)("div",{className:"absolute -top-7 text-center left-0 right-0 text-sm text-[#abc4ff]",children:"CLMM Pool"}),(0,a.jsxs)(U.Z,{className:"justify-between items-center gap-4",children:[(0,a.jsx)(q.Z,{token:ek,size:"xs"}),(0,a.jsx)("div",{className:"text-[#abc4ff] text-xs",children:el?(0,Q.B)(eK)||"--":"(loading clmm)"})]}),(0,a.jsxs)(U.Z,{className:"justify-between items-center gap-4",children:[(0,a.jsx)(q.Z,{token:ew,size:"xs"}),(0,a.jsx)("div",{className:"text-[#abc4ff] text-xs",children:el?(0,Q.B)(e$)||"--":"(loading clmm)"})]})]}),(0,a.jsx)(D.Z,{iconSrc:"/icons/migrate-clmm-add-icon.svg",className:"w-4 h-4",iconClassName:"w-4 h-4"}),(0,a.jsxs)(F.Z,{className:"relative grow border-1.5 border-[#abc4ff40] border-dashed rounded-xl p-2 gap-1",children:[(0,a.jsx)("div",{className:"absolute -top-7 text-center left-0 right-0 text-sm text-[#abc4ff]",children:"Wallet"}),(0,a.jsxs)(U.Z,{className:"justify-between items-center gap-4",children:[(0,a.jsx)(q.Z,{token:ek,size:"xs"}),(0,a.jsx)("div",{className:"text-[#abc4ff] text-xs",children:el?(0,Q.B)(eY):"(loading clmm)"})]}),(0,a.jsxs)(U.Z,{className:"justify-between items-center gap-4",children:[(0,a.jsx)(q.Z,{token:ew,size:"xs"}),(0,a.jsx)("div",{className:"text-[#abc4ff] text-xs",children:el?(0,Q.B)(eX):"(loading clmm)"})]})]})]}),Y&&Y.rewards.some(e=>(0,$.gt)(e.userPendingReward,0))&&(0,a.jsxs)("div",{className:"text-[#abc4ff] text-sm mt-2",children:["* Migrating will also harvest"," ",(0,a.jsx)("span",{className:"font-bold",children:(0,H.DB)(Y.rewards.map(e=>{let{token:t,userPendingReward:n,userHavedReward:l}=e;return l&&t&&(0,a.jsxs)("span",{children:[(0,a.jsx)("span",{children:(0,Q.B)(n)})," ",(0,a.jsx)("span",{children:null!==(z=null==n?void 0:n.token.symbol)&&void 0!==z?z:"UNKNOWN"})]},null==t?void 0:t.mintString)}))})," ","in pending rewards."]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(U.Z,{className:"items-center justify-between mb-1",children:[(0,a.jsxs)(U.Z,{className:"items-center gap-2",children:[(0,a.jsx)("div",{className:"text-[#abc4ff] font-medium",children:"Estimated APR"}),(0,a.jsx)(en.T,{})]}),(0,a.jsx)(G.Z,{tabs:[{label:"24H",value:"24H"},{label:"7D",value:"7D"},{label:"30D",value:"30D"}],selectedValue:eN,onChange:e=>P.ZP.setState({timeBasis:e.value})})]}),(0,a.jsx)(U.Z,{className:"border-1.5 border-[#abc4ff40] rounded-xl py-2 px-4 justify-between",children:(0,a.jsx)(er,{className:e5?"":"opacity-0",clmmInfo:el,liquidity:eq,lowerTick:eO,upperTick:eH})})]}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)(A.Z,{className:"w-full frosted-glass-teal",isLoading:em||eQ,onClick:()=>{(0,x.Z)(null!==eO&&null!==eH,"not calc price range successfully"),(0,x.Z)(e0.current,"not calc amount slippage successfully"),(0,x.Z)(V,"liquidity info not load successfully"),ef(),(function(e){let{tickLower:t,tickUpper:n,liquidity:a,amountMaxA:l,amountMaxB:s,farmInfo:r,liquidityInfo:o,liquidityLpAmount:c,currentClmmPool:d}=e;return(0,y.ZP)(async e=>{var u,m;let{transactionCollector:f,baseUtils:{connection:w,owner:C}}=e,{tokenAccountRawInfos:P,txVersion:S}=Z.Z.getState();(0,x.Z)(d,"not seleted clmm pool");let{jsonInfos:E}=g.Z.getState(),R=E.find(e=>{let{id:t}=e;return t===(0,b.ZP)(o.id)});(0,x.Z)(R,"can't find liquidity pool");let{innerTransactions:M}=await i.ZpI.makeRemoveAllLpAndCreateClmmPosition({connection:w,poolKeys:(0,N.R)(R),clmmPoolKeys:d.state,farmInfo:r?{poolKeys:(0,N.R)(r.jsonInfo),amount:null!==(m=null===(u=r.userStakedLpAmount)||void 0===u?void 0:u.raw)&&void 0!==m?m:i.xEJ}:void 0,createPositionInfo:{tickLower:t,tickUpper:n,liquidity:a.mul(new(p())(99)).div(new(p())(100)),amountMaxA:l,amountMaxB:s},removeLpAmount:null!=c?c:i.xEJ,userKeys:{tokenAccounts:P,owner:C},computeBudgetConfig:await (0,h.u)(),checkCreateATAOwner:!0,getEphemeralSigners:await (0,j.u)(),makeTxVersion:S,lookupTableCache:y.eq}),I=(0,k.AX)(()=>{v.Z.getState().refreshFarmInfos()},{once:!0});f.add(M,{onTxError:()=>(0,k.Ce)(I),onTxSentError:()=>(0,k.Ce)(I),onTxAllSuccess:()=>{setTimeout(()=>{v.Z.getState().refreshFarmInfos(),(0,k.Ce)(I)},1e3)},txHistoryInfo:{title:"Migrate To CLMM",description:"Migrate LP to CLMM position"}})})})({liquidity:e0.current.liquidity,tickLower:eO,tickUpper:eH,amountMaxA:e0.current.amountSlippageBase,amountMaxB:e0.current.amountSlippageQuote,currentClmmPool:el,farmInfo:Y,liquidityInfo:V,liquidityLpAmount:Y?void 0:null==ey?void 0:ey.raw}).then(e=>{let{allSuccess:t}=e;t&&(null==es||es())}).finally(ep)},validators:[{should:el,fallbackProps:{children:"loading..."}},{should:e5}],children:"Migrate"})})]})}function er(e){let{className:t,clmmInfo:n,liquidity:l,lowerTick:s,upperTick:i}=e,r=["#abc4ff","#37bbe0","#2b6aff","#335095"],o=(0,ea.HU)({ammPool:n,forceInfo:{liquidity:l,tickLower:s,tickUpper:i}}),c=o&&[o.fee.percentInTotal,...o.rewards.map(e=>e.percentInTotal)];return(0,a.jsxs)(U.Z,{className:(0,el.m)("gap-2 w-full justify-between text-[#fff] ".concat(n?"":"opacity-0"),t),children:[(0,a.jsxs)(U.Z,{className:"items-center gap-2",children:[(0,a.jsx)("div",{children:(0,K.Z)(null==o?void 0:o.apr)}),(0,a.jsx)("div",{className:"w-[18px] h-[18px] rounded-full flex-none",style:{background:c&&"conic-gradient(".concat(c.map((e,t)=>{let n=c.slice(0,t).reduce((e,t)=>(0,_.y)((0,J.IH)(e,t)),(0,_.y)(0)),a=(0,_.y)((0,J.IH)(n,e));return["".concat(r[t]," ").concat((0,K.Z)(n)),"".concat(r[t]," ").concat((0,K.Z)(a))].join(", ")}).join(", "),")"),WebkitMaskImage:"radial-gradient(transparent 43%, black 44%)",maskImage:"radial-gradient(transparent 43%, black 44%)"}})]}),(0,a.jsxs)(U.Z,{className:"content-around gap-4",children:[(0,a.jsxs)(U.Z,{className:"items-center gap-2",children:[(0,a.jsx)("div",{className:"h-2 w-2 rounded-full",style:{backgroundColor:"#abc4ff"}}),(0,a.jsx)("div",{className:"w-18 text-[#abc4ff] text-sm mobile:text-xs",children:"Trade Fee"}),(0,a.jsx)("div",{className:"text-sm",children:(0,K.Z)(null==o?void 0:o.fee.apr)})]}),null==o?void 0:o.rewards.map((e,t)=>{let{token:n,apr:l}=e,s=r.slice(1);return(0,a.jsxs)(U.Z,{className:"items-center gap-2",children:[(0,a.jsx)("div",{className:"h-2 w-2 rounded-full",style:{backgroundColor:s[t]}}),(0,a.jsx)("div",{className:"w-18 text-[#abc4ff] text-sm mobile:text-xs",children:null==n?void 0:n.symbol}),(0,a.jsx)("div",{className:"text-sm",children:(0,K.Z)(l)})]},null==n?void 0:n.mintString)})]})]})}function eo(e){let{title:t,description:n,selected:l,onClick:s}=e;return(0,a.jsxs)("div",{onClick:s,className:"relative border-1.5 ".concat(l?"border-[#39d0d8]":"border-[#abc4ff40]"," rounded-xl py-3 px-4 bg-[#141041] cursor-pointer"),children:[l&&(0,a.jsx)(D.Z,{size:"sm",className:"absolute right-3 top-3",iconSrc:"/icons/migrate-check-icon.svg"}),(0,a.jsx)("div",{className:"font-medium text-base text-white mb-1",children:t}),(0,a.jsx)("div",{className:"font-normal text-sm  ".concat(l?"text-[#ABC4FF]":"text-[#ABC4FF80]"),children:n})]})}},91107:function(e,t,n){n.d(t,{E:function(){return R}});var a,l,s=n(67294),i=n(12351),r=n(19946),o=n(32984),c=n(16723),d=n(61363),u=n(84575),m=n(95389),f=n(39516),p=n(15466),x=n(23784),b=n(46045),v=n(18689),g=n(73781),h=n(31147),j=n(64103),y=n(3855),N=n(94192),Z=((a=Z||{})[a.RegisterOption=0]="RegisterOption",a[a.UnregisterOption=1]="UnregisterOption",a);let k={0(e,t){let n=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,u.z2)(n,e=>e.element.current)}},1(e,t){let n=e.options.slice(),a=e.options.findIndex(e=>e.id===t.id);return -1===a?e:(n.splice(a,1),{...e,options:n})}},w=(0,s.createContext)(null);w.displayName="RadioGroupDataContext";let C=(0,s.createContext)(null);function P(e,t){return(0,o.E)(t.type,k,e,t)}C.displayName="RadioGroupActionsContext";let S=(0,i.yV)(function(e,t){let n=(0,r.M)(),{id:a=`headlessui-radiogroup-${n}`,value:l,defaultValue:o,name:j,onChange:y,by:Z=(e,t)=>e===t,disabled:k=!1,...S}=e,E=(0,g.z)("string"==typeof Z?(e,t)=>(null==e?void 0:e[Z])===(null==t?void 0:t[Z]):Z),[R,M]=(0,s.useReducer)(P,{options:[]}),I=R.options,[T,A]=(0,m.b)(),[B,q]=(0,f.f)(),F=(0,s.useRef)(null),L=(0,x.T)(F,t),[O,D]=(0,h.q)(l,y,o),z=(0,s.useMemo)(()=>I.find(e=>!e.propsRef.current.disabled),[I]),G=(0,s.useMemo)(()=>I.some(e=>E(e.propsRef.current.value,O)),[I,O]),V=(0,g.z)(e=>{var t;if(k||E(e,O))return!1;let n=null==(t=I.find(t=>E(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==n||!n.disabled)&&(null==D||D(e),!0)});!function({container:e,accept:t,walk:n,enabled:a=!0}){let l=(0,s.useRef)(t),i=(0,s.useRef)(n);(0,s.useEffect)(()=>{l.current=t,i.current=n},[t,n]),(0,c.e)(()=>{if(!e||!a)return;let t=(0,p.r)(e);if(!t)return;let n=l.current,s=i.current,r=Object.assign(e=>n(e),{acceptNode:n}),o=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,r,!1);for(;o.nextNode();)s(o.currentNode)},[e,a,l,i])}({container:F.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let U=(0,g.z)(e=>{let t=F.current;if(!t)return;let n=(0,p.r)(t),a=I.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case d.R.Enter:(0,v.g)(e.currentTarget);break;case d.R.ArrowLeft:case d.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,u.jA)(a,u.TO.Previous|u.TO.WrapAround)===u.fE.Success){let e=I.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&V(e.propsRef.current.value)}break;case d.R.ArrowRight:case d.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,u.jA)(a,u.TO.Next|u.TO.WrapAround)===u.fE.Success){let e=I.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&V(e.propsRef.current.value)}break;case d.R.Space:{e.preventDefault(),e.stopPropagation();let t=I.find(e=>e.element.current===(null==n?void 0:n.activeElement));t&&V(t.propsRef.current.value)}}}),H=(0,g.z)(e=>(M({type:0,...e}),()=>M({type:1,id:e.id}))),_=(0,s.useMemo)(()=>({value:O,firstOption:z,containsCheckedOption:G,disabled:k,compare:E,...R}),[O,z,G,k,E,R]),K=(0,s.useMemo)(()=>({registerOption:H,change:V}),[H,V]),W=(0,s.useMemo)(()=>({value:O}),[O]),$=(0,s.useRef)(null),J=(0,N.G)();return(0,s.useEffect)(()=>{$.current&&void 0!==o&&J.addEventListener($.current,"reset",()=>{V(o)})},[$,V]),s.createElement(q,{name:"RadioGroup.Description"},s.createElement(A,{name:"RadioGroup.Label"},s.createElement(C.Provider,{value:K},s.createElement(w.Provider,{value:_},null!=j&&null!=O&&(0,v.t)({[j]:O}).map(([e,t],n)=>s.createElement(b._,{features:b.A.Hidden,ref:0===n?e=>{var t;$.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,i.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})})),(0,i.sY)({ourProps:{ref:L,id:a,role:"radiogroup","aria-labelledby":T,"aria-describedby":B,onKeyDown:U},theirProps:S,slot:W,defaultTag:"div",name:"RadioGroup"})))))});var E=((l=E||{})[l.Empty=1]="Empty",l[l.Active=2]="Active",l);let R=Object.assign(S,{Option:(0,i.yV)(function(e,t){var n;let a=(0,r.M)(),{id:l=`headlessui-radiogroup-option-${a}`,value:o,disabled:d=!1,...u}=e,p=(0,s.useRef)(null),b=(0,x.T)(p,t),[v,h]=(0,m.b)(),[N,Z]=(0,f.f)(),{addFlag:k,removeFlag:P,hasFlag:S}=function(e=0){let[t,n]=(0,s.useState)(e);return{addFlag:(0,s.useCallback)(e=>n(t=>t|e),[t]),hasFlag:(0,s.useCallback)(e=>!!(t&e),[t]),removeFlag:(0,s.useCallback)(e=>n(t=>t&~e),[n]),toggleFlag:(0,s.useCallback)(e=>n(t=>t^e),[n])}}(1),E=(0,y.E)({value:o,disabled:d}),R=function e(t){let n=(0,s.useContext)(w);if(null===n){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("RadioGroup.Option"),M=function e(t){let n=(0,s.useContext)(C);if(null===n){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("RadioGroup.Option");(0,c.e)(()=>M.registerOption({id:l,element:p,propsRef:E}),[l,M,p,e]);let I=(0,g.z)(e=>{var t;if((0,j.P)(e.currentTarget))return e.preventDefault();M.change(o)&&(k(2),null==(t=p.current)||t.focus())}),T=(0,g.z)(e=>{if((0,j.P)(e.currentTarget))return e.preventDefault();k(2)}),A=(0,g.z)(()=>P(2)),B=(null==(n=R.firstOption)?void 0:n.id)===l,q=R.disabled||d,F=R.compare(R.value,o),L={ref:b,id:l,role:"radio","aria-checked":F?"true":"false","aria-labelledby":v,"aria-describedby":N,"aria-disabled":!!q||void 0,tabIndex:q?-1:F||!R.containsCheckedOption&&B?0:-1,onClick:q?void 0:I,onFocus:q?void 0:T,onBlur:q?void 0:A},O=(0,s.useMemo)(()=>({checked:F,disabled:q,active:S(2)}),[F,q,S]);return s.createElement(Z,{name:"RadioGroup.Description"},s.createElement(h,{name:"RadioGroup.Label"},(0,i.sY)({ourProps:L,theirProps:u,slot:O,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:m._,Description:f.d})}}]);