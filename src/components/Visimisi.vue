<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      <h1 class="display-2 font-weight-bold mb-3 ">Vission and Mission</h1>
        <v-timeline>
          <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
              ></span>
            </template>
          </v-timeline-item>
        </v-timeline> </v-col
    ></v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "black",
        year: "Provide best services and best solution for client",
      },
      {
        color: "black",
        year: "Make digital technology easier and efficient",
      },
      {
        color: "black",
        year: "Provide best team to support and help client based on digital transformation era",
      },
      {
        color: "black",
        year: "Create own product",
      },
      {
        color: "black",
        year: "Become a company that is able to contribute in the field of information technology research and community services",
      },
      {
        color: "black",
        year: "Build a competitive company on digital technology era",
      },
    ],
  }),
};
</script>