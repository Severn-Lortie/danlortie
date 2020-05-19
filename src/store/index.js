import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// modules
import stories from './modules/stories'
import photos from './modules/photos'
import remembrances from './modules/remembrances'

export default new Vuex.Store({
  modules: {
    story: stories,
    photo: photos,
    remembrance: remembrances
  }
})