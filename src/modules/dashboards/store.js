import state from "./store/state";
import * as getters from "./store/getters";
import mutations from "./store/mutations";
import * as actions from "./store/actions";

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
};
