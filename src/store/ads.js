export default {
  state: {
    ads: [{
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
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createdAd ({commit}, payload) {
      payload.id = 'afkashfgalsjkncvakwrjvn'

      commit('createAd', payload)
    }
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    }
    ,
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  },
}
