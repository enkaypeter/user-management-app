// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import App from './App'
import router from './router'
import TelInput from './components/tel-input.vue'

Vue.component('field-tel-input', TelInput)
Vue.use(VueFormGenerator, {
  validators: {
    strongPassword: (value, field, model) => {
      let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/

      if (!regex.test(value)) {
        return [ 'Password should be a minimum five characters, at least one uppercase letter, ' +
        'one lowercase letter and one number']
      } else {
        return []
      }
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
