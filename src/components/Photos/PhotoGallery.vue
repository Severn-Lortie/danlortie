<template>
<v-container
    fluid
    class="fill-height"
>
    <!-- photo viewer dialog -->
    <photo-viewer
        :currentSlide="currentSlide"
        v-model="dialog"
    >
        <photo-viewer-carousel
        v-model="currentSlide"
        >
            <photo-viewer-slide
                v-for="(photo, i) in photos"
                :key="i"
                :imageSrc="photo.url"
            >
            </photo-viewer-slide>
        </photo-viewer-carousel>
    </photo-viewer>

    <v-row
        align="start"
        justify="start"
    >
        <v-col
            v-for="(photo, i) in photos"
            md="4"
            sm="6"
            cols="12"
            :key="i"
        >
            <photo-gallery-card
                :src="photo.url"
                :subtitle="photo.subtitle"
                :id="i"
                @clicked="openViewer"
            ></photo-gallery-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    data: () => ({
        currentSlide: 0,
        dialog: false,
    }),
    methods: {
        openViewer(index) {
            this.currentSlide = index;
            this.dialog = true;
        }
    },
    computed: {
        photos() {
            return this.$store.state.photo.photos;
        }
    },
    components: {
        photoGalleryCard: () => import("./PhotoGalleryCard"),
        photoViewer: () => import('./PhotoViewer'),
        photoViewerSlide: () => import('./PhotoViewerSlide'),
        photoViewerCarousel: () => import('./PhotoViewerCarousel')
    }
};
</script>
