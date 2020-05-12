<template>
  <div class="body-1 whitespace">
      <!-- main text slot -->
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.whitespace {
    white-space: pre-line;
    word-wrap: break-word;
}
</style>
