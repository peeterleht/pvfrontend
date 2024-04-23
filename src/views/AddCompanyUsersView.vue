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
                <button @click="openCompanyUserModal; sendGetUsersByEmail;" class="btn btn-outline-secondary" type="button" id="button-addon1">Otsi kasutajat</button>
                <input type="text" class="form-control" placeholder="Sisesta kasutaja email" aria-describedby="button-addon1">
              </div>
            </div>

            <div class="row">
              <font-awesome-icon :icon="['fas', 'plus']" size="2xl"/>
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
  data(){
    return{
      inputEmail: ''
    }
  },
  methods:{
    openCompanyUserModal() {
      this.$refs.companyUserModalRef.$refs.modalRef.openModal()
    },
    sendGetUsersByEmail() {
      this.$http.get("/company/find-user-by-email", {
            params: {
              someRequestParam1: this.inputEmail

            }
          }
      ).then(response => {
        const responseBody = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
  }
}
</script>

