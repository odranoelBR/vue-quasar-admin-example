require(`./themes/app.${__THEME}.styl`)

import Vue from 'vue'
import Quasar from 'quasar'
import Vuelidate from 'vuelidate'

import axios from 'configs/axios'
import router from 'configs/router'
import store from './configs/store'

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import './configs/imports'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/animate'
import 'highlight/lib/vendor/highlight.js/styles/default.css'
import 'dragula/dist/dragula.css'
import 'hover.css/css/hover.css'

Vue.use(Vuelidate)
Vue.use(Quasar) // Install Quasar Framework
Vue.use(axios)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
