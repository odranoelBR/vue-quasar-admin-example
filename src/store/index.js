import Vue from "vue";
import Vuex from "vuex";

import app from "./app";

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      app
    }
  });

  return Store;
}
