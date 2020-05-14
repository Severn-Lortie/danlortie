<template>
  <v-lazy
    v-model="isActive"
    :options="{
        threshold: .05
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-hover v-slot:default="{ hover }">
      <v-card flat tile @click.stop="$emit('clicked', meta.id)" :ripple="false">
        <v-img :src="meta.photo.url" aspect-ratio="1">
          <template v-slot:placeholder>
            <image-progress />
          </template>
          <card-subtitle
            :display="hover || $vuetify.breakpoint.xs"
            v-if="meta.photo.subtitle"
          >{{meta.photo.subtitle}}</card-subtitle>
        </v-img>
      </v-card>
    </v-hover>
  </v-lazy>
</template>

<script>
export default {
  data: () => ({
    isActive: false
  }),
  props: {
    meta: Object
  },
  components: {
    cardSubtitle: () => import("./PhotoGalleryCardSubtitle"),
    imageProgress: () => import("../core/AppImageProgress")
  }
};
</script>
