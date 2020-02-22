<template>
  <div class="menu">
    <v-row>
      <v-col>
        <v-text-field
          @input="searchMovie(search)"
          v-model="search"
          label="Bucar Filmes"
          prepend-inner-icon="mdi-magnify"
          filled
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Se o usuário realiza busca, mostrar busca-->
    <v-row v-if="search">
      <v-col :cols="dinamycCols" v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </v-col>
    </v-row>
    <!-- Senão, mostrar filmes em Trending como padrão-->
    <v-row v-else>
      <v-col :cols="dinamycCols" v-for="movie in trending" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
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
      movies: [], // Guardar Filmes buscados
      trending: [], // Guardar filmes Populares
    };
  },
  methods: {
    // Configs
    ...mapActions(["fetchConfig"]),
    ...mapGetters(["getAPI_CONFIG"]),

    // Trending
    ...mapActions(["fetchTrendingMovies"]),
    ...mapGetters(["getTrending"]),

    // Search
    ...mapActions(["fetchMovies"]),
    ...mapGetters(["getMovies"]),

    // User
    ...mapGetters(["getActiveProfile"]),
    ...mapGetters(["getUser"]),

    async searchMovie(search) {
      await this.fetchMovies(search);
      this.movies = this.getMovies();
    },

    log(e) {
      console.log(e);
    }
  },
  async created() {
    await this.fetchConfig();
    await this.fetchTrendingMovies();
    this.trending = this.getTrending();
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
    user() {
      return this.getUser();
    },
    activeProfile() {
      return this.getActiveProfile();
    }
  }
};
</script>
