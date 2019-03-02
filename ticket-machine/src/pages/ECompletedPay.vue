<template>
  <b-container class="h-100">
    <b-row class="h-25">
      <b-col>
        購入完了
      </b-col>
    </b-row>

    <b-row class="h-50">
      <b-col>
        <b-alert variant="danger" show>
          チャージが足りません
        </b-alert>
        <b-alert variant="success" show>
          購入完了しました
        </b-alert>
      </b-col>
    </b-row>

     <b-row class="h-25">
      <b-col>
        <b-button @click="$router.back()">
          戻る
        </b-button>
      </b-col>
      <b-col>
        <b-button @click="$router.push({path: '/'})">切符を受け取る</b-button>
        <b-button @click="$router.go(-2)">支払い選択に戻る</b-button>
      </b-col>
    </b-row>
 </b-container>
</template>
