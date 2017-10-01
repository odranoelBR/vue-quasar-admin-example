import axios from 'axios'

const axiosInstanceJsonPlaceholder =
  axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' })
const axiosInstancePunk =
  axios.create({ baseURL: 'https://api.punkapi.com/v2/' })

let clients = {
  $http: {
    get () {
      return {
        jsonplaceholder: axiosInstanceJsonPlaceholder,
        punk: axiosInstancePunk
      }
    }
  }
}

export default (Vue) => {
  Object.defineProperties(Vue.prototype, clients)
}
