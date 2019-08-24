import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import("./views/Register.vue"),
      meta: { requiresVisitor: true }
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import("./views/Login.vue"),
      meta: { requiresVisitor: true }
    },
    {
      path: "/logout",
      name: "Logout",
      component: () =>
        import("./views/Logout.vue"),
      meta: { requiresAuth: true }
    }
  ]
});