import Vue from "vue";
import firestore from "../../firebaseConfig";

const stories = {
  state: () => ({
    lastDoc: {},
    stories: {},
    forum: {
      author: '',
      title: '',
      text: '',
    },
  }),
  mutations: {
    addStories(state, snapshot) {
      // set the last doc for the next pagniated fetch
      state.lastDoc = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => {
        // attach the id to the doc
        const docData = doc.data();
        docData.id = doc.id;
        Vue.set(state.stories, doc.id, docData);
      });
     
    },
    setStatus(state, status) {
      // stores the result of the last fetch
      state.status = status;
    },
    setForumAuthor(state, author) {
      Vue.set(state.forum, "author", author);
    },
    setForumTitle(state, title) {
      Vue.set(state.forum, "title", title);
    },
    setForumText(state, text) {
      Vue.set(state.forum, "text", text);
    },
    clearForum(state) {
      state.forum = {
        author: '',
        title: '',
        text: ''
      };
    }
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

    async submitStory({state}) { 
      await firestore.collections.stories.add({
        title: state.forum.title,
        author: state.forum.author,
        text: state.forum.text,
        timestamp: firestore.timestamp,
      });
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
        empty: false,
      };
    },
  },
};

export default stories;
