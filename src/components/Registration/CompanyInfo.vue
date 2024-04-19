<script>
export default {
  name: "CompanyInfo"
}
</script>

<template>
  <div class="mb-3">
    <label for="email" class="form-label">Firmanimi</label>
    <input v-model="email" type="text" class="form-control" id="email">
  </div>
  <div class="mb-3">
    <label for="formFile" class="form-label">Default file input example</label>
    <input class="form-control" type="file" id="formFile">
  </div>
</template>

<style scoped>

</style>