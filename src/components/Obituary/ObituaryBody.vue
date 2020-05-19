<template>
  <div class="body-1 whitespace word-break">
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
