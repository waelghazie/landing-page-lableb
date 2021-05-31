<template>
  <v-app-bar color="white" elevation="1" app>
    <v-app-bar-nav-icon class="ml-10">
      <v-img width="5vw" :src="logo"></v-img>
    </v-app-bar-nav-icon>

    <v-toolbar-title class="ml-12">LABLEB</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      v-if="$vuetify.breakpoint.mobile"
      color=""
      icon
      elevation="0"
      @click="toggleNavigationDrawer"
    >
      <v-icon> mdi-menu </v-icon>
    </v-btn>

    <div v-if="!$vuetify.breakpoint.mobile">
      <v-menu v-for="menu in menus" :key="menu.title" bottom offset-y open-on-hover transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text large v-bind="attrs" v-on="on"> {{ menu.title }} </v-btn>
        </template>
        <v-list>
          <v-list-item @click="1" v-for="item in menu.items" :key="item.title">
            <v-list-item-title>
              <v-icon color="secondary" class="ml-2"> {{ item.icon }} </v-icon>
              <span class="ml-4"> {{ item.title }} </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>  

      <v-menu transition="slide-y-transition" bottom offset-y>
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn
                class="ml-10"
                icon
                v-bind="attrs"
                v-on="{ ...tooltip, ...menu }"
              >
                <v-icon>mdi-translate</v-icon>
              </v-btn>
            </template>
            <span>Language</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item @click="1">
            <v-list-item-title class="text-center">العربية</v-list-item-title>
          </v-list-item>
          <v-list-item @click="1">
            <v-list-item-title class="text-center">English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn color="secondary" class="ml-10" rounded x-small depressed>
        Login
      </v-btn>
    </div>

    
  </v-app-bar>
</template>

<script>
import { bus } from '../main'
import sections from "@/assets/sections";

export default {
  data() {
    return {
      logo: require("@/assets/logo.png"),
      menu: null
    };
  },

  methods: {
    toggleNavigationDrawer() {
       bus.$emit('toggleNavigationDrawer', null);
    },
  },

  created() {
    this.menus = sections.menus
  }
};
</script>

<style>
</style>