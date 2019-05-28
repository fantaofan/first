import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import My from './views/My.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history', // hash/history
  routes: [
    {
      path: "/fuxi",
      name: "fuxi",
      component: () => import("@/views/fuxi.vue")
    },
    {
      path: "/fuxi1",
      name: "fuxi1",
      component: () => import("@/views/fuxi1.vue")
    },
    {
      path: "/prop",
      name: "prop",
      component: () => import("@/views/prop.vue")
    },
    {
      path: "/",
      name: "home",
      // component: Home
      component: () => import("./views/Home.vue"), // 路由懒加载 通过箭头函数和import方式直接使用
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/my",
      name: "my",
      // component: My
      component: () => import("./views/My.vue")
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () =>
    //     import("./views/About.vue")
    // },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.1.vue")
    },
    {
      path: "/car",
      name: "car",
      component: () => import("./views/Car.vue")
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("./views/Detail.vue")
    },
    {
      path: "/*",
      redirect: "/"
      // component: () => import("./views/Home.vue") // history模式下面需要加
    }
  ]
});
