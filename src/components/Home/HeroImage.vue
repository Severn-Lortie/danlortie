<template>
<v-img
    :src="heroImage"
    height="100vh"
    position="center top"
>
</v-img>
</template>

<script>

export default {
    data: () => ({
        heroImage: require('../../assets/img/Hero.jpg')
    })
}
</script>

