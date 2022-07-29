import VueRouter from "vue-router";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/HomePage')
        },
        {
            path: '/country/:code',
            name: 'Detail',
            component: () => import('@/views/DetailPage')
        },
    ]
});

export default router;
