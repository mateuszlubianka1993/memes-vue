import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store/index';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () =>
            import ('../views/auth/SignUp.vue')
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: () =>
            import ('../views/auth/SignIn.vue')
    },
    {
        path: '/user',
        name: 'UserDetails',
        component: () =>
            import ('../views/UserDetails.vue'),
        beforeEnter(to, from, next) {
            if (store.state.idToken) {
                next()
            } else {
                next('/signin')
            }
        }
    },
    {
        path: '/add',
        name: 'AddNew',
        component: () =>
            import ('../views/AddNew.vue'),
        beforeEnter(to, from, next) {
            if (store.state.idToken) {
                next()
            } else {
                next('/signin')
            }
        }
    },
    {
        path: '/memes',
        name: 'Memes',
        component: () =>
            import ('../views/Memes.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router