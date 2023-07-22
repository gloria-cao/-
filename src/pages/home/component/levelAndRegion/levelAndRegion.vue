<template>
  <div class="level-region">
    <h1>{{functionName === '等级: ' ? '医院' : ''}}</h1>
    <div class="content">
      <div class="left">{{functionName}}</div>
      <ul class="hospital">
        <li :class="{active: activeCurrent === ''}" @click="handleChangeLevelOrRegion('')">全部</li>
        <li :class="{active: activeCurrent === item.value}"  v-for="item in levelAndRegion" :key="item.value" @click="handleChangeLevelOrRegion(item.value)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, ref} from 'vue'
import useHomeStore from "@/store/home/home";

// 父子传子
defineProps(['levelAndRegion', 'functionName'])

const homeStore = useHomeStore()

//  ------------控制医院等级高亮的响应式数据---------------
let activeCurrent = ref<string>('')
function handleChangeLevelOrRegion(levelOrRegion: string) {
  activeCurrent.value = levelOrRegion
  $emit('getlevelOrRegion', levelOrRegion)
//  发送网络请求，筛选符合条件
  if(levelOrRegion.length === 1) {
  //  等级
    homeStore.getHospitalsListAction( 1,  6, { hostype: levelOrRegion})
  }else {
  //  地区
    homeStore.getHospitalsListAction( 1,  6, {districtCode: levelOrRegion})
  }
}
// 子传父,通知父组件发送请求，分页器应该在第一页
let $emit = defineEmits(['getlevelOrRegion'])
</script>

<style lang="less" scoped>
.level-region {
  color: rgb(149, 154, 153);
  margin-top: 5px;
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
