<template>
  <div>
    <router-link to="/">home</router-link>

    <a href v-if="isAuth" @click.prevent="logout">logout</a>
    <router-link v-else to="/login">login</router-link>
  </div>
</template>

<script>
import { setAuthInHeader } from "../api";

export default {
  computed: {
    isAuth() {
      return !!localStorage.getItem("token");
    }
  },
  methods: {
    logout() {
      delete localStorage.token;
      setAuthInHeader(null);
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>
