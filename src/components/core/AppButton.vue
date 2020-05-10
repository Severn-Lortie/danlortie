<template>
  <v-btn
  v-bind="$attrs"
  class="text-capitalize"
  elevation="0"
  @click.stop="$emit('clicked')"
  >
      <slot></slot>
  </v-btn>
</template>

<script>
export default {
    inheritAttrs: true
}
</script>
