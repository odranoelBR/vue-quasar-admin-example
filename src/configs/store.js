import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let state = {
  layoutNeeded: true
}

let mutations = {
  setLayoutNeeded (state, value) {
    state.layoutNeeded = value
  }
}

let getters = {
  getLayoutNeeded () {
    return state.layoutNeeded
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
