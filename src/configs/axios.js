import axios from 'axios'

var axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default (Vue) => {
  Object.defineProperties(Vue.prototype, {
    $http: {
      get () {
        return axiosInstance
      }
    }
  })
}
