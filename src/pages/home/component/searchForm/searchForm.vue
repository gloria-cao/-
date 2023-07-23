<template>
  <div class="autocomplete">
    <el-autocomplete
        v-model="searchName"
        :fetch-suggestions="getData"
        :trigger-on-focus="false"
        clearable
        placeholder="请输入查询医院"
        @select="handleHospitalName"
    >
      <template #suffix>
        <el-button  :icon="Microphone" />
        <el-button @click="handleSearchBtn" :icon="Search" />
      </template>
    </el-autocomplete>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Microphone } from '@element-plus/icons-vue'

import useHomeStore from "@/store/home/home";
import useHospitalStore from "@/store/hospital/hospital";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

//  --------搜索医院名称----------
const searchName = ref('')
const homeStore = useHomeStore()
const getData = (keyword: string, cb:any) => {
  console.log(homeStore.getHospitalByHosNameAction( keyword))
  homeStore.getHospitalByHosNameAction( keyword).then((res) => {
    const { searchHospital } = storeToRefs(homeStore)
    // 给下面的提示框传递数据展示，必须带有value
    let showResult = searchHospital.value.map((item) => {
      return {
        value: item.hosname, // 医院名称
        hosCode: item.hoscode // 医院编码
      }
    })
    console.log("result", searchHospital, showResult)
    cb(showResult);
  },(rej) => {
    return new Error('没有该数据')
  })
}
// 点击某个医院名称，进行页面跳转
const $router = useRouter()
const hospitalStore = useHospitalStore()
const handleHospitalName = (item: any) => {
  hospitalStore.getHospitalDatailAction(item.hosCode)
  $router.push({path: '/hospital', query:{ hoscode: item.hosCode }})
}
function handleSearchBtn() {
  homeStore.getHospitalByHosNameAction( searchName.value)
}
</script>

<style lang="less" scoped>
.autocomplete {
  width: 100%;
  height: 50px;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 修改element-plus输入框样式 */

  :deep(.el-input__wrapper) {
    width: 600px;
    height: 50px;
    border-radius: 25px;
  }

  :deep(.el-input__suffix-inner>:first-child) {
    border: 0;
    margin-right: -7px;
  }
  :deep(.el-button+.el-button) {
    height: 100%;
    margin-left: 0;
    margin-right: -10px;
    border-radius: 25px;
    border: 0;
  }

  :deep(.el-icon) {
    color: rgb(85, 166, 255);
    font-size: 30px;
  }
}
</style>
