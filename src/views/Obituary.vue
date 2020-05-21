<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" lg="9">
        <v-row :class="{'mt-6': $vuetify.breakpoint.mdAndUp}" justify-sm="start" justify="center">
          <v-col cols="12" sm="6">
            <obit-dialog/>
          </v-col>
          <v-col cols="12" sm="6">
            <obit-header></obit-header>
          </v-col>
          <v-col cols="12" sm="6" class="mt-2">
            <obit-photo></obit-photo>
          </v-col>
          <v-col cols="12" sm="6">
            <obit-body></obit-body>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    ObitHeader: () => import("../components/Obituary/ObituaryHeader"),
    ObitBody: () => import("../components/Obituary/ObituaryBody"),
    ObitPhoto: () => import("../components/Obituary/ObituaryPhoto"),
    ObitDialog: () => import("../components/Obituary/ObituaryDonateDialog")
  }
};
</script>
