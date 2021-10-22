import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './Router/Routes'
import './assets/tailwind.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
Vue.use(VueRouter)
Vue.component('v-select', vSelect)

const router = new VueRouter({
  routes,
  mode:"history"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
