(function(e){function t(t){for(var n,o,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({"Favoritos~Gostei~Menu~Profiles~home":"Favoritos~Gostei~Menu~Profiles~home","Favoritos~Gostei~Menu":"Favoritos~Gostei~Menu",Favoritos:"Favoritos",Gostei:"Gostei","Menu~Profiles~home":"Menu~Profiles~home",Menu:"Menu",Profiles:"Profiles",home:"home"}[e]||e)+"."+{"Favoritos~Gostei~Menu~Profiles~home":"4586a1a6","Favoritos~Gostei~Menu":"525b2ba5",Favoritos:"be117831",Gostei:"36bd0273","Menu~Profiles~home":"15785447",Menu:"c40eff7a",Profiles:"d10507c2",home:"058a37d7"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"Favoritos~Gostei~Menu~Profiles~home":1,"Favoritos~Gostei~Menu":1,"Menu~Profiles~home":1,Menu:1,Profiles:1,home:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({"Favoritos~Gostei~Menu~Profiles~home":"Favoritos~Gostei~Menu~Profiles~home","Favoritos~Gostei~Menu":"Favoritos~Gostei~Menu",Favoritos:"Favoritos",Gostei:"Gostei","Menu~Profiles~home":"Menu~Profiles~home",Menu:"Menu",Profiles:"Profiles",home:"home"}[e]||e)+"."+{"Favoritos~Gostei~Menu~Profiles~home":"023713fd","Favoritos~Gostei~Menu":"d30ccb8b",Favoritos:"31d6cfe0",Gostei:"31d6cfe0","Menu~Profiles~home":"105dd787",Menu:"2eb9f3d3",Profiles:"f613719f",home:"75f409e4"}[e]+".css",i=c.p+n,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===n||l===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],m.parentNode.removeChild(m),r(a)},m.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){o[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var m=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},["/"!=e.$route.fullPath?r("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.user.name))]),r("v-list-item-subtitle",[e._v(e._s(e.user.email))])],1)],1),r("v-list-item",{attrs:{to:"/Profiles"}},[e._v("Trocar de perfil")])],1),r("v-divider"),r("v-list",[e._l(e.items,(function(t,n){return r("v-list-item",{key:n,attrs:{to:t.link}},[r("v-list-item-action",[r("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)],1)})),r("v-list-item",{attrs:{to:"/"},on:{click:function(t){return e.logout()}}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-logout")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Sair")])],1)],1)],2)],1):e._e(),r("v-app-bar",{attrs:{app:"","clipped-left":""}},["/"==e.$route.fullPath?r("v-toolbar-title",[e._v("JeraFlix")]):[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("v-toolbar-title",[e._v(e._s(e.activeProfile.name))])]],2),r("v-content",[r("v-container",[r("router-view")],1)],1),r("v-footer",{attrs:{app:""}},[r("span",[e._v("© Jeraflix 2020")])])],1)},i=[],a=(r("96cf"),r("1da1")),s=r("5530"),c=r("2f62"),u={name:"App",components:{},data:function(){return{drawer:null,items:[{icon:"mdi-filmstrip",link:"/Menu",name:"Inicio"},{icon:"mdi-heart",link:"/Favoritos",name:"Favoritos"},{icon:"mdi-diamond-stone",link:"/Recomendacoes",name:"Recomendações!"},{icon:"mdi-thumb-up",link:"/Gostei",name:"Gostei"},{icon:"mdi-thumb-down",link:"/Desgostei",name:"Desgostei"}]}},methods:Object(s["a"])({},Object(c["b"])(["fetchConfig"]),{},Object(c["c"])(["getAPI_CONFIG"]),{},Object(c["c"])(["getUser"]),{},Object(c["b"])(["fetchUserById"]),{},Object(c["c"])(["getActiveProfile"]),{},Object(c["b"])(["logout"])),created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$vuetify.theme.dark=!0,t.next=3,e.fetchConfig();case 3:return t.next=5,e.fetchUserById(localStorage.getItem("userLoggedId"));case 5:case"end":return t.stop()}}),t)})))()},computed:{user:function(){return this.getUser()},activeProfile:function(){return this.getActiveProfile()}}},l=u,f=r("2877"),m=r("6544"),d=r.n(m),p=r("7496"),v=r("40dc"),h=r("5bc1"),g=r("a523"),b=r("a75b"),w=r("ce7e"),P=r("553a"),k=r("132d"),x=r("8860"),M=r("da13"),_=r("1800"),F=r("5d23"),R=r("f774"),y=r("2a7f"),G=Object(f["a"])(l,o,i,!1,null,null,null),j=G.exports;d()(G,{VApp:p["a"],VAppBar:v["a"],VAppBarNavIcon:h["a"],VContainer:g["a"],VContent:b["a"],VDivider:w["a"],VFooter:P["a"],VIcon:k["a"],VList:x["a"],VListItem:M["a"],VListItemAction:_["a"],VListItemContent:F["a"],VListItemSubtitle:F["b"],VListItemTitle:F["c"],VNavigationDrawer:R["a"],VToolbarTitle:y["a"]});var O=r("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("b0c0"),r("d3b7");var I=r("8c4f");n["a"].use(I["a"]);var L=[{path:"/",name:"Home",component:function(){return Promise.all([r.e("Favoritos~Gostei~Menu~Profiles~home"),r.e("Menu~Profiles~home"),r.e("home")]).then(r.bind(null,"bb51"))}},{path:"/menu",name:"Menu",component:function(){return Promise.all([r.e("Favoritos~Gostei~Menu~Profiles~home"),r.e("Menu~Profiles~home"),r.e("Favoritos~Gostei~Menu"),r.e("Menu")]).then(r.bind(null,"9a0b"))}},{path:"/profiles",name:"Profiles",component:function(){return Promise.all([r.e("Favoritos~Gostei~Menu~Profiles~home"),r.e("Menu~Profiles~home"),r.e("Profiles")]).then(r.bind(null,"88e6"))}},{path:"/favoritos",name:"Favoritos",component:function(){return Promise.all([r.e("Favoritos~Gostei~Menu~Profiles~home"),r.e("Favoritos~Gostei~Menu"),r.e("Favoritos")]).then(r.bind(null,"5628"))}},{path:"/Gostei",name:"Gostei",component:function(){return Promise.all([r.e("Favoritos~Gostei~Menu~Profiles~home"),r.e("Favoritos~Gostei~Menu"),r.e("Gostei")]).then(r.bind(null,"2b59"))}},{path:"/Desgostei",name:"Desgostei",component:function(){return Promise.all([r.e("Favoritos~Gostei~Menu~Profiles~home"),r.e("Favoritos~Gostei~Menu"),r.e("Gostei")]).then(r.bind(null,"f13b"))}},{path:"/recomendacoes",name:"Recomendacoes",component:function(){return Promise.all([r.e("Favoritos~Gostei~Menu~Profiles~home"),r.e("Menu~Profiles~home"),r.e("Favoritos~Gostei~Menu"),r.e("Menu")]).then(r.bind(null,"237b"))}},{path:"*",redirect:"/"}],A=new I["a"]({routes:L});A.beforeEach((function(e,t,r){"Home"===e.name||localStorage.getItem("userLoggedId")?r():r("/")}));var S=A,U=(r("99af"),r("4160"),r("159b"),r("bc3a")),C=r.n(U),V={},N=C.a.create(V),D=N,T={API_CONFIG:{images:{secure_base_url:"https://image.tmdb.org/t/p/"}},gostei:[],desgostei:[],movies:[],trending:[],similar:[],recommendations:[],videoURL:""},E={getAPI_CONFIG:function(e){return e.API_CONFIG},getMovies:function(e){return q(e.movies.results,4)},getTrending:function(e){return q(e.trending.results,4)},getSimilar:function(e){return q(e.similar.results,4)},getRecommendations:function(e){return q(e.recommendations.results,4)},getVideoURL:function(e){return e.videoURL},getGostei:function(e){return q(e.gostei,4)},getDesgostei:function(e){return q(e.desgostei,4)}},B={fetchConfig:function(e){var t=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.get("https://api.themoviedb.org/3/configuration?api_key=1fe925fc6a7e264f4345d91a2eb72635");case 2:r=e.sent,t("setConfig",r.data);case 4:case"end":return e.stop()}}),e)})))()},fetchMovies:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.get("".concat("https://api.themoviedb.org/3","/search/movie?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635","&query=").concat(t));case 2:n=e.sent,r("log",n.data),r("setMovies",n.data);case 5:case"end":return e.stop()}}),e)})))()},fetchGosteiId:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.get("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635","&language=en-US"));case 2:n=e.sent,console.log(n.data),r("pushGostei",n.data);case 5:case"end":return e.stop()}}),e)})))()},fetchDesgosteiId:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.get("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635","&language=en-US"));case 2:n=e.sent,console.log(n.data),r("pushDesgostei",n.data);case 5:case"end":return e.stop()}}),e)})))()},fetchTrendingMovies:function(e){var t=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.get("".concat("https://api.themoviedb.org/3","/trending/movie/day?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635"));case 2:r=e.sent,t("setTrending",r.data);case 4:case"end":return e.stop()}}),e)})))()},fetchVideoURL:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.get("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/videos?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635"));case 2:n=e.sent,0!=n.data.results.length?"YouTube"==n.data.results[0].site?(r("log","https://www.youtube.com/embed/".concat(n.data.results[0].key)),r("setVideoURL","https://www.youtube.com/embed/".concat(n.data.results[0].key))):(r("log","Video Não esta no youtube"),r("log",n.data.results[0].site)):(r("log",n.data),r("setVideoURL",null));case 4:case"end":return e.stop()}}),e)})))()},fetchSimilarMovies:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.get("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/similar?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635","&language=en-US&page=1"));case 2:n=e.sent,r("setSimilar",n.data);case 4:case"end":return e.stop()}}),e)})))()},fetchMovieRecommendations:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.get("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/recommendations?api_key=").concat("1fe925fc6a7e264f4345d91a2eb72635","&language=en-US&page=1"));case 2:n=e.sent,r("setRecommendations",n.data);case 4:case"end":return e.stop()}}),e)})))()},clearGostei:function(e){var t=e.commit;t("setGostei",[])},clearDesgostei:function(e){var t=e.commit;t("setDesgostei",[])}},$={log:function(e,t){return console.log(t)},setConfig:function(e,t){return e.API_CONFIG=t},setMovies:function(e,t){return e.movies=t},setTrending:function(e,t){return e.trending=t},setRecommendations:function(e,t){return e.recommendations=t},setSimilar:function(e,t){return e.similar=t},setVideoURL:function(e,t){return e.videoURL=t},pushMovies:function(e,t){return t.forEach((function(t){return e.movies.push(t)}))},pushGostei:function(e,t){return e.gostei.push(t)},setGostei:function(e,t){return e.gostei=t},pushDesgostei:function(e,t){return e.desgostei.push(t)},setDesgostei:function(e,t){return e.desgostei=t}};function q(e,t){var r=[];return void 0!=e?(e.forEach((function(e){r.push({id:e.id,title:e.title,overview:e.overview,imgURL:"".concat(T.API_CONFIG.images.secure_base_url).concat(T.API_CONFIG.images.poster_sizes[t]).concat(e.poster_path)})})),r):"Nenhum busca realizada"}var J={state:T,getters:E,actions:B,mutations:$},H=(r("7db0"),r("c740"),r("45fc"),r("a434"),{user:{_id:"",name:"",email:"",profiles:[]},activeProfile:{}}),z={getUser:function(e){return e.user},getActiveProfile:function(e){return e.activeProfile},getLikes:function(e){return e.activeProfile.likes}},K={findUser:function(e,t){e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("".concat("https://jeraflix-api.herokuapp.com/user","/login"),t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))()},createUser:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("https://jeraflix-api.herokuapp.com/user",t);case 2:return n=e.sent,r("log",n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))()},login:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r("setUser",t),r("setActiveProfile",t.profiles[0]),r("setLocalStorageId",t._id);case 3:case"end":return e.stop()}}),e)})))()},logout:function(e){var t=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t("setUser",{}),t("setActiveProfile",{}),t("deleteLocalStorageId");case 3:case"end":return e.stop()}}),e)})))()},fetchUserById:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat("https://jeraflix-api.herokuapp.com/user","/").concat(t));case 2:n=e.sent,r("setUser",n.data),r("setActiveProfile",H.user.profiles[0]);case 5:case"end":return e.stop()}}),e)})))()},selectProfile:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=H.user.profiles.find((function(e){return e._id==t})),r("setGostei",[]),r("setDesgostei",[]),r("setActiveProfile",n);case 4:case"end":return e.stop()}}),e)})))()},createProfile:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:t,wishlist:[],likes:[]},e.next=3,r("createProfile",n);case 3:return e.next=5,C.a.put("".concat("https://jeraflix-api.herokuapp.com/user","/").concat(H.user._id),n);case 5:o=e.sent,r("log",o);case 7:case"end":return e.stop()}}),e)})))()},addFavorite:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!H.activeProfile.wishlist.some((function(e){return e.id==t.id}))){e.next=4;break}r("log","Filme ja esta na lista de favoritos"),e.next=10;break;case 4:return r("addFavorite",t),n={profileId:H.activeProfile._id,movie:t},e.next=8,C.a.put("".concat("https://jeraflix-api.herokuapp.com/user","/favorite/").concat(H.user._id),n);case 8:o=e.sent,r("log",o);case 10:case"end":return e.stop()}}),e)})))()},removeFavorite:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=H.activeProfile.wishlist.findIndex((function(e){return e.id===t.id})),r("remFavorite",n),o={profileId:H.activeProfile._id,movie:t},e.next=5,C.a.delete("".concat("https://jeraflix-api.herokuapp.com/user","/favorite/").concat(H.user._id),{data:o});case 5:i=e.sent,r("log",i);case 7:case"end":return e.stop()}}),e)})))()},addLike:function(e,t){var r=e.commit;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=H.activeProfile.likes.findIndex((function(e){return e.id==e.id})),n<0?r("pushLike",t):r("editLike",{index:n,like:t}),o={profileId:H.activeProfile._id,obj:t},e.next=5,C.a.put("".concat("https://jeraflix-api.herokuapp.com/user","/like/").concat(H.user._id),o);case 5:e.sent;case 6:case"end":return e.stop()}}),e)})))()}},Y={log:function(e,t){return console.log(t)},setUser:function(e,t){return e.user=t},setActiveProfile:function(e,t){return e.activeProfile=t},createProfile:function(e,t){return e.user.profiles.push(t)},setLocalStorageId:function(e,t){return localStorage.setItem("userLoggedId",t)},deleteLocalStorageId:function(e){return localStorage.removeItem("userLoggedId")},addFavorite:function(e,t){return e.activeProfile.wishlist.push(t)},remFavorite:function(e,t){return e.activeProfile.wishlist.splice(t,1)},pushLike:function(e,t){return e.activeProfile.likes.push(t)},editLike:function(e,t){return e.activeProfile.likes[t.index]=t.like}},Q={state:H,getters:z,actions:K,mutations:Y};n["a"].use(c["a"]);var W=new c["a"].Store({modules:{Api:J,Users:Q}}),X=r("f309");n["a"].use(X["a"]);var Z=new X["a"]({theme:{themes:{dark:{primary:"#0DB551",secondary:"#ff9800",accent:"#ffeb3b",error:"#f44336",warning:"#ffc107",info:"#3f51b5",success:"#4caf50"}}}});n["a"].config.productionTip=!1,new n["a"]({store:W,router:S,vuetify:Z,render:function(e){return e(j)}}).$mount("#app")}});
//# sourceMappingURL=app.946b0161.js.map