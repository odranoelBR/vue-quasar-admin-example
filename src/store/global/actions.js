import { SET_POSTS, SET_COMMENTS, SET_TODOS } from './mutation-types'
import { getPosts, getComments, getTodos, putTodo } from 'src/services/jsonplaceholderService'

export function fetchPosts ({ commit }) {
  getPosts().then(response => {
    commit(SET_POSTS, response.data)
  });
}
export function fetchComments ({ commit }) {
  getComments().then(response => {
    commit(SET_COMMENTS, response.data)
  });
}
export function fetchTodos ({ commit }) {
  getTodos().then(response => {
    commit(SET_TODOS, response.data)
  });
}
export function updateTodo (store, payload) {
  putTodo(payload).then(() => {
  });
}

