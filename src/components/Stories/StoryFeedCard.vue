<template>
  <v-card flat v-if="story">
    <v-card-title>{{story.title}}</v-card-title>
    <v-card-subtitle>{{story.author}}</v-card-subtitle>
    <v-card-text>{{story.text.substring(0, 257).trim() + "..."}}</v-card-text>
    <v-card-actions>
      <app-btn text :to="`/story/${story.id}`">Read More</app-btn>
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
