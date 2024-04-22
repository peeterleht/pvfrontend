<template>
  <modal ref="modalRef">
    <template #title>
    Kasutaja settings
    </template>

    <template #body>
      Siia tulevad mingid asjad ka
    </template>

    <template #buttons>
      <button @click="logOut" class="btn btn-outline-dark mx-1">Logi välja</button>
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: "UserIconModal",
  components: {Modal},
  methods: {
    logOut() {
      sessionStorage.clear()
      router.push({name: 'FrontPageRoute'})
    },
  }
}
</script>