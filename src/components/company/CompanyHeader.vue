<template>
  <div>
    <div class="row">

      <div class="col align-content-start">
        <img src="../../assets/pv_logo.png" width="30"/>
        <label class="navbar-brand ms-3">Firmanimi</label>
      </div>

      <div class="col align-content-end">
        <user-dropdown/>
      </div>

    </div>
  </div>
</template>

<script>
import UserIconModal from "@/components/modal/UserIconModal.vue";
import UserDropdown from "@/components/dropdown/UserDropdown.vue";

export default {
  name: "CompanyHeader",
  components: {UserDropdown, UserIconModal},
  methods: {

  }
}
</script>

