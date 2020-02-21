<template >
  <v-row>
    <v-col>
      <v-form>
        <v-container justify="center" align-content="center" style="width: 500px;">
          <v-row>
            <v-col>
              <v-text-field v-model="name" rounded filled label="Nome" v-if="register"></v-text-field>
              <v-text-field v-model="email" rounded filled label="Email"></v-text-field>
              <v-text-field v-model="pass" rounded filled label="Senha"></v-text-field>

              <v-btn v-if="!register" @click="logar()" color="primary" rounded block>Logar</v-btn>
              <br />
              <v-btn @click="registrar()" rounded block>Registrar</v-btn>
              <br />
              <v-btn v-if="register" @click="register = false" rounded block>
                <v-icon>mdi-keyboard-return</v-icon>Voltar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      pass: "",
      register: false,
      snackbar: {
        text: "",
        color: ""
      }
    };
  },
  methods: {
    ...mapActions(["findUser"]),
    ...mapActions(["createUser"]),

    ...mapActions(["showSnackBar"]),

    clearForm() {
      (this.name = ""),
        (this.email = ""),
        (this.pass = ""),
        (this.register = false);
    },

    async registrar() {
      if (this.register == false) {
        this.register = true;
      } else {
        var user = {
          name: this.name,
          email: this.email,
          pass: this.pass,
          profiles: [{ name: this.name, whishlist: [] }]
        };
        var response = await this.createUser(user);
            this.snackbar.text = response.message;
            this.snackbar.color = response.value;
            this.showSnackBar(this.snackbar);
        this.clearForm();
      }
    },

    async logar() {
      var user = {
        //name: this.name,
        email: this.email,
        pass: this.pass
        //profiles: [{ name: this.name, whishlist: [] }]
      };
      var response = await this.findUser(user);
        this.snackbar.text = response.message;
        this.snackbar.color = response.value;
        this.showSnackBar(this.snackbar);
    }
  }
};
</script>

<style>
</style>