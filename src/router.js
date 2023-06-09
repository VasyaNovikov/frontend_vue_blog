import { createRouter, createWebHistory } from 'vue-router'

import VPost from '@/pages/VPost'
import VAuthor from '@/pages/VAuthor'
import PostsByTag from '@/pages/PostsByTag'
import AllPosts from '@/pages/AllPosts'
import AllPostsCompositionApi from '@/pages/AllPostsCompositionApi'
import Main from '@/pages/Main'



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/author/:username', component: VAuthor },
    { path: '/post/:slug', component: VPost },
    { path: '/tag/:tag', component: PostsByTag },
    { path: '/', component: AllPosts },
    { path: '/', component: AllPostsCompositionApi },
    { path: '/pages', component: Main },
    ],
})
export default router