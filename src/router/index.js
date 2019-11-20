import Vue from 'vue'
import VueRouter from 'vue-router'
import VolBidApply from '../views/VolBidApply.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'VolBidApply',
    component: VolBidApply
  },
  {
    path: '/VolBidManage',
    name: 'VolBidManage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VolBidManage.vue')
  },
  {
    path: '/VolBidCommission',
    name: 'VolBidCommission',
    component: () => import('../views/VolBidCommission.vue')
  },
  {
    path: '/VolBidRecheck',
    name: 'VolBidRecheck',
    component: () => import('../views/VolBidRecheck.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
