(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[12],{168:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},169:function(e,t,n){var r=n(170).default;function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var s={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(s,i,u):s[i]=e[i]}return s.default=e,n&&n.set(e,s),s},e.exports.default=e.exports,e.exports.__esModule=!0},170:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(31)},172:function(e,t,n){"use strict";var r=n(168),c=n(169);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(n(1)),o=(0,r(n(171)).default)(s.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");t.default=o},201:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),o=n(14),i=n(54),u=n(174),a=n.n(u),l=n(172),d=n.n(l),f=n(56),j=n(0);t.default=function(){Object(s.f)(),Object(o.c)((function(e){return e.CountryReducer.country}));var e=Object(o.c)((function(e){return e.user.currentUser}));return c.a.useEffect((function(){return console.log(e)}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(i.a,{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(j.jsx)("div",{className:"poststep pricing my-80",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"My Accounts"}),e?Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-12 col-lg-4",children:Object(j.jsxs)("div",{className:"sidebar-widget bg-white mt-50 shadow py-40 px-30 wow slideInUp animated",children:[Object(j.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"Profile"}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{className:"contact-agent-image mr-20 float-left",children:Object(j.jsx)("img",{src:"images/team/1.png",className:"rounded-circle",alt:"images"})}),Object(j.jsxs)("div",{className:"align-self-center color-gray",children:[Object(j.jsxs)("h6",{className:"d-block mb-1 w-100 color-secondary",children:[e.user.firstName," ",e.user.lastName]}),Object(j.jsxs)("p",{children:[" ",e.user.mobileNumber]})]})]})]})}),Object(j.jsxs)("div",{className:"col-lg-8 border-top-1-gray py-30 wow slideInRight animated",children:[Object(j.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"My Details"}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-12 col-lg-12",children:Object(j.jsxs)("ul",{className:"list-by-tag",children:[Object(j.jsxs)("li",{children:["First Name: ",Object(j.jsx)("span",{children:e.user.firstName})]}),Object(j.jsxs)("li",{children:["Last Name : ",Object(j.jsx)("span",{children:e.user.lastName})]}),Object(j.jsxs)("li",{children:["Email: ",Object(j.jsx)("span",{children:e.user.Email})]}),Object(j.jsxs)("li",{children:["Mobile Number :"," ",Object(j.jsx)("span",{children:e.user.mobileNumber})]}),e.user.country&&Object(j.jsxs)("li",{children:["Country Of Resident :"," ",Object(j.jsx)("span",{children:e.user.country})]}),Object(j.jsxs)("li",{children:["Registeration Date :"," ",Object(j.jsx)("span",{children:Object(j.jsx)(a.a,{children:e.user.created_at})})]}),Object(j.jsxs)("li",{children:["My Post :"," ",Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("span",{children:"View"})})]})]})})})]})]}):Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("p",{className:"alert alert-danger",children:[Object(j.jsx)(d.a,{})," You Must Be Logged In To View This Page"]})})})]})})]}),Object(j.jsx)(f.a,{})]})}},31:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return c.a})),n.d(t,"createSvgIcon",(function(){return s.a})),n.d(t,"debounce",(function(){return o})),n.d(t,"deprecatedPropType",(function(){return i.a})),n.d(t,"isMuiElement",(function(){return a})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return d})),n.d(t,"requirePropFactory",(function(){return f})),n.d(t,"setRef",(function(){return j.a})),n.d(t,"unsupportedProp",(function(){return b})),n.d(t,"useControlled",(function(){return p})),n.d(t,"useEventCallback",(function(){return m.a})),n.d(t,"useForkRef",(function(){return x.a})),n.d(t,"unstable_useId",(function(){return h})),n.d(t,"useIsFocusVisible",(function(){return O.a}));var r=n(22),c=n(46),s=n(141);function o(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];var o=this,i=function(){e.apply(o,c)};clearTimeout(t),t=setTimeout(i,n)}return r.clear=function(){clearTimeout(t)},r}var i=n(86),u=n(1);function a(e,t){return u.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}var l=n(39);function d(e){return Object(l.a)(e).defaultView||window}function f(e){return function(){return null}}var j=n(45);function b(e,t,n,r,c){return null}function p(e){var t=e.controlled,n=e.default,r=(e.name,e.state,u.useRef(void 0!==t).current),c=u.useState(n),s=c[0],o=c[1];return[r?t:s,u.useCallback((function(e){r||o(e)}),[])]}var m=n(20),x=n(23);function h(e){var t=u.useState(e),n=t[0],r=t[1],c=e||n;return u.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),c}var O=n(55)},86:function(e,t,n){"use strict";function r(e,t){return function(){return null}}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=12.f557f424.chunk.js.map