import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
const opts = {
    theme: {
        themes: {
            light: {
                primary: '#26b6c9',
                secondary: '#0191C8',
                accent: '#74C2E1',
            }
        }
    }
}
export default new Vuetify(opts);
