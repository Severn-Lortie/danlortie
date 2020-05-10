<template>
    <hr v-bind="$attrs" class="rule primary" :class="{center: centered}">
</template>

<script>
export default {
    inheritAttrs: true,
    props: {
        centered: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
.rule {
    height: 10px;
    width: 34%;
    border: 0px;
}
.center {
    margin: 0px auto;
}
</style>