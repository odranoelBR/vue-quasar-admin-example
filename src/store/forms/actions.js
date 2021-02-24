import axios from "axios";
import { SET_TYPES, SET_CARDS, SET_LOADING_CARDS, SET_PAGINATION } from './mutation-types'
import { createPaginationFromMagicGatheringResponse, createQueryParamFromObject } from '@helpers/httpHelper'
const axiosInstance = axios.create({ baseURL: process.env.MAGIC_GATHERING_API })

export function fetchTypes ({ commit }) {
  axiosInstance.get('types')
    .then(response => {
      commit(SET_TYPES, response.data.types)
    });
}

export function fetchCards ({ commit, state }) {
  let queryParams = createQueryParamFromObject(state.params)
  commit(SET_LOADING_CARDS, true)

  axiosInstance.get(`cards?${queryParams}`)
    .then(response => {
      commit(SET_LOADING_CARDS, false)
      commit(SET_PAGINATION, createPaginationFromMagicGatheringResponse(response.headers))
      commit(SET_CARDS, response.data.cards)
    });
}
