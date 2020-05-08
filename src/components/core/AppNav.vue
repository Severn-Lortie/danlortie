<template>
<v-app-bar
    flat
>
   <v-btn
   x-large
   text
   to="/"
   >
       <v-icon>
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
</v-app-bar>
</template>

<script>
export default {
    data: () => ({
        pages: [
            {
                title: 'Obituary',
                link: '/obituary'
            },
            {
                title: 'Photos',
                link: '/photos'
            },
            {
                title: 'Stories',
                link: '/stories'
            }
        ]
    })
};
</script>
