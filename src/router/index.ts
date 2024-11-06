import { createRouter, createWebHistory } from 'vue-router'
import Bai2 from '@/views/bai2/bai2.vue'
import Bai3 from '@/views/bai3/bai3.vue'
import Bai4 from '@/views/bai4/bai4.vue'
import Bai5 from '@/views/bai5/bai5.vue'
import Bai6 from '@/views/bai6/bai6.vue'
import bai7 from '@/views/bai7/bai7.vue'
import MainContent from '@/views/bai7/MainContent.vue'
import NoteDetail from '@/views/bai7/PostDetail.vue'
import PostDetail from '@/views/bai7/PostDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bai2',
      name: 'bai2',
      component: Bai2,
    },
    {
      path: '/bai3',
      name: 'bai3',
      component: Bai3,
    },
    {
      path: '/bai4',
      name: 'bai4',
      component: Bai4,
    },
    {
      path: '/bai5',
      name: 'bai5',
      component: Bai5,
    },
    {
      path: '/bai6',
      name: 'bai6',
      component: Bai6,
    },
    {
      path: '/bai7',
      name: 'bai7',
      component: bai7,
    },
    {
      path: '/main-content',
      name: 'main-content',
      component: MainContent,
    },
    {
      path: '/post/:id',
      name: 'post-detail',
      component: PostDetail,
      props:true
    }
  ]
})

export default router
