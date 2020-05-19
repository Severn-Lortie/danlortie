<template>
<v-app>
    <app-nav 
    @open-drawer="drawer = true"
    />
    <app-drawer
    v-model="drawer"
    />
    <v-content>
        <router-view />
    </v-content>
</v-app>
</template>

<script>
export default {
    name: 'App',
    components: {
        appNav: () => import('./components/core/AppNav'),
        appDrawer: () => import('./components/core/AppDrawer')
    },
    data: () => ({
        drawer: false,
    }),
    created() {
        this.$vuetify.theme.dark = true;

        // load the first batch of photos, stories, and remembrances
        this.$store.dispatch('loadPhotos', 20);
        this.$store.dispatch('loadStories', 6);
        this.$store.dispatch('loadAllEmails');
    }
};
</script>

<style>
/* app-wide styles */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600&display=swap');

.html,
body {
    width: 100%;
    height: 100%;
    background: #121212
}

.roboto-title {
    font-family: 'Roboto Slab';
    font-size: 64px;
}

.roboto-subtitle {
    font-family: 'Roboto Slab';
    font-size: 32px;
}

.roboto-italic {
  font-family: 'Roboto Slab';
  font-size: 28px;
  font-style: italic;
  font-weight: 400;
}
</style>
