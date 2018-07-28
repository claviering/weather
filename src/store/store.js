import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  leftSideShow: false,
  rightSideShow: false
}

const mutations = {
  changeLeftSideShow (state) {
    state.leftSideShow = !state.leftSideShow
  },
  changeRightSideShow (state) {
    state.rightSideShow = !state.rightSideShow
  }
}

export default new Vuex.Store({
  state,
  mutations
})
