<template>
  <v-container fluid class="fill-height">
    <!-- margin row -->
    <v-row align="start" justify="center">
      <v-col cols="12" md="10" lg="9" class="ml-0 mr-0">
        <!-- feed -->
        <v-row align="start" justify="start">
          <v-col v-for="email in emails" :key="email.id" cols="12" md="6">
            <feed-card
              :email="email"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    FeedCard: () => import("./EmailFeedCard")
  },
  computed: {
      emails() {
          return this.$store.state.remembrance.emails;
      }
  }
};
</script>
