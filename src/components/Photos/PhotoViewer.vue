<template>
  <v-dialog
    max-width="80%"
    :fullscreen="$vuetify.breakpoint.xs"
    v-model="model"
    ref="dialog"
  >
    <v-btn
    fab
    absolute
    color="transparent"
    elevation="0"
    @click.stop="model = false"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <!-- Carousel -->
    <slot></slot>
  </v-dialog>
</template>

<script>
import model from "../../mixins/Model";
const bodyScrollLock = require('body-scroll-lock');

export default {
  mixins: [model],
  components: {
    appBtn: () => import("../core/AppButton") //eslint-disable-line
  },
  watch: {
    value(val) {
      if (val) {
        // modal shown
        bodyScrollLock.disableBodyScroll(this.$refs.dialog.$el);
      } else {
        // modal hidden
        bodyScrollLock.enableBodyScroll(this.$refs.dialog.$el);
      }
    }
  }
};
</script>
  
