<template>
<v-card flat>
    <v-card-title>{{story.title}}</v-card-title>
    <v-card-subtitle>{{story.author}}</v-card-subtitle>
    <v-card-text>{{story.text.substring(0, 250)}}</v-card-text>
    <v-card-actions>
        <v-btn
            text
            class="text-capitalize"
            :to="`/story/${story.id}`"
        >
        Read More
        </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    props: {
        story: Object
    }
}
</script>
