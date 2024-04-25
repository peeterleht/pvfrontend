<template>
  <select v-model="selectedProjectRoleId" @change="emitProjectRole" class="form-select">
    <option v-for="projectRole in projectRoles" :value="projectRole.id" :key="projectRole.id">
      {{ projectRole.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "RoleDropdown",
  data() {
    return {
      selectedProjectRoleId: 0,
      projectRoles:
          {
            id: 0,
            name: ''
          },
    }
  },

  methods: {
    sendGetProjectRoles() {
      this.$http.get("/project-roles")
          .then(response => {
            this.projectRoles = response.data
          })
          .catch(error => {
            const errorResponseBody = error.response.data
          })
    },
    emitProjectRole() {
      this.$emit('event-selected-project-role-change', this.selectedProjectRoleId)
    },
  },

  beforeMount() {
    this.sendGetProjectRoles()
  }

}

</script>


