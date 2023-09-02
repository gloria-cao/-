<template>
  <div class="user">
<!--  左侧导航区域  -->
    <div class="menu">
      <page-menu :menuConfig="menuConfig"></page-menu>
    </div>
<!--  右侧暂时区域  -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageMenu from '@/components/page_menu/page_menu.vue'
import menuConfig from "@/pages/user/component/config/menu.config";
</script>

<style lang="less" scoped>
.user {
  display: flex;

  .menu {
    width: 17%;
  }
}
</style>
