<template>
  <b-container class="h-100">
    <b-row class="h-25">
      <b-col>
        支払い方法を選択してください
      </b-col>
    </b-row>
    
    <b-row class="align-items-center h-50">
      <b-col class="mx-auto text-center"> 
        <router-link 
          class="btn btn-outline-primary btn-lg" 
          role="button" 
          to="/wallet-pay">
          現金
        </router-link>
        <router-link 
          class="btn btn-outline-info btn-lg ml-4" 
          role="button" 
          to="/e-wallet-pay">
          電子マネー
        </router-link>
      </b-col>
    </b-row>

    <b-row class="align-items-end h-25">
      <b-col>
        <b-button @click="onClickCancel" variant="outline-danger">取消</b-button>
      </b-col>
      <b-col>
        <b-button @click="$router.back()" variant="outline-secondary" block>戻る</b-button>
      </b-col>
      <b-col class="text-right">
        支払い金額: {{ total }}円
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    selectedTicket() {
      return this.$store.state.selectedTicket
    },
    countSelectedTicket() {
      return this.$store.state.countSelectedTicket
    },
    total() {
      return this.$store.state.selectedTicket * this.$store.state.countSelectedTicket
    }
  },
  methods: {
    onClickCancel () {
      this.$store.commit('inputCancel')
      this.$store.commit('getChip')
      this.$router.push({
        path: '/',
      })
    },
  },
}
</script>

