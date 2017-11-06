import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  routes: [
    { path: '/', component: load('views/dashboard/one/dashboard'), meta: { name: 'Dashboard One' }, name: 'dash-one' },
    { path: '/form', component: load('views/form/simpleForm/simpleForm'), meta: { name: 'Form find / edit' }, name: 'form' },
    { path: '/advanced-form-one', component: load('views/form/advancedFormOne/advancedFormOne'), meta: { name: 'Advanced Form One' }, name: 'advanced-form-one' },
    { path: '/login-one', component: load('views/login/login-one'), meta: { name: 'Login One' }, name: 'login-one' },
    { path: '/pricing', component: load('views/pricing/pricing'), meta: { name: 'Pricing' }, name: 'pricing' },
    { path: '/drag-and-drop', component: load('views/dragAndDrop/dragAndDrop'), meta: { name: 'Drag and Drop' }, name: 'drag-and-drop' },
    { path: '/server-side-data-table', component: load('views/serverSideDataTable/serverSideDataTable'), meta: { name: 'Server Side Data Table' }, name: 'server-side-data-table' },
    { path: '*', component: load('Error404') } // Not found
  ]
})
