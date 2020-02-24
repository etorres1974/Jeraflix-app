/*************
        SAMPLE URLS
        1. To get the config data like image base urls
        https://api.themoviedb.org/3/configuration?api_key=<APIKEY>
         
        2. To fetch a list of movies based on a keyword
        https://api.themoviedb.org/3/search/movie?api_key=<APIKEY>&query=<keyword>
        
        3. To fetch more details about a movie
        https://api.themoviedb.org/3/movie/<movie-id>?api_key=<APIKEY>

        4. To Fetch Images
        https://image.tmdb.org/t/p/w500/xl2e0hQiwXHumaNUb2skSmS6Jzf.jpg
        `${API_CONFIG.images.secure_base_url}/${API_CONFIG.images.backdrop_sizes[0-3]}/${poster_path} `
        *************/

import axios from "../../plugins/axios-instance"

const state = {
    API_CONFIG: {
        images:{
            secure_base_url: "https://image.tmdb.org/t/p/"
        }
    },
    gostei: [],
    desgostei: [],
    movies:[],
    trending:[],
    similar:[],
    recommendations: [],
    videoURL: ""
}
//state.API_CONFIG.images.base_url + / + state.API_CONFIG.images.poster_sizes
//O mapGetter permite acessar esses getters ja salvos no Vuex
const getters = {
    getAPI_CONFIG: (state) => state.API_CONFIG,
    getMovies: (state) =>  createMovies(state.movies.results,4),
    getTrending: (state) => createMovies(state.trending.results,4),
    getSimilar: (state) => createMovies(state.similar.results,4),
    getRecommendations: (state) => createMovies(state.recommendations.results,4),
    getVideoURL: (state) => state.videoURL,
    getGostei: (state) => createMovies(state.gostei,4),
    getDesgostei: (state) => createMovies(state.desgostei,4),
    

}

// o mapActions solicita a Api do Backend modificações
const actions = {
    // Busca informações necessárias para fazer requisições na API
    async fetchConfig({ commit }){
        const response = await axios.get(process.env.VUE_APP_API_BASE_URL + "/configuration?api_key=" + process.env.VUE_APP_API_KEY)
        
        commit("setConfig", response.data)
    },

    // Busca somente a primeira página de uma busca de filmes por id usando axios
    async fetchMovies({ commit }, keyword){
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/search/movie?api_key=${process.env.VUE_APP_API_KEY}&query=${keyword}`)
        commit("log",response.data)
        commit("setMovies", response.data)
    },

    //Gostei
    async fetchGosteiId({ commit }, id){
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`)
        commit("pushGostei", response.data)
    },
    async fetchDesgosteiId({ commit }, id){
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`)
        commit("pushDesgostei", response.data)
    },
    clearGostei({commit}){
        commit("setGostei", [])
    },
    clearDesgostei({commit}){
        commit("setDesgostei", [])
    },
    
    // Trending movies in last 24h
    async fetchTrendingMovies({commit}){
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/trending/movie/day?api_key=${process.env.VUE_APP_API_KEY}`)
        commit("setTrending", response.data)
    },

    async fetchVideoURL({commit}, id){
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/${id}/videos?api_key=${process.env.VUE_APP_API_KEY}`)
        if(response.data.results.length != 0){
            if(response.data.results[0].site == "YouTube"){
                commit("log",`https://www.youtube.com/embed/${response.data.results[0].key}`)
                commit("setVideoURL", `https://www.youtube.com/embed/${response.data.results[0].key}`)
            }else{
                commit("log","Video Não esta no youtube")
                commit("log",response.data.results[0].site)
            }
        }else{
            commit("log",response.data)
            commit("setVideoURL", null)
        }
    },

    async fetchSimilarMovies({commit}, id){
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/${id}/similar?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`)
        commit("setSimilar", response.data)
    },

    async fetchMovieRecommendations({commit}, id){  
        //commit("log", `${process.env.VUE_APP_API_BASE_URL}/movie/${id}/recommendations?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`)                     
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/${id}/recommendations?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`)
        //commit("log", response)
        commit("setRecommendations", response.data)
    },
   


}

//Devem ser Síncronas, o primeiro parametro sempre é o state
const mutations = {
    log: (state, text) => console.log(text),
    setConfig: (state, config) => state.API_CONFIG = config,
    setMovies: (state, movies) => state.movies = movies,
    setTrending: (state, trending) => state.trending = trending,
    setRecommendations: (state, recommendations) => state.recommendations = recommendations,
    setSimilar: (state, similar) => state.similar = similar,
    setVideoURL: (state, videoURL) => state.videoURL = videoURL,
    pushMovies: (state, movies) => movies.forEach((movie) => state.movies.push(movie)),
    
    pushGostei: (state, movie) => state.gostei.push(movie),
    setGostei: (state, arr) => state.gostei = arr,

    pushDesgostei: (state, movie) => state.desgostei.push(movie),
    setDesgostei: (state, arr) => state.desgostei = arr
}

// Helper Function que formata os filmes de forma mais conveniente
function createMovies(moviesArray,index) {
    var Movies = []
    if(moviesArray != undefined){
        moviesArray.forEach(movie => {
        Movies.push({
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            imgURL:`${state.API_CONFIG.images.secure_base_url}${state.API_CONFIG.images.poster_sizes[index]}${movie.poster_path}`
        });
        });
        return Movies
    }else{
        return "Nenhum busca realizada"
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
