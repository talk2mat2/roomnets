(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[30],{201:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a(1);var s=a(315),c=a(314),i=a(322),l=a(320),r=a(321),n=a(261),o=a(0);function d(e){var t=e.open,a=e.setOpen,d=e.handleDelete,j=function(){a(!1)};return Object(o.jsx)("div",{children:Object(o.jsxs)(c.a,{open:t,onClose:j,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(o.jsx)(n.a,{id:"alert-dialog-title",children:"Are you sure to delete this?"}),Object(o.jsx)(l.a,{children:Object(o.jsx)(r.a,{id:"alert-dialog-description",children:"This item will be deleted, this process is irreversible"})}),Object(o.jsxs)(i.a,{children:[Object(o.jsx)(s.a,{onClick:d,children:"Delete"}),Object(o.jsx)(s.a,{onClick:j,autoFocus:!0,children:"Cancel"})]})]})})}},262:function(e,t,a){"use strict";a.r(t);var s=a(25),c=a.n(s),i=a(8),l=a(32),r=a(31),n=a(1),o=a.n(n),d=a(54),j=a(10),b=a(4),h=a(40),m=a.n(h),p=a(55),x=a(14),O=a(201),u=a(0);var f=function(e){var t,a=e.data,s=e.deleteItems,c=o.a.useState(!1),i=Object(r.a)(c,2),l=i[0],n=i[1];return Object(u.jsxs)("div",{className:"col-md-12 col-lg-12 wow slideInUp animated",children:[Object(u.jsx)(O.a,{handleDelete:function(e){s(e).then((function(){n(!1)}))}.bind(undefined,a._id),open:l,setOpen:n}),Object(u.jsx)("div",{className:"property-list mt-30",children:Object(u.jsxs)("div",{className:"property-item d-flex",children:[Object(u.jsxs)("div",{className:"property-img position-relative overflow-hidden overlay-secondary-4",children:[Object(u.jsx)("img",{src:e.src}),Object(u.jsxs)("ul",{className:"hover-option position-absolute icon-white z-index-1",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{"data-toggle":"tooltip","data-placement":"top",title:"Wishlist",href:"#",children:Object(u.jsx)("i",{className:"fa fa-heart-o","aria-hidden":"true"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{"data-toggle":"tooltip","data-placement":"top",title:"Compare",href:"#",children:Object(u.jsx)("i",{className:"fa fa-random","aria-hidden":"true"})})})]}),Object(u.jsx)("div",{className:"meta-property icon-primary color-white z-index-1",children:Object(u.jsxs)("ul",{children:[a.isPaidAdd?Object(u.jsx)("li",{className:"mx-3",style:{color:"lime"},children:"Premium Ad"}):null,Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fa fa-user"}),"by"," ",a.posted_by.firstName&&a.posted_by.firstName]})]})})]}),Object(u.jsxs)("div",{className:"property-content bg-white pt-30 pb-50 px-30 position-relative",children:[Object(u.jsxs)(j.b,{className:"color-secondary mb-5",to:{pathname:"/DetailView2",state:a},children:[Object(u.jsx)("h4",{children:a.advert_title})," ",a.Approved_By_Admin?Object(u.jsx)("span",{style:{color:"lime"},className:"float-right",children:"Add is live"}):Object(u.jsx)("span",{style:{color:"tomato"},className:"float-right",children:"Awaiting aproval by admin"})]}),Object(u.jsxs)("span",{className:"address icon-primary f-14",children:[Object(u.jsx)("i",{className:"fa fa-map-marker"}),a.building_location.address]}),Object(u.jsxs)("ul",{className:"about-property icon-primary d-table mt-20",children:[a.amenities_parking_space&&Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"flaticon-fit-screen"}),"Parking space"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"flaticon-hotel"}),a.no_rooms," Rooms"]}),a.no_toilets&&Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"flaticon-bathtub"}),a.no_toilets," Bathrooms"]}),a.amenities_internet&&Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"flaticon-garage"}),"Internet facility"]}),a.amenities_balcony&&Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"flaticon-garage"}),"Balcony"]}),a.amenities_entry_disabled&&Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"flaticon-garage"}),"Easy access for the Disabled"]}),a.amenities_private_toilets&&Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"flaticon-garage"}),"Private Restrooms"]}),a.amenities_swim&&Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"flaticon-garage"}),"swimming pool"]})]}),Object(u.jsxs)("div",{className:"mb-30 d-flex flex-row justify-content-between",children:[Object(u.jsx)("span",{className:"tags color-gray d-block",children:a.Building_type}),Object(u.jsxs)("span",{className:"tags color-gray d-flex flex-row ",children:[Object(u.jsx)("h4",{onClick:function(){return n(!0)},className:"mr-2 cursor-pointer",children:"Delete"}),Object(u.jsx)(j.b,{style:{color:"inherit"},to:"/edit_apart_post/".concat(a._id),children:Object(u.jsx)("h4",{className:"cursor-pointer",children:"Edit"})})]})]}),Object(u.jsx)("div",{className:"property-cost color-white list-half w-100",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"For Rent"}),Object(u.jsxs)("li",{children:[a.currency," ",(t=a.rent,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ",Object(u.jsxs)("sub",{children:["/",a.rent_method]})]})]})})]})]})})]})};t.default=function(){Object(b.f)().location.state;var e=o.a.useState([]),t=Object(r.a)(e,2),a=t[0],s=t[1],n=o.a.useState(!1),j=Object(r.a)(n,2),h=j[0],O=j[1],g=o.a.useState(0),N=Object(r.a)(g,2),y=N[0],v=N[1],w=o.a.useState({total:0,limit:""}),_=Object(r.a)(w,2),A=_[0],k=_[1],D=Object(x.c)((function(e){return e.user.currentUser})),S=Object(x.c)((function(e){return e.CountryReducer.country})),C=D&&D.token,I=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,m.a.get("/api/v1/ListApartByMe?pageNo=".concat(y,"&country=").concat(S),{headers:{Authorization:C}}).then((function(e){O(!1),e.data.userData&&s(e.data.userData),e.data.userData&&e.data.userData.length>0&&k(Object(i.a)(Object(i.a)({},A),{},{limit:e.data.limit,total:e.data.total})),e.data.userData.length>0&&v(y+1)})).catch((function(e){O(!1),e.response&&e.response.data.message||console.log("error occured"),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,m.a.get("/api/v1/deleteItemApartment?item=".concat(t),{headers:{Authorization:C}}).then((function(e){console.log(e),s([]),k(Object(i.a)(Object(i.a)({},A),{},{total:0})),I()})).catch((function(e){O(!1),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();o.a.useEffect((function(){I()}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{}),Object(u.jsxs)("section",{className:"bg-light mb-80",children:[Object(u.jsx)("div",{className:"topPatch",style:{height:"120px"}}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row  ",children:[Object(u.jsx)("div",{className:"col-md-12 col-lg-12 wow animated slideInDown",children:Object(u.jsxs)("div",{className:"main-title w-50 mx-auto d-table text-center mb-30",children:[Object(u.jsx)("span",{className:"small-title color-primary position-relative line-2-primary",children:"Explore"}),Object(u.jsxs)("h2",{className:"title mb-20 color-secondary",children:["Apartments Posted In   ","KE"===S?"Kenya":"US"===S?"USA":"NG"===S?"Nigeria":"IE"===S?"Ireland":"ZA"===S?"South Africa":"GB"===S?"United Kingdom":"GH"===S?"Ghana":""]})]})}),Object(u.jsxs)("div",{className:"col-md-3 col-lg-6 col-xl-7",children:[Object(u.jsxs)("label",{children:[" Found ",A.total," results"]}),A.limit*y<A.total?Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){s([]),I()},className:"btn ",children:"Next Page"})}):null]}),Object(u.jsx)("div",{className:"col-md-12 col-lg-12",children:Object(u.jsxs)("div",{className:"tab-content  border-top-1-gray",id:"myTabContent",children:[Object(u.jsx)("div",{className:"tab-pane fade",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-12 col-lg-4 wow slideInLeft animated",children:Object(u.jsx)("div",{className:"property-thumbnail mt-30",children:Object(u.jsxs)("div",{className:"property-img position-relative overflow-hidden overlay-secondary-4",children:[Object(u.jsx)("img",{src:"images/property/7.jpg",alt:"image"}),Object(u.jsxs)("div",{className:"thumbnail-content z-index-1 color-white-a color-white",children:[Object(u.jsx)("span",{className:"thum-category category-1 bg-secondary color-white z-index-1 px-15",children:"For Sale"}),Object(u.jsxs)("ul",{className:"hover-option position-absolute icon-white z-index-1",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{"data-toggle":"tooltip","data-placement":"top",title:"Wishlist",href:"#",children:Object(u.jsx)("i",{className:"fa fa-heart-o","aria-hidden":"true"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{"data-toggle":"tooltip","data-placement":"top",title:"Compare",href:"#",children:Object(u.jsx)("i",{className:"fa fa-random","aria-hidden":"true"})})})]}),Object(u.jsxs)("div",{className:"hover-content py-30 px-20 overlay-hover-gradient",children:[Object(u.jsxs)("div",{className:"thumbnail-title z-index-1 position-relative",children:[Object(u.jsx)("span",{className:"thumbnail-price bg-white color-secondary px-15 mb-10 d-table",children:"$ 12000"}),Object(u.jsx)("a",{className:"color-secondary mb-5",href:"single-property.html",children:Object(u.jsx)("h4",{children:"Villa on Grand Avenue"})}),Object(u.jsxs)("span",{className:"address icon-primary f-14",children:[Object(u.jsx)("i",{className:"fa fa-map-marker"}),"11-13 Whitehall, London SW1A 2DD, UK"]})]}),Object(u.jsxs)("ul",{className:"about-property icon-primary d-table f-14 z-index-1 position-relative",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{className:"color-primary",children:"400"})," ","sqft"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{className:"color-primary",children:"3"})," ","Bedrooms"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{className:"color-primary",children:"2"})," ","Bathrooms"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{className:"color-primary",children:"1"})," ","Garage"]})]})]})]})]})})})})}),Object(u.jsx)("div",{className:"tab-pane fade show active",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab",children:Object(u.jsx)("div",{className:"row",children:h?Object(u.jsx)("h4",{children:"Loading...."}):a.length>0?a.map((function(e){return Object(u.jsx)(f,{deleteItems:z,src:e.media[0]&&e.media[0].uri,data:e})})):Object(u.jsx)("h4",{children:"Nothing Found"})})})]})})]})})]}),Object(u.jsx)(p.a,{})]})}}}]);
//# sourceMappingURL=30.2291e384.chunk.js.map