(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(19)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),s=(t(14),t(3)),i=t(4),l=t(6),u=t(5),m=t(7),h=(t(15),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),d=(t(16),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return r.a.createElement(h,{key:e.id,monster:e})}))}),f=(t(17),function(e){e.placeholder;var n=e.changeHandler;return r.a.createElement("input",{className:"search",type:"search",placeholder:!0,onChange:n})}),p=(t(18),function(e){function n(){var e;return Object(s.a)(this,n),(e=Object(l.a)(this,Object(u.a)(n).call(this))).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={monsters:[],searchField:""},e}return Object(m.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e.setState({monsters:n})})}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster algo"),r.a.createElement(f,{placeholder:"find by name",changeHandler:this.handleChange}),r.a.createElement(d,{monsters:a}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.db674e38.chunk.js.map