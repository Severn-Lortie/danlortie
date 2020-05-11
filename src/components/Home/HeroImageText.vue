<template>
<div class="mb-12">
    <v-row align="center" justify="center">
        <v-col cols="12">
            <h1 class="text-center roboto-subtitle accent--text text-uppercase">In Loving Memory</h1>
            <h1 class="text-weight-bold roboto-title text-center">Dan C. Lortie</h1>
        </v-col>
        <v-col cols="6">
            <app-divider centered></app-divider>
        </v-col>
        <v-col cols="12 mt-4">
            <h1 class="text-center roboto-italic">1926 - 2020</h1>
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
