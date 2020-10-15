(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{188:function(t,e,r){"use strict";r.d(e,"g",(function(){return c})),r.d(e,"i",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"e",(function(){return v})),r.d(e,"f",(function(){return f})),r.d(e,"h",(function(){return d})),r.d(e,"c",(function(){return m})),r.d(e,"a",(function(){return _})),r.d(e,"d",(function(){return h})),r.d(e,"j",(function(){return O}));var n=r(62),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},m=function(article){return Object(n.b)({method:"POST",url:"/api/articles",data:{article:article}})},_=function(t,content){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:{comment:{body:content}}})},h=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},O=function(article){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(article.slug),data:{article:article}})}},260:function(t,e,r){"use strict";r.r(e);r(78),r(30),r(63);var n=r(44),c=(r(31),r(13),r(45),r(42)),o=(r(184),r(185),r(29),r(4)),l=r(188),v=r(62),f=r(32);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"HomeIndex",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,f,d,m,_,h,O,C,j,y,k,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=Number.parseInt(r.page||1),o=20,f=r.tab||"global_feed",d=r.tag,console.log("query---\x3e",r,f,d),m="global_feed"===f||"tag"===f?l.g:l.i,e.next=9,Promise.all([m({limit:o,offset:(n-1)*o,tag:d}),Object(v.b)({method:"GET",url:"/api/tags"})]);case 9:return _=e.sent,h=Object(c.a)(_,2),O=h[0],C=h[1],j=O.data,y=j.articles,k=j.articlesCount,x=C.data.tags,y.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{articles:y,articlesCount:k,tags:x,limit:o,page:n,tab:f,tag:d});case 17:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tag","tab"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}},Object(f.b)(["user"])),methods:{onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,console.log(article),!article.favorited){t.next=9;break}return t.next=5,Object(l.e)(article.slug);case 5:article.favorited=!1,article.favoritesCount+=-1,t.next=13;break;case 9:return t.next=11,Object(l.b)(article.slug);case 11:article.favorited=!0,article.favoritesCount+=1;case 13:article.favoriteDisabled=!1;case 14:case"end":return t.stop()}}),t)})))()}}},_=r(22),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{to:{name:"home",query:{tab:"your_feed"}},exact:""}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"home"}}},[t._v("Global Feed")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[t.tag?r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"tag",tag:t.tag}}}},[t._v("# "+t._s(t.tag))]):t._e()],1)])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:t.page===e}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:e,tab:"tag"}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[this._v("conduit")]),this._v(" "),e("p",[this._v("A place to share your knowledge.")])])])}],!1,null,"01a0a7ce",null);e.default=component.exports}}]);