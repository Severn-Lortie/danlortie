<template>
<v-dialog
    v-model="model"
    :max-width="$vuetify.breakpoint.smAndDown ? '90%' : '50%'"
>
    <v-card>
        <v-card-title>Confirm your Submission</v-card-title>
        <v-card-subtitle>Make sure there are no errors before you submit!</v-card-subtitle>
        <v-card-text>
            <v-row class="body-1">
                <v-col cols="12">
                    <b>Title:</b> {{story.title}}
                </v-col>
                <v-col cols="12">
                    <b>Author:</b> {{story.author}}
                </v-col>
                <v-col cols="12">
                    <b>Story:</b> {{story.text}}
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <app-btn
                text
                @clicked="model = false"
            >
                Cancel
            </app-btn>
            <app-btn
                color="accent"
                text
                @clicked="confirm"
            >
                Submit
            </app-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
import model from '../../mixins/Model'

export default {
    components: {
        appBtn: () => import('../core/AppButton')
    },
    props: {
        story: {}
    },
    methods: {
        confirm() {
            this.$emit('confirmed');
            this.model = false;
        }
    },
    mixins: [model]
}
</script>
