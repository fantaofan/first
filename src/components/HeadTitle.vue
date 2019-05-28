<template>
  <div class="header">
    <i v-if="showArrow" class="iconfont icon-fanhui" @click="goBack"></i>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "headtitle",
  props: {
    showArrow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 返回事件
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  height: 54px;
  background: honeydew;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  i {
    position: absolute;
    left: 0;
  }
}
</style>
