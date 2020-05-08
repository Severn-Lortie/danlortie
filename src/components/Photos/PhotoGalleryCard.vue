<template>
<v-card
    flat
    tile
    class="d-flex"
    @click.stop="$emit('clicked', id)"
    :ripple="false"
>
    <v-img
        :src="src"
        aspect-ratio="1"
        class="grey lighten-2"
        gradient="to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)"
    >
        <v-row
            align="end"
            class="pa-2 fill-height"
        >
            <v-col>
                <div class="subtitle">{{subtitle}}</div>
            </v-col>
        </v-row>
    </v-img>
</v-card>
</template>

<script>
export default {
    props: {
        subtitle: String,
        src: String,
        id: Number
    }
};
</script>