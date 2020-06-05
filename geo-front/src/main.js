import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { CHECK_AUTH } from './store/actionsType'
import vuetify from './plugins/vuetify'
import ApiService from './api'

Vue.config.productionTip = false

ApiService.init()

store.dispatch(CHECK_AUTH)

const app = {
  router,
  store,
  vuetify,
  render: h => h(App)
}

new Vue(app).$mount('#app')
