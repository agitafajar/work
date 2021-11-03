<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      <h1 class="display-2 font-weight-bold mb-3 ">Team</h1>
        <v-card flat tile>
          <v-row>
            <v-spacer></v-spacer>
            <v-col v-for="card in cards" :key="card" cols="18" sm="6" md="3">
              <v-card>
                <v-img
                  :src="`https://picsum.photos/200/300?image=${getImage()}`"
                  height="200px"
                >
                  <span
                    class="text-h5 white--text pl-4 pt-4 d-inline-block"
                    v-text="card"
                  ></span>
                </v-img>

                <v-card-actions class="white justify-center">
                  <v-btn
                    v-for="(social, i) in socials"
                    :key="i"
                    :color="social.color"
                    class="white--text"
                    fab
                    icon
                    small
                  >
                    <v-icon>{{ social.icon }}</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  data: () => ({
    cards: ["Nama", "Nama", "Nama", "Nama"],
    socials: [
      {
        icon: "mdi-facebook",
        color: "indigo",
      },
      {
        icon: "mdi-linkedin",
        color: "cyan darken-1",
      },
      {
        icon: "mdi-instagram",
        color: "red lighten-3",
      },
    ],
  }),

  methods: {
    getImage() {
      const min = 550;
      const max = 560;

      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>