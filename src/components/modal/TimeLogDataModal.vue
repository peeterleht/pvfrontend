<template>
<Modal ref="modalRef">
  <template #title>
    Lisa oma töötunnid
  </template>
  <template #body>
    <div class="container text-center">
      <div class="row">
        <div class="input">
          <input type="text">
        </div>
        <div class="input">
          <input type="text">
        </div>
        <div class="input">
          <input type="text">
        </div>
        <div class="input">
          <input type="text">
        </div>

      </div>
    </div>
  </template>

</Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: "TimeLogDataModal",
  components: {Modal}
}
</script>

