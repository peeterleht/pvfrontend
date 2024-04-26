<template>
  <MainView ref="mainViewRef">
    <template #contents>
      <company-user-modal ref="companyUserModalRef"/>
      <div>
        <div class="row">
          <div class="input-group mb-3">
            <button @click="handleSearchButtonClick" class="btn btn-outline-secondary"
                    @event-user-selected="setUserInfo" type="button" id="button-addon1">Otsi kasutajat
            </button>
            <input v-model="userInput" type="text" class="form-control" placeholder="Sisesta kasutaja email"
                   aria-describedby="button-addon1">
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Kasutaja</label>
        <div class="col-sm-10 ms-1">
          <input type="text" v-model="users.name" readonly class="form-control-plaintext" id="staticEmail" placeholder="kasutaja andmed">
        </div>
      </div>
      <div class="mb-3 row">
        <label for="roleDropdown" class="col-sm-2 col-form-label">Vali roll</label>
        <role-dropdown placeholder="roll" ref="roleDropdownRef" @event-selected-project-role-change="setSelectedProjectRole"/>
      </div>

    </template>
  </MainView>
</template>

<script>
import RoleDropdown from "@/components/dropdown/RoleDropdown.vue";
import MainView from "@/views/MainView.vue";
import CompanyUserModal from "@/components/modal/CompanyUserModal.vue";

export default {
  name: "AddCompanyUser",
  components: {CompanyUserModal, RoleDropdown, MainView},
  data() {
    return {
      selectedProjectRoleId: 0,
      userInput: '',
      users: {
        userId: 0,
        email: '',
        name: ''
      },
    }
  },
  methods: {
    handleSearchButtonClick() {
      if(this.userInput.length > 0){
        this.openCompanyUserModal()
      }
    },
    openCompanyUserModal() {
        this.$refs.companyUserModalRef.openCompanyUserModal(this.userInput)
    },
    setSelectedProjectRole(selectedProjectRoleId) {
      this.selectedProjectRoleId = selectedProjectRoleId
    },
    setUserInfo(users) {
      this.users = users
    },

  }
}

</script>

