<template>
  <div class="register">
    <div class="head">
      <div class="left">{{hospitalDetail?.hospital?.hosname}}</div>
      <div class="right">
        <el-icon><Star /></el-icon>
        <span>{{hospitalDetail?.hospital?.param?.hostypeString}}</span>
      </div>
    </div>
    <div class="content">
      <div class="logo">
        <img :src="`data:image/jpeg;base64,${hospitalDetail?.hospital?.logoData}`" alt="">
      </div>
      <div class="detail">
        <div class="top">挂号规则</div>
        <div class="center">
          <div class="time">
            <span>预约周期: {{hospitalDetail?.bookingRule?.cycle}}天</span>
            <span>放号时间: {{hospitalDetail?.bookingRule?.releaseTime}}</span>
            <span>停挂时间: {{hospitalDetail?.bookingRule?.stopTime}}</span>
          </div>
          <div class="address">具体地址: {{hospitalDetail?.hospital?.param?.fullAddress}}</div>
          <div class="bus">规划路线: {{hospitalDetail?.hospital?.route}}</div>
          <div class="quitTime">退号时间: {{hospitalDetail?.bookingRule?.quitTime}}</div>
        </div>
        <div class="bottom">
          <h6>医院预约规则</h6>
          <div class="rule">
            <ul>
              <li v-for="(item, index) in hospitalDetail?.bookingRule?.rule" :key="index">{{index+1}}:{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import useHospitalStore from "@/store/hospital/hospital";
import {storeToRefs} from "pinia";

const hospitalStore = useHospitalStore()
const { hospitalDetail } = storeToRefs(hospitalStore)

</script>

<style lang="less" scoped>
.register {
  .head {
    display: flex;
    .left {
      font-size: 30px;
    }
    .right {
      margin-left: 15px;
      color: #7f7f7f;
    }
  }

  .content {
    display: flex;
    margin-top: 30px;
    .logo {
      flex: 1.5;
      img {
        left: 30px;
        height: 90px
      }
    }
    .detail {
      flex: 8.5;
      .center {
        margin-top: 15px;
        color: #7f7f7f;
        div{
          margin-bottom: 7px;
        }
        .time span {
          padding-right: 15px;
        }
      }

      .bottom {
        .rule {
          margin-top: 15px;
          color: #7f7f7f;
        }
      }
    }
  }
}
</style>
