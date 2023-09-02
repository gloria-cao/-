<template>
<!-- 如果有订单id展示订单详情，没有订单id展示订单列表 -->
  <detail class="order" v-if="$route.query.orderId">
    订单详情
  </detail>
  <all-order v-else>订单列表</all-order>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";

import AllOrder from './allOrder/allOrder.vue'
import Detail from './detail/detail.vue'

let $route = useRoute()

</script>

<style lang="less" scoped>
</style>
