<template>
  <div class="menu">
    <v-row>
      <v-col align="center">
            <h2> Quem esta Assistindo?</h2>
            <v-row v-for="(profile,i) in profiles" :key="profile._id">
                <v-col>
                    <v-card  @click="trocarPerfil(i)" >
                        <v-card-title>{{profile.name}}</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            

            <br>
            <v-text-field v-model="perfilName" > </v-text-field>
            <v-btn @click="createProfile(perfilName)"> Adicionar Perfil <v-icon>mdi-Account</v-icon></v-btn>
            {{user}}
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data(){
        return{
            perfilName: ""
        }
    },
    methods:{
        ...mapGetters(["getUser"]),
        ...mapActions(["selectProfile"]),
        ...mapActions(["createProfile"]),

        trocarPerfil(i){
            this.selectProfile(i)
            this.$router.push("/Menu")
        }
    },
    computed:{
        profiles(){
            return this.getUser().profiles
        },
        user(){
            return this.getUser()
        }
    }
}
</script>