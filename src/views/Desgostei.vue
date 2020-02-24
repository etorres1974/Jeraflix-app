<template>
  <div class="menu">
    <v-row>
      <v-col>
         <h2> Desgostei</h2>
      </v-col>
    </v-row>
    
    <v-row >
      <v-col :cols="dinamycCols" v-for="movie in desgostei" :key="movie.id">
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

    ...mapGetters(["getDislikes"]),

    ...mapActions(["fetchDesgosteiId"]),
    ...mapActions(["clearDesgostei"]),

    ...mapGetters(["getDesgostei"]),
    
  
    async fetchMovies(){
      this.getDislikes().forEach(async like => {
        await this.fetchDesgosteiId(like.id)
      })
    }
    
  },
  async created() {
    await this.clearDesgostei()
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
    desgostei(){
      return this.getDesgostei()
    }
    

  }
};
</script>
