<template>
    <div class="container">
        <div class="d-flex justify-content-start     mb-3">
            <router-link to="/" class="btn btn-sm btn-outline-secondary">back</router-link>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column align-items-start">
                <h2>Edit User</h2><span class="text-muted">Edit new user record</span>
            </div>
        </div>
        <div class="card pl-4 pt-5 pb-5 pr-4 mt-5">
            <form action="" @submit.prevent="updateUserDetails">
                <vue-form-generator tag="div" :schema="schema" :model="model" />
                <div class="d-flex justify-content-end mt-3 pr-4">
                    <button class="btn btn-primary btn-lg">
                        {{ isSaving ? 'Saving...' : 'Update'}}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import userFormSchema from '../forms/userFormSchema'
import axios from 'axios'

export default {
  name: 'EditUser',
  mounted () {
    this.fetchUser(this.$route.params.id)
  },
  data () {
    return {
      model: {},
      schema: userFormSchema,
      id: this.$route.params.id,
      isSaving: false
    }
  },
  methods: {
    async fetchUser () {
      try {
        this.model = (await axios.get(`https://user-management-api.enkaypeter.repl.co/${this.id}`)).data
      } catch (e) {
        console.log(e)
        alert(e.message)
      }
    },
    async updateUserDetails () {
      this.isSaving = true
      try {
        await axios.put(`https://user-management-api.enkaypeter.repl.co/${this.id}`, this.model)
        alert('User details updated')
      } catch (e) {
        console.log(e)
        alert(e.message)
      }
      this.isSaving = false
    }
  }
}
</script>

<style></style>
