<template>
  <v-carousel-item class="black" reverse-transition="none" transition="none">
    <v-img :src="imageSrc" height="100%" v-if="ready" contain>
      <template v-slot:placeholder>
        <image-progress/>
      </template>
    </v-img>
  </v-carousel-item>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    ready: Boolean
  },
  components: {
    imageProgress: () => import('../core/AppImageProgress')
  }
};
</script>