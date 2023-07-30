<template>
  <div class="hospitalTop">
    <div class="content">
      <div class="left" @click="handleGoHome">
        <img class="logo" src="../../assets/images/logo.png" alt="">
        <p class="title">医院预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心 </p>
<!--    仓库中有数据展示仓库中的数据    -->
        <p class="login" @click="handleLogin" v-if="!localCache.getCache(USERNAME)">登录 | 注册</p>
          <el-dropdown v-else>
            <span class="el-dropdown-link">
              {{localCache.getCache(USERNAME)}}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>实名验证</el-dropdown-item>
                <el-dropdown-item>订单挂号</el-dropdown-item>
                <el-dropdown-item>就诊人管理</el-dropdown-item>
                <el-dropdown-item @click="handleOutLogin">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import useUserStore from "@/store/user/user";
import {localCache} from "@/util/cache";
import {USER_TOKEN, USERNAME} from '@/global/constance'

//点击顶部返回首页
const $router = useRouter()
const $route = useRoute()
const handleGoHome = () => {
  $router.push({path: '/home'})
}

// 登陆页面逻辑
const userStore = useUserStore()
const handleLogin = () => {
  userStore.loginIsShow = !userStore.loginIsShow
  // 刷新当前页面
  $router.push({path: $route.path})
}

// 退出登录
const handleOutLogin = () => {
  localCache.clearCache()
// 跳转首页
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
