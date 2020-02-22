<template >
  <v-row>
    <v-col>
      <v-form>
        <v-container justify="center" align-content="center" style="width: 500px;">
          <v-row>
            <v-col>
              <v-text-field v-model="user.name" rounded filled label="Nome" v-if="register"></v-text-field>
              <v-text-field v-model="user.email" rounded filled label="Email"></v-text-field>
              <v-text-field v-model="user.pass" rounded filled label="Senha"></v-text-field>

              <!-- Botão de logar não aparece se estiver logando -->
              <v-btn v-if="!register" @click="logar()" color="primary" rounded block>Logar</v-btn>
              <br />
              <!-- Ativa modo Registrar-->
              <v-btn @click="registrar()" rounded block>Registrar</v-btn>
              <br />
              <!-- Retorna o modo logar -->
              <v-btn v-if="register" @click="register = false" rounded block>
                <v-icon>mdi-keyboard-return</v-icon>Voltar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <!-- Mostrar mensagens -->
      <v-snackbar absolute :color="snackbar.color" v-model="snackbar.show">
        {{ snackbar.text}}
        <v-btn icon @click="this.snackbar.show=false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        pass: "",
        //profiles: [{ name: this.name, wishlist: [] }], // 
      },
      register: false, // Flag para trocar o formulário entre Login e Register sem trocar de página
      snackbar: {
        color: "primary",
        text: "SnackText",
        show: false
      }
    };
  },
  methods: {
    ...mapActions(["findUser"]),
    ...mapActions(["createUser"]),
    ...mapActions(["login"]),

    async registrar() {
      // Se register for falso, o usuário esta na tela de login
      if (this.register == false) {
        this.register = true;
      } else {
        // Criando Default Profiles, o mongoose não permite usar this dentro do model, apesar de a documentação dizer o oposto
        this.user.profiles = [{ name: this.user.name, wishlist: [] }]
        
        // Criando Usuário no banco de dados
        var response = await this.createUser(this.user);

        // Mostrando resultado
        this.showSnackBar(response);

        // Se o usuário for cadastrado com sucesso, retorna para tela de login
        if (response.value == "success") {
          this.register = false;
        }
      }
    },

    async logar() {
      // Procurando usuário no banco
      var response = await this.findUser(this.user);

      // Mostrando resultado
      this.showSnackBar(response);

      //Se o usuário for logado com sucesso, salva seus dados no Vuex e muda pra tela de menu
      if (response.user) {
        this.login(response.user[0]);
        this.$router.push("/Profiles");
      }
    },
    showSnackBar(response) {
      this.snackbar.color = response.value;
      this.snackbar.text = response.message;
      this.snackbar.show = true;
    }
  }
};
</script>

<style>
</style>