<template>
  <div class="menu">
    <v-row>
      <v-col align="center">
            <h2> Quem esta Assistindo?</h2>
            <v-row v-for="(profile,i) in profiles" :key="profile._id">
                <v-col>
                    <v-card  @click="trocarPerfil(i)" >
                        <v-card-title>{{profile.name}}   </v-card-title>
                         
                    </v-card>
                </v-col>
            </v-row>
            

            <v-form ref="form">
                <v-text-field label="Nome novo perfil" :rules="nameRules" v-model="perfilName" > </v-text-field>
                <v-btn @click="addProfile()"> Adicionar Perfil <v-icon>mdi-Account</v-icon></v-btn>
            </v-form>
            
      </v-col>
      
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data(){
        return{
            perfilName: "",
            nameRules: [
                v => !!v || 'Perfil deve ter um Nome!',
                v => (v && v.length <= 10) || ' Nome deve possui no máximo 10 letras',
            ],
        }
    },
    methods:{
        ...mapGetters(["getUser"]),
        ...mapActions(["selectProfile"]),
        ...mapActions(["createProfile"]),
        addProfile(){
            if(this.$refs.form.validate()){this.createProfile(this.perfilName)}
        },
        trocarPerfil(i){
            this.selectProfile(i)
            this.$router.push("/Menu")
        },
        deletarPerfil(i){

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