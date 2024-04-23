<template>
  <div class="container text-center">
    <div class="row">
      <div class="col col-3 bg-light">
        sidebar
      </div>
      <div class="col col-9">

        <div>
          <company-header/>
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
import CompanyHeader from "@/components/company/CompanyHeader.vue";
</script>