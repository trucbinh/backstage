/*! For license information please see ed5236b2.937b32a6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[887578],{135540:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>a});var n=t(824246),o=t(511151);const c={id:"plugin-scaffolder-react.scaffolderrjsfformprops.focusonfirsterror",title:"ScaffolderRJSFFormProps.focusOnFirstError",description:"API reference for ScaffolderRJSFFormProps.focusOnFirstError"},s=void 0,u={id:"reference/plugin-scaffolder-react.scaffolderrjsfformprops.focusonfirsterror",title:"ScaffolderRJSFFormProps.focusOnFirstError",description:"API reference for ScaffolderRJSFFormProps.focusOnFirstError",source:"@site/../docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.focusonfirsterror.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-react.scaffolderrjsfformprops.focusonfirsterror",permalink:"/docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.focusonfirsterror",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.focusonfirsterror.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-react.scaffolderrjsfformprops.focusonfirsterror",title:"ScaffolderRJSFFormProps.focusOnFirstError",description:"API reference for ScaffolderRJSFFormProps.focusOnFirstError"}},f={},a=[];function i(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops",children:(0,n.jsx)(r.code,{children:"ScaffolderRJSFFormProps"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.focusonfirsterror",children:(0,n.jsx)(r.code,{children:"focusOnFirstError"})})]}),"\n",(0,n.jsx)(r.p,{children:"If set to true, then the first field with an error will receive the focus when the form is submitted with errors"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"focusOnFirstError?: boolean | ((error: RJSFValidationError) => void);\n"})})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,c={},a=null,i=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(i=r.ref),r)s.call(r,n)&&!f.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:u.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function _(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function v(){}function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=_.prototype;var S=b.prototype=new v;S.constructor=b,m(S,_.prototype),S.isPureReactComponent=!0;var g=Array.isArray,j=Object.prototype.hasOwnProperty,E={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var o,c={},s=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(s=""+r.key),r)j.call(r,o)&&!k.hasOwnProperty(o)&&(c[o]=r[o]);var f=arguments.length-2;if(1===f)c.children=n;else if(1<f){for(var a=Array(f),i=0;i<f;i++)a[i]=arguments[i+2];c.children=a}if(e&&e.defaultProps)for(o in f=e.defaultProps)void 0===c[o]&&(c[o]=f[o]);return{$$typeof:t,type:e,key:s,ref:u,props:c,_owner:E.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function F(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,o,c,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var f=!1;if(null===e)f=!0;else switch(u){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case t:case n:f=!0}}if(f)return s=s(f=e),e=""===c?"."+F(f,0):c,g(s)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),O(s,r,o,"",(function(e){return e}))):null!=s&&(x(s)&&(s=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||f&&f.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),r.push(s)),1;if(f=0,c=""===c?".":c+":",g(e))for(var a=0;a<e.length;a++){var i=c+F(u=e[a],a);f+=O(u,r,o,i,s)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),a=0;!(u=e.next()).done;)f+=O(u=u.value,r,o,i=c+F(u,a++),s);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return f}function P(e,r,t){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:E};r.Children={map:P,forEach:function(e,r,t){P(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=s,r.PureComponent=b,r.StrictMode=c,r.Suspense=i,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,s=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,u=E.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(a in r)j.call(r,a)&&!k.hasOwnProperty(a)&&(o[a]=void 0===r[a]&&void 0!==f?f[a]:r[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){f=Array(a);for(var i=0;i<a;i++)f[i]=arguments[i+2];o.children=f}return{$$typeof:t,type:e.type,key:c,ref:s,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return $.current.useCallback(e,r)},r.useContext=function(e){return $.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return $.current.useDeferredValue(e)},r.useEffect=function(e,r){return $.current.useEffect(e,r)},r.useId=function(){return $.current.useId()},r.useImperativeHandle=function(e,r,t){return $.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return $.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return $.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return $.current.useMemo(e,r)},r.useReducer=function(e,r,t){return $.current.useReducer(e,r,t)},r.useRef=function(e){return $.current.useRef(e)},r.useState=function(e){return $.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return $.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return $.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>u,a:()=>s});var n=t(667294);const o={},c=n.createContext(o);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);