<template>
  <v-container class="fill-height">
      <v-row
      justify="center"
      align="start"
      >
        <v-col cols="12" lg="7">
            <story-viewer-header class="mt-6">
                <template v-slot:title>
                    {{story.title}}
                </template>
                 <template v-slot:subtitle>
                    {{story.author}}
                </template>
            </story-viewer-header>
        </v-col>
        <v-col cols="12" lg="7">
            <story-viewer-body>
                {{story.text}}
            </story-viewer-body>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    props: {
        story: Object
    },
    components: {
        storyViewerHeader: () => import('./StoryViewerHeader'),
        storyViewerBody: () => import('./StoryViewerBody')
    }
}
</script>
