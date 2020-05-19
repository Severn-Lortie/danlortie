<template>
  <v-container class="fill-height">
    <v-row justify="center" align="start">
      <v-col cols="12" md="7" lg="6" class="text-left">
        <story-viewer-header>
          <template v-slot:title>
            {{ story.title }}
          </template>
          <template v-slot:subtitle>
            {{ story.author }}
          </template>
        </story-viewer-header>
         <viewer-body class="mt-4" :source="story.text" />
      </v-col>
     
    </v-row>
  </v-container>
</template>

<script>
import items from "../../mixins/Items";

export default {
  mixins: [items],
  data: () => ({
    module: "story",
    items: "stories"
  }),
  components: {
    StoryViewerHeader: () => import("./StoryViewerHeader"),
    ViewerBody: () => import("../ViewerBody")
  },
  computed: {
    story() {
      return this.item;
    }
  }
};
</script>
