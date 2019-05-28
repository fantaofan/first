import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import './assets/font.css';
import store from "./store";

// 懒加载插件
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "",
  loading:
    "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1558074676&di=38b47cf88b12a90e4389a786ebeea1e9&src=http://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/adaf2edda3cc7cd9f4f6fbc33f01213fb90e91d5.jpg",
  attempt: 1
});

// 轮播图插件
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
