// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import v1RoutesGettingStarted from './getting-started/v1.js'
import v2RoutesGettingStarted from './getting-started/v2.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/features',
      name: 'Features',
      component: () => import('@/views/FeaturesView.vue')
    },
    {
      path: '/installation',
      name: 'Installation',
      component: () => import('@/views/InstallationView.vue')
    },
    {
      path: '/examples',
      name: 'Examples',
      component: () => import('@/views/ExamplesView.vue')
    },


    {
      path: '/v1',
      children: v1RoutesGettingStarted
    },
    {
      path: '/v2',
      children: v2RoutesGettingStarted
    },


    // ✅ Catch-all fallback
    {
      path: '/:pathMatch(.*)*',
      redirect: '/v1/getting-started'
    }
  ]
})

export default router
