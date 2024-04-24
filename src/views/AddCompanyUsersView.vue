<template>
  <div>
    <CompanyUserModal ref="companyUserModalRef"/>
    <div class="container text-center">
      <div class="row">
        <div class="col col-3 bg-light">
          sidebar
        </div>
        <div class="col col-9">

          <div>
            <company-header/>
          </div>
          <div>
            <div class="row">
              <div class="input-group mb-3">
                <button @click="openCompanyUserModal" class="btn btn-outline-secondary"
                        type="button" id="button-addon1">Otsi kasutajat
                </button>
                <input v-model="userInput" type="text" class="form-control" placeholder="Sisesta kasutaja email"
                       aria-describedby="button-addon1">
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Kasutaja</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="siia tuleb otsingust saadud kasutaja nimi ja email">
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyHeader from "@/components/company/CompanyHeader.vue";
import CompanyUserModal from "@/components/modal/CompanyUserModal.vue";

export default {
  name: "AddCompanyUsersView",
  components: {CompanyUserModal, CompanyHeader},
  data() {
    return {
      userInput: '',
      users: {
        userId: 0,
        email: '',
        name: ''
      }
    }
  },
  methods: {
    openCompanyUserModal() {
      this.$refs.companyUserModalRef.openCompanyUserModal(this.userInput)
    },

  }
}
</script>

