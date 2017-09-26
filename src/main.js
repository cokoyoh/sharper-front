import Vue from 'vue'
import swal from 'sweetalert2'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import  Router from './routes'
import App from './App.vue'
import store from './global/store'

Vue.use(VueResource)
Vue.use(Router)
Vue.use(VeeValidate)
Vue.use(swal)

new Vue({
  el: '#app',
  render: h => h(App),
    router: Router,
    store,
})
