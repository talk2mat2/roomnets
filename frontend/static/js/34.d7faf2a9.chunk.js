(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[34],{187:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n(26),a=n.n(r),o=n(33),l=n(24),s=n(1),i=n.n(s),u=n(50),d=n(4),j=n(19),b=n(41),m=n(0);t.default=function(){var e=Object(d.f)(),t=Object(j.b)(),n=Object(j.c)((function(e){return e.CountryReducer.country})),r=i.a.useState([]),s=Object(l.a)(r,2),h=s[0],p=s[1],O=i.a.useState({no_rooms:"",no_toilets:"",Building_type:"",rent:"",currency:"KE"==n?"KES":"US"==n?"$":"NG"==n?"NGN":"IE"==n?"\u20ac":"GB"==n?"\xa3":"GH"==n?"\u20b5":"ZA"==n?"ZAR":"",rent_method:"",no_occupants:"",email:"",i_am:"",post_code:""}),x=Object(l.a)(O,2),g=x[0],f=x[1],v=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n,c,r,o,l,s,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.no_rooms,n=g.no_toilets,c=g.no_occupants,r=g.Building_type,o=g.rent,l=g.rent_method,s=g.email,i=g.post_code,u=new Array,t||u.push("You did not provide the number of rooms"),n||u.push("You did not provide the number of Toilets/bathrooms"),c||u.push("You did not provide the number of occupants"),r||u.push("You did not provide the Building types"),o||u.push("You did not provide the Rent"),l||u.push("You did not provide the rent method"),s||u.push("You did not provide your email"),i||u.push("You did not provide your post code"),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var n=Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v().then((function(n){n.length>0?(p(n),window.scrollTo(0,150)):(e.push("/process-rooms-advert2"),t(Object(b.e)(g)))}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)(u.a,{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(m.jsx)("div",{className:"poststep pricing my-80",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row justify-content-center",children:[Object(m.jsx)("div",{className:"col-lg-12 wow animated slideInUp ",children:Object(m.jsxs)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:[Object(m.jsx)("h2",{className:"title mb-20 color-primary",children:"Advertise your room"}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-lg-7 text-left",children:h.length>0?h.map((function(e){return Object(m.jsx)("p",{className:"error-card alert-danger",children:e})})):null})})]})}),Object(m.jsx)("div",{className:"col-lg-8 myform",children:Object(m.jsx)("div",{className:"submit-property bg-light",children:Object(m.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(m.jsxs)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:[Object(m.jsx)("div",{className:"text-left",children:Object(m.jsx)("h5",{className:"color-primary",children:"About the Room"})}),Object(m.jsx)("div",{className:"text-right",children:Object(m.jsx)("p",{children:"1 of 4"})}),Object(m.jsx)("div",{style:{height:"30px"}}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Number Of Available Rooms"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"number",name:"property-id",value:g.no_rooms,onChange:function(e){return f(Object(c.a)(Object(c.a)({},g),{},{no_rooms:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Building Type"}),Object(m.jsxs)("select",{value:g.Building_type,onChange:function(e){return f(Object(c.a)(Object(c.a)({},g),{},{Building_type:e.target.value}))},class:"form-control",children:[Object(m.jsx)("option",{value:"",children:"Select Building Type"}),Object(m.jsx)("option",{value:"Apartment",children:"Apartment"}),Object(m.jsx)("option",{value:"House",children:"House"}),Object(m.jsx)("option",{value:"High Rise",children:"HighRise"}),Object(m.jsx)("option",{value:"Duplex",children:"Duplex"}),Object(m.jsx)("option",{value:"Bungalow",children:"Bungalow"})]})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsxs)("label",{children:["Rent (",g.currency,") "]}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"number",name:"size-prefix",value:g.rent,onChange:function(e){return f(Object(c.a)(Object(c.a)({},g),{},{rent:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Rent Method:"}),Object(m.jsxs)("select",{value:g.rent_method,onChange:function(e){return f(Object(c.a)(Object(c.a)({},g),{},{rent_method:e.target.value}))},class:"form-control",children:[Object(m.jsx)("option",{value:"",children:"Select Rent Method"}),Object(m.jsx)("option",{value:"Per Week",children:"Per Week"}),Object(m.jsx)("option",{value:"Per Anum",children:"Per Anum"}),Object(m.jsx)("option",{value:"Per Month",children:"Per Month"})]})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Number Of Present Occupant"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"number",name:"land-area",value:g.no_occupants,onChange:function(e){return f(Object(c.a)(Object(c.a)({},g),{},{no_occupants:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Number Of Toilets/Bathrooms"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"number",name:"land-area",value:g.no_toilets_,onChange:function(e){return f(Object(c.a)(Object(c.a)({},g),{},{no_toilets:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"My Email (Kept Confidential)"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"text",name:"land-area",value:g.email,onChange:function(e){return f(Object(c.a)(Object(c.a)({},g),{},{email:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-4",children:[Object(m.jsx)("label",{children:"Zip/Post Code"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"text",name:"land-area-postfix",value:g.post_code,onChange:function(e){return f(Object(c.a)(Object(c.a)({},g),{},{post_code:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-12",children:[Object(m.jsx)("label",{children:"I am"}),Object(m.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-landlord",className:"d-none",type:"checkbox",checked:"Landlord"===g.i_am,onChange:function(){return f(Object(c.a)(Object(c.a)({},g),{},{i_am:"Landlord"}))}}),Object(m.jsx)("label",{htmlFor:"feature-landlord",children:"Landlord"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-landlord2",className:"d-none",type:"checkbox",checked:"Live Out Landlord"===g.i_am,onChange:function(){return f(Object(c.a)(Object(c.a)({},g),{},{i_am:"Live Out Landlord"}))}}),Object(m.jsx)("label",{htmlFor:"feature-landlord2",children:"Live Out Landlord"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-15",className:"d-none",type:"checkbox",checked:"Current Tennant"===g.i_am,onChange:function(){return f(Object(c.a)(Object(c.a)({},g),{},{i_am:"Current Tennant"}))}}),Object(m.jsx)("label",{htmlFor:"feature-15",children:"Current Tennant"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-16",className:"d-none",type:"checkbox",checked:"Real Estate Agent"===g.i_am,onChange:function(){return f(Object(c.a)(Object(c.a)({},g),{},{i_am:"Real Estate Agent"}))}}),Object(m.jsx)("label",{htmlFor:"feature-16",children:"Real Estate Agent"})]})]})]}),Object(m.jsx)("div",{className:"col-lg-12",children:Object(m.jsx)("button",{onClick:y,className:"btn btn-primary float-right",children:"Next"})})]})]})})})})]})})})]})]})}}}]);
//# sourceMappingURL=34.d7faf2a9.chunk.js.map