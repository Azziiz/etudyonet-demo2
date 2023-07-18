function sS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function oS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _y={exports:{}},Gl={},Iy={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),aS=Symbol.for("react.portal"),lS=Symbol.for("react.fragment"),uS=Symbol.for("react.strict_mode"),cS=Symbol.for("react.profiler"),hS=Symbol.for("react.provider"),dS=Symbol.for("react.context"),fS=Symbol.for("react.forward_ref"),pS=Symbol.for("react.suspense"),mS=Symbol.for("react.memo"),gS=Symbol.for("react.lazy"),Pp=Symbol.iterator;function yS(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var Ty={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ky=Object.assign,Cy={};function Wi(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||Ty}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xy(){}xy.prototype=Wi.prototype;function dd(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||Ty}var fd=dd.prototype=new xy;fd.constructor=dd;ky(fd,Wi.prototype);fd.isPureReactComponent=!0;var Dp=Array.isArray,Ay=Object.prototype.hasOwnProperty,pd={current:null},Ny={key:!0,ref:!0,__self:!0,__source:!0};function Ry(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ay.call(e,r)&&!Ny.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ko,type:t,key:s,ref:o,props:i,_owner:pd.current}}function vS(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function md(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function wS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Op=/\/+/g;function qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wS(""+t.key):e.toString(36)}function Oa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ko:case aS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qu(o,0):r,Dp(i)?(n="",t!=null&&(n=t.replace(Op,"$&/")+"/"),Oa(i,e,n,"",function(u){return u})):i!=null&&(md(i)&&(i=vS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Op,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+qu(s,a);o+=Oa(s,e,n,l,i)}else if(l=yS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+qu(s,a++),o+=Oa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function aa(t,e,n){if(t==null)return t;var r=[],i=0;return Oa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ES(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},La={transition:null},SS={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:La,ReactCurrentOwner:pd};K.Children={map:aa,forEach:function(t,e,n){aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return aa(t,function(){e++}),e},toArray:function(t){return aa(t,function(e){return e})||[]},only:function(t){if(!md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Wi;K.Fragment=lS;K.Profiler=cS;K.PureComponent=dd;K.StrictMode=uS;K.Suspense=pS;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ky({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ay.call(e,l)&&!Ny.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ko,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:dS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hS,_context:t},t.Consumer=t};K.createElement=Ry;K.createFactory=function(t){var e=Ry.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:fS,render:t}};K.isValidElement=md;K.lazy=function(t){return{$$typeof:gS,_payload:{_status:-1,_result:t},_init:ES}};K.memo=function(t,e){return{$$typeof:mS,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=La.transition;La.transition={};try{t()}finally{La.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return ht.current.useCallback(t,e)};K.useContext=function(t){return ht.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};K.useEffect=function(t,e){return ht.current.useEffect(t,e)};K.useId=function(){return ht.current.useId()};K.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return ht.current.useMemo(t,e)};K.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};K.useRef=function(t){return ht.current.useRef(t)};K.useState=function(t){return ht.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return ht.current.useTransition()};K.version="18.2.0";Iy.exports=K;var E=Iy.exports;const gn=oS(E),_S=sS({__proto__:null,default:gn},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IS=E,TS=Symbol.for("react.element"),kS=Symbol.for("react.fragment"),CS=Object.prototype.hasOwnProperty,xS=IS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AS={key:!0,ref:!0,__self:!0,__source:!0};function Py(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)CS.call(e,r)&&!AS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TS,type:t,key:s,ref:o,props:i,_owner:xS.current}}Gl.Fragment=kS;Gl.jsx=Py;Gl.jsxs=Py;_y.exports=Gl;var c=_y.exports,Uc={},Dy={exports:{}},At={},Oy={exports:{}},Ly={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,M){var V=R.length;R.push(M);e:for(;0<V;){var se=V-1>>>1,ye=R[se];if(0<i(ye,M))R[se]=M,R[V]=ye,V=se;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],V=R.pop();if(V!==M){R[0]=V;e:for(var se=0,ye=R.length,An=ye>>>1;se<An;){var Dt=2*(se+1)-1,gr=R[Dt],rt=Dt+1,Nn=R[rt];if(0>i(gr,V))rt<ye&&0>i(Nn,gr)?(R[se]=Nn,R[rt]=V,se=rt):(R[se]=gr,R[Dt]=V,se=Dt);else if(rt<ye&&0>i(Nn,V))R[se]=Nn,R[rt]=V,se=rt;else break e}}return M}function i(R,M){var V=R.sortIndex-M.sortIndex;return V!==0?V:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,d=null,f=3,y=!1,v=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=R)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function S(R){if(w=!1,m(R),!v)if(n(l)!==null)v=!0,on(C);else{var M=n(u);M!==null&&Ft(S,M.startTime-R)}}function C(R,M){v=!1,w&&(w=!1,g(N),N=-1),y=!0;var V=f;try{for(m(M),d=n(l);d!==null&&(!(d.expirationTime>M)||R&&!J());){var se=d.callback;if(typeof se=="function"){d.callback=null,f=d.priorityLevel;var ye=se(d.expirationTime<=M);M=t.unstable_now(),typeof ye=="function"?d.callback=ye:d===n(l)&&r(l),m(M)}else r(l);d=n(l)}if(d!==null)var An=!0;else{var Dt=n(u);Dt!==null&&Ft(S,Dt.startTime-M),An=!1}return An}finally{d=null,f=V,y=!1}}var _=!1,k=null,N=-1,H=5,b=-1;function J(){return!(t.unstable_now()-b<H)}function Te(){if(k!==null){var R=t.unstable_now();b=R;var M=!0;try{M=k(!0,R)}finally{M?Ne():(_=!1,k=null)}}else _=!1}var Ne;if(typeof p=="function")Ne=function(){p(Te)};else if(typeof MessageChannel<"u"){var Rt=new MessageChannel,Pt=Rt.port2;Rt.port1.onmessage=Te,Ne=function(){Pt.postMessage(null)}}else Ne=function(){I(Te,0)};function on(R){k=R,_||(_=!0,Ne())}function Ft(R,M){N=I(function(){R(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,on(C))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var V=f;f=M;try{return R()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var V=f;f=R;try{return M()}finally{f=V}},t.unstable_scheduleCallback=function(R,M,V){var se=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?se+V:se):V=se,R){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=V+ye,R={id:h++,callback:M,priorityLevel:R,startTime:V,expirationTime:ye,sortIndex:-1},V>se?(R.sortIndex=V,e(u,R),n(l)===null&&R===n(u)&&(w?(g(N),N=-1):w=!0,Ft(S,V-se))):(R.sortIndex=ye,e(l,R),v||y||(v=!0,on(C))),R},t.unstable_shouldYield=J,t.unstable_wrapCallback=function(R){var M=f;return function(){var V=f;f=M;try{return R.apply(this,arguments)}finally{f=V}}}})(Ly);Oy.exports=Ly;var NS=Oy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=E,Ct=NS;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jy=new Set,Hs={};function Yr(t,e){xi(t,e),xi(t+"Capture",e)}function xi(t,e){for(Hs[t]=e,t=0;t<e.length;t++)jy.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=Object.prototype.hasOwnProperty,RS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lp={},Mp={};function PS(t){return $c.call(Mp,t)?!0:$c.call(Lp,t)?!1:RS.test(t)?Mp[t]=!0:(Lp[t]=!0,!1)}function DS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OS(t,e,n,r){if(e===null||typeof e>"u"||DS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var gd=/[\-:]([a-z])/g;function yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gd,yd);Ke[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gd,yd);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gd,yd);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function vd(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OS(e,n,i,r)&&(n=null),r||i===null?PS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kn=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),ni=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),wd=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),by=Symbol.for("react.provider"),Uy=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),Sd=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),$y=Symbol.for("react.offscreen"),jp=Symbol.iterator;function cs(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,Wu;function Es(t){if(Wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||""}return`
`+Wu+t}var Ku=!1;function Gu(t,e){if(!t||Ku)return"";Ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function LS(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ri:return"Fragment";case ni:return"Portal";case Fc:return"Profiler";case wd:return"StrictMode";case Bc:return"Suspense";case Vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uy:return(t.displayName||"Context")+".Consumer";case by:return(t._context.displayName||"Context")+".Provider";case Ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sd:return e=t.displayName||null,e!==null?e:zc(t.type)||"Memo";case On:e=t._payload,t=t._init;try{return zc(t(e))}catch{}}return null}function MS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zc(e);case 8:return e===wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jS(t){var e=Fy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ua(t){t._valueTracker||(t._valueTracker=jS(t))}function By(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Fy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hc(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vy(t,e){e=e.checked,e!=null&&vd(t,"checked",e,!1)}function qc(t,e){Vy(t,e);var n=rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wc(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wc(t,e,n){(e!=="number"||Za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ss=Array.isArray;function yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Ss(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function zy(t,e){var n=rr(e.value),r=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ca,qy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bS=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){bS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function Wy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function Ky(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var US=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yc(t,e){if(e){if(US[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xc=null;function _d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jc=null,vi=null,wi=null;function Bp(t){if(t=Ao(t)){if(typeof Jc!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Zl(e),Jc(t.stateNode,t.type,e))}}function Gy(t){vi?wi?wi.push(t):wi=[t]:vi=t}function Yy(){if(vi){var t=vi,e=wi;if(wi=vi=null,Bp(t),e)for(t=0;t<e.length;t++)Bp(e[t])}}function Qy(t,e){return t(e)}function Xy(){}var Yu=!1;function Jy(t,e,n){if(Yu)return t(e,n);Yu=!0;try{return Qy(t,e,n)}finally{Yu=!1,(vi!==null||wi!==null)&&(Xy(),Yy())}}function Ws(t,e){var n=t.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Zc=!1;if(wn)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{Zc=!1}function $S(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Rs=!1,el=null,tl=!1,eh=null,FS={onError:function(t){Rs=!0,el=t}};function BS(t,e,n,r,i,s,o,a,l){Rs=!1,el=null,$S.apply(FS,arguments)}function VS(t,e,n,r,i,s,o,a,l){if(BS.apply(this,arguments),Rs){if(Rs){var u=el;Rs=!1,el=null}else throw Error(x(198));tl||(tl=!0,eh=u)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vp(t){if(Qr(t)!==t)throw Error(x(188))}function zS(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vp(i),t;if(s===r)return Vp(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function ev(t){return t=zS(t),t!==null?tv(t):null}function tv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tv(t);if(e!==null)return e;t=t.sibling}return null}var nv=Ct.unstable_scheduleCallback,zp=Ct.unstable_cancelCallback,HS=Ct.unstable_shouldYield,qS=Ct.unstable_requestPaint,Ee=Ct.unstable_now,WS=Ct.unstable_getCurrentPriorityLevel,Id=Ct.unstable_ImmediatePriority,rv=Ct.unstable_UserBlockingPriority,nl=Ct.unstable_NormalPriority,KS=Ct.unstable_LowPriority,iv=Ct.unstable_IdlePriority,Yl=null,Zt=null;function GS(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:XS,YS=Math.log,QS=Math.LN2;function XS(t){return t>>>=0,t===0?32:31-(YS(t)/QS|0)|0}var ha=64,da=4194304;function _s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_s(a):(s&=o,s!==0&&(r=_s(s)))}else o=n&~i,o!==0?r=_s(o):s!==0&&(r=_s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),i=1<<n,r|=t[n],e&=~i;return r}function JS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=JS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sv(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function Qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function e_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function ov(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var av,kd,lv,uv,cv,nh=!1,fa=[],qn=null,Wn=null,Kn=null,Ks=new Map,Gs=new Map,Mn=[],t_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function ds(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ao(e),e!==null&&kd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function n_(t,e,n,r,i){switch(e){case"focusin":return qn=ds(qn,t,e,n,r,i),!0;case"dragenter":return Wn=ds(Wn,t,e,n,r,i),!0;case"mouseover":return Kn=ds(Kn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ks.set(s,ds(Ks.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gs.set(s,ds(Gs.get(s)||null,t,e,n,r,i)),!0}return!1}function hv(t){var e=Sr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zy(n),e!==null){t.blockedOn=e,cv(t.priority,function(){lv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xc=r,n.target.dispatchEvent(r),Xc=null}else return e=Ao(n),e!==null&&kd(e),t.blockedOn=n,!1;e.shift()}return!0}function qp(t,e,n){Ma(t)&&n.delete(e)}function r_(){nh=!1,qn!==null&&Ma(qn)&&(qn=null),Wn!==null&&Ma(Wn)&&(Wn=null),Kn!==null&&Ma(Kn)&&(Kn=null),Ks.forEach(qp),Gs.forEach(qp)}function fs(t,e){t.blockedOn===e&&(t.blockedOn=null,nh||(nh=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,r_)))}function Ys(t){function e(i){return fs(i,t)}if(0<fa.length){fs(fa[0],t);for(var n=1;n<fa.length;n++){var r=fa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&fs(qn,t),Wn!==null&&fs(Wn,t),Kn!==null&&fs(Kn,t),Ks.forEach(e),Gs.forEach(e),n=0;n<Mn.length;n++)r=Mn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mn.length&&(n=Mn[0],n.blockedOn===null);)hv(n),n.blockedOn===null&&Mn.shift()}var Ei=kn.ReactCurrentBatchConfig,il=!0;function i_(t,e,n,r){var i=te,s=Ei.transition;Ei.transition=null;try{te=1,Cd(t,e,n,r)}finally{te=i,Ei.transition=s}}function s_(t,e,n,r){var i=te,s=Ei.transition;Ei.transition=null;try{te=4,Cd(t,e,n,r)}finally{te=i,Ei.transition=s}}function Cd(t,e,n,r){if(il){var i=rh(t,e,n,r);if(i===null)oc(t,e,r,sl,n),Hp(t,r);else if(n_(i,t,e,n,r))r.stopPropagation();else if(Hp(t,r),e&4&&-1<t_.indexOf(t)){for(;i!==null;){var s=Ao(i);if(s!==null&&av(s),s=rh(t,e,n,r),s===null&&oc(t,e,r,sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else oc(t,e,r,null,n)}}var sl=null;function rh(t,e,n,r){if(sl=null,t=_d(r),t=Sr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function dv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WS()){case Id:return 1;case rv:return 4;case nl:case KS:return 16;case iv:return 536870912;default:return 16}default:return 16}}var Vn=null,xd=null,ja=null;function fv(){if(ja)return ja;var t,e=xd,n=e.length,r,i="value"in Vn?Vn.value:Vn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ja=i.slice(t,1<r?1-r:void 0)}function ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pa(){return!0}function Wp(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pa:Wp,this.isPropagationStopped=Wp,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),e}var Ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ad=Nt(Ki),xo=ge({},Ki,{view:0,detail:0}),o_=Nt(xo),Xu,Ju,ps,Ql=ge({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ps&&(ps&&t.type==="mousemove"?(Xu=t.screenX-ps.screenX,Ju=t.screenY-ps.screenY):Ju=Xu=0,ps=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),Kp=Nt(Ql),a_=ge({},Ql,{dataTransfer:0}),l_=Nt(a_),u_=ge({},xo,{relatedTarget:0}),Zu=Nt(u_),c_=ge({},Ki,{animationName:0,elapsedTime:0,pseudoElement:0}),h_=Nt(c_),d_=ge({},Ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f_=Nt(d_),p_=ge({},Ki,{data:0}),Gp=Nt(p_),m_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y_[t])?!!e[t]:!1}function Nd(){return v_}var w_=ge({},xo,{key:function(t){if(t.key){var e=m_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nd,charCode:function(t){return t.type==="keypress"?ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),E_=Nt(w_),S_=ge({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=Nt(S_),__=ge({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nd}),I_=Nt(__),T_=ge({},Ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),k_=Nt(T_),C_=ge({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=Nt(C_),A_=[9,13,27,32],Rd=wn&&"CompositionEvent"in window,Ps=null;wn&&"documentMode"in document&&(Ps=document.documentMode);var N_=wn&&"TextEvent"in window&&!Ps,pv=wn&&(!Rd||Ps&&8<Ps&&11>=Ps),Qp=String.fromCharCode(32),Xp=!1;function mv(t,e){switch(t){case"keyup":return A_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ii=!1;function R_(t,e){switch(t){case"compositionend":return gv(e);case"keypress":return e.which!==32?null:(Xp=!0,Qp);case"textInput":return t=e.data,t===Qp&&Xp?null:t;default:return null}}function P_(t,e){if(ii)return t==="compositionend"||!Rd&&mv(t,e)?(t=fv(),ja=xd=Vn=null,ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pv&&e.locale!=="ko"?null:e.data;default:return null}}var D_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!D_[t.type]:e==="textarea"}function yv(t,e,n,r){Gy(r),e=ol(e,"onChange"),0<e.length&&(n=new Ad("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,Qs=null;function O_(t){Av(t,0)}function Xl(t){var e=ai(t);if(By(e))return t}function L_(t,e){if(t==="change")return e}var vv=!1;if(wn){var ec;if(wn){var tc="oninput"in document;if(!tc){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),tc=typeof Zp.oninput=="function"}ec=tc}else ec=!1;vv=ec&&(!document.documentMode||9<document.documentMode)}function em(){Ds&&(Ds.detachEvent("onpropertychange",wv),Qs=Ds=null)}function wv(t){if(t.propertyName==="value"&&Xl(Qs)){var e=[];yv(e,Qs,t,_d(t)),Jy(O_,e)}}function M_(t,e,n){t==="focusin"?(em(),Ds=e,Qs=n,Ds.attachEvent("onpropertychange",wv)):t==="focusout"&&em()}function j_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Qs)}function b_(t,e){if(t==="click")return Xl(e)}function U_(t,e){if(t==="input"||t==="change")return Xl(e)}function $_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:$_;function Xs(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$c.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,e){var n=tm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tm(n)}}function Ev(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ev(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sv(){for(var t=window,e=Za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Za(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F_(t){var e=Sv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ev(n.ownerDocument.documentElement,n)){if(r!==null&&Pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nm(n,s);var o=nm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var B_=wn&&"documentMode"in document&&11>=document.documentMode,si=null,ih=null,Os=null,sh=!1;function rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sh||si==null||si!==Za(r)||(r=si,"selectionStart"in r&&Pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&Xs(Os,r)||(Os=r,r=ol(ih,"onSelect"),0<r.length&&(e=new Ad("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=si)))}function ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oi={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},nc={},_v={};wn&&(_v=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Jl(t){if(nc[t])return nc[t];if(!oi[t])return t;var e=oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _v)return nc[t]=e[n];return t}var Iv=Jl("animationend"),Tv=Jl("animationiteration"),kv=Jl("animationstart"),Cv=Jl("transitionend"),xv=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){xv.set(t,e),Yr(e,[t])}for(var rc=0;rc<im.length;rc++){var ic=im[rc],V_=ic.toLowerCase(),z_=ic[0].toUpperCase()+ic.slice(1);ur(V_,"on"+z_)}ur(Iv,"onAnimationEnd");ur(Tv,"onAnimationIteration");ur(kv,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Cv,"onTransitionEnd");xi("onMouseEnter",["mouseout","mouseover"]);xi("onMouseLeave",["mouseout","mouseover"]);xi("onPointerEnter",["pointerout","pointerover"]);xi("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function sm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,VS(r,e,void 0,t),t.currentTarget=null}function Av(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;sm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;sm(i,a,u),s=l}}}if(tl)throw t=eh,tl=!1,eh=null,t}function oe(t,e){var n=e[ch];n===void 0&&(n=e[ch]=new Set);var r=t+"__bubble";n.has(r)||(Nv(e,t,2,!1),n.add(r))}function sc(t,e,n){var r=0;e&&(r|=4),Nv(n,t,r,e)}var ga="_reactListening"+Math.random().toString(36).slice(2);function Js(t){if(!t[ga]){t[ga]=!0,jy.forEach(function(n){n!=="selectionchange"&&(H_.has(n)||sc(n,!1,t),sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ga]||(e[ga]=!0,sc("selectionchange",!1,e))}}function Nv(t,e,n,r){switch(dv(e)){case 1:var i=i_;break;case 4:i=s_;break;default:i=Cd}n=i.bind(null,e,n,t),i=void 0,!Zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function oc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Jy(function(){var u=s,h=_d(n),d=[];e:{var f=xv.get(t);if(f!==void 0){var y=Ad,v=t;switch(t){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":y=E_;break;case"focusin":v="focus",y=Zu;break;case"focusout":v="blur",y=Zu;break;case"beforeblur":case"afterblur":y=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=l_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=I_;break;case Iv:case Tv:case kv:y=h_;break;case Cv:y=k_;break;case"scroll":y=o_;break;case"wheel":y=x_;break;case"copy":case"cut":case"paste":y=f_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Yp}var w=(e&4)!==0,I=!w&&t==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var p=u,m;p!==null;){m=p;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,g!==null&&(S=Ws(p,g),S!=null&&w.push(Zs(p,S,m)))),I)break;p=p.return}0<w.length&&(f=new y(f,v,null,n,h),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==Xc&&(v=n.relatedTarget||n.fromElement)&&(Sr(v)||v[En]))break e;if((y||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Sr(v):null,v!==null&&(I=Qr(v),v!==I||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Kp,S="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Yp,S="onPointerLeave",g="onPointerEnter",p="pointer"),I=y==null?f:ai(y),m=v==null?f:ai(v),f=new w(S,p+"leave",y,n,h),f.target=I,f.relatedTarget=m,S=null,Sr(h)===u&&(w=new w(g,p+"enter",v,n,h),w.target=m,w.relatedTarget=I,S=w),I=S,y&&v)t:{for(w=y,g=v,p=0,m=w;m;m=ei(m))p++;for(m=0,S=g;S;S=ei(S))m++;for(;0<p-m;)w=ei(w),p--;for(;0<m-p;)g=ei(g),m--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=ei(w),g=ei(g)}w=null}else w=null;y!==null&&om(d,f,y,w,!1),v!==null&&I!==null&&om(d,I,v,w,!0)}}e:{if(f=u?ai(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var C=L_;else if(Jp(f))if(vv)C=U_;else{C=j_;var _=M_}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=b_);if(C&&(C=C(t,u))){yv(d,C,n,h);break e}_&&_(t,f,u),t==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Wc(f,"number",f.value)}switch(_=u?ai(u):window,t){case"focusin":(Jp(_)||_.contentEditable==="true")&&(si=_,ih=u,Os=null);break;case"focusout":Os=ih=si=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,rm(d,n,h);break;case"selectionchange":if(B_)break;case"keydown":case"keyup":rm(d,n,h)}var k;if(Rd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ii?mv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(pv&&n.locale!=="ko"&&(ii||N!=="onCompositionStart"?N==="onCompositionEnd"&&ii&&(k=fv()):(Vn=h,xd="value"in Vn?Vn.value:Vn.textContent,ii=!0)),_=ol(u,N),0<_.length&&(N=new Gp(N,t,null,n,h),d.push({event:N,listeners:_}),k?N.data=k:(k=gv(n),k!==null&&(N.data=k)))),(k=N_?R_(t,n):P_(t,n))&&(u=ol(u,"onBeforeInput"),0<u.length&&(h=new Gp("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=k))}Av(d,e)})}function Zs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ws(t,n),s!=null&&r.unshift(Zs(t,s,i)),s=Ws(t,e),s!=null&&r.push(Zs(t,s,i))),t=t.return}return r}function ei(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function om(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ws(n,s),l!=null&&o.unshift(Zs(n,l,a))):i||(l=Ws(n,s),l!=null&&o.push(Zs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var q_=/\r\n?/g,W_=/\u0000|\uFFFD/g;function am(t){return(typeof t=="string"?t:""+t).replace(q_,`
`).replace(W_,"")}function ya(t,e,n){if(e=am(e),am(t)!==e&&n)throw Error(x(425))}function al(){}var oh=null,ah=null;function lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uh=typeof setTimeout=="function"?setTimeout:void 0,K_=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,G_=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(t){return lm.resolve(null).then(t).catch(Y_)}:uh;function Y_(t){setTimeout(function(){throw t})}function ac(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ys(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ys(e)}function Gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gi=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Gi,eo="__reactProps$"+Gi,En="__reactContainer$"+Gi,ch="__reactEvents$"+Gi,Q_="__reactListeners$"+Gi,X_="__reactHandles$"+Gi;function Sr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[En]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=um(t);t!==null;){if(n=t[Xt])return n;t=um(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[Xt]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Zl(t){return t[eo]||null}var hh=[],li=-1;function cr(t){return{current:t}}function le(t){0>li||(t.current=hh[li],hh[li]=null,li--)}function re(t,e){li++,hh[li]=t.current,t.current=e}var ir={},nt=cr(ir),yt=cr(!1),Or=ir;function Ai(t,e){var n=t.type.contextTypes;if(!n)return ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function ll(){le(yt),le(nt)}function cm(t,e,n){if(nt.current!==ir)throw Error(x(168));re(nt,e),re(yt,n)}function Rv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,MS(t)||"Unknown",i));return ge({},n,r)}function ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Or=nt.current,re(nt,t),re(yt,yt.current),!0}function hm(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Rv(t,e,Or),r.__reactInternalMemoizedMergedChildContext=t,le(yt),le(nt),re(nt,t)):le(yt),re(yt,n)}var cn=null,eu=!1,lc=!1;function Pv(t){cn===null?cn=[t]:cn.push(t)}function J_(t){eu=!0,Pv(t)}function hr(){if(!lc&&cn!==null){lc=!0;var t=0,e=te;try{var n=cn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cn=null,eu=!1}catch(i){throw cn!==null&&(cn=cn.slice(t+1)),nv(Id,hr),i}finally{te=e,lc=!1}}return null}var ui=[],ci=0,cl=null,hl=0,Lt=[],Mt=0,Lr=null,hn=1,dn="";function vr(t,e){ui[ci++]=hl,ui[ci++]=cl,cl=t,hl=e}function Dv(t,e,n){Lt[Mt++]=hn,Lt[Mt++]=dn,Lt[Mt++]=Lr,Lr=t;var r=hn;t=dn;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var s=32-qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hn=1<<32-qt(e)+i|n<<i|r,dn=s+t}else hn=1<<s|n<<i|r,dn=t}function Dd(t){t.return!==null&&(vr(t,1),Dv(t,1,0))}function Od(t){for(;t===cl;)cl=ui[--ci],ui[ci]=null,hl=ui[--ci],ui[ci]=null;for(;t===Lr;)Lr=Lt[--Mt],Lt[Mt]=null,dn=Lt[--Mt],Lt[Mt]=null,hn=Lt[--Mt],Lt[Mt]=null}var kt=null,It=null,ce=!1,Ht=null;function Ov(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,It=Gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:hn,overflow:dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,It=null,!0):!1;default:return!1}}function dh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fh(t){if(ce){var e=It;if(e){var n=e;if(!dm(t,e)){if(dh(t))throw Error(x(418));e=Gn(n.nextSibling);var r=kt;e&&dm(t,e)?Ov(r,n):(t.flags=t.flags&-4097|2,ce=!1,kt=t)}}else{if(dh(t))throw Error(x(418));t.flags=t.flags&-4097|2,ce=!1,kt=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function va(t){if(t!==kt)return!1;if(!ce)return fm(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lh(t.type,t.memoizedProps)),e&&(e=It)){if(dh(t))throw Lv(),Error(x(418));for(;e;)Ov(t,e),e=Gn(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=Gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=kt?Gn(t.stateNode.nextSibling):null;return!0}function Lv(){for(var t=It;t;)t=Gn(t.nextSibling)}function Ni(){It=kt=null,ce=!1}function Ld(t){Ht===null?Ht=[t]:Ht.push(t)}var Z_=kn.ReactCurrentBatchConfig;function Vt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var dl=cr(null),fl=null,hi=null,Md=null;function jd(){Md=hi=fl=null}function bd(t){var e=dl.current;le(dl),t._currentValue=e}function ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Si(t,e){fl=t,Md=hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(Md!==t)if(t={context:t,memoizedValue:e,next:null},hi===null){if(fl===null)throw Error(x(308));hi=t,fl.dependencies={lanes:0,firstContext:t}}else hi=hi.next=t;return e}var _r=null;function Ud(t){_r===null?_r=[t]:_r.push(t)}function Mv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ud(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ln=!1;function $d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ud(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sn(t,n)}function Ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}function pm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,r){var i=t.updateQueue;Ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(f=e,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=ge({},d,f);break e;case 2:Ln=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=y,l=d):h=h.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=d}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var bv=new My.Component().refs;function mh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=Xn(t),s=yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Wt(e,t,i,r),Ua(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=Xn(t),s=yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Wt(e,t,i,r),Ua(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=Xn(t),i=yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yn(t,i,r),e!==null&&(Wt(e,t,r,n),Ua(e,t,r))}};function gm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xs(n,r)||!Xs(i,s):!0}function Uv(t,e,n){var r=!1,i=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=vt(e)?Or:nt.current,r=e.contextTypes,s=(r=r!=null)?Ai(t,i):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ym(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function gh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=bv,$d(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=vt(e)?Or:nt.current,i.context=Ai(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tu.enqueueReplaceState(i,i.state,null),pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===bv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function wa(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vm(t){var e=t._init;return e(t._payload)}function $v(t){function e(g,p){if(t){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Jn(g,p),g.index=0,g.sibling=null,g}function s(g,p,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,m,S){return p===null||p.tag!==6?(p=mc(m,g.mode,S),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,S){var C=m.type;return C===ri?h(g,p,m.props.children,S,m.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===On&&vm(C)===p.type)?(S=i(p,m.props),S.ref=ms(g,p,m),S.return=g,S):(S=Ha(m.type,m.key,m.props,null,g.mode,S),S.ref=ms(g,p,m),S.return=g,S)}function u(g,p,m,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=gc(m,g.mode,S),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function h(g,p,m,S,C){return p===null||p.tag!==7?(p=xr(m,g.mode,S,C),p.return=g,p):(p=i(p,m),p.return=g,p)}function d(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=mc(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case la:return m=Ha(p.type,p.key,p.props,null,g.mode,m),m.ref=ms(g,null,p),m.return=g,m;case ni:return p=gc(p,g.mode,m),p.return=g,p;case On:var S=p._init;return d(g,S(p._payload),m)}if(Ss(p)||cs(p))return p=xr(p,g.mode,m,null),p.return=g,p;wa(g,p)}return null}function f(g,p,m,S){var C=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(g,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case la:return m.key===C?l(g,p,m,S):null;case ni:return m.key===C?u(g,p,m,S):null;case On:return C=m._init,f(g,p,C(m._payload),S)}if(Ss(m)||cs(m))return C!==null?null:h(g,p,m,S,null);wa(g,m)}return null}function y(g,p,m,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(m)||null,a(p,g,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case la:return g=g.get(S.key===null?m:S.key)||null,l(p,g,S,C);case ni:return g=g.get(S.key===null?m:S.key)||null,u(p,g,S,C);case On:var _=S._init;return y(g,p,m,_(S._payload),C)}if(Ss(S)||cs(S))return g=g.get(m)||null,h(p,g,S,C,null);wa(p,S)}return null}function v(g,p,m,S){for(var C=null,_=null,k=p,N=p=0,H=null;k!==null&&N<m.length;N++){k.index>N?(H=k,k=null):H=k.sibling;var b=f(g,k,m[N],S);if(b===null){k===null&&(k=H);break}t&&k&&b.alternate===null&&e(g,k),p=s(b,p,N),_===null?C=b:_.sibling=b,_=b,k=H}if(N===m.length)return n(g,k),ce&&vr(g,N),C;if(k===null){for(;N<m.length;N++)k=d(g,m[N],S),k!==null&&(p=s(k,p,N),_===null?C=k:_.sibling=k,_=k);return ce&&vr(g,N),C}for(k=r(g,k);N<m.length;N++)H=y(k,g,N,m[N],S),H!==null&&(t&&H.alternate!==null&&k.delete(H.key===null?N:H.key),p=s(H,p,N),_===null?C=H:_.sibling=H,_=H);return t&&k.forEach(function(J){return e(g,J)}),ce&&vr(g,N),C}function w(g,p,m,S){var C=cs(m);if(typeof C!="function")throw Error(x(150));if(m=C.call(m),m==null)throw Error(x(151));for(var _=C=null,k=p,N=p=0,H=null,b=m.next();k!==null&&!b.done;N++,b=m.next()){k.index>N?(H=k,k=null):H=k.sibling;var J=f(g,k,b.value,S);if(J===null){k===null&&(k=H);break}t&&k&&J.alternate===null&&e(g,k),p=s(J,p,N),_===null?C=J:_.sibling=J,_=J,k=H}if(b.done)return n(g,k),ce&&vr(g,N),C;if(k===null){for(;!b.done;N++,b=m.next())b=d(g,b.value,S),b!==null&&(p=s(b,p,N),_===null?C=b:_.sibling=b,_=b);return ce&&vr(g,N),C}for(k=r(g,k);!b.done;N++,b=m.next())b=y(k,g,N,b.value,S),b!==null&&(t&&b.alternate!==null&&k.delete(b.key===null?N:b.key),p=s(b,p,N),_===null?C=b:_.sibling=b,_=b);return t&&k.forEach(function(Te){return e(g,Te)}),ce&&vr(g,N),C}function I(g,p,m,S){if(typeof m=="object"&&m!==null&&m.type===ri&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case la:e:{for(var C=m.key,_=p;_!==null;){if(_.key===C){if(C=m.type,C===ri){if(_.tag===7){n(g,_.sibling),p=i(_,m.props.children),p.return=g,g=p;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===On&&vm(C)===_.type){n(g,_.sibling),p=i(_,m.props),p.ref=ms(g,_,m),p.return=g,g=p;break e}n(g,_);break}else e(g,_);_=_.sibling}m.type===ri?(p=xr(m.props.children,g.mode,S,m.key),p.return=g,g=p):(S=Ha(m.type,m.key,m.props,null,g.mode,S),S.ref=ms(g,p,m),S.return=g,g=S)}return o(g);case ni:e:{for(_=m.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=gc(m,g.mode,S),p.return=g,g=p}return o(g);case On:return _=m._init,I(g,p,_(m._payload),S)}if(Ss(m))return v(g,p,m,S);if(cs(m))return w(g,p,m,S);wa(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=mc(m,g.mode,S),p.return=g,g=p),o(g)):n(g,p)}return I}var Ri=$v(!0),Fv=$v(!1),No={},en=cr(No),to=cr(No),no=cr(No);function Ir(t){if(t===No)throw Error(x(174));return t}function Fd(t,e){switch(re(no,e),re(to,t),re(en,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gc(e,t)}le(en),re(en,e)}function Pi(){le(en),le(to),le(no)}function Bv(t){Ir(no.current);var e=Ir(en.current),n=Gc(e,t.type);e!==n&&(re(to,t),re(en,n))}function Bd(t){to.current===t&&(le(en),le(to))}var pe=cr(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uc=[];function Vd(){for(var t=0;t<uc.length;t++)uc[t]._workInProgressVersionPrimary=null;uc.length=0}var $a=kn.ReactCurrentDispatcher,cc=kn.ReactCurrentBatchConfig,Mr=0,me=null,Re=null,Le=null,gl=!1,Ls=!1,ro=0,eI=0;function Qe(){throw Error(x(321))}function zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function Hd(t,e,n,r,i,s){if(Mr=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?iI:sI,t=n(r,i),Ls){s=0;do{if(Ls=!1,ro=0,25<=s)throw Error(x(301));s+=1,Le=Re=null,e.updateQueue=null,$a.current=oI,t=n(r,i)}while(Ls)}if($a.current=yl,e=Re!==null&&Re.next!==null,Mr=0,Le=Re=me=null,gl=!1,e)throw Error(x(300));return t}function qd(){var t=ro!==0;return ro=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?me.memoizedState=Le=t:Le=Le.next=t,Le}function $t(){if(Re===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=Le===null?me.memoizedState:Le.next;if(e!==null)Le=e,Re=t;else{if(t===null)throw Error(x(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Le===null?me.memoizedState=Le=t:Le=Le.next=t}return Le}function io(t,e){return typeof e=="function"?e(t):e}function hc(t){var e=$t(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Mr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,me.lanes|=h,jr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Kt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dc(t){var e=$t(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Vv(){}function zv(t,e){var n=me,r=$t(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,Wd(Wv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,so(9,qv.bind(null,n,r,i,e),void 0,null),be===null)throw Error(x(349));Mr&30||Hv(n,e,i)}return i}function Hv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qv(t,e,n,r){e.value=n,e.getSnapshot=r,Kv(e)&&Gv(t)}function Wv(t,e,n){return n(function(){Kv(e)&&Gv(t)})}function Kv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function Gv(t){var e=Sn(t,1);e!==null&&Wt(e,t,1,-1)}function wm(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:t},e.queue=t,t=t.dispatch=rI.bind(null,me,t),[e.memoizedState,t]}function so(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Yv(){return $t().memoizedState}function Fa(t,e,n,r){var i=Qt();me.flags|=t,i.memoizedState=so(1|e,n,void 0,r===void 0?null:r)}function nu(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&zd(r,o.deps)){i.memoizedState=so(e,n,s,r);return}}me.flags|=t,i.memoizedState=so(1|e,n,s,r)}function Em(t,e){return Fa(8390656,8,t,e)}function Wd(t,e){return nu(2048,8,t,e)}function Qv(t,e){return nu(4,2,t,e)}function Xv(t,e){return nu(4,4,t,e)}function Jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zv(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,Jv.bind(null,e,t),n)}function Kd(){}function e0(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function t0(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function n0(t,e,n){return Mr&21?(Kt(n,e)||(n=sv(),me.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function tI(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=cc.transition;cc.transition={};try{t(!1),e()}finally{te=n,cc.transition=r}}function r0(){return $t().memoizedState}function nI(t,e,n){var r=Xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},i0(t))s0(e,n);else if(n=Mv(t,e,n,r),n!==null){var i=ct();Wt(n,t,r,i),o0(n,e,r)}}function rI(t,e,n){var r=Xn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(i0(t))s0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kt(a,o)){var l=e.interleaved;l===null?(i.next=i,Ud(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Mv(t,e,i,r),n!==null&&(i=ct(),Wt(n,t,r,i),o0(n,e,r))}}function i0(t){var e=t.alternate;return t===me||e!==null&&e===me}function s0(t,e){Ls=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}var yl={readContext:Ut,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},iI={readContext:Ut,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Em,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fa(4194308,4,Jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fa(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nI.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:wm,useDebugValue:Kd,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=wm(!1),e=t[0];return t=tI.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=Qt();if(ce){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),be===null)throw Error(x(349));Mr&30||Hv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Em(Wv.bind(null,r,s,t),[t]),r.flags|=2048,so(9,qv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qt(),e=be.identifierPrefix;if(ce){var n=dn,r=hn;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sI={readContext:Ut,useCallback:e0,useContext:Ut,useEffect:Wd,useImperativeHandle:Zv,useInsertionEffect:Qv,useLayoutEffect:Xv,useMemo:t0,useReducer:hc,useRef:Yv,useState:function(){return hc(io)},useDebugValue:Kd,useDeferredValue:function(t){var e=$t();return n0(e,Re.memoizedState,t)},useTransition:function(){var t=hc(io)[0],e=$t().memoizedState;return[t,e]},useMutableSource:Vv,useSyncExternalStore:zv,useId:r0,unstable_isNewReconciler:!1},oI={readContext:Ut,useCallback:e0,useContext:Ut,useEffect:Wd,useImperativeHandle:Zv,useInsertionEffect:Qv,useLayoutEffect:Xv,useMemo:t0,useReducer:dc,useRef:Yv,useState:function(){return dc(io)},useDebugValue:Kd,useDeferredValue:function(t){var e=$t();return Re===null?e.memoizedState=t:n0(e,Re.memoizedState,t)},useTransition:function(){var t=dc(io)[0],e=$t().memoizedState;return[t,e]},useMutableSource:Vv,useSyncExternalStore:zv,useId:r0,unstable_isNewReconciler:!1};function Di(t,e){try{var n="",r=e;do n+=LS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aI=typeof WeakMap=="function"?WeakMap:Map;function a0(t,e,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wl||(wl=!0,xh=r),yh(t,e)},n}function l0(t,e,n){n=yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=SI.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Im(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yn(-1,1),e.tag=2,Yn(n,e,1))),n.lanes|=1),t)}var lI=kn.ReactCurrentOwner,gt=!1;function st(t,e,n,r){e.child=t===null?Fv(e,null,n,r):Ri(e,t.child,n,r)}function Tm(t,e,n,r,i){n=n.render;var s=e.ref;return Si(e,i),r=Hd(t,e,n,r,s,i),n=qd(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(ce&&n&&Dd(e),e.flags|=1,st(t,e,r,i),e.child)}function km(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!tf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,u0(t,e,s,r,i)):(t=Ha(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(o,r)&&t.ref===e.ref)return _n(t,e,i)}return e.flags|=1,t=Jn(s,r),t.ref=e.ref,t.return=e,e.child=t}function u0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xs(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,_n(t,e,i)}return vh(t,e,n,r,i)}function c0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(fi,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(fi,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(fi,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(fi,St),St|=r;return st(t,e,i,n),e.child}function h0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,r,i){var s=vt(n)?Or:nt.current;return s=Ai(e,s),Si(e,i),n=Hd(t,e,n,r,s,i),r=qd(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(ce&&r&&Dd(e),e.flags|=1,st(t,e,n,i),e.child)}function Cm(t,e,n,r,i){if(vt(n)){var s=!0;ul(e)}else s=!1;if(Si(e,i),e.stateNode===null)Ba(t,e),Uv(e,n,r),gh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=vt(n)?Or:nt.current,u=Ai(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ym(e,o,r,u),Ln=!1;var f=e.memoizedState;o.state=f,pl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||yt.current||Ln?(typeof h=="function"&&(mh(e,n,h,r),l=e.memoizedState),(a=Ln||gm(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,jv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ut(l):(l=vt(n)?Or:nt.current,l=Ai(e,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&ym(e,o,r,l),Ln=!1,f=e.memoizedState,o.state=f,pl(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||yt.current||Ln?(typeof y=="function"&&(mh(e,n,y,r),v=e.memoizedState),(u=Ln||gm(e,n,u,r,f,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return wh(t,e,n,r,s,i)}function wh(t,e,n,r,i,s){h0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hm(e,n,!1),_n(t,e,s);r=e.stateNode,lI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ri(e,t.child,null,s),e.child=Ri(e,null,a,s)):st(t,e,a,s),e.memoizedState=r.state,i&&hm(e,n,!0),e.child}function d0(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),Fd(t,e.containerInfo)}function xm(t,e,n,r,i){return Ni(),Ld(i),e.flags|=256,st(t,e,n,r),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function f0(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(pe,i&1),t===null)return fh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=su(o,r,0,null),t=xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sh(n),e.memoizedState=Eh,t):Gd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Jn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Jn(a,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Eh,r}return s=t.child,t=s.sibling,r=Jn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gd(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ea(t,e,n,r){return r!==null&&Ld(r),Ri(e,t.child,null,n),t=Gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fc(Error(x(422))),Ea(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=su({mode:"visible",children:r.children},i,0,null),s=xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ri(e,t.child,null,o),e.child.memoizedState=Sh(o),e.memoizedState=Eh,s);if(!(e.mode&1))return Ea(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=fc(s,r,void 0),Ea(t,e,o,r)}if(a=(o&t.childLanes)!==0,gt||a){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sn(t,i),Wt(r,t,i,-1))}return ef(),r=fc(Error(x(421))),Ea(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_I.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=Gn(i.nextSibling),kt=e,ce=!0,Ht=null,t!==null&&(Lt[Mt++]=hn,Lt[Mt++]=dn,Lt[Mt++]=Lr,hn=t.id,dn=t.overflow,Lr=e),e=Gd(e,r.children),e.flags|=4096,e)}function Am(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ph(t.return,e,n)}function pc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function p0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Am(t,n,e);else if(t.tag===19)Am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ml(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pc(e,!0,n,null,s);break;case"together":pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cI(t,e,n){switch(e.tag){case 3:d0(e),Ni();break;case 5:Bv(e);break;case 1:vt(e.type)&&ul(e);break;case 4:Fd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?f0(t,e,n):(re(pe,pe.current&1),t=_n(t,e,n),t!==null?t.sibling:null);re(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return p0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,c0(t,e,n)}return _n(t,e,n)}var m0,_h,g0,y0;m0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_h=function(){};g0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ir(en.current);var s=null;switch(n){case"input":i=Hc(t,i),r=Hc(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=Kc(t,i),r=Kc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=al)}Yc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};y0=function(t,e,n,r){n!==r&&(e.flags|=4)};function gs(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hI(t,e,n){var r=e.pendingProps;switch(Od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return vt(e.type)&&ll(),Xe(e),null;case 3:return r=e.stateNode,Pi(),le(yt),le(nt),Vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Rh(Ht),Ht=null))),_h(t,e),Xe(e),null;case 5:Bd(e);var i=Ir(no.current);if(n=e.type,t!==null&&e.stateNode!=null)g0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Xe(e),null}if(t=Ir(en.current),va(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[eo]=s,t=(e.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Is.length;i++)oe(Is[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":bp(r,s),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},oe("invalid",r);break;case"textarea":$p(r,s),oe("invalid",r)}Yc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ya(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ya(r.textContent,a,t),i=["children",""+a]):Hs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":ua(r),Up(r,s,!0);break;case"textarea":ua(r),Fp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[eo]=r,m0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qc(n,r),n){case"dialog":oe("cancel",t),oe("close",t),i=r;break;case"iframe":case"object":case"embed":oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Is.length;i++)oe(Is[i],t);i=r;break;case"source":oe("error",t),i=r;break;case"img":case"image":case"link":oe("error",t),oe("load",t),i=r;break;case"details":oe("toggle",t),i=r;break;case"input":bp(t,r),i=Hc(t,r),oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),oe("invalid",t);break;case"textarea":$p(t,r),i=Kc(t,r),oe("invalid",t);break;default:i=r}Yc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ky(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qs(t,l):typeof l=="number"&&qs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&oe("scroll",t):l!=null&&vd(t,s,l,o))}switch(n){case"input":ua(t),Up(t,r,!1);break;case"textarea":ua(t),Fp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)y0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Ir(no.current),Ir(en.current),va(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:ya(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ya(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Xe(e),null;case 13:if(le(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&It!==null&&e.mode&1&&!(e.flags&128))Lv(),Ni(),e.flags|=98560,s=!1;else if(s=va(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Xt]=e}else Ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else Ht!==null&&(Rh(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?De===0&&(De=3):ef())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Pi(),_h(t,e),t===null&&Js(e.stateNode.containerInfo),Xe(e),null;case 10:return bd(e.type._context),Xe(e),null;case 17:return vt(e.type)&&ll(),Xe(e),null;case 19:if(le(pe),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)gs(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ml(t),o!==null){for(e.flags|=128,gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ee()>Oi&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=ml(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return Xe(e),null}else 2*Ee()-s.renderingStartTime>Oi&&n!==1073741824&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ee(),e.sibling=null,n=pe.current,re(pe,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Zd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function dI(t,e){switch(Od(e),e.tag){case 1:return vt(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pi(),le(yt),le(nt),Vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bd(e),null;case 13:if(le(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(pe),null;case 4:return Pi(),null;case 10:return bd(e.type._context),null;case 22:case 23:return Zd(),null;case 24:return null;default:return null}}var Sa=!1,Je=!1,fI=typeof WeakSet=="function"?WeakSet:Set,P=null;function di(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function Ih(t,e,n){try{n()}catch(r){ve(t,e,r)}}var Nm=!1;function pI(t,e){if(oh=il,t=Sv(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++h===r&&(l=o),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ah={focusedElem:t,selectionRange:n},il=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,I=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:Vt(e.type,w),I);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(S){ve(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return v=Nm,Nm=!1,v}function Ms(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ih(e,n,s)}i=i.next}while(i!==r)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function v0(t){var e=t.alternate;e!==null&&(t.alternate=null,v0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[eo],delete e[ch],delete e[Q_],delete e[X_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function w0(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}var Be=null,zt=!1;function Rn(t,e,n){for(n=n.child;n!==null;)E0(t,e,n),n=n.sibling}function E0(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:Je||di(n,e);case 6:var r=Be,i=zt;Be=null,Rn(t,e,n),Be=r,zt=i,Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?ac(t.parentNode,n):t.nodeType===1&&ac(t,n),Ys(t)):ac(Be,n.stateNode));break;case 4:r=Be,i=zt,Be=n.stateNode.containerInfo,zt=!0,Rn(t,e,n),Be=r,zt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ih(n,e,o),i=i.next}while(i!==r)}Rn(t,e,n);break;case 1:if(!Je&&(di(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}Rn(t,e,n);break;case 21:Rn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Rn(t,e,n),Je=r):Rn(t,e,n);break;default:Rn(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fI),e.forEach(function(r){var i=II.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Be=a.stateNode,zt=!1;break e;case 3:Be=a.stateNode.containerInfo,zt=!0;break e;case 4:Be=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if(Be===null)throw Error(x(160));E0(s,o,i),Be=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S0(e,t),e=e.sibling}function S0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),Yt(t),r&4){try{Ms(3,t,t.return),ru(3,t)}catch(w){ve(t,t.return,w)}try{Ms(5,t,t.return)}catch(w){ve(t,t.return,w)}}break;case 1:Bt(e,t),Yt(t),r&512&&n!==null&&di(n,n.return);break;case 5:if(Bt(e,t),Yt(t),r&512&&n!==null&&di(n,n.return),t.flags&32){var i=t.stateNode;try{qs(i,"")}catch(w){ve(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Vy(i,s),Qc(a,o);var u=Qc(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?Ky(i,d):h==="dangerouslySetInnerHTML"?qy(i,d):h==="children"?qs(i,d):vd(i,h,d,u)}switch(a){case"input":qc(i,s);break;case"textarea":zy(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?yi(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?yi(i,!!s.multiple,s.defaultValue,!0):yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[eo]=s}catch(w){ve(t,t.return,w)}}break;case 6:if(Bt(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ve(t,t.return,w)}}break;case 3:if(Bt(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ys(e.containerInfo)}catch(w){ve(t,t.return,w)}break;case 4:Bt(e,t),Yt(t);break;case 13:Bt(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xd=Ee())),r&4&&Pm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(u=Je)||h,Bt(e,t),Je=u):Bt(e,t),Yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(P=t,h=t.child;h!==null;){for(d=P=h;P!==null;){switch(f=P,y=f.child,f.tag){case 0:case 11:case 14:case 15:Ms(4,f,f.return);break;case 1:di(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ve(r,n,w)}}break;case 5:di(f,f.return);break;case 22:if(f.memoizedState!==null){Om(d);continue}}y!==null?(y.return=f,P=y):Om(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wy("display",o))}catch(w){ve(t,t.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ve(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bt(e,t),Yt(t),r&4&&Pm(t);break;case 21:break;default:Bt(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(w0(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qs(i,""),r.flags&=-33);var s=Rm(t);Ch(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Rm(t);kh(t,a,o);break;default:throw Error(x(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mI(t,e,n){P=t,_0(t)}function _0(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Sa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Je;a=Sa;var u=Je;if(Sa=o,(Je=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Lm(i):l!==null?(l.return=o,P=l):Lm(i);for(;s!==null;)P=s,_0(s),s=s.sibling;P=i,Sa=a,Je=u}Dm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Dm(t)}}function Dm(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ys(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Je||e.flags&512&&Th(e)}catch(f){ve(e,e.return,f)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Om(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Lm(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ve(e,i,l)}}var s=e.return;try{Th(e)}catch(l){ve(e,s,l)}break;case 5:var o=e.return;try{Th(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var gI=Math.ceil,vl=kn.ReactCurrentDispatcher,Yd=kn.ReactCurrentOwner,bt=kn.ReactCurrentBatchConfig,X=0,be=null,xe=null,ze=0,St=0,fi=cr(0),De=0,oo=null,jr=0,iu=0,Qd=0,js=null,pt=null,Xd=0,Oi=1/0,un=null,wl=!1,xh=null,Qn=null,_a=!1,zn=null,El=0,bs=0,Ah=null,Va=-1,za=0;function ct(){return X&6?Ee():Va!==-1?Va:Va=Ee()}function Xn(t){return t.mode&1?X&2&&ze!==0?ze&-ze:Z_.transition!==null?(za===0&&(za=sv()),za):(t=te,t!==0||(t=window.event,t=t===void 0?16:dv(t.type)),t):1}function Wt(t,e,n,r){if(50<bs)throw bs=0,Ah=null,Error(x(185));Co(t,n,r),(!(X&2)||t!==be)&&(t===be&&(!(X&2)&&(iu|=n),De===4&&jn(t,ze)),wt(t,r),n===1&&X===0&&!(e.mode&1)&&(Oi=Ee()+500,eu&&hr()))}function wt(t,e){var n=t.callbackNode;ZS(t,e);var r=rl(t,t===be?ze:0);if(r===0)n!==null&&zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zp(n),e===1)t.tag===0?J_(Mm.bind(null,t)):Pv(Mm.bind(null,t)),G_(function(){!(X&6)&&hr()}),n=null;else{switch(ov(r)){case 1:n=Id;break;case 4:n=rv;break;case 16:n=nl;break;case 536870912:n=iv;break;default:n=nl}n=R0(n,I0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function I0(t,e){if(Va=-1,za=0,X&6)throw Error(x(327));var n=t.callbackNode;if(_i()&&t.callbackNode!==n)return null;var r=rl(t,t===be?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sl(t,r);else{e=r;var i=X;X|=2;var s=k0();(be!==t||ze!==e)&&(un=null,Oi=Ee()+500,Cr(t,e));do try{wI();break}catch(a){T0(t,a)}while(1);jd(),vl.current=s,X=i,xe!==null?e=0:(be=null,ze=0,e=De)}if(e!==0){if(e===2&&(i=th(t),i!==0&&(r=i,e=Nh(t,i))),e===1)throw n=oo,Cr(t,0),jn(t,r),wt(t,Ee()),n;if(e===6)jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!yI(i)&&(e=Sl(t,r),e===2&&(s=th(t),s!==0&&(r=s,e=Nh(t,s))),e===1))throw n=oo,Cr(t,0),jn(t,r),wt(t,Ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:wr(t,pt,un);break;case 3:if(jn(t,r),(r&130023424)===r&&(e=Xd+500-Ee(),10<e)){if(rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uh(wr.bind(null,t,pt,un),e);break}wr(t,pt,un);break;case 4:if(jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gI(r/1960))-r,10<r){t.timeoutHandle=uh(wr.bind(null,t,pt,un),r);break}wr(t,pt,un);break;case 5:wr(t,pt,un);break;default:throw Error(x(329))}}}return wt(t,Ee()),t.callbackNode===n?I0.bind(null,t):null}function Nh(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=pt,pt=n,e!==null&&Rh(e)),t}function Rh(t){pt===null?pt=t:pt.push.apply(pt,t)}function yI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jn(t,e){for(e&=~Qd,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function Mm(t){if(X&6)throw Error(x(327));_i();var e=rl(t,0);if(!(e&1))return wt(t,Ee()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var r=th(t);r!==0&&(e=r,n=Nh(t,r))}if(n===1)throw n=oo,Cr(t,0),jn(t,e),wt(t,Ee()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,pt,un),wt(t,Ee()),null}function Jd(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Oi=Ee()+500,eu&&hr())}}function br(t){zn!==null&&zn.tag===0&&!(X&6)&&_i();var e=X;X|=1;var n=bt.transition,r=te;try{if(bt.transition=null,te=1,t)return t()}finally{te=r,bt.transition=n,X=e,!(X&6)&&hr()}}function Zd(){St=fi.current,le(fi)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,K_(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Od(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:Pi(),le(yt),le(nt),Vd();break;case 5:Bd(r);break;case 4:Pi();break;case 13:le(pe);break;case 19:le(pe);break;case 10:bd(r.type._context);break;case 22:case 23:Zd()}n=n.return}if(be=t,xe=t=Jn(t.current,null),ze=St=e,De=0,oo=null,Qd=iu=jr=0,pt=js=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_r=null}return t}function T0(t,e){do{var n=xe;try{if(jd(),$a.current=yl,gl){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gl=!1}if(Mr=0,Le=Re=me=null,Ls=!1,ro=0,Yd.current=null,n===null||n.return===null){De=1,oo=e,xe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=_m(o);if(y!==null){y.flags&=-257,Im(y,o,a,s,e),y.mode&1&&Sm(s,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){Sm(s,u,e),ef();break e}l=Error(x(426))}}else if(ce&&a.mode&1){var I=_m(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Im(I,o,a,s,e),Ld(Di(l,a));break e}}s=l=Di(l,a),De!==4&&(De=2),js===null?js=[s]:js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=a0(s,l,e);pm(s,g);break e;case 1:a=l;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qn===null||!Qn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=l0(s,a,e);pm(s,S);break e}}s=s.return}while(s!==null)}x0(n)}catch(C){e=C,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function k0(){var t=vl.current;return vl.current=yl,t===null?yl:t}function ef(){(De===0||De===3||De===2)&&(De=4),be===null||!(jr&268435455)&&!(iu&268435455)||jn(be,ze)}function Sl(t,e){var n=X;X|=2;var r=k0();(be!==t||ze!==e)&&(un=null,Cr(t,e));do try{vI();break}catch(i){T0(t,i)}while(1);if(jd(),X=n,vl.current=r,xe!==null)throw Error(x(261));return be=null,ze=0,De}function vI(){for(;xe!==null;)C0(xe)}function wI(){for(;xe!==null&&!HS();)C0(xe)}function C0(t){var e=N0(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?x0(t):xe=e,Yd.current=null}function x0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dI(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,xe=null;return}}else if(n=hI(n,e,St),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);De===0&&(De=5)}function wr(t,e,n){var r=te,i=bt.transition;try{bt.transition=null,te=1,EI(t,e,n,r)}finally{bt.transition=i,te=r}return null}function EI(t,e,n,r){do _i();while(zn!==null);if(X&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(e_(t,s),t===be&&(xe=be=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_a||(_a=!0,R0(nl,function(){return _i(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=te;te=1;var a=X;X|=4,Yd.current=null,pI(t,n),S0(n,t),F_(ah),il=!!oh,ah=oh=null,t.current=n,mI(n),qS(),X=a,te=o,bt.transition=s}else t.current=n;if(_a&&(_a=!1,zn=t,El=i),s=t.pendingLanes,s===0&&(Qn=null),GS(n.stateNode),wt(t,Ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wl)throw wl=!1,t=xh,xh=null,t;return El&1&&t.tag!==0&&_i(),s=t.pendingLanes,s&1?t===Ah?bs++:(bs=0,Ah=t):bs=0,hr(),null}function _i(){if(zn!==null){var t=ov(El),e=bt.transition,n=te;try{if(bt.transition=null,te=16>t?16:t,zn===null)var r=!1;else{if(t=zn,zn=null,El=0,X&6)throw Error(x(331));var i=X;for(X|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Ms(8,h,s)}var d=h.child;if(d!==null)d.return=h,P=d;else for(;P!==null;){h=P;var f=h.sibling,y=h.return;if(v0(h),h===u){P=null;break}if(f!==null){f.return=y,P=f;break}P=y}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ms(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,P=g;break e}P=s.return}}var p=t.current;for(P=p;P!==null;){o=P;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,P=m;else e:for(o=p;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(C){ve(a,a.return,C)}if(a===o){P=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,P=S;break e}P=a.return}}if(X=i,hr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Yl,t)}catch{}r=!0}return r}finally{te=n,bt.transition=e}}return!1}function jm(t,e,n){e=Di(n,e),e=a0(t,e,1),t=Yn(t,e,1),e=ct(),t!==null&&(Co(t,1,e),wt(t,e))}function ve(t,e,n){if(t.tag===3)jm(t,t,n);else for(;e!==null;){if(e.tag===3){jm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){t=Di(n,t),t=l0(e,t,1),e=Yn(e,t,1),t=ct(),e!==null&&(Co(e,1,t),wt(e,t));break}}e=e.return}}function SI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(ze&n)===n&&(De===4||De===3&&(ze&130023424)===ze&&500>Ee()-Xd?Cr(t,0):Qd|=n),wt(t,e)}function A0(t,e){e===0&&(t.mode&1?(e=da,da<<=1,!(da&130023424)&&(da=4194304)):e=1);var n=ct();t=Sn(t,e),t!==null&&(Co(t,e,n),wt(t,n))}function _I(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),A0(t,n)}function II(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),A0(t,n)}var N0;N0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,cI(t,e,n);gt=!!(t.flags&131072)}else gt=!1,ce&&e.flags&1048576&&Dv(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ba(t,e),t=e.pendingProps;var i=Ai(e,nt.current);Si(e,n),i=Hd(null,e,r,t,i,n);var s=qd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,ul(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$d(e),i.updater=tu,e.stateNode=i,i._reactInternals=e,gh(e,r,t,n),e=wh(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&Dd(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kI(r),t=Vt(r,t),i){case 0:e=vh(null,e,r,t,n);break e;case 1:e=Cm(null,e,r,t,n);break e;case 11:e=Tm(null,e,r,t,n);break e;case 14:e=km(null,e,r,Vt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Cm(t,e,r,i,n);case 3:e:{if(d0(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,jv(t,e),pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Di(Error(x(423)),e),e=xm(t,e,r,n,i);break e}else if(r!==i){i=Di(Error(x(424)),e),e=xm(t,e,r,n,i);break e}else for(It=Gn(e.stateNode.containerInfo.firstChild),kt=e,ce=!0,Ht=null,n=Fv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===i){e=_n(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return Bv(e),t===null&&fh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lh(r,i)?o=null:s!==null&&lh(r,s)&&(e.flags|=32),h0(t,e),st(t,e,o,n),e.child;case 6:return t===null&&fh(e),null;case 13:return f0(t,e,n);case 4:return Fd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ri(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Tm(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(dl,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!yt.current){e=_n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=yn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ph(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Si(e,n),i=Ut(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),km(t,e,r,i,n);case 15:return u0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ba(t,e),e.tag=1,vt(r)?(t=!0,ul(e)):t=!1,Si(e,n),Uv(e,r,i),gh(e,r,i,n),wh(null,e,r,!0,t,n);case 19:return p0(t,e,n);case 22:return c0(t,e,n)}throw Error(x(156,e.tag))};function R0(t,e){return nv(t,e)}function TI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new TI(t,e,n,r)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kI(t){if(typeof t=="function")return tf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ed)return 11;if(t===Sd)return 14}return 2}function Jn(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")tf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ri:return xr(n.children,i,s,e);case wd:o=8,i|=8;break;case Fc:return t=jt(12,n,e,i|2),t.elementType=Fc,t.lanes=s,t;case Bc:return t=jt(13,n,e,i),t.elementType=Bc,t.lanes=s,t;case Vc:return t=jt(19,n,e,i),t.elementType=Vc,t.lanes=s,t;case $y:return su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case by:o=10;break e;case Uy:o=9;break e;case Ed:o=11;break e;case Sd:o=14;break e;case On:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function su(t,e,n,r){return t=jt(22,t,r,e),t.elementType=$y,t.lanes=n,t.stateNode={isHidden:!1},t}function mc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function gc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qu(0),this.expirationTimes=Qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nf(t,e,n,r,i,s,o,a,l){return t=new CI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$d(s),t}function xI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function P0(t){if(!t)return ir;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(vt(n))return Rv(t,n,e)}return e}function D0(t,e,n,r,i,s,o,a,l){return t=nf(n,r,!0,t,i,s,o,a,l),t.context=P0(null),n=t.current,r=ct(),i=Xn(n),s=yn(r,i),s.callback=e??null,Yn(n,s,i),t.current.lanes=i,Co(t,i,r),wt(t,r),t}function ou(t,e,n,r){var i=e.current,s=ct(),o=Xn(i);return n=P0(n),e.context===null?e.context=n:e.pendingContext=n,e=yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yn(i,e,o),t!==null&&(Wt(t,i,o,s),Ua(t,i,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rf(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function AI(){return null}var O0=typeof reportError=="function"?reportError:function(t){console.error(t)};function sf(t){this._internalRoot=t}au.prototype.render=sf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));ou(t,e,null,null)};au.prototype.unmount=sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){ou(null,t,null,null)}),e[En]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=uv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mn.length&&e!==0&&e<Mn[n].priority;n++);Mn.splice(n,0,t),n===0&&hv(t)}};function of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Um(){}function NI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_l(o);s.call(u)}}var o=D0(e,r,t,0,null,!1,!1,"",Um);return t._reactRootContainer=o,t[En]=o.current,Js(t.nodeType===8?t.parentNode:t),br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_l(l);a.call(u)}}var l=nf(t,0,!1,null,null,!1,!1,"",Um);return t._reactRootContainer=l,t[En]=l.current,Js(t.nodeType===8?t.parentNode:t),br(function(){ou(e,l,n,r)}),l}function uu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=_l(o);a.call(l)}}ou(e,o,t,i)}else o=NI(n,e,t,i,r);return _l(o)}av=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_s(e.pendingLanes);n!==0&&(Td(e,n|1),wt(e,Ee()),!(X&6)&&(Oi=Ee()+500,hr()))}break;case 13:br(function(){var r=Sn(t,1);if(r!==null){var i=ct();Wt(r,t,1,i)}}),rf(t,1)}};kd=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=ct();Wt(e,t,134217728,n)}rf(t,134217728)}};lv=function(t){if(t.tag===13){var e=Xn(t),n=Sn(t,e);if(n!==null){var r=ct();Wt(n,t,e,r)}rf(t,e)}};uv=function(){return te};cv=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};Jc=function(t,e,n){switch(e){case"input":if(qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zl(r);if(!i)throw Error(x(90));By(r),qc(r,i)}}}break;case"textarea":zy(t,n);break;case"select":e=n.value,e!=null&&yi(t,!!n.multiple,e,!1)}};Qy=Jd;Xy=br;var RI={usingClientEntryPoint:!1,Events:[Ao,ai,Zl,Gy,Yy,Jd]},ys={findFiberByHostInstance:Sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},PI={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ev(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||AI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{Yl=Ia.inject(PI),Zt=Ia}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RI;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(e))throw Error(x(200));return xI(t,e,null,n)};At.createRoot=function(t,e){if(!of(t))throw Error(x(299));var n=!1,r="",i=O0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=nf(t,1,!1,null,null,n,!1,r,i),t[En]=e.current,Js(t.nodeType===8?t.parentNode:t),new sf(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=ev(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return br(t)};At.hydrate=function(t,e,n){if(!lu(e))throw Error(x(200));return uu(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!of(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=O0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=D0(e,null,t,1,n??null,i,!1,s,o),t[En]=e.current,Js(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new au(e)};At.render=function(t,e,n){if(!lu(e))throw Error(x(200));return uu(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!lu(t))throw Error(x(40));return t._reactRootContainer?(br(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};At.unstable_batchedUpdates=Jd;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lu(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return uu(t,e,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function L0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L0)}catch(t){console.error(t)}}L0(),Dy.exports=At;var DI=Dy.exports,$m=DI;Uc.createRoot=$m.createRoot,Uc.hydrateRoot=$m.hydrateRoot;/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ao.apply(this,arguments)}var Hn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hn||(Hn={}));const Fm="popstate";function OI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ph("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Il(i)}return MI(e,n,null,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function af(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LI(){return Math.random().toString(36).substr(2,8)}function Bm(t,e){return{usr:t.state,key:t.key,idx:e}}function Ph(t,e,n,r){return n===void 0&&(n=null),ao({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Yi(e):e,{state:n,key:e&&e.key||r||LI()})}function Il(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Yi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function MI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Hn.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(ao({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=Hn.Pop;let I=h(),g=I==null?null:I-u;u=I,l&&l({action:a,location:w.location,delta:g})}function f(I,g){a=Hn.Push;let p=Ph(w.location,I,g);n&&n(p,I),u=h()+1;let m=Bm(p,u),S=w.createHref(p);try{o.pushState(m,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}s&&l&&l({action:a,location:w.location,delta:1})}function y(I,g){a=Hn.Replace;let p=Ph(w.location,I,g);n&&n(p,I),u=h();let m=Bm(p,u),S=w.createHref(p);o.replaceState(m,"",S),s&&l&&l({action:a,location:w.location,delta:0})}function v(I){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof I=="string"?I:Il(I);return _e(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Fm,d),l=I,()=>{i.removeEventListener(Fm,d),l=null}},createHref(I){return e(i,I)},createURL:v,encodeLocation(I){let g=v(I);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:y,go(I){return o.go(I)}};return w}var Vm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vm||(Vm={}));function jI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Yi(e):e,i=lf(r.pathname||"/",n);if(i==null)return null;let s=M0(t);bI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=WI(s[a],YI(i));return o}function M0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Zn([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),M0(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:HI(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of j0(s.path))i(s,o,l)}),e}function j0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=j0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function bI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:qI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const UI=/^:\w+$/,$I=3,FI=2,BI=1,VI=10,zI=-2,zm=t=>t==="*";function HI(t,e){let n=t.split("/"),r=n.length;return n.some(zm)&&(r+=zI),e&&(r+=FI),n.filter(i=>!zm(i)).reduce((i,s)=>i+(UI.test(s)?$I:s===""?BI:VI),r)}function qI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function WI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=KI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!h)return null;Object.assign(r,h.params);let d=a.route;s.push({params:r,pathname:Zn([i,h.pathname]),pathnameBase:ZI(Zn([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=Zn([i,h.pathnameBase]))}return s}function KI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=GI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,d)=>{if(h==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[h]=QI(a[d]||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function GI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),af(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function YI(t){try{return decodeURI(t)}catch(e){return af(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function QI(t,e){try{return decodeURIComponent(t)}catch(n){return af(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function lf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function XI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yi(t):t;return{pathname:n?n.startsWith("/")?n:JI(n,e):e,search:eT(r),hash:tT(i)}}function JI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uf(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Yi(t):(i=ao({},t),_e(!i.pathname||!i.pathname.includes("?"),yc("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),yc("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),yc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=XI(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const Zn=t=>t.join("/").replace(/\/\/+/g,"/"),ZI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),eT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,tT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function nT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const b0=["post","put","patch","delete"];new Set(b0);const rT=["get",...b0];new Set(rT);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tl.apply(this,arguments)}const hf=E.createContext(null),iT=E.createContext(null),Qi=E.createContext(null),cu=E.createContext(null),Cn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),U0=E.createContext(null);function sT(t,e){let{relative:n}=e===void 0?{}:e;Xi()||_e(!1);let{basename:r,navigator:i}=E.useContext(Qi),{hash:s,pathname:o,search:a}=F0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Zn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Xi(){return E.useContext(cu)!=null}function Ro(){return Xi()||_e(!1),E.useContext(cu).location}function $0(t){E.useContext(Qi).static||E.useLayoutEffect(t)}function dr(){let{isDataRoute:t}=E.useContext(Cn);return t?wT():oT()}function oT(){Xi()||_e(!1);let t=E.useContext(hf),{basename:e,navigator:n}=E.useContext(Qi),{matches:r}=E.useContext(Cn),{pathname:i}=Ro(),s=JSON.stringify(uf(r).map(l=>l.pathnameBase)),o=E.useRef(!1);return $0(()=>{o.current=!0}),E.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=cf(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Zn([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,s,i,t])}function aT(){let{matches:t}=E.useContext(Cn),e=t[t.length-1];return e?e.params:{}}function F0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(Cn),{pathname:i}=Ro(),s=JSON.stringify(uf(r).map(o=>o.pathnameBase));return E.useMemo(()=>cf(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function lT(t,e){return uT(t,e)}function uT(t,e,n){Xi()||_e(!1);let{navigator:r}=E.useContext(Qi),{matches:i}=E.useContext(Cn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ro(),u;if(e){var h;let w=typeof e=="string"?Yi(e):e;a==="/"||(h=w.pathname)!=null&&h.startsWith(a)||_e(!1),u=w}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",y=jI(t,{pathname:f}),v=pT(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Zn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Zn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&v?E.createElement(cu.Provider,{value:{location:Tl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Hn.Pop}},v):v}function cT(){let t=vT(),e=nT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}const hT=E.createElement(cT,null);class dT extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(Cn.Provider,{value:this.props.routeContext},E.createElement(U0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fT(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(hf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Cn.Provider,{value:e},r)}function pT(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||_e(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let h=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||hT);let f=e.concat(s.slice(0,u+1)),y=()=>{let v;return h?v=d:l.route.Component?v=E.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,E.createElement(fT,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?E.createElement(dT,{location:n.location,revalidation:n.revalidation,component:d,error:h,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var Dh;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Dh||(Dh={}));var lo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(lo||(lo={}));function mT(t){let e=E.useContext(hf);return e||_e(!1),e}function gT(t){let e=E.useContext(iT);return e||_e(!1),e}function yT(t){let e=E.useContext(Cn);return e||_e(!1),e}function B0(t){let e=yT(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function vT(){var t;let e=E.useContext(U0),n=gT(lo.UseRouteError),r=B0(lo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function wT(){let{router:t}=mT(Dh.UseNavigateStable),e=B0(lo.UseNavigateStable),n=E.useRef(!1);return $0(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Tl({fromRouteId:e},s)))},[t,e])}function V0(t){let{to:e,replace:n,state:r,relative:i}=t;Xi()||_e(!1);let{matches:s}=E.useContext(Cn),{pathname:o}=Ro(),a=dr(),l=cf(e,uf(s).map(h=>h.pathnameBase),o,i==="path"),u=JSON.stringify(l);return E.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Dn(t){_e(!1)}function ET(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Hn.Pop,navigator:s,static:o=!1}=t;Xi()&&_e(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Yi(r));let{pathname:u="/",search:h="",hash:d="",state:f=null,key:y="default"}=r,v=E.useMemo(()=>{let w=lf(u,a);return w==null?null:{location:{pathname:w,search:h,hash:d,state:f,key:y},navigationType:i}},[a,u,h,d,f,y,i]);return v==null?null:E.createElement(Qi.Provider,{value:l},E.createElement(cu.Provider,{children:n,value:v}))}function ST(t){let{children:e,location:n}=t;return lT(Oh(e),n)}var Hm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Hm||(Hm={}));new Promise(()=>{});function Oh(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Oh(r.props.children,s));return}r.type!==Dn&&_e(!1),!r.props.index||!r.props.children||_e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Oh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lh(){return Lh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lh.apply(this,arguments)}function _T(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function IT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function TT(t,e){return t.button===0&&(!e||e==="_self")&&!IT(t)}const kT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],CT="startTransition",qm=_S[CT];function xT(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=OI({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=E.useCallback(d=>{u&&qm?qm(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>o.listen(h),[o,h]),E.createElement(ET,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const AT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z0=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h}=e,d=_T(e,kT),{basename:f}=E.useContext(Qi),y,v=!1;if(typeof u=="string"&&NT.test(u)&&(y=u,AT))try{let p=new URL(window.location.href),m=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=lf(m.pathname,f);m.origin===p.origin&&S!=null?u=S+m.search+m.hash:v=!0}catch{}let w=sT(u,{relative:i}),I=RT(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i});function g(p){r&&r(p),p.defaultPrevented||I(p)}return E.createElement("a",Lh({},d,{href:y||w,onClick:v||s?r:g,ref:n,target:l}))});var Wm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Wm||(Wm={}));var Km;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Km||(Km={}));function RT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=dr(),l=Ro(),u=F0(t,{relative:o});return E.useCallback(h=>{if(TT(h,n)){h.preventDefault();let d=r!==void 0?r:Il(l)===Il(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 */const H0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},q0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[h],n[d],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},DT=function(t){const e=H0(t);return q0.encodeByteArray(e,!0)},W0=function(t){return DT(t).replace(/\./g,"")},OT=function(t){try{return q0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class LT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function G0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Y0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MT(){return Ue().indexOf("Electron/")>=0}function Q0(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jT(){return Ue().indexOf("MSAppHost/")>=0}function bT(){return typeof indexedDB=="object"}function UT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const $T="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$T,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?FT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fr(i,a,r)}}function FT(t,e){return t.replace(BT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BT=/\{\$([^}]+)}/g;function VT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gm(s)&&Gm(o)){if(!kl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gm(t){return t!==null&&typeof t=="object"}/**
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
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ts(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zT(t,e){const n=new HT(t,e);return n.subscribe.bind(n)}class HT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vc),i.error===void 0&&(i.error=vc),i.complete===void 0&&(i.complete=vc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vc(){}/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Cs(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class Ym{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new X0(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new J0(this._db.createObjectStore(e,n))}close(){this._db.close()}}class X0{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new J0(this._transaction.objectStore(e))}}class J0{constructor(e){this._store=e}index(e){return new Qm(this._store.index(e))}createIndex(e,n,r){return new Qm(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Cs(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Cs(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Cs(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Cs(e,"Error clearing IndexedDB object store")}}class Qm{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Cs(n,"Error reading from IndexedDB")}}function WT(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new Ym(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new Ym(s.result),o.oldVersion,o.newVersion,new X0(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class KT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YT(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GT(t){return t===Er?void 0:t}function YT(t){return t.instantiationMode==="EAGER"}/**
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
 */class QT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const XT={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},JT=Z.INFO,ZT={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},ek=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class df{constructor(e){this.name=e,this._logLevel=JT,this._logHandler=ek,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}/**
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
 */class tk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mh="@firebase/app",Xm="0.7.21";/**
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
 */const ff=new df("@firebase/app"),rk="@firebase/app-compat",ik="@firebase/analytics-compat",sk="@firebase/analytics",ok="@firebase/app-check-compat",ak="@firebase/app-check",lk="@firebase/auth",uk="@firebase/auth-compat",ck="@firebase/database",hk="@firebase/database-compat",dk="@firebase/functions",fk="@firebase/functions-compat",pk="@firebase/installations",mk="@firebase/installations-compat",gk="@firebase/messaging",yk="@firebase/messaging-compat",vk="@firebase/performance",wk="@firebase/performance-compat",Ek="@firebase/remote-config",Sk="@firebase/remote-config-compat",_k="@firebase/storage",Ik="@firebase/storage-compat",Tk="@firebase/firestore",kk="@firebase/firestore-compat",Ck="firebase",xk="9.6.11";/**
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
 */const Z0="[DEFAULT]",Ak={[Mh]:"fire-core",[rk]:"fire-core-compat",[sk]:"fire-analytics",[ik]:"fire-analytics-compat",[ak]:"fire-app-check",[ok]:"fire-app-check-compat",[lk]:"fire-auth",[uk]:"fire-auth-compat",[ck]:"fire-rtdb",[hk]:"fire-rtdb-compat",[dk]:"fire-fn",[fk]:"fire-fn-compat",[pk]:"fire-iid",[mk]:"fire-iid-compat",[gk]:"fire-fcm",[yk]:"fire-fcm-compat",[vk]:"fire-perf",[wk]:"fire-perf-compat",[Ek]:"fire-rc",[Sk]:"fire-rc-compat",[_k]:"fire-gcs",[Ik]:"fire-gcs-compat",[Tk]:"fire-fst",[kk]:"fire-fst-compat","fire-js":"fire-js",[Ck]:"fire-js-all"};/**
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
 */const Cl=new Map,jh=new Map;function Nk(t,e){try{t.container.addComponent(e)}catch(n){ff.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(jh.has(e))return ff.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,t);for(const n of Cl.values())Nk(n,t);return!0}function hu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Rk={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},$r=new Po("app","Firebase",Rk);/**
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
 */class Pk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
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
 */const Ji=xk;function Dk(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Z0,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw $r.create("bad-app-name",{appName:String(r)});const i=Cl.get(r);if(i){if(kl(t,i.options)&&kl(n,i.config))return i;throw $r.create("duplicate-app",{appName:r})}const s=new QT(r);for(const a of jh.values())s.addComponent(a);const o=new Pk(t,n,s);return Cl.set(r,o),o}function pf(t=Z0){const e=Cl.get(t);if(!e)throw $r.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let i=(r=Ak[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ff.warn(a.join(" "));return}Ur(new sr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ok="firebase-heartbeat-database",Lk=1,uo="firebase-heartbeat-store";let wc=null;function ew(){return wc||(wc=WT(Ok,Lk,(t,e)=>{switch(e){case 0:t.createObjectStore(uo)}}).catch(t=>{throw $r.create("storage-open",{originalErrorMessage:t.message})})),wc}async function Mk(t){try{return(await ew()).transaction(uo).objectStore(uo).get(tw(t))}catch(e){throw $r.create("storage-get",{originalErrorMessage:e.message})}}async function Jm(t,e){try{const r=(await ew()).transaction(uo,"readwrite");return await r.objectStore(uo).put(e,tw(t)),r.complete}catch(n){throw $r.create("storage-set",{originalErrorMessage:n.message})}}function tw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jk=1024,bk=30*24*60*60*1e3;class Uk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=bk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zm(),{heartbeatsToSend:n,unsentEntries:r}=$k(this._heartbeatsCache.heartbeats),i=W0(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zm(){return new Date().toISOString().substring(0,10)}function $k(t,e=jk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),eg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),eg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bT()?UT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function eg(t){return W0(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Bk(t){Ur(new sr("platform-logger",e=>new tk(e),"PRIVATE")),Ur(new sr("heartbeat",e=>new Uk(e),"PRIVATE")),tn(Mh,Xm,t),tn(Mh,Xm,"esm2017"),tn("fire-js","")}Bk("");var Vk="firebase",zk="9.6.11";/**
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
 */tn(Vk,zk,"app");function mf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hk=nw,rw=new Po("auth","Firebase",nw());/**
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
 */const tg=new df("@firebase/auth");function qa(t,...e){tg.logLevel<=Z.ERROR&&tg.error(`Auth (${Ji}): ${t}`,...e)}/**
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
 */function Gt(t,...e){throw gf(t,...e)}function nn(t,...e){return gf(t,...e)}function qk(t,e,n){const r=Object.assign(Object.assign({},Hk()),{[e]:n});return new Po("auth","Firebase",r).create(e,{appName:t.name})}function gf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rw.create(t,...e)}function U(t,e,...n){if(!t)throw gf(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function In(t,e){t||fn(e)}/**
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
 */const ng=new Map;function pn(t){In(t instanceof Function,"Expected a class definition");let e=ng.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ng.set(t,e),e)}/**
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
 */function Wk(t,e){const n=hu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(kl(s,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function Kk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function bh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gk(){return rg()==="http:"||rg()==="https:"}function rg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Yk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gk()||G0()||"connection"in navigator)?navigator.onLine:!0}function Qk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=K0()||Y0()}get(){return Yk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yf(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Jk=new Oo(3e4,6e4);function Lo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zi(t,e,n,r,i={}){return sw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Do(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iw.fetch()(ow(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xk),e);try{const i=new Zk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ec(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ec(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ec(t,"email-already-in-use",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qk(t,h,u);Gt(t,h)}}catch(i){if(i instanceof fr)throw i;Gt(t,"network-request-failed")}}async function Mo(t,e,n,r,i={}){const s=await Zi(t,e,n,r,i);return"mfaPendingCredential"in s&&Gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ow(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yf(t.config,i):`${t.config.apiScheme}://${i}`}class Zk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),Jk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ec(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function eC(t,e){return Zi(t,"POST","/v1/accounts:delete",e)}async function tC(t,e){return Zi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nC(t,e=!1){const n=we(t),r=await n.getIdToken(e),i=vf(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Us(Sc(i.auth_time)),issuedAtTime:Us(Sc(i.iat)),expirationTime:Us(Sc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=OT(n);return i?JSON.parse(i):(qa("Failed to decode base64 JWT payload"),null)}catch(i){return qa("Caught error parsing JWT payload as JSON",i),null}}function rC(t){const e=vf(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fr&&iC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class aw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Li(t,tC(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lC(s.providerUserInfo):[],a=aC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aw(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function oC(t){const e=we(t);await xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lC(t){return t.map(e=>{var{providerId:n}=e,r=mf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uC(t,e){const n=await sw(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ow(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new co;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Pn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ar{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new aw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Li(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nC(this,e)}reload(){return oC(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Li(this,eC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:m,emailVerified:S,isAnonymous:C,providerData:_,stsTokenManager:k}=n;U(m&&k,e,"internal-error");const N=co.fromJSON(this.name,k);U(typeof m=="string",e,"internal-error"),Pn(d,e.name),Pn(f,e.name),U(typeof S=="boolean",e,"internal-error"),U(typeof C=="boolean",e,"internal-error"),Pn(y,e.name),Pn(v,e.name),Pn(w,e.name),Pn(I,e.name),Pn(g,e.name),Pn(p,e.name);const H=new Ar({uid:m,auth:e,email:f,emailVerified:S,displayName:d,isAnonymous:C,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:N,createdAt:g,lastLoginAt:p});return _&&Array.isArray(_)&&(H.providerData=_.map(b=>Object.assign({},b))),I&&(H._redirectEventId=I),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new co;i.updateFromServerResponse(n);const s=new Ar({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xl(s),s}}/**
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
 */class lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lw.type="NONE";const ig=lw;/**
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
 */function Wa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ii(pn(ig),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||pn(ig);const o=Wa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Ar._fromJSON(e,h);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ii(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ii(s,e,r))}}/**
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
 */function sg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fw(e))return"Blackberry";if(pw(e))return"Webos";if(wf(e))return"Safari";if((e.includes("chrome/")||cw(e))&&!e.includes("edge/"))return"Chrome";if(dw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uw(t=Ue()){return/firefox\//i.test(t)}function wf(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cw(t=Ue()){return/crios\//i.test(t)}function hw(t=Ue()){return/iemobile/i.test(t)}function dw(t=Ue()){return/android/i.test(t)}function fw(t=Ue()){return/blackberry/i.test(t)}function pw(t=Ue()){return/webos/i.test(t)}function du(t=Ue()){return/iphone|ipad|ipod/i.test(t)}function cC(t=Ue()){var e;return du(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hC(){return Q0()&&document.documentMode===10}function mw(t=Ue()){return du(t)||dw(t)||pw(t)||fw(t)||/windows phone/i.test(t)||hw(t)}function dC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gw(t,e=[]){let n;switch(t){case"Browser":n=sg(Ue());break;case"Worker":n=`${sg(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ji}/${r}`}/**
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
 */class fC{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new og(this),this.idTokenSubscription=new og(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ii.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o!=null&&o.user)&&(r=o.user)}return r?r._redirectEventId?(U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xl(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?we(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Ii.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function fu(t){return we(t)}class og{constructor(e){this.auth=e,this.observer=null,this.addObserver=zT(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Ef{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function pC(t,e){return Zi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mC(t,e){return Mo(t,"POST","/v1/accounts:signInWithPassword",Lo(t,e))}/**
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
 */async function gC(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",Lo(t,e))}async function yC(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",Lo(t,e))}/**
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
 */class ho extends Ef{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ho(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ho(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return mC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gC(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return pC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yC(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ti(t,e){return Mo(t,"POST","/v1/accounts:signInWithIdp",Lo(t,e))}/**
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
 */const vC="http://localhost";class Fr extends Ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ti(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ti(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ti(e,n)}buildRequest(){const e={requestUri:vC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
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
 */function wC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EC(t){const e=Ts(ks(t)).link,n=e?Ts(ks(e)).deep_link_id:null,r=Ts(ks(t)).deep_link_id;return(r?Ts(ks(r)).link:null)||r||n||e||t}class Sf{constructor(e){var n,r,i,s,o,a;const l=Ts(ks(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=wC((i=l.mode)!==null&&i!==void 0?i:null);U(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=EC(e);try{return new Sf(n)}catch{return null}}}/**
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
 */class es{constructor(){this.providerId=es.PROVIDER_ID}static credential(e,n){return ho._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sf.parseLink(n);return U(r,"argument-error"),ho._fromEmailAndCode(e,r.code,r.tenantId)}}es.PROVIDER_ID="password";es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends yw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bn extends jo{constructor(){super("facebook.com")}static credential(e){return Fr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class Un extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
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
 */class $n extends jo{constructor(){super("github.com")}static credential(e){return Fr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class Fn extends jo{constructor(){super("twitter.com")}static credential(e,n){return Fr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
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
 */async function SC(t,e){return Mo(t,"POST","/v1/accounts:signUp",Lo(t,e))}/**
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
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ar._fromIdTokenResponse(e,r,i),o=ag(r);return new Br({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ag(r);return new Br({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ag(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Al extends fr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Al.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Al(e,n,r,i)}}function vw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Al._fromErrorAndOperation(t,s,e,r):s})}async function _C(t,e,n=!1){const r=await Li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
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
 */async function IC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Li(t,vw(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=vf(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Br._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),s}}/**
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
 */async function ww(t,e,n=!1){const r="signIn",i=await vw(t,r,e),s=await Br._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function TC(t,e){return ww(fu(t),e)}async function kC(t,e,n){const r=fu(t),i=await SC(r,{returnSecureToken:!0,email:e,password:n}),s=await Br._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function CC(t,e,n){return TC(we(t),es.credential(e,n))}/**
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
 */async function xC(t,e){return Zi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function lg(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=we(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Li(r,xC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function AC(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}function NC(t){return we(t).signOut()}const Nl="__sak";/**
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
 */function RC(){const t=Ue();return wf(t)||du(t)}const PC=1e3,DC=10;class Sw extends Ew{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=RC()&&dC(),this.fallbackToPolling=mw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sw.type="LOCAL";const OC=Sw;/**
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
 */function LC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await LC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pu.receivers=[];/**
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
 */class MC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=_f("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function jC(t){rn().location.href=t}/**
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
 */function Tw(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function bC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $C(){return Tw()?self:null}/**
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
 */const kw="firebaseLocalStorageDb",FC=1,Rl="firebaseLocalStorage",Cw="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mu(t,e){return t.transaction([Rl],e?"readwrite":"readonly").objectStore(Rl)}function BC(){const t=indexedDB.deleteDatabase(kw);return new bo(t).toPromise()}function Uh(){const t=indexedDB.open(kw,FC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rl,{keyPath:Cw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rl)?e(r):(r.close(),await BC(),e(await Uh()))})})}async function ug(t,e,n){const r=mu(t,!0).put({[Cw]:e,value:n});return new bo(r).toPromise()}async function VC(t,e){const n=mu(t,!1).get(e),r=await new bo(n).toPromise();return r===void 0?null:r.value}function cg(t,e){const n=mu(t,!0).delete(e);return new bo(n).toPromise()}const zC=800,HC=3;class xw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pu._getInstance($C()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bC(),!this.activeServiceWorker)return;this.sender=new MC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uh();return await ug(e,Nl,"1"),await cg(e,Nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ug(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mu(i,!1).getAll();return new bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xw.type="LOCAL";const qC=xw;/**
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
 */function WC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function KC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",WC().appendChild(r)})}function GC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Oo(3e4,6e4);/**
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
 */function YC(t,e){return e?pn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class If extends Ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QC(t){return ww(t.auth,new If(t),t.bypassAuthState)}function XC(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),IC(n,new If(t),t.bypassAuthState)}async function JC(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),_C(n,new If(t),t.bypassAuthState)}/**
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
 */class Aw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QC;case"linkViaPopup":case"linkViaRedirect":return JC;case"reauthViaPopup":case"reauthViaRedirect":return XC;default:Gt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ZC=new Oo(2e3,1e4);class pi extends Aw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=_f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ZC.get())};e()}}pi.currentPopupAction=null;/**
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
 */const ex="pendingRedirect",_c=new Map;class tx extends Aw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_c.get(this.auth._key());if(!e){try{const r=await nx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_c.set(this.auth._key(),e)}return this.bypassAuthState||_c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nx(t,e){const n=ix(e),r=rx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rx(t){return pn(t._redirectPersistence)}function ix(t){return Wa(ex,t.config.apiKey,t.name)}async function sx(t,e,n=!1){const r=fu(t),i=YC(r,e),o=await new tx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ox=10*60*1e3;class ax{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ox&&this.cachedEventUids.clear(),this.cachedEventUids.has(hg(e))}saveEventToCache(e){this.cachedEventUids.add(hg(e)),this.lastProcessedEventTime=Date.now()}}function hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nw(t);default:return!1}}/**
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
 */async function ux(t,e={}){return Zi(t,"GET","/v1/projects",e)}/**
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
 */const cx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hx=/^https?/;async function dx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ux(t);for(const n of e)try{if(fx(n))return}catch{}Gt(t,"unauthorized-domain")}function fx(t){const e=bh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hx.test(n))return!1;if(cx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const px=new Oo(3e4,6e4);function dg(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mx(t){return new Promise((e,n)=>{var r,i,s;function o(){dg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dg(),n(nn(t,"network-request-failed"))},timeout:px.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const a=GC("iframefcb");return rn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},KC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function gx(t){return Ka=Ka||mx(t),Ka}/**
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
 */const yx=new Oo(5e3,15e3),vx="__/auth/iframe",wx="emulator/auth/iframe",Ex={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _x(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yf(e,wx):`https://${t.config.authDomain}/${vx}`,r={apiKey:e.apiKey,appName:t.name,v:Ji},i=Sx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Do(r).slice(1)}`}async function Ix(t){const e=await gx(t),n=rn().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:_x(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ex,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{s(o)},yx.get());function l(){rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Tx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kx=500,Cx=600,xx="_blank",Ax="http://localhost";class fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nx(t,e,n,r=kx,i=Cx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Tx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ue().toLowerCase();n&&(a=cw(u)?xx:n),uw(u)&&(e=e||Ax,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[y,v])=>`${f}${y}=${v},`,"");if(cC(u)&&a!=="_self")return Rx(e||"",a),new fg(null);const d=window.open(e||"",a,h);U(d,t,"popup-blocked");try{d.focus()}catch{}return new fg(d)}function Rx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Px="__/auth/handler",Dx="emulator/auth/handler";function pg(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ji,eventId:i};if(e instanceof yw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof jo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Ox(t)}?${Do(a).slice(1)}`}function Ox({config:t}){return t.emulator?yf(t,Dx):`https://${t.authDomain}/${Px}`}/**
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
 */const Ic="webStorageSupport";class Lx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iw,this._completeRedirectFn=sx}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=pg(e,n,r,bh(),i);return Nx(e,o,_f())}async _openRedirect(e,n,r,i){return await this._originValidation(e),jC(pg(e,n,r,bh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ix(e),r=new ax(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ic];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mw()||wf()||du()}}const Mx=Lx;var mg="@firebase/auth",gg="0.19.12";/**
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
 */class jx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ux(t){Ur(new sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{U(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gw(t)},h=new fC(a,l,u);return Kk(h,n),h})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new sr("auth-internal",e=>{const n=fu(e.getProvider("auth").getImmediate());return(r=>new jx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(mg,gg,bx(t)),tn(mg,gg,"esm2017")}/**
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
 */function $x(t=pf()){const e=hu(t,"auth");return e.isInitialized()?e.getImmediate():Wk(t,{popupRedirectResolver:Mx,persistence:[qC,OC,Iw]})}Ux("Browser");var Fx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Tf=Tf||{},$=Fx||self;function Pl(){}function $h(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Uo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Bx(t){return Object.prototype.hasOwnProperty.call(t,Tc)&&t[Tc]||(t[Tc]=++Vx)}var Tc="closure_uid_"+(1e9*Math.random()>>>0),Vx=0;function zx(t,e,n){return t.call.apply(t.bind,arguments)}function Hx(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=zx:He=Hx,He.apply(null,arguments)}function Ta(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function pr(){this.s=this.s,this.o=this.o}var qx=0;pr.prototype.s=!1;pr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),qx!=0)&&Bx(this)};pr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Pw=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Wx(t){e:{var e=bA;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function yg(t){return Array.prototype.concat.apply([],arguments)}function kf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Dl(t){return/^[\s\xa0]*$/.test(t)}var vg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ot(t,e){return t.indexOf(e)!=-1}function kc(t,e){return t<e?-1:t>e?1:0}var at;e:{var wg=$.navigator;if(wg){var Eg=wg.userAgent;if(Eg){at=Eg;break e}}at=""}function Cf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Dw(t){const e={};for(const n in t)e[n]=t[n];return e}var Sg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ow(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Sg.length;s++)n=Sg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function xf(t){return xf[" "](t),t}xf[" "]=Pl;function Kx(t){var e=Qx;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Gx=ot(at,"Opera"),Mi=ot(at,"Trident")||ot(at,"MSIE"),Lw=ot(at,"Edge"),Fh=Lw||Mi,Mw=ot(at,"Gecko")&&!(ot(at.toLowerCase(),"webkit")&&!ot(at,"Edge"))&&!(ot(at,"Trident")||ot(at,"MSIE"))&&!ot(at,"Edge"),Yx=ot(at.toLowerCase(),"webkit")&&!ot(at,"Edge");function jw(){var t=$.document;return t?t.documentMode:void 0}var Ol;e:{var Cc="",xc=function(){var t=at;if(Mw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Lw)return/Edge\/([\d\.]+)/.exec(t);if(Mi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Yx)return/WebKit\/(\S+)/.exec(t);if(Gx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xc&&(Cc=xc?xc[1]:""),Mi){var Ac=jw();if(Ac!=null&&Ac>parseFloat(Cc)){Ol=String(Ac);break e}}Ol=Cc}var Qx={};function Xx(){return Kx(function(){let t=0;const e=vg(String(Ol)).split("."),n=vg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=kc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||kc(i[2].length==0,s[2].length==0)||kc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Bh;if($.document&&Mi){var _g=jw();Bh=_g||parseInt(Ol,10)||void 0}else Bh=void 0;var Jx=Bh,Zx=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",Pl,e),$.removeEventListener("test",Pl,e)}catch{}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};function fo(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Mw){e:{try{xf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fo.Z.h.call(this)}}Ye(fo,et);var eA={2:"touch",3:"pen",4:"mouse"};fo.prototype.h=function(){fo.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $o="closure_listenable_"+(1e6*Math.random()|0),tA=0;function nA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++tA,this.ca=this.fa=!1}function gu(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function yu(t){this.src=t,this.g={},this.h=0}yu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zh(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new nA(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Vh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Rw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(gu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Af="closure_lm_"+(1e6*Math.random()|0),Nc={};function bw(t,e,n,r,i){if(r&&r.once)return $w(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)bw(t,e[s],n,r,i);return null}return n=Pf(n),t&&t[$o]?t.N(e,n,Uo(r)?!!r.capture:!!r,i):Uw(t,e,n,!1,r,i)}function Uw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Uo(i)?!!i.capture:!!i,a=Rf(t);if(a||(t[Af]=a=new yu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=rA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Zx||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Bw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rA(){function t(n){return e.call(t.src,t.listener,n)}var e=iA;return t}function $w(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)$w(t,e[s],n,r,i);return null}return n=Pf(n),t&&t[$o]?t.O(e,n,Uo(r)?!!r.capture:!!r,i):Uw(t,e,n,!0,r,i)}function Fw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Fw(t,e[s],n,r,i);else r=Uo(r)?!!r.capture:!!r,n=Pf(n),t&&t[$o]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zh(s,n,r,i),-1<n&&(gu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zh(e,n,r,i)),(n=-1<t?e[t]:null)&&Nf(n))}function Nf(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[$o])Vh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Bw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Rf(e))?(Vh(n,t),n.h==0&&(n.src=null,e[Af]=null)):gu(t)}}}function Bw(t){return t in Nc?Nc[t]:Nc[t]="on"+t}function iA(t,e){if(t.ca)t=!0;else{e=new fo(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Nf(t),t=n.call(r,e)}return t}function Rf(t){return t=t[Af],t instanceof yu?t:null}var Rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pf(t){return typeof t=="function"?t:(t[Rc]||(t[Rc]=function(e){return t.handleEvent(e)}),t[Rc])}function $e(){pr.call(this),this.i=new yu(this),this.P=this,this.I=null}Ye($e,pr);$e.prototype[$o]=!0;$e.prototype.removeEventListener=function(t,e,n,r){Fw(this,t,e,n,r)};function qe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var i=e;e=new et(r,t),Ow(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ka(o,r,!0,e)&&i}if(o=e.g=t,i=ka(o,r,!0,e)&&i,i=ka(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ka(o,r,!1,e)&&i}$e.prototype.M=function(){if($e.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)gu(n[r]);delete t.g[e],t.h--}}this.I=null};$e.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};$e.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ka(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Vh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Df=$.JSON.stringify;function sA(){var t=zw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oA{constructor(){this.h=this.g=null}add(e,n){const r=Vw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Vw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new aA,t=>t.reset());class aA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lA(t){$.setTimeout(()=>{throw t},0)}function Of(t,e){Hh||uA(),qh||(Hh(),qh=!0),zw.add(t,e)}var Hh;function uA(){var t=$.Promise.resolve(void 0);Hh=function(){t.then(cA)}}var qh=!1,zw=new oA;function cA(){for(var t;t=sA();){try{t.h.call(t.g)}catch(n){lA(n)}var e=Vw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qh=!1}function vu(t,e){$e.call(this),this.h=t||1,this.g=e||$,this.j=He(this.kb,this),this.l=Date.now()}Ye(vu,$e);D=vu.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),qe(this,"tick"),this.da&&(Lf(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lf(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){vu.Z.M.call(this),Lf(this),delete this.g};function Mf(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Hw(t){t.g=Mf(()=>{t.g=null,t.i&&(t.i=!1,Hw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hA extends pr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hw(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function po(t){pr.call(this),this.h=t,this.g={}}Ye(po,pr);var Ig=[];function qw(t,e,n,r){Array.isArray(n)||(n&&(Ig[0]=n.toString()),n=Ig);for(var i=0;i<n.length;i++){var s=bw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ww(t){Cf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Nf(e)},t),t.g={}}po.prototype.M=function(){po.Z.M.call(this),Ww(this)};po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wu(){this.g=!0}wu.prototype.Aa=function(){this.g=!1};function dA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var d=h.split("_");o=2<=d.length&&d[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function fA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function mi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mA(t,n)+(r?" "+r:"")})}function pA(t,e){t.info(function(){return"TIMEOUT: "+e})}wu.prototype.info=function(){};function mA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Df(n)}catch{return e}}var Xr={},Tg=null;function Eu(){return Tg=Tg||new $e}Xr.Ma="serverreachability";function Kw(t){et.call(this,Xr.Ma,t)}Ye(Kw,et);function mo(t){const e=Eu();qe(e,new Kw(e))}Xr.STAT_EVENT="statevent";function Gw(t,e){et.call(this,Xr.STAT_EVENT,t),this.stat=e}Ye(Gw,et);function lt(t){const e=Eu();qe(e,new Gw(e,t))}Xr.Na="timingevent";function Yw(t,e){et.call(this,Xr.Na,t),this.size=e}Ye(Yw,et);function Fo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Su={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Qw={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function jf(){}jf.prototype.h=null;function kg(t){return t.h||(t.h=t.i())}function Xw(){}var Bo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function bf(){et.call(this,"d")}Ye(bf,et);function Uf(){et.call(this,"c")}Ye(Uf,et);var Wh;function _u(){}Ye(_u,jf);_u.prototype.g=function(){return new XMLHttpRequest};_u.prototype.i=function(){return{}};Wh=new _u;function Vo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new po(this),this.P=gA,t=Fh?125:void 0,this.W=new vu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Jw}function Jw(){this.i=null,this.g="",this.h=!1}var gA=45e3,Kh={},Ll={};D=Vo.prototype;D.setTimeout=function(t){this.P=t};function Gh(t,e,n){t.K=1,t.v=Tu(Tn(e)),t.s=n,t.U=!0,Zw(t,null)}function Zw(t,e){t.F=Date.now(),zo(t),t.A=Tn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),o1(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Jw,t.g=C1(t.l,n?e:null,!t.s),0<t.O&&(t.L=new hA(He(t.Ia,t,t.g),t.O)),qw(t.V,t.g,"readystatechange",t.gb),e=t.H?Dw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),mo(),dA(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&mn(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const h=mn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(h!=3||Fh||this.g&&(this.h.h||this.g.ga()||Ng(this.g)))){this.I||h!=4||e==7||(e==8||0>=d?mo(3):mo(2)),Iu(this);var n=this.g.ba();this.N=n;t:if(e1(this)){var r=Ng(this.g);t="";var i=r.length,s=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),$s(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,fA(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Dl(a)){var u=a;break t}}u=null}if(n=u)mi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Yh(this,n);else{this.i=!1,this.o=3,lt(12),Tr(this),$s(this);break e}}this.U?(t1(this,h,o),Fh&&this.i&&h==3&&(qw(this.V,this.W,"tick",this.fb),this.W.start())):(mi(this.j,this.m,o,null),Yh(this,o)),h==4&&Tr(this),this.i&&!this.I&&(h==4?_1(this.l,this):(this.i=!1,zo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),Tr(this),$s(this)}}}catch{}finally{}};function e1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function t1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=yA(t,n),i==Ll){e==4&&(t.o=4,lt(14),r=!1),mi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Kh){t.o=4,lt(15),mi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else mi(t.j,t.m,i,null),Yh(t,i);e1(t)&&i!=Ll&&i!=Kh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kf(e),e.L=!0,lt(11))):(mi(t.j,t.m,n,"[Invalid Chunked Response]"),Tr(t),$s(t))}D.fb=function(){if(this.g){var t=mn(this.g),e=this.g.ga();this.C<e.length&&(Iu(this),t1(this,t,e),this.i&&t!=4&&zo(this))}};function yA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ll:(n=Number(e.substring(n,r)),isNaN(n)?Kh:(r+=1,r+n>e.length?Ll:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,Tr(this)};function zo(t){t.Y=Date.now()+t.P,n1(t,t.P)}function n1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fo(He(t.eb,t),e)}function Iu(t){t.B&&($.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(pA(this.j,this.A),this.K!=2&&(mo(),lt(17)),Tr(this),this.o=2,$s(this)):n1(this,this.Y-t)};function $s(t){t.l.G==0||t.I||_1(t.l,t)}function Tr(t){Iu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Lf(t.W),Ww(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Yh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qh(n.i,t))){if(n.I=t.N,!t.J&&Qh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ul(n),xu(n);else break e;Wf(n),lt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Fo(He(n.ab,n),6e3));if(1>=u1(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else kr(n,11)}else if((t.J||n.g==t)&&Ul(n),!Dl(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const h=u[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const d=u[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const v=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;!s.g&&(ot(v,"spdy")||ot(v,"quic")||ot(v,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Bf(s,s.h),s.h=null))}if(r.D){const w=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,he(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=k1(r,r.H?r.la:null,r.W),o.J){c1(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Iu(a),zo(a)),r.g=o}else E1(r);0<n.l.length&&Au(n)}else u[0]!="stop"&&u[0]!="close"||kr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?kr(n,7):qf(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}mo(4)}catch{}}function vA(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if($h(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $f(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if($h(t)||typeof t=="string")Pw(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if($h(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=vA(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function ts(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ts)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}D=ts.prototype;D.R=function(){Ff(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return Ff(this),this.g.concat()};function Ff(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Vr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Vr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}D.get=function(t,e){return Vr(this.h,t)?this.h[t]:e};D.set=function(t,e){Vr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Vr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var r1=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function wA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof zr){this.g=e!==void 0?e:t.g,Ml(this,t.j),this.s=t.s,jl(this,t.i),bl(this,t.m),this.l=t.l,e=t.h;var n=new go;n.i=e.i,e.g&&(n.g=new ts(e.g),n.h=e.h),Cg(this,n),this.o=t.o}else t&&(n=String(t).match(r1))?(this.g=!!e,Ml(this,n[1]||"",!0),this.s=Fs(n[2]||""),jl(this,n[3]||"",!0),bl(this,n[4]),this.l=Fs(n[5]||"",!0),Cg(this,n[6]||"",!0),this.o=Fs(n[7]||"")):(this.g=!!e,this.h=new go(null,this.g))}zr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xs(e,xg,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(xs(e,xg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(xs(n,n.charAt(0)=="/"?TA:IA,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",xs(n,CA)),t.join("")};function Tn(t){return new zr(t)}function Ml(t,e,n){t.j=n?Fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jl(t,e,n){t.i=n?Fs(e,!0):e}function bl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cg(t,e,n){e instanceof go?(t.h=e,xA(t.h,t.g)):(n||(e=xs(e,kA)),t.h=new go(e,t.g))}function he(t,e,n){t.h.set(e,n)}function Tu(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function EA(t){return t instanceof zr?Tn(t):new zr(t,void 0)}function SA(t,e,n,r){var i=new zr(null,void 0);return t&&Ml(i,t),e&&jl(i,e),n&&bl(i,n),r&&(i.l=r),i}function Fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_A),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _A(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xg=/[#\/\?@]/g,IA=/[#\?:]/g,TA=/[#\?]/g,kA=/[#\?@]/g,CA=/#/g;function go(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mr(t){t.g||(t.g=new ts,t.h=0,t.i&&wA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=go.prototype;D.add=function(t,e){mr(this),this.i=null,t=ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function i1(t,e){mr(t),e=ns(t,e),Vr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Vr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ff(t)))}function s1(t,e){return mr(t),e=ns(t,e),Vr(t.g.h,e)}D.forEach=function(t,e){mr(this),this.g.forEach(function(n,r){Pw(n,function(i){t.call(e,i,r,this)},this)},this)};D.T=function(){mr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};D.R=function(t){mr(this);var e=[];if(typeof t=="string")s1(this,t)&&(e=yg(e,this.g.get(ns(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=yg(e,t[n])}return e};D.set=function(t,e){return mr(this),this.i=null,t=ns(this,t),s1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function o1(t,e,n){i1(t,e),0<n.length&&(t.i=null,t.g.set(ns(t,e),kf(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xA(t,e){e&&!t.j&&(mr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(i1(this,r),o1(this,i,n))},t)),t.j=e}var AA=class{constructor(t,e){this.h=t,this.g=e}};function a1(t){this.l=t||NA,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NA=10;function l1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function u1(t){return t.h?1:t.g?t.g.size:0}function Qh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bf(t,e){t.g?t.g.add(e):t.h=e}function c1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}a1.prototype.cancel=function(){if(this.i=h1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function h1(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return kf(t.i)}function Vf(){}Vf.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};Vf.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function RA(){this.g=new Vf}function PA(t,e,n){const r=n||"";try{$f(t,function(i,s){let o=i;Uo(i)&&(o=Df(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function DA(t,e){const n=new wu;if($.Image){const r=new Image;r.onload=Ta(Ca,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ta(Ca,n,r,"TestLoadImage: error",!1,e),r.onabort=Ta(Ca,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ta(Ca,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ca(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ho(t){this.l=t.$b||null,this.j=t.ib||!1}Ye(Ho,jf);Ho.prototype.g=function(){return new ku(this.l,this.j)};Ho.prototype.i=function(t){return function(){return t}}({});function ku(t,e){$e.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(ku,$e);var zf=0;D=ku.prototype;D.open=function(t,e){if(this.readyState!=zf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yo(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qo(this)),this.readyState=zf};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yo(this)),this.g&&(this.readyState=3,yo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;d1(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function d1(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qo(this):yo(this),this.readyState==3&&d1(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,qo(this))};D.Ta=function(t){this.g&&(this.response=t,qo(this))};D.ha=function(){this.g&&qo(this)};function qo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yo(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ku.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OA=$.JSON.parse;function Ae(t){$e.call(this),this.headers=new ts,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=f1,this.K=this.L=!1}Ye(Ae,$e);var f1="",LA=/^https?$/i,MA=["POST","PUT"];D=Ae.prototype;D.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wh.g(),this.C=this.u?kg(this.u):kg(Wh),this.g.onreadystatechange=He(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Ag(this,s);return}t=n||"";const i=new ts(this.headers);r&&$f(r,function(s,o){i.set(o,s)}),r=Wx(i.T()),n=$.FormData&&t instanceof $.FormData,!(0<=Rw(MA,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{g1(this),0<this.B&&((this.K=jA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.pa,this)):this.A=Mf(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ag(this,s)}};function jA(t){return Mi&&Xx()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function bA(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof Tf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function Ag(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,p1(t),Cu(t)}function p1(t){t.D||(t.D=!0,qe(t,"complete"),qe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),Cu(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cu(this,!0)),Ae.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?m1(this):this.cb())};D.cb=function(){m1(this)};function m1(t){if(t.h&&typeof Tf<"u"&&(!t.C[1]||mn(t)!=4||t.ba()!=2)){if(t.v&&mn(t)==4)Mf(t.Fa,0,t);else if(qe(t,"readystatechange"),mn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(r1)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!LA.test(i?i.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<mn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",p1(t)}}finally{Cu(t)}}}}function Cu(t,e){if(t.g){g1(t);const n=t.g,r=t.C[0]?Pl:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function g1(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function mn(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OA(e)}};function Ng(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case f1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function UA(t){let e="";return Cf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=UA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function vs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function y1(t){this.za=0,this.l=[],this.h=new wu,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=vs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=vs("baseRetryDelayMs",5e3,t),this.$a=vs("retryDelaySeedMs",1e4,t),this.Ya=vs("forwardChannelMaxRetries",2,t),this.ra=vs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new a1(t&&t.concurrentRequestLimit),this.Ca=new RA,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=y1.prototype;D.ma=8;D.G=1;function qf(t){if(v1(t),t.G==3){var e=t.V++,n=Tn(t.F);he(n,"SID",t.J),he(n,"RID",e),he(n,"TYPE","terminate"),Wo(t,n),e=new Vo(t,t.h,e,void 0),e.K=2,e.v=Tu(Tn(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=C1(e.l,null),e.g.ea(e.v)),e.F=Date.now(),zo(e)}T1(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function xu(t){t.g&&(Kf(t),t.g.cancel(),t.g=null)}function v1(t){xu(t),t.u&&($.clearTimeout(t.u),t.u=null),Ul(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Pc(t,e){t.l.push(new AA(t.Za++,e)),t.G==3&&Au(t)}function Au(t){l1(t.i)||t.m||(t.m=!0,Of(t.Ha,t),t.C=0)}function $A(t,e){return u1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Fo(He(t.Ha,t,e),I1(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Vo(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Dw(s),Ow(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=w1(this,i,e),n=Tn(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),Wo(this,n),this.o&&s&&Hf(n,this.o,s),Bf(this.i,i),this.Ra&&he(n,"TYPE","init"),this.ja?(he(n,"$req",e),he(n,"SID","null"),i.$=!0,Gh(i,n,null)):Gh(i,n,e),this.G=2}}else this.G==3&&(t?Rg(this,t):this.l.length==0||l1(this.i)||Rg(this))};function Rg(t,e){var n;e?n=e.m:n=t.V++;const r=Tn(t.F);he(r,"SID",t.J),he(r,"RID",n),he(r,"AID",t.U),Wo(t,r),t.o&&t.s&&Hf(r,t.o,t.s),n=new Vo(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=w1(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Bf(t.i,n),Gh(n,r,e)}function Wo(t,e){t.j&&$f({},function(n,r){he(e,r,n)})}function w1(t,e,n){n=Math.min(t.l.length,n);var r=t.j?He(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const h=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{PA(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function E1(t){t.g||t.u||(t.Y=1,Of(t.Ga,t),t.A=0)}function Wf(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Fo(He(t.Ga,t),I1(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,S1(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Fo(He(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,lt(10),xu(this),S1(this))};function Kf(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function S1(t){t.g=new Vo(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Tn(t.oa);he(e,"RID","rpc"),he(e,"SID",t.J),he(e,"CI",t.N?"0":"1"),he(e,"AID",t.U),Wo(t,e),he(e,"TYPE","xmlhttp"),t.o&&t.s&&Hf(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Tu(Tn(e)),n.s=null,n.U=!0,Zw(n,t)}D.ab=function(){this.v!=null&&(this.v=null,xu(this),Wf(this),lt(19))};function Ul(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function _1(t,e){var n=null;if(t.g==e){Ul(t),Kf(t),t.g=null;var r=2}else if(Qh(t.i,e))n=e.D,c1(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Eu(),qe(r,new Yw(r,n)),Au(t)}else E1(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&$A(t,e)||r==2&&Wf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:kr(t,5);break;case 4:kr(t,10);break;case 3:kr(t,6);break;default:kr(t,2)}}}function I1(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function kr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=He(t.jb,t);n||(n=new zr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Ml(n,"https"),Tu(n)),DA(n.toString(),r)}else lt(2);t.G=0,t.j&&t.j.va(e),T1(t),v1(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),lt(2)):(this.h.info("Failed to ping google.com"),lt(1))};function T1(t){t.G=0,t.I=-1,t.j&&((h1(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,kf(t.l),t.l.length=0),t.j.ua())}function k1(t,e,n){let r=EA(n);if(r.i!="")e&&jl(r,e+"."+r.i),bl(r,r.m);else{const i=$.location;r=SA(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Cf(t.aa,function(i,s){he(r,s,i)}),e=t.D,n=t.sa,e&&n&&he(r,e,n),he(r,"VER",t.ma),Wo(t,r),r}function C1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ae(new Ho({ib:!0})):new Ae(t.qa),e.L=t.H,e}function x1(){}D=x1.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function $l(){if(Mi&&!(10<=Number(Jx)))throw Error("Environmental error: no available transport.")}$l.prototype.g=function(t,e){return new xt(t,e)};function xt(t,e){$e.call(this),this.g=new y1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Dl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Dl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new rs(this)}Ye(xt,$e);xt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Of(He(t.hb,t,e))),lt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=k1(t,null,t.W),Au(t)};xt.prototype.close=function(){qf(this.g)};xt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Pc(this.g,e)}else this.v?(e={},e.__data__=Df(t),Pc(this.g,e)):Pc(this.g,t)};xt.prototype.M=function(){this.g.j=null,delete this.j,qf(this.g),delete this.g,xt.Z.M.call(this)};function A1(t){bf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(A1,bf);function N1(){Uf.call(this),this.status=1}Ye(N1,Uf);function rs(t){this.g=t}Ye(rs,x1);rs.prototype.xa=function(){qe(this.g,"a")};rs.prototype.wa=function(t){qe(this.g,new A1(t))};rs.prototype.va=function(t){qe(this.g,new N1)};rs.prototype.ua=function(){qe(this.g,"b")};$l.prototype.createWebChannel=$l.prototype.g;xt.prototype.send=xt.prototype.u;xt.prototype.open=xt.prototype.m;xt.prototype.close=xt.prototype.close;Su.NO_ERROR=0;Su.TIMEOUT=8;Su.HTTP_ERROR=6;Qw.COMPLETE="complete";Xw.EventType=Bo;Bo.OPEN="a";Bo.CLOSE="b";Bo.ERROR="c";Bo.MESSAGE="d";$e.prototype.listen=$e.prototype.N;Ae.prototype.listenOnce=Ae.prototype.O;Ae.prototype.getLastError=Ae.prototype.La;Ae.prototype.getLastErrorCode=Ae.prototype.Da;Ae.prototype.getStatus=Ae.prototype.ba;Ae.prototype.getResponseJson=Ae.prototype.Qa;Ae.prototype.getResponseText=Ae.prototype.ga;Ae.prototype.send=Ae.prototype.ea;var FA=function(){return new $l},BA=function(){return Eu()},Dc=Su,VA=Qw,zA=Xr,Pg={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},HA=Ho,xa=Xw,qA=Ae;const Dg="@firebase/firestore";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let is="9.6.11";/**
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
 */const Hr=new df("@firebase/firestore");function Og(){return Hr.logLevel}function L(t,...e){if(Hr.logLevel<=Z.DEBUG){const n=e.map(Gf);Hr.debug(`Firestore (${is}): ${t}`,...n)}}function or(t,...e){if(Hr.logLevel<=Z.ERROR){const n=e.map(Gf);Hr.error(`Firestore (${is}): ${t}`,...n)}}function Lg(t,...e){if(Hr.logLevel<=Z.WARN){const n=e.map(Gf);Hr.warn(`Firestore (${is}): ${t}`,...n)}}function Gf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: `+t;throw or(e),new Error(e)}function ie(t,e){t||B()}function z(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class WA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class GA{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new WA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new ft(e)}}class YA{constructor(e,n,r){this.type="FirstParty",this.user=ft.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class QA{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new YA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JA{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.p=n.token,new XA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ZA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */Yf.A=-1;class R1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ZA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function ji(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new tt(0,0))}static max(){return new W(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Mg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function P1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class vo{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends vo{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const eN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends vo{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return eN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
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
 */class wo{constructor(e){this.fields=e,e.sort(mt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ge(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const tN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(ie(!!t),typeof t=="string"){let e=0;const n=tN.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bi(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */function D1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function O1(t){const e=t.mapValue.fields.__previous_value__;return D1(e)?O1(e):e}function Eo(t){const e=ar(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class nN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ui{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ui("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ui&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ss(t){return t==null}function Fl(t){return t===0&&1/t==-1/0}function rN(t){return typeof t=="number"&&Number.isInteger(t)&&!Fl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ae.fromString(e))}static fromName(e){return new j(ae.fromString(e).popFirst(5))}static empty(){return new j(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ae(e.slice()))}}function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?D1(t)?4:iN(t)?9:10:B()}function sn(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eo(t).isEqual(Eo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ar(r.timestampValue),o=ar(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return bi(r.bytesValue).isEqual(bi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ce(r.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(r.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ce(r.integerValue)===Ce(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ce(r.doubleValue),o=Ce(i.doubleValue);return s===o?Fl(s)===Fl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Mg(s)!==Mg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!sn(s[a],o[a])))return!1;return!0}(t,e);default:return B()}}function So(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function $i(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ce(i.integerValue||i.doubleValue),a=Ce(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return jg(t.timestampValue,e.timestampValue);case 4:return jg(Eo(t),Eo(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(i,s){const o=bi(i),a=bi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ee(o[l],a[l]);if(u!==0)return u}return ee(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ee(Ce(i.latitude),Ce(s.latitude));return o!==0?o:ee(Ce(i.longitude),Ce(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=$i(o[l],a[l]);if(u)return u}return ee(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const d=ee(a[h],u[h]);if(d!==0)return d;const f=$i(o[a[h]],l[u[h]]);if(f!==0)return f}return ee(a.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function jg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=ar(t),r=ar(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function ki(t){return Xh(t)}function Xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ar(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Xh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Xh(r.fields[a])}`;return s+"}"}(t.mapValue):B();var e,n}function bg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jh(t){return!!t&&"integerValue"in t}function Qf(t){return!!t&&"arrayValue"in t}function Ug(t){return!!t&&"nullValue"in t}function $g(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ga(t){return!!t&&"mapValue"in t}function Bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bs(n)}setAll(e){let n=mt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Bs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ga(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Jr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(Bs(this.value))}}function L1(t){const e=[];return Jr(t.fields,(n,r)=>{const i=new mt([n]);if(Ga(r)){const s=L1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new wo(e)}/**
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
 */class Ze{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ze(e,0,W.min(),W.min(),_t.empty(),0)}static newFoundDocument(e,n,r){return new Ze(e,1,n,W.min(),r,0)}static newNoDocument(e,n){return new Ze(e,2,n,W.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,W.min(),_t.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function sN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new Fi(i,j.empty(),e)}function oN(t){return new Fi(t.readTime,t.key,-1)}class Fi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fi(W.min(),j.empty(),-1)}static max(){return new Fi(W.max(),j.empty(),-1)}}function aN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */class lN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function Fg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new lN(t,e,n,r,i,s,o)}function Xf(t){const e=z(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ki(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ss(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ki(r)).join(",")),e.P=n}return e.P}function uN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ki(r.value)}`;var r}).join(", ")}]`),ss(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ki(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ki(n)).join(",")),`Target(${e})`}function Jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!yN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!sn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vg(t.startAt,e.startAt)&&Vg(t.endAt,e.endAt)}function Zh(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ut extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new cN(e,n,r):n==="array-contains"?new fN(e,r):n==="in"?new pN(e,r):n==="not-in"?new mN(e,r):n==="array-contains-any"?new gN(e,r):new ut(e,n,r)}static V(e,n,r){return n==="in"?new hN(e,r):new dN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v($i(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.v($i(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class cN extends ut{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.v(n)}}class hN extends ut{constructor(e,n){super(e,"in",n),this.keys=M1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dN extends ut{constructor(e,n){super(e,"not-in",n),this.keys=M1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function M1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class fN extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qf(n)&&So(n.arrayValue,this.value)}}class pN extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class mN extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!So(this.value.arrayValue,n)}}class gN extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}class Bl{constructor(e,n){this.position=e,this.inclusive=n}}class Vs{constructor(e,n="asc"){this.field=e,this.dir=n}}function yN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Bg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=$i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ko{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function vN(t,e,n,r,i,s,o,a){return new Ko(t,e,n,r,i,s,o,a)}function Zf(t){return new Ko(t)}function Ya(t){return!ss(t.limit)&&t.limitType==="F"}function Vl(t){return!ss(t.limit)&&t.limitType==="L"}function j1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function b1(t){for(const e of t.filters)if(e.S())return e.field;return null}function U1(t){return t.collectionGroup!==null}function _o(t){const e=z(t);if(e.D===null){e.D=[];const n=b1(e),r=j1(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Vs(n)),e.D.push(new Vs(mt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Vs(mt.keyField(),s))}}}return e.D}function Wr(t){const e=z(t);if(!e.C)if(e.limitType==="F")e.C=Fg(e.path,e.collectionGroup,_o(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of _o(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Vs(s.field,o))}const r=e.endAt?new Bl(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new Bl(e.startAt.position,!e.startAt.inclusive):null;e.C=Fg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function wN(t,e,n){return new Ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nu(t,e){return Jf(Wr(t),Wr(e))&&t.limitType===e.limitType}function $1(t){return`${Xf(Wr(t))}|lt:${t.limitType}`}function ed(t){return`Query(target=${uN(Wr(t))}; limitType=${t.limitType})`}function ep(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Bg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,_o(n),r)||n.endAt&&!function(i,s,o){const a=Bg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,_o(n),r))}(t,e)}function EN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function F1(t){return(e,n)=>{let r=!1;for(const i of _o(t)){const s=SN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function SN(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?$i(a,l):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
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
 */function B1(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fl(e)?"-0":e}}function V1(t){return{integerValue:""+t}}function _N(t,e){return rN(e)?V1(e):B1(t,e)}/**
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
 */class Ru{constructor(){this._=void 0}}function IN(t,e,n){return t instanceof zl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Io?H1(t,e):t instanceof To?q1(t,e):function(r,i){const s=z1(r,i),o=zg(s)+zg(r.k);return Jh(s)&&Jh(r.k)?V1(o):B1(r.M,o)}(t,e)}function TN(t,e,n){return t instanceof Io?H1(t,e):t instanceof To?q1(t,e):n}function z1(t,e){return t instanceof Hl?Jh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class zl extends Ru{}class Io extends Ru{constructor(e){super(),this.elements=e}}function H1(t,e){const n=W1(e);for(const r of t.elements)n.some(i=>sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class To extends Ru{constructor(e){super(),this.elements=e}}function q1(t,e){let n=W1(e);for(const r of t.elements)n=n.filter(i=>!sn(i,r));return{arrayValue:{values:n}}}class Hl extends Ru{constructor(e,n){super(),this.M=e,this.k=n}}function zg(t){return Ce(t.integerValue||t.doubleValue)}function W1(t){return Qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Io&&r instanceof Io||n instanceof To&&r instanceof To?ji(n.elements,r.elements,sn):n instanceof Hl&&r instanceof Hl?sn(n.k,r.k):n instanceof zl&&r instanceof zl}(t.transform,e.transform)}class CN{constructor(e,n){this.version=e,this.transformResults=n}}class er{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pu{}function xN(t,e,n){t instanceof Du?function(r,i,s){const o=r.value.clone(),a=Wg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof os?function(r,i,s){if(!Qa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Wg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(K1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function td(t,e,n){t instanceof Du?function(r,i,s){if(!Qa(r.precondition,i))return;const o=r.value.clone(),a=Kg(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(qg(i),o).setHasLocalMutations()}(t,e,n):t instanceof os?function(r,i,s){if(!Qa(r.precondition,i))return;const o=Kg(r.fieldTransforms,s,i),a=i.data;a.setAll(K1(r)),a.setAll(o),i.convertToFoundDocument(qg(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Qa(r.precondition,i)&&i.convertToNoDocument(W.min())}(t,e)}function AN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=z1(r.transform,i||null);s!=null&&(n==null&&(n=_t.empty()),n.set(r.field,s))}return n||null}function Hg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ji(n,r,(i,s)=>kN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function qg(t){return t.isFoundDocument()?t.version:W.min()}class Du extends Pu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class os extends Pu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function K1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Wg(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,TN(o,a,n[i]))}return r}function Kg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,IN(s,o,e))}return r}class G1 extends Pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class NN extends Pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class RN{constructor(e){this.count=e}}/**
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
 */var ke,G;function PN(t){switch(t){default:return B();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Y1(t){if(t===void 0)return or("GRPC error has no .code"),T.UNKNOWN;switch(t){case ke.OK:return T.OK;case ke.CANCELLED:return T.CANCELLED;case ke.UNKNOWN:return T.UNKNOWN;case ke.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case ke.INTERNAL:return T.INTERNAL;case ke.UNAVAILABLE:return T.UNAVAILABLE;case ke.UNAUTHENTICATED:return T.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case ke.NOT_FOUND:return T.NOT_FOUND;case ke.ALREADY_EXISTS:return T.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return T.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case ke.ABORTED:return T.ABORTED;case ke.OUT_OF_RANGE:return T.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return T.UNIMPLEMENTED;case ke.DATA_LOSS:return T.DATA_LOSS;default:return B()}}(G=ke||(ke={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return P1(this.inner)}size(){return this.innerSize}}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Aa(this.root,e,this.comparator,!0)}}class Aa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ve(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class We{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gg(this.data.getIterator())}getIteratorFrom(e){return new Gg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Gg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const DN=new Fe(j.comparator);function Kr(){return DN}const ON=new Fe(j.comparator);function nd(){return ON}function Oc(){return new as(t=>t.toString(),(t,e)=>t.isEqual(e))}const LN=new Fe(j.comparator),MN=new We(j.comparator);function ue(...t){let e=MN;for(const n of t)e=e.add(n);return e}const jN=new We(ee);function Q1(){return jN}/**
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
 */class Ou{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Go.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ou(W.min(),r,Q1(),Kr(),ue())}}class Go{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Go(Ge.EMPTY_BYTE_STRING,n,ue(),ue(),ue())}}/**
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
 */class Xa{constructor(e,n,r,i){this.O=e,this.removedTargetIds=n,this.key=r,this.F=i}}class X1{constructor(e,n){this.targetId=e,this.$=n}}class J1{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Yg{constructor(){this.B=0,this.L=Xg(),this.U=Ge.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=ue(),n=ue(),r=ue();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new Go(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Xg()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class bN{constructor(e){this.nt=e,this.st=new Map,this.it=Kr(),this.rt=Qg(),this.ot=new We(ee)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,r=e.$.count,i=this.wt(n);if(i){const s=i.target;if(Zh(s))if(r===0){const o=new j(s.path);this.ct(n,o,Ze.newNoDocument(o,W.min()))}else ie(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&Zh(a.target)){const l=new j(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.ct(o,l,Ze.newNoDocument(l,e))}s.j&&(n.set(o,s.H()),s.J())}});let r=ue();this.rt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.it.forEach((s,o)=>o.setReadTime(e));const i=new Ou(e,n,this.ot,this.it,r);return this.it=Kr(),this.rt=Qg(),this.ot=new We(ee),i}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Yg,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new We(ee),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Yg),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Qg(){return new Fe(j.comparator)}function Xg(){return new Fe(j.comparator)}/**
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
 */const UN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$N=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class FN{constructor(e,n){this.databaseId=e,this.N=n}}function ql(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Z1(t,e){return t.N?e.toBase64():e.toUint8Array()}function BN(t,e){return ql(t,e.toTimestamp())}function vn(t){return ie(!!t),W.fromTimestamp(function(e){const n=ar(e);return new tt(n.seconds,n.nanos)}(t))}function tp(t,e){return function(n){return new ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function eE(t){const e=ae.fromString(t);return ie(rE(e)),e}function rd(t,e){return tp(t.databaseId,e.path)}function Lc(t,e){const n=eE(e);if(n.get(1)!==t.databaseId.projectId)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(tE(n))}function id(t,e){return tp(t.databaseId,e)}function VN(t){const e=eE(t);return e.length===4?ae.emptyPath():tE(e)}function sd(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tE(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jg(t,e,n){return{name:rd(t,e),fields:n.value.mapValue.fields}}function zN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.N?(ie(u===void 0||typeof u=="string"),Ge.fromBase64String(u||"")):(ie(u===void 0||u instanceof Uint8Array),Ge.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:Y1(l.code);return new O(u,l.message||"")}(o);n=new J1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lc(t,r.document.name),s=vn(r.document.updateTime),o=new _t({mapValue:{fields:r.document.fields}}),a=Ze.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Xa(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lc(t,r.document),s=r.readTime?vn(r.readTime):W.min(),o=Ze.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lc(t,r.document),s=r.removedTargetIds||[];n=new Xa([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new RN(i),o=r.targetId;n=new X1(o,s)}}return n}function HN(t,e){let n;if(e instanceof Du)n={update:Jg(t,e.key,e.value)};else if(e instanceof G1)n={delete:rd(t,e.key)};else if(e instanceof os)n={update:Jg(t,e.key,e.data),updateMask:eR(e.fieldMask)};else{if(!(e instanceof NN))return B();n={verify:rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof zl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Io)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof To)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Hl)return{fieldPath:s.field.canonicalString(),increment:o.k};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:BN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B()}(t,e.precondition)),n}function qN(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?vn(r.updateTime):vn(i);return s.isEqual(W.min())&&(s=vn(i)),new CN(s,r.transformResults||[])}(n,e))):[]}function WN(t,e){return{documents:[id(t,e.path)]}}function KN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=id(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=id(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(h=>function(d){if(d.op==="=="){if($g(d.value))return{unaryFilter:{field:ti(d.field),op:"IS_NAN"}};if(Ug(d.value))return{unaryFilter:{field:ti(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if($g(d.value))return{unaryFilter:{field:ti(d.field),op:"IS_NOT_NAN"}};if(Ug(d.value))return{unaryFilter:{field:ti(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(d.field),op:XN(d.op),value:d.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ti(h.field),direction:QN(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.N||ss(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function GN(t){let e=VN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=nE(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(d){return new Vs(gi(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(h)));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ss(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Bl(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Bl(f,d)}(n.endAt)),vN(e,i,o,s,a,"F",l,u)}function YN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function nE(t){return t?t.unaryFilter!==void 0?[ZN(t)]:t.fieldFilter!==void 0?[JN(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>nE(e)).reduce((e,n)=>e.concat(n)):B():[]}function QN(t){return UN[t]}function XN(t){return $N[t]}function ti(t){return{fieldPath:t.canonicalString()}}function gi(t){return mt.fromServerFormat(t.fieldPath)}function JN(t){return ut.create(gi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}function ZN(t){switch(t.unaryFilter.op){case"IS_NAN":const e=gi(t.unaryFilter.field);return ut.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=gi(t.unaryFilter.field);return ut.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gi(t.unaryFilter.field);return ut.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gi(t.unaryFilter.field);return ut.create(i,"!=",{nullValue:"NULL_VALUE"});default:return B()}}function eR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const tR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function Yo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&xN(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&td(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&td(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(W.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>Hg(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>Hg(n,r))}}class np{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=LN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new np(e,n,r,i)}}/**
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
 */class iR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Rr{constructor(e,n,r,i,s=W.min(),o=W.min(),a=Ge.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class sR{constructor(e){this.Jt=e}}function oR(t){const e=GN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wN(e,e.limit,"L"):e}/**
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
 */class aR{constructor(){this.qe=new lR}addToCollectionParentIndex(e,n){return this.qe.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getFieldIndex(e,n){return A.resolve(null)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class lR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(ae.comparator)).toArray()}}/**
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
 */class Bi{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Bi(0)}static yn(){return new Bi(-1)}}/**
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
 */async function Qo(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==tR)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class uR{constructor(){this.changes=new as(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cR{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}qs(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(e,n.path):U1(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new j(n)).next(r=>{let i=nd();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ws(e,n,r){const i=n.collectionGroup;let s=nd();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(u,h){return new Ko(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.zs(e,l,r).next(u=>{u.forEach((h,d)=>{s=s.insert(h,d)})})}).next(()=>s))}zs(e,n,r){let i;return this.ds.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const l=a.key;let u=i.get(l);u==null&&(u=Ze.newInvalidDocument(l),i=i.insert(l,u)),td(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(l))}}).next(()=>(i.forEach((s,o)=>{ep(n,o)||(i=i.remove(s))}),i))}}/**
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
 */class rp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=i}static Ys(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rp(e,n.fromCache,r,i)}}/**
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
 */class hR{Xs(e){this.Zs=e}Qs(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(W.min())?this.ti(e,n):this.Zs.Ks(e,i).next(s=>{const o=this.ei(n,s);return(Ya(n)||Vl(n))&&this.ni(n.limitType,o,i,r)?this.ti(e,n):(Og()<=Z.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ed(n)),this.Zs.Qs(e,n,sN(r,-1)).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}ei(e,n){let r=new We(F1(e));return n.forEach((i,s)=>{ep(e,s)&&(r=r.add(s))}),r}ni(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ti(e,n){return Og()<=Z.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",ed(n)),this.Zs.Qs(e,n,Fi.min())}}/**
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
 */class dR{constructor(e,n,r,i){this.persistence=e,this.si=n,this.M=i,this.ii=new Fe(ee),this.ri=new as(s=>Xf(s),Jf),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new cR(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function fR(t,e,n,r){return new dR(t,e,n,r)}async function iE(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.Bs.getAllMutationBatches(r).next(s=>(i=s,n.ai(e),n.Bs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ue();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.ci.Ks(r,l).next(u=>({hi:u,removedBatchIds:o,addedBatchIds:a}))})})}function pR(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const h=l.batch,d=h.keys();let f=A.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(a,y)).next(v=>{const w=l.docVersions.get(y);ie(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),f.next(()=>o.Bs.removeMutationBatch(a,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.ci.Ks(r,i))})}function sE(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function mR(t,e){const n=z(t),r=e.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.fs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.fs.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Ge.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(y,v,w){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(n.fs.updateTargetData(s,f))});let l=Kr();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(gR(s,o,e.documentUpdates).next(u=>{l=u})),!r.isEqual(W.min())){const u=n.fs.getLastRemoteSnapshotVersion(s).next(h=>n.fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.ci.Gs(s,l)).next(()=>l)}).then(s=>(n.ii=i,s))}function gR(t,e,n){let r=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=Kr();return n.forEach((o,a)=>{const l=i.get(o);a.isNoDocument()&&a.version.isEqual(W.min())?(e.removeEntry(o,a.readTime),s=s.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),s=s.insert(o,a)):L("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),s})}function yR(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function vR(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.fs.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.fs.allocateTargetId(r).next(o=>(i=new Rr(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ii.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ii=n.ii.insert(r.targetId,r),n.ri.set(e,r.targetId)),r})}async function od(t,e,n){const r=z(t),i=r.ii.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Yo(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ii=r.ii.remove(e),r.ri.delete(i.target)}function Zg(t,e,n){const r=z(t);let i=W.min(),s=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const h=z(a),d=h.ri.get(u);return d!==void 0?A.resolve(h.ii.get(d)):h.fs.getTargetData(l,u)}(r,o,Wr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.si.Qs(o,e,n?i:W.min(),n?s:ue())).next(a=>(wR(r,EN(e),a),{documents:a,li:s})))}function wR(t,e,n){let r=W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.oi.set(e,r)}/**
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
 */class ER{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return A.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var r;return this.wi.set(n.id,{id:(r=n).id,version:r.version,createTime:vn(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(r){return{name:r.name,query:oR(r.bundledQuery),readTime:vn(r.readTime)}}(n)),A.resolve()}}/**
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
 */class SR{constructor(){this.overlays=new Fe(j.comparator),this.gi=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Xt(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.gi.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.gi.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Oc(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=Oc(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Oc(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return A.resolve(a)}Xt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);if(i!==null){const o=this.gi.get(i.largestBatchId).delete(r.key);this.gi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iR(n,r));let s=this.gi.get(n);s===void 0&&(s=ue(),this.gi.set(n,s)),this.gi.set(n,s.add(r.key))}}/**
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
 */class ip{constructor(){this.yi=new We(Oe.pi),this.Ii=new We(Oe.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.yi=this.yi.add(r),this.Ii=this.Ii.add(r)}Ei(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ai(new Oe(e,n))}Ri(e,n){e.forEach(r=>this.removeReference(r,n))}Pi(e){const n=new j(new ae([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.Ii.forEachInRange([r,i],o=>{this.Ai(o),s.push(o.key)}),s}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new j(new ae([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=ue();return this.Ii.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.yi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return j.comparator(e.key,n.key)||ee(e.vi,n.vi)}static Ti(e,n){return ee(e.vi,n.vi)||j.comparator(e.key,n.key)}}/**
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
 */class _R{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new We(Oe.pi)}checkEmpty(e){return A.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,i){const s=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new rR(s,n,r,i);this.Bs.push(o);for(const a of i)this.Di=this.Di.add(new Oe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.xi(r),s=i<0?0:i;return A.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return A.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.Di.forEachInRange([r,i],o=>{const a=this.Ci(o.vi);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(ee);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.Di.forEachInRange([s,o],a=>{r=r.add(a.vi)})}),A.resolve(this.Ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new j(s),0);let a=new We(ee);return this.Di.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.vi)),!0)},o),A.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(r=>{const i=this.Ci(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.ki(n.batchId,"removed")===0),this.Bs.shift();let r=this.Di;return A.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Di=r})}_n(e){}containsKey(e,n){const r=new Oe(n,0),i=this.Di.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Bs.length,A.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class IR{constructor(e){this.Mi=e,this.docs=new Fe(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mi(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Kr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),A.resolve(r)}getAllFromCollection(e,n,r){let i=Kr();const s=new j(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||aN(oN(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,i){B()}Oi(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TR(this)}getSize(e){return A.resolve(this.size)}}class TR extends uR{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(e,i)):this.Kn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class kR{constructor(e){this.persistence=e,this.Fi=new as(n=>Xf(n),Jf),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.$i=0,this.Bi=new ip,this.targetCount=0,this.Li=Bi.gn()}forEachTarget(e,n){return this.Fi.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),A.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new Bi(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Tn(n),A.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fi.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Bi.Ei(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Bi.Ri(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Bi.Vi(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Bi.containsKey(n))}}/**
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
 */class CR{constructor(e,n){this.Ui={},this.overlays={},this.es=new Yf(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new kR(this),this.indexManager=new aR,this.ds=function(r){return new IR(r)}(r=>this.referenceDelegate.qi(r)),this.M=new sR(n),this._s=new ER(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ui[e.toKey()];return r||(r=new _R(n,this.referenceDelegate),this.Ui[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new xR(this.es.next());return this.referenceDelegate.Ki(),r(i).next(s=>this.referenceDelegate.Gi(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Qi(e,n){return A.or(Object.values(this.Ui).map(r=>()=>r.containsKey(e,n)))}}class xR extends nR{constructor(e){super(),this.currentSequenceNumber=e}}class sp{constructor(e){this.persistence=e,this.ji=new ip,this.Wi=null}static zi(e){return new sp(e)}get Hi(){if(this.Wi)return this.Wi;throw B()}addReference(e,n,r){return this.ji.addReference(r,n),this.Hi.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.ji.removeReference(r,n),this.Hi.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),A.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(i=>this.Hi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hi,r=>{const i=j.fromPath(r);return this.Ji(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(r=>{r?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return A.or([()=>A.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class ey{constructor(){this.activeTargetIds=Q1()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AR{constructor(){this.$r=new ey,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,r){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new ey,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NR{Lr(e){}shutdown(){}}/**
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
 */class ty{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const RR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class PR{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
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
 */class DR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,r,i,s){const o=this.uo(e,n);L("RestConnection","Sending: ",o,r);const a={};return this.ao(a,i,s),this.co(e,o,a,r).then(l=>(L("RestConnection","Received: ",l),l),l=>{throw Lg("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ho(e,n,r,i,s){return this.oo(e,n,r,i,s)}ao(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+is,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}uo(e,n){const r=RR[e];return`${this.io}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new qA;a.listenOnce(VA.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Dc.NO_ERROR:const u=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Dc.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new O(T.DEADLINE_EXCEEDED,"Request time out"));break;case Dc.HTTP_ERROR:const h=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const f=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(v)>=0?v:T.UNKNOWN}(d.status);o(new O(f,d.message))}else o(new O(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new O(T.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}lo(e,n,r){const i=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=FA(),o=BA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new HA({})),this.ao(a.initMessageHeaders,n,r),K0()||Y0()||MT()||Q0()||jT()||G0()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");L("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let h=!1,d=!1;const f=new PR({Wr:v=>{d?L("Connection","Not sending because WebChannel is closed:",v):(h||(L("Connection","Opening WebChannel transport."),u.open(),h=!0),L("Connection","WebChannel sending:",v),u.send(v))},zr:()=>u.close()}),y=(v,w,I)=>{v.listen(w,g=>{try{I(g)}catch(p){setTimeout(()=>{throw p},0)}})};return y(u,xa.EventType.OPEN,()=>{d||L("Connection","WebChannel transport opened.")}),y(u,xa.EventType.CLOSE,()=>{d||(d=!0,L("Connection","WebChannel transport closed"),f.no())}),y(u,xa.EventType.ERROR,v=>{d||(d=!0,Lg("Connection","WebChannel transport errored:",v),f.no(new O(T.UNAVAILABLE,"The operation could not be completed")))}),y(u,xa.EventType.MESSAGE,v=>{var w;if(!d){const I=v.data[0];ie(!!I);const g=I,p=g.error||((w=g[0])===null||w===void 0?void 0:w.error);if(p){L("Connection","WebChannel received error:",p);const m=p.status;let S=function(_){const k=ke[_];if(k!==void 0)return Y1(k)}(m),C=p.message;S===void 0&&(S=T.INTERNAL,C="Unknown error status: "+m+" with message "+p.message),d=!0,f.no(new O(S,C)),u.close()}else L("Connection","WebChannel received:",I),f.so(I)}}),y(o,zA.STAT_EVENT,v=>{v.stat===Pg.PROXY?L("Connection","Detected buffering proxy"):v.stat===Pg.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.eo()},0),f}}function Mc(){return typeof document<"u"?document:null}/**
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
 */function Lu(t){return new FN(t,!0)}class oE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Yn=e,this.timerId=n,this.fo=r,this._o=i,this.wo=s,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),r=Math.max(0,Date.now()-this.po),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
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
 */class aE{constructor(e,n,r,i,s,o,a,l){this.Yn=e,this.Ro=r,this.Po=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new oE(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.qo(r,i)},r=>{e(()=>{const i=new O(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ko(i)})})}qo(e,n){const r=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{r(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(i=>{r(()=>this.Ko(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OR extends aE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.M=s}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=zN(this.M,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?vn(s.readTime):W.min()}(e);return this.listener.Qo(n,r)}jo(e){const n={};n.database=sd(this.M),n.addTarget=function(i,s){let o;const a=s.target;return o=Zh(a)?{documents:WN(i,a)}:{query:KN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Z1(i,s.resumeToken):s.snapshotVersion.compareTo(W.min())>0&&(o.readTime=ql(i,s.snapshotVersion.toTimestamp())),o}(this.M,e);const r=YN(this.M,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=sd(this.M),n.removeTarget=e,this.Fo(n)}}class LR extends aE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.M=s,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=qN(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.Yo(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=sd(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>HN(this.M,r))};this.Fo(n)}}/**
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
 */class MR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=i,this.tu=!1}eu(){if(this.tu)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.oo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(T.UNKNOWN,i.toString())})}ho(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ho(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(T.UNKNOWN,i.toString())})}terminate(){this.tu=!0}}class jR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(or(n),this.iu=!1):L("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
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
 */class bR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=s,this._u.Lr(o=>{r.enqueueAndForget(async()=>{Zr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l.fu.add(4),await Xo(l),l.wu.set("Unknown"),l.fu.delete(4),await Mu(l)}(this))})}),this.wu=new jR(r,i)}}async function Mu(t){if(Zr(t))for(const e of t.du)await e(!0)}async function Xo(t){for(const e of t.du)await e(!1)}function lE(t,e){const n=z(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),lp(n)?ap(n):ls(n).xo()&&op(n,e))}function uE(t,e){const n=z(t),r=ls(n);n.lu.delete(e),r.xo()&&cE(n,e),n.lu.size===0&&(r.xo()?r.Mo():Zr(n)&&n.wu.set("Unknown"))}function op(t,e){t.mu.Z(e.targetId),ls(t).jo(e)}function cE(t,e){t.mu.Z(e),ls(t).Wo(e)}function ap(t){t.mu=new bN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),ls(t).start(),t.wu.ru()}function lp(t){return Zr(t)&&!ls(t).Co()&&t.lu.size>0}function Zr(t){return z(t).fu.size===0}function hE(t){t.mu=void 0}async function UR(t){t.lu.forEach((e,n)=>{op(t,e)})}async function $R(t,e){hE(t),lp(t)?(t.wu.au(e),ap(t)):t.wu.set("Unknown")}async function FR(t,e,n){if(t.wu.set("Online"),e instanceof J1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.lu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.lu.delete(o),r.mu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wl(t,r)}else if(e instanceof Xa?t.mu.ut(e):e instanceof X1?t.mu._t(e):t.mu.ht(e),!n.isEqual(W.min()))try{const r=await sE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.mu.yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.lu.get(l);u&&i.lu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.lu.get(a);if(!l)return;i.lu.set(a,l.withResumeToken(Ge.EMPTY_BYTE_STRING,l.snapshotVersion)),cE(i,a);const u=new Rr(l.target,a,1,l.sequenceNumber);op(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Wl(t,r)}}async function Wl(t,e,n){if(!Yo(e))throw e;t.fu.add(1),await Xo(t),t.wu.set("Offline"),n||(n=()=>sE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Mu(t)})}function dE(t,e){return e().catch(n=>Wl(t,n,e))}async function ju(t){const e=z(t),n=lr(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;BR(e);)try{const i=await yR(e.localStore,r);if(i===null){e.hu.length===0&&n.Mo();break}r=i.batchId,VR(e,i)}catch(i){await Wl(e,i)}fE(e)&&pE(e)}function BR(t){return Zr(t)&&t.hu.length<10}function VR(t,e){t.hu.push(e);const n=lr(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function fE(t){return Zr(t)&&!lr(t).Co()&&t.hu.length>0}function pE(t){lr(t).start()}async function zR(t){lr(t).Zo()}async function HR(t){const e=lr(t);for(const n of t.hu)e.Jo(n.mutations)}async function qR(t,e,n){const r=t.hu.shift(),i=np.from(r,e,n);await dE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ju(t)}async function WR(t,e){e&&lr(t).Ho&&await async function(n,r){if(i=r.code,PN(i)&&i!==T.ABORTED){const s=n.hu.shift();lr(n).ko(),await dE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ju(n)}var i}(t,e),fE(t)&&pE(t)}async function ny(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.fu.add(3),await Xo(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Mu(n)}async function KR(t,e){const n=z(t);e?(n.fu.delete(2),await Mu(n)):e||(n.fu.add(2),await Xo(n),n.wu.set("Unknown"))}function ls(t){return t.gu||(t.gu=function(e,n,r){const i=z(e);return i.eu(),new OR(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Hr:UR.bind(null,t),Yr:$R.bind(null,t),Qo:FR.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),lp(t)?ap(t):t.wu.set("Unknown")):(await t.gu.stop(),hE(t))})),t.gu}function lr(t){return t.yu||(t.yu=function(e,n,r){const i=z(e);return i.eu(),new LR(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Hr:zR.bind(null,t),Yr:WR.bind(null,t),Xo:HR.bind(null,t),Yo:qR.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await ju(t)):(await t.yu.stop(),t.hu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
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
 */class up{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new up(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cp(t,e){if(or("AsyncQueue",`${e}: ${t}`),Yo(t))return new O(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ci{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=nd(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ry{constructor(){this.pu=new Fe(j.comparator)}track(e){const n=e.doc.key,r=this.pu.get(n);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(n,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(n):e.type===1&&r.type===2?this.pu=this.pu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):B():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Vi{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Vi(e,n,Ci.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class GR{constructor(){this.Tu=void 0,this.listeners=[]}}class YR{constructor(){this.queries=new as(e=>$1(e),Nu),this.onlineState="Unknown",this.Eu=new Set}}async function QR(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new GR),i)try{s.Tu=await n.onListen(r)}catch(o){const a=cp(o,`Initialization of query '${ed(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Au(n.onlineState),s.Tu&&e.Ru(s.Tu)&&hp(n)}async function XR(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function JR(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Ru(i)&&(r=!0);o.Tu=i}}r&&hp(n)}function ZR(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function hp(t){t.Eu.forEach(e=>{e.next()})}class eP{constructor(e,n,r){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}Ru(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Vi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Cu||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=Vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
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
 */class mE{constructor(e){this.key=e}}class gE{constructor(e){this.key=e}}class tP{constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=ue(),this.mutatedKeys=ue(),this.Uu=F1(e),this.qu=new Ci(this.Uu)}get Ku(){return this.$u}Gu(e,n){const r=n?n.Qu:new ry,i=n?n.qu:this.qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=Ya(this.query)&&i.size===this.query.limit?i.last():null,u=Vl(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const f=i.get(h),y=ep(this.query,d)?d:null,v=!!f&&this.mutatedKeys.has(f.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let I=!1;f&&y?f.data.isEqual(y.data)?v!==w&&(r.track({type:3,doc:y}),I=!0):this.ju(f,y)||(r.track({type:2,doc:y}),I=!0,(l&&this.Uu(y,l)>0||u&&this.Uu(y,u)<0)&&(a=!0)):!f&&y?(r.track({type:0,doc:y}),I=!0):f&&!y&&(r.track({type:1,doc:f}),I=!0,(l||u)&&(a=!0)),I&&(y?(o=o.add(y),s=w?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),Ya(this.query)||Vl(this.query))for(;o.size>this.query.limit;){const h=Ya(this.query)?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{qu:o,Qu:r,ni:a,mutatedKeys:s}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const s=e.Qu.Iu();s.sort((u,h)=>function(d,f){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return y(d)-y(f)}(u.type,h.type)||this.Uu(u.doc,h.doc)),this.Wu(r);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,l=a!==this.Bu;return this.Bu=a,s.length!==0||l?{snapshot:new Vi(this.query,e.qu,i,s,e.mutatedKeys,a===0,l,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new ry,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=ue(),this.qu.forEach(r=>{this.Ju(r.key)&&(this.Lu=this.Lu.add(r.key))});const n=[];return e.forEach(r=>{this.Lu.has(r)||n.push(new gE(r))}),this.Lu.forEach(r=>{e.has(r)||n.push(new mE(r))}),n}Yu(e){this.$u=e.li,this.Lu=ue();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return Vi.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class nP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rP{constructor(e){this.key=e,this.Zu=!1}}class iP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new as(a=>$1(a),Nu),this.na=new Map,this.sa=new Set,this.ia=new Fe(j.comparator),this.ra=new Map,this.oa=new ip,this.ua={},this.aa=new Map,this.ca=Bi.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function sP(t,e){const n=mP(t);let r,i;const s=n.ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Xu();else{const o=await vR(n.localStore,Wr(e));n.isPrimaryClient&&lE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await oP(n,e,r,a==="current")}return i}async function oP(t,e,n,r){t.la=(h,d,f)=>async function(y,v,w,I){let g=v.view.Gu(w);g.ni&&(g=await Zg(y.localStore,v.query,!1).then(({documents:S})=>v.view.Gu(S,g)));const p=I&&I.targetChanges.get(v.targetId),m=v.view.applyChanges(g,y.isPrimaryClient,p);return sy(y,v.targetId,m.Hu),m.snapshot}(t,h,d,f);const i=await Zg(t.localStore,e,!0),s=new tP(e,i.li),o=s.Gu(i.documents),a=Go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);sy(t,n,l.Hu);const u=new nP(e,n,s);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),l.snapshot}async function aP(t,e){const n=z(t),r=n.ea.get(e),i=n.na.get(r.targetId);if(i.length>1)return n.na.set(r.targetId,i.filter(s=>!Nu(s,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await od(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),uE(n.remoteStore,r.targetId),ad(n,r.targetId)}).catch(Qo)):(ad(n,r.targetId),await od(n.localStore,r.targetId,!0))}async function lP(t,e,n){const r=gP(t);try{const i=await function(s,o){const a=z(s),l=tt.now(),u=o.reduce((d,f)=>d.add(f.key),ue());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>a.ci.Ks(d,u).next(f=>{h=f;const y=[];for(const v of o){const w=AN(v,h.get(v.key));w!=null&&y.push(new os(v.key,w,L1(w.value.mapValue),er.exists(!0)))}return a.Bs.addMutationBatch(d,l,y,o)})).then(d=>(d.applyToLocalDocumentSet(h),{batchId:d.batchId,changes:h}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ua[s.currentUser.toKey()];l||(l=new Fe(ee)),l=l.insert(o,a),s.ua[s.currentUser.toKey()]=l}(r,i.batchId,n),await Jo(r,i.changes),await ju(r.remoteStore)}catch(i){const s=cp(i,"Failed to persist write");n.reject(s)}}async function yE(t,e){const n=z(t);try{const r=await mR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ra.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Zu=!0:i.modifiedDocuments.size>0?ie(o.Zu):i.removedDocuments.size>0&&(ie(o.Zu),o.Zu=!1))}),await Jo(n,r,e)}catch(r){await Qo(r)}}function iy(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ea.forEach((s,o)=>{const a=o.view.Au(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,h)=>{for(const d of h.listeners)d.Au(o)&&(l=!0)}),l&&hp(a)}(r.eventManager,e),i.length&&r.ta.Qo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uP(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ra.get(e),s=i&&i.key;if(s){let o=new Fe(j.comparator);o=o.insert(s,Ze.newNoDocument(s,W.min()));const a=ue().add(s),l=new Ou(W.min(),new Map,new We(ee),o,a);await yE(r,l),r.ia=r.ia.remove(s),r.ra.delete(e),dp(r)}else await od(r.localStore,e,!1).then(()=>ad(r,e,n)).catch(Qo)}async function cP(t,e){const n=z(t),r=e.batch.batchId;try{const i=await pR(n.localStore,e);wE(n,r,null),vE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jo(n,i)}catch(i){await Qo(i)}}async function hP(t,e,n){const r=z(t);try{const i=await function(s,o){const a=z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.Bs.lookupMutationBatch(l,o).next(h=>(ie(h!==null),u=h.keys(),a.Bs.removeMutationBatch(l,h))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.ci.Ks(l,u))})}(r.localStore,e);wE(r,e,n),vE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Jo(r,i)}catch(i){await Qo(i)}}function vE(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function wE(t,e,n){const r=z(t);let i=r.ua[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ua[r.currentUser.toKey()]=i}}function ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.na.get(e))t.ea.delete(r),n&&t.ta.fa(r,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(r=>{t.oa.containsKey(r)||EE(t,r)})}function EE(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(uE(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),dp(t))}function sy(t,e,n){for(const r of n)r instanceof mE?(t.oa.addReference(r.key,e),dP(t,r)):r instanceof gE?(L("SyncEngine","Document no longer in limbo: "+r.key),t.oa.removeReference(r.key,e),t.oa.containsKey(r.key)||EE(t,r.key)):B()}function dP(t,e){const n=e.key,r=n.path.canonicalString();t.ia.get(n)||t.sa.has(r)||(L("SyncEngine","New document in limbo: "+n),t.sa.add(r),dp(t))}function dp(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new j(ae.fromString(e)),r=t.ca.next();t.ra.set(r,new rP(n)),t.ia=t.ia.insert(n,r),lE(t.remoteStore,new Rr(Wr(Zf(n.path)),r,2,Yf.A))}}async function Jo(t,e,n){const r=z(t),i=[],s=[],o=[];r.ea.isEmpty()||(r.ea.forEach((a,l)=>{o.push(r.la(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const h=rp.Ys(l.targetId,u);s.push(h)}}))}),await Promise.all(o),r.ta.Qo(i),await async function(a,l){const u=z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(l,d=>A.forEach(d.Hs,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>A.forEach(d.Js,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Yo(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ii.get(d),y=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(y);u.ii=u.ii.insert(d,v)}}}(r.localStore,s))}async function fP(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await iE(n.localStore,e);n.currentUser=e,function(i,s){i.aa.forEach(o=>{o.forEach(a=>{a.reject(new O(T.CANCELLED,s))})}),i.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jo(n,r.hi)}}function pP(t,e){const n=z(t),r=n.ra.get(e);if(r&&r.Zu)return ue().add(r.key);{let i=ue();const s=n.na.get(e);if(!s)return i;for(const o of s){const a=n.ea.get(o);i=i.unionWith(a.view.Ku)}return i}}function mP(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uP.bind(null,e),e.ta.Qo=JR.bind(null,e.eventManager),e.ta.fa=ZR.bind(null,e.eventManager),e}function gP(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hP.bind(null,e),e}class yP{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Lu(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return fR(this.persistence,new hR,e.initialUser,this.M)}wa(e){return new CR(sp.zi,this.M)}_a(e){return new AR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>iy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fP.bind(null,this.syncEngine),await KR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new YR}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new DR(i));var i;return function(s,o,a,l){return new MR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>iy(this.syncEngine,a,0),o=ty.vt()?new ty:new NR,new bR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const h=new iP(r,i,s,o,a,l);return u&&(h.ha=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);L("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Xo(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
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
 */class wP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class EP{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=R1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function SP(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function _P(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IP(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>ny(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>ny(e.remoteStore,s)),t.onlineComponents=e}async function IP(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await SP(t,new yP)),t.offlineComponents}async function SE(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await _P(t,new vP)),t.onlineComponents}function TP(t){return SE(t).then(e=>e.syncEngine)}async function oy(t){const e=await SE(t),n=e.eventManager;return n.onListen=sP.bind(null,e.syncEngine),n.onUnlisten=aP.bind(null,e.syncEngine),n}const ay=new Map;/**
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
 */function _E(t,e,n){if(!n)throw new O(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kP(t,e,n,r){if(e===!0&&r===!0)throw new O(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ly(t){if(!j.isDocumentKey(t))throw new O(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uy(t){if(j.isDocumentKey(t))throw new O(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function Pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bu(t);throw new O(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class cy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,kP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class fp{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cy({}),this._settingsFrozen=!1,e instanceof Ui?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new O(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ui(i.options.projectId)}(e))}get app(){if(!this._app)throw new O(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new KA;switch(n.type){case"gapi":const r=n.client;return ie(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new QA(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new O(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ay.get(e);n&&(L("ComponentProvider","Removing Datastore"),ay.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Zo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zo(this.firestore,e,this._query)}}class tr extends Zo{constructor(e,n,r){super(e,n,Zf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new j(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function ne(t,e,...n){if(t=we(t),_E("collection","path",e),t instanceof fp){const r=ae.fromString(e,...n);return uy(r),new tr(t,null,r)}{if(!(t instanceof Et||t instanceof tr))throw new O(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return uy(r),new tr(t.firestore,null,r)}}function Me(t,e,...n){if(t=we(t),arguments.length===1&&(e=R1.R()),_E("doc","path",e),t instanceof fp){const r=ae.fromString(e,...n);return ly(r),new Et(t,null,new j(r))}{if(!(t instanceof Et||t instanceof tr))throw new O(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return ly(r),new Et(t.firestore,t instanceof tr?t.converter:null,new j(r))}}/**
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
 */class CP{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new oE(this,"async_queue_retry"),this.qa=()=>{const n=Mc();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=Mc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new Nr;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!Yo(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(r=>{this.$a=r,this.Ba=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw or("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ba=!1,r))));return this.ka=n,n}enqueueAfterDelay(e,n,r){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const i=up.createAndSchedule(this,e,n,r,s=>this.ja(s));return this.Fa.push(i),i}Ka(){this.$a&&B()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}function hy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class zi extends fp{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new CP,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||TE(this),this._firestoreClient.terminate()}}function xP(t=pf()){return hu(t,"firestore").getImmediate()}function IE(t){return t._firestoreClient||TE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new nN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new EP(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Uu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(Ge.fromBase64String(e))}catch(n){throw new O(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hi(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class mp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */const AP=/^__.*__$/;class NP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new Du(e,this.data,n,this.fieldTransforms)}}class kE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new os(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function CE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class gp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ya(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new gp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.nc(e),i}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.Ya(),i}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return Kl(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(CE(this.Xa)&&AP.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class RP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||Lu(e)}ac(e,n,r,i=!1){return new gp({Xa:e,methodName:n,uc:r,path:mt.emptyPath(),ec:!1,oc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function yp(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new RP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PP(t,e,n,r,i,s={}){const o=t.ac(s.merge||s.mergeFields?2:0,e,n,i);vp("Data must be an object, but it was:",o,r);const a=xE(r,o);let l,u;if(s.merge)l=new wo(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const f=ld(e,d,n);if(!o.contains(f))throw new O(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);NE(h,f)||h.push(f)}l=new wo(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new NP(new _t(a),l,u)}class $u extends pp{_toFieldTransform(e){if(e.Xa!==2)throw e.Xa===1?e.rc(`${this._methodName}() can only appear at the top level of your update data`):e.rc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $u}}function DP(t,e,n,r){const i=t.ac(1,e,n);vp("Data must be an object, but it was:",i,r);const s=[],o=_t.empty();Jr(r,(l,u)=>{const h=wp(e,l,n);u=we(u);const d=i.sc(h);if(u instanceof $u)s.push(h);else{const f=ea(u,d);f!=null&&(s.push(h),o.set(h,f))}});const a=new wo(s);return new kE(o,a,i.fieldTransforms)}function OP(t,e,n,r,i,s){const o=t.ac(1,e,n),a=[ld(e,r,n)],l=[i];if(s.length%2!=0)throw new O(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(ld(e,s[f])),l.push(s[f+1]);const u=[],h=_t.empty();for(let f=a.length-1;f>=0;--f)if(!NE(u,a[f])){const y=a[f];let v=l[f];v=we(v);const w=o.sc(y);if(v instanceof $u)u.push(y);else{const I=ea(v,w);I!=null&&(u.push(y),h.set(y,I))}}const d=new wo(u);return new kE(h,d,o.fieldTransforms)}function LP(t,e,n,r=!1){return ea(n,t.ac(r?4:3,e))}function ea(t,e){if(AE(t=we(t)))return vp("Unsupported field value:",e,t),xE(t,e);if(t instanceof pp)return function(n,r){if(!CE(r.Xa))throw r.rc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.rc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ea(o,r.ic(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=we(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _N(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=tt.fromDate(n);return{timestampValue:ql(r.M,i)}}if(n instanceof tt){const i=new tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ql(r.M,i)}}if(n instanceof mp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hi)return{bytesValue:Z1(r.M,n._byteString)};if(n instanceof Et){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.rc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.rc(`Unsupported field value: ${bu(n)}`)}(t,e)}function xE(t,e){const n={};return P1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jr(t,(r,i)=>{const s=ea(i,e.tc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof mp||t instanceof Hi||t instanceof Et||t instanceof pp)}function vp(t,e,n){if(!AE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=bu(n);throw r==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function ld(t,e,n){if((e=we(e))instanceof Uu)return e._internalPath;if(typeof e=="string")return wp(t,e);throw Kl("Field path arguments must be of type string or ",t,!1,void 0,n)}const MP=new RegExp("[~\\*/\\[\\]]");function wp(t,e,n){if(e.search(MP)>=0)throw Kl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uu(...e.split("."))._internalPath}catch{throw Kl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(T.INVALID_ARGUMENT,a+t+l)}function NE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class RE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ep("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jP extends RE{data(){return super.data()}}function Ep(t,e){return typeof e=="string"?wp(t,e):e instanceof Uu?e._internalPath:e._delegate._internalPath}/**
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
 */class As{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PE extends RE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ep("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ja extends PE{data(e={}){return super.data(e)}}class bP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new As(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new As(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ja(r._firestore,r._userDataWriter,o.doc.key,o.doc,new As(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ja(r._firestore,r._userDataWriter,o.doc.key,o.doc,new As(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:UP(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function UP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}/**
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
 */function $P(t){if(Vl(t)&&t.explicitOrderBy.length===0)throw new O(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FP{}function je(t,...e){for(const n of e)t=n._apply(t);return t}class BP extends FP{constructor(e,n,r){super(),this.lc=e,this.fc=n,this.dc=r,this.type="where"}_apply(e){const n=yp(e.firestore),r=function(i,s,o,a,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new O(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){fy(h,u);const y=[];for(const v of h)y.push(dy(a,i,v));d={arrayValue:{values:y}}}else d=dy(a,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||fy(h,u),d=LP(o,s,h,u==="in"||u==="not-in");const f=ut.create(l,u,d);return function(y,v){if(v.S()){const I=b1(y);if(I!==null&&!I.isEqual(v.field))throw new O(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${I.toString()}' and '${v.field.toString()}'`);const g=j1(y);g!==null&&VP(y,v.field,g)}const w=function(I,g){for(const p of I.filters)if(g.indexOf(p.op)>=0)return p.op;return null}(y,function(I){switch(I){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(w!==null)throw w===v.op?new O(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new O(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${w.toString()}' filters.`)}(i,f),f}(e._query,"where",n,e.firestore._databaseId,this.lc,this.fc,this.dc);return new Zo(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Ko(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function Se(t,e,n){const r=e,i=Ep("where",t);return new BP(i,r,n)}function dy(t,e,n){if(typeof(n=we(n))=="string"){if(n==="")throw new O(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!U1(e)&&n.indexOf("/")!==-1)throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ae.fromString(n));if(!j.isDocumentKey(r))throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bg(t,new j(r))}if(n instanceof Et)return bg(t,n._key);throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bu(n)}.`)}function fy(t,e){if(!Array.isArray(t)||t.length===0)throw new O(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new O(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function VP(t,e,n){if(!n.isEqual(e))throw new O(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class zP{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){const r={};return Jr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new mp(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=O1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Eo(e));default:return null}}convertTimestamp(e){const n=ar(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);ie(rE(r));const i=new Ui(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||or(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function HP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class DE extends zP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function ln(t,e,n,...r){t=Pr(t,Et);const i=Pr(t.firestore,zi),s=yp(i);let o;return o=typeof(e=we(e))=="string"||e instanceof Uu?OP(s,"updateDoc",t._key,e,n,r):DP(s,"updateDoc",t._key,e),Sp(i,[o.toMutation(t._key,er.exists(!0))])}function py(t){return Sp(Pr(t.firestore,zi),[new G1(t._key,er.none())])}function Na(t,e){const n=Pr(t.firestore,zi),r=Me(t),i=HP(t.converter,e);return Sp(n,[PP(yp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,er.exists(!1))]).then(()=>r)}function Pe(t,...e){var n,r,i;t=we(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||hy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(hy(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,h;if(t instanceof Et)u=Pr(t.firestore,zi),h=Zf(t._key.path),l={next:d=>{e[o]&&e[o](qP(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Pr(t,Zo);u=Pr(d.firestore,zi),h=d._query;const f=new DE(u);l={next:y=>{e[o]&&e[o](new bP(u,f,d,y))},error:e[o+1],complete:e[o+2]},$P(t._query)}return function(d,f,y,v){const w=new wP(v),I=new eP(f,w,y);return d.asyncQueue.enqueueAndForget(async()=>QR(await oy(d),I)),()=>{w.Ia(),d.asyncQueue.enqueueAndForget(async()=>XR(await oy(d),I))}}(IE(u),h,a,l)}function Sp(t,e){return function(n,r){const i=new Nr;return n.asyncQueue.enqueueAndForget(async()=>lP(await TP(n),r,i)),i.promise}(IE(t),e)}function qP(t,e,n){const r=n.docs.get(e._key),i=new DE(t);return new PE(t,i,e._key,r,new As(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){is=n})(Ji),Ur(new sr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new zi(i,new GA(n.getProvider("auth-internal")),new JA(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),tn(Dg,"3.4.8",t),tn(Dg,"3.4.8","esm2017")})();/**
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
 */const OE="firebasestorage.googleapis.com",LE="storageBucket",WP=2*60*1e3,KP=10*60*1e3;/**
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
 */class Ie extends fr{constructor(e,n){super(jc(e),`Firebase Storage: ${n} (${jc(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ie.prototype)}_codeEquals(e){return jc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function jc(t){return"storage/"+t}function _p(){const t="An unknown error occurred, please check the error payload for server response.";return new Ie("unknown",t)}function GP(t){return new Ie("object-not-found","Object '"+t+"' does not exist.")}function YP(t){return new Ie("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ie("unauthenticated",t)}function XP(){return new Ie("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function JP(t){return new Ie("unauthorized","User does not have permission to access '"+t+"'.")}function ZP(){return new Ie("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function eD(){return new Ie("canceled","User canceled the upload/download.")}function tD(t){return new Ie("invalid-url","Invalid URL '"+t+"'.")}function nD(t){return new Ie("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function rD(){return new Ie("no-default-bucket","No default bucket found. Did you set the '"+LE+"' property when initializing the app?")}function iD(){return new Ie("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function sD(){return new Ie("no-download-url","The given file does not have any download URLs.")}function ud(t){return new Ie("invalid-argument",t)}function ME(){return new Ie("app-deleted","The Firebase app was deleted.")}function oD(t){return new Ie("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zs(t,e){return new Ie("invalid-format","String does not match format '"+t+"': "+e)}function ws(t){throw new Ie("internal-error","Internal error: "+t)}/**
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
 */class Tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Tt.makeFromUrl(e,n)}catch{return new Tt(e,"")}if(r.path==="")return r;throw nD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",y=new RegExp(`^https?://${d}/${h}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},w=n===OE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",g=new RegExp(`^https?://${w}/${i}/${I}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:y,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<m.length;S++){const C=m[S],_=C.regex.exec(e);if(_){const k=_[C.indices.bucket];let N=_[C.indices.path];N||(N=""),r=new Tt(k,N),C.postModify(r);break}}if(r==null)throw tD(e);return r}}class aD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function lD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...I){u||(u=!0,e.apply(null,I))}function d(I){i=setTimeout(()=>{i=null,t(y,l())},I)}function f(){s&&clearTimeout(s)}function y(I,...g){if(u){f();return}if(I){f(),h.call(null,I,...g);return}if(l()||o){f(),h.call(null,I,...g);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,d(m)}let v=!1;function w(I){v||(v=!0,f(),!u&&(i!==null?(I||(a=2),clearTimeout(i),d(0)):I||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function uD(t){t(!1)}/**
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
 */function cD(t){return t!==void 0}function hD(t){return typeof t=="object"&&!Array.isArray(t)}function Ip(t){return typeof t=="string"||t instanceof String}function my(t){return Tp()&&t instanceof Blob}function Tp(){return typeof Blob<"u"}function gy(t,e,n,r){if(r<e)throw ud(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ud(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */class dD{constructor(e,n,r,i,s,o,a,l,u,h,d){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,y)=>{this.resolve_=f,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ra(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Dr.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const h=s.getErrorCode()===Dr.ABORT;r(!1,new Ra(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ra(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());cD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=_p();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ME():eD();o(l)}else{const l=ZP();o(l)}};this.canceled_?n(!1,new Ra(!1,null,!0)):this.backoffId_=lD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Ra{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function yD(t,e,n,r,i,s){const o=jE(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return mD(l,e),fD(l,n),pD(l,s),gD(l,r),new dD(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function vD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wD(...t){const e=vD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Tp())return new Blob(t);throw new Ie("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function ED(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function SD(t){return atob(t)}/**
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
 */const Jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bc{constructor(e,n){this.data=e,this.contentType=n||null}}function _D(t,e){switch(t){case Jt.RAW:return new bc(bE(e));case Jt.BASE64:case Jt.BASE64URL:return new bc(UE(t,e));case Jt.DATA_URL:return new bc(TD(e),kD(e))}throw _p()}function bE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ID(t){let e;try{e=decodeURIComponent(t)}catch{throw zs(Jt.DATA_URL,"Malformed data URL.")}return bE(e)}function UE(t,e){switch(t){case Jt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw zs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Jt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw zs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=SD(e)}catch{throw zs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class $E{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zs(Jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=CD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function TD(t){const e=new $E(t);return e.base64?UE(Jt.BASE64,e.rest):ID(e.rest)}function kD(t){return new $E(t).contentType}function CD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Bn{constructor(e,n){let r=0,i="";my(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(my(this.data_)){const r=this.data_,i=ED(r,e,n);return i===null?null:new Bn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Bn(r,!0)}}static getBlob(...e){if(Tp()){const n=e.map(r=>r instanceof Bn?r.data_:r);return new Bn(wD.apply(null,n))}else{const n=e.map(o=>Ip(o)?_D(Jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Bn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function FE(t){let e;try{e=JSON.parse(t)}catch{return null}return hD(e)?e:null}/**
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
 */function xD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function AD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function BE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function ND(t,e){return e}class it{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||ND}}let Pa=null;function RD(t){return!Ip(t)||t.length<2?t:BE(t)}function VE(){if(Pa)return Pa;const t=[];t.push(new it("bucket")),t.push(new it("generation")),t.push(new it("metageneration")),t.push(new it("name","fullPath",!0));function e(s,o){return RD(o)}const n=new it("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new it("size");return i.xform=r,t.push(i),t.push(new it("timeCreated")),t.push(new it("updated")),t.push(new it("md5Hash",null,!0)),t.push(new it("cacheControl",null,!0)),t.push(new it("contentDisposition",null,!0)),t.push(new it("contentEncoding",null,!0)),t.push(new it("contentLanguage",null,!0)),t.push(new it("contentType",null,!0)),t.push(new it("metadata","customMetadata",!0)),Pa=t,Pa}function PD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Tt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function DD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return PD(r,t),r}function zE(t,e,n){const r=FE(e);return r===null?null:DD(t,r,n)}function OD(t,e,n,r){const i=FE(e);if(i===null||!Ip(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),y=kp(f,n,r),v=jE({alt:"media",token:u});return y+v})[0]}function LD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class HE{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function qE(t){if(!t)throw _p()}function MD(t,e){function n(r,i){const s=zE(t,i,e);return qE(s!==null),s}return n}function jD(t,e){function n(r,i){const s=zE(t,i,e);return qE(s!==null),OD(s,i,t.host,t._protocol)}return n}function WE(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=XP():i=QP():n.getStatus()===402?i=YP(t.bucket):n.getStatus()===403?i=JP(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function bD(t){const e=WE(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=GP(t.path)),s.serverResponse=i.serverResponse,s}return n}function UD(t,e,n){const r=e.fullServerUrl(),i=kp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new HE(i,s,jD(t,n),o);return a.errorHandler=bD(e),a}function $D(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function FD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=$D(null,e)),r}function BD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let S=0;S<2;S++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=FD(e,r,i),h=LD(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",y=Bn.getBlob(d,r,f);if(y===null)throw iD();const v={name:u.fullPath},w=kp(s,t.host,t._protocol),I="POST",g=t.maxUploadRetryTime,p=new HE(w,I,MD(t,n),g);return p.urlParams=v,p.headers=o,p.body=y.uploadData(),p.errorHandler=WE(e),p}class VD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Dr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Dr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Dr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ws("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ws("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ws("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ws("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ws("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zD extends VD{initXhr(){this.xhr_.responseType="text"}}function KE(){return new zD}/**
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
 */class Gr{constructor(e,n){this._service=e,n instanceof Tt?this._location=n:this._location=Tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Gr(e,n)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BE(this._location.path)}get storage(){return this._service}get parent(){const e=xD(this._location.path);if(e===null)return null;const n=new Tt(this._location.bucket,e);return new Gr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw oD(e)}}function HD(t,e,n){t._throwIfRoot("uploadBytes");const r=BD(t.storage,t._location,VE(),new Bn(e,!0),n);return t.storage.makeRequestWithTokens(r,KE).then(i=>({metadata:i,ref:t}))}function qD(t){t._throwIfRoot("getDownloadURL");const e=UD(t.storage,t._location,VE());return t.storage.makeRequestWithTokens(e,KE).then(n=>{if(n===null)throw sD();return n})}function WD(t,e){const n=AD(t._location.path,e),r=new Tt(t._location.bucket,n);return new Gr(t.storage,r)}/**
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
 */function KD(t){return/^[A-Za-z]+:\/\//.test(t)}function GD(t,e){return new Gr(t,e)}function GE(t,e){if(t instanceof Cp){const n=t;if(n._bucket==null)throw rD();const r=new Gr(n,n._bucket);return e!=null?GE(r,e):r}else return e!==void 0?WD(t,e):t}function YD(t,e){if(e&&KD(e)){if(t instanceof Cp)return GD(t,e);throw ud("To use ref(service, url), the first argument must be a Storage instance.")}else return GE(t,e)}function yy(t,e){const n=e==null?void 0:e[LE];return n==null?null:Tt.makeFromBucketSpec(n,t)}class Cp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=OE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=WP,this._maxUploadRetryTime=KP,this._requests=new Set,i!=null?this._bucket=Tt.makeFromBucketSpec(i,this._host):this._bucket=yy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=yy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Gr(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new aD(ME());{const s=yD(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const vy="@firebase/storage",wy="0.9.5";/**
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
 */const YE="storage";function QD(t,e,n){return t=we(t),HD(t,e,n)}function XD(t){return t=we(t),qD(t)}function JD(t,e){return t=we(t),YD(t,e)}function ZD(t=pf(),e){return t=we(t),hu(t,YE).getImmediate({identifier:e})}function eO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Cp(n,r,i,e,Ji)}function tO(){Ur(new sr(YE,eO,"PUBLIC").setMultipleInstances(!0)),tn(vy,wy,""),tn(vy,wy,"esm2017")}tO();const nO={apiKey:"AIzaSyAdYeQZYe6wHGUOU0SOwv1sbppnSoViJ2M",authDomain:"etudyonet-clone-3.firebaseapp.com",projectId:"etudyonet-clone-3",storageBucket:"etudyonet-clone-3.appspot.com",messagingSenderId:"555691155641",appId:"1:555691155641:web:13e1ad4042d03e16dd7b68"},xp=Dk(nO),F=xP(xp),Q=$x(xp),rO=ZD(xp),QE=E.createContext(),iO=({children:t})=>{var C;const[e,n]=E.useState({}),r=dr(),i=ne(F,"users"),s=ne(F,"offers"),o=ne(F,"requests"),a=je(ne(F,"offers"),Se("authorId","==",`${(C=Q.currentUser)==null?void 0:C.uid}`)),l=(_,k)=>kC(Q,_,k),u=()=>(r("/"),NC(Q)),h=(_,k)=>CC(Q,_,k),d=_=>lg(Q.currentUser,{displayName:_}),f=(_,k,N,H,b,J,Te)=>Na(i,{id:Q.currentUser.uid,name:_,email:k,bio:N,messanger:H,instagram:b,phoneNumber:J,deals:0,stars:0,photoURL:Te}),y=async(_,k,N,H,b)=>await Na(s,{authorId:Q.currentUser.uid,name:_,phoneNumber:k,content:N,price:H,photoURl:e==null?void 0:e.photoURL}),v=async(_,k,N,H,b,J)=>await Na(o,{senderId:_,senderName:k,resId:N,resName:H,content:b,price:J,state:"waiting",message:null}),w=(_,k,N)=>ln(_,{state:"refuse",message:k||`${N} has nothing to say`}),I=(_,k,N)=>{ln(_,{state:"accept"}),ln(Me(F,"users",`${k}`),{deals:N+1})},g=_=>py(Me(F,"offers",`${_}`)),p=_=>py(_),m=(_,k,N,H,b,J,Te,Ne,Rt,Pt,on,Ft,R,M)=>{Rt?(ln(Me(F,"users",`${M}`),{stars:R+Te}),Na(ne(F,"reviews"),{senderId:_,senderPhoto:k,senderName:N,resId:H,resName:b,content:J||null,rate:Te,deals:1})):(ln(Me(F,"users",`${M}`),{stars:R+Te}),ln(Me(F,"reviews",`${Ne}`),{content:J||Ft,rate:Te||on,deals:Pt+1}))};E.useEffect(()=>AC(Q,k=>{n(k)}),[]);const S=async(_,k,N,H)=>{var Te;const b=JD(rO,k.uid+".png");N(!0),await QD(b,_);const J=await XD(b);await lg(Q.currentUser,{photoURL:J}),await ln(H,{photoURL:J}),console.log("wait..."),Pe(a,Ne=>{Ne.docs.forEach(Rt=>{ln(Me(F,"offers",`${Rt.id}`),{photoURl:J})})}),window.location.reload(!1),Pe(je(ne(F,"reviews"),Se("senderId","==",`${(Te=Q.currentUser)==null?void 0:Te.uid}`)),Ne=>{Ne.docs.forEach(Rt=>{ln(Me(F,"reviews",`${Rt.id}`),{senderPhoto:J})})}),N(!1)};return c.jsx(QE.Provider,{value:{CreateUser:l,user:e,logout:u,signIn:h,setUserName:d,createUserData:f,upload:S,createOffer:y,deleteOffer:g,createRequest:v,refuseRequest:w,acceptRequest:I,deleteRequest:p,createReview:m},children:t})},xn=()=>E.useContext(QE);const qi="/assets/avatar-28c1f46a.png",sO="/assets/logo-6ee9d5f0.png";var XE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ey=gn.createContext&&gn.createContext(XE),nr=globalThis&&globalThis.__assign||function(){return nr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},nr.apply(this,arguments)},oO=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function JE(t){return t&&t.map(function(e,n){return gn.createElement(e.tag,nr({key:n},e.attr),JE(e.child))})}function us(t){return function(e){return gn.createElement(aO,nr({attr:nr({},t.attr)},e),JE(t.child))}}function aO(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=oO(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),gn.createElement("svg",nr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:nr(nr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&gn.createElement("title",null,s),t.children)};return Ey!==void 0?gn.createElement(Ey.Consumer,null,function(n){return e(n)}):e(XE)}function lO(t){return us({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 0 0-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z"}}]})(t)}function uO(t){return us({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"}}]})(t)}function cO(t){return us({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]})(t)}function hO(t){return us({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z",fill:"currentColor"}},{tag:"path",attr:{d:"M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z",fill:"currentColor"}}]})(t)}function dO(t){return us({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(t)}function Fu(t){const[e,n]=E.useState(""),{user:r,logout:i}=xn(),s=dr(),[o,a]=E.useState(0),[l,u]=E.useState(0);return je(ne(F,"requests"),Se("state","!=","waiting")),je(ne(F,"requests"),Se("senderId","==",`${r==null?void 0:r.uid}`)),je(ne(F,"requests"),Se("state","==","waiting")),je(ne(F,"requests"),Se("resId","==",`${r.uid}`)),E.useEffect(()=>{n(r.photoURL),Pe(ne(F,"requests"),h=>{var d;a(0),(d=h.docs)==null||d.forEach(f=>{f.data().state!="waiting"&&f.data().senderId==(r==null?void 0:r.uid)&&a(y=>y+1)})}),Pe(ne(F,"requests"),h=>{var d;u(0),(d=h.docs)==null||d.forEach(f=>{f.data().state=="waiting"&&f.data().resId==(r==null?void 0:r.uid)&&u(y=>y+1)})})},[r]),c.jsxs("header",{className:"navbar",children:[c.jsxs("div",{id:"logo",onClick:()=>{s("/"),scrollTo(0,0)},children:[c.jsx("img",{src:sO,alt:""}),c.jsxs("h2",{children:["Etudyo",c.jsx("span",{children:"net"})]})]}),c.jsxs("ul",{className:"middle-section",children:[c.jsx("li",{id:window.location.pathname=="/"?"home":"undefined",onClick:()=>{s("/"),scrollTo(0,0)},children:"home"}),c.jsx("li",{id:window.location.pathname=="/about"?"about":"undefined",children:"about"}),c.jsx("li",{id:window.location.pathname=="/contact"?"contact":"undefined",children:"contact"})]}),c.jsxs("ul",{className:"middle-section-icons",children:[c.jsx("li",{onClick:()=>{s("/"),scrollTo(0,0)},title:"home",children:c.jsx(uO,{size:"24px",color:window.location.pathname=="/"?"#FF8C00":"#333C41"})}),c.jsx("li",{onClick:()=>{s("/#"),scrollTo(0,0)},title:"about",children:c.jsx(lO,{size:"20px"})}),c.jsx("li",{onClick:()=>{s("/#"),scrollTo(0,0)},title:"contact",children:c.jsx(dO,{size:"24px"})})]}),c.jsxs("ul",{className:"user-section",children:[c.jsxs("li",{onClick:()=>{s("/notifications"),scrollTo(0,0)},title:"notifications",children:[l+o!==0&&c.jsx("div",{id:"hey",children:o+l}),c.jsx(cO,{size:"24px",color:window.location.pathname=="/notifications"?"#FF8C00":"#333C41"})]}),c.jsx("li",{onClick:()=>{s("/profile"),scrollTo(0,0)},title:"profile",children:e?c.jsx("img",{src:e}):c.jsx("img",{src:qi})}),c.jsx("li",{onClick:i,children:c.jsx(hO,{size:"24px"})})]})]})}const cd="/assets/banner-0691c4c8.jpg";function fO(){const[t,e]=E.useState(),{user:n}=xn(),r=ne(F,"offers"),[i,s]=E.useState(),o=dr();E.useEffect(()=>{Pe(r,u=>{e(u.docs)})},[n]);const a=()=>{Pe(r,u=>{e(u.docs.filter(h=>{var d,f;if((d=h.data().name)!=null&&d.toLowerCase().includes(i==null?void 0:i.toLowerCase())||(f=h.data().content)!=null&&f.toLowerCase().includes(i==null?void 0:i.toLowerCase()))return h}))})},l=()=>{Pe(r,u=>{e(u.docs)}),document.getElementById("searchbar").value="",s(void 0)};return c.jsxs("div",{children:[c.jsxs("div",{className:"top",children:[c.jsx("img",{src:cd,alt:"banner",className:"banner"}),c.jsxs("div",{className:"search-area",children:[c.jsx("input",{type:"text",onChange:u=>{s(u.target.value)},id:"searchbar"}),c.jsx("div",{id:"cancel",children:i&&c.jsx("span",{className:"material-symbols-outlined",onClick:l,children:"close"})}),c.jsx("button",{onClick:a,children:"search"})]})]}),c.jsxs("div",{className:"home",children:[c.jsx(Fu,{}),t!=null&&t.length?t.map(u=>c.jsxs("div",{className:"offer",children:[c.jsxs("div",{className:"offer-top",children:[c.jsx("img",{src:u.data().photoURl?u.data().photoURl:qi,alt:""}),c.jsxs("div",{children:[c.jsx("h3",{children:u.data().name}),c.jsxs("div",{className:"phoneNumber",children:[c.jsx("h2",{children:"+216"}),c.jsx("h2",{children:u.data().phoneNumber.substr(0,2)}),c.jsx("h2",{children:u.data().phoneNumber.substr(2,3)}),c.jsx("h2",{children:u.data().phoneNumber.substr(5,5)})]})]})]}),c.jsx("div",{className:"offer-content",children:c.jsx("h3",{children:u.data().content})}),c.jsxs("div",{className:"offer-footer",children:[c.jsx("button",{onClick:()=>{o(`/users/${u.data().authorId}`)},children:"See profile"}),c.jsxs("h4",{children:["Starting at ",c.jsxs("span",{children:[u.data().price,"Dt"]})]})]})]},u.id)):c.jsx("h1",{children:"nothing"})]})]})}const Ap="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ7SURBVHgB1ZU9TFNRFMf/9/HUQRO7yUZN3KU7CTjpBs4OyOhUiR+Jg6GdiIoBB2dhd6CbTpRE97KT+EwcHEvExGjs83dO36Ot8Pox8k9u7323956v/znnSucdIV+kr7SgSPNKNctnmX9KrBPWbXXU0F81wzP/nlxB+lrvmJYQsoOSJgIT1m3FKEpdWa68Fh5zZhIF6Uvd5/KijrUSaggtQLqOolh7jEpYLT73PyKsK8tCcomQDEPsnpTx7KomQOy/Fu8L+pJuaJcw7POdnOxLN52X4OEa2/KeB4YOcf2j605m6h4tM6qs57E4MNfDI/4PkyuI80WWIdtj3lNaw7vLeBa5QWZkEp6QIEUKJgFZt8b00LNN+o6HV/Bumv0Yj+vhac/QroJIy2TJ9rA8h59qFr5dBBseuPBO/yH3aB1FM4S03lNgBXVRewhJsKTFpSMOJsyWOTOMJc60JOfgmPG8wI4W51aZNyncI0K2FWUK9p1EyEToV+aSE2wIZNVvVUiCFb5+sf9Ww2Ehe8G9tZ4HGTKSmmfdwqKae5ciYDTM28TaT6RxETxlP2t8HDJmuwqMZGsZBfCU1IhKPw3jqpST3EJJFfY3MzKTvoOzWTuRpnRtIGuGIegGHjdykg/okhUnU3rjxObDsuKHV/ld1nNjip/2lO2oNUhytw6SgktN0riMp3e4+EHDEOk2Ct6bPFPQdgJHwNu1oaN73p1SfSwQbn1sgbS+5Ub75Q1tsVpUt0ob3jXtwZmC2ClctZqwR4c2YC+bFSV73zj/ifkwE21czbnB1EzeFcKAhTGZ1PWmlD2ZVrmW+wf6SSvpe5BOHiplnnXP7ZzV8M43/gGW6+LmvNg1xwAAAABJRU5ErkJggg==",Np="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE7SURBVHgB1ZZbTsJAFIa/aZH4QmQJ7kB3oK5Al6ArUB408Ul8MtEmugNZgjuwOwB34A7U+KIQGM7hNhAypHQKhC9p2p7p/CedOZcxTGHrVKlwRo998mD5ZIc3U+N7bIomYw8iWqEpH52Sl0jm9mgOtOacJ7zbJ64IRDVUa9b4TFWMXxSEaqmmPg+X6E9ejFu3YFSry55zsEJKvgH7yDkxd2Shy725obGUA50g0ZCShX//8pYWTMPcSlwHssE90GQpc+wbp02a5Q/9SxRL6FqO8JOSgUWb3JLbBYGsfA82nGgRr85AzVzzQlEORpnZIJDt34M1OdiVYmWHDaIQVCvmZ+Jg1KRbhbTMhEvVGjd+F0Udydqy9OVEyoPlgzwYDuQ6lDp14kzT3rWPduTYYnIeWyIpfr9ybKm7/tAHuO1ZSMKAnYkAAAAASUVORK5CYII=",ZE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAISSURBVHgBpZS/SwJhGMefV91saFLHrH9AKoiwQS1IaKktanAIWoKolhoiCoJqKoKWoMGhKCgwIiiIOqKitosaMx3VyUEhSH17n1dP8nzvvTv9Dnfvve/d9/M+P+4lfcFwCgh0gX2pZRcNq4qSl73kaNEcFXCWyEMgFOqUvUT6hsIUB/fXCbCqTDYHiyurkM3l8FEaiQNakM/rgd3tTfB6PPgojcQQUCgW4ebuHuLHp3CRuIJMdbe2IcIUYQqWWAr0prGpSYhNTzbMmaVLGIFm3tPt56ajIxE+Hz85hVsWlZ1ImgDPr2/c3Fv7EHe8vDgPc7MzfP1GBzCDNAG+kil+jw5HoMPtrs9rUbx/fIJIIogQoJnq818oFBvWrUB6hyLrTYDg4AC/Y66xe7So1ja3GtZlkOWleT4mhMaEXYTFxPbUS6uLr7pDqSJj4/zuEi1i56DJ+eUVJL9T4GZpibIaYMFlKdKErVtTvg7AnP/fGRZVK6xdHRweVQeEJlgNqIJj0Y/VinZ293mrUwrp8i9sOMoumGDzqtHfa9ccm4MVNV+hdEJ9VdLOTDr94+3uOnNUSJSdPz6kY6dYybWheYUdFy+KivNOvLQLMTKvA9qByMwbAK1AzMybAHYgVsyFACNIj9/PjwHsNjR/eHwyNUcRkAiP3NqpGNCvWTE3BWjqD4YWKCExBKExARovl2AP+9zs2z/Kh3tRRBoBOQAAAABJRU5ErkJggg==",eS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIJSURBVHgB1VVbUsJAEOyNyJ8lN1BvoDfQE6gnAE4AlK/ii/BllWIBJwBPEDwBeAKOIN4Ayz/QxJ7Z8A5SEH6YqpDdTTI90927ALseZjQInnEOB5cIkEKcMOgzx7u5RctOJfkLPC5eYZth0DQ3yBomLzG5q8g+6uyihzjhkwEHOeY85lVOcCmjD36I9mDbihtBRYv0CJR2FEliDw3qkEfMCJ5wSjaqdoJjZ+pZSh6QskZQ3UxoVp5j1d1x0YwJgI8sf8UBGY67wePkpZWJXaSYvM1hLVyqLwCYezQxxBm76GkF+/hQA6xKLvY+YNXg3Vr0ghbNLwAoSBE9WutE1Ldfw5XKlnXDAqpM2g4p6WCAM3PH+1Q4UR/yJZe3a+1GKksSpDLZJwLIuXCdDwspsOoLKXA+VwJLe2e7JhTbVuixYjdcd2d2vIPDZWkiO1DubeuSpDVNGUTIiHV25EW5b6YDcQMFq6qT7IflkC6hpUnhG4Du+Dc1BVTkDsts6FHj45TvzVBliBzoaEhxk6Fg4oY1draaIDkWu89LLO/NAliLpVTYQbRg/4IIPb/abW56faLBiNdvWq24/oFnCuir/0e6jAFMmCxAjS9cG1db3DhUM3sqCCu9BCevHJQIdUXBPnmPBcA44pVX4pnb/uFU1BFpbDdayshopjvV17/NQ8QJH19kpDV/ZOxu/AHXO9FVSrZ+gwAAAABJRU5ErkJggg==",tS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKQSURBVHgBnVXbbRpRED13wf6JIuEKsqkgpgOoIKYCTAW2pTyUL+DLSuLIpoKYCkwH2Q6MKzCpIEiJ8hFirs/MnV3WsMvDI632ceeemTn3zKzDGvM91PACx3B4yyuG5yXmMOXzGHMM8YDEfcKkDMOVAr9El4/HBKphkzlc4x/6RYFWAvgvOEQFN1m2QEKvIQGyTNUn0oqOuNY2pAmrabkPrKwsgIH/sKwTzNBZV77uOWegfd0T83VK2pr5IK7EceDe4RQ7mL/AFW8nGmSGeppYlHns4dLAR7uCa6Zhz4hXjVjf0+8awH9Fg7cj5XGGMzzXKuhoBUDDMK0Cp6WBh9TfxHmR6dkJzJnKd2CY3UUAyT4ESLCj+W+kNsKt/2wYVT0LsUN/iVqUlkIbl2XPAzwhULcAvMuMT7Xx5kE5WgX0uUa644iLoZE8fpaB83YlQAS8V7XJd8nYo6dO/5fk7HGXVrEI4PCrALyt4GEdqjJKWcGrpCaA9d1HVU+hRXSYmuPBE/BwcNcpCDu5DpGhBFl0+si9tyry5vDK9k2r5GlM3UqoNxn4uYJI04UMFyAtnllPFSKS/q2yREGAWPfSJzLuRF5xduBVdRDqBssZ6rtHk+B117PqlyuX6gguIyOV6dAIaxtIgj84KOtoWS8CV6tYT/kgeZdRsod7XZgzs6WJuK09wZnhtbCjFRhNA8vgJpXizuAyLIMNVoddRbkeK3+5YbUTeMp9jtosgHbgDC17bWwFzD+fdvM+blNwyrmZ91n9o12owGT8OlWVDMIwCu60QmnM0Jwi6/wvdURhdJYPvzQAoCpoYLMl1itJ0WJ1zcaGZS6HP+WzZBzb2kTnDaW4SXGrAZxuDsB/OQrK9L6lPQKmUwwBIV89bwAAAABJRU5ErkJggg==",nS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSSURBVHgBrVbbTRtBFD0zNnwlktPBdhCnA7sCQgVJKiCWnEh8gb+QeAioAFMBpgKWCtgOgArwB1/g9XDundm1jXZgbflK652dx7mvc+/YYE7cETow+MWn4yeQoI4YPHDvmO+M72vTx2i2JDj7aOELrjjsYB1iMIRFz/QwburEV5xSs1g/xhTnHI+QY2x2aVkNcQf0tEEjxXOLHZ7/zfMJl7rGHeMnB1fq5gsnaoIugG/gAt77lOADYkk0Whx3m/zY4gBi+bLgKhsK1g5fHQ26YxQM9iSflh9+0VH7alKc75ZKXEgyQyYetNQDi6cYQmDXDp+2sgX0dEq2/GcyoYbJ+k3Ynkn+iOd1MAdOB33PqAXgz9glbMkZDqs5aKuyV/yRUBe4TXwkBXjBrgkBhS0C1mCMhS0WCY37EYOIKnCHPOzBq9iVkT0pE3wneySE5l91Dm1MAVe29J1jUMUunRO2ePkbh4mJKamXRfdMNMmC8n15BbMdUXaFfCAwK3I8Ji5Y7rCNuBQ18LiKAh9fVqS2g/fLvv/shb2jGEyURcIKcjmFMGkTN2TVAEURbbKlS2KdhmgYCm45BSoNhidnETk2RF9M3mdX7kjxjN5HEMad4D5cLFIwlbHUmvC0TUJrkYvlPMb90GHvpYZmHkzxjb+VCkIIhqgrc+yyBL71KHovrEdM2bsyW1rGblnFlmVFMeRWE8nZcXXyWFut7zv+ykxXujIbmqcZu/rsrLrhlBMTnOk/ivWIsGvb7NPIBUvkfhZKGvYWz5akFpwJnjq9ky/n2fUGMGPWSzzxI9oAAAAASUVORK5CYII=";function hd(t){return us({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(t)}function pO(){var de,fe,yr,Rp;const{user:t,logout:e,upload:n,createOffer:r,deleteOffer:i,acceptRequest:s,refuseRequest:o}=xn(),[a,l]=E.useState(""),[u,h]=E.useState(""),[d,f]=E.useState(""),[y,v]=E.useState(""),[w,I]=E.useState(null),[g,p]=E.useState(!1),[m,S]=E.useState(),[C,_]=E.useState(qi),[k,N]=E.useState(""),[H,b]=E.useState(""),[J,Te]=E.useState(),[Ne,Rt]=E.useState(),[Pt,on]=E.useState(),Ft=ne(F,"users"),R=je(Ft,Se("email","==",`${t.email}`)),M=je(ne(F,"offers"),Se("authorId","==",`${(de=Q.currentUser)==null?void 0:de.uid}`)),V=je(ne(F,"requests"),Se("resId","==",`${(fe=Q.currentUser)==null?void 0:fe.uid}`),Se("state","==","waiting")),se=je(ne(F,"reviews"),Se("resId","==",`${(yr=Q==null?void 0:Q.currentUser)==null?void 0:yr.uid}`)),[ye,An]=E.useState(),[Dt,gr]=E.useState(),[rt,Nn]=E.useState(),[ta,Bu]=E.useState(),[Vu,an]=E.useState(0);E.useEffect(()=>{Pe(M,q=>{Te(q.docs)})},[t]),E.useEffect(()=>{Pe(V,q=>{Rt(q.docs)})},[t]),E.useEffect(()=>{Pe(se,q=>{on(q.docs)})},[t]),E.useEffect(()=>{an(0),Pt==null||Pt.forEach(q=>{(q==null?void 0:q.data().content)!=null&&an(Ot=>Ot+1)})}),E.useEffect(()=>{Pe(R,q=>{q.docs.forEach(Ot=>{l(Ot.data().bio),h(Ot.data().messanger),f(Ot.data().instagram),S(Ot.id),v(Ot.data().phoneNumber),Nn(Ot.data().deals),Bu(Ot.data().stars)})})},[t]);const zu=Me(F,"users",`${m}`),Hu=q=>{q.target.files[0]&&I(q.target.files[0])};E.useEffect(()=>{t!=null&&t.photoURL&&_(t.photoURL)},[t]);const na=(Rp=t.displayName)==null?void 0:Rp.split(" ")[0],ra=q=>{q.preventDefault(),r(t.displayName,y,k,H,C),document.getElementById("my-text").value="",document.getElementById("price").value="",N("")},ia=()=>{n(w,t,p,zu)},sa=J==null?void 0:J.map(q=>c.jsxs("div",{className:"profile-offer",children:[c.jsxs("div",{className:"offer-top",children:[c.jsxs("div",{className:"offer-user-info",children:[c.jsx("img",{src:C,alt:""}),c.jsxs("div",{children:[c.jsx("h3",{children:t==null?void 0:t.displayName}),c.jsxs("div",{className:"phoneNumber",children:[c.jsx("h2",{children:"+216"}),c.jsx("h2",{children:y.substr(0,2)}),c.jsx("h2",{children:y.substr(2,3)}),c.jsx("h2",{children:y.substr(5,5)})]})]})]}),c.jsx("span",{className:"material-symbols-sharp",onClick:()=>{i(q.id)},children:"delete"})]}),c.jsx("div",{className:"offer-content",children:c.jsx("h3",{children:q.data().content})}),c.jsx("div",{className:"offer-footer",children:c.jsxs("h4",{children:["Starting at ",c.jsxs("span",{children:[q.data().price,"Dt"]})]})})]},q.id)),oa=Ne==null?void 0:Ne.map(q=>c.jsxs("div",{children:[c.jsx("p",{children:q.data().content}),c.jsx("button",{onClick:()=>{s(Me(F,"requests",`${q.id}`),m,rt)},children:"yes"}),c.jsx("button",{onClick:()=>{An(!0)},children:"no"}),ye&&c.jsxs("form",{children:[c.jsx("input",{type:"text",onChange:Ot=>{gr(Ot.target.value)}}),c.jsx("button",{onClick:()=>{o(Me(F,"requests",`${q.id}`),Dt,t.displayName)}})]})]},q.id)),Y=Pt==null?void 0:Pt.map(q=>q.data().content!=null&&c.jsxs("div",{className:"review",children:[c.jsx("img",{src:q.data().senderPhoto?q.data().senderPhoto:qi,alt:""}),c.jsxs("div",{className:"deals",children:[c.jsxs("h3",{children:[q.data().deals,"x"]}),c.jsx("i",{className:"fa-regular fa-handshake fa-xl"})]}),c.jsx("h2",{className:"senderName",children:q.data().senderName}),c.jsx("h2",{className:"review-content",children:q.data().content}),c.jsx("div",{className:"stars",children:[...Array(5)].map((Ot,rS)=>{const iS=rS+1;return c.jsx("label",{children:c.jsx(hd,{className:"star",size:25,color:iS<=q.data().rate?"#ffc107":"#e4e5e9"})})})})]},q.id));return c.jsxs("div",{className:"profile",children:[c.jsx(Fu,{}),c.jsxs("div",{className:"fields",children:[c.jsxs("div",{className:"photo-section",children:[c.jsxs("button",{className:"photo-button",children:[c.jsx("span",{className:"material-symbols-outlined",children:"edit"}),c.jsx("input",{type:"file",onChange:Hu})]}),c.jsxs("div",{className:"profile-deals",children:[c.jsx("i",{className:"fa-regular fa-handshake fa-xl"}),c.jsx("h3",{children:t&&rt?rt:"0"})]}),c.jsxs("div",{className:"profile-rate",children:[c.jsx("i",{className:"fa-solid fa-star fa-xl"}),c.jsx("h3",{children:t&&ta/rt?(ta/rt).toFixed(1):"0"})]}),c.jsx("img",{src:C})]}),c.jsxs("div",{className:"photo-buttons",children:[c.jsx("button",{hidden:!w,onClick:()=>{p(!1),window.location.reload(!1)}}),g?c.jsx("button",{children:c.jsx("i",{className:"fa fa-spinner fa-spin"})}):c.jsx("button",{disabled:g||!w,hidden:!w,onClick:ia,children:"upload"})]}),c.jsx("h5",{className:"name",children:t&&t.displayName}),c.jsxs("div",{className:"phoneNumber",children:[c.jsx("h2",{children:"+216"}),c.jsx("h2",{children:y.substr(0,2)}),c.jsx("h2",{children:y.substr(2,3)}),c.jsx("h2",{children:y.substr(5,5)})]}),c.jsx("div",{className:"bio",children:t&&a}),c.jsxs("form",{className:"offer-form",onSubmit:ra,children:[c.jsxs("div",{className:"offer-box",children:[c.jsx("textarea",{id:"my-text",onChange:q=>{N(q.target.value)},required:!0,maxLength:100}),c.jsxs("p",{id:"letter-counter",children:[k.length,"/100"]}),c.jsxs("div",{className:"offer-placeholder",children:[c.jsx("img",{src:Np,alt:""}),c.jsx("h3",{children:"The offer"})]})]}),c.jsxs("div",{className:"offer-box",children:[c.jsx("input",{type:"number",onChange:q=>{b(q.target.value)},pattern:"\\d*",maxLength:"4",min:"0",required:!0,id:"price"}),c.jsxs("div",{className:"offer-placeholder",children:[c.jsx("img",{src:Ap,alt:""}),c.jsx("h3",{children:"The starting Price"})]}),c.jsx("button",{type:"submit",children:"Add"})]})]}),c.jsxs("div",{className:"info-box",children:[c.jsxs("div",{className:"info",children:[c.jsx("img",{src:eS,alt:""}),c.jsx("h3",{children:t&&t.email})]}),c.jsxs("div",{className:"info",children:[c.jsx("img",{src:tS,alt:""}),c.jsx("h3",{children:t&&u})]}),c.jsxs("div",{className:"info",children:[c.jsx("img",{src:nS,alt:""}),c.jsx("h3",{children:t&&d})]})]})]}),c.jsxs("div",{className:"offers-display",children:[c.jsxs("div",{className:"offers-section-title",children:[c.jsx("img",{src:ZE,alt:""}),c.jsxs("h3",{children:[na,"'s offers"]})]}),c.jsxs("div",{className:"offers-section",children:[sa,oa]})]}),c.jsxs("div",{className:"reviews",children:[c.jsxs("div",{className:"reviews-title",children:[c.jsx("span",{className:"material-symbols-outlined",children:"history_edu"}),c.jsxs("h2",{children:["Reviews: (",Vu,")"]})]}),c.jsx("div",{className:"reviews-content",children:Y})]})]})}function mO(){const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),{signIn:o}=xn(),a=dr(),l=async u=>{u.preventDefault(),s("");try{await o(t,n),a("/profile")}catch(h){s(h.message),console.log(h.message)}};return c.jsx("div",{className:"auth",children:c.jsxs("form",{onSubmit:l,children:[i&&c.jsx("p",{id:"error",children:"tchu tchu motherfucker"}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:u=>{e(u.target.value)},id:"email",pattern:"/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/g",required:!0}),c.jsx("span",{children:"email"})]}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:u=>{r(u.target.value)},type:"passowrd",id:"password",required:!0}),c.jsx("span",{children:"password"})]}),c.jsx("button",{children:"Sign In"}),c.jsxs("p",{children:["Don't have an account? ",c.jsx(z0,{to:"/signup",className:"link",children:"Sign Up"})]})]})})}function gO(){const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),[o,a]=E.useState(""),[l,u]=E.useState(""),[h,d]=E.useState(""),[f,y]=E.useState(""),[v,w]=E.useState("");E.useState();const{CreateUser:I,setUserName:g,user:p,createUserData:m}=xn(),S=dr(),C=async _=>{_.preventDefault(),w("");try{await I(t,n),await g(i),await m(i,t,o,l,h,f,qi),S("/profile")}catch(k){w(k.message)}};return c.jsx("div",{className:"auth",children:c.jsxs("form",{onSubmit:C,children:[c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:_=>{s(_.target.value)},type:"text",required:!0}),c.jsx("span",{children:"username"})]}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:_=>{e(_.target.value)},pattern:"/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/g",required:!0}),c.jsx("span",{children:"Email"})]}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:_=>{r(_.target.value)},type:"passowrd",required:!0}),c.jsx("span",{children:"Password"})]}),c.jsxs("div",{className:"inputBox",children:[c.jsx("input",{onChange:_=>{a(_.target.value)},type:"text",required:!0}),c.jsx("span",{children:"Bio"})]}),c.jsxs("div",{className:"box",children:[c.jsx("input",{onChange:_=>{u(_.target.value)},type:"text",required:!0}),c.jsx("span",{children:"messanger"})]}),c.jsxs("div",{className:"box",children:[c.jsx("input",{onChange:_=>{d(_.target.value)},type:"text",required:!0}),c.jsx("span",{children:"instagram"})]}),c.jsxs("div",{className:"box",children:[c.jsx("input",{onChange:_=>{y(_.target.value)},type:"tel",required:!0}),c.jsx("span",{children:"Phone number"})]}),c.jsxs("p",{children:["Already have an account? ",c.jsx(z0,{to:"/signin",className:"link",children:"Sign In"})]}),c.jsx("button",{children:"Sign Up"})]})})}function Da({children:t}){const{user:e}=xn();return e?t:c.jsx(V0,{to:"/signin"})}function Sy({children:t}){const{user:e}=xn();return e?c.jsx(V0,{to:"/profile"}):t}function yO(){var na,ra,ia,sa,oa;const{createRequest:t,deleteRequest:e,createReview:n,user:r}=xn(),{id:i}=aT(),[s,o]=E.useState(),[a,l]=E.useState({}),[u,h]=E.useState(""),[d,f]=E.useState(""),[y,v]=E.useState(),[w,I]=E.useState(),g=ne(F,"users"),p=je(g,Se("id","==",`${i}`)),m=je(ne(F,"offers"),Se("authorId","==",`${i}`));je(ne(F,"requests"),Se("resId","==",`${i}`),Se("senderId","==",`${(na=Q==null?void 0:Q.currentUser)==null?void 0:na.uid}`));const S=je(ne(F,"reviews"),Se("resId","==",`${i}`)),[C,_]=E.useState(!0),[k,N]=E.useState(),[H,b]=E.useState(),[J,Te]=E.useState(),[Ne,Rt]=E.useState(),[Pt,on]=E.useState(),[Ft,R]=E.useState(),[M,V]=E.useState([]),[se,ye]=E.useState(),[An,Dt]=E.useState(null),[gr,rt]=E.useState(),[Nn,ta]=E.useState();E.useEffect(()=>{Pe(m,Y=>{o(Y.docs)})},[r]),E.useEffect(()=>{Pe(ne(F,"requests"),Y=>{Y.docs.forEach(de=>{var fe;de.data().resId==i&&de.data().senderId==((fe=Q==null?void 0:Q.currentUser)==null?void 0:fe.uid)&&(v(de.data().state),I(de.id),ye(de.data().message))})})},[r]),E.useEffect(()=>{Pe(p,Y=>{Y.docs.forEach(de=>{l(de.data()),rt(de.data().stars),ta(de.id)})})},[r]),E.useEffect(()=>{Pe(S,Y=>{V(Y.docs)})},[r]),console.log(M),E.useEffect(()=>{Q.currentUser&&i==Q.currentUser.uid&&(window.location.href="/profile")},[r]);const Bu=Y=>{var de,fe;Y.preventDefault(),t((de=Q.currentUser)==null?void 0:de.uid,(fe=Q.currentUser)==null?void 0:fe.displayName,i,a==null?void 0:a.name,u,d)};E.useEffect(()=>{var Y;Pe(je(ne(F,"reviews"),Se("senderId","==",`${(Y=Q.currentUser)==null?void 0:Y.uid}`)),de=>{de.docs.forEach(fe=>{_(!1),N(fe.id),b(fe.data().deals),Te(fe.data().content),Rt(fe.data().rate)})})},[Q.currentUser]);const Vu=Y=>{e(Me(F,"requests",`${w}`)),window.location.reload(!1),n(Q.currentUser.uid,Q.currentUser.photoURL,Q.currentUser.displayName,a.id,a.name,Pt,Ft,k,C,H,Ne,J,gr,Nn)},an=(ra=a.name)==null?void 0:ra.split(" ")[0],zu=s==null?void 0:s.map(Y=>{var de,fe,yr;return c.jsxs("div",{className:"profile-offer",children:[c.jsxs("div",{className:"offer-top",children:[c.jsx("img",{src:a==null?void 0:a.photoURL,alt:""}),c.jsxs("div",{children:[c.jsx("h3",{children:a==null?void 0:a.name}),c.jsxs("div",{className:"phoneNumber",children:[c.jsx("h2",{children:"+216"}),c.jsx("h2",{children:(de=a==null?void 0:a.phoneNumber)==null?void 0:de.substr(0,2)}),c.jsx("h2",{children:(fe=a==null?void 0:a.phoneNumber)==null?void 0:fe.substr(2,3)}),c.jsx("h2",{children:(yr=a==null?void 0:a.phoneNumber)==null?void 0:yr.substr(5,5)})]})]})]}),c.jsx("div",{className:"offer-content",children:c.jsx("h3",{children:Y.data().content})}),c.jsx("div",{className:"offer-footer",children:c.jsxs("h4",{children:["Starting at ",c.jsxs("span",{children:[Y.data().price,"Dt"]})]})})]})}),Hu=M==null?void 0:M.map(Y=>Y.data().content!=null&&c.jsxs("div",{className:"review",children:[c.jsx("img",{src:Y.data().senderPhoto?Y.data().senderPhoto:qi,alt:""}),c.jsxs("div",{className:"deals",children:[c.jsxs("h3",{children:[Y.data().deals,"x"]}),c.jsx("i",{className:"fa-regular fa-handshake fa-xl"})]}),c.jsx("h2",{className:"senderName",children:Y.data().senderName}),c.jsx("h2",{className:"review-content",children:Y.data().content}),c.jsx("div",{className:"stars",children:[...Array(5)].map((de,fe)=>{const yr=fe+1;return c.jsx("label",{children:c.jsx(hd,{className:"star",size:25,color:yr<=Y.data().rate?"#ffc107":"#e4e5e9"})})})})]}));return c.jsxs("div",{className:"profile",children:[c.jsx(Fu,{}),c.jsxs("div",{className:"fields",children:[c.jsx("img",{src:a==null?void 0:a.photoURL}),c.jsx("h5",{className:"name",children:a&&a.name}),c.jsxs("div",{className:"phoneNumber",children:[c.jsx("h2",{children:"+216"}),c.jsx("h2",{children:(ia=a==null?void 0:a.phoneNumber)==null?void 0:ia.substr(0,2)}),c.jsx("h2",{children:(sa=a==null?void 0:a.phoneNumber)==null?void 0:sa.substr(2,3)}),c.jsx("h2",{children:(oa=a==null?void 0:a.phoneNumber)==null?void 0:oa.substr(5,5)})]}),c.jsx("div",{className:"bio",children:a&&a.bio}),y==null&&c.jsxs("form",{className:"offer-form",onSubmit:Bu,children:[c.jsxs("div",{className:"offer-box",children:[c.jsx("input",{type:"text",onChange:Y=>{h(Y.target.value)},required:!0}),c.jsxs("div",{className:"offer-placeholder",children:[c.jsx("img",{src:Np,alt:""}),c.jsxs("h3",{children:["What you want ",an," to do for you"]})]})]}),c.jsxs("div",{className:"offer-box",children:[c.jsx("input",{type:"text",onChange:Y=>{f(Y.target.value)},required:!0}),c.jsxs("div",{className:"offer-placeholder",children:[c.jsx("img",{src:Ap,alt:""}),c.jsx("h3",{children:"You will pay"})]}),c.jsx("button",{children:"Send Request"})]})]}),y=="waiting"&&c.jsxs("div",{className:"state-section",children:[c.jsxs("div",{className:"waiting",children:[c.jsx("span",{class:"material-symbols-outlined",children:"chat"}),c.jsxs("h2",{children:["Your Request Has Been Sent. Waiting For ",an,"’s Response"]})]}),c.jsxs("div",{className:"cancel-request",onClick:()=>{e(Me(F,"requests",`${w}`)),window.location.reload(!1)},children:[c.jsx("span",{class:"material-symbols-outlined",children:"speaker_notes_off"}),c.jsx("h2",{children:"Cancel request"})]})]}),y=="refuse"&&c.jsxs("div",{className:"refused-state-section",children:[c.jsxs("div",{className:"refused",children:[c.jsx("span",{className:"material-symbols-outlined",children:"speaker_notes_off"}),c.jsxs("h2",{children:[an," refused your request."]})]}),c.jsxs("div",{className:"message",children:[c.jsxs("div",{className:"message-title",children:[c.jsx("span",{className:"material-symbols-outlined",children:"chat"}),c.jsxs("h2",{children:["Message from ",an]})]}),c.jsx("h2",{children:se})]}),c.jsx("button",{onClick:()=>{e(Me(F,"requests",`${w}`)),window.location.reload(!1)},className:"profile-button",children:"ok"})]}),y=="accept"&&c.jsxs("div",{className:"accept-state-section",children:[c.jsxs("div",{className:"accept",children:[c.jsx("span",{class:"material-symbols-outlined",children:"mark_chat_read"}),c.jsxs("h2",{children:[an," accepted your request."]})]}),c.jsxs("form",{onSubmit:Vu,className:"feedback-section",children:[c.jsxs("div",{children:[c.jsxs("label",{children:[c.jsx("span",{class:"material-symbols-outlined",children:"history_edu"}),c.jsx("h2",{children:"Write a review after you receive the service"})]}),c.jsx("input",{type:"text",onChange:Y=>{on(Y.target.value)},maxLength:100,defaultValue:J}),c.jsx("div",{className:"stars",children:[...Array(5)].map((Y,de)=>{const fe=de+1;return c.jsxs("label",{children:[c.jsx("input",{type:"radio",name:"rating",value:fe,onClick:()=>{R(fe)}}),c.jsx(hd,{className:"star",size:25,color:fe<=(An||Ft||Ne)?"#ffc107":"#e4e5e9",onMouseEnter:()=>Dt(fe),onMouseLeave:()=>Dt(null)})]})})})]}),c.jsx("button",{type:"submit",disabled:!Ft&&!Ne,children:"Add Review"})]})]}),c.jsxs("div",{className:"info-box",children:[c.jsxs("div",{className:"info",children:[c.jsx("img",{src:eS,alt:""}),c.jsx("h3",{children:a&&a.email})]}),c.jsxs("div",{className:"info",children:[c.jsx("img",{src:tS,alt:""}),c.jsx("h3",{children:a&&a.messanger})]}),c.jsxs("div",{className:"info",children:[c.jsx("img",{src:nS,alt:""}),c.jsx("h3",{children:a&&a.instagram})]})]})]}),c.jsxs("div",{className:"offers-display",children:[c.jsxs("div",{className:"offers-section-title",children:[c.jsx("img",{src:ZE,alt:""}),c.jsxs("h3",{children:[an,"'s offers"]})]}),c.jsx("div",{className:"offers-section",children:zu})]}),c.jsxs("div",{className:"reviews",children:[c.jsxs("div",{className:"reviews-title",children:[c.jsx("span",{className:"material-symbols-outlined",children:"history_edu"}),c.jsxs("h2",{children:["Reviews: (",M==null?void 0:M.length,")"]})]}),c.jsx("div",{className:"reviews-content",children:Hu})]})]})}function vO(){return c.jsx("div",{children:c.jsx("a",{href:"/",children:"home"})})}function wO(){const{user:t,deleteRequest:e,acceptRequest:n,refuseRequest:r}=xn(),[i,s]=E.useState(),[o,a]=E.useState(),[l,u]=E.useState(),[h,d]=E.useState(),[f,y]=E.useState(),[v,w]=E.useState(),I=dr();E.useEffect(()=>{var m,S,C;Pe(je(ne(F,"requests"),Se("senderId","==",`${(m=Q.currentUser)==null?void 0:m.uid}`)),_=>{s(_.docs)}),Pe(je(ne(F,"requests"),Se("state","==","waiting"),Se("resId","==",`${(S=Q.currentUser)==null?void 0:S.uid}`)),_=>{a(_.docs)}),Pe(je(ne(F,"users"),Se("id","==",`${(C=Q.currentUser)==null?void 0:C.uid}`)),_=>{_.docs.forEach(k=>{y(k.id),w(k.data().deals)})})},[t]);const g=i==null?void 0:i.map(m=>{var S,C,_,k;if(m.data().state=="waiting")return c.jsxs("div",{className:"state-section",children:[c.jsxs("div",{className:"waiting",children:[c.jsx("span",{className:"material-symbols-outlined",children:"chat"}),c.jsxs("h2",{children:["Your Request Has Been Sent. Waiting For ",(S=m.data().resName)==null?void 0:S.split(" ")[0],"’s Response"]})]}),c.jsxs("div",{className:"cancel-request",onClick:()=>{e(Me(F,"requests",`${m.id}`))},children:[c.jsx("span",{className:"material-symbols-outlined",children:"speaker_notes_off"}),c.jsx("h2",{children:"Cancel request"})]})]},m.id);if(m.data().state=="refuse")return c.jsxs("div",{className:"refused-state-section",children:[c.jsxs("div",{className:"refused",children:[c.jsx("span",{className:"material-symbols-outlined",children:"speaker_notes_off"}),c.jsxs("h2",{children:[(C=m.data().resName)==null?void 0:C.split(" ")[0]," refused your request."]})]}),c.jsxs("div",{className:"message",children:[c.jsxs("div",{className:"message-title",children:[c.jsx("span",{className:"material-symbols-outlined",children:"chat"}),c.jsxs("h2",{children:["Message from ",(_=m.data().resName)==null?void 0:_.split(" ")[0]]})]}),c.jsx("h2",{children:m.data().message})]}),c.jsx("button",{onClick:()=>{e(Me(F,"requests",`${m.id}`))},className:"profile-button",children:"ok"})]});if(m.data().state=="accept")return c.jsxs("div",{className:"accept-state-section",children:[c.jsxs("div",{className:"accept",children:[c.jsx("span",{class:"material-symbols-outlined",children:"mark_chat_read"}),c.jsxs("h2",{children:[(k=m.data().resName)==null?void 0:k.split(" ")[0]," accepted your request."]})]}),c.jsxs("div",{className:"see-more",onClick:()=>{I(`/users/${m.data().resId}`)},children:[c.jsx("span",{class:"material-symbols-outlined",children:"visibility"}),c.jsx("h2",{children:"See more"})]})]})}),p=o==null?void 0:o.map(m=>c.jsxs("div",{className:"requestR",children:[c.jsxs("div",{className:"request-content",children:[c.jsxs("div",{className:"the-content",children:[c.jsx("img",{src:Np,alt:""}),c.jsx("p",{children:m.data().content})]}),c.jsxs("div",{className:"the-content",children:[c.jsx("img",{src:Ap,alt:""}),c.jsx("p",{children:m.data().price})]})]}),c.jsxs("div",{className:"thumbs",children:[c.jsx("i",{className:"fa-sharp fa-regular fa-thumbs-up fa-2xl thumb",onClick:()=>{n(Me(F,"requests",`${m.id}`),f,v)}}),c.jsx("i",{className:"fa-sharp fa-regular fa-thumbs-down fa-flip-horizontal fa-2xl",onClick:()=>{d(!0)},id:"thumb-down"})]}),h&&c.jsxs("form",{children:[c.jsx("input",{type:"text",onChange:S=>{u(S.target.value)}}),c.jsx("button",{onClick:S=>{r(Me(F,"requests",`${m.id}`),l,t.displayName)}})]})]}));return c.jsxs("div",{className:"notification",children:[c.jsx(Fu,{}),c.jsxs("div",{className:"noti-content",children:[c.jsxs("div",{className:"received",children:[c.jsx("h5",{children:"Requests received"}),c.jsx("div",{className:"received-content",children:p})]}),c.jsxs("div",{className:"sent",children:[c.jsx("h5",{children:"Requests sent"}),c.jsx("div",{className:"sent-content",children:g})]})]})]})}function EO(){return c.jsx("div",{children:c.jsx(iO,{children:c.jsxs(ST,{children:[c.jsx(Dn,{path:"/",element:c.jsx(Da,{children:c.jsx(fO,{})})}),c.jsx(Dn,{path:"/profile",element:c.jsxs(Da,{children:[c.jsx("img",{src:cd,alt:"banner",className:"banner"}),c.jsx(pO,{})]})}),c.jsx(Dn,{path:"/users/:id",element:c.jsxs(Da,{children:[c.jsx("img",{src:cd,alt:"banner",className:"banner"}),c.jsx(yO,{})]})}),c.jsx(Dn,{path:"/notifications",element:c.jsx(Da,{children:c.jsx(wO,{})})}),c.jsx(Dn,{path:"/signin",element:c.jsx(Sy,{children:c.jsx(mO,{})})}),c.jsx(Dn,{path:"/signup",element:c.jsx(Sy,{children:c.jsx(gO,{})})}),c.jsx(Dn,{path:"*",element:c.jsx(vO,{})})]})})})}Uc.createRoot(document.getElementById("root")).render(c.jsx(gn.StrictMode,{children:c.jsx(xT,{children:c.jsx(EO,{})})}));
