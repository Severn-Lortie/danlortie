<template>
  <div class="body-1 whitespace">
      <!-- main text slot -->
      <vue-markdown class="whitespace" :source="source" />
  </div>
</template>

<script>
export default {
    components: {
        VueMarkdown: () => import('vue-markdown')
    },
    props: {
        source: String
    }
}
</script>

<style scoped>
.whitespace {
    white-space: pre-line;
    word-wrap: break-word;
}
</style>
