<template>
  <div>
    Card {{ cid }}
    <div v-if="loading">로딩중...</div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      cid: 0
    };
  },
  watch: {
    $route: {
      handler: "fetchData",
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.cid = this.$route.params.cid;
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
