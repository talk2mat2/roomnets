(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[21],{161:function(e,t,a){"use strict";var r=a(2),s=a(3),c=a(1),n=(a(5),a(7)),o=a(12),i=a(22),l=44,m=c.forwardRef((function(e,t){var a=e.classes,o=e.className,m=e.color,d=void 0===m?"primary":m,u=e.disableShrink,b=void 0!==u&&u,p=e.size,j=void 0===p?40:p,f=e.style,h=e.thickness,O=void 0===h?3.6:h,x=e.value,g=void 0===x?0:x,v=e.variant,y=void 0===v?"indeterminate":v,N=Object(s.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},k={},D={};if("determinate"===y||"static"===y){var S=2*Math.PI*((l-O)/2);w.strokeDasharray=S.toFixed(3),D["aria-valuenow"]=Math.round(g),w.strokeDashoffset="".concat(((100-g)/100*S).toFixed(3),"px"),k.transform="rotate(-90deg)"}return c.createElement("div",Object(r.a)({className:Object(n.a)(a.root,o,"inherit"!==d&&a["color".concat(Object(i.a)(d))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[y]),style:Object(r.a)({width:j,height:j},k,f),ref:t,role:"progressbar"},D,N),c.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},c.createElement("circle",{className:Object(n.a)(a.circle,b&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[y]),style:w,cx:l,cy:l,r:(l-O)/2,fill:"none",strokeWidth:O})))}));t.a=Object(o.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(m)},191:function(e,t,a){"use strict";a.r(t);var r=a(6),s=a(26),c=a.n(s),n=a(33),o=a(24),i=a(1),l=a.n(i),m=a(50),d=a(4),u=a(19),b=a(40),p=a.n(b),j=a(161),f=a(41),h=a(0);t.default=function(){var e=Object(d.f)(),t=Object(i.useState)(!1),a=Object(o.a)(t,2),s=a[0],b=a[1],O=function(){return e.goBack()},x=Object(u.b)(),g=Object(i.useState)(!1),v=Object(o.a)(g,2),y=(v[0],v[1]),N=Object(i.useState)(!1),w=Object(o.a)(N,2),k=w[0],D=w[1],S=Object(u.c)((function(e){return e.PostRommsAddReducer})),C=Object(u.c)((function(e){return e.user.currentUser})),P=l.a.useState({password:"",email:S.email}),E=Object(o.a)(P,2),R=E[0],Y=E[1],A=l.a.useState({email:S.email,password:"",firstName:"",lastName:"",password2:"",Gender:"",mobileNumber:""}),B=Object(o.a)(A,2),I=B[0],M=B[1],z=function(){var t=Object(n.a)(c.a.mark((function t(){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=R.email,r=R.password,R.email&&R.password){t.next=3;break}return t.abrupt("return",alert("All fields are compulsory"));case 3:return y(!0),t.next=6,p.a.post("/api/v1/login",{Email:a,Password:r}).then((function(t){y(!1),console.log(t.data),x(Object(f.a)(t.data.userData)),e.push("/process-rooms-advert4")})).catch((function(e){y(!1),e.response&&e.response.data.message?alert(e.response.data.message):alert("An error occured, make sure you have a working network"),console.log(e)}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(){return console.log(I),I.password&&I.password2&&I.firstName&&I.lastName&&I.email?I.password!=I.password2?alert("both password do not match"):void U():alert("all fields are compulsory")},U=function(){var e=Object(n.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,p.a.post("/api/v1/Register",I).then((function(e){b(!1),console.log(e.data),x(Object(f.a)(e.data.userData))})).catch((function(e){b(!1),e.response.data&&alert(e.response.data.message),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(n.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/v1/isUserRegistered/".concat(S.email)).then((function(e){console.log(e.data),e.data.status&&D(!0)})).catch((function(e){e.response.data.message?!e.response.data.status&&D(!1):console.log("error occured")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){C?e.push("/process-rooms-advert4"):J()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(m.a,{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(h.jsx)("div",{className:"poststep pricing my-80",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row justify-content-center",children:[Object(h.jsx)("div",{className:"col-lg-12 wow animated slideInUp",children:Object(h.jsx)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:Object(h.jsx)("h2",{className:"title mb-20 color-primary",children:"Advertise your room"})})}),k?Object(h.jsx)("div",{className:"col-lg-8 myform",children:Object(h.jsx)("div",{className:"submit-property bg-light",children:Object(h.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(h.jsxs)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:[Object(h.jsx)("div",{className:"text-center",children:Object(h.jsxs)("h5",{className:"color-primary",children:["Welcome ",S.email,", login to contnue"]})}),Object(h.jsxs)("div",{className:"row my-40 justify-content-center",children:[Object(h.jsxs)("div",{className:"form-group col-lg-8",children:[Object(h.jsx)("label",{children:"Your- Email"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"text",name:"property-id",disabled:!0,value:S.email})]}),Object(h.jsxs)("div",{className:"form-group col-lg-8",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"password",name:"property-id",value:R.password,onChange:function(e){return Y(Object(r.a)(Object(r.a)({},R),{},{password:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"col-lg-12 my-80",children:[Object(h.jsx)("button",{onClick:O,className:"btn btn-primary",children:"Back"}),Object(h.jsx)("button",{onClick:z,className:"btn btn-primary float-right",children:"Proceed"})]})]})]})})})}):Object(h.jsx)("div",{className:"col-lg-8 myform",children:Object(h.jsx)("div",{className:"submit-property bg-light",children:Object(h.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(h.jsxs)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:[Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("h5",{className:"color-primary",children:"You Are New to RoomNets"})}),Object(h.jsxs)("div",{className:"row my-40",children:[Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsx)("label",{children:"Your- Email"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"text",name:"property-id",disabled:!0,value:S.email})]}),Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsx)("label",{children:"Set Password"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"password",name:"property-id",value:I.password,onChange:function(e){return M(Object(r.a)(Object(r.a)({},I),{},{password:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsx)("label",{children:"Confirm Password"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"password",name:"property-id",value:I.password2,onChange:function(e){return M(Object(r.a)(Object(r.a)({},I),{},{password2:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsx)("label",{children:"Your Firstname"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"text",name:"property-id",value:I.firstName,onChange:function(e){return M(Object(r.a)(Object(r.a)({},I),{},{firstName:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group col-lg-6",children:[Object(h.jsx)("label",{children:"Your Lastname"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"text",name:"property-id",value:I.lastName,onChange:function(e){return M(Object(r.a)(Object(r.a)({},I),{},{lastName:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group col-lg-5",children:[Object(h.jsx)("label",{children:"Your-Mobile Number"}),Object(h.jsx)("input",{className:"form-control bg-gray",type:"number",name:"property-id",value:I.mobileNumber,onChange:function(e){return M(Object(r.a)(Object(r.a)({},I),{},{mobileNumber:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"col-lg-12",children:[Object(h.jsx)("button",{onClick:O,className:"btn btn-primary",children:"Back"}),Object(h.jsx)("button",{onClick:F,className:"btn btn-primary float-right",children:s?Object(h.jsx)(j.a,{size:16,color:"#fff"}):"Proceed"})]})]})]})})})})]})})})]})]})}}}]);
//# sourceMappingURL=21.c08c78f1.chunk.js.map