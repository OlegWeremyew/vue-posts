import Main from "@/views/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostsPage from "@/views/PostsPage";
import Images from "@/views/Images";
import Post from "@/views/Post";
import PostsPageWithStore from "@/views/PostsPageWithStore";

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
