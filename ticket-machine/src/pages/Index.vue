<template>
  <div>
    <router-link to="/hello-world">go to HelloWorld</router-link>
    <p>
      JPY 10,000: {{ jpy10000 }}
      <b-button variant="primary" @click="onClickInputJpy10000">Input</b-button>
    </p>
    <b-button variant="danger" @click="onClickCancel">Cancel</b-button>
  </div>
</template>

<script>
export default {
  computed: {
    jpy10000() {
      return this.$store.state.jpy10000
    }
  },
  methods: {
    onClickInputJpy10000() {
      this.$store.commit('inputJpy10000')
    },
    onClickCancel() {
      this.$store.commit('inputCancel')
    },
  },
}
</script>
