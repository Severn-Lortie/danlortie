import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import Home from '../views/Home'
import Photos from '../views/Photos'
import Stories from '../views/Stories'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/photos',
      component: Photos
    },
    {
      path: '/stories',
      component: Stories
    }
  ];

const router = new VueRouter({
  routes
})

export default router
