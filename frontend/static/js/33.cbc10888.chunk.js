(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[33],{175:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n(40),r=n.n(a),o=n(46),l=n(23),s=n(1),i=n.n(s),u=n(44),d=n(4),j=n(24),b=n(47),m=n(0);t.default=function(){var e=Object(d.f)(),t=Object(j.b)(),n=i.a.useState([]),a=Object(l.a)(n,2),s=a[0],h=a[1],p=i.a.useState({no_rooms:"",no_toilets:"",Building_type:"",rent:"",rent_method:"",no_occupants:"",email:"",i_am:"",post_code:""}),O=Object(l.a)(p,2),x=O[0],g=O[1],f=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,c,a,o,l,s,i,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.no_rooms,n=x.no_toilets,c=x.no_occupants,a=x.Building_type,o=x.rent,l=x.rent_method,s=x.email,i=x.post_code,u=new Array,t||u.push("You did not provide the number of rooms"),n||u.push("You did not provide the number of Toilets/bathrooms"),c||u.push("You did not provide the number of occupants"),a||u.push("You did not provide the Building types"),o||u.push("You did not provide the Rent"),l||u.push("You did not provide the rent method"),s||u.push("You did not provide your email"),i||u.push("You did not provide your post code"),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var n=Object(o.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f().then((function(n){n.length>0?(h(n),window.scrollTo(0,150)):(e.push("/process-rooms-advert2"),t(Object(b.d)(x)))}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)(u.a,{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(m.jsx)("div",{className:"poststep pricing my-80",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row justify-content-center",children:[Object(m.jsx)("div",{className:"col-lg-12 wow animated slideInUp ",children:Object(m.jsxs)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:[Object(m.jsx)("h2",{className:"title mb-20 color-primary",children:"Advertise your room"}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-lg-7 text-left",children:s.length>0?s.map((function(e){return Object(m.jsx)("p",{className:"error-card alert-danger",children:e})})):null})})]})}),Object(m.jsx)("div",{className:"col-lg-8 myform",children:Object(m.jsx)("div",{className:"submit-property bg-light",children:Object(m.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(m.jsx)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Number Of Available Rooms"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"number",name:"property-id",value:x.no_rooms,onChange:function(e){return g(Object(c.a)(Object(c.a)({},x),{},{no_rooms:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Building Type"}),Object(m.jsxs)("select",{value:x.Building_type,onChange:function(e){return g(Object(c.a)(Object(c.a)({},x),{},{Building_type:e.target.value}))},class:"form-control",children:[Object(m.jsx)("option",{value:"",children:"Select Building Type"}),Object(m.jsx)("option",{value:"Apartment",children:"Apartment"}),Object(m.jsx)("option",{value:"House",children:"House"}),Object(m.jsx)("option",{value:"High Rise",children:"HighRise"}),Object(m.jsx)("option",{value:"Duplex",children:"Duplex"}),Object(m.jsx)("option",{value:"Bungalow",children:"Bungalow"})]})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Rent ($) "}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"number",name:"size-prefix",value:x.rent,onChange:function(e){return g(Object(c.a)(Object(c.a)({},x),{},{rent:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Rent Method:"}),Object(m.jsxs)("select",{value:x.rent_method,onChange:function(e){return g(Object(c.a)(Object(c.a)({},x),{},{rent_method:e.target.value}))},class:"form-control",children:[Object(m.jsx)("option",{value:"",children:"Select Rent Method"}),Object(m.jsx)("option",{value:"Per Week",children:"Per Week"}),Object(m.jsx)("option",{value:"Per Anum",children:"Per Anum"}),Object(m.jsx)("option",{value:"Per Month",children:"Per Month"})]})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Number Of Present Occupant"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"number",name:"land-area",value:x.no_occupants,onChange:function(e){return g(Object(c.a)(Object(c.a)({},x),{},{no_occupants:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"Number Of Toilets/Bathrooms"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"number",name:"land-area",value:x.no_toilets_,onChange:function(e){return g(Object(c.a)(Object(c.a)({},x),{},{no_toilets:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-6",children:[Object(m.jsx)("label",{children:"My Email (Kept Confidential)"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"text",name:"land-area",value:x.email,onChange:function(e){return g(Object(c.a)(Object(c.a)({},x),{},{email:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-4",children:[Object(m.jsx)("label",{children:"Zip/Post Code"}),Object(m.jsx)("input",{className:"form-control bg-gray",type:"text",name:"land-area-postfix",value:x.post_code,onChange:function(e){return g(Object(c.a)(Object(c.a)({},x),{},{post_code:e.target.value}))}})]}),Object(m.jsxs)("div",{className:"form-group col-lg-12",children:[Object(m.jsx)("label",{children:"I am"}),Object(m.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-landlord",className:"d-none",type:"checkbox",checked:"Landlord"===x.i_am,onChange:function(){return g(Object(c.a)(Object(c.a)({},x),{},{i_am:"Landlord"}))}}),Object(m.jsx)("label",{htmlFor:"feature-landlord",children:"Landlord"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-landlord2",className:"d-none",type:"checkbox",checked:"Live Out Landlord"===x.i_am,onChange:function(){return g(Object(c.a)(Object(c.a)({},x),{},{i_am:"Live Out Landlord"}))}}),Object(m.jsx)("label",{htmlFor:"feature-landlord2",children:"Live Out Landlord"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-15",className:"d-none",type:"checkbox",checked:"Current Tennant"===x.i_am,onChange:function(){return g(Object(c.a)(Object(c.a)({},x),{},{i_am:"Current Tennant"}))}}),Object(m.jsx)("label",{htmlFor:"feature-15",children:"Current Tennant"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{id:"feature-16",className:"d-none",type:"checkbox",checked:"Real Estate Agent"===x.i_am,onChange:function(){return g(Object(c.a)(Object(c.a)({},x),{},{i_am:"Real Estate Agent"}))}}),Object(m.jsx)("label",{htmlFor:"feature-16",children:"Real Estate Agent"})]})]})]}),Object(m.jsx)("div",{className:"col-lg-12",children:Object(m.jsx)("button",{onClick:v,className:"btn btn-primary float-right",children:"Next"})})]})})})})})]})})})]})]})}}}]);
//# sourceMappingURL=33.cbc10888.chunk.js.map