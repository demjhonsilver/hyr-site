// router/docs/v1.js
const v1RoutesDocs = [
  {
    path: '', // 👈 no leading slash
    name: 'docs-v1',
    component: () => import('@/views/docs/v1/docs/Index.vue'),
    children: [
      {
        path: 'overview',
        name: 'docs-v1-overview',
        component: () => import('@/views/docs/v1/docs/Overview.vue')
      },
    ]
  }
]

export default v1RoutesDocs
