(function(t){function e(e){for(var r,c,o=e[0],i=e[1],u=e[2],d=0,p=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},s=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0195":function(t,e,n){},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"044b":function(t,e,n){},1778:function(t,e,n){"use strict";var r=n("afae"),a=n.n(r);a.a},2684:function(t,e,n){"use strict";var r=n("5cf5"),a=n.n(r);a.a},"2a99":function(t,e,n){"use strict";var r=n("bf7d"),a=n.n(r);a.a},"4bf6":function(t,e,n){"use strict";var r=n("ab1c"),a=n.n(r);a.a},"4cbf":function(t,e,n){"use strict";var r=n("dcc2"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navBar",{attrs:{isAdmin:t.isAdmin},on:{adminLogout:t.adminLogout}}),n("router-view",{attrs:{isAdmin:t.isAdmin,design:t.design},on:{graphicDesign:t.graphicDesign,conceptArt:t.conceptArt}})],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[t._m(0),n("div",{attrs:{id:"NavPageContainer"}},[n("router-link",{staticClass:"navDestination",attrs:{id:"logoContainer","data-icon":"logo",to:"/"}}),n("router-link",{staticClass:"navDestination",attrs:{to:"/portofolio"}},[t._v("Portofolio")]),n("router-link",{staticClass:"navDestination",attrs:{to:"/about"}},[t._v("About")]),n("router-link",{staticClass:"navDestination",attrs:{to:"/contact"}},[t._v("Contact")]),t.isAdmin?n("router-link",{staticClass:"navDestination",attrs:{to:"/addProject"}},[t._v("Add Project")]):t._e()],1),n("social"),t.isAdmin?n("div",{staticClass:"btn btn-danger",staticStyle:{margin:"auto 0"},on:{click:t.logMeOut}},[t._v("Logout")]):t._e()],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{attrs:{"data-icon":"burger-menu"}})])}],u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"socialContainer"}},[n("div",{staticClass:"social",attrs:{"data-icon":"facebook"}}),n("a",{staticClass:"social",attrs:{"data-icon":"instagram",href:"https://www.instagram.com/alphagraphics98/"}}),n("div",{staticClass:"social",attrs:{"data-icon":"linkedin"}})])}],d={},p=d,m=(n("2684"),n("2877")),v=Object(m["a"])(p,u,l,!1,null,"65bdefeb",null),f=v.exports,g=(n("d3b7"),n("96cf"),n("1da1")),h=n("d4ec"),b=n("bee2"),j=n("bc3a"),_=n.n(j),w="api/router/",C=function(){function t(){Object(h["a"])(this,t)}return Object(b["a"])(t,null,[{key:"getProjects",value:function(){return new Promise((function(t,e){_.a.get(w).then((function(e){var n=e.data;t(n)})).catch((function(t){e(t)}))}))}},{key:"getGraphicDesignProjects",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_()({method:"GET",url:"".concat(w,"graphicDesign")});case 3:if(e=t.sent,"success"!==e.data.status){t.next=6;break}return t.abrupt("return",e);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"getConceptArtProjects",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_()({method:"GET",url:"".concat(w,"conceptArt")});case 3:if(e=t.sent,"success"!==e.data.status){t.next=6;break}return t.abrupt("return",e);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"getProject",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_()({method:"GET",url:"".concat(w).concat(e)});case 3:if(n=t.sent,"success"!==n.data.status){t.next=6;break}return t.abrupt("return",n);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getCV",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_()({method:"GET",url:"".concat(w,"cv")});case 3:if(e=t.sent,"success"!==e.data.status){t.next=6;break}return t.abrupt("return",e);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"insertProject",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_()({method:"POST",url:"".concat(w),data:e});case 3:if(n=t.sent,"success"!==n.data.status){t.next=6;break}return t.abrupt("return",n);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"deleteProject",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_()({method:"DELETE",url:"".concat(w,"/").concat(e)});case 3:if(n=t.sent,"success"!==n.data.status){t.next=6;break}return t.abrupt("return",n);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"login",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_()({method:"POST",url:"".concat(w,"/login"),data:e});case 3:if(n=t.sent,"success"!==n.data.status){t.next=7;break}return localStorage.setItem("token",n.data.token),t.abrupt("return",n);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),alert(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"logout",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_()({method:"GET",url:"".concat(w,"admin/logout")});case 3:if(e=t.sent,"success"!==e.data.status){t.next=7;break}return localStorage.removeItem("token"),t.abrupt("return",e);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),y=C,x={data:function(){return{}},props:{isAdmin:Boolean},methods:{logMeOut:function(){var t=this;y.logout().then((function(e){"success"===e.data.status&&t.$emit("adminLogout")}))}},name:"Navigation",components:{social:f}},k=x,P=(n("4cbf"),Object(m["a"])(k,o,i,!1,null,"668072b4",null)),O=P.exports,A={name:"App",data:function(){return{isAdmin:!1,design:!0}},methods:{adminLogout:function(){this.isAdmin=!1,this.$router.push("/")},graphicDesign:function(){this.design=!0},conceptArt:function(){this.design=!1}},watch:{$route:function(t,e){"/login"===e.fullPath&&"/"===t.fullPath&&localStorage.getItem("token")&&(this.isAdmin=!0)}},components:{navBar:O}},D=A,E=(n("034f"),Object(m["a"])(D,s,c,!1,null,null,null)),L=E.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"landing"}),n("div",{staticClass:"container"},[n("div",{staticStyle:{"text-align":"start","font-weight":"bold","letter-spacing":"1px"}},[t._v("Contact Me")]),n("div",{staticClass:"contact-phone"},[n("div",{attrs:{"data-icon":"phone"}}),n("div",{staticClass:"fitcenter"},[t._v("+30 6976 732659")])]),n("div",{staticClass:"contact-email"},[n("div",{attrs:{"data-icon":"email"}}),n("div",{staticClass:"fitcenter"},[t._v("alexandros.efthymiou7@gmail.com")])])])])}],B={mounted:function(){document.getElementById("app").classList.add("bgCover"),document.getElementById("logoContainer").classList.add("visible")}},$=B,I=(n("2a99"),Object(m["a"])($,R,S,!1,null,"41639812",null)),G=I.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("logo"),n("h1",[t._v("Latest Projects!")]),""===t.error?n("div",t._l(t.projects,(function(e){return n("div",{key:e._id,staticClass:"project",style:"background-image: url(../img/"+e.project+";",attrs:{id:""+e._id}},[n("div",{staticClass:"viewProject"},[n("span",[t._v(t._s(e.title))]),n("button",{staticClass:"btn btn-primary",on:{click:function(n){return t.getProjectFromDB(e._id)}}},[t._v("View Project")]),t.isAdmin?n("button",{staticClass:"btn btn-danger",on:{click:function(n){return t.deleteProject(e._id)}}},[t._v("Delete Project")]):t._e()])])})),0):n("div",[n("span",[t._v(t._s(t.error))])]),""!==t.id?n("project",{attrs:{id:t.id,project:t.project},on:{closeProject:t.closeProject}}):t._e()],1)},N=[],F=(n("fb6a"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landingLogo"},[n("div",{staticClass:"center",attrs:{"data-icon":"landing",id:"mainLogo"}},[n("div",{attrs:{id:"footerLogo"}},[t._v("Graphics")])]),n("div",{staticClass:"artistName center",attrs:{id:"nameLogo"}},[n("div",{staticClass:"name"},[n("span",{staticClass:"firstName"},[t._v("Alexandros")]),n("br"),n("span",{staticClass:"lastName"},[t._v("Efthymiou")])]),n("div",{staticClass:"description"},[t._v(" Graphics Designer "),n("span",[t._v("-")]),n("span",[t._v(" Concept Artist "),n("span",{attrs:{"data-icon":"phone"}})])])])])}],V={methods:{fadeIn:function(t){setTimeout((function(){t.classList.add("fade-in"),document.getElementById("logoContainer").style.opacity=1}),2e3)},fadeOut:function(t){setTimeout((function(){t.classList.add("fade-out")}),2e3)}},mounted:function(){document.getElementById("mainLogo").classList.add("centerDelayed"),this.fadeIn(document.getElementById("nameLogo")),this.fadeIn(document.getElementById("logoContainer")),this.fadeOut(document.getElementById("mainLogo")),document.getElementById("logoContainer").style.opacity=0}},q=V,J=(n("1778"),Object(m["a"])(q,F,M,!1,null,"3900b363",null)),U=J.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"close",on:{click:t.closeThisProject}},[t._v("x")]),n("div",{staticClass:"layout"}),n("div",{staticClass:"imgContainer center"},[n("div",{staticClass:"titleContainer"},[n("div",{staticClass:"title",staticStyle:{"text-align":"start"}},[t._v(t._s(t.project.title))]),n("div",{staticClass:"description",staticStyle:{"text-align":"start"}},[t._v(t._s(t.project.description))])]),n("img",{attrs:{src:"../img/"+t.project.project,alt:""}}),n("div",{staticClass:"date"},[t._v(t._s(t.getDate()))])])])},Y=[],z=(n("a15b"),n("ac1f"),n("1276"),{data:function(){return{}},props:{id:String,project:Object},mounted:function(){document.body.classList.add("lockScroll")},beforeDestroy:function(){document.body.classList.remove("lockScroll")},methods:{getDate:function(){if(""!==this.id){var t=this.project.date.split(" ");return t=t.slice(0,4),t=t.join(" "),t}},closeThisProject:function(){this.$emit("closeProject"),this.$destroy()}}}),H=z,K=(n("a10e"),Object(m["a"])(H,W,Y,!1,null,"2afe8a66",null)),Q=K.exports,X={data:function(){return{projects:[],project:{},error:"",id:""}},props:{isAdmin:Boolean},mounted:function(){},created:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getData(),document.getElementById("app").classList.remove("bgCover");case 2:case"end":return e.stop()}}),e)})))()},components:{logo:U,project:Q},methods:{createProject:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.insertProject(t.text);case 2:return e.next=4,y.getProjects();case 4:t.projects=e.sent;case 5:case"end":return e.stop()}}),e)})))()},delete:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,y.deleteProject(t);case 2:return n.next=4,y.getProjects();case 4:e.projects=n.sent;case 5:case"end":return n.stop()}}),n)})))()},getData:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.getProjects();case 3:n=e.sent,n.results>=3?t.projects=n.data.projects.slice(-3).reverse():t.projects=n.data.projects.reverse(),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0.message;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getProjectFromDB:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.getProject(t);case 3:r=n.sent,"success"===r.data.status&&(e.id=t,e.project=r.data.data.project),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},deleteProject:function(t){y.deleteProject(t),this.getData()},closeProject:function(){this.id=""}}},Z=X,tt=(n("78b0"),Object(m["a"])(Z,T,N,!1,null,"27db1446",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"5rem"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{on:{click:t.adminLogin}},[t._v("Login")]),n("div",[t._v(t._s(t.admin))]),t.admin?n("div",[n("h1",[t._v("WELCOME MASTER")])]):t._e()])},rt=[],at={data:function(){return{username:"",password:"",data:{}}},props:{admin:Boolean},methods:{adminLogin:function(){var t=this,e={username:this.username,password:this.password};y.login(e).then((function(e){"success"===e.data.status&&t.$router.push("/")}))}}},st=at,ct=Object(m["a"])(st,nt,rt,!1,null,null,null),ot=ct.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100vh"}},[n("div",{staticClass:"projectContainer"}),n("div",{staticClass:"projectButtonContainer"},[n("button",{staticClass:"btn btn-primary",class:{selected:t.design},on:{click:function(e){return t.viewGraphicDesign(e)}}},[t._v("Graphic Design")]),n("button",{staticClass:"btn btn-primary",class:{selected:!t.design},on:{click:function(e){return t.viewConceptArt(e)}}},[t._v("Concept Art")])]),n("div",{staticClass:"projectInnerContainer"},t._l(t.projects,(function(e){return n("div",{key:e._id,staticClass:"outerProject"},[n("div",{staticClass:"project",attrs:{id:e._id}},[n("img",{staticStyle:{width:"15rem"},attrs:{src:"../img/"+e.project,alt:""}}),n("div",{staticClass:"details"},[n("span",[t._v(t._s(e.title))]),n("button",{staticClass:"btn btn-primary",on:{click:function(n){return t.getProjectFromDB(e._id)}}},[t._v("View Project")]),t.isAdmin?n("button",{staticClass:"btn btn-danger deleteProject",on:{click:function(n){return t.deleteProject(e._id)}}},[t._v("Delete Project")]):t._e()])])])})),0),""!==t.id?n("project",{attrs:{id:t.id,project:t.project},on:{closeProject:t.closeProject}}):t._e()],1)},ut=[],lt={data:function(){return{projects:[],project:{},id:""}},props:{isAdmin:Boolean,design:Boolean},mounted:function(){this.design?this.getGraphicDesign():this.getConceptArt(),document.getElementById("app").classList.add("bgCover")},methods:{viewGraphicDesign:function(t){this.$emit("graphicDesign"),this.getGraphicDesign(),document.querySelector(".selected").classList.remove("selected"),t.target.classList.add("selected")},viewConceptArt:function(t){this.$emit("conceptArt"),this.getConceptArt(),document.querySelector(".selected").classList.remove("selected"),t.target.classList.add("selected")},getConceptArt:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.getConceptArtProjects();case 3:n=e.sent,t.projects=n.data.data.projects,console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.error=e.t0.message;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getGraphicDesign:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.getGraphicDesignProjects();case 3:n=e.sent,t.projects=n.data.data.projects,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0.message;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getProjectFromDB:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.getProject(t);case 3:r=n.sent,"success"===r.data.status&&(e.id=t,e.project=r.data.data.project),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},deleteProject:function(t){y.deleteProject(t),this.$router.push("/")},closeProject:function(){this.id=""}},components:{project:Q},computed:{}},dt=lt,pt=(n("4bf6"),Object(m["a"])(dt,it,ut,!1,null,"0cbb863f",null)),mt=pt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100vh"}},[t.isAdmin?n("div",{staticClass:"form-container center"},[n("div",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleFormControlInput1"}},[t._v("Project Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"exampleFormControlInput1",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._m(0),n("div",{staticClass:"form-check"},[n("label",{staticClass:"form-check-label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-check-input",attrs:{type:"radio",value:"Graphic Design"},domProps:{checked:t._q(t.type,"Graphic Design")},on:{change:function(e){t.type="Graphic Design"}}}),t._v("Graphic Design ")])]),n("div",{staticClass:"form-check"},[n("label",{staticClass:"form-check-label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-check-input",attrs:{type:"radio",value:"Concept Art"},domProps:{checked:t._q(t.type,"Concept Art")},on:{change:function(e){t.type="Concept Art"}}}),t._v("Concept Art ")])]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("Project Description")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",placeholder:"Description",rows:"3"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.postProject}},[t._v("Submit")])])]):t._e()])},ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"fileInput"}},[t._v("Project image in jpeg")]),n("input",{staticClass:"form-control-file",attrs:{type:"file",accept:"image/*",id:"fileInput",name:"photo"}})])}],gt=(n("a4d3"),n("e01a"),{data:function(){return{showForm:!1,title:"",description:"",type:""}},props:{isAdmin:Boolean},methods:{postProject:function(){var t=this,e=new FormData;e.append("title",this.title),e.append("description",this.description),e.append("photo",document.getElementById("fileInput").files[0]),e.append("type",this.type),console.log(e),y.insertProject(e).then((function(e){"success"===e.data.status&&(t.title="",t.description="",document.querySelector("input:checked").unchecked,document.getElementById("fileInput").value="",t.$router.push("/"))}))}}}),ht=gt,bt=(n("c343"),Object(m["a"])(ht,vt,ft,!1,null,"be9e3c4e",null)),jt=bt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100vh"}},[n("div",[n("div",[n("a",{staticClass:"center",attrs:{href:"../assets/alphaGraphicsCV.pdf"}},[t._v("Download CV")]),t.isAdmin?n("button",{staticClass:"center btn btn-success",on:{click:t.uploadNewCv}},[t._v("upload cv")]):t._e()])])])},wt=[],Ct=(n("3ca3"),n("ddb0"),n("2b3d"),{data:function(){return{}},props:{isAdmin:Boolean},methods:{downloadCV:function(){y.getCV().then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=e,n.setAttribute("download","Alpha-Graphics-CV.pdf")})).catch((function(t){console.log(t)}))}}}),yt=Ct,xt=Object(m["a"])(yt,_t,wt,!1,null,"044b48ce",null),kt=xt.exports;r["a"].config.productionTip=!1,r["a"].use(a["a"]);var Pt=[{path:"/contact",component:G},{path:"/",component:et},{path:"/login",component:ot},{path:"/logout",component:et},{path:"/portofolio",component:mt},{path:"/addProject",component:jt},{path:"/about",component:kt}],Ot=new a["a"]({routes:Pt,mode:"history"});new r["a"]({render:function(t){return t(L)},router:Ot}).$mount("#app");var At=document.querySelector("nav");window.onscroll=function(){0===window.pageYOffset?(At.classList.add("transparent"),At.classList.remove("colored")):(At.classList.remove("transparent"),At.classList.add("colored"))}},"5cf5":function(t,e,n){},"78b0":function(t,e,n){"use strict";var r=n("044b"),a=n.n(r);a.a},"85ec":function(t,e,n){},a10e:function(t,e,n){"use strict";var r=n("b9bd"),a=n.n(r);a.a},ab1c:function(t,e,n){},afae:function(t,e,n){},b9bd:function(t,e,n){},bf7d:function(t,e,n){},c343:function(t,e,n){"use strict";var r=n("0195"),a=n.n(r);a.a},dcc2:function(t,e,n){}});
//# sourceMappingURL=app.3ec97c87.js.map