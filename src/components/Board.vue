<template>
  <div>
    board {{ bid }}
    <div v-if="loading">로딩중...</div>
    <div v-else>
      <router-link :to="`/board/${bid}/card/1`">card 1</router-link>
      <router-link :to="`/board/${bid}/card/2`">card 2</router-link>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      bid: 0
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.bid = this.$route.params.bid;
        this.loading = false;
      }, 500);
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
</style>
