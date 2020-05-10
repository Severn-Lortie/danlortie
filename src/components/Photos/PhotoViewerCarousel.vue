<template>
<v-carousel
    hide-delimiters
    v-model="model"
    height="600"
>
    <!-- photos will be slotted in -->
    <slot></slot>
</v-carousel>
</template>

<script>
import model from '../../mixins/Model';

export default {
    mixins: [model]
}
</script>
