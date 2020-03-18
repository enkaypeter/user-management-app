<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column align-items-start">
                <h2>All users</h2><span class="text-muted">list of all users</span>
            </div>
            <router-link to="/create" class="btn btn-primary">Create new user</router-link>
        </div>
        <div class="table-responsive mt-5 bg-white">
            <div class="text-center" v-if="isLoading">Fetching Users</div>
            <table v-if="!isLoading && users.length" class="table">
                <thead>
                <tr>
                    <th>SN</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{user.first_name}}</td>
                    <td>{{user.last_name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone_number}}</td>
                    <td>
                        <div class="button-group">
                            <button class="btn btn-sm">view</button>
                            <router-link :to="`/edit/${user.id}`" class="btn btn-sm btn-secondary">edit</router-link>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="text-center" v-if="!isLoading && !users.length">No users found</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Users',
  mounted () {
    this.fetchUsers()
  },
  data () {
    return {
      users: [],
      isLoading: true
    }
  },
  methods: {
    async fetchUsers () {
      try {
        this.users = (await axios.get('https://user-management-api.enkaypeter.repl.co/users')).data
      } catch (e) {
        console.log(e)
        alert(e.message)
      }
      this.isLoading = false
    }
  }

}
</script>

<style scoped></style>
