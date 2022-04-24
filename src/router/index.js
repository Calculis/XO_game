import { createRouter, createWebHistory } from "vue-router";
import ViewPlay from '../views/ViewPlay.vue'
import ViewRanking from '../views/ViewRanking.vue'
import Home from '../views/Home.vue'
const history=createWebHistory()


const routes=[
    {
        path:"/setting",
        name:"init",
        component: ViewPlay
    },
    {
        path:"/ranking",
        name:"ranking",
        component:ViewRanking
    },
    {
        path: '/',
        name: 'home',
        component: Home
    }
    
]


const router=createRouter({history,routes})
export default router