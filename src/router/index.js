import { createRouter, createWebHistory } from 'vue-router'
import FrontPageView from "@/views/FrontPageView.vue";
import ProjectView from "@/views/MainView.vue";
import CompanyView from "@/views/CompanyView.vue";
import AddCompanyUsersView from "@/views/AddCompanyUsersView.vue";
import Project from "@/components/project/Project.vue";
import Projects from "@/components/project/Projects.vue";
import UserTimeLog from "@/components/timelog/UserTimeLog.vue";

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
    component: Projects
  },
  {
    path: '/project',
    name: 'ProjectViewRoute',
    component: Project
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
    component: UserTimeLog
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
