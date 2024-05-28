"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1690],{65064:function(e,t,r){r.d(t,{L7:function(){return o},Xd:function(){return s},kw:function(){return i},zT:function(){return l}});let n="DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi",i={[n]:3},o={3:n},a="4kCccBVdQpsonm2jL2TRV1noMdarsWR2mhwwkxUTqW3W",s={[a]:1},l={1:a}},99171:function(e,t,r){r.d(t,{L:function(){return d}});var n=r(73944),i=r(72305),o=r(65064),a=r(24982),s=r(65756),l=r(48764).Buffer;let u=new i.YdH("NFT");class d{async load(e){let{connection:t,poolConfig:r,owner:n,config:i}=e,{info:o}=e;return o||(o=await d.getInfo({connection:t,poolConfig:r,owner:n,config:i})),new d(r,o)}get maxTickets(){return this.info.snapshot?this.info.snapshot.maxLotteries.toNumber():0}get purchasedTickets(){if(!this.info.ledger)return[];let e=this.info.ledger.startNumber.toNumber(),t=this.info.ledger.endNumber.toNumber();return Array.from({length:t-e+1},(t,r)=>({no:e+r}))}get allocation(){if(!this.info.ledger)return new i.dtM(this.poolConfig.baseToken,0)}get winningTickets(){if(!this.info.ledger)return[]}static getProgramId(e){let t=o.L7[e];return t?new n.nh(t):u.throwArgumentError("invalid version","version",e)}static getVersion(e){let t=(0,i.Uk0)(e),r=t.toBase58(),n=o.kw[r];return n||u.throwArgumentError("invalid program id","programId",r)}static getStateLayout(e){let t=a.Oz[e];return t||u.throwArgumentError("invalid version","version",e)}static getLedgerLayout(e){let t=a._D[e];return t||u.throwArgumentError("invalid version","version",e)}static getLayouts(e){let t=0;return e.programId&&(t=this.getVersion(e.programId)),e.version&&(t=e.version),{state:this.getStateLayout(t),ledger:this.getLedgerLayout(t)}}static async getAuthority(e){let{programId:t,poolId:r}=e,{publicKey:n}=await (0,i.qwX)([r.toBuffer()],t);return n}static async getAssociatedLedgerAccountAddress(e){let{programId:t,poolId:r,owner:n}=e,{publicKey:o}=await (0,i.qwX)([r.toBuffer(),n.toBuffer(),l.from(new Uint8Array(l.from("ido_associated_seed","utf-8")))],t);return o}static async makePurchaseInstruction(e){let{poolConfig:t,userKeys:r,amount:o}=e,a=(0,i.n_M)([(0,i.u8)("instruction"),(0,i.AW$)("amount")]),s=l.alloc(a.span);a.encode({instruction:1,amount:(0,i.yxA)(o)},s);let u=[(0,i.f3u)(i.ySi,!1),(0,i.f3u)(i.H__,!1),(0,i.f3u)(i.zet,!1),(0,i.f3u)(i.AmS,!1),(0,i.XGj)(t.id,!1),(0,i.f3u)(t.authority,!1),(0,i.XGj)(t.quoteVault,!1),(0,i.XGj)(r.quoteTokenAccount,!1),(0,i.XGj)(r.ledgerAccount,!1),(0,i.f3u)(r.owner,!0),(0,i.f3u)(r.snapshotAccount,!1)];return new n.Sl({programId:t.programId,keys:u,data:s})}static makeClaimInstruction(e){let{poolConfig:t,userKeys:r,side:o}=e,a="base"===o?r.baseTokenAccount:r.quoteTokenAccount,s="base"===o?t.baseVault:t.quoteVault,u=(0,i.n_M)([(0,i.u8)("instruction")]),d=l.alloc(u.span);u.encode({instruction:2},d);let c=[(0,i.f3u)(i.H__,!1),(0,i.f3u)(i.AmS,!1),(0,i.XGj)(t.id,!1),(0,i.f3u)(t.authority,!1),(0,i.XGj)(s,!1),(0,i.XGj)(a,!1),(0,i.XGj)(r.ledgerAccount,!1),(0,i.f3u)(r.owner,!0)];return new n.Sl({programId:t.programId,keys:c,data:d})}static async getInfo(e){let{connection:t,poolConfig:r,owner:n,config:o}=e,a=[];a.push({pubkey:r.id,version:r.version,key:"state",poolId:r.id}),n&&(a.push({pubkey:await this.getAssociatedLedgerAccountAddress({programId:r.programId,poolId:r.id,owner:n}),version:r.version,key:"ledger",poolId:r.id}),a.push({pubkey:await s.a.getAssociatedSnapshotAddress({programId:r.snapshotProgramId,seedId:r.seedId,owner:n}),version:r.snapshotVersion,key:"snapshot",poolId:r.id}));let l={},d=await (0,i.$ic)(t,a,o);for(let{pubkey:e,version:t,key:r,poolId:n,accountInfo:i}of d)if("state"===r){let r=this.getStateLayout(t);if(!i||i.data.length!==r.span)return u.throwArgumentError("invalid ido state account info","pools.id",e.toBase58());l={...l,state:r.decode(i.data)}}else if("ledger"===r){let r=this.getLedgerLayout(t);if(i&&i.data){if(i.data.length!==r.span)return u.throwArgumentError("invalid ido ledger account info","ledger",e.toBase58());l={...l,ledger:r.decode(i.data)}}}else if("snapshot"===r){let r=s.a.getStateLayout(t);if(i&&i.data){if(i.data.length!==r.span)return u.throwArgumentError("invalid ido snapshot account info","snapshot",e.toBase58());l={...l,snapshot:r.decode(i.data)}}}return l}static async getMultipleInfo(e){let{connection:t,poolsConfig:r,noNeedState:n,owner:o,config:a}=e,l=[];for(let e of r)n||l.push({pubkey:e.id,version:e.version,key:"state",poolId:e.id}),o&&(l.push({pubkey:await this.getAssociatedLedgerAccountAddress({programId:e.programId,poolId:e.id,owner:o}),version:e.version,key:"ledger",poolId:e.id}),l.push({pubkey:await s.a.getAssociatedSnapshotAddress({programId:e.snapshotProgramId,seedId:e.seedId,owner:o}),version:e.snapshotVersion,key:"snapshot",poolId:e.id}));let d={},c=await (0,i.$ic)(t,l,a);for(let{pubkey:e,version:t,key:r,poolId:n,accountInfo:i}of c)if("state"===r){let r=this.getStateLayout(t);if(!i||i.data.length!==r.span)return u.throwArgumentError("invalid ido state account info","pools.id",e.toBase58());d[n.toBase58()]={...d[n.toBase58()],state:r.decode(i.data)}}else if("ledger"===r){let r=this.getLedgerLayout(t);if(i&&i.data){if(i.data.length!==r.span)return u.throwArgumentError("invalid ido ledger account info","ledger",e.toBase58());d[n.toBase58()]={...d[n.toBase58()],ledger:r.decode(i.data)}}}else if("snapshot"===r){let r=s.a.getStateLayout(t);if(i&&i.data){if(i.data.length!==r.span)return u.throwArgumentError("invalid ido snapshot account info","snapshot",e.toBase58());let t=r.decode(i.data);d[n.toBase58()]={...d[n.toBase58()],snapshot:t}}}return d}constructor(e,t){this.poolConfig=e,this.info=t}}},24982:function(e,t,r){r.d(t,{KM:function(){return u},Oz:function(){return o},_D:function(){return s}});var n=r(72305);let i=(0,n.n_M)([(0,n.AW$)("status"),(0,n.AW$)("nonce"),(0,n.AW$)("startTime"),(0,n.AW$)("endTime"),(0,n.AW$)("startWithdrawTime"),(0,n.AW$)("numerator"),(0,n.AW$)("denominator"),(0,n.AW$)("quoteDeposited"),(0,n.AW$)("baseSupply"),(0,n.AW$)("perUserMaxLotteries"),(0,n.AW$)("perUserMinLotteries"),(0,n.AW$)("perLotteryMinStake"),(0,n.AW$)("perLotteryQuoteAmount"),(0,n.AW$)("maxWinLotteries"),(0,n.AW$)("depositedUsers"),(0,n.AW$)("raisedLotteries"),(0,n.A9x)((0,n.n_M)([(0,n.AW$)("digits"),(0,n.AW$)("number"),(0,n.AW$)("endRange"),(0,n.AW$)()]),10,"luckyNumbers"),(0,n.ZLm)("quoteMint"),(0,n.ZLm)("baseMint"),(0,n.ZLm)("quoteVault"),(0,n.ZLm)("baseVault"),(0,n.ZLm)("stakePoolId"),(0,n.ZLm)("stakeProgramId"),(0,n.ZLm)("snapshotProgramId"),(0,n.ZLm)("idoOwner"),(0,n.ZLm)("seedId"),(0,n.AW$)("isWinning"),(0,n.A9x)((0,n.AW$)(),7,"padding")]),o={3:i},a=(0,n.n_M)([(0,n.AW$)("state"),(0,n.ZLm)("poolId"),(0,n.ZLm)("owner"),(0,n.AW$)("quoteDeposited"),(0,n.AW$)("quoteWithdrawn"),(0,n.AW$)("baseWithdrawn"),(0,n.AW$)("startNumber"),(0,n.AW$)("endNumber")]),s={3:a},l=(0,n.n_M)([(0,n.AW$)("maxLotteries")]),u={1:l}},65756:function(e,t,r){r.d(t,{a:function(){return l}});var n=r(73944),i=r(72305),o=r(65064),a=r(24982);let s=new i.YdH("Snapshot");class l{static getProgramId(e){let t=o.zT[e];return t?new n.nh(t):s.throwArgumentError("invalid version","version",e)}static getVersion(e){let t=(0,i.Uk0)(e),r=t.toBase58(),n=o.Xd[r];return n||s.throwArgumentError("invalid program id","programId",r)}static getStateLayout(e){let t=a.KM[e];return t||s.throwArgumentError("invalid version","version",e)}static getLayouts(e){let t=0;return e.programId&&(t=this.getVersion(e.programId)),e.version&&(t=e.version),{state:this.getStateLayout(t)}}static async getAssociatedSnapshotAddress(e){let{programId:t,seedId:r,owner:n}=e,{publicKey:o}=await (0,i.qwX)([r.toBuffer(),n.toBuffer(),t.toBuffer()],t);return o}}},87479:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(79938),i=r(14209),o=r(51523),a=r(72573),s=r(72305),l=r(73944),u=r(14200),d=r(88393),c=r(99171),m=r(65756);async function f(e){let{idoInfo:t,side:r,forceKeyPairs:f,...p}=e;return(0,n.ZP)(async e=>{var n,f,g,h,v;let{transactionCollector:b,baseUtils:{owner:y,connection:x,tokenAccounts:w}}=e;if(!t.base||!t.quote)return;let A=[],I=[],N=[],k=(0,u.D)(t.base.mint),j=(0,u.D)(t.quote.mint),L=s.RGo.getAssociatedTokenAccount({mint:t.base.mint,owner:y,programId:k}),S=s.RGo.getAssociatedTokenAccount({mint:t.quote.mint,owner:y,programId:j});if(t.quote.mint.toBase58()===s.VbZ.mint){let{innerTransaction:e,address:t}=await s.RGo.makeCreateWrappedNativeAccountInstructions({connection:x,owner:y,payer:y,amount:0});S=t.newAccount,A.push(...e.instructions),I.push(...e.signers),N.push(...e.instructionTypes),A.push(s.RGo.makeCloseAccountInstruction({programId:j,tokenAccount:S,owner:y,payer:y,instructionsType:N}))}else w.find(e=>{var t;return null===(t=e.publicKey)||void 0===t?void 0:t.equals(S)})||A.push(s.RGo.makeCreateAssociatedTokenAccountInstruction({programId:j,mint:t.quote.mint,associatedAccount:S,owner:y,payer:y,instructionsType:N}));w.find(e=>{var t;return null===(t=e.publicKey)||void 0===t?void 0:t.equals(L)})||A.push(s.RGo.makeCreateAssociatedTokenAccountInstruction({programId:k,mint:t.base.mint,associatedAccount:L,owner:y,payer:y,instructionsType:N}));let T=await c.L.getAssociatedLedgerAccountAddress({programId:new l.nh(t.programId),owner:y,poolId:new l.nh(t.id)}),Z=await m.a.getAssociatedSnapshotAddress({programId:new l.nh(t.id),owner:y,seedId:new l.nh(t.seedId)});A.push(c.L.makeClaimInstruction({poolConfig:{id:new l.nh(t.id),programId:new l.nh(t.programId),authority:new l.nh(t.authority),baseVault:new l.nh(t.baseVault),quoteVault:new l.nh(t.quoteVault)},userKeys:{baseTokenAccount:L,quoteTokenAccount:S,ledgerAccount:T,snapshotAccount:Z,owner:y},side:r})),N.push("-1"),b.add((0,d.A)({rawNativeInstructions:A,rawNativeInstructionTypes:N,signer:I,wallet:y}),{...p,txHistoryInfo:{title:"AccelerRaytor Claim",description:"base"===r?"Claim ".concat((0,a.B)(t.userAllocation)," ").concat(null!==(g=t.base.symbol)&&void 0!==g?g:"--"):"Claim ".concat(t.quote&&t.ledger?(0,a.B)((0,o.hi)(null===(n=t.ledger)||void 0===n?void 0:n.quoteDeposited,(0,i.Bd)(1,null!==(h=null===(f=t.quote)||void 0===f?void 0:f.decimals)&&void 0!==h?h:0))):""," ").concat(null!==(v=t.quote.symbol)&&void 0!==v?v:"--")}})},{forceKeyPairs:f})}},43487:function(e,t,r){r.d(t,{Z:function(){return C}});var n=r(96662),i=r(53002),o=r(26427),a=r(4929),s=r(31166),l=r(62512),u=r(3363),d=r(12839),c=r(16938),m=r(59277),f=r(99171);async function p(){let e=m.ZP.getState().apiUrls.idoInfo,t=await (0,l.Z)(e,{afterJson:e=>{var t;return{success:null==e?void 0:e.success,data:null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.map(e=>(0,c.xh)(e,(e,t)=>"startTime"===t||"endTime"===t||"stakeTimeEnd"===t||"startWithdrawTime"===t?1e3*e:e))}}});if(!(null==t?void 0:t.success))return[];if(!d.pj&&!d.WJ)return t.data;{var r;let e=null!==(r=await (0,l.Z)("/ido-list.json",{afterJson:e=>null==e?void 0:e.map(e=>(0,c.xh)(e,(e,t)=>"startTime"===t||"endTime"===t||"stakeTimeEnd"===t||"startWithdrawTime"===t?1e3*e:e))}))&&void 0!==r?r:[];return e.concat(t.data)}}async function g(e){let{idoId:t}=e,r=m.ZP.getState().apiUrls.idoProjectInfo,n=await (0,l.Z)(r.replace("<id>",t));if(null==n?void 0:n.projectInfo)return n.projectInfo}async function h(e){let{publicKeyed:t,owner:r,connection:n,options:i}=e;return await f.L.getMultipleInfo({connection:n,poolsConfig:t,owner:(0,u.uI)(r),noNeedState:null==i?void 0:i.noIdoState,config:{batchRequest:!0}})}var v=r(72305),b=r(95793),y=r(62952),x=r(3396),w=r(81451),A=r(14209),I=r(51523),N=r(71375);function k(e){if(!e.ledger)return[];let t=Number(e.ledger.startNumber),r=Number(e.ledger.endNumber);return Array.from({length:r-t+1},(e,r)=>({no:t+r}))}function j(e,t){var r;let n=null===(r=t.state)||void 0===r?void 0:r.luckyNumbers,i=null==n?void 0:n.some(t=>{let{digits:r,number:n,endRange:i}=t;return Number(r)&&Number(e)<=Number(i)&&String(e).padStart(Number(r),"0").endsWith(String(n).padStart(Number(r),"0"))});return i}function L(e){return null==e?e:1e3*e}function S(e){var t,r,i,o,a,s;let{getChainDate:l}=n.ZP.getState(),u=Object.assign({...e},(0,c.dI)({maxWinLotteries:null===(t=e.state)||void 0===t?void 0:t.maxWinLotteries.toNumber(),startTime:L(null===(r=e.state)||void 0===r?void 0:r.startTime.toNumber()),endTime:L(null===(i=e.state)||void 0===i?void 0:i.endTime.toNumber()),startWithdrawTime:L(null===(o=e.state)||void 0===o?void 0:o.startWithdrawTime.toNumber()),raise:(null===(a=e.state)||void 0===a?void 0:a.baseSupply)?(0,N.Z)((0,I.hi)(e.state.baseSupply,(0,A.Bd)(1,e.baseDecimals))).toNumber():void 0})),d=(0,b.hF)(l(),u.startTime),m=(0,b.Sl)(l(),u.startTime)&&(0,b.hF)(l(),u.endTime),f=(0,b.Sl)(l(),u.endTime),p=(0,b.Sl)(l(),u.startWithdrawTime),g=k(u).map(e=>({...e,isWinning:j(e.no,u)})),h=function(e){var t;let r=null===(t=e.state)||void 0===t?void 0:t.isWinning.toNumber();return 0===r?[]:1===r?k(e).filter(t=>!j(t.no,e)):2===r?k(e).filter(t=>j(t.no,e)):3===r?k(e):void 0}(u),S=null===(s=u.snapshot)||void 0===s?void 0:s.maxLotteries,T=null==S?void 0:(0,w.$u)(S),Z=u.base&&(0,y.n)(u.base,u.raise,{alreadyDecimaled:!0}),R=u.base&&u.state&&(0,x.Z)(u.base,u.price,{alreadyDecimaled:!0}),E=u.quote&&u.state&&(0,y.n)(u.quote,u.state.perLotteryQuoteAmount),W=u.state&&u.state.raisedLotteries.toNumber(),P=u.state&&W&&(0,I.dC)((0,I.hi)(null==h?void 0:h.length,(0,I.KE)(u.state.maxWinLotteries,W)),Z),C=f&&u.ledger&&(0,w.eq)(0,u.ledger.quoteWithdrawn)&&u.quote&&(0,y.n)(u.quote,u.ledger.quoteDeposited)||void 0,q=u.state?new v.gGi(u.state.raisedLotteries,u.state.maxWinLotteries).toFixed():u.raisedLotteries&&u.maxWinLotteries?u.raisedLotteries/u.maxWinLotteries:void 0;return{...u,winningTicketsTailNumber:function(e){var t;if(!e.state)return;let r=null===(t=e.state)||void 0===t?void 0:t.isWinning.toNumber(),n=e.state.luckyNumbers.filter(e=>{let{digits:t}=e;return 0!==t.toNumber()}).map(t=>{let{number:r,digits:n,endRange:i}=t;return{no:String(r).padStart(Number(n),"0"),isPartial:e.state.raisedLotteries.toNumber()!==i.toNumber()}});return 1===r||2===r?{tickets:n,isWinning:r}:{tickets:[],isWinning:r}}(u),winningTickets:h,depositedTickets:g,userAllocation:P,depositedTicketCount:W,isUpcoming:d,isOpen:m,isClosed:f,canWithdrawBase:p,totalRaise:Z,coinPrice:R,ticketPrice:E,filled:q,claimableQuote:C,userEligibleTicketAmount:S,isEligible:T}}var T=r(98360),Z=r(91148),R=r(25647),E=r(11163),W=r(67294),P=r(9499);function C(){let e=(0,n.ZP)(e=>e.connection),t=(0,i.Z)(e=>e.owner),r=(0,i.Z)(e=>e.shadowKeypairs),l=(0,a.Z)(e=>e.idoRawInfos),d=(0,a.Z)(e=>e.currentIdoId),m=(0,a.Z)(e=>e.idoRefreshFactor),f=(0,s.ZP)(e=>e.tokens),{pathname:v}=(0,E.useRouter)();(0,n.ZP)(e=>e.getChainDate);let b=v.includes("/acceleraytor/detail"),y=e=>{let t=(0,R.LP)({mint:e.baseMint,decimals:e.baseDecimals,symbol:e.baseSymbol,icon:e.baseIcon}),r=(0,R.LP)({mint:e.quoteMint,decimals:e.quoteDecimals,symbol:e.quoteSymbol,icon:e.quoteIcon});return{base:t,quote:r}};(0,W.useEffect)(()=>{a.Z.setState({tempJoined:!1})},[t]),(0,P.f)(async()=>{let e=await p(),t=e.map(e=>{let{base:t,quote:r}=y(e);return S({...e,base:t,quote:r})}),r=(0,o.ZP)(t,e=>e.id);a.Z.setState(t=>({idoRawInfos:(0,o.ZP)(e,e=>e.id),idoHydratedInfos:{...t.idoHydratedInfos,...(0,c.xh)(r,(e,r)=>({...t.idoHydratedInfos[r],ledger:void 0,...e}))}}))},[f]),(0,P.f)(async()=>{if(!d)return;let e=await g({idoId:d});e&&a.Z.setState(t=>({idoProjectInfos:{...t.idoProjectInfos,[d]:e},idoHydratedInfos:{...t.idoHydratedInfos,[d]:{...t.idoHydratedInfos[d],...e}}}))},[d]),(0,P.f)(async()=>{if(!e)return;let r=(0,Z.Do)([null==m?void 0:m.refreshIdoId].flat()),n=Object.values(null!=l?l:{}).filter(e=>r.includes(e.id)),i=(0,u.vw)(n),o=await h({publicKeyed:i,connection:e,owner:t}),s=(0,c.xh)(o,(e,t)=>{let r=n.find(e=>{let{id:r}=e;return r===t});if(!r)return;let{base:i,quote:o}=y(r);return S({...r,...e,base:i,quote:o})});a.Z.setState(e=>({idoSDKInfos:o,idoHydratedInfos:{...e.idoHydratedInfos,...(0,c.xh)((0,c.Nh)(s),(t,r)=>({...e.idoHydratedInfos[r],ledger:void 0,...t}))}}))},[m,t]),(0,P.f)(async()=>{var r;if(!e)return;let n=Object.values(null!==(r=b&&d?(0,c.ei)(l,[d]):l)&&void 0!==r?r:{}),i=(0,u.vw)(n),o=await h({publicKeyed:i,connection:e,owner:t,options:{noIdoState:!0}}),s=(0,c.xh)(o,(e,t)=>{let r=n.find(e=>{let{id:r}=e;return r===t});if(!r)return;let{base:i,quote:o}=y(r);return S({...r,...e,base:i,quote:o})});a.Z.setState(e=>({idoSDKInfos:o,idoHydratedInfos:{...e.idoHydratedInfos,...(0,c.xh)((0,c.Nh)(s),(t,r)=>({...e.idoHydratedInfos[r],ledger:void 0,...t}))}})),setTimeout(async()=>{let r=await h({publicKeyed:i,connection:e,owner:t}),o=(0,c.xh)(r,(e,t)=>{let r=n.find(e=>{let{id:r}=e;return r===t});if(!r)return;let{base:i,quote:o}=y(r);return S({...r,...e,base:i,quote:o})});a.Z.setState(e=>({idoSDKInfos:r,idoHydratedInfos:{...e.idoHydratedInfos,...(0,c.xh)((0,c.Nh)(o),(t,r)=>({...e.idoHydratedInfos[r],ledger:void 0,...t}))}}))},1e3)},[l,d,e,t,b]),(0,P.f)(async()=>{if(!(null==r?void 0:r.length)||!e)return;let t=Object.values(null!=l?l:{}).slice(0,3),n=(0,u.vw)(t),i=await (0,T.ZP)(r,async r=>{let{publicKey:i,secretKey:o}=r,a=await h({publicKeyed:n,connection:e,owner:i}),s=(0,c.xh)(a,(e,r)=>{let n=t.find(e=>{let{id:t}=e;return t===r});if(!n)return;let{base:i,quote:o}=y(n);return S({...n,...e,base:i,quote:o})});return[(0,u.ZP)(i),s]}),o=Object.fromEntries(i);a.Z.setState({shadowIdoHydratedInfos:o})},[l,e,r])}},88393:function(e,t,r){r.d(t,{A:function(){return i}});var n=r(73944);function i(e){let{rawNativeInstructions:t,rawNativeInstructionTypes:r,signer:i,wallet:o}=e;if(t.length!==r.length)throw Error("inner tx type error");let a=[...new Set(t.map(e=>e.keys.filter(e=>e.isSigner).map(e=>e.pubkey)).flat())].filter(e=>!e.equals(null!=o?o:n.nh.default)),s=[...new Set(i.map(e=>e.publicKey))];if(a.length!==s.length)throw Error("inner tx signer error");return[{instructions:t,signers:i,instructionTypes:r}]}},68186:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(85893),i=r(16938),o=r(54592),a=r(60421),s=r(51800);function l(e){let{is:t,ColProps:r,RowProps:l,GridProps:u,...d}=e;return"Row"===t?(0,n.jsx)(s.Z,{...d,...l}):"Col"===t?(0,n.jsx)(o.Z,{...d,...r}):"Grid"===t?(0,n.jsx)(a.Z,{...d,...u}):"div"===t?(0,n.jsx)("div",{...(0,i.CE)(d,["domRef"]),ref:d.domRef}):(0,n.jsx)(n.Fragment,{children:d.children})}},88132:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(85893),i=r(91371),o=r(67294),a=r(66180),s=r(6994);function l(e){var t;let{haveMinHeight:r,wrapperClassName:l,children:u,domRef:d,size:c="lg",cssGradientRotate:m,...f}=e,p=(0,i.ZP)(e=>e.isMobile),g=(0,o.useMemo)(()=>{var e,t,r;return(null===(e=f.style)||void 0===e?void 0:e.borderRadius)?"calc(".concat(f.style.borderRadius," + ").concat(1.2,"px)"):(null===(t=f.className)||void 0===t?void 0:t.match(/mobile:rounded-2xl/g))&&p||(null===(r=f.className)||void 0===r?void 0:r.match(/(^|\s)rounded-2xl($|\s)/))?17.2:"md"===c?7.2:21.2},[f.className,c,null===(t=f.style)||void 0===t?void 0:t.borderRadius,p]);return(0,n.jsx)("div",{ref:d,className:l,style:{"--gradient-rotate":null!=m?"".concat(m,"deg"):void 0,minHeight:r?"300px":void 0,borderRadius:g,padding:1.2,backgroundImage:"linear-gradient(var(--gradient-rotate, 246deg), #da2eef 7.97%, #2b6aff 49.17%, #39d0d8 92.1%)"},children:(0,n.jsx)(s.Z,{...f,size:c,className:(0,a.m)("bg-cyberpunk-card-bg overflow-hidden",f.className),style:{height:"100%",width:"100%"},children:u})})}},89593:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(85893),i=r(67294),o=r(66180),a=r(51800),s=r(90547),l=r(96662);function u(e){let{singleValueMode:t,labelClassName:r="",play:u=!0,className:d,endTime:c,onEnd:m}=e,f=(0,l.ZP)(e=>e.getChainDate),[p,g]=(0,i.useState)(f()),h=new Date(c),v=(0,s.ZP)(h.getTime()-p.getTime()),b={days:t?"d":v.days<=1?"Day":"Days",hours:t?"h":v.hours<=1?"Hour":"Hours",minutes:t?"m":v.minutes<=1?"Minute":"Minutes",seconds:t?"s":v.seconds<=1?"Second":"Seconds"},y=v.full<0,x=v.days>0,w=v.hours>0,A=!x&&v.minutes>0,I=!w;return((0,i.useEffect)(()=>{if(!y){if(I){let e=globalThis.setInterval(()=>{u&&g(f())},1e3);return()=>clearInterval(e)}if(A){let e=globalThis.setInterval(()=>{u&&g(f())},6e4);return()=>clearInterval(e)}if(w){let e=globalThis.setInterval(()=>{u&&g(f())},36e5);return()=>clearInterval(e)}}},[u,y,w,A,I]),(0,i.useEffect)(()=>{0<=v.full&&v.full<50&&(null==m||m())},[v]),t)?v.days>=1?(0,n.jsxs)(a.Z,{className:(0,o.m)("items-baseline",d),children:[(0,n.jsxs)("div",{children:[">","24"]}),(0,n.jsx)("div",{className:(0,o.m)("text-xs",r),children:b.hours})]}):v.hours>=1||v.minutes>=1?(0,n.jsxs)(a.Z,{className:(0,o.m)("items-baseline gap-1",d),children:[v.hours>=1&&(0,n.jsxs)(a.Z,{children:[(0,n.jsx)("div",{children:24*v.days+v.hours}),(0,n.jsx)("div",{className:(0,o.m)("text-xs",r),children:b.hours})]}),(0,n.jsxs)(a.Z,{children:[(0,n.jsx)("div",{children:v.minutes}),(0,n.jsx)("div",{className:(0,o.m)("text-xs",r),children:b.minutes})]})]}):(0,n.jsxs)(a.Z,{className:(0,o.m)("items-baseline",d),children:[(0,n.jsx)("div",{children:86400*v.days+3600*v.hours+60*v.minutes+v.seconds}),(0,n.jsx)("div",{className:(0,o.m)("text-xs",r),children:b.seconds})]}):(0,n.jsxs)(a.Z,{className:(0,o.m)("space-x-1 ".concat(null!=d?d:"")),children:[x&&(0,n.jsxs)(a.Z,{className:"items-baseline",children:[(0,n.jsx)("div",{children:v.days}),(0,n.jsx)("div",{className:(0,o.m)("ml-1 text-xs",r),children:b.days})]}),w&&(0,n.jsxs)(a.Z,{className:"items-baseline",children:[(0,n.jsx)("div",{children:v.hours}),(0,n.jsx)("div",{className:(0,o.m)("ml-1 text-xs",r),children:b.hours})]}),A&&(0,n.jsxs)(a.Z,{className:"items-baseline",children:[(0,n.jsx)("div",{children:String(v.minutes).padStart(2,"0")}),(0,n.jsx)("div",{className:(0,o.m)("ml-1 text-xs",r),children:b.minutes})]}),I&&(0,n.jsxs)(a.Z,{className:"items-baseline",children:[(0,n.jsx)("div",{children:String(v.seconds).padStart(2,"0")}),(0,n.jsx)("div",{className:(0,o.m)("ml-1 text-xs",r),children:b.seconds})]})]})}},99645:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(85893);function i(e){let{className:t}=e;return(0,n.jsxs)("div",{className:"lds-roller ".concat(null!=t?t:""," mobile:scale-75"),children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})}},69651:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(85893),i=r(67294),o=r(66180),a=r(27993),s=r(96398),l=r(68186),u=r(51800),d=r(18074);function c(e){let{className:t,slotClassName:r,pillarClassName:c,borderThemeMode:m,labelClassName:f,value:p,labelFormat:g=e=>(0,d.Z)(e,{fixed:0})}=e,h=(0,i.useRef)(null),v=(0,i.useRef)(null);(0,s.L)(()=>{if(!v.current||!h.current)return;v.current.style.setProperty("--patch-delta","0px");let e=v.current.getBoundingClientRect(),t=h.current.getBoundingClientRect(),r=e.left-t.left,n=e.right-t.right;v.current.style.setProperty("--patch-delta",-(r<0?r:n>0?n:0)+"px")});let b=Math.min(Number(p),1),y=b<1/3?"#ABC4FF":b<2/3?"#39D0D8":"#DA2EEF";return m?(0,n.jsxs)(u.Z,{className:(0,o.m)("Progress relative border-1.5 rounded-full overflow-hidden w-full h-6  ".concat(null!=t?t:"")),style:{borderColor:y},children:[(0,n.jsx)("div",{className:(0,o.m)("Progress-inner-pillar absolute top-0 rounded-full opacity-20 h-full ".concat(null!=c?c:"")),style:{width:"".concat(100*b,"%"),backgroundColor:y}}),(0,n.jsx)("div",{ref:v,className:(0,o.m)("inline-block Progress-label ".concat(null!=f?f:"")),style:{marginInline:"auto",color:y},children:(0,a.u)(g,[p])})]}):(0,n.jsxs)(l.Z,{is:"div",domRef:h,className:(0,o.m)("Progress relative ".concat(null!=t?t:"")),children:[(0,n.jsx)("div",{className:(0,o.m)("Progress-whole-slot bg-gray-50 bg-opacity-20 rounded-full overflow-hidden w-full h-2 ".concat(null!=r?r:"")),children:(0,n.jsx)("div",{className:(0,o.m)("Progress-inner-pillar rounded-full  h-full ".concat(null!=c?c:"")),style:{width:"".concat(100*b,"%"),backgroundColor:y}})}),(0,n.jsx)("div",{ref:v,className:(0,o.m)("inline-block Progress-label ".concat(null!=f?f:"")),style:{marginLeft:"".concat(100*b,"%"),transform:"translate(calc(-50% + var(--patch-delta, 0px)))",color:y},children:(0,a.u)(g,[p])})]})}},29197:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(85893),i=r(18074),o=r(27993),a=r(66180),s=r(45826),l=r(91107);function u(e){let{className:t,style:r,vertical:i,itemClassName:s,itemStyle:u,values:d,currentValue:c=d[0],labels:m=d,onChange:f}=e;return d.filter(Boolean).length?(0,n.jsx)(l.E,{value:c,onChange:null!=f?f:()=>{},className:(0,a.m)("".concat(i?"flex-col":"flex"," ").concat(null!=t?t:"")),style:r,children:d.map((e,t,r)=>(0,n.jsx)(l.E.Option,{value:e,className:"cursor-pointer flex grow",children:a=>{let{checked:l}=a;return e&&(0,n.jsx)("div",{className:"grid grow ".concat(i?"":"place-items-center"," ").concat((0,o.u)(s,[l])),style:(0,o.u)(u,[l,t,r]),children:(0,o.u)(m[t],[l,t,r])})}},t))}):(0,n.jsx)(n.Fragment,{})}function d(e){let{size:t,$valuesLength:r,$transparentBg:l,urlSearchQueryKey:d,className:c,...m}=e;(0,s.i)({currentValue:m.currentValue,values:m.values,onChange:m.onChange,queryKey:d});let f=m.currentValue&&m.values.includes(m.currentValue),p=null!=r?r:m.values.length,g=(f?m.values.findIndex(e=>e===m.currentValue):0)+0;return(0,n.jsx)(u,{...m,currentValue:m.currentValue,className:(0,a.m)("rounded-full p-1",l?"bg-transparent":"bg-cyberpunk-card-bg",c),itemClassName:e=>(0,a.m)("sm"===t?"min-w-[82px] mobile:min-w-[64px] px-2 mobile:px-1.5 h-7 mobile:h-5 text-sm mobile:text-xs":"min-w-[96px] mobile:min-w-[76px] px-3 mobile:px-2 h-9 mobile:h-7 text-sm mobile:text-xs ","grid rounded-full place-items-center font-medium whitespace-nowrap ".concat(e?"text-white":"text-[#ABC4FF]"),(0,o.u)(m.itemClassName,[e])),itemStyle:e=>e?{background:"linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216))",backgroundSize:"".concat(p,"00% 100%"),backgroundPosition:(0,i.Z)(1/(p-1)*g)}:{}})}},94059:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(17097),i=r(1950);function o(e){if((0,i.zY)(e))return 0;if((0,n.hj)(e))return e;let t=Number(e.endsWith("%")?e.slice(0,e.length-1):e);return t/100}},18074:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(81451),i=r(51523),o=r(84207),a=r(72573),s=r(99881);function l(e,t){try{var r,l;let u=(0,o.Z)(null!=e?e:0),d=u.mul((null==t?void 0:t.alreadyPercented)?1:100).toFixed(null!==(r=null==t?void 0:t.fixed)&&void 0!==r?r:2);if((0,n.eq)(u,0))return"0%";if(!(null==t?void 0:t.exact)&&d===0..toFixed(null!==(l=null==t?void 0:t.fixed)&&void 0!==l?l:2))return(null==t?void 0:t.alwaysSigned)?"<+0.01%":"<0.01%";return(null==t?void 0:t.alwaysSigned)?"".concat((0,n.gt)(d,0)?"+":"-").concat((0,s.Z)((0,n.gt)(d,0)?(0,a.B)(d):(0,a.B)((0,i.dC)(d,-1))),"%"):"".concat((0,s.Z)(d,{fractionLength:null==t?void 0:t.fixed}),"%")}catch(e){return"0%"}}},91107:function(e,t,r){r.d(t,{E:function(){return Z}});var n,i,o=r(67294),a=r(12351),s=r(19946),l=r(32984),u=r(16723),d=r(61363),c=r(84575),m=r(95389),f=r(39516),p=r(15466),g=r(23784),h=r(46045),v=r(18689),b=r(73781),y=r(31147),x=r(64103),w=r(3855),A=r(94192),I=((n=I||{})[n.RegisterOption=0]="RegisterOption",n[n.UnregisterOption=1]="UnregisterOption",n);let N={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,c.z2)(r,e=>e.element.current)}},1(e,t){let r=e.options.slice(),n=e.options.findIndex(e=>e.id===t.id);return -1===n?e:(r.splice(n,1),{...e,options:r})}},k=(0,o.createContext)(null);k.displayName="RadioGroupDataContext";let j=(0,o.createContext)(null);function L(e,t){return(0,l.E)(t.type,N,e,t)}j.displayName="RadioGroupActionsContext";let S=(0,a.yV)(function(e,t){let r=(0,s.M)(),{id:n=`headlessui-radiogroup-${r}`,value:i,defaultValue:l,name:x,onChange:w,by:I=(e,t)=>e===t,disabled:N=!1,...S}=e,T=(0,b.z)("string"==typeof I?(e,t)=>(null==e?void 0:e[I])===(null==t?void 0:t[I]):I),[Z,R]=(0,o.useReducer)(L,{options:[]}),E=Z.options,[W,P]=(0,m.b)(),[C,q]=(0,f.f)(),$=(0,o.useRef)(null),D=(0,g.T)($,t),[B,M]=(0,y.q)(i,w,l),O=(0,o.useMemo)(()=>E.find(e=>!e.propsRef.current.disabled),[E]),F=(0,o.useMemo)(()=>E.some(e=>T(e.propsRef.current.value,B)),[E,B]),G=(0,b.z)(e=>{var t;if(N||T(e,B))return!1;let r=null==(t=E.find(t=>T(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==r||!r.disabled)&&(null==M||M(e),!0)});!function({container:e,accept:t,walk:r,enabled:n=!0}){let i=(0,o.useRef)(t),a=(0,o.useRef)(r);(0,o.useEffect)(()=>{i.current=t,a.current=r},[t,r]),(0,u.e)(()=>{if(!e||!n)return;let t=(0,p.r)(e);if(!t)return;let r=i.current,o=a.current,s=Object.assign(e=>r(e),{acceptNode:r}),l=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);for(;l.nextNode();)o(l.currentNode)},[e,n,i,a])}({container:$.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let V=(0,b.z)(e=>{let t=$.current;if(!t)return;let r=(0,p.r)(t),n=E.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case d.R.Enter:(0,v.g)(e.currentTarget);break;case d.R.ArrowLeft:case d.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,c.jA)(n,c.TO.Previous|c.TO.WrapAround)===c.fE.Success){let e=E.find(e=>e.element.current===(null==r?void 0:r.activeElement));e&&G(e.propsRef.current.value)}break;case d.R.ArrowRight:case d.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,c.jA)(n,c.TO.Next|c.TO.WrapAround)===c.fE.Success){let e=E.find(e=>e.element.current===(null==r?void 0:r.activeElement));e&&G(e.propsRef.current.value)}break;case d.R.Space:{e.preventDefault(),e.stopPropagation();let t=E.find(e=>e.element.current===(null==r?void 0:r.activeElement));t&&G(t.propsRef.current.value)}}}),H=(0,b.z)(e=>(R({type:0,...e}),()=>R({type:1,id:e.id}))),_=(0,o.useMemo)(()=>({value:B,firstOption:O,containsCheckedOption:F,disabled:N,compare:T,...Z}),[B,O,F,N,T,Z]),z=(0,o.useMemo)(()=>({registerOption:H,change:G}),[H,G]),U=(0,o.useMemo)(()=>({value:B}),[B]),X=(0,o.useRef)(null),K=(0,A.G)();return(0,o.useEffect)(()=>{X.current&&void 0!==l&&K.addEventListener(X.current,"reset",()=>{G(l)})},[X,G]),o.createElement(q,{name:"RadioGroup.Description"},o.createElement(P,{name:"RadioGroup.Label"},o.createElement(j.Provider,{value:z},o.createElement(k.Provider,{value:_},null!=x&&null!=B&&(0,v.t)({[x]:B}).map(([e,t],r)=>o.createElement(h._,{features:h.A.Hidden,ref:0===r?e=>{var t;X.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,a.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})})),(0,a.sY)({ourProps:{ref:D,id:n,role:"radiogroup","aria-labelledby":W,"aria-describedby":C,onKeyDown:V},theirProps:S,slot:U,defaultTag:"div",name:"RadioGroup"})))))});var T=((i=T||{})[i.Empty=1]="Empty",i[i.Active=2]="Active",i);let Z=Object.assign(S,{Option:(0,a.yV)(function(e,t){var r;let n=(0,s.M)(),{id:i=`headlessui-radiogroup-option-${n}`,value:l,disabled:d=!1,...c}=e,p=(0,o.useRef)(null),h=(0,g.T)(p,t),[v,y]=(0,m.b)(),[A,I]=(0,f.f)(),{addFlag:N,removeFlag:L,hasFlag:S}=function(e=0){let[t,r]=(0,o.useState)(e);return{addFlag:(0,o.useCallback)(e=>r(t=>t|e),[t]),hasFlag:(0,o.useCallback)(e=>!!(t&e),[t]),removeFlag:(0,o.useCallback)(e=>r(t=>t&~e),[r]),toggleFlag:(0,o.useCallback)(e=>r(t=>t^e),[r])}}(1),T=(0,w.E)({value:l,disabled:d}),Z=function e(t){let r=(0,o.useContext)(k);if(null===r){let r=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("RadioGroup.Option"),R=function e(t){let r=(0,o.useContext)(j);if(null===r){let r=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("RadioGroup.Option");(0,u.e)(()=>R.registerOption({id:i,element:p,propsRef:T}),[i,R,p,e]);let E=(0,b.z)(e=>{var t;if((0,x.P)(e.currentTarget))return e.preventDefault();R.change(l)&&(N(2),null==(t=p.current)||t.focus())}),W=(0,b.z)(e=>{if((0,x.P)(e.currentTarget))return e.preventDefault();N(2)}),P=(0,b.z)(()=>L(2)),C=(null==(r=Z.firstOption)?void 0:r.id)===i,q=Z.disabled||d,$=Z.compare(Z.value,l),D={ref:h,id:i,role:"radio","aria-checked":$?"true":"false","aria-labelledby":v,"aria-describedby":A,"aria-disabled":!!q||void 0,tabIndex:q?-1:$||!Z.containsCheckedOption&&C?0:-1,onClick:q?void 0:E,onFocus:q?void 0:W,onBlur:q?void 0:P},B=(0,o.useMemo)(()=>({checked:$,disabled:q,active:S(2)}),[$,q,S]);return o.createElement(I,{name:"RadioGroup.Description"},o.createElement(y,{name:"RadioGroup.Label"},(0,a.sY)({ourProps:D,theirProps:c,slot:B,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:m._,Description:f.d})}}]);