// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import Vuelidate from 'vuelidate'

import axios from 'configs/axios'
import router from 'configs/router'
import store from './configs/store'

import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/animate'
import 'highlight/lib/vendor/highlight.js/styles/default.css'
import 'dragula/dist/dragula.css'

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
