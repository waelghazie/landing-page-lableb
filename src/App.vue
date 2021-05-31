<template>
  <v-app>
    <app-bar />
    <mavigate-drawer v-if="$vuetify.breakpoint.mobile"></mavigate-drawer>
    <v-main>
      <v-container class="pa-0 ma-0" fluid>
        <home />
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import appBar from "./components/appBar";
import mavigateDrawer from "./components/navigation-drawer";

import home from "./views/home";
import "animate.css";
import appFooter from './components/footer';

export default {
  name: "App",

  components: {
    "app-bar": appBar,
    home,
    'app-footer' : appFooter,
    mavigateDrawer
  },

  data: () => ({
    //
  })
};
</script>
<style lang="sass">
@import './sass/variables.scss'

*::-webkit-scrollbar
  width: 10px

*::-webkit-scrollbar-track
  background: white

*::-webkit-scrollbar-thumb
  background-color: lightgrey
  border-radius   : 1px

*::-webkit-scrollbar-thumb:hover
  background-color: gray
</style>