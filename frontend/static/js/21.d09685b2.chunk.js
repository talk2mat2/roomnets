(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[21],{193:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},194:function(e,t,n){var r=n(195).default;function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}return a.default=e,n&&n.set(e,a),a},e.exports.default=e.exports,e.exports.__esModule=!0},195:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(35)},197:function(e,t,n){"use strict";var r=n(193),c=n(194);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(1)),o=(0,r(n(196)).default)(a.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");t.default=o},305:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n(13),a=n.n(c),o=n(25),s=n(23),i=n(1),l=n.n(i),u=n(55),d=n(56),j=n(5),b=n(15),h=n(197),m=n.n(h),p=n(43),f=n(61),O=n(0);t.default=function(){var e=Object(j.f)(),t=Object(b.b)(),n=l.a.useState([]),c=Object(s.a)(n,2),i=c[0],h=c[1],x=l.a.useState({building_location:{lat:"",lng:"",place_id:"",address:""},street_name:"",rooms_avail_date:"",living_rooms:"",country:"",furnished_rooms:"",broker_agent_fee:"",add_start_date:"",add_end_date:"",rooms_size:"",minimum_stay:"",maximum_stay:"",amenities_swim:!1,amenities_internet:!1,amenities_private_toilets:!1,amenities_play_ground:!1,amenities_parking_space:!1,amenities_entry_disabled:!1,amenities_balcony:!1,amenities_others:!1}),v=Object(s.a)(x,2),g=v[0],_=v[1],y=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n,r,c,o,s,i,l,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.building_location,g.street_name,g.rooms_avail_date,n=g.living_rooms,r=g.furnished_rooms,c=g.broker_agent_fee,g.maximum_stay,g.minimum_stay,o=g.add_start_date,s=g.add_end_date,i=g.country,l=g.rooms_size,u=new Array,t.lat||u.push("building location not set"),i||u.push("You must set the country of the ad to be posted"),s||u.push("You did not set add  end date"),o||u.push("You did not set add start date"),n||u.push("You did not select living rooms"),r||u.push("You did not select check furnished rooms"),c||u.push("You did not tick broker/agent fee"),l||u.push("You did not check room size"),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var n=Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y().then((function(n){n.length>0?(h(n),window.scrollTo(0,150)):(e.push("/process-rooms-advert3"),t(Object(p.f)(g)))}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,c,o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.place_id,e.next=3,t.geometry.location.lng();case 3:return c=e.sent,e.next=6,t.geometry.location.lat();case 6:o=e.sent,s=t.formatted_address,console.log(s),_(Object(r.a)(Object(r.a)({},g),{},{building_location:{lat:o,lng:c,place_id:n,address:s}}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(u.a,{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(O.jsx)("div",{className:"poststep pricing my-80",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row justify-content-center",children:[Object(O.jsx)("div",{className:"col-lg-12 wow animated slideInUp",children:Object(O.jsxs)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:[Object(O.jsx)("h2",{className:"title mb-20 color-primary",children:"Advertise your room"}),Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-lg-7 text-left",children:i.length>0?i.map((function(e){return Object(O.jsxs)("p",{className:"error-card alert-danger",children:[Object(O.jsx)(m.a,{fontSize:"small",style:{marginRight:"4px"}}),e]})})):null})})]})}),Object(O.jsx)("div",{className:"col-lg-8 myform",children:Object(O.jsx)("div",{className:"submit-property bg-light",children:Object(O.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(O.jsxs)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:[Object(O.jsx)("div",{className:"text-left",children:Object(O.jsx)("h5",{className:"color-primary",children:"About the Room"})}),Object(O.jsx)("div",{className:"text-right",children:Object(O.jsx)("p",{children:"2 of 4"})}),Object(O.jsx)("div",{style:{height:"30px"}}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsxs)("label",{children:["Building Location ",Object(O.jsx)("sup",{children:"* "}),Object(O.jsx)("small",{children:"(or nerarest bus stop)"})]}),Object(O.jsx)(f.a,{className:"form-control bg-gray",handleplaces:function(e){return k(e)}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Street Name"}),Object(O.jsx)("input",{type:"text",class:"form-control  bg-gray",value:g.street_name,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{street_name:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Rooms Available from"}),Object(O.jsx)("input",{value:g.rooms_avail_date,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{rooms_avail_date:e.target.value}))},type:"date",class:"form-control  bg-gray"})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Living Room? "}),Object(O.jsxs)("select",{value:g.living_rooms,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{living_rooms:e.target.value}))},class:"form-control",children:[Object(O.jsx)("option",{value:"",children:"-Select-"}),Object(O.jsx)("option",{value:"Yes",children:"Yes"}),Object(O.jsx)("option",{value:"No",children:"No"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsxs)("label",{children:["Furnished Rooms ",Object(O.jsx)("sup",{children:"*"})," ?"," "]}),Object(O.jsxs)("select",{value:g.furnished_rooms,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{furnished_rooms:e.target.value}))},class:"form-control  bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-Select-"}),Object(O.jsx)("option",{value:"Yes",children:"Yes"}),Object(O.jsx)("option",{value:"No",children:"No"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Add Start Date"}),Object(O.jsx)("input",{value:g.add_start_date,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{add_start_date:e.target.value}))},type:"date",class:"form-control  bg-gray"})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Add End Date"}),Object(O.jsx)("input",{value:g.add_end_date,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{add_end_date:e.target.value}))},type:"date",class:"form-control  bg-gray"})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Country Of Ad ? "}),Object(O.jsxs)("select",{value:g.country,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{country:e.target.value}))},class:"form-control  bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-Select-"}),[{code:"NG",name:"Nigeria"},{code:"US",name:"Usa"},{code:"IE",name:"Ireland"},{code:"KE",name:"Kenya"},{code:"GH",name:"Ghana"},{code:"ZA",name:"South Africa"},{code:"GB",name:"Uk"}].map((function(e){return Object(O.jsx)("option",{value:e.code,children:e.name})}))]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Room Size"}),Object(O.jsxs)("ul",{className:"list-bottoms amenities select-option p-0",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-10",className:"d-none",type:"checkbox",name:"Room_size",checked:"Small"==g.rooms_size,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{rooms_size:"Small"}))}}),Object(O.jsx)("label",{htmlFor:"feature-10",children:"Small"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-111",className:"d-none",type:"checkbox",name:"Room_size",checked:"Big/Average"==g.rooms_size,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{rooms_size:"Big/Average"}))}}),Object(O.jsx)("label",{htmlFor:"feature-111",children:"Big/Average"})]})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Minimum Stay? "}),Object(O.jsxs)("select",{value:g.minimum_stay,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{minimum_stay:e.target.value}))},class:"form-control  bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-None-"}),Object(O.jsx)("option",{value:"1-month",children:"1 Month"}),Object(O.jsx)("option",{value:"2-months",children:"2 Months"}),Object(O.jsx)("option",{value:"3-months",children:"3 Months"}),Object(O.jsx)("option",{value:"4-months",children:"4 Month"}),Object(O.jsx)("option",{value:"5-months",children:"5 Month"}),Object(O.jsx)("option",{value:"6-months",children:"6 Months"}),Object(O.jsx)("option",{value:"7-months",children:"7 Months"}),Object(O.jsx)("option",{value:"8-months",children:"8 Months"}),Object(O.jsx)("option",{value:"9-months",children:"9 Months"}),Object(O.jsx)("option",{value:"10-months",children:"10 Months"}),Object(O.jsx)("option",{value:"11-months",children:"11 Months"}),Object(O.jsx)("option",{value:"1 Year",children:"1 Year"}),Object(O.jsx)("option",{value:"2 Years",children:"2 Years"}),Object(O.jsx)("option",{value:"3 Years",children:"3 Years"}),Object(O.jsx)("option",{value:"4 Years & above",children:"4 Years & above"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsxs)("label",{children:["Broker (Agent) Fee? ",Object(O.jsx)("sup",{children:"*"})]}),Object(O.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-131",className:"d-none",type:"checkbox",name:"Agent_fee",checked:"Yes"==g.broker_agent_fee,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{broker_agent_fee:"Yes"}))}}),Object(O.jsx)("label",{htmlFor:"feature-131",children:"Yes"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-141",className:"d-none",type:"checkbox",name:"Agent_fee",checked:"No"==g.broker_agent_fee,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{broker_agent_fee:"No"}))}}),Object(O.jsx)("label",{htmlFor:"feature-141",children:"No"})]})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Maximum Stay? "}),Object(O.jsxs)("select",{value:g.maximum_stay,onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{maximum_stay:e.target.value}))},class:"form-control  bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-None-"}),Object(O.jsx)("option",{value:"1-month",children:"1 Month"}),Object(O.jsx)("option",{value:"2-months",children:"2 Months"}),Object(O.jsx)("option",{value:"3-months",children:"3 Months"}),Object(O.jsx)("option",{value:"4-months",children:"4 Month"}),Object(O.jsx)("option",{value:"5-months",children:"5 Month"}),Object(O.jsx)("option",{value:"6-months",children:"6 Months"}),Object(O.jsx)("option",{value:"7-months",children:"7 Months"}),Object(O.jsx)("option",{value:"8-months",children:"8 Months"}),Object(O.jsx)("option",{value:"9-months",children:"9 Months"}),Object(O.jsx)("option",{value:"10-months",children:"10 Months"}),Object(O.jsx)("option",{value:"11-months",children:"11 Months"}),Object(O.jsx)("option",{value:"1 Year",children:"1 Year"}),Object(O.jsx)("option",{value:"2 Years",children:"2 Years"}),Object(O.jsx)("option",{value:"3 Years",children:"3 Years"}),Object(O.jsx)("option",{value:"4 Years & above",children:"4 Years & above"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-12",children:[Object(O.jsxs)("label",{children:["Amemities ",Object(O.jsx)("small",{children:"(check all that applies)"})]}),Object(O.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-1202",className:"d-none",type:"checkbox",onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{amenities_swim:!g.amenities_swim}))},checked:!0===g.amenities_swim}),Object(O.jsx)("label",{htmlFor:"feature-1202",children:"Swimmming Pool"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-1121",className:"d-none",type:"checkbox",onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{amenities_internet:!g.amenities_internet}))},checked:!0===g.amenities_internet}),Object(O.jsx)("label",{htmlFor:"feature-1121",children:"Internet"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-144",className:"d-none",type:"checkbox",onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{amenities_play_ground:!g.amenities_play_ground}))},checked:!0===g.amenities_play_ground}),Object(O.jsx)("label",{htmlFor:"feature-144",children:"Play Ground"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-15",className:"d-none",type:"checkbox",onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{amenities_parking_space:!g.amenities_parking_space}))},checked:!0===g.amenities_parking_space}),Object(O.jsx)("label",{htmlFor:"feature-15",children:"Parking Space/Garaage"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-16",className:"d-none",type:"checkbox",onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{amenities_entry_disabled:!g.amenities_entry_disabled}))},checked:!0===g.amenities_entry_disabled}),Object(O.jsx)("label",{htmlFor:"feature-16",children:"Easy entry for Disabled"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-17",className:"d-none",type:"checkbox",onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{amenities_balcony:!g.amenities_balcony}))},checked:!0===g.amenities_balcony}),Object(O.jsx)("label",{htmlFor:"feature-17",children:"Balcony"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-172",className:"d-none",type:"checkbox",onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{amenities_private_toilets:!g.amenities_private_toilets}))},checked:!0===g.amenities_private_toilets}),Object(O.jsx)("label",{htmlFor:"feature-172",children:"Private Toilet/bethroms"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-18",className:"d-none",type:"checkbox",onChange:function(e){return _(Object(r.a)(Object(r.a)({},g),{},{amenities_others:!g.amenities_others}))},checked:!0===g.amenities_others}),Object(O.jsx)("label",{htmlFor:"feature-18",children:"Others"})]})]})]}),Object(O.jsxs)("div",{className:"col-lg-12",children:[Object(O.jsx)("button",{onClick:function(){return e.goBack()},className:"btn btn-primary",children:"Back"}),Object(O.jsx)("button",{onClick:N,className:"btn btn-primary float-right",children:"Next"})]})]})]})})})})]})})})]}),Object(O.jsx)(d.a,{})]})}},35:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return c.a})),n.d(t,"createSvgIcon",(function(){return a.a})),n.d(t,"debounce",(function(){return o})),n.d(t,"deprecatedPropType",(function(){return s.a})),n.d(t,"isMuiElement",(function(){return l})),n.d(t,"ownerDocument",(function(){return u.a})),n.d(t,"ownerWindow",(function(){return d})),n.d(t,"requirePropFactory",(function(){return j})),n.d(t,"setRef",(function(){return b.a})),n.d(t,"unsupportedProp",(function(){return h})),n.d(t,"useControlled",(function(){return m})),n.d(t,"useEventCallback",(function(){return p.a})),n.d(t,"useForkRef",(function(){return f.a})),n.d(t,"unstable_useId",(function(){return O})),n.d(t,"useIsFocusVisible",(function(){return x.a}));var r=n(24),c=n(48),a=n(164);function o(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];var o=this,s=function(){e.apply(o,c)};clearTimeout(t),t=setTimeout(s,n)}return r.clear=function(){clearTimeout(t)},r}var s=n(96),i=n(1);function l(e,t){return i.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}var u=n(42);function d(e){return Object(u.a)(e).defaultView||window}function j(e){return function(){return null}}var b=n(47);function h(e,t,n,r,c){return null}function m(e){var t=e.controlled,n=e.default,r=(e.name,e.state,i.useRef(void 0!==t).current),c=i.useState(n),a=c[0],o=c[1];return[r?t:a,i.useCallback((function(e){r||o(e)}),[])]}var p=n(21),f=n(26);function O(e){var t=i.useState(e),n=t[0],r=t[1],c=e||n;return i.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),c}var x=n(57)},96:function(e,t,n){"use strict";function r(e,t){return function(){return null}}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=21.d09685b2.chunk.js.map