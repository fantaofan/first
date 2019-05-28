<template>
  <div>
    vuex
    <span @click="modifyUsername">修改名字</span><br />
    <span @click="changeName">actions修改名字</span><br />
    <!-- {{$store.state.username}} -->
    <!-- {{username}} -->
    <!-- {{username1}} -->
    <!-- {{name1}} -->
    {{ name }}
    {{ $store.getters.rename }}
    {{ nameU }}
    {{ mname }}
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    // ...mapState(['username']),

    ...mapState("user", ["name"]),

    ...mapGetters({
      nameU: "rename"
    }),
    ...mapGetters("user", ["mname"])

    // ...mapState({
    //     username1: state => state.username,
    //     name1: state => state.user.name
    // })
  },
  methods: {
    modifyUsername() {
      this.$store.commit("mname", "lili");
    },
    changeName() {
      this.$store.dispatch("change");
    }
  }
};
</script>
<style lang="less" scoped>
div {
  text-align: center;
  font-size: 25px;
  margin-top: 20px;
}
</style>
