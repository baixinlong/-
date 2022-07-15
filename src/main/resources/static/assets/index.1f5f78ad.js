import{w as N,R as me,Y as A,d as ve,r as h,V as ge,c as E,o as be,H as ye,ad as Ce,ae as B,a as d,b as v,e as f,P as K,Q as j,h as w,p as c,n as i,i as _,j as P,f as q,q as z,k as M,t as I,B as O,g as he,J as X,T as Ee,m as Be,X as D,a5 as we,ao as ae,a7 as ee,al as Me}from"./index.c87ad23f.js";import{I as Se,r as ke,E as Te,a8 as Ie,u as Ae,H as Re,a7 as ne,K as se,W as $e,_ as Ve,B as Le,J as Pe}from"./base.d71712f3.js";import{E as ze}from"./index.e7b2081b.js";import{E as Oe,u as De,b as Ne,a as Ue}from"./index.b38ab156.js";import{a as le,o as re}from"./event.3ec63147.js";import{E as He}from"./focus-trap.ce567b0c.js";import{i as Fe}from"./validator.7457b7f8.js";import{u as Ke}from"./index.63298b40.js";const je='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',qe=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,oe=e=>Array.from(e.querySelectorAll(je)).filter(n=>Xe(n)&&qe(n)),Xe=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},Ge=(e,n)=>{let a;N(()=>e.value,l=>{var t,o;l?(a=document.activeElement,me(n)&&((o=(t=n.value).focus)==null||o.call(t))):a.focus()})},G="_trap-focus-children",b=[],te=e=>{if(b.length===0)return;const n=b[b.length-1][G];if(n.length>0&&e.code===Se.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const a=e.shiftKey,l=e.target===n[0],t=e.target===n[n.length-1];l&&a&&(e.preventDefault(),n[n.length-1].focus()),t&&!a&&(e.preventDefault(),n[0].focus())}},Je={beforeMount(e){e[G]=oe(e),b.push(e),b.length<=1&&le(document,"keydown",te)},updated(e){A(()=>{e[G]=oe(e)})},unmounted(){b.shift(),b.length===0&&re(document,"keydown",te)}},We=ve({name:"ElMessageBox",directives:{TrapFocus:Je},components:{ElButton:ke,ElFocusTrap:He,ElInput:ze,ElOverlay:Oe,ElIcon:Te,...Ie},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Fe},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{t:a}=Ke(),l=Ae("message-box"),t=h(!1),{nextZIndex:o}=Re(),s=ge({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:o()}),p=E(()=>{const r=s.type;return{[l.bm("icon",r)]:r&&ne[r]}}),U=se(),$=se(),H=$e(E(()=>e.buttonSize),{prop:!0,form:!0,formItem:!0}),F=E(()=>s.icon||ne[s.type]||""),u=E(()=>!!s.message),y=h(),J=h(),k=h(),V=h(),W=h(),ie=E(()=>s.confirmButtonClass);N(()=>s.inputValue,async r=>{await A(),e.boxType==="prompt"&&r!==null&&Q()},{immediate:!0}),N(()=>t.value,r=>{var m,C;r&&(e.boxType!=="prompt"&&(s.autofocus?k.value=(C=(m=W.value)==null?void 0:m.$el)!=null?C:y.value:k.value=y.value),s.zIndex=o()),e.boxType==="prompt"&&(r?A().then(()=>{var x;V.value&&V.value.$el&&(s.autofocus?k.value=(x=ce())!=null?x:y.value:k.value=y.value)}):(s.editorErrorMessage="",s.validateError=!1))});const ue=E(()=>e.draggable);De(y,J,ue),be(async()=>{await A(),e.closeOnHashChange&&le(window,"hashchange",T)}),ye(()=>{e.closeOnHashChange&&re(window,"hashchange",T)});function T(){!t.value||(t.value=!1,A(()=>{s.action&&n("action",s.action)}))}const Z=()=>{e.closeOnClickModal&&L(s.distinguishCancelAndClose?"close":"cancel")},de=Ue(Z),fe=r=>{if(s.inputType!=="textarea")return r.preventDefault(),L("confirm")},L=r=>{var m;e.boxType==="prompt"&&r==="confirm"&&!Q()||(s.action=r,s.beforeClose?(m=s.beforeClose)==null||m.call(s,r,s,T):T())},Q=()=>{if(e.boxType==="prompt"){const r=s.inputPattern;if(r&&!r.test(s.inputValue||""))return s.editorErrorMessage=s.inputErrorMessage||a("el.messagebox.error"),s.validateError=!0,!1;const m=s.inputValidator;if(typeof m=="function"){const C=m(s.inputValue);if(C===!1)return s.editorErrorMessage=s.inputErrorMessage||a("el.messagebox.error"),s.validateError=!0,!1;if(typeof C=="string")return s.editorErrorMessage=C,s.validateError=!0,!1}}return s.editorErrorMessage="",s.validateError=!1,!0},ce=()=>{const r=V.value.$refs;return r.input||r.textarea},Y=()=>{L("close")},pe=()=>{e.closeOnPressEscape&&Y()};return e.lockScroll&&Ne(t),Ge(t),{...Ce(s),ns:l,overlayEvent:de,visible:t,hasMessage:u,typeClass:p,contentId:U,inputId:$,btnSize:H,iconComponent:F,confirmButtonClasses:ie,rootRef:y,focusStartRef:k,headerRef:J,inputRef:V,confirmRef:W,doClose:T,handleClose:Y,onCloseRequested:pe,handleWrapperClick:Z,handleInputEnter:fe,handleAction:L,t:a}}}),Ze=["aria-label","aria-describedby"],Qe=["aria-label"],Ye=["id"];function xe(e,n,a,l,t,o){const s=B("el-icon"),p=B("close"),U=B("el-input"),$=B("el-button"),H=B("el-focus-trap"),F=B("el-overlay");return d(),v(Ee,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=u=>e.$emit("vanish")),persisted:""},{default:f(()=>[K(w(F,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:f(()=>[c("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:i(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...u)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...u)),onMousedown:n[9]||(n[9]=(...u)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...u)),onMouseup:n[10]||(n[10]=(...u)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...u))},[w(H,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:f(()=>[c("div",{ref:"rootRef",class:i([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:_(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=P(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(d(),q("div",{key:0,ref:"headerRef",class:i(e.ns.e("header"))},[c("div",{class:i(e.ns.e("title"))},[e.iconComponent&&e.center?(d(),v(s,{key:0,class:i([e.ns.e("status"),e.typeClass])},{default:f(()=>[(d(),v(z(e.iconComponent)))]),_:1},8,["class"])):M("v-if",!0),c("span",null,I(e.title),1)],2),e.showClose?(d(),q("button",{key:0,type:"button",class:i(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=O(P(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[w(s,{class:i(e.ns.e("close"))},{default:f(()=>[w(p)]),_:1},8,["class"])],42,Qe)):M("v-if",!0)],2)):M("v-if",!0),c("div",{id:e.contentId,class:i(e.ns.e("content"))},[c("div",{class:i(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(d(),v(s,{key:0,class:i([e.ns.e("status"),e.typeClass])},{default:f(()=>[(d(),v(z(e.iconComponent)))]),_:1},8,["class"])):M("v-if",!0),e.hasMessage?(d(),q("div",{key:1,class:i(e.ns.e("message"))},[he(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(d(),v(z(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(d(),v(z(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:f(()=>[X(I(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):M("v-if",!0)],2),K(c("div",{class:i(e.ns.e("input"))},[w(U,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=u=>e.inputValue=u),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:i({invalid:e.validateError}),onKeydown:O(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),c("div",{class:i(e.ns.e("errormsg")),style:_({visibility:e.editorErrorMessage?"visible":"hidden"})},I(e.editorErrorMessage),7)],2),[[j,e.showInput]])],10,Ye),c("div",{class:i(e.ns.e("btns"))},[e.showCancelButton?(d(),v($,{key:0,loading:e.cancelButtonLoading,class:i([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=u=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=O(P(u=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:f(()=>[X(I(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):M("v-if",!0),K(w($,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:i([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=u=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=O(P(u=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:f(()=>[X(I(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[j,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Ze)]),_:3},8,["z-index","overlay-class","mask"]),[[j,e.visible]])]),_:3})}var _e=Ve(We,[["render",xe],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const R=new Map,en=(e,n,a=null)=>{const l=Me(_e,e);return l.appContext=a,ae(l,n),document.body.appendChild(n.firstElementChild),l.component},nn=()=>document.createElement("div"),sn=(e,n)=>{const a=nn();e.onVanish=()=>{ae(null,a),R.delete(t)},e.onAction=o=>{const s=R.get(t);let p;e.showInput?p={value:t.inputValue,action:o}:p=o,e.callback?e.callback(p,l.proxy):o==="cancel"||o==="close"?e.distinguishCancelAndClose&&o!=="cancel"?s.reject("close"):s.reject("cancel"):s.resolve(p)};const l=en(e,a,n),t=l.proxy;for(const o in e)ee(e,o)&&!ee(t.$props,o)&&(t[o]=e[o]);return N(()=>t.message,(o,s)=>{D(o)?l.slots.default=()=>[o]:D(s)&&!D(o)&&delete l.slots.default},{immediate:!0}),t.visible=!0,t};function S(e,n=null){if(!Le)return Promise.reject();let a;return Be(e)||D(e)?e={message:e}:a=e.callback,new Promise((l,t)=>{const o=sn(e,n!=null?n:S._context);R.set(o,{options:e,callback:a,resolve:l,reject:t})})}const on=["alert","confirm","prompt"],tn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};on.forEach(e=>{S[e]=an(e)});function an(e){return(n,a,l,t)=>{let o;return we(a)?(l=a,o=""):Pe(a)?o="":o=a,S(Object.assign({title:o,message:n,type:"",...tn[e]},l,{boxType:e}),t)}}S.close=()=>{R.forEach((e,n)=>{n.doClose()}),R.clear()};S._context=null;const g=S;g.install=e=>{g._context=e._context,e.config.globalProperties.$msgbox=g,e.config.globalProperties.$messageBox=g,e.config.globalProperties.$alert=g.alert,e.config.globalProperties.$confirm=g.confirm,e.config.globalProperties.$prompt=g.prompt};const vn=g;export{vn as E};