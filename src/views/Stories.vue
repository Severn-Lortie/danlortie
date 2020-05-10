<template>
  <div>
    <story-feed />
  </div>
</template>

<script>
export default {
  components: {
    storyFeed: () => import("../components/Stories/StoryFeed")
  },
  created() {
    // initally load five stories
    this.$store.dispatch("loadStories", 5);
  }
};
</script>
