import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    permission: "Guest",
    voted: false,
  },
  mutations: {
    setpermission(state, payload) {
      state.permission = payload.permission;
    },
    setusername(state, payload) {
      state.username = payload.username;
    },
    setvoted(state, payload) {
      state.voted = payload.voted;
    },
  },
  actions: {},
  modules: {},
});
