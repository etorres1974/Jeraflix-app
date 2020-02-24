import axios from "axios"

const state = {
    user:{
        _id: "",
        name: "",
        email: "",
        profiles: [],
    },
    activeProfile: {
        wishlist: [],
        likes: [],
        _id: "",
        name: ""
    },

}

const getters = {
    getUser: (state) => state.user,
    getActiveProfile: (state) => state.activeProfile,
    getLikes: (state) => state.activeProfile.likes.filter(obj => obj.like == true),
    getDislikes: (state) => state.activeProfile.likes.filter(obj => obj.like == false)
    
}

const actions = {
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
    async selectProfile({commit}, _id){
        var user = state.user.profiles.find(profile => profile._id == _id)
        commit("setActiveProfile", user)
    },
    async createProfile({commit}, name){
        const profile = { name:name, wishlist: [], likes:[]}
        commit("createProfile", profile)
        const response = await axios.put(`${process.env.VUE_APP_API_USER}/${state.user._id}`, profile)
        
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

        // índice do filme dentro da wishlist             
        var movieIndex =state.activeProfile.wishlist.findIndex(film => film.id === movie.id )
        
        //Removendo filme do wishlist no banco local
         commit("remFavorite", movieIndex )

         //Alterando banco de Dados
        var req = { profileId: state.activeProfile._id, movie: movie }
        const response = await axios.delete(`${process.env.VUE_APP_API_USER}/favorite/${state.user._id}`, {data: req})
        commit("log",response)   

        
    },
    async addLike({commit}, like){ //like = {id:movie.id, like:true}
        //Se ja existir um like para esse Filme, retorna o index, senão retorna -1
        var index = await  state.activeProfile.likes.findIndex(obj => obj.id == like.id)

        if(index == -1 ){
            console.log("Novo like")
            commit("pushLike", like)
        }
        else{
            console.log("Editando like: ")
            console.log(state.activeProfile.likes[index])
            commit("editLike", {index, like})
        } 
        var req = { profileId: state.activeProfile._id, obj: like }
        const response = await axios.put(`${process.env.VUE_APP_API_USER}/like/${state.user._id}`, req)
        
        
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
    remFavorite: (state, movieIndex) =>  state.activeProfile.wishlist.splice(movieIndex, 1),
    editLike: (state, obj) => state.activeProfile.likes.splice(obj.index, 1) && state.activeProfile.likes.push(obj.like),
    pushLike: (state, like) => state.activeProfile.likes.push(like) 
}

export default {
    state,
    getters,
    actions,
    mutations
}