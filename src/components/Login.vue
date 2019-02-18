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
import { auth, setAuthInHeader } from "../api";

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
<<<<<<< HEAD
  created() {
    this.rPath = this.$route.query.rPath || "/";
  },
=======
>>>>>>> 3d1bf9caf263cceb39c287ebd5248de0c1cdd796
  methods: {
    onSubmit() {
      auth
        .login(this.email, this.password)
        .then(data => {
<<<<<<< HEAD
          localStorage.setItem("token", data.accessToken);
          setAuthInHeader(data.accessToken);
          this.$router.push(this.rPath);
        })
        .catch(error => {
          this.error = error.data.error;
=======
          console.log(data);
        })
        .catch(error => {
          console.log(error);
>>>>>>> 3d1bf9caf263cceb39c287ebd5248de0c1cdd796
        });
    }
  }
};
</script>
