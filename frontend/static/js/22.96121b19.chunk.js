(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[22],{169:function(e,t,a){"use strict";var r=a(2),s=a(3),c=a(1),n=(a(5),a(7)),o=a(15),i=a(22),l=44,m=c.forwardRef((function(e,t){var a=e.classes,o=e.className,m=e.color,d=void 0===m?"primary":m,u=e.disableShrink,b=void 0!==u&&u,j=e.size,p=void 0===j?40:j,f=e.style,h=e.thickness,O=void 0===h?3.6:h,x=e.value,g=void 0===x?0:x,v=e.variant,y=void 0===v?"indeterminate":v,N=Object(s.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},k={},D={};if("determinate"===y||"static"===y){var S=2*Math.PI*((l-O)/2);w.strokeDasharray=S.toFixed(3),D["aria-valuenow"]=Math.round(g),w.strokeDashoffset="".concat(((100-g)/100*S).toFixed(3),"px"),k.transform="rotate(-90deg)"}return c.createElement("div",Object(r.a)({className:Object(n.a)(a.root,o,"inherit"!==d&&a["color".concat(Object(i.a)(d))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[y]),style:Object(r.a)({width:p,height:p},k,f),ref:t,role:"progressbar"},D,N),c.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},c.createElement("circle",{className:Object(n.a)(a.circle,b&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[y]),style:w,cx:l,cy:l,r:(l-O)/2,fill:"none",strokeWidth:O})))}));t.a=Object(o.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(m)},185:function(e,t,a){"use strict";a.r(t);var r=a(6),s=a(26),c=a.n(s),n=a(33),o=a(23),i=a(1),l=a.n(i),m=a(50),d=a(4),u=a(14),b=a(40),j=a.n(b),p=a(169),f=a(41),h=a(52),O=a(0);t.default=function(){var e=Object(d.f)(),t=Object(i.useState)(!1),a=Object(o.a)(t,2),s=a[0],b=a[1],x=function(){return e.goBack()},g=Object(u.b)(),v=Object(i.useState)(!1),y=Object(o.a)(v,2),N=(y[0],y[1]),w=Object(i.useState)(!1),k=Object(o.a)(w,2),D=k[0],S=k[1],C=Object(u.c)((function(e){return e.NeedRoomReducer})),P=Object(u.c)((function(e){return e.user.currentUser})),E=l.a.useState({password:"",email:C.email}),R=Object(o.a)(E,2),Y=R[0],A=R[1],B=l.a.useState({email:C.email,password:"",firstName:"",lastName:"",password2:"",Gender:"",mobileNumber:""}),I=Object(o.a)(B,2),M=I[0],z=I[1],F=function(){var t=Object(n.a)(c.a.mark((function t(){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=Y.email,r=Y.password,Y.email&&Y.password){t.next=3;break}return t.abrupt("return",alert("All fields are compulsory"));case 3:return N(!0),t.next=6,j.a.post("/api/v1/login",{Email:a,Password:r}).then((function(e){N(!1),console.log(e.data),g(Object(f.a)(e.data.userData))})).then((function(){e.push("/process-needrooms-advert3")})).catch((function(e){N(!1),e.response&&e.response.data.message?alert(e.response.data.message):alert("An error occured, make sure you have a working network"),console.log(e)}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=function(){return console.log(M),M.password&&M.password2&&M.firstName&&M.lastName&&M.email?M.password!=M.password2?alert("both password do not match"):void J():alert("all fields are compulsory")},J=function(){var e=Object(n.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,j.a.post("/api/v1/Register",M).then((function(e){b(!1),console.log(e.data),g(Object(f.a)(e.data.userData))})).catch((function(e){b(!1),e.response.data&&alert(e.response.data.message),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(n.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/v1/isUserRegistered/".concat(C.email)).then((function(e){console.log(e.data),e.data.status&&S(!0)})).catch((function(e){e.response.data.message?!e.response.data.status&&S(!1):console.log("error occured")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){P?e.push("/process-needrooms-advert3"):W()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(m.a,{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(O.jsx)("div",{className:"poststep pricing my-80",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row justify-content-center",children:[Object(O.jsx)("div",{className:"col-lg-12 wow animated slideInUp",children:Object(O.jsx)("div",{className:"main-title w-75 mx-auto d-table text-center mb-30",children:Object(O.jsx)("h2",{className:"title mb-20 color-primary",children:"Advertise your room"})})}),D?Object(O.jsx)("div",{className:"col-lg-8 myform",children:Object(O.jsx)("div",{className:"submit-property bg-light",children:Object(O.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(O.jsxs)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:[Object(O.jsx)("div",{className:"text-center",children:Object(O.jsxs)("h5",{className:"color-primary",children:["Welcome ",C.email,", login to contnue"]})}),Object(O.jsxs)("div",{className:"row my-40 justify-content-center",children:[Object(O.jsxs)("div",{className:"form-group col-lg-8",children:[Object(O.jsx)("label",{children:"Your- Email"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"text",name:"property-id",disabled:!0,value:C.email})]}),Object(O.jsxs)("div",{className:"form-group col-lg-8",children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"password",name:"property-id",value:Y.password,onChange:function(e){return A(Object(r.a)(Object(r.a)({},Y),{},{password:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"col-lg-12 my-80",children:[Object(O.jsx)("button",{onClick:x,className:"btn btn-primary",children:"Back"}),Object(O.jsx)("button",{onClick:F,className:"btn btn-primary float-right",children:"Proceed"})]})]})]})})})}):Object(O.jsx)("div",{className:"col-lg-8 myform",children:Object(O.jsx)("div",{className:"submit-property bg-light",children:Object(O.jsx)("form",{className:"property-submit-form",onSubmit:function(e){return e.preventDefault()},children:Object(O.jsxs)("div",{className:"property-info mt-30 bg-white py-40 px-30",children:[Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)("h5",{className:"color-primary",children:"You Are New to RoomNets"})}),Object(O.jsxs)("div",{className:"row my-40",children:[Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Your- Email"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"text",name:"property-id",disabled:!0,value:C.email})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Set Password"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"password",name:"property-id",value:M.password,onChange:function(e){return z(Object(r.a)(Object(r.a)({},M),{},{password:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Confirm Password"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"password",name:"property-id",value:M.password2,onChange:function(e){return z(Object(r.a)(Object(r.a)({},M),{},{password2:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Your Firstname"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"text",name:"property-id",value:M.firstName,onChange:function(e){return z(Object(r.a)(Object(r.a)({},M),{},{firstName:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-6",children:[Object(O.jsx)("label",{children:"Your Lastname"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"text",name:"property-id",value:M.lastName,onChange:function(e){return z(Object(r.a)(Object(r.a)({},M),{},{lastName:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"form-group col-lg-5",children:[Object(O.jsx)("label",{children:"Your-Mobile Number"}),Object(O.jsx)("input",{className:"form-control bg-gray",type:"number",name:"property-id",value:M.mobileNumber,onChange:function(e){return z(Object(r.a)(Object(r.a)({},M),{},{mobileNumber:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"col-lg-12",children:[Object(O.jsx)("button",{onClick:x,className:"btn btn-primary",children:"Back"}),Object(O.jsx)("button",{onClick:U,className:"btn btn-primary float-right",children:s?Object(O.jsx)(p.a,{size:16,color:"#fff"}):"Proceed"})]})]})]})})})})]})})})]}),Object(O.jsx)(h.a,{})]})}}}]);
//# sourceMappingURL=22.96121b19.chunk.js.map