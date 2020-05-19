import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('../views/Home'),
    },
    {
        path: '/obituary',
        component: () => import('../views/Obituary.vue'),
    },
    {
        path: '/photos',
        component: () => import('../views/Photos'),
    },
    {
        path: '/stories',
        component: () => import('../views/Stories'),
    },
    {
        path: '/view/:type/:id',
        component: () => import('../views/FeedViewer'),
        meta: {
            scrollToTop: true
        }
    },
    {
        path: '/submit',
        component: () => import('../views/Forum'),
    },
    {
        path: '/remembrances',
        component: () => import('../views/Remembrances'),
    },
    // 404
    {
        path: '*',
        component: () => import('../views/404'),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) { // eslint-disable-line
        if (to.meta.scrollToTop) {
            return { x: 0, y: 0 };
        } else {
            return savedPosition;
        }
    }
});

export default router;
