<template>
  <div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <font-awesome-icon :icon="['fas', 'user']"/>
    </a>

    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Kasutaja sätestused</a></li>
      <li><a @click="logOut" class="btn btn-danger ms-3" href="#">Logi välja</a></li>
    </ul>
  </div>
</template>


<script>
import router from "@/router";

export default {
  name: "UserDropdown",
  methods:{
    logOut() {
      sessionStorage.clear()
      router.push({name: 'FrontPageRoute'})
    },
  }
}
</script>