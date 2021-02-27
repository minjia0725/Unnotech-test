import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: 'books' },
  {
    path: '/books',
    name: 'Books',
    component: () => import('@/views/Books.vue'),
    children: [
      {
        path: ':id',
        name: 'Book',
        component: () => import('@/views/Books.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
