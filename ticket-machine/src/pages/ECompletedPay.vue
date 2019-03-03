<template>
  <b-container class="h-100">
    <b-row class="h-25">
      <b-col>
        <template v-if="ePay">
          購入完了
        </template>
        <template v-else>
          購入失敗
        </template>
      </b-col>
    </b-row>

    <b-row class="h-50">
      <b-col>
        <b-alert variant="danger" :show="!ePay">
          チャージが足りません
        </b-alert>
        <template v-if="ePay">
          <p>
            支払額 {{eTicketTotal}}円
          </p>
          <p>
            残高 {{eMoney}}円
          </p>
        </template>
      </b-col>
    </b-row>

     <b-row class="h-25 align-items-end">
      <b-col>
        <b-button v-if="!ePay" @click="onClickCancel" variant="outline-danger">取消</b-button>
      </b-col>
      <b-col>
        <b-button 
          v-if="!ePay"
          @click="$router.go(-2)"
          variant="outline-secondary"
          block>
          支払い選択に戻る
        </b-button>
      </b-col>
      <b-col class="text-right">
        <b-button 
          v-if="ePay" 
          @click="onClickComlete"
          variant="outline-primary">
          切符を受け取る
        </b-button>
      </b-col>
    </b-row>
 </b-container>
</template>

<script>
export default {
  computed: {
    ePay() {
      return this.$store.state.ePay
    },
    eTicketTotal() {
      return this.$store.getters.eTicketTotal
    },
    eMoney() {
      return this.$store.state.eMoney
    },
  },
  methods: {
    onClickCancel () {
      this.$store.commit('inputCancel')
      this.$store.commit('getChip')
      this.$router.push({
        path: '/',
      })
    },
    onClickComlete(){
      this.$store.commit('eHistory')
      this.onClickCancel()
    }
  },
}
</script>
