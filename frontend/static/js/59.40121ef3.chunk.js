(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[59],{304:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n(18),a=n.n(r),o=n(27),l=n(26),s=n(1),i=n.n(s),u=n(55),j=n(5),d=n(14),b=n(43),m=n(56),h=n(0);t.default=function(){var e=Object(j.f)(),t=Object(d.b)(),n=Object(d.c)((function(e){return e.CountryReducer.country})),r=i.a.useState([]),s=Object(l.a)(r,2),p=s[0],O=s[1],x=i.a.useState({no_rooms:"",no_toilets:"",Building_type:"",rent:"",currency:"KE"==n?"KES":"US"==n?"$":"NG"==n?"NGN":"IE"==n?"\u20ac":"GB"==n?"\xa3":"GH"==n?"\u20b5":"ZA"==n?"ZAR":"",rent_method:"",no_occupants:"",email:"",i_am:"",post_code:""}),g=Object(l.a)(x,2),f=g[0],v=g[1],y=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n,c,r,o,l,s,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.no_rooms,n=f.no_toilets,c=f.no_occupants,r=f.Building_type,o=f.rent,l=f.rent_method,s=f.email,i=f.post_code,u=new Array,t||u.push("You did not provide the number of rooms"),n||u.push("You did not provide the number of Toilets/bathrooms"),c||u.push("You did not provide the number of occupants"),r||u.push("You did not provide the Building types"),o||u.push("You did not provide the Rent"),l||u.push("You did not provide the rent method"),s||u.push("You did not provide your email"),i||u.push("You did not provide your post code"),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var n=Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y().then((function(n){n.length>0?(O(n),window.scrollTo(0,150)):(e.push("/process-rooms-advert2"),t(Object(b.f)(f)))}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)(u.a,{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(h.jsx)("div",{className:"poststep pricing my-80",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row justify-content-center",children:[Object(h.jsx)("div",{className:"col-lg-12 wow animated slideInUp ",children:Object(h.jsxs)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:[Object(h.jsx)("h2",{className:"title mb-20 color-primary",children:"Advertise your room"}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-lg-7 text-left",children:p.length>0?p.map((function(e){return Object(h.jsx)("p",{className:"error-card alert-danger",children:e})})):null})})]})}),Object(h.jsx)("div",{className:"col-lg-8 myform",children:Object(h.jsx)("div",{className:"submit-property bg-light",children:Object(h.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(h.jsxs)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:[Object(h.jsx)("div",{className:"text-left",children:Object(h.jsx)("h5",{className:"color-primary",children:"About the Room"})}),Object(h.jsx)("div",{className:"text-right",children:Object(h.jsx)("p",{children:"1 of 4"})}),Object(h.jsx)("div",{style:{height:"30px"}}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsx)("label",{children:"Number Of Available Rooms"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"number",name:"property-id",value:f.no_rooms,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{no_rooms:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsx)("label",{children:"Building Type"}),Object(h.jsxs)("select",{value:f.Building_type,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{Building_type:e.target.value}))},class:"form-control",children:[Object(h.jsx)("option",{value:"",children:"Select Building Type"}),Object(h.jsx)("option",{value:"Apartment",children:"Apartment"}),Object(h.jsx)("option",{value:"House",children:"House"}),Object(h.jsx)("option",{value:"High Rise",children:"HighRise"}),Object(h.jsx)("option",{value:"Duplex",children:"Duplex"}),Object(h.jsx)("option",{value:"Bungalow",children:"Bungalow"})]})]}),Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsxs)("label",{children:["Rent (",f.currency,") "]}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"number",name:"size-prefix",value:f.rent,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{rent:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsx)("label",{children:"Rent Method:"}),Object(h.jsxs)("select",{value:f.rent_method,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{rent_method:e.target.value}))},class:"form-control",children:[Object(h.jsx)("option",{value:"",children:"Select Rent Method"}),Object(h.jsx)("option",{value:"Per Week",children:"Per Week"}),Object(h.jsx)("option",{value:"Per Anum",children:"Per Anum"}),Object(h.jsx)("option",{value:"Per Month",children:"Per Month"})]})]}),Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsx)("label",{children:"Number Of Present Occupant"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"number",name:"land-area",value:f.no_occupants,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{no_occupants:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsx)("label",{children:"Number Of Toilets/Bathrooms"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"number",name:"land-area",value:f.no_toilets_,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{no_toilets:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsx)("label",{children:"My Email (Kept Confidential)"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"text",name:"land-area",value:f.email,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{email:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group col-lg-4",children:[Object(h.jsx)("label",{children:"Zip/Post Code"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"text",name:"land-area-postfix",value:f.post_code,onChange:function(e){return v(Object(c.a)(Object(c.a)({},f),{},{post_code:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group col-lg-12",children:[Object(h.jsx)("label",{children:"I am"}),Object(h.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("input",{id:"feature-landlord",className:"d-none",type:"checkbox",checked:"Landlord"===f.i_am,onChange:function(){return v(Object(c.a)(Object(c.a)({},f),{},{i_am:"Landlord"}))}}),Object(h.jsx)("label",{htmlFor:"feature-landlord",children:"Landlord"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("input",{id:"feature-landlord2",className:"d-none",type:"checkbox",checked:"Live Out Landlord"===f.i_am,onChange:function(){return v(Object(c.a)(Object(c.a)({},f),{},{i_am:"Live Out Landlord"}))}}),Object(h.jsx)("label",{htmlFor:"feature-landlord2",children:"Live Out Landlord"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("input",{id:"feature-15",className:"d-none",type:"checkbox",checked:"Current Tennant"===f.i_am,onChange:function(){return v(Object(c.a)(Object(c.a)({},f),{},{i_am:"Current Tennant"}))}}),Object(h.jsx)("label",{htmlFor:"feature-15",children:"Current Tennant"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("input",{id:"feature-16",className:"d-none",type:"checkbox",checked:"Real Estate Agent"===f.i_am,onChange:function(){return v(Object(c.a)(Object(c.a)({},f),{},{i_am:"Real Estate Agent"}))}}),Object(h.jsx)("label",{htmlFor:"feature-16",children:"Real Estate Agent"})]})]})]}),Object(h.jsx)("div",{className:"col-lg-12",children:Object(h.jsx)("button",{onClick:N,className:"btn btn-primary float-right",children:"Next"})})]})]})})})})]})})})]}),Object(h.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=59.40121ef3.chunk.js.map