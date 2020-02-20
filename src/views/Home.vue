<template>
  <div class="home">
    <v-row>
      <v-col :cols="dinamycCols" v-for="movie in trending" :key="movie.id">
        <v-card  >
          <v-card-title>
            {{movie.title}}
            <v-spacer></v-spacer>
            <v-btn text icon color="grey" @click="log(movie)">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-title>
          <v-img max-height="500" @click.stop="dialogCreate(movie)" :src="movie.imgURL"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <!-- Dialog que aparece quando clicka na imagem-->
    <v-dialog v-model="dialog" max-width="800">
      <v-card>
        <v-card-title class="headline">
          {{dialogMovie.title}}
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>{{dialogMovie.overview}}</v-card-text>

        <v-card-actions>
          <v-btn text color="grey" @click="log(movie)">
            <v-icon>mdi-heart</v-icon>Adicionar aos favoritos
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      dialog: false,
      dialogMovie: {},
      trending: []
    };
  },
  methods: {
    //Manual
    ...mapActions(["fetchConfig"]),
    ...mapGetters(["getAPI_CONFIG"]),

    ...mapActions(["fetchTrendingMovies"]),
    ...mapGetters(["getTrending"]),

    getPosterURL(index, path) {
      //Index é pra escolher um valor dentro do array posterSize com os tamanhos disponíveis
      return `${this.API_CONFIG.images.secure_base_url}${this.API_CONFIG.images.poster_sizes[index]}${path}`;
    },

    createTrending() {
      this.getTrending().results.forEach(result => {
        this.trending.push({
          id: result.id,
          title: result.title,
          overview: result.overview,
          imgURL: this.getPosterURL(4, result.poster_path)
        });
      });
    },
    dialogCreate(movie) {
      this.dialogMovie = movie;
      this.dialog = true;
    },
    log(e) {
      console.log(e);
    }
  },
  async created() {
    await this.fetchConfig();
    await this.fetchTrendingMovies();
    await this.createTrending();
  },
  computed: {
    API_CONFIG() {
      return this.getAPI_CONFIG();
    },

    dinamycCols () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '12'
          case 'sm': return '6'
          case 'md': return '4'
          case 'lg': return '2'
          case 'xl': return '2'
        }
    },
  }
};
</script>
