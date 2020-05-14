<template>
<v-app-bar
    flat
    max-height="64px"
>

    <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
            x-large
            text
            to="/"
        >
            <v-icon color="primary">
                mdi-home
            </v-icon>
        </v-btn>
        <v-btn
            text
            x-large
            color="white"
            v-for="page in pages"
            :key="page.title"
            class="text-capitalize"
            :to="page.link"
        >
            {{page.title}}
        </v-btn>
    </div>
    <div v-else>
        <v-app-bar-nav-icon
        @click="$emit('open-drawer')"
        />
    </div>

</v-app-bar>
</template>

<script>
const pages = require('../../data/pages.json');

export default {
    data: () => ({
        pages: pages.list
    })
};
</script>
