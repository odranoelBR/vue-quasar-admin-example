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

import VueRouter from 'vue-router'
import firebase from 'firebase'

import {
  config
} from './helpers/firebaseConfig'

import 'font-awesome/css/font-awesome.css'
import 'highlight/lib/vendor/highlight.js/styles/default.css'
import 'dragula/dist/dragula.css'

Vue.use(Vuelidate)
Vue.use(Quasar) // Install Quasar Framework
Vue.use(axios)
Vue.use(VueRouter)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    created () {
      firebase.initializeApp(config)
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.$store.state.user = this.$firebase.auth().currentUser
          this.$router.push('/success')
        }
        else {
          this.$store.state.user = null
          if (this.$route.path !== '/auth') {
            this.$router.push('/auth')
          }
        }
      })
    },
    router,
    store,
    render: h => h(require('./App'))
  })
})
