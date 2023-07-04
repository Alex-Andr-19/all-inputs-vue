import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "main",
        component: () => import('@/views/mainPage/mainPage.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;