<template>
  <v-app-bar color="white" elevation="1" app>
    <v-app-bar-nav-icon class="ml-10">
      <v-img width="5vw" :src="logo"></v-img>
    </v-app-bar-nav-icon>

    <v-toolbar-title class="ml-12">LABLEB</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu bottom offset-y open-on-hover transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text large v-bind="attrs" v-on="on">Product</v-btn>
      </template>
      <v-list>
        <v-list-item @click="1">
          <v-list-item-title>
            <v-icon color="secondary" class="ml-2">mdi-lightning-bolt</v-icon>
            <span class="ml-4">Features</span>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="1">
          <v-list-item-title>
            <v-icon color="secondary" class="ml-2">mdi-play-outline</v-icon>
            <span class="ml-4">Try it !</span>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="1">
          <v-list-item-title>
            <v-icon color="secondary" class="ml-2">mdi-tag</v-icon>
            <span class="ml-4">Pricing</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu bottom offset-y open-on-hover transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text large v-bind="attrs" v-on="on">Resources</v-btn>
      </template>
      <v-list>
        <v-list-item @click="1">
          <v-list-item-title>
            <v-icon color="secondary" class="ml-2">mdi-api</v-icon>
            <span class="ml-4">RestAPI</span>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="1">
          <v-list-item-title>
            <v-icon color="secondary" class="ml-2">mdi-language-javascript</v-icon>
            <span class="ml-4">JavaScript</span>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="1">
          <v-list-item-title>
            <v-icon color="secondary" class="ml-2">mdi-language-php</v-icon>
            <span class="ml-4">PHP</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu bottom offset-y open-on-hover transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text large v-bind="attrs" v-on="on">Company</v-btn>
      </template>
      <v-list>
        <v-list-item @click="1">
          <v-list-item-title>
            <v-icon color="secondary" class="ml-2">mdi-account-supervisor</v-icon>
            <span class="ml-4">About</span>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="1">
          <v-list-item-title>
            <v-icon color="secondary" class="ml-2">mdi-blogger</v-icon>
            <span class="ml-4">Blog</span>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="1">
          <v-list-item-title>
            <v-icon color="secondary" class="ml-2">mdi-tie</v-icon>
            <span class="ml-4">Careers</span>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="1">
          <v-list-item-title>
            <v-icon color="secondary" class="ml-2">mdi-cellphone</v-icon>
            <span class="ml-4">Contact us</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu transition="slide-y-transition" bottom offset-y>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn class="ml-10" icon v-bind="attrs" v-on="{ ...tooltip, ...menu }">
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

    <v-btn color="secondary" class="ml-10" rounded x-small depressed>Login</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      logo: require("./../assets/logo.png")
    };
  }
};
</script>

<style>
</style>