<template>
  <div class="home">
      
      <v-text-field label="Keyword" v-model="search"> </v-text-field>
      <v-btn @click="fetchMovies(search)">Buscar</v-btn>
      <v-btn @click="searchMovies(search)">Buscar com NPM</v-btn>
      <v-btn @click="fetchMovieById(search)">Imprimir Por id</v-btn>
      <v-text-field label="path" v-model="path"> </v-text-field>
      <v-text-field label="index" type="number" v-model="index"></v-text-field>
      <v-btn @click="callImage(index,path)">Call Image</v-btn>
      <v-img :src="imageURL"></v-img>
      
      {{imageURL}}
      
  </div>
</template>

<script>

import {mapActions,mapGetters} from "vuex"
export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      search: "",
      imageURL: "",
      path: "/loqID5SSYQ8H7WmUBRgFch2EtKG.jpg",
      index: 3
    }
  },
  methods:{
    //Manual
    ...mapActions(["fetchConfig"]),
    ...mapGetters(["getAPI_CONFIG"]),

    ...mapGetters(["getMovies"]),
    ...mapActions(["fetchMovies"]),
    //Module
    ...mapActions(["searchMovies"]),
    //Test
    ...mapActions(["fetchMovieById"]),

    callImage(index,path){
      this.imageURL = this.getPosterURL(index,path)
    },
    

    getPosterURL(index,path){//Index é depende do posterSize
        return `${this.API_CONFIG.images.secure_base_url}${this.API_CONFIG.images.backdrop_sizes[index]}${path}`
    }
    
  },
  created(){
    this.fetchConfig()
  },
  computed:{
    API_CONFIG(){
      return this.getAPI_CONFIG()
    },
    movies(){
      return this.getMovies()
    },
    titles(){
      var titles = []
      this.getMovies().forEach((movie) => titles.push(movie.original_title) )
      return titles
    },
    
  }
}
</script>
