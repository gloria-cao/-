<template>
  <div class="hospitalTop">
    <div class="content">
      <div class="left" @click="handleGoHome">
        <img class="logo" src="../../assets/images/logo.png" alt="">
        <p class="title">医院预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心 </p>
        <p class="login">登录 | 注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

//点击顶部返回首页
const $router = useRouter()
const handleGoHome = () => {
  $router.push({path: '/home'})
}

</script>

<style scoped>
.hospitalTop {
  position: fixed;
  z-index: 999;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;

    .logo {
      height: 60px;
      width: 60px;
      margin-right: 10px;
    }

    .left {
      margin-left: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        color: rgb(85, 166, 255);
        font-size: 30px;
      }
    }

    .right {
      margin-right: 30px;
      color: #ccc;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>
