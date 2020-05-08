import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import Home from '../views/Home'
import Photos from '../views/Photos'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/photos',
      component: Photos
    }
  ];

const router = new VueRouter({
  routes
})

export default router
