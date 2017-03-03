import axios from 'axios'

var axiosInstance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/'
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
