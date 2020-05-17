<template>
  <v-container>
    <v-row justify="center" align="start" class="fill-height">
      <v-col cols="11" md="10">
        <v-row>
          <v-col cols="6" v-for="n in 2" :key="n">
            <email-card />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    EmailCard: () => import("../components/Remembrances/EmailCard")
  }
};
</script>
