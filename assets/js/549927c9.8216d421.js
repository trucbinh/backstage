/*! For license information please see 549927c9.8216d421.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[391345],{641398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"software-templates-index",title:"Backstage Software Templates",sidebar_label:"Overview",description:"The Software Templates part of Backstage is a tool that can help you create Components inside Backstage"},s=void 0,i={id:"features/software-templates/software-templates-index",title:"Backstage Software Templates",description:"The Software Templates part of Backstage is a tool that can help you create Components inside Backstage",source:"@site/../docs/features/software-templates/index.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/",permalink:"/docs/features/software-templates/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/index.md",tags:[],version:"current",frontMatter:{id:"software-templates-index",title:"Backstage Software Templates",sidebar_label:"Overview",description:"The Software Templates part of Backstage is a tool that can help you create Components inside Backstage"},sidebar:"docs",previous:{title:"Proxy",permalink:"/docs/features/kubernetes/proxy"},next:{title:"Configuration",permalink:"/docs/features/software-templates/configuration"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Choose a template",id:"choose-a-template",level:2},{value:"Run!",id:"run",level:2},{value:"View Component in Catalog",id:"view-component-in-catalog",level:2},{value:"Disable Register Existing Component button",id:"disable-register-existing-component-button",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",source:"source",video:"video",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Software Templates part of Backstage is a tool that can help you create\nComponents inside Backstage. By default, it has the ability to load skeletons of\ncode, template in some variables, and then publish the template to some\nlocations like GitHub or GitLab."}),"\n",(0,r.jsxs)(t.video,{width:"100%",height:"100%",controls:!0,children:["\n  ",(0,r.jsx)(t.source,{src:"https://backstage.io/blog/assets/2020-08-05/feature.mp4",type:"video/mp4"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Be sure to have covered\n",(0,r.jsx)(t.a,{href:"../../getting-started",children:"Getting Started with Backstage"})," before proceeding."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: if you're running Backstage with Node 20 or later, you'll need to pass the flag ",(0,r.jsx)(t.code,{children:"--no-node-snapshot"})," to Node in order to\nuse the templates feature.\nOne way to do this is to specify the ",(0,r.jsx)(t.code,{children:"NODE_OPTIONS"})," environment variable before starting Backstage:\n",(0,r.jsx)(t.code,{children:"export NODE_OPTIONS=--no-node-snapshot"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The Software Templates are available under ",(0,r.jsx)(t.code,{children:"/create"}),". For local development you\nshould be able to reach them at ",(0,r.jsx)(t.code,{children:"http://localhost:3000/create"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Once there, you should see something that looks similar to this:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Create Image",src:n(99282).Z+"",width:"3584",height:"2276"})}),"\n",(0,r.jsx)(t.h2,{id:"choose-a-template",children:"Choose a template"}),"\n",(0,r.jsx)(t.p,{children:"When you select a template that you want to create, you'll be taken to the next\npage which may or may not look different for each template. Each template can\nask for different input variables, and they are then passed to the templater\ninternally."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Enter some variables",src:n(846238).Z+"",width:"3584",height:"2276"})}),"\n",(0,r.jsxs)(t.p,{children:["After filling in these variables, you'll get some more fields to fill out which\nare required for Backstage usage: the owner (which is a ",(0,r.jsx)(t.code,{children:"user"})," in the backstage\nsystem), and the ",(0,r.jsx)(t.code,{children:"storePath"})," which is a destination URL to create for the\nprovider, for instance ",(0,r.jsx)(t.code,{children:"https://github.com/backstage/my-new-repository"}),", or\n",(0,r.jsx)(t.code,{children:"https://gitlab.com/myorg/myrepo"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Enter Backstage vars",src:n(64964).Z+"",width:"3584",height:"2276"})}),"\n",(0,r.jsx)(t.h2,{id:"run",children:"Run!"}),"\n",(0,r.jsx)(t.p,{children:"Once you've entered values and confirmed, you'll then get a popup box with live\nprogress of what is currently happening with the creation of your template."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Templating Running",src:n(88129).Z+"",width:"3584",height:"2276"})}),"\n",(0,r.jsx)(t.p,{children:"It shouldn't take too long, and you'll have a success screen!"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Templating Complete",src:n(516282).Z+"",width:"3584",height:"2276"})}),"\n",(0,r.jsx)(t.p,{children:"If it fails, you'll be able to click on each section to get the log from the\nstep that failed which can be helpful in debugging."}),"\n",(0,r.jsx)(t.p,{children:'You can also cancel the running process. Once you clicked on button "Cancel", the abort signal\nwill be sent to a task and all next steps won\'t be executed. The current step will be cancelled\nonly if it supports it.'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Templating failed",src:n(909501).Z+"",width:"3584",height:"2276"})}),"\n",(0,r.jsx)(t.h2,{id:"view-component-in-catalog",children:"View Component in Catalog"}),"\n",(0,r.jsxs)(t.p,{children:["When it's been created, you'll see the ",(0,r.jsx)(t.code,{children:"View in Catalog"})," button, which will take\nyou to the registered component in the catalog:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Catalog",src:n(914156).Z+"",width:"3584",height:"2276"})}),"\n",(0,r.jsx)(t.p,{children:"And then you'll also be able to see it in the Catalog View table:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Catalog",src:n(804536).Z+"",width:"3584",height:"2276"})}),"\n",(0,r.jsx)(t.h2,{id:"disable-register-existing-component-button",children:"Disable Register Existing Component button"}),"\n",(0,r.jsxs)(t.p,{children:["There could be situations where you would like to disable the\n",(0,r.jsx)(t.code,{children:"Register Existing Component"})," button for your users. For example:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Disable Button",src:n(702446).Z+"",width:"1699",height:"1042"})}),"\n",(0,r.jsxs)(t.p,{children:["To do so, you will un-register / remove the ",(0,r.jsx)(t.code,{children:"catalogImportPlugin.routes.importPage"}),"\nfrom ",(0,r.jsx)(t.code,{children:"backstage/packages/app/src/App.tsx"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:" const app = createApp({\n   apis,\n   bindRoutes({ bind }) {\n-    bind(scaffolderPlugin.externalRoutes, {\n-      registerComponent: catalogImportPlugin.routes.importPage,\n-    });\n     bind(orgPlugin.externalRoutes, {\n       catalogIndex: catalogPlugin.routes.catalogIndex,\n     });\n"})}),"\n",(0,r.jsx)(t.p,{children:"After the change, you should no longer see the button."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},804536:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/added-to-the-catalog-list-c05a5e2726a8df19abdf011556f35cb0.png"},516282:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/complete-a220b9c7b56ba683dcf8483d69ae2ce5.png"},99282:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-c1b5255bb8f53b9435895017e096f01e.png"},702446:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/disable-register-existing-component-button-3c2e18b7fe6b714e45bd52675c8a07f4.png"},909501:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/failed-92f8dcc883fcffd20786f4ec42973a7f.png"},914156:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/go-to-catalog-471a888ceb7b60c688da41adfbb7cf08.png"},88129:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/running-73e6dae64670aef3bf80c5daf7ead7d3.png"},64964:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/template-picked-2-0bfd84a1da2fffacb8e9e74db1fad3df.png"},846238:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/template-picked-c94e4079dbef0f28fcac73a67bd57ec9.png"},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function b(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=x.prototype=new b;v.constructor=x,m(v,y.prototype),v.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,o)&&!_.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return s=s(c=e),e=""===a?"."+R(c,0):a,w(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),O(s,t,o,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(c=0,a=""===a?".":a+":",w(e))for(var l=0;l<e.length;l++){var u=a+R(i=e[l],l);c+=O(i,t,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=O(i=i.value,t,o,u=a+R(i,l++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},B={transition:null},I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=s,t.PureComponent=x,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:s,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=B.transition;B.transition={};try{e()}finally{B.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(667294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);