<template>
  <MainView ref="mainViewRef">
    <template #contents>
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">Nr</th>
          <th scope="col">Projekt</th>
          <th scope="col">Kaasatud spetsialistid</th>
          <th scope="col">Klient</th>
          <th scope="col">Projektipanga link</th>
          <th scope="col">Tähtaeg</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        </tbody>
      </table>
    </template>
  </MainView>
</template>

<script>
import MainView from "@/views/MainView.vue";

export default {
  name: "Projects",
  components: {MainView}
}
</script>
