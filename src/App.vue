<template>
  <div class="app">
    <HospitalTop/>
    <div class="content">
<!--      路由的切换-->
      <router-view></router-view>
    </div>
    <div class="bottom">
      <HospitalBottom/>
    </div>

<!--  登陆页面  -->
    <Login v-if="useStore.loginIsShow" />
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/user/user";

const useStore = useUserStore()
</script>

<style lang="less" scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 1200px;
    min-height: 700px;
    margin-top: 70px;
  }

  .bottom {
    width: 100%;
    height: 50px;
    //display: flex;
    //justify-content:  space-between;
    color:#011d2b;
  }

}
</style>
