(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[36],{220:function(e,c,a){"use strict";a.r(c);var t=a(25),s=a.n(t),l=a(8),i=a(32),r=a(31),n=a(1),o=a.n(n),j=a(54),d=a(4),b=a(40),m=a.n(b),h=a(10),x=a(173),O=a.n(x),p=a(0),g=function(e){var c=e.data;return Object(p.jsx)("div",{className:"col-md-12 col-lg-12 wow slideInDown animated",children:Object(p.jsx)("div",{className:"property-list mt-30",children:Object(p.jsxs)("div",{className:"property-item d-flex",children:[Object(p.jsxs)("div",{className:"property-img position-relative overflow-hidden overlay-secondary-4",children:[Object(p.jsx)("img",{src:e.src,alt:"image"}),Object(p.jsx)("div",{className:"meta-property icon-primary color-white z-index-1",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fa fa-calendar"})," ",Object(p.jsx)(O.a,{fromNow:!0,children:c.created_at})]}),c.isPaidAdd?Object(p.jsx)("li",{className:"mx-3",style:{color:"lime"},children:"Premium Ad"}):null,Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fa fa-user"})," by ",c.posted_by.firstName]})]})})]}),Object(p.jsxs)("div",{className:"property-content bg-white pt-30 pb-50 px-30 position-relative",children:[Object(p.jsx)(h.b,{to:{pathname:"/DetailView2",state:c},className:"color-secondary mb-5",href:"",children:Object(p.jsx)("h4",{children:c.advert_title})}),Object(p.jsxs)("span",{className:"address icon-primary f-14",children:[Object(p.jsx)("i",{className:"fa fa-map-marker"}),c.building_location.address]}),Object(p.jsxs)("ul",{className:"about-property icon-primary d-table mt-20",children:[c.amenities_parking_space&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-fit-screen"}),"Parking space"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-hotel"}),c.no_rooms," Bedrooms"]}),c.no_toilets&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-bathtub"}),c.no_toilets," Bathrooms"]}),c.amenities_balcony&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-garage"}),"Balcony"]}),c.amenities_private_toilets&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-garage"}),"Private Restrooms"]}),c.amenities_swim&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-garage"}),"swimming pool"]})]}),Object(p.jsx)("span",{className:"tags color-gray mb-30 d-block",children:c.Building_type}),Object(p.jsx)("div",{className:"property-cost color-white list-half w-100",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"For Rent"}),Object(p.jsxs)("li",{children:[c.rent," ",Object(p.jsxs)("sub",{children:["/",c.rent_method]})]})]})})]})]})})})},u=function(e){var c=e.data;return Object(p.jsx)("div",{className:"col-md-12 col-lg-6 wow slideInDown animated",children:Object(p.jsx)("div",{className:"property-thumbnail mt-30",children:Object(p.jsxs)("div",{className:"property-img position-relative overflow-hidden overlay-secondary-4",children:[Object(p.jsx)("img",{src:e.src}),Object(p.jsxs)("div",{className:"thumbnail-content z-index-1 color-white-a color-white",children:[Object(p.jsx)("span",{className:"thum-category category-1 bg-secondary color-white z-index-1 px-15",children:"For Rent"}),Object(p.jsxs)("div",{className:"hover-content py-30 px-20 overlay-hover-gradient",children:[Object(p.jsxs)("div",{className:"thumbnail-title z-index-1 position-relative",children:[Object(p.jsxs)("span",{className:"thumbnail-price bg-white color-secondary px-15 mb-10 d-table",children:["N",c.rent,"/",c.rent_method]}),Object(p.jsx)(h.b,{to:{pathname:"/DetailView1",state:c},className:"color-secondary mb-5",href:"single-property.html",children:Object(p.jsx)("h4",{children:c.advert_title})})]}),Object(p.jsxs)("ul",{className:"about-property icon-primary d-table f-14 z-index-1 position-relative",children:[c.isPaidAdd?Object(p.jsx)("li",{className:"mx-3",style:{color:"lime"},children:"Premium Ad"}):null,c.amenities_parking_space&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-fit-screen"}),"Parking space"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-hotel"}),c.no_rooms," Bedrooms"]}),c.no_toilets&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-bathtub"}),c.no_toilets," Bathrooms"]}),c.amenities_balcony&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-garage"}),"Balcony"]}),c.amenities_private_toilets&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-garage"}),"Private Restrooms"]}),c.amenities_swim&&Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"flaticon-garage"}),"swimming pool"]})]})]})]})]})})})};c.default=function(){var e=Object(d.f)().location.state,c=o.a.useState([]),a=Object(r.a)(c,2),t=a[0],n=a[1],b=o.a.useState([]),h=Object(r.a)(b,2),x=(h[0],h[1]),O=o.a.useState({total:0,limit:""}),N=Object(r.a)(O,2),f=N[0],v=N[1],w=o.a.useState(0),y=Object(r.a)(w,2),k=y[0],_=y[1],F=o.a.useState(!1),P=Object(r.a)(F,2),D=P[0],I=P[1],A=function(){var c=Object(i.a)(s.a.mark((function c(){return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return I(!0),c.next=3,m.a.get("/api/v1/ListApartByLocation/?location=".concat(e.location,"&pageNo=").concat(k)).then((function(e){I(!1),e.data.userData&&e.data.userData.length>0&&n(e.data.userData),e.data.userData&&e.data.userData.length>0&&v(Object(l.a)(Object(l.a)({},f),{},{limit:e.data.limit,total:e.data.total})),e.data.userData.length>0&&_(k+1)})).catch((function(e){console.log(e),I(!1),e.response.data.message||console.log("error occured")}));case 3:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(s.a.mark((function e(c,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,m.a.get("/api/v1/ListApartByLnglat/?lng=".concat(c,"&lat=").concat(a,"&pageNo=").concat(k)).then((function(e){console.log(e.data),I(!1),e.data.userData&&e.data.userData.length>0&&n(e.data.userData),e.data.userData&&e.data.userData.length>0&&v(Object(l.a)(Object(l.a)({},f),{},{limit:e.data.limit,total:e.data.total})),e.data.userData.length>0&&_(k+1)})).catch((function(e){I(!1),e.response.data.message||console.log("error occured")}));case 3:case"end":return e.stop()}}),e)})));return function(c,a){return e.apply(this,arguments)}}();o.a.useEffect((function(){e.location&&A(),e.lat&&C(e.lng,e.lat)}),[]);return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{id:"scroll",style:{display:"none"},children:Object(p.jsx)("i",{className:"fa fa-angle-up"})}),Object(p.jsx)(j.a,{}),Object(p.jsx)("div",{className:"topPatch",style:{height:"120px"}}),Object(p.jsx)("section",{className:"bg-light",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-12 col-lg-12 wow slideInDown animated",children:Object(p.jsxs)("div",{className:"top-filter pb-15 border-bottom-1-gray",children:[Object(p.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:e.location?'Apartments/Flats within "'.concat(e.location,'"'):e.address?'Apartments/Flats within "'.concat(e.address,'"'):null}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-3 col-lg-6 col-xl-7",children:[Object(p.jsxs)("label",{children:[" Found ",f.total," results"]}),f.limit*k<f.total?Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){x([]),e.location&&A(),e.lat&&C(e.lng,e.lat)},className:"btn ",children:"Next Page"})}):null]}),Object(p.jsx)("div",{className:"col-md-9 col-lg-6 col-xl-5",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-8 col-lg-7"}),Object(p.jsx)("div",{className:"col-md-4 col-lg-5",children:Object(p.jsxs)("ul",{className:"nav nav-tabs border-0 float-right navbar-tab-view mt-sm-15",id:"myTab",role:"tablist",style:{lineHeight:"20px"},children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{className:"nav-link",id:"contact-tab","data-toggle":"tab",href:"#contact",role:"tab","aria-controls":"contact","aria-selected":"false",children:Object(p.jsx)("i",{className:"fa fa-th","aria-hidden":"true"})})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{className:"nav-link active",id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false",children:Object(p.jsx)("i",{className:"fa fa-list","aria-hidden":"true"})})})]})})]})})]})]})}),Object(p.jsx)("div",{className:"col-md-12 col-lg-8",children:Object(p.jsxs)("div",{className:"tab-content mt-md-50",id:"myTabContent",children:[Object(p.jsx)("div",{className:"tab-pane fade",id:"home",role:"tabpanel","aria-labelledby":"home-tab"}),Object(p.jsx)("div",{className:"tab-pane fade",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab",children:Object(p.jsx)("div",{className:"row",children:D?Object(p.jsx)("h4",{children:"Loading...."}):t.length>0?t.map((function(e){return Object(p.jsx)(u,{src:e.media[0]&&e.media[0].uri,data:e})})):Object(p.jsx)("h4",{children:"Nothing Found"})})}),Object(p.jsx)("div",{className:"tab-pane fade show active",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab",children:Object(p.jsx)("div",{className:"row",children:D?Object(p.jsx)("h4",{children:"Loading...."}):t.length>0?t.map((function(e){return Object(p.jsx)(g,{src:e.media[0]&&e.media[0].uri,data:e})})):Object(p.jsx)("h4",{children:"Nothing Found"})})})]})}),Object(p.jsx)("div",{className:"col-md-12 col-lg-4",children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),window.location.reload()},className:"adbanced-form-two amenities-list bg-white py-40 px-30 mt-30",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"form-group mb-50 pb-15 col-lg-12 wow slideInUp animated",children:[Object(p.jsx)("label",{children:"Price"}),Object(p.jsx)("div",{className:"price_range",children:Object(p.jsx)("div",{className:"price-filter",children:Object(p.jsx)("span",{className:"price-slider",children:Object(p.jsx)("input",{className:"filter_price",type:"number",name:"price"})})})})]}),Object(p.jsxs)("div",{className:"form-group col-lg-12 pt-15 mb-0 wow slideInUp animated",children:[Object(p.jsx)("label",{children:"Amenities"}),Object(p.jsxs)("ul",{className:"list-bottom select-option",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("input",{id:"feature-1",className:"d-none",type:"checkbox"}),Object(p.jsx)("label",{htmlFor:"feature-1",children:"Parking space"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("input",{id:"feature-2",className:"d-none",type:"checkbox"}),Object(p.jsx)("label",{htmlFor:"feature-2",children:" Play ground"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("input",{id:"feature-3",className:"d-none",type:"checkbox"}),Object(p.jsx)("label",{htmlFor:"feature-3",children:"Private Toilets"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("input",{id:"feature-5",className:"d-none",type:"checkbox"}),Object(p.jsx)("label",{htmlFor:"feature-5",children:"Wifi/Internet"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("input",{id:"feature-7",className:"d-none",type:"checkbox"}),Object(p.jsx)("label",{htmlFor:"feature-7",children:"Swimming Pool"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("input",{id:"feature-9",className:"d-none",type:"checkbox"}),Object(p.jsx)("label",{htmlFor:"feature-9",children:"Balcony"})]})]})]}),Object(p.jsx)("button",{children:"Search"})]})})})]})})}),Object(p.jsx)("div",{className:"patner-subscribe bg-light",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-12 col-lg-12 wow animated slideInDown",children:Object(p.jsx)("div",{className:"bg-white shadow py-80",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-12 col-lg-6 px-60 border-right",children:[Object(p.jsxs)("div",{className:"side-title pb-30",children:[Object(p.jsx)("span",{className:"small-title color-primary position-relative line-primary",children:"Partners"}),Object(p.jsx)("h2",{className:"title mb-20 color-secondary",children:"Our Popular Fellows!"}),Object(p.jsx)("p",{children:"Luctus posuere facilisi eros auctor lacinia litora. Convall aptent nisy parturient scelerisq. Nullam fringil condimen integer mauris lacus aliquam, quam massa lobortis commod proin magna."})]}),Object(p.jsxs)("div",{className:"owl-carousel partners mt-30",children:[Object(p.jsx)("img",{src:"images/partner/1.png",alt:"Image not found!"}),Object(p.jsx)("img",{src:"images/partner/2.png",alt:"Image not found!"}),Object(p.jsx)("img",{src:"images/partner/3.png",alt:"Image not found!"}),Object(p.jsx)("img",{src:"images/partner/4.png",alt:"Image not found!"}),Object(p.jsx)("img",{src:"images/partner/5.png",alt:"Image not found!"}),Object(p.jsx)("img",{src:"images/partner/6.png",alt:"Image not found!"})]})]}),Object(p.jsxs)("div",{className:"col-md-12 col-lg-6 px-60",children:[Object(p.jsxs)("div",{className:"side-title pb-30 mt-md-50 text-right",children:[Object(p.jsx)("span",{className:"small-title color-primary position-relative line-right-primary",children:"Newsletter"}),Object(p.jsx)("h2",{className:"title mb-20 color-secondary",children:"Get Update Now!"}),Object(p.jsx)("p",{children:"Luctus posuere facilisi eros auctor lacinia litora. Convall aptent nisy parturient scelerisq. Nullam fringil condimen integer mauris lacus aliquam, quam massa lobortis commod proin magna."})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})]})})})})})}),Object(p.jsx)("footer",{className:"bg-secondary pb-50",style:{marginTop:"-233px",paddingTop:"313px"},children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-sm-4 col-md-4 col-lg-6 wow animated slideInLeft",children:Object(p.jsx)("div",{className:"footer-logo",children:Object(p.jsx)("a",{href:"index.html",children:Object(p.jsx)("img",{className:"nav-logo",src:"images/logo/logo2.png",alt:"Footer Logo"})})})}),Object(p.jsx)("div",{className:"col-sm-8 col-md-8 col-lg-6 wow animated slideInRight",children:Object(p.jsxs)("ul",{className:"social-media-2 border-white large color-white-a float-right",children:[Object(p.jsx)("li",{className:"mr-20 color-white",children:Object(p.jsx)("strong",{children:"Follow Us:"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:Object(p.jsx)("i",{className:"fa fa-facebook"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:Object(p.jsx)("i",{className:"fa fa-twitter"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:Object(p.jsx)("i",{className:"fa fa-behance"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:Object(p.jsx)("i",{className:"fa fa-instagram"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:Object(p.jsx)("i",{className:"fa fa-linkedin"})})})]})}),Object(p.jsx)("hr",{className:"border-bottom-1 w-100 my-50"}),Object(p.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-3 wow animated slideInUp",children:Object(p.jsxs)("div",{className:"footer-widget color-gray-light mt-sm-30",children:[Object(p.jsx)("h3",{className:"color-white line-bottom pb-15 mb-20",children:"Have Any Question?"}),Object(p.jsx)("div",{className:"widget-content color-primary",children:Object(p.jsxs)("ul",{className:"widget-contact",children:[Object(p.jsxs)("li",{children:["Call",Object(p.jsx)("span",{className:"color-white",children:"+(844) 000-000-000"})]}),Object(p.jsxs)("li",{children:["Email",Object(p.jsx)("span",{className:"color-white",children:"support@yourdomail.com"})]}),Object(p.jsxs)("li",{children:["Free Consultation",Object(p.jsx)("span",{className:"color-white",children:"Fill Out Form"})]})]})})]})}),Object(p.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-2 wow animated slideInDown",children:Object(p.jsxs)("div",{className:"footer-widget color-gray-light mt-sm-30",children:[Object(p.jsx)("h3",{className:"color-white line-bottom pb-15 mb-20",children:"About"}),Object(p.jsx)("div",{className:"widget-content hover-white-primary",children:Object(p.jsxs)("ul",{className:"quick-links",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Company"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Community"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Carrers"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"News"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Contact"})})]})})]})}),Object(p.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-2 wow animated slideInUp",children:Object(p.jsxs)("div",{className:"footer-widget color-gray-light mt-md-30",children:[Object(p.jsx)("h3",{className:"color-white line-bottom pb-15 mb-20",children:"Quick Links"}),Object(p.jsx)("div",{className:"widget-content hover-white-primary",children:Object(p.jsxs)("ul",{className:"quick-links",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"For Rent"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"For Sale"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Commercial"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Agents"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Property Guides"})})]})})]})}),Object(p.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-2 wow animated slideInUp",children:Object(p.jsxs)("div",{className:"footer-widget color-gray-light mt-md-30",children:[Object(p.jsx)("h3",{className:"color-white line-bottom pb-15 mb-20",children:"Our Services"}),Object(p.jsx)("div",{className:"widget-content hover-white-primary",children:Object(p.jsxs)("ul",{className:"quick-links",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/post-options-1",children:"Post a room ad"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"post-options-2",children:"Post a whole flat add"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/process-needrooms-advert1",children:'Post "I need a room add"'})})]})})]})}),Object(p.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-3 wow animated slideInDown",children:Object(p.jsxs)("div",{className:"footer-widget color-gray-light mt-sm-30",children:[Object(p.jsx)("h3",{className:"color-white line-bottom pb-15 mb-20",children:"Help"}),Object(p.jsx)("div",{className:"widget-content hover-white-primary",children:Object(p.jsxs)("ul",{className:"quick-links",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Payments"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Shipping"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Cancellation"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"FAQ"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Report"})})]})})]})})]})})}),Object(p.jsx)("div",{className:"copyright bg-secondary color-white",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("hr",{className:"border-bottom-1 w-100 m-0"}),Object(p.jsx)("div",{className:"col-md-12 col-lg-12",children:Object(p.jsx)("div",{className:"py-15 text-center",children:"Fresher @ 2020. All Rights Reserved."})})]})})})]})}}}]);
//# sourceMappingURL=36.7a674546.chunk.js.map