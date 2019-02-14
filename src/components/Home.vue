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
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      apiRes: "",
      error: ""
    };
  },
  methods: {
    fetchData() {
      this.loading = true;

      axios
        .get("http://localhost:3000/hgealth")
        .then(res => {
          this.apiRes = res.data;
        })
        .catch(res => {
          this.error = res.response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
