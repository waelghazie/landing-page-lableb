<template>
  <v-navigation-drawer
    v-model="navigationDrawer"
    clipped
    app
    class="elevation-6"
    color="#c2c2c2"
  >
    <v-list>
      <v-list-group
        v-for="menu in menus"
        :key="menu.title"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="menu.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="item in menu.items" :key="item.title">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { bus } from "../main";
import sections from "@/assets/sections";

export default {
  name: "NavigationDrawer",

  data() {
    return {
      navigationDrawer: false,
      menu: null,
    };
  },

  created() {
    this.menus = sections.menus;
    bus.$on("toggleNavigationDrawer", () => {
      this.navigationDrawer = true;
    });
  },
};
</script>

<style scoped></style>
