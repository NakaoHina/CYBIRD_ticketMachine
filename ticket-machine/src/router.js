import Vue from 'vue'
import VueRouter from 'vue-router'

import SelectedTicket from './pages/SelectedTicket.vue'
import WhichPay from './pages/WhichPay.vue'
import WalletPay from './pages/WalletPay.vue'
import EWalletPay from './pages/EWalletPay.vue'
import CompletedPay from './pages/CompletedPay.vue'
import ECompletedPay from './pages/ECompletedPay.vue'

Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
      {path: '/', component: SelectedTicket},
      {path: '/which-pay', component: WhichPay},
      {path: '/wallet-pay', component: WalletPay},
      {path: '/e-wallet-pay', component: EWalletPay},
      {path: '/completed-pay', component: CompletedPay},
      {path: '/e-completed-pay', component: ECompletedPay},
    ],
})

