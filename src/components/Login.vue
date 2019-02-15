<template>
  <div>login
    <form @submit.prevent="onSubmit">
      <input type="email" v-model="email">
      <input type="password" v-model="password">
      <button :disabled="invaildForm">로그인</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { auth } from "../api";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  computed: {
    invaildForm() {
      return !this.email || !this.password;
    }
  },
  methods: {
    onSubmit() {
      auth
        .login(this.email, this.password)
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
