// this is mapped in jest.config.js to resolve @vue/test-utils
import { createLocalVue, shallowMount, mount } from 'test-utils'
import store from '~/src/store/index'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { Quasar, QLayout, QHeader, QDrawer, QPageContainer, QPage, QToolbar, QToolbarTitle, QBtn, QIcon, QList, QItem, QItemSection, QItemLabel, QExpansionItem, QMenu, QImg, QAvatar, QCard, QCardSection, Ripple, Notify } from 'quasar'
const mockSsrContext = () => {
  return {
    req: {
      headers: {}
    },
    res: {
      setHeader: () => undefined
    }
  }
}

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(Quasar, { config: {}, components: { QLayout, QHeader, QDrawer, QPageContainer, QPage, QToolbar, QToolbarTitle, QBtn, QIcon, QList, QItem, QItemSection, QItemLabel, QExpansionItem, QMenu, QImg, QAvatar, QCard, QCardSection }, directives: { Ripple }, plugins: { Notify } })

// https://eddyerburgh.me/mock-vuex-in-vue-unit-tests
export const mountQuasar = (component, options = {}) => {
  const app = {}
  const router = new VueRouter()

  if (options) {
    const ssrContext = options.ssr ? mockSsrContext() : null

    if (options.cookies) {
      const cookieStorage = ssrContext ? All.Cookies.parseSSR(ssrContext) : All.Cookies
      const cookies = options.cookies
      Object.keys(cookies).forEach(key => {
        cookieStorage.set(key, cookies[key])
      })
    }

    if (options.plugins) {
      options.plugins.forEach(plugin => {
        plugin({ app, store, router, Vue: localVue, ssrContext })
      })
    }
  }

  // mock vue-i18n
  const $t = () => {}
  const $tc = () => {}
  const $n = () => {}
  const $d = () => {}

  return mount(component, {
    localVue: localVue,
    store,
    router,
    mocks:{ $t, $tc, $n, $d },
    // Injections for Components with a QPage root Element
    provide: {
      pageContainer: true,
      layout: {
        header: {},
        right: {},
        footer: {},
        left: {}
      }
    }
  })
}
