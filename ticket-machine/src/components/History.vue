<template>
  <b-card no-body>
    <b-card-body>
      <b-card-title>購入履歴</b-card-title>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item v-for="(history, index) in histories" :key="index">
        <b-row>
          <b-col>
            <template v-if="history.eMoney">
              電子マネー
            </template>
            <template v-else>
              現金
            </template>
          </b-col>
          <b-col class="text-right">
            {{history.price}}円
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  computed: {
    histories(){
      return this.$store.state.histories
    }
  }
}
</script>
