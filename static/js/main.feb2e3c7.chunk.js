(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t(7),i=t.n(r),c=(t(12),t(2)),a=t(3),s=t(5),l=t(4),h=(t(13),t(0)),u=function(e){var n=e.name,t=e.email,o=e.username,r=e.id;return Object(h.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(h.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(h.jsxs)("div",{className:" ",children:[Object(h.jsx)("h2",{children:n}),Object(h.jsx)("p",{children:t}),Object(h.jsx)("p",{children:o})]})]})},d=function(e){var n=e.robots;return Object(h.jsx)("div",{children:n.map((function(e,t){return Object(h.jsx)(u,{id:n[t].id,name:n[t].name,email:n[t].email,username:n[t].username},t)}))})},f=function(e){var n=e.searchChange;return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{className:"pa3 ba b--greem bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},b=function(e){return Object(h.jsx)("div",{style:{overflow:"scroll",border:"2px solid green",height:"800px"},children:e.children})},j=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(a.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(h.jsx)("h1",{children:" Sorry for the inconvenience. We are working on it :( "}):this.props.children}}]),t}(o.Component),v=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return 0===n.length?Object(h.jsx)("h1",{children:" Please wait a moment. "}):Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"f1",children:" Robofriends "}),Object(h.jsx)(f,{searchChange:this.onSearchChange}),Object(h.jsx)(b,{children:Object(h.jsx)(j,{children:Object(h.jsx)(d,{robots:o})})})]})}}]),t}(o.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(15);i.a.render(Object(h.jsx)(v,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/RoboFriendz",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/RoboFriendz","/service-worker.js");g?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):m(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.feb2e3c7.chunk.js.map