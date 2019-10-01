import Vue from "vue";
import Vuex from "vuex";

import global from "./global";
import dashboards from '@modules/dashboards/store.js'

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    ...global,
    modules: {
      dashboards
    }
  });

  return Store;
}
