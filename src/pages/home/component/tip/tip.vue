<template>
  <div class="tip">
    <template v-for="item in showData" :key="item.LeftHeader">
      <div class="head">
        <div class="left">
          <component :is="item.leftIcon" style="width: 20px; height: 20px" :color="item.iconColor"></component>
          <span>{{item.LeftHeader}}</span>
        </div>
        <div class="right">
          <span>{{item.rightHeader}}</span>
          <component :is="item.rightIcon" style="width: 20px; height: 20px"></component>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li v-for="(iten, index) in item.list" :key="index">{{iten}}</li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">

import tipConfig from "@/pages/home/component/tip/tip.config";

const showData = []
showData.push(tipConfig.content1)
showData.push(tipConfig.content2)
showData.push(tipConfig.content3)
</script>

<style lang="less" scoped>
.tip {
  color: #7f7f7f;
  .head {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    .left, .right {
      display: flex;
      align-items: center;
    }
  }
  .bottom {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 40%;
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
