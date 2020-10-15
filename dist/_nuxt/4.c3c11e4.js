(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{188:function(t,e,r){"use strict";r.d(e,"g",(function(){return o})),r.d(e,"i",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"e",(function(){return f})),r.d(e,"f",(function(){return d})),r.d(e,"h",(function(){return m})),r.d(e,"c",(function(){return v})),r.d(e,"a",(function(){return O})),r.d(e,"d",(function(){return h})),r.d(e,"j",(function(){return j}));var n=r(62),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(article){return Object(n.b)({method:"POST",url:"/api/articles",data:{article:article}})},O=function(t,content){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:{comment:{body:content}}})},h=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},j=function(article){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(article.slug),data:{article:article}})}},189:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return l})),r.d(e,"a",(function(){return f})),r.d(e,"e",(function(){return d})),r.d(e,"b",(function(){return m}));var n=r(62),o=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})},l=function(t){return Object(n.b)({method:"PUT",url:"/api/user",data:{user:t}})},f=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})},m=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})}},190:function(t,e,r){var content=r(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("29525de0",content,!0,{sourceMap:!1})},202:function(t,e,r){"use strict";var n=r(190);r.n(n).a},203:function(t,e,r){(e=r(79)(!1)).push([t.i,".unactive[data-v-46252074]{background-color:transparent!important;color:#fff!important}",""]),t.exports=e},263:function(t,e,r){"use strict";r.r(e);r(78),r(30),r(63),r(31),r(13),r(45);var n=r(42),o=(r(29),r(4)),c=r(44),l=r(32),f=r(188),d=r(189);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={middleware:["authenticated"],name:"UserProfile",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["user"])),asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,m,v,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([Object(d.b)(t.params.username),Object(f.g)({author:t.params.username}),Object(f.g)({favorited:t.params.username})]);case 3:return r=e.sent,o=Object(n.a)(r,3),c=o[0],l=o[1],m=o[2],console.log("get profile---\x3e",c.data,l,m),v=t.route.fullPath.indexOf("favourites")>0,(O=v?m.data.articles:l.data.articles).forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{profile:c.data.profile,username:t.params.username,followDisabled:!1,myArticles:l.data.articles,favArticles:m.data.articles,isFav:v,articles:O});case 15:e.prev=15,e.t0=e.catch(0),console.log("get profile error---\x3e",e.t0);case 18:return e.abrupt("return",{profile:{image:"",username:"",bio:""},username:t.params.username,followDisabled:!1,isFav:!1,articles:[]});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))()},methods:{goSettings:function(){this.$router.push("/settings")},handleFollow:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.followDisabled){e.next=15;break}if(t.followDisabled=!0,!t.profile.following){e.next=10;break}return e.next=5,Object(d.e)(t.username);case 5:r=e.sent,r.data,t.profile.following=!1,e.next=15;break;case 10:return e.next=12,Object(d.a)(t.username);case 12:n=e.sent,n.data,t.profile.following=!0;case 15:t.followDisabled=!1;case 16:case"end":return e.stop()}}),e)})))()},onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(f.e)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(f.b)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},O=(r(202),r(22)),component=Object(O.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.profile.username))]),t._v(" "),r("p",[t._v("\n            "+t._s(t.profile.bio)+"\n          ")]),t._v(" "),t.profile.username!=t.user.username?r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",on:{click:t.handleFollow}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n             \n            "+t._s(t.profile.following?"Unfollow "+t.profile.username:"Follow "+t.profile.username)+" \n          ")]):r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",on:{click:t.goSettings}},[r("i",{staticClass:"ion-gear-a"}),t._v("\n             \n            Edit Profile Settings \n          ")])])])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{unactive:!0===t.isFav},attrs:{to:"/profile/"+t.profile.username}},[t._v("My Articles")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:!0===t.isFav},attrs:{to:"/profile/"+t.profile.username+"/favourites"}},[t._v("Favorited Articles")])],1)])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])]),t._v(" "),r("ul",{staticClass:"tag-list"},t._l(article.tagList,(function(e){return r("li",{key:e,staticClass:"tag-default tag-pill tag-outline"},[t._v(t._s(e))])})),0)],1)}))],2)])])])}),[],!1,null,"46252074",null);e.default=component.exports}}]);