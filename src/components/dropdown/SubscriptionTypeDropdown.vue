<template>
  <select v-model="selectedSubscriptionType" @change="emitSubscriptionType" class="form-select">
    <option v-for="subscriptionType in subscriptionTypes" :value="subscriptionType.id" :key="subscriptionType.id">
      {{ subscriptionType.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SubscriptionTypeDropdown",
  data() {
    return {
      selectedSubscriptionType: 0,
      subscriptionTypes:
          {
            subscriptionTypeId: 0,
            subscriptionTypeName: ''
          },
    }
  },

  methods: {
    sendGetSubscriptionTypes() {
      this.$http.get("/subscriptionTypes")
          .then(response => {
            this.subscriptionTypes = response.data
          })
          .catch(error => {
            const errorResponseBody = error.response.data
          })
    },
    emitSubscriptionType() {
      this.$emit('event-selected-subscription-type-change', this.subscriptionTypes.subscriptionTypeId)
    },
  },

  beforeMount() {
    this.sendGetSubscriptionTypes()
  }

}

</script>

