<template>
  <div>
    <story-viewer v-if="story" :story="story"></story-viewer>
  </div>
</template>

<script>
export default {
  components: {
    StoryViewer: () => import("../components/StoryViewer/StoryViewer"),
  },
  computed: {
    story() {
        if (this.$store.state.story.stories) {
            return this.$store.state.story.stories[this.$route.params.id];
        } else {
            return {};
        }
    }
  }
};
</script>
