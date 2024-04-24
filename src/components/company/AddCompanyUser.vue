<template>
  <div class="container text-start">
    <div class="row justify-content-center">
      <div class="col">
        <div class="mb-3">
          <label for="userDetails" class="form-label">email</label>
          <a v-model="userDetails" type="text" class="form-control" id="email"/>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Parool</label>
          <input v-model="password" type="password" class="form-control" id="password">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "@/components/alert/Alert.vue";

export default {
  name: "AddCompanyUser",
  components: {Alert},
  data() {
    return{
      userDetails:{
        userName: '',
        userEmail: ''
      }
    }
  },
}
</script>

