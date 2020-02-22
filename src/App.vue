<template>
  <v-app id="inspire">
    <!-- Não mostrar menu se estiver na raiz -->
    <v-navigation-drawer v-if="$route.fullPath != `/` " v-model="drawer" app clipped>
      <v-list>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>{{user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/Profiles">Trocar de perfil</v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="(item,i) in items" :key="i" :to="item.link">
          <v-list-item-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/" @click="logout()">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <!-- Se estiver na raiz, mostrar nome do projeto -->
      <v-toolbar-title v-if="$route.fullPath == `/` ">JeraFlix</v-toolbar-title>
       <!-- Senão, mostrar nome do usuário e icone para abrir menu -->
      <template v-else>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>{{activeProfile.name}}</v-toolbar-title>
      </template>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; Jeraflix 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawer: null,
      items: [
        { icon: "mdi-filmstrip", link: "/Menu", name: "Inicio" },
        { icon: "mdi-heart", link: "/Favoritos", name: "Favoritos" }
      ]
    };
  },
  methods: {
    //Configurações básica necessárias para fazer requisição de midias na api, só precisa ocorrer uma vez
    ...mapActions(["fetchConfig"]),
    ...mapGetters(["getAPI_CONFIG"]),

    // User
    ...mapGetters(["getUser"]),
    ...mapActions(["fetchUserById"]),
    ...mapGetters(["getActiveProfile"]),
    ...mapActions(["logout"])
  },
  async created() {
    this.$vuetify.theme.dark = true;
    await this.fetchConfig();
    await this.fetchUserById(localStorage.getItem("userLoggedId"));
  },

  computed: {
    user() {
      return this.getUser();
    },
    activeProfile() {
      return this.getActiveProfile();
    }
  }
};
</script>
