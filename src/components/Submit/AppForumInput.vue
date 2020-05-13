<template>
  <v-row>
    <v-col cols="6">
      <v-text-field label="Title" v-model="title"></v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field label="Name" v-model="author"></v-text-field>
    </v-col>
    <v-col cols="1" offset="1"></v-col>
    <v-col cols="12">
      <v-textarea
        v-model="text"
        auto-grow
        row-height="24"
        rows="6"
        filled
        label="Write your story here"
      ></v-textarea>
      <div class="grey--text text--darken-1">Note: your story must be longer than 100 characters</div>
    </v-col>
    <v-col cols="12" class="text-right">
      <v-btn class="text-capitalize" color="accent" @click="submit">Submit</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    title: {
      get() {return this.$store.state.story.forum.title},
       set(value) {this.$store.commit('setForumTitle', value)}
    },
    author: {
      get() {return this.$store.state.story.forum.author},
      set(value) {this.$store.commit('setForumAuthor', value)}
    },
    text: {
      get() {return this.$store.state.story.forum.text},
      set(value) {this.$store.commit('setForumText', value)}
    }
  },
  methods: {
    submit() {
      this.$emit('submit');
    }
  }
};
</script>
