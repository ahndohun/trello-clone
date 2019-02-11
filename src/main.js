import Vue from "vue";
import App from "./App.vue";

const Login = { template: "<div>login page</div>" };

const routes = {
  "/": App,
  "/login": Login
};

new Vue({
  el: "#app",
  computed: {
    VueComponent() {
      return (
        routes[window.location.pathname] || {
          template: "<div>page not found</div>"
        }
      );
    }
  },
  render(h) {
    return h(this.VueComponent);
  }
});
