<template>
<v-expand-transition>
    <div
        class="subtitle d-flex transition-fast-in-fast-out v-card--reveal"
        v-if="display"
    >
        <div class="pa-2">
            <slot></slot>
        </div>
    </div>
</v-expand-transition>
</template>

<script>
export default {
    props: {
        display: Boolean
    }
}
</script>

<style scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 15%;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
}
</style>
