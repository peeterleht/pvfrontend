<template>
  <select v-model="selectedProjectRole" @change="emitProjectRole" class="form-select">
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
      selectedProjectRole: 0,
      projectRoles:
          {
            projectRoleId: 0,
            projectRoleName: ''
          },
    }
  },

  methods: {
    sendGetProjectRoles() {
      this.$http.get("/subscriptionTypes")
          .then(response => {
            this.projectRoles = response.data
          })
          .catch(error => {
            const errorResponseBody = error.response.data
          })
    },
    emitSubscriptionType() {
      this.$emit('event-selected-subscription-type-change', this.projectRoles.projectRoleId)
    },
  },

  beforeMount() {
    this.sendGetSubscriptionTypes()
  }

}

</script>


<script>
export default {

}
</script>
