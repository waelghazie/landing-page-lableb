import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import checkView from "vue-check-view";
Vue.use(checkView);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
