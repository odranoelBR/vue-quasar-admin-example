import { SET_POSTS, SET_COMMENTS, SET_TODOS } from './mutation-types'

export default {
  [SET_POSTS] (state, payload) {
    state.posts = payload;
  },
  [SET_COMMENTS] (state, payload) {
    state.comments = payload;
  },
  [SET_TODOS] (state, payload) {
    state.todos = payload;
  }
}
