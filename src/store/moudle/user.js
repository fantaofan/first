export default {
  namespaced: true,
  state: {
    name: "lilei2"
  },
  getters: {
    mname(state) {
      return state.name.toUpperCase();
    }
  }
};
