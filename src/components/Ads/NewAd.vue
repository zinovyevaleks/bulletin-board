<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1 class="mb-3">Create new ad</h1>
        <v-form class="mb-3" ref="form" v-model="valid" validation>
          <v-text-field
            name="title"
            label="Add title"
            type="text"
            required
            v-model="title"
            :rules="[(v) => !!v || 'Title required']"
          ></v-text-field>
          <v-textarea
            name="description"
            label="Add description"
            type="text"
            v-model="description"
            :rules="[(v) => !!v || 'Description required']"
          ></v-textarea>
        </v-form>
        <v-layout row mb-3>
          <v-flex xs12>
            <v-btn dark color="amber">
              Upload image
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="" alt="" height="100" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch v-model="promo" label="add to promo" color="amber"></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="createAd" :disabled="!valid"
              >Create Ad</v-btn
            >
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      promo: false,
      valid: false,
    };
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
        }

        console.log(ad);
      }
    },
  },
};
</script>