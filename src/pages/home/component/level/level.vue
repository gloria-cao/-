<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级: </div>
      <ul class="hospital">
        <li :class="{active: activeCurrent === ''}" @click="handleChangeLevel('')">全部</li>
        <li :class="{active: activeCurrent === item.value}"  v-for="item in hospitalLevel" :key="item.value" @click="handleChangeLevel(item.value)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import useHomeStore from "@/store/home/home";
import { storeToRefs } from "pinia";

// 组件挂载就获取医院等级信息
onMounted(() => {
  fetchHospitalLevel()
})

//  ----------医院等级和地区信息-------------
const homeStore = useHomeStore()
//  发送网络请求
function fetchHospitalLevel() {
  homeStore.getHospitalLevelAndRegionAction('HosType')
}
const { hospitalLevel } = storeToRefs(homeStore)

//  ------------控制医院等级高亮的响应式数据---------------
let activeCurrent = ref<string>('')
function handleChangeLevel(level: string) {
  // 高亮
  activeCurrent.value = level
//  请求
}

</script>

<style lang="less" scoped>
.level {
  color: rgb(149, 154, 153);
  h1 {
    font-weight: 900;
    margin: 10px 0px;
  }

  .content {
    display: flex;

    .left {
      margin-right: 10px;
    }

    .hospital {
      display: flex;

      li {
        margin-left: 10px;

        &.active {
          color: rgb(85, 166, 255);
        }
      }
      li:hover {
        color: rgb(85, 166, 255);
        cursor: pointer;
      }
    }
  }
}
</style>
