import Vue from 'vue';
import firestore from '../../firebaseConfig'

const stories = {
  state: () => ({
    lastDoc: {},
    stories: {},
  }),

  mutations: {
    addStories(state, snapshot) {
      snapshot.forEach((doc) => {
        state.lastDoc = doc;
        // attach the id to the doc
        const docData = doc.data();
        docData.id = doc.id;
        Vue.set(state.stories, doc.id, docData);
      });
    },
  },

  actions: {
    async loadStories({ commit }, limit) {
      // get the newest stories
      const snapshot = await firestore.collections.stories
        .orderBy("timestamp")
        .limit(limit)
        .get();

      commit("addStories", snapshot);
    },
    async submitStory(
      {
        commit, //eslint-disable-line
      },
      story
    ) {
      try {
        await firestore.collections.stories.add({
          title: story.title,
          author: story.author,
          text: story.text,
          timestamp: firestore.timestamp,
        });
      } catch (e) {
        return {
          status: "Failed",
        };
      }
      // if no errors return okay
      return {
        status: "OK",
      };
    },
    async loadNextStories({ commit, state }, limit) {
      // load up to five documents, starting at the most recently added one
      const snapshot = await firestore.collections.stories
        .orderBy("timestamp")
        .startAfter(state.lastDoc)
        .limit(limit)
        .get();

      // return empty if no docs
      if (snapshot.empty) {
        return {
          empty: true,
        };
      }

      // add each document to the state
      commit("addStories", snapshot);
      return {
        empty: false
      };
    }
  }
};

export default stories;
