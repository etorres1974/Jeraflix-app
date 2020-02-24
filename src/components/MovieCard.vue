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
    <v-dialog max-width="800px" v-model="dialog" >
      <v-card  >
        <v-card-title class="headline">
          {{movie.title}}
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>{{movie.overview}}</v-card-subtitle>

        <v-card-text  class="d-flex pa-2"  align="center">
          <v-row>
            <v-col>
              <h2 v-if="getVideoURL() == null">Vídeo indisponível =(</h2>
              <iframe  v-if="dialog" allowfullscreen :src="getVideoURL()" frameborder="0" height="300"></iframe>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn v-if="$route.fullPath != `/Favoritos` "  text color="grey" @click="addFavorite(movie)">
            <v-icon>mdi-heart</v-icon>Favoritar
          </v-btn>
          <v-btn v-else text color="grey" @click="removeFavorite(movie)">
            <v-icon>mdi-heart-broken</v-icon> Remover Favoritos
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn text icon  color="grey" @click="gostar(movie)">
            <v-icon  color="success">mdi-thumb-up-outline</v-icon>
          </v-btn>
          <v-btn text icon color="grey" @click="desgostar(movie)">
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
      like: undefined
    };
  },
  methods: {
    ...mapGetters(["getActiveProfile"]),

    // Video
    ...mapActions(["fetchVideoURL"]),
    ...mapGetters(["getVideoURL"]),

    //Profile
    ...mapActions(["addFavorite"]),
    ...mapActions(["removeFavorite"]),

    //Like
    ...mapActions(["addLike"]),


    async createDialog(movie) {
      await this.fetchVideoURL(movie.id);
      this.dialog = true;
    },
    async gostar(movie){
      await this.addLike({id:movie.id, like:true})
      this.like = true
    },
    async desgostar(movie){
      await this.addLike({id:movie.id, like:false})
      this.like = false
    },
    fetchLike(){
      // Retorna se o Movie desse cartão esta presente na lista de gostei do perfil
      // Retorna {id:123, like:Boolean}
      var obj = (this.profile.likes.find(like => like.id == this.movie.id))
      if(obj == undefined)
        this.like = obj
      else
        this.like = obj.like
    },
  },
  async created(){
    this.fetchLike()
    //Toda vez que é criado, vai até a lista de likes e verifica se ta la pra atualizar seus valores
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
    profile(){
      return this.getActiveProfile()
    }
  }
  
};
</script>
