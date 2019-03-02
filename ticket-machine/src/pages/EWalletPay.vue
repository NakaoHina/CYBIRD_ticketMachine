<template>
  <b-container class="h-100">
    <b-row class="h-25">
      <b-col>
        電子マネーをタッチしてください
      </b-col>
    </b-row>

    <b-row class="h-50">
      <b-col>
        <router-link
          class="btn btn-outline-primary btn-lg" 
          role="button"
          to="/e-completed-pay">タッチ</router-link>
      </b-col>
    </b-row>

    <b-row class="h-25">
      <b-col>
        <b-button @click="$router.back()">戻る</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
