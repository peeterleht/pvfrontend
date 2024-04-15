<template>
  <Modal ref="modalRef">
    <template #title>
      Kas soovid sisse logida?
    </template>

    <template #body>
      <div class="container text-start">
        <div class="row justify-content-center">
          <div class="col">
            <div class="mb-3">
              <label for="username" class="form-label">Kasutajanimi</label>
              <input type="text" class="form-control" id="username">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Parool</label>
              <input type="password" class="form-control" id="password">
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #buttons>
      <button @click="" type="submit" class="btn btn-primary text-center text-nowrap">Logi sisse</button>
    </template>
  </Modal>
</template>

<script>

import {defineComponent} from "vue";
import Modal from "@/components/modal/Modal.vue";

export default defineComponent({
  components: {Modal}
})
</script>
