(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[60],{307:function(e,t,a){"use strict";a.r(t);var r=a(7),c=a(13),n=a.n(c),s=a(25),i=a(207),l=a(23),o=a(1),d=a.n(o),j=a(55),u=a(296),b=a(5),m=a(15),p=a(28),h=a.n(p),f=a(215),g=a(197),x=a.n(g),O=a(56),v=a(0);t.default=function(){var e=Object(b.f)(),t=d.a.useState([]),a=Object(l.a)(t,2),c=a[0],o=a[1],p=d.a.useState(!1),g=Object(l.a)(p,2),y=g[0],N=g[1],w=d.a.useState([]),k=Object(l.a)(w,2),A=k[0],S=k[1],_=Object(m.c)((function(e){return e.PostRommsAddReducer})),U=Object(m.c)((function(e){return e.user.currentUser})),R=U&&U.token,C=_.add_type||"",P=d.a.useState({advert_title:"",advert_description:""}),D=Object(l.a)(P,2),z=D[0],I=D[1];var J=function(){var e=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=z.advert_description,a=z.advert_title,r=new Array,a||r.push("Advert title can not be blank"),t||r.push("Advert body can not be blank"),A.length<1&&r.push("You must select at least one image or more"),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var t=Object(s.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J().then(function(){var t=Object(s.a)(n.a.mark((function t(a){var c,s,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a.length>0)){t.next=5;break}o(a),window.scrollTo(0,150),t.next=12;break;case 5:for(c=Object(r.a)(Object(r.a)({},_),z),(s=new FormData).append("userData",JSON.stringify(c)),i=0;i<A.length;i++)s.append("file",A[i].Uri);return N(!0),t.next=12,h()({url:"/Api/v1/PostAddRoms",method:"POST",data:s,headers:{"Content-Type":"multipart/form-data",Authorization:R}}).then((function(t){N(!1),t.data.status&&("PREMIUM"===C?e.replace("/Upgrade-room/".concat(t.data.usadData._id)):e.replace("/process-rooms-success"))})).catch((function(e){console.log(e),N(!1),alert("An error occured")}));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsx)(j.a,{}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(v.jsx)("div",{className:"poststep pricing my-80",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row justify-content-center",children:[Object(v.jsx)("div",{className:"col-lg-12 wow animated slideInUp",children:Object(v.jsxs)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:[Object(v.jsx)("h2",{className:"title mb-20 color-primary",children:"Advertise your room"}),Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsx)("div",{className:"col-lg-7 text-left",children:c.length>0?c.map((function(e){return Object(v.jsxs)("p",{className:"error-card alert-danger",children:[Object(v.jsx)(x.a,{fontSize:"small",style:{marginRight:"4px"}}),e]})})):null})})]})}),Object(v.jsx)("div",{className:"col-lg-8 myform",children:Object(v.jsx)("div",{className:"submit-property bg-light",children:Object(v.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(v.jsxs)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:[Object(v.jsx)("div",{className:"text-right",children:Object(v.jsx)("p",{children:"4 of 4"})}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"form-group col-lg-8",children:[Object(v.jsx)("label",{children:"Advert title"}),Object(v.jsx)("input",{className:"form-control bg-gray",type:"text",name:"property-id",value:z.advert_title,onChange:function(e){return I(Object(r.a)(Object(r.a)({},z),{},{advert_title:e.target.value}))}})]}),Object(v.jsxs)("div",{className:"form-group col-lg-12",children:[Object(v.jsx)("label",{children:"Advert Description"}),Object(v.jsx)("textarea",{onChange:function(e){return I(Object(r.a)(Object(r.a)({},z),{},{advert_description:e.target.value}))},value:z.advert_description,className:"form-control bg-gray",rows:"7"})]}),Object(v.jsx)("div",{className:"row my-20",children:A.map((function(e){return Object(v.jsx)("div",{className:"col-3",style:{margin:"10px"},children:Object(v.jsx)("img",{src:e.file,alt:"preview",style:{maxHeight:"80px",display:"block",margin:"10px"}})})}))}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"form-group col-lg-10",children:A.length<5?Object(v.jsxs)(v.Fragment,{children:[" ",Object(v.jsx)("label",{children:"Select -Images"}),Object(v.jsxs)(u.a,{className:"btn btn-primary",variant:"contained",component:"label",children:[Object(v.jsx)("small",{style:{fontSize:"8px"},children:"Select images"}),Object(v.jsx)("input",{type:"file",hidden:!0,onChange:function(e){if("image/png"!==e.target.files[0].type&&"image/jpg"!==e.target.files[0].type&&"image/jpeg"!==e.target.files[0].type)return alert("select a valid image format");e.target.files[0]&&S([].concat(Object(i.a)(A),[{file:URL.createObjectURL(e.target.files[0]),Uri:e.target.files[0]}]))},accept:"image/x-png,image/jpeg"})]})]}):null}),Object(v.jsxs)("div",{className:"col-lg-12",children:[Object(v.jsx)("button",{onClick:function(){return e.goBack()},className:"btn btn-primary",children:"Back"}),Object(v.jsx)("button",{onClick:T,disabled:y,className:"btn btn-primary float-right",children:y?Object(v.jsx)(f.a,{size:13,color:"#fff"}):"Post Add"})]})]})]})})})})]})})})]}),Object(v.jsx)(O.a,{})]})}}}]);
//# sourceMappingURL=60.89a33706.chunk.js.map