<template>
  <div>
    <div v-if="type === 'remembrance'">
      <email-content />
    </div>
    <div v-else-if="type === 'story'">
      <story-content />
    </div>
    <div v-else>
      This item does not exist.
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    type: ""
  }),
  components: {
    EmailContent: () => import("../components/EmailViewer/EmailContent"),
    StoryContent: () => import("../components/StoryViewer/StoryContent")
  },
  created() {
    this.type = this.$route.params.type;
  }
};
</script>
