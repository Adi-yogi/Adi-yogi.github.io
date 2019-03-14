(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),c=a.n(s),i=a(1),l=a(3),u=a(15),o=a(10),m=a(9),d=a.n(m),E=a(16),f=a(5),I={INITIAL:"list.state.initial",FETCHING:"list.state.fetching",FETCH_DONE:"list.state.fetch_done",FETCH_ERROR:"list.state.fetch_error"},h={items:[],listStatus:I.INITIAL,searchInCity:"",filterBy:""},y={SET_LIST_STATUS:"list.set_status",SET_LIST_ITEMS:"list.set_items",SET_CRITERIA:"list.set_criteria"};var S=Object(i.c)({restaurant:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.SET_LIST_STATUS:var a=t.data.listStatus;return Object(f.a)({},e,{listStatus:a});case y.SET_LIST_ITEMS:var n=t.data,r=n.items,s=n.listStatus,c=void 0===s?I.FETCH_DONE:s;return Object(f.a)({},e,{items:r,listStatus:c});case y.SET_CRITERIA:var i=t.data,l=i.searchInCity,u=i.filterBy;return Object(f.a)({},e,{searchInCity:l,filterBy:u});default:return e}}});function T(e){return{type:y.SET_LIST_ITEMS,data:{items:e}}}function p(e){var t=e.searchInCity,a=e.filterBy;return{type:y.SET_CRITERIA,data:{searchInCity:t,filterBy:a}}}var v=Object(l.b)()(function(e){var t=e.dispatch,a=Object(n.useState)(""),s=Object(o.a)(a,2),c=s[0],i=s[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),m=u[0],f=u[1];return r.a.createElement("div",{className:"searchForm"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(function(e){var t=e.searchInCity,a=e.filterBy;return function(){var e=Object(E.a)(d.a.mark(function e(n,r){var s,c,i,l,u;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r(),c=s.restaurant,t===c.searchInCity){e.next=11;break}return n((o=I.FETCHING,{type:y.SET_LIST_STATUS,data:{listStatus:o}})),e.next=5,fetch("https://opentable.herokuapp.com/api/restaurants?city=".concat(t));case 5:return i=e.sent,e.next=8,i.json();case 8:l=e.sent,u=l.restaurants,n(T(u.map(function(e){return{id:e.id,name:e.name,address:e.address,area:e.area,price:e.price}})));case 11:n(p({searchInCity:t,filterBy:a}));case 12:case"end":return e.stop()}var o},e)}));return function(t,a){return e.apply(this,arguments)}}()}({searchInCity:c,filterBy:m}))}},r.a.createElement("input",{required:"required",type:"text",name:"searchInCity",placeholder:"City Name",onChange:function(e){return i(e.target.value)}}),r.a.createElement("input",{type:"text",name:"filterBy",placeholder:"Refine",onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Search")))}),_=Object(l.b)(function(e){var t=e.restaurant;return{items:t.items,searchInCity:t.searchInCity,filterBy:t.filterBy,listStatus:t.listStatus}})(function(e){var t=e.items,a=void 0===t?[]:t,n=e.filterBy,s=void 0===n?void 0:n,c=e.searchInCity,i=void 0===c?"":c,l=e.listStatus,u=s?a.filter(function(e){var t=e.name,a=e.address,n=e.area;return"".concat(t).concat(a).concat(n).toLowerCase().toLowerCase().includes(s.toLowerCase())}):a;return l===I.INITIAL?r.a.createElement("div",{className:"incenter"},"Please enter a city to search. e.g. Orleans,Osseo,Norman etc."):l===I.FETCHING?r.a.createElement("div",{className:"incenter"},"Please wait"):0===u.length?r.a.createElement("div",{className:"incenter"},"No Restaurant found for ",i," ",!!s&&"and ".concat(s)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"resultHeader"},r.a.createElement("h2",null,"Name"),r.a.createElement("h2",null,"Address"),r.a.createElement("h2",null,"Price")),r.a.createElement("div",{className:"results"},u.map(function(e){return r.a.createElement("div",{className:"resultElement",key:e.id},r.a.createElement("h3",null,e.name),r.a.createElement("h3",null,e.address),r.a.createElement("h3",null,e.price))})))}),C=(a(28),[u.a]),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,N=Object(i.e)(S,b(i.a.apply(void 0,C))),O=r.a.createElement(l.a,{store:N},r.a.createElement(function(){return r.a.createElement("div",{className:"body-cont"},r.a.createElement("aside",null),r.a.createElement("main",null,r.a.createElement(v,null),r.a.createElement(_,null)))},null));c.a.render(O,document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0e5df470.chunk.js.map