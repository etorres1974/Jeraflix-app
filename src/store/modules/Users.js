import axios from "axios"

const state = {
    user:{
        name: "",
        pass: "",
        email: "",
        profiles: [],
    },
    activeProfile: null,

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
        return response.data
    },
    async createUser({ commit }, user){
        const response = await axios.post(process.env.VUE_APP_API_USER, user)
        commit("log", response.data)
        return response.data
    },
    async login({commit}, user){
        commit("setUser", user)
        commit("setActiveProfile", user.profiles[0])
        localStorage.setItem("userLoggedId", user._id)
    },
    async fetchUserById({ commit }, id){
        const user = await axios.get(`${process.env.VUE_APP_API_USER}/${id}`)
        commit("log", user.data)
        commit("setUser" ,user.data)
        commit("setActiveProfile", user.data.profiles[0])
    },

}

const mutations = {
    log: (state, text) => console.log(text),
    setUser: (state, user) => state.user = user,
    setActiveProfile: (state, profile) => state.profile = profile
}

export default {
    state,
    getters,
    actions,
    mutations
}