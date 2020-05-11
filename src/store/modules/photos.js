import firebase from "../../firebaseConfig";

const photos = {
  state: () => ({
    photos: [],
  }),
  mutations: {
    addPhoto(state, photo) {
      // don't add dupes
      if (!state.photos.some((obj) => obj.url === photo.url)) {
        state.photos.push({
          url: photo.url,
          subtitle: photo.subtitle,
        });
      }
    },
  },
  actions: {
    async loadAllPhotos({ commit }) {
      // get a ref to the images folder
      const res = await firebase.storage.ref("images").listAll();

      res.prefixes.forEach(async (prefix) => {
        const folder = await prefix.listAll();

        folder.items.forEach(async (photo) => {
          const url = await photo.getDownloadURL();
          const metaData = await photo.getMetadata();

          // some photos may not have a subtitle
          const params = { url };
          if (metaData.customMetadata) {
            params.subtitle = metaData.customMetadata.subtitle;
          }

          commit("addPhoto", params);
        });
      });
    },
  },
};

export default photos;
