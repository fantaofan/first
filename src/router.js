import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import My from './views/My.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history', // hash/history
  routes: [
    {
      path: "/",
      name: "home",
      // component: Home
      component: () =>
        import("./views/Home.vue")
    },
    {
      path: "/my",
      name: "my",
      // component: My
      component: () =>
        import("./views/My.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("./views/About.vue")
    },
    {
      path: "/car",
      name: "car",
      component: () =>
        import("./views/Car.vue")
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () =>
        import("./views/Detail.vue")
    }
  ]
});
