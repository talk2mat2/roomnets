(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[18],{155:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},156:function(e,t,n){var c=n(157);function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var s=r?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(n,l,s):n[l]=e[l]}return n.default=e,t&&t.set(e,n),n}},157:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c.createSvgIcon}});var c=n(32)},159:function(e,t,n){"use strict";var c=n(155),o=n(156);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(1)),l=(0,c(n(158)).default)(r.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");t.default=l},195:function(e,t,n){"use strict";n.r(t);var c=n(6),o=n(26),r=n.n(o),l=n(33),s=n(24),i=n(1),a=n.n(i),j=n(50),u=n(4),d=n(13),b=n(159),m=n.n(b),O=n(41),h=n(52),x=n(0);t.default=function(){var e=Object(u.f)(),t=Object(d.b)(),n=a.a.useState([]),o=Object(s.a)(n,2),i=o[0],b=o[1],p=a.a.useState({existing_room_mates:{smoker:"",no_males:0,no_femalse:0,pets:"",language_spoken:"",sexual_orientation:"",nationality:""},new_room_mate:{smoker:"",language_spoken:"",sexual_orientation:"",nationality:"",occupation:"",pets:"",mimimum_age:"",maximum_age:"",couples_welcomed:""}}),f=Object(s.a)(p,2),v=f[0],g=f[1],y=function(){var e=Object(l.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.new_room_mate,t.couples_welcomed,t.maximum_age,t.mimimum_age,t.nationality,t.occupation,t.pets,t.sexual_orientation,t.smoker,n=new Array,e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var n=Object(l.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y().then((function(n){n.length>0?(b(n),window.scrollTo(0,150)):(e.push("/process-rooms-advert4s"),t(Object(O.e)(v)))}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(j.a,{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(x.jsx)("div",{className:"poststep pricing my-80",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row justify-content-center",children:[Object(x.jsx)("div",{className:"col-lg-12 wow animated slideInUp",children:Object(x.jsxs)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:[Object(x.jsx)("h2",{className:"title mb-20 color-primary",children:"Advertise your room"}),Object(x.jsx)("div",{className:"row justify-content-center",children:Object(x.jsx)("div",{className:"col-lg-7 text-left",children:i.length>0?i.map((function(e){return Object(x.jsxs)("p",{className:"error-card alert-danger",children:[Object(x.jsx)(m.a,{fontSize:"small",style:{marginRight:"4px"}}),e]})})):null})})]})}),Object(x.jsx)("div",{className:"col-lg-8 myform",children:Object(x.jsx)("div",{className:"submit-property bg-light",children:Object(x.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(x.jsxs)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:[Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("h4",{className:" color-primary",children:"Existing Room mates"})}),Object(x.jsx)("div",{className:"text-right",children:Object(x.jsx)("p",{children:"3 of 4"})}),Object(x.jsx)("div",{style:{height:"10px"}}),Object(x.jsxs)("div",{className:"row my-40",children:[Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Smokers ?"}),Object(x.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("input",{id:"feature-smoker-yes",className:"d-none",type:"checkbox",name:"smoker",checked:"yes"==v.existing_room_mates.smoker,onChange:function(e){return g(Object(c.a)(Object(c.a)({},v),{},{existing_room_mates:Object(c.a)(Object(c.a)({},v.existing_room_mates),{},{smoker:"yes"})}))}}),Object(x.jsx)("label",{htmlFor:"feature-smoker-yes",children:"Yes"})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("input",{id:"feature-smoker-no",className:"d-none",type:"checkbox",name:"smoker",checked:"No"==v.existing_room_mates.smoker,onChange:function(e){return g(Object(c.a)(Object(c.a)({},v),{},{existing_room_mates:Object(c.a)(Object(c.a)({},v.existing_room_mates),{},{smoker:"No"})}))}}),Object(x.jsx)("label",{htmlFor:"feature-smoker-no",children:"No"})]})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Number of Males Present"}),Object(x.jsx)("input",{className:"form-control bg-gray",type:"number",name:"property-id"})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Number Of Females Present"}),Object(x.jsx)("input",{type:"number",class:"form-control  bg-gray"})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Pets ? "}),Object(x.jsxs)("select",{class:"form-control br-gray",children:[Object(x.jsx)("option",{value:"",children:"-Select-"}),Object(x.jsx)("option",{value:"Yes",children:"Yes"}),Object(x.jsx)("option",{value:"No",children:"No"})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Language spoken? "}),Object(x.jsxs)("select",{class:"form-control bg-gray",children:[Object(x.jsx)("option",{value:"",children:"-Not Disclosed-"}),Object(x.jsx)("option",{value:"Mixed",children:"Mixed"}),Object(x.jsx)("option",{value:"English",children:"English"}),Object(x.jsx)("option",{value:"African",children:"Africans"}),Object(x.jsx)("option",{value:"Russian",children:"Russian"}),Object(x.jsx)("option",{value:"Arabic",children:"Arabic"})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Sexual Orientation ? "}),Object(x.jsxs)("select",{class:"form-control br-gray",children:[Object(x.jsx)("option",{value:"Not Disclosed",children:"-Not Disclosed-"}),Object(x.jsx)("option",{value:"Straight",children:"Straight"}),Object(x.jsx)("option",{value:"Mixed",children:"Mixed"}),Object(x.jsx)("option",{value:"Gay/lesbian",children:"Gay/Lesbians"}),Object(x.jsx)("option",{value:"Bisexual",children:"Bi-sexual"})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Nationality ? "}),Object(x.jsxs)("select",{class:"form-control",children:[Object(x.jsx)("option",{value:"Not Disclosed",children:"-Not Disclosed-"}),Object(x.jsx)("option",{value:"Nigeria",children:"Nigeia"}),Object(x.jsx)("option",{value:"Mixed",children:"Mixed"}),Object(x.jsx)("option",{value:"Ghana",children:"Ghana"}),Object(x.jsx)("option",{value:"South Africa",children:"South Africa"}),Object(x.jsx)("option",{value:"Kenya",children:"Kenya"}),Object(x.jsx)("option",{value:"Ireland",children:"Ireland"}),Object(x.jsx)("option",{value:"Uk",children:"Uk"})]})]})]}),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsxs)("h4",{className:" color-primary",children:["New Roommate Requirement"," "]})}),Object(x.jsxs)("div",{className:"row my-40",children:[Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Smoker ?"}),Object(x.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("input",{id:"feature-123",className:"d-none",type:"checkbox",name:"smoker",checked:"yes"==v.new_room_mate.smoker,onChange:function(e){return g(Object(c.a)(Object(c.a)({},v),{},{new_room_mate:Object(c.a)(Object(c.a)({},v.new_room_mate),{},{smoker:"yes"})}))}}),Object(x.jsx)("label",{htmlFor:"feature-123",children:"Yes"})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("input",{id:"feature-124",className:"d-none",type:"checkbox",name:"smoker",checked:"No"==v.new_room_mate.smoker,onChange:function(e){return g(Object(c.a)(Object(c.a)({},v),{},{new_room_mate:Object(c.a)(Object(c.a)({},v.new_room_mate),{},{smoker:"No"})}))}}),Object(x.jsx)("label",{htmlFor:"feature-124",children:"No"})]})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Occupation? "}),Object(x.jsxs)("select",{class:"form-control bg-gray",children:[Object(x.jsx)("option",{value:"Undisclosed",children:"-Undisclosed-"}),Object(x.jsx)("option",{value:"Student",children:"Student"}),Object(x.jsx)("option",{value:"Professional",children:"Professional"})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Gender "}),Object(x.jsxs)("select",{class:"form-control bg-gray",children:[Object(x.jsx)("option",{value:"Not Disclosed",children:"-Not Disclosed-"}),Object(x.jsx)("option",{value:"Male",children:"Male"}),Object(x.jsx)("option",{value:"Female",children:"Female"})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Pets Allowed ? "}),Object(x.jsxs)("select",{class:"form-control bg-gray",children:[Object(x.jsx)("option",{value:"",children:"-Select-"}),Object(x.jsx)("option",{value:"Yes",children:"Yes"}),Object(x.jsx)("option",{value:"No",children:"No"})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Couples Welcomed ? "}),Object(x.jsxs)("select",{class:"form-control bg-gray",children:[Object(x.jsx)("option",{value:"",children:"-Select-"}),Object(x.jsx)("option",{value:"Yes",children:"Yes"}),Object(x.jsx)("option",{value:"No",children:"No"})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Mimimum Age ? "}),Object(x.jsxs)("select",{class:"form-control bg-gray",children:[Object(x.jsx)("option",{value:"Any",children:"Any"}),Object(x.jsx)("option",{value:"10 or Above",children:"10 or Above"}),Object(x.jsx)("option",{value:"20 or Above",children:"20 or Above"}),Object(x.jsx)("option",{value:"30 or Above",children:"30 or Above"}),Object(x.jsx)("option",{value:"40 or Above",children:"40 or Above"}),Object(x.jsx)("option",{value:"50 or Above",children:"50 or Above"}),Object(x.jsx)("option",{value:"60 or Above",children:"60 or Above"})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Maximum Age ? "}),Object(x.jsxs)("select",{class:"form-control bg-gray",children:[Object(x.jsx)("option",{value:"",children:"-Select-"}),Object(x.jsx)("option",{value:"Any",children:"Any"}),Object(x.jsx)("option",{value:"10 Or Below",children:"10 Or Below"}),Object(x.jsx)("option",{value:"20 Or Below",children:"20 Or Below"}),Object(x.jsx)("option",{value:"30 Or Below",children:"30 Or Below"}),Object(x.jsx)("option",{value:"40 Or Below",children:"40 Or Below"}),Object(x.jsx)("option",{value:"50 Or Below",children:"50 Or Below"}),Object(x.jsx)("option",{value:"60 Or Below",children:"60 Or Below"}),Object(x.jsx)("option",{value:"70 Or Below",children:"70 Or Below"}),Object(x.jsx)("option",{value:"100 Or Below",children:"100 Or Below"})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Sexual Orientation ? "}),Object(x.jsxs)("select",{class:"form-control bg-gray",children:[Object(x.jsx)("option",{value:"",children:"-Not Disclosed-"}),Object(x.jsx)("option",{value:"Straight",children:"Straight"}),Object(x.jsx)("option",{value:"Mixed",children:"Mixed"}),Object(x.jsx)("option",{value:"Gay/Lesbians",children:"Gay/Lesbians"}),Object(x.jsx)("option",{value:"Bi-sexual",children:"Bi-sexual"})]})]}),Object(x.jsxs)("div",{className:"form-group col-lg-6",children:[Object(x.jsx)("label",{children:"Nationality ? "}),Object(x.jsxs)("select",{class:"form-control bg-gray",children:[Object(x.jsx)("option",{value:"",children:"-Not Disclosed-"}),Object(x.jsx)("option",{value:"Nigeria",children:"Nigeia"}),Object(x.jsx)("option",{value:"Mixed",children:"Mixed"}),Object(x.jsx)("option",{value:"Ghana",children:"Ghana"}),Object(x.jsx)("option",{value:"South Africa",children:"South Africa"}),Object(x.jsx)("option",{value:"Kenya",children:"Kenya"}),Object(x.jsx)("option",{value:"Ireland",children:"Ireland"}),Object(x.jsx)("option",{value:"Uk",children:"Uk"})]})]})]}),Object(x.jsx)("div",{className:"row"}),Object(x.jsxs)("div",{className:"col-lg-12",children:[Object(x.jsx)("button",{onClick:function(){return e.goBack()},className:"btn btn-primary",children:"Back"}),Object(x.jsx)("button",{onClick:N,className:"btn btn-primary float-right",children:"Next"})]})]})})})})]})})})]}),Object(x.jsx)(h.a,{})]})}},32:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return c.a})),n.d(t,"createChainedFunction",(function(){return o.a})),n.d(t,"createSvgIcon",(function(){return r.a})),n.d(t,"debounce",(function(){return l})),n.d(t,"deprecatedPropType",(function(){return s.a})),n.d(t,"isMuiElement",(function(){return a})),n.d(t,"ownerDocument",(function(){return j.a})),n.d(t,"ownerWindow",(function(){return u})),n.d(t,"requirePropFactory",(function(){return d})),n.d(t,"setRef",(function(){return b.a})),n.d(t,"unsupportedProp",(function(){return m})),n.d(t,"useControlled",(function(){return O})),n.d(t,"useEventCallback",(function(){return h.a})),n.d(t,"useForkRef",(function(){return x.a})),n.d(t,"unstable_useId",(function(){return p})),n.d(t,"useIsFocusVisible",(function(){return f.a}));var c=n(22),o=n(44),r=n(128);function l(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function c(){for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];var l=this,s=function(){e.apply(l,o)};clearTimeout(t),t=setTimeout(s,n)}return c.clear=function(){clearTimeout(t)},c}var s=n(74),i=n(1);function a(e,t){return i.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}var j=n(39);function u(e){return Object(j.a)(e).defaultView||window}function d(e){return function(){return null}}var b=n(43);function m(e,t,n,c,o){return null}function O(e){var t=e.controlled,n=e.default,c=(e.name,e.state,i.useRef(void 0!==t).current),o=i.useState(n),r=o[0],l=o[1];return[c?t:r,i.useCallback((function(e){c||l(e)}),[])]}var h=n(19),x=n(23);function p(e){var t=i.useState(e),n=t[0],c=t[1],o=e||n;return i.useEffect((function(){null==n&&c("mui-".concat(Math.round(1e5*Math.random())))}),[n]),o}var f=n(51)},74:function(e,t,n){"use strict";function c(e,t){return function(){return null}}n.d(t,"a",(function(){return c}))}}]);
//# sourceMappingURL=18.7c04f15a.chunk.js.map