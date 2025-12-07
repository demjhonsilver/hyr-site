// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import v1RoutesGettingStarted from './getting-started/v1.js'
import v2RoutesGettingStarted from './getting-started/v2.js'
import v1RoutesDocs from './docs/v1.js'
import v2RoutesDocs from './docs/v2.js'
// import v2RoutesGettingStarted from './getting-started/v2.js'

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
      path: '/examples',
      name: 'Examples',
      component: () => import('@/views/ExamplesView.vue')
    },

    // Redirect /docs → /docs/v1/overview
    {
      path: '/docs',
      redirect: '/docs/v1/overview'
    },

    // Getting Started V1
    {
      path: '/getting-started/v1',
      name: 'GettingStartedV1',
      children: v1RoutesGettingStarted
    },
    {
      path: '/getting-started/v2',
      name: 'GettingStartedV2',
      children: v2RoutesGettingStarted
    },

    // Docs V1
    {
      path: '/docs/v1',
      name: 'DocsV1',
      children: v1RoutesDocs
    },
    {
      path: '/docs/v2',
      children: v2RoutesDocs
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue')
    }
  ],

  // ✅ Scroll behavior for hash links
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
          resolve({ el: to.hash })
        }, 50) // slight delay to ensure DOM rendered
      })
    }
    return { top: 0 }
  }
})

export default router