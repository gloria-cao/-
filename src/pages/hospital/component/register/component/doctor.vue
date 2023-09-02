<template>
  <div class="doctorPage">
    <div class="time" v-for="item in doctorConfig.list">
      <div class="top">
        <component class="icon" :is="item.icon"></component>
        <span class="numSource">{{item.title}}</span>
      </div>
      <template v-for="iten in scheduleList" :key="item.id">
        <div class="bottom" v-if="iten.workTime === item.workTime">
            <div class="left">
              <div class="leftTop">
                <div class="Position">
                  {{ iten.title }}
                </div>
                <span class="line">|</span>
                <div class="doctor">{{iten.docname}}</div>
              </div>
              <div class="leftBottom">{{iten.skill}}</div>
            </div>
            <div class="right">
              <div class="price">￥{{iten.amount}}</div>
              <el-button type="primary" @click="handleAvailableNum(iten)">剩余{{iten.availableNumber}}</el-button>
            </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { doctorConfig } from "../config/register.config"
import useHospitalStore from "@/store/hospital/hospital";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

const hospitalStore = useHospitalStore()
const $router = useRouter()
const { scheduleList } = storeToRefs(hospitalStore)

//  点击剩余数量，进行路由跳转，携带医生id
let doctorId = ref<string>('')
const handleAvailableNum = (item) => {
  doctorId.value = item.id
  $router.push({path: '/hospital/register_step2', query: {doctorId: doctorId.value}})
}

</script>

<style lang="less" scoped>
.time {
  .top {
    display: flex;
    text-align: center;
    .icon {
      height: 20px;
      width: 20px;
      color: skyblue;
      margin-right: 5px;
    }
    .numSource {
      color: #7f7f7f;
      font-weight: 600;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 20px 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;


    .left {
      .leftTop {
        display: flex;
        color: skyblue;
        .line {
          margin: 0 12px
        }
      }

      .leftBottom {
        color: #7f7f7f;
        margin-top: 18px;
        font-size: 14px;
      }
    }

    .right {
      display: flex;
      align-items: center;


      .price {
        color: #7f7f7f;
        margin-right: 40px;
        font-weight: bold;
      }
    }
  }
}
</style>
