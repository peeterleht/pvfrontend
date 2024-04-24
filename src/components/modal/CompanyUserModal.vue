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
        <tr v-for="user in users" :key="user.userId">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button @click="handleChooseUser(user)">Vali</button>
          </td>
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
    return {
      users: [
        {
          userId: 0,
          email: '',
          name: ''
        }
      ]
    }
  },
  methods: {
    handleChooseUser(user) {
      this.$emit('event-user-selected', user)
    },
    openCompanyUserModal(userInput) {
      this.sendGetUsersByEmail(userInput)

    },
    sendGetUsersByEmail(userInput) {
      this.$http.get("/company/users/search", {
            params: {
              userInput: userInput
            }
          }
      ).then(response => {
        this.users = response.data

        this.$refs.modalRef.openModal();
        if (this.users.length < 1) {
            // todo: viska mingi alert et kasutajat ei leitud
        }

      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

  }
}
</script>

