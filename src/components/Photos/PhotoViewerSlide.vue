<template>
<v-carousel-item
    class="black"
    reverse-transition="none"
    transition="none"
>
    <v-img
        :src="imageSrc"
        height="100%"
        contain
    >
    </v-img>
</v-carousel-item>
</template>

<script>
export default {
    props: {
        imageSrc: String
    }
}
</script>

<style>

</style>
