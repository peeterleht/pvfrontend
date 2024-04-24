<template>
  <TimeLogDataModal ref="timeLogDataModalRef"/>
  <div class="col-6">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope=col>Nr</th>
        <th scope=col>Projekt</th>
        <th scope=col>Esmaspäev</th>
        <th scope=col>Teisipäev</th>
        <th scope=col>Kolmapäev</th>
        <th scope=col>Neljapäev</th>
        <th scope=col>Reede</th>
      </tr>

      </thead>
      <tbody>
      <tr v-for="userTimelog in userTimelogs" :key=userTimelogs.projectId>
        <td>{{ userTimelog.userId }}</td>
        <td>{{ userTimelog.projectId }}</td>
        <td>{{ userTimelog.monday }}</td>
        <td>{{ userTimelog.tuesday }}</td>
        <td>{{ userTimelog.wednesday }}</td>
        <td>{{ userTimelog.thursday }}</td>
        <td>{{ userTimelog.friday }}</td>
       <td><font-awesome-icon @click="handleEditIconClick" :icon="['far', 'pen-to-square']"/></td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="col - col-3">
  </div>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import TimeLogDataModal from "@/components/modal/TimeLogDataModal.vue";

export default {
  name: "UserTimeLogs",
  components: {TimeLogDataModal, Modal},
  data() {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      userTimelogs: [
        {
          userId: 0,
          projectId: 0,
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
    openTimeLogDataModal() {
      this.$refs.timeLogDataModalRef.$refs.modalRef.openModal()
    },
    handleEditIconClick() {
      this.openTimeLogDataModal()
    },
  },
  beforeMount() {
    this.sendGetTimelogs()

  }

}
</script>

