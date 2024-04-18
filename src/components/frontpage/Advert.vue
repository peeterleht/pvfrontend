<template>
  <div>
    <div class="row" style="margin-top: 100px; margin-bottom: 200px;">
      <div class="col col-3 text-start">
        <H1>Jälgi projekti hetkeseisu visuaalselt</H1>
      </div>
      <div class="col col-9">
        <img src="../../assets/ProjectView.png" width="100%"/>
      </div>
    </div>
    <div class="row" style="margin-top: 100px; margin-bottom: 200px;">
      <div class="col col-9">
        <img src="../../assets/ToDo.png" width="100%"/>
      </div>
      <div class="col col-3 text-end">
        <H1>Vaata enda ülesandeid</H1>
      </div>
    </div>
    <div class="row" style="margin-top: 100px; margin-bottom: 200px;">
      <div class="col col-3 text-start">
        <H1>Võta projektis kulutatud aega kontrolli alla</H1>
      </div>
      <div class="col col-9">
        <img src="../../assets/TimeLog.png" width="100%"/>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.row {
  display: flex;
  justify-content: center;
}

.col {
  max-width: 800px;
  width: 100%;
}

img {
  max-width: 100%;
  height: auto;
}

h1 {
  margin-top: 0;
  font-size: 24px;
  font-family: 'Artifakt Element Black',serif;
}

p {
  font-size: 16px;
}
</style>
