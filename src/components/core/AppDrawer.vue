<template>
<v-navigation-drawer
    v-model="model"
    app
    disable-resize-watcher
>

    <v-list-item>
        <v-list-item-content>
            <v-list-item-title class="title">
                Pages
            </v-list-item-title>
            <v-list-item-subtitle>
                Tap to navigate
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>

    <v-list nav>
        <v-list-item to="/">
             <v-list-item-title class="primary--text">Home</v-list-item-title>
        </v-list-item>
        <v-list-item
            v-for="(page, n) in pages"
            :key="n"
            :to="page.link"
        >
            <v-list-item-content>
                <v-list-item-title>{{ page.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>

</v-navigation-drawer>
</template>

<script>
import model from '../../mixins/Model'
const pages = require('../../data/pages.json');

export default {
    data: () => ({
        pages: pages.list
    }),
    mixins: [model]
}
</script>
