// router/docs/v2.js
const v2RoutesDocs = [
  {
    path: '', // 👈 no leading slash
    name: 'docs-v2',
    component: () => import('@/views/docs/v2/docs/Index.vue'),
    children: [
      {
        path: 'overview',
        name: 'docs-v2-overview',
        component: () => import('@/views/docs/v2/docs/Overview.vue')
      },
    ]
  }
]

export default v2RoutesDocs
