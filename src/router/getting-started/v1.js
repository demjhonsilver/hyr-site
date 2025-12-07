// router/getting-started/v1.js
const v1Routes = [
  {
    path: '', // 👈 no leading slash
    name: 'v1-getting-started',
    component: () => import('@/views/getting-started/v1/getting-started/Index.vue'),
    children: [
      {
        path: 'overview',
        name: 'v1-overview',
        component: () => import('@/views/getting-started/v1/getting-started/Overview.vue')
      },
      {
        path: 'installation',
        name: 'v1-installation',
        component: () => import('@/views/getting-started/v1/getting-started/Installation.vue')
      },
      {
        path: 'quickstart',
        name: 'v1-quickstart',
        component: () => import('@/views/getting-started/v1/getting-started/QuickStart.vue')
      },
      {
        path: 'database-setup',
        name: 'v1-database-setup',
        component: () => import('@/views/getting-started/v1/getting-started/DatabaseSetup.vue')
      }, 
      {
        path: 'creating-articles',
        name: 'v1-creating-articles',
        component: () => import('@/views/getting-started/v1/getting-started/CreatingArticles.vue')
      }, 
      
      {
        path: 'concepts',
        name: 'v1-concepts',
        component: () => import('@/views/getting-started/v1/getting-started/Concepts.vue')
      },
      {
        path: 'examples',
        name: 'v1-examples',
        component: () => import('@/views/getting-started/v1/getting-started/Examples.vue')
      },
    ]
  }
]

export default v1Routes
