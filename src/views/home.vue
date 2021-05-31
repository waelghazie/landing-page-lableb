<template>
  <div style="background-color: #f9f9f9">
    <div class="hero">
      <v-row style="height: 80%">
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          class="d-flex flex-column justify-center"
        >
          <div class="ml-10">
            <div class="animate__animated animate__backInLeft">
              <div class="text-h3 mb-8 hero-text">
                The leading arabic custom search technology
              </div>
            </div>
            <div class="animate__animated animate__backInLeft">
              <div class="text-h5 hero-text">
                Engage more activity in your application with Arabic search that
                actually gets it
              </div>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          class="d-flex justify-center align-center"
        >
          <v-img max-height="70%" contain :src="hero"></v-img>
        </v-col>
      </v-row>
      <div
        class="d-flex align-center flex-column pb-4"
        @click="$vuetify.goTo('#second-section')"
        style="cursor: pointer"
      >
        <div class="hero-text">
          <small>Learn more</small>
        </div>
        <div class="animate__animated animate__swing animate__delay-2s">
          <v-icon large color="white">mdi-mouse</v-icon>
        </div>
      </div>
    </div>
    <div class="second-section pt-8 px-md-10" id="second-section">
      <div class="text-center text-h4 mb-4">So why Lableb ?</div>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          class="d-flex flex-column align-center pa-12"
        >
          <v-img height="50vh" contain :src="hero2"></v-img>
          <p class="text-center">
            Lableb Cloud Search is a fully functional search application added
            to your website. It helps you get the right answer to more people on
            your platform and surface relevant content for your readers and
            followers
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          class="d-flex flex-column justify-center"
        >
          <div class="ml-10">
            <div class="text-h5 mb-8">
              Lableb Custom Search supports indexing Arabic content and data in
              addition to out-of-the-box support of English language
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="third-section pa-10 px-10" align="center">
      <div class="text-center text-h3 mb-4">
        A Complete In-site Search Experience
      </div>
      <div class="text-center text-h6" style="width: 60vw">
        Lableb Custom Search supports indexing Arabic content and data in
        addition to out-of-the-box support of English language. Delivering wide
        variety of features
      </div>
      <div class="mt-10 mx-md-12">
        <v-card outlined>
          <v-simple-table style="width: 100%">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="width: 20%">&nbsp;</th>
                  <th class="text-left" style="width: 40%">&nbsp;</th>
                  <th style="width: 40%">
                    <div class="d-flex justify-center">
                      <div style="width: 10vw">
                        <v-img height="5vh" contain :src="logo"></v-img>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in features" :key="i">
                  <td class="text-center">
                    <v-icon color="#0191C8">{{ item.icon }}</v-icon>
                  </td>
                  <td class="text-left noselect text-subtitle-1">
                    {{ item.label }}
                  </td>
                  <td class="text-center">
                    <v-icon large color="success">mdi-check</v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </div>
    </div>
    <div class="forth-section px-md-10" align="center">
      <div class="text-center text-h3 mb-4">And who use Lableb?</div>
      <div class="text-center text-h6 mb-10" style="width: 60vw">
        Lableb is used trusted and successfull enitities that value powerful
        tools and appoach enhancing products to boost business
      </div>
      <v-row justify="center" class="mx-2">
        <v-col cols="12" md="4" v-for="(item, i) in uses" :key="i">
          <v-hover v-slot="{ hover }">
            <v-card
              shaped
              width="100%"
              min-height="20rem"
              :elevation="hover ? 10 : 1"
            >
              <v-img height="30vh" contain :src="item.img"></v-img>
              <v-card-title class="text-center">{{ item.title }}</v-card-title>
              <v-card-text class="text-center">{{ item.text }}</v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
    <div class="fifth-section px-10" align="center">
      <div class="text-center text-h4 mb-16">How to use Lableb?</div>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          class="d-flex justify-center flex-column"
        >
          <h3 class="text-left mb-5">Lableb Search API</h3>
          <div class="text-left text-subtitle1">
            Integrate Lableb Search with your software or application using the
            fully documented API with various features that are built with
            highest standards and a deep understanding of the Arabic language.
            LEARN MORE
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-img height="50vh" contain :src="lablebAPI"></v-img>
        </v-col>
      </v-row>
    </div>
    <div class="sixth-section px-10" align="center">
      <div class="text-center mt-16 mb-16">Trusted by many companies</div>
      <div class="d-flex justify-center">
        <div
          style="width: 10vw; height: 10vh"
          class="d-flex justify-center align-center mx-10"
          v-for="(item, i) in companies"
          :key="i"
        >
          <v-img :src="item"></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: require("./../assets/hero.svg"),
      hero2: require("./../assets/hero-2.svg"),
      logo: require("./../assets/logo.png"),
      features: [
        { icon: "mdi-magnify-scan", label: "Custom search" },
        { icon: "mdi-flash-auto", label: "Auto complete" },
        { icon: "mdi-comment-edit-outline", label: "Spell correction" },
        { icon: "mdi-auto-fix", label: "Fiter, snippet & highlighting" },
        { icon: "mdi-chart-areaspline", label: "Search analytics" },
        { icon: "mdi-av-timer", label: "Faster instant search" },
        { icon: "mdi-lock-check", label: "Privacy and security" },
        { icon: "mdi-globe-model", label: "Multi-lingual" },
      ],
      uses: [
        {
          img: require("./../assets/ent.svg"),
          title: "Governments & Enterprises",
          text: "Classify and organise millions of documents and data records",
        },
        {
          img: require("./../assets/commerce.svg"),
          title: "E-Commerce",
          text:
            "Personalise your customers’ shopping experience and index the product Arabic details the right way",
        },
        {
          img: require("./../assets/media.svg"),
          title: "Media & Blogs",
          text: "Attract loyal readers and enhance their in-site experience",
        },
      ],
      lablebAPI: require("./../assets/Lableb-API-1.png"),
      companies: [
        require("./../assets/logo_1.png"),
        require("./../assets/logo_2.png"),
        require("./../assets/logo_3.png"),
        require("./../assets/logo_4.png"),
        require("./../assets/logo_5.png"),
      ],
      secondSection: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.hero {
  min-height: 90vh;
  background-color: #0191c8;
}

.second-section,
.third-section,
.forth-section,
.fifth-section,
.sixth-section {
  min-height: 100vh;
}

.hero-text {
  color: #ffffff;
}

.noselect {
  user-select: none;
}
</style>