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
        <v-img :src="meta.photo.url" aspect-ratio="1" class="text-right">
          <app-btn icon @clicked="$emit('clicked', meta.id)">
            <v-icon color="rgba(255, 255, 255, 0.6)">mdi-card-search-outline</v-icon>
          </app-btn>
          <card-subtitle
            :display="hover || $vuetify.breakpoint.mdAndDown"
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
    appBtn: () => import('../core/AppButton')
  }
};
</script>
