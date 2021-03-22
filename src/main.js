import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// import { routes } from './routes'
// import VueRouter from 'vue-router'

// // eslint-disable-next-line no-unused-vars
// const router = new VueRouter({
//   routes,
//   mode: 'history'
// })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
