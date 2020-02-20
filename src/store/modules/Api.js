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

//https://github.com/impronunciable/moviedb recomendado no FAQ da Api
const mdb = require('moviedb')(process.env.VUE_APP_API_KEY);

const state = {
    API_CONFIG: {
        images:{
            secure_base_url: "https://image.tmdb.org/t/p/"
        }
    },
    movies:[],
    trending:[],
    videoURL: ""
}
//state.API_CONFIG.images.base_url + / + state.API_CONFIG.images.poster_sizes
//O mapGetter permite acessar esses getters ja salvos no Vuex
const getters = {
    getAPI_CONFIG: (state) => state.API_CONFIG,
    getMovies: (state) => state.movies,
    getTrending: (state) => createMovies(state.trending.results,4),
    getVideoURL: (state) => state.videoURL,
    
    
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
        const response = await axios.get(`/search/movie?api_key=${process.env.VUE_APP_API_KEY}&query=${keyword}`)
        commit("log",response.data)
        commit("setMovies", response.data)
    },

    // Busca TODAS as páginas de uma busca de filmes por id usando a lib mdb
    async searchMovies({ commit }, keyword){
        mdb.searchMovie({ query: keyword}, (err, response) => {
            commit("log",response.results)
            commit("pushMovies", response.results)
            response.page++
            while(response.total_pages >= response.page){
                mdb.searchMovie({ query: keyword, page:response.page}, (err, res) => {
                    commit("log",res.results)
                    commit("pushMovies", res.results)
                });
                response.page++
            }
          });
        
    },

    //Busca somente a primeira página de uma busca de filmes por id usando a lib mdb
    async fetchMovieById({ commit }, id){
        mdb.movieInfo({ id: id}, (err, response) => {
            console.log(response);
          });
    },
    
    // Trending movies in last 24h
    async fetchTrendingMovies({commit}){
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/trending/movie/day?api_key=${process.env.VUE_APP_API_KEY}`)
        commit("setTrending", response.data)
    },
    async fetchVideoURL({commit}, id){
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/${id}/videos?api_key=${process.env.VUE_APP_API_KEY}`)
        if(response.data.results[0].site == "YouTube"){
            commit("log",`https://www.youtube.com/embed/${response.data.results[0].key}`)
            commit("setVideoURL", `https://www.youtube.com/embed/${response.data.results[0].key}`)
        }else{
            commit("log",response.data.results[0].site)
        }
    },


}

//Devem ser Síncronas, o primeiro parametro sempre é o state
const mutations = {
    log: (state, text) => console.log(text),
    setConfig: (state, config) => state.API_CONFIG = config,
    setMovies: (state, movies) => state.movies = movies,
    setTrending: (state, trending) => state.trending = trending,
    setVideoURL: (state, videoURL) => state.videoURL = videoURL,
    pushMovies: (state, movies) => movies.forEach((movie) => state.movies.push(movie))
}
// Helpers
function createMovies(moviesArray,index) {
    var Movies = []
    moviesArray.forEach(movie => {
      Movies.push({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        imgURL:`${state.API_CONFIG.images.secure_base_url}${state.API_CONFIG.images.poster_sizes[index]}${movie.poster_path}`
      });
    });
    return Movies
}

export default {
    state,
    getters,
    actions,
    mutations
}
