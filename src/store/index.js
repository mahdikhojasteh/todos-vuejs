import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";
import todos from "./modules/todos";

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [
  //   createPersistedState({
  //     paths: ["todoList"],
  //   }),
  // ],
  modules: {
    todos,
  },
  state: {},
  mutations: {},
  actions: {},
});
