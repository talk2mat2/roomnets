(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[13],{168:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},169:function(e,t,n){var r=n(170).default;function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var u={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=c?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(u,i,a):u[i]=e[i]}return u.default=e,n&&n.set(e,u),u},e.exports.default=e.exports,e.exports.__esModule=!0},170:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(31)},175:function(e,t,n){"use strict";var r=n(168),o=n(169);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(1)),c=(0,r(n(171)).default)(u.createElement(u.Fragment,null,u.createElement("circle",{cx:"15.5",cy:"9.5",r:"1.5"}),u.createElement("circle",{cx:"8.5",cy:"9.5",r:"1.5"}),u.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"})),"SentimentVerySatisfied");t.default=c},230:function(e,t,n){"use strict";n.r(t);n(1);var r=n(54),o=n(175),u=n.n(o),c=n(4),i=n(0);t.default=function(){Object(c.f)();return Object(i.jsxs)("div",{children:[Object(i.jsx)(r.a,{}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(i.jsx)("div",{className:"poststep pricing my-80",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row justify-content-center",children:[Object(i.jsx)("div",{className:"col-lg-12 wow animated slideInUp",children:Object(i.jsx)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:Object(i.jsx)("h2",{className:"title mb-20 color-primary",children:"Thank You for Your Post"})})}),Object(i.jsxs)("div",{className:"col-lg-8 text-center",children:[Object(i.jsx)("div",{className:"submit-property ",children:Object(i.jsx)(u.a,{size:80,style:{color:"#51AF33",fontSize:"150px"},fontSize:"large"})}),Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"my-40",children:"Your apartment/Building Advert was successfully placed and should appear on the search for others to view aond contact you"})})]})]})})})]})]})}},31:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return o.a})),n.d(t,"createSvgIcon",(function(){return u.a})),n.d(t,"debounce",(function(){return c})),n.d(t,"deprecatedPropType",(function(){return i.a})),n.d(t,"isMuiElement",(function(){return s})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return f})),n.d(t,"requirePropFactory",(function(){return d})),n.d(t,"setRef",(function(){return p.a})),n.d(t,"unsupportedProp",(function(){return m})),n.d(t,"useControlled",(function(){return b})),n.d(t,"useEventCallback",(function(){return x.a})),n.d(t,"useForkRef",(function(){return j.a})),n.d(t,"unstable_useId",(function(){return v})),n.d(t,"useIsFocusVisible",(function(){return y.a}));var r=n(22),o=n(46),u=n(141);function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];var c=this,i=function(){e.apply(c,o)};clearTimeout(t),t=setTimeout(i,n)}return r.clear=function(){clearTimeout(t)},r}var i=n(86),a=n(1);function s(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}var l=n(39);function f(e){return Object(l.a)(e).defaultView||window}function d(e){return function(){return null}}var p=n(45);function m(e,t,n,r,o){return null}function b(e){var t=e.controlled,n=e.default,r=(e.name,e.state,a.useRef(void 0!==t).current),o=a.useState(n),u=o[0],c=o[1];return[r?t:u,a.useCallback((function(e){r||c(e)}),[])]}var x=n(20),j=n(23);function v(e){var t=a.useState(e),n=t[0],r=t[1],o=e||n;return a.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),o}var y=n(55)},86:function(e,t,n){"use strict";function r(e,t){return function(){return null}}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=13.738cc15b.chunk.js.map