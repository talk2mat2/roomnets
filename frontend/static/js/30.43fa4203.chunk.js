(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[30],{185:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n(40),a=n.n(r),l=n(46),o=n(8),s=n(23),i=n(1),d=n.n(i),j=n(44),u=n(4),b=n(24),h=n(47),m=n(0);t.default=function(){var e,t=Object(u.f)(),n=d.a.useState([]),r=Object(s.a)(n,2),i=r[0],p=r[1],O=Object(b.b)(),x=d.a.useState((e={no_rooms:"",Building_type:"",rent:"",rent_method:"",email:""},Object(o.a)(e,"email",""),Object(o.a)(e,"i_am",""),Object(o.a)(e,"post_code",""),e)),g=Object(s.a)(x,2),f=g[0],v=g[1],y=function(){var e=Object(l.a)(a.a.mark((function e(){var t,n,c,r,l,o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.no_rooms,n=f.Building_type,c=f.rent,r=f.rent_method,l=f.email,o=f.post_code,s=new Array,t||s.push("You did not provide the number of rooms"),l||s.push("You did not provide your email"),n||s.push("You did not provide the Building types"),c||s.push("You did not provide the Rent"),r||s.push("You did not provide the rent method"),o||s.push("You did not provide your post code"),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y().then((function(e){e.length>0?(p(e),window.scrollTo(0,150)):(t.push({pathname:"/process-apart-advert2"}),O(Object(h.c)(f)))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)(j.a,{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(m.jsx)("div",{className:"poststep pricing my-80",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row justify-content-center",children:[Object(m.jsx)("div",{className:"col-lg-12 wow animated slideInUp",children:Object(m.jsxs)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:[Object(m.jsx)("h2",{className:"title mb-20 color-primary",children:"Advertise your House/Apartment for rent"}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-lg-7 text-left",children:i.length>0?i.map((function(e){return Object(m.jsx)("p",{className:"error-card alert-danger",children:e})})):null})})]})}),Object(m.jsx)("div",{className:"col-lg-8 myform",children:Object(m.jsx)("div",{className:"submit-property bg-light",children:Object(m.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(m.jsx)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Number Of Available Rooms"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"number",name:"property-id",value:f.no_rooms,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{no_rooms:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Building Type"}),Object(m.jsxs)("select",{value:f.Building_type,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{Building_type:e.target.value}))},class:"form-control",children:[Object(m.jsx)("option",{value:"",children:"Select Building Type"}),Object(m.jsx)("option",{value:"Apartment",children:"Apartment"}),Object(m.jsx)("option",{value:"House",children:"House"}),Object(m.jsx)("option",{value:"High Rise",children:"HighRise"}),Object(m.jsx)("option",{value:"Duplex",children:"Duplex"}),Object(m.jsx)("option",{value:"Bungalow",children:"Bungalow"})]})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Rent ($) "}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"number",name:"size-prefix",value:f.rent,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{rent:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Rent Method:"}),Object(m.jsxs)("select",{value:f.rent_method,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{rent_method:e.target.value}))},class:"form-control",children:[Object(m.jsx)("option",{value:"",children:"Select Rent Method"}),Object(m.jsx)("option",{value:"Per Week",children:"Per Week"}),Object(m.jsx)("option",{value:"Per Anum",children:"Per Anum"}),Object(m.jsx)("option",{value:"Per Month",children:"Per Month"})]})]}),Object(m.jsxs)("div",{className:"form-group col-lg-4",children:[Object(m.jsx)("label",{children:"Zip/Post Code"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"text",name:"land-area-postfix",value:f.post_code,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{post_code:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Your email"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"text",name:"property-id",value:f.email,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{email:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-12",children:[Object(m.jsx)("label",{children:"I am"}),Object(m.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-landlord",className:"d-none",type:"checkbox",checked:"Landlord"===f.i_am,onChange:function(){return v(Object(c.a)(Object(c.a)({},f),{},{i_am:"Landlord"}))}}),Object(m.jsx)("label",{htmlFor:"feature-landlord",children:"Landlord"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-landlord2",className:"d-none",type:"checkbox",checked:"Live Out Landlord"===f.i_am,onChange:function(){return v(Object(c.a)(Object(c.a)({},f),{},{i_am:"Live Out Landlord"}))}}),Object(m.jsx)("label",{htmlFor:"feature-landlord2",children:"Live Out Landlord"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-15",className:"d-none",type:"checkbox",checked:"Current Tennant"===f.i_am,onChange:function(){return v(Object(c.a)(Object(c.a)({},f),{},{i_am:"Current Tennant"}))}}),Object(m.jsx)("label",{htmlFor:"feature-15",children:"Current Tennant"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-16",className:"d-none",type:"checkbox",checked:"Real Estate Agent"===f.i_am,onChange:function(){return v(Object(c.a)(Object(c.a)({},f),{},{i_am:"Real Estate Agent"}))}}),Object(m.jsx)("label",{htmlFor:"feature-16",children:"Real Estate Agent"})]})]})]}),Object(m.jsx)("div",{className:"col-lg-12",children:Object(m.jsx)("button",{onClick:N,className:"btn btn-primary float-right",children:"Next"})})]})})})})})]})})})]})]})}}}]);
//# sourceMappingURL=30.43fa4203.chunk.js.map