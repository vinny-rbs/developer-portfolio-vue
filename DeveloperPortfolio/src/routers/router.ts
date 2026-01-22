import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: () => import("@/Views/About.vue"),
      meta: { showHeader: true },
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/Views/Projects.vue"),
      meta: { showHeader: true },
    },
    {
      path: "/ability",
      name: "ability",
      component: () => import("@/Views/Ability.vue"),
      meta: { showHeader: true },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/Views/NotFound.vue"),
      meta: { showHeader: false },
    },
  ],
});

export default router;
