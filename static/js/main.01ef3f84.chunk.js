(this["webpackJsonprobofriends-redux"]=this["webpackJsonprobofriends-redux"]||[]).push([[0],{17:function(e,t,n){e.exports=n(29)},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),i=n(8),s=n(6),l=(n(27),n(2)),u=n(3),d=n(5),h=n(4),f=(n(28),function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:n}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,r)))}),b=function(e){var t=e.robots;return console.log("CardList Rendered"),o.a.createElement(o.a.Fragment,null,t.map((function(e,n){return o.a.createElement(f,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},p=function(e){e.searchfield;var t=e.searchChange;return console.log("SearchBox Rendered"),o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},g=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"2px dashed black",height:"1000px"}},e.children)},m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(u.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterBtn Rendered"),o.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),n}(r.Component),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log("Header Rendered"),o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"RoboFriends Redux"),o.a.createElement(m,{color:"red"}))}}]),n}(r.Component),E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=(e.error,r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})));return a?o.a.createElement("h1",null,"Goofing around"):o.a.createElement("div",{className:"tc"},o.a.createElement(v,null),o.a.createElement(p,{searchChange:n}),o.a.createElement(g,null,o.a.createElement(b,{robots:c})))}}]),n}(r.Component),O=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(E),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=n(1),S={searchField:""},j={isPending:!1,robots:[],error:""},C=n(15),k=n(16),_=(Object(C.createLogger)(),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(y.a)(Object(y.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(y.a)(Object(y.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(y.a)(Object(y.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}})),T=Object(s.d)(_,Object(s.a)(k.a));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:T},o.a.createElement(O,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-redux-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends-redux-pwa","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.01ef3f84.chunk.js.map