<template>
  <v-snackbar
  v-model="model"
  :timeout="timeout"
  >
    <!-- message slot -->
    <slot></slot>

    <!-- close button -->
    <app-btn
        text
        @clicked="model = false"
        >
            Okay.
    </app-btn>
  </v-snackbar>
</template>

<script>
import model from '../../mixins/Model'

export default {
    props: {
        timeout: {
            type: Number,
            default: 2000
        }
    },
    components: {
      appBtn: () => import('../core/AppButton')
    },
    mixins: [model]
}
</script>
