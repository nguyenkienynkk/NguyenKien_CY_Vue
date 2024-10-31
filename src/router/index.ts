import { createRouter, createWebHistory } from 'vue-router'
import App from '@/views/buoi-4/bai-1/App.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'app',
      component: App,
    }
  ]
})

export default router
