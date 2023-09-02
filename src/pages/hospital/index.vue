<template>
  <div class="hospital">
<!--  左侧菜单区域  -->
    <div class="menu">
      <page-menu :menuConfig="menuConfig"></page-menu>
    </div>
<!--  右侧内容展示区域  -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageMenu from '@/components/page_menu/page_menu.vue'
import useHospitalStore from "@/store/hospital/hospital";
import {useRoute} from "vue-router";
import {onMounted} from "vue";

import menuConfig from "@/pages/hospital/component/config/menu.config";

// 页面挂载就发送网络请求
const hospitalStore = useHospitalStore()
const $route = useRoute()
onMounted(() => {
  // 获取医院详情
  hospitalStore.getHospitalDatailAction($route.query.hoscode as string)
//  获取医院科室信息
  hospitalStore.getHospitalDepartmentAction($route.query.hoscode as string)
})
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
