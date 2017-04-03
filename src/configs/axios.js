import axios from 'axios'
import { Loading } from 'quasar'

const axiosInstanceJsonPlaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})
// http://services.groupkt.com
axiosInstanceJsonPlaceholder.interceptors.request.use(function (config) {
  Loading.show()
  return config
})

axiosInstanceJsonPlaceholder.interceptors.response.use(function (response) {
  Loading.hide()
  return response
}, function (error) {
  Loading.hide()
  return Promise.reject(error)
})

const axiosInstanceGroupKt = Object.assign({}, axiosInstanceJsonPlaceholder)
axiosInstanceGroupKt.baseURL = 'http://services.groupkt.com'

let clients = {
  $http: {
    get () {
      return {
        jsonplaceholder: axiosInstanceJsonPlaceholder,
        groupKt: axiosInstanceGroupKt
      }
    }
  }
}

export default (Vue) => {
  Object.defineProperties(Vue.prototype, clients)
}
