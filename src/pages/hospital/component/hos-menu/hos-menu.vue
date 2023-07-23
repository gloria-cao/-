<template>
  <div class="menu">
    <div class="top">
      <el-icon><House /></el-icon>
      <span class="path">/ 医院信息</span>
    </div>
    <div class="list">
      <el-menu
          :default-active="$route.fullPath"
          class="el-menu-vertical-demo"
          :router="true"
      >
        <template v-for="item in menuConfig.content" :key="item.index">
          <el-menu-item :index="item.index">
            <component :is="item.icon" style="height: 20px; width: 20px; margin-right: 5px"></component>
            <template #title>  {{item.name}}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";

import menuConfig from "@/pages/hospital/component/hos-menu/config/menu.config";

// 获取当前路由信息
const $route = useRoute()
</script>

<style lang="less" scoped>
.menu{
  .top {
    display: flex;
    width: 139px;
    .path {
      margin-left: 15px;
      color: #7f7f7f;
    }
  }
}
:deep(.el-menu) {
  width: 140px;
}
</style>
