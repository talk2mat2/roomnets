(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[12],{168:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},169:function(e,t,r){var n=r(170).default;function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var s={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(s,i,a):s[i]=e[i]}return s.default=e,r&&r.set(e,s),s},e.exports.default=e.exports,e.exports.__esModule=!0},170:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},171:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(32)},172:function(e,t,r){"use strict";var n=r(168),c=r(169);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(r(1)),o=(0,n(r(171)).default)(s.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");t.default=o},202:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(4),o=r(10),i=r(14),a=r(54),l=r(175),u=r.n(l),d=r(172),j=r.n(d),b=r(56),f=r(0);t.default=function(){Object(s.f)(),Object(i.c)((function(e){return e.CountryReducer.country}));var e=Object(i.c)((function(e){return e.user.currentUser}));return c.a.useEffect((function(){return console.log(e)}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)(a.a,{}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(f.jsx)("div",{className:"poststep pricing my-80",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"My Accounts"}),e?Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-md-12 col-lg-4",children:[Object(f.jsxs)("div",{className:"sidebar-widget bg-white mt-50 shadow py-40 px-30 wow slideInUp animated",children:[Object(f.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"Profile"}),Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{className:"contact-agent-image mr-20 float-left",children:Object(f.jsx)("img",{src:"images/team/1.png",className:"rounded-circle",alt:"images"})}),Object(f.jsxs)("div",{className:"align-self-center color-gray",children:[Object(f.jsxs)("h6",{className:"d-block mb-1 w-100 color-secondary",children:[e.user.firstName," ",e.user.lastName]}),Object(f.jsxs)("p",{children:[" ",e.user.mobileNumber]})]})]})]}),Object(f.jsxs)("div",{style:{border:"1px solid #eee",margin:"20px"},className:"col-7 mt-4",children:[Object(f.jsx)("h4",{children:"Need any help?"}),Object(f.jsx)("p",{children:"call:0128763664"}),Object(f.jsx)("p",{children:"Email:info@roomnets.com"})]})]}),Object(f.jsxs)("div",{className:"col-lg-8 border-top-1-gray py-30 wow slideInRight animated",children:[Object(f.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"My Details"}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-md-12 col-lg-12",children:[Object(f.jsxs)("ul",{className:"list-by-tag",children:[Object(f.jsxs)("li",{children:["First Name: ",Object(f.jsx)("span",{children:e.user.firstName})]}),Object(f.jsxs)("li",{children:["Last Name : ",Object(f.jsx)("span",{children:e.user.lastName})]}),Object(f.jsxs)("li",{children:["Email: ",Object(f.jsx)("span",{children:e.user.Email})]}),Object(f.jsxs)("li",{children:["Mobile Number :"," ",Object(f.jsx)("span",{children:e.user.mobileNumber})]}),e.user.country&&Object(f.jsxs)("li",{children:["Country Of Resident :"," ",Object(f.jsx)("span",{children:e.user.country})]}),Object(f.jsxs)("li",{children:["Registeration Date :"," ",Object(f.jsx)("span",{children:Object(f.jsx)(u.a,{children:e.user.created_at})})]})]}),Object(f.jsxs)("div",{className:"upgrade-section  col-lg-9 mt-4 ",children:[Object(f.jsxs)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:["Your account is a ",e.user.plans||"basic"," ","account"]}),"Basic"===e.user.plans&&Object(f.jsx)("h6",{className:"d-block mb-1 w-100 color-secondary",children:"What You Get from Upgrading:"}),Object(f.jsxs)("div",{className:"row justify-content-between p-3",children:[Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"Early Bird Access"}),Object(f.jsx)("li",{children:"Higher search ad result pririoty"}),Object(f.jsx)("li",{children:"Double your enquiries."})]}),"Basic"===e.user.plans&&Object(f.jsx)(o.b,{to:"upgrade-account/".concat(e.user._id),children:Object(f.jsx)("button",{className:"btn btn-primary upgrade-btn",children:"Upgrade"})})]})]})]})})]})]}):Object(f.jsx)("div",{className:"row justify-content-center",children:Object(f.jsx)("div",{className:"col-lg-6",children:Object(f.jsxs)("p",{className:"alert alert-danger",children:[Object(f.jsx)(j.a,{})," You Must Be Logged In To View This Page"]})})})]})})]}),Object(f.jsx)(b.a,{})]})}},32:function(e,t,r){"use strict";r.r(t),r.d(t,"capitalize",(function(){return n.a})),r.d(t,"createChainedFunction",(function(){return c.a})),r.d(t,"createSvgIcon",(function(){return s.a})),r.d(t,"debounce",(function(){return o})),r.d(t,"deprecatedPropType",(function(){return i.a})),r.d(t,"isMuiElement",(function(){return l})),r.d(t,"ownerDocument",(function(){return u.a})),r.d(t,"ownerWindow",(function(){return d})),r.d(t,"requirePropFactory",(function(){return j})),r.d(t,"setRef",(function(){return b.a})),r.d(t,"unsupportedProp",(function(){return f})),r.d(t,"useControlled",(function(){return p})),r.d(t,"useEventCallback",(function(){return m.a})),r.d(t,"useForkRef",(function(){return h.a})),r.d(t,"unstable_useId",(function(){return x})),r.d(t,"useIsFocusVisible",(function(){return O.a}));var n=r(22),c=r(46),s=r(141);function o(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function n(){for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];var o=this,i=function(){e.apply(o,c)};clearTimeout(t),t=setTimeout(i,r)}return n.clear=function(){clearTimeout(t)},n}var i=r(86),a=r(1);function l(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}var u=r(39);function d(e){return Object(u.a)(e).defaultView||window}function j(e){return function(){return null}}var b=r(45);function f(e,t,r,n,c){return null}function p(e){var t=e.controlled,r=e.default,n=(e.name,e.state,a.useRef(void 0!==t).current),c=a.useState(r),s=c[0],o=c[1];return[n?t:s,a.useCallback((function(e){n||o(e)}),[])]}var m=r(20),h=r(23);function x(e){var t=a.useState(e),r=t[0],n=t[1],c=e||r;return a.useEffect((function(){null==r&&n("mui-".concat(Math.round(1e5*Math.random())))}),[r]),c}var O=r(55)},86:function(e,t,r){"use strict";function n(e,t){return function(){return null}}r.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=12.1e5fc7fb.chunk.js.map