import Vue from "vue";
import Vuex from "vuex";

import global from "./global";
import forms from "./forms";

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    ...global,
    modules: {
      forms,
    }
  });

  return Store;
}
