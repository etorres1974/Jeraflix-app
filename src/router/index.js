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
    path: '/menu',
    name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Menu" */ '../views/Menu.vue')
  },
  {
    path: '/profiles',
    name: 'Profiles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Menu" */ '../views/Profiles.vue')
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Menu" */ '../views/Favoritos.vue')
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // Está Deslogado
  if(localStorage.getItem("userLoggedId") == null || localStorage.getItem("userLoggedId") == undefined){
    if(to.name != "Home"){
      console.log("É necessário logar primeiro")
      next("/")
    }
  }
  next()
})

export default router
