<template>
  <v-dialog
    max-width="80%"
    v-model="model"
    hide-overlay
    :fullscreen="$vuetify.breakpoint.xs"
  >
    <v-btn
      fab
      absolute
      color="transparent"
      elevation="0"
      v-if="$vuetify.breakpoint.xs"
    >
      <v-icon @click.stop="model = false">mdi-close</v-icon>
    </v-btn>

    <!-- carousel -->
    <slot></slot>
  </v-dialog>
</template>

<script>
import model from "../../mixins/Model";

export default {
  mixins: [model]
};
</script>
