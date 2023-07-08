(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function W_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ky={exports:{}},Xl={},qy={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Co=Symbol.for("react.element"),K_=Symbol.for("react.portal"),q_=Symbol.for("react.fragment"),G_=Symbol.for("react.strict_mode"),Q_=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),X_=Symbol.for("react.context"),J_=Symbol.for("react.forward_ref"),Z_=Symbol.for("react.suspense"),eS=Symbol.for("react.memo"),tS=Symbol.for("react.lazy"),Xp=Symbol.iterator;function nS(t){return t===null||typeof t!="object"?null:(t=Xp&&t[Xp]||t["@@iterator"],typeof t=="function"?t:null)}var Gy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qy=Object.assign,Yy={};function Wi(t,e,n){this.props=t,this.context=e,this.refs=Yy,this.updater=n||Gy}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xy(){}Xy.prototype=Wi.prototype;function Dd(t,e,n){this.props=t,this.context=e,this.refs=Yy,this.updater=n||Gy}var Pd=Dd.prototype=new Xy;Pd.constructor=Dd;Qy(Pd,Wi.prototype);Pd.isPureReactComponent=!0;var Jp=Array.isArray,Jy=Object.prototype.hasOwnProperty,Od={current:null},Zy={key:!0,ref:!0,__self:!0,__source:!0};function ev(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jy.call(e,r)&&!Zy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Co,type:t,key:s,ref:o,props:i,_owner:Od.current}}function rS(t,e){return{$$typeof:Co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===Co}function iS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zp=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iS(""+t.key):e.toString(36)}function Oa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Co:case K_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ju(o,0):r,Jp(i)?(n="",t!=null&&(n=t.replace(Zp,"$&/")+"/"),Oa(i,e,n,"",function(u){return u})):i!=null&&(Ld(i)&&(i=rS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ju(s,a);o+=Oa(s,e,n,l,i)}else if(l=nS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ju(s,a++),o+=Oa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(t,e,n){if(t==null)return t;var r=[],i=0;return Oa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},La={transition:null},oS={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:La,ReactCurrentOwner:Od};q.Children={map:ia,forEach:function(t,e,n){ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ia(t,function(){e++}),e},toArray:function(t){return ia(t,function(e){return e})||[]},only:function(t){if(!Ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Wi;q.Fragment=q_;q.Profiler=Q_;q.PureComponent=Dd;q.StrictMode=G_;q.Suspense=Z_;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Od.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jy.call(e,l)&&!Zy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Co,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:X_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Y_,_context:t},t.Consumer=t};q.createElement=ev;q.createFactory=function(t){var e=ev.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:J_,render:t}};q.isValidElement=Ld;q.lazy=function(t){return{$$typeof:tS,_payload:{_status:-1,_result:t},_init:sS}};q.memo=function(t,e){return{$$typeof:eS,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=La.transition;La.transition={};try{t()}finally{La.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return it.current.useCallback(t,e)};q.useContext=function(t){return it.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return it.current.useDeferredValue(t)};q.useEffect=function(t,e){return it.current.useEffect(t,e)};q.useId=function(){return it.current.useId()};q.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return it.current.useMemo(t,e)};q.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};q.useRef=function(t){return it.current.useRef(t)};q.useState=function(t){return it.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return it.current.useTransition()};q.version="18.2.0";qy.exports=q;var S=qy.exports;const aS=W_(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=S,uS=Symbol.for("react.element"),cS=Symbol.for("react.fragment"),hS=Object.prototype.hasOwnProperty,dS=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fS={key:!0,ref:!0,__self:!0,__source:!0};function tv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hS.call(e,r)&&!fS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uS,type:t,key:s,ref:o,props:i,_owner:dS.current}}Xl.Fragment=cS;Xl.jsx=tv;Xl.jsxs=tv;Ky.exports=Xl;var m=Ky.exports,Zc={},nv={exports:{}},Et={},rv={exports:{}},iv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var z=D.length;D.push(j);e:for(;0<z;){var H=z-1>>>1,oe=D[H];if(0<i(oe,j))D[H]=j,D[z]=oe,z=H;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var j=D[0],z=D.pop();if(z!==j){D[0]=z;e:for(var H=0,oe=D.length,na=oe>>>1;H<na;){var hr=2*(H+1)-1,Xu=D[hr],dr=hr+1,ra=D[dr];if(0>i(Xu,z))dr<oe&&0>i(ra,Xu)?(D[H]=ra,D[dr]=z,H=dr):(D[H]=Xu,D[hr]=z,H=hr);else if(dr<oe&&0>i(ra,z))D[H]=ra,D[dr]=z,H=dr;else break e}}return j}function i(D,j){var z=D.sortIndex-j.sortIndex;return z!==0?z:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,y=!1,w=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=D)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function E(D){if(v=!1,g(D),!w)if(n(l)!==null)w=!0,os(k);else{var j=n(u);j!==null&&as(E,j.startTime-D)}}function k(D,j){w=!1,v&&(v=!1,p(N),N=-1),y=!0;var z=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||D&&!Y());){var H=h.callback;if(typeof H=="function"){h.callback=null,d=h.priorityLevel;var oe=H(h.expirationTime<=j);j=t.unstable_now(),typeof oe=="function"?h.callback=oe:h===n(l)&&r(l),g(j)}else r(l);h=n(l)}if(h!==null)var na=!0;else{var hr=n(u);hr!==null&&as(E,hr.startTime-j),na=!1}return na}finally{h=null,d=z,y=!1}}var T=!1,R=null,N=-1,W=5,$=-1;function Y(){return!(t.unstable_now()-$<W)}function Ze(){if(R!==null){var D=t.unstable_now();$=D;var j=!0;try{j=R(!0,D)}finally{j?Vt():(T=!1,R=null)}}else T=!1}var Vt;if(typeof f=="function")Vt=function(){f(Ze)};else if(typeof MessageChannel<"u"){var ta=new MessageChannel,Yu=ta.port2;ta.port1.onmessage=Ze,Vt=function(){Yu.postMessage(null)}}else Vt=function(){_(Ze,0)};function os(D){R=D,T||(T=!0,Vt())}function as(D,j){N=_(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,os(k))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var z=d;d=j;try{return D()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=d;d=D;try{return j()}finally{d=z}},t.unstable_scheduleCallback=function(D,j,z){var H=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?H+z:H):z=H,D){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=z+oe,D={id:c++,callback:j,priorityLevel:D,startTime:z,expirationTime:oe,sortIndex:-1},z>H?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(v?(p(N),N=-1):v=!0,as(E,z-H))):(D.sortIndex=oe,e(l,D),w||y||(w=!0,os(k))),D},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(D){var j=d;return function(){var z=d;d=j;try{return D.apply(this,arguments)}finally{d=z}}}})(iv);rv.exports=iv;var pS=rv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv=S,vt=pS;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ov=new Set,Ks={};function zr(t,e){Ai(t,e),Ai(t+"Capture",e)}function Ai(t,e){for(Ks[t]=e,t=0;t<e.length;t++)ov.add(e[t])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=Object.prototype.hasOwnProperty,mS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,em={},tm={};function gS(t){return eh.call(tm,t)?!0:eh.call(em,t)?!1:mS.test(t)?tm[t]=!0:(em[t]=!0,!1)}function yS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vS(t,e,n,r){if(e===null||typeof e>"u"||yS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Md=/[\-:]([a-z])/g;function Ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Md,Ud);$e[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Md,Ud);$e[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Md,Ud);$e[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vS(e,n,i,r)&&(n=null),r||i===null?gS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _n=sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),av=Symbol.for("react.provider"),lv=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),nh=Symbol.for("react.suspense"),rh=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),uv=Symbol.for("react.offscreen"),nm=Symbol.iterator;function ls(t){return t===null||typeof t!="object"?null:(t=nm&&t[nm]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,Zu;function ws(t){if(Zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||""}return`
`+Zu+t}var ec=!1;function tc(t,e){if(!t||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ws(t):""}function wS(t){switch(t.tag){case 5:return ws(t.type);case 16:return ws("Lazy");case 13:return ws("Suspense");case 19:return ws("SuspenseList");case 0:case 2:case 15:return t=tc(t.type,!1),t;case 11:return t=tc(t.type.render,!1),t;case 1:return t=tc(t.type,!0),t;default:return""}}function ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ni:return"Fragment";case ti:return"Portal";case th:return"Profiler";case bd:return"StrictMode";case nh:return"Suspense";case rh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lv:return(t.displayName||"Context")+".Consumer";case av:return(t._context.displayName||"Context")+".Provider";case Fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jd:return e=t.displayName||null,e!==null?e:ih(t.type)||"Memo";case Tn:e=t._payload,t=t._init;try{return ih(t(e))}catch{}}return null}function ES(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(e);case 8:return e===bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _S(t){var e=cv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oa(t){t._valueTracker||(t._valueTracker=_S(t))}function hv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sh(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dv(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function oh(t,e){dv(t,e);var n=Jn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ah(t,e.type,n):e.hasOwnProperty("defaultValue")&&ah(t,e.type,Jn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ah(t,e,n){(e!=="number"||Za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Es=Array.isArray;function mi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Es(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jn(n)}}function fv(t,e){var n=Jn(e.value),r=Jn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function om(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var aa,mv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(aa=aa||document.createElement("div"),aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SS=["Webkit","ms","Moz","O"];Object.keys(xs).forEach(function(t){SS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xs[e]=xs[t]})});function gv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xs.hasOwnProperty(t)&&xs[t]?(""+e).trim():e+"px"}function yv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var IS=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ch(t,e){if(e){if(IS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function hh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=null;function Vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fh=null,gi=null,yi=null;function am(t){if(t=No(t)){if(typeof fh!="function")throw Error(C(280));var e=t.stateNode;e&&(e=nu(e),fh(t.stateNode,t.type,e))}}function vv(t){gi?yi?yi.push(t):yi=[t]:gi=t}function wv(){if(gi){var t=gi,e=yi;if(yi=gi=null,am(t),e)for(t=0;t<e.length;t++)am(e[t])}}function Ev(t,e){return t(e)}function _v(){}var nc=!1;function Sv(t,e,n){if(nc)return t(e,n);nc=!0;try{return Ev(t,e,n)}finally{nc=!1,(gi!==null||yi!==null)&&(_v(),wv())}}function Gs(t,e){var n=t.stateNode;if(n===null)return null;var r=nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var ph=!1;if(dn)try{var us={};Object.defineProperty(us,"passive",{get:function(){ph=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{ph=!1}function TS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ds=!1,el=null,tl=!1,mh=null,kS={onError:function(t){Ds=!0,el=t}};function CS(t,e,n,r,i,s,o,a,l){Ds=!1,el=null,TS.apply(kS,arguments)}function AS(t,e,n,r,i,s,o,a,l){if(CS.apply(this,arguments),Ds){if(Ds){var u=el;Ds=!1,el=null}else throw Error(C(198));tl||(tl=!0,mh=u)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Iv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lm(t){if(Hr(t)!==t)throw Error(C(188))}function RS(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return lm(i),t;if(s===r)return lm(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Tv(t){return t=RS(t),t!==null?kv(t):null}function kv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kv(t);if(e!==null)return e;t=t.sibling}return null}var Cv=vt.unstable_scheduleCallback,um=vt.unstable_cancelCallback,NS=vt.unstable_shouldYield,xS=vt.unstable_requestPaint,ve=vt.unstable_now,DS=vt.unstable_getCurrentPriorityLevel,Bd=vt.unstable_ImmediatePriority,Av=vt.unstable_UserBlockingPriority,nl=vt.unstable_NormalPriority,PS=vt.unstable_LowPriority,Rv=vt.unstable_IdlePriority,Jl=null,Gt=null;function OS(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:US,LS=Math.log,MS=Math.LN2;function US(t){return t>>>=0,t===0?32:31-(LS(t)/MS|0)|0}var la=64,ua=4194304;function _s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_s(a):(s&=o,s!==0&&(r=_s(s)))}else o=n&~i,o!==0?r=_s(o):s!==0&&(r=_s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Lt(e),i=1<<n,r|=t[n],e&=~i;return r}function $S(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Lt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=$S(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nv(){var t=la;return la<<=1,!(la&4194240)&&(la=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Lt(e),t[e]=n}function FS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Z=0;function xv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dv,Hd,Pv,Ov,Lv,yh=!1,ca=[],bn=null,Fn=null,jn=null,Qs=new Map,Ys=new Map,Cn=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cm(t,e){switch(t){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=No(e),e!==null&&Hd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function VS(t,e,n,r,i){switch(e){case"focusin":return bn=cs(bn,t,e,n,r,i),!0;case"dragenter":return Fn=cs(Fn,t,e,n,r,i),!0;case"mouseover":return jn=cs(jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qs.set(s,cs(Qs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ys.set(s,cs(Ys.get(s)||null,t,e,n,r,i)),!0}return!1}function Mv(t){var e=yr(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=Iv(n),e!==null){t.blockedOn=e,Lv(t.priority,function(){Pv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dh=r,n.target.dispatchEvent(r),dh=null}else return e=No(n),e!==null&&Hd(e),t.blockedOn=n,!1;e.shift()}return!0}function hm(t,e,n){Ma(t)&&n.delete(e)}function BS(){yh=!1,bn!==null&&Ma(bn)&&(bn=null),Fn!==null&&Ma(Fn)&&(Fn=null),jn!==null&&Ma(jn)&&(jn=null),Qs.forEach(hm),Ys.forEach(hm)}function hs(t,e){t.blockedOn===e&&(t.blockedOn=null,yh||(yh=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,BS)))}function Xs(t){function e(i){return hs(i,t)}if(0<ca.length){hs(ca[0],t);for(var n=1;n<ca.length;n++){var r=ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bn!==null&&hs(bn,t),Fn!==null&&hs(Fn,t),jn!==null&&hs(jn,t),Qs.forEach(e),Ys.forEach(e),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)Mv(n),n.blockedOn===null&&Cn.shift()}var vi=_n.ReactCurrentBatchConfig,il=!0;function zS(t,e,n,r){var i=Z,s=vi.transition;vi.transition=null;try{Z=1,Wd(t,e,n,r)}finally{Z=i,vi.transition=s}}function HS(t,e,n,r){var i=Z,s=vi.transition;vi.transition=null;try{Z=4,Wd(t,e,n,r)}finally{Z=i,vi.transition=s}}function Wd(t,e,n,r){if(il){var i=vh(t,e,n,r);if(i===null)fc(t,e,r,sl,n),cm(t,r);else if(VS(i,t,e,n,r))r.stopPropagation();else if(cm(t,r),e&4&&-1<jS.indexOf(t)){for(;i!==null;){var s=No(i);if(s!==null&&Dv(s),s=vh(t,e,n,r),s===null&&fc(t,e,r,sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fc(t,e,r,null,n)}}var sl=null;function vh(t,e,n,r){if(sl=null,t=Vd(r),t=yr(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Iv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function Uv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DS()){case Bd:return 1;case Av:return 4;case nl:case PS:return 16;case Rv:return 536870912;default:return 16}default:return 16}}var On=null,Kd=null,Ua=null;function $v(){if(Ua)return Ua;var t,e=Kd,n=e.length,r,i="value"in On?On.value:On.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ua=i.slice(t,1<r?1-r:void 0)}function $a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function dm(){return!1}function _t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ha:dm,this.isPropagationStopped=dm,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),e}var Ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=_t(Ki),Ro=de({},Ki,{view:0,detail:0}),WS=_t(Ro),ic,sc,ds,Zl=de({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ds&&(ds&&t.type==="mousemove"?(ic=t.screenX-ds.screenX,sc=t.screenY-ds.screenY):sc=ic=0,ds=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),fm=_t(Zl),KS=de({},Zl,{dataTransfer:0}),qS=_t(KS),GS=de({},Ro,{relatedTarget:0}),oc=_t(GS),QS=de({},Ki,{animationName:0,elapsedTime:0,pseudoElement:0}),YS=_t(QS),XS=de({},Ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JS=_t(XS),ZS=de({},Ki,{data:0}),pm=_t(ZS),eI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nI[t])?!!e[t]:!1}function Gd(){return rI}var iI=de({},Ro,{key:function(t){if(t.key){var e=eI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gd,charCode:function(t){return t.type==="keypress"?$a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sI=_t(iI),oI=de({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=_t(oI),aI=de({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gd}),lI=_t(aI),uI=de({},Ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),cI=_t(uI),hI=de({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dI=_t(hI),fI=[9,13,27,32],Qd=dn&&"CompositionEvent"in window,Ps=null;dn&&"documentMode"in document&&(Ps=document.documentMode);var pI=dn&&"TextEvent"in window&&!Ps,bv=dn&&(!Qd||Ps&&8<Ps&&11>=Ps),gm=String.fromCharCode(32),ym=!1;function Fv(t,e){switch(t){case"keyup":return fI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ri=!1;function mI(t,e){switch(t){case"compositionend":return jv(e);case"keypress":return e.which!==32?null:(ym=!0,gm);case"textInput":return t=e.data,t===gm&&ym?null:t;default:return null}}function gI(t,e){if(ri)return t==="compositionend"||!Qd&&Fv(t,e)?(t=$v(),Ua=Kd=On=null,ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bv&&e.locale!=="ko"?null:e.data;default:return null}}var yI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yI[t.type]:e==="textarea"}function Vv(t,e,n,r){vv(r),e=ol(e,"onChange"),0<e.length&&(n=new qd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Os=null,Js=null;function vI(t){Jv(t,0)}function eu(t){var e=oi(t);if(hv(e))return t}function wI(t,e){if(t==="change")return e}var Bv=!1;if(dn){var ac;if(dn){var lc="oninput"in document;if(!lc){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),lc=typeof wm.oninput=="function"}ac=lc}else ac=!1;Bv=ac&&(!document.documentMode||9<document.documentMode)}function Em(){Os&&(Os.detachEvent("onpropertychange",zv),Js=Os=null)}function zv(t){if(t.propertyName==="value"&&eu(Js)){var e=[];Vv(e,Js,t,Vd(t)),Sv(vI,e)}}function EI(t,e,n){t==="focusin"?(Em(),Os=e,Js=n,Os.attachEvent("onpropertychange",zv)):t==="focusout"&&Em()}function _I(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(Js)}function SI(t,e){if(t==="click")return eu(e)}function II(t,e){if(t==="input"||t==="change")return eu(e)}function TI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:TI;function Zs(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!eh.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,e){var n=_m(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_m(n)}}function Hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wv(){for(var t=window,e=Za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Za(t.document)}return e}function Yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kI(t){var e=Wv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hv(n.ownerDocument.documentElement,n)){if(r!==null&&Yd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sm(n,s);var o=Sm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CI=dn&&"documentMode"in document&&11>=document.documentMode,ii=null,wh=null,Ls=null,Eh=!1;function Im(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eh||ii==null||ii!==Za(r)||(r=ii,"selectionStart"in r&&Yd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ls&&Zs(Ls,r)||(Ls=r,r=ol(wh,"onSelect"),0<r.length&&(e=new qd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ii)))}function da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var si={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},uc={},Kv={};dn&&(Kv=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function tu(t){if(uc[t])return uc[t];if(!si[t])return t;var e=si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kv)return uc[t]=e[n];return t}var qv=tu("animationend"),Gv=tu("animationiteration"),Qv=tu("animationstart"),Yv=tu("transitionend"),Xv=new Map,Tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){Xv.set(t,e),zr(e,[t])}for(var cc=0;cc<Tm.length;cc++){var hc=Tm[cc],AI=hc.toLowerCase(),RI=hc[0].toUpperCase()+hc.slice(1);ir(AI,"on"+RI)}ir(qv,"onAnimationEnd");ir(Gv,"onAnimationIteration");ir(Qv,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(Yv,"onTransitionEnd");Ai("onMouseEnter",["mouseout","mouseover"]);Ai("onMouseLeave",["mouseout","mouseover"]);Ai("onPointerEnter",["pointerout","pointerover"]);Ai("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ss));function km(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,AS(r,e,void 0,t),t.currentTarget=null}function Jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;km(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;km(i,a,u),s=l}}}if(tl)throw t=mh,tl=!1,mh=null,t}function ne(t,e){var n=e[kh];n===void 0&&(n=e[kh]=new Set);var r=t+"__bubble";n.has(r)||(Zv(e,t,2,!1),n.add(r))}function dc(t,e,n){var r=0;e&&(r|=4),Zv(n,t,r,e)}var fa="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[fa]){t[fa]=!0,ov.forEach(function(n){n!=="selectionchange"&&(NI.has(n)||dc(n,!1,t),dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fa]||(e[fa]=!0,dc("selectionchange",!1,e))}}function Zv(t,e,n,r){switch(Uv(e)){case 1:var i=zS;break;case 4:i=HS;break;default:i=Wd}n=i.bind(null,e,n,t),i=void 0,!ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=yr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Sv(function(){var u=s,c=Vd(n),h=[];e:{var d=Xv.get(t);if(d!==void 0){var y=qd,w=t;switch(t){case"keypress":if($a(n)===0)break e;case"keydown":case"keyup":y=sI;break;case"focusin":w="focus",y=oc;break;case"focusout":w="blur",y=oc;break;case"beforeblur":case"afterblur":y=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=qS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=lI;break;case qv:case Gv:case Qv:y=YS;break;case Yv:y=cI;break;case"scroll":y=WS;break;case"wheel":y=dI;break;case"copy":case"cut":case"paste":y=JS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=mm}var v=(e&4)!==0,_=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=Gs(f,p),E!=null&&v.push(to(f,E,g)))),_)break;f=f.return}0<v.length&&(d=new y(d,w,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==dh&&(w=n.relatedTarget||n.fromElement)&&(yr(w)||w[fn]))break e;if((y||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?yr(w):null,w!==null&&(_=Hr(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(v=fm,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=mm,E="onPointerLeave",p="onPointerEnter",f="pointer"),_=y==null?d:oi(y),g=w==null?d:oi(w),d=new v(E,f+"leave",y,n,c),d.target=_,d.relatedTarget=g,E=null,yr(c)===u&&(v=new v(p,f+"enter",w,n,c),v.target=g,v.relatedTarget=_,E=v),_=E,y&&w)t:{for(v=y,p=w,f=0,g=v;g;g=Xr(g))f++;for(g=0,E=p;E;E=Xr(E))g++;for(;0<f-g;)v=Xr(v),f--;for(;0<g-f;)p=Xr(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Xr(v),p=Xr(p)}v=null}else v=null;y!==null&&Cm(h,d,y,v,!1),w!==null&&_!==null&&Cm(h,_,w,v,!0)}}e:{if(d=u?oi(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var k=wI;else if(vm(d))if(Bv)k=II;else{k=_I;var T=EI}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=SI);if(k&&(k=k(t,u))){Vv(h,k,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&ah(d,"number",d.value)}switch(T=u?oi(u):window,t){case"focusin":(vm(T)||T.contentEditable==="true")&&(ii=T,wh=u,Ls=null);break;case"focusout":Ls=wh=ii=null;break;case"mousedown":Eh=!0;break;case"contextmenu":case"mouseup":case"dragend":Eh=!1,Im(h,n,c);break;case"selectionchange":if(CI)break;case"keydown":case"keyup":Im(h,n,c)}var R;if(Qd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ri?Fv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(bv&&n.locale!=="ko"&&(ri||N!=="onCompositionStart"?N==="onCompositionEnd"&&ri&&(R=$v()):(On=c,Kd="value"in On?On.value:On.textContent,ri=!0)),T=ol(u,N),0<T.length&&(N=new pm(N,t,null,n,c),h.push({event:N,listeners:T}),R?N.data=R:(R=jv(n),R!==null&&(N.data=R)))),(R=pI?mI(t,n):gI(t,n))&&(u=ol(u,"onBeforeInput"),0<u.length&&(c=new pm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}Jv(h,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gs(t,n),s!=null&&r.unshift(to(t,s,i)),s=Gs(t,e),s!=null&&r.push(to(t,s,i))),t=t.return}return r}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Gs(n,s),l!=null&&o.unshift(to(n,l,a))):i||(l=Gs(n,s),l!=null&&o.push(to(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xI=/\r\n?/g,DI=/\u0000|\uFFFD/g;function Am(t){return(typeof t=="string"?t:""+t).replace(xI,`
`).replace(DI,"")}function pa(t,e,n){if(e=Am(e),Am(t)!==e&&n)throw Error(C(425))}function al(){}var _h=null,Sh=null;function Ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Th=typeof setTimeout=="function"?setTimeout:void 0,PI=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,OI=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(t){return Rm.resolve(null).then(t).catch(LI)}:Th;function LI(t){setTimeout(function(){throw t})}function pc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xs(e)}function Vn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Ht="__reactFiber$"+qi,no="__reactProps$"+qi,fn="__reactContainer$"+qi,kh="__reactEvents$"+qi,MI="__reactListeners$"+qi,UI="__reactHandles$"+qi;function yr(t){var e=t[Ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fn]||n[Ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nm(t);t!==null;){if(n=t[Ht])return n;t=Nm(t)}return e}t=n,n=t.parentNode}return null}function No(t){return t=t[Ht]||t[fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function nu(t){return t[no]||null}var Ch=[],ai=-1;function sr(t){return{current:t}}function ie(t){0>ai||(t.current=Ch[ai],Ch[ai]=null,ai--)}function te(t,e){ai++,Ch[ai]=t.current,t.current=e}var Zn={},Ye=sr(Zn),ut=sr(!1),xr=Zn;function Ri(t,e){var n=t.type.contextTypes;if(!n)return Zn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ct(t){return t=t.childContextTypes,t!=null}function ll(){ie(ut),ie(Ye)}function xm(t,e,n){if(Ye.current!==Zn)throw Error(C(168));te(Ye,e),te(ut,n)}function e0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,ES(t)||"Unknown",i));return de({},n,r)}function ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zn,xr=Ye.current,te(Ye,t),te(ut,ut.current),!0}function Dm(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=e0(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,ie(ut),ie(Ye),te(Ye,t)):ie(ut),te(ut,n)}var rn=null,ru=!1,mc=!1;function t0(t){rn===null?rn=[t]:rn.push(t)}function $I(t){ru=!0,t0(t)}function or(){if(!mc&&rn!==null){mc=!0;var t=0,e=Z;try{var n=rn;for(Z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rn=null,ru=!1}catch(i){throw rn!==null&&(rn=rn.slice(t+1)),Cv(Bd,or),i}finally{Z=e,mc=!1}}return null}var li=[],ui=0,cl=null,hl=0,St=[],It=0,Dr=null,sn=1,on="";function fr(t,e){li[ui++]=hl,li[ui++]=cl,cl=t,hl=e}function n0(t,e,n){St[It++]=sn,St[It++]=on,St[It++]=Dr,Dr=t;var r=sn;t=on;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var s=32-Lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sn=1<<32-Lt(e)+i|n<<i|r,on=s+t}else sn=1<<s|n<<i|r,on=t}function Xd(t){t.return!==null&&(fr(t,1),n0(t,1,0))}function Jd(t){for(;t===cl;)cl=li[--ui],li[ui]=null,hl=li[--ui],li[ui]=null;for(;t===Dr;)Dr=St[--It],St[It]=null,on=St[--It],St[It]=null,sn=St[--It],St[It]=null}var yt=null,pt=null,ae=!1,Pt=null;function r0(t,e){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,pt=Vn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:sn,overflow:on}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,pt=null,!0):!1;default:return!1}}function Ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rh(t){if(ae){var e=pt;if(e){var n=e;if(!Pm(t,e)){if(Ah(t))throw Error(C(418));e=Vn(n.nextSibling);var r=yt;e&&Pm(t,e)?r0(r,n):(t.flags=t.flags&-4097|2,ae=!1,yt=t)}}else{if(Ah(t))throw Error(C(418));t.flags=t.flags&-4097|2,ae=!1,yt=t}}}function Om(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function ma(t){if(t!==yt)return!1;if(!ae)return Om(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ih(t.type,t.memoizedProps)),e&&(e=pt)){if(Ah(t))throw i0(),Error(C(418));for(;e;)r0(t,e),e=Vn(e.nextSibling)}if(Om(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pt=Vn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pt=null}}else pt=yt?Vn(t.stateNode.nextSibling):null;return!0}function i0(){for(var t=pt;t;)t=Vn(t.nextSibling)}function Ni(){pt=yt=null,ae=!1}function Zd(t){Pt===null?Pt=[t]:Pt.push(t)}var bI=_n.ReactCurrentBatchConfig;function xt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var dl=sr(null),fl=null,ci=null,ef=null;function tf(){ef=ci=fl=null}function nf(t){var e=dl.current;ie(dl),t._currentValue=e}function Nh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function wi(t,e){fl=t,ef=ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(lt=!0),t.firstContext=null)}function At(t){var e=t._currentValue;if(ef!==t)if(t={context:t,memoizedValue:e,next:null},ci===null){if(fl===null)throw Error(C(308));ci=t,fl.dependencies={lanes:0,firstContext:t}}else ci=ci.next=t;return e}var vr=null;function rf(t){vr===null?vr=[t]:vr.push(t)}function s0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rf(e)):(n.next=i.next,i.next=n),e.interleaved=n,pn(t,r)}function pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kn=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,pn(t,n)}return i=r.interleaved,i===null?(e.next=e,rf(r)):(e.next=i.next,i.next=e),r.interleaved=e,pn(t,n)}function ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zd(t,n)}}function Lm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,r){var i=t.updateQueue;kn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,y=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,v=a;switch(d=e,y=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(y,h,d);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,d=typeof w=="function"?w.call(y,h,d):w,d==null)break e;h=de({},h,d);break e;case 2:kn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else y={eventTime:y,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=h):c=c.next=y,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Or|=o,t.lanes=o,t.memoizedState=h}}function Mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var a0=new sv.Component().refs;function xh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Hn(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Bn(t,s,i),e!==null&&(Mt(e,t,i,r),ba(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Hn(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bn(t,s,i),e!==null&&(Mt(e,t,i,r),ba(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=Hn(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bn(t,i,r),e!==null&&(Mt(e,t,r,n),ba(e,t,r))}};function Um(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zs(n,r)||!Zs(i,s):!0}function l0(t,e,n){var r=!1,i=Zn,s=e.contextType;return typeof s=="object"&&s!==null?s=At(s):(i=ct(e)?xr:Ye.current,r=e.contextTypes,s=(r=r!=null)?Ri(t,i):Zn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $m(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=a0,sf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=At(s):(s=ct(e)?xr:Ye.current,i.context=Ri(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&iu.enqueueReplaceState(i,i.state,null),pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===a0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function ga(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bm(t){var e=t._init;return e(t._payload)}function u0(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Wn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,E){return f===null||f.tag!==6?(f=Sc(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,E){var k=g.type;return k===ni?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tn&&bm(k)===f.type)?(E=i(f,g.props),E.ref=fs(p,f,g),E.return=p,E):(E=Ha(g.type,g.key,g.props,null,p.mode,E),E.ref=fs(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ic(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,k){return f===null||f.tag!==7?(f=Tr(g,p.mode,E,k),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Sc(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case sa:return g=Ha(f.type,f.key,f.props,null,p.mode,g),g.ref=fs(p,null,f),g.return=p,g;case ti:return f=Ic(f,p.mode,g),f.return=p,f;case Tn:var E=f._init;return h(p,E(f._payload),g)}if(Es(f)||ls(f))return f=Tr(f,p.mode,g,null),f.return=p,f;ga(p,f)}return null}function d(p,f,g,E){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sa:return g.key===k?l(p,f,g,E):null;case ti:return g.key===k?u(p,f,g,E):null;case Tn:return k=g._init,d(p,f,k(g._payload),E)}if(Es(g)||ls(g))return k!==null?null:c(p,f,g,E,null);ga(p,g)}return null}function y(p,f,g,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,a(f,p,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case sa:return p=p.get(E.key===null?g:E.key)||null,l(f,p,E,k);case ti:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,k);case Tn:var T=E._init;return y(p,f,g,T(E._payload),k)}if(Es(E)||ls(E))return p=p.get(g)||null,c(f,p,E,k,null);ga(f,E)}return null}function w(p,f,g,E){for(var k=null,T=null,R=f,N=f=0,W=null;R!==null&&N<g.length;N++){R.index>N?(W=R,R=null):W=R.sibling;var $=d(p,R,g[N],E);if($===null){R===null&&(R=W);break}t&&R&&$.alternate===null&&e(p,R),f=s($,f,N),T===null?k=$:T.sibling=$,T=$,R=W}if(N===g.length)return n(p,R),ae&&fr(p,N),k;if(R===null){for(;N<g.length;N++)R=h(p,g[N],E),R!==null&&(f=s(R,f,N),T===null?k=R:T.sibling=R,T=R);return ae&&fr(p,N),k}for(R=r(p,R);N<g.length;N++)W=y(R,p,N,g[N],E),W!==null&&(t&&W.alternate!==null&&R.delete(W.key===null?N:W.key),f=s(W,f,N),T===null?k=W:T.sibling=W,T=W);return t&&R.forEach(function(Y){return e(p,Y)}),ae&&fr(p,N),k}function v(p,f,g,E){var k=ls(g);if(typeof k!="function")throw Error(C(150));if(g=k.call(g),g==null)throw Error(C(151));for(var T=k=null,R=f,N=f=0,W=null,$=g.next();R!==null&&!$.done;N++,$=g.next()){R.index>N?(W=R,R=null):W=R.sibling;var Y=d(p,R,$.value,E);if(Y===null){R===null&&(R=W);break}t&&R&&Y.alternate===null&&e(p,R),f=s(Y,f,N),T===null?k=Y:T.sibling=Y,T=Y,R=W}if($.done)return n(p,R),ae&&fr(p,N),k;if(R===null){for(;!$.done;N++,$=g.next())$=h(p,$.value,E),$!==null&&(f=s($,f,N),T===null?k=$:T.sibling=$,T=$);return ae&&fr(p,N),k}for(R=r(p,R);!$.done;N++,$=g.next())$=y(R,p,N,$.value,E),$!==null&&(t&&$.alternate!==null&&R.delete($.key===null?N:$.key),f=s($,f,N),T===null?k=$:T.sibling=$,T=$);return t&&R.forEach(function(Ze){return e(p,Ze)}),ae&&fr(p,N),k}function _(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===ni&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case sa:e:{for(var k=g.key,T=f;T!==null;){if(T.key===k){if(k=g.type,k===ni){if(T.tag===7){n(p,T.sibling),f=i(T,g.props.children),f.return=p,p=f;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tn&&bm(k)===T.type){n(p,T.sibling),f=i(T,g.props),f.ref=fs(p,T,g),f.return=p,p=f;break e}n(p,T);break}else e(p,T);T=T.sibling}g.type===ni?(f=Tr(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=Ha(g.type,g.key,g.props,null,p.mode,E),E.ref=fs(p,f,g),E.return=p,p=E)}return o(p);case ti:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Ic(g,p.mode,E),f.return=p,p=f}return o(p);case Tn:return T=g._init,_(p,f,T(g._payload),E)}if(Es(g))return w(p,f,g,E);if(ls(g))return v(p,f,g,E);ga(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Sc(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return _}var xi=u0(!0),c0=u0(!1),xo={},Qt=sr(xo),ro=sr(xo),io=sr(xo);function wr(t){if(t===xo)throw Error(C(174));return t}function of(t,e){switch(te(io,e),te(ro,t),te(Qt,xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uh(e,t)}ie(Qt),te(Qt,e)}function Di(){ie(Qt),ie(ro),ie(io)}function h0(t){wr(io.current);var e=wr(Qt.current),n=uh(e,t.type);e!==n&&(te(ro,t),te(Qt,n))}function af(t){ro.current===t&&(ie(Qt),ie(ro))}var ce=sr(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gc=[];function lf(){for(var t=0;t<gc.length;t++)gc[t]._workInProgressVersionPrimary=null;gc.length=0}var Fa=_n.ReactCurrentDispatcher,yc=_n.ReactCurrentBatchConfig,Pr=0,he=null,Te=null,Re=null,gl=!1,Ms=!1,so=0,FI=0;function be(){throw Error(C(321))}function uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function cf(t,e,n,r,i,s){if(Pr=s,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fa.current=t===null||t.memoizedState===null?zI:HI,t=n(r,i),Ms){s=0;do{if(Ms=!1,so=0,25<=s)throw Error(C(301));s+=1,Re=Te=null,e.updateQueue=null,Fa.current=WI,t=n(r,i)}while(Ms)}if(Fa.current=yl,e=Te!==null&&Te.next!==null,Pr=0,Re=Te=he=null,gl=!1,e)throw Error(C(300));return t}function hf(){var t=so!==0;return so=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?he.memoizedState=Re=t:Re=Re.next=t,Re}function Rt(){if(Te===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var e=Re===null?he.memoizedState:Re.next;if(e!==null)Re=e,Te=t;else{if(t===null)throw Error(C(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Re===null?he.memoizedState=Re=t:Re=Re.next=t}return Re}function oo(t,e){return typeof e=="function"?e(t):e}function vc(t){var e=Rt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,he.lanes|=c,Or|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,$t(r,e.memoizedState)||(lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,he.lanes|=s,Or|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=Rt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function d0(){}function f0(t,e){var n=he,r=Rt(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,lt=!0),r=r.queue,df(g0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,ao(9,m0.bind(null,n,r,i,e),void 0,null),Ne===null)throw Error(C(349));Pr&30||p0(n,e,i)}return i}function p0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m0(t,e,n,r){e.value=n,e.getSnapshot=r,y0(e)&&v0(t)}function g0(t,e,n){return n(function(){y0(e)&&v0(t)})}function y0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function v0(t){var e=pn(t,1);e!==null&&Mt(e,t,1,-1)}function Fm(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},e.queue=t,t=t.dispatch=BI.bind(null,he,t),[e.memoizedState,t]}function ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function w0(){return Rt().memoizedState}function ja(t,e,n,r){var i=zt();he.flags|=t,i.memoizedState=ao(1|e,n,void 0,r===void 0?null:r)}function su(t,e,n,r){var i=Rt();r=r===void 0?null:r;var s=void 0;if(Te!==null){var o=Te.memoizedState;if(s=o.destroy,r!==null&&uf(r,o.deps)){i.memoizedState=ao(e,n,s,r);return}}he.flags|=t,i.memoizedState=ao(1|e,n,s,r)}function jm(t,e){return ja(8390656,8,t,e)}function df(t,e){return su(2048,8,t,e)}function E0(t,e){return su(4,2,t,e)}function _0(t,e){return su(4,4,t,e)}function S0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function I0(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,S0.bind(null,e,t),n)}function ff(){}function T0(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function k0(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function C0(t,e,n){return Pr&21?($t(n,e)||(n=Nv(),he.lanes|=n,Or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=n)}function jI(t,e){var n=Z;Z=n!==0&&4>n?n:4,t(!0);var r=yc.transition;yc.transition={};try{t(!1),e()}finally{Z=n,yc.transition=r}}function A0(){return Rt().memoizedState}function VI(t,e,n){var r=Hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},R0(t))N0(e,n);else if(n=s0(t,e,n,r),n!==null){var i=rt();Mt(n,t,r,i),x0(n,e,r)}}function BI(t,e,n){var r=Hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(R0(t))N0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,$t(a,o)){var l=e.interleaved;l===null?(i.next=i,rf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=s0(t,e,i,r),n!==null&&(i=rt(),Mt(n,t,r,i),x0(n,e,r))}}function R0(t){var e=t.alternate;return t===he||e!==null&&e===he}function N0(t,e){Ms=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zd(t,n)}}var yl={readContext:At,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},zI={readContext:At,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:At,useEffect:jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ja(4194308,4,S0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return ja(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=VI.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:Fm,useDebugValue:ff,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=Fm(!1),e=t[0];return t=jI.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=he,i=zt();if(ae){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Ne===null)throw Error(C(349));Pr&30||p0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jm(g0.bind(null,r,s,t),[t]),r.flags|=2048,ao(9,m0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zt(),e=Ne.identifierPrefix;if(ae){var n=on,r=sn;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=so++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HI={readContext:At,useCallback:T0,useContext:At,useEffect:df,useImperativeHandle:I0,useInsertionEffect:E0,useLayoutEffect:_0,useMemo:k0,useReducer:vc,useRef:w0,useState:function(){return vc(oo)},useDebugValue:ff,useDeferredValue:function(t){var e=Rt();return C0(e,Te.memoizedState,t)},useTransition:function(){var t=vc(oo)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:f0,useId:A0,unstable_isNewReconciler:!1},WI={readContext:At,useCallback:T0,useContext:At,useEffect:df,useImperativeHandle:I0,useInsertionEffect:E0,useLayoutEffect:_0,useMemo:k0,useReducer:wc,useRef:w0,useState:function(){return wc(oo)},useDebugValue:ff,useDeferredValue:function(t){var e=Rt();return Te===null?e.memoizedState=t:C0(e,Te.memoizedState,t)},useTransition:function(){var t=wc(oo)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:f0,useId:A0,unstable_isNewReconciler:!1};function Pi(t,e){try{var n="",r=e;do n+=wS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KI=typeof WeakMap=="function"?WeakMap:Map;function D0(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wl||(wl=!0,Bh=r),Ph(t,e)},n}function P0(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ph(t,e),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new KI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=oT.bind(null,t,e,n),e.then(t,t))}function Bm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,Bn(n,e,1))),n.lanes|=1),t)}var qI=_n.ReactCurrentOwner,lt=!1;function tt(t,e,n,r){e.child=t===null?c0(e,null,n,r):xi(e,t.child,n,r)}function Hm(t,e,n,r,i){n=n.render;var s=e.ref;return wi(e,i),r=cf(t,e,n,r,s,i),n=hf(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mn(t,e,i)):(ae&&n&&Xd(e),e.flags|=1,tt(t,e,r,i),e.child)}function Wm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_f(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,O0(t,e,s,r,i)):(t=Ha(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(o,r)&&t.ref===e.ref)return mn(t,e,i)}return e.flags|=1,t=Wn(s,r),t.ref=e.ref,t.return=e,e.child=t}function O0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Zs(s,r)&&t.ref===e.ref)if(lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(lt=!0);else return e.lanes=t.lanes,mn(t,e,i)}return Oh(t,e,n,r,i)}function L0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(di,ft),ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(di,ft),ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(di,ft),ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,te(di,ft),ft|=r;return tt(t,e,i,n),e.child}function M0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Oh(t,e,n,r,i){var s=ct(n)?xr:Ye.current;return s=Ri(e,s),wi(e,i),n=cf(t,e,n,r,s,i),r=hf(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mn(t,e,i)):(ae&&r&&Xd(e),e.flags|=1,tt(t,e,n,i),e.child)}function Km(t,e,n,r,i){if(ct(n)){var s=!0;ul(e)}else s=!1;if(wi(e,i),e.stateNode===null)Va(t,e),l0(e,n,r),Dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=At(u):(u=ct(n)?xr:Ye.current,u=Ri(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&$m(e,o,r,u),kn=!1;var d=e.memoizedState;o.state=d,pl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ut.current||kn?(typeof c=="function"&&(xh(e,n,c,r),l=e.memoizedState),(a=kn||Um(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,o0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:xt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=At(l):(l=ct(n)?xr:Ye.current,l=Ri(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&$m(e,o,r,l),kn=!1,d=e.memoizedState,o.state=d,pl(e,r,o,i);var w=e.memoizedState;a!==h||d!==w||ut.current||kn?(typeof y=="function"&&(xh(e,n,y,r),w=e.memoizedState),(u=kn||Um(e,n,u,r,d,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Lh(t,e,n,r,s,i)}function Lh(t,e,n,r,i,s){M0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Dm(e,n,!1),mn(t,e,s);r=e.stateNode,qI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xi(e,t.child,null,s),e.child=xi(e,null,a,s)):tt(t,e,a,s),e.memoizedState=r.state,i&&Dm(e,n,!0),e.child}function U0(t){var e=t.stateNode;e.pendingContext?xm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xm(t,e.context,!1),of(t,e.containerInfo)}function qm(t,e,n,r,i){return Ni(),Zd(i),e.flags|=256,tt(t,e,n,r),e.child}var Mh={dehydrated:null,treeContext:null,retryLane:0};function Uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function $0(t,e,n){var r=e.pendingProps,i=ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),te(ce,i&1),t===null)return Rh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lu(o,r,0,null),t=Tr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uh(n),e.memoizedState=Mh,t):pf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return GI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wn(a,s):(s=Tr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mh,r}return s=t.child,t=s.sibling,r=Wn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pf(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ya(t,e,n,r){return r!==null&&Zd(r),xi(e,t.child,null,n),t=pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ec(Error(C(422))),ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=lu({mode:"visible",children:r.children},i,0,null),s=Tr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xi(e,t.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=Mh,s);if(!(e.mode&1))return ya(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Ec(s,r,void 0),ya(t,e,o,r)}if(a=(o&t.childLanes)!==0,lt||a){if(r=Ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,pn(t,i),Mt(r,t,i,-1))}return Ef(),r=Ec(Error(C(421))),ya(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=aT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,pt=Vn(i.nextSibling),yt=e,ae=!0,Pt=null,t!==null&&(St[It++]=sn,St[It++]=on,St[It++]=Dr,sn=t.id,on=t.overflow,Dr=e),e=pf(e,r.children),e.flags|=4096,e)}function Gm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nh(t.return,e,n)}function _c(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function b0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gm(t,n,e);else if(t.tag===19)Gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_c(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ml(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_c(e,!0,n,null,s);break;case"together":_c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Va(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QI(t,e,n){switch(e.tag){case 3:U0(e),Ni();break;case 5:h0(e);break;case 1:ct(e.type)&&ul(e);break;case 4:of(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;te(dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(ce,ce.current&1),e.flags|=128,null):n&e.child.childLanes?$0(t,e,n):(te(ce,ce.current&1),t=mn(t,e,n),t!==null?t.sibling:null);te(ce,ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return b0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ce,ce.current),r)break;return null;case 22:case 23:return e.lanes=0,L0(t,e,n)}return mn(t,e,n)}var F0,$h,j0,V0;F0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$h=function(){};j0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wr(Qt.current);var s=null;switch(n){case"input":i=sh(t,i),r=sh(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=lh(t,i),r=lh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=al)}ch(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ks.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};V0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ps(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Fe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function YI(t,e,n){var r=e.pendingProps;switch(Jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(e),null;case 1:return ct(e.type)&&ll(),Fe(e),null;case 3:return r=e.stateNode,Di(),ie(ut),ie(Ye),lf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pt!==null&&(Wh(Pt),Pt=null))),$h(t,e),Fe(e),null;case 5:af(e);var i=wr(io.current);if(n=e.type,t!==null&&e.stateNode!=null)j0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Fe(e),null}if(t=wr(Qt.current),ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ht]=e,r[no]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Ss.length;i++)ne(Ss[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":rm(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":sm(r,s),ne("invalid",r)}ch(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&pa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pa(r.textContent,a,t),i=["children",""+a]):Ks.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":oa(r),im(r,s,!0);break;case"textarea":oa(r),om(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ht]=e,t[no]=r,F0(t,e,!1,!1),e.stateNode=t;e:{switch(o=hh(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ss.length;i++)ne(Ss[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":rm(t,r),i=sh(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),ne("invalid",t);break;case"textarea":sm(t,r),i=lh(t,r),ne("invalid",t);break;default:i=r}ch(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qs(t,l):typeof l=="number"&&qs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ks.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",t):l!=null&&$d(t,s,l,o))}switch(n){case"input":oa(t),im(t,r,!1);break;case"textarea":oa(t),om(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?mi(t,!!r.multiple,s,!1):r.defaultValue!=null&&mi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Fe(e),null;case 6:if(t&&e.stateNode!=null)V0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=wr(io.current),wr(Qt.current),ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ht]=e,(s=r.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:pa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=e,e.stateNode=r}return Fe(e),null;case 13:if(ie(ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&pt!==null&&e.mode&1&&!(e.flags&128))i0(),Ni(),e.flags|=98560,s=!1;else if(s=ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Ht]=e}else Ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Fe(e),s=!1}else Pt!==null&&(Wh(Pt),Pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ce.current&1?ke===0&&(ke=3):Ef())),e.updateQueue!==null&&(e.flags|=4),Fe(e),null);case 4:return Di(),$h(t,e),t===null&&eo(e.stateNode.containerInfo),Fe(e),null;case 10:return nf(e.type._context),Fe(e),null;case 17:return ct(e.type)&&ll(),Fe(e),null;case 19:if(ie(ce),s=e.memoizedState,s===null)return Fe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ps(s,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ml(t),o!==null){for(e.flags|=128,ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&ve()>Oi&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=ml(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return Fe(e),null}else 2*ve()-s.renderingStartTime>Oi&&n!==1073741824&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ve(),e.sibling=null,n=ce.current,te(ce,r?n&1|2:n&1),e):(Fe(e),null);case 22:case 23:return wf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ft&1073741824&&(Fe(e),e.subtreeFlags&6&&(e.flags|=8192)):Fe(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function XI(t,e){switch(Jd(e),e.tag){case 1:return ct(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(),ie(ut),ie(Ye),lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return af(e),null;case 13:if(ie(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(ce),null;case 4:return Di(),null;case 10:return nf(e.type._context),null;case 22:case 23:return wf(),null;case 24:return null;default:return null}}var va=!1,ze=!1,JI=typeof WeakSet=="function"?WeakSet:Set,P=null;function hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(t,e,r)}else n.current=null}function bh(t,e,n){try{n()}catch(r){pe(t,e,r)}}var Qm=!1;function ZI(t,e){if(_h=il,t=Wv(),Yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)d=h,h=y;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(y=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:t,selectionRange:n},il=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,_=w.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:xt(e.type,v),_);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){pe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return w=Qm,Qm=!1,w}function Us(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&bh(e,n,s)}i=i.next}while(i!==r)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Fh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function B0(t){var e=t.alternate;e!==null&&(t.alternate=null,B0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ht],delete e[no],delete e[kh],delete e[MI],delete e[UI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function z0(t){return t.tag===5||t.tag===3||t.tag===4}function Ym(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||z0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}function Vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vh(t,e,n),t=t.sibling;t!==null;)Vh(t,e,n),t=t.sibling}var Pe=null,Dt=!1;function Sn(t,e,n){for(n=n.child;n!==null;)H0(t,e,n),n=n.sibling}function H0(t,e,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:ze||hi(n,e);case 6:var r=Pe,i=Dt;Pe=null,Sn(t,e,n),Pe=r,Dt=i,Pe!==null&&(Dt?(t=Pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(Dt?(t=Pe,n=n.stateNode,t.nodeType===8?pc(t.parentNode,n):t.nodeType===1&&pc(t,n),Xs(t)):pc(Pe,n.stateNode));break;case 4:r=Pe,i=Dt,Pe=n.stateNode.containerInfo,Dt=!0,Sn(t,e,n),Pe=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bh(n,e,o),i=i.next}while(i!==r)}Sn(t,e,n);break;case 1:if(!ze&&(hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,e,a)}Sn(t,e,n);break;case 21:Sn(t,e,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Sn(t,e,n),ze=r):Sn(t,e,n);break;default:Sn(t,e,n)}}function Xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JI),e.forEach(function(r){var i=lT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,Dt=!1;break e;case 3:Pe=a.stateNode.containerInfo,Dt=!0;break e;case 4:Pe=a.stateNode.containerInfo,Dt=!0;break e}a=a.return}if(Pe===null)throw Error(C(160));H0(s,o,i),Pe=null,Dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W0(e,t),e=e.sibling}function W0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nt(e,t),Bt(t),r&4){try{Us(3,t,t.return),ou(3,t)}catch(v){pe(t,t.return,v)}try{Us(5,t,t.return)}catch(v){pe(t,t.return,v)}}break;case 1:Nt(e,t),Bt(t),r&512&&n!==null&&hi(n,n.return);break;case 5:if(Nt(e,t),Bt(t),r&512&&n!==null&&hi(n,n.return),t.flags&32){var i=t.stateNode;try{qs(i,"")}catch(v){pe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dv(i,s),hh(a,o);var u=hh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?yv(i,h):c==="dangerouslySetInnerHTML"?mv(i,h):c==="children"?qs(i,h):$d(i,c,h,u)}switch(a){case"input":oh(i,s);break;case"textarea":fv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?mi(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?mi(i,!!s.multiple,s.defaultValue,!0):mi(i,!!s.multiple,s.multiple?[]:"",!1))}i[no]=s}catch(v){pe(t,t.return,v)}}break;case 6:if(Nt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){pe(t,t.return,v)}}break;case 3:if(Nt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xs(e.containerInfo)}catch(v){pe(t,t.return,v)}break;case 4:Nt(e,t),Bt(t);break;case 13:Nt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yf=ve())),r&4&&Xm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ze=(u=ze)||c,Nt(e,t),ze=u):Nt(e,t),Bt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(h=P=c;P!==null;){switch(d=P,y=d.child,d.tag){case 0:case 11:case 14:case 15:Us(4,d,d.return);break;case 1:hi(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(v){pe(r,n,v)}}break;case 5:hi(d,d.return);break;case 22:if(d.memoizedState!==null){Zm(h);continue}}y!==null?(y.return=d,P=y):Zm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gv("display",o))}catch(v){pe(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){pe(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nt(e,t),Bt(t),r&4&&Xm(t);break;case 21:break;default:Nt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(z0(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qs(i,""),r.flags&=-33);var s=Ym(t);Vh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ym(t);jh(t,a,o);break;default:throw Error(C(161))}}catch(l){pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eT(t,e,n){P=t,K0(t)}function K0(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||va;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ze;a=va;var u=ze;if(va=o,(ze=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?eg(i):l!==null?(l.return=o,P=l):eg(i);for(;s!==null;)P=s,K0(s),s=s.sibling;P=i,va=a,ze=u}Jm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Jm(t)}}function Jm(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ze||ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Xs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ze||e.flags&512&&Fh(e)}catch(d){pe(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Zm(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function eg(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(l){pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){pe(e,i,l)}}var s=e.return;try{Fh(e)}catch(l){pe(e,s,l)}break;case 5:var o=e.return;try{Fh(e)}catch(l){pe(e,o,l)}}}catch(l){pe(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var tT=Math.ceil,vl=_n.ReactCurrentDispatcher,mf=_n.ReactCurrentOwner,Ct=_n.ReactCurrentBatchConfig,Q=0,Ne=null,Se=null,Me=0,ft=0,di=sr(0),ke=0,lo=null,Or=0,au=0,gf=0,$s=null,ot=null,yf=0,Oi=1/0,nn=null,wl=!1,Bh=null,zn=null,wa=!1,Ln=null,El=0,bs=0,zh=null,Ba=-1,za=0;function rt(){return Q&6?ve():Ba!==-1?Ba:Ba=ve()}function Hn(t){return t.mode&1?Q&2&&Me!==0?Me&-Me:bI.transition!==null?(za===0&&(za=Nv()),za):(t=Z,t!==0||(t=window.event,t=t===void 0?16:Uv(t.type)),t):1}function Mt(t,e,n,r){if(50<bs)throw bs=0,zh=null,Error(C(185));Ao(t,n,r),(!(Q&2)||t!==Ne)&&(t===Ne&&(!(Q&2)&&(au|=n),ke===4&&An(t,Me)),ht(t,r),n===1&&Q===0&&!(e.mode&1)&&(Oi=ve()+500,ru&&or()))}function ht(t,e){var n=t.callbackNode;bS(t,e);var r=rl(t,t===Ne?Me:0);if(r===0)n!==null&&um(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&um(n),e===1)t.tag===0?$I(tg.bind(null,t)):t0(tg.bind(null,t)),OI(function(){!(Q&6)&&or()}),n=null;else{switch(xv(r)){case 1:n=Bd;break;case 4:n=Av;break;case 16:n=nl;break;case 536870912:n=Rv;break;default:n=nl}n=ew(n,q0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q0(t,e){if(Ba=-1,za=0,Q&6)throw Error(C(327));var n=t.callbackNode;if(Ei()&&t.callbackNode!==n)return null;var r=rl(t,t===Ne?Me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_l(t,r);else{e=r;var i=Q;Q|=2;var s=Q0();(Ne!==t||Me!==e)&&(nn=null,Oi=ve()+500,Ir(t,e));do try{iT();break}catch(a){G0(t,a)}while(1);tf(),vl.current=s,Q=i,Se!==null?e=0:(Ne=null,Me=0,e=ke)}if(e!==0){if(e===2&&(i=gh(t),i!==0&&(r=i,e=Hh(t,i))),e===1)throw n=lo,Ir(t,0),An(t,r),ht(t,ve()),n;if(e===6)An(t,r);else{if(i=t.current.alternate,!(r&30)&&!nT(i)&&(e=_l(t,r),e===2&&(s=gh(t),s!==0&&(r=s,e=Hh(t,s))),e===1))throw n=lo,Ir(t,0),An(t,r),ht(t,ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:pr(t,ot,nn);break;case 3:if(An(t,r),(r&130023424)===r&&(e=yf+500-ve(),10<e)){if(rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Th(pr.bind(null,t,ot,nn),e);break}pr(t,ot,nn);break;case 4:if(An(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tT(r/1960))-r,10<r){t.timeoutHandle=Th(pr.bind(null,t,ot,nn),r);break}pr(t,ot,nn);break;case 5:pr(t,ot,nn);break;default:throw Error(C(329))}}}return ht(t,ve()),t.callbackNode===n?q0.bind(null,t):null}function Hh(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=_l(t,e),t!==2&&(e=ot,ot=n,e!==null&&Wh(e)),t}function Wh(t){ot===null?ot=t:ot.push.apply(ot,t)}function nT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function An(t,e){for(e&=~gf,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Lt(e),r=1<<n;t[n]=-1,e&=~r}}function tg(t){if(Q&6)throw Error(C(327));Ei();var e=rl(t,0);if(!(e&1))return ht(t,ve()),null;var n=_l(t,e);if(t.tag!==0&&n===2){var r=gh(t);r!==0&&(e=r,n=Hh(t,r))}if(n===1)throw n=lo,Ir(t,0),An(t,e),ht(t,ve()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,ot,nn),ht(t,ve()),null}function vf(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(Oi=ve()+500,ru&&or())}}function Lr(t){Ln!==null&&Ln.tag===0&&!(Q&6)&&Ei();var e=Q;Q|=1;var n=Ct.transition,r=Z;try{if(Ct.transition=null,Z=1,t)return t()}finally{Z=r,Ct.transition=n,Q=e,!(Q&6)&&or()}}function wf(){ft=di.current,ie(di)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PI(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Jd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:Di(),ie(ut),ie(Ye),lf();break;case 5:af(r);break;case 4:Di();break;case 13:ie(ce);break;case 19:ie(ce);break;case 10:nf(r.type._context);break;case 22:case 23:wf()}n=n.return}if(Ne=t,Se=t=Wn(t.current,null),Me=ft=e,ke=0,lo=null,gf=au=Or=0,ot=$s=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vr=null}return t}function G0(t,e){do{var n=Se;try{if(tf(),Fa.current=yl,gl){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gl=!1}if(Pr=0,Re=Te=he=null,Ms=!1,so=0,mf.current=null,n===null||n.return===null){ke=1,lo=e,Se=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Bm(o);if(y!==null){y.flags&=-257,zm(y,o,a,s,e),y.mode&1&&Vm(s,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var v=new Set;v.add(l),e.updateQueue=v}else w.add(l);break e}else{if(!(e&1)){Vm(s,u,e),Ef();break e}l=Error(C(426))}}else if(ae&&a.mode&1){var _=Bm(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),zm(_,o,a,s,e),Zd(Pi(l,a));break e}}s=l=Pi(l,a),ke!==4&&(ke=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=D0(s,l,e);Lm(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zn===null||!zn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=P0(s,a,e);Lm(s,E);break e}}s=s.return}while(s!==null)}X0(n)}catch(k){e=k,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function Q0(){var t=vl.current;return vl.current=yl,t===null?yl:t}function Ef(){(ke===0||ke===3||ke===2)&&(ke=4),Ne===null||!(Or&268435455)&&!(au&268435455)||An(Ne,Me)}function _l(t,e){var n=Q;Q|=2;var r=Q0();(Ne!==t||Me!==e)&&(nn=null,Ir(t,e));do try{rT();break}catch(i){G0(t,i)}while(1);if(tf(),Q=n,vl.current=r,Se!==null)throw Error(C(261));return Ne=null,Me=0,ke}function rT(){for(;Se!==null;)Y0(Se)}function iT(){for(;Se!==null&&!NS();)Y0(Se)}function Y0(t){var e=Z0(t.alternate,t,ft);t.memoizedProps=t.pendingProps,e===null?X0(t):Se=e,mf.current=null}function X0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XI(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Se=null;return}}else if(n=YI(n,e,ft),n!==null){Se=n;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);ke===0&&(ke=5)}function pr(t,e,n){var r=Z,i=Ct.transition;try{Ct.transition=null,Z=1,sT(t,e,n,r)}finally{Ct.transition=i,Z=r}return null}function sT(t,e,n,r){do Ei();while(Ln!==null);if(Q&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FS(t,s),t===Ne&&(Se=Ne=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,ew(nl,function(){return Ei(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var o=Z;Z=1;var a=Q;Q|=4,mf.current=null,ZI(t,n),W0(n,t),kI(Sh),il=!!_h,Sh=_h=null,t.current=n,eT(n),xS(),Q=a,Z=o,Ct.transition=s}else t.current=n;if(wa&&(wa=!1,Ln=t,El=i),s=t.pendingLanes,s===0&&(zn=null),OS(n.stateNode),ht(t,ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wl)throw wl=!1,t=Bh,Bh=null,t;return El&1&&t.tag!==0&&Ei(),s=t.pendingLanes,s&1?t===zh?bs++:(bs=0,zh=t):bs=0,or(),null}function Ei(){if(Ln!==null){var t=xv(El),e=Ct.transition,n=Z;try{if(Ct.transition=null,Z=16>t?16:t,Ln===null)var r=!1;else{if(t=Ln,Ln=null,El=0,Q&6)throw Error(C(331));var i=Q;for(Q|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:Us(8,c,s)}var h=c.child;if(h!==null)h.return=c,P=h;else for(;P!==null;){c=P;var d=c.sibling,y=c.return;if(B0(c),c===u){P=null;break}if(d!==null){d.return=y,P=d;break}P=y}}}var w=s.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Us(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ou(9,a)}}catch(k){pe(a,a.return,k)}if(a===o){P=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,P=E;break e}P=a.return}}if(Q=i,or(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Jl,t)}catch{}r=!0}return r}finally{Z=n,Ct.transition=e}}return!1}function ng(t,e,n){e=Pi(n,e),e=D0(t,e,1),t=Bn(t,e,1),e=rt(),t!==null&&(Ao(t,1,e),ht(t,e))}function pe(t,e,n){if(t.tag===3)ng(t,t,n);else for(;e!==null;){if(e.tag===3){ng(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){t=Pi(n,t),t=P0(e,t,1),e=Bn(e,t,1),t=rt(),e!==null&&(Ao(e,1,t),ht(e,t));break}}e=e.return}}function oT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&(Me&n)===n&&(ke===4||ke===3&&(Me&130023424)===Me&&500>ve()-yf?Ir(t,0):gf|=n),ht(t,e)}function J0(t,e){e===0&&(t.mode&1?(e=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):e=1);var n=rt();t=pn(t,e),t!==null&&(Ao(t,e,n),ht(t,n))}function aT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J0(t,n)}function lT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),J0(t,n)}var Z0;Z0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ut.current)lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return lt=!1,QI(t,e,n);lt=!!(t.flags&131072)}else lt=!1,ae&&e.flags&1048576&&n0(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Va(t,e),t=e.pendingProps;var i=Ri(e,Ye.current);wi(e,n),i=cf(null,e,r,t,i,n);var s=hf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(r)?(s=!0,ul(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sf(e),i.updater=iu,e.stateNode=i,i._reactInternals=e,Dh(e,r,t,n),e=Lh(null,e,r,!0,s,n)):(e.tag=0,ae&&s&&Xd(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Va(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=cT(r),t=xt(r,t),i){case 0:e=Oh(null,e,r,t,n);break e;case 1:e=Km(null,e,r,t,n);break e;case 11:e=Hm(null,e,r,t,n);break e;case 14:e=Wm(null,e,r,xt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Oh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Km(t,e,r,i,n);case 3:e:{if(U0(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,o0(t,e),pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Pi(Error(C(423)),e),e=qm(t,e,r,n,i);break e}else if(r!==i){i=Pi(Error(C(424)),e),e=qm(t,e,r,n,i);break e}else for(pt=Vn(e.stateNode.containerInfo.firstChild),yt=e,ae=!0,Pt=null,n=c0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===i){e=mn(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return h0(e),t===null&&Rh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ih(r,i)?o=null:s!==null&&Ih(r,s)&&(e.flags|=32),M0(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&Rh(e),null;case 13:return $0(t,e,n);case 4:return of(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xi(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Hm(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,te(dl,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!ut.current){e=mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,wi(e,n),i=At(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=xt(r,e.pendingProps),i=xt(r.type,i),Wm(t,e,r,i,n);case 15:return O0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Va(t,e),e.tag=1,ct(r)?(t=!0,ul(e)):t=!1,wi(e,n),l0(e,r,i),Dh(e,r,i,n),Lh(null,e,r,!0,t,n);case 19:return b0(t,e,n);case 22:return L0(t,e,n)}throw Error(C(156,e.tag))};function ew(t,e){return Cv(t,e)}function uT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,e,n,r){return new uT(t,e,n,r)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cT(t){if(typeof t=="function")return _f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fd)return 11;if(t===jd)return 14}return 2}function Wn(t,e){var n=t.alternate;return n===null?(n=kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ni:return Tr(n.children,i,s,e);case bd:o=8,i|=8;break;case th:return t=kt(12,n,e,i|2),t.elementType=th,t.lanes=s,t;case nh:return t=kt(13,n,e,i),t.elementType=nh,t.lanes=s,t;case rh:return t=kt(19,n,e,i),t.elementType=rh,t.lanes=s,t;case uv:return lu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case av:o=10;break e;case lv:o=9;break e;case Fd:o=11;break e;case jd:o=14;break e;case Tn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Tr(t,e,n,r){return t=kt(7,t,r,e),t.lanes=n,t}function lu(t,e,n,r){return t=kt(22,t,r,e),t.elementType=uv,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=kt(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sf(t,e,n,r,i,s,o,a,l){return t=new hT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sf(s),t}function dT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tw(t){if(!t)return Zn;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(ct(n))return e0(t,n,e)}return e}function nw(t,e,n,r,i,s,o,a,l){return t=Sf(n,r,!0,t,i,s,o,a,l),t.context=tw(null),n=t.current,r=rt(),i=Hn(n),s=hn(r,i),s.callback=e??null,Bn(n,s,i),t.current.lanes=i,Ao(t,i,r),ht(t,r),t}function uu(t,e,n,r){var i=e.current,s=rt(),o=Hn(i);return n=tw(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bn(i,e,o),t!==null&&(Mt(t,i,o,s),ba(t,i,o)),o}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){rg(t,e),(t=t.alternate)&&rg(t,e)}function fT(){return null}var rw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tf(t){this._internalRoot=t}cu.prototype.render=Tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));uu(t,e,null,null)};cu.prototype.unmount=Tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){uu(null,t,null,null)}),e[fn]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ov();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cn.length&&e!==0&&e<Cn[n].priority;n++);Cn.splice(n,0,t),n===0&&Mv(t)}};function kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ig(){}function pT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Sl(o);s.call(u)}}var o=nw(e,r,t,0,null,!1,!1,"",ig);return t._reactRootContainer=o,t[fn]=o.current,eo(t.nodeType===8?t.parentNode:t),Lr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Sl(l);a.call(u)}}var l=Sf(t,0,!1,null,null,!1,!1,"",ig);return t._reactRootContainer=l,t[fn]=l.current,eo(t.nodeType===8?t.parentNode:t),Lr(function(){uu(e,l,n,r)}),l}function du(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Sl(o);a.call(l)}}uu(e,o,t,i)}else o=pT(n,e,t,i,r);return Sl(o)}Dv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_s(e.pendingLanes);n!==0&&(zd(e,n|1),ht(e,ve()),!(Q&6)&&(Oi=ve()+500,or()))}break;case 13:Lr(function(){var r=pn(t,1);if(r!==null){var i=rt();Mt(r,t,1,i)}}),If(t,1)}};Hd=function(t){if(t.tag===13){var e=pn(t,134217728);if(e!==null){var n=rt();Mt(e,t,134217728,n)}If(t,134217728)}};Pv=function(t){if(t.tag===13){var e=Hn(t),n=pn(t,e);if(n!==null){var r=rt();Mt(n,t,e,r)}If(t,e)}};Ov=function(){return Z};Lv=function(t,e){var n=Z;try{return Z=t,e()}finally{Z=n}};fh=function(t,e,n){switch(e){case"input":if(oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nu(r);if(!i)throw Error(C(90));hv(r),oh(r,i)}}}break;case"textarea":fv(t,n);break;case"select":e=n.value,e!=null&&mi(t,!!n.multiple,e,!1)}};Ev=vf;_v=Lr;var mT={usingClientEntryPoint:!1,Events:[No,oi,nu,vv,wv,vf]},ms={findFiberByHostInstance:yr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gT={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tv(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||fT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Jl=Ea.inject(gT),Gt=Ea}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mT;Et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(e))throw Error(C(200));return dT(t,e,null,n)};Et.createRoot=function(t,e){if(!kf(t))throw Error(C(299));var n=!1,r="",i=rw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sf(t,1,!1,null,null,n,!1,r,i),t[fn]=e.current,eo(t.nodeType===8?t.parentNode:t),new Tf(e)};Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Tv(e),t=t===null?null:t.stateNode,t};Et.flushSync=function(t){return Lr(t)};Et.hydrate=function(t,e,n){if(!hu(e))throw Error(C(200));return du(null,t,e,!0,n)};Et.hydrateRoot=function(t,e,n){if(!kf(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=nw(e,null,t,1,n??null,i,!1,s,o),t[fn]=e.current,eo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cu(e)};Et.render=function(t,e,n){if(!hu(e))throw Error(C(200));return du(null,t,e,!1,n)};Et.unmountComponentAtNode=function(t){if(!hu(t))throw Error(C(40));return t._reactRootContainer?(Lr(function(){du(null,null,t,!1,function(){t._reactRootContainer=null,t[fn]=null})}),!0):!1};Et.unstable_batchedUpdates=vf;Et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hu(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return du(t,e,n,!1,r)};Et.version="18.2.0-next-9e3b772b8-20220608";function iw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iw)}catch(t){console.error(t)}}iw(),nv.exports=Et;var yT=nv.exports,sg=yT;Zc.createRoot=sg.createRoot,Zc.hydrateRoot=sg.hydrateRoot;/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uo.apply(this,arguments)}var Mn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mn||(Mn={}));const og="popstate";function vT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Kh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Il(i)}return ET(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Cf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wT(){return Math.random().toString(36).substr(2,8)}function ag(t,e){return{usr:t.state,key:t.key,idx:e}}function Kh(t,e,n,r){return n===void 0&&(n=null),uo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gi(e):e,{state:n,key:e&&e.key||r||wT()})}function Il(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ET(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Mn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(uo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Mn.Pop;let _=c(),p=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:p})}function d(_,p){a=Mn.Push;let f=Kh(v.location,_,p);n&&n(f,_),u=c()+1;let g=ag(f,u),E=v.createHref(f);try{o.pushState(g,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function y(_,p){a=Mn.Replace;let f=Kh(v.location,_,p);n&&n(f,_),u=c();let g=ag(f,u),E=v.createHref(f);o.replaceState(g,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function w(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof _=="string"?_:Il(_);return we(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(og,h),l=_,()=>{i.removeEventListener(og,h),l=null}},createHref(_){return e(i,_)},createURL:w,encodeLocation(_){let p=w(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:y,go(_){return o.go(_)}};return v}var lg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(lg||(lg={}));function _T(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Gi(e):e,i=Af(r.pathname||"/",n);if(i==null)return null;let s=sw(t);ST(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=DT(s[a],LT(i));return o}function sw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(we(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:NT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of ow(s.path))i(s,o,l)}),e}function ow(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ow(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ST(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const IT=/^:\w+$/,TT=3,kT=2,CT=1,AT=10,RT=-2,ug=t=>t==="*";function NT(t,e){let n=t.split("/"),r=n.length;return n.some(ug)&&(r+=RT),e&&(r+=kT),n.filter(i=>!ug(i)).reduce((i,s)=>i+(IT.test(s)?TT:s===""?CT:AT),r)}function xT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function DT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=PT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Kn([i,c.pathname]),pathnameBase:bT(Kn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Kn([i,c.pathnameBase]))}return s}function PT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=OT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=MT(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function OT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Cf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function LT(t){try{return decodeURI(t)}catch(e){return Cf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function MT(t,e){try{return decodeURIComponent(t)}catch(n){return Cf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Af(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function UT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gi(t):t;return{pathname:n?n.startsWith("/")?n:$T(n,e):e,search:FT(r),hash:jT(i)}}function $T(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Tc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function aw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function lw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gi(t):(i=uo({},t),we(!i.pathname||!i.pathname.includes("?"),Tc("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),Tc("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),Tc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=UT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kn=t=>t.join("/").replace(/\/\/+/g,"/"),bT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),FT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function VT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tl.apply(this,arguments)}const Rf=S.createContext(null),uw=S.createContext(null),Qi=S.createContext(null),fu=S.createContext(null),Wr=S.createContext({outlet:null,matches:[]}),cw=S.createContext(null);function BT(t,e){let{relative:n}=e===void 0?{}:e;Yi()||we(!1);let{basename:r,navigator:i}=S.useContext(Qi),{hash:s,pathname:o,search:a}=dw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Yi(){return S.useContext(fu)!=null}function pu(){return Yi()||we(!1),S.useContext(fu).location}function hw(t){S.useContext(Qi).static||S.useLayoutEffect(t)}function Do(){return S.useContext(Rf)!=null?nk():zT()}function zT(){Yi()||we(!1);let{basename:t,navigator:e}=S.useContext(Qi),{matches:n}=S.useContext(Wr),{pathname:r}=pu(),i=JSON.stringify(aw(n).map(a=>a.pathnameBase)),s=S.useRef(!1);return hw(()=>{s.current=!0}),S.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=lw(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Kn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function HT(){let{matches:t}=S.useContext(Wr),e=t[t.length-1];return e?e.params:{}}function dw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(Wr),{pathname:i}=pu(),s=JSON.stringify(aw(r).map(o=>o.pathnameBase));return S.useMemo(()=>lw(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function WT(t,e){return KT(t,e)}function KT(t,e,n){Yi()||we(!1);let{navigator:r}=S.useContext(Qi),{matches:i}=S.useContext(Wr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=pu(),u;if(e){var c;let v=typeof e=="string"?Gi(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||we(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",y=_T(t,{pathname:d}),w=XT(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Kn([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Kn([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&w?S.createElement(fu.Provider,{value:{location:Tl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Mn.Pop}},w):w}function qT(){let t=tk(),e=VT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const GT=S.createElement(qT,null);class QT extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(Wr.Provider,{value:this.props.routeContext},S.createElement(cw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function YT(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Rf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Wr.Provider,{value:e},r)}function XT(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||we(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||GT);let d=e.concat(s.slice(0,u+1)),y=()=>{let w;return c?w=h:l.route.element?w=l.route.element:w=a,S.createElement(YT,{match:l,routeContext:{outlet:a,matches:d},children:w})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(QT,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:y(),routeContext:{outlet:null,matches:d}}):y()},null)}var qh;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(qh||(qh={}));var co;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(co||(co={}));function JT(t){let e=S.useContext(Rf);return e||we(!1),e}function ZT(t){let e=S.useContext(uw);return e||we(!1),e}function ek(t){let e=S.useContext(Wr);return e||we(!1),e}function fw(t){let e=ek(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function tk(){var t;let e=S.useContext(cw),n=ZT(co.UseRouteError),r=fw(co.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function nk(){let{router:t}=JT(qh.UseNavigateStable),e=fw(co.UseNavigateStable),n=S.useRef(!1);return hw(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Tl({fromRouteId:e},s)))},[t,e])}function Nf(t){let{to:e,replace:n,state:r,relative:i}=t;Yi()||we(!1);let s=S.useContext(uw),o=Do();return S.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function mr(t){we(!1)}function rk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Mn.Pop,navigator:s,static:o=!1}=t;Yi()&&we(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Gi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:y="default"}=r,w=S.useMemo(()=>{let v=Af(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:y},navigationType:i}},[a,u,c,h,d,y,i]);return w==null?null:S.createElement(Qi.Provider,{value:l},S.createElement(fu.Provider,{children:n,value:w}))}function ik(t){let{children:e,location:n}=t;return WT(Gh(e),n)}var cg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(cg||(cg={}));new Promise(()=>{});function Gh(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Gh(r.props.children,s));return}r.type!==mr&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Gh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qh(){return Qh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qh.apply(this,arguments)}function sk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ok(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ak(t,e){return t.button===0&&(!e||e==="_self")&&!ok(t)}const lk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function uk(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=vT({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(rk,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const ck=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pw=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=sk(e,lk),{basename:d}=S.useContext(Qi),y,w=!1;if(typeof u=="string"&&hk.test(u)&&(y=u,ck))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=Af(g.pathname,d);g.origin===f.origin&&E!=null?u=E+g.search+g.hash:w=!0}catch{}let v=BT(u,{relative:i}),_=dk(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||_(f)}return S.createElement("a",Qh({},h,{href:y||v,onClick:w||s?r:p,ref:n,target:l}))});var hg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(hg||(hg={}));var dg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(dg||(dg={}));function dk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Do(),l=pu(),u=dw(t,{relative:o});return S.useCallback(c=>{if(ak(c,n)){c.preventDefault();let h=r!==void 0?r:Il(l)===Il(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 */const mw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(d=64)),r.push(n[c],n[h],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new pk;const d=s<<2|a>>4;if(r.push(d),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mk=function(t){const e=mw(t);return gw.encodeByteArray(e,!0)},kl=function(t){return mk(t).replace(/\./g,"")},yw=function(t){try{return gw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yk=()=>gk().__FIREBASE_DEFAULTS__,vk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yw(t[1]);return e&&JSON.parse(e)},mu=()=>{try{return yk()||vk()||wk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vw=t=>{var e,n;return(n=(e=mu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ww=t=>{const e=vw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ek=()=>{var t;return(t=mu())===null||t===void 0?void 0:t.config},Ew=t=>{var e;return(e=mu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _k{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[kl(JSON.stringify(n)),kl(JSON.stringify(o)),a].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Ik(){var t;const e=(t=mu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ck(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ak(){try{return typeof indexedDB=="object"}catch{return!1}}function Rk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Nk="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Nk,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tn(i,a,r)}}function xk(t,e){return t.replace(Dk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Dk=/\{\$([^}]+)}/g;function Pk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fg(s)&&fg(o)){if(!Cl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fg(t){return t!==null&&typeof t=="object"}/**
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
 */function Oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ts(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ok(t,e){const n=new Lk(t,e);return n.subscribe.bind(n)}class Lk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kc),i.error===void 0&&(i.error=kc),i.complete===void 0&&(i.complete=kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kc(){}/**
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
 */function ue(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gr="[DEFAULT]";/**
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
 */class Uk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _k;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bk(e))try{this.getOrInitializeService({instanceIdentifier:gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gr){return this.instances.has(e)}getOptions(e=gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$k(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gr){return this.component?this.component.multipleInstances?e:gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $k(t){return t===gr?void 0:t}function bk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Uk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const jk={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Vk=X.INFO,Bk={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},zk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Bk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xf{constructor(e){this.name=e,this._logLevel=Vk,this._logHandler=zk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Hk=(t,e)=>e.some(n=>t instanceof n);let pg,mg;function Wk(){return pg||(pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kk(){return mg||(mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sw=new WeakMap,Yh=new WeakMap,Iw=new WeakMap,Cc=new WeakMap,Df=new WeakMap;function qk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sw.set(n,t)}).catch(()=>{}),Df.set(e,t),e}function Gk(t){if(Yh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yh.set(t,e)}let Xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qk(t){Xh=t(Xh)}function Yk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ac(this),e,...n);return Iw.set(r,e.sort?e.sort():[e]),qn(r)}:Kk().includes(t)?function(...e){return t.apply(Ac(this),e),qn(Sw.get(this))}:function(...e){return qn(t.apply(Ac(this),e))}}function Xk(t){return typeof t=="function"?Yk(t):(t instanceof IDBTransaction&&Gk(t),Hk(t,Wk())?new Proxy(t,Xh):t)}function qn(t){if(t instanceof IDBRequest)return qk(t);if(Cc.has(t))return Cc.get(t);const e=Xk(t);return e!==t&&(Cc.set(t,e),Df.set(e,t)),e}const Ac=t=>Df.get(t);function Jk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=qn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qn(o.result),l.oldVersion,l.newVersion,qn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Zk=["get","getKey","getAll","getAllKeys","count"],eC=["put","add","delete","clear"],Rc=new Map;function gg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Rc.set(e,s),s}Qk(t=>({...t,get:(e,n,r)=>gg(e,n)||t.get(e,n,r),has:(e,n)=>!!gg(e,n)||t.has(e,n)}));/**
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
 */class tC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jh="@firebase/app",yg="0.9.9";/**
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
 */const Mr=new xf("@firebase/app"),rC="@firebase/app-compat",iC="@firebase/analytics-compat",sC="@firebase/analytics",oC="@firebase/app-check-compat",aC="@firebase/app-check",lC="@firebase/auth",uC="@firebase/auth-compat",cC="@firebase/database",hC="@firebase/database-compat",dC="@firebase/functions",fC="@firebase/functions-compat",pC="@firebase/installations",mC="@firebase/installations-compat",gC="@firebase/messaging",yC="@firebase/messaging-compat",vC="@firebase/performance",wC="@firebase/performance-compat",EC="@firebase/remote-config",_C="@firebase/remote-config-compat",SC="@firebase/storage",IC="@firebase/storage-compat",TC="@firebase/firestore",kC="@firebase/firestore-compat",CC="firebase",AC="9.21.0";/**
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
 */const Zh="[DEFAULT]",RC={[Jh]:"fire-core",[rC]:"fire-core-compat",[sC]:"fire-analytics",[iC]:"fire-analytics-compat",[aC]:"fire-app-check",[oC]:"fire-app-check-compat",[lC]:"fire-auth",[uC]:"fire-auth-compat",[cC]:"fire-rtdb",[hC]:"fire-rtdb-compat",[dC]:"fire-fn",[fC]:"fire-fn-compat",[pC]:"fire-iid",[mC]:"fire-iid-compat",[gC]:"fire-fcm",[yC]:"fire-fcm-compat",[vC]:"fire-perf",[wC]:"fire-perf-compat",[EC]:"fire-rc",[_C]:"fire-rc-compat",[SC]:"fire-gcs",[IC]:"fire-gcs-compat",[TC]:"fire-fst",[kC]:"fire-fst-compat","fire-js":"fire-js",[CC]:"fire-js-all"};/**
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
 */const Al=new Map,ed=new Map;function NC(t,e){try{t.container.addComponent(e)}catch(n){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(ed.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;ed.set(e,t);for(const n of Al.values())NC(n,t);return!0}function gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const xC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gn=new Po("app","Firebase",xC);/**
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
 */class DC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
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
 */const Kr=AC;function Tw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gn.create("bad-app-name",{appName:String(i)});if(n||(n=Ek()),!n)throw Gn.create("no-options");const s=Al.get(i);if(s){if(Cl(n,s.options)&&Cl(r,s.config))return s;throw Gn.create("duplicate-app",{appName:i})}const o=new Fk(i);for(const l of ed.values())o.addComponent(l);const a=new DC(n,r,o);return Al.set(i,a),a}function Pf(t=Zh){const e=Al.get(t);if(!e&&t===Zh)return Tw();if(!e)throw Gn.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let i=(r=RC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(a.join(" "));return}Ur(new er(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const PC="firebase-heartbeat-database",OC=1,ho="firebase-heartbeat-store";let Nc=null;function kw(){return Nc||(Nc=Jk(PC,OC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ho)}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function LC(t){try{return(await kw()).transaction(ho).objectStore(ho).get(Cw(t))}catch(e){if(e instanceof tn)Mr.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(n.message)}}}async function vg(t,e){try{const r=(await kw()).transaction(ho,"readwrite");return await r.objectStore(ho).put(e,Cw(t)),r.done}catch(n){if(n instanceof tn)Mr.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mr.warn(r.message)}}}function Cw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MC=1024,UC=30*24*60*60*1e3;class $C{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=UC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wg(),{heartbeatsToSend:n,unsentEntries:r}=bC(this._heartbeatsCache.heartbeats),i=kl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wg(){return new Date().toISOString().substring(0,10)}function bC(t,e=MC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Eg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Eg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ak()?Rk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Eg(t){return kl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jC(t){Ur(new er("platform-logger",e=>new tC(e),"PRIVATE")),Ur(new er("heartbeat",e=>new $C(e),"PRIVATE")),Yt(Jh,yg,t),Yt(Jh,yg,"esm2017"),Yt("fire-js","")}jC("");var VC="firebase",BC="9.21.0";/**
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
 */Yt(VC,BC,"app");function Of(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Aw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zC=Aw,Rw=new Po("auth","Firebase",Aw());/**
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
 */const Rl=new xf("@firebase/auth");function HC(t,...e){Rl.logLevel<=X.WARN&&Rl.warn(`Auth (${Kr}): ${t}`,...e)}function Wa(t,...e){Rl.logLevel<=X.ERROR&&Rl.error(`Auth (${Kr}): ${t}`,...e)}/**
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
 */function bt(t,...e){throw Lf(t,...e)}function Xt(t,...e){return Lf(t,...e)}function WC(t,e,n){const r=Object.assign(Object.assign({},zC()),{[e]:n});return new Po("auth","Firebase",r).create(e,{appName:t.name})}function Lf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rw.create(t,...e)}function U(t,e,...n){if(!t)throw Lf(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wa(e),new Error(e)}function gn(t,e){t||an(e)}/**
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
 */function td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KC(){return _g()==="http:"||_g()==="https:"}function _g(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function qC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KC()||Tk()||"connection"in navigator)?navigator.onLine:!0}function GC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Sk()||kk()}get(){return qC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mf(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Nw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const YC=new Lo(3e4,6e4);function Xi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qr(t,e,n,r,i={}){return xw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Oo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Nw.fetch()(Dw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function xw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QC),e);try{const i=new XC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _a(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _a(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _a(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw WC(t,c,u);bt(t,c)}}catch(i){if(i instanceof tn)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function Mo(t,e,n,r,i={}){const s=await qr(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Dw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mf(t.config,i):`${t.config.apiScheme}://${i}`}class XC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),YC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _a(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function JC(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function ZC(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eA(t,e=!1){const n=ue(t),r=await n.getIdToken(e),i=Uf(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fs(xc(i.auth_time)),issuedAtTime:Fs(xc(i.iat)),expirationTime:Fs(xc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xc(t){return Number(t)*1e3}function Uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=yw(n);return i?JSON.parse(i):(Wa("Failed to decode base64 JWT payload"),null)}catch(i){return Wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tA(t){const e=Uf(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&nA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Li(t,ZC(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oA(s.providerUserInfo):[],a=sA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function iA(t){const e=ue(t);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oA(t){return t.map(e=>{var{providerId:n}=e,r=Of(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function aA(t,e){const n=await xw(t,{},async()=>{const r=Oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Dw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Nw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fo;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
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
 */function In(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Of(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Li(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eA(this,e)}reload(){return iA(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Li(this,JC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:k,providerData:T,stsTokenManager:R}=n;U(g&&R,e,"internal-error");const N=fo.fromJSON(this.name,R);U(typeof g=="string",e,"internal-error"),In(h,e.name),In(d,e.name),U(typeof E=="boolean",e,"internal-error"),U(typeof k=="boolean",e,"internal-error"),In(y,e.name),In(w,e.name),In(v,e.name),In(_,e.name),In(p,e.name),In(f,e.name);const W=new kr({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:k,photoURL:w,phoneNumber:y,tenantId:v,stsTokenManager:N,createdAt:p,lastLoginAt:f});return T&&Array.isArray(T)&&(W.providerData=T.map($=>Object.assign({},$))),_&&(W._redirectEventId=_),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new fo;i.updateFromServerResponse(n);const s=new kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nl(s),s}}/**
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
 */const Sg=new Map;function ln(t){gn(t instanceof Function,"Expected a class definition");let e=Sg.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sg.set(t,e),e)}/**
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
 */class Ow{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ow.type="NONE";const Ig=Ow;/**
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
 */function Ka(t,e,n){return`firebase:${t}:${e}:${n}`}class _i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _i(ln(Ig),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ln(Ig);const o=Ka(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=kr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new _i(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new _i(s,e,r))}}/**
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
 */function Tg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bw(e))return"Blackberry";if(Fw(e))return"Webos";if($f(e))return"Safari";if((e.includes("chrome/")||Mw(e))&&!e.includes("edge/"))return"Chrome";if($w(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lw(t=Xe()){return/firefox\//i.test(t)}function $f(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mw(t=Xe()){return/crios\//i.test(t)}function Uw(t=Xe()){return/iemobile/i.test(t)}function $w(t=Xe()){return/android/i.test(t)}function bw(t=Xe()){return/blackberry/i.test(t)}function Fw(t=Xe()){return/webos/i.test(t)}function yu(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lA(t=Xe()){var e;return yu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uA(){return Ck()&&document.documentMode===10}function jw(t=Xe()){return yu(t)||$w(t)||Fw(t)||bw(t)||/windows phone/i.test(t)||Uw(t)}function cA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vw(t,e=[]){let n;switch(t){case"Browser":n=Tg(Xe());break;case"Worker":n=`${Tg(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}async function Bw(t,e){return qr(t,"GET","/v2/recaptchaConfig",Xi(t,e))}function kg(t){return t!==void 0&&t.enterprise!==void 0}class zw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function hA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hA().appendChild(r)})}function dA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fA="https://www.google.com/recaptcha/enterprise.js?render=",pA="recaptcha-enterprise",mA="NO_RECAPTCHA";class Ww{constructor(e){this.type=pA,this.auth=Ji(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Bw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new zw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;kg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(mA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&kg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Hw(fA+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function xl(t,e,n,r=!1){const i=new Ww(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class gA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class yA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cg(this),this.idTokenSubscription=new Cg(this),this.beforeStateQueue=new gA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ue(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}async initializeRecaptchaConfig(){const e=await Bw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new zw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ww(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ji(t){return ue(t)}class Cg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ok(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function vA(t,e){const n=gu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Cl(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function wA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function EA(t,e,n){const r=Ji(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Kw(e),{host:o,port:a}=_A(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||SA()}function Kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _A(t){const e=Kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ag(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ag(o)}}}function Ag(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function IA(t,e){return qr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Dc(t,e){return Mo(t,"POST","/v1/accounts:signInWithPassword",Xi(t,e))}/**
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
 */async function TA(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",Xi(t,e))}async function kA(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",Xi(t,e))}/**
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
 */class po extends bf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await xl(e,r,"signInWithPassword");return Dc(e,i)}else return Dc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await xl(e,r,"signInWithPassword");return Dc(e,s)}else return Promise.reject(i)});case"emailLink":return TA(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return IA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kA(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Si(t,e){return Mo(t,"POST","/v1/accounts:signInWithIdp",Xi(t,e))}/**
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
 */const CA="http://localhost";class $r extends bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Of(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $r(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Si(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Si(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Si(e,n)}buildRequest(){const e={requestUri:CA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oo(n)}return e}}/**
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
 */function AA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RA(t){const e=Is(Ts(t)).link,n=e?Is(Ts(e)).deep_link_id:null,r=Is(Ts(t)).deep_link_id;return(r?Is(Ts(r)).link:null)||r||n||e||t}class Ff{constructor(e){var n,r,i,s,o,a;const l=Is(Ts(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=AA((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=RA(e);try{return new Ff(n)}catch{return null}}}/**
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
 */class Zi{constructor(){this.providerId=Zi.PROVIDER_ID}static credential(e,n){return po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ff.parseLink(n);return U(r,"argument-error"),po._fromEmailAndCode(e,r.code,r.tenantId)}}Zi.PROVIDER_ID="password";Zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Uo extends qw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rn extends Uo{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends Uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class xn extends Uo{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
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
 */class Dn extends Uo{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */async function Pc(t,e){return Mo(t,"POST","/v1/accounts:signUp",Xi(t,e))}/**
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kr._fromIdTokenResponse(e,r,i),o=Rg(r);return new br({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rg(r);return new br({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Dl extends tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Dl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Dl(e,n,r,i)}}function Gw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Dl._fromErrorAndOperation(t,s,e,r):s})}async function NA(t,e,n=!1){const r=await Li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return br._forOperation(t,"link",r)}/**
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
 */async function xA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Li(t,Gw(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=Uf(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),br._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
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
 */async function Qw(t,e,n=!1){const r="signIn",i=await Gw(t,r,e),s=await br._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function DA(t,e){return Qw(Ji(t),e)}async function PA(t,e,n){var r;const i=Ji(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await xl(i,s,"signUpPassword");o=Pc(i,u)}else o=Pc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await xl(i,s,"signUpPassword");return Pc(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await br._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function OA(t,e,n){return DA(ue(t),Zi.credential(e,n))}/**
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
 */async function LA(t,e){return qr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ng(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ue(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Li(r,LA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function MA(t,e,n,r){return ue(t).onIdTokenChanged(e,n,r)}function UA(t,e,n){return ue(t).beforeAuthStateChanged(e,n)}function $A(t,e,n,r){return ue(t).onAuthStateChanged(e,n,r)}function bA(t){return ue(t).signOut()}const Pl="__sak";/**
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
 */class Yw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function FA(){const t=Xe();return $f(t)||yu(t)}const jA=1e3,VA=10;class Xw extends Yw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FA()&&cA(),this.fallbackToPolling=jw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,VA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xw.type="LOCAL";const BA=Xw;/**
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
 */class Jw extends Yw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jw.type="SESSION";const Zw=Jw;/**
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
 */function zA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await zA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
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
 */function jf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class HA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=jf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jt(){return window}function WA(t){Jt().location.href=t}/**
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
 */function e1(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function KA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GA(){return e1()?self:null}/**
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
 */const t1="firebaseLocalStorageDb",QA=1,Ol="firebaseLocalStorage",n1="fbase_key";class $o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wu(t,e){return t.transaction([Ol],e?"readwrite":"readonly").objectStore(Ol)}function YA(){const t=indexedDB.deleteDatabase(t1);return new $o(t).toPromise()}function nd(){const t=indexedDB.open(t1,QA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ol,{keyPath:n1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ol)?e(r):(r.close(),await YA(),e(await nd()))})})}async function xg(t,e,n){const r=wu(t,!0).put({[n1]:e,value:n});return new $o(r).toPromise()}async function XA(t,e){const n=wu(t,!1).get(e),r=await new $o(n).toPromise();return r===void 0?null:r.value}function Dg(t,e){const n=wu(t,!0).delete(e);return new $o(n).toPromise()}const JA=800,ZA=3;class r1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance(GA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KA(),!this.activeServiceWorker)return;this.sender=new HA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nd();return await xg(e,Pl,"1"),await Dg(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wu(i,!1).getAll();return new $o(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}r1.type="LOCAL";const eR=r1;new Lo(3e4,6e4);/**
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
 */function tR(t,e){return e?ln(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vf extends bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nR(t){return Qw(t.auth,new Vf(t),t.bypassAuthState)}function rR(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),xA(n,new Vf(t),t.bypassAuthState)}async function iR(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),NA(n,new Vf(t),t.bypassAuthState)}/**
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
 */class i1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nR;case"linkViaPopup":case"linkViaRedirect":return iR;case"reauthViaPopup":case"reauthViaRedirect":return rR;default:bt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sR=new Lo(2e3,1e4);class fi extends i1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sR.get())};e()}}fi.currentPopupAction=null;/**
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
 */const oR="pendingRedirect",qa=new Map;class aR extends i1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qa.get(this.auth._key());if(!e){try{const r=await lR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qa.set(this.auth._key(),e)}return this.bypassAuthState||qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lR(t,e){const n=hR(e),r=cR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uR(t,e){qa.set(t._key(),e)}function cR(t){return ln(t._redirectPersistence)}function hR(t){return Ka(oR,t.config.apiKey,t.name)}async function dR(t,e,n=!1){const r=Ji(t),i=tR(r,e),o=await new aR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const fR=10*60*1e3;class pR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!s1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pg(e))}saveEventToCache(e){this.cachedEventUids.add(Pg(e)),this.lastProcessedEventTime=Date.now()}}function Pg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function s1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return s1(t);default:return!1}}/**
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
 */async function gR(t,e={}){return qr(t,"GET","/v1/projects",e)}/**
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
 */const yR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vR=/^https?/;async function wR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gR(t);for(const n of e)try{if(ER(n))return}catch{}bt(t,"unauthorized-domain")}function ER(t){const e=td(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vR.test(n))return!1;if(yR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _R=new Lo(3e4,6e4);function Og(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SR(t){return new Promise((e,n)=>{var r,i,s;function o(){Og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Og(),n(Xt(t,"network-request-failed"))},timeout:_R.get()})}if(!((i=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Jt().gapi)===null||s===void 0)&&s.load)o();else{const a=dA("iframefcb");return Jt()[a]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},Hw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ga=null,e})}let Ga=null;function IR(t){return Ga=Ga||SR(t),Ga}/**
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
 */const TR=new Lo(5e3,15e3),kR="__/auth/iframe",CR="emulator/auth/iframe",AR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NR(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,CR):`https://${t.config.authDomain}/${kR}`,r={apiKey:e.apiKey,appName:t.name,v:Kr},i=RR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Oo(r).slice(1)}`}async function xR(t){const e=await IR(t),n=Jt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:NR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=Jt().setTimeout(()=>{s(o)},TR.get());function l(){Jt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const DR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PR=500,OR=600,LR="_blank",MR="http://localhost";class Lg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UR(t,e,n,r=PR,i=OR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},DR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=Mw(u)?LR:n),Lw(u)&&(e=e||MR,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[y,w])=>`${d}${y}=${w},`,"");if(lA(u)&&a!=="_self")return $R(e||"",a),new Lg(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Lg(h)}function $R(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bR="__/auth/handler",FR="emulator/auth/handler",jR=encodeURIComponent("fac");async function Mg(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kr,eventId:i};if(e instanceof qw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Uo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${jR}=${encodeURIComponent(l)}`:"";return`${VR(t)}?${Oo(a).slice(1)}${u}`}function VR({config:t}){return t.emulator?Mf(t,FR):`https://${t.authDomain}/${bR}`}/**
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
 */const Oc="webStorageSupport";class BR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zw,this._completeRedirectFn=dR,this._overrideRedirectResult=uR}async _openPopup(e,n,r,i){var s;gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Mg(e,n,r,td(),i);return UR(e,o,jf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Mg(e,n,r,td(),i);return WA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xR(e),r=new pR(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Oc];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jw()||$f()||yu()}}const zR=BR;var Ug="@firebase/auth",$g="0.23.1";/**
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
 */class HR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function WR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function KR(t){Ur(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),U(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vw(t)},u=new yA(r,i,s,l);return wA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new er("auth-internal",e=>{const n=Ji(e.getProvider("auth").getImmediate());return(r=>new HR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Ug,$g,WR(t)),Yt(Ug,$g,"esm2017")}/**
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
 */const qR=5*60,GR=Ew("authIdTokenMaxAge")||qR;let bg=null;const QR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GR)return;const i=n==null?void 0:n.token;bg!==i&&(bg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YR(t=Pf()){const e=gu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vA(t,{popupRedirectResolver:zR,persistence:[eR,BA,Zw]}),r=Ew("authTokenSyncURL");if(r){const s=QR(r);UA(n,s,()=>s(n.currentUser)),MA(n,o=>s(o))}const i=vw("auth");return i&&EA(n,`http://${i}`),n}KR("Browser");var XR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Bf=Bf||{},F=XR||self;function Ll(){}function Eu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function JR(t){return Object.prototype.hasOwnProperty.call(t,Lc)&&t[Lc]||(t[Lc]=++ZR)}var Lc="closure_uid_"+(1e9*Math.random()>>>0),ZR=0;function eN(t,e,n){return t.call.apply(t.bind,arguments)}function tN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=eN:qe=tN,qe.apply(null,arguments)}function Sa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function De(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ar(){this.s=this.s,this.o=this.o}var nN=0;ar.prototype.s=!1;ar.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),nN!=0)&&JR(this)};ar.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const o1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Fg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Eu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var rN=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",Ll,e),F.removeEventListener("test",Ll,e)}catch{}return t}();function Ml(t){return/^[\s\xa0]*$/.test(t)}var jg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Mc(t,e){return t<e?-1:t>e?1:0}function _u(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function Wt(t){return _u().indexOf(t)!=-1}function Hf(t){return Hf[" "](t),t}Hf[" "]=Ll;function a1(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var iN=Wt("Opera"),Mi=Wt("Trident")||Wt("MSIE"),l1=Wt("Edge"),rd=l1||Mi,u1=Wt("Gecko")&&!(_u().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge"))&&!(Wt("Trident")||Wt("MSIE"))&&!Wt("Edge"),sN=_u().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge");function c1(){var t=F.document;return t?t.documentMode:void 0}var Ul;e:{var Uc="",$c=function(){var t=_u();if(u1)return/rv:([^\);]+)(\)|;)/.exec(t);if(l1)return/Edge\/([\d\.]+)/.exec(t);if(Mi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sN)return/WebKit\/(\S+)/.exec(t);if(iN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($c&&(Uc=$c?$c[1]:""),Mi){var bc=c1();if(bc!=null&&bc>parseFloat(Uc)){Ul=String(bc);break e}}Ul=Uc}var oN={};function aN(){return a1(oN,9,function(){let t=0;const e=jg(String(Ul)).split("."),n=jg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Mc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Mc(i[2].length==0,s[2].length==0)||Mc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var id;if(F.document&&Mi){var Vg=c1();id=Vg||parseInt(Ul,10)||void 0}else id=void 0;var lN=id;function mo(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(u1){e:{try{Hf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mo.$.h.call(this)}}De(mo,Ge);var uN={2:"touch",3:"pen",4:"mouse"};mo.prototype.h=function(){mo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fo="closure_listenable_"+(1e6*Math.random()|0),cN=0;function hN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++cN,this.fa=this.ia=!1}function Su(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Wf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function h1(t){const e={};for(const n in t)e[n]=t[n];return e}const Bg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function d1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Bg.length;s++)n=Bg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Iu(t){this.src=t,this.g={},this.h=0}Iu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=od(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new hN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function sd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=o1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Su(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function od(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Kf="closure_lm_"+(1e6*Math.random()|0),Fc={};function f1(t,e,n,r,i){if(r&&r.once)return m1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)f1(t,e[s],n,r,i);return null}return n=Qf(n),t&&t[Fo]?t.O(e,n,bo(r)?!!r.capture:!!r,i):p1(t,e,n,!1,r,i)}function p1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=bo(i)?!!i.capture:!!i,a=Gf(t);if(a||(t[Kf]=a=new Iu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=dN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)rN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(y1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dN(){function t(n){return e.call(t.src,t.listener,n)}const e=fN;return t}function m1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)m1(t,e[s],n,r,i);return null}return n=Qf(n),t&&t[Fo]?t.P(e,n,bo(r)?!!r.capture:!!r,i):p1(t,e,n,!0,r,i)}function g1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)g1(t,e[s],n,r,i);else r=bo(r)?!!r.capture:!!r,n=Qf(n),t&&t[Fo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=od(s,n,r,i),-1<n&&(Su(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=od(e,n,r,i)),(n=-1<t?e[t]:null)&&qf(n))}function qf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fo])sd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(y1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Gf(e))?(sd(n,t),n.h==0&&(n.src=null,e[Kf]=null)):Su(t)}}}function y1(t){return t in Fc?Fc[t]:Fc[t]="on"+t}function fN(t,e){if(t.fa)t=!0;else{e=new mo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&qf(t),t=n.call(r,e)}return t}function Gf(t){return t=t[Kf],t instanceof Iu?t:null}var jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qf(t){return typeof t=="function"?t:(t[jc]||(t[jc]=function(e){return t.handleEvent(e)}),t[jc])}function xe(){ar.call(this),this.i=new Iu(this),this.S=this,this.J=null}De(xe,ar);xe.prototype[Fo]=!0;xe.prototype.removeEventListener=function(t,e,n,r){g1(this,t,e,n,r)};function Ue(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var i=e;e=new Ge(r,t),d1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ia(o,r,!0,e)&&i}if(o=e.g=t,i=Ia(o,r,!0,e)&&i,i=Ia(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ia(o,r,!1,e)&&i}xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Su(n[r]);delete t.g[e],t.h--}}this.J=null};xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ia(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&sd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Yf=F.JSON.stringify;function pN(){var t=E1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mN{constructor(){this.h=this.g=null}add(e,n){const r=v1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var v1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new gN,t=>t.reset());class gN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yN(t){F.setTimeout(()=>{throw t},0)}function w1(t,e){ad||vN(),ld||(ad(),ld=!0),E1.add(t,e)}var ad;function vN(){var t=F.Promise.resolve(void 0);ad=function(){t.then(wN)}}var ld=!1,E1=new mN;function wN(){for(var t;t=pN();){try{t.h.call(t.g)}catch(n){yN(n)}var e=v1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ld=!1}function Tu(t,e){xe.call(this),this.h=t||1,this.g=e||F,this.j=qe(this.qb,this),this.l=Date.now()}De(Tu,xe);x=Tu.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ue(this,"tick"),this.ga&&(Xf(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Tu.$.N.call(this),Xf(this),delete this.g};function Jf(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function _1(t){t.g=Jf(()=>{t.g=null,t.i&&(t.i=!1,_1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class EN extends ar{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_1(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function go(t){ar.call(this),this.h=t,this.g={}}De(go,ar);var zg=[];function S1(t,e,n,r){Array.isArray(n)||(n&&(zg[0]=n.toString()),n=zg);for(var i=0;i<n.length;i++){var s=f1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function I1(t){Wf(t.g,function(e,n){this.g.hasOwnProperty(n)&&qf(e)},t),t.g={}}go.prototype.N=function(){go.$.N.call(this),I1(this)};go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ku(){this.g=!0}ku.prototype.Ea=function(){this.g=!1};function _N(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function SN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function pi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+TN(t,n)+(r?" "+r:"")})}function IN(t,e){t.info(function(){return"TIMEOUT: "+e})}ku.prototype.info=function(){};function TN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Yf(n)}catch{return e}}var Gr={},Hg=null;function Cu(){return Hg=Hg||new xe}Gr.Ta="serverreachability";function T1(t){Ge.call(this,Gr.Ta,t)}De(T1,Ge);function yo(t){const e=Cu();Ue(e,new T1(e))}Gr.STAT_EVENT="statevent";function k1(t,e){Ge.call(this,Gr.STAT_EVENT,t),this.stat=e}De(k1,Ge);function nt(t){const e=Cu();Ue(e,new k1(e,t))}Gr.Ua="timingevent";function C1(t,e){Ge.call(this,Gr.Ua,t),this.size=e}De(C1,Ge);function jo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Au={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},A1={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zf(){}Zf.prototype.h=null;function Wg(t){return t.h||(t.h=t.i())}function R1(){}var Vo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ep(){Ge.call(this,"d")}De(ep,Ge);function tp(){Ge.call(this,"c")}De(tp,Ge);var ud;function Ru(){}De(Ru,Zf);Ru.prototype.g=function(){return new XMLHttpRequest};Ru.prototype.i=function(){return{}};ud=new Ru;function Bo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new go(this),this.P=kN,t=rd?125:void 0,this.V=new Tu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new N1}function N1(){this.i=null,this.g="",this.h=!1}var kN=45e3,cd={},$l={};x=Bo.prototype;x.setTimeout=function(t){this.P=t};function hd(t,e,n){t.L=1,t.v=xu(yn(e)),t.s=n,t.S=!0,x1(t,null)}function x1(t,e){t.G=Date.now(),zo(t),t.A=yn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),b1(n.i,"t",r),t.C=0,n=t.l.I,t.h=new N1,t.g=sE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new EN(qe(t.Pa,t,t.g),t.O)),S1(t.U,t.g,"readystatechange",t.nb),e=t.I?h1(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),yo(),_N(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&un(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const c=un(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||rd||this.g&&(this.h.h||this.g.ja()||Qg(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?yo(3):yo(2)),Nu(this);var n=this.g.da();this.aa=n;t:if(D1(this)){var r=Qg(this.g);t="";var i=r.length,s=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Er(this),js(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,SN(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ml(a)){var u=a;break t}}u=null}if(n=u)pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dd(this,n);else{this.i=!1,this.o=3,nt(12),Er(this),js(this);break e}}this.S?(P1(this,c,o),rd&&this.i&&c==3&&(S1(this.U,this.V,"tick",this.mb),this.V.start())):(pi(this.j,this.m,o,null),dd(this,o)),c==4&&Er(this),this.i&&!this.J&&(c==4?tE(this.l,this):(this.i=!1,zo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Er(this),js(this)}}}catch{}finally{}};function D1(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function P1(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=CN(t,n),i==$l){e==4&&(t.o=4,nt(14),r=!1),pi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==cd){t.o=4,nt(15),pi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else pi(t.j,t.m,i,null),dd(t,i);D1(t)&&i!=$l&&i!=cd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),lp(e),e.L=!0,nt(11))):(pi(t.j,t.m,n,"[Invalid Chunked Response]"),Er(t),js(t))}x.mb=function(){if(this.g){var t=un(this.g),e=this.g.ja();this.C<e.length&&(Nu(this),P1(this,t,e),this.i&&t!=4&&zo(this))}};function CN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?$l:(n=Number(e.substring(n,r)),isNaN(n)?cd:(r+=1,r+n>e.length?$l:(e=e.substr(r,n),t.C=r+n,e)))}x.cancel=function(){this.J=!0,Er(this)};function zo(t){t.Y=Date.now()+t.P,O1(t,t.P)}function O1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=jo(qe(t.lb,t),e)}function Nu(t){t.B&&(F.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(IN(this.j,this.A),this.L!=2&&(yo(),nt(17)),Er(this),this.o=2,js(this)):O1(this,this.Y-t)};function js(t){t.l.H==0||t.J||tE(t.l,t)}function Er(t){Nu(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Xf(t.V),I1(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function dd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||fd(n.h,t))){if(!t.K&&fd(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)jl(n),Ou(n);else break e;ap(n),nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=jo(qe(n.ib,n),6e3));if(1>=V1(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else _r(n,11)}else if((t.K||n.g==t)&&jl(n),!Ml(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const w=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(np(s,s.h),s.h=null))}if(r.F){const v=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,le(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=iE(r,r.I?r.oa:null,r.Y),o.K){B1(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Nu(a),zo(a)),r.g=o}else Z1(r);0<n.i.length&&Lu(n)}else u[0]!="stop"&&u[0]!="close"||_r(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?_r(n,7):op(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}yo(4)}catch{}}function AN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Eu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function RN(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Eu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function L1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Eu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=RN(t),r=AN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var M1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Cr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Cr){this.h=e!==void 0?e:t.h,bl(this,t.j),this.s=t.s,this.g=t.g,Fl(this,t.m),this.l=t.l,e=t.i;var n=new vo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kg(this,n),this.o=t.o}else t&&(n=String(t).match(M1))?(this.h=!!e,bl(this,n[1]||"",!0),this.s=ks(n[2]||""),this.g=ks(n[3]||"",!0),Fl(this,n[4]),this.l=ks(n[5]||"",!0),Kg(this,n[6]||"",!0),this.o=ks(n[7]||"")):(this.h=!!e,this.i=new vo(null,this.h))}Cr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cs(e,qg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Cs(e,qg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Cs(n,n.charAt(0)=="/"?PN:DN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cs(n,LN)),t.join("")};function yn(t){return new Cr(t)}function bl(t,e,n){t.j=n?ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kg(t,e,n){e instanceof vo?(t.i=e,MN(t.i,t.h)):(n||(e=Cs(e,ON)),t.i=new vo(e,t.h))}function le(t,e,n){t.i.set(e,n)}function xu(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,xN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qg=/[#\/\?@]/g,DN=/[#\?:]/g,PN=/[#\?]/g,ON=/[#\?@]/g,LN=/#/g;function vo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lr(t){t.g||(t.g=new Map,t.h=0,t.i&&NN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=vo.prototype;x.add=function(t,e){lr(this),this.i=null,t=es(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function U1(t,e){lr(t),e=es(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $1(t,e){return lr(t),e=es(t,e),t.g.has(e)}x.forEach=function(t,e){lr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.sa=function(){lr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){lr(this);let e=[];if(typeof t=="string")$1(this,t)&&(e=e.concat(this.g.get(es(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return lr(this),this.i=null,t=es(this,t),$1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function b1(t,e,n){U1(t,e),0<n.length&&(t.i=null,t.g.set(es(t,e),zf(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function es(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function MN(t,e){e&&!t.j&&(lr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(U1(this,r),b1(this,i,n))},t)),t.j=e}var UN=class{constructor(t,e){this.h=t,this.g=e}};function F1(t){this.l=t||$N,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $N=10;function j1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function V1(t){return t.h?1:t.g?t.g.size:0}function fd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function np(t,e){t.g?t.g.add(e):t.h=e}function B1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}F1.prototype.cancel=function(){if(this.i=z1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function z1(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return zf(t.i)}function rp(){}rp.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};rp.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function bN(){this.g=new rp}function FN(t,e,n){const r=n||"";try{L1(t,function(i,s){let o=i;bo(i)&&(o=Yf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function jN(t,e){const n=new ku;if(F.Image){const r=new Image;r.onload=Sa(Ta,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Sa(Ta,n,r,"TestLoadImage: error",!1,e),r.onabort=Sa(Ta,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Sa(Ta,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ta(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ho(t){this.l=t.fc||null,this.j=t.ob||!1}De(Ho,Zf);Ho.prototype.g=function(){return new Du(this.l,this.j)};Ho.prototype.i=function(t){return function(){return t}}({});function Du(t,e){xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ip,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(Du,xe);var ip=0;x=Du.prototype;x.open=function(t,e){if(this.readyState!=ip)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wo(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wo(this)),this.readyState=ip};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wo(this)),this.g&&(this.readyState=3,wo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;H1(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function H1(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wo(this):wo(this),this.readyState==3&&H1(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Wo(this))};x.Ya=function(t){this.g&&(this.response=t,Wo(this))};x.ka=function(){this.g&&Wo(this)};function Wo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wo(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Du.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var VN=F.JSON.parse;function me(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=W1,this.L=this.M=!1}De(me,xe);var W1="",BN=/^https?$/i,zN=["POST","PUT"];x=me.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ud.g(),this.C=this.u?Wg(this.u):Wg(ud),this.g.onreadystatechange=qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Gg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=o1(zN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{G1(this),0<this.B&&((this.L=HN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.ua,this)):this.A=Jf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Gg(this,s)}};function HN(t){return Mi&&aN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Bf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function Gg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,K1(t),Pu(t)}function K1(t){t.F||(t.F=!0,Ue(t,"complete"),Ue(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),Pu(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pu(this,!0)),me.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?q1(this):this.kb())};x.kb=function(){q1(this)};function q1(t){if(t.h&&typeof Bf<"u"&&(!t.C[1]||un(t)!=4||t.da()!=2)){if(t.v&&un(t)==4)Jf(t.La,0,t);else if(Ue(t,"readystatechange"),un(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(M1)[1]||null;if(!i&&F.self&&F.self.location){var s=F.self.location.protocol;i=s.substr(0,s.length-1)}r=!BN.test(i?i.toLowerCase():"")}n=r}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var o=2<un(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",K1(t)}}finally{Pu(t)}}}}function Pu(t,e){if(t.g){G1(t);const n=t.g,r=t.C[0]?Ll:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=r}catch{}}}function G1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function un(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),VN(e)}};function Qg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case W1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Q1(t){let e="";return Wf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Q1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function gs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Y1(t){this.Ga=0,this.i=[],this.j=new ku,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=gs("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=gs("baseRetryDelayMs",5e3,t),this.hb=gs("retryDelaySeedMs",1e4,t),this.eb=gs("forwardChannelMaxRetries",2,t),this.xa=gs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new F1(t&&t.concurrentRequestLimit),this.Ja=new bN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}x=Y1.prototype;x.qa=8;x.H=1;function op(t){if(X1(t),t.H==3){var e=t.W++,n=yn(t.G);le(n,"SID",t.J),le(n,"RID",e),le(n,"TYPE","terminate"),Ko(t,n),e=new Bo(t,t.j,e,void 0),e.L=2,e.v=xu(yn(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=sE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zo(e)}rE(t)}function Ou(t){t.g&&(lp(t),t.g.cancel(),t.g=null)}function X1(t){Ou(t),t.u&&(F.clearTimeout(t.u),t.u=null),jl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Lu(t){j1(t.h)||t.m||(t.m=!0,w1(t.Na,t),t.C=0)}function WN(t,e){return V1(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=jo(qe(t.Na,t,e),nE(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Bo(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=h1(s),d1(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=J1(this,i,e),n=yn(this.G),le(n,"RID",t),le(n,"CVER",22),this.F&&le(n,"X-HTTP-Session-Id",this.F),Ko(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Q1(s)))+"&"+e:this.o&&sp(n,this.o,s)),np(this.h,i),this.bb&&le(n,"TYPE","init"),this.P?(le(n,"$req",e),le(n,"SID","null"),i.ba=!0,hd(i,n,null)):hd(i,n,e),this.H=2}}else this.H==3&&(t?Yg(this,t):this.i.length==0||j1(this.h)||Yg(this))};function Yg(t,e){var n;e?n=e.m:n=t.W++;const r=yn(t.G);le(r,"SID",t.J),le(r,"RID",n),le(r,"AID",t.V),Ko(t,r),t.o&&t.s&&sp(r,t.o,t.s),n=new Bo(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=J1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),np(t.h,n),hd(n,r,e)}function Ko(t,e){t.ma&&Wf(t.ma,function(n,r){le(e,r,n)}),t.l&&L1({},function(n,r){le(e,r,n)})}function J1(t,e,n){n=Math.min(t.i.length,n);var r=t.l?qe(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{FN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function Z1(t){t.g||t.u||(t.ba=1,w1(t.Ma,t),t.A=0)}function ap(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=jo(qe(t.Ma,t),nE(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,eE(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=jo(qe(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,nt(10),Ou(this),eE(this))};function lp(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function eE(t){t.g=new Bo(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=yn(t.wa);le(e,"RID","rpc"),le(e,"SID",t.J),le(e,"CI",t.M?"0":"1"),le(e,"AID",t.V),le(e,"TYPE","xmlhttp"),Ko(t,e),t.o&&t.s&&sp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=xu(yn(e)),n.s=null,n.S=!0,x1(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Ou(this),ap(this),nt(19))};function jl(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function tE(t,e){var n=null;if(t.g==e){jl(t),lp(t),t.g=null;var r=2}else if(fd(t.h,e))n=e.F,B1(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Cu(),Ue(r,new C1(r,n)),Lu(t)}else Z1(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&WN(t,e)||r==2&&ap(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:_r(t,5);break;case 4:_r(t,10);break;case 3:_r(t,6);break;default:_r(t,2)}}}function nE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function _r(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=qe(t.pb,t);n||(n=new Cr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||bl(n,"https"),xu(n)),jN(n.toString(),r)}else nt(2);t.H=0,t.l&&t.l.za(e),rE(t),X1(t)}x.pb=function(t){t?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function rE(t){if(t.H=0,t.pa=[],t.l){const e=z1(t.h);(e.length!=0||t.i.length!=0)&&(Fg(t.pa,e),Fg(t.pa,t.i),t.h.i.length=0,zf(t.i),t.i.length=0),t.l.ya()}}function iE(t,e,n){var r=n instanceof Cr?yn(n):new Cr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Fl(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Cr(null,void 0);r&&bl(s,r),e&&(s.g=e),i&&Fl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&le(r,n,e),le(r,"VER",t.qa),Ko(t,r),r}function sE(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new me(new Ho({ob:!0})):new me(t.va),e.Oa(t.I),e}function oE(){}x=oE.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.Va=function(){};function Vl(){if(Mi&&!(10<=Number(lN)))throw Error("Environmental error: no available transport.")}Vl.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){xe.call(this),this.g=new Y1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ml(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ml(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ts(this)}De(wt,xe);wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=iE(t,null,t.Y),Lu(t)};wt.prototype.close=function(){op(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yf(t),t=n);e.i.push(new UN(e.fb++,t)),e.H==3&&Lu(e)};wt.prototype.N=function(){this.g.l=null,delete this.j,op(this.g),delete this.g,wt.$.N.call(this)};function aE(t){ep.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(aE,ep);function lE(){tp.call(this),this.status=1}De(lE,tp);function ts(t){this.g=t}De(ts,oE);ts.prototype.Ba=function(){Ue(this.g,"a")};ts.prototype.Aa=function(t){Ue(this.g,new aE(t))};ts.prototype.za=function(t){Ue(this.g,new lE)};ts.prototype.ya=function(){Ue(this.g,"b")};function KN(){this.blockSize=-1}function Ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}De(Ft,KN);Ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Ft.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Vc(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Vc(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Vc(this,r),i=0;break}}this.h=i,this.i+=e};Ft.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ee(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var qN={};function up(t){return-128<=t&&128>t?a1(qN,t,function(e){return new ee([e|0],0>e?-1:0)}):new ee([t|0],0>t?-1:0)}function Kt(t){if(isNaN(t)||!isFinite(t))return Ii;if(0>t)return Le(Kt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=pd;return new ee(e,0)}function uE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Le(uE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Kt(Math.pow(e,8)),r=Ii,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Kt(Math.pow(e,s)),r=r.R(s).add(Kt(o))):(r=r.R(n),r=r.add(Kt(o)))}return r}var pd=4294967296,Ii=up(0),md=up(1),Xg=up(16777216);x=ee.prototype;x.ea=function(){if(Tt(this))return-Le(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:pd+r)*e,e*=pd}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cn(this))return"0";if(Tt(this))return"-"+Le(this).toString(t);for(var e=Kt(Math.pow(t,6)),n=this,r="";;){var i=zl(n,e).g;n=Bl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,cn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tt(t){return t.h==-1}x.X=function(t){return t=Bl(this,t),Tt(t)?-1:cn(t)?0:1};function Le(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ee(n,~t.h).add(md)}x.abs=function(){return Tt(this)?Le(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ee(n,n[n.length-1]&-2147483648?-1:0)};function Bl(t,e){return t.add(Le(e))}x.R=function(t){if(cn(this)||cn(t))return Ii;if(Tt(this))return Tt(t)?Le(this).R(Le(t)):Le(Le(this).R(t));if(Tt(t))return Le(this.R(Le(t)));if(0>this.X(Xg)&&0>t.X(Xg))return Kt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ka(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ka(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ka(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ka(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ee(n,0)};function ka(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ys(t,e){this.g=t,this.h=e}function zl(t,e){if(cn(e))throw Error("division by zero");if(cn(t))return new ys(Ii,Ii);if(Tt(t))return e=zl(Le(t),e),new ys(Le(e.g),Le(e.h));if(Tt(e))return e=zl(t,Le(e)),new ys(Le(e.g),e.h);if(30<t.g.length){if(Tt(t)||Tt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=md,r=e;0>=r.X(t);)n=Jg(n),r=Jg(r);var i=Jr(n,1),s=Jr(r,1);for(r=Jr(r,2),n=Jr(n,2);!cn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Jr(r,1),n=Jr(n,1)}return e=Bl(t,i.R(e)),new ys(i,e)}for(i=Ii;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Kt(n),o=s.R(e);Tt(o)||0<o.X(t);)n-=r,s=Kt(n),o=s.R(e);cn(s)&&(s=md),i=i.add(s),t=Bl(t,o)}return new ys(i,t)}x.gb=function(t){return zl(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ee(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ee(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ee(n,this.h^t.h)};function Jg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ee(n,t.h)}function Jr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ee(i,t.h)}Vl.prototype.createWebChannel=Vl.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;Au.NO_ERROR=0;Au.TIMEOUT=8;Au.HTTP_ERROR=6;A1.COMPLETE="complete";R1.EventType=Vo;Vo.OPEN="a";Vo.CLOSE="b";Vo.ERROR="c";Vo.MESSAGE="d";xe.prototype.listen=xe.prototype.O;me.prototype.listenOnce=me.prototype.P;me.prototype.getLastError=me.prototype.Sa;me.prototype.getLastErrorCode=me.prototype.Ia;me.prototype.getStatus=me.prototype.da;me.prototype.getResponseJson=me.prototype.Wa;me.prototype.getResponseText=me.prototype.ja;me.prototype.send=me.prototype.ha;me.prototype.setWithCredentials=me.prototype.Oa;Ft.prototype.digest=Ft.prototype.l;Ft.prototype.reset=Ft.prototype.reset;Ft.prototype.update=Ft.prototype.j;ee.prototype.add=ee.prototype.add;ee.prototype.multiply=ee.prototype.R;ee.prototype.modulo=ee.prototype.gb;ee.prototype.compare=ee.prototype.X;ee.prototype.toNumber=ee.prototype.ea;ee.prototype.toString=ee.prototype.toString;ee.prototype.getBits=ee.prototype.D;ee.fromNumber=Kt;ee.fromString=uE;var GN=function(){return new Vl},QN=function(){return Cu()},Bc=Au,YN=A1,XN=Gr,Zg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},JN=Ho,Ca=R1,ZN=me,ex=Ft,Ti=ee;const ey="@firebase/firestore";/**
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
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
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
 */let ns="9.21.0";/**
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
 */const Fr=new xf("@firebase/firestore");function ty(){return Fr.logLevel}function L(t,...e){if(Fr.logLevel<=X.DEBUG){const n=e.map(cp);Fr.debug(`Firestore (${ns}): ${t}`,...n)}}function vn(t,...e){if(Fr.logLevel<=X.ERROR){const n=e.map(cp);Fr.error(`Firestore (${ns}): ${t}`,...n)}}function Ui(t,...e){if(Fr.logLevel<=X.WARN){const n=e.map(cp);Fr.warn(`Firestore (${ns}): ${t}`,...n)}}function cp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function b(t="Unexpected state"){const e=`FIRESTORE (${ns}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function se(t,e){t||b()}function B(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class cE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class nx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rx{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new cE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new Be(e)}}class ix{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class sx{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new ix(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ox{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ax{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string"),this.T=n.token,new ox(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function lx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class hE{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function $i(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ce(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new Ce(0,0))}static max(){return new V(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Eo{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Eo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Eo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends Eo{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const ux=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Eo{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return ux.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(re.fromString(e))}static fromName(e){return new M(re.fromString(e).popFirst(5))}static empty(){return new M(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new re(e.slice()))}}function cx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new tr(i,M.empty(),e)}function hx(t){return new tr(t.readTime,t.key,-1)}class tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tr(V.min(),M.empty(),-1)}static max(){return new tr(V.max(),M.empty(),-1)}}function dx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
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
 */const fx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class px{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qo(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==fx)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Go(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class hp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}hp.ct=-1;function Mu(t){return t==null}function Hl(t){return t===0&&1/t==-1/0}function mx(t){return typeof t=="number"&&Number.isInteger(t)&&!Hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ny(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class fe{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Aa(this.root,e,this.comparator,!0)}}class Aa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Oe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ry(this.data.getIterator())}getIteratorFrom(e){return new ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new mt([])}unionWith(e){let n=new Qe(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fE("Invalid base64 string: "+i):i}}(e);return new Je(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const gx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(t){if(se(!!t),typeof t=="string"){let e=0;const n=gx.exec(t);if(se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
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
 */function dp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fp(t){const e=t.mapValue.fields.__previous_value__;return dp(e)?fp(e):e}function _o(t){const e=nr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class yx{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class So{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new So("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof So&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ra={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dp(t)?4:vx(t)?9007199254740991:10:b()}function en(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _o(t).isEqual(_o(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=nr(r.timestampValue),o=nr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return jr(r.bytesValue).isEqual(jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return _e(r.geoPointValue.latitude)===_e(i.geoPointValue.latitude)&&_e(r.geoPointValue.longitude)===_e(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return _e(r.integerValue)===_e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=_e(r.doubleValue),o=_e(i.doubleValue);return s===o?Hl(s)===Hl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return $i(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(ny(s)!==ny(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!en(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function Io(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function bi(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=_e(i.integerValue||i.doubleValue),a=_e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return iy(t.timestampValue,e.timestampValue);case 4:return iy(_o(t),_o(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,s){const o=jr(i),a=jr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=J(o[l],a[l]);if(u!==0)return u}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=J(_e(i.latitude),_e(s.latitude));return o!==0?o:J(_e(i.longitude),_e(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=bi(o[l],a[l]);if(u)return u}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ra.mapValue&&s===Ra.mapValue)return 0;if(i===Ra.mapValue)return 1;if(s===Ra.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=J(a[c],u[c]);if(h!==0)return h;const d=bi(o[a[c]],l[u[c]]);if(d!==0)return d}return J(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=nr(t),r=nr(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function Fi(t){return gd(t)}function gd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=nr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?jr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=gd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${gd(r.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function sy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yd(t){return!!t&&"integerValue"in t}function pp(t){return!!t&&"arrayValue"in t}function oy(t){return!!t&&"nullValue"in t}function ay(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qa(t){return!!t&&"mapValue"in t}function Vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Vs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new at(Vs(this.value))}}function pE(t){const e=[];return Qr(t.fields,(n,r)=>{const i=new Ke([n]);if(Qa(r)){const s=pE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new mt(e)}/**
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
 */class He{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new He(e,0,V.min(),V.min(),V.min(),at.empty(),0)}static newFoundDocument(e,n,r,i){return new He(e,1,n,V.min(),r,i,0)}static newNoDocument(e,n){return new He(e,2,n,V.min(),V.min(),at.empty(),0)}static newUnknownDocument(e,n){return new He(e,3,n,V.min(),V.min(),at.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wl{constructor(e,n){this.position=e,this.inclusive=n}}function ly(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=bi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function uy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bs{constructor(e,n="asc"){this.field=e,this.dir=n}}function wx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class mE{}class Ie extends mE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _x(e,n,r):n==="array-contains"?new Tx(e,r):n==="in"?new kx(e,r):n==="not-in"?new Cx(e,r):n==="array-contains-any"?new Ax(e,r):new Ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Sx(e,r):new Ix(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bi(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jt extends mE{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new jt(e,n)}matches(e){return gE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function gE(t){return t.op==="and"}function yE(t){return Ex(t)&&gE(t)}function Ex(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function vd(t){if(t instanceof Ie)return t.field.canonicalString()+t.op.toString()+Fi(t.value);if(yE(t))return t.filters.map(e=>vd(e)).join(",");{const e=t.filters.map(n=>vd(n)).join(",");return`${t.op}(${e})`}}function vE(t,e){return t instanceof Ie?function(n,r){return r instanceof Ie&&n.op===r.op&&n.field.isEqual(r.field)&&en(n.value,r.value)}(t,e):t instanceof jt?function(n,r){return r instanceof jt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&vE(s,r.filters[o]),!0):!1}(t,e):void b()}function wE(t){return t instanceof Ie?function(e){return`${e.field.canonicalString()} ${e.op} ${Fi(e.value)}`}(t):t instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(wE).join(" ,")+"}"}(t):"Filter"}class _x extends Ie{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class Sx extends Ie{constructor(e,n){super(e,"in",n),this.keys=EE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ix extends Ie{constructor(e,n){super(e,"not-in",n),this.keys=EE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function EE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class Tx extends Ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pp(n)&&Io(n.arrayValue,this.value)}}class kx extends Ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Io(this.value.arrayValue,n)}}class Cx extends Ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(Io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Io(this.value.arrayValue,n)}}class Ax extends Ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Io(this.value.arrayValue,r))}}/**
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
 */class Rx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function cy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Rx(t,e,n,r,i,s,o)}function mp(t){const e=B(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Mu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fi(r)).join(",")),e.ft=n}return e.ft}function gp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uy(t.startAt,e.startAt)&&uy(t.endAt,e.endAt)}function wd(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function Nx(t,e,n,r,i,s,o,a){return new Qo(t,e,n,r,i,s,o,a)}function yp(t){return new Qo(t)}function hy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _E(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vp(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function SE(t){return t.collectionGroup!==null}function ki(t){const e=B(t);if(e.dt===null){e.dt=[];const n=vp(e),r=_E(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Bs(n)),e.dt.push(new Bs(Ke.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Bs(Ke.keyField(),s))}}}return e.dt}function wn(t){const e=B(t);if(!e._t)if(e.limitType==="F")e._t=cy(e.path,e.collectionGroup,ki(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ki(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Bs(s.field,o))}const r=e.endAt?new Wl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Wl(e.startAt.position,e.startAt.inclusive):null;e._t=cy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Ed(t,e){e.getFirstInequalityField(),vp(t);const n=t.filters.concat([e]);return new Qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _d(t,e,n){return new Qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uu(t,e){return gp(wn(t),wn(e))&&t.limitType===e.limitType}function IE(t){return`${mp(wn(t))}|lt:${t.limitType}`}function Sd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>wE(r)).join(", ")}]`),Mu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fi(r)).join(",")),`Target(${n})`}(wn(t))}; limitType=${t.limitType})`}function $u(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ki(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ly(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ki(n),r)||n.endAt&&!function(i,s,o){const a=ly(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ki(n),r))}(t,e)}function xx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function TE(t){return(e,n)=>{let r=!1;for(const i of ki(t)){const s=Dx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Dx(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?bi(a,l):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
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
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return dE(this.inner)}size(){return this.innerSize}}/**
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
 */const Px=new fe(M.comparator);function En(){return Px}const kE=new fe(M.comparator);function As(...t){let e=kE;for(const n of t)e=e.insert(n.key,n);return e}function CE(t){let e=kE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return zs()}function AE(){return zs()}function zs(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ox=new fe(M.comparator),Lx=new Qe(M.comparator);function K(...t){let e=Lx;for(const n of t)e=e.add(n);return e}const Mx=new Qe(J);function Ux(){return Mx}/**
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
 */function RE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hl(e)?"-0":e}}function NE(t){return{integerValue:""+t}}function $x(t,e){return mx(e)?NE(e):RE(t,e)}/**
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
 */class bu{constructor(){this._=void 0}}function bx(t,e,n){return t instanceof Kl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&dp(i)&&(i=fp(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof To?DE(t,e):t instanceof ko?PE(t,e):function(r,i){const s=xE(r,i),o=dy(s)+dy(r.wt);return yd(s)&&yd(r.wt)?NE(o):RE(r.serializer,o)}(t,e)}function Fx(t,e,n){return t instanceof To?DE(t,e):t instanceof ko?PE(t,e):n}function xE(t,e){return t instanceof ql?yd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Kl extends bu{}class To extends bu{constructor(e){super(),this.elements=e}}function DE(t,e){const n=OE(e);for(const r of t.elements)n.some(i=>en(i,r))||n.push(r);return{arrayValue:{values:n}}}class ko extends bu{constructor(e){super(),this.elements=e}}function PE(t,e){let n=OE(e);for(const r of t.elements)n=n.filter(i=>!en(i,r));return{arrayValue:{values:n}}}class ql extends bu{constructor(e,n){super(),this.serializer=e,this.wt=n}}function dy(t){return _e(t.integerValue||t.doubleValue)}function OE(t){return pp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jx(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof To&&r instanceof To||n instanceof ko&&r instanceof ko?$i(n.elements,r.elements,en):n instanceof ql&&r instanceof ql?en(n.wt,r.wt):n instanceof Kl&&r instanceof Kl}(t.transform,e.transform)}class Vx{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fu{}function LE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wp(t.key,Ut.none()):new Yo(t.key,t.data,Ut.none());{const n=t.data,r=at.empty();let i=new Qe(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ur(t.key,r,new mt(i.toArray()),Ut.none())}}function Bx(t,e,n){t instanceof Yo?function(r,i,s){const o=r.value.clone(),a=py(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(r,i,s){if(!Ya(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=py(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ME(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Hs(t,e,n,r){return t instanceof Yo?function(i,s,o,a){if(!Ya(i.precondition,s))return o;const l=i.value.clone(),u=my(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ur?function(i,s,o,a){if(!Ya(i.precondition,s))return o;const l=my(i.fieldTransforms,a,s),u=s.data;return u.setAll(ME(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ya(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function zx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=xE(r.transform,i||null);s!=null&&(n===null&&(n=at.empty()),n.set(r.field,s))}return n||null}function fy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&$i(n,r,(i,s)=>jx(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends Fu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ur extends Fu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ME(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function py(t,e,n){const r=new Map;se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Fx(o,a,n[i]))}return r}function my(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,bx(s,o,e))}return r}class wp extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hx extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Bx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=AE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=LE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&$i(this.mutations,e.mutations,(n,r)=>fy(n,r))&&$i(this.baseMutations,e.baseMutations,(n,r)=>fy(n,r))}}class Ep{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length);let i=Ox;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ep(e,n,r,i)}}/**
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
 */class Kx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ee,G;function Gx(t){switch(t){default:return b();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function UE(t){if(t===void 0)return vn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ee.OK:return I.OK;case Ee.CANCELLED:return I.CANCELLED;case Ee.UNKNOWN:return I.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return I.INTERNAL;case Ee.UNAVAILABLE:return I.UNAVAILABLE;case Ee.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ee.NOT_FOUND:return I.NOT_FOUND;case Ee.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ee.ABORTED:return I.ABORTED;case Ee.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ee.DATA_LOSS:return I.DATA_LOSS;default:return b()}}(G=Ee||(Ee={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Na}static getOrCreateInstance(){return Na===null&&(Na=new _p),Na}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Na=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(){return new TextEncoder}/**
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
 */const Yx=new Ti([4294967295,4294967295],0);function gy(t){const e=Qx().encode(t),n=new ex;return n.update(e),new Uint8Array(n.digest())}function yy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ti([n,r],0),new Ti([i,s],0)]}class Sp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Rs(`Invalid padding: ${n}`);if(r<0)throw new Rs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Rs(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Ti.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(Ti.fromNumber(r)));return i.compare(Yx)===1&&(i=new Ti([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=gy(e),[r,i]=yy(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Sp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=gy(e),[r,i]=yy(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ju{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ju(V.min(),i,new fe(J),En(),K())}}class Xo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,K(),K(),K())}}/**
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
 */class Xa{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class $E{constructor(e,n){this.targetId=e,this.bt=n}}class bE{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class vy{constructor(){this.Vt=0,this.St=Ey(),this.Dt=Je.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=K(),n=K(),r=K();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new Xo(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=Ey()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class Xx{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=En(),this.jt=wy(),this.zt=new fe(J)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(wd(o))if(i===0){const a=new M(o.path);this.Jt(r,a,He.newNoDocument(a,V.min()))}else se(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=_p.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,y,w,v,_,p;const f={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(f.bloomFilter={applied:u===0,hashCount:(d=g==null?void 0:g.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(w=(y=g==null?void 0:g.bits)===null||y===void 0?void 0:y.bitmap)===null||w===void 0?void 0:w.length)!==null&&v!==void 0?v:0,padding:(p=(_=g==null?void 0:g.bits)===null||_===void 0?void 0:_.padding)!==null&&p!==void 0?p:0}),f}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=jr(s).toUint8Array()}catch(c){if(c instanceof fE)return Ui("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Sp(l,o,a)}catch(c){return Ui(c instanceof Rs?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&wd(a.target)){const l=new M(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,He.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=K();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new ju(e,n,this.zt,this.Qt,r);return this.Qt=En(),this.jt=wy(),this.zt=new fe(J),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new vy,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new Qe(J),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new vy),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function wy(){return new fe(M.comparator)}function Ey(){return new fe(M.comparator)}const Jx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),e2=(()=>({and:"AND",or:"OR"}))();class t2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Id(t,e){return t.useProto3Json||Mu(e)?e:{value:e}}function Gl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function n2(t,e){return Gl(t,e.toTimestamp())}function Zt(t){return se(!!t),V.fromTimestamp(function(e){const n=nr(e);return new Ce(n.seconds,n.nanos)}(t))}function Ip(t,e){return function(n){return new re(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jE(t){const e=re.fromString(t);return se(HE(e)),e}function Td(t,e){return Ip(t.databaseId,e.path)}function zc(t,e){const n=jE(e);if(n.get(1)!==t.databaseId.projectId)throw new O(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(VE(n))}function kd(t,e){return Ip(t.databaseId,e)}function r2(t){const e=jE(t);return e.length===4?re.emptyPath():VE(e)}function Cd(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function VE(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _y(t,e,n){return{name:Td(t,e),fields:n.value.mapValue.fields}}function i2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(se(u===void 0||typeof u=="string"),Je.fromBase64String(u||"")):(se(u===void 0||u instanceof Uint8Array),Je.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:UE(l.code);return new O(u,l.message||"")}(o);n=new bE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zc(t,r.document.name),s=Zt(r.document.updateTime),o=r.document.createTime?Zt(r.document.createTime):V.min(),a=new at({mapValue:{fields:r.document.fields}}),l=He.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Xa(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zc(t,r.document),s=r.readTime?Zt(r.readTime):V.min(),o=He.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zc(t,r.document),s=r.removedTargetIds||[];n=new Xa([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qx(i,s),a=r.targetId;n=new $E(a,o)}}return n}function s2(t,e){let n;if(e instanceof Yo)n={update:_y(t,e.key,e.value)};else if(e instanceof wp)n={delete:Td(t,e.key)};else if(e instanceof ur)n={update:_y(t,e.key,e.data),updateMask:p2(e.fieldMask)};else{if(!(e instanceof Hx))return b();n={verify:Td(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Kl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof To)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ko)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ql)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:n2(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function o2(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Zt(r.updateTime):Zt(i);return s.isEqual(V.min())&&(s=Zt(i)),new Vx(s,r.transformResults||[])}(n,e))):[]}function a2(t,e){return{documents:[kd(t,e.path)]}}function l2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=kd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return zE(jt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Zr(c.field),direction:h2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Id(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function u2(t){let e=r2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=BE(c);return h instanceof jt&&yE(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Bs(ei(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Mu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Wl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Wl(d,h)}(n.endAt)),Nx(e,i,o,s,a,"F",l,u)}function c2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ei(e.unaryFilter.field);return Ie.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ei(e.unaryFilter.field);return Ie.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ei(e.unaryFilter.field);return Ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ei(e.unaryFilter.field);return Ie.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(e){return Ie.create(ei(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(n=>BE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(t):b()}function h2(t){return Jx[t]}function d2(t){return Zx[t]}function f2(t){return e2[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function ei(t){return Ke.fromServerFormat(t.fieldPath)}function zE(t){return t instanceof Ie?function(e){if(e.op==="=="){if(ay(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NAN"}};if(oy(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ay(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NAN"}};if(oy(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(e.field),op:d2(e.op),value:e.value}}}(t):t instanceof jt?function(e){const n=e.getFilters().map(r=>zE(r));return n.length===1?n[0]:{compositeFilter:{op:f2(e.op),filters:n}}}(t):b()}function p2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function HE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Un{constructor(e,n,r,i,s=V.min(),o=V.min(),a=Je.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class m2{constructor(e){this.le=e}}function g2(t){const e=u2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_d(e,e.limit,"L"):e}/**
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
 */class y2{constructor(){this.sn=new v2}addToCollectionParentIndex(e,n){return this.sn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(tr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class v2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qe(re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(re.comparator)).toArray()}}/**
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
 */class ji{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new ji(0)}static kn(){return new ji(-1)}}/**
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
 */class w2{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class E2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Hs(r.mutation,i,mt.empty(),Ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,n,r=K()){const i=Sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=As();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,K()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=En();const o=zs(),a=zs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ur)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Hs(c.mutation,u,c.mutation.getFieldMask(),Ce.now())):o.set(u.key,mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new E2(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=zs();let i=new fe((o,a)=>o-a),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||mt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||K()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=AE();c.forEach(d=>{if(!s.has(d)){const y=LE(n.get(d),r.get(d));y!==null&&h.set(d,y),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):SE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(Sr());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,K())).next(c=>({batchId:a,changes:CE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=As();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=As();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(u,c){return new Qo(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,He.newInvalidDocument(u)))});let o=As();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Hs(u.mutation,l,mt.empty(),Ce.now()),$u(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class S2{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return A.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Zt(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:g2(r.bundledQuery),readTime:Zt(r.readTime)}}(n)),A.resolve()}}/**
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
 */class I2{constructor(){this.overlays=new fe(M.comparator),this.hs=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Sr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Sr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Sr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Kx(n,r));let s=this.hs.get(n);s===void 0&&(s=K(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class Tp{constructor(){this.ls=new Qe(Ae.fs),this.ds=new Qe(Ae._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new Ae(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new Ae(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new M(new re([])),r=new Ae(n,e),i=new Ae(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new M(new re([])),r=new Ae(n,e),i=new Ae(n,e+1);let s=K();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ae(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return M.comparator(e.key,n.key)||J(e.Es,n.Es)}static _s(e,n){return J(e.Es,n.Es)||M.comparator(e.key,n.key)}}/**
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
 */class T2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new Qe(Ae.fs)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ae(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ae(n,0),i=new Ae(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(J);return n.forEach(i=>{const s=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),A.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Ae(new M(s),0);let a=new Qe(J);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),A.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return A.forEach(n.mutations,i=>{const s=new Ae(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new Ae(n,0),i=this.Rs.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class k2{constructor(e){this.Ss=e,this.docs=new fe(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():He.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():He.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=En();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||dx(hx(c),r)<=0||(i.has(c.key)||$u(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}Ds(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new C2(this)}getSize(e){return A.resolve(this.size)}}class C2 extends w2{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class A2{constructor(e){this.persistence=e,this.Cs=new rs(n=>mp(n),gp),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Tp,this.targetCount=0,this.ks=ji.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),A.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.$n(n),A.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Ns.containsKey(n))}}/**
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
 */class R2{constructor(e,n){this.Ms={},this.overlays={},this.Os=new hp(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new A2(this),this.indexManager=new y2,this.remoteDocumentCache=function(r){return new k2(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new m2(n),this.Ls=new S2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new I2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new T2(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new N2(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return A.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class N2 extends px{constructor(e){super(),this.currentSequenceNumber=e}}class kp{constructor(e){this.persistence=e,this.Gs=new Tp,this.Qs=null}static js(e){return new kp(e)}get zs(){if(this.Qs)return this.Qs;throw b()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.zs,r=>{const i=M.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,V.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return A.or([()=>A.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class Cp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=K(),i=K();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Cp(e,n.fromCache,r,i)}}/**
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
 */class x2{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(hy(n))return A.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_d(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=K(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,_d(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return hy(n)||i.isEqual(V.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(ty()<=X.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sd(n)),this.zi(e,o,n,cx(i,-1)))})}Qi(e,n){let r=new Qe(TE(e));return n.forEach((i,s)=>{$u(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return ty()<=X.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Sd(n)),this.qi.getDocumentsMatchingQuery(e,n,tr.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class D2{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new fe(J),this.Ji=new rs(s=>mp(s),gp),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _2(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function P2(t,e,n,r){return new D2(t,e,n,r)}async function WE(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=K();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function O2(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=A.resolve();return h.forEach(y=>{d=d.next(()=>u.getEntry(a,y)).next(w=>{const v=l.docVersions.get(y);se(v!==null),w.version.compareTo(v)<0&&(c.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=K();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function KE(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function L2(t,e){const n=B(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,h)));let y=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?y=y.withResumeToken(Je.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),i=i.insert(h,y),function(w,v,_){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,y,c)&&a.push(n.Fs.updateTargetData(s,y))});let l=En(),u=K();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(M2(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(V.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function M2(t,e,n){let r=K(),i=K();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=En();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(V.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function U2(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $2(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function Ad(t,e,n){const r=B(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Go(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function Sy(t,e,n){const r=B(t);let i=V.min(),s=K();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=B(a),h=c.Ji.get(u);return h!==void 0?A.resolve(c.Hi.get(h)):c.Fs.getTargetData(l,u)}(r,o,wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:V.min(),n?s:K())).next(a=>(b2(r,xx(e),a),{documents:a,sr:s})))}function b2(t,e,n){let r=t.Yi.get(e)||V.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class Iy{constructor(){this.activeTargetIds=Ux()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class F2{constructor(){this.Wr=new Iy,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Iy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class j2{Jr(e){}shutdown(){}}/**
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
 */class Ty{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa=null;function Hc(){return xa===null?xa=268435456+Math.round(2147483648*Math.random()):xa++,"0x"+xa.toString(16)}/**
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
 */const V2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class B2{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const je="WebChannelConnection";class z2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=Hc(),a=this.Io(e,n);L("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(L("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ui("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ns,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=V2[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=Hc();return new Promise((o,a)=>{const l=new ZN;l.setWithCredentials(!0),l.listenOnce(YN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Bc.NO_ERROR:const c=l.getResponseJson();L(je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Bc.TIMEOUT:L(je,`RPC '${e}' ${s} timed out`),a(new O(I.DEADLINE_EXCEEDED,"Request time out"));break;case Bc.HTTP_ERROR:const h=l.getStatus();if(L(je,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const y=d==null?void 0:d.error;if(y&&y.status&&y.message){const w=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(_)>=0?_:I.UNKNOWN}(y.status);a(new O(w,y.message))}else a(new O(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new O(I.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{L(je,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);L(je,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Hc(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=GN(),a=QN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new JN({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");L(je,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const y=new B2({io:v=>{d?L(je,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(L(je,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),L(je,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},ro:()=>c.close()}),w=(v,_,p)=>{v.listen(_,f=>{try{p(f)}catch(g){setTimeout(()=>{throw g},0)}})};return w(c,Ca.EventType.OPEN,()=>{d||L(je,`RPC '${e}' stream ${i} transport opened.`)}),w(c,Ca.EventType.CLOSE,()=>{d||(d=!0,L(je,`RPC '${e}' stream ${i} transport closed`),y.fo())}),w(c,Ca.EventType.ERROR,v=>{d||(d=!0,Ui(je,`RPC '${e}' stream ${i} transport errored:`,v),y.fo(new O(I.UNAVAILABLE,"The operation could not be completed")))}),w(c,Ca.EventType.MESSAGE,v=>{var _;if(!d){const p=v.data[0];se(!!p);const f=p,g=f.error||((_=f[0])===null||_===void 0?void 0:_.error);if(g){L(je,`RPC '${e}' stream ${i} received error:`,g);const E=g.status;let k=function(R){const N=Ee[R];if(N!==void 0)return UE(N)}(E),T=g.message;k===void 0&&(k=I.INTERNAL,T="Unknown error status: "+E+" with message "+g.message),d=!0,y.fo(new O(k,T)),c.close()}else L(je,`RPC '${e}' stream ${i} received:`,p),y._o(p)}}),w(a,XN.STAT_EVENT,v=>{v.stat===Zg.PROXY?L(je,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Zg.NOPROXY&&L(je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.lo()},0),y}}function Wc(){return typeof document<"u"?document:null}/**
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
 */function Vu(t){return new t2(t,!0)}/**
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
 */class qE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class GE{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new qE(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new O(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class H2 extends GE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=i2(this.serializer,e),r=function(i){if(!("targetChange"in i))return V.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?V.min():s.readTime?Zt(s.readTime):V.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Cd(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=wd(a)?{documents:a2(i,a)}:{query:l2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=FE(i,s.resumeToken);const l=Id(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(V.min())>0){o.readTime=Gl(i,s.snapshotVersion.toTimestamp());const l=Id(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=c2(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Cd(this.serializer),n.removeTarget=e,this.zo(n)}}class W2 extends GE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=o2(e.writeResults,e.commitTime),r=Zt(e.commitTime);return this.listener.uu(r,n)}return se(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Cd(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>s2(this.serializer,r))};this.zo(n)}}/**
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
 */class K2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new O(I.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(I.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(I.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class q2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(vn(n),this.wu=!1):L("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class G2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=B(a);l.Au.add(4),await Jo(l),l.Pu.set("Unknown"),l.Au.delete(4),await Bu(l)}(this))})}),this.Pu=new q2(r,i)}}async function Bu(t){if(Yr(t))for(const e of t.Ru)await e(!0)}async function Jo(t){for(const e of t.Ru)await e(!1)}function QE(t,e){const n=B(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Np(n)?Rp(n):is(n).Uo()&&Ap(n,e))}function YE(t,e){const n=B(t),r=is(n);n.Eu.delete(e),r.Uo()&&XE(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():Yr(n)&&n.Pu.set("Unknown"))}function Ap(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(V.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}is(t).nu(e)}function XE(t,e){t.bu.Lt(e),is(t).su(e)}function Rp(t){t.bu=new Xx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),is(t).start(),t.Pu.mu()}function Np(t){return Yr(t)&&!is(t).qo()&&t.Eu.size>0}function Yr(t){return B(t).Au.size===0}function JE(t){t.bu=void 0}async function Q2(t){t.Eu.forEach((e,n)=>{Ap(t,e)})}async function Y2(t,e){JE(t),Np(t)?(t.Pu.pu(e),Rp(t)):t.Pu.set("Unknown")}async function X2(t,e,n){if(t.Pu.set("Online"),e instanceof bE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ql(t,r)}else if(e instanceof Xa?t.bu.Wt(e):e instanceof $E?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(V.min()))try{const r=await KE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(Je.EMPTY_BYTE_STRING,u.snapshotVersion)),XE(i,a);const c=new Un(u.target,a,l,u.sequenceNumber);Ap(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Ql(t,r)}}async function Ql(t,e,n){if(!Go(e))throw e;t.Au.add(1),await Jo(t),t.Pu.set("Offline"),n||(n=()=>KE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Bu(t)})}function ZE(t,e){return e().catch(n=>Ql(t,n,e))}async function zu(t){const e=B(t),n=rr(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;J2(e);)try{const i=await U2(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,Z2(e,i)}catch(i){await Ql(e,i)}e_(e)&&t_(e)}function J2(t){return Yr(t)&&t.Tu.length<10}function Z2(t,e){t.Tu.push(e);const n=rr(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function e_(t){return Yr(t)&&!rr(t).qo()&&t.Tu.length>0}function t_(t){rr(t).start()}async function eD(t){rr(t).au()}async function tD(t){const e=rr(t);for(const n of t.Tu)e.ou(n.mutations)}async function nD(t,e,n){const r=t.Tu.shift(),i=Ep.from(r,e,n);await ZE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zu(t)}async function rD(t,e){e&&rr(t).ru&&await async function(n,r){if(i=r.code,Gx(i)&&i!==I.ABORTED){const s=n.Tu.shift();rr(n).Go(),await ZE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await zu(n)}var i}(t,e),e_(t)&&t_(t)}async function ky(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Yr(n);n.Au.add(3),await Jo(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Bu(n)}async function iD(t,e){const n=B(t);e?(n.Au.delete(2),await Bu(n)):e||(n.Au.add(2),await Jo(n),n.Pu.set("Unknown"))}function is(t){return t.Vu||(t.Vu=function(e,n,r){const i=B(e);return i.lu(),new H2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:Q2.bind(null,t),co:Y2.bind(null,t),eu:X2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Np(t)?Rp(t):t.Pu.set("Unknown")):(await t.Vu.stop(),JE(t))})),t.Vu}function rr(t){return t.Su||(t.Su=function(e,n,r){const i=B(e);return i.lu(),new W2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:eD.bind(null,t),co:rD.bind(null,t),cu:tD.bind(null,t),uu:nD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await zu(t)):(await t.Su.stop(),t.Tu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class xp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new xp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dp(t,e){if(vn("AsyncQueue",`${e}: ${t}`),Go(t))return new O(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ci{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=As(),this.sortedSet=new fe(this.comparator)}static emptySet(e){return new Ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Cy{constructor(){this.Du=new fe(M.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):b():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class Vi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vi(e,n,Ci.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class sD{constructor(){this.xu=void 0,this.listeners=[]}}class oD{constructor(){this.queries=new rs(e=>IE(e),Uu),this.onlineState="Unknown",this.Nu=new Set}}async function aD(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new sD),i)try{s.xu=await n.onListen(r)}catch(o){const a=Dp(o,`Initialization of query '${Sd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&Pp(n)}async function lD(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function uD(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&Pp(n)}function cD(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Pp(t){t.Nu.forEach(e=>{e.next()})}class hD{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Vi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class n_{constructor(e){this.key=e}}class r_{constructor(e){this.key=e}}class dD{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=K(),this.mutatedKeys=K(),this.Zu=TE(e),this.tc=new Ci(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new Cy,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),y=$u(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),v=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let _=!1;d&&y?d.data.isEqual(y.data)?w!==v&&(r.track({type:3,doc:y}),_=!0):this.ic(d,y)||(r.track({type:2,doc:y}),_=!0,(l&&this.Zu(y,l)>0||u&&this.Zu(y,u)<0)&&(a=!0)):!d&&y?(r.track({type:0,doc:y}),_=!0):d&&!y&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(y?(o=o.add(y),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(h,d){const y=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return y(h)-y(d)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new Vi(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Cy,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=K(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new r_(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new n_(r))}),n}ac(e){this.Ju=e.sr,this.Xu=K();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Vi.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class fD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pD{constructor(e){this.key=e,this.lc=!1}}class mD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new rs(a=>IE(a),Uu),this._c=new Map,this.wc=new Set,this.mc=new fe(M.comparator),this.gc=new Map,this.yc=new Tp,this.Ic={},this.Tc=new Map,this.Ec=ji.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function gD(t,e){const n=CD(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await $2(n.localStore,wn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await yD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&QE(n.remoteStore,o)}return i}async function yD(t,e,n,r,i){t.Rc=(h,d,y)=>async function(w,v,_,p){let f=v.view.nc(_);f.ji&&(f=await Sy(w.localStore,v.query,!1).then(({documents:k})=>v.view.nc(k,f)));const g=p&&p.targetChanges.get(v.targetId),E=v.view.applyChanges(f,w.isPrimaryClient,g);return Ry(w,v.targetId,E.uc),E.snapshot}(t,h,d,y);const s=await Sy(t.localStore,e,!0),o=new dD(e,s.sr),a=o.nc(s.documents),l=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Ry(t,n,u.uc);const c=new fD(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function vD(t,e){const n=B(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Uu(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ad(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),YE(n.remoteStore,r.targetId),Rd(n,r.targetId)}).catch(qo)):(Rd(n,r.targetId),await Ad(n.localStore,r.targetId,!0))}async function wD(t,e,n){const r=AD(t);try{const i=await function(s,o){const a=B(s),l=Ce.now(),u=o.reduce((d,y)=>d.add(y.key),K());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let y=En(),w=K();return a.Xi.getEntries(d,u).next(v=>{y=v,y.forEach((_,p)=>{p.isValidDocument()||(w=w.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,y)).next(v=>{c=v;const _=[];for(const p of o){const f=zx(p,c.get(p.key).overlayedDocument);f!=null&&_.push(new ur(p.key,f,pE(f.value.mapValue),Ut.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(c,w);return a.documentOverlayCache.saveOverlays(d,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:CE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new fe(J)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await Zo(r,i.changes),await zu(r.remoteStore)}catch(i){const s=Dp(i,"Failed to persist write");n.reject(s)}}async function i_(t,e){const n=B(t);try{const r=await L2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?se(o.lc):i.removedDocuments.size>0&&(se(o.lc),o.lc=!1))}),await Zo(n,r,e)}catch(r){await qo(r)}}function Ay(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=B(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.ku(o)&&(l=!0)}),l&&Pp(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ED(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new fe(M.comparator);o=o.insert(s,He.newNoDocument(s,V.min()));const a=K().add(s),l=new ju(V.min(),new Map,new fe(J),o,a);await i_(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),Op(r)}else await Ad(r.localStore,e,!1).then(()=>Rd(r,e,n)).catch(qo)}async function _D(t,e){const n=B(t),r=e.batch.batchId;try{const i=await O2(n.localStore,e);o_(n,r,null),s_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,i)}catch(i){await qo(i)}}async function SD(t,e,n){const r=B(t);try{const i=await function(s,o){const a=B(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(se(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);o_(r,e,n),s_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,i)}catch(i){await qo(i)}}function s_(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function o_(t,e,n){const r=B(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function Rd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||a_(t,r)})}function a_(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(YE(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Op(t))}function Ry(t,e,n){for(const r of n)r instanceof n_?(t.yc.addReference(r.key,e),ID(t,r)):r instanceof r_?(L("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||a_(t,r.key)):b()}function ID(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.wc.add(r),Op(t))}function Op(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new M(re.fromString(e)),r=t.Ec.next();t.gc.set(r,new pD(n)),t.mc=t.mc.insert(n,r),QE(t.remoteStore,new Un(wn(yp(n.path)),r,"TargetPurposeLimboResolution",hp.ct))}}async function Zo(t,e,n){const r=B(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Cp.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=B(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>A.forEach(l,h=>A.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>A.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Go(c))throw c;L("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Hi.get(h),y=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(y);u.Hi=u.Hi.insert(h,w)}}}(r.localStore,s))}async function TD(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await WE(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new O(I.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.tr)}}function kD(t,e){const n=B(t),r=n.gc.get(e);if(r&&r.lc)return K().add(r.key);{let i=K();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function CD(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=i_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ED.bind(null,e),e.fc.eu=uD.bind(null,e.eventManager),e.fc.vc=cD.bind(null,e.eventManager),e}function AD(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_D.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SD.bind(null,e),e}class Ny{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return P2(this.persistence,new x2,e.initialUser,this.serializer)}createPersistence(e){return new R2(kp.js,this.serializer)}createSharedClientState(e){return new F2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ay(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TD.bind(null,this.syncEngine),await iD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oD}createDatastore(e){const n=Vu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new z2(i));var i;return function(s,o,a,l){return new K2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Ay(this.syncEngine,a,0),o=Ty.D()?new Ty:new j2,new G2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new mD(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);L("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Jo(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class ND{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class xD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=hE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Dp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PD(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>ky(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>ky(e.remoteStore,s)),t._onlineComponents=e}function DD(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function PD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!DD(n))throw n;Ui("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new Ny)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Kc(t,new Ny);return t._offlineComponents}async function l_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await xy(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await xy(t,new RD))),t._onlineComponents}function OD(t){return l_(t).then(e=>e.syncEngine)}async function Dy(t){const e=await l_(t),n=e.eventManager;return n.onListen=gD.bind(null,e.syncEngine),n.onUnlisten=vD.bind(null,e.syncEngine),n}/**
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
 */const Py=new Map;/**
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
 */function u_(t,e,n){if(!n)throw new O(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LD(t,e,n,r){if(e===!0&&r===!0)throw new O(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Oy(t){if(!M.isDocumentKey(t))throw new O(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ly(t){if(M.isDocumentKey(t))throw new O(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function Qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hu(t);throw new O(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class My{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new My({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new My(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new tx;switch(n.type){case"firstParty":return new sx(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Py.get(e);n&&(L("ComponentProvider","Removing Datastore"),Py.delete(e),n.terminate())}(this),Promise.resolve()}}function MD(t,e,n,r={}){var i;const s=(t=Qn(t,Wu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ui("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Be.MOCK_USER;else{o=_w(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new O(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Be(l)}t._authCredentials=new nx(new cE(o,a))}}/**
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
 */class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class ss{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ss(this.firestore,e,this._query)}}class Yn extends ss{constructor(e,n,r){super(e,n,yp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new M(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function Ot(t,e,...n){if(t=ue(t),u_("collection","path",e),t instanceof Wu){const r=re.fromString(e,...n);return Ly(r),new Yn(t,null,r)}{if(!(t instanceof dt||t instanceof Yn))throw new O(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return Ly(r),new Yn(t.firestore,null,r)}}function Bi(t,e,...n){if(t=ue(t),arguments.length===1&&(e=hE.A()),u_("doc","path",e),t instanceof Wu){const r=re.fromString(e,...n);return Oy(r),new dt(t,null,new M(r))}{if(!(t instanceof dt||t instanceof Yn))throw new O(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return Oy(r),new dt(t.firestore,t instanceof Yn?t.converter:null,new M(r))}}/**
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
 */class UD{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new qE(this,"async_queue_retry"),this.Yc=()=>{const n=Wc();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Wc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Wc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Ar;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Go(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=xp.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&b()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}function Uy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class zi extends Wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new UD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||h_(this),this._firestoreClient.terminate()}}function $D(t,e){const n=typeof t=="object"?t:Pf(),r=typeof t=="string"?t:e||"(default)",i=gu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ww("firestore");s&&MD(i,...s)}return i}function c_(t){return t._firestoreClient||h_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function h_(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new yx(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new xD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(Je.fromBase64String(e))}catch(n){throw new O(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hi(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lp{constructor(e){this._methodName=e}}/**
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
 */class Mp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */const bD=/^__.*__$/;class FD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class d_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function f_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Up{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Up(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Yl(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(f_(this.ua)&&bD.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class jD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vu(e)}ga(e,n,r,i=!1){return new Up({ua:e,methodName:n,ma:r,path:Ke.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $p(t){const e=t._freezeSettings(),n=Vu(t._databaseId);return new jD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function VD(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);bp("Data must be an object, but it was:",o,r);const a=p_(r,o);let l,u;if(s.merge)l=new mt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Nd(e,h,n);if(!o.contains(d))throw new O(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);g_(c,d)||c.push(d)}l=new mt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new FD(new at(a),l,u)}class qu extends Lp{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qu}}function BD(t,e,n,r){const i=t.ga(1,e,n);bp("Data must be an object, but it was:",i,r);const s=[],o=at.empty();Qr(r,(l,u)=>{const c=Fp(e,l,n);u=ue(u);const h=i.fa(c);if(u instanceof qu)s.push(c);else{const d=ea(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new mt(s);return new d_(o,a,i.fieldTransforms)}function zD(t,e,n,r,i,s){const o=t.ga(1,e,n),a=[Nd(e,r,n)],l=[i];if(s.length%2!=0)throw new O(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Nd(e,s[d])),l.push(s[d+1]);const u=[],c=at.empty();for(let d=a.length-1;d>=0;--d)if(!g_(u,a[d])){const y=a[d];let w=l[d];w=ue(w);const v=o.fa(y);if(w instanceof qu)u.push(y);else{const _=ea(w,v);_!=null&&(u.push(y),c.set(y,_))}}const h=new mt(u);return new d_(c,h,o.fieldTransforms)}function HD(t,e,n,r=!1){return ea(n,t.ga(r?4:3,e))}function ea(t,e){if(m_(t=ue(t)))return bp("Unsupported field value:",e,t),p_(t,e);if(t instanceof Lp)return function(n,r){if(!f_(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ea(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return $x(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ce.fromDate(n);return{timestampValue:Gl(r.serializer,i)}}if(n instanceof Ce){const i=new Ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Gl(r.serializer,i)}}if(n instanceof Mp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hi)return{bytesValue:FE(r.serializer,n._byteString)};if(n instanceof dt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ip(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Hu(n)}`)}(t,e)}function p_(t,e){const n={};return dE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,i)=>{const s=ea(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function m_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof Mp||t instanceof Hi||t instanceof dt||t instanceof Lp)}function bp(t,e,n){if(!m_(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Hu(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Nd(t,e,n){if((e=ue(e))instanceof Ku)return e._internalPath;if(typeof e=="string")return Fp(t,e);throw Yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const WD=new RegExp("[~\\*/\\[\\]]");function Fp(t,e,n){if(e.search(WD)>=0)throw Yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ku(...e.split("."))._internalPath}catch{throw Yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(I.INVALID_ARGUMENT,a+t+l)}function g_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class y_{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KD extends y_{data(){return super.data()}}function jp(t,e){return typeof e=="string"?Fp(t,e):e instanceof Ku?e._internalPath:e._delegate._internalPath}/**
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
 */function qD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vp{}class GD extends Vp{}function Rr(t,e,...n){let r=[];e instanceof Vp&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Bp).length,o=i.filter(a=>a instanceof Gu).length;if(s>1||s>0&&o>0)throw new O(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Gu extends GD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gu(e,n,r)}_apply(e){const n=this._parse(e);return v_(e._query,n),new ss(e.firestore,e.converter,Ed(e._query,n))}_parse(e){const n=$p(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new O(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){by(c,u);const d=[];for(const y of c)d.push($y(a,i,y));h={arrayValue:{values:d}}}else h=$y(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||by(c,u),h=HD(o,s,c,u==="in"||u==="not-in");return Ie.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $n(t,e,n){const r=e,i=jp("where",t);return Gu._create(i,r,n)}class Bp extends Vp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)v_(s,a),s=Ed(s,a)}(e._query,n),new ss(e.firestore,e.converter,Ed(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function $y(t,e,n){if(typeof(n=ue(n))=="string"){if(n==="")throw new O(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!SE(e)&&n.indexOf("/")!==-1)throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(re.fromString(n));if(!M.isDocumentKey(r))throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sy(t,new M(r))}if(n instanceof dt)return sy(t,n._key);throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hu(n)}.`)}function by(t,e){if(!Array.isArray(t)||t.length===0)throw new O(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function v_(t,e){if(e.isInequality()){const r=vp(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new O(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=_E(t);s!==null&&QD(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function QD(t,e,n){if(!n.isEqual(e))throw new O(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class YD{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Mp(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_o(e));default:return null}}convertTimestamp(e){const n=nr(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=re.fromString(e);se(HE(r));const i=new So(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function XD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ns{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class w_ extends y_{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ja extends w_{data(e={}){return super.data(e)}}class JD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ns(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new Ns(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ja(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ns(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ja(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ns(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:ZD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}class E_ extends YD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function qc(t,e,n,...r){t=Qn(t,dt);const i=Qn(t.firestore,zi),s=$p(i);let o;return o=typeof(e=ue(e))=="string"||e instanceof Ku?zD(s,"updateDoc",t._key,e,n,r):BD(s,"updateDoc",t._key,e),zp(i,[o.toMutation(t._key,Ut.exists(!0))])}function Fy(t){return zp(Qn(t.firestore,zi),[new wp(t._key,Ut.none())])}function Gc(t,e){const n=Qn(t.firestore,zi),r=Bi(t),i=XD(t.converter,e);return zp(n,[VD($p(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function Xn(t,...e){var n,r,i;t=ue(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Uy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Uy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof dt)u=Qn(t.firestore,zi),c=yp(t._key.path),l={next:h=>{e[o]&&e[o](eP(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Qn(t,ss);u=Qn(h.firestore,zi),c=h._query;const d=new E_(u);l={next:y=>{e[o]&&e[o](new JD(u,d,h,y))},error:e[o+1],complete:e[o+2]},qD(t._query)}return function(h,d,y,w){const v=new ND(w),_=new hD(d,v,y);return h.asyncQueue.enqueueAndForget(async()=>aD(await Dy(h),_)),()=>{v.Sc(),h.asyncQueue.enqueueAndForget(async()=>lD(await Dy(h),_))}}(c_(u),c,a,l)}function zp(t,e){return function(n,r){const i=new Ar;return n.asyncQueue.enqueueAndForget(async()=>wD(await OD(n),r,i)),i.promise}(c_(t),e)}function eP(t,e,n){const r=n.docs.get(e._key),i=new E_(t);return new w_(t,i,e._key,r,new Ns(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ns=n})(Kr),Ur(new er("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new zi(new rx(n.getProvider("auth-internal")),new ax(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new O(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new So(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Yt(ey,"3.11.0",t),Yt(ey,"3.11.0","esm2017")})();/**
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
 */const __="firebasestorage.googleapis.com",S_="storageBucket",tP=2*60*1e3,nP=10*60*1e3;/**
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
 */class ye extends tn{constructor(e,n,r=0){super(Qc(e),`Firebase Storage: ${n} (${Qc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function Qc(t){return"storage/"+t}function Hp(){const t="An unknown error occurred, please check the error payload for server response.";return new ye(ge.UNKNOWN,t)}function rP(t){return new ye(ge.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function iP(t){return new ye(ge.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function sP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(ge.UNAUTHENTICATED,t)}function oP(){return new ye(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function aP(t){return new ye(ge.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function lP(){return new ye(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function uP(){return new ye(ge.CANCELED,"User canceled the upload/download.")}function cP(t){return new ye(ge.INVALID_URL,"Invalid URL '"+t+"'.")}function hP(t){return new ye(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function dP(){return new ye(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+S_+"' property when initializing the app?")}function fP(){return new ye(ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function pP(){return new ye(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function mP(t){return new ye(ge.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xd(t){return new ye(ge.INVALID_ARGUMENT,t)}function I_(){return new ye(ge.APP_DELETED,"The Firebase app was deleted.")}function gP(t){return new ye(ge.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ws(t,e){return new ye(ge.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function vs(t){throw new ye(ge.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gt.makeFromUrl(e,n)}catch{return new gt(e,"")}if(r.path==="")return r;throw hP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",y=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),w={bucket:1,path:3},v=n===__?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",p=new RegExp(`^https?://${v}/${i}/${_}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:y,indices:w,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<g.length;E++){const k=g[E],T=k.regex.exec(e);if(T){const R=T[k.indices.bucket];let N=T[k.indices.path];N||(N=""),r=new gt(R,N),k.postModify(r);break}}if(r==null)throw cP(e);return r}}class yP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function vP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(y,l())},_)}function d(){s&&clearTimeout(s)}function y(_,...p){if(u){d();return}if(_){d(),c.call(null,_,...p);return}if(l()||o){d(),c.call(null,_,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let w=!1;function v(_){w||(w=!0,d(),!u&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function wP(t){t(!1)}/**
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
 */function EP(t){return t!==void 0}function _P(t){return typeof t=="object"&&!Array.isArray(t)}function Wp(t){return typeof t=="string"||t instanceof String}function jy(t){return Kp()&&t instanceof Blob}function Kp(){return typeof Blob<"u"&&!Ik()}function Vy(t,e,n,r){if(r<e)throw xd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw xd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function qp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function T_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Nr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Nr||(Nr={}));/**
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
 */function SP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class IP{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,w)=>{this.resolve_=y,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Da(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Nr.NO_ERROR,l=s.getStatus();if(!a||SP(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Nr.ABORT;r(!1,new Da(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Da(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());EP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Hp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?I_():uP();o(l)}else{const l=lP();o(l)}};this.canceled_?n(!1,new Da(!1,null,!0)):this.backoffId_=vP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Da{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function TP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function kP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function CP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function AP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function RP(t,e,n,r,i,s,o=!0){const a=T_(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return CP(u,e),TP(u,n),kP(u,s),AP(u,r),new IP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function NP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xP(...t){const e=NP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Kp())return new Blob(t);throw new ye(ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function DP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function PP(t){if(typeof atob>"u")throw mP("base-64");return atob(t)}/**
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
 */const qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yc{constructor(e,n){this.data=e,this.contentType=n||null}}function OP(t,e){switch(t){case qt.RAW:return new Yc(k_(e));case qt.BASE64:case qt.BASE64URL:return new Yc(C_(t,e));case qt.DATA_URL:return new Yc(MP(e),UP(e))}throw Hp()}function k_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function LP(t){let e;try{e=decodeURIComponent(t)}catch{throw Ws(qt.DATA_URL,"Malformed data URL.")}return k_(e)}function C_(t,e){switch(t){case qt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ws(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case qt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ws(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=PP(e)}catch(i){throw i.message.includes("polyfill")?i:Ws(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class A_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ws(qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=$P(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function MP(t){const e=new A_(t);return e.base64?C_(qt.BASE64,e.rest):LP(e.rest)}function UP(t){return new A_(t).contentType}function $P(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Pn{constructor(e,n){let r=0,i="";jy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(jy(this.data_)){const r=this.data_,i=DP(r,e,n);return i===null?null:new Pn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Pn(r,!0)}}static getBlob(...e){if(Kp()){const n=e.map(r=>r instanceof Pn?r.data_:r);return new Pn(xP.apply(null,n))}else{const n=e.map(o=>Wp(o)?OP(qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Pn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function R_(t){let e;try{e=JSON.parse(t)}catch{return null}return _P(e)?e:null}/**
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
 */function bP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function FP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function N_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function jP(t,e){return e}class et{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||jP}}let Pa=null;function VP(t){return!Wp(t)||t.length<2?t:N_(t)}function x_(){if(Pa)return Pa;const t=[];t.push(new et("bucket")),t.push(new et("generation")),t.push(new et("metageneration")),t.push(new et("name","fullPath",!0));function e(s,o){return VP(o)}const n=new et("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new et("size");return i.xform=r,t.push(i),t.push(new et("timeCreated")),t.push(new et("updated")),t.push(new et("md5Hash",null,!0)),t.push(new et("cacheControl",null,!0)),t.push(new et("contentDisposition",null,!0)),t.push(new et("contentEncoding",null,!0)),t.push(new et("contentLanguage",null,!0)),t.push(new et("contentType",null,!0)),t.push(new et("metadata","customMetadata",!0)),Pa=t,Pa}function BP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new gt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function zP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return BP(r,t),r}function D_(t,e,n){const r=R_(e);return r===null?null:zP(t,r,n)}function HP(t,e,n,r){const i=R_(e);if(i===null||!Wp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),y=qp(d,n,r),w=T_({alt:"media",token:u});return y+w})[0]}function WP(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class P_{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function O_(t){if(!t)throw Hp()}function KP(t,e){function n(r,i){const s=D_(t,i,e);return O_(s!==null),s}return n}function qP(t,e){function n(r,i){const s=D_(t,i,e);return O_(s!==null),HP(s,i,t.host,t._protocol)}return n}function L_(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=oP():i=sP():n.getStatus()===402?i=iP(t.bucket):n.getStatus()===403?i=aP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function GP(t){const e=L_(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=rP(t.path)),s.serverResponse=i.serverResponse,s}return n}function QP(t,e,n){const r=e.fullServerUrl(),i=qp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new P_(i,s,qP(t,n),o);return a.errorHandler=GP(e),a}function YP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function XP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=YP(null,e)),r}function JP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let E=0;E<2;E++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=XP(e,r,i),c=WP(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",y=Pn.getBlob(h,r,d);if(y===null)throw fP();const w={name:u.fullPath},v=qp(s,t.host,t._protocol),_="POST",p=t.maxUploadRetryTime,f=new P_(v,_,KP(t,n),p);return f.urlParams=w,f.headers=o,f.body=y.uploadData(),f.errorHandler=L_(e),f}class ZP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Nr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Nr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Nr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw vs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class eO extends ZP{initXhr(){this.xhr_.responseType="text"}}function M_(){return new eO}/**
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
 */class Br{constructor(e,n){this._service=e,n instanceof gt?this._location=n:this._location=gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Br(e,n)}get root(){const e=new gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return N_(this._location.path)}get storage(){return this._service}get parent(){const e=bP(this._location.path);if(e===null)return null;const n=new gt(this._location.bucket,e);return new Br(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw gP(e)}}function tO(t,e,n){t._throwIfRoot("uploadBytes");const r=JP(t.storage,t._location,x_(),new Pn(e,!0),n);return t.storage.makeRequestWithTokens(r,M_).then(i=>({metadata:i,ref:t}))}function nO(t){t._throwIfRoot("getDownloadURL");const e=QP(t.storage,t._location,x_());return t.storage.makeRequestWithTokens(e,M_).then(n=>{if(n===null)throw pP();return n})}function rO(t,e){const n=FP(t._location.path,e),r=new gt(t._location.bucket,n);return new Br(t.storage,r)}/**
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
 */function iO(t){return/^[A-Za-z]+:\/\//.test(t)}function sO(t,e){return new Br(t,e)}function U_(t,e){if(t instanceof Gp){const n=t;if(n._bucket==null)throw dP();const r=new Br(n,n._bucket);return e!=null?U_(r,e):r}else return e!==void 0?rO(t,e):t}function oO(t,e){if(e&&iO(e)){if(t instanceof Gp)return sO(t,e);throw xd("To use ref(service, url), the first argument must be a Storage instance.")}else return U_(t,e)}function By(t,e){const n=e==null?void 0:e[S_];return n==null?null:gt.makeFromBucketSpec(n,t)}function aO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_w(i,t.app.options.projectId))}class Gp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=__,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tP,this._maxUploadRetryTime=nP,this._requests=new Set,i!=null?this._bucket=gt.makeFromBucketSpec(i,this._host):this._bucket=By(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gt.makeFromBucketSpec(this._url,e):this._bucket=By(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Br(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new yP(I_());{const o=RP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const zy="@firebase/storage",Hy="0.11.2";/**
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
 */const $_="storage";function lO(t,e,n){return t=ue(t),tO(t,e,n)}function uO(t){return t=ue(t),nO(t)}function cO(t,e){return t=ue(t),oO(t,e)}function hO(t=Pf(),e){t=ue(t);const r=gu(t,$_).getImmediate({identifier:e}),i=ww("storage");return i&&dO(r,...i),r}function dO(t,e,n,r={}){aO(t,e,n,r)}function fO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Gp(n,r,i,e,Kr)}function pO(){Ur(new er($_,fO,"PUBLIC").setMultipleInstances(!0)),Yt(zy,Hy,""),Yt(zy,Hy,"esm2017")}pO();const mO={apiKey:"AIzaSyAdYeQZYe6wHGUOU0SOwv1sbppnSoViJ2M",authDomain:"etudyonet-clone-3.firebaseapp.com",projectId:"etudyonet-clone-3",storageBucket:"etudyonet-clone-3.appspot.com",messagingSenderId:"555691155641",appId:"1:555691155641:web:13e1ad4042d03e16dd7b68"},Qp=Tw(mO),We=$D(Qp),Ve=YR(Qp),gO=hO(Qp),b_=S.createContext(),yO=({children:t})=>{var g;const[e,n]=S.useState({}),r=Do(),i=Ot(We,"users"),s=Ot(We,"offers"),o=Ot(We,"requests"),a=Rr(Ot(We,"offers"),$n("authorId","==",`${(g=Ve.currentUser)==null?void 0:g.uid}`)),l=(E,k)=>PA(Ve,E,k),u=()=>(r("/"),bA(Ve)),c=(E,k)=>OA(Ve,E,k),h=E=>Ng(Ve.currentUser,{displayName:E}),d=(E,k,T,R,N,W,$)=>Gc(i,{id:Ve.currentUser.uid,name:E,email:k,bio:T,messanger:R,instagram:N,phoneNumber:W,photoURL:$}),y=async(E,k,T,R,N)=>await Gc(s,{authorId:Ve.currentUser.uid,author:{name:E,phoneNumber:k},content:T,price:R,photoURl:e==null?void 0:e.photoURL}),w=async(E,k,T,R,N,W)=>await Gc(o,{senderId:E,senderName:k,resId:T,resName:R,content:N,price:W,state:"waiting"}),v=E=>qc(E,{state:"refuse"}),_=E=>Fy(Bi(We,"offers",`${E}`)),p=E=>Fy(E);S.useEffect(()=>$A(Ve,k=>{n(k)}),[]);const f=async(E,k,T,R)=>{const N=cO(gO,k.uid+".png");T(!0),await lO(N,E);const W=await uO(N);await Ng(Ve.currentUser,{photoURL:W}),await qc(R,{photoURL:W}),console.log("wait..."),Xn(a,$=>{$.docs.forEach(Y=>{console.log(Y.data()),console.log(Y.id),qc(Bi(We,"offers",`${Y.id}`),{photoURl:W})}),window.location.reload(!1)}),T(!1)};return m.jsx(b_.Provider,{value:{CreateUser:l,user:e,logout:u,signIn:c,setUserName:h,createUserData:d,upload:f,createOffer:y,deleteOffer:_,createRequest:w,refuseRequest:v,deleteRequest:p},children:t})},cr=()=>S.useContext(b_);const Qu="/assets/avatar-28c1f46a.png",vO="/assets/logo-6ee9d5f0.png";function Yp(){const[t,e]=S.useState(""),{user:n,logout:r}=cr();return S.useEffect(()=>{e(n.photoURL)},[n]),m.jsxs("header",{children:[m.jsxs("div",{id:"logo",children:[m.jsx("img",{src:vO,alt:""}),m.jsxs("a",{href:"/",className:"logo",children:["Etudyo",m.jsx("span",{children:"net"})]})]}),m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx("span",{className:"material-symbols-outlined",title:"notifications",children:"notifications"})}),m.jsx("li",{children:m.jsx("a",{href:"/profile",children:t?m.jsx("img",{src:t}):m.jsx("img",{src:Qu})})}),m.jsx("li",{onClick:r,children:m.jsx("span",{className:"material-symbols-outlined",children:"move_item"})})]})]})}function wO(){const[t,e]=S.useState(),{user:n}=cr(),r=Ot(We,"offers");return S.useEffect(()=>{Xn(r,i=>{e(i.docs)})},[n]),m.jsxs("div",{className:"home",children:[m.jsx(Yp,{}),t&&t.map(i=>m.jsxs("div",{className:"offer",children:[m.jsxs("div",{className:"offer-top",children:[m.jsx("img",{src:i.data().photoURl?i.data().photoURl:Qu,alt:""}),m.jsxs("div",{children:[m.jsx("h3",{children:i.data().author.name}),m.jsxs("div",{className:"phoneNumber",children:[m.jsx("h2",{children:"+216"}),m.jsx("h2",{children:i.data().author.phoneNumber.substr(0,2)}),m.jsx("h2",{children:i.data().author.phoneNumber.substr(2,3)}),m.jsx("h2",{children:i.data().author.phoneNumber.substr(5,5)})]})]})]}),m.jsx("div",{className:"offer-content",children:m.jsx("h3",{children:i.data().content})}),m.jsxs("div",{className:"offer-footer",children:[m.jsx("a",{href:`/users/${i.data().authorId}`,children:m.jsx("button",{children:"See profile"})}),m.jsxs("h4",{children:["Starting at ",m.jsxs("span",{children:[i.data().price,"Dt"]})]})]})]},i.id))]})}const F_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ7SURBVHgB1ZU9TFNRFMf/9/HUQRO7yUZN3KU7CTjpBs4OyOhUiR+Jg6GdiIoBB2dhd6CbTpRE97KT+EwcHEvExGjs83dO36Ot8Pox8k9u7323956v/znnSucdIV+kr7SgSPNKNctnmX9KrBPWbXXU0F81wzP/nlxB+lrvmJYQsoOSJgIT1m3FKEpdWa68Fh5zZhIF6Uvd5/KijrUSaggtQLqOolh7jEpYLT73PyKsK8tCcomQDEPsnpTx7KomQOy/Fu8L+pJuaJcw7POdnOxLN52X4OEa2/KeB4YOcf2j605m6h4tM6qs57E4MNfDI/4PkyuI80WWIdtj3lNaw7vLeBa5QWZkEp6QIEUKJgFZt8b00LNN+o6HV/Bumv0Yj+vhac/QroJIy2TJ9rA8h59qFr5dBBseuPBO/yH3aB1FM4S03lNgBXVRewhJsKTFpSMOJsyWOTOMJc60JOfgmPG8wI4W51aZNyncI0K2FWUK9p1EyEToV+aSE2wIZNVvVUiCFb5+sf9Ww2Ehe8G9tZ4HGTKSmmfdwqKae5ciYDTM28TaT6RxETxlP2t8HDJmuwqMZGsZBfCU1IhKPw3jqpST3EJJFfY3MzKTvoOzWTuRpnRtIGuGIegGHjdykg/okhUnU3rjxObDsuKHV/ld1nNjip/2lO2oNUhytw6SgktN0riMp3e4+EHDEOk2Ct6bPFPQdgJHwNu1oaN73p1SfSwQbn1sgbS+5Ub75Q1tsVpUt0ob3jXtwZmC2ClctZqwR4c2YC+bFSV73zj/ifkwE21czbnB1EzeFcKAhTGZ1PWmlD2ZVrmW+wf6SSvpe5BOHiplnnXP7ZzV8M43/gGW6+LmvNg1xwAAAABJRU5ErkJggg==",j_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE7SURBVHgB1ZZbTsJAFIa/aZH4QmQJ7kB3oK5Al6ArUB408Ul8MtEmugNZgjuwOwB34A7U+KIQGM7hNhAypHQKhC9p2p7p/CedOZcxTGHrVKlwRo998mD5ZIc3U+N7bIomYw8iWqEpH52Sl0jm9mgOtOacJ7zbJ64IRDVUa9b4TFWMXxSEaqmmPg+X6E9ejFu3YFSry55zsEJKvgH7yDkxd2Shy725obGUA50g0ZCShX//8pYWTMPcSlwHssE90GQpc+wbp02a5Q/9SxRL6FqO8JOSgUWb3JLbBYGsfA82nGgRr85AzVzzQlEORpnZIJDt34M1OdiVYmWHDaIQVCvmZ+Jg1KRbhbTMhEvVGjd+F0Udydqy9OVEyoPlgzwYDuQ6lDp14kzT3rWPduTYYnIeWyIpfr9ybKm7/tAHuO1ZSMKAnYkAAAAASUVORK5CYII=",V_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAISSURBVHgBpZS/SwJhGMefV91saFLHrH9AKoiwQS1IaKktanAIWoKolhoiCoJqKoKWoMGhKCgwIiiIOqKitosaMx3VyUEhSH17n1dP8nzvvTv9Dnfvve/d9/M+P+4lfcFwCgh0gX2pZRcNq4qSl73kaNEcFXCWyEMgFOqUvUT6hsIUB/fXCbCqTDYHiyurkM3l8FEaiQNakM/rgd3tTfB6PPgojcQQUCgW4ebuHuLHp3CRuIJMdbe2IcIUYQqWWAr0prGpSYhNTzbMmaVLGIFm3tPt56ajIxE+Hz85hVsWlZ1ImgDPr2/c3Fv7EHe8vDgPc7MzfP1GBzCDNAG+kil+jw5HoMPtrs9rUbx/fIJIIogQoJnq818oFBvWrUB6hyLrTYDg4AC/Y66xe7So1ja3GtZlkOWleT4mhMaEXYTFxPbUS6uLr7pDqSJj4/zuEi1i56DJ+eUVJL9T4GZpibIaYMFlKdKErVtTvg7AnP/fGRZVK6xdHRweVQeEJlgNqIJj0Y/VinZ293mrUwrp8i9sOMoumGDzqtHfa9ccm4MVNV+hdEJ9VdLOTDr94+3uOnNUSJSdPz6kY6dYybWheYUdFy+KivNOvLQLMTKvA9qByMwbAK1AzMybAHYgVsyFACNIj9/PjwHsNjR/eHwyNUcRkAiP3NqpGNCvWTE3BWjqD4YWKCExBKExARovl2AP+9zs2z/Kh3tRRBoBOQAAAABJRU5ErkJggg==",B_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIJSURBVHgB1VVbUsJAEOyNyJ8lN1BvoDfQE6gnAE4AlK/ii/BllWIBJwBPEDwBeAKOIN4Ayz/QxJ7Z8A5SEH6YqpDdTTI90927ALseZjQInnEOB5cIkEKcMOgzx7u5RctOJfkLPC5eYZth0DQ3yBomLzG5q8g+6uyihzjhkwEHOeY85lVOcCmjD36I9mDbihtBRYv0CJR2FEliDw3qkEfMCJ5wSjaqdoJjZ+pZSh6QskZQ3UxoVp5j1d1x0YwJgI8sf8UBGY67wePkpZWJXaSYvM1hLVyqLwCYezQxxBm76GkF+/hQA6xKLvY+YNXg3Vr0ghbNLwAoSBE9WutE1Ldfw5XKlnXDAqpM2g4p6WCAM3PH+1Q4UR/yJZe3a+1GKksSpDLZJwLIuXCdDwspsOoLKXA+VwJLe2e7JhTbVuixYjdcd2d2vIPDZWkiO1DubeuSpDVNGUTIiHV25EW5b6YDcQMFq6qT7IflkC6hpUnhG4Du+Dc1BVTkDsts6FHj45TvzVBliBzoaEhxk6Fg4oY1draaIDkWu89LLO/NAliLpVTYQbRg/4IIPb/abW56faLBiNdvWq24/oFnCuir/0e6jAFMmCxAjS9cG1db3DhUM3sqCCu9BCevHJQIdUXBPnmPBcA44pVX4pnb/uFU1BFpbDdayshopjvV17/NQ8QJH19kpDV/ZOxu/AHXO9FVSrZ+gwAAAABJRU5ErkJggg==",z_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKQSURBVHgBnVXbbRpRED13wf6JIuEKsqkgpgOoIKYCTAW2pTyUL+DLSuLIpoKYCkwH2Q6MKzCpIEiJ8hFirs/MnV3WsMvDI632ceeemTn3zKzDGvM91PACx3B4yyuG5yXmMOXzGHMM8YDEfcKkDMOVAr9El4/HBKphkzlc4x/6RYFWAvgvOEQFN1m2QEKvIQGyTNUn0oqOuNY2pAmrabkPrKwsgIH/sKwTzNBZV77uOWegfd0T83VK2pr5IK7EceDe4RQ7mL/AFW8nGmSGeppYlHns4dLAR7uCa6Zhz4hXjVjf0+8awH9Fg7cj5XGGMzzXKuhoBUDDMK0Cp6WBh9TfxHmR6dkJzJnKd2CY3UUAyT4ESLCj+W+kNsKt/2wYVT0LsUN/iVqUlkIbl2XPAzwhULcAvMuMT7Xx5kE5WgX0uUa644iLoZE8fpaB83YlQAS8V7XJd8nYo6dO/5fk7HGXVrEI4PCrALyt4GEdqjJKWcGrpCaA9d1HVU+hRXSYmuPBE/BwcNcpCDu5DpGhBFl0+si9tyry5vDK9k2r5GlM3UqoNxn4uYJI04UMFyAtnllPFSKS/q2yREGAWPfSJzLuRF5xduBVdRDqBssZ6rtHk+B117PqlyuX6gguIyOV6dAIaxtIgj84KOtoWS8CV6tYT/kgeZdRsod7XZgzs6WJuK09wZnhtbCjFRhNA8vgJpXizuAyLIMNVoddRbkeK3+5YbUTeMp9jtosgHbgDC17bWwFzD+fdvM+blNwyrmZ91n9o12owGT8OlWVDMIwCu60QmnM0Jwi6/wvdURhdJYPvzQAoCpoYLMl1itJ0WJ1zcaGZS6HP+WzZBzb2kTnDaW4SXGrAZxuDsB/OQrK9L6lPQKmUwwBIV89bwAAAABJRU5ErkJggg==",H_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSSURBVHgBrVbbTRtBFD0zNnwlktPBdhCnA7sCQgVJKiCWnEh8gb+QeAioAFMBpgKWCtgOgArwB1/g9XDundm1jXZgbflK652dx7mvc+/YYE7cETow+MWn4yeQoI4YPHDvmO+M72vTx2i2JDj7aOELrjjsYB1iMIRFz/QwburEV5xSs1g/xhTnHI+QY2x2aVkNcQf0tEEjxXOLHZ7/zfMJl7rGHeMnB1fq5gsnaoIugG/gAt77lOADYkk0Whx3m/zY4gBi+bLgKhsK1g5fHQ26YxQM9iSflh9+0VH7alKc75ZKXEgyQyYetNQDi6cYQmDXDp+2sgX0dEq2/GcyoYbJ+k3Ynkn+iOd1MAdOB33PqAXgz9glbMkZDqs5aKuyV/yRUBe4TXwkBXjBrgkBhS0C1mCMhS0WCY37EYOIKnCHPOzBq9iVkT0pE3wneySE5l91Dm1MAVe29J1jUMUunRO2ePkbh4mJKamXRfdMNMmC8n15BbMdUXaFfCAwK3I8Ji5Y7rCNuBQ18LiKAh9fVqS2g/fLvv/shb2jGEyURcIKcjmFMGkTN2TVAEURbbKlS2KdhmgYCm45BSoNhidnETk2RF9M3mdX7kjxjN5HEMad4D5cLFIwlbHUmvC0TUJrkYvlPMb90GHvpYZmHkzxjb+VCkIIhqgrc+yyBL71KHovrEdM2bsyW1rGblnFlmVFMeRWE8nZcXXyWFut7zv+ykxXujIbmqcZu/rsrLrhlBMTnOk/ivWIsGvb7NPIBUvkfhZKGvYWz5akFpwJnjq9ky/n2fUGMGPWSzzxI9oAAAAASUVORK5CYII=";function EO(){var D,j,z;const{user:t,logout:e,upload:n,createOffer:r,deleteOffer:i,refuseRequest:s}=cr(),[o,a]=S.useState(""),[l,u]=S.useState(""),[c,h]=S.useState(""),[d,y]=S.useState("");S.useState(null),S.useState(!1);const[w,v]=S.useState(),[_,p]=S.useState(Qu),[f,g]=S.useState(""),[E,k]=S.useState(""),[T,R]=S.useState(),[N,W]=S.useState(),$=Ot(We,"users"),Y=Rr($,$n("email","==",`${t.email}`)),Ze=Rr(Ot(We,"offers"),$n("authorId","==",`${(D=Ve.currentUser)==null?void 0:D.uid}`)),Vt=Rr(Ot(We,"requests"),$n("resId","==",`${(j=Ve.currentUser)==null?void 0:j.uid}`),$n("state","==","waiting"));S.useEffect(()=>{Xn(Ze,H=>{R(H.docs)})},[t]),S.useEffect(()=>{Xn(Vt,H=>{W(H.docs)})},[t]),S.useEffect(()=>{Xn(Y,H=>{H.docs.forEach(oe=>{a(oe.data().bio),u(oe.data().messanger),h(oe.data().instagram),v(oe.id),y(oe.data().phoneNumber)})})},[t]),Bi(We,"users",`${w}`),S.useEffect(()=>{t!=null&&t.photoURL&&p(t.photoURL)},[t]);const ta=(z=t.displayName)==null?void 0:z.split(" ")[0],Yu=H=>{H.preventDefault(),r(t.displayName,d,f,E,_)},os=T==null?void 0:T.map(H=>m.jsxs("div",{className:"profile-offer",children:[m.jsxs("div",{className:"offer-top",children:[m.jsxs("div",{className:"offer-user-info",children:[m.jsx("img",{src:_,alt:""}),m.jsxs("div",{children:[m.jsx("h3",{children:t==null?void 0:t.displayName}),m.jsxs("div",{className:"phoneNumber",children:[m.jsx("h2",{children:"+216"}),m.jsx("h2",{children:d.substr(0,2)}),m.jsx("h2",{children:d.substr(2,3)}),m.jsx("h2",{children:d.substr(5,5)})]})]})]}),m.jsx("span",{className:"material-symbols-sharp",onClick:()=>{i(H.id)},children:"delete"})]}),m.jsx("div",{className:"offer-content",children:m.jsx("h3",{children:H.data().content})}),m.jsx("div",{className:"offer-footer",children:m.jsxs("h4",{children:["Starting at ",m.jsxs("span",{children:[H.data().price,"Dt"]})]})})]})),as=N==null?void 0:N.map(H=>m.jsxs("div",{children:[m.jsx("button",{children:"yes"}),m.jsx("button",{onClick:()=>{s(Bi(We,"requests",`${H.id}`))},children:"no"})]}));return m.jsxs("div",{className:"profile",children:[m.jsx(Yp,{}),m.jsxs("div",{className:"fields",children:[m.jsx("img",{src:_}),m.jsx("h5",{className:"name",children:t&&t.displayName}),m.jsxs("div",{className:"phoneNumber",children:[m.jsx("h2",{children:"+216"}),m.jsx("h2",{children:d.substr(0,2)}),m.jsx("h2",{children:d.substr(2,3)}),m.jsx("h2",{children:d.substr(5,5)})]}),m.jsx("div",{className:"bio",children:t&&o}),m.jsxs("form",{className:"offer-form",onSubmit:Yu,children:[m.jsxs("div",{className:"offer-box",children:[m.jsx("textarea",{id:"my-text",onChange:H=>{g(H.target.value)},required:!0,maxLength:100}),m.jsxs("p",{id:"letter-counter",children:[f.length,"/100"]}),m.jsxs("div",{className:"offer-placeholder",children:[m.jsx("img",{src:j_,alt:""}),m.jsx("h3",{children:"The offer"})]})]}),m.jsxs("div",{className:"offer-box",children:[m.jsx("input",{type:"text",onChange:H=>{k(H.target.value)},pattern:"\\[0-9]",maxLength:7,min:"0",required:!0}),m.jsxs("div",{className:"offer-placeholder",children:[m.jsx("img",{src:F_,alt:""}),m.jsx("h3",{children:"The starting Price"})]}),m.jsx("button",{type:"submit",children:"Add"})]})]}),m.jsxs("div",{className:"info-box",children:[m.jsxs("div",{className:"info",children:[m.jsx("img",{src:B_,alt:""}),m.jsx("h3",{children:t&&t.email})]}),m.jsxs("div",{className:"info",children:[m.jsx("img",{src:z_,alt:""}),m.jsx("h3",{children:t&&l})]}),m.jsxs("div",{className:"info",children:[m.jsx("img",{src:H_,alt:""}),m.jsx("h3",{children:t&&c})]})]})]}),m.jsxs("div",{className:"offers-display",children:[m.jsxs("div",{className:"offers-section-title",children:[m.jsx("img",{src:V_,alt:""}),m.jsxs("h3",{children:[ta,"'s offers"]})]}),m.jsxs("div",{className:"offers-section",children:[os,as]})]})]})}const Xc="/assets/banner-0691c4c8.jpg";function _O(){const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),{signIn:o}=cr(),a=Do(),l=async u=>{u.preventDefault(),s("");try{await o(t,n),a("/profile")}catch(c){s(c.message),console.log(c.message)}};return m.jsx("div",{className:"auth",children:m.jsxs("form",{onSubmit:l,children:[m.jsxs("div",{className:"inputBox",children:[m.jsx("input",{onChange:u=>{e(u.target.value)},type:"email",id:"email",required:!0}),m.jsx("span",{children:"email"})]}),m.jsxs("div",{className:"inputBox",children:[m.jsx("input",{onChange:u=>{r(u.target.value)},type:"passowrd",id:"password",required:!0}),m.jsx("span",{children:"password"})]}),m.jsx("button",{children:"Sign In"}),m.jsxs("p",{children:["Don't have an account? ",m.jsx(pw,{to:"/signup",className:"link",children:"Sign Up"})]})]})})}function SO(){const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,u]=S.useState(""),[c,h]=S.useState(""),[d,y]=S.useState(""),[w,v]=S.useState("");S.useState();const{CreateUser:_,setUserName:p,user:f,createUserData:g}=cr(),E=Do(),k=async T=>{T.preventDefault(),v("");try{await _(t,n),await p(i),await g(i,t,o,l,c,d,Qu),E("/profile")}catch(R){v(R.message)}};return m.jsx("div",{className:"auth",children:m.jsxs("form",{onSubmit:k,children:[m.jsxs("div",{className:"inputBox",children:[m.jsx("input",{onChange:T=>{s(T.target.value)},type:"text",required:!0}),m.jsx("span",{children:"username"})]}),m.jsxs("div",{className:"inputBox",children:[m.jsx("input",{onChange:T=>{e(T.target.value)},type:"email",required:!0}),m.jsx("span",{children:"Email"})]}),m.jsxs("div",{className:"inputBox",children:[m.jsx("input",{onChange:T=>{r(T.target.value)},type:"passowrd",required:!0}),m.jsx("span",{children:"Password"})]}),m.jsxs("div",{className:"inputBox",children:[m.jsx("input",{onChange:T=>{a(T.target.value)},type:"text",required:!0}),m.jsx("span",{children:"Bio"})]}),m.jsxs("div",{className:"inputBox",children:[m.jsx("input",{onChange:T=>{u(T.target.value)},type:"text",required:!0}),m.jsx("span",{children:"messanger"})]}),m.jsxs("div",{className:"inputBox",children:[m.jsx("input",{onChange:T=>{h(T.target.value)},type:"text",required:!0}),m.jsx("span",{children:"instagram"})]}),m.jsxs("div",{className:"inputBox",children:[m.jsx("input",{onChange:T=>{y(T.target.value)},type:"tel",required:!0}),m.jsx("span",{children:"Phone number"})]}),m.jsxs("p",{children:["Already have an account? ",m.jsx(pw,{to:"/signin",className:"link",children:"Sign In"})]}),m.jsx("button",{children:"Sign Up"})]})})}function Jc({children:t}){const{user:e}=cr();return e?t:m.jsx(Nf,{to:"/signin"})}function Wy({children:t}){const{user:e}=cr();return e?m.jsx(Nf,{to:"/profile"}):t}function IO(){var T,R,N,W,$;const{createRequest:t,deleteRequest:e}=cr(),{id:n}=HT(),[r,i]=S.useState(),[s,o]=S.useState({}),[a,l]=S.useState(""),[u,c]=S.useState(""),[h,d]=S.useState(),[y,w]=S.useState(),v=Ot(We,"users"),_=Rr(v,$n("id","==",`${n}`)),p=Rr(Ot(We,"offers"),$n("authorId","==",`${n}`)),f=Rr(Ot(We,"requests"),$n("senderId","==",`${(T=Ve.currentUser)==null?void 0:T.uid}`));if(S.useEffect(()=>{Xn(p,Y=>{i(Y.docs)})}),S.useEffect(()=>{Xn(f,Y=>{Y.docs.forEach(Ze=>{d(Ze.data().state),w(Ze.id)})})}),S.useEffect(()=>{Xn(_,Y=>{Y.docs.forEach(Ze=>{o(Ze.data())})})}),Ve.currentUser&&n==Ve.currentUser.uid)return m.jsx(Nf,{to:"/profile"});const g=Y=>{var Ze,Vt;Y.preventDefault(),t((Ze=Ve.currentUser)==null?void 0:Ze.uid,(Vt=Ve.currentUser)==null?void 0:Vt.displayName,n,s==null?void 0:s.name,a,u)},E=(R=s.name)==null?void 0:R.split(" ")[0],k=r==null?void 0:r.map(Y=>m.jsxs("div",{className:"profile-offer",children:[m.jsxs("div",{className:"offer-top",children:[m.jsx("img",{src:s==null?void 0:s.photoURL,alt:""}),m.jsxs("div",{children:[m.jsx("h3",{children:s==null?void 0:s.name}),m.jsxs("div",{className:"phoneNumber",children:[m.jsx("h2",{children:"+216"}),m.jsx("h2",{children:s==null?void 0:s.phoneNumber.substr(0,2)}),m.jsx("h2",{children:s==null?void 0:s.phoneNumber.substr(2,3)}),m.jsx("h2",{children:s==null?void 0:s.phoneNumber.substr(5,5)})]})]})]}),m.jsx("div",{className:"offer-content",children:m.jsx("h3",{children:Y.data().content})}),m.jsx("div",{className:"offer-footer",children:m.jsxs("h4",{children:["Starting at ",m.jsxs("span",{children:[Y.data().price,"Dt"]})]})})]}));return m.jsxs("div",{className:"profile",children:[m.jsx(Yp,{}),m.jsxs("div",{className:"fields",children:[m.jsx("img",{src:s==null?void 0:s.photoURL}),m.jsx("h5",{className:"name",children:s&&s.name}),m.jsxs("div",{className:"phoneNumber",children:[m.jsx("h2",{children:"+216"}),m.jsx("h2",{children:(N=s==null?void 0:s.phoneNumber)==null?void 0:N.substr(0,2)}),m.jsx("h2",{children:(W=s==null?void 0:s.phoneNumber)==null?void 0:W.substr(2,3)}),m.jsx("h2",{children:($=s==null?void 0:s.phoneNumber)==null?void 0:$.substr(5,5)})]}),m.jsx("div",{className:"bio",children:s&&s.bio}),h==null&&m.jsxs("form",{className:"offer-form",onSubmit:g,children:[m.jsxs("div",{className:"offer-box",children:[m.jsx("input",{type:"text",onChange:Y=>{l(Y.target.value)},required:!0}),m.jsxs("div",{className:"offer-placeholder",children:[m.jsx("img",{src:j_,alt:""}),m.jsxs("h3",{children:["What you want ",E," to do for you"]})]})]}),m.jsxs("div",{className:"offer-box",children:[m.jsx("input",{type:"text",onChange:Y=>{c(Y.target.value)},required:!0}),m.jsxs("div",{className:"offer-placeholder",children:[m.jsx("img",{src:F_,alt:""}),m.jsx("h3",{children:"You will pay"})]}),m.jsx("button",{children:"Send Request"})]})]}),h=="waiting"&&m.jsx("h1",{children:"wait for a respond"}),h=="refuse"&&m.jsxs("div",{children:[m.jsx("h1",{children:"your request has ben refused"}),m.jsx("button",{onClick:()=>{window.location.reload(!1),e(Bi(We,"requests",`${y}`))},children:"ok"})]}),m.jsxs("div",{className:"info-box",children:[m.jsxs("div",{className:"info",children:[m.jsx("img",{src:B_,alt:""}),m.jsx("h3",{children:s&&s.email})]}),m.jsxs("div",{className:"info",children:[m.jsx("img",{src:z_,alt:""}),m.jsx("h3",{children:s&&s.messanger})]}),m.jsxs("div",{className:"info",children:[m.jsx("img",{src:H_,alt:""}),m.jsx("h3",{children:s&&s.instagram})]})]})]}),m.jsxs("div",{className:"offers-display",children:[m.jsxs("div",{className:"offers-section-title",children:[m.jsx("img",{src:V_,alt:""}),m.jsxs("h3",{children:[E,"'s offers"]})]}),m.jsx("div",{className:"offers-section",children:k})]})]})}function TO(){return m.jsx("div",{children:m.jsx("a",{href:"/",children:"home"})})}function kO(){return m.jsx("div",{children:m.jsx(yO,{children:m.jsxs(ik,{children:[m.jsx(mr,{path:"/",element:m.jsxs(Jc,{children:[m.jsx("img",{src:Xc,alt:"",className:"banner"}),m.jsx(wO,{})]})}),m.jsx(mr,{path:"/profile",element:m.jsxs(Jc,{children:[m.jsx("img",{src:Xc,alt:"",className:"banner"}),m.jsx(EO,{})]})}),m.jsx(mr,{path:"/users/:id",element:m.jsxs(Jc,{children:[m.jsx("img",{src:Xc,alt:"",className:"banner"}),m.jsx(IO,{})]})}),m.jsx(mr,{path:"/signin",element:m.jsx(Wy,{children:m.jsx(_O,{})})}),m.jsx(mr,{path:"/signup",element:m.jsx(Wy,{children:m.jsx(SO,{})})}),m.jsx(mr,{path:"*",element:m.jsx(TO,{})})]})})})}Zc.createRoot(document.getElementById("root")).render(m.jsx(aS.StrictMode,{children:m.jsx(uk,{children:m.jsx(kO,{})})}));
