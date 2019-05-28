import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
import user from "./moudle/user";
const state = {
  username: "lilei"
};
export default new Vuex.Store({
  strict: process.env.NODE_ENV == "development", // 只是给开发人员看的 严格模式下 state不用mutations修改会报错
  state,
  getters: {
    // 必须有返回值
    rename(state) {
      return state.username.toUpperCase();
    }
  },
  actions: {
    change({ commit }) {
      // actions可以多次提交
      setTimeout(() => {
        commit("mchange", "第一次的名字");
      }, 1000);
      setTimeout(() => {
        commit("mchange", "第二次的名字");
      }, 3000);
    }
  },
  mutations: {
    mname(state, payload) {
      // 一般mutations只用来修改state状态
      state.username = payload;
    },
    mchange(state, payload) {
      state.username = payload;
    }
  },
  modules: {
    user
  }
});
