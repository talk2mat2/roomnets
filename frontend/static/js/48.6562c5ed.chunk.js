(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[48],{316:function(e,t,a){"use strict";a.r(t);var c=a(7),s=a(18),n=a.n(s),r=a(27),l=a(26),i=a(1),o=a.n(i),d=a(10),j=a(55),b=a(56),u=a(28),m=a.n(u),h=a(14),p=a(206),x=a.n(p),O=a(59),g=a(58),f=a(0);t.default=function(){var e=o.a.useState([]),t=Object(l.a)(e,2),a=t[0],s=t[1],i=o.a.useState(!1),u=Object(l.a)(i,2),p=u[0],N=u[1],v=Object(h.c)((function(e){return e.CountryReducer.country})),y=o.a.useState({Banners:[],googleAdsScript:""}),w=Object(l.a)(y,2),D=w[0],_=w[1],k=o.a.useState({total:0,limit:""}),S=Object(l.a)(k,2),M=S[0],I=S[1],A=o.a.useState(0),B=Object(l.a)(A,2),E=B[0],P=B[1],C=function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/v1/fetchHomepageModels").then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();o.a.useEffect((function(){return C().then((function(e){_(Object(c.a)({},e.data.userData))})).catch((function(e){return console.log(e)}))}),[]);var F=function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,m.a.get("/api/v1/BlogPostAll/".concat(v)).then((function(e){return N(!1),e.data.userData&&e.data.userData.length>0&&I(Object(c.a)(Object(c.a)({},M),{},{limit:e.data.limit,total:e.data.total})),e.data.userData.length>0&&P(E+1),e})).catch((function(e){return N(!1),e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();o.a.useEffect((function(){return F().then((function(e){console.log(e),e.data.userData&&s(e.data.userData)})).catch((function(e){console.log(e)}))}),[]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g.a,{children:Object(O.a)(D.googleAdsScript)}),Object(f.jsx)(j.a,{}),Object(f.jsx)("div",{className:"topPatch",style:{height:"120px"}}),Object(f.jsx)("div",{className:"row justify-content-center mt-40 ",children:Object(f.jsxs)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column"},className:" text-center ",children:[Object(f.jsx)("div",{className:"col-lg-7 col-8",children:Object(f.jsx)("img",{className:"nav-logo",src:"/images/logo/logo2.png",alt:"logo"})}),Object(f.jsx)("br",{}),Object(f.jsx)("h5",{children:"Let's Find you a roommate or room to rent"})]})}),Object(f.jsx)("section",{className:"my-40 border-top-1-gray",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[a.length>0?a&&a.length>0&&a.map((function(e,t){return Object(f.jsx)("div",{style:{whiteSpace:"wrap",overflow:"hidden"},className:"col-md-12 col-lg-4 wow slideInUp animated",children:Object(f.jsxs)("div",{className:"post-thumbnail hover-secondery-primary",children:[Object(f.jsx)("div",{className:"post-img overflow-hidden",children:Object(f.jsx)("img",{src:e.imagUri||"/images/blog/default.jpg",alt:"Image"})}),Object(f.jsx)("div",{className:"post-meta icon-primary color-secondary-a px-20 py-10 bg-gray",children:Object(f.jsxs)("ul",{className:"post-info list-style-1 d-flex color-secondary",children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("i",{className:"fa fa-user"})," ",e.postedBy]}),Object(f.jsx)("li",{children:Object(f.jsxs)(d.b,{className:"post-title mb-15 ",to:{pathname:"/blogDetails/".concat(e._id),state:e._id},children:[Object(f.jsx)("i",{className:"fa fa-comments-o"}),e.comments.length]})})]})}),Object(f.jsxs)("div",{className:"post-content mt-20 color-secondary color-secondary-a",children:[Object(f.jsxs)("div",{className:"post-date w-25 float-left bg-gray mr-20 text-center",children:[Object(f.jsxs)("div",{className:"py-10",children:[Object(f.jsxs)("span",{className:"d-block",children:[" ",Object(f.jsx)(x.a,{format:"DD",children:e.created_at})]})," ",Object(f.jsx)(x.a,{format:"MMMM",children:e.created_at})]}),Object(f.jsx)("div",{className:"post-love py-5 bg-primary",children:Object(f.jsxs)(d.b,{className:"post-title mb-15 ",to:{pathname:"/blogDetails/".concat(e._id),state:e._id},children:[Object(f.jsx)("i",{className:"fa fa-heart","aria-hidden":"true"})," ",e.likes.length]})})]}),Object(f.jsxs)("div",{className:"text-area d-table",children:[Object(f.jsx)(d.b,{className:"post-title mb-15 ",to:{pathname:"/blogDetails/".concat(e._id),state:e._id},children:Object(f.jsx)("h5",{children:e.title})}),Object(f.jsx)("p",{children:String(e.body).slice(0,100)}),Object(f.jsx)(d.b,{className:"btn-more mt-15",to:{pathname:"/blogDetails/".concat(e._id),state:e._id},children:"Read More"})]})]})]})})})):p?Object(f.jsx)("h3",{className:"text-center",children:"Loading..."}):Object(f.jsx)("h5",{children:":-) Empty, No post yet !"}),Object(f.jsx)("div",{className:"col-lg-12 wow slideInDown animated",children:Object(f.jsx)("div",{className:"mx-auto d-table",children:Object(f.jsx)("ul",{className:"pagination mt-50",children:Object(f.jsx)("li",{className:"page-item",children:M.limit*E<M.total?Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){N(!0),s([]),setTimeout(Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F().then((function(e){console.log(e),e.data.userData&&s(e.data.userData)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),1e3)},className:"btn page-link",children:"Next Page"})}):null})})})})]})})}),Object(f.jsx)(b.a,{})]})}}}]);
//# sourceMappingURL=48.6562c5ed.chunk.js.map