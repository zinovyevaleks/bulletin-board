<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.imageSrc">
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad of ads" :key="ad.id">
          <v-card>
            <v-img :src="ad.imageSrc" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ ad.title }}</h3>
                <div>{{ ad.description }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'ad/'+ ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "First",
          description: "This description",
          promo: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "123",
        },
        {
          title: "Second",
          description: "This description",
          promo: true,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id: "345",
        },
        {
          title: "Third",
          description: "This description",
          promo: true,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id: "678",
        },
      ],
    };
  },
};
</script>