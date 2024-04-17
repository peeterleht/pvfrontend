<template>
  <div class="mb-3">
    <label for="projectCode" class="form-label">Projekti number</label>
    <input v-model="projectInfo.projectCode" type="text" class="form-control" id="projectCode">
  </div>
  <div class="mb-3">
    <label for="projectName" class="form-label">Projekti nimi</label>
    <input v-model="projectInfo.projectName" type="text" class="form-control" id="projectName">
  </div>
  <div>
    <label for="projectClient" class="form-label">Klient</label>
    <input v-model="projectInfo.projectClient" type="text" class="form-control" id="projectClient">
  </div>
  <div class="mb-3">
    <label for="projectBankLink" class="form-label">Projektipanga link</label>
    <input v-model="projectInfo.projectBankLink" type="text" class="form-control" id="projectBankLink">
  </div>
  <button @click="sendPostProject" class="btn btn-outline-dark">Add Project</button>
</template>


<script>
export default {
  name: "AddProject",
  data() {
    return {
      projectInfo: {
        projectCode: '',
        projectName: '',
        projectClient: '',
        projectBankLink: ''
      },
    }
  },
  methods: {
    sendPostProject(){
      this.$http.post("/project", this.projectInfo
      ).then(response => {
        alert("yes")
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },


  }
}

</script>
