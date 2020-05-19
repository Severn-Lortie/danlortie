<template>
  <div>
    <story-feed />
  </div>
</template>

<script>
export default {
  components: {
    storyFeed: () => import("../components/Stories/StoryFeed")
  }
};
</script>
