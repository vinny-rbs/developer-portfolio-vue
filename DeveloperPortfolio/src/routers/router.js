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
      path: '/projects',
      name: 'projects',
      component: () => import('@/Views/Projects.vue'),
    },
    {
      path: '/ability',
      name: 'ability',
      component: () => import('@/Views/Ability.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/Views/NotFound.vue')
    },
  ],
})

export default router
