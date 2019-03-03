<template>
  <b-container class="h-100">
    <b-row class="h-25">
      <b-col>
        電子マネーをタッチしてください
      </b-col>
    </b-row>

    <b-row class="h-50">
     <b-col>
       <p>
         支払い金額 {{selectedTicket}}円 (5％割引)
       </p>
       <div class="text-center">
          <b-button variant="outline-primary" size="lg" @click="onClickTouch">
            タッチ
          </b-button>
       </div>
      </b-col>
    </b-row>

    <b-row class="align-items-end h-25">
      <b-col>
        <b-button @click="onClickCancel" variant="outline-danger">取消</b-button>
      </b-col>
      <b-col>
        <b-button @click="$router.back()" variant="outline-secondary" block>戻る</b-button>
      </b-col>
      <b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    selectedTicket() {
      return this.$store.getters.eTicketTotal
    }
  },
  methods: {
    onClickTouch() {
      this.$store.commit('ePay')
      this.$router.push({
        path: '/e-completed-pay',
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
