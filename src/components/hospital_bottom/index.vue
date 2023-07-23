<template>
  <div class="hospitalBottom">
    <div class="content">
      <div class="left">
        <span>Author: caoqin</span>
        <span>医院挂号系统: Vue3 + Vite + TS</span>
      </div>
      <div class="right">
        <span>联系我们</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.hospitalBottom {
  width: 100%;
  height: 50px;
  background-color: #9A97A9;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 100%;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      span {
        margin: 0 8px
      }
    }

    .right {
      span {
        margin: 0 5px;
      }
    }

  }
}
</style>
