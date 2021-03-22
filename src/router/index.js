import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
Vue.use(VueRouter)

export const routes = [
  { path: '/', component: Login },
  { path: '/login', name: 'Login', component: Login }
]
const router = new VueRouter({
  routes
})

export default router
