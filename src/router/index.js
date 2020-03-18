import Vue from 'vue'
import Router from 'vue-router'
import Users from '../pages/Users'
import CreateUser from '../pages/CreateUser'
import EditUser from '../pages/EditUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/create',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/edit/:id',
      name: 'EditUser',
      component: EditUser
    }
  ]
})
