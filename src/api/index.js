import axios from "axios";
import router from "../router";

const DOMAIN = "http://localhost:3000";
const UNAUTHORIZED = 401;
const onUnauthororized = () => {
  router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`);
};

const request = (methods, url, data) => {
  return axios({
    methods,
    url: DOMAIN + url,
    data
  })
    .then(result => result.data)
    .catch(result => {
      const { status } = result.response;
      if (status === UNAUTHORIZED) onUnauthororized();
      throw result.response;
    });
};

export const board = {
  fetch() {
    return request("get", "/boards");
  }
};

export const auth = {
  login(email, password) {
    return request("post", "/login", { email, password });
  }
};
