<template>
  <div class="body-1 whitespace">
      <vue-markdown>{{text}}</vue-markdown>
  </div>
</template>

<script>
const text = require('../../data/obit.json')

export default {
    data: () => ({
        text: text.main
    }),
    components: {
        vueMarkdown: () => import('vue-markdown')
    }
}
</script>

<style scoped>
.whitespace {
    white-space: pre-line;
    word-wrap: break-word;
}
</style>
