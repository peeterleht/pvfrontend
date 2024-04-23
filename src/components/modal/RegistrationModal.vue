<template>
  <Modal ref="modalRef">
    <template #title>
      Kas soovid uue kasutaja luua?
    </template>

    <template #body>
      <div class="container text-start">
        <div class="row justify-content-center">
          <div class="col">
            <div class="dropdown">
              <span>Vali kontotüüp</span>
              <br>
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                {{selectedAccountType}}
              </button>
              <ul class="dropdown-menu">
                <li><a @click="setRoleCompanyAdmin" class="dropdown-item" href="#">Firma admin</a></li>
                <li><a @click="setRoleCompanyUser" class="dropdown-item" href="#">Tavakasutaja</a></li>
              </ul>
            </div>

            <div>
              <UserInfo ref="userInfoRef"/>
            </div>

            <div v-if="userInfo.roleId === 2">
              <CompanyInfo ref="companyInfoRef"/>
              <span class="input-group-text">Vali konto tyyp</span>
              <subscription-type-dropdown ref="subscriptionTypeDropdownRef"
                                          @event-selected-subscription-type-change="setSelectedSubscriptionTypeId"/>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #buttons>
      <button @click="addNewUser" class="btn btn-primary text-center text-nowrap">Loo uus kasutaja</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import Alert from "@/components/alert/Alert.vue";
import UserInfo from "@/components/Registration/UserInfo.vue";
import CompanyInfo from "@/components/Registration/CompanyInfo.vue";
import SubscriptionTypeDropdown from "@/components/Registration/SubscriptionTypeDropdown.vue";

export default {
  name: "RegistrationModal",
  components: {SubscriptionTypeDropdown, CompanyInfo, UserInfo, Alert, Modal},
  data() {
    return {
      selectedAccountType: 'Vali kasutajatyyp',
      selectedSubscriptionTypeId: 0,
      userInfo:
          {
            roleId: 0,
            email: '',
            password: '',
            username: '',
          },
      userInfoExtended:
          {
            roleId: 0,
            email: '',
            password: '',
            username: '',
            subscriptionTypeId: 0,
            companyname: '',
            logo: ''
          }
    }
  },
  methods: {

    setRoleCompanyAdmin() {
      this.userInfo.roleId = 2
      this.selectedAccountType = 'Firma Admin'
    },
    setRoleCompanyUser() {
      this.userInfo.roleId = 3
      this.selectedAccountType = 'Tavakasutaja'
    },
    setSelectedSubscriptionTypeId(selectedSubscriptionTypeId) {
      this.selectedSubscriptionTypeId = selectedSubscriptionTypeId
    },

    addNewUser() {
      if (this.userInfo.roleId === 3) {
        this.addCompanyUserDetails()
        this.sendPostNewCompanyUser()
      } else if (this.userInfo.roleId === 2) {
        this.addCompanyAdminDetails()
        this.addCompanyDetails()
        this.userInfoExtended.subscriptionTypeId = this.$refs.subscriptionTypeDropdownRef.selectedSubscriptionType
        console.log('Extended User Info', this.userInfoExtended)
        this.sendPostNewCompanyAdmin()
      }
    },

    addCompanyUserDetails() {
      this.userInfo.email = this.$refs.userInfoRef.email
      this.userInfo.password = this.$refs.userInfoRef.password
      this.userInfo.username = this.$refs.userInfoRef.username
    },
    addCompanyAdminDetails() {
      this.userInfoExtended.roleId = this.userInfo.roleId
      this.userInfoExtended.email = this.$refs.userInfoRef.email
      this.userInfoExtended.password = this.$refs.userInfoRef.password
      this.userInfoExtended.username = this.$refs.userInfoRef.username
    },

    sendPostNewCompanyUser() {
      this.$http.post("/register/company/user", this.userInfo
      ).then(() => {
        let messageCode = 2002;
        this.$emit('event-user-registered-successfully', messageCode)
        this.$refs.modalRef.closeModal()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
    sendPostNewCompanyAdmin() {
      this.$http.post("/register/company/admin", this.userInfoExtended
      ).then(() => {
        let messageCode = 2003;
        this.$emit('event-user-registered-successfully', messageCode)
        this.$refs.modalRef.closeModal()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
    addCompanyDetails() {
      this.userInfoExtended.companyname = this.$refs.companyInfoRef.companyname
      this.userInfoExtended.logo = this.$refs.companyInfoRef.logo
    }
  },

}
</script>


<style scoped>

</style>