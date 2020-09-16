<template>
  <div style="padding-top:5rem">
    <input type="text" v-model="username" />
    <input type="password" v-model="password" />
    <button @click="adminLogin">Login</button>
    <div>{{admin}}</div>
    <div v-if="admin">
      <h1>WELCOME MASTER</h1>
    </div>
  </div>
</template>

<script>
import apiCalls from "../apiCalls.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      data: {},
    };
  },
  props: { admin: Boolean },
  methods: {
    adminLogin() {
      const user = {
        username: this.username,
        password: this.password,
      };
      apiCalls.login(user).then((res) => {
        if (res.data.status === "success") this.$router.push("/");
      });
    },
  },
};
</script>
