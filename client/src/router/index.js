import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: () => import('../views/RegisterView.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router