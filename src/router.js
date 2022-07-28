import VueRouter from "vue-router";
import DetailComponent from "@/components/DetailComponent";
import HomePage from "@/components/Home/HomePage";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/detail',
            name: 'detail',
            component: DetailComponent
        },
    ]
});

export default router;
