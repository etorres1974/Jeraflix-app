import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: "#0DB551",
                secondary: "#ff9800",
                accent: "#ffeb3b",
                error: "#f44336",
                warning: "#ffc107",
                info: "#3f51b5",
                success: "#4caf50",

            }
        }
    }
});
