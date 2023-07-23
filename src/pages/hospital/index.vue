<template>
  <div class="hospital">
<!--  左侧菜单区域  -->
    <div class="menu">
      <hos-menu></hos-menu>
    </div>
<!--  右侧内容展示区域  -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import HosMenu from '@/pages/hospital/component/hos-menu/hos-menu.vue'
</script>

<style lang="less" scoped>
.hospital {
  display: flex;
  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content {
    flex: 8;
  }
}
</style>
