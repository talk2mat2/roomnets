(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[47],{329:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c(18),o=c.n(a),l=c(27),r=c(26),s=c(1),i=c.n(s),j=c(55),b=c(5),d=c(14),m=(c(43),c(56)),u=c(28),h=c.n(u),O=c(0);t.default=function(){var e=Object(b.f)(),t=Object(b.g)(),c=i.a.useState([]),a=Object(r.a)(c,2),s=a[0],u=(a[1],Object(d.b)(),i.a.useState(!1)),x=Object(r.a)(u,2),p=x[0],v=x[1],g=i.a.useState(!1),f=Object(r.a)(g,2),_=f[0],N=f[1],y=Object(d.c)((function(e){return e.user.currentUser})),w=y&&y.token,k=(Object(d.c)((function(e){return e.CountryReducer.country})),i.a.useState({new_room_mate:{}})),A=Object(r.a)(k,2),C=A[0],S=A[1],M=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,h.a.get("/api/v1/getPostApartById/".concat(t),{headers:{Authorization:w}}).then((function(e){N(!1),console.log(e.data),S(Object(n.a)(Object(n.a)({},C),e.data.userData))})).catch((function(e){return console.log(e),N(!1),e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var c=Object(l.a)(o.a.mark((function c(n){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return v(!0),c.next=3,h.a.put("/api/v1/UpdatePostApartById",{dataInfo:C,postId:t.post_id},{headers:{Authorization:w}}).then((function(t){v(!1),console.log(t.data),e.replace("/Update_Success")})).catch((function(e){return console.log(e),alert("An error occured"),v(!1),e}));case 3:return c.abrupt("return",c.sent);case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return i.a.useEffect((function(){M(t.post_id)}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(j.a,{}),_?Object(O.jsx)("h4",{children:"Loading..."}):Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(O.jsx)("div",{className:"poststep pricing my-80",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row justify-content-center",children:[Object(O.jsx)("div",{className:"col-lg-12 wow animated slideInUp",children:Object(O.jsxs)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:[Object(O.jsx)("h2",{className:"title mb-20 color-primary",children:"Update your post"}),Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-lg-7 text-left",children:s.length>0?s.map((function(e){return Object(O.jsx)("p",{className:"error-card alert-danger",children:e})})):null})})]})}),Object(O.jsx)("div",{className:"col-lg-8 myform",children:Object(O.jsx)("div",{className:"submit-property bg-light",children:Object(O.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(O.jsx)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Number Of Available Rooms"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"number",name:"property-id",value:C.no_rooms,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{no_rooms:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Building Type"}),Object(O.jsxs)("select",{value:C.Building_type,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{Building_type:e.target.value}))},class:"form-control",children:[Object(O.jsx)("option",{value:"",children:"Select Building Type"}),Object(O.jsx)("option",{value:"Apartment",children:"Apartment"}),Object(O.jsx)("option",{value:"House",children:"House"}),Object(O.jsx)("option",{value:"High Rise",children:"HighRise"}),Object(O.jsx)("option",{value:"Duplex",children:"Duplex"}),Object(O.jsx)("option",{value:"Bungalow",children:"Bungalow"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsxs)("label",{children:["Rent (",C.currency,") "]}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"number",name:"size-prefix",value:C.rent,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{rent:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Rent Method:"}),Object(O.jsxs)("select",{value:C.rent_method,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{rent_method:e.target.value}))},class:"form-control",children:[Object(O.jsx)("option",{value:"",children:"Select Rent Method"}),Object(O.jsx)("option",{value:"Per Week",children:"Per Week"}),Object(O.jsx)("option",{value:"Per Anum",children:"Per Anum"}),Object(O.jsx)("option",{value:"Per Month",children:"Per Month"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-4",children:[Object(O.jsx)("label",{children:"Zip/Post Code"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"text",name:"land-area-postfix",value:C.post_code,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{post_code:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-12",children:[Object(O.jsx)("label",{children:"I am"}),Object(O.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-landlord",className:"d-none",type:"checkbox",checked:"Landlord"===C.i_am,onChange:function(){return S(Object(n.a)(Object(n.a)({},C),{},{i_am:"Landlord"}))}}),Object(O.jsx)("label",{htmlFor:"feature-landlord",children:"Landlord"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-landlord2",className:"d-none",type:"checkbox",checked:"Live Out Landlord"===C.i_am,onChange:function(){return S(Object(n.a)(Object(n.a)({},C),{},{i_am:"Live Out Landlord"}))}}),Object(O.jsx)("label",{htmlFor:"feature-landlord2",children:"Live Out Landlord"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-15",className:"d-none",type:"checkbox",checked:"Current Tennant"===C.i_am,onChange:function(){return S(Object(n.a)(Object(n.a)({},C),{},{i_am:"Current Tennant"}))}}),Object(O.jsx)("label",{htmlFor:"feature-15",children:"Current Tennant"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-16",className:"d-none",type:"checkbox",checked:"Real Estate Agent"===C.i_am,onChange:function(){return S(Object(n.a)(Object(n.a)({},C),{},{i_am:"Real Estate Agent"}))}}),Object(O.jsx)("label",{htmlFor:"feature-16",children:"Real Estate Agent"})]})]})]})]})})})})})]})})}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-lg-8 myform",children:Object(O.jsx)("div",{className:"submit-property bg-light",children:Object(O.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(O.jsx)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"form-group col-lg-6"}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Street Name"}),Object(O.jsx)("input",{type:"text",class:"form-control  bg-gray",value:C.street_name,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{street_name:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Rooms Available from"}),Object(O.jsx)("input",{value:C.rooms_avail_date,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{rooms_avail_date:e.target.value}))},type:"date",class:"form-control  bg-gray"})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Living Room? "}),Object(O.jsxs)("select",{value:C.living_rooms,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{living_rooms:e.target.value}))},class:"form-control",children:[Object(O.jsx)("option",{value:"",children:"-Select-"}),Object(O.jsx)("option",{value:"Yes",children:"Yes"}),Object(O.jsx)("option",{value:"No",children:"No"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsxs)("label",{children:["Furnished Rooms ",Object(O.jsx)("sup",{children:"*"})," ?"," "]}),Object(O.jsxs)("select",{value:C.furnished_rooms,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{furnished_rooms:e.target.value}))},class:"form-control  bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-Select-"}),Object(O.jsx)("option",{value:"Yes",children:"Yes"}),Object(O.jsx)("option",{value:"No",children:"No"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Room Size"}),Object(O.jsxs)("ul",{className:"list-bottoms amenities select-option p-0",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-10",className:"d-none",type:"checkbox",name:"Room_size",checked:"Small"==C.rooms_size,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{rooms_size:"Small"}))}}),Object(O.jsx)("label",{htmlFor:"feature-10",children:"Small"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-111",className:"d-none",type:"checkbox",name:"Room_size",checked:"Big/Average"==C.rooms_size,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{rooms_size:"Big/Average"}))}}),Object(O.jsx)("label",{htmlFor:"feature-111",children:"Big/Average"})]})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Minimum Stay? "}),Object(O.jsxs)("select",{value:C.minimum_stay,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{minimum_stay:e.target.value}))},class:"form-control  bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-None-"}),Object(O.jsx)("option",{value:"1-month",children:"1 Month"}),Object(O.jsx)("option",{value:"2-months",children:"2 Months"}),Object(O.jsx)("option",{value:"3-months",children:"3 Months"}),Object(O.jsx)("option",{value:"4-months",children:"4 Month"}),Object(O.jsx)("option",{value:"5-months",children:"5 Month"}),Object(O.jsx)("option",{value:"6-months",children:"6 Months"}),Object(O.jsx)("option",{value:"7-months",children:"7 Months"}),Object(O.jsx)("option",{value:"8-months",children:"8 Months"}),Object(O.jsx)("option",{value:"9-months",children:"9 Months"}),Object(O.jsx)("option",{value:"10-months",children:"10 Months"}),Object(O.jsx)("option",{value:"11-months",children:"11 Months"}),Object(O.jsx)("option",{value:"1 Year",children:"1 Year"}),Object(O.jsx)("option",{value:"2 Years",children:"2 Years"}),Object(O.jsx)("option",{value:"3 Years",children:"3 Years"}),Object(O.jsx)("option",{value:"4 Years & above",children:"4 Years & above"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsxs)("label",{children:["Broker (Agent) Fee? ",Object(O.jsx)("sup",{children:"*"})]}),Object(O.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-131",className:"d-none",type:"checkbox",name:"Agent_fee",checked:"Yes"==C.broker_agent_fee,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{broker_agent_fee:"Yes"}))}}),Object(O.jsx)("label",{htmlFor:"feature-131",children:"Yes"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-141",className:"d-none",type:"checkbox",name:"Agent_fee",checked:"No"==C.broker_agent_fee,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{broker_agent_fee:"No"}))}}),Object(O.jsx)("label",{htmlFor:"feature-141",children:"No"})]})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Maximum Stay? "}),Object(O.jsxs)("select",{value:C.maximum_stay,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{maximum_stay:e.target.value}))},class:"form-control  bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-None-"}),Object(O.jsx)("option",{value:"1-month",children:"1 Month"}),Object(O.jsx)("option",{value:"2-months",children:"2 Months"}),Object(O.jsx)("option",{value:"3-months",children:"3 Months"}),Object(O.jsx)("option",{value:"4-months",children:"4 Month"}),Object(O.jsx)("option",{value:"5-months",children:"5 Month"}),Object(O.jsx)("option",{value:"6-months",children:"6 Months"}),Object(O.jsx)("option",{value:"7-months",children:"7 Months"}),Object(O.jsx)("option",{value:"8-months",children:"8 Months"}),Object(O.jsx)("option",{value:"9-months",children:"9 Months"}),Object(O.jsx)("option",{value:"10-months",children:"10 Months"}),Object(O.jsx)("option",{value:"11-months",children:"11 Months"}),Object(O.jsx)("option",{value:"1 Year",children:"1 Year"}),Object(O.jsx)("option",{value:"2 Years",children:"2 Years"}),Object(O.jsx)("option",{value:"3 Years",children:"3 Years"}),Object(O.jsx)("option",{value:"4 Years & above",children:"4 Years & above"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-12",children:[Object(O.jsxs)("label",{children:["Amemities ",Object(O.jsx)("small",{children:"(check all that applies)"})]}),Object(O.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-1202",className:"d-none",type:"checkbox",onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{amenities_swim:!C.amenities_swim}))},checked:!0===C.amenities_swim}),Object(O.jsx)("label",{htmlFor:"feature-1202",children:"Swimmming Pool"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-1121",className:"d-none",type:"checkbox",onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{amenities_internet:!C.amenities_internet}))},checked:!0===C.amenities_internet}),Object(O.jsx)("label",{htmlFor:"feature-1121",children:"Internet"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-144",className:"d-none",type:"checkbox",onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{amenities_play_ground:!C.amenities_play_ground}))},checked:!0===C.amenities_play_ground}),Object(O.jsx)("label",{htmlFor:"feature-144",children:"Play Ground"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-15",className:"d-none",type:"checkbox",onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{amenities_parking_space:!C.amenities_parking_space}))},checked:!0===C.amenities_parking_space}),Object(O.jsx)("label",{htmlFor:"feature-15",children:"Parking Space/Garaage"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-16",className:"d-none",type:"checkbox",onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{amenities_entry_disabled:!C.amenities_entry_disabled}))},checked:!0===C.amenities_entry_disabled}),Object(O.jsx)("label",{htmlFor:"feature-16",children:"Easy entry for Disabled"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-17",className:"d-none",type:"checkbox",onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{amenities_balcony:!C.amenities_balcony}))},checked:!0===C.amenities_balcony}),Object(O.jsx)("label",{htmlFor:"feature-17",children:"Balcony"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-172",className:"d-none",type:"checkbox",onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{amenities_private_toilets:!C.amenities_private_toilets}))},checked:!0===C.amenities_private_toilets}),Object(O.jsx)("label",{htmlFor:"feature-172",children:"Private Toilet/bethroms"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-18",className:"d-none",type:"checkbox",onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{amenities_others:!C.amenities_others}))},checked:!0===C.amenities_others}),Object(O.jsx)("label",{htmlFor:"feature-18",children:"Others"})]})]})]})]})})})})})})})}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-lg-8 myform",children:Object(O.jsx)("div",{className:"submit-property bg-light",children:Object(O.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(O.jsxs)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:[Object(O.jsx)("div",{className:"text-left",children:Object(O.jsx)("h5",{className:"color-primary",children:"The rooms"})}),Object(O.jsxs)("div",{className:"row my-40",children:[Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Number Of Toilets/Bathrooms"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"number",name:"land-area",value:C.no_toilets,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{no_toilets:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsxs)("label",{children:["Private Toilets ?",Object(O.jsxs)("span",{style:{fontSize:"12px"},children:[" ","(tick if each room has its own toilet/shower)"]})]}),Object(O.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-13po",className:"d-none",type:"checkbox",name:"Agent_fee",checked:!0===C.amenities_private_toilets,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{amenities_private_toilets:!0}))}}),Object(O.jsx)("label",{htmlFor:"feature-13po",children:"Yes"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-14op",className:"d-none",type:"checkbox",name:"Agent_fee",checked:!1===C.amenities_private_toilets,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{amenities_private_toilets:!1}))}}),Object(O.jsx)("label",{htmlFor:"feature-14op",children:"No"})]})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Number of Kitchens "}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"number",name:"property-id",value:C.no_kitchen,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{no_kitchen:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Room Size"}),Object(O.jsxs)("ul",{className:"list-bottoms amenities select-option p-0",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-10",className:"d-none",type:"checkbox",name:"Room_size",checked:"Small"==C.rooms_size,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{rooms_size:"Small"}))}}),Object(O.jsx)("label",{htmlFor:"feature-10",children:"Small"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-111",className:"d-none",type:"checkbox",name:"Room_size",checked:"Big/Average"==C.rooms_size,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{rooms_size:"Big/Average"}))}}),Object(O.jsx)("label",{htmlFor:"feature-111",children:"Big/Average"})]})]})]})]})]})})})})})})}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-lg-8 myform",children:Object(O.jsx)("div",{className:"submit-property bg-light",children:Object(O.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(O.jsxs)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:[Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)("h4",{className:" color-primary",children:"New Tenants Requirements"})}),Object(O.jsxs)("div",{className:"row my-40",children:[Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Smoker ?"}),Object(O.jsxs)("ul",{className:"list-bottom amenities select-option p-0",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-13op",className:"d-none",type:"checkbox",name:"Agent_fee",checked:"yes"==C.new_room_mate.smoker,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{new_room_mate:Object(n.a)(Object(n.a)({},C.new_room_mate),{},{smoker:"yes"})}))}}),Object(O.jsx)("label",{htmlFor:"feature-13op",children:"Yes"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{id:"feature-14op",className:"d-none",type:"checkbox",name:"Agent_fee",checked:"No"==C.new_room_mate.smoker,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{new_room_mate:Object(n.a)(Object(n.a)({},C.new_room_mate),{},{smoker:"No"})}))}}),Object(O.jsx)("label",{htmlFor:"feature-14op",children:"No"})]})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Occupation? "}),Object(O.jsxs)("select",{value:C.new_room_mate.occupation,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{new_room_mate:Object(n.a)(Object(n.a)({},C.new_room_mate),{},{occupation:e.target.value})}))},class:"form-control bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-Select-"}),Object(O.jsx)("option",{value:"Student",children:"Student"}),Object(O.jsx)("option",{value:"Professional",children:"Professional"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Gender "}),Object(O.jsxs)("select",{value:C.new_room_mate.gender,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{new_room_mate:Object(n.a)(Object(n.a)({},C.new_room_mate),{},{gender:e.target.value})}))},class:"form-control bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-Not Disclosed-"}),Object(O.jsx)("option",{value:"Male",children:"Male"}),Object(O.jsx)("option",{value:"Female",children:"Female"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Pets Allowed ? "}),Object(O.jsxs)("select",{value:C.new_room_mate.pets,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{new_room_mate:Object(n.a)(Object(n.a)({},C.new_room_mate),{},{pets:e.target.value})}))},class:"form-control bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-Select-"}),Object(O.jsx)("option",{value:"Yes",children:"Yes"}),Object(O.jsx)("option",{value:"No",children:"No"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Couples Welcomed ? "}),Object(O.jsxs)("select",{value:C.new_room_mate.couples_welcomed,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{new_room_mate:Object(n.a)(Object(n.a)({},C.new_room_mate),{},{couples_welcomed:e.target.value})}))},class:"form-control bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-Select-"}),Object(O.jsx)("option",{value:"Yes",children:"Yes"}),Object(O.jsx)("option",{value:"No",children:"No"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Mimimum Age ? "}),Object(O.jsxs)("select",{value:C.new_room_mate.minimum_age,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{new_room_mate:Object(n.a)(Object(n.a)({},C.new_room_mate),{},{minimum_age:e.target.value})}))},class:"form-control bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-Select-"}),Object(O.jsx)("option",{value:"Any",children:"Any"}),Object(O.jsx)("option",{value:"10 or Above",children:"10 or Above"}),Object(O.jsx)("option",{value:"20 or Above",children:"20 or Above"}),Object(O.jsx)("option",{value:"30 or Above",children:"30 or Above"}),Object(O.jsx)("option",{value:"40 or Above",children:"40 or Above"}),Object(O.jsx)("option",{value:"50 or Above",children:"50 or Above"}),Object(O.jsx)("option",{value:"60 or Above",children:"60 or Above"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Maximum Age ? "}),Object(O.jsxs)("select",{value:C.new_room_mate.maximum_age,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{new_room_mate:Object(n.a)(Object(n.a)({},C.new_room_mate),{},{maximum_age:e.target.value})}))},class:"form-control bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-Select-"}),Object(O.jsx)("option",{value:"Any",children:"Any"}),Object(O.jsx)("option",{value:"10 Or Below",children:"10 Or Below"}),Object(O.jsx)("option",{value:"20 Or Below",children:"20 Or Below"}),Object(O.jsx)("option",{value:"30 Or Below",children:"30 Or Below"}),Object(O.jsx)("option",{value:"40 Or Below",children:"40 Or Below"}),Object(O.jsx)("option",{value:"50 Or Below",children:"50 Or Below"}),Object(O.jsx)("option",{value:"60 Or Below",children:"60 Or Below"}),Object(O.jsx)("option",{value:"70 Or Below",children:"70 Or Below"}),Object(O.jsx)("option",{value:"100 Or Below",children:"100 Or Below"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Sexual Orientation ? "}),Object(O.jsxs)("select",{value:C.new_room_mate.sexual_orientation,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{new_room_mate:Object(n.a)(Object(n.a)({},C.new_room_mate),{},{sexual_orientation:e.target.value})}))},class:"form-control bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-Not Disclosed-"}),Object(O.jsx)("option",{value:"Straight",children:"Straight"}),Object(O.jsx)("option",{value:"Mixed",children:"Mixed"}),Object(O.jsx)("option",{value:"Gay/Lesbian",children:"Gay/Lesbians"}),Object(O.jsx)("option",{value:"Bi-sexual",children:"Bi-sexual"})]})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Nationality ? "}),Object(O.jsxs)("select",{value:C.new_room_mate.nationality,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{new_room_mate:Object(n.a)(Object(n.a)({},C.new_room_mate),{},{nationality:e.target.value})}))},class:"form-control bg-gray",children:[Object(O.jsx)("option",{value:"",children:"-Not Disclosed-"}),Object(O.jsx)("option",{value:"Nigeria",children:"Nigeria"}),Object(O.jsx)("option",{value:"Mixed",children:"Mixed"}),Object(O.jsx)("option",{value:"Ghana",children:"Ghana"}),Object(O.jsx)("option",{value:"South Africa",children:"South Africa"}),Object(O.jsx)("option",{value:"Kenya",children:"Kenya"}),Object(O.jsx)("option",{value:"Ireland",children:"Ireland"}),Object(O.jsx)("option",{value:"Uk",children:"Uk"})]})]})]}),Object(O.jsx)("div",{className:"row"})]})})})})})})}),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-lg-8 myform",children:Object(O.jsx)("div",{className:"submit-property bg-light",children:Object(O.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(O.jsx)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"form-group col-lg-8",children:[Object(O.jsx)("label",{children:"Advert title"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"text",name:"property-id",value:C.advert_title,onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{advert_title:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-12",children:[Object(O.jsx)("label",{children:"Advert Description"}),Object(O.jsx)("textarea",{onChange:function(e){return S(Object(n.a)(Object(n.a)({},C),{},{advert_description:e.target.value}))},value:C.advert_description,className:"form-control bg-gray",rows:"7"})]}),Object(O.jsx)("br",{})]})})})})})}),Object(O.jsx)("div",{className:"col-lg-12 text-center mt-4",children:Object(O.jsx)("button",{disabled:p,onClick:B,className:"btn btn-primary",children:p?"Posting..":"Update Ad"})})]})})]}),Object(O.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=47.dcc5393f.chunk.js.map