(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({"Menu~home":"Menu~home",Menu:"Menu",home:"home"}[e]||e)+"."+{"Menu~home":"fa6bb29b",Menu:"4033aa91",home:"78fa6c22"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"Menu~home":1,Menu:1,home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({"Menu~home":"Menu~home",Menu:"Menu",home:"home"}[e]||e)+"."+{"Menu~home":"6ace4548",Menu:"a8c37bf4",home:"75f409e4"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],m.parentNode.removeChild(m),n(i)},m.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},["/"!=e.$route.fullPath?n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.user.name))]),n("v-list-item-subtitle",[e._v(e._s(e.user.email))])],1)],1),n("v-list-item",{attrs:{to:"/Profiles"}},[e._v("Trocar de perfil")])],1),n("v-divider"),n("v-list",[e._l(e.items,(function(t,r){return n("v-list-item",{key:r,attrs:{to:t.link}},[n("v-list-item-action",[n("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)],1)})),n("v-list-item",{attrs:{to:"/"},on:{click:function(t){return e.logout()}}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-logout")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Sair")])],1)],1)],2)],1):e._e(),n("v-app-bar",{attrs:{app:"","clipped-left":""}},["/"==e.$route.fullPath?n("v-toolbar-title",[e._v("JeraFlix")]):[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v(e._s(e.activeProfile.name))])]],2),n("v-content",[n("v-container",[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}},[n("span",[e._v("© Jeraflix 2020")])])],1)},a=[],i=(n("96cf"),n("1da1")),c=n("5530"),u=n("2f62"),s={name:"App",components:{},data:function(){return{drawer:null,items:[{icon:"mdi-filmstrip",link:"/Menu",name:"Inicio"},{icon:"mdi-heart",link:"/Favoritos",name:"Favoritos"},{icon:"mdi-diamond-stone",link:"/Recomendacoes",name:"Recomendações!"}]}},methods:Object(c["a"])({},Object(u["b"])(["fetchConfig"]),{},Object(u["c"])(["getAPI_CONFIG"]),{},Object(u["c"])(["getUser"]),{},Object(u["b"])(["fetchUserById"]),{},Object(u["c"])(["getActiveProfile"]),{},Object(u["b"])(["logout"])),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$vuetify.theme.dark=!0,t.next=3,e.fetchConfig();case 3:return t.next=5,e.fetchUserById(localStorage.getItem("userLoggedId"));case 5:case"end":return t.stop()}}),t)})))()},computed:{user:function(){return this.getUser()},activeProfile:function(){return this.getActiveProfile()}}},l=s,f=n("2877"),m=n("6544"),d=n.n(m),p=n("7496"),v=n("40dc"),h=n("5bc1"),g=n("a523"),b=n("a75b"),w=n("ce7e"),k=n("553a"),P=n("132d"),_=n("8860"),x=n("da13"),y=n("1800"),R=n("5d23"),O=n("f774"),I=n("2a7f"),M=Object(f["a"])(l,o,a,!1,null,null,null),j=M.exports;d()(M,{VApp:p["a"],VAppBar:v["a"],VAppBarNavIcon:h["a"],VContainer:g["a"],VContent:b["a"],VDivider:w["a"],VFooter:k["a"],VIcon:P["a"],VList:_["a"],VListItem:x["a"],VListItemAction:y["a"],VListItemContent:R["a"],VListItemSubtitle:R["b"],VListItemTitle:R["c"],VNavigationDrawer:O["a"],VToolbarTitle:I["a"]});var L=n("9483");Object(L["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("b0c0"),n("d3b7");var A=n("8c4f"),S=(n("99af"),n("c740"),n("45fc"),n("a434"),n("bc3a")),C=n.n(S),U={user:{_id:"",name:"",email:"",profiles:[]},activeProfile:{}},F={getUser:function(e){return e.user},getActiveProfile:function(e){return e.activeProfile},getLikes:function(e){return e.activeProfile.likes}},V={findUser:function(e,t){e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("".concat("http://localhost:3000/user","/login"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()},createUser:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("http://localhost:3000/user",t);case 2:return r=e.sent,n("log",r.data),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))()},login:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n("setUser",t),n("setActiveProfile",t.profiles[0]),n("setLocalStorageId",t._id);case 3:case"end":return e.stop()}}),e)})))()},logout:function(e){var t=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t("setUser",{}),t("setActiveProfile",{}),t("deleteLocalStorageId");case 3:case"end":return e.stop()}}),e)})))()},fetchUserById:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat("http://localhost:3000/user","/").concat(t));case 2:r=e.sent,n("setUser",r.data),n("setActiveProfile",U.user.profiles[0]);case 5:case"end":return e.stop()}}),e)})))()},selectProfile:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n("setActiveProfile",U.user.profiles[t]);case 1:case"end":return e.stop()}}),e)})))()},createProfile:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={name:t,wishlist:[]},e.next=3,n("createProfile",r);case 3:return e.next=5,C.a.put("".concat("http://localhost:3000/user","/").concat(U.user._id),r);case 5:o=e.sent,n("log",o);case 7:case"end":return e.stop()}}),e)})))()},addFavorite:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!U.activeProfile.wishlist.some((function(e){return e.id==t.id}))){e.next=4;break}n("log","Filme ja esta na lista de favoritos"),e.next=10;break;case 4:return n("addFavorite",t),r={profileId:U.activeProfile._id,movie:t},e.next=8,C.a.put("".concat("http://localhost:3000/user","/favorite/").concat(U.user._id),r);case 8:o=e.sent,n("log",o);case 10:case"end":return e.stop()}}),e)})))()},removeFavorite:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=U.activeProfile.wishlist.findIndex((function(e){return e.id===t.id})),n("remFavorite",r),o={profileId:U.activeProfile._id,movie:t},e.next=5,C.a.delete("".concat("http://localhost:3000/user","/favorite/").concat(U.user._id),{data:o});case 5:a=e.sent,n("log",a);case 7:case"end":return e.stop()}}),e)})))()},addLike:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=U.activeProfile.likes.findIndex((function(e){return e.id==e.id})),r<0?n("pushLike",t):n("editLike",{index:r,like:t}),o={profileId:U.activeProfile._id,obj:t},e.next=5,C.a.put("".concat("http://localhost:3000/user","/like/").concat(U.user._id),o);case 5:e.sent;case 6:case"end":return e.stop()}}),e)})))()}},N={log:function(e,t){return console.log(t)},setUser:function(e,t){return e.user=t},setActiveProfile:function(e,t){return e.activeProfile=t},createProfile:function(e,t){return e.user.profiles.push(t)},setLocalStorageId:function(e,t){return localStorage.setItem("userLoggedId",t)},deleteLocalStorageId:function(e){return localStorage.removeItem("userLoggedId")},addFavorite:function(e,t){return e.activeProfile.wishlist.push(t)},remFavorite:function(e,t){return e.activeProfile.wishlist.splice(t,1)},pushLike:function(e,t){return e.activeProfile.likes.push(t)},editLike:function(e,t){return e.activeProfile.likes[t.index]=t.like}},T={state:U,getters:F,actions:V,mutations:N};r["a"].use(A["a"]);var E=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("Menu~home"),n.e("home")]).then(n.bind(null,"bb51"))}},{path:"/menu",name:"Menu",component:function(){return Promise.all([n.e("Menu~home"),n.e("Menu")]).then(n.bind(null,"9a0b"))}},{path:"/profiles",name:"Profiles",component:function(){return Promise.all([n.e("Menu~home"),n.e("Menu")]).then(n.bind(null,"88e6"))}},{path:"/favoritos",name:"Favoritos",component:function(){return Promise.all([n.e("Menu~home"),n.e("Menu")]).then(n.bind(null,"5628"))}},{path:"/recomendacoes",name:"Recomendacoes",component:function(){return Promise.all([n.e("Menu~home"),n.e("Menu")]).then(n.bind(null,"237b"))}},{path:"*",redirect:"/"}],B=new A["a"]({routes:E});B.beforeEach((function(e,t,n){"Home"===e.name||localStorage.getItem("userLoggedId")?n():n("/")}));var G=B,q=(n("4160"),n("159b"),{}),D=C.a.create(q),$=D,J=n("89c6")("1fe925fc6a7e264f4345d91a2eb72635"),H={API_CONFIG:{images:{secure_base_url:"https://image.tmdb.org/t/p/"}},movies:[],trending:[],similar:[],recommendations:[],videoURL:""},z={getAPI_CONFIG:function(e){return e.API_CONFIG},getMovies:function(e){return Q(e.movies.results,4)},getTrending:function(e){return Q(e.trending.results,4)},getSimilar:function(e){return Q(e.similar.results,4)},getRecommendations:function(e){return Q(e.recommendations.results,4)},getVideoURL:function(e){return e.videoURL}},K={fetchConfig:function(e){var t=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.get("https://api.themoviedb.org/3/configuration?api_key=1fe925fc6a7e264f4345d91a2eb72635");case 2:n=e.sent,t("setConfig",n.data);case 4:case"end":return e.stop()}}),e)})))()},fetchMovies:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.get("".concat("https://api.themoviedb.org/3","/search/movie?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635","&query=").concat(t));case 2:r=e.sent,n("log",r.data),n("setMovies",r.data);case 5:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e,t){e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:J.movieInfo({id:t},(function(e,t){console.log(t)}));case 1:case"end":return e.stop()}}),e)})))()},searchMovies:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:J.searchMovie({query:t},(function(e,r){n("log",r.results),n("pushMovies",r.results),r.page++;while(r.total_pages>=r.page)J.searchMovie({query:t,page:r.page},(function(e,t){n("log",t.results),n("pushMovies",t.results)})),r.page++}));case 1:case"end":return e.stop()}}),e)})))()},fetchTrendingMovies:function(e){var t=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.get("".concat("https://api.themoviedb.org/3","/trending/movie/day?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635"));case 2:n=e.sent,t("setTrending",n.data);case 4:case"end":return e.stop()}}),e)})))()},fetchVideoURL:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.get("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/videos?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635"));case 2:r=e.sent,0!=r.data.results.length?"YouTube"==r.data.results[0].site?(n("log","https://www.youtube.com/embed/".concat(r.data.results[0].key)),n("setVideoURL","https://www.youtube.com/embed/".concat(r.data.results[0].key))):(n("log","Video Não esta no youtube"),n("log",r.data.results[0].site)):(n("log",r.data),n("setVideoURL",null));case 4:case"end":return e.stop()}}),e)})))()},fetchSimilarMovies:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.get("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/similar?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635","&language=en-US&page=1"));case 2:r=e.sent,n("setSimilar",r.data);case 4:case"end":return e.stop()}}),e)})))()},fetchMovieRecommendations:function(e,t){var n=e.commit;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.get("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/recommendations?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635","&language=en-US&page=1"));case 2:r=e.sent,n("setRecommendations",r.data);case 4:case"end":return e.stop()}}),e)})))()}},Y={log:function(e,t){return console.log(t)},setConfig:function(e,t){return e.API_CONFIG=t},setMovies:function(e,t){return e.movies=t},setTrending:function(e,t){return e.trending=t},setRecommendations:function(e,t){return e.recommendations=t},setSimilar:function(e,t){return e.similar=t},setVideoURL:function(e,t){return e.videoURL=t},pushMovies:function(e,t){return t.forEach((function(t){return e.movies.push(t)}))}};function Q(e,t){var n=[];return void 0!=e?(e.forEach((function(e){n.push({id:e.id,title:e.title,overview:e.overview,imgURL:"".concat(H.API_CONFIG.images.secure_base_url).concat(H.API_CONFIG.images.poster_sizes[t]).concat(e.poster_path)})})),n):"Nenhum busca realizada"}var W={state:H,getters:z,actions:K,mutations:Y};r["a"].use(u["a"]);var X=new u["a"].Store({modules:{Api:W,Users:T}}),Z=n("f309");r["a"].use(Z["a"]);var ee=new Z["a"]({theme:{themes:{dark:{primary:"#0DB551",secondary:"#ff9800",accent:"#ffeb3b",error:"#f44336",warning:"#ffc107",info:"#3f51b5",success:"#4caf50"}}}});r["a"].config.productionTip=!1,new r["a"]({store:X,router:G,vuetify:ee,render:function(e){return e(j)}}).$mount("#app")}});
//# sourceMappingURL=app.74a7be83.js.map