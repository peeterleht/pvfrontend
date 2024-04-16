import { createRouter, createWebHistory } from 'vue-router'
import FrontPageView from "@/views/FrontPageView.vue";
import ProjectView from "@/views/ProjectView.vue";

const routes = [
  {
    path: '/',
    name: 'FrontPageRoute',
    component: FrontPageView
  },
  {
    path: '/project',
    name: 'ProjectViewRoute',
    component: ProjectView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
