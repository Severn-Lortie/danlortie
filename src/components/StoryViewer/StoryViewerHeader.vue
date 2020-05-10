<template>
    <div>
        <h1 class="display-1 font-weight-bold">
            <!-- Title slot -->
            <slot name="title"></slot>
        </h1>
        <h1 class="subtitle font-weight-regular">
            <!-- Subtitle slot -->
            <slot name="subtitle"></slot>
        </h1>
    </div>
</template>

<script>
export default {
    components: {
       
    }
}
</script>

