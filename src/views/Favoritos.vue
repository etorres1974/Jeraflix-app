<template>
  <div class="menu">
    <v-row>
      <v-col>
         
      </v-col>
    </v-row>

    <v-row >
      <v-col :cols="dinamycCols" v-for="movie in favoritos" :key="movie.id">
        <v-card>
          <v-img
            :lazy-src="movie.imgURL"
            max-height="500"
            @click="createDialog(movie)"
            :src="movie.imgURL"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
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
        <v-card-subtitle>{{dialogMovie.overview}}</v-card-subtitle>
        <v-card-text align="center">
          <h2 v-if="getVideoURL() == null">Vídeo indisponível =(</h2>
          <iframe v-if="dialog" allowfullscreen :src="getVideoURL()" frameborder="0" height="300"></iframe>
        </v-card-text>

        <v-card-actions>
          <v-btn text color="grey" @click="addFavorite(dialogMovie)">
            <v-icon>mdi-heart</v-icon>Adicionar aos favoritos
          </v-btn>
          <v-btn text color="grey" @click="log(dialogMovie)">
            <v-icon>mdi-share-variant</v-icon>Compartilhar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Menu",
  components: {},
  data() {
    return {
      search: "",
      dialog: false,
      dialogMovie: {},
      movies: [],
    };
  },
  methods: {
    // Configs
    ...mapActions(["fetchConfig"]),
    ...mapGetters(["getAPI_CONFIG"]),
    // Trending
    ...mapActions(["fetchTrendingMovies"]),
    ...mapGetters(["getTrending"]),
    // Video
    ...mapActions(["fetchVideoURL"]),
    ...mapGetters(["getVideoURL"]),

    // Search
    ...mapActions(["fetchMovies"]),
    ...mapGetters(["getMovies"]),
    
    // User
    ...mapGetters(["getActiveProfile"]),
    ...mapGetters(["getUser"]),
    

    async createDialog(movie) {
      await this.fetchVideoURL(movie.id);
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
    user(){
      return this.getUser() 
    },
    favoritos(){
      const { whishlist } = this.getActiveProfile()
      return whishlist 
    }
  }
};
</script>
