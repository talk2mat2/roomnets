(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[41],{189:function(e,a,t){"use strict";t.r(a);var s=t(25),c=t.n(s),i=t(8),l=t(33),r=t(32),n=t(1),o=t.n(n),d=t(54),j=t(4),b=t(40),m=t.n(b),h=t(10),x=t(56),p=t(0);var O=function(e){var a,t=e.data;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"col-md-12 col-lg-12 wow slideInUp animated",children:Object(p.jsx)("div",{className:"property-list mt-30",children:Object(p.jsxs)("div",{className:"property-item d-flex",children:[Object(p.jsxs)("div",{className:"property-img position-relative overflow-hidden overlay-secondary-4",children:[Object(p.jsx)("img",{src:e.src}),Object(p.jsxs)("ul",{className:"hover-option position-absolute icon-white z-index-1",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{"data-toggle":"tooltip","data-placement":"top",title:"Wishlist",href:"#",children:Object(p.jsx)("i",{className:"fa fa-heart-o","aria-hidden":"true"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{"data-toggle":"tooltip","data-placement":"top",title:"Compare",href:"#",children:Object(p.jsx)("i",{className:"fa fa-random","aria-hidden":"true"})})})]}),Object(p.jsx)("div",{className:"meta-property icon-primary color-white z-index-1",children:Object(p.jsxs)("ul",{children:[t.isPaidAdd?Object(p.jsx)("li",{className:"mx-3",style:{color:"lime"},children:"Premium Ad"}):null,Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fa fa-user"}),"by"," ",t.posted_by.firstName&&t.posted_by.firstName]})]})})]}),Object(p.jsxs)("div",{className:"property-content bg-white pt-30 pb-50 px-30 position-relative",children:[Object(p.jsx)(h.b,{className:"color-secondary mb-5",to:{pathname:"/DetailView1",state:t},children:Object(p.jsx)("h4",{children:t.advert_title})}),Object(p.jsxs)("span",{className:"address icon-primary f-14",children:[Object(p.jsx)("i",{className:"fa fa-map-marker"}),t.building_location.address]}),Object(p.jsxs)("ul",{className:"about-property icon-primary d-table mt-20",children:[t.amenities_parking_space&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-fit-screen"}),"Parking space"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-hotel"}),t.no_rooms," Rooms"]}),t.no_toilets&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-bathtub"}),t.no_toilets," Bathrooms"]}),t.amenities_internet&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-garage"}),"Internet facility"]}),t.amenities_balcony&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-garage"}),"Balcony"]}),t.amenities_entry_disabled&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-garage"}),"Easy access for the Disabled"]}),t.amenities_private_toilets&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-garage"}),"Private Restrooms"]}),t.amenities_swim&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-garage"}),"swimming pool"]})]}),Object(p.jsx)("span",{className:"tags color-gray mb-30 d-block",children:t.Building_type}),Object(p.jsx)("div",{className:"property-cost color-white list-half w-100",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"For Rent"}),Object(p.jsxs)("li",{children:[t.currency," ",(a=t.rent,a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ",Object(p.jsxs)("sub",{children:["/",t.rent_method]})]})]})})]})]})})})})};a.default=function(){var e=Object(j.f)().location.state,a=o.a.useState([]),t=Object(r.a)(a,2),s=t[0],n=t[1],b=o.a.useState(!1),h=Object(r.a)(b,2),u=h[0],g=h[1],N=o.a.useState({total:0,limit:""}),f=Object(r.a)(N,2),y=f[0],v=f[1],w=o.a.useState(0),_=Object(r.a)(w,2),k=_[0],D=_[1],S=function(){var a=Object(l.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return g(!0),a.next=3,m.a.get("/api/v1/ListRoomsByState/".concat(e,"?pageNo=").concat(k)).then((function(e){g(!1),n(e.data.userData),e.data.userData&&e.data.userData.length>0&&v(Object(i.a)(Object(i.a)({},y),{},{limit:e.data.limit,total:e.data.total})),e.data.userData.length>0&&D(k+1)})).catch((function(e){g(!1),console.log(e),e.response.data.message||console.log("error occured")}));case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();o.a.useEffect((function(){S()}),[]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{}),Object(p.jsxs)("section",{className:"bg-light",children:[Object(p.jsx)("div",{className:"topPatch",style:{height:"120px"}}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row  ",children:[Object(p.jsx)("div",{className:"col-md-12 col-lg-12 wow animated slideInDown",children:Object(p.jsxs)("div",{className:"main-title w-50 mx-auto d-table text-center mb-30",children:[Object(p.jsx)("span",{className:"small-title color-primary position-relative line-2-primary",children:"Explore"}),Object(p.jsxs)("h2",{className:"title mb-20 color-secondary",children:["Rooms Posted In ",e]})]})}),Object(p.jsxs)("div",{className:"col-md-3 col-lg-6 col-xl-7",children:[Object(p.jsxs)("label",{children:[" Found ",y.total," results"]}),y.limit*k<y.total?Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){n([]),e&&S()},className:"btn ",children:"Next Page"})}):null]}),Object(p.jsx)("div",{className:"col-md-12 col-lg-12",children:Object(p.jsxs)("div",{className:"tab-content  border-top-1-gray",id:"myTabContent",children:[Object(p.jsx)("div",{className:"tab-pane fade",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-12 col-lg-4 wow slideInLeft animated",children:Object(p.jsx)("div",{className:"property-thumbnail mt-30",children:Object(p.jsxs)("div",{className:"property-img position-relative overflow-hidden overlay-secondary-4",children:[Object(p.jsx)("img",{src:"images/property/7.jpg",alt:"image"}),Object(p.jsxs)("div",{className:"thumbnail-content z-index-1 color-white-a color-white",children:[Object(p.jsx)("span",{className:"thum-category category-1 bg-secondary color-white z-index-1 px-15",children:"For Sale"}),Object(p.jsxs)("ul",{className:"hover-option position-absolute icon-white z-index-1",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{"data-toggle":"tooltip","data-placement":"top",title:"Wishlist",href:"#",children:Object(p.jsx)("i",{className:"fa fa-heart-o","aria-hidden":"true"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{"data-toggle":"tooltip","data-placement":"top",title:"Compare",href:"#",children:Object(p.jsx)("i",{className:"fa fa-random","aria-hidden":"true"})})})]}),Object(p.jsxs)("div",{className:"hover-content py-30 px-20 overlay-hover-gradient",children:[Object(p.jsxs)("div",{className:"thumbnail-title z-index-1 position-relative",children:[Object(p.jsx)("span",{className:"thumbnail-price bg-white color-secondary px-15 mb-10 d-table",children:"$ 12000"}),Object(p.jsx)("a",{className:"color-secondary mb-5",href:"single-property.html",children:Object(p.jsx)("h4",{children:"Villa on Grand Avenue"})}),Object(p.jsxs)("span",{className:"address icon-primary f-14",children:[Object(p.jsx)("i",{className:"fa fa-map-marker"}),"11-13 Whitehall, London SW1A 2DD, UK"]})]}),Object(p.jsxs)("ul",{className:"about-property icon-primary d-table f-14 z-index-1 position-relative",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{className:"color-primary",children:"400"})," ","sqft"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{className:"color-primary",children:"3"})," ","Bedrooms"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{className:"color-primary",children:"2"})," ","Bathrooms"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{className:"color-primary",children:"1"})," ","Garage"]})]})]})]})]})})})})}),Object(p.jsx)("div",{className:"tab-pane fade show active",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab",children:Object(p.jsx)("div",{className:"row",children:u?Object(p.jsx)("h4",{children:"Loading...."}):s.length>0?s.map((function(e){return Object(p.jsx)(O,{src:e.media[0]&&e.media[0].uri,data:e})})):Object(p.jsx)("h4",{children:"Nothing Found"})})})]})})]})})]}),Object(p.jsx)(x.a,{})]})}}}]);
//# sourceMappingURL=41.48ec72c0.chunk.js.map