<template>
  <v-row align="end" justify="center" class="fill-height">
        <v-col cols="12">
            <h1 class="text-center roboto-subtitle-mobile accent--text">OVERLINE</h1>
            <h1 class="text-weight-bold roboto-title-mobile text-center">Dan C. Lortie</h1>
            <app-divider centered class="mt-3 mb-3"></app-divider>
            <h1 class="text-center roboto-italic">Subtitle</h1>
        </v-col>
    </v-row>
</template>

<script>
export default {
    components: {
        appDivider: () => import('../core/AppDivider')
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600&display=swap');

.roboto-title-mobile {
    font-family: 'Roboto Slab';
    font-size: 38px;
}

.roboto-subtitle-mobile {
    font-family: 'Roboto Slab';
    font-size: 28px;
}

</style>
