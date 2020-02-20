<template>
  <div class="home">
    <v-row>
      <v-col>
        <v-text-field label="Bucar Filmes" prepend-inner-icon="mdi-magnify" filled></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="dinamycCols" v-for="movie in trending" :key="movie.id">
        <v-card>
          <v-img max-height="500" @click="createDialog(movie)" :src="movie.imgURL"></v-img>
          
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
          <iframe
            v-if="dialog"
            allowfullscreen
            :src="getVideoURL()"
            frameborder="0"
            width="300"
            height="300"
          ></iframe>
        </v-card-text>

        <v-card-actions>
          <v-btn text color="grey" @click="log(movie)">
            <v-icon>mdi-heart</v-icon>Adicionar aos favoritos
          </v-btn>
          <v-btn text color="grey" @click="log(movie)">
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
    // Configs 
    ...mapActions(["fetchConfig"]),
    ...mapGetters(["getAPI_CONFIG"]),
    // Trending
    ...mapActions(["fetchTrendingMovies"]),
    ...mapGetters(["getTrending"]),
    // Video
    ...mapActions(["fetchVideoURL"]),
    ...mapGetters(["getVideoURL"]),
    
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
    this.trending = this.getTrending()
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
    }

  }
};
</script>
