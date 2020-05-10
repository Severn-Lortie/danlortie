<template>
<v-row>
    <v-col cols="6">
        <v-text-field
            label="Name"
            v-model="forum.author"
        ></v-text-field>
    </v-col>
    <v-col cols="6">
        <v-text-field
            label="Title"
            v-model="forum.title"
        ></v-text-field>
    </v-col>
    <v-col cols="12">
        <v-textarea
            v-model="forum.text"
            filled
            auto-grow
            label="Write your story here"
        >
        </v-textarea>
    </v-col>
    <v-col
        cols="12"
        class="text-right"
    >
        <v-btn
            class="text-capitalize"
            color="accent"
            @click="$emit('submitted', forum)"
        >Submit</v-btn>
    </v-col>
</v-row>
</template>

<script>
export default {
    data: () => ({
        forum: {
            author: '',
            title: '',
            text: ''
        }
    })
}
</script>
