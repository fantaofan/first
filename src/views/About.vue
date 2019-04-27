<template>
  <div class="about">
    <!-- refs可以获取元素或者组件 -->
    <div class="container" @scroll="sLoadM" ref="eleScr">
      <ul class="con-items">
        <!-- <router-link v-for="item in pagelist" :key="item.id" tag="li" :to="{path:'detail'}"> -->
        <router-link v-for="item in pagelist" :key="item.id" tag="li" :to="{name:'detail',params:{id:item.id}}">
        <!-- <router-link v-for="item in pagelist" :key="item.id" tag='li' :to="{name:'detail',query:{id:item.id}}"> -->
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
          <p>{{item.info}}</p>
          <p>{{item.price}}$</p>
          <button class="btn" @click.stop="addCar(item)">添加到购物车</button>
        </router-link>
      </ul>
      <div class="btnbox">
        <button class="btn" @click="loadMore">{{hasMore ? '点击加载更多' : '没有更多了'}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import {getPage} from '../api'
export default {
  name: 'about',
  data () {
    return {
      page: 0,
      pagelist: [],
      hasMore: true
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList(){
      let {data:{hasMore,pagedata}} = await getPage(this.page);
      // 要把原来的数据和重写请求的数据放在一起，这样才是所有的数据
      // this.pagelist = this.pagelist.concat(pagedata);
      this.pagelist = [...this.pagelist,...pagedata];
      this.hasMore = hasMore;
    },
    // 滚动加载更多
    sLoadM (){
      // console.dir(this.$refs.eleScr);
      // 函数节流/函数防抖
      // 我规定在一段时间内只触发一次
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let {clientHeight,scrollTop,scrollHeight} = this.$refs.eleScr;
        if(scrollTop + clientHeight + 20 > scrollHeight){
          // alert("到底部了");
          // 加载更多
          this.loadMore();
        }
      },13)
    },
    // 加载更多
    loadMore(){
      this.page++; // 页数加1
      // 如果hasMore为false表示没有更多了就不再执行请求
      if(!this.hasMore) return
      this.getList();
    },
    // 添加到购物车
    addCar(good){
      // 从缓存里面取出购物车数组，如果没有，自己定义一个空的
      let carlist = localStorage['carlist'] ? JSON.parse(localStorage['carlist']) : [];
      // 如果购物车已经存在了，数量加1，没有的话数量为1，我们自己定义一个数量的变量叫做count
      let caritem = carlist.find(item => item.id == good.id);
      caritem ? caritem.count += 1 : good.count = 1;
      // 如果购物车有这一项就不再往数组里面添加了
      // sele设置了一个是否选中的值
      if(!caritem){
        carlist = [...carlist,good];
        good.sele = true;
      }else{
        caritem.sele = true;
      }
      // 新的购物车数组再重新扔到缓存里面
      localStorage['carlist'] = JSON.stringify(carlist);
    }
  }
}
</script>
<style lang="less" scoped>
.con-items{
  box-sizing: border-box;
  padding: 0 20px;
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.btnbox{
  text-align: center;
}
.btn{
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
