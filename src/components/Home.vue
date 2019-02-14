<template>
  <div>home
    <div>board list:
      <div v-if="loading">로딩중</div>
      <div v-else>
        {{ apiRes }}
        <ul>
          <li>
            <router-link to="/board/1">board1</router-link>
          </li>
          <li>
            <router-link to="/board/2">board2</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      apiRes: ""
    };
  },
  methods: {
    fetchData() {
      this.loading = true;

      const req = new XMLHttpRequest();

      req.open("GET", "http://localhost:3000/health");

      req.send();

      req.addEventListener("load", () => {
        this.loading = false;
        this.apiRes = {
          status: req.status,
          statusText: req.statusText,
          response: JSON.parse(req.response)
        };
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
