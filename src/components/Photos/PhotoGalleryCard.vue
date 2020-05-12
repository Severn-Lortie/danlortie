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
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                    ></v-progress-circular>
                </v-row>
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
        cardSubtitle: () => import('./PhotoGalleryCardSubtitle')
    }
}
</script>
