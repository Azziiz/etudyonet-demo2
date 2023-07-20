function rS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function iS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ey={exports:{}},Gl={},Sy={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),sS=Symbol.for("react.portal"),oS=Symbol.for("react.fragment"),aS=Symbol.for("react.strict_mode"),lS=Symbol.for("react.profiler"),uS=Symbol.for("react.provider"),cS=Symbol.for("react.context"),hS=Symbol.for("react.forward_ref"),dS=Symbol.for("react.suspense"),fS=Symbol.for("react.memo"),pS=Symbol.for("react.lazy"),Rp=Symbol.iterator;function mS(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var _y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iy=Object.assign,Ty={};function Gi(t,e,n){this.props=t,this.context=e,this.refs=Ty,this.updater=n||_y}Gi.prototype.isReactComponent={};Gi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ky(){}ky.prototype=Gi.prototype;function dd(t,e,n){this.props=t,this.context=e,this.refs=Ty,this.updater=n||_y}var fd=dd.prototype=new ky;fd.constructor=dd;Iy(fd,Gi.prototype);fd.isPureReactComponent=!0;var Pp=Array.isArray,Cy=Object.prototype.hasOwnProperty,pd={current:null},xy={key:!0,ref:!0,__self:!0,__source:!0};function Ay(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cy.call(e,r)&&!xy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xo,type:t,key:s,ref:o,props:i,_owner:pd.current}}function gS(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function md(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function yS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dp=/\/+/g;function Hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yS(""+t.key):e.toString(36)}function Oa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case sS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hu(o,0):r,Pp(i)?(n="",t!=null&&(n=t.replace(Dp,"$&/")+"/"),Oa(i,e,n,"",function(u){return u})):i!=null&&(md(i)&&(i=gS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Hu(s,a);o+=Oa(s,e,n,l,i)}else if(l=mS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Hu(s,a++),o+=Oa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function la(t,e,n){if(t==null)return t;var r=[],i=0;return Oa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},La={transition:null},wS={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:La,ReactCurrentOwner:pd};Y.Children={map:la,forEach:function(t,e,n){la(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return la(t,function(){e++}),e},toArray:function(t){return la(t,function(e){return e})||[]},only:function(t){if(!md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Gi;Y.Fragment=oS;Y.Profiler=lS;Y.PureComponent=dd;Y.StrictMode=aS;Y.Suspense=dS;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Iy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cy.call(e,l)&&!xy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xo,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:cS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uS,_context:t},t.Consumer=t};Y.createElement=Ay;Y.createFactory=function(t){var e=Ay.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:hS,render:t}};Y.isValidElement=md;Y.lazy=function(t){return{$$typeof:pS,_payload:{_status:-1,_result:t},_init:vS}};Y.memo=function(t,e){return{$$typeof:fS,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=La.transition;La.transition={};try{t()}finally{La.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return pt.current.useCallback(t,e)};Y.useContext=function(t){return pt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return pt.current.useEffect(t,e)};Y.useId=function(){return pt.current.useId()};Y.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return pt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};Y.useRef=function(t){return pt.current.useRef(t)};Y.useState=function(t){return pt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return pt.current.useTransition()};Y.version="18.2.0";Sy.exports=Y;var w=Sy.exports;const vn=iS(w),ES=rS({__proto__:null,default:vn},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SS=w,_S=Symbol.for("react.element"),IS=Symbol.for("react.fragment"),TS=Object.prototype.hasOwnProperty,kS=SS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CS={key:!0,ref:!0,__self:!0,__source:!0};function Ny(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)TS.call(e,r)&&!CS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_S,type:t,key:s,ref:o,props:i,_owner:kS.current}}Gl.Fragment=IS;Gl.jsx=Ny;Gl.jsxs=Ny;Ey.exports=Gl;var c=Ey.exports,Uc={},Ry={exports:{}},Ot={},Py={exports:{}},Dy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,R){var U=N.length;N.push(R);e:for(;0<U;){var W=U-1>>>1,se=N[W];if(0<i(se,R))N[W]=R,N[U]=se,U=W;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var R=N[0],U=N.pop();if(U!==R){N[0]=U;e:for(var W=0,se=N.length,Rn=se>>>1;W<Rn;){var Tt=2*(W+1)-1,yr=N[Tt],Bt=Tt+1,Pn=N[Bt];if(0>i(yr,U))Bt<se&&0>i(Pn,yr)?(N[W]=Pn,N[Bt]=U,W=Bt):(N[W]=yr,N[Tt]=U,W=Tt);else if(Bt<se&&0>i(Pn,U))N[W]=Pn,N[Bt]=U,W=Bt;else break e}}return R}function i(N,R){var U=N.sortIndex-R.sortIndex;return U!==0?U:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,d=null,f=3,y=!1,v=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=N)r(u),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(u)}}function S(N){if(E=!1,m(N),!v)if(n(l)!==null)v=!0,Ce(k);else{var R=n(u);R!==null&&Me(S,R.startTime-N)}}function k(N,R){v=!1,E&&(E=!1,g(P),P=-1),y=!0;var U=f;try{for(m(R),d=n(l);d!==null&&(!(d.expirationTime>R)||N&&!K());){var W=d.callback;if(typeof W=="function"){d.callback=null,f=d.priorityLevel;var se=W(d.expirationTime<=R);R=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&r(l),m(R)}else r(l);d=n(l)}if(d!==null)var Rn=!0;else{var Tt=n(u);Tt!==null&&Me(S,Tt.startTime-R),Rn=!1}return Rn}finally{d=null,f=U,y=!1}}var I=!1,x=null,P=-1,M=5,D=-1;function K(){return!(t.unstable_now()-D<M)}function fe(){if(x!==null){var N=t.unstable_now();D=N;var R=!0;try{R=x(!0,N)}finally{R?te():(I=!1,x=null)}}else I=!1}var te;if(typeof p=="function")te=function(){p(fe)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ke=oe.port2;oe.port1.onmessage=fe,te=function(){ke.postMessage(null)}}else te=function(){_(fe,0)};function Ce(N){x=N,I||(I=!0,te())}function Me(N,R){P=_(function(){N(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,Ce(k))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var U=f;f=R;try{return N()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var U=f;f=N;try{return R()}finally{f=U}},t.unstable_scheduleCallback=function(N,R,U){var W=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?W+U:W):U=W,N){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=U+se,N={id:h++,callback:R,priorityLevel:N,startTime:U,expirationTime:se,sortIndex:-1},U>W?(N.sortIndex=U,e(u,N),n(l)===null&&N===n(u)&&(E?(g(P),P=-1):E=!0,Me(S,U-W))):(N.sortIndex=se,e(l,N),v||y||(v=!0,Ce(k))),N},t.unstable_shouldYield=K,t.unstable_wrapCallback=function(N){var R=f;return function(){var U=f;f=R;try{return N.apply(this,arguments)}finally{f=U}}}})(Dy);Py.exports=Dy;var xS=Py.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy=w,Pt=xS;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ly=new Set,Ws={};function Qr(t,e){Ri(t,e),Ri(t+"Capture",e)}function Ri(t,e){for(Ws[t]=e,t=0;t<e.length;t++)Ly.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=Object.prototype.hasOwnProperty,AS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Lp={};function NS(t){return $c.call(Lp,t)?!0:$c.call(Op,t)?!1:AS.test(t)?Lp[t]=!0:(Op[t]=!0,!1)}function RS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PS(t,e,n,r){if(e===null||typeof e>"u"||RS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var gd=/[\-:]([a-z])/g;function yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gd,yd);Xe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gd,yd);Xe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gd,yd);Xe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function vd(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PS(e,n,i,r)&&(n=null),r||i===null?NS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xn=Oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),si=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),wd=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),My=Symbol.for("react.provider"),jy=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),Sd=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),by=Symbol.for("react.offscreen"),Mp=Symbol.iterator;function ds(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,qu;function _s(t){if(qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qu=e&&e[1]||""}return`
`+qu+t}var Wu=!1;function Ku(t,e){if(!t||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_s(t):""}function DS(t){switch(t.tag){case 5:return _s(t.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return t=Ku(t.type,!1),t;case 11:return t=Ku(t.type.render,!1),t;case 1:return t=Ku(t.type,!0),t;default:return""}}function zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case si:return"Portal";case Fc:return"Profiler";case wd:return"StrictMode";case Bc:return"Suspense";case Vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jy:return(t.displayName||"Context")+".Consumer";case My:return(t._context.displayName||"Context")+".Provider";case Ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sd:return e=t.displayName||null,e!==null?e:zc(t.type)||"Memo";case Mn:e=t._payload,t=t._init;try{return zc(t(e))}catch{}}return null}function OS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zc(e);case 8:return e===wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LS(t){var e=Uy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ca(t){t._valueTracker||(t._valueTracker=LS(t))}function $y(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Uy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fy(t,e){e=e.checked,e!=null&&vd(t,"checked",e,!1)}function qc(t,e){Fy(t,e);var n=sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wc(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wc(t,e,n){(e!=="number"||Za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Is=Array.isArray;function Ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Is(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function By(t,e){var n=sr(e.value),r=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ha,zy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MS=["Webkit","ms","Moz","O"];Object.keys(Ps).forEach(function(t){MS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ps[e]=Ps[t]})});function Hy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ps.hasOwnProperty(t)&&Ps[t]?(""+e).trim():e+"px"}function qy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jS=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yc(t,e){if(e){if(jS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xc=null;function _d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jc=null,Si=null,_i=null;function Fp(t){if(t=Ro(t)){if(typeof Jc!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Zl(e),Jc(t.stateNode,t.type,e))}}function Wy(t){Si?_i?_i.push(t):_i=[t]:Si=t}function Ky(){if(Si){var t=Si,e=_i;if(_i=Si=null,Fp(t),e)for(t=0;t<e.length;t++)Fp(e[t])}}function Gy(t,e){return t(e)}function Yy(){}var Gu=!1;function Qy(t,e,n){if(Gu)return t(e,n);Gu=!0;try{return Gy(t,e,n)}finally{Gu=!1,(Si!==null||_i!==null)&&(Yy(),Ky())}}function Gs(t,e){var n=t.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Zc=!1;if(Sn)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{Zc=!1}function bS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Ds=!1,el=null,tl=!1,eh=null,US={onError:function(t){Ds=!0,el=t}};function $S(t,e,n,r,i,s,o,a,l){Ds=!1,el=null,bS.apply(US,arguments)}function FS(t,e,n,r,i,s,o,a,l){if($S.apply(this,arguments),Ds){if(Ds){var u=el;Ds=!1,el=null}else throw Error(C(198));tl||(tl=!0,eh=u)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(Xr(t)!==t)throw Error(C(188))}function BS(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bp(i),t;if(s===r)return Bp(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Jy(t){return t=BS(t),t!==null?Zy(t):null}function Zy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zy(t);if(e!==null)return e;t=t.sibling}return null}var ev=Pt.unstable_scheduleCallback,Vp=Pt.unstable_cancelCallback,VS=Pt.unstable_shouldYield,zS=Pt.unstable_requestPaint,_e=Pt.unstable_now,HS=Pt.unstable_getCurrentPriorityLevel,Id=Pt.unstable_ImmediatePriority,tv=Pt.unstable_UserBlockingPriority,nl=Pt.unstable_NormalPriority,qS=Pt.unstable_LowPriority,nv=Pt.unstable_IdlePriority,Yl=null,rn=null;function WS(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:YS,KS=Math.log,GS=Math.LN2;function YS(t){return t>>>=0,t===0?32:31-(KS(t)/GS|0)|0}var da=64,fa=4194304;function Ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ts(a):(s&=o,s!==0&&(r=Ts(s)))}else o=n&~i,o!==0?r=Ts(o):s!==0&&(r=Ts(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),i=1<<n,r|=t[n],e&=~i;return r}function QS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=QS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rv(){var t=da;return da<<=1,!(da&4194240)&&(da=64),t}function Yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function JS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sv,kd,ov,av,lv,nh=!1,pa=[],Kn=null,Gn=null,Yn=null,Ys=new Map,Qs=new Map,bn=[],ZS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(e.pointerId)}}function ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ro(e),e!==null&&kd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function e_(t,e,n,r,i){switch(e){case"focusin":return Kn=ps(Kn,t,e,n,r,i),!0;case"dragenter":return Gn=ps(Gn,t,e,n,r,i),!0;case"mouseover":return Yn=ps(Yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ys.set(s,ps(Ys.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qs.set(s,ps(Qs.get(s)||null,t,e,n,r,i)),!0}return!1}function uv(t){var e=Sr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=Xy(n),e!==null){t.blockedOn=e,lv(t.priority,function(){ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xc=r,n.target.dispatchEvent(r),Xc=null}else return e=Ro(n),e!==null&&kd(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){Ma(t)&&n.delete(e)}function t_(){nh=!1,Kn!==null&&Ma(Kn)&&(Kn=null),Gn!==null&&Ma(Gn)&&(Gn=null),Yn!==null&&Ma(Yn)&&(Yn=null),Ys.forEach(Hp),Qs.forEach(Hp)}function ms(t,e){t.blockedOn===e&&(t.blockedOn=null,nh||(nh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,t_)))}function Xs(t){function e(i){return ms(i,t)}if(0<pa.length){ms(pa[0],t);for(var n=1;n<pa.length;n++){var r=pa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kn!==null&&ms(Kn,t),Gn!==null&&ms(Gn,t),Yn!==null&&ms(Yn,t),Ys.forEach(e),Qs.forEach(e),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)uv(n),n.blockedOn===null&&bn.shift()}var Ii=xn.ReactCurrentBatchConfig,il=!0;function n_(t,e,n,r){var i=re,s=Ii.transition;Ii.transition=null;try{re=1,Cd(t,e,n,r)}finally{re=i,Ii.transition=s}}function r_(t,e,n,r){var i=re,s=Ii.transition;Ii.transition=null;try{re=4,Cd(t,e,n,r)}finally{re=i,Ii.transition=s}}function Cd(t,e,n,r){if(il){var i=rh(t,e,n,r);if(i===null)sc(t,e,r,sl,n),zp(t,r);else if(e_(i,t,e,n,r))r.stopPropagation();else if(zp(t,r),e&4&&-1<ZS.indexOf(t)){for(;i!==null;){var s=Ro(i);if(s!==null&&sv(s),s=rh(t,e,n,r),s===null&&sc(t,e,r,sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sc(t,e,r,null,n)}}var sl=null;function rh(t,e,n,r){if(sl=null,t=_d(r),t=Sr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function cv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HS()){case Id:return 1;case tv:return 4;case nl:case qS:return 16;case nv:return 536870912;default:return 16}default:return 16}}var Hn=null,xd=null,ja=null;function hv(){if(ja)return ja;var t,e=xd,n=e.length,r,i="value"in Hn?Hn.value:Hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ja=i.slice(t,1<r?1-r:void 0)}function ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ma(){return!0}function qp(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ma:qp,this.isPropagationStopped=qp,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),e}var Yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ad=Lt(Yi),No=Ee({},Yi,{view:0,detail:0}),i_=Lt(No),Qu,Xu,gs,Ql=Ee({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gs&&(gs&&t.type==="mousemove"?(Qu=t.screenX-gs.screenX,Xu=t.screenY-gs.screenY):Xu=Qu=0,gs=t),Qu)},movementY:function(t){return"movementY"in t?t.movementY:Xu}}),Wp=Lt(Ql),s_=Ee({},Ql,{dataTransfer:0}),o_=Lt(s_),a_=Ee({},No,{relatedTarget:0}),Ju=Lt(a_),l_=Ee({},Yi,{animationName:0,elapsedTime:0,pseudoElement:0}),u_=Lt(l_),c_=Ee({},Yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h_=Lt(c_),d_=Ee({},Yi,{data:0}),Kp=Lt(d_),f_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=m_[t])?!!e[t]:!1}function Nd(){return g_}var y_=Ee({},No,{key:function(t){if(t.key){var e=f_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nd,charCode:function(t){return t.type==="keypress"?ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v_=Lt(y_),w_=Ee({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=Lt(w_),E_=Ee({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nd}),S_=Lt(E_),__=Ee({},Yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),I_=Lt(__),T_=Ee({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k_=Lt(T_),C_=[9,13,27,32],Rd=Sn&&"CompositionEvent"in window,Os=null;Sn&&"documentMode"in document&&(Os=document.documentMode);var x_=Sn&&"TextEvent"in window&&!Os,dv=Sn&&(!Rd||Os&&8<Os&&11>=Os),Yp=String.fromCharCode(32),Qp=!1;function fv(t,e){switch(t){case"keyup":return C_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function A_(t,e){switch(t){case"compositionend":return pv(e);case"keypress":return e.which!==32?null:(Qp=!0,Yp);case"textInput":return t=e.data,t===Yp&&Qp?null:t;default:return null}}function N_(t,e){if(ai)return t==="compositionend"||!Rd&&fv(t,e)?(t=hv(),ja=xd=Hn=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dv&&e.locale!=="ko"?null:e.data;default:return null}}var R_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!R_[t.type]:e==="textarea"}function mv(t,e,n,r){Wy(r),e=ol(e,"onChange"),0<e.length&&(n=new Ad("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ls=null,Js=null;function P_(t){Cv(t,0)}function Xl(t){var e=ci(t);if($y(e))return t}function D_(t,e){if(t==="change")return e}var gv=!1;if(Sn){var Zu;if(Sn){var ec="oninput"in document;if(!ec){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),ec=typeof Jp.oninput=="function"}Zu=ec}else Zu=!1;gv=Zu&&(!document.documentMode||9<document.documentMode)}function Zp(){Ls&&(Ls.detachEvent("onpropertychange",yv),Js=Ls=null)}function yv(t){if(t.propertyName==="value"&&Xl(Js)){var e=[];mv(e,Js,t,_d(t)),Qy(P_,e)}}function O_(t,e,n){t==="focusin"?(Zp(),Ls=e,Js=n,Ls.attachEvent("onpropertychange",yv)):t==="focusout"&&Zp()}function L_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Js)}function M_(t,e){if(t==="click")return Xl(e)}function j_(t,e){if(t==="input"||t==="change")return Xl(e)}function b_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:b_;function Zs(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$c.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function vv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wv(){for(var t=window,e=Za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Za(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function U_(t){var e=wv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vv(n.ownerDocument.documentElement,n)){if(r!==null&&Pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=tm(n,s);var o=tm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $_=Sn&&"documentMode"in document&&11>=document.documentMode,li=null,ih=null,Ms=null,sh=!1;function nm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sh||li==null||li!==Za(r)||(r=li,"selectionStart"in r&&Pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ms&&Zs(Ms,r)||(Ms=r,r=ol(ih,"onSelect"),0<r.length&&(e=new Ad("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=li)))}function ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},tc={},Ev={};Sn&&(Ev=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function Jl(t){if(tc[t])return tc[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ev)return tc[t]=e[n];return t}var Sv=Jl("animationend"),_v=Jl("animationiteration"),Iv=Jl("animationstart"),Tv=Jl("transitionend"),kv=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){kv.set(t,e),Qr(e,[t])}for(var nc=0;nc<rm.length;nc++){var rc=rm[nc],F_=rc.toLowerCase(),B_=rc[0].toUpperCase()+rc.slice(1);hr(F_,"on"+B_)}hr(Sv,"onAnimationEnd");hr(_v,"onAnimationIteration");hr(Iv,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(Tv,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function im(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,FS(r,e,void 0,t),t.currentTarget=null}function Cv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;im(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;im(i,a,u),s=l}}}if(tl)throw t=eh,tl=!1,eh=null,t}function ue(t,e){var n=e[ch];n===void 0&&(n=e[ch]=new Set);var r=t+"__bubble";n.has(r)||(xv(e,t,2,!1),n.add(r))}function ic(t,e,n){var r=0;e&&(r|=4),xv(n,t,r,e)}var ya="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[ya]){t[ya]=!0,Ly.forEach(function(n){n!=="selectionchange"&&(V_.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ya]||(e[ya]=!0,ic("selectionchange",!1,e))}}function xv(t,e,n,r){switch(cv(e)){case 1:var i=n_;break;case 4:i=r_;break;default:i=Cd}n=i.bind(null,e,n,t),i=void 0,!Zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Qy(function(){var u=s,h=_d(n),d=[];e:{var f=kv.get(t);if(f!==void 0){var y=Ad,v=t;switch(t){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":y=v_;break;case"focusin":v="focus",y=Ju;break;case"focusout":v="blur",y=Ju;break;case"beforeblur":case"afterblur":y=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=o_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=S_;break;case Sv:case _v:case Iv:y=u_;break;case Tv:y=I_;break;case"scroll":y=i_;break;case"wheel":y=k_;break;case"copy":case"cut":case"paste":y=h_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Gp}var E=(e&4)!==0,_=!E&&t==="scroll",g=E?f!==null?f+"Capture":null:f;E=[];for(var p=u,m;p!==null;){m=p;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,g!==null&&(S=Gs(p,g),S!=null&&E.push(to(p,S,m)))),_)break;p=p.return}0<E.length&&(f=new y(f,v,null,n,h),d.push({event:f,listeners:E}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==Xc&&(v=n.relatedTarget||n.fromElement)&&(Sr(v)||v[_n]))break e;if((y||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Sr(v):null,v!==null&&(_=Xr(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(E=Wp,S="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=Gp,S="onPointerLeave",g="onPointerEnter",p="pointer"),_=y==null?f:ci(y),m=v==null?f:ci(v),f=new E(S,p+"leave",y,n,h),f.target=_,f.relatedTarget=m,S=null,Sr(h)===u&&(E=new E(g,p+"enter",v,n,h),E.target=m,E.relatedTarget=_,S=E),_=S,y&&v)t:{for(E=y,g=v,p=0,m=E;m;m=ni(m))p++;for(m=0,S=g;S;S=ni(S))m++;for(;0<p-m;)E=ni(E),p--;for(;0<m-p;)g=ni(g),m--;for(;p--;){if(E===g||g!==null&&E===g.alternate)break t;E=ni(E),g=ni(g)}E=null}else E=null;y!==null&&sm(d,f,y,E,!1),v!==null&&_!==null&&sm(d,_,v,E,!0)}}e:{if(f=u?ci(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var k=D_;else if(Xp(f))if(gv)k=j_;else{k=L_;var I=O_}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=M_);if(k&&(k=k(t,u))){mv(d,k,n,h);break e}I&&I(t,f,u),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&Wc(f,"number",f.value)}switch(I=u?ci(u):window,t){case"focusin":(Xp(I)||I.contentEditable==="true")&&(li=I,ih=u,Ms=null);break;case"focusout":Ms=ih=li=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,nm(d,n,h);break;case"selectionchange":if($_)break;case"keydown":case"keyup":nm(d,n,h)}var x;if(Rd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ai?fv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(dv&&n.locale!=="ko"&&(ai||P!=="onCompositionStart"?P==="onCompositionEnd"&&ai&&(x=hv()):(Hn=h,xd="value"in Hn?Hn.value:Hn.textContent,ai=!0)),I=ol(u,P),0<I.length&&(P=new Kp(P,t,null,n,h),d.push({event:P,listeners:I}),x?P.data=x:(x=pv(n),x!==null&&(P.data=x)))),(x=x_?A_(t,n):N_(t,n))&&(u=ol(u,"onBeforeInput"),0<u.length&&(h=new Kp("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=x))}Cv(d,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gs(t,n),s!=null&&r.unshift(to(t,s,i)),s=Gs(t,e),s!=null&&r.push(to(t,s,i))),t=t.return}return r}function ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Gs(n,s),l!=null&&o.unshift(to(n,l,a))):i||(l=Gs(n,s),l!=null&&o.push(to(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var z_=/\r\n?/g,H_=/\u0000|\uFFFD/g;function om(t){return(typeof t=="string"?t:""+t).replace(z_,`
`).replace(H_,"")}function va(t,e,n){if(e=om(e),om(t)!==e&&n)throw Error(C(425))}function al(){}var oh=null,ah=null;function lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uh=typeof setTimeout=="function"?setTimeout:void 0,q_=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,W_=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(K_)}:uh;function K_(t){setTimeout(function(){throw t})}function oc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xs(e)}function Qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),tn="__reactFiber$"+Qi,no="__reactProps$"+Qi,_n="__reactContainer$"+Qi,ch="__reactEvents$"+Qi,G_="__reactListeners$"+Qi,Y_="__reactHandles$"+Qi;function Sr(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lm(t);t!==null;){if(n=t[tn])return n;t=lm(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[tn]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Zl(t){return t[no]||null}var hh=[],hi=-1;function dr(t){return{current:t}}function he(t){0>hi||(t.current=hh[hi],hh[hi]=null,hi--)}function ae(t,e){hi++,hh[hi]=t.current,t.current=e}var or={},ot=dr(or),Et=dr(!1),Or=or;function Pi(t,e){var n=t.type.contextTypes;if(!n)return or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function ll(){he(Et),he(ot)}function um(t,e,n){if(ot.current!==or)throw Error(C(168));ae(ot,e),ae(Et,n)}function Av(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,OS(t)||"Unknown",i));return Ee({},n,r)}function ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Or=ot.current,ae(ot,t),ae(Et,Et.current),!0}function cm(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Av(t,e,Or),r.__reactInternalMemoizedMergedChildContext=t,he(Et),he(ot),ae(ot,t)):he(Et),ae(Et,n)}var dn=null,eu=!1,ac=!1;function Nv(t){dn===null?dn=[t]:dn.push(t)}function Q_(t){eu=!0,Nv(t)}function fr(){if(!ac&&dn!==null){ac=!0;var t=0,e=re;try{var n=dn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,eu=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),ev(Id,fr),i}finally{re=e,ac=!1}}return null}var di=[],fi=0,cl=null,hl=0,Mt=[],jt=0,Lr=null,fn=1,pn="";function vr(t,e){di[fi++]=hl,di[fi++]=cl,cl=t,hl=e}function Rv(t,e,n){Mt[jt++]=fn,Mt[jt++]=pn,Mt[jt++]=Lr,Lr=t;var r=fn;t=pn;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var s=32-Wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Wt(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function Dd(t){t.return!==null&&(vr(t,1),Rv(t,1,0))}function Od(t){for(;t===cl;)cl=di[--fi],di[fi]=null,hl=di[--fi],di[fi]=null;for(;t===Lr;)Lr=Mt[--jt],Mt[jt]=null,pn=Mt[--jt],Mt[jt]=null,fn=Mt[--jt],Mt[jt]=null}var Rt=null,At=null,pe=!1,qt=null;function Pv(t,e){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,At=Qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,At=null,!0):!1;default:return!1}}function dh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fh(t){if(pe){var e=At;if(e){var n=e;if(!hm(t,e)){if(dh(t))throw Error(C(418));e=Qn(n.nextSibling);var r=Rt;e&&hm(t,e)?Pv(r,n):(t.flags=t.flags&-4097|2,pe=!1,Rt=t)}}else{if(dh(t))throw Error(C(418));t.flags=t.flags&-4097|2,pe=!1,Rt=t}}}function dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function wa(t){if(t!==Rt)return!1;if(!pe)return dm(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lh(t.type,t.memoizedProps)),e&&(e=At)){if(dh(t))throw Dv(),Error(C(418));for(;e;)Pv(t,e),e=Qn(e.nextSibling)}if(dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=Qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Rt?Qn(t.stateNode.nextSibling):null;return!0}function Dv(){for(var t=At;t;)t=Qn(t.nextSibling)}function Di(){At=Rt=null,pe=!1}function Ld(t){qt===null?qt=[t]:qt.push(t)}var X_=xn.ReactCurrentBatchConfig;function zt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var dl=dr(null),fl=null,pi=null,Md=null;function jd(){Md=pi=fl=null}function bd(t){var e=dl.current;he(dl),t._currentValue=e}function ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ti(t,e){fl=t,Md=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Md!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(fl===null)throw Error(C(308));pi=t,fl.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var _r=null;function Ud(t){_r===null?_r=[t]:_r.push(t)}function Ov(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ud(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jn=!1;function $d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,Ud(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function Ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}function fm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,r){var i=t.updateQueue;jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,E=a;switch(f=e,y=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=Ee({},d,f);break e;case 2:jn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=y,l=d):h=h.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=d}}function pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Mv=new Oy.Component().refs;function mh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Zn(t),s=wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(Kt(e,t,i,r),Ua(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Zn(t),s=wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(Kt(e,t,i,r),Ua(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=Zn(t),i=wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xn(t,i,r),e!==null&&(Kt(e,t,r,n),Ua(e,t,r))}};function mm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zs(n,r)||!Zs(i,s):!0}function jv(t,e,n){var r=!1,i=or,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=St(e)?Or:ot.current,r=e.contextTypes,s=(r=r!=null)?Pi(t,i):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function gh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Mv,$d(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=St(e)?Or:ot.current,i.context=Pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tu.enqueueReplaceState(i,i.state,null),pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Mv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Ea(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ym(t){var e=t._init;return e(t._payload)}function bv(t){function e(g,p){if(t){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=er(g,p),g.index=0,g.sibling=null,g}function s(g,p,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,m,S){return p===null||p.tag!==6?(p=pc(m,g.mode,S),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,S){var k=m.type;return k===oi?h(g,p,m.props.children,S,m.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Mn&&ym(k)===p.type)?(S=i(p,m.props),S.ref=ys(g,p,m),S.return=g,S):(S=Ha(m.type,m.key,m.props,null,g.mode,S),S.ref=ys(g,p,m),S.return=g,S)}function u(g,p,m,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=mc(m,g.mode,S),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function h(g,p,m,S,k){return p===null||p.tag!==7?(p=xr(m,g.mode,S,k),p.return=g,p):(p=i(p,m),p.return=g,p)}function d(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=pc(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ua:return m=Ha(p.type,p.key,p.props,null,g.mode,m),m.ref=ys(g,null,p),m.return=g,m;case si:return p=mc(p,g.mode,m),p.return=g,p;case Mn:var S=p._init;return d(g,S(p._payload),m)}if(Is(p)||ds(p))return p=xr(p,g.mode,m,null),p.return=g,p;Ea(g,p)}return null}function f(g,p,m,S){var k=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(g,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ua:return m.key===k?l(g,p,m,S):null;case si:return m.key===k?u(g,p,m,S):null;case Mn:return k=m._init,f(g,p,k(m._payload),S)}if(Is(m)||ds(m))return k!==null?null:h(g,p,m,S,null);Ea(g,m)}return null}function y(g,p,m,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(m)||null,a(p,g,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ua:return g=g.get(S.key===null?m:S.key)||null,l(p,g,S,k);case si:return g=g.get(S.key===null?m:S.key)||null,u(p,g,S,k);case Mn:var I=S._init;return y(g,p,m,I(S._payload),k)}if(Is(S)||ds(S))return g=g.get(m)||null,h(p,g,S,k,null);Ea(p,S)}return null}function v(g,p,m,S){for(var k=null,I=null,x=p,P=p=0,M=null;x!==null&&P<m.length;P++){x.index>P?(M=x,x=null):M=x.sibling;var D=f(g,x,m[P],S);if(D===null){x===null&&(x=M);break}t&&x&&D.alternate===null&&e(g,x),p=s(D,p,P),I===null?k=D:I.sibling=D,I=D,x=M}if(P===m.length)return n(g,x),pe&&vr(g,P),k;if(x===null){for(;P<m.length;P++)x=d(g,m[P],S),x!==null&&(p=s(x,p,P),I===null?k=x:I.sibling=x,I=x);return pe&&vr(g,P),k}for(x=r(g,x);P<m.length;P++)M=y(x,g,P,m[P],S),M!==null&&(t&&M.alternate!==null&&x.delete(M.key===null?P:M.key),p=s(M,p,P),I===null?k=M:I.sibling=M,I=M);return t&&x.forEach(function(K){return e(g,K)}),pe&&vr(g,P),k}function E(g,p,m,S){var k=ds(m);if(typeof k!="function")throw Error(C(150));if(m=k.call(m),m==null)throw Error(C(151));for(var I=k=null,x=p,P=p=0,M=null,D=m.next();x!==null&&!D.done;P++,D=m.next()){x.index>P?(M=x,x=null):M=x.sibling;var K=f(g,x,D.value,S);if(K===null){x===null&&(x=M);break}t&&x&&K.alternate===null&&e(g,x),p=s(K,p,P),I===null?k=K:I.sibling=K,I=K,x=M}if(D.done)return n(g,x),pe&&vr(g,P),k;if(x===null){for(;!D.done;P++,D=m.next())D=d(g,D.value,S),D!==null&&(p=s(D,p,P),I===null?k=D:I.sibling=D,I=D);return pe&&vr(g,P),k}for(x=r(g,x);!D.done;P++,D=m.next())D=y(x,g,P,D.value,S),D!==null&&(t&&D.alternate!==null&&x.delete(D.key===null?P:D.key),p=s(D,p,P),I===null?k=D:I.sibling=D,I=D);return t&&x.forEach(function(fe){return e(g,fe)}),pe&&vr(g,P),k}function _(g,p,m,S){if(typeof m=="object"&&m!==null&&m.type===oi&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ua:e:{for(var k=m.key,I=p;I!==null;){if(I.key===k){if(k=m.type,k===oi){if(I.tag===7){n(g,I.sibling),p=i(I,m.props.children),p.return=g,g=p;break e}}else if(I.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Mn&&ym(k)===I.type){n(g,I.sibling),p=i(I,m.props),p.ref=ys(g,I,m),p.return=g,g=p;break e}n(g,I);break}else e(g,I);I=I.sibling}m.type===oi?(p=xr(m.props.children,g.mode,S,m.key),p.return=g,g=p):(S=Ha(m.type,m.key,m.props,null,g.mode,S),S.ref=ys(g,p,m),S.return=g,g=S)}return o(g);case si:e:{for(I=m.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=mc(m,g.mode,S),p.return=g,g=p}return o(g);case Mn:return I=m._init,_(g,p,I(m._payload),S)}if(Is(m))return v(g,p,m,S);if(ds(m))return E(g,p,m,S);Ea(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=pc(m,g.mode,S),p.return=g,g=p),o(g)):n(g,p)}return _}var Oi=bv(!0),Uv=bv(!1),Po={},sn=dr(Po),ro=dr(Po),io=dr(Po);function Ir(t){if(t===Po)throw Error(C(174));return t}function Fd(t,e){switch(ae(io,e),ae(ro,t),ae(sn,Po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gc(e,t)}he(sn),ae(sn,e)}function Li(){he(sn),he(ro),he(io)}function $v(t){Ir(io.current);var e=Ir(sn.current),n=Gc(e,t.type);e!==n&&(ae(ro,t),ae(sn,n))}function Bd(t){ro.current===t&&(he(sn),he(ro))}var ye=dr(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lc=[];function Vd(){for(var t=0;t<lc.length;t++)lc[t]._workInProgressVersionPrimary=null;lc.length=0}var $a=xn.ReactCurrentDispatcher,uc=xn.ReactCurrentBatchConfig,Mr=0,we=null,je=null,$e=null,gl=!1,js=!1,so=0,J_=0;function et(){throw Error(C(321))}function zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Hd(t,e,n,r,i,s){if(Mr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?nI:rI,t=n(r,i),js){s=0;do{if(js=!1,so=0,25<=s)throw Error(C(301));s+=1,$e=je=null,e.updateQueue=null,$a.current=iI,t=n(r,i)}while(js)}if($a.current=yl,e=je!==null&&je.next!==null,Mr=0,$e=je=we=null,gl=!1,e)throw Error(C(300));return t}function qd(){var t=so!==0;return so=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?we.memoizedState=$e=t:$e=$e.next=t,$e}function Ft(){if(je===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=$e===null?we.memoizedState:$e.next;if(e!==null)$e=e,je=t;else{if(t===null)throw Error(C(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},$e===null?we.memoizedState=$e=t:$e=$e.next=t}return $e}function oo(t,e){return typeof e=="function"?e(t):e}function cc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Mr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,we.lanes|=h,jr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Gt(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Fv(){}function Bv(t,e){var n=we,r=Ft(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,wt=!0),r=r.queue,Wd(Hv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,ao(9,zv.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(C(349));Mr&30||Vv(n,e,i)}return i}function Vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zv(t,e,n,r){e.value=n,e.getSnapshot=r,qv(e)&&Wv(t)}function Hv(t,e,n){return n(function(){qv(e)&&Wv(t)})}function qv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function Wv(t){var e=In(t,1);e!==null&&Kt(e,t,1,-1)}function vm(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},e.queue=t,t=t.dispatch=tI.bind(null,we,t),[e.memoizedState,t]}function ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Kv(){return Ft().memoizedState}function Fa(t,e,n,r){var i=en();we.flags|=t,i.memoizedState=ao(1|e,n,void 0,r===void 0?null:r)}function nu(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&zd(r,o.deps)){i.memoizedState=ao(e,n,s,r);return}}we.flags|=t,i.memoizedState=ao(1|e,n,s,r)}function wm(t,e){return Fa(8390656,8,t,e)}function Wd(t,e){return nu(2048,8,t,e)}function Gv(t,e){return nu(4,2,t,e)}function Yv(t,e){return nu(4,4,t,e)}function Qv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xv(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,Qv.bind(null,e,t),n)}function Kd(){}function Jv(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Zv(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function e0(t,e,n){return Mr&21?(Gt(n,e)||(n=rv(),we.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function Z_(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=uc.transition;uc.transition={};try{t(!1),e()}finally{re=n,uc.transition=r}}function t0(){return Ft().memoizedState}function eI(t,e,n){var r=Zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},n0(t))r0(e,n);else if(n=Ov(t,e,n,r),n!==null){var i=ft();Kt(n,t,r,i),i0(n,e,r)}}function tI(t,e,n){var r=Zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(n0(t))r0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Gt(a,o)){var l=e.interleaved;l===null?(i.next=i,Ud(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Ov(t,e,i,r),n!==null&&(i=ft(),Kt(n,t,r,i),i0(n,e,r))}}function n0(t){var e=t.alternate;return t===we||e!==null&&e===we}function r0(t,e){js=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function i0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}var yl={readContext:$t,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},nI={readContext:$t,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:wm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fa(4194308,4,Qv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fa(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eI.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:vm,useDebugValue:Kd,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=vm(!1),e=t[0];return t=Z_.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=en();if(pe){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Fe===null)throw Error(C(349));Mr&30||Vv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wm(Hv.bind(null,r,s,t),[t]),r.flags|=2048,ao(9,zv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=Fe.identifierPrefix;if(pe){var n=pn,r=fn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=so++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=J_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rI={readContext:$t,useCallback:Jv,useContext:$t,useEffect:Wd,useImperativeHandle:Xv,useInsertionEffect:Gv,useLayoutEffect:Yv,useMemo:Zv,useReducer:cc,useRef:Kv,useState:function(){return cc(oo)},useDebugValue:Kd,useDeferredValue:function(t){var e=Ft();return e0(e,je.memoizedState,t)},useTransition:function(){var t=cc(oo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:Bv,useId:t0,unstable_isNewReconciler:!1},iI={readContext:$t,useCallback:Jv,useContext:$t,useEffect:Wd,useImperativeHandle:Xv,useInsertionEffect:Gv,useLayoutEffect:Yv,useMemo:Zv,useReducer:hc,useRef:Kv,useState:function(){return hc(oo)},useDebugValue:Kd,useDeferredValue:function(t){var e=Ft();return je===null?e.memoizedState=t:e0(e,je.memoizedState,t)},useTransition:function(){var t=hc(oo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:Bv,useId:t0,unstable_isNewReconciler:!1};function Mi(t,e){try{var n="",r=e;do n+=DS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sI=typeof WeakMap=="function"?WeakMap:Map;function s0(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wl||(wl=!0,xh=r),yh(t,e)},n}function o0(t,e,n){n=wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Em(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wI.bind(null,t,e,n),e.then(t,t))}function Sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _m(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,Xn(n,e,1))),n.lanes|=1),t)}var oI=xn.ReactCurrentOwner,wt=!1;function lt(t,e,n,r){e.child=t===null?Uv(e,null,n,r):Oi(e,t.child,n,r)}function Im(t,e,n,r,i){n=n.render;var s=e.ref;return Ti(e,i),r=Hd(t,e,n,r,s,i),n=qd(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(pe&&n&&Dd(e),e.flags|=1,lt(t,e,r,i),e.child)}function Tm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!tf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,a0(t,e,s,r,i)):(t=Ha(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(o,r)&&t.ref===e.ref)return Tn(t,e,i)}return e.flags|=1,t=er(s,r),t.ref=e.ref,t.return=e,e.child=t}function a0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Zs(s,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,Tn(t,e,i)}return vh(t,e,n,r,i)}function l0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(gi,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(gi,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(gi,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(gi,Ct),Ct|=r;return lt(t,e,i,n),e.child}function u0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,r,i){var s=St(n)?Or:ot.current;return s=Pi(e,s),Ti(e,i),n=Hd(t,e,n,r,s,i),r=qd(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(pe&&r&&Dd(e),e.flags|=1,lt(t,e,n,i),e.child)}function km(t,e,n,r,i){if(St(n)){var s=!0;ul(e)}else s=!1;if(Ti(e,i),e.stateNode===null)Ba(t,e),jv(e,n,r),gh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=$t(u):(u=St(n)?Or:ot.current,u=Pi(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&gm(e,o,r,u),jn=!1;var f=e.memoizedState;o.state=f,pl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Et.current||jn?(typeof h=="function"&&(mh(e,n,h,r),l=e.memoizedState),(a=jn||mm(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Lv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$t(l):(l=St(n)?Or:ot.current,l=Pi(e,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&gm(e,o,r,l),jn=!1,f=e.memoizedState,o.state=f,pl(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||Et.current||jn?(typeof y=="function"&&(mh(e,n,y,r),v=e.memoizedState),(u=jn||mm(e,n,u,r,f,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return wh(t,e,n,r,s,i)}function wh(t,e,n,r,i,s){u0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cm(e,n,!1),Tn(t,e,s);r=e.stateNode,oI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oi(e,t.child,null,s),e.child=Oi(e,null,a,s)):lt(t,e,a,s),e.memoizedState=r.state,i&&cm(e,n,!0),e.child}function c0(t){var e=t.stateNode;e.pendingContext?um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&um(t,e.context,!1),Fd(t,e.containerInfo)}function Cm(t,e,n,r,i){return Di(),Ld(i),e.flags|=256,lt(t,e,n,r),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function h0(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(ye,i&1),t===null)return fh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=su(o,r,0,null),t=xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sh(n),e.memoizedState=Eh,t):Gd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return aI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=er(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=er(a,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Eh,r}return s=t.child,t=s.sibling,r=er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gd(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sa(t,e,n,r){return r!==null&&Ld(r),Oi(e,t.child,null,n),t=Gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dc(Error(C(422))),Sa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=su({mode:"visible",children:r.children},i,0,null),s=xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oi(e,t.child,null,o),e.child.memoizedState=Sh(o),e.memoizedState=Eh,s);if(!(e.mode&1))return Sa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=dc(s,r,void 0),Sa(t,e,o,r)}if(a=(o&t.childLanes)!==0,wt||a){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(t,i),Kt(r,t,i,-1))}return ef(),r=dc(Error(C(421))),Sa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=EI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=Qn(i.nextSibling),Rt=e,pe=!0,qt=null,t!==null&&(Mt[jt++]=fn,Mt[jt++]=pn,Mt[jt++]=Lr,fn=t.id,pn=t.overflow,Lr=e),e=Gd(e,r.children),e.flags|=4096,e)}function xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ph(t.return,e,n)}function fc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function d0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ml(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fc(e,!0,n,null,s);break;case"together":fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lI(t,e,n){switch(e.tag){case 3:c0(e),Di();break;case 5:$v(e);break;case 1:St(e.type)&&ul(e);break;case 4:Fd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?h0(t,e,n):(ae(ye,ye.current&1),t=Tn(t,e,n),t!==null?t.sibling:null);ae(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return d0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,l0(t,e,n)}return Tn(t,e,n)}var f0,_h,p0,m0;f0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_h=function(){};p0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ir(sn.current);var s=null;switch(n){case"input":i=Hc(t,i),r=Hc(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Kc(t,i),r=Kc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=al)}Yc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ws.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ws.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};m0=function(t,e,n,r){n!==r&&(e.flags|=4)};function vs(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uI(t,e,n){var r=e.pendingProps;switch(Od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return St(e.type)&&ll(),tt(e),null;case 3:return r=e.stateNode,Li(),he(Et),he(ot),Vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(Rh(qt),qt=null))),_h(t,e),tt(e),null;case 5:Bd(e);var i=Ir(io.current);if(n=e.type,t!==null&&e.stateNode!=null)p0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return tt(e),null}if(t=Ir(sn.current),wa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[no]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<ks.length;i++)ue(ks[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":jp(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":Up(r,s),ue("invalid",r)}Yc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&va(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&va(r.textContent,a,t),i=["children",""+a]):Ws.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":ca(r),bp(r,s,!0);break;case"textarea":ca(r),$p(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[no]=r,f0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qc(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ks.length;i++)ue(ks[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":jp(t,r),i=Hc(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),ue("invalid",t);break;case"textarea":Up(t,r),i=Kc(t,r),ue("invalid",t);break;default:i=r}Yc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ks(t,l):typeof l=="number"&&Ks(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ws.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ue("scroll",t):l!=null&&vd(t,s,l,o))}switch(n){case"input":ca(t),bp(t,r,!1);break;case"textarea":ca(t),$p(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)m0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Ir(io.current),Ir(sn.current),wa(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:va(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return tt(e),null;case 13:if(he(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&At!==null&&e.mode&1&&!(e.flags&128))Dv(),Di(),e.flags|=98560,s=!1;else if(s=wa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[tn]=e}else Di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else qt!==null&&(Rh(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?be===0&&(be=3):ef())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return Li(),_h(t,e),t===null&&eo(e.stateNode.containerInfo),tt(e),null;case 10:return bd(e.type._context),tt(e),null;case 17:return St(e.type)&&ll(),tt(e),null;case 19:if(he(ye),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vs(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ml(t),o!==null){for(e.flags|=128,vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&_e()>ji&&(e.flags|=128,r=!0,vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=ml(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return tt(e),null}else 2*_e()-s.renderingStartTime>ji&&n!==1073741824&&(e.flags|=128,r=!0,vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_e(),e.sibling=null,n=ye.current,ae(ye,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Zd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function cI(t,e){switch(Od(e),e.tag){case 1:return St(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Li(),he(Et),he(ot),Vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bd(e),null;case 13:if(he(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(ye),null;case 4:return Li(),null;case 10:return bd(e.type._context),null;case 22:case 23:return Zd(),null;case 24:return null;default:return null}}var _a=!1,nt=!1,hI=typeof WeakSet=="function"?WeakSet:Set,O=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function Ih(t,e,n){try{n()}catch(r){Se(t,e,r)}}var Am=!1;function dI(t,e){if(oh=il,t=wv(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++h===r&&(l=o),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ah={focusedElem:t,selectionRange:n},il=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,_=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?E:zt(e.type,E),_);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){Se(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return v=Am,Am=!1,v}function bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ih(e,n,s)}i=i.next}while(i!==r)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function g0(t){var e=t.alternate;e!==null&&(t.alternate=null,g0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[no],delete e[ch],delete e[G_],delete e[Y_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function y0(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}var He=null,Ht=!1;function On(t,e,n){for(n=n.child;n!==null;)v0(t,e,n),n=n.sibling}function v0(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:nt||mi(n,e);case 6:var r=He,i=Ht;He=null,On(t,e,n),He=r,Ht=i,He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?oc(t.parentNode,n):t.nodeType===1&&oc(t,n),Xs(t)):oc(He,n.stateNode));break;case 4:r=He,i=Ht,He=n.stateNode.containerInfo,Ht=!0,On(t,e,n),He=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ih(n,e,o),i=i.next}while(i!==r)}On(t,e,n);break;case 1:if(!nt&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,e,a)}On(t,e,n);break;case 21:On(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,On(t,e,n),nt=r):On(t,e,n);break;default:On(t,e,n)}}function Rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hI),e.forEach(function(r){var i=SI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Ht=!1;break e;case 3:He=a.stateNode.containerInfo,Ht=!0;break e;case 4:He=a.stateNode.containerInfo,Ht=!0;break e}a=a.return}if(He===null)throw Error(C(160));v0(s,o,i),He=null,Ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Se(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)w0(e,t),e=e.sibling}function w0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Xt(t),r&4){try{bs(3,t,t.return),ru(3,t)}catch(E){Se(t,t.return,E)}try{bs(5,t,t.return)}catch(E){Se(t,t.return,E)}}break;case 1:Vt(e,t),Xt(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(Vt(e,t),Xt(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var i=t.stateNode;try{Ks(i,"")}catch(E){Se(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fy(i,s),Qc(a,o);var u=Qc(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?qy(i,d):h==="dangerouslySetInnerHTML"?zy(i,d):h==="children"?Ks(i,d):vd(i,h,d,u)}switch(a){case"input":qc(i,s);break;case"textarea":By(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ei(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ei(i,!!s.multiple,s.defaultValue,!0):Ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[no]=s}catch(E){Se(t,t.return,E)}}break;case 6:if(Vt(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){Se(t,t.return,E)}}break;case 3:if(Vt(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xs(e.containerInfo)}catch(E){Se(t,t.return,E)}break;case 4:Vt(e,t),Xt(t);break;case 13:Vt(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xd=_e())),r&4&&Rm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(u=nt)||h,Vt(e,t),nt=u):Vt(e,t),Xt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(O=t,h=t.child;h!==null;){for(d=O=h;O!==null;){switch(f=O,y=f.child,f.tag){case 0:case 11:case 14:case 15:bs(4,f,f.return);break;case 1:mi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){Se(r,n,E)}}break;case 5:mi(f,f.return);break;case 22:if(f.memoizedState!==null){Dm(d);continue}}y!==null?(y.return=f,O=y):Dm(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hy("display",o))}catch(E){Se(t,t.return,E)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(E){Se(t,t.return,E)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Vt(e,t),Xt(t),r&4&&Rm(t);break;case 21:break;default:Vt(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(y0(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ks(i,""),r.flags&=-33);var s=Nm(t);Ch(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Nm(t);kh(t,a,o);break;default:throw Error(C(161))}}catch(l){Se(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fI(t,e,n){O=t,E0(t)}function E0(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_a;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nt;a=_a;var u=nt;if(_a=o,(nt=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Om(i):l!==null?(l.return=o,O=l):Om(i);for(;s!==null;)O=s,E0(s),s=s.sibling;O=i,_a=a,nt=u}Pm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Pm(t)}}function Pm(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Xs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}nt||e.flags&512&&Th(e)}catch(f){Se(e,e.return,f)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Dm(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Om(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){Se(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Se(e,i,l)}}var s=e.return;try{Th(e)}catch(l){Se(e,s,l)}break;case 5:var o=e.return;try{Th(e)}catch(l){Se(e,o,l)}}}catch(l){Se(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var pI=Math.ceil,vl=xn.ReactCurrentDispatcher,Yd=xn.ReactCurrentOwner,Ut=xn.ReactCurrentBatchConfig,Z=0,Fe=null,Pe=null,Ke=0,Ct=0,gi=dr(0),be=0,lo=null,jr=0,iu=0,Qd=0,Us=null,yt=null,Xd=0,ji=1/0,hn=null,wl=!1,xh=null,Jn=null,Ia=!1,qn=null,El=0,$s=0,Ah=null,Va=-1,za=0;function ft(){return Z&6?_e():Va!==-1?Va:Va=_e()}function Zn(t){return t.mode&1?Z&2&&Ke!==0?Ke&-Ke:X_.transition!==null?(za===0&&(za=rv()),za):(t=re,t!==0||(t=window.event,t=t===void 0?16:cv(t.type)),t):1}function Kt(t,e,n,r){if(50<$s)throw $s=0,Ah=null,Error(C(185));Ao(t,n,r),(!(Z&2)||t!==Fe)&&(t===Fe&&(!(Z&2)&&(iu|=n),be===4&&Un(t,Ke)),_t(t,r),n===1&&Z===0&&!(e.mode&1)&&(ji=_e()+500,eu&&fr()))}function _t(t,e){var n=t.callbackNode;XS(t,e);var r=rl(t,t===Fe?Ke:0);if(r===0)n!==null&&Vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vp(n),e===1)t.tag===0?Q_(Lm.bind(null,t)):Nv(Lm.bind(null,t)),W_(function(){!(Z&6)&&fr()}),n=null;else{switch(iv(r)){case 1:n=Id;break;case 4:n=tv;break;case 16:n=nl;break;case 536870912:n=nv;break;default:n=nl}n=A0(n,S0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S0(t,e){if(Va=-1,za=0,Z&6)throw Error(C(327));var n=t.callbackNode;if(ki()&&t.callbackNode!==n)return null;var r=rl(t,t===Fe?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sl(t,r);else{e=r;var i=Z;Z|=2;var s=I0();(Fe!==t||Ke!==e)&&(hn=null,ji=_e()+500,Cr(t,e));do try{yI();break}catch(a){_0(t,a)}while(1);jd(),vl.current=s,Z=i,Pe!==null?e=0:(Fe=null,Ke=0,e=be)}if(e!==0){if(e===2&&(i=th(t),i!==0&&(r=i,e=Nh(t,i))),e===1)throw n=lo,Cr(t,0),Un(t,r),_t(t,_e()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!mI(i)&&(e=Sl(t,r),e===2&&(s=th(t),s!==0&&(r=s,e=Nh(t,s))),e===1))throw n=lo,Cr(t,0),Un(t,r),_t(t,_e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:wr(t,yt,hn);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=Xd+500-_e(),10<e)){if(rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uh(wr.bind(null,t,yt,hn),e);break}wr(t,yt,hn);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pI(r/1960))-r,10<r){t.timeoutHandle=uh(wr.bind(null,t,yt,hn),r);break}wr(t,yt,hn);break;case 5:wr(t,yt,hn);break;default:throw Error(C(329))}}}return _t(t,_e()),t.callbackNode===n?S0.bind(null,t):null}function Nh(t,e){var n=Us;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=yt,yt=n,e!==null&&Rh(e)),t}function Rh(t){yt===null?yt=t:yt.push.apply(yt,t)}function mI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~Qd,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function Lm(t){if(Z&6)throw Error(C(327));ki();var e=rl(t,0);if(!(e&1))return _t(t,_e()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var r=th(t);r!==0&&(e=r,n=Nh(t,r))}if(n===1)throw n=lo,Cr(t,0),Un(t,e),_t(t,_e()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,yt,hn),_t(t,_e()),null}function Jd(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(ji=_e()+500,eu&&fr())}}function br(t){qn!==null&&qn.tag===0&&!(Z&6)&&ki();var e=Z;Z|=1;var n=Ut.transition,r=re;try{if(Ut.transition=null,re=1,t)return t()}finally{re=r,Ut.transition=n,Z=e,!(Z&6)&&fr()}}function Zd(){Ct=gi.current,he(gi)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q_(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Od(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:Li(),he(Et),he(ot),Vd();break;case 5:Bd(r);break;case 4:Li();break;case 13:he(ye);break;case 19:he(ye);break;case 10:bd(r.type._context);break;case 22:case 23:Zd()}n=n.return}if(Fe=t,Pe=t=er(t.current,null),Ke=Ct=e,be=0,lo=null,Qd=iu=jr=0,yt=Us=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_r=null}return t}function _0(t,e){do{var n=Pe;try{if(jd(),$a.current=yl,gl){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gl=!1}if(Mr=0,$e=je=we=null,js=!1,so=0,Yd.current=null,n===null||n.return===null){be=1,lo=e,Pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Sm(o);if(y!==null){y.flags&=-257,_m(y,o,a,s,e),y.mode&1&&Em(s,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){Em(s,u,e),ef();break e}l=Error(C(426))}}else if(pe&&a.mode&1){var _=Sm(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),_m(_,o,a,s,e),Ld(Mi(l,a));break e}}s=l=Mi(l,a),be!==4&&(be=2),Us===null?Us=[s]:Us.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=s0(s,l,e);fm(s,g);break e;case 1:a=l;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Jn===null||!Jn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=o0(s,a,e);fm(s,S);break e}}s=s.return}while(s!==null)}k0(n)}catch(k){e=k,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function I0(){var t=vl.current;return vl.current=yl,t===null?yl:t}function ef(){(be===0||be===3||be===2)&&(be=4),Fe===null||!(jr&268435455)&&!(iu&268435455)||Un(Fe,Ke)}function Sl(t,e){var n=Z;Z|=2;var r=I0();(Fe!==t||Ke!==e)&&(hn=null,Cr(t,e));do try{gI();break}catch(i){_0(t,i)}while(1);if(jd(),Z=n,vl.current=r,Pe!==null)throw Error(C(261));return Fe=null,Ke=0,be}function gI(){for(;Pe!==null;)T0(Pe)}function yI(){for(;Pe!==null&&!VS();)T0(Pe)}function T0(t){var e=x0(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?k0(t):Pe=e,Yd.current=null}function k0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cI(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Pe=null;return}}else if(n=uI(n,e,Ct),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);be===0&&(be=5)}function wr(t,e,n){var r=re,i=Ut.transition;try{Ut.transition=null,re=1,vI(t,e,n,r)}finally{Ut.transition=i,re=r}return null}function vI(t,e,n,r){do ki();while(qn!==null);if(Z&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(JS(t,s),t===Fe&&(Pe=Fe=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ia||(Ia=!0,A0(nl,function(){return ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=re;re=1;var a=Z;Z|=4,Yd.current=null,dI(t,n),w0(n,t),U_(ah),il=!!oh,ah=oh=null,t.current=n,fI(n),zS(),Z=a,re=o,Ut.transition=s}else t.current=n;if(Ia&&(Ia=!1,qn=t,El=i),s=t.pendingLanes,s===0&&(Jn=null),WS(n.stateNode),_t(t,_e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wl)throw wl=!1,t=xh,xh=null,t;return El&1&&t.tag!==0&&ki(),s=t.pendingLanes,s&1?t===Ah?$s++:($s=0,Ah=t):$s=0,fr(),null}function ki(){if(qn!==null){var t=iv(El),e=Ut.transition,n=re;try{if(Ut.transition=null,re=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,El=0,Z&6)throw Error(C(331));var i=Z;for(Z|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:bs(8,h,s)}var d=h.child;if(d!==null)d.return=h,O=d;else for(;O!==null;){h=O;var f=h.sibling,y=h.return;if(g0(h),h===u){O=null;break}if(f!==null){f.return=y,O=f;break}O=y}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,O=g;break e}O=s.return}}var p=t.current;for(O=p;O!==null;){o=O;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,O=m;else e:for(o=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(k){Se(a,a.return,k)}if(a===o){O=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,O=S;break e}O=a.return}}if(Z=i,fr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Yl,t)}catch{}r=!0}return r}finally{re=n,Ut.transition=e}}return!1}function Mm(t,e,n){e=Mi(n,e),e=s0(t,e,1),t=Xn(t,e,1),e=ft(),t!==null&&(Ao(t,1,e),_t(t,e))}function Se(t,e,n){if(t.tag===3)Mm(t,t,n);else for(;e!==null;){if(e.tag===3){Mm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){t=Mi(n,t),t=o0(e,t,1),e=Xn(e,t,1),t=ft(),e!==null&&(Ao(e,1,t),_t(e,t));break}}e=e.return}}function wI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(Ke&n)===n&&(be===4||be===3&&(Ke&130023424)===Ke&&500>_e()-Xd?Cr(t,0):Qd|=n),_t(t,e)}function C0(t,e){e===0&&(t.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var n=ft();t=In(t,e),t!==null&&(Ao(t,e,n),_t(t,n))}function EI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C0(t,n)}function SI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),C0(t,n)}var x0;x0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,lI(t,e,n);wt=!!(t.flags&131072)}else wt=!1,pe&&e.flags&1048576&&Rv(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ba(t,e),t=e.pendingProps;var i=Pi(e,ot.current);Ti(e,n),i=Hd(null,e,r,t,i,n);var s=qd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,ul(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$d(e),i.updater=tu,e.stateNode=i,i._reactInternals=e,gh(e,r,t,n),e=wh(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&Dd(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=II(r),t=zt(r,t),i){case 0:e=vh(null,e,r,t,n);break e;case 1:e=km(null,e,r,t,n);break e;case 11:e=Im(null,e,r,t,n);break e;case 14:e=Tm(null,e,r,zt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),km(t,e,r,i,n);case 3:e:{if(c0(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Lv(t,e),pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Mi(Error(C(423)),e),e=Cm(t,e,r,n,i);break e}else if(r!==i){i=Mi(Error(C(424)),e),e=Cm(t,e,r,n,i);break e}else for(At=Qn(e.stateNode.containerInfo.firstChild),Rt=e,pe=!0,qt=null,n=Uv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Di(),r===i){e=Tn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return $v(e),t===null&&fh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lh(r,i)?o=null:s!==null&&lh(r,s)&&(e.flags|=32),u0(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&fh(e),null;case 13:return h0(t,e,n);case 4:return Fd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oi(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Im(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(dl,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!Et.current){e=Tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=wn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ph(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ti(e,n),i=$t(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),Tm(t,e,r,i,n);case 15:return a0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Ba(t,e),e.tag=1,St(r)?(t=!0,ul(e)):t=!1,Ti(e,n),jv(e,r,i),gh(e,r,i,n),wh(null,e,r,!0,t,n);case 19:return d0(t,e,n);case 22:return l0(t,e,n)}throw Error(C(156,e.tag))};function A0(t,e){return ev(t,e)}function _I(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,e,n,r){return new _I(t,e,n,r)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function II(t){if(typeof t=="function")return tf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ed)return 11;if(t===Sd)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")tf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return xr(n.children,i,s,e);case wd:o=8,i|=8;break;case Fc:return t=bt(12,n,e,i|2),t.elementType=Fc,t.lanes=s,t;case Bc:return t=bt(13,n,e,i),t.elementType=Bc,t.lanes=s,t;case Vc:return t=bt(19,n,e,i),t.elementType=Vc,t.lanes=s,t;case by:return su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case My:o=10;break e;case jy:o=9;break e;case Ed:o=11;break e;case Sd:o=14;break e;case Mn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xr(t,e,n,r){return t=bt(7,t,r,e),t.lanes=n,t}function su(t,e,n,r){return t=bt(22,t,r,e),t.elementType=by,t.lanes=n,t.stateNode={isHidden:!1},t}function pc(t,e,n){return t=bt(6,t,null,e),t.lanes=n,t}function mc(t,e,n){return e=bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yu(0),this.expirationTimes=Yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nf(t,e,n,r,i,s,o,a,l){return t=new TI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$d(s),t}function kI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function N0(t){if(!t)return or;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(St(n))return Av(t,n,e)}return e}function R0(t,e,n,r,i,s,o,a,l){return t=nf(n,r,!0,t,i,s,o,a,l),t.context=N0(null),n=t.current,r=ft(),i=Zn(n),s=wn(r,i),s.callback=e??null,Xn(n,s,i),t.current.lanes=i,Ao(t,i,r),_t(t,r),t}function ou(t,e,n,r){var i=e.current,s=ft(),o=Zn(i);return n=N0(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xn(i,e,o),t!==null&&(Kt(t,i,o,s),Ua(t,i,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rf(t,e){jm(t,e),(t=t.alternate)&&jm(t,e)}function CI(){return null}var P0=typeof reportError=="function"?reportError:function(t){console.error(t)};function sf(t){this._internalRoot=t}au.prototype.render=sf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));ou(t,e,null,null)};au.prototype.unmount=sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){ou(null,t,null,null)}),e[_n]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=av();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bn.length&&e!==0&&e<bn[n].priority;n++);bn.splice(n,0,t),n===0&&uv(t)}};function of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bm(){}function xI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_l(o);s.call(u)}}var o=R0(e,r,t,0,null,!1,!1,"",bm);return t._reactRootContainer=o,t[_n]=o.current,eo(t.nodeType===8?t.parentNode:t),br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_l(l);a.call(u)}}var l=nf(t,0,!1,null,null,!1,!1,"",bm);return t._reactRootContainer=l,t[_n]=l.current,eo(t.nodeType===8?t.parentNode:t),br(function(){ou(e,l,n,r)}),l}function uu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=_l(o);a.call(l)}}ou(e,o,t,i)}else o=xI(n,e,t,i,r);return _l(o)}sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ts(e.pendingLanes);n!==0&&(Td(e,n|1),_t(e,_e()),!(Z&6)&&(ji=_e()+500,fr()))}break;case 13:br(function(){var r=In(t,1);if(r!==null){var i=ft();Kt(r,t,1,i)}}),rf(t,1)}};kd=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=ft();Kt(e,t,134217728,n)}rf(t,134217728)}};ov=function(t){if(t.tag===13){var e=Zn(t),n=In(t,e);if(n!==null){var r=ft();Kt(n,t,e,r)}rf(t,e)}};av=function(){return re};lv=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Jc=function(t,e,n){switch(e){case"input":if(qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zl(r);if(!i)throw Error(C(90));$y(r),qc(r,i)}}}break;case"textarea":By(t,n);break;case"select":e=n.value,e!=null&&Ei(t,!!n.multiple,e,!1)}};Gy=Jd;Yy=br;var AI={usingClientEntryPoint:!1,Events:[Ro,ci,Zl,Wy,Ky,Jd]},ws={findFiberByHostInstance:Sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},NI={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jy(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||CI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{Yl=Ta.inject(NI),rn=Ta}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AI;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(e))throw Error(C(200));return kI(t,e,null,n)};Ot.createRoot=function(t,e){if(!of(t))throw Error(C(299));var n=!1,r="",i=P0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=nf(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,eo(t.nodeType===8?t.parentNode:t),new sf(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Jy(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return br(t)};Ot.hydrate=function(t,e,n){if(!lu(e))throw Error(C(200));return uu(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!of(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=P0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=R0(e,null,t,1,n??null,i,!1,s,o),t[_n]=e.current,eo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new au(e)};Ot.render=function(t,e,n){if(!lu(e))throw Error(C(200));return uu(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!lu(t))throw Error(C(40));return t._reactRootContainer?(br(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};Ot.unstable_batchedUpdates=Jd;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lu(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return uu(t,e,n,!1,r)};Ot.version="18.2.0-next-9e3b772b8-20220608";function D0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D0)}catch(t){console.error(t)}}D0(),Ry.exports=Ot;var RI=Ry.exports,Um=RI;Uc.createRoot=Um.createRoot,Uc.hydrateRoot=Um.hydrateRoot;/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uo.apply(this,arguments)}var Wn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Wn||(Wn={}));const $m="popstate";function PI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ph("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Il(i)}return OI(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function af(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DI(){return Math.random().toString(36).substr(2,8)}function Fm(t,e){return{usr:t.state,key:t.key,idx:e}}function Ph(t,e,n,r){return n===void 0&&(n=null),uo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xi(e):e,{state:n,key:e&&e.key||r||DI()})}function Il(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function OI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Wn.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(uo({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=Wn.Pop;let _=h(),g=_==null?null:_-u;u=_,l&&l({action:a,location:E.location,delta:g})}function f(_,g){a=Wn.Push;let p=Ph(E.location,_,g);n&&n(p,_),u=h()+1;let m=Fm(p,u),S=E.createHref(p);try{o.pushState(m,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(S)}s&&l&&l({action:a,location:E.location,delta:1})}function y(_,g){a=Wn.Replace;let p=Ph(E.location,_,g);n&&n(p,_),u=h();let m=Fm(p,u),S=E.createHref(p);o.replaceState(m,"",S),s&&l&&l({action:a,location:E.location,delta:0})}function v(_){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof _=="string"?_:Il(_);return Ie(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let E={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener($m,d),l=_,()=>{i.removeEventListener($m,d),l=null}},createHref(_){return e(i,_)},createURL:v,encodeLocation(_){let g=v(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:y,go(_){return o.go(_)}};return E}var Bm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Bm||(Bm={}));function LI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Xi(e):e,i=lf(r.pathname||"/",n);if(i==null)return null;let s=O0(t);MI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=HI(s[a],KI(i));return o}function O0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=tr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),O0(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:VI(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of L0(s.path))i(s,o,l)}),e}function L0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=L0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function MI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jI=/^:\w+$/,bI=3,UI=2,$I=1,FI=10,BI=-2,Vm=t=>t==="*";function VI(t,e){let n=t.split("/"),r=n.length;return n.some(Vm)&&(r+=BI),e&&(r+=UI),n.filter(i=>!Vm(i)).reduce((i,s)=>i+(jI.test(s)?bI:s===""?$I:FI),r)}function zI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function HI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=qI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!h)return null;Object.assign(r,h.params);let d=a.route;s.push({params:r,pathname:tr([i,h.pathname]),pathnameBase:XI(tr([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=tr([i,h.pathnameBase]))}return s}function qI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=WI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,d)=>{if(h==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[h]=GI(a[d]||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function WI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),af(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function KI(t){try{return decodeURI(t)}catch(e){return af(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function GI(t,e){try{return decodeURIComponent(t)}catch(n){return af(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function lf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function YI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xi(t):t;return{pathname:n?n.startsWith("/")?n:QI(n,e):e,search:JI(r),hash:ZI(i)}}function QI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uf(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xi(t):(i=uo({},t),Ie(!i.pathname||!i.pathname.includes("?"),gc("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),gc("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),gc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=YI(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const tr=t=>t.join("/").replace(/\/\/+/g,"/"),XI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function eT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const M0=["post","put","patch","delete"];new Set(M0);const tT=["get",...M0];new Set(tT);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tl.apply(this,arguments)}const hf=w.createContext(null),nT=w.createContext(null),Ji=w.createContext(null),cu=w.createContext(null),An=w.createContext({outlet:null,matches:[],isDataRoute:!1}),j0=w.createContext(null);function rT(t,e){let{relative:n}=e===void 0?{}:e;Zi()||Ie(!1);let{basename:r,navigator:i}=w.useContext(Ji),{hash:s,pathname:o,search:a}=U0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:tr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Zi(){return w.useContext(cu)!=null}function Do(){return Zi()||Ie(!1),w.useContext(cu).location}function b0(t){w.useContext(Ji).static||w.useLayoutEffect(t)}function Qt(){let{isDataRoute:t}=w.useContext(An);return t?yT():iT()}function iT(){Zi()||Ie(!1);let t=w.useContext(hf),{basename:e,navigator:n}=w.useContext(Ji),{matches:r}=w.useContext(An),{pathname:i}=Do(),s=JSON.stringify(uf(r).map(l=>l.pathnameBase)),o=w.useRef(!1);return b0(()=>{o.current=!0}),w.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=cf(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:tr([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,s,i,t])}function sT(){let{matches:t}=w.useContext(An),e=t[t.length-1];return e?e.params:{}}function U0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=w.useContext(An),{pathname:i}=Do(),s=JSON.stringify(uf(r).map(o=>o.pathnameBase));return w.useMemo(()=>cf(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function oT(t,e){return aT(t,e)}function aT(t,e,n){Zi()||Ie(!1);let{navigator:r}=w.useContext(Ji),{matches:i}=w.useContext(An),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Do(),u;if(e){var h;let E=typeof e=="string"?Xi(e):e;a==="/"||(h=E.pathname)!=null&&h.startsWith(a)||Ie(!1),u=E}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",y=LI(t,{pathname:f}),v=dT(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:tr([a,r.encodeLocation?r.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:tr([a,r.encodeLocation?r.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n);return e&&v?w.createElement(cu.Provider,{value:{location:Tl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Wn.Pop}},v):v}function lT(){let t=gT(),e=eT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,s)}const uT=w.createElement(lT,null);class cT extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w.createElement(An.Provider,{value:this.props.routeContext},w.createElement(j0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hT(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(hf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(An.Provider,{value:e},r)}function dT(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ie(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let h=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||uT);let f=e.concat(s.slice(0,u+1)),y=()=>{let v;return h?v=d:l.route.Component?v=w.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,w.createElement(hT,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(cT,{location:n.location,revalidation:n.revalidation,component:d,error:h,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var Dh;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Dh||(Dh={}));var co;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(co||(co={}));function fT(t){let e=w.useContext(hf);return e||Ie(!1),e}function pT(t){let e=w.useContext(nT);return e||Ie(!1),e}function mT(t){let e=w.useContext(An);return e||Ie(!1),e}function $0(t){let e=mT(),n=e.matches[e.matches.length-1];return n.route.id||Ie(!1),n.route.id}function gT(){var t;let e=w.useContext(j0),n=pT(co.UseRouteError),r=$0(co.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function yT(){let{router:t}=fT(Dh.UseNavigateStable),e=$0(co.UseNavigateStable),n=w.useRef(!1);return b0(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Tl({fromRouteId:e},s)))},[t,e])}function F0(t){let{to:e,replace:n,state:r,relative:i}=t;Zi()||Ie(!1);let{matches:s}=w.useContext(An),{pathname:o}=Do(),a=Qt(),l=cf(e,uf(s).map(h=>h.pathnameBase),o,i==="path"),u=JSON.stringify(l);return w.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Zt(t){Ie(!1)}function vT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Wn.Pop,navigator:s,static:o=!1}=t;Zi()&&Ie(!1);let a=e.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Xi(r));let{pathname:u="/",search:h="",hash:d="",state:f=null,key:y="default"}=r,v=w.useMemo(()=>{let E=lf(u,a);return E==null?null:{location:{pathname:E,search:h,hash:d,state:f,key:y},navigationType:i}},[a,u,h,d,f,y,i]);return v==null?null:w.createElement(Ji.Provider,{value:l},w.createElement(cu.Provider,{children:n,value:v}))}function wT(t){let{children:e,location:n}=t;return oT(Oh(e),n)}var zm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(zm||(zm={}));new Promise(()=>{});function Oh(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,Oh(r.props.children,s));return}r.type!==Zt&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Oh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lh(){return Lh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lh.apply(this,arguments)}function ET(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ST(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _T(t,e){return t.button===0&&(!e||e==="_self")&&!ST(t)}const IT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],TT="startTransition",Hm=ES[TT];function kT(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=PI({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=w.useCallback(d=>{u&&Hm?Hm(()=>l(d)):l(d)},[l,u]);return w.useLayoutEffect(()=>o.listen(h),[o,h]),w.createElement(vT,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const CT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B0=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h}=e,d=ET(e,IT),{basename:f}=w.useContext(Ji),y,v=!1;if(typeof u=="string"&&xT.test(u)&&(y=u,CT))try{let p=new URL(window.location.href),m=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=lf(m.pathname,f);m.origin===p.origin&&S!=null?u=S+m.search+m.hash:v=!0}catch{}let E=rT(u,{relative:i}),_=AT(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i});function g(p){r&&r(p),p.defaultPrevented||_(p)}return w.createElement("a",Lh({},d,{href:y||E,onClick:v||s?r:g,ref:n,target:l}))});var qm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(qm||(qm={}));var Wm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Wm||(Wm={}));function AT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Qt(),l=Do(),u=U0(t,{relative:o});return w.useCallback(h=>{if(_T(h,n)){h.preventDefault();let d=r!==void 0?r:Il(l)===Il(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},z0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[h],n[d],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(V0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},RT=function(t){const e=V0(t);return z0.encodeByteArray(e,!0)},H0=function(t){return RT(t).replace(/\./g,"")},PT=function(t){try{return z0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function q0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function W0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function K0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OT(){return Be().indexOf("Electron/")>=0}function G0(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LT(){return Be().indexOf("MSAppHost/")>=0}function MT(){return typeof indexedDB=="object"}function jT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="FirebaseError";class pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bT,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?UT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pr(i,a,r)}}function UT(t,e){return t.replace($T,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $T=/\{\$([^}]+)}/g;function FT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Km(s)&&Km(o)){if(!kl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Km(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function BT(t,e){const n=new VT(t,e);return n.subscribe.bind(n)}class VT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yc),i.error===void 0&&(i.error=yc),i.complete===void 0&&(i.complete=yc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class Gm{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Y0(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Q0(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Y0{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Q0(this._transaction.objectStore(e))}}class Q0{constructor(e){this._store=e}index(e){return new Ym(this._store.index(e))}createIndex(e,n,r){return new Ym(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return As(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return As(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return As(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return As(e,"Error clearing IndexedDB object store")}}class Ym{constructor(e){this._index=e}get(e){const n=this._index.get(e);return As(n,"Error reading from IndexedDB")}}function HT(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new Gm(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new Gm(s.result),o.oldVersion,o.newVersion,new Y0(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KT(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WT(t){return t===Er?void 0:t}function KT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const YT={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},QT=ee.INFO,XT={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},JT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=XT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class df{constructor(e){this.name=e,this._logLevel=QT,this._logHandler=JT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ek(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ek(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mh="@firebase/app",Qm="0.7.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new df("@firebase/app"),tk="@firebase/app-compat",nk="@firebase/analytics-compat",rk="@firebase/analytics",ik="@firebase/app-check-compat",sk="@firebase/app-check",ok="@firebase/auth",ak="@firebase/auth-compat",lk="@firebase/database",uk="@firebase/database-compat",ck="@firebase/functions",hk="@firebase/functions-compat",dk="@firebase/installations",fk="@firebase/installations-compat",pk="@firebase/messaging",mk="@firebase/messaging-compat",gk="@firebase/performance",yk="@firebase/performance-compat",vk="@firebase/remote-config",wk="@firebase/remote-config-compat",Ek="@firebase/storage",Sk="@firebase/storage-compat",_k="@firebase/firestore",Ik="@firebase/firestore-compat",Tk="firebase",kk="9.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="[DEFAULT]",Ck={[Mh]:"fire-core",[tk]:"fire-core-compat",[rk]:"fire-analytics",[nk]:"fire-analytics-compat",[sk]:"fire-app-check",[ik]:"fire-app-check-compat",[ok]:"fire-auth",[ak]:"fire-auth-compat",[lk]:"fire-rtdb",[uk]:"fire-rtdb-compat",[ck]:"fire-fn",[hk]:"fire-fn-compat",[dk]:"fire-iid",[fk]:"fire-iid-compat",[pk]:"fire-fcm",[mk]:"fire-fcm-compat",[gk]:"fire-perf",[yk]:"fire-perf-compat",[vk]:"fire-rc",[wk]:"fire-rc-compat",[Ek]:"fire-gcs",[Sk]:"fire-gcs-compat",[_k]:"fire-fst",[Ik]:"fire-fst-compat","fire-js":"fire-js",[Tk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=new Map,jh=new Map;function xk(t,e){try{t.container.addComponent(e)}catch(n){ff.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(jh.has(e))return ff.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,t);for(const n of Cl.values())xk(n,t);return!0}function hu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},$r=new Oo("app","Firebase",Ak);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=kk;function Rk(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:X0,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw $r.create("bad-app-name",{appName:String(r)});const i=Cl.get(r);if(i){if(kl(t,i.options)&&kl(n,i.config))return i;throw $r.create("duplicate-app",{appName:r})}const s=new GT(r);for(const a of jh.values())s.addComponent(a);const o=new Nk(t,n,s);return Cl.set(r,o),o}function pf(t=X0){const e=Cl.get(t);if(!e)throw $r.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=Ck[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ff.warn(a.join(" "));return}Ur(new ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="firebase-heartbeat-database",Dk=1,ho="firebase-heartbeat-store";let vc=null;function J0(){return vc||(vc=HT(Pk,Dk,(t,e)=>{switch(e){case 0:t.createObjectStore(ho)}}).catch(t=>{throw $r.create("storage-open",{originalErrorMessage:t.message})})),vc}async function Ok(t){try{return(await J0()).transaction(ho).objectStore(ho).get(Z0(t))}catch(e){throw $r.create("storage-get",{originalErrorMessage:e.message})}}async function Xm(t,e){try{const r=(await J0()).transaction(ho,"readwrite");return await r.objectStore(ho).put(e,Z0(t)),r.complete}catch(n){throw $r.create("storage-set",{originalErrorMessage:n.message})}}function Z0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=1024,Mk=30*24*60*60*1e3;class jk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Mk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jm(),{heartbeatsToSend:n,unsentEntries:r}=bk(this._heartbeatsCache.heartbeats),i=H0(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Jm(){return new Date().toISOString().substring(0,10)}function bk(t,e=Lk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Uk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MT()?jT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ok(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zm(t){return H0(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t){Ur(new ar("platform-logger",e=>new ZT(e),"PRIVATE")),Ur(new ar("heartbeat",e=>new jk(e),"PRIVATE")),on(Mh,Qm,t),on(Mh,Qm,"esm2017"),on("fire-js","")}$k("");var Fk="firebase",Bk="9.6.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(Fk,Bk,"app");function mf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ew(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vk=ew,tw=new Oo("auth","Firebase",ew());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new df("@firebase/auth");function qa(t,...e){eg.logLevel<=ee.ERROR&&eg.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw gf(t,...e)}function an(t,...e){return gf(t,...e)}function zk(t,e,n){const r=Object.assign(Object.assign({},Vk()),{[e]:n});return new Oo("auth","Firebase",r).create(e,{appName:t.name})}function gf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tw.create(t,...e)}function B(t,e,...n){if(!t)throw gf(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function kn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=new Map;function gn(t){kn(t instanceof Function,"Expected a class definition");let e=tg.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t,e){const n=hu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(kl(s,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function qk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wk(){return ng()==="http:"||ng()==="https:"}function ng(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wk()||W0()||"connection"in navigator)?navigator.onLine:!0}function Gk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=q0()||K0()}get(){return Kk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=new Mo(3e4,6e4);function jo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ts(t,e,n,r,i={}){return rw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Lo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),nw.fetch()(iw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function rw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yk),e);try{const i=new Xk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wc(t,"email-already-in-use",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zk(t,h,u);Yt(t,h)}}catch(i){if(i instanceof pr)throw i;Yt(t,"network-request-failed")}}async function bo(t,e,n,r,i={}){const s=await ts(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function iw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yf(t.config,i):`${t.config.apiScheme}://${i}`}class Xk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),Qk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e){return ts(t,"POST","/v1/accounts:delete",e)}async function Zk(t,e){return ts(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eC(t,e=!1){const n=ge(t),r=await n.getIdToken(e),i=vf(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fs(Ec(i.auth_time)),issuedAtTime:Fs(Ec(i.iat)),expirationTime:Fs(Ec(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=PT(n);return i?JSON.parse(i):(qa("Failed to decode base64 JWT payload"),null)}catch(i){return qa("Caught error parsing JWT payload as JSON",i),null}}function tC(t){const e=vf(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pr&&nC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fr(t,Zk(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oC(s.providerUserInfo):[],a=sC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sw(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function iC(t){const e=ge(t);await xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oC(t){return t.map(e=>{var{providerId:n}=e,r=mf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e){const n=await rw(t,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=iw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fo;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ar{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fr(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eC(this,e)}reload(){return iC(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fr(this,Jk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:m,emailVerified:S,isAnonymous:k,providerData:I,stsTokenManager:x}=n;B(m&&x,e,"internal-error");const P=fo.fromJSON(this.name,x);B(typeof m=="string",e,"internal-error"),Ln(d,e.name),Ln(f,e.name),B(typeof S=="boolean",e,"internal-error"),B(typeof k=="boolean",e,"internal-error"),Ln(y,e.name),Ln(v,e.name),Ln(E,e.name),Ln(_,e.name),Ln(g,e.name),Ln(p,e.name);const M=new Ar({uid:m,auth:e,email:f,emailVerified:S,displayName:d,isAnonymous:k,photoURL:v,phoneNumber:y,tenantId:E,stsTokenManager:P,createdAt:g,lastLoginAt:p});return I&&Array.isArray(I)&&(M.providerData=I.map(D=>Object.assign({},D))),_&&(M._redirectEventId=_),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new fo;i.updateFromServerResponse(n);const s=new Ar({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ow.type="NONE";const rg=ow;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ci(gn(rg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||gn(rg);const o=Wa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Ar._fromJSON(e,h);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ci(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ci(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hw(e))return"Blackberry";if(dw(e))return"Webos";if(wf(e))return"Safari";if((e.includes("chrome/")||lw(e))&&!e.includes("edge/"))return"Chrome";if(cw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aw(t=Be()){return/firefox\//i.test(t)}function wf(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lw(t=Be()){return/crios\//i.test(t)}function uw(t=Be()){return/iemobile/i.test(t)}function cw(t=Be()){return/android/i.test(t)}function hw(t=Be()){return/blackberry/i.test(t)}function dw(t=Be()){return/webos/i.test(t)}function du(t=Be()){return/iphone|ipad|ipod/i.test(t)}function lC(t=Be()){var e;return du(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uC(){return G0()&&document.documentMode===10}function fw(t=Be()){return du(t)||cw(t)||dw(t)||hw(t)||/windows phone/i.test(t)||uw(t)}function cC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t,e=[]){let n;switch(t){case"Browser":n=ig(Be());break;case"Worker":n=`${ig(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sg(this),this.idTokenSubscription=new sg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o!=null&&o.user)&&(r=o.user)}return r?r._redirectEventId?(B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xl(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ge(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Ci.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function fu(t){return ge(t)}class sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=BT(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function mw(t,e){return ts(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(t,e){return bo(t,"POST","/v1/accounts:signInWithPassword",jo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e){return bo(t,"POST","/v1/accounts:signInWithEmailLink",jo(t,e))}async function pC(t,e){return bo(t,"POST","/v1/accounts:signInWithEmailLink",jo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Ef{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return dC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fC(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return mw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pC(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t,e){return bo(t,"POST","/v1/accounts:signInWithIdp",jo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="http://localhost";class Br extends Ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xi(e,n)}buildRequest(){const e={requestUri:mC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yC(t){const e=Cs(xs(t)).link,n=e?Cs(xs(e)).deep_link_id:null,r=Cs(xs(t)).deep_link_id;return(r?Cs(xs(r)).link:null)||r||n||e||t}class Sf{constructor(e){var n,r,i,s,o,a;const l=Cs(xs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=gC((i=l.mode)!==null&&i!==void 0?i:null);B(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=yC(e);try{return new Sf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.providerId=Jr.PROVIDER_ID}static credential(e,n){return po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sf.parseLink(n);return B(r,"argument-error"),po._fromEmailAndCode(e,r.code,r.tenantId)}}Jr.PROVIDER_ID="password";Jr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends gw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Uo{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Uo{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Uo{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e){return bo(t,"POST","/v1/accounts:signUp",jo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ar._fromIdTokenResponse(e,r,i),o=og(r);return new Vr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=og(r);return new Vr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function og(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends pr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Al.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Al(e,n,r,i)}}function yw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Al._fromErrorAndOperation(t,s,e,r):s})}async function wC(t,e,n=!1){const r=await Fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Fr(t,yw(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=vf(s.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),Vr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(t,e,n=!1){const r="signIn",i=await yw(t,r,e),s=await Vr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function EC(t,e){return ww(fu(t),e)}async function SC(t,e){return vw(ge(t),e)}async function _C(t,e,n){const r=fu(t),i=await vC(r,{returnSecureToken:!0,email:e,password:n}),s=await Vr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function IC(t,e,n){return EC(ge(t),Jr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e){return ts(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ge(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fr(r,TC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function kC(t,e){return CC(ge(t),e,null)}async function CC(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Fr(t,mw(r,s));await t._updateTokensIfNecessary(o,!0)}function xC(t,e,n,r){return ge(t).onAuthStateChanged(e,n,r)}function AC(t){return ge(t).signOut()}const Nl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nl,"1"),this.storage.removeItem(Nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(){const t=Be();return wf(t)||du(t)}const RC=1e3,PC=10;class Sw extends Ew{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NC()&&cC(),this.fallbackToPolling=fw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sw.type="LOCAL";const DC=Sw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w extends Ew{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_w.type="SESSION";const Iw=_w;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await OC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=_f("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function MC(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function jC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UC(){return Tw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="firebaseLocalStorageDb",$C=1,Rl="firebaseLocalStorage",Cw="fbase_key";class $o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mu(t,e){return t.transaction([Rl],e?"readwrite":"readonly").objectStore(Rl)}function FC(){const t=indexedDB.deleteDatabase(kw);return new $o(t).toPromise()}function Uh(){const t=indexedDB.open(kw,$C);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rl,{keyPath:Cw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rl)?e(r):(r.close(),await FC(),e(await Uh()))})})}async function ag(t,e,n){const r=mu(t,!0).put({[Cw]:e,value:n});return new $o(r).toPromise()}async function BC(t,e){const n=mu(t,!1).get(e),r=await new $o(n).toPromise();return r===void 0?null:r.value}function lg(t,e){const n=mu(t,!0).delete(e);return new $o(n).toPromise()}const VC=800,zC=3;class xw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pu._getInstance(UC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jC(),!this.activeServiceWorker)return;this.sender=new LC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uh();return await ag(e,Nl,"1"),await lg(e,Nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ag(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mu(i,!1).getAll();return new $o(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xw.type="LOCAL";const HC=xw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function WC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qC().appendChild(r)})}function KC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Mo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t,e){return e?gn(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends Ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YC(t){return ww(t.auth,new If(t),t.bypassAuthState)}function QC(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),vw(n,new If(t),t.bypassAuthState)}async function XC(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),wC(n,new If(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YC;case"linkViaPopup":case"linkViaRedirect":return XC;case"reauthViaPopup":case"reauthViaRedirect":return QC;default:Yt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=new Mo(2e3,1e4);class yi extends Aw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=_f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,JC.get())};e()}}yi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="pendingRedirect",_c=new Map;class ex extends Aw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_c.get(this.auth._key());if(!e){try{const r=await tx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_c.set(this.auth._key(),e)}return this.bypassAuthState||_c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tx(t,e){const n=rx(e),r=nx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nx(t){return gn(t._redirectPersistence)}function rx(t){return Wa(ZC,t.config.apiKey,t.name)}async function ix(t,e,n=!1){const r=fu(t),i=GC(r,e),o=await new ex(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=10*60*1e3;class ox{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ax(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sx&&this.cachedEventUids.clear(),this.cachedEventUids.has(ug(e))}saveEventToCache(e){this.cachedEventUids.add(ug(e)),this.lastProcessedEventTime=Date.now()}}function ug(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ax(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t,e={}){return ts(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cx=/^https?/;async function hx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lx(t);for(const n of e)try{if(dx(n))return}catch{}Yt(t,"unauthorized-domain")}function dx(t){const e=bh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cx.test(n))return!1;if(ux.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=new Mo(3e4,6e4);function cg(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function px(t){return new Promise((e,n)=>{var r,i,s;function o(){cg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cg(),n(an(t,"network-request-failed"))},timeout:fx.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)o();else{const a=KC("iframefcb");return ln()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},WC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function mx(t){return Ka=Ka||px(t),Ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=new Mo(5e3,15e3),yx="__/auth/iframe",vx="emulator/auth/iframe",wx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ex=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sx(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yf(e,vx):`https://${t.config.authDomain}/${yx}`,r={apiKey:e.apiKey,appName:t.name,v:es},i=Ex.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Lo(r).slice(1)}`}async function _x(t){const e=await mx(t),n=ln().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Sx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=ln().setTimeout(()=>{s(o)},gx.get());function l(){ln().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tx=500,kx=600,Cx="_blank",xx="http://localhost";class hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ax(t,e,n,r=Tx,i=kx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ix),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Be().toLowerCase();n&&(a=lw(u)?Cx:n),aw(u)&&(e=e||xx,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[y,v])=>`${f}${y}=${v},`,"");if(lC(u)&&a!=="_self")return Nx(e||"",a),new hg(null);const d=window.open(e||"",a,h);B(d,t,"popup-blocked");try{d.focus()}catch{}return new hg(d)}function Nx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="__/auth/handler",Px="emulator/auth/handler";function dg(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:i};if(e instanceof gw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Uo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Dx(t)}?${Lo(a).slice(1)}`}function Dx({config:t}){return t.emulator?yf(t,Px):`https://${t.authDomain}/${Rx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="webStorageSupport";class Ox{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iw,this._completeRedirectFn=ix}async _openPopup(e,n,r,i){var s;kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=dg(e,n,r,bh(),i);return Ax(e,o,_f())}async _openRedirect(e,n,r,i){return await this._originValidation(e),MC(dg(e,n,r,bh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _x(e),r=new ox(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ic];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fw()||wf()||du()}}const Lx=Ox;var fg="@firebase/auth",pg="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bx(t){Ur(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{B(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pw(t)},h=new hC(a,l,u);return qk(h,n),h})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new ar("auth-internal",e=>{const n=fu(e.getProvider("auth").getImmediate());return(r=>new Mx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(fg,pg,jx(t)),on(fg,pg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(t=pf()){const e=hu(t,"auth");return e.isInitialized()?e.getImmediate():Hk(t,{popupRedirectResolver:Lx,persistence:[HC,DC,Iw]})}bx("Browser");var $x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Tf=Tf||{},V=$x||self;function Pl(){}function $h(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Fx(t){return Object.prototype.hasOwnProperty.call(t,Tc)&&t[Tc]||(t[Tc]=++Bx)}var Tc="closure_uid_"+(1e9*Math.random()>>>0),Bx=0;function Vx(t,e,n){return t.call.apply(t.bind,arguments)}function zx(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ge(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ge=Vx:Ge=zx,Ge.apply(null,arguments)}function ka(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function mr(){this.s=this.s,this.o=this.o}var Hx=0;mr.prototype.s=!1;mr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Hx!=0)&&Fx(this)};mr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Pw=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function qx(t){e:{var e=jA;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function mg(t){return Array.prototype.concat.apply([],arguments)}function kf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Dl(t){return/^[\s\xa0]*$/.test(t)}var gg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ut(t,e){return t.indexOf(e)!=-1}function kc(t,e){return t<e?-1:t>e?1:0}var ct;e:{var yg=V.navigator;if(yg){var vg=yg.userAgent;if(vg){ct=vg;break e}}ct=""}function Cf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Dw(t){const e={};for(const n in t)e[n]=t[n];return e}var wg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ow(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<wg.length;s++)n=wg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function xf(t){return xf[" "](t),t}xf[" "]=Pl;function Wx(t){var e=Yx;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Kx=ut(ct,"Opera"),bi=ut(ct,"Trident")||ut(ct,"MSIE"),Lw=ut(ct,"Edge"),Fh=Lw||bi,Mw=ut(ct,"Gecko")&&!(ut(ct.toLowerCase(),"webkit")&&!ut(ct,"Edge"))&&!(ut(ct,"Trident")||ut(ct,"MSIE"))&&!ut(ct,"Edge"),Gx=ut(ct.toLowerCase(),"webkit")&&!ut(ct,"Edge");function jw(){var t=V.document;return t?t.documentMode:void 0}var Ol;e:{var Cc="",xc=function(){var t=ct;if(Mw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Lw)return/Edge\/([\d\.]+)/.exec(t);if(bi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Gx)return/WebKit\/(\S+)/.exec(t);if(Kx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xc&&(Cc=xc?xc[1]:""),bi){var Ac=jw();if(Ac!=null&&Ac>parseFloat(Cc)){Ol=String(Ac);break e}}Ol=Cc}var Yx={};function Qx(){return Wx(function(){let t=0;const e=gg(String(Ol)).split("."),n=gg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=kc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||kc(i[2].length==0,s[2].length==0)||kc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Bh;if(V.document&&bi){var Eg=jw();Bh=Eg||parseInt(Ol,10)||void 0}else Bh=void 0;var Xx=Bh,Jx=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",Pl,e),V.removeEventListener("test",Pl,e)}catch{}return t}();function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};function mo(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Mw){e:{try{xf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Zx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mo.Z.h.call(this)}}Ze(mo,it);var Zx={2:"touch",3:"pen",4:"mouse"};mo.prototype.h=function(){mo.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Bo="closure_listenable_"+(1e6*Math.random()|0),eA=0;function tA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++eA,this.ca=this.fa=!1}function gu(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function yu(t){this.src=t,this.g={},this.h=0}yu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zh(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new tA(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Vh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Rw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(gu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Af="closure_lm_"+(1e6*Math.random()|0),Nc={};function bw(t,e,n,r,i){if(r&&r.once)return $w(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)bw(t,e[s],n,r,i);return null}return n=Pf(n),t&&t[Bo]?t.N(e,n,Fo(r)?!!r.capture:!!r,i):Uw(t,e,n,!1,r,i)}function Uw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Fo(i)?!!i.capture:!!i,a=Rf(t);if(a||(t[Af]=a=new yu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=nA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Jx||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Bw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nA(){function t(n){return e.call(t.src,t.listener,n)}var e=rA;return t}function $w(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)$w(t,e[s],n,r,i);return null}return n=Pf(n),t&&t[Bo]?t.O(e,n,Fo(r)?!!r.capture:!!r,i):Uw(t,e,n,!0,r,i)}function Fw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Fw(t,e[s],n,r,i);else r=Fo(r)?!!r.capture:!!r,n=Pf(n),t&&t[Bo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zh(s,n,r,i),-1<n&&(gu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zh(e,n,r,i)),(n=-1<t?e[t]:null)&&Nf(n))}function Nf(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Bo])Vh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Bw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Rf(e))?(Vh(n,t),n.h==0&&(n.src=null,e[Af]=null)):gu(t)}}}function Bw(t){return t in Nc?Nc[t]:Nc[t]="on"+t}function rA(t,e){if(t.ca)t=!0;else{e=new mo(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Nf(t),t=n.call(r,e)}return t}function Rf(t){return t=t[Af],t instanceof yu?t:null}var Rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pf(t){return typeof t=="function"?t:(t[Rc]||(t[Rc]=function(e){return t.handleEvent(e)}),t[Rc])}function Ve(){mr.call(this),this.i=new yu(this),this.P=this,this.I=null}Ze(Ve,mr);Ve.prototype[Bo]=!0;Ve.prototype.removeEventListener=function(t,e,n,r){Fw(this,t,e,n,r)};function Ye(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var i=e;e=new it(r,t),Ow(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ca(o,r,!0,e)&&i}if(o=e.g=t,i=Ca(o,r,!0,e)&&i,i=Ca(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ca(o,r,!1,e)&&i}Ve.prototype.M=function(){if(Ve.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)gu(n[r]);delete t.g[e],t.h--}}this.I=null};Ve.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ve.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ca(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Vh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Df=V.JSON.stringify;function iA(){var t=zw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sA{constructor(){this.h=this.g=null}add(e,n){const r=Vw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Vw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new oA,t=>t.reset());class oA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function aA(t){V.setTimeout(()=>{throw t},0)}function Of(t,e){Hh||lA(),qh||(Hh(),qh=!0),zw.add(t,e)}var Hh;function lA(){var t=V.Promise.resolve(void 0);Hh=function(){t.then(uA)}}var qh=!1,zw=new sA;function uA(){for(var t;t=iA();){try{t.h.call(t.g)}catch(n){aA(n)}var e=Vw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qh=!1}function vu(t,e){Ve.call(this),this.h=t||1,this.g=e||V,this.j=Ge(this.kb,this),this.l=Date.now()}Ze(vu,Ve);L=vu.prototype;L.da=!1;L.S=null;L.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ye(this,"tick"),this.da&&(Lf(this),this.start()))}};L.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lf(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}L.M=function(){vu.Z.M.call(this),Lf(this),delete this.g};function Mf(t,e,n){if(typeof t=="function")n&&(t=Ge(t,n));else if(t&&typeof t.handleEvent=="function")t=Ge(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function Hw(t){t.g=Mf(()=>{t.g=null,t.i&&(t.i=!1,Hw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cA extends mr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hw(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function go(t){mr.call(this),this.h=t,this.g={}}Ze(go,mr);var Sg=[];function qw(t,e,n,r){Array.isArray(n)||(n&&(Sg[0]=n.toString()),n=Sg);for(var i=0;i<n.length;i++){var s=bw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ww(t){Cf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Nf(e)},t),t.g={}}go.prototype.M=function(){go.Z.M.call(this),Ww(this)};go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wu(){this.g=!0}wu.prototype.Aa=function(){this.g=!1};function hA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var d=h.split("_");o=2<=d.length&&d[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function dA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function vi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pA(t,n)+(r?" "+r:"")})}function fA(t,e){t.info(function(){return"TIMEOUT: "+e})}wu.prototype.info=function(){};function pA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Df(n)}catch{return e}}var Zr={},_g=null;function Eu(){return _g=_g||new Ve}Zr.Ma="serverreachability";function Kw(t){it.call(this,Zr.Ma,t)}Ze(Kw,it);function yo(t){const e=Eu();Ye(e,new Kw(e))}Zr.STAT_EVENT="statevent";function Gw(t,e){it.call(this,Zr.STAT_EVENT,t),this.stat=e}Ze(Gw,it);function ht(t){const e=Eu();Ye(e,new Gw(e,t))}Zr.Na="timingevent";function Yw(t,e){it.call(this,Zr.Na,t),this.size=e}Ze(Yw,it);function Vo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var Su={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Qw={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function jf(){}jf.prototype.h=null;function Ig(t){return t.h||(t.h=t.i())}function Xw(){}var zo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function bf(){it.call(this,"d")}Ze(bf,it);function Uf(){it.call(this,"c")}Ze(Uf,it);var Wh;function _u(){}Ze(_u,jf);_u.prototype.g=function(){return new XMLHttpRequest};_u.prototype.i=function(){return{}};Wh=new _u;function Ho(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new go(this),this.P=mA,t=Fh?125:void 0,this.W=new vu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Jw}function Jw(){this.i=null,this.g="",this.h=!1}var mA=45e3,Kh={},Ll={};L=Ho.prototype;L.setTimeout=function(t){this.P=t};function Gh(t,e,n){t.K=1,t.v=Tu(Cn(e)),t.s=n,t.U=!0,Zw(t,null)}function Zw(t,e){t.F=Date.now(),qo(t),t.A=Cn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),o1(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Jw,t.g=C1(t.l,n?e:null,!t.s),0<t.O&&(t.L=new cA(Ge(t.Ia,t,t.g),t.O)),qw(t.V,t.g,"readystatechange",t.gb),e=t.H?Dw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),yo(),hA(t.j,t.u,t.A,t.m,t.X,t.s)}L.gb=function(t){t=t.target;const e=this.L;e&&yn(t)==3?e.l():this.Ia(t)};L.Ia=function(t){try{if(t==this.g)e:{const h=yn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(h!=3||Fh||this.g&&(this.h.h||this.g.ga()||xg(this.g)))){this.I||h!=4||e==7||(e==8||0>=d?yo(3):yo(2)),Iu(this);var n=this.g.ba();this.N=n;t:if(e1(this)){var r=xg(this.g);t="";var i=r.length,s=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),Bs(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,dA(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Dl(a)){var u=a;break t}}u=null}if(n=u)vi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Yh(this,n);else{this.i=!1,this.o=3,ht(12),Tr(this),Bs(this);break e}}this.U?(t1(this,h,o),Fh&&this.i&&h==3&&(qw(this.V,this.W,"tick",this.fb),this.W.start())):(vi(this.j,this.m,o,null),Yh(this,o)),h==4&&Tr(this),this.i&&!this.I&&(h==4?_1(this.l,this):(this.i=!1,qo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),Tr(this),Bs(this)}}}catch{}finally{}};function e1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function t1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=gA(t,n),i==Ll){e==4&&(t.o=4,ht(14),r=!1),vi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Kh){t.o=4,ht(15),vi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vi(t.j,t.m,i,null),Yh(t,i);e1(t)&&i!=Ll&&i!=Kh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kf(e),e.L=!0,ht(11))):(vi(t.j,t.m,n,"[Invalid Chunked Response]"),Tr(t),Bs(t))}L.fb=function(){if(this.g){var t=yn(this.g),e=this.g.ga();this.C<e.length&&(Iu(this),t1(this,t,e),this.i&&t!=4&&qo(this))}};function gA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ll:(n=Number(e.substring(n,r)),isNaN(n)?Kh:(r+=1,r+n>e.length?Ll:(e=e.substr(r,n),t.C=r+n,e)))}L.cancel=function(){this.I=!0,Tr(this)};function qo(t){t.Y=Date.now()+t.P,n1(t,t.P)}function n1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vo(Ge(t.eb,t),e)}function Iu(t){t.B&&(V.clearTimeout(t.B),t.B=null)}L.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(fA(this.j,this.A),this.K!=2&&(yo(),ht(17)),Tr(this),this.o=2,Bs(this)):n1(this,this.Y-t)};function Bs(t){t.l.G==0||t.I||_1(t.l,t)}function Tr(t){Iu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Lf(t.W),Ww(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Yh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qh(n.i,t))){if(n.I=t.N,!t.J&&Qh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ul(n),xu(n);else break e;Wf(n),ht(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Vo(Ge(n.ab,n),6e3));if(1>=u1(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else kr(n,11)}else if((t.J||n.g==t)&&Ul(n),!Dl(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const h=u[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const d=u[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const v=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;!s.g&&(ut(v,"spdy")||ut(v,"quic")||ut(v,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Bf(s,s.h),s.h=null))}if(r.D){const E=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,me(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=k1(r,r.H?r.la:null,r.W),o.J){c1(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Iu(a),qo(a)),r.g=o}else E1(r);0<n.l.length&&Au(n)}else u[0]!="stop"&&u[0]!="close"||kr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?kr(n,7):qf(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}yo(4)}catch{}}function yA(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if($h(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $f(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if($h(t)||typeof t=="string")Pw(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if($h(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=yA(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function ns(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ns)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}L=ns.prototype;L.R=function(){Ff(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};L.T=function(){return Ff(this),this.g.concat()};function Ff(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];zr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],zr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}L.get=function(t,e){return zr(this.h,t)?this.h[t]:e};L.set=function(t,e){zr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};L.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function zr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var r1=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Hr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Hr){this.g=e!==void 0?e:t.g,Ml(this,t.j),this.s=t.s,jl(this,t.i),bl(this,t.m),this.l=t.l,e=t.h;var n=new vo;n.i=e.i,e.g&&(n.g=new ns(e.g),n.h=e.h),Tg(this,n),this.o=t.o}else t&&(n=String(t).match(r1))?(this.g=!!e,Ml(this,n[1]||"",!0),this.s=Vs(n[2]||""),jl(this,n[3]||"",!0),bl(this,n[4]),this.l=Vs(n[5]||"",!0),Tg(this,n[6]||"",!0),this.o=Vs(n[7]||"")):(this.g=!!e,this.h=new vo(null,this.g))}Hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,kg,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,kg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?IA:_A,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,kA)),t.join("")};function Cn(t){return new Hr(t)}function Ml(t,e,n){t.j=n?Vs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jl(t,e,n){t.i=n?Vs(e,!0):e}function bl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tg(t,e,n){e instanceof vo?(t.h=e,CA(t.h,t.g)):(n||(e=Ns(e,TA)),t.h=new vo(e,t.g))}function me(t,e,n){t.h.set(e,n)}function Tu(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wA(t){return t instanceof Hr?Cn(t):new Hr(t,void 0)}function EA(t,e,n,r){var i=new Hr(null,void 0);return t&&Ml(i,t),e&&jl(i,e),n&&bl(i,n),r&&(i.l=r),i}function Vs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,SA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function SA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kg=/[#\/\?@]/g,_A=/[#\?:]/g,IA=/[#\?]/g,TA=/[#\?@]/g,kA=/#/g;function vo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gr(t){t.g||(t.g=new ns,t.h=0,t.i&&vA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=vo.prototype;L.add=function(t,e){gr(this),this.i=null,t=rs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function i1(t,e){gr(t),e=rs(t,e),zr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,zr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ff(t)))}function s1(t,e){return gr(t),e=rs(t,e),zr(t.g.h,e)}L.forEach=function(t,e){gr(this),this.g.forEach(function(n,r){Pw(n,function(i){t.call(e,i,r,this)},this)},this)};L.T=function(){gr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};L.R=function(t){gr(this);var e=[];if(typeof t=="string")s1(this,t)&&(e=mg(e,this.g.get(rs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=mg(e,t[n])}return e};L.set=function(t,e){return gr(this),this.i=null,t=rs(this,t),s1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function o1(t,e,n){i1(t,e),0<n.length&&(t.i=null,t.g.set(rs(t,e),kf(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function rs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CA(t,e){e&&!t.j&&(gr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(i1(this,r),o1(this,i,n))},t)),t.j=e}var xA=class{constructor(t,e){this.h=t,this.g=e}};function a1(t){this.l=t||AA,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ea&&V.g.Ea()&&V.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var AA=10;function l1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function u1(t){return t.h?1:t.g?t.g.size:0}function Qh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bf(t,e){t.g?t.g.add(e):t.h=e}function c1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}a1.prototype.cancel=function(){if(this.i=h1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function h1(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return kf(t.i)}function Vf(){}Vf.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Vf.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function NA(){this.g=new Vf}function RA(t,e,n){const r=n||"";try{$f(t,function(i,s){let o=i;Fo(i)&&(o=Df(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function PA(t,e){const n=new wu;if(V.Image){const r=new Image;r.onload=ka(xa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ka(xa,n,r,"TestLoadImage: error",!1,e),r.onabort=ka(xa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ka(xa,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Wo(t){this.l=t.$b||null,this.j=t.ib||!1}Ze(Wo,jf);Wo.prototype.g=function(){return new ku(this.l,this.j)};Wo.prototype.i=function(t){return function(){return t}}({});function ku(t,e){Ve.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(ku,Ve);var zf=0;L=ku.prototype;L.open=function(t,e){if(this.readyState!=zf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wo(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ko(this)),this.readyState=zf};L.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wo(this)),this.g&&(this.readyState=3,wo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;d1(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function d1(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}L.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ko(this):wo(this),this.readyState==3&&d1(this)}};L.Ua=function(t){this.g&&(this.response=this.responseText=t,Ko(this))};L.Ta=function(t){this.g&&(this.response=t,Ko(this))};L.ha=function(){this.g&&Ko(this)};function Ko(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wo(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ku.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var DA=V.JSON.parse;function Le(t){Ve.call(this),this.headers=new ns,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=f1,this.K=this.L=!1}Ze(Le,Ve);var f1="",OA=/^https?$/i,LA=["POST","PUT"];L=Le.prototype;L.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wh.g(),this.C=this.u?Ig(this.u):Ig(Wh),this.g.onreadystatechange=Ge(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Cg(this,s);return}t=n||"";const i=new ns(this.headers);r&&$f(r,function(s,o){i.set(o,s)}),r=qx(i.T()),n=V.FormData&&t instanceof V.FormData,!(0<=Rw(LA,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{g1(this),0<this.B&&((this.K=MA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ge(this.pa,this)):this.A=Mf(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Cg(this,s)}};function MA(t){return bi&&Qx()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function jA(t){return t.toLowerCase()=="content-type"}L.pa=function(){typeof Tf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function Cg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,p1(t),Cu(t)}function p1(t){t.D||(t.D=!0,Ye(t,"complete"),Ye(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),Cu(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cu(this,!0)),Le.Z.M.call(this)};L.Fa=function(){this.s||(this.F||this.v||this.l?m1(this):this.cb())};L.cb=function(){m1(this)};function m1(t){if(t.h&&typeof Tf<"u"&&(!t.C[1]||yn(t)!=4||t.ba()!=2)){if(t.v&&yn(t)==4)Mf(t.Fa,0,t);else if(Ye(t,"readystatechange"),yn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(r1)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!OA.test(i?i.toLowerCase():"")}n=r}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var o=2<yn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",p1(t)}}finally{Cu(t)}}}}function Cu(t,e){if(t.g){g1(t);const n=t.g,r=t.C[0]?Pl:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=r}catch{}}}function g1(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function yn(t){return t.g?t.g.readyState:0}L.ba=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}};L.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),DA(e)}};function xg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case f1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Da=function(){return this.m};L.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function bA(t){let e="";return Cf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function Es(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function y1(t){this.za=0,this.l=[],this.h=new wu,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Es("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Es("baseRetryDelayMs",5e3,t),this.$a=Es("retryDelaySeedMs",1e4,t),this.Ya=Es("forwardChannelMaxRetries",2,t),this.ra=Es("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new a1(t&&t.concurrentRequestLimit),this.Ca=new NA,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}L=y1.prototype;L.ma=8;L.G=1;function qf(t){if(v1(t),t.G==3){var e=t.V++,n=Cn(t.F);me(n,"SID",t.J),me(n,"RID",e),me(n,"TYPE","terminate"),Go(t,n),e=new Ho(t,t.h,e,void 0),e.K=2,e.v=Tu(Cn(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=C1(e.l,null),e.g.ea(e.v)),e.F=Date.now(),qo(e)}T1(t)}L.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function xu(t){t.g&&(Kf(t),t.g.cancel(),t.g=null)}function v1(t){xu(t),t.u&&(V.clearTimeout(t.u),t.u=null),Ul(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function Pc(t,e){t.l.push(new xA(t.Za++,e)),t.G==3&&Au(t)}function Au(t){l1(t.i)||t.m||(t.m=!0,Of(t.Ha,t),t.C=0)}function UA(t,e){return u1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Vo(Ge(t.Ha,t,e),I1(t,t.C)),t.C++,!0)}L.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ho(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Dw(s),Ow(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=w1(this,i,e),n=Cn(this.F),me(n,"RID",t),me(n,"CVER",22),this.D&&me(n,"X-HTTP-Session-Id",this.D),Go(this,n),this.o&&s&&Hf(n,this.o,s),Bf(this.i,i),this.Ra&&me(n,"TYPE","init"),this.ja?(me(n,"$req",e),me(n,"SID","null"),i.$=!0,Gh(i,n,null)):Gh(i,n,e),this.G=2}}else this.G==3&&(t?Ag(this,t):this.l.length==0||l1(this.i)||Ag(this))};function Ag(t,e){var n;e?n=e.m:n=t.V++;const r=Cn(t.F);me(r,"SID",t.J),me(r,"RID",n),me(r,"AID",t.U),Go(t,r),t.o&&t.s&&Hf(r,t.o,t.s),n=new Ho(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=w1(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Bf(t.i,n),Gh(n,r,e)}function Go(t,e){t.j&&$f({},function(n,r){me(e,r,n)})}function w1(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ge(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const h=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{RA(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function E1(t){t.g||t.u||(t.Y=1,Of(t.Ga,t),t.A=0)}function Wf(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Vo(Ge(t.Ga,t),I1(t,t.A)),t.A++,!0)}L.Ga=function(){if(this.u=null,S1(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Vo(Ge(this.bb,this),t)}};L.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ht(10),xu(this),S1(this))};function Kf(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function S1(t){t.g=new Ho(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Cn(t.oa);me(e,"RID","rpc"),me(e,"SID",t.J),me(e,"CI",t.N?"0":"1"),me(e,"AID",t.U),Go(t,e),me(e,"TYPE","xmlhttp"),t.o&&t.s&&Hf(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Tu(Cn(e)),n.s=null,n.U=!0,Zw(n,t)}L.ab=function(){this.v!=null&&(this.v=null,xu(this),Wf(this),ht(19))};function Ul(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function _1(t,e){var n=null;if(t.g==e){Ul(t),Kf(t),t.g=null;var r=2}else if(Qh(t.i,e))n=e.D,c1(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Eu(),Ye(r,new Yw(r,n)),Au(t)}else E1(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&UA(t,e)||r==2&&Wf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:kr(t,5);break;case 4:kr(t,10);break;case 3:kr(t,6);break;default:kr(t,2)}}}function I1(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function kr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ge(t.jb,t);n||(n=new Hr("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||Ml(n,"https"),Tu(n)),PA(n.toString(),r)}else ht(2);t.G=0,t.j&&t.j.va(e),T1(t),v1(t)}L.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ht(2)):(this.h.info("Failed to ping google.com"),ht(1))};function T1(t){t.G=0,t.I=-1,t.j&&((h1(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,kf(t.l),t.l.length=0),t.j.ua())}function k1(t,e,n){let r=wA(n);if(r.i!="")e&&jl(r,e+"."+r.i),bl(r,r.m);else{const i=V.location;r=EA(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Cf(t.aa,function(i,s){me(r,s,i)}),e=t.D,n=t.sa,e&&n&&me(r,e,n),me(r,"VER",t.ma),Go(t,r),r}function C1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Le(new Wo({ib:!0})):new Le(t.qa),e.L=t.H,e}function x1(){}L=x1.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Oa=function(){};function $l(){if(bi&&!(10<=Number(Xx)))throw Error("Environmental error: no available transport.")}$l.prototype.g=function(t,e){return new Dt(t,e)};function Dt(t,e){Ve.call(this),this.g=new y1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Dl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Dl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new is(this)}Ze(Dt,Ve);Dt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Of(Ge(t.hb,t,e))),ht(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=k1(t,null,t.W),Au(t)};Dt.prototype.close=function(){qf(this.g)};Dt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Pc(this.g,e)}else this.v?(e={},e.__data__=Df(t),Pc(this.g,e)):Pc(this.g,t)};Dt.prototype.M=function(){this.g.j=null,delete this.j,qf(this.g),delete this.g,Dt.Z.M.call(this)};function A1(t){bf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(A1,bf);function N1(){Uf.call(this),this.status=1}Ze(N1,Uf);function is(t){this.g=t}Ze(is,x1);is.prototype.xa=function(){Ye(this.g,"a")};is.prototype.wa=function(t){Ye(this.g,new A1(t))};is.prototype.va=function(t){Ye(this.g,new N1)};is.prototype.ua=function(){Ye(this.g,"b")};$l.prototype.createWebChannel=$l.prototype.g;Dt.prototype.send=Dt.prototype.u;Dt.prototype.open=Dt.prototype.m;Dt.prototype.close=Dt.prototype.close;Su.NO_ERROR=0;Su.TIMEOUT=8;Su.HTTP_ERROR=6;Qw.COMPLETE="complete";Xw.EventType=zo;zo.OPEN="a";zo.CLOSE="b";zo.ERROR="c";zo.MESSAGE="d";Ve.prototype.listen=Ve.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.La;Le.prototype.getLastErrorCode=Le.prototype.Da;Le.prototype.getStatus=Le.prototype.ba;Le.prototype.getResponseJson=Le.prototype.Qa;Le.prototype.getResponseText=Le.prototype.ga;Le.prototype.send=Le.prototype.ea;var $A=function(){return new $l},FA=function(){return Eu()},Dc=Su,BA=Qw,VA=Zr,Ng={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},zA=Wo,Aa=Xw,HA=Le;const Rg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss="9.6.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new df("@firebase/firestore");function Pg(){return qr.logLevel}function b(t,...e){if(qr.logLevel<=ee.DEBUG){const n=e.map(Gf);qr.debug(`Firestore (${ss}): ${t}`,...n)}}function lr(t,...e){if(qr.logLevel<=ee.ERROR){const n=e.map(Gf);qr.error(`Firestore (${ss}): ${t}`,...n)}}function Dg(t,...e){if(qr.logLevel<=ee.WARN){const n=e.map(Gf);qr.warn(`Firestore (${ss}): ${t}`,...n)}}function Gf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: `+t;throw lr(e),new Error(e)}function le(t,e){t||H()}function q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends pr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class KA{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new qA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new gt(e)}}class GA{constructor(e,n,r){this.type="FirstParty",this.user=gt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class YA{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new GA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XA{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.p=n.token,new QA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yf.A=-1;class R1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=JA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Ui(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new st(0,0))}static max(){return new G(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function P1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Eo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Eo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends Eo{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const ZA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Eo{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return ZA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.fields=e,e.sort(vt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ui(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Je(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const eN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(le(!!t),typeof t=="string"){let e=0;const n=eN.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $i(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function O1(t){const e=t.mapValue.fields.__previous_value__;return D1(e)?O1(e):e}function _o(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){return t==null}function Fl(t){return t===0&&1/t==-1/0}function nN(t){return typeof t=="number"&&Number.isInteger(t)&&!Fl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ce.fromString(e))}static fromName(e){return new $(ce.fromString(e).popFirst(5))}static empty(){return new $(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ce(e.slice()))}}function Wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?D1(t)?4:rN(t)?9:10:H()}function un(t,e){if(t===e)return!0;const n=Wr(t);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _o(t).isEqual(_o(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ur(r.timestampValue),o=ur(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return $i(r.bytesValue).isEqual($i(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Re(r.geoPointValue.latitude)===Re(i.geoPointValue.latitude)&&Re(r.geoPointValue.longitude)===Re(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Re(r.integerValue)===Re(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Re(r.doubleValue),o=Re(i.doubleValue);return s===o?Fl(s)===Fl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ui(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Og(s)!==Og(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!un(s[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Io(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function Bi(t,e){if(t===e)return 0;const n=Wr(t),r=Wr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Re(i.integerValue||i.doubleValue),a=Re(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Lg(t.timestampValue,e.timestampValue);case 4:return Lg(_o(t),_o(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,s){const o=$i(i),a=$i(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ne(o[l],a[l]);if(u!==0)return u}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ne(Re(i.latitude),Re(s.latitude));return o!==0?o:ne(Re(i.longitude),Re(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Bi(o[l],a[l]);if(u)return u}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const d=ne(a[h],u[h]);if(d!==0)return d;const f=Bi(o[a[h]],l[u[h]]);if(f!==0)return f}return ne(a.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function Lg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=ur(t),r=ur(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Ai(t){return Xh(t)}function Xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ur(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$i(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Xh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Xh(r.fields[a])}`;return s+"}"}(t.mapValue):H();var e,n}function Mg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jh(t){return!!t&&"integerValue"in t}function Qf(t){return!!t&&"arrayValue"in t}function jg(t){return!!t&&"nullValue"in t}function bg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ga(t){return!!t&&"mapValue"in t}function zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=zs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ga(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ei(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(zs(this.value))}}function L1(t){const e=[];return ei(t.fields,(n,r)=>{const i=new vt([n]);if(Ga(r)){const s=L1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new So(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new rt(e,0,G.min(),G.min(),xt.empty(),0)}static newFoundDocument(e,n,r){return new rt(e,1,n,G.min(),r,0)}static newNoDocument(e,n){return new rt(e,2,n,G.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,G.min(),xt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function iN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new Vi(i,$.empty(),e)}function sN(t){return new Vi(t.readTime,t.key,-1)}class Vi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vi(G.min(),$.empty(),-1)}static max(){return new Vi(G.max(),$.empty(),-1)}}function oN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function Ug(t,e=null,n=[],r=[],i=null,s=null,o=null){return new aN(t,e,n,r,i,s,o)}function Xf(t){const e=q(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ai(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),os(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ai(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ai(r)).join(",")),e.P=n}return e.P}function lN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ai(r.value)}`;var r}).join(", ")}]`),os(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ai(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ai(n)).join(",")),`Target(${e})`}function Jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!gN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!un(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fg(t.startAt,e.startAt)&&Fg(t.endAt,e.endAt)}function Zh(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class dt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new uN(e,n,r):n==="array-contains"?new dN(e,r):n==="in"?new fN(e,r):n==="not-in"?new pN(e,r):n==="array-contains-any"?new mN(e,r):new dt(e,n,r)}static V(e,n,r){return n==="in"?new cN(e,r):new hN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Bi(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.v(Bi(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class uN extends dt{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.v(n)}}class cN extends dt{constructor(e,n){super(e,"in",n),this.keys=M1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hN extends dt{constructor(e,n){super(e,"not-in",n),this.keys=M1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function M1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class dN extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qf(n)&&Io(n.arrayValue,this.value)}}class fN extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Io(this.value.arrayValue,n)}}class pN extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Io(this.value.arrayValue,n)}}class mN extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Io(this.value.arrayValue,r))}}class Bl{constructor(e,n){this.position=e,this.inclusive=n}}class Hs{constructor(e,n="asc"){this.field=e,this.dir=n}}function gN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function $g(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Bi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function yN(t,e,n,r,i,s,o,a){return new Yo(t,e,n,r,i,s,o,a)}function Zf(t){return new Yo(t)}function Ya(t){return!os(t.limit)&&t.limitType==="F"}function Vl(t){return!os(t.limit)&&t.limitType==="L"}function j1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function b1(t){for(const e of t.filters)if(e.S())return e.field;return null}function U1(t){return t.collectionGroup!==null}function To(t){const e=q(t);if(e.D===null){e.D=[];const n=b1(e),r=j1(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Hs(n)),e.D.push(new Hs(vt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Hs(vt.keyField(),s))}}}return e.D}function Kr(t){const e=q(t);if(!e.C)if(e.limitType==="F")e.C=Ug(e.path,e.collectionGroup,To(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of To(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Hs(s.field,o))}const r=e.endAt?new Bl(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new Bl(e.startAt.position,!e.startAt.inclusive):null;e.C=Ug(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function vN(t,e,n){return new Yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nu(t,e){return Jf(Kr(t),Kr(e))&&t.limitType===e.limitType}function $1(t){return`${Xf(Kr(t))}|lt:${t.limitType}`}function ed(t){return`Query(target=${lN(Kr(t))}; limitType=${t.limitType})`}function ep(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=$g(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,To(n),r)||n.endAt&&!function(i,s,o){const a=$g(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,To(n),r))}(t,e)}function wN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function F1(t){return(e,n)=>{let r=!1;for(const i of To(t)){const s=EN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EN(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Bi(a,l):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fl(e)?"-0":e}}function V1(t){return{integerValue:""+t}}function SN(t,e){return nN(e)?V1(e):B1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this._=void 0}}function _N(t,e,n){return t instanceof zl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ko?H1(t,e):t instanceof Co?q1(t,e):function(r,i){const s=z1(r,i),o=Bg(s)+Bg(r.k);return Jh(s)&&Jh(r.k)?V1(o):B1(r.M,o)}(t,e)}function IN(t,e,n){return t instanceof ko?H1(t,e):t instanceof Co?q1(t,e):n}function z1(t,e){return t instanceof Hl?Jh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class zl extends Ru{}class ko extends Ru{constructor(e){super(),this.elements=e}}function H1(t,e){const n=W1(e);for(const r of t.elements)n.some(i=>un(i,r))||n.push(r);return{arrayValue:{values:n}}}class Co extends Ru{constructor(e){super(),this.elements=e}}function q1(t,e){let n=W1(e);for(const r of t.elements)n=n.filter(i=>!un(i,r));return{arrayValue:{values:n}}}class Hl extends Ru{constructor(e,n){super(),this.M=e,this.k=n}}function Bg(t){return Re(t.integerValue||t.doubleValue)}function W1(t){return Qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ko&&r instanceof ko||n instanceof Co&&r instanceof Co?Ui(n.elements,r.elements,un):n instanceof Hl&&r instanceof Hl?un(n.k,r.k):n instanceof zl&&r instanceof zl}(t.transform,e.transform)}class kN{constructor(e,n){this.version=e,this.transformResults=n}}class nr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nr}static exists(e){return new nr(void 0,e)}static updateTime(e){return new nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pu{}function CN(t,e,n){t instanceof Du?function(r,i,s){const o=r.value.clone(),a=Hg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof as?function(r,i,s){if(!Qa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Hg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(K1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function td(t,e,n){t instanceof Du?function(r,i,s){if(!Qa(r.precondition,i))return;const o=r.value.clone(),a=qg(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(zg(i),o).setHasLocalMutations()}(t,e,n):t instanceof as?function(r,i,s){if(!Qa(r.precondition,i))return;const o=qg(r.fieldTransforms,s,i),a=i.data;a.setAll(K1(r)),a.setAll(o),i.convertToFoundDocument(zg(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Qa(r.precondition,i)&&i.convertToNoDocument(G.min())}(t,e)}function xN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=z1(r.transform,i||null);s!=null&&(n==null&&(n=xt.empty()),n.set(r.field,s))}return n||null}function Vg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ui(n,r,(i,s)=>TN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function zg(t){return t.isFoundDocument()?t.version:G.min()}class Du extends Pu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class as extends Pu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function K1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hg(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,IN(o,a,n[i]))}return r}function qg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_N(s,o,e))}return r}class G1 extends Pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class AN extends Pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,X;function RN(t){switch(t){default:return H();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Y1(t){if(t===void 0)return lr("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ne.OK:return T.OK;case Ne.CANCELLED:return T.CANCELLED;case Ne.UNKNOWN:return T.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return T.INTERNAL;case Ne.UNAVAILABLE:return T.UNAVAILABLE;case Ne.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ne.NOT_FOUND:return T.NOT_FOUND;case Ne.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ne.ABORTED:return T.ABORTED;case Ne.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ne.DATA_LOSS:return T.DATA_LOSS;default:return H()}}(X=Ne||(Ne={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ei(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return P1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Na(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Na(this.root,e,this.comparator,!1)}getReverseIterator(){return new Na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Na(this.root,e,this.comparator,!0)}}class Na{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,r,i){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wg(this.data.getIterator())}getIteratorFrom(e){return new Wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=new ze($.comparator);function Gr(){return PN}const DN=new ze($.comparator);function nd(){return DN}function Oc(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const ON=new ze($.comparator),LN=new Qe($.comparator);function de(...t){let e=LN;for(const n of t)e=e.add(n);return e}const MN=new Qe(ne);function Q1(){return MN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Qo.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ou(G.min(),r,Q1(),Gr(),de())}}class Qo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Qo(Je.EMPTY_BYTE_STRING,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n,r,i){this.O=e,this.removedTargetIds=n,this.key=r,this.F=i}}class X1{constructor(e,n){this.targetId=e,this.$=n}}class J1{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Kg{constructor(){this.B=0,this.L=Yg(),this.U=Je.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=de(),n=de(),r=de();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new Qo(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Yg()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class jN{constructor(e){this.nt=e,this.st=new Map,this.it=Gr(),this.rt=Gg(),this.ot=new Qe(ne)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,r=e.$.count,i=this.wt(n);if(i){const s=i.target;if(Zh(s))if(r===0){const o=new $(s.path);this.ct(n,o,rt.newNoDocument(o,G.min()))}else le(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&Zh(a.target)){const l=new $(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.ct(o,l,rt.newNoDocument(l,e))}s.j&&(n.set(o,s.H()),s.J())}});let r=de();this.rt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.it.forEach((s,o)=>o.setReadTime(e));const i=new Ou(e,n,this.ot,this.it,r);return this.it=Gr(),this.rt=Gg(),this.ot=new Qe(ne),i}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Kg,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Qe(ne),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Kg),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Gg(){return new ze($.comparator)}function Yg(){return new ze($.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),UN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class $N{constructor(e,n){this.databaseId=e,this.N=n}}function ql(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Z1(t,e){return t.N?e.toBase64():e.toUint8Array()}function FN(t,e){return ql(t,e.toTimestamp())}function En(t){return le(!!t),G.fromTimestamp(function(e){const n=ur(e);return new st(n.seconds,n.nanos)}(t))}function tp(t,e){return function(n){return new ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function eE(t){const e=ce.fromString(t);return le(rE(e)),e}function rd(t,e){return tp(t.databaseId,e.path)}function Lc(t,e){const n=eE(e);if(n.get(1)!==t.databaseId.projectId)throw new j(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(tE(n))}function id(t,e){return tp(t.databaseId,e)}function BN(t){const e=eE(t);return e.length===4?ce.emptyPath():tE(e)}function sd(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tE(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qg(t,e,n){return{name:rd(t,e),fields:n.value.mapValue.fields}}function VN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.N?(le(u===void 0||typeof u=="string"),Je.fromBase64String(u||"")):(le(u===void 0||u instanceof Uint8Array),Je.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:Y1(l.code);return new j(u,l.message||"")}(o);n=new J1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lc(t,r.document.name),s=En(r.document.updateTime),o=new xt({mapValue:{fields:r.document.fields}}),a=rt.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Xa(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lc(t,r.document),s=r.readTime?En(r.readTime):G.min(),o=rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lc(t,r.document),s=r.removedTargetIds||[];n=new Xa([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new NN(i),o=r.targetId;n=new X1(o,s)}}return n}function zN(t,e){let n;if(e instanceof Du)n={update:Qg(t,e.key,e.value)};else if(e instanceof G1)n={delete:rd(t,e.key)};else if(e instanceof as)n={update:Qg(t,e.key,e.data),updateMask:ZN(e.fieldMask)};else{if(!(e instanceof AN))return H();n={verify:rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof zl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ko)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Co)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Hl)return{fieldPath:s.field.canonicalString(),increment:o.k};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:FN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(t,e.precondition)),n}function HN(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?En(r.updateTime):En(i);return s.isEqual(G.min())&&(s=En(i)),new kN(s,r.transformResults||[])}(n,e))):[]}function qN(t,e){return{documents:[id(t,e.path)]}}function WN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=id(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=id(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(h=>function(d){if(d.op==="=="){if(bg(d.value))return{unaryFilter:{field:ri(d.field),op:"IS_NAN"}};if(jg(d.value))return{unaryFilter:{field:ri(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(bg(d.value))return{unaryFilter:{field:ri(d.field),op:"IS_NOT_NAN"}};if(jg(d.value))return{unaryFilter:{field:ri(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(d.field),op:QN(d.op),value:d.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ri(h.field),direction:YN(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.N||os(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function KN(t){let e=BN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=nE(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(d){return new Hs(wi(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(h)));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,os(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Bl(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Bl(f,d)}(n.endAt)),yN(e,i,o,s,a,"F",l,u)}function GN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return H()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function nE(t){return t?t.unaryFilter!==void 0?[JN(t)]:t.fieldFilter!==void 0?[XN(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>nE(e)).reduce((e,n)=>e.concat(n)):H():[]}function YN(t){return bN[t]}function QN(t){return UN[t]}function ri(t){return{fieldPath:t.canonicalString()}}function wi(t){return vt.fromServerFormat(t.fieldPath)}function XN(t){return dt.create(wi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}function JN(t){switch(t.unaryFilter.op){case"IS_NAN":const e=wi(t.unaryFilter.field);return dt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=wi(t.unaryFilter.field);return dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=wi(t.unaryFilter.field);return dt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=wi(t.unaryFilter.field);return dt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return H()}}function ZN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function Xo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&CN(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&td(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&td(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(G.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Ui(this.mutations,e.mutations,(n,r)=>Vg(n,r))&&Ui(this.baseMutations,e.baseMutations,(n,r)=>Vg(n,r))}}class np{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length);let i=ON;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new np(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,r,i,s=G.min(),o=G.min(),a=Je.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.Jt=e}}function sR(t){const e=KN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vN(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.qe=new aR}addToCollectionParentIndex(e,n){return this.qe.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getFieldIndex(e,n){return A.resolve(null)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class aR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qe(ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new zi(0)}static yn(){return new zi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==eR)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}qs(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(e,n.path):U1(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new $(n)).next(r=>{let i=nd();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ws(e,n,r){const i=n.collectionGroup;let s=nd();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(u,h){return new Yo(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.zs(e,l,r).next(u=>{u.forEach((h,d)=>{s=s.insert(h,d)})})}).next(()=>s))}zs(e,n,r){let i;return this.ds.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const l=a.key;let u=i.get(l);u==null&&(u=rt.newInvalidDocument(l),i=i.insert(l,u)),td(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(l))}}).next(()=>(i.forEach((s,o)=>{ep(n,o)||(i=i.remove(s))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=i}static Ys(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{Xs(e){this.Zs=e}Qs(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(G.min())?this.ti(e,n):this.Zs.Ks(e,i).next(s=>{const o=this.ei(n,s);return(Ya(n)||Vl(n))&&this.ni(n.limitType,o,i,r)?this.ti(e,n):(Pg()<=ee.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ed(n)),this.Zs.Qs(e,n,iN(r,-1)).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}ei(e,n){let r=new Qe(F1(e));return n.forEach((i,s)=>{ep(e,s)&&(r=r.add(s))}),r}ni(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ti(e,n){return Pg()<=ee.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",ed(n)),this.Zs.Qs(e,n,Vi.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n,r,i){this.persistence=e,this.si=n,this.M=i,this.ii=new ze(ne),this.ri=new ls(s=>Xf(s),Jf),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new uR(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function dR(t,e,n,r){return new hR(t,e,n,r)}async function iE(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.Bs.getAllMutationBatches(r).next(s=>(i=s,n.ai(e),n.Bs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=de();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.ci.Ks(r,l).next(u=>({hi:u,removedBatchIds:o,addedBatchIds:a}))})})}function fR(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const h=l.batch,d=h.keys();let f=A.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(a,y)).next(v=>{const E=l.docVersions.get(y);le(E!==null),v.version.compareTo(E)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),f.next(()=>o.Bs.removeMutationBatch(a,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.ci.Ks(r,i))})}function sE(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function pR(t,e){const n=q(t),r=e.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.fs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.fs.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Je.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(y,v,E){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(n.fs.updateTargetData(s,f))});let l=Gr();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(mR(s,o,e.documentUpdates).next(u=>{l=u})),!r.isEqual(G.min())){const u=n.fs.getLastRemoteSnapshotVersion(s).next(h=>n.fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.ci.Gs(s,l)).next(()=>l)}).then(s=>(n.ii=i,s))}function mR(t,e,n){let r=de();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=Gr();return n.forEach((o,a)=>{const l=i.get(o);a.isNoDocument()&&a.version.isEqual(G.min())?(e.removeEntry(o,a.readTime),s=s.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),s=s.insert(o,a)):b("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),s})}function gR(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function yR(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.fs.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.fs.allocateTargetId(r).next(o=>(i=new Rr(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ii.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ii=n.ii.insert(r.targetId,r),n.ri.set(e,r.targetId)),r})}async function od(t,e,n){const r=q(t),i=r.ii.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xo(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ii=r.ii.remove(e),r.ri.delete(i.target)}function Xg(t,e,n){const r=q(t);let i=G.min(),s=de();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const h=q(a),d=h.ri.get(u);return d!==void 0?A.resolve(h.ii.get(d)):h.fs.getTargetData(l,u)}(r,o,Kr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.si.Qs(o,e,n?i:G.min(),n?s:de())).next(a=>(vR(r,wN(e),a),{documents:a,li:s})))}function vR(t,e,n){let r=G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.oi.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return A.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var r;return this.wi.set(n.id,{id:(r=n).id,version:r.version,createTime:En(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(r){return{name:r.name,query:sR(r.bundledQuery),readTime:En(r.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.overlays=new ze($.comparator),this.gi=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Xt(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.gi.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.gi.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Oc(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ze((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=Oc(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Oc(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return A.resolve(a)}Xt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);if(i!==null){const o=this.gi.get(i.largestBatchId).delete(r.key);this.gi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rR(n,r));let s=this.gi.get(n);s===void 0&&(s=de(),this.gi.set(n,s)),this.gi.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.yi=new Qe(Ue.pi),this.Ii=new Qe(Ue.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.yi=this.yi.add(r),this.Ii=this.Ii.add(r)}Ei(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ai(new Ue(e,n))}Ri(e,n){e.forEach(r=>this.removeReference(r,n))}Pi(e){const n=new $(new ce([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.Ii.forEachInRange([r,i],o=>{this.Ai(o),s.push(o.key)}),s}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new $(new ce([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=de();return this.Ii.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.yi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return $.comparator(e.key,n.key)||ne(e.vi,n.vi)}static Ti(e,n){return ne(e.vi,n.vi)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new Qe(Ue.pi)}checkEmpty(e){return A.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,i){const s=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new nR(s,n,r,i);this.Bs.push(o);for(const a of i)this.Di=this.Di.add(new Ue(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.xi(r),s=i<0?0:i;return A.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return A.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Di.forEachInRange([r,i],o=>{const a=this.Ci(o.vi);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(ne);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Di.forEachInRange([s,o],a=>{r=r.add(a.vi)})}),A.resolve(this.Ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new $(s),0);let a=new Qe(ne);return this.Di.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.vi)),!0)},o),A.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(r=>{const i=this.Ci(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.ki(n.batchId,"removed")===0),this.Bs.shift();let r=this.Di;return A.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Di=r})}_n(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Di.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Bs.length,A.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.Mi=e,this.docs=new ze($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mi(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Gr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),A.resolve(r)}getAllFromCollection(e,n,r){let i=Gr();const s=new $(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||oN(sN(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,i){H()}Oi(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new IR(this)}getSize(e){return A.resolve(this.size)}}class IR extends lR{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(e,i)):this.Kn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.persistence=e,this.Fi=new ls(n=>Xf(n),Jf),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.$i=0,this.Bi=new ip,this.targetCount=0,this.Li=zi.gn()}forEachTarget(e,n){return this.Fi.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),A.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Tn(n),A.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fi.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Bi.Ei(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Bi.Ri(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Bi.Vi(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Bi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n){this.Ui={},this.overlays={},this.es=new Yf(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new TR(this),this.indexManager=new oR,this.ds=function(r){return new _R(r)}(r=>this.referenceDelegate.qi(r)),this.M=new iR(n),this._s=new wR(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ER,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ui[e.toKey()];return r||(r=new SR(n,this.referenceDelegate),this.Ui[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new CR(this.es.next());return this.referenceDelegate.Ki(),r(i).next(s=>this.referenceDelegate.Gi(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Qi(e,n){return A.or(Object.values(this.Ui).map(r=>()=>r.containsKey(e,n)))}}class CR extends tR{constructor(e){super(),this.currentSequenceNumber=e}}class sp{constructor(e){this.persistence=e,this.ji=new ip,this.Wi=null}static zi(e){return new sp(e)}get Hi(){if(this.Wi)return this.Wi;throw H()}addReference(e,n,r){return this.ji.addReference(r,n),this.Hi.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.ji.removeReference(r,n),this.Hi.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),A.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(i=>this.Hi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hi,r=>{const i=$.fromPath(r);return this.Ji(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(r=>{r?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return A.or([()=>A.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class Jg{constructor(){this.activeTargetIds=Q1()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xR{constructor(){this.$r=new Jg,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,r){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new Jg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{Lr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,r,i,s){const o=this.uo(e,n);b("RestConnection","Sending: ",o,r);const a={};return this.ao(a,i,s),this.co(e,o,a,r).then(l=>(b("RestConnection","Received: ",l),l),l=>{throw Dg("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ho(e,n,r,i,s){return this.oo(e,n,r,i,s)}ao(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ss,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}uo(e,n){const r=NR[e];return`${this.io}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new HA;a.listenOnce(BA.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Dc.NO_ERROR:const u=a.getResponseJson();b("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Dc.TIMEOUT:b("Connection",'RPC "'+e+'" timed out'),o(new j(T.DEADLINE_EXCEEDED,"Request time out"));break;case Dc.HTTP_ERROR:const h=a.getStatus();if(b("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const f=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(v)>=0?v:T.UNKNOWN}(d.status);o(new j(f,d.message))}else o(new j(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(T.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{b("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}lo(e,n,r){const i=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=$A(),o=FA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new zA({})),this.ao(a.initMessageHeaders,n,r),q0()||K0()||OT()||G0()||LT()||W0()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");b("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let h=!1,d=!1;const f=new RR({Wr:v=>{d?b("Connection","Not sending because WebChannel is closed:",v):(h||(b("Connection","Opening WebChannel transport."),u.open(),h=!0),b("Connection","WebChannel sending:",v),u.send(v))},zr:()=>u.close()}),y=(v,E,_)=>{v.listen(E,g=>{try{_(g)}catch(p){setTimeout(()=>{throw p},0)}})};return y(u,Aa.EventType.OPEN,()=>{d||b("Connection","WebChannel transport opened.")}),y(u,Aa.EventType.CLOSE,()=>{d||(d=!0,b("Connection","WebChannel transport closed"),f.no())}),y(u,Aa.EventType.ERROR,v=>{d||(d=!0,Dg("Connection","WebChannel transport errored:",v),f.no(new j(T.UNAVAILABLE,"The operation could not be completed")))}),y(u,Aa.EventType.MESSAGE,v=>{var E;if(!d){const _=v.data[0];le(!!_);const g=_,p=g.error||((E=g[0])===null||E===void 0?void 0:E.error);if(p){b("Connection","WebChannel received error:",p);const m=p.status;let S=function(I){const x=Ne[I];if(x!==void 0)return Y1(x)}(m),k=p.message;S===void 0&&(S=T.INTERNAL,k="Unknown error status: "+m+" with message "+p.message),d=!0,f.no(new j(S,k)),u.close()}else b("Connection","WebChannel received:",_),f.so(_)}}),y(o,VA.STAT_EVENT,v=>{v.stat===Ng.PROXY?b("Connection","Detected buffering proxy"):v.stat===Ng.NOPROXY&&b("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.eo()},0),f}}function Mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return new $N(t,!0)}class oE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Yn=e,this.timerId=n,this.fo=r,this._o=i,this.wo=s,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),r=Math.max(0,Date.now()-this.po),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r,i,s,o,a,l){this.Yn=e,this.Ro=r,this.Po=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new oE(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.qo(r,i)},r=>{e(()=>{const i=new j(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ko(i)})})}qo(e,n){const r=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{r(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(i=>{r(()=>this.Ko(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DR extends aE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.M=s}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=VN(this.M,e),r=function(i){if(!("targetChange"in i))return G.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?G.min():s.readTime?En(s.readTime):G.min()}(e);return this.listener.Qo(n,r)}jo(e){const n={};n.database=sd(this.M),n.addTarget=function(i,s){let o;const a=s.target;return o=Zh(a)?{documents:qN(i,a)}:{query:WN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Z1(i,s.resumeToken):s.snapshotVersion.compareTo(G.min())>0&&(o.readTime=ql(i,s.snapshotVersion.toTimestamp())),o}(this.M,e);const r=GN(this.M,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=sd(this.M),n.removeTarget=e,this.Fo(n)}}class OR extends aE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.M=s,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=HN(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.Yo(r,n)}return le(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=sd(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zN(this.M,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=i,this.tu=!1}eu(){if(this.tu)throw new j(T.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.oo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(T.UNKNOWN,i.toString())})}ho(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ho(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(T.UNKNOWN,i.toString())})}terminate(){this.tu=!0}}class MR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(lr(n),this.iu=!1):b("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=s,this._u.Lr(o=>{r.enqueueAndForget(async()=>{ti(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=q(a);l.fu.add(4),await Zo(l),l.wu.set("Unknown"),l.fu.delete(4),await Mu(l)}(this))})}),this.wu=new MR(r,i)}}async function Mu(t){if(ti(t))for(const e of t.du)await e(!0)}async function Zo(t){for(const e of t.du)await e(!1)}function lE(t,e){const n=q(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),lp(n)?ap(n):us(n).xo()&&op(n,e))}function uE(t,e){const n=q(t),r=us(n);n.lu.delete(e),r.xo()&&cE(n,e),n.lu.size===0&&(r.xo()?r.Mo():ti(n)&&n.wu.set("Unknown"))}function op(t,e){t.mu.Z(e.targetId),us(t).jo(e)}function cE(t,e){t.mu.Z(e),us(t).Wo(e)}function ap(t){t.mu=new jN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),us(t).start(),t.wu.ru()}function lp(t){return ti(t)&&!us(t).Co()&&t.lu.size>0}function ti(t){return q(t).fu.size===0}function hE(t){t.mu=void 0}async function bR(t){t.lu.forEach((e,n)=>{op(t,e)})}async function UR(t,e){hE(t),lp(t)?(t.wu.au(e),ap(t)):t.wu.set("Unknown")}async function $R(t,e,n){if(t.wu.set("Online"),e instanceof J1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.lu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.lu.delete(o),r.mu.removeTarget(o))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wl(t,r)}else if(e instanceof Xa?t.mu.ut(e):e instanceof X1?t.mu._t(e):t.mu.ht(e),!n.isEqual(G.min()))try{const r=await sE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.mu.yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.lu.get(l);u&&i.lu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.lu.get(a);if(!l)return;i.lu.set(a,l.withResumeToken(Je.EMPTY_BYTE_STRING,l.snapshotVersion)),cE(i,a);const u=new Rr(l.target,a,1,l.sequenceNumber);op(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await Wl(t,r)}}async function Wl(t,e,n){if(!Xo(e))throw e;t.fu.add(1),await Zo(t),t.wu.set("Offline"),n||(n=()=>sE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Mu(t)})}function dE(t,e){return e().catch(n=>Wl(t,n,e))}async function ju(t){const e=q(t),n=cr(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;FR(e);)try{const i=await gR(e.localStore,r);if(i===null){e.hu.length===0&&n.Mo();break}r=i.batchId,BR(e,i)}catch(i){await Wl(e,i)}fE(e)&&pE(e)}function FR(t){return ti(t)&&t.hu.length<10}function BR(t,e){t.hu.push(e);const n=cr(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function fE(t){return ti(t)&&!cr(t).Co()&&t.hu.length>0}function pE(t){cr(t).start()}async function VR(t){cr(t).Zo()}async function zR(t){const e=cr(t);for(const n of t.hu)e.Jo(n.mutations)}async function HR(t,e,n){const r=t.hu.shift(),i=np.from(r,e,n);await dE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ju(t)}async function qR(t,e){e&&cr(t).Ho&&await async function(n,r){if(i=r.code,RN(i)&&i!==T.ABORTED){const s=n.hu.shift();cr(n).ko(),await dE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ju(n)}var i}(t,e),fE(t)&&pE(t)}async function ey(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=ti(n);n.fu.add(3),await Zo(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Mu(n)}async function WR(t,e){const n=q(t);e?(n.fu.delete(2),await Mu(n)):e||(n.fu.add(2),await Zo(n),n.wu.set("Unknown"))}function us(t){return t.gu||(t.gu=function(e,n,r){const i=q(e);return i.eu(),new DR(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Hr:bR.bind(null,t),Yr:UR.bind(null,t),Qo:$R.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),lp(t)?ap(t):t.wu.set("Unknown")):(await t.gu.stop(),hE(t))})),t.gu}function cr(t){return t.yu||(t.yu=function(e,n,r){const i=q(e);return i.eu(),new OR(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Hr:VR.bind(null,t),Yr:qR.bind(null,t),Xo:zR.bind(null,t),Yo:HR.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await ju(t)):(await t.yu.stop(),t.hu.length>0&&(b("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new up(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cp(t,e){if(lr("AsyncQueue",`${e}: ${t}`),Xo(t))return new j(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=nd(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Ni(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ni)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ni;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.pu=new ze($.comparator)}track(e){const n=e.doc.key,r=this.pu.get(n);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(n,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(n):e.type===1&&r.type===2?this.pu=this.pu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):H():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hi{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Hi(e,n,Ni.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.Tu=void 0,this.listeners=[]}}class GR{constructor(){this.queries=new ls(e=>$1(e),Nu),this.onlineState="Unknown",this.Eu=new Set}}async function YR(t,e){const n=q(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new KR),i)try{s.Tu=await n.onListen(r)}catch(o){const a=cp(o,`Initialization of query '${ed(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Au(n.onlineState),s.Tu&&e.Ru(s.Tu)&&hp(n)}async function QR(t,e){const n=q(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function XR(t,e){const n=q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Ru(i)&&(r=!0);o.Tu=i}}r&&hp(n)}function JR(t,e,n){const r=q(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function hp(t){t.Eu.forEach(e=>{e.next()})}class ZR{constructor(e,n,r){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}Ru(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Cu||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=Hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.key=e}}class gE{constructor(e){this.key=e}}class e2{constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=de(),this.mutatedKeys=de(),this.Uu=F1(e),this.qu=new Ni(this.Uu)}get Ku(){return this.$u}Gu(e,n){const r=n?n.Qu:new ty,i=n?n.qu:this.qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=Ya(this.query)&&i.size===this.query.limit?i.last():null,u=Vl(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const f=i.get(h),y=ep(this.query,d)?d:null,v=!!f&&this.mutatedKeys.has(f.key),E=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let _=!1;f&&y?f.data.isEqual(y.data)?v!==E&&(r.track({type:3,doc:y}),_=!0):this.ju(f,y)||(r.track({type:2,doc:y}),_=!0,(l&&this.Uu(y,l)>0||u&&this.Uu(y,u)<0)&&(a=!0)):!f&&y?(r.track({type:0,doc:y}),_=!0):f&&!y&&(r.track({type:1,doc:f}),_=!0,(l||u)&&(a=!0)),_&&(y?(o=o.add(y),s=E?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),Ya(this.query)||Vl(this.query))for(;o.size>this.query.limit;){const h=Ya(this.query)?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{qu:o,Qu:r,ni:a,mutatedKeys:s}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const s=e.Qu.Iu();s.sort((u,h)=>function(d,f){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return y(d)-y(f)}(u.type,h.type)||this.Uu(u.doc,h.doc)),this.Wu(r);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,l=a!==this.Bu;return this.Bu=a,s.length!==0||l?{snapshot:new Hi(this.query,e.qu,i,s,e.mutatedKeys,a===0,l,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new ty,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=de(),this.qu.forEach(r=>{this.Ju(r.key)&&(this.Lu=this.Lu.add(r.key))});const n=[];return e.forEach(r=>{this.Lu.has(r)||n.push(new gE(r))}),this.Lu.forEach(r=>{e.has(r)||n.push(new mE(r))}),n}Yu(e){this.$u=e.li,this.Lu=de();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return Hi.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class t2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class n2{constructor(e){this.key=e,this.Zu=!1}}class r2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new ls(a=>$1(a),Nu),this.na=new Map,this.sa=new Set,this.ia=new ze($.comparator),this.ra=new Map,this.oa=new ip,this.ua={},this.aa=new Map,this.ca=zi.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function i2(t,e){const n=p2(t);let r,i;const s=n.ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Xu();else{const o=await yR(n.localStore,Kr(e));n.isPrimaryClient&&lE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await s2(n,e,r,a==="current")}return i}async function s2(t,e,n,r){t.la=(h,d,f)=>async function(y,v,E,_){let g=v.view.Gu(E);g.ni&&(g=await Xg(y.localStore,v.query,!1).then(({documents:S})=>v.view.Gu(S,g)));const p=_&&_.targetChanges.get(v.targetId),m=v.view.applyChanges(g,y.isPrimaryClient,p);return ry(y,v.targetId,m.Hu),m.snapshot}(t,h,d,f);const i=await Xg(t.localStore,e,!0),s=new e2(e,i.li),o=s.Gu(i.documents),a=Qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);ry(t,n,l.Hu);const u=new t2(e,n,s);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),l.snapshot}async function o2(t,e){const n=q(t),r=n.ea.get(e),i=n.na.get(r.targetId);if(i.length>1)return n.na.set(r.targetId,i.filter(s=>!Nu(s,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await od(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),uE(n.remoteStore,r.targetId),ad(n,r.targetId)}).catch(Jo)):(ad(n,r.targetId),await od(n.localStore,r.targetId,!0))}async function a2(t,e,n){const r=m2(t);try{const i=await function(s,o){const a=q(s),l=st.now(),u=o.reduce((d,f)=>d.add(f.key),de());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>a.ci.Ks(d,u).next(f=>{h=f;const y=[];for(const v of o){const E=xN(v,h.get(v.key));E!=null&&y.push(new as(v.key,E,L1(E.value.mapValue),nr.exists(!0)))}return a.Bs.addMutationBatch(d,l,y,o)})).then(d=>(d.applyToLocalDocumentSet(h),{batchId:d.batchId,changes:h}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ua[s.currentUser.toKey()];l||(l=new ze(ne)),l=l.insert(o,a),s.ua[s.currentUser.toKey()]=l}(r,i.batchId,n),await ea(r,i.changes),await ju(r.remoteStore)}catch(i){const s=cp(i,"Failed to persist write");n.reject(s)}}async function yE(t,e){const n=q(t);try{const r=await pR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ra.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Zu=!0:i.modifiedDocuments.size>0?le(o.Zu):i.removedDocuments.size>0&&(le(o.Zu),o.Zu=!1))}),await ea(n,r,e)}catch(r){await Jo(r)}}function ny(t,e,n){const r=q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ea.forEach((s,o)=>{const a=o.view.Au(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=q(s);a.onlineState=o;let l=!1;a.queries.forEach((u,h)=>{for(const d of h.listeners)d.Au(o)&&(l=!0)}),l&&hp(a)}(r.eventManager,e),i.length&&r.ta.Qo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function l2(t,e,n){const r=q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ra.get(e),s=i&&i.key;if(s){let o=new ze($.comparator);o=o.insert(s,rt.newNoDocument(s,G.min()));const a=de().add(s),l=new Ou(G.min(),new Map,new Qe(ne),o,a);await yE(r,l),r.ia=r.ia.remove(s),r.ra.delete(e),dp(r)}else await od(r.localStore,e,!1).then(()=>ad(r,e,n)).catch(Jo)}async function u2(t,e){const n=q(t),r=e.batch.batchId;try{const i=await fR(n.localStore,e);wE(n,r,null),vE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ea(n,i)}catch(i){await Jo(i)}}async function c2(t,e,n){const r=q(t);try{const i=await function(s,o){const a=q(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.Bs.lookupMutationBatch(l,o).next(h=>(le(h!==null),u=h.keys(),a.Bs.removeMutationBatch(l,h))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.ci.Ks(l,u))})}(r.localStore,e);wE(r,e,n),vE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ea(r,i)}catch(i){await Jo(i)}}function vE(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function wE(t,e,n){const r=q(t);let i=r.ua[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ua[r.currentUser.toKey()]=i}}function ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.na.get(e))t.ea.delete(r),n&&t.ta.fa(r,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(r=>{t.oa.containsKey(r)||EE(t,r)})}function EE(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(uE(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),dp(t))}function ry(t,e,n){for(const r of n)r instanceof mE?(t.oa.addReference(r.key,e),h2(t,r)):r instanceof gE?(b("SyncEngine","Document no longer in limbo: "+r.key),t.oa.removeReference(r.key,e),t.oa.containsKey(r.key)||EE(t,r.key)):H()}function h2(t,e){const n=e.key,r=n.path.canonicalString();t.ia.get(n)||t.sa.has(r)||(b("SyncEngine","New document in limbo: "+n),t.sa.add(r),dp(t))}function dp(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new $(ce.fromString(e)),r=t.ca.next();t.ra.set(r,new n2(n)),t.ia=t.ia.insert(n,r),lE(t.remoteStore,new Rr(Kr(Zf(n.path)),r,2,Yf.A))}}async function ea(t,e,n){const r=q(t),i=[],s=[],o=[];r.ea.isEmpty()||(r.ea.forEach((a,l)=>{o.push(r.la(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const h=rp.Ys(l.targetId,u);s.push(h)}}))}),await Promise.all(o),r.ta.Qo(i),await async function(a,l){const u=q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(l,d=>A.forEach(d.Hs,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>A.forEach(d.Js,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Xo(h))throw h;b("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ii.get(d),y=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(y);u.ii=u.ii.insert(d,v)}}}(r.localStore,s))}async function d2(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await iE(n.localStore,e);n.currentUser=e,function(i,s){i.aa.forEach(o=>{o.forEach(a=>{a.reject(new j(T.CANCELLED,s))})}),i.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ea(n,r.hi)}}function f2(t,e){const n=q(t),r=n.ra.get(e);if(r&&r.Zu)return de().add(r.key);{let i=de();const s=n.na.get(e);if(!s)return i;for(const o of s){const a=n.ea.get(o);i=i.unionWith(a.view.Ku)}return i}}function p2(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=f2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=l2.bind(null,e),e.ta.Qo=XR.bind(null,e.eventManager),e.ta.fa=JR.bind(null,e.eventManager),e}function m2(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=u2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=c2.bind(null,e),e}class g2{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Lu(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return dR(this.persistence,new cR,e.initialUser,this.M)}wa(e){return new kR(sp.zi,this.M)}_a(e){return new xR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class y2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ny(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=d2.bind(null,this.syncEngine),await WR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new GR}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new PR(i));var i;return function(s,o,a,l){return new LR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>ny(this.syncEngine,a,0),o=Zg.vt()?new Zg:new AR,new jR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const h=new r2(r,i,s,o,a,l);return u&&(h.ha=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);b("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Zo(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=R1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function E2(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function S2(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _2(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>ey(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>ey(e.remoteStore,s)),t.onlineComponents=e}async function _2(t){return t.offlineComponents||(b("FirestoreClient","Using default OfflineComponentProvider"),await E2(t,new g2)),t.offlineComponents}async function SE(t){return t.onlineComponents||(b("FirestoreClient","Using default OnlineComponentProvider"),await S2(t,new y2)),t.onlineComponents}function I2(t){return SE(t).then(e=>e.syncEngine)}async function iy(t){const e=await SE(t),n=e.eventManager;return n.onListen=i2.bind(null,e.syncEngine),n.onUnlisten=o2.bind(null,e.syncEngine),n}const sy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t,e,n){if(!n)throw new j(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function T2(t,e,n,r){if(e===!0&&r===!0)throw new j(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function oy(t){if(!$.isDocumentKey(t))throw new j(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ay(t){if($.isDocumentKey(t))throw new j(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function Pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bu(t);throw new j(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,T2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ly({}),this._settingsFrozen=!1,e instanceof Fi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new j(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(i.options.projectId)}(e))}get app(){if(!this._app)throw new j(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ly(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new WA;switch(n.type){case"gapi":const r=n.client;return le(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new YA(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new j(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sy.get(e);n&&(b("ComponentProvider","Removing Datastore"),sy.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class ta{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ta(this.firestore,e,this._query)}}class rr extends ta{constructor(e,n,r){super(e,n,Zf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new $(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function ie(t,e,...n){if(t=ge(t),_E("collection","path",e),t instanceof fp){const r=ce.fromString(e,...n);return ay(r),new rr(t,null,r)}{if(!(t instanceof It||t instanceof rr))throw new j(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return ay(r),new rr(t.firestore,null,r)}}function We(t,e,...n){if(t=ge(t),arguments.length===1&&(e=R1.R()),_E("doc","path",e),t instanceof fp){const r=ce.fromString(e,...n);return oy(r),new It(t,null,new $(r))}{if(!(t instanceof It||t instanceof rr))throw new j(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return oy(r),new It(t.firestore,t instanceof rr?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new oE(this,"async_queue_retry"),this.qa=()=>{const n=Mc();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=Mc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new Nr;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!Xo(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(r=>{this.$a=r,this.Ba=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw lr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ba=!1,r))));return this.ka=n,n}enqueueAfterDelay(e,n,r){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const i=up.createAndSchedule(this,e,n,r,s=>this.ja(s));return this.Fa.push(i),i}Ka(){this.$a&&H()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}function uy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qi extends fp{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new k2,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||TE(this),this._firestoreClient.terminate()}}function C2(t=pf()){return hu(t,"firestore").getImmediate()}function IE(t){return t._firestoreClient||TE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new tN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new w2(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(Je.fromBase64String(e))}catch(n){throw new j(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wi(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=/^__.*__$/;class A2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new Du(e,this.data,n,this.fieldTransforms)}}class kE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new as(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function CE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class gp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ya(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new gp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.nc(e),i}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.Ya(),i}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return Kl(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(CE(this.Xa)&&x2.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class N2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||Lu(e)}ac(e,n,r,i=!1){return new gp({Xa:e,methodName:n,uc:r,path:vt.emptyPath(),ec:!1,oc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function yp(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new N2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function R2(t,e,n,r,i,s={}){const o=t.ac(s.merge||s.mergeFields?2:0,e,n,i);vp("Data must be an object, but it was:",o,r);const a=xE(r,o);let l,u;if(s.merge)l=new So(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const f=ld(e,d,n);if(!o.contains(f))throw new j(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);NE(h,f)||h.push(f)}l=new So(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new A2(new xt(a),l,u)}class $u extends pp{_toFieldTransform(e){if(e.Xa!==2)throw e.Xa===1?e.rc(`${this._methodName}() can only appear at the top level of your update data`):e.rc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $u}}function P2(t,e,n,r){const i=t.ac(1,e,n);vp("Data must be an object, but it was:",i,r);const s=[],o=xt.empty();ei(r,(l,u)=>{const h=wp(e,l,n);u=ge(u);const d=i.sc(h);if(u instanceof $u)s.push(h);else{const f=na(u,d);f!=null&&(s.push(h),o.set(h,f))}});const a=new So(s);return new kE(o,a,i.fieldTransforms)}function D2(t,e,n,r,i,s){const o=t.ac(1,e,n),a=[ld(e,r,n)],l=[i];if(s.length%2!=0)throw new j(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(ld(e,s[f])),l.push(s[f+1]);const u=[],h=xt.empty();for(let f=a.length-1;f>=0;--f)if(!NE(u,a[f])){const y=a[f];let v=l[f];v=ge(v);const E=o.sc(y);if(v instanceof $u)u.push(y);else{const _=na(v,E);_!=null&&(u.push(y),h.set(y,_))}}const d=new So(u);return new kE(h,d,o.fieldTransforms)}function O2(t,e,n,r=!1){return na(n,t.ac(r?4:3,e))}function na(t,e){if(AE(t=ge(t)))return vp("Unsupported field value:",e,t),xE(t,e);if(t instanceof pp)return function(n,r){if(!CE(r.Xa))throw r.rc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.rc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=na(o,r.ic(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ge(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return SN(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=st.fromDate(n);return{timestampValue:ql(r.M,i)}}if(n instanceof st){const i=new st(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ql(r.M,i)}}if(n instanceof mp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Wi)return{bytesValue:Z1(r.M,n._byteString)};if(n instanceof It){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.rc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.rc(`Unsupported field value: ${bu(n)}`)}(t,e)}function xE(t,e){const n={};return P1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(t,(r,i)=>{const s=na(i,e.tc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof mp||t instanceof Wi||t instanceof It||t instanceof pp)}function vp(t,e,n){if(!AE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=bu(n);throw r==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function ld(t,e,n){if((e=ge(e))instanceof Uu)return e._internalPath;if(typeof e=="string")return wp(t,e);throw Kl("Field path arguments must be of type string or ",t,!1,void 0,n)}const L2=new RegExp("[~\\*/\\[\\]]");function wp(t,e,n){if(e.search(L2)>=0)throw Kl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uu(...e.split("."))._internalPath}catch{throw Kl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(T.INVALID_ARGUMENT,a+t+l)}function NE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new M2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ep("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class M2 extends RE{data(){return super.data()}}function Ep(t,e){return typeof e=="string"?wp(t,e):e instanceof Uu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PE extends RE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ep("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ja extends PE{data(e={}){return super.data(e)}}class j2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Rs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new Rs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ja(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Rs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ja(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Rs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:b2(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function b2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){if(Vl(t)&&t.explicitOrderBy.length===0)throw new j(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $2{}function De(t,...e){for(const n of e)t=n._apply(t);return t}class F2 extends $2{constructor(e,n,r){super(),this.lc=e,this.fc=n,this.dc=r,this.type="where"}_apply(e){const n=yp(e.firestore),r=function(i,s,o,a,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new j(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){hy(h,u);const y=[];for(const v of h)y.push(cy(a,i,v));d={arrayValue:{values:y}}}else d=cy(a,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||hy(h,u),d=O2(o,s,h,u==="in"||u==="not-in");const f=dt.create(l,u,d);return function(y,v){if(v.S()){const _=b1(y);if(_!==null&&!_.isEqual(v.field))throw new j(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${_.toString()}' and '${v.field.toString()}'`);const g=j1(y);g!==null&&B2(y,v.field,g)}const E=function(_,g){for(const p of _.filters)if(g.indexOf(p.op)>=0)return p.op;return null}(y,function(_){switch(_){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(E!==null)throw E===v.op?new j(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new j(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${E.toString()}' filters.`)}(i,f),f}(e._query,"where",n,e.firestore._databaseId,this.lc,this.fc,this.dc);return new ta(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Yo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function ve(t,e,n){const r=e,i=Ep("where",t);return new F2(i,r,n)}function cy(t,e,n){if(typeof(n=ge(n))=="string"){if(n==="")throw new j(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!U1(e)&&n.indexOf("/")!==-1)throw new j(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ce.fromString(n));if(!$.isDocumentKey(r))throw new j(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mg(t,new $(r))}if(n instanceof It)return Mg(t,n._key);throw new j(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bu(n)}.`)}function hy(t,e){if(!Array.isArray(t)||t.length===0)throw new j(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new j(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function B2(t,e,n){if(!n.isEqual(e))throw new j(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{convertValue(e,n="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){const r={};return ei(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new mp(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=O1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_o(e));default:return null}}convertTimestamp(e){const n=ur(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);le(rE(r));const i=new Fi(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||lr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class DE extends V2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function Jt(t,e,n,...r){t=Pr(t,It);const i=Pr(t.firestore,qi),s=yp(i);let o;return o=typeof(e=ge(e))=="string"||e instanceof Uu?D2(s,"updateDoc",t._key,e,n,r):P2(s,"updateDoc",t._key,e),Sp(i,[o.toMutation(t._key,nr.exists(!0))])}function dy(t){return Sp(Pr(t.firestore,qi),[new G1(t._key,nr.none())])}function Ra(t,e){const n=Pr(t.firestore,qi),r=We(t),i=z2(t.converter,e);return Sp(n,[R2(yp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,nr.exists(!1))]).then(()=>r)}function Oe(t,...e){var n,r,i;t=ge(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||uy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(uy(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,h;if(t instanceof It)u=Pr(t.firestore,qi),h=Zf(t._key.path),l={next:d=>{e[o]&&e[o](H2(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Pr(t,ta);u=Pr(d.firestore,qi),h=d._query;const f=new DE(u);l={next:y=>{e[o]&&e[o](new j2(u,f,d,y))},error:e[o+1],complete:e[o+2]},U2(t._query)}return function(d,f,y,v){const E=new v2(v),_=new ZR(f,E,y);return d.asyncQueue.enqueueAndForget(async()=>YR(await iy(d),_)),()=>{E.Ia(),d.asyncQueue.enqueueAndForget(async()=>QR(await iy(d),_))}}(IE(u),h,a,l)}function Sp(t,e){return function(n,r){const i=new Nr;return n.asyncQueue.enqueueAndForget(async()=>a2(await I2(n),r,i)),i.promise}(IE(t),e)}function H2(t,e,n){const r=n.docs.get(e._key),i=new DE(t);return new PE(t,i,e._key,r,new Rs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ss=n})(es),Ur(new ar("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new qi(i,new KA(n.getProvider("auth-internal")),new XA(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),on(Rg,"3.4.8",t),on(Rg,"3.4.8","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="firebasestorage.googleapis.com",LE="storageBucket",q2=2*60*1e3,W2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends pr{constructor(e,n){super(jc(e),`Firebase Storage: ${n} (${jc(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}_codeEquals(e){return jc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function jc(t){return"storage/"+t}function _p(){const t="An unknown error occurred, please check the error payload for server response.";return new Te("unknown",t)}function K2(t){return new Te("object-not-found","Object '"+t+"' does not exist.")}function G2(t){return new Te("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Y2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te("unauthenticated",t)}function Q2(){return new Te("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function X2(t){return new Te("unauthorized","User does not have permission to access '"+t+"'.")}function J2(){return new Te("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Z2(){return new Te("canceled","User canceled the upload/download.")}function eP(t){return new Te("invalid-url","Invalid URL '"+t+"'.")}function tP(t){return new Te("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function nP(){return new Te("no-default-bucket","No default bucket found. Did you set the '"+LE+"' property when initializing the app?")}function rP(){return new Te("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function iP(){return new Te("no-download-url","The given file does not have any download URLs.")}function ud(t){return new Te("invalid-argument",t)}function ME(){return new Te("app-deleted","The Firebase app was deleted.")}function sP(t){return new Te("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qs(t,e){return new Te("invalid-format","String does not match format '"+t+"': "+e)}function Ss(t){throw new Te("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nt.makeFromUrl(e,n)}catch{return new Nt(e,"")}if(r.path==="")return r;throw tP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",y=new RegExp(`^https?://${d}/${h}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},E=n===OE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",g=new RegExp(`^https?://${E}/${i}/${_}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:y,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<m.length;S++){const k=m[S],I=k.regex.exec(e);if(I){const x=I[k.indices.bucket];let P=I[k.indices.path];P||(P=""),r=new Nt(x,P),k.postModify(r);break}}if(r==null)throw eP(e);return r}}class oP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(..._){u||(u=!0,e.apply(null,_))}function d(_){i=setTimeout(()=>{i=null,t(y,l())},_)}function f(){s&&clearTimeout(s)}function y(_,...g){if(u){f();return}if(_){f(),h.call(null,_,...g);return}if(l()||o){f(),h.call(null,_,...g);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,d(m)}let v=!1;function E(_){v||(v=!0,f(),!u&&(i!==null?(_||(a=2),clearTimeout(i),d(0)):_||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function lP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t){return t!==void 0}function cP(t){return typeof t=="object"&&!Array.isArray(t)}function Ip(t){return typeof t=="string"||t instanceof String}function fy(t){return Tp()&&t instanceof Blob}function Tp(){return typeof Blob<"u"}function py(t,e,n,r){if(r<e)throw ud(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ud(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Dr||(Dr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n,r,i,s,o,a,l,u,h,d){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,y)=>{this.resolve_=f,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Pa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Dr.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const h=s.getErrorCode()===Dr.ABORT;r(!1,new Pa(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Pa(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());uP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=_p();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ME():Z2();o(l)}else{const l=J2();o(l)}};this.canceled_?n(!1,new Pa(!1,null,!0)):this.backoffId_=aP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Pa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function dP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gP(t,e,n,r,i,s){const o=jE(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return pP(l,e),dP(l,n),fP(l,s),mP(l,r),new hP(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vP(...t){const e=yP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Tp())return new Blob(t);throw new Te("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function wP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bc{constructor(e,n){this.data=e,this.contentType=n||null}}function SP(t,e){switch(t){case nn.RAW:return new bc(bE(e));case nn.BASE64:case nn.BASE64URL:return new bc(UE(t,e));case nn.DATA_URL:return new bc(IP(e),TP(e))}throw _p()}function bE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _P(t){let e;try{e=decodeURIComponent(t)}catch{throw qs(nn.DATA_URL,"Malformed data URL.")}return bE(e)}function UE(t,e){switch(t){case nn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw qs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case nn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw qs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=EP(e)}catch{throw qs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class $E{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw qs(nn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function IP(t){const e=new $E(t);return e.base64?UE(nn.BASE64,e.rest):_P(e.rest)}function TP(t){return new $E(t).contentType}function kP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){let r=0,i="";fy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(fy(this.data_)){const r=this.data_,i=wP(r,e,n);return i===null?null:new zn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new zn(r,!0)}}static getBlob(...e){if(Tp()){const n=e.map(r=>r instanceof zn?r.data_:r);return new zn(vP.apply(null,n))}else{const n=e.map(o=>Ip(o)?SP(nn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new zn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t){let e;try{e=JSON.parse(t)}catch{return null}return cP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function BE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t,e){return e}class at{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||AP}}let Da=null;function NP(t){return!Ip(t)||t.length<2?t:BE(t)}function VE(){if(Da)return Da;const t=[];t.push(new at("bucket")),t.push(new at("generation")),t.push(new at("metageneration")),t.push(new at("name","fullPath",!0));function e(s,o){return NP(o)}const n=new at("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new at("size");return i.xform=r,t.push(i),t.push(new at("timeCreated")),t.push(new at("updated")),t.push(new at("md5Hash",null,!0)),t.push(new at("cacheControl",null,!0)),t.push(new at("contentDisposition",null,!0)),t.push(new at("contentEncoding",null,!0)),t.push(new at("contentLanguage",null,!0)),t.push(new at("contentType",null,!0)),t.push(new at("metadata","customMetadata",!0)),Da=t,Da}function RP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Nt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function PP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return RP(r,t),r}function zE(t,e,n){const r=FE(e);return r===null?null:PP(t,r,n)}function DP(t,e,n,r){const i=FE(e);if(i===null||!Ip(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),y=kp(f,n,r),v=jE({alt:"media",token:u});return y+v})[0]}function OP(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class HE{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t){if(!t)throw _p()}function LP(t,e){function n(r,i){const s=zE(t,i,e);return qE(s!==null),s}return n}function MP(t,e){function n(r,i){const s=zE(t,i,e);return qE(s!==null),DP(s,i,t.host,t._protocol)}return n}function WE(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Q2():i=Y2():n.getStatus()===402?i=G2(t.bucket):n.getStatus()===403?i=X2(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function jP(t){const e=WE(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=K2(t.path)),s.serverResponse=i.serverResponse,s}return n}function bP(t,e,n){const r=e.fullServerUrl(),i=kp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new HE(i,s,MP(t,n),o);return a.errorHandler=jP(e),a}function UP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $P(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=UP(null,e)),r}function FP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let S=0;S<2;S++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=$P(e,r,i),h=OP(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",y=zn.getBlob(d,r,f);if(y===null)throw rP();const v={name:u.fullPath},E=kp(s,t.host,t._protocol),_="POST",g=t.maxUploadRetryTime,p=new HE(E,_,LP(t,n),g);return p.urlParams=v,p.headers=o,p.body=y.uploadData(),p.errorHandler=WE(e),p}class BP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Dr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Dr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Dr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ss("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ss("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ss("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ss("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ss("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VP extends BP{initXhr(){this.xhr_.responseType="text"}}function KE(){return new VP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this._service=e,n instanceof Nt?this._location=n:this._location=Nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yr(e,n)}get root(){const e=new Nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BE(this._location.path)}get storage(){return this._service}get parent(){const e=CP(this._location.path);if(e===null)return null;const n=new Nt(this._location.bucket,e);return new Yr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sP(e)}}function zP(t,e,n){t._throwIfRoot("uploadBytes");const r=FP(t.storage,t._location,VE(),new zn(e,!0),n);return t.storage.makeRequestWithTokens(r,KE).then(i=>({metadata:i,ref:t}))}function HP(t){t._throwIfRoot("getDownloadURL");const e=bP(t.storage,t._location,VE());return t.storage.makeRequestWithTokens(e,KE).then(n=>{if(n===null)throw iP();return n})}function qP(t,e){const n=xP(t._location.path,e),r=new Nt(t._location.bucket,n);return new Yr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t){return/^[A-Za-z]+:\/\//.test(t)}function KP(t,e){return new Yr(t,e)}function GE(t,e){if(t instanceof Cp){const n=t;if(n._bucket==null)throw nP();const r=new Yr(n,n._bucket);return e!=null?GE(r,e):r}else return e!==void 0?qP(t,e):t}function GP(t,e){if(e&&WP(e)){if(t instanceof Cp)return KP(t,e);throw ud("To use ref(service, url), the first argument must be a Storage instance.")}else return GE(t,e)}function my(t,e){const n=e==null?void 0:e[LE];return n==null?null:Nt.makeFromBucketSpec(n,t)}class Cp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=OE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=q2,this._maxUploadRetryTime=W2,this._requests=new Set,i!=null?this._bucket=Nt.makeFromBucketSpec(i,this._host):this._bucket=my(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nt.makeFromBucketSpec(this._url,e):this._bucket=my(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){py("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){py("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yr(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new oP(ME());{const s=gP(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const gy="@firebase/storage",yy="0.9.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="storage";function YP(t,e,n){return t=ge(t),zP(t,e,n)}function QP(t){return t=ge(t),HP(t)}function XP(t,e){return t=ge(t),GP(t,e)}function JP(t=pf(),e){return t=ge(t),hu(t,YE).getImmediate({identifier:e})}function ZP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Cp(n,r,i,e,es)}function eD(){Ur(new ar(YE,ZP,"PUBLIC").setMultipleInstances(!0)),on(gy,yy,""),on(gy,yy,"esm2017")}eD();const tD={apiKey:"AIzaSyAdYeQZYe6wHGUOU0SOwv1sbppnSoViJ2M",authDomain:"etudyonet-clone-3.firebaseapp.com",projectId:"etudyonet-clone-3",storageBucket:"etudyonet-clone-3.appspot.com",messagingSenderId:"555691155641",appId:"1:555691155641:web:13e1ad4042d03e16dd7b68"},xp=Rk(tD),z=C2(xp),F=Ux(xp),nD=JP(xp),QE=w.createContext(),rD=({children:t})=>{var P;const[e,n]=w.useState({}),r=Qt(),i=ie(z,"users"),s=ie(z,"offers"),o=ie(z,"requests"),a=De(ie(z,"offers"),ve("authorId","==",`${(P=F.currentUser)==null?void 0:P.uid}`)),[l,u]=w.useState(),h=(M,D)=>_C(F,M,D),d=()=>(r("/"),AC(F)),f=(M,D)=>IC(F,M,D),y=M=>Sc(F.currentUser,{displayName:M}),v=(M,D,K,fe,te,oe,ke,Ce)=>Ra(i,{id:F.currentUser.uid,name:M,email:D,bio:K,messanger:fe,instagram:te,phoneNumber:oe,deals:0,stars:0,photoURL:ke,password:Ce}),E=async(M,D,K,fe,te)=>await Ra(s,{authorId:F.currentUser.uid,name:M,phoneNumber:D,content:K,price:fe,photoURl:e==null?void 0:e.photoURL}),_=async(M,D,K,fe,te,oe)=>await Ra(o,{senderId:M,senderName:D,resId:K,resName:fe,content:te,price:oe,state:"waiting",message:null}),g=(M,D,K)=>Jt(M,{state:"refuse",message:D||`${K} has nothing to say`}),p=(M,D,K)=>{Jt(M,{state:"accept"}),Jt(We(z,"users",`${D}`),{deals:K+1})},m=M=>dy(We(z,"offers",`${M}`)),S=M=>dy(M);w.useEffect(()=>xC(F,D=>{n(D)}),[]),w.useEffect(()=>{var M;Oe(De(ie(z,"users"),ve("id","==",`${(M=F==null?void 0:F.currentUser)==null?void 0:M.uid}`)),D=>{D.docs.forEach(K=>{u(K.data().password)})})},[e]);const k=async(M,D,K,fe,te,oe,ke,Ce,Me,N,R,U,W)=>{const se=Jr.credential(F==null?void 0:F.currentUser.email,l&&l);await SC(F.currentUser,se),await kC(F==null?void 0:F.currentUser,M),await Sc(F.currentUser,{displayName:U||W}),await Jt(We(z,"users",`${K}`),{name:U||W,email:M||D,bio:fe||te,messanger:oe||ke,instagram:Ce||Me,phoneNumber:N||R}),r("/profile")},I=(M,D,K,fe,te,oe,ke,Ce,Me,N,R,U,W,se)=>{Me?(Jt(We(z,"users",`${se}`),{stars:W+ke}),Ra(ie(z,"reviews"),{senderId:M,senderPhoto:D,senderName:K,resId:fe,resName:te,content:oe||null,rate:ke,deals:1})):(Jt(We(z,"users",`${se}`),{stars:W+ke}),Jt(We(z,"reviews",`${Ce}`),{content:oe||U,rate:ke||R,deals:N+1}))},x=async(M,D,K,fe)=>{var ke;const te=XP(nD,D.uid+".png");K(!0),await YP(te,M);const oe=await QP(te);await Sc(F.currentUser,{photoURL:oe}),await Jt(fe,{photoURL:oe}),console.log("wait..."),Oe(a,Ce=>{Ce.docs.forEach(Me=>{Jt(We(z,"offers",`${Me.id}`),{photoURl:oe})})}),window.location.reload(!1),Oe(De(ie(z,"reviews"),ve("senderId","==",`${(ke=F.currentUser)==null?void 0:ke.uid}`)),Ce=>{Ce.docs.forEach(Me=>{Jt(We(z,"reviews",`${Me.id}`),{senderPhoto:oe})})}),K(!1)};return c.jsx(QE.Provider,{value:{CreateUser:h,user:e,logout:d,signIn:f,setUserName:y,createUserData:v,upload:x,createOffer:E,deleteOffer:m,createRequest:_,refuseRequest:g,acceptRequest:p,deleteRequest:S,createReview:I,updateUser:k},children:t})},cn=()=>w.useContext(QE);const Ki="/assets/avatar-28c1f46a.png",iD="/assets/logo-6ee9d5f0.png";var XE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vy=vn.createContext&&vn.createContext(XE),ir=globalThis&&globalThis.__assign||function(){return ir=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ir.apply(this,arguments)},sD=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function JE(t){return t&&t.map(function(e,n){return vn.createElement(e.tag,ir({key:n},e.attr),JE(e.child))})}function Nn(t){return function(e){return vn.createElement(oD,ir({attr:ir({},t.attr)},e),JE(t.child))}}function oD(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=sD(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),vn.createElement("svg",ir({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ir(ir({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&vn.createElement("title",null,s),t.children)};return vy!==void 0?vn.createElement(vy.Consumer,null,function(n){return e(n)}):e(XE)}function aD(t){return Nn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 0 0-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z"}}]})(t)}function lD(t){return Nn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"}}]})(t)}function uD(t){return Nn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}}]})(t)}function cD(t){return Nn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]})(t)}function hD(t){return Nn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z",fill:"currentColor"}},{tag:"path",attr:{d:"M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z",fill:"currentColor"}}]})(t)}function dD(t){return Nn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(t)}function ra(t){const[e,n]=w.useState(""),{user:r,logout:i}=cn(),s=Qt(),[o,a]=w.useState(0),[l,u]=w.useState(0);return De(ie(z,"requests"),ve("state","!=","waiting")),De(ie(z,"requests"),ve("senderId","==",`${r==null?void 0:r.uid}`)),De(ie(z,"requests"),ve("state","==","waiting")),De(ie(z,"requests"),ve("resId","==",`${r.uid}`)),w.useEffect(()=>{n(r.photoURL),Oe(ie(z,"requests"),h=>{var d;a(0),(d=h.docs)==null||d.forEach(f=>{f.data().state!="waiting"&&f.data().senderId==(r==null?void 0:r.uid)&&a(y=>y+1)})}),Oe(ie(z,"requests"),h=>{var d;u(0),(d=h.docs)==null||d.forEach(f=>{f.data().state=="waiting"&&f.data().resId==(r==null?void 0:r.uid)&&u(y=>y+1)})})},[r]),c.jsxs("header",{className:"navbar",children:[c.jsxs("div",{id:"logo",onClick:()=>{s("/"),scrollTo(0,0)},children:[c.jsx("img",{src:iD,alt:""}),c.jsxs("h2",{children:["Etudyo",c.jsx("span",{children:"net"})]})]}),c.jsxs("ul",{className:"middle-section",children:[c.jsx("li",{id:window.location.pathname=="/"?"home":"undefined",onClick:()=>{s("/"),scrollTo(0,0)},children:"home"}),c.jsx("li",{id:window.location.pathname=="/about"?"about":"undefined",onClick:()=>{s("/about"),scrollTo(0,0)},children:"about"}),c.jsx("li",{id:window.location.pathname=="/contact"?"contact":"undefined",onClick:()=>{s("/#"),scrollTo(0,0)},children:"contact"})]}),c.jsxs("ul",{className:"middle-section-icons",children:[c.jsx("li",{onClick:()=>{s("/"),scrollTo(0,0)},title:"home",children:c.jsx(lD,{size:"24px",color:window.location.pathname=="/"?"#FF8C00":"#333C41"})}),c.jsx("li",{onClick:()=>{s("/about"),scrollTo(0,0)},title:"about",children:c.jsx(aD,{size:"20px",color:window.location.pathname=="/about"?"#FF8C00":"#333C41"})}),c.jsx("li",{onClick:()=>{s("/#"),scrollTo(0,0)},title:"contact",children:c.jsx(dD,{size:"24px"})})]}),c.jsxs("ul",{className:"user-section",children:[c.jsxs("li",{onClick:()=>{s("/notifications"),scrollTo(0,0)},title:"notifications",children:[l+o!==0&&c.jsx("div",{id:"hey",children:o+l}),c.jsx(cD,{size:"24px",color:window.location.pathname=="/notifications"?"#FF8C00":"#333C41"})]}),c.jsx("li",{onClick:()=>{s("/profile"),scrollTo(0,0)},title:"profile",children:e?c.jsx("img",{src:e}):c.jsx("img",{src:Ki})}),c.jsx("li",{onClick:i,children:c.jsx(hD,{size:"24px"})})]})]})}const cd="/assets/banner-0691c4c8.jpg";function fD(){const[t,e]=w.useState(),{user:n}=cn(),r=ie(z,"offers"),[i,s]=w.useState(),o=Qt();w.useEffect(()=>{Oe(r,u=>{e(u.docs)})},[n]);const a=()=>{Oe(r,u=>{e(u.docs.filter(h=>{var d,f;if(!i||(d=h.data().name)!=null&&d.toLowerCase().includes(i==null?void 0:i.toLowerCase())||(f=h.data().content)!=null&&f.toLowerCase().includes(i==null?void 0:i.toLowerCase()))return h}))})},l=()=>{Oe(r,u=>{e(u.docs)}),document.getElementById("searchbar").value="",s(void 0)};return c.jsxs("div",{children:[c.jsxs("div",{className:"top",children:[c.jsx("img",{src:cd,alt:"banner",className:"banner"}),c.jsxs("div",{className:"search-area",children:[c.jsx("input",{type:"text",onChange:u=>{s(u.target.value)},id:"searchbar"}),c.jsx("div",{id:"cancel",children:i&&c.jsx("span",{className:"material-symbols-outlined",onClick:l,children:"close"})}),c.jsx("button",{onClick:a,children:"search"})]})]}),c.jsxs("div",{className:"home",children:[c.jsx(ra,{}),t!=null&&t.length?t.map(u=>c.jsxs("div",{className:"offer",children:[c.jsxs("div",{className:"offer-top",children:[c.jsx("img",{src:u.data().photoURl?u.data().photoURl:Ki,alt:""}),c.jsxs("div",{children:[c.jsx("h3",{children:u.data().name}),c.jsxs("div",{className:"phoneNumber",children:[c.jsx("h2",{children:"+216"}),c.jsx("h2",{children:u.data().phoneNumber.substr(0,2)}),c.jsx("h2",{children:u.data().phoneNumber.substr(2,3)}),c.jsx("h2",{children:u.data().phoneNumber.substr(5,5)})]})]})]}),c.jsx("div",{className:"offer-content",children:c.jsx("h3",{children:u.data().content})}),c.jsxs("div",{className:"offer-footer",children:[c.jsx("button",{onClick:()=>{o(`/users/${u.data().authorId}`)},children:"See profile"}),c.jsxs("h4",{children:["Starting at ",c.jsxs("span",{children:[u.data().price,"Dt"]})]})]})]},u.id)):c.jsx("h1",{children:"nothing"})]})]})}const Ap="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ7SURBVHgB1ZU9TFNRFMf/9/HUQRO7yUZN3KU7CTjpBs4OyOhUiR+Jg6GdiIoBB2dhd6CbTpRE97KT+EwcHEvExGjs83dO36Ot8Pox8k9u7323956v/znnSucdIV+kr7SgSPNKNctnmX9KrBPWbXXU0F81wzP/nlxB+lrvmJYQsoOSJgIT1m3FKEpdWa68Fh5zZhIF6Uvd5/KijrUSaggtQLqOolh7jEpYLT73PyKsK8tCcomQDEPsnpTx7KomQOy/Fu8L+pJuaJcw7POdnOxLN52X4OEa2/KeB4YOcf2j605m6h4tM6qs57E4MNfDI/4PkyuI80WWIdtj3lNaw7vLeBa5QWZkEp6QIEUKJgFZt8b00LNN+o6HV/Bumv0Yj+vhac/QroJIy2TJ9rA8h59qFr5dBBseuPBO/yH3aB1FM4S03lNgBXVRewhJsKTFpSMOJsyWOTOMJc60JOfgmPG8wI4W51aZNyncI0K2FWUK9p1EyEToV+aSE2wIZNVvVUiCFb5+sf9Ww2Ehe8G9tZ4HGTKSmmfdwqKae5ciYDTM28TaT6RxETxlP2t8HDJmuwqMZGsZBfCU1IhKPw3jqpST3EJJFfY3MzKTvoOzWTuRpnRtIGuGIegGHjdykg/okhUnU3rjxObDsuKHV/ld1nNjip/2lO2oNUhytw6SgktN0riMp3e4+EHDEOk2Ct6bPFPQdgJHwNu1oaN73p1SfSwQbn1sgbS+5Ub75Q1tsVpUt0ob3jXtwZmC2ClctZqwR4c2YC+bFSV73zj/ifkwE21czbnB1EzeFcKAhTGZ1PWmlD2ZVrmW+wf6SSvpe5BOHiplnnXP7ZzV8M43/gGW6+LmvNg1xwAAAABJRU5ErkJggg==",Np="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE7SURBVHgB1ZZbTsJAFIa/aZH4QmQJ7kB3oK5Al6ArUB408Ul8MtEmugNZgjuwOwB34A7U+KIQGM7hNhAypHQKhC9p2p7p/CedOZcxTGHrVKlwRo998mD5ZIc3U+N7bIomYw8iWqEpH52Sl0jm9mgOtOacJ7zbJ64IRDVUa9b4TFWMXxSEaqmmPg+X6E9ejFu3YFSry55zsEJKvgH7yDkxd2Shy725obGUA50g0ZCShX//8pYWTMPcSlwHssE90GQpc+wbp02a5Q/9SxRL6FqO8JOSgUWb3JLbBYGsfA82nGgRr85AzVzzQlEORpnZIJDt34M1OdiVYmWHDaIQVCvmZ+Jg1KRbhbTMhEvVGjd+F0Udydqy9OVEyoPlgzwYDuQ6lDp14kzT3rWPduTYYnIeWyIpfr9ybKm7/tAHuO1ZSMKAnYkAAAAASUVORK5CYII=",ZE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAISSURBVHgBpZS/SwJhGMefV91saFLHrH9AKoiwQS1IaKktanAIWoKolhoiCoJqKoKWoMGhKCgwIiiIOqKitosaMx3VyUEhSH17n1dP8nzvvTv9Dnfvve/d9/M+P+4lfcFwCgh0gX2pZRcNq4qSl73kaNEcFXCWyEMgFOqUvUT6hsIUB/fXCbCqTDYHiyurkM3l8FEaiQNakM/rgd3tTfB6PPgojcQQUCgW4ebuHuLHp3CRuIJMdbe2IcIUYQqWWAr0prGpSYhNTzbMmaVLGIFm3tPt56ajIxE+Hz85hVsWlZ1ImgDPr2/c3Fv7EHe8vDgPc7MzfP1GBzCDNAG+kil+jw5HoMPtrs9rUbx/fIJIIogQoJnq818oFBvWrUB6hyLrTYDg4AC/Y66xe7So1ja3GtZlkOWleT4mhMaEXYTFxPbUS6uLr7pDqSJj4/zuEi1i56DJ+eUVJL9T4GZpibIaYMFlKdKErVtTvg7AnP/fGRZVK6xdHRweVQeEJlgNqIJj0Y/VinZ293mrUwrp8i9sOMoumGDzqtHfa9ccm4MVNV+hdEJ9VdLOTDr94+3uOnNUSJSdPz6kY6dYybWheYUdFy+KivNOvLQLMTKvA9qByMwbAK1AzMybAHYgVsyFACNIj9/PjwHsNjR/eHwyNUcRkAiP3NqpGNCvWTE3BWjqD4YWKCExBKExARovl2AP+9zs2z/Kh3tRRBoBOQAAAABJRU5ErkJggg==",eS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIJSURBVHgB1VVbUsJAEOyNyJ8lN1BvoDfQE6gnAE4AlK/ii/BllWIBJwBPEDwBeAKOIN4Ayz/QxJ7Z8A5SEH6YqpDdTTI90927ALseZjQInnEOB5cIkEKcMOgzx7u5RctOJfkLPC5eYZth0DQ3yBomLzG5q8g+6uyihzjhkwEHOeY85lVOcCmjD36I9mDbihtBRYv0CJR2FEliDw3qkEfMCJ5wSjaqdoJjZ+pZSh6QskZQ3UxoVp5j1d1x0YwJgI8sf8UBGY67wePkpZWJXaSYvM1hLVyqLwCYezQxxBm76GkF+/hQA6xKLvY+YNXg3Vr0ghbNLwAoSBE9WutE1Ldfw5XKlnXDAqpM2g4p6WCAM3PH+1Q4UR/yJZe3a+1GKksSpDLZJwLIuXCdDwspsOoLKXA+VwJLe2e7JhTbVuixYjdcd2d2vIPDZWkiO1DubeuSpDVNGUTIiHV25EW5b6YDcQMFq6qT7IflkC6hpUnhG4Du+Dc1BVTkDsts6FHj45TvzVBliBzoaEhxk6Fg4oY1draaIDkWu89LLO/NAliLpVTYQbRg/4IIPb/abW56faLBiNdvWq24/oFnCuir/0e6jAFMmCxAjS9cG1db3DhUM3sqCCu9BCevHJQIdUXBPnmPBcA44pVX4pnb/uFU1BFpbDdayshopjvV17/NQ8QJH19kpDV/ZOxu/AHXO9FVSrZ+gwAAAABJRU5ErkJggg==",tS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKQSURBVHgBnVXbbRpRED13wf6JIuEKsqkgpgOoIKYCTAW2pTyUL+DLSuLIpoKYCkwH2Q6MKzCpIEiJ8hFirs/MnV3WsMvDI632ceeemTn3zKzDGvM91PACx3B4yyuG5yXmMOXzGHMM8YDEfcKkDMOVAr9El4/HBKphkzlc4x/6RYFWAvgvOEQFN1m2QEKvIQGyTNUn0oqOuNY2pAmrabkPrKwsgIH/sKwTzNBZV77uOWegfd0T83VK2pr5IK7EceDe4RQ7mL/AFW8nGmSGeppYlHns4dLAR7uCa6Zhz4hXjVjf0+8awH9Fg7cj5XGGMzzXKuhoBUDDMK0Cp6WBh9TfxHmR6dkJzJnKd2CY3UUAyT4ESLCj+W+kNsKt/2wYVT0LsUN/iVqUlkIbl2XPAzwhULcAvMuMT7Xx5kE5WgX0uUa644iLoZE8fpaB83YlQAS8V7XJd8nYo6dO/5fk7HGXVrEI4PCrALyt4GEdqjJKWcGrpCaA9d1HVU+hRXSYmuPBE/BwcNcpCDu5DpGhBFl0+si9tyry5vDK9k2r5GlM3UqoNxn4uYJI04UMFyAtnllPFSKS/q2yREGAWPfSJzLuRF5xduBVdRDqBssZ6rtHk+B117PqlyuX6gguIyOV6dAIaxtIgj84KOtoWS8CV6tYT/kgeZdRsod7XZgzs6WJuK09wZnhtbCjFRhNA8vgJpXizuAyLIMNVoddRbkeK3+5YbUTeMp9jtosgHbgDC17bWwFzD+fdvM+blNwyrmZ91n9o12owGT8OlWVDMIwCu60QmnM0Jwi6/wvdURhdJYPvzQAoCpoYLMl1itJ0WJ1zcaGZS6HP+WzZBzb2kTnDaW4SXGrAZxuDsB/OQrK9L6lPQKmUwwBIV89bwAAAABJRU5ErkJggg==",nS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSSURBVHgBrVbbTRtBFD0zNnwlktPBdhCnA7sCQgVJKiCWnEh8gb+QeAioAFMBpgKWCtgOgArwB1/g9XDundm1jXZgbflK652dx7mvc+/YYE7cETow+MWn4yeQoI4YPHDvmO+M72vTx2i2JDj7aOELrjjsYB1iMIRFz/QwburEV5xSs1g/xhTnHI+QY2x2aVkNcQf0tEEjxXOLHZ7/zfMJl7rGHeMnB1fq5gsnaoIugG/gAt77lOADYkk0Whx3m/zY4gBi+bLgKhsK1g5fHQ26YxQM9iSflh9+0VH7alKc75ZKXEgyQyYetNQDi6cYQmDXDp+2sgX0dEq2/GcyoYbJ+k3Ynkn+iOd1MAdOB33PqAXgz9glbMkZDqs5aKuyV/yRUBe4TXwkBXjBrgkBhS0C1mCMhS0WCY37EYOIKnCHPOzBq9iVkT0pE3wneySE5l91Dm1MAVe29J1jUMUunRO2ePkbh4mJKamXRfdMNMmC8n15BbMdUXaFfCAwK3I8Ji5Y7rCNuBQ18LiKAh9fVqS2g/fLvv/shb2jGEyURcIKcjmFMGkTN2TVAEURbbKlS2KdhmgYCm45BSoNhidnETk2RF9M3mdX7kjxjN5HEMad4D5cLFIwlbHUmvC0TUJrkYvlPMb90GHvpYZmHkzxjb+VCkIIhqgrc+yyBL71KHovrEdM2bsyW1rGblnFlmVFMeRWE8nZcXXyWFut7zv+ykxXujIbmqcZu/rsrLrhlBMTnOk/ivWIsGvb7NPIBUvkfhZKGvYWz5akFpwJnjq9ky/n2fUGMGPWSzzxI9oAAAAASUVORK5CYII=";function hd(t){return Nn({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(t)}function pD(){var ia,sa,cs,hs;const{user:t,logout:e,upload:n,createOffer:r,deleteOffer:i,acceptRequest:s,refuseRequest:o}=cn(),[a,l]=w.useState(""),[u,h]=w.useState(""),[d,f]=w.useState(""),[y,v]=w.useState(""),[E,_]=w.useState(null),[g,p]=w.useState(!1),[m,S]=w.useState(),[k,I]=w.useState(Ki),[x,P]=w.useState(""),[M,D]=w.useState(""),[K,fe]=w.useState();w.useState();const[te,oe]=w.useState(),ke=ie(z,"users"),Ce=De(ke,ve("email","==",`${t.email}`)),Me=De(ie(z,"offers"),ve("authorId","==",`${(ia=F.currentUser)==null?void 0:ia.uid}`));De(ie(z,"requests"),ve("resId","==",`${(sa=F.currentUser)==null?void 0:sa.uid}`),ve("state","==","waiting"));const N=De(ie(z,"reviews"),ve("resId","==",`${(cs=F==null?void 0:F.currentUser)==null?void 0:cs.uid}`));w.useState(),w.useState();const[R,U]=w.useState(),[W,se]=w.useState(),[Rn,Tt]=w.useState(0),yr=Qt();w.useEffect(()=>{Oe(Me,Q=>{fe(Q.docs)})},[t]),w.useEffect(()=>{Oe(N,Q=>{oe(Q.docs)})},[t]),w.useEffect(()=>{Tt(0),te==null||te.forEach(Q=>{(Q==null?void 0:Q.data().content)!=null&&Tt(kt=>kt+1)})}),w.useEffect(()=>{Oe(Ce,Q=>{Q.docs.forEach(kt=>{l(kt.data().bio),h(kt.data().messanger),f(kt.data().instagram),S(kt.id),v(kt.data().phoneNumber),U(kt.data().deals),se(kt.data().stars)})})},[t]);const Bt=We(z,"users",`${m}`),Pn=Q=>{Q.target.files[0]&&_(Q.target.files[0])};w.useEffect(()=>{t!=null&&t.photoURL&&I(t.photoURL)},[t]);const Fu=(hs=t.displayName)==null?void 0:hs.split(" ")[0],Bu=Q=>{Q.preventDefault(),r(t.displayName,y,x,M,k),document.getElementById("my-text").value="",document.getElementById("price").value="",P("")},Vu=()=>{n(E,t,p,Bt)},zu=K==null?void 0:K.map(Q=>c.jsxs("div",{className:"profile-offer",children:[c.jsxs("div",{className:"offer-top",children:[c.jsxs("div",{className:"offer-user-info",children:[c.jsx("img",{src:k,alt:""}),c.jsxs("div",{children:[c.jsx("h3",{children:t==null?void 0:t.displayName}),c.jsxs("div",{className:"phoneNumber",children:[c.jsx("h2",{children:"+216"}),c.jsx("h2",{children:y.substr(0,2)}),c.jsx("h2",{children:y.substr(2,3)}),c.jsx("h2",{children:y.substr(5,5)})]})]})]}),c.jsx("span",{className:"material-symbols-sharp",onClick:()=>{i(Q.id)},children:"delete"})]}),c.jsx("div",{className:"offer-content",children:c.jsx("h3",{children:Q.data().content})}),c.jsx("div",{className:"offer-footer",children:c.jsxs("h4",{children:["Starting at ",c.jsxs("span",{children:[Q.data().price,"Dt"]})]})})]},Q.id)),Dn=te==null?void 0:te.map(Q=>Q.data().content!=null&&c.jsxs("div",{className:"review",children:[c.jsx("img",{src:Q.data().senderPhoto?Q.data().senderPhoto:Ki,alt:""}),c.jsxs("div",{className:"deals",children:[c.jsxs("h3",{children:[Q.data().deals,"x"]}),c.jsx("i",{className:"fa-regular fa-handshake fa-xl"})]}),c.jsx("h2",{className:"senderName",children:Q.data().senderName}),c.jsx("h2",{className:"review-content",children:Q.data().content}),c.jsx("div",{className:"stars",children:[...Array(5)].map((kt,oa)=>{const J=oa+1;return c.jsx("label",{children:c.jsx(hd,{className:"star",size:25,color:J<=Q.data().rate?"#ffc107":"#e4e5e9"})})})})]},Q.id));return c.jsxs("div",{className:"profile",children:[c.jsx(ra,{}),c.jsx(uD,{className:"setting",size:"30px",onClick:()=>{yr("/settings")}}),c.jsxs("div",{className:"fields",children:[c.jsxs("div",{className:"photo-section",children:[c.jsxs("button",{className:"photo-button",children:[c.jsx("span",{className:"material-symbols-outlined",children:"edit"}),c.jsx("input",{type:"file",onChange:Pn})]}),c.jsxs("div",{className:"profile-deals",children:[c.jsx("i",{className:"fa-regular fa-handshake fa-xl"}),c.jsx("h3",{children:t&&R?R:"0"})]}),c.jsxs("div",{className:"profile-rate",children:[c.jsx("i",{className:"fa-solid fa-star fa-xl"}),c.jsx("h3",{children:t&&W/R?(W/R).toFixed(1):"0"})]}),c.jsx("img",{src:k})]}),c.jsxs("div",{className:"photo-buttons",children:[c.jsx("button",{hidden:!E,onClick:()=>{p(!1),window.location.reload(!1)}}),g?c.jsx("button",{children:c.jsx("i",{className:"fa fa-spinner fa-spin"})}):c.jsx("button",{disabled:g||!E,hidden:!E,onClick:Vu,children:"upload"})]}),c.jsx("h5",{className:"name",children:t&&t.displayName}),c.jsxs("div",{className:"phoneNumber",children:[c.jsx("h2",{children:"+216"}),c.jsx("h2",{children:y.substr(0,2)}),c.jsx("h2",{children:y.substr(2,3)}),c.jsx("h2",{children:y.substr(5,5)})]}),c.jsx("div",{className:"bio",children:t&&a}),c.jsxs("form",{className:"offer-form",onSubmit:Bu,children:[c.jsxs("div",{className:"offer-box",children:[c.jsx("textarea",{id:"my-text",onChange:Q=>{P(Q.target.value)},required:!0,maxLength:100}),c.jsxs("p",{id:"letter-counter",children:[x.length,"/100"]}),c.jsxs("div",{className:"offer-placeholder",children:[c.jsx("img",{src:Np,alt:""}),c.jsx("h3",{children:"The offer"})]})]}),c.jsxs("div",{className:"offer-box",children:[c.jsx("input",{type:"text",onChange:Q=>{D(Q.target.value)},pattern:"\\d*",maxLength:"5",min:"0",required:!0,id:"price"}),c.jsxs("div",{className:"offer-placeholder",children:[c.jsx("img",{src:Ap,alt:""}),c.jsx("h3",{children:"The starting Price"})]}),c.jsx("button",{type:"submit",children:"Add"})]})]}),c.jsxs("div",{className:"info-box",children:[c.jsxs("div",{className:"info",children:[c.jsx("img",{src:eS,alt:""}),c.jsx("h3",{children:t&&t.email})]}),c.jsxs("div",{className:"info",children:[c.jsx("img",{src:tS,alt:""}),c.jsx("h3",{children:t&&u})]}),c.jsxs("div",{className:"info",children:[c.jsx("img",{src:nS,alt:""}),c.jsx("h3",{children:t&&d})]})]})]}),c.jsxs("div",{className:"offers-display",children:[c.jsxs("div",{className:"offers-section-title",children:[c.jsx("img",{src:ZE,alt:""}),c.jsxs("h3",{children:[Fu,"'s offers"]})]}),c.jsx("div",{className:"offers-section",children:zu})]}),c.jsxs("div",{className:"reviews",children:[c.jsxs("div",{className:"reviews-title",children:[c.jsx("span",{className:"material-symbols-outlined",children:"history_edu"}),c.jsxs("h2",{children:["Reviews: (",Rn,")"]})]}),c.jsx("div",{className:"reviews-content",children:Dn})]})]})}function mD(){const[t,e]=w.useState(""),[n,r]=w.useState(""),[i,s]=w.useState(""),{signIn:o}=cn(),a=Qt(),l=async u=>{u.preventDefault(),s("");try{await o(t,n),a("/profile")}catch(h){s(h.message),console.log(h.message)}};return c.jsx("div",{className:"auth",children:c.jsxs("form",{onSubmit:l,children:[i&&c.jsx("p",{id:"error",children:"tchu tchu motherfucker"}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:u=>{e(u.target.value)},id:"email",pattern:"/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/g",required:!0}),c.jsx("span",{children:"email"})]}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:u=>{r(u.target.value)},type:"passowrd",id:"password",required:!0}),c.jsx("span",{children:"password"})]}),c.jsx("button",{children:"Sign In"}),c.jsxs("p",{children:["Don't have an account? ",c.jsx(B0,{to:"/signup",className:"link",children:"Sign Up"})]})]})})}function gD(){const[t,e]=w.useState(""),[n,r]=w.useState(""),[i,s]=w.useState(""),[o,a]=w.useState(""),[l,u]=w.useState(""),[h,d]=w.useState(""),[f,y]=w.useState(""),[v,E]=w.useState("");w.useState();const{CreateUser:_,setUserName:g,user:p,createUserData:m}=cn(),S=Qt(),k=async I=>{I.preventDefault(),E("");try{await _(t,n),await g(i),await m(i,t,o,l,h,f,Ki,n),S("/profile")}catch(x){E(x.message)}};return c.jsx("div",{className:"auth",children:c.jsxs("form",{onSubmit:k,children:[c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:I=>{s(I.target.value)},type:"text",required:!0}),c.jsx("span",{children:"username"})]}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:I=>{e(I.target.value)},pattern:"/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/g",required:!0}),c.jsx("span",{children:"Email"})]}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:I=>{r(I.target.value)},type:"passowrd",required:!0}),c.jsx("span",{children:"Password"})]}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:I=>{a(I.target.value)},type:"text",required:!0}),c.jsx("span",{children:"Bio"})]}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:I=>{u(I.target.value)},type:"text",required:!0}),c.jsx("span",{children:"messanger"})]}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:I=>{d(I.target.value)},type:"text",required:!0}),c.jsx("span",{children:"instagram"})]}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:I=>{y(I.target.value)},type:"tel",required:!0}),c.jsx("span",{children:"Phone number"})]}),c.jsxs("p",{children:["Already have an account? ",c.jsx(B0,{to:"/signin",className:"link",children:"Sign In"})]}),c.jsx("button",{children:"Sign Up"})]})})}function ii({children:t}){const{user:e}=cn();return e?t:c.jsx(F0,{to:"/signin"})}function wy({children:t}){const{user:e}=cn();return e?c.jsx(F0,{to:"/profile"}):t}function yD(){var cs,hs,Q,kt,oa;const{createRequest:t,deleteRequest:e,createReview:n,user:r}=cn(),{id:i}=sT(),[s,o]=w.useState(),[a,l]=w.useState({}),[u,h]=w.useState(""),[d,f]=w.useState(""),[y,v]=w.useState(),[E,_]=w.useState(),g=ie(z,"users"),p=De(g,ve("id","==",`${i}`)),m=De(ie(z,"offers"),ve("authorId","==",`${i}`));De(ie(z,"requests"),ve("resId","==",`${i}`),ve("senderId","==",`${(cs=F==null?void 0:F.currentUser)==null?void 0:cs.uid}`));const S=De(ie(z,"reviews"),ve("resId","==",`${i}`)),[k,I]=w.useState(!0),[x,P]=w.useState(),[M,D]=w.useState(),[K,fe]=w.useState(),[te,oe]=w.useState(),[ke,Ce]=w.useState(),[Me,N]=w.useState(),[R,U]=w.useState([]),[W,se]=w.useState(),[Rn,Tt]=w.useState(null),[yr,Bt]=w.useState(),[Pn,Fu]=w.useState(),Bu=Qt();w.useEffect(()=>{Oe(m,J=>{o(J.docs)})},[r]),w.useEffect(()=>{Oe(ie(z,"requests"),J=>{J.docs.forEach(xe=>{var Ae;xe.data().resId==i&&xe.data().senderId==((Ae=F==null?void 0:F.currentUser)==null?void 0:Ae.uid)&&(v(xe.data().state),_(xe.id),se(xe.data().message))})})},[r]),w.useEffect(()=>{Oe(p,J=>{J.docs.forEach(xe=>{l(xe.data()),Bt(xe.data().stars),Fu(xe.id)})})},[r]),w.useEffect(()=>{Oe(S,J=>{U(J.docs)})},[r]),console.log(R),w.useEffect(()=>{F.currentUser&&i==F.currentUser.uid&&Bu("/profile")},[r]);const Vu=J=>{var xe,Ae;J.preventDefault(),t((xe=F.currentUser)==null?void 0:xe.uid,(Ae=F.currentUser)==null?void 0:Ae.displayName,i,a==null?void 0:a.name,u,d)};w.useEffect(()=>{var J;Oe(De(ie(z,"reviews"),ve("senderId","==",`${(J=F.currentUser)==null?void 0:J.uid}`)),xe=>{xe.docs.forEach(Ae=>{I(!1),P(Ae.id),D(Ae.data().deals),fe(Ae.data().content),oe(Ae.data().rate)})})},[F.currentUser]);const zu=J=>{e(We(z,"requests",`${E}`)),window.location.reload(!1),n(F.currentUser.uid,F.currentUser.photoURL,F.currentUser.displayName,a.id,a.name,ke,Me,x,k,M,te,K,yr,Pn)},Dn=(hs=a.name)==null?void 0:hs.split(" ")[0],ia=s==null?void 0:s.map(J=>{var xe,Ae,aa;return c.jsxs("div",{className:"profile-offer",children:[c.jsxs("div",{className:"offer-top",children:[c.jsx("img",{src:a==null?void 0:a.photoURL,alt:""}),c.jsxs("div",{children:[c.jsx("h3",{children:a==null?void 0:a.name}),c.jsxs("div",{className:"phoneNumber",children:[c.jsx("h2",{children:"+216"}),c.jsx("h2",{children:(xe=a==null?void 0:a.phoneNumber)==null?void 0:xe.substr(0,2)}),c.jsx("h2",{children:(Ae=a==null?void 0:a.phoneNumber)==null?void 0:Ae.substr(2,3)}),c.jsx("h2",{children:(aa=a==null?void 0:a.phoneNumber)==null?void 0:aa.substr(5,5)})]})]})]}),c.jsx("div",{className:"offer-content",children:c.jsx("h3",{children:J.data().content})}),c.jsx("div",{className:"offer-footer",children:c.jsxs("h4",{children:["Starting at ",c.jsxs("span",{children:[J.data().price,"Dt"]})]})})]})}),sa=R==null?void 0:R.map(J=>J.data().content!=null&&c.jsxs("div",{className:"review",children:[c.jsx("img",{src:J.data().senderPhoto?J.data().senderPhoto:Ki,alt:""}),c.jsxs("div",{className:"deals",children:[c.jsxs("h3",{children:[J.data().deals,"x"]}),c.jsx("i",{className:"fa-regular fa-handshake fa-xl"})]}),c.jsx("h2",{className:"senderName",children:J.data().senderName}),c.jsx("h2",{className:"review-content",children:J.data().content}),c.jsx("div",{className:"stars",children:[...Array(5)].map((xe,Ae)=>{const aa=Ae+1;return c.jsx("label",{children:c.jsx(hd,{className:"star",size:25,color:aa<=J.data().rate?"#ffc107":"#e4e5e9"})})})})]}));return c.jsxs("div",{className:"profile",children:[c.jsx(ra,{}),c.jsxs("div",{className:"fields",children:[c.jsx("img",{src:a==null?void 0:a.photoURL}),c.jsx("h5",{className:"name",children:a&&a.name}),c.jsxs("div",{className:"phoneNumber",children:[c.jsx("h2",{children:"+216"}),c.jsx("h2",{children:(Q=a==null?void 0:a.phoneNumber)==null?void 0:Q.substr(0,2)}),c.jsx("h2",{children:(kt=a==null?void 0:a.phoneNumber)==null?void 0:kt.substr(2,3)}),c.jsx("h2",{children:(oa=a==null?void 0:a.phoneNumber)==null?void 0:oa.substr(5,5)})]}),c.jsx("div",{className:"bio",children:a&&a.bio}),y==null&&c.jsxs("form",{className:"offer-form",onSubmit:Vu,children:[c.jsxs("div",{className:"offer-box",children:[c.jsx("input",{type:"text",onChange:J=>{h(J.target.value)},required:!0}),c.jsxs("div",{className:"offer-placeholder",children:[c.jsx("img",{src:Np,alt:""}),c.jsxs("h3",{children:["What you want ",Dn," to do for you"]})]})]}),c.jsxs("div",{className:"offer-box",children:[c.jsx("input",{type:"text",onChange:J=>{f(J.target.value)},required:!0}),c.jsxs("div",{className:"offer-placeholder",children:[c.jsx("img",{src:Ap,alt:""}),c.jsx("h3",{children:"You will pay"})]}),c.jsx("button",{children:"Send Request"})]})]}),y=="waiting"&&c.jsxs("div",{className:"state-section",children:[c.jsxs("div",{className:"waiting",children:[c.jsx("span",{class:"material-symbols-outlined",children:"chat"}),c.jsxs("h2",{children:["Your Request Has Been Sent. Waiting For ",Dn,"’s Response"]})]}),c.jsxs("div",{className:"cancel-request",onClick:()=>{e(We(z,"requests",`${E}`)),window.location.reload(!1)},children:[c.jsx("span",{class:"material-symbols-outlined",children:"speaker_notes_off"}),c.jsx("h2",{children:"Cancel request"})]})]}),y=="refuse"&&c.jsxs("div",{className:"refused-state-section",children:[c.jsxs("div",{className:"refused",children:[c.jsx("span",{className:"material-symbols-outlined",children:"speaker_notes_off"}),c.jsxs("h2",{children:[Dn," refused your request."]})]}),c.jsxs("div",{className:"message",children:[c.jsxs("div",{className:"message-title",children:[c.jsx("span",{className:"material-symbols-outlined",children:"chat"}),c.jsxs("h2",{children:["Message from ",Dn]})]}),c.jsx("h2",{children:W})]}),c.jsx("button",{onClick:()=>{e(We(z,"requests",`${E}`)),window.location.reload(!1)},className:"profile-button",children:"ok"})]}),y=="accept"&&c.jsxs("div",{className:"accept-state-section",children:[c.jsxs("div",{className:"accept",children:[c.jsx("span",{class:"material-symbols-outlined",children:"mark_chat_read"}),c.jsxs("h2",{children:[Dn," accepted your request."]})]}),c.jsxs("form",{onSubmit:zu,className:"feedback-section",children:[c.jsxs("div",{children:[c.jsxs("label",{children:[c.jsx("span",{class:"material-symbols-outlined",children:"history_edu"}),c.jsx("h2",{children:"Write a review after you receive the service"})]}),c.jsx("input",{type:"text",onChange:J=>{Ce(J.target.value)},maxLength:100,defaultValue:K}),c.jsx("div",{className:"stars",children:[...Array(5)].map((J,xe)=>{const Ae=xe+1;return c.jsxs("label",{children:[c.jsx("input",{type:"radio",name:"rating",value:Ae,onClick:()=>{N(Ae)}}),c.jsx(hd,{className:"star",size:25,color:Ae<=(Rn||Me||te)?"#ffc107":"#e4e5e9",onMouseEnter:()=>Tt(Ae),onMouseLeave:()=>Tt(null)})]})})})]}),c.jsx("button",{type:"submit",disabled:!Me&&!te,children:"Add Review"})]})]}),c.jsxs("div",{className:"info-box",children:[c.jsxs("div",{className:"info",children:[c.jsx("img",{src:eS,alt:""}),c.jsx("h3",{children:a&&a.email})]}),c.jsxs("div",{className:"info",children:[c.jsx("img",{src:tS,alt:""}),c.jsx("h3",{children:a&&a.messanger})]}),c.jsxs("div",{className:"info",children:[c.jsx("img",{src:nS,alt:""}),c.jsx("h3",{children:a&&a.instagram})]})]})]}),c.jsxs("div",{className:"offers-display",children:[c.jsxs("div",{className:"offers-section-title",children:[c.jsx("img",{src:ZE,alt:""}),c.jsxs("h3",{children:[Dn,"'s offers"]})]}),c.jsx("div",{className:"offers-section",children:ia})]}),c.jsxs("div",{className:"reviews",children:[c.jsxs("div",{className:"reviews-title",children:[c.jsx("span",{className:"material-symbols-outlined",children:"history_edu"}),c.jsxs("h2",{children:["Reviews: (",R==null?void 0:R.length,")"]})]}),c.jsx("div",{className:"reviews-content",children:sa})]})]})}function vD(){return c.jsx("div",{children:c.jsx("a",{href:"/",children:"home"})})}function wD(t){return Nn({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M235.85,157.52l-12-96A20,20,0,0,0,204,44H32A12,12,0,0,0,20,56v88a12,12,0,0,0,12,12H77.53l38.89,77.79A4,4,0,0,0,120,236a36,36,0,0,0,36-36V180h60a20,20,0,0,0,19.85-22.48ZM76,148H32a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H76Zm149,19.94a12,12,0,0,1-9,4.06H152a4,4,0,0,0-4,4v24a28,28,0,0,1-25.58,27.9L84,151.06V52H204a12,12,0,0,1,11.91,10.51l12,96A12,12,0,0,1,225,167.94Z"}}]})(t)}function ED(t){return Nn({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M231,82.76A20,20,0,0,0,216,76H156V56a36,36,0,0,0-36-36,4,4,0,0,0-3.58,2.21L77.53,100H32a12,12,0,0,0-12,12v88a12,12,0,0,0,12,12H204a20,20,0,0,0,19.85-17.52l12-96A20,20,0,0,0,231,82.76ZM76,204H32a4,4,0,0,1-4-4V112a4,4,0,0,1,4-4H76ZM227.91,97.49l-12,96A12,12,0,0,1,204,204H84V104.94L122.42,28.1A28,28,0,0,1,148,56V80a4,4,0,0,0,4,4h64a12,12,0,0,1,11.91,13.49Z"}}]})(t)}function SD(){const{user:t,deleteRequest:e,acceptRequest:n,refuseRequest:r}=cn(),[i,s]=w.useState(),[o,a]=w.useState(),[l,u]=w.useState(),[h,d]=w.useState(),[f,y]=w.useState(),[v,E]=w.useState(),_=Qt();w.useEffect(()=>{var m,S,k;Oe(De(ie(z,"requests"),ve("senderId","==",`${(m=F.currentUser)==null?void 0:m.uid}`)),I=>{s(I.docs)}),Oe(De(ie(z,"requests"),ve("state","==","waiting"),ve("resId","==",`${(S=F.currentUser)==null?void 0:S.uid}`)),I=>{a(I.docs)}),Oe(De(ie(z,"users"),ve("id","==",`${(k=F.currentUser)==null?void 0:k.uid}`)),I=>{I.docs.forEach(x=>{y(x.id),E(x.data().deals)})})},[t]);const g=i==null?void 0:i.map(m=>{var S,k,I,x;if(m.data().state=="waiting")return c.jsxs("div",{className:"state-section",children:[c.jsxs("div",{className:"waiting",children:[c.jsx("span",{className:"material-symbols-outlined",children:"chat"}),c.jsxs("h2",{children:["Your Request Has Been Sent. Waiting For ",(S=m.data().resName)==null?void 0:S.split(" ")[0],"’s Response"]})]}),c.jsxs("div",{className:"cancel-request",onClick:()=>{e(We(z,"requests",`${m.id}`))},children:[c.jsx("span",{className:"material-symbols-outlined",children:"speaker_notes_off"}),c.jsx("h2",{children:"Cancel request"})]})]},m.id);if(m.data().state=="refuse")return c.jsxs("div",{className:"refused-state-section",children:[c.jsxs("div",{className:"refused",children:[c.jsx("span",{className:"material-symbols-outlined",children:"speaker_notes_off"}),c.jsxs("h2",{children:[(k=m.data().resName)==null?void 0:k.split(" ")[0]," refused your request."]})]}),c.jsxs("div",{className:"message",children:[c.jsxs("div",{className:"message-title",children:[c.jsx("span",{className:"material-symbols-outlined",children:"chat"}),c.jsxs("h2",{children:["Message from ",(I=m.data().resName)==null?void 0:I.split(" ")[0]]})]}),c.jsx("h2",{children:m.data().message})]}),c.jsx("button",{onClick:()=>{e(We(z,"requests",`${m.id}`))},className:"profile-button",children:"ok"})]});if(m.data().state=="accept")return c.jsxs("div",{className:"accept-state-section",children:[c.jsxs("div",{className:"accept",children:[c.jsx("span",{class:"material-symbols-outlined",children:"mark_chat_read"}),c.jsxs("h2",{children:[(x=m.data().resName)==null?void 0:x.split(" ")[0]," accepted your request."]})]}),c.jsxs("div",{className:"see-more",onClick:()=>{_(`/users/${m.data().resId}`)},children:[c.jsx("span",{class:"material-symbols-outlined",children:"visibility"}),c.jsx("h2",{children:"See more"})]})]})}),p=o==null?void 0:o.map(m=>c.jsxs("div",{className:"requestR",children:[c.jsxs("div",{className:"request-content",children:[c.jsxs("div",{className:"the-content",children:[c.jsx("img",{src:Np,alt:""}),c.jsxs("p",{children:[c.jsxs("span",{children:[m.data().senderName," Wants : "]}),m.data().content]})]}),c.jsxs("div",{className:"the-content",children:[c.jsx("img",{src:Ap,alt:""}),c.jsxs("p",{children:[m.data().price,c.jsx("span",{id:"dt",children:"Dt"})]})]})]}),c.jsxs("div",{className:"thumbs",children:[c.jsx(ED,{onClick:()=>{n(We(z,"requests",`${m.id}`),f,v)},size:"30px",className:"thumb"}),c.jsx(wD,{onClick:()=>{d(!0)},id:"thumb-down",size:"30px",className:"thumb"})]}),h&&c.jsxs("form",{children:[c.jsx("input",{type:"text",onChange:S=>{u(S.target.value)}}),c.jsx("button",{onClick:S=>{r(We(z,"requests",`${m.id}`),l,t.displayName)}})]})]}));return c.jsxs("div",{className:"notification",children:[c.jsx(ra,{}),c.jsxs("div",{className:"noti-content",children:[c.jsxs("div",{className:"received",children:[c.jsx("h5",{children:"Requests received"}),c.jsx("div",{className:"received-content",children:p})]}),c.jsxs("div",{className:"sent",children:[c.jsx("h5",{children:"Requests sent"}),c.jsx("div",{className:"sent-content",children:g})]})]})]})}function _D(){return c.jsxs("div",{children:[c.jsx(ra,{}),c.jsxs("div",{className:"about",children:[c.jsx("div",{className:"square"}),c.jsxs("div",{className:"text",children:[c.jsx("h2",{className:"h2",children:"Etudyonet Makes student life"}),c.jsx("span",{children:"Simple"})]}),c.jsxs("div",{className:"men",children:[c.jsxs("div",{className:"man1",children:[c.jsx("div",{className:"head",children:c.jsx("h2",{children:"Community"})}),c.jsxs("div",{className:"body",children:[c.jsx("h2",{children:"As an Etudiant, only Etudyonet can solve your problems."}),c.jsx("h3",{children:"We all know that students can provide more than people think they can."}),c.jsx("h3",{children:" That's why we created Etudyonet, a platform where you can find students from all parts of Tunisia."})]})]}),c.jsxs("div",{className:"man2",children:[c.jsx("div",{className:"head",children:c.jsx("h2",{children:"Side hustle"})}),c.jsxs("div",{className:"body",children:[c.jsx("h2",{children:"On Etudyonet, you get paid for doing what you love."}),c.jsx("h3",{children:"Provide what you love doing to others as a service and get paid!"})]})]}),c.jsxs("div",{className:"man3",children:[c.jsx("div",{className:"head",children:c.jsx("h2",{children:"Market"})}),c.jsxs("div",{className:"body",children:[c.jsx("h2",{children:"Etudyonet provide more than experts."}),c.jsx("h3",{children:"Students can be better than experts at doing what they love!"})]})]})]})]})]})}function ID(){const[t,e]=w.useState(),[n,r]=w.useState(),[i,s]=w.useState(),{user:o,updateUser:a}=cn(),[l,u]=w.useState(!1);Qt();const[h,d]=w.useState(),[f,y]=w.useState(),[v,E]=w.useState(),[_,g]=w.useState(),[p,m]=w.useState(),[S,k]=w.useState(),[I,x]=w.useState(),[P,M]=w.useState(),[D,K]=w.useState(),[fe,te]=w.useState(),[oe,ke]=w.useState(),[Ce,Me]=w.useState();w.useEffect(()=>{var R;Oe(De(ie(z,"users"),ve("id","==",`${(R=F==null?void 0:F.currentUser)==null?void 0:R.uid}`)),U=>{U.docs.forEach(W=>{ke(W.data().name),d(W.data().email),E(W.data().bio),m(W.data().messanger),x(W.data().instagram),K(W.data().phoneNumber),r(W.data().passowrd),s(W.id)})})},[o]);const N=async R=>{R.preventDefault(),e("");try{await a(f,h,i,_,v,S,p,P,I,fe,D,Ce,oe),u(!1)}catch(U){e(U.message),console.log(U.message)}};return c.jsx("div",{className:"settings",children:c.jsxs("form",{onSubmit:N,children:[t&&c.jsx("p",{id:"error",children:"tchu tchu motherfucker"}),c.jsx("div",{className:"inputBox",children:c.jsx("input",{onChange:R=>{Me(R.target.value)},defaultValue:oe,required:!0})}),c.jsx("div",{className:"inputBox",children:c.jsx("input",{onChange:R=>{y(R.target.value)},defaultValue:h,required:!0})}),c.jsx("div",{className:"inputBox",children:c.jsx("input",{onChange:R=>{g(R.target.value)},defaultValue:v,required:!0})}),c.jsx("div",{className:"inputBox",children:c.jsx("input",{onChange:R=>{k(R.target.value)},defaultValue:p,required:!0})}),c.jsx("div",{className:"inputBox",children:c.jsx("input",{onChange:R=>{M(R.target.value)},defaultValue:I,required:!0})}),c.jsx("div",{className:"inputBox",children:c.jsx("input",{onChange:R=>{te(R.target.value)},defaultValue:D,required:!0})}),l?c.jsx("button",{children:c.jsx("i",{className:"fa fa-spinner fa-spin"})}):c.jsx("button",{onClick:()=>{u(!0)},children:"update"})]})})}function TD(){return c.jsx("div",{children:c.jsx(rD,{children:c.jsxs(wT,{children:[c.jsx(Zt,{path:"/",element:c.jsx(ii,{children:c.jsx(fD,{})})}),c.jsx(Zt,{path:"/about",element:c.jsx(ii,{children:c.jsx(_D,{})})}),c.jsx(Zt,{path:"/settings",element:c.jsx(ii,{children:c.jsx(ID,{})})}),c.jsx(Zt,{path:"/profile",element:c.jsxs(ii,{children:[c.jsx("img",{src:cd,alt:"banner",className:"banner"}),c.jsx(pD,{})]})}),c.jsx(Zt,{path:"/users/:id",element:c.jsxs(ii,{children:[c.jsx("img",{src:cd,alt:"banner",className:"banner"}),c.jsx(yD,{})]})}),c.jsx(Zt,{path:"/notifications",element:c.jsx(ii,{children:c.jsx(SD,{})})}),c.jsx(Zt,{path:"/signin",element:c.jsx(wy,{children:c.jsx(mD,{})})}),c.jsx(Zt,{path:"/signup",element:c.jsx(wy,{children:c.jsx(gD,{})})}),c.jsx(Zt,{path:"*",element:c.jsx(vD,{})})]})})})}Uc.createRoot(document.getElementById("root")).render(c.jsx(vn.StrictMode,{children:c.jsx(kT,{children:c.jsx(TD,{})})}));
