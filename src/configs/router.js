import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: load('views/dashboard/one/dashboard'), meta: { name: 'Dashboard One' } },
    { path: '/dash', component: load('views/dashboard/one/dashboard'), meta: { name: 'Dashboard One' } },
    { path: '/form', component: load('views/form/form'), meta: { name: 'Form find / edit' } },
    { path: '/login-one', component: load('views/login/login-one'), meta: { name: 'Login One' } },
    { path: '/pricing', component: load('views/pricing/pricing'), meta: { name: 'Pricing' } },
    { path: '*', component: load('Error404') } // Not found
  ]
})
