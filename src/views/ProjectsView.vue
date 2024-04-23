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
          <Projects/>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import Projects from "@/components/project/Projects.vue";
import CompanyHeader from "@/components/company/CompanyHeader.vue";
</script>