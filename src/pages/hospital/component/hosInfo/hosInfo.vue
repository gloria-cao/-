<template>
  <div class="hosInfo">

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
        <div class="top" v-if="contentConfig.registerRule">{{ contentConfig.registerRule }}</div>
        <div class="center">
          <div class="time">
            <span v-if="contentConfig.bookingTime">{{ contentConfig.bookingTime }}: {{hospitalDetail?.bookingRule?.cycle}}天</span>
            <span v-if="contentConfig.releaseTime">{{ contentConfig.releaseTime }}: {{hospitalDetail?.bookingRule?.releaseTime}}</span>
            <span v-if=" contentConfig.stopTime">{{ contentConfig.stopTime }}: {{hospitalDetail?.bookingRule?.stopTime}}</span>
          </div>
          <div class="address" v-if="contentConfig.fullAddress">{{ contentConfig.fullAddress }}: {{hospitalDetail?.hospital?.param?.fullAddress}}</div>
          <div class="bus" v-if="contentConfig.route">{{ contentConfig.route }}: {{hospitalDetail?.hospital?.route}}</div>
          <div class="quitTime" v-if="contentConfig.stopTime">{{ contentConfig.stopTime }}: {{hospitalDetail?.bookingRule?.quitTime}}</div>
        </div>
        <div class="bottom">
          <h6>{{ contentConfig?.route }}</h6>
          <div class="rule">
            <ul>
              <li v-for="(item, index) in hospitalDetail?.bookingRule?.rule" :key="index">{{index+1}}:{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" v-if="contentConfig.hosIntroduce">
      <h1>{{contentConfig.hosIntroduce}}:</h1>
      <p class="intro">{{hospitalDetail.hospital?.intro}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { storeToRefs } from "pinia";

import useHospitalStore from "@/store/hospital/hospital"
import {localCache} from "@/util/cache";
import {HOSPITALDETAIL} from "@/global/constance";

// 接收父组件传递参数
const props = defineProps(['contentConfig'])

//封装医院顶部信息
// FIXME:pinia数据不能持久化，拿local数据可能会拿到旧数据，需要刷新
// const hospitalStore = useHospitalStore()
// const { hospitalDetail } = storeToRefs(hospitalStore)
const hospitalDetail = localCache.getCache(HOSPITALDETAIL)



</script>

<style lang="less" scoped>
.hosInfo {
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

  .footer {
    margin-top: 30px;

    .intro {
      line-height: 40px;
      text-indent:2em;
      color: #7f7f7f;
    }
  }
}
</style>
