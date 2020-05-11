<template>
<v-hover v-slot:default="{ hover }">
    <v-card
        flat
        tile
        @click.stop="$emit('clicked', id)"
        :ripple="false"
    >
        <v-img
            :src="src"
            aspect-ratio="1"
        >
            <photo-gallery-card-subtitle :hover="hover">
                {{subtitle}}
            </photo-gallery-card-subtitle>
        </v-img>
    </v-card>
</v-hover>
</template>

<script>
export default {
    props: {
        subtitle: String,
        src: String,
        id: Number
    },
    components: {
        photoGalleryCardSubtitle: () => import('./PhotoGalleryCardSubtitle')
    }
};
</script>

<style scoped>

</style>
