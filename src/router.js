import VueRouter from "vue-router";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomePage')
        },
        {
            path: '/country/:code',
            name: 'detail',
            component: () => import('@/views/DetailPage')
        },
    ]
});

export default router;
