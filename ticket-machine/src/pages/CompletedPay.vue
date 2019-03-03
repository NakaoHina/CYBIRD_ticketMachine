<template>
<b-container class="h-100">
  <b-row class="h-75">
    <b-col>
      <p class="m-0">購入完了</p>

      <b-card no-body class="mt-2">
        <h6 class="m-2">投入金額</h6>
        <p class="card-text">
          <b-badge v-if="getJpy10000 > 0" class="mx-2 mt-0 mb-2">10000円: {{getJpy10000}}枚</b-badge>
          <b-badge v-if="getJpy5000 > 0" class="mx-2 mt-0 mb-2">5000円: {{getJpy5000}}枚</b-badge>
          <b-badge v-if="getJpy1000 > 0" class="mx-2 mt-0 mb-2">1000円: {{getJpy1000}}枚</b-badge>
          <b-badge v-if="getJpy500 > 0" class="mx-2 mt-0 mb-2">500円: {{getJpy500}}枚</b-badge>
          <b-badge v-if="getJpy100 > 0" class="mx-2 mt-0 mb-2">100円: {{getJpy100}}枚</b-badge>
          <b-badge v-if="getJpy50 > 0" class="mx-2 mt-0 mb-2">50円: {{getJpy50}}枚</b-badge>
          <b-badge v-if="getJpy10 > 0" class="mx-2 mt-0 mb-2">10円: {{getJpy10}}枚</b-badge>
        </p>
      </b-card>

      <b-card no-body class="mt-2">
        <h6 class="m-2">お釣り</h6>
        <p class="card-text">
          <b-badge v-if="getChipJpy10000 > 0" class="mx-2 mt-0 mb-2">10000円: {{getChipJpy10000}}枚</b-badge>
          <b-badge v-if="getChipJpy5000 > 0" class="mx-2 mt-0 mb-2">5000円: {{getChipJpy5000}}枚</b-badge>
          <b-badge v-if="getChipJpy1000 > 0" class="mx-2 mt-0 mb-2">1000円: {{getChipJpy1000}}枚</b-badge>
          <b-badge v-if="getChipJpy500 > 0" class="mx-2 mt-0 mb-2">500円: {{getChipJpy500}}枚</b-badge>
          <b-badge v-if="getChipJpy100 > 0" class="mx-2 mt-0 mb-2">100円: {{getChipJpy100}}枚</b-badge>
          <b-badge v-if="getChipJpy50 > 0" class="mx-2 mt-0 mb-2">50円: {{getChipJpy50}}枚</b-badge>
          <b-badge v-if="getChipJpy10 > 0" class="mx-2 mt-0 mb-2">10円: {{getChipJpy10}}枚</b-badge>
        </p>
      </b-card>
    </b-col>
  </b-row>

  <b-row class="align-items-end h-25">
    <b-col class="text-right">
      <b-button variant="outline-primary" @click="onClickComplete">購入完了</b-button>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  computed: {
    getJpy10000(){
      return this.$store.state.inputJpy10000
    },
    getJpy5000(){
      return this.$store.state.inputJpy5000
    },
    getJpy1000(){
      return this.$store.state.inputJpy1000
    },
    getJpy500(){
      return this.$store.state.inputJpy500
    },
    getJpy100(){
      return this.$store.state.inputJpy100
    },
    getJpy50(){
      return this.$store.state.inputJpy50
    },
    getJpy10(){
      return this.$store.state.inputJpy10
    },
    getChipJpy10000(){
      return this.$store.state.chipJpy10000
    },
    getChipJpy5000(){
      return this.$store.state.chipJpy5000
    },
    getChipJpy1000(){
      return this.$store.state.chipJpy1000
    },
    getChipJpy500(){
      return this.$store.state.chipJpy500
    },
    getChipJpy100(){
      return this.$store.state.chipJpy100
    },
    getChipJpy50(){
      return this.$store.state.chipJpy50
    },
    getChipJpy10(){
      return this.$store.state.chipJpy10
    },
  },
  methods: {
    onClickComplete () {
      this.$store.commit('history')
      this.$store.commit('getChip')
      this.$router.push({
        path: '/',
      })
    }
  }
}
</script>
