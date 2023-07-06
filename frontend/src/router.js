
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import SocialPostManager from "./components/listers/SocialPostCards"
import SocialPostDetail from "./components/listers/SocialPostDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/socials/posts',
                name: 'SocialPostManager',
                component: SocialPostManager
            },
            {
                path: '/socials/posts/:id',
                name: 'SocialPostDetail',
                component: SocialPostDetail
            },



    ]
})
