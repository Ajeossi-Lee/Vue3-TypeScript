import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/pages/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/pages/notFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
