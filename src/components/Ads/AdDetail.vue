<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
       <v-card>
         <v-card-media
           height="300px"
           src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
         >
         </v-card-media>
         <v-card-text>
           <h1>Lorem, ipsum.</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, provident dicta maxime voluptatibus dolore quo at vel ullam, suscipit voluptatem, consequuntur consequatur sequi. Adipisci rerum velit consequuntur cumque sit dolor?</p>
         </v-card-text>
         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn color="amber" flat>Edit</v-btn>
           <v-btn color="success">Buy</v-btn>
         </v-card-actions>
       </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>