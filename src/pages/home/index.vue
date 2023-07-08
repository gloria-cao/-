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
         <Card class="item" v-for="item in 10 " :key="item"></Card>
       </div>
<!--        分页器-->
        <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            layout="-> , sizes, prev, pager, next, jumper, total"
            :total="40"
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
import Carousel from './component/carousel/carousel.vue'
import SearchForm from './component/searchForm/searchForm.vue'
import Level from './component/level/level.vue'
import Region from './component/region/region.vue'
import Card from './component/card/card.vue'

import { ref } from 'vue'

const pageNo = ref<number>(1)
const pageSize = ref<number>(10)

//分页器数据

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
