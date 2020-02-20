import Vue from 'vue'
import Vuex from 'vuex'
import Api from "./modules/Api"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar:{
      color: "primary",
      text: "SnackText",
      show: false,
    }
  },
  getters:{
    getSnackBar: (state) => state.snackbar
  },
  mutations: {
    setSnackBar: (state, SnackBar) => state.snackbar = SnackBar,

  },
  actions: {
    showSnackBar({ commit }, SnackBar){
      commit("setSnackBar", SnackBar)
    },
  },
  modules: {
    Api
  }
})
