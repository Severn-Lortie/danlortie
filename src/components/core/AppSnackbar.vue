<template>
  <v-snackbar
  v-model="valueChanged"
  :timeout="timeout"
  >
    <!-- message slot -->
    <slot></slot>
  </v-snackbar>
</template>

<script>
export default {
    props: {
        value: Boolean,
        timeout: {
            type: Number,
            default: 2000
        }
    },
    computed: {
        valueChanged: {
            get() {
                return this.value;
            },
            set(newValue) {
                this.$emit('input', newValue)
            }
        }
    }
}
</script>
