<template>
<v-hover
    v-slot:default="{ hover }"
    :value="$vuetify.breakpoint.xs"
>
    <v-card
        flat
        tile
        @click.stop="$emit('clicked', meta.id)"
        :ripple="false"
    >
        <v-img
            :src="meta.photo.url"
            aspect-ratio="1"
        >
            <template v-slot:placeholder>
                <image-progress/>
            </template>
            <card-subtitle
                :display="hover"
                v-if="meta.photo.subtitle"
            >
                {{meta.photo.subtitle}}
            </card-subtitle>
        </v-img>
    </v-card>
</v-hover>
</template>

<script>
export default {
    props: {
        meta: Object
    },
    components: {
        cardSubtitle: () => import('./PhotoGalleryCardSubtitle'),
        imageProgress: () => import("../core/AppImageProgress")
    }
}
</script>
