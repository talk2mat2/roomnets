(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[1],{168:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},169:function(e,t,r){var o=r(170).default;function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var l=i?Object.getOwnPropertyDescriptor(e,c):null;l&&(l.get||l.set)?Object.defineProperty(n,c,l):n[c]=e[c]}return n.default=e,r&&r.set(e,n),n},e.exports.default=e.exports,e.exports.__esModule=!0},170:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},171:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=r(31)},172:function(e,t,r){"use strict";var o=r(168),a=r(169);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(1)),i=(0,o(r(171)).default)(n.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");t.default=i},176:function(e,t,r){"use strict";var o=r(2),a=r(3),n=r(1),i=(r(5),r(9)),c=r(15),l=r(22),s=44,d=n.forwardRef((function(e,t){var r=e.classes,c=e.className,d=e.color,u=void 0===d?"primary":d,p=e.disableShrink,f=void 0!==p&&p,b=e.size,m=void 0===b?40:b,h=e.style,y=e.thickness,x=void 0===y?3.6:y,v=e.value,g=void 0===v?0:v,S=e.variant,k=void 0===S?"indeterminate":S,O=Object(a.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},j={},C={};if("determinate"===k||"static"===k){var z=2*Math.PI*((s-x)/2);w.strokeDasharray=z.toFixed(3),C["aria-valuenow"]=Math.round(g),w.strokeDashoffset="".concat(((100-g)/100*z).toFixed(3),"px"),j.transform="rotate(-90deg)"}return n.createElement("div",Object(o.a)({className:Object(i.a)(r.root,c,"inherit"!==u&&r["color".concat(Object(l.a)(u))],{determinate:r.determinate,indeterminate:r.indeterminate,static:r.static}[k]),style:Object(o.a)({width:m,height:m},j,h),ref:t,role:"progressbar"},C,O),n.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(s," ").concat(s)},n.createElement("circle",{className:Object(i.a)(r.circle,f&&r.circleDisableShrink,{determinate:r.circleDeterminate,indeterminate:r.circleIndeterminate,static:r.circleStatic}[k]),style:w,cx:s,cy:s,r:(s-x)/2,fill:"none",strokeWidth:x})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},179:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(51);var a=r(59);function n(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},197:function(e,t,r){"use strict";var o=r(3),a=r(2),n=r(1),i=(r(5),r(9)),c=r(15),l=r(21),s=r(166),d=r(22),u=n.forwardRef((function(e,t){var r=e.children,c=e.classes,l=e.className,u=e.color,p=void 0===u?"default":u,f=e.component,b=void 0===f?"button":f,m=e.disabled,h=void 0!==m&&m,y=e.disableElevation,x=void 0!==y&&y,v=e.disableFocusRipple,g=void 0!==v&&v,S=e.endIcon,k=e.focusVisibleClassName,O=e.fullWidth,w=void 0!==O&&O,j=e.size,C=void 0===j?"medium":j,z=e.startIcon,M=e.type,I=void 0===M?"button":M,R=e.variant,_=void 0===R?"text":R,D=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),E=z&&n.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(d.a)(C))])},z),P=S&&n.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(d.a)(C))])},S);return n.createElement(s.a,Object(a.a)({className:Object(i.a)(c.root,c[_],l,"inherit"===p?c.colorInherit:"default"!==p&&c["".concat(_).concat(Object(d.a)(p))],"medium"!==C&&[c["".concat(_,"Size").concat(Object(d.a)(C))],c["size".concat(Object(d.a)(C))]],x&&c.disableElevation,h&&c.disabled,w&&c.fullWidth),component:b,disabled:h,focusRipple:!g,focusVisibleClassName:Object(i.a)(c.focusVisible,k),ref:t,type:I},D),n.createElement("span",{className:c.label},E,r,P))}));t.a=Object(c.a)((function(e){return{root:Object(a.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.a)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.a)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.a)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(u)},31:function(e,t,r){"use strict";r.r(t),r.d(t,"capitalize",(function(){return o.a})),r.d(t,"createChainedFunction",(function(){return a.a})),r.d(t,"createSvgIcon",(function(){return n.a})),r.d(t,"debounce",(function(){return i})),r.d(t,"deprecatedPropType",(function(){return c.a})),r.d(t,"isMuiElement",(function(){return s})),r.d(t,"ownerDocument",(function(){return d.a})),r.d(t,"ownerWindow",(function(){return u})),r.d(t,"requirePropFactory",(function(){return p})),r.d(t,"setRef",(function(){return f.a})),r.d(t,"unsupportedProp",(function(){return b})),r.d(t,"useControlled",(function(){return m})),r.d(t,"useEventCallback",(function(){return h.a})),r.d(t,"useForkRef",(function(){return y.a})),r.d(t,"unstable_useId",(function(){return x})),r.d(t,"useIsFocusVisible",(function(){return v.a}));var o=r(22),a=r(46),n=r(141);function i(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];var i=this,c=function(){e.apply(i,a)};clearTimeout(t),t=setTimeout(c,r)}return o.clear=function(){clearTimeout(t)},o}var c=r(86),l=r(1);function s(e,t){return l.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}var d=r(39);function u(e){return Object(d.a)(e).defaultView||window}function p(e){return function(){return null}}var f=r(45);function b(e,t,r,o,a){return null}function m(e){var t=e.controlled,r=e.default,o=(e.name,e.state,l.useRef(void 0!==t).current),a=l.useState(r),n=a[0],i=a[1];return[o?t:n,l.useCallback((function(e){o||i(e)}),[])]}var h=r(20),y=r(23);function x(e){var t=l.useState(e),r=t[0],o=t[1],a=e||r;return l.useEffect((function(){null==r&&o("mui-".concat(Math.round(1e5*Math.random())))}),[r]),a}var v=r(55)},86:function(e,t,r){"use strict";function o(e,t){return function(){return null}}r.d(t,"a",(function(){return o}))}}]);
//# sourceMappingURL=1.d5dc9c5b.chunk.js.map