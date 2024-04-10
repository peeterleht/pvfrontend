<template>

  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <img src="../assets/pv_logo.png" class="mx-3" width="30">
      <a class="navbar-brand me-3">ProjektVisualiseeritud</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="#" @click="scrollToAdvert">Võimalused</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" @click="scrollToPaymentTier">Maksumus</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" @click="scrollToProjectExample">Projektide näited</a>
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-outline-secondary mx-1" type="submit">Proovi</button>
          <button class="btn btn-outline-secondary mx-1" type="submit">Registreeri</button>
          <button class="btn btn-outline-dark mx-1" type="submit">Logi sisse</button>
        </form>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'FrontPageHeader',
  components: {},
  data() {
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
    }
  }
}

</script>