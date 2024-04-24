import { createRouter, createWebHistory } from 'vue-router'
import FrontPageView from "@/views/FrontPageView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import CompanyView from "@/views/CompanyView.vue";
import TimeLogView from "@/views/TimeLogView.vue";

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
  },
  {
    path: '/projects',
    name: 'ProjectsViewRoute',
    component: ProjectsView
  },
  {
    path: '/company',
    name: 'CompanyViewRoute',
    component: CompanyView
  },
  {
    path: '/timelog',
    name: 'TimeLogViewRoute',
    component: TimeLogView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
