import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Login = { template: "<div>login page</div>" };
const NotFound = { template: "<div>page not found</div>" };

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: App },
    { path: "/login", component: Login },
    { path: "*", component: NotFound }
  ]
});

new Vue({
  el: "#app",
  router,
  render: h => h({ template: "<router-view></router-view>" })
});
