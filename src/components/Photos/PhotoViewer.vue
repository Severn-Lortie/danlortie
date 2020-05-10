<template>
<v-dialog
    max-width="80%"
    v-model="showDialog"
>
    <div>
        <v-carousel
            hide-delimiters
            v-model="currentSlide"
            height="600"
        >
            <!-- photos will be slotted in -->
            <slot></slot>
        </v-carousel>
    </div>
</v-dialog>
</template>

<script>
export default {
    props: {
        currentSlide: Number,
        value: Boolean
    },
    computed: {
        showDialog: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    }
}
</script>
