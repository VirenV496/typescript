(this.webpackJsonpvid=this.webpackJsonpvid||[]).push([[0],{41:function(e,t,n){e.exports=n(72)},46:function(e,t,n){},47:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),l=(n(46),n(47),n(9)),u=n(15),i=n.n(u),s=function(){return{type:"FETCH_USERS_REQUEST"}},m=function(e){return{type:"FETCH_USERS_SUCCESS",payload:e}},E=function(e){return{type:"FETCH_USERS_FAILURE",payload:e}},p=(n(33),n(40));var d=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.users}));return Object(a.useEffect)((function(){e((function(e){e(s()),i.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){var n=t.data;console.log(n),e(m(n))})).catch((function(t){e(E(t.message))}))}))}),[]),console.log(),r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Username")),t&&t.users.map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username))})))))},f=n(39),h=n(18),v=n.n(h),S=n(36);var O=function(){var e=Object(l.b)(),t=Object(a.useState)(""),n=Object(f.a)(t,2),o=n[0],c=n[1],u=Object(l.c)((function(e){return e.pokemon}));return console.log("pokemon state:",u),r.a.createElement("div",{className:"App"},r.a.createElement("input",{type:"text",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{onClick:function(){return e((t=o,function(){var e=Object(S.a)(v.a.mark((function e(n){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:"POKEMON_LOADING"}),e.next=4,i.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 4:a=e.sent,n({type:"POKEMON_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n({type:"POKEMON_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()));var t}},"Search"),u.pokemon&&r.a.createElement("div",null,r.a.createElement("img",{src:u.pokemon.sprites.front_default,alt:""}),u.pokemon.abilities.map((function(e){return r.a.createElement("p",null,e.ability.name)}))))},b=n(11),g=n(2),y=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(b.b,{to:"/"},"None")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/User"},"UserList")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/PoKe"},"Search Pokemon"))))},k=function(){return r.a.createElement(b.a,null,r.a.createElement(y,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/"}),r.a.createElement(g.a,{path:"/User",component:d}),r.a.createElement(g.a,{path:"/Poke",component:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=n(8),U={loading:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_FAIL":return{loading:!1};case"POKEMON_LOADING":return{loading:!0};case"POKEMON_SUCCESS":return{loading:!1,pokemon:t.payload};default:return e}},j=n(21),w={loading:!1,users:[],error:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS_REQUEST":return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case"FETCH_USERS_SUCCESS":return{loading:!1,users:t.payload,error:""};case"FETCH_USERS_FAILURE":return{loading:!1,users:[],error:t.payload};default:return e}},N=Object(_.combineReducers)({pokemon:C,users:F}),R=n(37),P=n(38),T=Object(_.createStore)(N,Object(R.composeWithDevTools)(Object(_.applyMiddleware)(P.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:T},r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.eb1733fc.chunk.js.map