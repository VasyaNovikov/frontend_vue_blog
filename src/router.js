// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import VPost from '@/components/VPost'
import VAuthor from '@/components/VAuthor'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'

//Vue.use(VueRouter)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/author/:username', component: VAuthor },
    { path: '/post/:slug', component: VPost },
    { path: '/tag/:tag', component: PostsByTag },
    { path: '/', component: AllPosts },
    ],
})
export default router