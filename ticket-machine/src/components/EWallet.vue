<template>
  <b-card title="電子マネー">
    <p class="card-text text-right">
      {{eMoney}}円
    </p>
  </b-card>
</template>

<script>
export default {
  computed: {
    eMoney() {
      return this.$store.state.eMoney
    },
  }
}
</script>

