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
        <LevelAndRegion @getlevelOrRegion="getlevelOrRegion" :levelAndRegion="hospitalLevel" :functionName="'等级: '"></LevelAndRegion>
        <LevelAndRegion @getlevelOrRegion="getlevelOrRegion" :levelAndRegion="hospitalRegion" :functionName="'地区: '"></LevelAndRegion>
        <!--    展示医院的结构-->
       <div class="card" v-if="hospitalsList.length > 0">
         <Card class="item" v-for="(item, index) in hospitalsList" :key="item.id" :hospitalInfo="item"></Card>
       </div>
        <el-empty v-else description="暂无数据" />
<!--        分页器-->
       <Pagination :levelOrRegion="levelOrRegionString"></Pagination>
      </el-col>
      <el-col :span="4">
        <!--    地区    -->
        <Carousel></Carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 外包
import { onMounted, ref } from 'vue'
import { storeToRefs } from "pinia";

// 内置包
import useHomeStore from "@/store/home/home";

import Carousel from './component/carousel/carousel.vue'
import SearchForm from './component/searchForm/searchForm.vue'
import Card from './component/card/card.vue'
import LevelAndRegion from './component/levelAndRegion/levelAndRegion.vue'
import Pagination from './component/pagination/pagination.vue'

const homeStore = useHomeStore()
const { hospitalsList, totalHospitals, hospitalLevel, hospitalRegion } = storeToRefs(homeStore)

//  ------请求医院等级和地区信息-----
function fetchHospitalLevelAndRegin() {
  homeStore.getHospitalLevelAndRegionAction('HosType')
  homeStore.getHospitalLevelAndRegionAction('Beijin')
}

onMounted(() => { // 页面一旦挂载需要立刻发送请求
  fetchHospitalLevelAndRegin()
})

// -----组件通信-------
let levelOrRegionString = ''
const getlevelOrRegion = (levelOrRegion: string) => {
  levelOrRegionString = levelOrRegion
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
