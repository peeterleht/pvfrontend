<template>
  <div class="d-flex">
    <div class="flex-grow-0 text-bg-dark" style="min-width: 50px; height: 100vh;">
      <div style="margin-left: 10px; height: 70px; width: 50px; font-size: 26px; margin-top: 100px">
        <a href="/" class="nav-link link-light link-opacity-75-hover">
          <font-awesome-icon icon="fa-solid fa-users"/>
        </a>
      </div>
      <div style="margin-left: 10px; height: 50px; width: 50px; font-size: 34px">
        <a href="/projects" class="nav-link link-light link-opacity-75-hover ms-0">
          <font-awesome-icon icon="fa-solid fa-file-lines"/>
        </a>
      </div>
      <div v-for="project in myProjects" style="align-content: center; text-align:start; margin-left: 30px; font-size: 10px;height:25px">
        <a href="#" @click="openProject(project.projectId)" class="nav-link link-light text-decoration-none link-opacity-75-hover">
          {{ project.projectCode }}
        </a>
      </div>
      <div style="height: 40px"></div>
      <div style="margin-left: 10px; height: 70px; width: 50px; font-size: 30px">
        <a href="#" class="nav-link link-light link-opacity-75-hover">
          <font-awesome-icon icon="fa-solid fa-list-check"/>
        </a>
      </div>
      <div style="margin-left: 10px; height: 70px; width: 50px; font-size: 30px">
        <a href="/timelog" class="nav-link link-light link-opacity-75-hover" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sisesta oma tunnid">
          <font-awesome-icon icon="fa-regular fa-clock"/>
        </a>
      </div>
    </div>
    <div class="collapse collapse-horizontal text-bg-dark" id="sidebarCollapse" style="max-width: 150px">
      <div style="text-align:start; margin-left: 10px; height: 50px; min-width: 100px; font-size: 26px; margin-top: 100px">
        <a href="/" class="nav-link link-light link-opacity-75-hover">
          Kasutajad
        </a>
      </div>
      <div style="height: 20px"></div>
      <div style="align-content: center; text-align:start; margin-left: 10px; height: 50px; min-width: 100px; font-size: 26px">
        <a href="/projects" class="nav-link link-light link-opacity-75-hover ms-0">
          Projektid
        </a>
      </div>
      <div v-for="project in myProjects" style="align-content: center; text-align:start;margin-left: 10px; font-size: 16px;min-width: 150px;height:25px">
        <a href="#" @click="openProject(project.projectId)" class="nav-link link-light text-decoration-none link-opacity-75-hover">
          {{ project.projectName }}
        </a>
      </div>
      <div style="height: 40px"></div>
      <div style="align-content: center; text-align:start; margin-left: 10px;height: 50px; min-width: 100px; font-size: 26px">
        <a href="#" class="nav-link link-light link-opacity-75-hover">
          Ülesanded
        </a>
      </div>
      <div style="height: 20px"></div>
      <div style="align-content: center; text-align:start; margin-left: 10px; height: 50px; min-width: 100px; font-size: 26px">
        <a href="/timelog" class="nav-link link-light link-opacity-75-hover">
          Tunnid
        </a>
      </div>
    </div>
    <div class="text-bg-dark" style="width: 25px; height: 100vh">
      <button @click="toggleSideBar" class="btn btn-toggle d-inline-flex align-items-center border-0 collapsed text-light justify-content-start" type="button"
              data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-expanded="true">
        <font-awesome-icon v-if="seen" icon="fa-solid fa-caret-right"/>
        <font-awesome-icon v-else icon="fa-solid fa-caret-left"/>
      </button>
    </div>
  </div>
  <div class="position-fixed top-0 end-0 m-5">
    <user-dropdown/>
  </div>
  <div class="position-fixed start-50 translate-middle-x" style="top:100px">
    <slot name="contents">
      <!-- contents -->
    </slot>
  </div>
  <div class="d-flex position-fixed" style="top:50px; right: 200px">
    <slot name="projectUsers">
      <!-- projectUsers -->
    </slot>
  </div>
</template>

<script>
import UserDropdown from "@/components/dropdown/UserDropdown.vue";
import router from "@/router";

export default {
  name: "ProjectView",
  components: {UserDropdown},
  data() {
    return {
      seen: true,
      userId: Number(sessionStorage.getItem("userId")),
      myProjects: [
        {
          projectId: 0,
          projectCode: "",
          projectName: "",
          clientName: "",
          bankLink: "",
          projectUserInfos: [
            {
              userId: 0,
              userName: "",
              userRgb: ""
            }
          ]
        }
      ]
      ,
    }
  },
  methods: {
    toggleSideBar() {
      this.seen = !this.seen;
    },
    openProject: function (projectId) {
      sessionStorage.setItem('projectId', projectId)
      router.push({name:"ProjectViewRoute"})
    },
    sendGetMyProjects(){
      this.$http.get(`/projects/companyuser/${this.userId}`)
          .then(response => {
            this.myProjects = response.data
          })
          .catch(() => {
          })
    }
  },
  beforeMount() {
    this.sendGetMyProjects()
  }
}
</script>