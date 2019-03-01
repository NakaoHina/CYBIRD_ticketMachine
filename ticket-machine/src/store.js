import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // jpy is means ”日本円”
    jpy10000: 1,
    jpy5000: 1,
    jpy1000: 1,
    jpy500: 1,
    jpy100: 2,
    jpy50: 3,
    jpy10: 15, 
    // InputJpy
    inputJpy10000: 0,
    inputJpy5000: 0,
    inputJpy1000: 0,
    inputJpy500: 0,
    inputJpy100: 0,
    inputJpy50: 0,
    inputJpy10: 0, 
  },
  mutations: {
    inputJpy10000 (state) {
      if(state.jpy10000 === 0) {
        return 
      }
      state.inputJpy10000 += 1
      state.jpy10000 -= 1
    },
    inputCancel(state){
      state.jpy10000 += state.inputJpy10000
      state.inputJpy10000 = 0
    }
  },
})
