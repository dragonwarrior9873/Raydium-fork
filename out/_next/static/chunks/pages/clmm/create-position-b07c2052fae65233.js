(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5009],{10073:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clmm/create-position",function(){return n(58987)}])},6262:function(e,t,n){"use strict";n.d(t,{Ek:function(){return c},TL:function(){return u},vt:function(){return d},yc:function(){return m}});var i=n(72305),l=n(27713),s=n(4465),o=n(51523),r=n(84207);function a(e){let t=i.jsJ.getPriceAndTick(e);return(0,l.JS)(t)}function c(e){let t=i.jsJ.getTickPrice(e);return(0,l.JS)(t)}function d(e){let{coin1:t,coin2:n,reverse:i,ammPool:s,maxDecimals:c}=e;if(s)try{var d,m;let e=c||(t||n?Math.max(null!==(d=null==t?void 0:t.decimals)&&void 0!==d?d:0,null!==(m=null==n?void 0:n.decimals)&&void 0!==m?m:0):6),u=100===s.ammConfig.tradeFeeRate,p=u?.01:.2,x=(0,l.eZ)(null==s?void 0:s.state.currentPrice),f=(0,o.kg)(x?(0,o.dC)(x,1-p):0,1/10**e),h=(0,o.kg)(x?(0,o.dC)(x,1+p):0,1/10**e),{price:b,tick:v}=a({poolInfo:s.state,baseIn:!0,price:(0,l.I2)((0,r.Z)(f))}),{price:g,tick:Z}=a({poolInfo:s.state,baseIn:!0,price:(0,l.I2)((0,r.Z)(h))});if(i)return{priceLowerTick:Z,priceLower:(0,o.hi)(1,g),priceUpperTick:v,priceUpper:(0,o.hi)(1,b)};return{priceLowerTick:v,priceLower:b,priceUpperTick:Z,priceUpper:g}}catch(e){return}}function m(e){let{p:t,coin1:n,coin2:i,reverse:o,ammPool:c,maxDecimals:d}=e,m=o?i:n;try{let{price:e,tick:n}=a({poolInfo:c.state,baseIn:(0,s.aT)(c.state.mintA.mint,null==m?void 0:m.mint),price:(0,l.I2)((0,r.Z)(Math.max(Number(t),1/10**(null!=d?d:6))))});return{price:e,tick:n}}catch(e){return}}function u(e){let{min:t,max:n,coin1:i,coin2:l,reverse:s,ammPool:o,maxDecimals:r}=e,a=m({p:t,coin1:i,coin2:l,ammPool:o,reverse:s,maxDecimals:r}),c=m({p:n,coin1:i,coin2:l,ammPool:o,reverse:s,maxDecimals:r});return{priceLower:a.price,priceLowerTick:a.tick,priceUpper:c.price,priceUpperTick:c.tick}}},13039:function(e,t,n){"use strict";n.d(t,{B:function(){return g},Z:function(){return v}});var i=n(72305),l=n(79938),s=n(53002),o=n(34003),r=n(62952),a=n(71375),c=n(72573),d=n(96662),m=n(94355),u=n(14200),p=n(55469),x=n(42186),f=n(475),h=n(61813),b=n(94678);async function v(){let e,{currentAmmPool:t=b.ZP.getState().currentAmmPool,coin1:n=b.ZP.getState().coin1,coin2:i=b.ZP.getState().coin2,coin1Amount:s=b.ZP.getState().coin1Amount,coin2Amount:o=b.ZP.getState().coin2Amount,coin1SlippageAmount:a=b.ZP.getState().coin1SlippageAmount,coin2SlippageAmount:d=b.ZP.getState().coin2SlippageAmount,priceLower:x=b.ZP.getState().priceLower,priceUpper:f=b.ZP.getState().priceUpper,priceLowerTick:h=b.ZP.getState().priceLowerTick,priceUpperTick:v=b.ZP.getState().priceUpperTick,liquidity:Z=b.ZP.getState().liquidity,onSuccess:j}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},y=(0,r.n)(n,s,{alreadyDecimaled:!0}),P=(0,r.n)(i,o,{alreadyDecimaled:!0}),k=[n,i].some(e=>(0,u.W)(e));if(k){let{hasConfirmed:l}=(0,p.e)({amount:[(0,u.W)(n)?y:void 0,(0,u.W)(i)?P:void 0],groupInfo:t&&x&&f?{ammPool:t,priceLower:x,priceUpper:f}:void 0,caseName:"openPosition"});e=await l}else e=!0;if(!e){m.Z.getState().logError("Canceled by User","The operation is canceled by user");return}return(0,l.ZP)(async e=>{var l,r;let{transactionCollector:m}=e,{innerTransactions:u,nftAddress:p}=await g({currentAmmPool:t,coin1:n,coin2:i,coin1Amount:s,coin2Amount:o,coin1SlippageAmount:a,coin2SlippageAmount:d,liquidity:Z,priceLower:x,priceUpper:f,priceLowerTick:h,priceUpperTick:v});m.add(u,{onTxAllSuccess(){null==j||j({nftAddress:p})},txHistoryInfo:{title:"Deposited",description:"Added ".concat((0,c.B)(s)," ").concat(null!==(l=null==n?void 0:n.symbol)&&void 0!==l?l:"--"," and ").concat((0,c.B)(o)," ").concat(null!==(r=null==i?void 0:i.symbol)&&void 0!==r?r:"--")}})})}async function g(){let{priceLower:e=b.ZP.getState().priceLower,priceUpper:t=b.ZP.getState().priceUpper,coin1:n=b.ZP.getState().coin1,coin2:r=b.ZP.getState().coin2,coin1Amount:c=b.ZP.getState().coin1Amount,coin2Amount:m=b.ZP.getState().coin2Amount,coin1SlippageAmount:u=b.ZP.getState().coin1SlippageAmount,coin2SlippageAmount:p=b.ZP.getState().coin2SlippageAmount,liquidity:v=b.ZP.getState().liquidity,liquidityMin:g=b.ZP.getState().liquidityMin,priceLowerTick:Z=b.ZP.getState().priceLowerTick,priceUpperTick:j=b.ZP.getState().priceUpperTick,currentAmmPool:y=b.ZP.getState().currentAmmPool}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.ZP.getState(),{tokenAccountRawInfos:P,txVersion:k}=s.Z.getState(),{connection:N}=d.ZP.getState(),{owner:w}=s.Z.getState();(0,o.Z)(N,"no rpc connection"),(0,o.Z)(w,"wallet not connected"),(0,o.Z)(y,"not seleted amm pool"),(0,o.Z)(void 0!==j,"not set priceUpperTick"),(0,o.Z)(void 0!==Z,"not set priceLowerTick"),(0,o.Z)(t,"not set priceUpper"),(0,o.Z)(e,"not set priceLower"),(0,o.Z)(n,"not set coin1"),(0,o.Z)(u,"not set coin1Amount"),(0,o.Z)(r,"not set coin2"),(0,o.Z)(p,"not set coin2Amount"),(0,o.Z)(v,"not set liquidity"),(0,o.Z)(g,"not set liquidity");let S=(0,x.Dn)(n)||(0,x.Dn)(r),T=y.state.mintA.mint.equals(n.mint),C=(0,a.Z)(u,n.decimals,"up"),A=(0,a.Z)(p,r.decimals,"up"),{innerTransactions:L,address:F}=await i.jsJ.makeOpenPositionFromLiquidityInstructionSimple({connection:N,liquidity:g,poolInfo:y.state,ownerInfo:{feePayer:w,wallet:w,tokenAccounts:P,useSOLBalance:S},tickLower:Math.min(Z,j),tickUpper:Math.max(Z,j),amountMaxA:T?C:A,amountMaxB:T?A:C,computeBudgetConfig:await (0,f.u)(),checkCreateATAOwner:!0,makeTxVersion:k,lookupTableCache:l.eq,getEphemeralSigners:await (0,h.u)()});return{innerTransactions:L,nftAddress:String(F.nftMint)}}},61813:function(e,t,n){"use strict";n.d(t,{u:function(){return l}});var i=n(53002);async function l(){let{adapter:e}=i.Z.getState();return e&&"standard"in e&&"fuse:getEphemeralSigners"in e.wallet.features&&e.wallet.features["fuse:getEphemeralSigners"].getEphemeralSigners}},7931:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var i=n(67294),l=n(12839);function s(e,t,n){var s;let o="all .4s cubic-bezier(0.4, 0, 0.2, 1)",[r,a]=(0,i.useState)(null!==(s=null==n?void 0:n.defaultHasWrapped)&&void 0!==s&&s);(0,i.useEffect)(function(){if(l.N9||!(null==n?void 0:n.defaultHasWrapped))return;let i=e.current,s=t.current;if(!i||!s)return;let o=i.getBoundingClientRect(),r=s.getBoundingClientRect(),a=r.top-o.top,c=o.top<r.top?1:-1;i.style.setProperty("transition",""),s.style.setProperty("transition",""),i.style.setProperty("transform","translateY(".concat(a*c,"px)")),s.style.setProperty("transform","translateY(".concat(-a*c,"px)"))},[]);let c=(0,i.useCallback)(()=>{let n=e.current,i=t.current;if(!n||!i)return;let l=n.getBoundingClientRect(),s=i.getBoundingClientRect(),c=s.top-l.top,d=l.top<s.top?1:-1;n.style.setProperty("transition",o),i.style.setProperty("transition",o),r?(n.style.setProperty("transform","translateY(0px)"),i.style.setProperty("transform","translateY(0px)"),a(!1)):(n.style.setProperty("transform","translateY(".concat(c*d,"px)")),i.style.setProperty("transform","translateY(".concat(-c*d,"px)")),a(!0))},[r,e,t]),d=(0,i.useCallback)(()=>{let n=e.current,i=t.current;n&&i&&(n.style.setProperty("transition",o),i.style.setProperty("transition",o),n.style.setProperty("transform","translateY(0px)"),i.style.setProperty("transform","translateY(0px)"))},[r,e,t]);return(0,i.useEffect)(()=>{let n=e.current,i=t.current,l=()=>{null==n||n.style.setProperty("pointerEvents","none")},s=()=>{null==n||n.style.setProperty("pointerEvents","")};return null==n||n.addEventListener("transitionstart",l),null==n||n.addEventListener("transitionend",s),null==i||i.addEventListener("transitionstart",l),null==i||i.addEventListener("transitionend",s),()=>{null==n||n.removeEventListener("transitionstart",l),null==n||n.removeEventListener("transitionend",s),null==i||i.removeEventListener("transitionstart",l),null==i||i.removeEventListener("transitionend",s)}},[e,t]),[r,{toggleSwap:c,resetSwapPosition:d}]}},58625:function(e,t,n){"use strict";n.d(t,{a:function(){return x}});var i=n(85893),l=n(53002),s=n(51523),o=n(81451),r=n(42186),a=n(72573),c=n(48162),d=n(28948),m=n(51800),u=n(92618),p=n(66180);function x(e){let{solLeastBalance:t,className:n,tooltipText:x}=e,f=(0,l.Z)(e=>e.solBalance),h=(0,s.hi)(f,10**r.Bk);return(0,i.jsx)(d.U,{children:h&&(0,o.lt)(h,null!=t?t:r.kn)&&(0,o.eg)(h,0)&&(0,i.jsxs)(m.Z,{className:(0,p.m)("text-sm mt-2 text-[#D8CB39] items-center justify-center",n),children:["SOL balance: ",(0,a.B)(h)," ",(0,i.jsxs)(u.Z,{placement:"bottom-right",children:[(0,i.jsx)(c.Z,{size:"sm",heroIconName:"question-mark-circle",className:"ml-2 cursor-help"}),(0,i.jsx)(u.Z.Panel,{children:(0,i.jsx)("p",{className:"w-80",children:null!=x?x:"SOL is needed for Solana network fees. A minimum balance of ".concat(null!=t?t:r.kn," SOL is\n                recommended to avoid failed transactions. This swap will leave you with less than \n                ").concat(null!=t?t:r.kn," SOL.")})})]})]})})}},58987:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eS}});var i=n(85893),l=n(67294),s=n(72305),o=n(90482),r=n(66180),a=n(91371),c=n(6262),d=n(13039),m=n(94678),u=n(52784),p=n(76961),x=n(31166),f=n(11163),h=n(94355),b=n(56603),v=n(4465),g=n(16938),Z=n(26842),j=n(99779),y=n(96662),P=n(25222),k=n(80582);function N(e){var t,n;let i={ammId:String(null!==(n=null!==(t=e.ammId)&&void 0!==t?t:e.ammid)&&void 0!==n?n:"")};return(0,g.dI)(i)}var w=n(31555),S=n(27713),T=n(53002),C=n(43067),A=n(97664),L=n(54592),F=n(88132),E=n(28948),I=n(60421),B=n(48162),M=n(85830),U=n(33674),R=n(51800),D=n(18074),z=n(62952),q=n(95865),W=n(81451),O=n(8951),_=n(14209),H=n(51523),$=n(71375),Y=n(84207),J=n(72573),V=n(32825),X=n(47857),Q=n(7931),K=n(92224),G=n(99023),ee=n(40816),et=n(54531);let en="mobile:justify-center mobile:w-1/2";function ei(e){let{coin1:t,coin2:n,fee:s,focusSide:o,onChangeFocus:r}=e,a=(0,l.useMemo)(()=>{let e=[];return t&&e.push({label:"".concat(t.symbol||"Unknown"," price"),value:t.id,className:en}),n&&e.push({label:"".concat(n.symbol||"Unknown"," price"),value:n.id,className:en}),e},[t,n]),c=(0,l.useCallback)(e=>{r(e.value===n.id?"coin2":"coin1")},[n]);return(0,i.jsxs)("div",{className:"flex justify-between items-center mb-[27px] mobile:flex-col mobile:items-baseline mobile:mb-3",children:[(0,i.jsxs)("div",{className:"flex items-center mobile:mb-2",children:[(0,i.jsx)(et.Z,{size:"lg",token1:t,token2:n}),(0,i.jsxs)("span",{className:"ml-2 text-xl font-medium mobile:text-lg text-white",children:[(null==t?void 0:t.symbol)||"-"," / ",(null==n?void 0:n.symbol)||"-"]}),(0,i.jsxs)("div",{className:"px-2.5 py-1 ml-2 rounded-lg text-sm text-secondary-title bg-active-tab-bg",children:["Pool Fee ",s||"-"]})]}),(0,i.jsx)("div",{className:"flex items-center mobile:w-full",children:t&&n&&(0,i.jsx)(ee.Z,{classNames:"ml-4 mobile:w-full mobile:ml-0",tabs:a,selectedValue:"coin1"===o?t.id:null==n?void 0:n.id,onChange:c})})]})}var el=n(58625),es=n(54103),eo=n(67858),er=n(96256);function ea(){return(0,i.jsxs)("div",{className:"absolute text-sm flex flex-col border-1.5 border-[#abc4ff40] text-center justify-center items-center p-2 w-full h-full bg-[#141041] bg-opacity-80 z-10 rounded-xl",children:[(0,i.jsx)(B.Z,{className:"mb-1",heroIconName:"lock-closed",size:"sm"}),"Current price is outside your selected range. Single-asset deposit only."]})}var ec=n(71122),ed=n(83496),em=n(14200),eu=n(6547),ep=n(11601),ex=n(70745),ef=n(92618),eh=n(51488),eb=n(99522),ev=n(6994),eg=n(65927),eZ=n(40471),ej=n(48678);function ey(e){var t,n;let{open:s,haveEnoughCoin1:o,haveEnoughCoin2:c,coin1:d,coin2:m,coin1Amount:u,coin1AmountFee:p,coin2Amount:x,coin2AmountFee:f,decimals:h,currentPrice:b,position:v,gettedNFTAddress:g,totalDeposit:Z,feeRate:j,inRange:y,onBackToAllMyPools:P,onConfirm:k,onClose:N,onRefreshSnapshot:w,isSnapshotDataFresh:S}=e,T=(0,l.useRef)(!1),A=Math.min(null!=h?h:6,6),F=(0,a.ZP)(e=>e.isApprovePanelShown),E=(0,l.useCallback)(e=>{null==k||k(e),T.current=!0},[N]),I=!!g,M=(0,l.useCallback)(()=>{N()},[N]);return(0,i.jsx)(eg.Z,{open:s,onClose:M,children:e=>{let{close:l}=e;return(0,i.jsx)(ev.Z,{className:(0,r.m)("p-6 mobile:py-4 mobile:px-2 rounded-3xl w-[min(480px,95vw)] mx-8 border-1.5 border-[rgba(171,196,255,0.2)]  bg-cyberpunk-card-bg shadow-cyberpunk-card"),size:"lg",children:I?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(R.Z,{className:"justify-between items-center mb-6 mobile:mb-3",children:[(0,i.jsx)("div",{className:"text-xl font-semibold text-white mobile:text-base",children:"Deposit Confirmed"}),(0,i.jsx)(B.Z,{className:"text-[#ABC4FF] cursor-pointer",heroIconName:"x",onClick:l})]}),(0,i.jsxs)("div",{className:"my-4 mx-4 space-y-4",children:[(0,i.jsx)("div",{className:"text-sm text-[#ABC4FF] font-medium",children:"A new NFT representing your Concentrated Liquidity position is now in your wallet."}),(0,i.jsxs)(L.Z,{className:"gap-2 items-center",children:[(0,i.jsx)(eZ.Z,{src:"https://cloudflare-ipfs.com/ipfs/Qme9ErqmQaznzpfDACncEW48NyXJPFP7HgzfoNdto9xQ9P/02.jpg",className:"h-44 w-44"}),(0,i.jsxs)(R.Z,{className:"text-sm text-[#ABC4FF] font-medium gap-2",children:[(0,i.jsx)("div",{children:"NFT Mint:"}),(0,i.jsx)(eb.U,{canCopy:!0,canExternalLink:!0,addressType:"token",children:g})]})]}),(0,i.jsxs)("div",{className:"text-sm text-[#ABC4FF] font-medium",children:[(0,i.jsx)("strong",{className:"text-base",children:"DO NOT"})," burn this NFT or you will be unable to remove liquidity! If you send the NFT to another wallet, only the new wallet will be able to remove liquidity."]})]}),(0,i.jsx)(L.Z,{className:"items-center mt-5 mobile:mt-3",children:(0,i.jsx)("div",{className:"self-stretch",children:(0,i.jsx)(L.Z,{children:(0,i.jsx)(C.Z,{className:"frosted-glass-teal",onClick:P,children:"View My Pools"})})})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(R.Z,{className:"justify-between items-center mb-6 mobile:mb-3",children:[(0,i.jsxs)("div",{className:"text-xl font-semibold text-white mobile:text-base",children:["Preview Deposit to ",null==d?void 0:d.symbol," / ",null==m?void 0:m.symbol]}),(0,i.jsx)(B.Z,{className:"text-[#ABC4FF] cursor-pointer",heroIconName:"x",onClick:l})]}),(0,i.jsxs)("div",{className:"mt-4 border-1.5 border-[#abc4ff40] rounded-xl p-3 mobile:p-2 mobile:mt-3",children:[(0,i.jsx)("span",{className:"text-sm leading-[18px] text-secondary-title",children:"My Position"}),(0,i.jsxs)("div",{className:"text-sm flex leading-[18px] flex-col pt-2.5",children:[(0,i.jsxs)("div",{className:"flex justify-between mb-2.5",children:[(0,i.jsxs)("span",{className:"flex items-center text-sm text-[#abc4ff]",children:[(0,i.jsx)(ex.Z,{className:"inline-block mr-1",size:"sm",token:d}),null==d?void 0:d.symbol]}),(0,i.jsxs)(L.Z,{className:"items-end",children:[(0,i.jsxs)("span",{children:[(0,J.B)(u)," ",null==d?void 0:d.symbol]}),(0,W.$u)(p)&&(0,i.jsxs)(R.Z,{className:"text-xs text-[#abc4ff80] gap-0.5 items-center",children:[(0,i.jsxs)("span",{children:["Position: ",(0,J.B)((0,H.h9)(u,p))," + "]}),(0,i.jsxs)(R.Z,{className:"text-[#D8CB39] font-medium gap-0.5 items-center",children:[(0,i.jsx)("span",{children:"Fee"}),(0,i.jsxs)(ef.Z,{children:[(0,i.jsx)(B.Z,{size:"xs",heroIconName:"information-circle"}),(0,i.jsx)(ef.Z.Panel,{children:(0,i.jsx)("div",{className:"max-w-[300px] space-y-1.5",children:"This token uses the Token-2022 program and includes a transfer fee set by the token creator. These are the final deposit amounts for the position and the transfer fee."})})]}),(0,i.jsxs)("span",{children:[": ",(0,J.B)(p)]})]})]})]})]}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsxs)("span",{className:"flex items-center text-sm text-[#abc4ff]",children:[(0,i.jsx)(ex.Z,{className:"inline-block mr-1",size:"sm",token:m}),null==m?void 0:m.symbol]}),(0,i.jsxs)(L.Z,{className:"items-end",children:[(0,i.jsxs)("span",{children:[(0,J.B)(x)," ",null==m?void 0:m.symbol]}),(0,W.$u)(f)&&(0,i.jsxs)(R.Z,{className:"text-xs text-[#abc4ff80] gap-0.5 items-center",children:[(0,i.jsxs)("span",{children:["Position: ",(0,J.B)((0,H.h9)(x,f))," + "]}),(0,i.jsxs)(R.Z,{className:"text-[#D8CB39] font-medium gap-0.5 items-center",children:[(0,i.jsx)("span",{children:"Fee"}),(0,i.jsxs)(ef.Z,{children:[(0,i.jsx)(B.Z,{size:"xs",heroIconName:"information-circle"}),(0,i.jsx)(ef.Z.Panel,{children:(0,i.jsx)("div",{className:"max-w-[300px] space-y-1.5",children:"This token uses the Token-2022 program and includes a transfer fee set by the token creator. These are the final deposit amounts for the position and the transfer fee."})})]}),(0,i.jsxs)("span",{children:[": ",(0,J.B)(f)]})]})]})]})]}),(0,i.jsxs)("div",{className:"flex justify-between mt-2 pl-1",children:[(0,i.jsx)("span",{className:"flex items-center text-sm text-[#abc4ff]",children:"Fee tier"}),(0,i.jsx)("span",{children:(0,D.Z)((j||0)/1e6)})]})]})]}),(0,i.jsxs)("div",{className:"mt-4 border-1.5 border-[#abc4ff40] rounded-xl p-3 mobile:p-2 mobile:mt-3",children:[(0,i.jsxs)("div",{className:"text-sm flex justify-between items-end leading-[18px] font-medium mb-2 mobile:text-xs",children:[(0,i.jsx)("span",{className:"flex text-sm text-secondary-title leading-[18px] mr-2",children:"Current Price"}),b?(0,ej.C)((0,J.B)(b,{decimalLength:A})):"0"," ",null==m?void 0:m.symbol," per ",null==d?void 0:d.symbol]}),(0,i.jsxs)("div",{className:"flex justify-between mb-3",children:[(0,i.jsx)("span",{className:"text-sm leading-[18px] text-secondary-title",children:"Selected Range"}),(0,i.jsx)("span",{children:y?(0,i.jsxs)(R.Z,{className:"items-center bg-[#142B45] rounded text-xs text-[#39D0D8] py-0.5 px-1 ml-2",children:[(0,i.jsx)(B.Z,{size:"xs",iconSrc:"/icons/check-circle.svg"}),(0,i.jsx)("div",{className:"mobile:text-2xs font-normal",style:{marginLeft:4},children:"In Range"})]}):(0,i.jsxs)(R.Z,{className:"items-center bg-[#DA2EEF]/10 rounded text-xs text-[#DA2EEF] py-0.5 px-1 ml-2",children:[(0,i.jsx)(B.Z,{size:"xs",iconSrc:"/icons/warn-stick.svg"}),(0,i.jsx)("div",{className:"mobile:text-2xs font-normal",style:{marginLeft:4},children:"Out of Range"})]})})]}),(0,i.jsxs)("div",{className:"flex gap-3",children:[(0,i.jsxs)("div",{className:"border-1.5 justify-center text-center flex-1 border-light-blue-opacity rounded-xl p-3 mobile:p-2",children:[(0,i.jsx)("span",{className:"text-sm leading-[18px] text-secondary-title",children:"Min Price"}),(0,i.jsx)("div",{className:"text-xl my-3",children:(0,J.B)(null==v?void 0:v.min,{decimalLength:A})}),(0,i.jsxs)("div",{className:"text-sm text-[#abc4ff80]",children:[null==m?void 0:m.symbol," per ",null==d?void 0:d.symbol]})]}),(0,i.jsxs)("div",{className:"border-1.5 justify-center text-center flex-1 border-light-blue-opacity rounded-xl p-3 mobile:p-2",children:[(0,i.jsx)("span",{className:"text-sm leading-[18px] text-secondary-title",children:"Max Price"}),(0,i.jsx)("div",{className:"text-xl my-3",children:(0,J.B)(null==v?void 0:v.max,{decimalLength:A})}),(0,i.jsxs)("div",{className:"text-sm text-[#abc4ff80]",children:[null==m?void 0:m.symbol," per ",null==d?void 0:d.symbol]})]})]})]}),(0,i.jsx)("div",{className:"mt-4 border-1.5 border-[#abc4ff40] rounded-xl p-3 mobile:p-2 mobile:mt-3",children:(0,i.jsxs)("div",{className:"flex justify-between items-center",children:[(0,i.jsx)("span",{className:"text-sm leading-[18px] text-secondary-title",children:"Total Deposit"}),(0,i.jsx)("span",{className:"text-lg",children:Z})]})}),(0,i.jsx)(L.Z,{className:"items-center mt-5 mobile:mt-3",children:(0,i.jsx)("div",{className:"self-stretch",children:(0,i.jsx)(L.Z,{children:(0,i.jsx)(C.Z,{className:"frosted-glass-teal",isLoading:F,validators:[{should:S,forceActive:!0,fallbackProps:{onClick:()=>{w()},children:"Refresh Position"}},{should:o,fallbackProps:{children:"Insufficient ".concat(null!==(t=null==d?void 0:d.symbol)&&void 0!==t?t:""," balance")}},{should:c,fallbackProps:{children:"Insufficient ".concat(null!==(n=null==m?void 0:m.symbol)&&void 0!==n?n:""," balance")}}],onClick:()=>E(l),children:"Confirm Deposit"})})})})]})})}})}var eP=n(74365),ek=n(63675);let{ContextProvider:eN,useStore:ew}=(0,V.Z)({hasAcceptedPriceChange:!1,coinInputBox1ComponentRef:(0,l.createRef)(),coinInputBox2ComponentRef:(0,l.createRef)(),liquidityButtonComponentRef:(0,l.createRef)()});function eS(){return(0,i.jsxs)(eN,{children:[(0,i.jsx)(eA,{}),(0,i.jsxs)(M.Z,{mobileBarTitle:"Concentrated",metaTitle:"Concentrated - Raydium",children:[(0,i.jsx)(eT,{}),(0,i.jsx)(eL,{})]})]})}function eT(){return(0,i.jsx)(R.Z,{className:(0,r.m)("-mt-4 mobile:mt-0.5 mb-8 mobile:mb-2 sticky z-auto -top-4 mobile:top-0 mobile:-translate-y-2 mobile:bg-[#0f0b2f] mobile:hidden items-center justify-between"),children:(0,i.jsx)(C.Z,{type:"text",className:"text-sm text-[#ABC4FF] opacity-50 px-0",prefix:(0,i.jsx)(B.Z,{heroIconName:"chevron-left",size:"sm"}),onClick:()=>{(0,w.ES)("/clmm/pools")},children:"Back to all pools"})})}function eC(){return(0,i.jsx)(R.Z,{className:(0,r.m)("-mt-4 mobile:mt-0.5 mb-8 mobile:mb-2 sticky z-10 -top-4 mobile:top-0 mobile:-translate-y-2 mobile:bg-[#0f0b2f] items-center justify-between"),children:(0,i.jsx)(C.Z,{type:"text",className:"text-sm text-[#ABC4FF] px-0",prefix:(0,i.jsx)(B.Z,{heroIconName:"chevron-left"}),onClick:()=>{(0,w.ES)("/clmm/pools")}})})}function eA(){return!function(){let{query:e,pathname:t,replace:n}=(0,f.useRouter)(),i=(0,m.ZP)(e=>e.hydratedAmmPools),s=(0,m.ZP)(e=>e.currentAmmPool),o=(0,y.ZP)(e=>e.connection),r=(0,x.ZP)(e=>e.getToken),c=(0,a.ZP)(e=>e.inCleanUrlMode),[d,u]=(0,l.useState)(!1),p=(0,l.useCallback)(e=>i.find(t=>t.idString===e),[i]);(0,l.useEffect)(()=>{t.includes("/clmm/create-position")||u(!1)},[t]),(0,l.useEffect)(()=>{let e=()=>u(!1);return null==globalThis||globalThis.addEventListener("beforeunload",e),()=>null==globalThis?void 0:globalThis.removeEventListener("beforeunload",e)},[]),(0,Z.Z)(async()=>{if(!t.includes("/clmm/create-position")||!o||d)return;let{logWarning:n}=h.Z.getState(),{ammId:l}=N(e);if(l&&i.length>0){let e=l?p(l):void 0,t=(0,P.w)(e);e&&t?m.ZP.setState({currentAmmPool:e,coin1:e.base,coin2:e.quote}):(m.ZP.setState({coin1:r(k.PD),coin2:r(k.LA)}),i.length>0&&n("Pool not found. Check the URL link or search manually."))}i.length>0&&u(!0)},[d,o,t,e,i,p]);let w=(0,l.useCallback)((0,b.P)((e,t)=>{n({pathname:e,query:t},void 0,{shallow:!0})},{delay:500}),[n]);(0,j.P)(()=>{if(!t.includes("/clmm/create-position")||!d||c)return;let n=N(e),i=(0,g.dI)({ammId:null==s?void 0:s.idString}),l=!(0,v.Ek)(n,i);l&&w(t,i)},[d,c,s,e,t])}(),(0,u.Z)(),(0,p.Z)(),!function(){(0,x.ZP)(e=>e.getToken);let e=(0,x.ZP)(e=>e.tokens);(0,l.useEffect)(()=>{let{coin1:t,coin2:n,currentAmmPool:i}=m.ZP.getState();!t&&!n&&Object.keys(e).length&&i&&m.ZP.setState({coin1:i.base,coin2:i.quote})},[e])}(),null}function eL(){var e,t,n,r,u,p,f;let h=(0,T.Z)(e=>e.getBalance),b=(0,T.Z)(e=>e.balances),[g,Z,y]=(0,m.ZP)(e=>[e.chartPoints,e.loadChartPointsAct,e.lazyLoadChart]),P=(0,T.Z)(e=>e.connected),k=(0,T.Z)(e=>e.connecting),[N,{off:M,on:V}]=(0,K.ZP)(!1),ee=(0,a.ZP)(e=>e.isApprovePanelShown),et=(0,T.Z)(e=>e.checkWalletHasEnoughBalance),en=(0,m.ZP)(e=>e.timeBasis),es=(0,m.ZP)(e=>e.coin1),eo=(0,m.ZP)(e=>e.coin1Amount);(0,m.ZP)(e=>e.coin1SlippageAmount);let er=(0,m.ZP)(e=>e.coin1AmountFee),ec=(0,m.ZP)(e=>e.coin2),eb=(0,m.ZP)(e=>e.coin2Amount),ev=(0,m.ZP)(e=>e.coin2AmountFee);(0,m.ZP)(e=>e.coin2SlippageAmount);let eg=(0,m.ZP)(e=>e.focusSide),eZ="coin1"===eg,ej=(0,m.ZP)(e=>e.liquidity),eN=(0,m.ZP)(e=>e.currentAmmPool),eS=(0,m.ZP)(e=>e.hydratedAmmPools),eT=(0,m.ZP)(e=>e.priceUpper),eA=(0,m.ZP)(e=>e.priceLower),eL=(0,m.ZP)(e=>e.priceUpperTick),eE=(0,m.ZP)(e=>e.priceLowerTick),eI=(0,m.ZP)(e=>e.refreshConcentrated),eB=(0,x.ZP)(e=>e.refreshTokenPrice),[eM,eU]=(0,l.useState)({}),eR="".concat(null==eN?void 0:eN.idString,"-").concat(eg),eD=function(e){let t=(0,l.useRef)();return(0,l.useEffect)(()=>{t.current=e},[e]),t.current}(eR),ez=(0,l.useRef)(),eq=(0,l.useRef)({lower:void 0,upper:void 0}),eW=es||ec?Math.max(null!==(n=null==es?void 0:es.decimals)&&void 0!==n?n:0,null!==(r=null==ec?void 0:ec.decimals)&&void 0!==r?r:0):6,eO=(0,v.aT)(null==eN?void 0:eN.state.mintA.mint,es),e_=eZ&&eO||!eO&&!eZ,eH=(0,l.useMemo)(()=>{let e=g?(0,G.Mn)(g):void 0;return e_?e:e?e.map(e=>({x:1/e.x,y:e.y})).reverse():void 0},[g,e_]),e$=(0,l.useMemo)(()=>Math.pow(-1,eO?eZ?0:1:eZ?1:0),[eO,eZ]),eY=eN?[eN.state[m.v$[en]].priceMin,eN.state[m.v$[en]].priceMax]:[void 0,void 0];e_||(eY.reverse(),eY[0]=eY[0]?1/eY[0]:eY[0],eY[1]=eY[1]?1/eY[1]:eY[1]);let{coinInputBox1ComponentRef:eJ,coinInputBox2ComponentRef:eV,liquidityButtonComponentRef:eX}=ew(),eQ=(0,l.useRef)(null),eK=(0,l.useRef)(null),[,{toggleSwap:eG}]=(0,Q.H)(eQ,eK);(0,j.P)(e=>{let[t]=e;t&&t!==eg&&eG()},[eg]);let e0=(0,l.useMemo)(()=>eN?(0,S.eZ)(e_?eN.state.currentPrice:new o.Z(1).div(eN.state.currentPrice)):void 0,[null==eN?void 0:eN.state.currentPrice.toFixed(),eg]);eN&&(0,S.eZ)(eN.state.currentPrice);let e1=eN&&e0&&void 0!==eA&&void 0!==eT?[(0,$.Z)(eT||0,eW).lt((0,$.Z)(e0||0,eW)),(0,$.Z)(eA||0,eW).gt((0,$.Z)(e0||0,eW))]:[!1,!1];eZ||e1.reverse();let[e2,e4]=e1;(0,l.useEffect)(()=>{y&&eN&&Z(eN.idString)},[null==eN?void 0:eN.idString,Z,y]),(0,l.useEffect)(()=>{e2&&m.ZP.setState({coin1Amount:"0"}),e4&&m.ZP.setState({coin2Amount:"0"})},[e2,e4]),(0,l.useEffect)(()=>()=>m.ZP.setState({lazyLoadChart:!1,focusSide:"coin1",userCursorSide:"coin1"}),[]);let e5=es&&(!(0,W.$u)(eo)||et((0,z.n)(es,eo,{alreadyDecimaled:!0}))),e3=ec&&(!(0,W.$u)(eb)||et((0,z.n)(ec,eb,{alreadyDecimaled:!0}))),e8=(0,l.useRef)(null);(0,l.useEffect)(()=>{m.ZP.setState({scrollToInputBox:()=>{var e;return null===(e=e8.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth",block:"center"})}})},[e8]);let e6=(0,_.db)((null===(e=null==eN?void 0:eN.state.currentPrice)||void 0===e?void 0:e.toFixed(20))||"")+2,e9=(0,l.useMemo)(()=>(0,c.vt)({coin1:es,coin2:ec,ammPool:eN,reverse:!e_,maxDecimals:Math.max(eW,e6)}),[es,ec,eN,e_,eW,e6]);(0,l.useEffect)(()=>{eR!==eD&&e9&&(m.ZP.setState(e9),eq.current.lower=e9.priceLowerTick,eq.current.upper=e9.priceUpperTick)},[e9,eR,eD]);let[e7,te]=(0,l.useState)([]),tt=(0,l.useCallback)(e=>te(t=>[null==e?void 0:e.toExact(),t[1]]),[]),tn=(0,l.useCallback)(e=>te(t=>[t[0],null==e?void 0:e.toExact()]),[]),ti=e7.filter(e=>!!e).reduce((e,t)=>e.add((0,Y.Z)(t)),(0,Y.Z)(0)),tl=(0,l.useMemo)(()=>es&&eo&&(0,em.W)(es)?(0,ed.w)({amount:(0,z.n)(es,eo,{alreadyDecimaled:!0})}):void 0,[es,eo]),ts=(0,l.useMemo)(()=>ec&&eb&&(0,em.W)(ec)?(0,ed.w)({amount:(0,z.n)(ec,eb,{alreadyDecimaled:!0})}):void 0,[ec,eb]),to=(0,em.W)(es)||(0,em.W)(ec),tr=(0,X.z)(e=>{let t={price:e.min,tick:eq.current.lower};if(!eN)return t;if(e[ek.e6.Min]>=e[ek.e6.Max]){let e=eZ?es:ec,t=eq.current.upper-eN.state.tickSpacing*e$,{price:n,tick:i}=(0,c.Ek)({poolInfo:eN.state,baseIn:(0,v.aT)(eN.state.mintA.mint,null==e?void 0:e.mint),tick:t});return eq.current.lower=i,m.ZP.setState({priceLowerTick:i,priceLower:n}),{price:(0,O.V)({val:n.toFixed(10)}),tick:i}}return t}),ta=(0,l.useCallback)(e=>{let{side:t,userInput:n,...i}=e;if(!eN||!es||!ec||isNaN(i.min)||isNaN(i.max))return;let l=(0,c.TL)({...i,coin1:es,coin2:ec,ammPool:eN,reverse:!eZ,maxDecimals:Math.max(eW,e6)}),s=t===ek.e6.Min,o=s?"priceLowerTick":"priceUpperTick";if(n&&t)eq.current[s?"lower":"upper"]=l[o],s&&m.ZP.setState({priceLowerTick:l[o],priceLower:l.priceLower}),s||m.ZP.setState({priceUpperTick:l[o],priceUpper:l.priceUpper});else{let e=m.ZP.getState(),n=void 0!==e.priceLowerTick&&void 0!==e.priceUpperTick&&void 0!==e.priceLower&&void 0!==e.priceUpper,i=n?{priceLowerTick:e.priceLowerTick,priceLower:e.priceLower,priceUpperTick:e.priceUpperTick,priceUpper:e.priceUpper}:void 0;if(l.priceLowerTick===l.priceUpperTick||eZ&&t&&(s&&l.priceLowerTick>=eq.current.upper||!s&&l.priceUpperTick<=eq.current.lower)||!eZ&&t&&(s&&l.priceLowerTick-eq.current.upper<=0||!s&&l.priceUpperTick-eq.current.lower>=0))return i;eq.current={lower:l.priceLowerTick,upper:l.priceUpperTick},m.ZP.setState(l)}return l},[null==es?void 0:es.mintString,null==ec?void 0:ec.mintString,null==eN?void 0:eN.idString,eZ,e6,eW]),tc=(0,l.useCallback)(e=>{let{p:t,isMin:n,isIncrease:i}=e;if(!eN||!es||!ec)return;let l=eZ?es:ec,s=n?"lower":"upper",o=eq.current[s]+(i?eN.state.tickSpacing:-1*eN.state.tickSpacing)*e$,{price:r}=(0,c.Ek)({poolInfo:eN.state,baseIn:(0,v.aT)(eN.state.mintA.mint,null==l?void 0:l.mint),tick:o});return eZ&&(n&&o>=eq.current.upper||!n&&o<=eq.current.lower)||!eZ&&(n&&o-eq.current.upper<=0||!n&&o-eq.current.lower>=0)||n&&(0,W.eg)(r.toFixed(20),ez.current.getPosition().max.toFixed(20))||!n&&(0,W.G)(r.toFixed(20),ez.current.getPosition().min.toFixed(20))?(0,Y.Z)(t):(eq.current[s]=o,n&&m.ZP.setState({priceLower:r,priceLowerTick:o}),n||m.ZP.setState({priceUpper:r,priceUpperTick:o}),r)},[null==es?void 0:es.mint,null==ec?void 0:ec.mint,null==eN?void 0:eN.idString,e$,eW,eZ]),td=(0,X.z)(()=>{eU({...m.ZP.getState(),coin1:es,coin2:ec,coin1Amount:eo,coin2Amount:eb,coin1AmountFee:er,coin2AmountFee:ev,decimals:eW,totalDeposit:(0,q.Z)(ti),feeRate:null==eN?void 0:eN.ammConfig.tradeFeeRate,inRange:!e1.some(e=>e),currentPrice:eN?(0,S.eZ)(eO?eN.state.currentPrice:new o.Z(1).div(eN.state.currentPrice)):void 0,currentAmmPool:eN})}),tm=(0,l.useMemo)(()=>(0,W.eq)(eM.coin1Amount,eo)&&(0,W.eq)(eM.coin2Amount,eb),[eo,eb,eM]),tu=(0,l.useCallback)(()=>{td(),V()},[V,es,ec,eo,eb,eW,ti,eN,e1]),tp=(0,l.useMemo)(()=>({isStable:(null==eN?void 0:eN.ammConfig.tradeFeeRate)===100,baseIn:e_,points:eH||[],initMinBoundaryX:null==e9?void 0:e9.priceLower,initMaxBoundaryX:null==e9?void 0:e9.priceUpper}),[eH,e9,null==eN?void 0:eN.ammConfig.tradeFeeRate,e_]),[tx,tf]=(0,l.useState)(),{Token2022FeeTooHighWarningChip:th,isWarningChipOpen:tb}=(0,eh.I)([{token:es,amount:eo},{token:ec,amount:eb}]),tv=(0,l.useMemo)(()=>es&&h(es)?(0,z.n)(es,(0,H.dC)(h(es),.985),{alreadyDecimaled:!0}):void 0,[es,h,b]),tg=(0,l.useMemo)(()=>ec&&h(ec)?(0,z.n)(ec,(0,H.dC)(h(ec),.985),{alreadyDecimaled:!0}):void 0,[ec,h,b]),[tZ,tj]=(0,l.useState)(!1);(0,l.useEffect)(()=>()=>tj(!1),[null==es?void 0:es.mintString]);let[ty,tP]=(0,l.useState)(!1);return(0,l.useEffect)(()=>()=>tP(!1),[null==ec?void 0:ec.mintString]),(0,i.jsxs)(F.Z,{domRef:e8,wrapperClassName:"w-[min(912px,100%)] self-center cyberpunk-bg-light",className:"p-6 mobile:py-5 mobile:px-3",children:[(0,i.jsx)("div",{className:"absolute -left-8 top-1/2 -translate-x-1/2 -translate-y-1/2",children:(0,i.jsx)(eC,{})}),(0,i.jsx)(ei,{coin1:es,coin2:ec,fee:(0,D.Z)(null==eN?void 0:eN.tradeFeeRate,{exact:!0}),focusSide:eg,onChangeFocus:e=>m.ZP.setState({focusSide:e})}),(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row flex-gap-1 gap-3 mb-3",children:[(0,i.jsxs)(L.Z,{className:"gap-5 bg-dark-blue rounded-xl flex flex-col w-full sm:w-1/2 px-3 py-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"flex justify-between align-top mb-3",children:[(0,i.jsx)("div",{className:"text-base leading-[22px] text-secondary-title ",children:"Deposit Amount"}),(0,i.jsx)(U.Z,{disabled:N,refreshKey:"clmm-pools",freshFunction:()=>{eB(),eI()}})]}),(0,i.jsxs)("div",{ref:eQ,className:"relative",children:[e2&&(0,i.jsx)(ea,{}),(0,i.jsx)(A.Z,{hideTransferFee:!0,className:"mb-4 py-2 mobile:py-1 px-3 mobile:px-2 border-1.5 border-[#abc4ff40]",disabled:ee,disabledInput:!eN||e2,noDisableStyle:!0,componentRef:eJ,value:eN?(0,J.B)(eo):void 0,haveHalfButton:!0,HTMLTitleTooltip:null==es?void 0:es.mintString,topLeftLabel:es?"".concat(es.mintString.slice(0,5),"...").concat(es.mintString.slice(-5)):void 0,haveCoinIcon:!0,maxValue:tv,onPriceChange:tt,disableTokenSelect:!0,onUserInput:e=>{m.ZP.setState({coin1Amount:e,userCursorSide:"coin1"})},onEnter:e=>{var t,n,i,l;e&&(ec||null===(t=eV.current)||void 0===t||null===(n=t.selectToken)||void 0===n||n.call(t),ec&&eb&&(null===(i=eX.current)||void 0===i||null===(l=i.click)||void 0===l||l.call(i)))},token:es})]}),(0,i.jsxs)("div",{ref:eK,className:"relative",children:[e4&&(0,i.jsx)(ea,{}),(0,i.jsx)(A.Z,{hideTransferFee:!0,className:"py-2 mobile:py-1 px-3 mobile:px-2 border-1.5 border-[#abc4ff40]",componentRef:eV,disabled:ee,disabledInput:!eN||e4,noDisableStyle:!0,value:eN?(0,J.B)(eb):void 0,HTMLTitleTooltip:null==ec?void 0:ec.mintString,topLeftLabel:ec?"".concat(ec.mintString.slice(0,5),"...").concat(ec.mintString.slice(-5)):void 0,haveHalfButton:!0,haveCoinIcon:!0,maxValue:tg,onPriceChange:tn,disableTokenSelect:!0,onEnter:e=>{var t,n,i,l;e&&(es||null===(t=eJ.current)||void 0===t||null===(n=t.selectToken)||void 0===n||n.call(t),es&&eo&&(null===(i=eX.current)||void 0===i||null===(l=i.click)||void 0===l||l.call(i)))},onUserInput:e=>{m.ZP.setState({coin2Amount:e,userCursorSide:"coin2"})},token:ec})]}),th({className:"pt-2"})]}),(0,i.jsxs)(L.Z,{className:"gap-4 border-1.5 border-[#abc4ff40]  rounded-xl p-3",children:[(0,i.jsxs)(L.Z,{className:"justify-between",children:[to?(0,i.jsxs)(I.Z,{className:"mb-1 grid-cols-[2.5fr,2fr,2fr] items-center text-xs text-[#abc4ff]",children:[(0,i.jsx)("div",{}),(0,i.jsxs)(R.Z,{className:"justify-self-end items-center",children:[(0,i.jsx)("div",{children:"Token2022 Fee"}),(0,i.jsxs)(ef.Z,{children:[(0,i.jsx)(B.Z,{iconClassName:"ml-1",size:"xs",heroIconName:"question-mark-circle"}),(0,i.jsx)(ef.Z.Panel,{children:(0,i.jsx)("div",{className:"max-w-[200px] space-y-1.5 text-[#abc4ff]",children:"Tokens with a transfer fee below use the Token2022 program and have programmed a fee on all token interactions."})})]})]}),(0,i.jsx)("div",{className:"justify-self-end",children:"Final Deposit"})]}):void 0,(0,i.jsx)(L.Z,{className:"gap-1",children:[{side:"1",isToken2022:(0,em.W)(es),token:es,disabled:e2,info:tl,rawAmount:eo},{side:"2",isToken2022:(0,em.W)(ec),token:ec,disabled:e4,info:ts,rawAmount:eb}].map(e=>{let{isToken2022:t,token:n,disabled:l,info:s,rawAmount:o,side:r}=e;return l||!n?void 0:(0,i.jsxs)(I.Z,{className:"grid-cols-[2.5fr,2fr,2fr] items-center",children:[(0,i.jsxs)(R.Z,{className:"items-center gap-1 overflow-hidden",children:[(0,i.jsx)("div",{className:"font-medium text-white",children:null==n?void 0:n.symbol}),(0,i.jsx)(ex.Z,{size:"sm",token:n}),t&&(0,i.jsx)(ep.I,{})]}),(0,i.jsx)("div",{className:"justify-self-end font-medium text-xs text-[#abc4ff] ",children:to?t?(0,i.jsx)(eu.j,{promise:s,fallback:"--",children:e=>(null==e?void 0:e.fee)?(0,i.jsx)("div",{children:(0,J.B)(e.fee)}):"-"}):"-":""}),(0,i.jsx)("div",{className:"justify-self-end font-medium text-white overflow-hidden",children:t&&(0,W.$u)(o)?(0,i.jsx)(eu.j,{promise:s,fallback:"--",onFullfilled:()=>{"1"===r?tj(!0):tP(!0)},children:e=>(null==e?void 0:e.pure)?(0,i.jsx)("div",{children:(0,J.B)(e.pure,{decimalLength:n?"auto ".concat(n.decimals):void 0})}):void 0}):(0,i.jsx)("div",{children:(0,J.B)(o,{decimalLength:n?"auto ".concat(n.decimals):void 0})})})]},null==n?void 0:n.mintString)})})]}),(0,i.jsxs)(R.Z,{className:"justify-between",children:[(0,i.jsx)("span",{className:"text-sm leading-[18px] text-secondary-title",children:"Total Deposit"}),(0,i.jsx)("span",{className:"text-lg leading-[18px]",children:eN&&((0,W.$u)(eo)||(0,W.$u)(eb))?(0,q.Z)(ti):"--"})]})]}),e2||e4?(0,i.jsx)(E.U,{children:(0,i.jsxs)("div",{className:"flex items-center p-3 bg-[#2C2B57] rounded-xl text-sm text-[#D6CC56]",children:[(0,i.jsx)(B.Z,{size:"sm",className:"mr-1.5",heroIconName:"exclamation-circle"}),"Your position will not trade or earn fees until price moves into your range."]})}):"",(0,i.jsx)(C.Z,{className:"frosted-glass-teal w-full mt-auto",componentRef:eX,isLoading:ee,validators:[{should:P,forceActive:!0,fallbackProps:{onClick:k?void 0:()=>a.ZP.setState({isWalletSelectorShown:!0}),children:k?"Connecting":"Connect Wallet"}},{should:eN,fallbackProps:{children:"Pool Not Found"}},{should:!(0,W.eq)((0,H.lu)(eL,eE),0),fallbackProps:{children:"Range too small"}},{should:es&&ec,fallbackProps:{children:"Select a token"}},{not:tb},{should:(0,W.$u)(eo)||(0,W.$u)(eb),fallbackProps:{children:"Enter an amount"}},{should:(!(0,em.W)(es)||tZ)&&(!(0,em.W)(ec)||ty),fallbackProps:{children:"Loading Token 2022 Info..."}},{not:null==ej?void 0:ej.eq(s.xEJ),fallbackProps:{children:"Token Amount Fail to Create Position"}},{should:e5,fallbackProps:{children:"Insufficient ".concat(null!==(u=null==es?void 0:es.symbol)&&void 0!==u?u:""," balance")}},{should:e3,fallbackProps:{children:"Insufficient ".concat(null!==(p=null==ec?void 0:ec.symbol)&&void 0!==p?p:""," balance")}}],onClick:()=>{tu()},children:"Preview"}),(0,i.jsx)(el.a,{})]}),(0,i.jsxs)("div",{className:"relative bg-dark-blue min-h-[180px] rounded-xl w-full sm:w-1/2 px-3 py-4 ".concat(eN?"":"pointer-events-none select-none"),children:[!eN&&(0,i.jsx)("div",{className:"absolute inset-0 z-10 grid grid-child-center backdrop-blur-md text-[#abc4ff]",children:eS.length?"Pool Not Found":"Loading..."}),(0,i.jsx)(eP.Z,{clmmPool:eN,poolFocusKey:eR,title:(0,i.jsx)("div",{className:"text-base leading-[22px] text-secondary-title mb-3",children:"Set Price Range"}),ref:ez,chartOptions:tp,currentPrice:e0,priceMin:eY[0],priceMax:eY[1],priceLabel:eZ?"".concat(null==ec?void 0:ec.symbol," per ").concat(null==es?void 0:es.symbol):"".concat(null==es?void 0:es.symbol," per ").concat(null==ec?void 0:ec.symbol),timeBasis:en,decimals:eW,onPositionChange:ta,onInDecrease:tc,onAdjustMin:tr,showZoom:!0,height:200}),(0,i.jsx)(eF,{})]})]}),(0,i.jsx)(ey,{onRefreshSnapshot:td,isSnapshotDataFresh:tm,haveEnoughCoin1:e5,haveEnoughCoin2:e3,open:N,coin1:eM.coin1,coin2:eM.coin2,coin1Amount:eM.coin1Amount,coin1AmountFee:eM.coin1AmountFee,coin2Amount:eM.coin2Amount,coin2AmountFee:eM.coin2AmountFee,decimals:eM.decimals,position:null===(t=ez.current)||void 0===t?void 0:t.getPosition(),totalDeposit:null!==(f=eM.totalDeposit)&&void 0!==f?f:(0,q.Z)(0),feeRate:eM.feeRate,inRange:eM.inRange,currentPrice:eM.currentPrice,gettedNFTAddress:tx,onConfirm:e=>(0,d.Z)({...eM,onSuccess(e){let{nftAddress:t}=e;tf(t)}}),onBackToAllMyPools:()=>{eI(),(0,w.Eh)("/clmm/pools",{queryProps:{currentTab:m.u0.MY_POOLS}})},onClose:()=>{M(),tf(void 0)}})]})}function eF(e){let{className:t}=e,n=(0,m.ZP)(e=>e.currentAmmPool),l=(0,ec.HU)({ammPool:n}),s=(0,a.ZP)(e=>e.isMobile);return(0,i.jsxs)(L.Z,{className:(0,r.m)("bg-[#141041] py-3 my-1 rounded-xl gap-2",t),children:[(0,i.jsxs)(R.Z,{className:"items-center gap-2",children:[(0,i.jsx)("div",{className:"text-base leading-[22px] text-secondary-title",children:"Estimated APR"}),(0,i.jsx)(eo.T,{}),(0,i.jsx)("div",{className:"font-medium text-base mobile:text-sm text-white",children:(0,D.Z)(null==l?void 0:l.apr)}),(0,i.jsx)(er.n,{className:"ml-auto"})]}),n&&(0,i.jsx)(I.Z,{className:"border-1.5 border-[#abc4ff40] py-3 px-4 rounded-xl",children:(0,i.jsx)(es.E,{type:"poolTickInfo",colCount:s?1:2,poolInfo:n})})]})}}},function(e){e.O(0,[7239,9916,5830,2820,7664,4109,5469,4768,9774,2888,179],function(){return e(e.s=10073)}),_N_E=e.O()}]);