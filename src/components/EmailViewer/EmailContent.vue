<template>
  <v-container fluid class="fill-height pa-0">
    <v-row justify="center" align="start" class="fill-height" :class="{'mt-6': $vuetify.breakpoint.smAndUp}">
      <v-col cols="12" sm="10" md="7" lg="6" :class="{'pa-0': $vuetify.breakpoint.xs}">
        <v-card height="100%" flat>
          <v-img
            :src="email.url"
            height="400"
            position="top"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            class="align-end"
          >
            <v-card-title class="text-capitalize display-1 font-weight-bold whitespace">
              {{ email.subject }}
            </v-card-title>
            <v-card-subtitle class="text-capitalize headline">
              {{ email.author }}
            </v-card-subtitle>
          </v-img>
          <v-card-text class="white--text">
            <viewer-body :source="email.text"></viewer-body>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import items from "../../mixins/Items";

export default {
  mixins: [items],
  data: () => ({
    module: "remembrance",
    items: "emails"
  }),
  components: {
    ViewerBody: () => import("../ViewerBody")
  },
  computed: {
    email() {
      return this.item;
    }
  }
};
</script>

<style scoped>
.whitespace {
  word-break: keep-all !important;
}
</style>