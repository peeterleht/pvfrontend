<template>
  <Modal ref="modalRef">
    <template #title>
      Kas soovid sisse logida?
    </template>

    <template #body>
      <div class="row justify-content-center">
        <div class="col">
          <div>
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="text" class="form-control" id="email">
          </div>
          <div>
            <label for="password" class="form-label">password</label>
            <input v-model="password" type="text" class="form-control" id="password">
          </div>
        </div>
      </div>
    </template>

    <template>
      <button @click="executeLogin" type="submit" class="btn">Logi sisse</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/App.vue";
import router from "@/router";

export default {
  name: "LoginModal",
  components: {Modal},
  data() {
    return {
      email: '',
      password: '',
      loginResponse: {
        userId: 0,
        roleId: 0
      }
    }
  },

  methods: {

    executeLogin() {
      this.sendLoginRequest()
    },


    sendLoginRequest() {
      this.$http.get("/login", {
        params:{
          email: this.email,
          password: this.password
        }
      })
          .then(response => {
             this.loginResponse = response.data
          this.handleLoginRequestResponse()
          })
          .catch(error => {
            //const errorResponseBody = error.response.data
          })
    },

    handleLoginRequestResponse() {
      sessionStorage.setItem('userId', this.loginResponse.userId)
      sessionStorage.setItem('roleId', this.loginResponse.roleId)
      this.$refs.modalRef.closeModal()
      router.push({name: 'projectRoute'})
    },

  }
}
</script>
