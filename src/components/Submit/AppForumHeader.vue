<template>
<div>
    <!-- help dialog -->
    <app-forum-header-help
    v-model="displayHelp"
    >

    </app-forum-header-help>
    <v-row class="mt-4">
        <v-col cols="6">
            <div class="display-1 font-weight-bold">
                Share your Story
            </div>
        </v-col>
        <v-col
            cols="6"
            class="text-right"
        >
            <app-btn
                fab
                x-small
                class="text-center mt-1"
                @clicked="displayHelp = true"
            >
                <v-icon
                    color="primary"
                    bottom
                >
                    mdi-help
                </v-icon>
            </app-btn>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    data: () => ({
        displayHelp: false
    }),
    components: {
        appBtn: () => import('../core/AppButton'),
        appForumHeaderHelp: () => import('./AppForumHeaderHelp')
    }
}
</script>
