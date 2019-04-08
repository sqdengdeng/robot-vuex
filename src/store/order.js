import { teaInfo } from "../api/teaInfo.js";

// state
const state = {
  // 分别是所有的茶单信息、已点茶、合计金额、点餐数量
  all: [],
  value: [],
  total: 0,
  count: 0
};

// getter
const getters = {};

//mutations
const mutations = {
  setAllInfo(state, tea) {
    state.all = tea;
  },
  add(state, tar) {
    state.value.push(tar);
  },
  setVal(state) {
    state.value = [];
  },
  setTol(state) {
    state.total = 0;
  },
  setCount(state, num) {
    state.count = num;
  },
  calTol(state, amount) {
    state.total += amount;
  }
};

//actions
const actions = {
  getAllProducts({ commit }) {
    commit("setAllInfo", teaInfo);
  },
  addNewOne({ commit }, newOne) {
    commit("add", newOne);
    commit("setCount", 1);
  },
  pay({ commit }, newOne) {
    commit("calTol", newOne);
  },
  initial({ commit }) {
    commit("setCount", 0);
    commit("setTol");
    commit("setVal");
  }
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
