<template>
  <b-card no-body>
    <b-card-body>
      <b-card-title>財布</b-card-title>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>
        <b-row class="text-right">
          <b-col>
            10円
          </b-col>
          <b-col>
            {{jpy10}}枚
          </b-col>
          <b-col>
            <b-button :variant="disabledInputJpy10? 'outline-danger': 'outline-success'" size="sm" :disabled="disabledInputJpy10 || $route.path !== '/wallet-pay'" @click="onClickInputJpy10">投入</b-button>
          </b-col>
        </b-row>
      </b-list-group-item>
      
      <b-list-group-item>
        <b-row class="text-right">
          <b-col>
            50円
          </b-col>
          <b-col>
            {{jpy50}}枚
          </b-col>
          <b-col>
            <b-button :variant="disabledInputJpy50? 'outline-danger': 'outline-success'" size="sm" :disabled="disabledInputJpy50 || $route.path !== '/wallet-pay'" @click="onClickInputJpy50">投入</b-button>
          </b-col>
        </b-row>
      </b-list-group-item>

      <b-list-group-item>
        <b-row class="text-right">
          <b-col>
            100円
          </b-col>
          <b-col>
            {{jpy100}}枚
          </b-col>
          <b-col>
            <b-button :variant="disabledInputJpy100? 'outline-danger': 'outline-success'" size="sm" :disabled="disabledInputJpy100 || $route.path !== '/wallet-pay'" @click="onClickInputJpy100">投入</b-button>
          </b-col>
        </b-row>
      </b-list-group-item>
    
      <b-list-group-item>
        <b-row class="text-right">
          <b-col>
            500円
          </b-col>
          <b-col>
            {{jpy500}}枚
          </b-col>
          <b-col>
            <b-button :variant="disabledInputJpy500? 'outline-danger': 'outline-success'" size="sm" :disabled="disabledInputJpy500 || $route.path !== '/wallet-pay'" @click="onClickInputJpy500">投入</b-button>
          </b-col>
        </b-row>
      </b-list-group-item>
    
      <b-list-group-item>
        <b-row class="text-right">
          <b-col>
            1000円
          </b-col>
          <b-col>
            {{jpy1000}}枚
          </b-col>
          <b-col>
            <b-button :variant="disabledInputJpy1000? 'outline-danger': 'outline-success'" size="sm" :disabled="disabledInputJpy1000 || $route.path !== '/wallet-pay'" @click="onClickInputJpy1000">投入</b-button>
          </b-col>
        </b-row>
      </b-list-group-item>
    
      <b-list-group-item>
        <b-row class="text-right">
          <b-col>
            5000円
          </b-col>
          <b-col>
            {{jpy5000}}枚
          </b-col>
          <b-col>
            <b-button :variant="disabledInputJpy5000? 'outline-danger': 'outline-success'" size="sm" :disabled="disabledInputJpy5000 || $route.path !== '/wallet-pay'" @click="onClickInputJpy5000">投入</b-button>
          </b-col>
        </b-row>
      </b-list-group-item>
    
      <b-list-group-item>
        <b-row class="text-right">
          <b-col>
            10000円
          </b-col>
          <b-col>
            {{jpy10000}}枚
          </b-col>
          <b-col>
            <b-button :variant="disabledInputJpy10000? 'outline-danger': 'outline-success'" size="sm" :disabled="disabledInputJpy10000 || $route.path !== '/wallet-pay'" @click="onClickInputJpy10000">投入</b-button>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>

    <b-card-body class="text-center">
      <b-button variant="outline-danger" @click="onClickCancel" :disabled="$route.path !== '/wallet-pay'">投入取消</b-button>
    </b-card-body>
  </b-card>
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
    disabledInputJpy10000() {
      return this.jpy10000 === 0
    },
    disabledInputJpy5000() {
      return this.jpy5000 === 0
    },
    disabledInputJpy1000() {
      return this.jpy1000 === 0
    },
    disabledInputJpy500() {
      return this.jpy500 === 0
    },
    disabledInputJpy100() {
      return this.jpy100 === 0
    },
    disabledInputJpy50() {
      return this.jpy50 === 0
    },
    disabledInputJpy10() {
      return this.jpy10 === 0
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
