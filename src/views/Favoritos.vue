<template>
  <div class="menu">
    <v-row>
      <v-col >
         <h2> Favoritos </h2>
      </v-col>
    </v-row>

    <v-row >
      <v-col :cols="dinamycCols" v-for="movie in favoritos" :key="movie.id">
        <MovieCard :movie="movie" >   </MovieCard>
      </v-col>
    </v-row>
   
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieCard from "../components/MovieCard"
export default {
  name: "Favoritos",
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
    favoritos(){
      const { wishlist } = this.getActiveProfile()
      return wishlist 
    }
  },
};
</script>
