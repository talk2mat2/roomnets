(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[9],{154:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},155:function(e,t,n){var r=n(156);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var o=i?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(n,c,o):n[c]=e[c]}return n.default=e,t&&t.set(e,n),n}},156:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(32)},159:function(e,t,n){"use strict";var r=n(154),u=n(155);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n(1)),c=(0,r(n(157)).default)(i.createElement(i.Fragment,null,i.createElement("circle",{cx:"15.5",cy:"9.5",r:"1.5"}),i.createElement("circle",{cx:"8.5",cy:"9.5",r:"1.5"}),i.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"})),"SentimentVerySatisfied");t.default=c},180:function(e,t,n){"use strict";n.r(t);n(1);var r=n(50),u=n(159),i=n.n(u),c=n(4),o=n(0);t.default=function(){Object(c.f)();return Object(o.jsxs)("div",{children:[Object(o.jsx)(r.a,{}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(o.jsx)("div",{className:"poststep pricing my-80",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"col-lg-12 wow animated slideInUp",children:Object(o.jsx)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:Object(o.jsx)("h2",{className:"title mb-20 color-primary",children:"Thank You for Your Post"})})}),Object(o.jsxs)("div",{className:"col-lg-8 text-center",children:[Object(o.jsx)("div",{className:"submit-property ",children:Object(o.jsx)(i.a,{size:80,style:{color:"#51AF33",fontSize:"150px"},fontSize:"large"})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"my-40",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu suscipit justo. Cras quis quam finibus nulla sollicitudin ullamcorper. Curabitur quis leo fringilla, laoreet felis id, tempus nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin at porta velit. Morbi vel gravida ligula. Duis tortor felis,"})})]})]})})})]})]})}},32:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return u.a})),n.d(t,"createSvgIcon",(function(){return i.a})),n.d(t,"debounce",(function(){return c})),n.d(t,"deprecatedPropType",(function(){return o.a})),n.d(t,"isMuiElement",(function(){return s})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return f})),n.d(t,"requirePropFactory",(function(){return d})),n.d(t,"setRef",(function(){return p.a})),n.d(t,"unsupportedProp",(function(){return m})),n.d(t,"useControlled",(function(){return b})),n.d(t,"useEventCallback",(function(){return j.a})),n.d(t,"useForkRef",(function(){return v.a})),n.d(t,"unstable_useId",(function(){return y})),n.d(t,"useIsFocusVisible",(function(){return h.a}));var r=n(22),u=n(45),i=n(127);function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];var c=this,o=function(){e.apply(c,u)};clearTimeout(t),t=setTimeout(o,n)}return r.clear=function(){clearTimeout(t)},r}var o=n(73),a=n(1);function s(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}var l=n(39);function f(e){return Object(l.a)(e).defaultView||window}function d(e){return function(){return null}}var p=n(44);function m(e,t,n,r,u){return null}function b(e){var t=e.controlled,n=e.default,r=(e.name,e.state,a.useRef(void 0!==t).current),u=a.useState(n),i=u[0],c=u[1];return[r?t:i,a.useCallback((function(e){r||c(e)}),[])]}var j=n(17),v=n(23);function y(e){var t=a.useState(e),n=t[0],r=t[1],u=e||n;return a.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),u}var h=n(51)},73:function(e,t,n){"use strict";function r(e,t){return function(){return null}}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=9.39a6c4ba.chunk.js.map