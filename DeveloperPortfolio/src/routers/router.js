import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('@/Views/About.vue'),
    },
    {
      path: '/',
      name: 'projects',
      component: () => import('@/Views/Projects.vue'),
    },
    {
      path: '/',
      name: 'ability',
      component: () => import('@/Views/ability.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/Views/NotFound.vue')
    },
  ],
})

export default router
