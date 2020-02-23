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
  {
    path: '/recomendacoes',
    name: 'Recomendacoes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Menu" */ '../views/Recomendacoes.vue')
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //Se for pra alguma rota diferente da home && Sem estar Logado
  if(to.name !== "Home" && !localStorage.getItem("userLoggedId")) 
    next("/") // Redireciona para home
  else
    next() //Continua
  
})

export default router
