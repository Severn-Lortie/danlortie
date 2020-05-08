<template>
<v-card flat>
    <v-card-title>I will tell you a story...</v-card-title>
    <v-card-subtitle>Philip Lortie</v-card-subtitle>
    <v-card-text>{{getLorem().substring(0, 250)}}</v-card-text>
    <v-card-actions>
        <v-btn
            text
            class="text-capitalize"
        >
        Read More
        </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
import lorem from '../../mixins/Lorem'

export default {
    mixins: [lorem]
}
</script>
