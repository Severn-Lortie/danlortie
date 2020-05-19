<template>
  <v-card>
    <v-sheet color="#272727" class="pl-4 pt-2" tile height="40">Email</v-sheet>
    <v-card-subtitle>
      <div class="mb-1 text-capitalize">From: {{ email.author }}</div>
      <v-divider></v-divider>
      <div class="mb-1 mt-1 text-capitalize">Subject: {{ email.subject }}</div>
      <v-divider></v-divider>
    </v-card-subtitle>
    <v-card-text class="white--text">
      <p v-line-clamp:30="2" class="word-break">{{ email.text.trim() }}</p>
    </v-card-text>
    <v-card-actions>
      <app-btn text :to="`view/remembrance/${email.id}`">Read More</app-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    email: Object
  },
  components: {
    appBtn: () => import("../core/AppButton")
  }
};
</script>
