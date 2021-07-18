(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),s=n(29),i=n(2),l=n(8),d=n.n(l),o=n(9),u=n(11),j=(n(35),n(1)),p=function(e){var t=e.loading;return void 0!==t&&t?Object(j.jsx)("div",{className:"loader-wrapper",children:Object(j.jsx)("div",{id:"loader"})}):Object(j.jsx)(j.Fragment,{})},b=(n(37),function(e){var t=e.data,n=e.handleClickDetailBtn,a=t.id,r=void 0===a?0:a,c=t.name,s=void 0===c?"":c,i=t.website,l=void 0===i?"":i,d=t.username,o=void 0===d?"":d,u=s.charAt(0).toUpperCase();return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-avatar",children:u}),Object(j.jsxs)("div",{className:"card-details",children:[Object(j.jsx)("p",{className:"card-details-name text",children:s}),Object(j.jsxs)("p",{className:"card-details-username text",children:["@",o]}),Object(j.jsx)("a",{className:"card-details-website text",href:"https://".concat(l),target:"_blank",children:l})]}),Object(j.jsx)("div",{className:"btn card-button",children:Object(j.jsx)("span",{onClick:function(){return n(r)},children:"MORE DETAILS"})})]})}),f=n(15),h=n.n(f),m=function(){var e=Object(o.a)(d.a.mark((function e(t,n){var a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/users",a=[],e.prev=2,e.next=5,h.a.get("https://jsonplaceholder.typicode.com/users");case 5:r=e.sent,c=r.data,a=c,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0,"has error when call api get users");case 13:t&&t(!1),a=O(a),n&&n(a);case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(d.a.mark((function e(t,n,a){var r,c,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://jsonplaceholder.typicode.com/users/".concat(t),c={},e.prev=2,e.next=5,h.a.get(r);case 5:s=e.sent,i=s.data,c=i,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0,"Have some error when fetch user details"),c={notFound:!0};case 14:n&&n(!1),a&&a(c);case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n,a){return e.apply(this,arguments)}}(),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){var t=e.id;return{name:e.name,website:e.website,username:e.username,id:t}}));return t},x=(n(56),function(){var e=Object(i.f)(),t=Object(a.useState)(!0),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),l=Object(u.a)(s,2),f=l[0],h=l[1];if(Object(a.useEffect)((function(){(function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(c,h);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r)return Object(j.jsx)(p,{loading:!0});var v=function(t){return e.push("/my-app/user/".concat(t))};return Object(j.jsx)("div",{className:"home-users-wrap",children:f.map((function(e){return Object(j.jsx)(b,{handleClickDetailBtn:v,data:e})}))})}),w=(n(62),function(e){var t=e.info,n=e.addressInfo,r=Object(i.g)().userId,c=Object(a.useState)({}),s=Object(u.a)(c,2),l=s[0],b=s[1],f=Object(a.useState)(!0),h=Object(u.a)(f,2),m=h[0],O=h[1];if(Object(a.useEffect)((function(){(function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(r,O,b);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),m)return Object(j.jsx)(p,{loading:!0});var x=l.address,w=void 0===x?{}:x;return Object(j.jsx)("div",{className:".w-h-full",children:Object(j.jsxs)("div",{className:"user-details-wrap",children:[t.map((function(e){var t,n=e.label,a=e.field,r=e.isCompany,c=void 0===r?void 0:r,s=l[a];c&&(s=null===l||void 0===l||null===(t=l.company)||void 0===t?void 0:t.name);return Object(j.jsxs)("div",{className:"user-details-info",children:[Object(j.jsx)("label",{children:n}),Object(j.jsx)("span",{children:s})]})})),Object(j.jsxs)("div",{className:"user-details-address-wrap",children:[Object(j.jsx)("label",{children:"- address:"}),Object(j.jsx)("ul",{className:"user-details-address",children:n.map((function(e){var t=e.field,n=e.label;return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:n}),Object(j.jsx)("span",{children:w[t]})]})}))})]})]})})});w.defaultProps={info:[{label:"- name: ",field:"name"},{label:"- username: ",field:"username"},{label:"- email: ",field:"email"},{label:"- phone: ",field:"phone"},{label:"- company: ",field:"",isCompany:!0},{label:"- website: ",field:"website"}],addressInfo:[{label:"street: ",field:"street"},{label:"city: ",field:"city"},{label:"suite: ",field:"suite"},{label:"zipcode: ",field:"zipcode"}]};var y=w,g=function(){return Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/my-app/",component:x}),Object(j.jsx)(i.a,{exact:!0,path:"/my-app/user/:userId",component:y})]})};var N=function(){return Object(j.jsx)(g,{})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(63);Object(c.render)(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(N,{})})}),document.getElementById("root")),k()}},[[64,1,2]]]);
//# sourceMappingURL=main.2d09a423.chunk.js.map