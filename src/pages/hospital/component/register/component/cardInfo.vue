<template>
  <div class="cardInfo">
    <div class="top">
      <div class="left">
        <div class="type">{{props.patient.isInsure === 1 ? '自费' : '医保'}}</div>
        <div class="client">{{props.patient.name}}</div>
      </div>
      <div class="right">
        <el-button type="warning" :icon="Edit" circle />
      </div>
    </div>

    <div class="bottom" >
      <div class="infoItem" v-for="item in clientConfig.contentList" :key="item.name">
        <div class="name">{{item.name}}</div>
        <div class="date" v-if="typeof props?.patient[item.type] === 'object'">
          {{props?.patient[item.type][item.childType]}}
        </div>
        <div class="date" v-else-if="item.type === 'isMarry'">{{props?.patient[item.type] === 0 ? '已婚' : '未婚'}}</div>
        <div class="date" v-else-if="item.type === 'sex'">{{props?.patient[item.type] === 1 ? '男' : '女'}}</div>
        <div class="date" v-else>{{props?.patient[item.type]}}</div>
      </div>
<!--    已选择样式  -->
      <div class="confirm" v-show="index === currentIndex">已选择</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import { clientConfig } from "../config/register.config"

// 接收父组件传过来的就诊人信息进行展示
const props = defineProps(['patient', 'index', 'currentIndex'])
</script>

<style lang="less" scoped>
.cardInfo {
  border-radius: 5px;
  overflow: hidden;
  background-color: #ffffff;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 10px;
    background-color: #dcdcdc;

    .left {
      display: flex;
      .type {
        background-color: #ffffff;
        padding: 1px;
        font-size: 6px;
        margin-right: 4px;
      }

      .client {
        color: #848484;
      }
    }
  }


  .bottom {
    position: relative;
    .infoItem {
      display: flex;
      margin-top: 15px;
      padding-left: 15px;
      font-size: 14px;
      &:nth-last-child(2) {
        margin-bottom: 15px;
      }

      .name  {
        margin-right: 8px;
      }
    }

    .confirm {
      position: absolute;
      top: 25%;
      left: 25%;
      color: darkred;
      text-align: center;
      line-height: 150px;
      height: 150px;
      width: 150px;
      border: 2px dashed darkred;
      border-radius: 50%;
      opacity: 0.5;
      transform: rotate(35deg);
    }
  }


}

</style>

