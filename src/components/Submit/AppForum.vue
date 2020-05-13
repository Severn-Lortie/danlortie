<template>
  <v-container class="fill-height">
    <app-snackbar v-model="displaySnackbar" :timeout="4000">{{message}}</app-snackbar>

    <v-row justify="center">
      <v-col cols="12" md="7">
        <app-forum-header />

        <app-forum-input @submit="confirmSubmit"></app-forum-input>

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
    appForumHeader: () => import("./AppForumHeader"),
    appForumInput: () => import("./AppForumInput"),
    appForumConfirm: () => import("./AppForumConfirm"),
    appSnackbar: () => import("../core/AppSnackbar")
  },
  data: () => ({
    submittedStory: {},
    displayConfirm: false,
    displaySnackbar: false,
    message: ""
  }),
  methods: {
    confirmSubmit() {
      this.submittedStory = this.$store.state.story.forum;
      this.displayConfirm = true;
    },
    submitStory() {
      // make sure nothing is left unfilled
      const title = this.submittedStory.title === "";
      const author = this.submittedStory.author === "";
      const text = this.submittedStory.text === "";

      const textLength = this.submittedStory.text.length <= 100;
      if (title || author || text) {
        this.message = "No field can be left empty.";
        this.displaySnackbar = true;
        return;
      } else if (textLength) {
        this.message = "Your story must be longer than 100 characters.";
        this.displaySnackbar = true;
        return;
      }

      this.$store.dispatch("submitStory", this.submittedStory)
      .then(() => {
        // clear the store
        this.$store.commit('clearForum');
      })
      .catch((e) => {
        this.message = "Looks like there was an issue submitting your story. Please try again."
        console.error(e);
      });
      this.message = "Story submitted successfully.";
      this.displaySnackbar = true;
    }
  }
};
</script>
