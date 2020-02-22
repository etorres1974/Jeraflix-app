import axios from "axios"

const state = {
    user:{
        _id: "",
        name: "",
        email: "",
        profiles: [],
    },
    activeProfile: {},

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
        commit("setLocalStorageId", user._id)
    },
    async logout({commit}){
        commit("setUser", {})
        commit("setActiveProfile", {})
        commit("deleteLocalStorageId")
    },
    async fetchUserById({ commit }, id){
        const user = await axios.get(`${process.env.VUE_APP_API_USER}/${id}`)
        commit("setUser" ,user.data)
        commit("setActiveProfile", state.user.profiles[0])
        
    },
    async selectProfile({commit}, i){
        commit("setActiveProfile", state.user.profiles[i])
    },
    async createProfile({commit}, name){
        const profile = { name:name, wishlist: []}
        await commit("createProfile", profile)
        const response = await axios.put(`${process.env.VUE_APP_API_USER}/${state.user._id}`, profile)
        commit("log",response)
    },
    async addFavorite({commit}, movie){
        if(state.activeProfile.wishlist.some(film => film.id == movie.id)){
            commit("log", "Filme ja esta na lista de favoritos")
        }else{
            commit("addFavorite", movie)
            var req = {
                profileId: state.activeProfile._id,
                movie: movie //Isso quer dizer que se a API atualizar  eu vou estar guardando uma referencia velha.
            }
            const response = await axios.put(`${process.env.VUE_APP_API_USER}/favorite/${state.user._id}`, req)
            commit("log",response)
        }
        
    },
    async removeFavorite({commit}, movie){
        // índice do perfil dentro do user
        var profileIndex = state.user.profiles.findIndex(profile => profile._id === state.activeProfile._id)
        
        // índice do filme dentro da wishlist             
        var movieIndex = state.user.profiles[profileIndex].wishlist.findIndex(film => film.id === movie.id )
        
        //Removendo filme do wishlist no banco local
         commit("remFavorite", {profileIndex, movieIndex} )

         //Alterando banco de Dados
        var req = { profileId: state.activeProfile._id, movie: movie }
        const response = await axios.delete(`${process.env.VUE_APP_API_USER}/favorite/${state.user._id}`, {data: req})
        commit("log",response)   

        
    },
    

}

const mutations = {
    log: (state, text) => console.log(text),
    setUser: (state, user) => state.user = user,
    setActiveProfile: (state, profile) => state.activeProfile = profile,
    createProfile: (state, profile) => state.user.profiles.push(profile),
    setLocalStorageId: (state, id) => localStorage.setItem("userLoggedId", id),
    deleteLocalStorageId: (state) => localStorage.removeItem("userLoggedId"),
    addFavorite: (state, movie) => state.activeProfile.wishlist.push(movie),
    remFavorite: (state, obj) => state.user.profiles[obj.profileIndex].wishlist.splice(obj.movieIndex, 1)
}

export default {
    state,
    getters,
    actions,
    mutations
}