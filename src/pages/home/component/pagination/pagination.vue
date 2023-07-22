<template>
  <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[6, 12, 18, 30]"
      layout="-> , sizes, prev, pager, next, jumper, total"
      :total="totalHospitals"
      @current-change="handleCurrentChangehange"
      @size-change="handleSizeChange"
  />
</template>

<script setup lang="ts">
import {onMounted, ref, defineProps} from 'vue'
import {storeToRefs} from "pinia";

import useHomeStore from "@/store/home/home";

//  接收父组件传来的地区或医院等级信息，并发送网络请求
const props = defineProps(['levelOrRegion'])

const homeStore = useHomeStore()
const { hospitalsList, totalHospitals } = storeToRefs(homeStore)

const pageNo = ref<number>(1)
const pageSize = ref<number>(6)

onMounted(() => { // 页面一旦挂载需要立刻发送请求
  fetchHospitalList(pageNo.value, pageSize.value)
})
/* 分页器发送网络请求 */
function fetchHospitalList(page = pageNo.value, limit = pageSize.value) {
  homeStore.getHospitalsListAction(page, limit)
}
//  分页器页码改变
function handleCurrentChangehange() {
  fetchHospitalByParams()
}
function handleSizeChange() {
  pageNo.value = 1
  fetchHospitalByParams()
}
// 点击分页器携带参数发送
function fetchHospitalByParams() {
  if(!props.levelOrRegion) {
    fetchHospitalList(pageNo.value, pageSize.value)
  } else if(props.levelOrRegion.length === 1) {
    //  等级
    homeStore.getHospitalsListAction( pageNo.value,  pageSize.value, { hostype: props.levelOrRegion})
  }else {
    //  地区
    homeStore.getHospitalsListAction( pageNo.value,  pageSize.value, {districtCode: props.levelOrRegion})
  }
}
</script>

<style lang="less" scoped>
</style>
