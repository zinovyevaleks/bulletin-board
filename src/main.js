// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import * as fb from "firebase/app";


Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  created() {
    fb.initializeApp({
      apiKey: 'AIzaSyCBsC_ip0d7z26QEuYfRX7n7jD7kKaamyQ',
      authDomain: 'ads-board-ecf9c.firebaseapp.com',
      projectId: 'ads-board-ecf9c',
      storageBucket: 'ads-board-ecf9c.appspot.com',
      messagingSenderId: '13054458008',
      appId: '1:13054458008:web:f4ae7c03e5d11f110d78ed'
    })

  }
})
