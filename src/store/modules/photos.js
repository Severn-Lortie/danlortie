import firebase from "../../firebaseConfig";
import Vue from "vue";

const photos = {
  state: () => ({
    lastDoc: {},
    photos: []
  }),
  mutations: {
    addPhoto(state, doc) {
      state.photos.push(doc.data());
      state.lastDoc = {
        doc,
        index: (state.photos.length - 1)
      }
    },
    setPhotoUrl(state, params) {
      Vue.set(state.photos[params.index], "url", params.url);
      Vue.set(state.photos[params.index], "fullUrl", params.fullUrl);
    },
  },
  actions: {
    async loadUrls({state, commit}) {
      state.photos.forEach( async (photo, i) => {
        const url = await firebase.storage.ref(photo.thumbPrefix).getDownloadURL();
        const fullUrl = await firebase.storage.ref(photo.fullPrefix).getDownloadURL();
        commit('setPhotoUrl', {
          index: i,
          url,
          fullUrl
        });
      });
    },
    async loadPhotos({commit, dispatch}, limit) {
      let snapshot = await firebase.db
        .collection("photos")
        .orderBy("decade")
        .limit(limit)
        .get();

      // add the metas
      snapshot.docs.forEach( async (doc) => {
        commit("addPhoto", doc);
      });

      // load the urls
      dispatch('loadUrls');

    },
    async loadNextPhotos({ state, commit, dispatch}, limit) { 
      // start at the head of local photos
      const snapshot = await firebase.db
        .collection("photos")
        .orderBy("decade")
        .limit(limit)
        .startAfter(state.lastDoc.doc)
        .get();

      if (snapshot.empty) {
        return {empty: true}
      }  
      
      snapshot.forEach( async (doc) => {
        // commit the meta
        commit('addPhoto', doc);
      });

      dispatch('loadUrls');
      return {empty: false}
    },
  },
};

export default photos;
