<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
       <v-card>
         <v-card-media
           height="300px"
           :src="ad.imageSrc"
         >
         </v-card-media>
         <v-card-text>
           <h1>{{ad.title}}</h1>
           <p>{{ad.description}}</p>
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
  props: ['id'],
computed: {
  ad () {
    const id = this.id
    return this.$store.getters.adById(id)
  }
}
};
</script>