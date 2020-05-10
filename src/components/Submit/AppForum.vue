<template>
<v-container class="fill-height">
    <app-snackbar v-model="displaySnackbar" :timeout="4000">
        {{message}}
        <v-btn
        text
        class="text-capitalize"
        @click.stop="displaySnackbar = false"
        >
            Okay.
        </v-btn>
    </app-snackbar>
    
    <v-row justify="center">
        <v-col cols="12" md="7">
            <app-forum-header />

            <app-forum-input
            @submitted="confirmSubmit"
            ></app-forum-input>

            <app-forum-confirm
            :story="submittedStory"
            v-model="displayConfirm"
            @confirmed="submitStory"
            ></app-forum-confirm>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    components: {
        appForumHeader: () => import('./AppForumHeader'),
        appForumInput: () => import('./AppForumInput'),
        appForumConfirm: () => import('./AppForumConfirm'),
        appSnackbar: () => import('../core/AppSnackbar')
    },
    data: () => ({
        submittedStory: {},
        displayConfirm: false,
        displaySnackbar: false,
        message: ''
    }),
    methods: {
        confirmSubmit(story) {
            this.submittedStory = story;
            this.displayConfirm = true;
        },
        submitStory() {
            this.$store.dispatch('submitStory', this.submittedStory)
            .then((value) => {
                if (value.status === 'OK') {
                    // trigger success snackbar
                    this.message = "Story submitted successfully.";
                } else {
                    // trigger error snackbar
                    this.message = "There was a problem submitting your story. Please try again";
                }
                this.displaySnackbar = true;
            });
        }
    }
};
</script>
