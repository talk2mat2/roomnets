(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[21],{176:function(e,t,r){"use strict";var n=r(177),c=r(45);function s(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function i(e){return Array.isArray(e)?e.sort():"object"===typeof e?i(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=c({arrayFormat:"none"},t)),n=Object.create(null);return"string"!==typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),c=t.shift(),s=t.length>0?t.join("="):void 0;s=void 0===s?null:decodeURIComponent(s),r(decodeURIComponent(c),s,n)})),Object.keys(n).sort().reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=i(r):e[t]=r,e}),Object.create(null))):n},t.stringify=function(e,t){var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[s(t,e),"[",n,"]"].join(""):[s(t,e),"[",s(n,e),"]=",s(r,e)].join("")};case"bracket":return function(t,r){return null===r?s(t,e):[s(t,e),"[]=",s(r,e)].join("")};default:return function(t,r){return null===r?s(t,e):[s(t,e),"=",s(r,e)].join("")}}}(t=c({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var c=e[n];if(void 0===c)return"";if(null===c)return s(n,t);if(Array.isArray(c)){var i=[];return c.slice().forEach((function(e){void 0!==e&&i.push(r(n,e,i.length))})),i.join("&")}return s(n,t)+"="+s(c,t)})).filter((function(e){return e.length>0})).join("&"):""}},177:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},207:function(e,t,r){"use strict";r.r(t);r(1);var n=r(50),c=r(52),s=r(9),i=r(176),o=r.n(i),a=r(0);t.default=function(e){var t=e.location.search,r=o.a.parse(t).city||"";return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(n.a,{}),Object(a.jsx)("div",{className:"topPatch",style:{height:"120px"}}),Object(a.jsx)("div",{className:"row justify-content-center mt-40 mb-3 ",children:Object(a.jsxs)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column"},className:" text-center ",children:[Object(a.jsx)("div",{className:"col-lg-7 col-8 mb-1",children:Object(a.jsx)("img",{className:"nav-logo",src:"/images/logo/logo2.png",alt:"logo"})}),Object(a.jsx)("h5",{children:"Let's Find you a roommate or room to rent"})]})}),Object(a.jsx)("div",{className:" home-slider mt-2 ",children:Object(a.jsxs)("div",{className:"col-12 slider-row ",children:[Object(a.jsx)("div",{className:"overLaySlider",children:Object(a.jsx)("div",{className:"col-lg-12  d-flex flex-column align-items-center ",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-lg-7 ",children:[Object(a.jsxs)("h2",{className:"slider-title",children:["Hi, ",r]}),Object(a.jsx)("p",{className:"slider-title-sub",children:"Helping you to find the perfect room/roommates and apartments"})]}),Object(a.jsx)("div",{className:"col-lg-4",children:Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body pt-4 pb-3 text-left p-3",children:[Object(a.jsx)("h5",{className:"my-3  line-bottom ",children:"I'm Interested in :"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/postadd",children:"Post Add"})}),Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:{pathname:"/Browse-rooms-list-rooms",state:r},children:"Find Rooms"})}),Object(a.jsxs)("li",{children:[Object(a.jsx)(s.b,{to:{pathname:"/Browse-rooms-list-apart",state:r},children:"Find Apartments"})," "]})]})]})})})]})})}),Object(a.jsx)("img",{src:"/images/cities/map.jpg",className:"weathimg",alt:""})]})}),Object(a.jsx)("section",{className:"mb-40 border-top-1-gray",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-lg-12 wow slideInDown animated"})})})}),Object(a.jsx)(c.a,{})]})}}}]);
//# sourceMappingURL=21.52bd7022.chunk.js.map