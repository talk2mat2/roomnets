(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[26],{216:function(e,t,r){"use strict";t.decode=t.parse=r(217),t.encode=t.stringify=r(218)},217:function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,s){t=t||"&",r=r||"=";var a={};if("string"!==typeof e||0===e.length)return a;var o=/\+/g;e=e.split(t);var i=1e3;s&&"number"===typeof s.maxKeys&&(i=s.maxKeys);var l=e.length;i>0&&l>i&&(l=i);for(var u=0;u<l;++u){var j,b,d,p,m=e[u].replace(o,"%20"),h=m.indexOf(r);h>=0?(j=m.substr(0,h),b=m.substr(h+1)):(j=m,b=""),d=decodeURIComponent(j),p=decodeURIComponent(b),n(a,d)?c(a[d])?a[d].push(p):a[d]=[a[d],p]:a[d]=p}return a};var c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},218:function(e,t,r){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,o){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"===typeof e?s(a(e),(function(a){var o=encodeURIComponent(n(a))+r;return c(e[a])?s(e[a],(function(e){return o+encodeURIComponent(n(e))})).join(t):o+encodeURIComponent(n(e[a]))})).join(t):o?encodeURIComponent(n(o))+r+encodeURIComponent(n(e)):""};var c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function s(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var a=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},323:function(e,t,r){"use strict";r.r(t);r(13),r(25);var n=r(23),c=r(1),s=r.n(c),a=r(5),o=r(15),i=r(55),l=(r(28),r(56)),u=r(216),j=r.n(u),b=r(0);t.default=function(e){var t=s.a.useState([]),r=Object(n.a)(t,2),c=r[0],u=(r[1],Object(o.c)((function(e){return e.user.currentUser}))),d=s.a.useState(!1),p=Object(n.a)(d,2),m=(p[0],p[1],Object(a.f)()),h=(Object(o.b)(),m.location.state),f=(j.a.parse(m.location.search),u&&u.token,s.a.useState({firstName:"",message:"",lastName:"",company:"",mobileNumber:"",subject:"",email:""})),O=Object(n.a)(f,2);O[0],O[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{}),Object(b.jsx)("div",{className:"topPatch",style:{height:"120px"}}),Object(b.jsx)("section",{className:"booking-form bg-gray ",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-lg-12",children:Object(b.jsx)("div",{style:{minHeight:"450px"},className:"bg-white px-30 py-40 shadow w-75 mx-auto",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{className:"color-secondary line-bottom pb-15 mb-20 wow slideInDown animated",children:["Re: ",h.title]}),Object(b.jsxs)("h6",{className:"color-secondary pb-1 mb-20 wow slideInDown animated",children:["to: ",h.receiver.firstName]}),Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsxs)("div",{className:"col-lg-7 text-left",children:[c.length>0?c.map((function(e){return Object(b.jsx)("p",{className:"error-card alert-danger",children:e})})):null,Object(b.jsx)("div",{style:{height:"10px"}})]})}),Object(b.jsx)("div",{style:{minHeight:"200px"},className:"col-lg-10 mb-20",children:Object(b.jsx)("p",{children:h.body})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-lg-12"})})]})})})})})}),Object(b.jsx)(l.a,{})]})}}}]);
//# sourceMappingURL=26.31f1d364.chunk.js.map