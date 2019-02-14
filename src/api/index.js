import axios from "axios";
import router from "../router";

const DOMAIN = "http://localhost:3000";
const UNAUTHORIZED = 401;
const onUnauthororized = () => {
  router.push("/login");
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
      if (status === UNAUTHORIZED) return onUnauthororized();
      throw Error(result);
    });
};

export const board = {
  fetch() {
    return request("get", "/boards");
  }
};
