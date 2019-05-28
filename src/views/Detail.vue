<template>
  <div class="con">
    <head-title :showArrow="true">详情页</head-title>
    <!-- <HeadTitle :showArrow="true">详情页</HeadTitle> -->
    <img :src="single.img" alt="" />
    <p>{{ single.name }}</p>
    <p>{{ single.info }}</p>
    <p>{{ single.price }}$</p>
  </div>
</template>
<script>
import { getDetail } from "../api";
import HeadTitle from "../components/HeadTitle";
export default {
  name: "detail",
  components: {
    HeadTitle
  },
  data() {
    return {
      single: {
        img: null,
        name: null,
        info: null,
        price: null
      }
    };
  },
  created() {
    this.Detail();
  },
  computed: {
    deId() {
      return this.$route.params.id;
    }
  },
  methods: {
    // 发送详情请求
    async Detail() {
      let { data } = await getDetail(this.deId);
      this.single = data;
      if (JSON.stringify(this.single) == "{}") {
        this.$router.push("/About");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.con {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 30;
  background: white;
  overflow-y: auto;
}
</style>
