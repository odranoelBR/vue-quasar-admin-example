import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let state = {
  layoutNeeded: true,
  isLoginPage: false
}

let mutations = {
  setLayoutNeeded (state, value) {
    state.layoutNeeded = value
  },
  setIsLoginPage (state, value) {
    state.isLoginPage = value
  }
}

let getters = {
  getLayoutNeeded () {
    return state.layoutNeeded
  },
  getIsLoginPage () {
    return state.isLoginPage
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
