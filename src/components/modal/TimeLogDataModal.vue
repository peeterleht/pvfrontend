<template>
  <Modal ref="modalRef">
    <template #title>
      Täienda oma töötunde
    </template>
    <template #body>

      <div class="container text-end">
        <div class="row">
          <div class="col ">
            Esmaspäeva tunnid:
          </div>
          <div class="col">
            <input v-model="timeLogRequest.monday" id="Monday" type="number">
          </div>

        </div>
        <div class="row mt-1">
          <div class="col ">
            Teisipäeva tunnid:
          </div>
          <div class="col">
            <input v-model="timeLogRequest.tuesday" id="Tuesday" type="number">
          </div>

        </div>
        <div class="row mt-1">
          <div class="col ">
            Kolmapäeva tunnid:
          </div>
          <div class="col">
            <input v-model="timeLogRequest.wednesday" id="Wednesday" type="number">
          </div>

        </div>
        <div class="row mt-1">
          <div class="col ">
            Neljapäeva tunnid:
          </div>
          <div class="col">
            <input v-model="timeLogRequest.thursday" id="Thursday" type="number">
          </div>

        </div>
        <div class="row mt-1">
          <div class="col ">
            Reede tunnid:
          </div>
          <div class="col">
            <input v-model="timeLogRequest.friday" id="Friday" type="number">
          </div>

        </div>
      </div>

    </template>
    <template #buttons>
      <button @click="updateTimeLog" type="button" class="btn btn-success">Salvesta</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: "TimeLogDataModal",
  components: {Modal},
  data() {
    return {
      timeLogId: 0,
      timeLogRequest: {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0
      }
    }
  },
  methods:{
    openTimeLogDataModal(userTimelog) {
      this.timeLogId = userTimelog.timeLogId
      this.setTimeLogRequestValues(userTimelog);
      this.$refs.modalRef.openModal()
    },

    setTimeLogRequestValues: function (userTimelog) {
      this.timeLogRequest.monday = userTimelog.monday
      this.timeLogRequest.tuesday = userTimelog.tuesday
      this.timeLogRequest.wednesday = userTimelog.wednesday
      this.timeLogRequest.thursday = userTimelog.thursday
      this.timeLogRequest.friday = userTimelog.friday
    },

    updateTimeLog(){
      this.$emit('event-update-time-log-values',this.timeLogRequest)
      //todo: valideeri et kõik väljad on täidetud korrektselt
      this.sendPutTimelogRequest()
      this.reloadPage()
    },

    sendPutTimelogRequest() {
      this.$http.put("/timelog", this.timeLogRequest, {
            params: {
              timeLogId: this.timeLogId
            }
          }
      ).then(response => {
        //todo: reset all fields
        this.$refs.modalRef.closeModal()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
    reloadPage(){
      window.location.reload();
    },
    resetAllInputFields() {
      this.time = ''
      this.password = ''
      this.messageCode = 0
    }

  }
}

</script>

