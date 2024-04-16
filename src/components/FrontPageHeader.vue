<template>
<LoginModal ref="loginModalRef"/>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <img src="../assets/pv_logo.png" class="mx-3" width="30">
      <label class="navbar-brand me-3" style="font-family: 'Artifakt Element Black',serif">ProjektVisualiseeritud</label>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active hover:alert-info" href="#" @click="scrollToAdvert">Võimalused</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" @click="scrollToPaymentTier">Maksumus</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" @click="scrollToProjectExample">Projektide näited</a>
          </li>
        </ul>
        <div class="d-flex">
          <button @click="" class="btn btn-outline-secondary mx-1">Proovi</button>
          <button @click="" class="btn btn-outline-secondary mx-1">Registreeri</button>
          <button @click="openLoginModal" class="btn btn-outline-dark mx-1">Logi sisse</button>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
import LoginModal from "@/components/modal/LoginModal.vue";

export default {
  name: 'FrontPageHeader',
  components: {LoginModal},
  data() {
    return {
    }
  },
  methods: {
    scrollToAdvert() {
      this.$emit("event-scroll-to-ref","advertRef")
    },
    scrollToPaymentTier() {
      this.$emit("event-scroll-to-ref","paymentTierRef")
    },
    scrollToProjectExample() {
      this.$emit("event-scroll-to-ref","projectExampleRef")
    },
    openLoginModal() {
      this.$refs.loginModalRef.$refs.modalRef.openModal()
    },
  }
}
</script>