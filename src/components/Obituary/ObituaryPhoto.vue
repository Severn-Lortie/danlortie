<template>
<div class="text-center text-sm-left">
    <v-img :src="require('../../assets/img/Obit.jpeg')">
        <template v-slot:placeholder>
            <image-progress/>
        </template>
    </v-img>
    <div class="mt-4 grey--text text--darken-1 font-italic">
        {{caption}}
    </div>
</div> 
</template>

<script>
export default {
    data: () => ({
        caption: 'Graduating from the University of Chicago.'
    }),
    components: {
        imageProgress: () => import('../core/AppImageProgress')
    }
}
</script>
