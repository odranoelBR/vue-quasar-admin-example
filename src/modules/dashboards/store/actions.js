import { SET_POSTS } from './mutation-types'
import { getPosts } from 'src/services/jsonplaceholderService'

export function fetchPosts ({ commit }) {
  getPosts().then(response => {
    commit(SET_POSTS, response.data)
  });
}
