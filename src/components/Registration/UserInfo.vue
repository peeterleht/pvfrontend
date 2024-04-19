<template>
  <div class="mb-3">
    <label for="email" class="form-label">email</label>
    <input v-model="email" type="text" class="form-control" id="email">
    <div class="mb-3">
      <label for="password" class="form-label">Parool</label>
      <input v-model="password" type="password" class="form-control" id="password">
    </div>
    <div class="mb-3">
      <label for="username" class="form-label">kasutajanimi</label>
      <input v-model="username" type="text" class="form-control" id="username">
    </div>
  </div>
</template>


<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userInfo:
          {
            email: '',
            password: '',
            username: ''
          },
    }
  },

}
</script>


<style scoped>

</style>