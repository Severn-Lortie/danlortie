<template>
<v-img
    :src="heroImage"
    height="100vh"
    position="center top"
    :gradient="gradient"
>
    <v-container class="fill-height pa-0 pb-12" v-if="$vuetify.breakpoint.xs">
        <hero-image-text-mobile/>
    </v-container>
</v-img>
</template>

<script>

export default {
    components: {
        heroImageTextMobile: () => import('./HeroImageTextMobile')
    },
    data: () => ({
        heroImage: require('../../assets/img/Hero.jpg')
    }),
    computed: {
        gradient() {
            const gradientStyle = "to top, rgba(0, 0, 0, 0.5), rgba(0,0,0,0)"
            return this.$vuetify.breakpoint.xs ? gradientStyle : undefined;
        }
    }
}
</script>

