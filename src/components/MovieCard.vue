<template>
  <div>
    <v-card :color="color" :outlined="border">
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

    <!-- Dialog que abre ao clickar-->
    <v-dialog v-model="dialog" max-width="800">
      <v-card  >
        <v-card-title class="headline">
          {{movie.title}}
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>{{movie.overview}}</v-card-subtitle>
        <v-card-text align="center">
          <h2 v-if="getVideoURL() == null">Vídeo indisponível =(</h2>
          <iframe v-if="dialog" allowfullscreen :src="getVideoURL()" frameborder="0" height="300"></iframe>
        </v-card-text>

        <v-card-actions>
          <v-btn v-if="$route.fullPath != `/Favoritos` "  text color="grey" @click="addFavorite(movie)">
            <v-icon>mdi-heart</v-icon>Adicionar aos favoritos
          </v-btn>
          <v-btn v-else text color="grey" @click="removeFavorite(movie)">
            <v-icon>mdi-heart-broken</v-icon> Remover Favoritos
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon  color="grey" @click="gostar(movie)">
            <v-icon color="success">mdi-thumb-up-outline</v-icon>
          </v-btn>
          <v-btn icon color="grey" @click="desgostar(movie)">
            <v-icon color="error">mdi-thumb-down-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Movie",
  props: ["movie"],
  data() {
    return {
      dialog: false,
      like: ""
    };
  },
  methods: {
    // Video
    ...mapActions(["fetchVideoURL"]),
    ...mapGetters(["getVideoURL"]),

    //Profile
    ...mapActions(["addFavorite"]),
    ...mapActions(["removeFavorite"]),

    //Like
    ...mapActions(["addLike"]),
    ...mapGetters(["getLikes"]),

    
    
    async createDialog(movie) {
      await this.fetchVideoURL(movie.id);
      this.dialog = true;
    },
    async gostar(movie){
      await this.addLike({id:movie.id, like:true})
      this.fetchLike()
    },
    async desgostar(movie){
      await this.addLike({id:movie.id, like:false})
      this.fetchLike()
    },
    fetchLike(){
      // Retorna se o Movie desse cartão esta presente na lista de gostei do perfil
      // Retorna {id:123, like:Boolean}
      var obj = (this.getLikes().find(obj => obj.id == this.movie.id))
      if(obj == undefined)
        this.like = obj
      else
        this.like = obj.like
    },
  },
  watch:{
    getLikes:"fetchLike"
  },
  
  async created(){
    this.fetchLike()
  },
  computed:{
    color(){
      if(this.like == true)
        return "primary"
      if(this.like == false)
        return "error"
      return ""
    },
    border(){
      if(this.like == undefined)
        return false
      else
        return true
    },
  }
  
};
</script>
