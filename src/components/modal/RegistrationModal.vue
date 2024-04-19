<template>
  <Modal ref="modalRef">
    <template #title>
      Kas soovid uue kasutaja luua?
    </template>

    <template #body>
      <div class="container text-start">
        <div class="row justify-content-center">
          <div class="col">
            <Alert ref="alertRef"/>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                Vali kasutajatüüp
              </button>
              <ul class="dropdown-menu">
                <li><a @click="setRoleCompanyAdmin" class="dropdown-item" href="#">Firma admin</a></li>
                <li><a @click="setRoleCompanyUser" class="dropdown-item" href="#">Tavakasutaja</a></li>
              </ul>
            </div>

            <div>
              <user-info/>
            </div>

            <div v-if="roleId === 2">
              <CompanyInfo/>
              <subscription-type-dropdown @event-selected-subscription-type-change="setSelectedSubscriptionTypeId"/>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #buttons>
      <button @click="executeRegistration" class="btn btn-primary text-center text-nowrap">Loo uus kasutaja</button>
    </template>
  </Modal>
</template>

<script>
import {FocusTrap} from "focus-trap-vue";
import Modal from "@/components/modal/Modal.vue";
import Alert from "@/components/alert/Alert.vue";
import UserInfo from "@/components/Registration/UserInfo.vue";
import CompanyInfo from "@/components/Registration/CompanyInfo.vue";
import SubscriptionTypeDropdown from "@/components/Registration/SubscriptionTypeDropdown.vue";

export default {
  name: "RegistrationModal",
  components: {SubscriptionTypeDropdown, CompanyInfo, UserInfo, Alert, Modal, FocusTrap},
  data() {
    return {
      selectedSubscriptionTypeId: 0,
      roleId: 0,

    }
  },
  methods: {

    setRoleCompanyAdmin() {
      this.roleId = 2
    },
    setRoleCompanyUser() {
      this.roleId = 3
    },
    setSelectedSubscriptionTypeId(selectedSubscriptionTypeId) {
      this.selectedSubscriptionTypeId = selectedSubscriptionTypeId
    },

  }

}
</script>


<style scoped>

</style>