<template>
<v-dialog
    v-model="model"
    :max-width="$vuetify.breakpoint.smAndDown ? '80%' : '50%'"
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
            <v-btn
                text
                class="text-capitalize"
                @click="model = false"
            >
                Cancel
            </v-btn>
            <v-btn
                class="text-capitalize"
                color="accent"
                text
                elevation="0"
                @click="confirm"
            >
                Submit
            </v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
import model from '../../mixins/Model'

export default {
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
