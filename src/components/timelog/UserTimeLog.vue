<template>
  <MainView ref="mainViewRef">
    <template #contents>
      <TimeLogDataModal ref="timeLogDataModalRef"/>
      <div class="col">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope=col>Kood</th>
            <th scope=col>Projekt</th>
            <th scope=col>Esmaspäev</th>
            <th scope=col>Teisipäev</th>
            <th scope=col>Kolmapäev</th>
            <th scope=col>Neljapäev</th>
            <th scope=col>Reede</th>
          </tr>

          </thead>
          <tbody>
          <tr v-for="userTimelog in userTimelogs" :key=userTimelog.projectId>
            <td>{{ userTimelog.projectCode }}</td>
            <td>{{ userTimelog.projectName }}</td>
            <td>{{ userTimelog.monday }}</td>
            <td>{{ userTimelog.tuesday }}</td>
            <td>{{ userTimelog.wednesday }}</td>
            <td>{{ userTimelog.thursday }}</td>
            <td>{{ userTimelog.friday }}</td>
            <td @click="openTimeLogDataModal(userTimelog)">
              <font-awesome-icon :icon="['far', 'pen-to-square']" @event-update-time-log-values="sendGetTimelogs"/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col - col-3">
      </div>
    </template>
  </MainView>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import TimeLogDataModal from "@/components/modal/TimeLogDataModal.vue";
import MainView from "@/views/MainView.vue";

export default {
  name: "UserTimeLogs",
  components: {TimeLogDataModal, Modal, MainView},
  data() {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      userTimelogs: [
        {
          timeLogId: 0,
          userId: 0,
          projectId: 0,
          projectCode: '',
          projectName: '',
          monday: 0,
          tuesday: 0,
          wednesday: 0,
          thursday: 0,
          friday: 0
        }
      ],

    }
  },
  methods: {
    sendGetTimelogs: function () {
      this.$http.get("/timelogs", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.userTimelogs = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
    updateTimeLogInfo() {

    },
    openTimeLogDataModal(userTimelog) {
      this.$refs.timeLogDataModalRef.openTimeLogDataModal(userTimelog)
    },
  },
  beforeMount() {
    this.sendGetTimelogs()

  }
}
</script>
<script setup lang="ts">
</script>