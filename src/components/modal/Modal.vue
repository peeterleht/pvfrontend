<template>
  <!-- Modal -->
  <div v-if="isOpen" class="modal-backdrop fade show d-block"/>
  <FocusTrap v-if="isOpen" class="modal fade show position-absolute top-0 start-50 translate-middle-x" tabindex="-1" style="display: block;">
    <div class="modal-dialog" ref="Modal">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="title">
            <!-- Title-->
          </slot>
          <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body">
            <!-- body-->
          </slot>
        </div>
        <div class="modal-footer">
          <button @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <slot name="buttons">
            <!-- button -->
          </slot>
        </div>
      </div>
    </div>
  </FocusTrap>
</template>

<script>

import {FocusTrap} from "focus-trap-vue";

export default {
  name: 'Modal',
  components: {FocusTrap},
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    openModal() {
      this.isOpen = true
    },

    closeModal() {
      this.$emit('event-close-modal')
      this.isOpen = false
    }

  }
}
</script>
