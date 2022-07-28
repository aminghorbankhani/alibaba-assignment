import VueRouter from "vue-router";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/HomePage')
        },
        {
            path: '/country/:code',
            name: 'detail',
            component: () => import('@/components/DetailPage')
        },
    ]
});

export default router;
