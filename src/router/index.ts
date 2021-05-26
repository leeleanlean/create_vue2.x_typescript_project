import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import dashboard from './dashboard'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  },
  dashboard
]

const router = new VueRouter({
  routes
})

export default router
