import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registerUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      const auth = getAuth();
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password)  
        commit('setUser', new User(user.uid))
        commit('setLoading', false)    
      } catch(error) {
        commit('setLoading', false),
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      const auth = getAuth();
      try {
        const user = await signInWithEmailAndPassword(auth, email, password)  
        commit('setUser', new User(user.uid))
        commit('setLoading', false)    
      } catch(error) {
        commit('setLoading', false),
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
}
