<template>
  <div v-if="messageCode >= 1000 && messageCode < 2000" class="alert alert-danger text-center lh-sm" role="alert">
    {{ message }}
  </div>
  <div v-if="messageCode >= 2000 && messageCode < 3000" class="alert alert-success text-center" role="alert">
    {{ message }}
  </div>
  </template>

<script>

export default {
  name: 'Alert',
  components: {},
  data() {
    return {
      messageCode: 0,
      message: ''
    }
  },
  methods: {
    showMessage(messageCode) {
      this.messageCode = messageCode
      if (this.messageCode === 1001) {
        this.message = "Täida väljad email ja parool"
      }
      if (this.messageCode === 1002) {
        this.message = "Kasutajanimi või parool ei ole õige"
      }
      if (this.messageCode === 1003) {
        this.message = "Kolmas sõnum"
      }
      if (this.messageCode === 2001) {
        this.message = "Kasutaja on ok, aga sisse ei saa ;)"
      }
      setTimeout(this.resetAlertMessages, 4000)
    },
    resetAlertMessages() {
      this.messageCode = 0
      this.message = ''
    },
  }
}
</script>
