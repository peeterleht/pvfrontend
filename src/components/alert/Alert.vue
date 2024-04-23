<template>
  <div v-if="messageCode >= 1000 && messageCode < 2000" class="alert alert-danger text-center lh-sm" role="alert">
    {{ message }}
  </div>
  <div v-if="messageCode >= 2000 && messageCode < 3000" class="alert alert-success text-center" role="alert">
    {{ message }}
  </div>
</template>

<script>
import FrontPageHeader from "@/components/frontpage/FrontPageHeader.vue";

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
      switch (this.messageCode) {
        case 1001:
          this.message = "Täida väljad email ja parool"
          break;
        case 1002:
          this.message = "Kasutajanimi või parool ei ole õige"
          break;
        case 1003:
          this.message = "Kolmas sõnum"
          break;
        case 2001:
          this.message = "Kasutaja on ok, aga sisse ei saa ;)"
          break;
        case 2002:
          this.message = "Kasutaja registreeritud. Logi sisse :)"
          break;
          case 2003:
          this.message = "Firma admini kasutaja ja firma registreeritud. Logi sisse :)"
          break;
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
