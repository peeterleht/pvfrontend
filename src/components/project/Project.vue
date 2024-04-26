<template>
  <MainView ref="mainViewRef">
    <template #contents>
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">Kogus</th>
          <th scope="col">Osa nimetus</th>
          <th v-for="processInfo in project.processInfos" scope="col">{{ processInfo.processName }}</th>
          <th scope="col">Juhtimine</th>
          <th scope="col">Tähtaeg</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="part in project.partInfos">
          <th scope="col">{{ part.volume }}</th>
          <th scope="col">{{ part.partName }}</th>
          <th v-for="processPart in part.processPartInfos" scope="col">{{ processPart.projectUserInfo.userName }}</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
        </tbody>
      </table>
    </template>
    <template #projectUsers>
      <div class="col" v-for="projectUser in projectUsers">
        <button type="button" class="btn" :title="projectUser.userName">
          <font-awesome-icon icon="fa-solid fa-user" style="font-size: 30px"/>
        </button>
      </div>
    </template>
  </MainView>
</template>

<script>
import MainView from "@/views/MainView.vue";

export default {
  name: "Project",
  components: {MainView},
  data() {
    return {
      projectId: Number(sessionStorage.getItem("projectId")),
      project: {
        processInfos: [
          {
            processId: 0,
            processName: ""
          }
        ],
        partInfos: [
          {
            partId: 0,
            volume: 0,
            partName: "",
            deadlineWeek: 0,
            processPartInfos: [
              {
                processPartId: 0,
                status: "",
                userAssigned: true,
                projectUserInfo: {
                  userId: 0,
                  userName: "",
                  userRgb: ""
                }
              }
            ]
          }
        ]
      },
      projectUsers: [
        {
          userId: 0,
          userName: "",
          userRgb: "",
          id: 0,
          projectRoleId: 0,
          projectRoleName: ""
        }
      ]
    }
  },
  methods: {
    sendGetProject() {
      this.$http.get(`/project/${this.projectId}`)
          .then(response => {
            this.project = response.data
          })
          .catch(() => {
          })
    },
    sendGetProjectUsers() {
      this.$http.get(`/projects/companyusers/${this.projectId}`)
          .then(response => {
            this.projectUsers = response.data
          })
          .catch(() => {
          })
    }
  },
  beforeMount() {
    this.sendGetProject()
    this.sendGetProjectUsers()
  }
}
</script>
