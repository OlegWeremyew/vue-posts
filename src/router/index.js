import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostsPage from "@/pages/PostsPage";
import Images from "@/pages/Images";
import Post from "@/pages/Post";
import PostsPageWithStore from "@/pages/PostsPageWithStore";

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/images',
    component: Images,
  },
  {
    path: '/posts/:id',
    component: Post,
  },
  {
    path: '/store',
    component: PostsPageWithStore,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
