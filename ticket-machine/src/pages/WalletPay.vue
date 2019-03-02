<template>
  <b-container class="h-100">
    <b-row class="h-25">
      <b-col>
        お金を投入してください
      </b-col>
   </b-row>

    <b-row class="h-50">
      <b-col>
        <p>支払い金額: {{selectedTicket}}円</p>
        <h4 class="text-center">
          投入金額: {{inputMoney}}円
        </h4>
        <p class="text-right">残り: {{diff}}円</p>
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
        <b-button :disabled="disabled" :variant="variant" @click="onClickButton">
          購入
        </b-button>
      </b-col>
     </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    selectedTicket() {
      return this.$store.getters.ticketTotalJPY
    },
    inputMoney() {
      return this.$store.getters.inputJPYTotal
    },
    disabled() {
      return this.inputMoney < this.selectedTicket
    },
    variant() {
      return this.inputMoney < this.selectedTicket? 'outline-danger' : 'outline-success'
    },
    diff() {
      const diff = this.selectedTicket - this.inputMoney
      if (diff < 0) {
        return 0
      }
      return diff
    }
  },
  methods: {
    onClickButton () {
      this.$store.commit('giveChip')
      this.$router.push({
        path: '/compleated-pay',
      })
    },
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
