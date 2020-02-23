<template>
  <div class="menu">
    <v-row>
      <v-col><h2>Com base nos seus Favoritos</h2></v-col>
      <v-col>Indicações por filme = {{(slider*2)}} <v-slider v-model="slider" min="0" max="20"></v-slider> </v-col>
    </v-row>
    
    <v-row>
      <v-col :cols="dinamycCols" v-for="movie in films" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieCard from "../components/MovieCard";
export default {
  name: "Menu",
  components: {
    MovieCard
  },
  data() {
    return {
      search: "",
      films: [],
      slider: Number,
    };
  },
  methods: {
    // User
    ...mapGetters(["getActiveProfile"]),
    ...mapGetters(["getUser"]),

    // Fetching Similar Movies
    ...mapActions(["fetchMovieRecommendations"]),
    ...mapActions(["fetchSimilarMovies"]),

    ...mapGetters(["getRecommendations"]),
    ...mapGetters(["getSimilar"]),

    // Retorna <slider> filmes com base no filme recebido
    async mix(movie) {
      //Retorna um array com 3 filmes similares
      await this.fetchSimilarMovies(movie.id);
      var sim = this.getSimilar().slice(0, this.slider);

      //Retorna um array com 3 filmes recomendados
      await this.fetchMovieRecommendations(movie.id);
      var rec = this.getRecommendations().slice(0, this.slider);

      return sim.concat(rec);
    },

    async generate() {
      this.films = []
      //Cria um conjunto de promises com  filmes da função Mix
      var promises = this.favoritos.map(async film => {
        return await this.mix(film);
      });

      // Resolve as promises criando "Matriz" de filmes {[5],[5],[5]}
      var results = await Promise.all(promises);

      // 2 loops para percorrer a "Matriz" verificando se não é duplicado é adiciona em this.films para exibir
      results.forEach(movies => {
        movies.forEach(movie => {
          var duplicado = this.films.some(film => film.id == movie.id);
          var favoritado = this.favoritos.some(film => film.id == movie.id)
          if (!duplicado && !favoritado) this.films.push(movie);
        });
      });
    }
  },
  mounted() {
    //this.generate();
  },
  created(){
    this.generate();
  },
  watch:{
    favoritos:"generate",
    slider: "generate",
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
    favoritos() {
      const { wishlist } = this.getActiveProfile();
      return wishlist;
    }
  }
};
</script>
