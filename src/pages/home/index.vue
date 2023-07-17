<template>
  <div class="home">
    <!--    轮播图   -->
    <Carousel/>
    <!--   首页搜索表单的区域   -->
    <search-form class="search-form"/>
    <!--    d底部详情信息-->
    <el-row :gutter="20">
      <el-col :span="20">
        <!--   医院等级组件     -->
        <Level></Level>
        <!--    展示医院的结构-->
       <div class="card">
         <Card class="item" v-for="(item, index) in hospitalsList" :key="item.id" :hospitalInfo="item"></Card>
       </div>
<!--        分页器-->
        <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[6, 12, 18, 30]"
            layout="-> , sizes, prev, pager, next, jumper, total"
            :total="totalHospitals"
            @current-change="handleCurrentChangehange"
            @size-change="handleSizeChange"
        />
      </el-col>
      <el-col :span="4">
        <!--    地区    -->
        <Region></Region>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 导包
import {onMounted, ref} from 'vue'

// 内置包
import useHomeStore from "@/store/home/home";

import Carousel from './component/carousel/carousel.vue'
import SearchForm from './component/searchForm/searchForm.vue'
import Level from './component/level/level.vue'
import Region from './component/region/region.vue'
import Card from './component/card/card.vue'
import {storeToRefs} from "pinia";

const pageNo = ref<number>(1)
const pageSize = ref<number>(5)

//  --------- 分页器业务逻辑 ----------
const homeStore = useHomeStore()
const { hospitalsList, totalHospitals } = storeToRefs(homeStore)
/* 分页器发送网络请求 */
function fetchHospitalList(page = pageNo.value, limit = pageSize.value) {
  homeStore.getHospitalsListAction({page: page, limit: limit})
}

onMounted(() => { // 页面一旦挂载需要立刻发送请求
  fetchHospitalList(pageNo.value, pageSize.value)
})
//  分页器页码改变
function handleCurrentChangehange() {
  fetchHospitalList(pageNo.value, pageSize.value)
}
function handleSizeChange() {
  pageNo.value = 1
  fetchHospitalList(pageNo.value, pageSize.value)
}


</script>

<style lang="less" scoped>
.home {
  .card {

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: 48%;
      margin: 10px 0;
    }
  }
  }


</style>
