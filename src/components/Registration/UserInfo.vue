<template>
  <div class="mb-3">
    <label for="email" class="form-label">email</label>
    <input v-model="email" type="text" class="form-control" id="email">
  </div>
  <div class="mb-3">
    <label for="username" class="form-label">username</label>
    <input v-model="username" type="text" class="form-control" id="username">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Parool</label>
    <input v-model="password" type="password" class="form-control" id="password">
  </div>
</template>


<script>
export default {
  name: "userInfo",
  data() {
    return {
      userInfo: [
        {
          email: '',
          username: '',
          password: ''
        },
      ]
    }
  },
}
</script>


<style scoped>

</style>