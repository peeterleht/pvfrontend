<template>
  <div class="container text-center">
    <div class="row">
      <div class="col col-3 bg-light">
        sidebar
      </div>
      <div class="col col-9">
        <div class="row">
          <div class="col align-content-start">
            <img alt="" src="../assets/pv_logo.png" width="50"/>
            <label class="navbar-brand me-3">Firmanimi</label>

          </div>
          <div class="col align-content-end">
            <font-awesome-icon :icon="['fas', 'user']"/>
          </div>
        </div>
        <div class="row">
          <AddProject/>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import AddProject from "@/components/project/AddProject.vue";
</script>