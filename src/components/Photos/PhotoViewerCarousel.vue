<template>
  <v-carousel
    hide-delimiters
    v-model="model"
    :height="$vuetify.breakpoint.xs ? '100%' : '600'"
    :touchless="$vuetify.breakpoint.xs"
  >
    <!-- photos will be slotted in -->
    <slot></slot>
  </v-carousel>
</template>

<script>
import model from "../../mixins/Model";

export default {
  mixins: [model]
};
</script>
