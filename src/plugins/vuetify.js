import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#006D68',
            secondary: '#FFFFFF',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
    })

