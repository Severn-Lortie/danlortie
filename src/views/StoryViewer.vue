<template>
    <div>
        <story-viewer :story="story"></story-viewer>
    </div>
</template>

<script>
export default {
    components: {
        StoryViewer: () => import('../components/StoryViewer/StoryViewer')
    },
    data: () => ({
        story: {}
    }),
    mounted() {
        // check that the id of the story is valid
        if (this.$store.state.stories[this.$route.params.id]) {
            this.story = this.$store.state.stories[this.$route.params.id];
        } else {
            this.$router.push('/');
        }
    }
}
</script>
