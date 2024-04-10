<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">

           <img src="../assets/pv_logo.png">
            <a class="navbar-brand" href="#">ProjektVisualiseeritud</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Võimalused</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Maksumus</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Projektide Näited</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Tagasiside</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <button @click="LoginModal" class="btn btn-outline-success mx-3" type="submit">Logi sisse</button>
                <button class="btn btn-outline-success" type="submit">Proovi</button>
              </form>
            </div>
          </div>
        </nav>

</template>

<script setup>

import LoginModal from "@/components/modal/LoginModal.vue";
</script>