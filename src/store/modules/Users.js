import axios from "axios"

const state = {
    user:{
        name: String,
        pass: String,
        profiles: [],
    },
    activeProfile: {}

}

const getters = {
    getUser: (state) => state.user,
    getActiveProfile: (state) => state.activeProfile,
}

const actions = {
    //const response = await axios.get(process.env.VUE_APP_API_BASE_URL + "/configuration?api_key=" + process.env.VUE_APP_API_KEY)
    //commit("setConfig", response.data)
    async findUser({ commit }, user){
        
        const response = await axios.post(`${process.env.VUE_APP_API_USER}/login`, user )
        commit("log", response.data)
        return response.data
    },
    async createUser({ commit }, user){
        const response = await axios.post(process.env.VUE_APP_API_USER, user)
        commit("log", response.data)
        return response.data
    },

}

const mutations = {
    log: (state, text) => console.log(text),
}

export default {
    state,
    getters,
    actions,
    mutations
}