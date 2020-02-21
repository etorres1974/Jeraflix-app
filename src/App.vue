<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>{{user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/Profiles"> 
          Trocar de perfil
        </v-list-item>
      </v-list>
      

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          @click="item.action || null"
          v-for="(item,i) in items"
          :key="i"
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      {{activeProfile}}
    </v-navigation-drawer>
      
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title> Olá {{activeProfile.name}}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
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
        { icon: "mdi-heart", link: "/MinhaLista", name: "Minha Lista" },
        {
          icon: "mdi-logout",
          link: "/",
          name: "Logout",
          action: function() {
            localStorage.removeItem("userLoggedId");
          }
        }
      ]
    };
  },
  methods: {
    ...mapActions(["fetchConfig"]),
    ...mapGetters(["getAPI_CONFIG"]),

    
    ...mapGetters(["getUser"]),
    ...mapActions(["fetchUserById"]),

    ...mapGetters(["getActiveProfile"])

    
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.fetchConfig();
    this.fetchUserById(localStorage.getItem("userLoggedId"))
  },
  computed: {
    API_CONFIG() {
      return this.getAPI_CONFIG();
    },
    user(){
      return this.getUser()
    },
    activeProfile(){
      return this.getActiveProfile()
    }
  }
};
</script>
