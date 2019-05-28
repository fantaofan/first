<template>
  <div>
    复习
    <div>
      <!-- (一)、路由跳转 params 传参 取值this.$route.params -->
      <!-- 1 params 手写参数 -->
      <router-link :to="{ path: `detail/${num}` }" tag="div"
        >跳转到详情params1</router-link
      >
      <br />
      <!-- 直接传参params 必须使用name -->
      <router-link :to="{ name: `detail`, params: { id: num } }"
        >跳转到详情params2</router-link
      >
      <br />
      <!-- (二)、路由跳转 query 传参 取值this.$route.query -->
      <router-link :to="{ name: `prop`, query: { id: num } }"
        >跳转到prop组件query</router-link
      >
      <br />
      <!-- this.$router.push -->
      <span @click="toDetail">通过方法跳转路由</span>
    </div>
    <div>
      <!-- 复习props -->
      <!-- <prop :s='1'></prop> -->
      <!-- <prop></prop> -->
      <prop :s1="true" :s2="[5, 6, 7, 8]"></prop>
      <prop ref="propele" :s1="false" :s2="[1, 2, 3, 4]"></prop>
    </div>
    <!-- 调用子组件的方法 -->
    <div @click="showChildMethod">
      通过this.$refs.propele调用prop组件的方法
      不止可以调用方法也可以拿到子组件的实例
    </div>
  </div>
</template>
<script>
import prop from "@/views/prop";
export default {
  mounted() {
    console.log(this.$refs.propele);
    console.log(this.$refs.propele.msg);
  },
  components: {
    prop
  },
  data() {
    return {
      num: 1
    };
  },
  methods: {
    showChildMethod() {
      this.$refs.propele.messageshow();
    },
    toDetail() {
      // this.$router.push('/about')
      this.$router.push({ name: "prop", query: { id: 1 } });
    }
  }
};
</script>
<style lang="less" scoped>
div {
  text-align: center;
  font-size: 25px;
  margin-top: 40px;
}
</style>
