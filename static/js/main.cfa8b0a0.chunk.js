(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,a,n){},14:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);var l=n(3),c=n(4),m=n(6),s=n(5),h=function(e){e.id;var a=e.name,n=e.username,t=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 bwd2 grow shadow-5 tc"},r.a.createElement("img",{alt:"Robot",src:"https://robohash.org/".concat(n,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("h3",null,t)))},u=function(e){var a=e.robots.map((function(e,a){return r.a.createElement(h,{key:a,id:e.id,name:e.name,username:e.username,email:e.email})}));return r.a.createElement("div",null,a)},d=function(e){var a=e.SearchChange;return r.a.createElement("div",{height:"10vh"},r.a.createElement("input",{className:"ma3 pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:a}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"71.2vh"}},e.children)},g=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],v=(n(14),function(e){Object(m.a)(n,e);var a=Object(s.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).OnSearchChange=function(a){e.setState({Searchfield:a.target.value})},e.state={robots:g,Searchfield:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.Searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{height:"10vh"},"RoboFriends"),r.a.createElement(d,{SearchChange:this.OnSearchChange}),r.a.createElement(b,null,r.a.createElement(u,{robots:a})))}}]),n}(r.a.Component));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.cfa8b0a0.chunk.js.map