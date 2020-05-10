<template>
  <v-snackbar
  v-model="model"
  :timeout="timeout"
  >
    <!-- message slot -->
    <slot></slot>
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
    mixins: [model]
}
</script>
