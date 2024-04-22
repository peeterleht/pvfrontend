<template>
  <div>
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
            <CompanyUsers/>
          </div>

          <div class="row">
            <font-awesome-icon @click="navigateToAddCompanyUser" :icon="['fas', 'plus']" size="2xl"/>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "@/components/project/Projects.vue";
import CompanyUsers from "@/components/company/CompanyUsers.vue";
import CompanyHeader from "@/components/company/CompanyHeader.vue";

export default {
  name: "CompanyView",
  components: {CompanyHeader, CompanyUsers, Projects},
  methods: {
    navigateToAddCompanyUser() {
      alert("todo: navigeerib addCompanyUser lehele")
    },
    }
}
</script>
