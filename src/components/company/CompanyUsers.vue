<template>
  <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">Nimi</th>
      <th scope="col">Roll</th>
      <th scope="col">E-mail</th>
      <th scope="col">Tunnid ok</th>
      <th scope="col">Status</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="companyUser in companyUsers" :key="companyUser.userEmail" >
      <td>{{companyUser.userName}}</td>
      <td>{{companyUser.projectRoleName}}</td>
      <td>{{companyUser.userEmail}}</td>
      <td>{{companyUser.hoursStatus}}</td>
      <td>{{companyUser.userStatus}}</td>
    </tr>

    </tbody>
  </table>
</template>


<script>
export default {
  name: "CompanyUsers",
  data() {
    return{
      companyId: Number(sessionStorage.getItem('companyId')),
      companyUsers:[
        {
          userId: 0,
          userEmail: '',
          userName: '',
          userStatus: '',
          hoursStatus: '',
          projectRoleName: ''
        }
      ]
    }
  },
  methods: {
    sendGetCompanyUsers() {
      this.$http.get("/company/users", {
            params: {
              companyId: this.companyId
            }
          }
      ).then(response => {
        this.companyUsers = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
  },
  beforeMount() {
    this.sendGetCompanyUsers()
  }
}
</script>
