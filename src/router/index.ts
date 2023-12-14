import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "Login ",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/RegisterView.vue"),
    },
    {
      path: "/recovery",
      name: "Recovery",
      component: () => import("@/views/RecoveryView.vue"),
    },
    {
      path: "/password",
      name: "Password",
      component: () => import("@/views/UpdatePasswordView.vue"),
    },
  ],
});

export default router;
