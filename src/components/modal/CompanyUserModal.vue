<template>
  <modal ref="modalRef">
    <template #body>
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">Nimi</th>
          <th scope="col">E-mail</th>
          <th scope="col">nupp</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userId" >
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td><button>Vali</button></td>
          </tr>

        </tbody>
      </table>
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: "CompanyUserModal",
  components: {Modal},
  data() {
    return{
      users:[
        {
          userId: 0,
          email: '',
          name: ''
        }
      ]
    }
  },
  methods:{

  }
}
</script>

