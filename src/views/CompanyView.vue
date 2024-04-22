<template>
    <div class="container text-center">
      <div class="row">
        <div class="col col-3 bg-light">
          sidebar
        </div>
        <div class="col col-9">

          <div class="row">
            <div class="col align-content-start">
              <img src="../assets/pv_logo.png" width="50"/>
              <label class="navbar-brand me-3">Firmanimi</label>

            </div>
            <div class="col align-content-end">
              <font-awesome-icon :icon="['fas', 'user']"/>
            </div>
          </div>
          <div class="row">
            <CompanyUsers/>
          </div>
          <div class="row">
            <font-awesome-icon @click="navigateToAddCompanyUser" :icon="['fas', 'plus']" size="2xl" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Projects from "@/components/project/Projects.vue";
import CompanyUsers from "@/components/company/CompanyUsers.vue";

export default {
  name: "CompanyView",
  components: {CompanyUsers, Projects},
  methods: {
    navigateToAddCompanyUser() {
      alert("todo: navigeerib addCompanyUser lehele")
    },
  }
}
</script>
