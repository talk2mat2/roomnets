(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[51],{243:function(e,t,a){"use strict";a.r(t);var s=a(31),c=a(1),n=a.n(c),r=a(54),i=a(4),l=a(173),o=a.n(l),j=a(14),d=a(40),b=a.n(d),u=a(55),h=a(25),O=a.n(h),m=a(8),x=a(32),p=a(10),g=a(0),f=function(){var e=n.a.useState([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=n.a.useState(!1),i=Object(s.a)(r,2),l=i[0],d=i[1],u=n.a.useState(0),h=Object(s.a)(u,2),f=h[0],v=h[1],N=n.a.useState({total:0,limit:""}),y=Object(s.a)(N,2),D=y[0],w=y[1],S=Object(j.c)((function(e){return e.user.currentUser})),k=S&&S.token,M=function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,b.a.get("/api/v1/FetchReceivedMessages?pageNo=".concat(f),{headers:{Authorization:k}}).then((function(e){d(!1),console.log(e.data),e.data.userData&&c(e.data.userData),e.data.userData&&e.data.userData.length>0&&w(Object(m.a)(Object(m.a)({},D),{},{limit:e.data.limit,total:e.data.total})),e.data.userData.length>0&&v(f+1)})).catch((function(e){d(!1),e.response&&e.response.data.message||console.log("error occured")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){M()}),[]),Object(g.jsx)("div",{children:Object(g.jsx)("ul",{className:"msg-list col-lg-11",children:l?Object(g.jsx)("p",{children:"Loading..."}):a.length>0?a.length>0&&a.map((function(e){return Object(g.jsx)(p.b,{className:"messageLinks",to:{pathname:"/Message_details",state:e},children:Object(g.jsxs)("li",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("i",{className:"flaticon-interior-design icon-msg color-primary"}),e.sender.firstName]})," ",Object(g.jsxs)("span",{children:[e.body.slice(0,40),"..."]}),Object(g.jsx)("span",{children:Object(g.jsx)(o.a,{format:"DD/MM/YYYY",children:e.createdAt})})]})})})):Object(g.jsx)("p",{children:"Empty......"})})})},v=function(){var e=n.a.useState([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=n.a.useState(!1),i=Object(s.a)(r,2),l=i[0],d=i[1],u=n.a.useState(0),h=Object(s.a)(u,2),f=h[0],v=h[1],N=n.a.useState({total:0,limit:""}),y=Object(s.a)(N,2),D=y[0],w=y[1],S=Object(j.c)((function(e){return e.user.currentUser})),k=S&&S.token,M=function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,b.a.get("/api/v1/FetchSentMessages?pageNo=".concat(f),{headers:{Authorization:k}}).then((function(e){d(!1),console.log(e.data),e.data.userData&&c(e.data.userData),e.data.userData&&e.data.userData.length>0&&w(Object(m.a)(Object(m.a)({},D),{},{limit:e.data.limit,total:e.data.total})),e.data.userData.length>0&&v(f+1)})).catch((function(e){d(!1),e.response&&e.response.data.message||console.log("error occured")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){M()}),[]),Object(g.jsx)("div",{children:Object(g.jsx)("ul",{className:"msg-list col-lg-11",children:l?Object(g.jsx)("p",{children:"Loading..."}):a.length>0?a.length>0&&a.map((function(e){return Object(g.jsx)(p.b,{className:"messageLinks",to:{pathname:"/Message_details_sent",state:e},children:Object(g.jsxs)("li",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("i",{className:"flaticon-interior-design icon-msg color-primary"}),e.sender.firstName]})," ",Object(g.jsxs)("span",{children:[e.body.slice(0,100),"..."]}),Object(g.jsx)("span",{children:Object(g.jsx)(o.a,{format:"DD/MM/YYYY",children:e.createdAt})})]})})})):Object(g.jsx)("p",{children:"Empty......"})})})},N=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)("ul",{className:"msg-list col-lg-11",children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{children:"Peter jones"})," ",Object(g.jsx)("span",{children:"Thi is spome title of a message"})," ",Object(g.jsx)("span",{children:"11/03/23"})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{children:"Peter jones"})," ",Object(g.jsx)("span",{children:"Thi is spome title of a message"})," ",Object(g.jsx)("span",{children:"11/03/23"})]})]})})},y=void 0;t.default=function(){Object(i.f)(),Object(j.c)((function(e){return e.CountryReducer.country}));var e=n.a.useState({aboutUs:[],Banners:[]}),t=Object(s.a)(e,2),a=(t[0],t[1],n.a.useState(1)),c=Object(s.a)(a,2),l=c[0],o=c[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)(r.a,{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"topPatch",style:{height:"80px"}}),Object(g.jsx)("div",{className:"poststep pricing my-80",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h3",{className:"color-secondary line-bottom pb-15 mb-20",children:"My messages"}),Object(g.jsxs)("div",{className:"col-md-12 col-lg-12 bg-white  px-60 wow animated slideInUp",children:[Object(g.jsxs)("span",{className:"color-secondary d-flex flex-row",children:[Object(g.jsx)("div",{onClick:o.bind(y,1),className:"col-lg-2 message-selectors ".concat(1===l&&"active"),children:Object(g.jsx)("h6",{children:"Inbox"})}),Object(g.jsx)("div",{onClick:o.bind(y,2),className:"col-lg-2 message-selectors ".concat(2===l&&"active"),children:Object(g.jsx)("h6",{children:"Sent"})})]}),Object(g.jsx)("section",{className:"messageContainer mt-5",children:1===l?Object(g.jsx)(f,{}):3===l?Object(g.jsx)(N,{}):2===l?Object(g.jsx)(v,{}):null})]})]})})]}),Object(g.jsx)(u.a,{})]})}}}]);
//# sourceMappingURL=51.3a9e1d0b.chunk.js.map