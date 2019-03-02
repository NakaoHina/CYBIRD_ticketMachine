<template>
  <div>
    <router-link to="/hello-world">go to HelloWorld</router-link>
    <!-- Jpy10,000 -->
    <p>
      JPY 10,000: {{ jpy10000 }}
      <b-button variant="primary" @click="onClickInputJpy10000">Input</b-button>
    </p>
    <!-- Jpy5,000 -->
    <p>
      JPY 5,000: {{ jpy5000 }}
      <b-button variant="primary" @click="onClickInputJpy5000">Input</b-button>
    </p>
    <!-- Jpy1,000 -->
    <p>
      JPY 1,000: {{ jpy1000 }}
      <b-button variant="primary" @click="onClickInputJpy1000">Input</b-button>
    </p>
    <!-- Jpy500 -->
    <p>
      JPY 500: {{ jpy500 }}
      <b-button variant="primary" @click="onClickInputJpy500">Input</b-button>
    </p>
    <!-- Jpy100 -->
    <p>
      JPY 100: {{ jpy100 }}
      <b-button variant="primary" @click="onClickInputJpy100">Input</b-button>
    </p>
    <!-- Jpy50 -->
    <p>
      JPY 50: {{ jpy50 }}
      <b-button variant="primary" @click="onClickInputJpy50">Input</b-button>
    </p>
    <!-- Jpy10 -->
    <p>
      JPY 10: {{ jpy10 }}
      <b-button variant="primary" @click="onClickInputJpy10">Input</b-button>
    </p>
    <b-button variant="danger" @click="onClickCancel">Cancel</b-button>
  </div>
</template>

<script>
export default {
  computed: {
    jpy10000() {
      return this.$store.state.jpy10000
    },
    jpy5000() {
      return this.$store.state.jpy5000
    },
    jpy1000() {
      return this.$store.state.jpy1000
    },
    jpy500() {
      return this.$store.state.jpy500
    },
    jpy100() {
      return this.$store.state.jpy100
    },
    jpy50() {
      return this.$store.state.jpy50
    },
    jpy10() {
      return this.$store.state.jpy10
    },

},
  methods: {
    onClickInputJpy10000() {
      this.$store.commit('inputJpy10000')
    },
    onClickInputJpy5000() {
      this.$store.commit('inputJpy5000')
    },
    onClickInputJpy1000() {
      this.$store.commit('inputJpy1000')
    },
    onClickInputJpy500() {
      this.$store.commit('inputJpy500')
    },
    onClickInputJpy100() {
      this.$store.commit('inputJpy100')
    },
    onClickInputJpy50() {
      this.$store.commit('inputJpy50')
    },
    onClickInputJpy10() {
      this.$store.commit('inputJpy10')
    },
    onClickCancel() {
      this.$store.commit('inputCancel')
    },
  },
}
</script>
