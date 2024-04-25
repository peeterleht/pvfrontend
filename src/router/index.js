import { createRouter, createWebHistory } from 'vue-router'
import FrontPageView from "@/views/FrontPageView.vue";
import ProjectView from "@/views/AddProjectView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import CompanyView from "@/views/CompanyView.vue";
import AddCompanyUsersView from "@/views/AddCompanyUsersView.vue";
import TimeLogView from "@/views/TimeLogView.vue";
import AddProjectView from "@/views/AddProjectView.vue";

const routes = [
  {
    path: '/',
    name: 'FrontPageRoute',
    component: FrontPageView
  },
  {
    path: '/project/new',
    name: 'AddProjectViewRoute',
    component: AddProjectView
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
    path: '/new/company/user',
    name: 'AddCompanyUsersViewRoute',
    component: AddCompanyUsersView
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
