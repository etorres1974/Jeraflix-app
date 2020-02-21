import Vue from 'vue'
import Vuex from 'vuex'
import Api from "./modules/Api"
import Users from "./modules/Users"
Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    Api,
    Users
  }
})
