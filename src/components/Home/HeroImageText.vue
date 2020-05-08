<template>
<div class="mb-12">
    <v-row align="center" justify="center">
        <v-col cols="12">
            <h1 class="text-center roboto-subtitle accent--text">OVERLINE</h1>
            <h1 class="text-weight-bold roboto-title text-center">Dan C. Lortie</h1>
        </v-col>
        <v-col cols="6">
            <app-divider></app-divider>
        </v-col>
        <v-col cols="12 mt-6">
            <h1 class="text-center roboto-italic">Subtitle</h1>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    components: {
        AppDivider: () => import('../core/AppDivider')
    }
}
</script>
