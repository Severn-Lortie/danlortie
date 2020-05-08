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
        cols="10"
        >
            <v-row
                align="start"
                justify="center"
            >
                <v-col
                    v-for="n in 4"
                    :key="n"
                    cols="6"
                >
                    <story-feed-card />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    components: {
        storyFeedCard: () => import('./StoryFeedCard')
    }
}
</script>
