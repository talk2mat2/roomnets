(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[39],{217:function(e,t,a){"use strict";a.r(t);var c=a(25),s=a.n(c),n=a(8),l=a(33),i=a(32),r=a(1),o=a.n(r),d=a(10),j=a(54),m=a(56),b=a(40),h=a.n(b),u=a(14),x=a(174),O=a.n(x),p=a(0);t.default=function(){var e=o.a.useState([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=o.a.useState(!1),b=Object(i.a)(r,2),x=b[0],g=b[1],f=Object(u.c)((function(e){return e.CountryReducer.country})),N=o.a.useState({total:0,limit:""}),v=Object(i.a)(N,2),y=v[0],w=v[1],D=o.a.useState(0),_=Object(i.a)(D,2),k=_[0],S=_[1],M=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,h.a.get("/api/v1/BlogPostAll/".concat(f)).then((function(e){return g(!1),e.data.userData&&e.data.userData.length>0&&w(Object(n.a)(Object(n.a)({},y),{},{limit:e.data.limit,total:e.data.total})),e.data.userData.length>0&&S(k+1),e})).catch((function(e){return g(!1),e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();o.a.useEffect((function(){return M().then((function(e){console.log(e),e.data.userData&&c(e.data.userData)})).catch((function(e){console.log(e)}))}),[]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j.a,{}),Object(p.jsx)("div",{className:"topPatch",style:{height:"120px"}}),Object(p.jsx)("div",{className:"row justify-content-center mt-40 ",children:Object(p.jsxs)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column"},className:" text-center ",children:[Object(p.jsx)("div",{className:"col-lg-7 col-8",children:Object(p.jsx)("img",{className:"nav-logo",src:"/images/logo/logo2.png",alt:"logo"})}),Object(p.jsx)("br",{}),Object(p.jsx)("h5",{children:"Let's Find you a roommate or room to rent"})]})}),Object(p.jsx)("section",{className:"my-40 border-top-1-gray",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[a.length>0?a&&a.length>0&&a.map((function(e,t){return Object(p.jsx)("div",{style:{whiteSpace:"wrap",overflow:"hidden"},className:"col-md-12 col-lg-4 wow slideInUp animated",children:Object(p.jsxs)("div",{className:"post-thumbnail hover-secondery-primary",children:[Object(p.jsx)("div",{className:"post-img overflow-hidden",children:Object(p.jsx)("img",{src:e.imagUri||"/images/blog/default.jpg",alt:"Image"})}),Object(p.jsx)("div",{className:"post-meta icon-primary color-secondary-a px-20 py-10 bg-gray",children:Object(p.jsxs)("ul",{className:"post-info list-style-1 d-flex color-secondary",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fa fa-user"})," ",e.postedBy]}),Object(p.jsx)("li",{children:Object(p.jsxs)(d.b,{className:"post-title mb-15 ",to:{pathname:"/blogDetails/".concat(e._id),state:e._id},children:[Object(p.jsx)("i",{className:"fa fa-comments-o"}),e.comments.length]})})]})}),Object(p.jsxs)("div",{className:"post-content mt-20 color-secondary color-secondary-a",children:[Object(p.jsxs)("div",{className:"post-date w-25 float-left bg-gray mr-20 text-center",children:[Object(p.jsxs)("div",{className:"py-10",children:[Object(p.jsxs)("span",{className:"d-block",children:[" ",Object(p.jsx)(O.a,{format:"DD",children:e.created_at})]})," ",Object(p.jsx)(O.a,{format:"MMMM",children:e.created_at})]}),Object(p.jsx)("div",{className:"post-love py-5 bg-primary",children:Object(p.jsxs)(d.b,{className:"post-title mb-15 ",to:{pathname:"/blogDetails/".concat(e._id),state:e._id},children:[Object(p.jsx)("i",{className:"fa fa-heart","aria-hidden":"true"})," ",e.likes.length]})})]}),Object(p.jsxs)("div",{className:"text-area d-table",children:[Object(p.jsx)(d.b,{className:"post-title mb-15 ",to:{pathname:"/blogDetails/".concat(e._id),state:e._id},children:Object(p.jsx)("h5",{children:e.title})}),Object(p.jsx)("p",{children:String(e.body).slice(0,100)}),Object(p.jsx)(d.b,{className:"btn-more mt-15",to:{pathname:"/blogDetails/".concat(e._id),state:e._id},children:"Read More"})]})]})]})})})):x?Object(p.jsx)("h3",{className:"text-center",children:"Loading..."}):Object(p.jsx)("h5",{children:":-) Empty, No post yet !"}),Object(p.jsx)("div",{className:"col-lg-12 wow slideInDown animated",children:Object(p.jsx)("div",{className:"mx-auto d-table",children:Object(p.jsx)("ul",{className:"pagination mt-50",children:Object(p.jsx)("li",{className:"page-item",children:y.limit*k<y.total?Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){g(!0),c([]),setTimeout(Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M().then((function(e){console.log(e),e.data.userData&&c(e.data.userData)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),1e3)},className:"btn page-link",children:"Next Page"})}):null})})})})]})})}),Object(p.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=39.298e564f.chunk.js.map