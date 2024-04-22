<template>
  <div class="mb-3">
    <label for="companyname" class="form-label">Firmanimi</label>
    <input v-model="companyname" type="text" class="form-control" id="companyname">
  </div>
  <div class="mb-3">
    <label for="logo" class="form-label">Pane firma logo siia</label>
    <input class="form-control" type="file" id="logo">
  </div>
</template>

<script>
export default {
  name: "CompanyInfo",
  data() {
    return{
companyInfo:
    {
      companyname: '',
      logo: null
    }
    }
  },
}
</script>