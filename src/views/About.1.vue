<template>
  <div class="about">
    <!-- refs可以获取元素或者组件 -->
    <div class="container" @scroll="sLoadM" ref="eleScr">
      <ul class="con-items">
        <!-- <router-link v-for="item in pagelist" :key="item.id" tag="li" :to="{path:'detail'}"> -->
        <router-link
          v-for="item in pagelist"
          :key="item.id"
          tag="li"
          :to="{ name: 'detail', params: { id: item.id } }"
        >
          <!-- <router-link v-for="item in pagelist" :key="item.id" tag='li' :to="{name:'detail',query:{id:item.id}}"> -->
          <img v-lazy="item.img" alt="" />
          <p>{{ item.name }}</p>
          <p>{{ item.info }}</p>
          <p>{{ item.price }}$</p>
          <button class="btn" @click.stop="addCar(item)">添加到购物车</button>
        </router-link>
      </ul>
      <div class="btnbox">
        <button class="btn" @click="loadMore">
          {{ hasMore ? "点击加载更多" : "没有更多了" }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { getPage, addGood, addList } from "../api";
export default {
  name: "about",
  data() {
    return {
      page: 0,
      pagelist: [],
      hasMore: true
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let {
        data: { hasMore, pagedata }
      } = await getPage(this.page);
      // 要把原来的数据和重写请求的数据放在一起，这样才是所有的数据
      // this.pagelist = this.pagelist.concat(pagedata);
      this.pagelist = [...this.pagelist, ...pagedata];
      this.hasMore = hasMore;
    },
    // 滚动加载更多
    sLoadM() {
      // console.log(123)
      // console.dir(this.$refs.eleScr);
      // 函数节流/函数防抖
      // 我规定在一段时间内只触发一次
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let { clientHeight, scrollTop, scrollHeight } = this.$refs.eleScr;
        if (scrollTop + clientHeight + 20 > scrollHeight) {
          // alert("到底部了");
          // 加载更多
          this.loadMore();
        }
      }, 13);
    },
    // 加载更多
    loadMore() {
      this.page++; // 页数加1
      // 如果hasMore为false表示没有更多了就不再执行请求
      if (!this.hasMore) return;
      this.getList();
    },
    // 添加到购物车
    async addCar(good) {
      // 提交请求到后端
      // good = JSON.stringify(good);
      let { code, msg } = await addGood(good);
      if (code == 200) {
        alert("添加成功");
      } else {
        alert("网络错误，请稍后再试");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.con-items {
  box-sizing: border-box;
  padding: 0 20px;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.btnbox {
  text-align: center;
}
.btn {
  display: inline-block;
  outline: none;
  appearance: none;
  border-radius: 15px;
  background-color: antiquewhite;
  width: 200px;
  height: 60px;
  font-size: 30px;
  line-height: 60px;
}
</style>
