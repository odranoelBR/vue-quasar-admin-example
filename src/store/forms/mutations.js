import { SET_TYPES, SET_CARDS, SET_LOADING_CARDS, SET_PAGINATION } from './mutation-types'

export default {
  [SET_TYPES] (state, payload) {
    state.types = payload;
  },
  [SET_CARDS] (state, payload) {
    state.cards = payload;
  },
  [SET_LOADING_CARDS] (state, payload) {
    state.loadingCards = payload;
  },
  [SET_PAGINATION] (state, payload) {
    state.pagination = payload;
  }
}
