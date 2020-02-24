<template>
  <div class="menu">
    <v-row>
      <v-col>
         <h2> Gostei </h2>
      </v-col>
    </v-row>
    
    <v-row >
      <v-col :cols="dinamycCols" v-for="movie in gostei" :key="movie.id">
        <MovieCard :movie="movie" >   </MovieCard>
      </v-col>
    </v-row>
   
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieCard from "../components/MovieCard"
export default {
  name: "Menu",
  components: {
    MovieCard
  },
  data() {
    return {
      
    };
  },
  methods: {
    // User
    ...mapGetters(["getActiveProfile"]),

    ...mapGetters(["getLikes"]),

    ...mapActions(["clearGostei"]),
    ...mapActions(["fetchGosteiId"]),
    
    ...mapGetters(["getGostei"]),
    
    async fetchMovies(){
      this.getLikes().forEach(async like => {
        await this.fetchGosteiId(like.id)
      })
    }
    
  },
  async created() {
    await this.clearGostei()
    await this.fetchMovies()
  },
  computed: {
    dinamycCols() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "6";
        case "sm":
          return "6";
        case "md":
          return "4";
        case "lg":
          return "2";
        case "xl":
          return "2";
      }
    },
    user(){
      return this.getUser() 
    },
    gostei(){
      return this.getGostei()
    }
    

  },
  
};
</script>
