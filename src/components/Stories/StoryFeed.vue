<template>
<v-container
    class="fill-height"
    fluid
>
    <v-row
        align="start"
        justify="center"
    >
        <v-col cols="10">
            <v-row
                align="start"
                justify="start"
            >
                <v-col cols="6">
                    <v-btn
                        color="accent"
                        to="/submit"
                        class="text-capitalize"
                    >
                        Share your story
                    </v-btn>
                </v-col>
            </v-row>
            <v-row
                align="start"
                justify="start"
            >
                <v-col
                    v-for="story in stories"
                    :key="story.id"
                    cols="6"
                >
                    <story-feed-card :story="story" />
                </v-col>
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <v-btn
                        elevation="0"
                        class="text-capitalize"
                        @click.stop="loadMore"
                    >
                        Load more
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <app-snackbar v-model="display">
        There are no more stories to load.
        <v-btn
            text
            class="text-capitalize"
            @click.stop="display = false"
        >Okay</v-btn>
    </app-snackbar>
</v-container>
</template>

<script>
export default {
    data: () => ({
        storiesPerLoad: 2,
        display: false
    }),
    components: {
        storyFeedCard: () => import('./StoryFeedCard'),
        appSnackbar: () => import('../core/AppSnackbar')
    },
    computed: {
        stories() {
            return this.$store.state.stories;
        }
    },
    methods: {
        loadMore() {
            this.$store.dispatch('loadNextStories', this.storiesPerLoad)
            .then((value) => {
               this.display = value.empty; 
            });
        }
    },
}
</script>
