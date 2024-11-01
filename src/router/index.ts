import { createRouter, createWebHistory } from 'vue-router'
import Bai1 from '@/views/buoi-4/bai-1.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bai1-buoi4',
      name: 'bai1-buoi4',
      component: Bai1,
    }
  ]
})

export default router
