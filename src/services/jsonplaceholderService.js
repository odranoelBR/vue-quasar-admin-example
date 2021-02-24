import axios from "axios";

const axiosInstanceJsonPlaceholder = axios.create({
  baseURL: process.env.JSON_PLACEHOLDER_API
});

export function getPosts () {
  return axiosInstanceJsonPlaceholder.get("posts");
}
export function getComments () {
  return axiosInstanceJsonPlaceholder.get("comments");
}
export function getTodos () {
  return axiosInstanceJsonPlaceholder.get("todos");
}
export function putTodo (payload) {
  return axiosInstanceJsonPlaceholder.put(`todos/${payload.id}`, payload);
}
export function findAllUsers () {
  return axiosInstanceJsonPlaceholder.get('users')
}
export function saveUser (user) {
  return axiosInstanceJsonPlaceholder.put(`users/${user.id}`, user)
}