<template>
  <div>home
    <div>board list:
      <div v-if="loading">로딩중</div>
      <div v-else>
        <div v-for="b in boards" :key="b.id">{{ b }}</div>
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
import { board } from "../api";

export default {
  data() {
    return {
      loading: false,
      boards: []
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      board
        .fetch()
        .then(data => {
          this.boards = data;
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
