<template>
  <b-container id="app">
    <b-row class="mt-3">
      <b-col>
        <b-card
          title="切符券売機"></b-card>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col>
        <b-card style="height: 300px;">
          <router-view></router-view>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col>
        <wallet></wallet>
      </b-col>
      <b-col>
        <e-wallet></e-wallet>
        <history class="mt-3"></history>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Wallet from '@/components/Wallet.vue'
import EWallet from '@/components/EWallet.vue'
import History from '@/components/History.vue'

export default {
  name: 'app',
  components: {
    Wallet,
    EWallet,
    History,
  }
}
</script>
