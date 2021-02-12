import axios from "axios";
import { SET_TYPES, SET_CARDS, SET_LOADING_CARDS, SET_PAGINATION } from './mutation-types'
import { createPaginationFromMagicGatheringResponse } from '@helpers/httpHelper'
const axiosInstance = axios.create({ baseURL: "https://api.magicthegathering.io/v1/" })

export function getTypes ({ commit }) {
  axiosInstance.get('types')
    .then(response => {
      commit(SET_TYPES, response.data.types)
    });
}

export function getCards ({ commit }, params) {
  commit(SET_LOADING_CARDS, true)
  axiosInstance.get(params ? `cards?${params}` : 'cards?pageSize=12')
    .then(response => {
      commit(SET_LOADING_CARDS, false)
      commit(SET_PAGINATION, createPaginationFromMagicGatheringResponse(response.headers))
      commit(SET_CARDS, response.data.cards)
    });
}
