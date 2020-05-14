<template>
<div class="text-center text-sm-left">
    <v-img :src="require('../../assets/img/Obit.webp')"/>
    <div class="mt-4 grey--text text--darken-1 font-italic">
        {{caption}}
    </div>
</div> 
</template>

<script>
export default {
    data: () => ({
        caption: 'Graduating McGill University.'
    })
}
</script>
