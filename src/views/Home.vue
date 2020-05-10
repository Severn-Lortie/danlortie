<template>
<div>
    <v-row
        no-gutters
        justify="center"
        align="center"
    >
        <v-col
            cols="12"
            sm="6"
            md="6"
        >
            <hero-image />
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="6"
            v-if="!$vuetify.breakpoint.xs"
        >
            <hero-image-text />
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    components: {
        HeroImage: () => import('../components/Home/HeroImage'),
        HeroImageText: () => import('../components/Home/HeroImageText')
    }
}
</script>
