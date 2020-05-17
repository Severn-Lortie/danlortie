<template>
  <v-container fluid class="fill-height">
    <!-- photo viewer dialog -->
    <photo-viewer v-model="dialog">
      <photo-viewer-carousel v-model="currentSlide">
        <photo-viewer-slide
          v-for="(photo, i) in photos"
          :key="i"
          :imageSrc="photo.fullUrl"
          :ready="ready"
        >
        </photo-viewer-slide>
      </photo-viewer-carousel>
    </photo-viewer>

    <v-row align="start" justify="start">
      <v-col cols="12 text-center grey--text text--darken-1 pt-1 pb-1"
        >Click or tap on a photo to view it.</v-col
      >
      <v-col v-for="(photo, i) in photos" md="4" sm="6" cols="12" :key="i">
        <photo-gallery-card :meta="{ photo, id: i }" @clicked="openViewer" />
      </v-col>
      <v-col cols="12" class="text-center">
        <app-btn @clicked="loadNext">
          Load More
        </app-btn>
      </v-col>
    </v-row>
    <app-snackbar v-model="displaySnackbar">
      There are no more photos to load.
    </app-snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    currentSlide: 0,
    dialog: false,
    photosPerLoad: 20,
    displaySnackbar: false,
    ready: false
  }),
  methods: {
    openViewer(index) {
      this.ready = false;
      this.currentSlide = index;
      this.dialog = true;
      setTimeout(() => this.ready = true, 150);
    },
    loadNext() {
      this.$store.dispatch("loadNextPhotos", this.photosPerLoad).then(val => {
        if (val.empty) {
          this.displaySnackbar = true;
        }
      });
    }
  },
  computed: {
    photos() {
      return this.$store.state.photo.photos;
    }
  },
  components: {
    photoGalleryCard: () => import("./PhotoGalleryCard"),
    photoViewer: () => import("./PhotoViewer"),
    photoViewerSlide: () => import("./PhotoViewerSlide"),
    photoViewerCarousel: () => import("./PhotoViewerCarousel"),
    appBtn: () => import("../core/AppButton"),
    appSnackbar: () => import("../core/AppSnackbar")
  }
};
</script>
