<template>
  <Modal ref="modalRef">
    <template #title>
      Kas soovid sisse logida?
    </template>

    <template #body>
      <div class="container text-start">
        <div class="row justify-content-center">
          <div class="col">
            <Alert ref="messageRef"/>
            <div class="mb-3">
              <label for="email" class="form-label">email</label>
              <input v-model="email" type="text" class="form-control" id="email">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Parool</label>
              <input v-model="password" type="password" class="form-control" id="password">
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #buttons>
      <button @click="executeLogIn" class="btn btn-primary text-center text-nowrap">Logi sisse</button>
    </template>
  </Modal>
</template>

<script>

import Modal from "@/components/modal/Modal.vue";
import router from "@/router";
import Alert from "@/components/alert/Alert.vue";

export default {
  components: {Alert, Modal},
  data() {
    return {
      email: '',
      password: '',
      messageCode: 0,
      loginResponse: {
        userId: 0,
        roleName: '',
        projectRoleName: '',
        companyId: 0
      },
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    executeLogIn() {
      if (this.allFieldsWithCorrectInput()) {
        this.sendLoginRequest()
      } else {
      }
    },

    allFieldsWithCorrectInput() {
       return this.email.length > 0 && this.password.length > 0;
    },

    sendLoginRequest() {
      this.$http.get('/login', {
            params: {
              email: this.email,
              password: this.password
            }
          }
      ).then(response => {
        this.loginResponse = response.data
        this.handleLoginRequestResponse()
      }).catch(error => {
        this.errorResponse = error.response.data
        this.$refs.messageRef.showMessage(1001)
      })
    },

    handleLoginRequestResponse() {
      this.saveLoginResponseInfoToSessionStorage();
      this.resetAllInputFields()
      this.$refs.modalRef.closeModal()
      router.push({name: 'ProjectViewRoute'})
    },

    saveLoginResponseInfoToSessionStorage() {
      sessionStorage.setItem('userId', this.loginResponse.userId)
      sessionStorage.setItem('roleName', this.loginResponse.roleName)
      sessionStorage.setItem('projectRoleName', this.loginResponse.projectRoleName)
      sessionStorage.setItem('companyId', this.loginResponse.companyId)
    },

    resetAllInputFields() {
      this.email = ''
      this.password = ''
      this.messageCode = 0
    }
  }
}
</script>
