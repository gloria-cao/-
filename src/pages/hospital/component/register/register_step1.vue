<template>
  <div class="register_step1">

<!--  上面部分   -->
    <div class="top">
      <div class="hosName">{{hosBookingSchedule?.baseMap?.hosname}}</div>
      <div class="line"> | </div>
      <div class="depName">{{hosBookingSchedule?.baseMap?.bigname}}</div>
      <div class="dot">·</div>
      <div class="hosPartName">{{hosBookingSchedule?.baseMap?.depname}}</div>
    </div>

<!--  中间内容  -->
    <div class="center">
      <div class="time">{{hosBookingSchedule?.baseMap?.workDateString}}</div>
      <div class="container">
        <div
            class="item"
            v-for="item in hosBookingSchedule?.bookingScheduleList"
            :key="item"
              :class="{active: item.status === -1 || item.available === -1, cur: item.workDate === scheduleItem.workDate}"
            @click="handleBookingItem(item)"
        >
            <div class="conTop">{{item.workDateMd}}-{{item.dayOfWeek}}</div>
            <div class="conBottom">
              <div v-if="item.status === -1">停止挂号</div>
              <div v-if="item.status === 0">
                {{item.availableNumber === -1 ? "无号" : `剩余${item.availableNumber}`}}
              </div>
              <div v-if="item.status === 1">即将放号</div>
            </div>
        </div>
      </div>
      <!--    分页器-->
      <div class="pagination">
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="bookingData.page"
            :page-sizes="[3, 6, 9 ]"
            layout="total, prev, pager, next, jumper"
            :total="hosBookingSchedule?.total"
        >
        </el-pagination>
      </div>
    </div>

    <div class="bottom">
<!--   即将放号的时间   -->
      <div class="will" v-if="isRegister">
        <span >{{bookingItem.workDate}}放号</span>
      </div>
      <div v-else class="doctorInfo">
        <doctor></doctor>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

import {useRoute} from "vue-router";
import useHospitalStore from "@/store/hospital/hospital";
import {storeToRefs} from "pinia";

import Doctor from "./component/doctor.vue"


const $route = useRoute()
const hospitalStore = useHospitalStore()
const { hoscode, depcode } = { ...$route.query }
const bookingData = reactive({page: 1, limit: 6, hoscode, depcode})

let scheduleItem = reactive({ hoscode, depcode, workDate: '' })


/* 网络请求 */
fetchHospitalBookingSchedule(bookingData)
function fetchHospitalBookingSchedule(bookingData) {
  hospitalStore.getHospitalBookingScheduleAction(bookingData).then((res) => {
    scheduleItem.workDate = hosBookingSchedule.value.bookingScheduleList[0].workDate
    if(hosBookingSchedule.value.bookingScheduleList[0].status != -1) {
      fetchScheduleListAction()
    }
  })
}

const { hosBookingSchedule } = storeToRefs(hospitalStore)

/* 分页器逻辑 */
const handleCurrentChange = (val) => {
  bookingData.page = val
  fetchHospitalBookingSchedule(bookingData)
}

function fetchScheduleListAction(item?) {
  if(item) {
    scheduleItem.workDate = item.workDate
  }
  hospitalStore.getScheduleListAction(scheduleItem)
}

//  点击挂号Item
let isRegister = ref<boolean>(false)
let bookingItem = reactive({})
const bookingChild = ref(null)
function handleBookingItem(item) {
  bookingItem = item
//  区分是否挂号
  isRegister.value = item.status === 1 ? true : false
  fetchScheduleListAction(item)
}
</script>

<style lang="less" scoped>
.register_step1 {
  height: 100vh;
}


.top {
  display: flex;
  color: #888888;
  margin-top: 10vh;
}
.hosName, .line, .depName, .dot, .hosPartName {
  margin-right: 10px;
}


.center {
  text-align: center;
  margin-top: 8vh;
  .time {
    color: #7f7f7f;
    font-weight: 600;
  }
  .container {
    display: flex;
    margin: 30px 0;
    padding: 0 20px;


    .item {
      flex: 1;
      border: 1px solid skyblue;
      margin: 5px 5px;
      height: 70px;
      transition: all 0.2s linear;

      &.active {
        border: 1px solid #cecdd8;
        color: #7f7f7f;
        .conTop {
          background-color: #ababb0;
        }

      //  禁止点击
        pointer-events: none;
      }
      &.cur {
        transform: scale(1.05);
        border: 2px solid skyblue;
      }

      .conTop, .conBottom {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .conTop{
        height: 30px;
        background-color: #e8f2ff;
      }

      .conBottom {
        height: 40px;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    margin: 0 30px;
  }
}

.bottom {
  .will {
    color: #68cbf4;
    font-size: 24px;
    text-align: center;
    margin-top: 50px;
  }

  .doctorInfo {

  }
}


</style>
