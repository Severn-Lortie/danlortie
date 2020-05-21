<template>
<v-container
    class="fill-height"
    fluid
>
    <v-row
        align="start"
        justify="center"
    >
        <v-col
            md="10"
            lg="9"
            cols="11"
        >
            <v-row
                align="start"
                :justify="justify"
            >
                <v-col
                cols="12"
                :class="{'text-center':$vuetify.breakpoint.smAndDown}"
                >
                    <app-btn
                        color="accent"
                        to="/submit"
                    >
                        Share your story
                    </app-btn>
                </v-col>
                <v-col
                    v-for="story in stories"
                    :key="story.id"
                    md="6"
                    sm="10"
                    cols="12"
                >
                    <story-feed-card :story="story" />
                </v-col>
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <app-btn
                        @clicked="loadMore"
                    >
                        Load more
                    </app-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <app-snackbar v-model="display">
        There are no more stories to load.
    </app-snackbar>
</v-container>
</template>

<script>
export default {
    data: () => ({
        storiesPerLoad: 10,
        display: false
    }),
    components: {
        storyFeedCard: () => import('./StoryFeedCard'),
        appSnackbar: () => import('../core/AppSnackbar'),
        appBtn: () => import('../core/AppButton')
    },
    computed: {
        stories() {
            return this.$store.state.story.stories;
        },
        justify() {
            return this.$vuetify.breakpoint.smAndDown ? 'center' : 'start';
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
