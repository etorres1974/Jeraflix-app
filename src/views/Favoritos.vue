<template>
  <div class="menu">
    <v-row>
      <v-col>
         
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
    };
  },
  methods: {
    // User
    ...mapGetters(["getActiveProfile"]),
    ...mapGetters(["getUser"]),
    
    log(e) {
      console.log(e);
    }
  },
  async created() {

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
    favoritos(){
      const { wishlist } = this.getActiveProfile()
      return wishlist 
    }
  }
};
</script>
