(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[6],{155:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},156:function(e,t,c){var n=c(157);function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var c={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var a=i?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(c,l,a):c[l]=e[l]}return c.default=e,t&&t.set(e,c),c}},157:function(e,t){function c(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=c=function(e){return typeof e}:e.exports=c=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(t)}e.exports=c},158:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=c(32)},164:function(e,t,c){"use strict";var n=c(24),s=c(1),i=c.n(s);var l="styles-module_wrapper__1I_qj",a="styles-module_content__2jwZj",r="styles-module_slide__1zrfk",o="styles-module_image__2hdkJ",d="styles-module_close__2I1sI",j="styles-module_navigation__1pqAE",m="styles-module_prev__KqFRp",b="styles-module_next__1uQwZ";!function(e,t){void 0===t&&(t={});var c=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===c&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}(".styles-module_wrapper__1I_qj {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  padding: 0px 60px 0px 60px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  box-sizing: border-box;\n}\n\n.styles-module_content__2jwZj {\n  margin: auto;\n  padding: 0;\n  width: 90%;\n  height: 100%;\n  max-height: 100%;\n  text-align: center;\n}\n\n.styles-module_slide__1zrfk {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.styles-module_image__2hdkJ {\n  max-height: 100%;\n  max-width: 100%;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.styles-module_close__2I1sI {\n  color: white;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  opacity: 0.2;\n  cursor: pointer;\n}\n\n.styles-module_close__2I1sI:hover {\n  opacity: 1;\n}\n\n.styles-module_navigation__1pqAE {\n  height: 80%;\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  font-size: 60px;\n  line-height: 60px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  opacity: 0.2;\n  padding: 0 15px;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.styles-module_navigation__1pqAE:hover {\n  opacity: 1;\n}\n\n@media (hover: none) {\n  .styles-module_navigation__1pqAE:hover {\n    opacity: 0.2;\n  }\n}\n\n.styles-module_prev__KqFRp {\n  left: 0;\n}\n\n.styles-module_next__1uQwZ {\n  right: 0;\n}\n\n@media (max-width: 900px) {\n  .styles-module_wrapper__1I_qj {\n    padding: 0;\n  }\n}\n");t.a=function(e){var t,c=Object(s.useState)(null!==(t=e.currentIndex)&&void 0!==t?t:0),h=Object(n.a)(c,2),u=h[0],x=h[1],O=Object(s.useCallback)((function(t){var c=(u+t)%e.src.length;c<0&&(c=e.src.length-1),x(c)}),[u]),p=Object(s.useCallback)((function(t){var c;if(t.target&&e.closeOnClickOutside){var n="ReactSimpleImageViewer"===t.target.id,s=t.target.classList.contains("react-simple-image-viewer__slide");(n||s)&&(t.stopPropagation(),null===(c=e.onClose)||void 0===c||c.call(e))}}),[e.onClose]),f=Object(s.useCallback)((function(t){var c;"Escape"===t.key&&(null===(c=e.onClose)||void 0===c||c.call(e)),["ArrowLeft","h"].includes(t.key)&&O(-1),["ArrowRight","l"].includes(t.key)&&O(1)}),[e.onClose,O]),g=Object(s.useCallback)((function(e){e.wheelDeltaY>0?O(-1):O(1)}),[O]);return Object(s.useEffect)((function(){return document.addEventListener("keydown",f),e.disableScroll||document.addEventListener("wheel",g),function(){document.removeEventListener("keydown",f),e.disableScroll||document.removeEventListener("wheel",g)}}),[f,g]),i.a.createElement("div",{id:"ReactSimpleImageViewer",className:"".concat(l," react-simple-image-viewer__modal"),onKeyDown:f,onClick:p,style:e.backgroundStyle},i.a.createElement("span",{className:"".concat(d," react-simple-image-viewer__close"),onClick:function(){var t;return null===(t=e.onClose)||void 0===t?void 0:t.call(e)}},"\xd7"),e.src.length>1&&i.a.createElement("span",{className:"".concat(j," ").concat(m," react-simple-image-viewer__previous"),onClick:function(){return O(-1)}},"\u276e"),e.src.length>1&&i.a.createElement("span",{className:"".concat(j," ").concat(b," react-simple-image-viewer__next"),onClick:function(){return O(1)}},"\u276f"),i.a.createElement("div",{className:"".concat(a," react-simple-image-viewer__modal-content"),onClick:p},i.a.createElement("div",{className:"".concat(r," react-simple-image-viewer__slide")},i.a.createElement("img",{className:o,src:e.src[u],alt:""}))))}},165:function(e,t,c){"use strict";var n=c(155),s=c(156);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(c(1)),l=(0,n(c(158)).default)(i.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=l},203:function(e,t,c){"use strict";c.r(t);var n=c(24),s=c(1),i=c(50),l=c(4),a=c(46),r=c(164),o=c(165),d=c.n(o),j=c(160),m=c.n(j),b=c(0);t.default=function(e){var t=Object(l.f)(),c=t.location.state,o=Object(s.useState)(0),j=Object(n.a)(o,2),h=j[0],u=j[1],x=Object(s.useState)(!1),O=Object(n.a)(x,2),p=O[0],f=O[1],g=Object(s.useState)([]),y=Object(n.a)(g,2),v=y[0],_=y[1],w=Object(s.useCallback)((function(e){u(e),f(!0)}),[]);console.log(c);var N;return Object(s.useEffect)((function(){var e=new Array;c.media.length>0&&c.media.map((function(t){return e.push(t.uri)})),e.length>0&&_(e)}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{id:"scroll",style:{display:"none"},children:Object(b.jsx)("i",{className:"fa fa-angle-up"})}),Object(b.jsx)(i.a,{}),Object(b.jsx)("div",{className:"topPatch",style:{height:"120px"}}),Object(b.jsxs)("section",{children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12 col-lg-12",children:Object(b.jsx)("div",{className:"mb-30",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12 col-lg-8 wow slideInRight animated",children:Object(b.jsxs)("div",{className:"single-property position-relative",children:[Object(b.jsxs)("button",{onClick:function(){t.goBack()},className:"btn ",children:[Object(b.jsx)(d.a,{})," Back to searchs"]}),Object(b.jsx)("span",{className:"bg-secondary color-white z-index-1 px-15 py-5 mr-20",children:"For Rent"}),Object(b.jsxs)("strong",{className:"color-primary f-20",children:[c.currency," ",(N=c.rent,N.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),"/",c.rent_method]}),Object(b.jsx)("h3",{className:"color-secondary mt-15",children:c.advert_title}),Object(b.jsxs)("span",{className:"address icon-primary f-14 mt-5",children:[Object(b.jsx)("i",{className:"fa fa-map-marker"}),c.building_location.address]}),Object(b.jsxs)("span",{className:"address icon-primary f-14 mt-5",children:["Within - ",c.street_name]}),Object(b.jsxs)("span",{className:"address icon-primary f-14 mt-5",children:["Date Posted - ",Object(b.jsx)(m.a,{children:c.created_at})]}),Object(b.jsxs)("ul",{className:"property-features icon-primary d-table f-14 mt-15",children:[c.amenities_parking_space&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"flaticon-fit-screen"}),"Parking space"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"flaticon-hotel"}),c.no_rooms," Bedrooms"]}),c.no_toilets&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"flaticon-bathtub"}),c.no_toilets," Bathrooms/toilets"]}),c.amenities_balcony&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"flaticon-garage"}),"Balcony"]}),c.amenities_private_toilets&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"flaticon-garage"}),"Private Restrooms"]}),c.amenities_swim&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"flaticon-garage"}),"swimming pool"]})]})]})})})})})})}),Object(b.jsx)("div",{className:"container-fluid wow slideInUp animated",children:Object(b.jsx)("div",{className:"row d-flow-root",children:Object(b.jsx)("div",{className:"product-slider",children:Object(b.jsx)("div",{className:" container tab-content",children:Object(b.jsx)("div",{className:"tab-pane active position-relative",id:"home",role:"tabpanel","aria-labelledby":"home-tab",style:{maxHeight:"300px",overflow:"hidden"},children:Object(b.jsx)(a.Carousel,{autoPlay:!0,showThumbs:!0,centerMode:!0,infiniteLoop:!0,centerSlidePercentage:50,interval:5e3,transitionTime:2e3,children:v.map((function(e,t){return Object(b.jsx)("div",{onClick:function(){return w(t)},className:"col-lg-10 col-12",children:Object(b.jsx)("img",{src:e,alt:""},t)})}))})})})})})}),Object(b.jsxs)("div",{className:"container",children:[p&&Object(b.jsx)(r.a,{src:v,currentIndex:h,onClose:function(){u(0),f(!1)},disableScroll:!1,backgroundStyle:{backgroundColor:"rgba(0,0,0,0.9)"},closeOnClickOutside:!0}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-12 col-lg-8",children:[Object(b.jsxs)("div",{className:"text-area mt-50 mb-50 wow slideInLeft animated",children:[Object(b.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"Description"}),Object(b.jsx)("p",{children:c.advert_description})]}),Object(b.jsxs)("div",{className:"border-top-1-gray py-30 wow slideInRight animated",children:[Object(b.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"Advert Details"}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-12 col-lg-6",children:Object(b.jsxs)("ul",{className:"list-by-tag",children:[Object(b.jsxs)("li",{children:["Bedrooms: ",Object(b.jsx)("span",{children:c.no_rooms})]}),Object(b.jsxs)("li",{children:["Building Type : ",Object(b.jsx)("span",{children:c.Building_type})]}),Object(b.jsxs)("li",{children:["Number of Occupants: ",Object(b.jsx)("span",{children:c.no_occupants})]}),Object(b.jsxs)("li",{children:["Room Size : ",Object(b.jsx)("span",{children:c.rooms_size})]}),Object(b.jsxs)("li",{children:["Minimum Stay : ",Object(b.jsx)("span",{children:c.minimum_stay})]}),Object(b.jsxs)("li",{children:["Maximum Stay : ",Object(b.jsx)("span",{children:c.maximum_stay})]})]})}),Object(b.jsx)("div",{className:"col-md-12 col-lg-6",children:Object(b.jsxs)("ul",{className:"list-by-tag hover-secondery-primary",children:[Object(b.jsxs)("li",{children:["Broker/Agane fee : ",Object(b.jsx)("span",{children:c.broker_agent_fee})]}),Object(b.jsxs)("li",{children:["Toilets/Bedrooms : ",Object(b.jsx)("span",{children:c.no_toilets})]}),Object(b.jsxs)("li",{children:["Furnished Rooms? : ",Object(b.jsx)("span",{children:c.broker_agent_fee})]}),Object(b.jsxs)("li",{children:["Living Rooms : ",Object(b.jsx)("span",{children:c.living_rooms})]})]})})]})]}),Object(b.jsxs)("div",{className:"border-top-1-gray py-30 wow slideInRight animated",children:[Object(b.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"New occupant/tennant preferences"}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-12 col-lg-6",children:Object(b.jsxs)("ul",{className:"list-by-tag",children:[Object(b.jsxs)("li",{children:["Gender:"," ",Object(b.jsx)("span",{children:c.new_room_mate.gender||"Any"})]}),Object(b.jsxs)("li",{children:["Language Spoken:"," ",Object(b.jsx)("span",{children:c.new_room_mate.language_spoken||"Any"})]}),Object(b.jsxs)("li",{children:["Maximum Age:"," ",Object(b.jsx)("span",{children:c.new_room_mate.maximum_age||"Any"})]}),Object(b.jsxs)("li",{children:["Minimum Age:"," ",Object(b.jsx)("span",{children:c.new_room_mate.minimum_age||"Any"})]}),Object(b.jsxs)("li",{children:["Nationality:"," ",Object(b.jsx)("span",{children:c.new_room_mate.nationality||"Any"})]}),Object(b.jsxs)("li",{children:["Occupation:"," ",Object(b.jsx)("span",{children:c.new_room_mate.occupation||"Any"})]}),Object(b.jsxs)("li",{children:["Pets Welcomed?:"," ",Object(b.jsx)("span",{children:c.new_room_mate.pets||"Any"})]}),Object(b.jsxs)("li",{children:["Sexual Orientation:"," ",Object(b.jsx)("span",{children:c.new_room_mate.sexual_orientation||"Any"})]})]})}),Object(b.jsx)("div",{className:"col-md-12 col-lg-6",children:Object(b.jsx)("ul",{className:"list-by-tag hover-secondery-primary"})})]})]}),Object(b.jsxs)("div",{className:"border-top-1-gray py-30 wow slideInLeft animated",children:[Object(b.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"Amenities"}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12 col-lg-12",children:Object(b.jsxs)("ul",{className:"single-property-amenities icon-primary my-20",children:[c.amenities_swim&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"fa fa-check-square","aria-hidden":"true"})," ","Swimming Pool"]}),c.amenities_balcony&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"fa fa-check-square","aria-hidden":"true"})," ","Balcony"]}),c.amenities_entry_disabled&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"fa fa-check-square","aria-hidden":"true"})," ","Easy entry for disabled"]}),c.amenities_internet&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"fa fa-check-square","aria-hidden":"true"})," ","Internet Facility/Wifi"]}),c.amenities_parking_space&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"fa fa-check-square","aria-hidden":"true"})," ","Parking Space"]}),c.amenities_play_ground&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"fa fa-check-square","aria-hidden":"true"})," ","Play Ground"]}),c.amenities_private_toilets&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"fa fa-check-square","aria-hidden":"true"})," ","Private Toilets/Bathroomss"]}),c.amenities_others&&Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"fa fa-check-square","aria-hidden":"true"})," ","Others"]})]})})})]}),Object(b.jsx)("div",{style:{height:"100px"},children:" "})]}),Object(b.jsx)("div",{className:"col-md-12 col-lg-4",children:Object(b.jsxs)("div",{className:"sidebar-widget bg-white mt-50 shadow py-40 px-30 wow slideInUp animated",children:[Object(b.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"Poster's Contact Details"}),Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("div",{className:"contact-agent-image mr-20 float-left",children:Object(b.jsx)("img",{src:"images/team/1.png",className:"rounded-circle",alt:"images"})}),Object(b.jsxs)("div",{className:"align-self-center color-gray",children:[Object(b.jsxs)("h6",{className:"d-block mb-1 w-100 color-secondary",children:[c.posted_by.firstName," ",c.posted_by.lastName]}),Object(b.jsxs)("p",{children:[" ",c.posted_by.mobileNumber]}),Object(b.jsxs)("p",{children:[" ",c.i_am]})]})]})]})})]})]})]}),Object(b.jsx)("footer",{className:"bg-secondary my-80 pb-20",style:{paddingTop:"50px"},children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-sm-4 col-md-4 col-lg-6 wow animated slideInLeft",children:Object(b.jsx)("div",{className:"footer-logo",children:Object(b.jsx)("a",{href:"index.html",children:Object(b.jsx)("img",{className:"nav-logo",src:"images/logo/logo2.png",alt:"Footer Logo"})})})}),Object(b.jsx)("div",{className:"col-sm-8 col-md-8 col-lg-6 wow animated slideInRight",children:Object(b.jsxs)("ul",{className:"social-media-2 border-white large color-white-a float-right",children:[Object(b.jsx)("li",{className:"mr-20 color-white",children:Object(b.jsx)("strong",{children:"Follow Us:"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("i",{className:"fa fa-facebook"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("i",{className:"fa fa-twitter"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("i",{className:"fa fa-behance"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("i",{className:"fa fa-instagram"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("i",{className:"fa fa-linkedin"})})})]})}),Object(b.jsx)("hr",{className:"border-bottom-1 w-100 my-50"}),Object(b.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-3 wow animated slideInUp",children:Object(b.jsxs)("div",{className:"footer-widget color-gray-light mt-sm-30",children:[Object(b.jsx)("h3",{className:"color-white line-bottom pb-15 mb-20",children:"Have Any Question?"}),Object(b.jsx)("div",{className:"widget-content color-primary",children:Object(b.jsxs)("ul",{className:"widget-contact",children:[Object(b.jsxs)("li",{children:["Call",Object(b.jsx)("span",{className:"color-white",children:"+(844) 234-567-800"})]}),Object(b.jsxs)("li",{children:["Email",Object(b.jsx)("span",{className:"color-white",children:"support@yourdomail.com"})]}),Object(b.jsxs)("li",{children:["Free Consultation",Object(b.jsx)("span",{className:"color-white",children:"Fill Out Form"})]})]})})]})}),Object(b.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-3 wow animated slideInDown",children:Object(b.jsxs)("div",{className:"footer-widget color-gray-light mt-sm-30",children:[Object(b.jsx)("h3",{className:"color-white line-bottom pb-15 mb-20",children:"About"}),Object(b.jsx)("div",{className:"widget-content hover-white-primary",children:Object(b.jsxs)("ul",{className:"quick-links",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Company"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Community"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Carrers"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"News"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Contact"})})]})})]})}),Object(b.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-3 wow animated slideInUp",children:Object(b.jsxs)("div",{className:"footer-widget color-gray-light mt-md-30",children:[Object(b.jsx)("h3",{className:"color-white line-bottom pb-15 mb-20",children:"Quick Links"}),Object(b.jsx)("div",{className:"widget-content hover-white-primary",children:Object(b.jsxs)("ul",{className:"quick-links",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"For Rent"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"For Sale"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Commercial"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Agents"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Property Guides"})})]})})]})}),Object(b.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-3 wow animated slideInDown",children:Object(b.jsxs)("div",{className:"footer-widget color-gray-light mt-sm-30",children:[Object(b.jsx)("h3",{className:"color-white line-bottom pb-15 mb-20",children:"Help"}),Object(b.jsx)("div",{className:"widget-content hover-white-primary",children:Object(b.jsxs)("ul",{className:"quick-links",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Payments"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Shipping"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Cancellation"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"FAQ"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Report"})})]})})]})})]})})}),Object(b.jsx)("div",{className:"copyright bg-secondary color-white",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("hr",{className:"border-bottom-1 w-100 m-0"}),Object(b.jsx)("div",{className:"col-md-12 col-lg-12",children:Object(b.jsx)("div",{className:"py-15 text-center",children:"Fresher @ 2020. All Rights Reserved."})})]})})})]})}},32:function(e,t,c){"use strict";c.r(t),c.d(t,"capitalize",(function(){return n.a})),c.d(t,"createChainedFunction",(function(){return s.a})),c.d(t,"createSvgIcon",(function(){return i.a})),c.d(t,"debounce",(function(){return l})),c.d(t,"deprecatedPropType",(function(){return a.a})),c.d(t,"isMuiElement",(function(){return o})),c.d(t,"ownerDocument",(function(){return d.a})),c.d(t,"ownerWindow",(function(){return j})),c.d(t,"requirePropFactory",(function(){return m})),c.d(t,"setRef",(function(){return b.a})),c.d(t,"unsupportedProp",(function(){return h})),c.d(t,"useControlled",(function(){return u})),c.d(t,"useEventCallback",(function(){return x.a})),c.d(t,"useForkRef",(function(){return O.a})),c.d(t,"unstable_useId",(function(){return p})),c.d(t,"useIsFocusVisible",(function(){return f.a}));var n=c(22),s=c(44),i=c(128);function l(e){var t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function n(){for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];var l=this,a=function(){e.apply(l,s)};clearTimeout(t),t=setTimeout(a,c)}return n.clear=function(){clearTimeout(t)},n}var a=c(74),r=c(1);function o(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}var d=c(39);function j(e){return Object(d.a)(e).defaultView||window}function m(e){return function(){return null}}var b=c(43);function h(e,t,c,n,s){return null}function u(e){var t=e.controlled,c=e.default,n=(e.name,e.state,r.useRef(void 0!==t).current),s=r.useState(c),i=s[0],l=s[1];return[n?t:i,r.useCallback((function(e){n||l(e)}),[])]}var x=c(19),O=c(23);function p(e){var t=r.useState(e),c=t[0],n=t[1],s=e||c;return r.useEffect((function(){null==c&&n("mui-".concat(Math.round(1e5*Math.random())))}),[c]),s}var f=c(51)},74:function(e,t,c){"use strict";function n(e,t){return function(){return null}}c.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=6.6197f7f5.chunk.js.map