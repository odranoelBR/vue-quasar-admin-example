import axios from "axios";

const axiosInstanceJsonPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});
// const axiosInstancePunk = axios.create({
//    baseURL: "https://api.punkapi.com/v2/"
// });

export function getPosts() {
  return axiosInstanceJsonPlaceholder.get("posts");
}
export function getComments() {
  return axiosInstanceJsonPlaceholder.get("comments");
}
export function getTodos() {
  return axiosInstanceJsonPlaceholder.get("todos");
}
