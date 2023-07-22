<template>
  <div class="region">
    <div class="content">
      <div class="left">地区: </div>
      <ul class="hospital">
        <li :class="{active: activeCurrent === ''}" @click="handleChangeLevel('')">全部</li>
        <li :class="{active: activeCurrent === item.id}"  v-for="item in hospitalRegion" :key="item.id" @click="handleChangeLevel(item.id)">{{item.name}}</li>
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
  homeStore.getHospitalLevelAndRegionAction('Beijin')
}
const { hospitalRegion } = storeToRefs(homeStore)

//  ------------控制医院等级高亮的响应式数据---------------
let activeCurrent = ref<string>('')
function handleChangeLevel(regionId: string) {
  // 高亮
  activeCurrent.value = regionId
}

</script>

<style lang="less" scoped>
.region {
  color: rgb(149, 154, 153);
  h1 {
    font-weight: 900;
    margin: 10px 0px;
  }

  .content {
    display: flex;

    .left {
      margin-right: 10px;
      width: 38px;
    }

    .hospital {
      display: flex;
      flex-wrap: wrap;

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
