<template>
  <div class="sidebar-area">
    <div class="flex-container" v-if="this.$store.state.permission === 'Guest'">
      <div class="log-in">
        <div>username</div>
        <input v-model="username" type="text" />
        <div>password</div>
        <input v-model="password" type="password" />
      </div>
      <div class="login-button">
        <button class="btn" @click="login">Log in</button>
      </div>
    </div>

    <div class="name">dawd</div>
  </div>
</template>
<style scoped>
.login-button {
  margin-top: 50px;
}
.log-in {
  width: 60%;
  margin: 10px;
  color: white;
}
.log-in :nth-child(n) {
  margin-top: 5px;
}
.name {
  font-size: 20px;
  padding: 20px;
  background-color: rgb(180, 180, 180);
  cursor: pointer;
}
.name:hover {
  background-color: rgb(218, 218, 218);
}
.sidebar-area {
  background-color: rgb(31, 33, 34);
  width: 20%;
  height: 100vh;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: async function() {
      if (this.username !== "" && this.password !== "") {
        try {
          const { data } = await axios.post("http://localhost:8081/login", {
            username: this.username,
            password: this.password,
          });
          this.$store.commit({
            type: "setpermission",
            permission: data.payload.role,
          });
          this.$store.commit({
            type: "setusername",
            username: data.payload.username,
          });
          this.$store.commit({
            type: "setvoted",
            voted: data.payload.voted,
          });
          localStorage.setItem("token", data.token);
        } catch (error) {
          alert(
            "Wrong username or password please cheecking and try again later"
          );
        }
      } else {
        alert("please enter your ID and Password before log in");
      }
      this.password = "";
    },
    logout: async function() {
      localStorage.clear();
      this.$store.state.permission = "Guest";
    },
  },
  name: "navbar",
};
</script>
