(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),c=a.n(i),u=(a(14),a(1)),l=a(8),o=function(e){var t=e.setCategories,a=r.a.useState(""),n=Object(u.a)(a,2),i=n[0],c=n[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),c(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){var t=e.target;c(t.value)}}))},m=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},s=a(4),f=a.n(s),d=a(7),p=function(){var e=Object(d.a)(f.a.mark((function e(t){var a,n,r,i,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=em3iPLjHL6JSD8t2r1tYWOQPMYbLYyQI"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,i=r.data,c=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.category,a=function(e){var t=r.a.useState({data:[],loading:!0}),a=Object(u.a)(t,2),n=a[0],i=a[1];return r.a.useEffect((function(){p(e).then((function(e){i({data:e,loading:!1})}))}),[e]),n}(t),n=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"},t),i&&"Loading...",r.a.createElement("div",{className:"card-grid animate__animated animate__fadeIn"},n.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))))},E=function(e){var t=r.a.useState(["Emily Blunt"]),a=Object(u.a)(t,2),n=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{setCategories:i}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};c.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b522799e.chunk.js.map