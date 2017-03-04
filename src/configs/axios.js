import axios from 'axios'
import { Loading } from 'quasar'

var axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

axiosInstance.interceptors.request.use(function (config) {
  Loading.show()
  return config
})

axiosInstance.interceptors.response.use(function (response) {
  Loading.hide()
  return response
}, function (error) {
  Loading.hide()
  return Promise.reject(error)
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
