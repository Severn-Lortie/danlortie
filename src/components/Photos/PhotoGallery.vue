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
        <photo-viewer-slide
            v-for="(photo, i) in photos"
            :key="i"
            :imageSrc="getPhotoSrc(i)"
        >
        </photo-viewer-slide>
    </photo-viewer>

    <v-row>
        <v-col
            v-for="(photo, i) in photos"
            cols="4"
            :key="i"
        >
            <photo-gallery-card
                :src="getPhotoSrc(i)"
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
        photos: [{
                subtitle: "Hello!"
            },
            {
                subtitle: "Hello!"
            },
            {
                subtitle: "Hello!"
            },
            {
                subtitle: "Hello!"
            },
            {
                subtitle: "Hello!"
            }
        ]
    }),
    methods: {
        getPhotoSrc(index) {
            const fileName = `gallery${index + 1}.jpg`;
            return require(`../../assets/img/${fileName}`);
        },
        openViewer(index) {
          this.currentSlide = index;
          this.dialog = true;
        }
    },
    components: {
        photoGalleryCard: () => import("./PhotoGalleryCard"),
        photoViewer: () => import('./PhotoViewer'),
        photoViewerSlide: () => import('./PhotoViewerSlide')
    }
};
</script>
