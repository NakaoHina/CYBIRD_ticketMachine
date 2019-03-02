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
    // ChipJpy
    chipJpy10000: 0,
    chipJpy5000: 0,
    chipJpy1000: 0,
    chipJpy500: 0,
    chipJpy100: 0,
    chipJpy50: 0,
    chipJpy10: 0, 

    selectedTicket: 130,
    countSelectedTicket: 1,
  },
  getters: {
    inputJPYTotal (state) {
      return (
        state.inputJpy10000*10000 
        + state.inputJpy5000*5000 
        + state.inputJpy1000*1000 
        + state.inputJpy500*500
        + state.inputJpy100*100
        + state.inputJpy50*50 
        + state.inputJpy10*10
      )
    },
    ticketTotalJPY (state) {
      return state.selectedTicket*state.countSelectedTicket
    }
  },
  mutations: {
    // inputJpy10,000
    inputJpy10000 (state) {
      if(state.jpy10000 === 0) {
        return 
      }
      state.inputJpy10000 += 1
      state.jpy10000 -= 1
    },

    // inputJpy5,000
    inputJpy5000 (state) {
      if(state.jpy5000 === 0) {
        return 
      }
      state.inputJpy5000 += 1
      state.jpy5000 -= 1
    },

    // inputJpy1,000
    inputJpy1000 (state) {
      if(state.jpy1000 === 0) {
        return 
      }
      state.inputJpy1000 += 1
      state.jpy1000 -= 1
    },

    // inputJpy500
    inputJpy500 (state) {
      if(state.jpy500 === 0) {
        return 
      }
      state.inputJpy500 += 1
      state.jpy500 -= 1
    },

    // inputJpy100
    inputJpy100 (state) {
      if(state.jpy100 === 0) {
        return 
      }
      state.inputJpy100 += 1
      state.jpy100 -= 1
    },

    // inputJpy50
    inputJpy50 (state) {
      if(state.jpy50 === 0) {
        return 
      }
      state.inputJpy50 += 1
      state.jpy50 -= 1
    },

    // inputJpy10
    inputJpy10 (state) {
      if(state.jpy10 === 0) {
        return 
      }
      state.inputJpy10 += 1
      state.jpy10 -= 1
    },
    
    inputCancel(state){
      // Jpy10,000
      state.jpy10000 += state.inputJpy10000
      state.inputJpy10000 = 0
      // Jpy5,000
      state.jpy5000 += state.inputJpy5000
      state.inputJpy5000 = 0
      // Jpy1,000
      state.jpy1000 += state.inputJpy1000
      state.inputJpy1000 = 0
      // Jpy500
      state.jpy500 += state.inputJpy500
      state.inputJpy500 = 0
      // Jpy100
      state.jpy100 += state.inputJpy100
      state.inputJpy100 = 0
      // Jpy50
      state.jpy50 += state.inputJpy50
      state.inputJpy50 = 0
      // Jpy10
      state.jpy10 += state.inputJpy10
      state.inputJpy10 = 0
    },
    selectedTicket(state, value){
      state.selectedTicket = value
    },
    countSelectedTicket(state, value){
      state.countSelectedTicket = value
    },

    giveChip(state){
      var chip = (
        state.inputJpy10000*10000 
        + state.inputJpy5000*5000 
        + state.inputJpy1000*1000 
        + state.inputJpy500*500
        + state.inputJpy100*100
        + state.inputJpy50*50 
        + state.inputJpy10*10
      ) - state.selectedTicket*state.countSelectedTicket
      state.chipJpy10000 = parseInt(chip / 10000, 10)
      chip %= 10000
      state.chipJpy5000 = parseInt(chip / 5000, 10)
      chip %= 5000
      state.chipJpy1000 = parseInt(chip / 1000, 10)
      chip %= 1000
      state.chipJpy500 = parseInt(chip / 500, 10)
      chip %= 500
      state.chipJpy100 = parseInt(chip / 100, 10)
      chip %= 100
      state.chipJpy50 = parseInt(chip / 50, 10)
      chip %= 50
      state.chipJpy10 = parseInt(chip / 10, 10)
      chip %= 10
    },
    getChip (state) {
      state.jpy10000 += state.chipJpy10000
      state.chipJpy10000 = 0
      state.inputJpy10000 = 0
  
      state.jpy5000 += state.chipJpy5000
      state.chipJpy5000 = 0
      state.inputJpy5000 = 0
  
      state.jpy1000 += state.chipJpy1000
      state.chipJpy1000 = 0
      state.inputJpy1000 = 0
  
      state.jpy500 += state.chipJpy500
      state.chipJpy500 = 0
      state.inputJpy500 = 0
  
      state.jpy100 += state.chipJpy100
      state.chipJpy100 = 0
      state.inputJpy100 = 0
  
      state.jpy50 += state.chipJpy50
      state.chipJpy50 = 0
      state.inputJpy50 = 0
  
      state.jpy10 += state.chipJpy10
      state.chipJpy10 = 0
      state.inputJpy10 = 0

      state.selectedTicket = 130
      state.countSelectedTicket = 1
    }
  },
})
