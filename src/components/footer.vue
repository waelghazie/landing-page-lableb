<template>
  <v-footer class="d-flex flex-column" style="background-color: #141515;" absolute>
    <div class="app-footer">
      <v-row>
        <v-col cols="12" md="6" lg="6" class="d-flex justify-center">
          <div>
            <v-btn class="mx-10" icon>
              <v-icon large color="white">mdi-facebook</v-icon>
            </v-btn>
            <v-btn class="mx-10" icon>
              <v-icon large color="white">mdi-twitter</v-icon>
            </v-btn>
            <v-btn class="mx-10" icon>
              <v-icon large color="white">mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6" style="color: white;">
          <div class="text-body-1">For questions or enquiries please click on the link below:</div>
          <div>
            <a style="text-decoration: none;" href="#">Contact us</a>
          </div>
        </v-col>
      </v-row>
      <v-row style="color: white;">
        <v-col cols="12">
          <div class="text-body-1 text-center font-weight-light ">Copyright © 2020</div>
        </v-col>
      </v-row>
    </div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.app-footer {
  background-color: #151414;
  width: 100vw;
}
</style>