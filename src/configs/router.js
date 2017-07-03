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
        { path: '/auth', component: load('Auth'), meta: { name: 'Form Login' } },
        { path: '/success', component: load('AuthSuccess'), meta: { name: 'Form Profile' } },
        { path: '/form', component: load('views/form/simpleForm/simpleForm'), meta: { name: 'Form find / edit' } },
        { path: '/embeeded', component: load('views/form/embeeded/embeeded'), meta: { name: 'Embeeded Validations' } },
        { path: '/advanced-form-one', component: load('views/form/advancedFormOne/advancedFormOne'), meta: { name: 'Advanced Form One' } },
        { path: '/login-one', component: load('views/login/login-one'), meta: { name: 'Login One' } },
        { path: '/pricing', component: load('views/pricing/pricing'), meta: { name: 'Pricing' } },
        { path: '/drag-and-drop', component: load('views/dragAndDrop/dragAndDrop'), meta: { name: 'Drag and Drop' } },
        { path: '/server-side-data-table', component: load('views/serverSideDataTable/serverSideDataTable'), meta: { name: 'Server Side Data Table' } },
        { path: '*', component: load('Error404') } // Not found
  ]
})
