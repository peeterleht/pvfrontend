<template>
  <div class="col-6">
    <table class=table table-hover>
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
        <td><font-awesome-icon :icon="['far', 'floppy-disk']"/></td>
        <td @click="" ><font-awesome-icon :icon="['far', 'pen-to-square']"/></td>

      </tr>
      </tbody>
    </table>
  </div>
  <div class="col - col-3">
  </div>
</template>

<script>
export default {
  name: "UserTimeLogs",
  data() {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      userTimelogs: [
        {
          userId: 2,
          projectId: 1,
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
  },
  beforeMount() {
    this.sendGetTimelogs()

  }

}
</script>

