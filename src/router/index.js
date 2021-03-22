import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
// import Navbar from '../components/Navbar.vue'
Vue.use(VueRouter)

export const routes = [
  { path: '/', component: Login },
  { path: '/login', name: 'Login', component: Login }

  // { path: '/navbar', name: 'Navbar', component: Navbar }
]
const router = new VueRouter({
  routes
})

export default router
