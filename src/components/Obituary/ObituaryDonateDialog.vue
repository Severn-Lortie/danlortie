<template>
  <v-dialog v-model="dialog" :max-width="width">
    <template v-slot:activator="{ on }">
      <div class="text-center text-sm-left">
        <v-btn v-on="on" elevation="0" class="text-capitalize">Donate</v-btn>
      </div>
    </template>

    <v-card>
      <v-card-title>Donate in Dan's Name</v-card-title>
      <v-card-text>
        {{ text(0) }}
        <a :href="link" target="_blank">
          {{ linkText }}
          <v-icon x-small color="primary">mdi-open-in-new</v-icon>
        </a>
        {{ text(2) }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    link:
      "https://donate.bbrfoundation.org/civicrm/contribute/transact?reset=1&id=1",
    linkText: "Behavior Research Foundation",
    donateText:
      "We invite donations in Dan’s name to the , ,(or to your favorite charity)."
  }),
  computed: {
    width() {
      return this.$vuetify.breakpoint.smAndDown ? "90%" : "30%";
    }
  },
  methods: {
    text(n) {
      return this.donateText.split(",")[n];
    }
  }
};
</script>
