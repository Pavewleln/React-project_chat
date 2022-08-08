/*! For license information please see 765.7a5f94e8.chunk.js.LICENSE.txt */
(self.webpackChunkreact_project_1=self.webpackChunkreact_project_1||[]).push([[765],{1765:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return S}});var r=n(5671),t=n(3144),o=n(9340),l=n(2882),i=n(2791),a=n(1413),c={h_title:"Users_h_title__XcHRB",pagination:"Users_pagination__mAIA-",checked:"Users_checked__R98k-",users:"Users_users__pw8ku",photo:"Users_photo__ojk3r",user:"Users_user__HY7b2",title:"Users_title__SXIOK",description:"Users_description__RLkHj",location:"Users_location__A6hs9",follow:"Users_follow__6LQs2",unfollow:"Users_unfollow__SgVWE",name:"Users_name__dQJBk",next:"Users_next__3AyPF",prev:"Users_prev__vqlzq"},u=n(3504),h=n(4163),p=n(885),A=n(1694),g=n.n(A),d=n(184);var f=function(e){for(var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,n=Math.ceil(e.totalUsersCount/e.pageSize),r=[],t=1;t<=n;t++)r.push(t);var o=Math.ceil(n/s),l=(0,i.useState)(1),a=(0,p.Z)(l,2),u=a[0],h=a[1],A=(u-1)*s+1,f=u*s;return(0,d.jsxs)("div",{className:c.pagination,children:[u>1&&(0,d.jsx)("button",{className:c.prev,onClick:function(){h(u-1)},children:"PREV"}),r.filter((function(e){return e>=A&&e<=f})).map((function(s){return(0,d.jsx)("span",{className:g()(e.currentPage===s&&c.checked),onClick:function(n){e.onPageChanged(s)},children:s},s)})),o>u&&(0,d.jsx)("button",{className:c.next,onClick:function(){h(u+1)},children:"NEXT"})]})},k=function(e){return(0,d.jsxs)("div",{className:c.users,children:[(0,d.jsx)("h3",{className:c.h_title,children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0441\u0435\u0442\u0438"}),(0,d.jsx)(f,(0,a.Z)({},e)),e.isFetching?(0,d.jsx)(h.Z,{}):e.users.map((function(s){return(0,d.jsxs)("div",{className:c.user,children:[(0,d.jsxs)("div",{className:c.title,children:[(0,d.jsx)("div",{className:c.photo,children:(0,d.jsx)(u.OL,{to:"/profile/"+s.id,children:(0,d.jsx)("img",{src:null!=s.photos.small?s.photos.small:"data:image/png;base64,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",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})})}),(0,d.jsx)("div",{className:c.following,children:s.followed?(0,d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===s.id})),onClick:function(){e.unfollow(s.id)},className:c.unfollow,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0437\u0435\u0439"}):(0,d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===s.id})),onClick:function(){e.follow(s.id)},className:c.follow,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f"})})]}),(0,d.jsxs)("div",{className:c.description,children:[(0,d.jsx)("div",{className:c.name,children:s.name}),(0,d.jsx)("div",{className:c.status,children:s.status})]}),(0,d.jsxs)("div",{className:c.location,children:[(0,d.jsx)("span",{className:c.country}),",\xa0",(0,d.jsx)("span",{className:c.city})]})]},s.id)}))]})},m=n(8687),P=n(9158),j=n(7781),v=function(e){return e.usersPage.users},C=function(e){return e.usersPage.pageSize},x=function(e){return e.usersPage.totalUsersCount},y=function(e){return e.usersPage.currentPage},U=function(e){return e.usersPage.isFetching},I=function(e){return e.usersPage.followingInProgress},N=function(e){(0,o.Z)(n,e);var s=(0,l.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var t=arguments.length,o=new Array(t),l=0;l<t;l++)o[l]=arguments[l];return(e=s.call.apply(s,[this].concat(o))).onPageChanged=function(s){e.props.onPageChangedThunk(s,e.props.pageSize)},e}return(0,t.Z)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(k,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress})})}}]),n}(i.Component),S=(0,j.qC)((0,m.$j)((function(e){return{users:v(e),pageSize:C(e),totalUsersCount:x(e),currentPage:y(e),isFetching:U(e),followingInProgress:I(e)}}),{follow:P.ZN,unfollow:P.fv,setCurrentPage:P.D4,toggleFollowingProgress:P.ZH,getUsersThunk:P.aH,onPageChangedThunk:P.p4}))(N)},1694:function(e,s){var n;!function(){"use strict";var r={}.hasOwnProperty;function t(){for(var e=[],s=0;s<arguments.length;s++){var n=arguments[s];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=t.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):void 0===(n=function(){return t}.apply(s,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=765.7a5f94e8.chunk.js.map