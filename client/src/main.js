import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Contact from "./components/Contact.vue";
import Landing from "./components/Landing.vue";
import Login from "./components/Login.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/contact", component: Contact },
  { path: "/", component: Landing },
  { path: "/login", component: Login },
  { path: "/logout", component: Landing },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

const myNav = document.querySelector("nav");

window.onscroll = function() {
  "use strict";
  if (window.pageYOffset === 0) {
    myNav.classList.add("transparent");
    myNav.classList.remove("colored");
  } else {
    myNav.classList.remove("transparent");
    myNav.classList.add("colored");
  }
};
