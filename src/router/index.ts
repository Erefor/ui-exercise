import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/glassmorphism',
      name: 'glassmorphism',
      component: () => import('../views/GlassmorphismView.vue')
    }
  ]
})

export default router
