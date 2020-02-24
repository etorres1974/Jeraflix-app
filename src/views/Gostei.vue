<template>
  <div class="menu">
    <v-row>
      <v-col>
         
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
      search: "",
      movies: [],
      likes: []
    };
  },
  methods: {
    // User
    ...mapGetters(["getActiveProfile"]),
    ...mapGetters(["getUser"]),

    ...mapGetters(["getLikes"]),

    ...mapActions(["fetchGosteiId"]),
    ...mapActions(["clearGostei"]),

    ...mapGetters(["getGostei"]),
    
    async fetchLikes(){
      const { likes } = await this.getActiveProfile()
      var trueLikes = likes.filter(obj => obj.like == true)
      this.likes = trueLikes 
    
    },
    async fetchMovies(){
      this.likes.forEach(async like => {
        await this.fetchGosteiId(like.id)
      })
    }
    
  },
  async created() {
    this.movies = []
    await this.clearGostei()
    await this.fetchLikes()
    await this.fetchMovies()
  },
  computed: {
    dinamycCols() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "12";
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
    

  }
};
</script>
