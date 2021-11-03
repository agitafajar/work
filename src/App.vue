<template>
  <v-app>
    <v-app-bar
      app
      color="danger"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Contact Us</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Paralax/>
      <Index/>
      <Visimisi/>
      <Team/>
      <Product/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Paralax from './components/Paralax';
import Index from './components/Index';
import Visimisi from './components/Visimisi';
import Product from './components/Product';
import Footer from './components/Footer';
import Team from './components/Team';

export default {
  name: 'App',

  components: {
    Paralax,
    Index,
    Visimisi,
    Team,
    Product,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
