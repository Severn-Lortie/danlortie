<template>
<v-container class="fill-height">
    <v-row class="mt-6" justify-sm="start" justify="center">
        <v-col cols="12" sm="6" offset="0" offset-sm="6">
            <obit-header></obit-header>
        </v-col>
        <v-col cols="12" sm="6" class="mt-2">
            <obit-photo></obit-photo>
        </v-col>
        <v-col cols="12" sm="6">
            <obit-body></obit-body>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    components: {
        ObitHeader: () => import('../components/Obituary/ObituaryHeader'),
        ObitBody: () => import('../components/Obituary/ObituaryBody'),
        ObitPhoto: () => import('../components/Obituary/ObituaryPhoto')
    }
}
</script>
