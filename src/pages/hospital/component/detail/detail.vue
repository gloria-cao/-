<template>
  <div class="detail">
    <hos-info :content-config="contentConfig"></hos-info>

  </div>
</template>

<script setup lang="ts">
import HosInfo from '../hosInfo/hosInfo.vue'
import contentConfig from './config/detail.config.ts'
</script>

<style lang="less" scoped>

</style>
