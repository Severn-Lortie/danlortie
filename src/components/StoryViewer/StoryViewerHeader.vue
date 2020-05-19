<template>
    <div>
        <app-btn icon class="mb-4" @clicked="goBack">
            <v-icon left color="primary">
                mdi-arrow-left
            </v-icon>
        </app-btn>
        <h1 class="display-1 font-weight-bold text-capitalize">
            <!-- Title slot -->
            <slot name="title"></slot>
        </h1>
        <h1 class="subtitle font-weight-regular mt-1">
            <!-- Subtitle slot -->
            <slot name="subtitle"></slot>
        </h1>
    </div>
</template>

<script>
export default {
    components: {
       appBtn: () => import('../core/AppButton')
    },
    methods: {
        goBack() {
            if (window.history.length > 2) {
                this.$router.go(-1);
            } else {
                this.$router.push('/stories');
            }
        }
    }
}
</script>

