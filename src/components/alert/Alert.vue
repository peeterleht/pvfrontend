<template>
  <div v-if="messageCode >= 1000 && messageCode < 2000" class="alert alert-danger text-center" role="alert">
    {{ message }}
  </div>
  <div v-if="messageCode >= 2000 && messageCode < 3000" class="alert alert-success text-center" role="alert">
    {{ message }}
  </div>
  </template>

<script>
import FrontPageHeader from "@/components/FrontPageHeader.vue";

export default {
  name: 'Alert',
  components: {FrontPageHeader},
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
        this.message = "Täida kõik väljad"
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
