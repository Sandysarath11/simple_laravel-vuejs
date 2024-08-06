import { createRouter, createWebHistory } from "vue-router";
import home from '../components/Home.vue'
import About from "../components/About.vue";
import NotFound from '../components/404.vue';


const routes =[
    {
        path:'/',
        component: home
    },

    {
        path:'/about',
        component: About
    },

    {
        path:'/PathMatch(.*)*',
        component:NotFound
    }
]


const router =createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
