<template>
  <div class="menu">
    <div class="top">
      <el-icon><House /></el-icon>
      <span class="path">/ {{menuConfig.title}}</span>
    </div>
    <div class="list">
      <el-menu
          :default-active="$route.fullPath"
          class="el-menu-vertical-demo"
          :router="true"
      >
        <template v-for="item in menuConfig.content" :key="item.index">
          <el-menu-item :index="item.index">
            <component class="icon" :is="item.icon"></component>
            <template #title>  {{item.name}}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import {useRoute} from "vue-router";

// 配置文件传递过来
const props = defineProps(['menuConfig'])

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

  .list {
    .icon {
      width:15px;
      height:15px;
    }
  }
}
:deep(.el-menu) {
  width: 140px;
}
:deep(.el-menu-item) {
  //height: 20px;
  //width: 20px;
  font-size: 15px;
}
:deep(.el-menu-item.is-active) {
  font-size:20px;
  .icon {
    width:20px;
    height:20px;
  }
}
</style>
