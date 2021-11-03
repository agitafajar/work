
<template>
  <v-container>
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          <v-img
            :src="require('../assets/logo.jpeg')"
            class="my-3"
            contain
            height="200"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="8">
        <v-card class="pa-2" outlined tile>
          <h1 class="display-2 font-weight-bold mb-3">ABRAMA DIGITAL TECH</h1>

          <p class="subheading font-weight-regular">
            We are your best solution and partner for your digital
            transformation era. With our best team in their fields, we deliver
            to you our solution for Software development, IT infrastructure, Big
            datasolution, Social media management, etc.
            <br />“The best team that make your digital transformation much more
            easier and efficient”
          </p>
        </v-card>
      </v-col>
      
    </v-row>
  </v-container>
</template>