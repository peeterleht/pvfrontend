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
            <UserTimeLog/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >

import {defineComponent} from "vue";
import CompanyHeader from "@/components/company/CompanyHeader.vue";
import CompanyUsers from "@/components/company/CompanyUsers.vue";
import UserTimeLog from "@/components/timelog/UserTimeLog.vue";

export default defineComponent({
  components: {UserTimeLog, CompanyUsers, CompanyHeader}
})
</script>

