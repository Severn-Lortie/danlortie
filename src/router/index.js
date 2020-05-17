import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: () => import('../views/Home')
    },
    {
      path: '/obituary',
      component: () => import('../views/Obituary.vue')
    },
    {
      path: '/photos',
      component: () => import('../views/Photos')
    },
    {
      path: '/stories',
      component: () => import('../views/Stories')
    },
    {
      path: '/story/:id',
      component: () => import('../views/StoryViewer')
    },
    {
      path: '/submit',
      component: () => import('../views/Forum')
    },
    {
      path: '/remembrances',
      component: () => import('../views/Remembrances')
    },
    // 404
    {
      path: '*',
      component: () => import('../views/404')
    }
  ];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
