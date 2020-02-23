<template >
  <v-row>
    <v-col>
      <v-form ref="form">
        <v-container justify="center" align-content="center" style="width: 500px;">
          <v-row>
            <v-col>
            
              <v-text-field :rules="nameRules" v-if="register" v-model="user.name" rounded filled label="Nome" ></v-text-field>
              <v-text-field :rules="emailRules" v-model="user.email" rounded filled label="Email"></v-text-field>
              <v-text-field :rules="passRules" v-model="user.pass" @click:append="showPass = !showPass" :type="showPass ? 'text' : 'password'" :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"  rounded filled label="Senha"></v-text-field>
              <v-text-field :rules="confirmRules" v-if="register" @click:append="showConfirm = !showConfirm" :type="showConfirm ? 'text' : 'password'" :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'" v-model="passConfirm" rounded filled label="Confirme sua senha"></v-text-field>

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
      passConfirm: "",
      showConfirm: false,
      showPass: false,
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
      },
       nameRules: [
        v => !!v || 'Nome é obrigatório',
      ],
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'Digite um email válido ex: "Foo@bar.com"',
      ],
      passRules: [
        v => !!v || "Senha é obrigatória",
      ],
      confirmRules: [
        v => !!v || "A confirmação da senha é obrigatória",
        v => v === this.user.pass || "As senhas não são iguais"
      ]
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
          if(this.$refs.form.validate()){
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
      }
    },

    async logar() {
      console.log(this.$refs.form.validate())
      if(this.$refs.form.validate()){
        // Procurando usuário no banco
        var response = await this.findUser(this.user);

        // Mostrando resultado
        this.showSnackBar(response);

        //Se o usuário for logado com sucesso, salva seus dados no Vuex e muda pra tela de menu
        if (response.user) {
          this.login(response.user[0]);
          this.$router.push("/Profiles");
        }
      }
      
    },

    showSnackBar(response) {
        this.snackbar.color = response.value;
        this.snackbar.text = response.message;
        this.snackbar.show = true;
      }
  }
}
</script>

<style>
</style>