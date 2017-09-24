import Vue from 'vue'
import VueResource from 'vue-resource'
import  Router from './routes'
import App from './App.vue'
import store from './global/store'

Vue.use(VueResource)
Vue.use(Router)

new Vue({
  el: '#app',
  render: h => h(App),
    router: Router,
    store,
})
