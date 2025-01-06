import { createRouter, createWebHistory } from "vue-router";


import MasterDashboard from "@/pages/master/MasterDashboard.vue";

import HomePage from "../pages/HomePage.vue"
import UserProfile from "../pages/UserProfile.vue"

const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: MasterDashboard
    }, 
    {
        name: 'Home',
        path: '/home',
        component: HomePage
    },
    {
        name: 'Profile',
        path: '/profile',
        component: UserProfile
    }
];

const router = Router();

export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
