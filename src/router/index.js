import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListDemo from '../views/ListDemo'
import MainDemo from '../views/MainDemo'
import HtmlDemo from '../views/HtmlDemo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      path: '/listdemo',
      name: 'listDemo',
      component: ListDemo
    },{
      path: '/',
      name: 'mainDemo',
      component: MainDemo
    },{
      path: '/htmldemo',
      name: 'htmlDemo',
      component: HtmlDemo
    }]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
