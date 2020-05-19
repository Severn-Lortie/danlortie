<template>
<v-dialog v-model="model" max-width="80%">
    <v-card>
        <v-card-title class="title">How does this work?</v-card-title>
        <v-expansion-panels flat>
            <v-expansion-panel
                v-for="(section, n) in sections"
                :key="n"
            >
                <v-expansion-panel-header>
                    {{section.title}}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="whitespace">
                    {{section.text}}
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <v-card-actions>
            <v-spacer></v-spacer>
            <app-btn text color="primary" @clicked="model = false">
                Close
            </app-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
// help text data
import helpText from '../../data/helpText'
import model from '../../mixins/Model'

export default {
    data: () => ({
        sections: helpText.sections
    }),
    components: {
        appBtn: () => import('../core/AppButton')
    },
    mixins: [model]
}
</script>

