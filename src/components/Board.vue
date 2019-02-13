<template>
  <div>
    board {{ bid }}
    <router-link :to="`/board/${bid}/card/1`">card 1</router-link>
    <router-link :to="`/board/${bid}/card/2`">card 2</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bid: 0
    };
  },
  created() {
    this.bid = this.$route.params.bid;
  }
};
</script>

<style>
</style>
