import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import Home from '../views/Home'
import Obituary from '../views/Obituary.vue'
import Photos from '../views/Photos'
import Stories from '../views/Stories'
import StoryViewer from '../views/StoryViewer'
import Forum from '../views/Forum'
import App404 from '../views/404'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/obituary',
      component: Obituary
    },
    {
      path: '/photos',
      component: Photos
    },
    {
      path: '/stories',
      component: Stories
    },
    {
      path: '/story/:id',
      component: StoryViewer
    },
    {
      path: '/submit',
      component: Forum
    },
    // 404
    {
      path: '*',
      component: App404
    }
  ];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
