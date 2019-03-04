<template>
  <b-container class="h-100">
    <b-row class="h-75">
      <b-col>
        <b-form-group
          label="切符を選択してください">
          <b-form-radio-group buttons button-variant="outline-primary" v-model="selectedTicket">
            <b-form-radio :value="130">130円</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <b-form-group
          label="枚数を選択してください">
          <b-form-radio-group buttons button-variant="outline-primary" v-model="countSelectedTicket">
            <b-form-radio :value="1">1枚</b-form-radio>
            <b-form-radio :value="2">2枚</b-form-radio>
            <b-form-radio :value="3">3枚</b-form-radio>
            <b-form-radio :value="4">4枚</b-form-radio>
            <b-form-radio :value="5">5枚</b-form-radio>
            <b-form-radio :value="6">6枚</b-form-radio>
            <b-form-radio :value="7">7枚</b-form-radio>
            <b-form-radio :value="8">8枚</b-form-radio>
            <b-form-radio :value="9">9枚</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="align-items-end h-25">
      <b-col class="mx-auto text-right">
        <router-link 
          :class="{
            'btn': true, 
            'btn-outline-success': !disabled, 
            'btn-outline-danger': disabled, 
            'disabled': disabled
          }" 
          role="button" 
          to="./which-pay">
          次へ
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    disabled () {
      return !this.selectedTicket || !this.countSelectedTicket
    },
    selectedTicket:{
      get() {
        return this.$store.state.selectedTicket
      },
      set(selectedTicket) {
         this.$store.commit('selectedTicket',selectedTicket)
      }
    },
    countSelectedTicket:{
      get() {
        return this.$store.state.countSelectedTicket
      },
      set(countSelectedTicket) {
         this.$store.commit('countSelectedTicket',countSelectedTicket)
      }
    }
  },
}
</script>

