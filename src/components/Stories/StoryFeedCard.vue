<template>
  <v-card flat v-if="story">
    <v-sheet color="#272727" tile height="10" />
    <v-card-title>{{ story.title }}</v-card-title>
    <v-card-subtitle>{{ story.author }}</v-card-subtitle>
    <v-card-text>
      <p v-line-clamp:30="3" class="pa-0 ma-0 word-break">{{ story.text }}</p>
    </v-card-text>
    <v-card-actions>
      <app-btn class="mt-2" text :to="`/story/${story.id}`">Read More</app-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  components: {
    appBtn: () => import("../core/AppButton")
  },
  props: {
    story: Object
  }
};
</script>

<style scoped>
.word-break {
  word-break: keep-all !important;
}
</style>
