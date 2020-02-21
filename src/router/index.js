import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store/modules/Users"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Menu" */ '../views/Menu.vue')
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name == "Menu"){
    if(localStorage.getItem("userLoggedId") == null || localStorage.getItem("userLoggedId") == undefined){
      console.log("É necessário logar primeiro")
      next("/")
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
