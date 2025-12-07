// router/getting-started/v2.js
const v2Routes = [
  {
    path: '', // 👈 no leading slash
    name: 'v2-getting-started',
    component: () => import('@/views/getting-started/v2/getting-started/Index.vue'),
    children: [
      {
        path: 'overview',
        name: 'v2-overview',
        component: () => import('@/views/getting-started/v2/getting-started/Overview.vue')
      },
      {
        path: 'installation',
        name: 'v2-installation',
        component: () => import('@/views/getting-started/v2/getting-started/Installation.vue')
      },
      {
        path: 'quickstart',
        name: 'v2-quickstart',
        component: () => import('@/views/getting-started/v2/getting-started/QuickStart.vue')
      },
      {
        path: 'concepts',
        name: 'v2-concepts',
        component: () => import('@/views/getting-started/v2/getting-started/Concepts.vue')
      },
      {
        path: 'examples',
        name: 'v2-examples',
        component: () => import('@/views/getting-started/v2/getting-started/Examples.vue')
      },
    ]
  }
]

export default v2Routes
