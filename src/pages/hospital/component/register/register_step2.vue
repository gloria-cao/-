<template>
  <div class="register-step2">
    <div class="top">
      确认挂号信息
    </div>

<!--  中间卡片  -->
    <div class="container">
      <!--  展示卡片信息  -->
<!--      就诊人-->
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <div class="patient">请选择正确就诊人</div>
<!--    跳转到添加就诊人模块        -->
            <el-button type="success" :icon="User" @click="$router.push({path: '/user/patient', query:{fromIsShow: 0}})" >添加就诊人</el-button>
          </div>
        </template>

<!--   当前就诊人信息罗列出来     -->
        <div class="cliCard">
          <card-info
              class="cardItem"
              v-for="(patient, index) in hospitalStore.patientList"
              :key="patient.id"
              @click="handlePatientClick(index)"
              :patient="patient"
              :index="index"
              :currentIndex="currentIndex"
              :clientConfig="clientConfig"
          >
          </card-info>
        </div>
      </el-card>

<!--      医生信息-->
      <el-card class="box-card doctor">
        <template #header>
            <div class="patient">挂号信息</div>
        </template>

        <!--   当前就诊人信息罗列出来     -->
        <div class="docCard">
            <el-descriptions :column="2" border>
              <template v-for="item in registerConfig.contentList" :key="item.type">
              <el-descriptions-item
                  :label="item.name"
                  label-align="left"
                  align="left"
                  label-class-name="my-label"
                  class-name="my-content"
              >
                {{typeof hospitalStore.doctorInfo[item.type] === 'object' ? hospitalStore.doctorInfo[item.type][item.childType] : hospitalStore.doctorInfo[item.type]}}
              </el-descriptions-item
              >
              </template>
            </el-descriptions>
        </div>
      </el-card>

    </div>

    <el-button type="primary" :disabled="currentIndex===-1?true:false" @click="handleConfirmClick">确认挂号</el-button>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import { User } from '@element-plus/icons-vue'

import { registerConfig } from './config/register.config'
import CardInfo from '@/components/card_info/cardInfo.vue'
import useHospitalStore from "@/store/hospital/hospital";
import usePatientStore from "@/store/patient/patient";
import { clientConfig } from './config/register.config'

const $route = useRoute()
const $router = useRouter()
const { doctorId } = { ...$route.query }
const hospitalStore = useHospitalStore()
onMounted(() => {
  hospitalStore.getAllPatientsAction()
  hospitalStore.getDoctorInfoAction(doctorId as string)
})
const doctorInfo = hospitalStore.doctorInfo

/* 存储用户确定就诊人信息索引值 */
let currentIndex = ref<number>(-1)
const handlePatientClick = (index:number) => {
  currentIndex.value = index
}

//  点击确认挂号
const patientStore = usePatientStore()
let orderInfo = reactive({
  hoscode: doctorInfo.hoscode,
  scheduleId: doctorInfo.id,
  patientId: 0
})
const handleConfirmClick = () => {
  // 先发送网络请求获取订单号id
  orderInfo.hoscode = hospitalStore.doctorInfo.hoscode
  orderInfo.scheduleId = hospitalStore.doctorInfo.id
  orderInfo.patientId = hospitalStore.patientList[currentIndex.value].id
  patientStore.getOrderIdAction(orderInfo).then((res) => {
    $router.push({path: '/user/order', query:{orderId: patientStore.orderId}})
  })

}

</script>

<style lang="less" scoped>
.register-step2 {
  .top {
    font-size: 20px;
    font-weight: bold;
    margin: 40px;
  }

  .container {
    margin: 20px 0;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .patient {
        font-size: 18px;
        font-weight: 600;
      }
    }

    .cliCard {
      display: flex;
      flex-wrap: wrap;
      .cardItem {
        width: 32%;
        margin: 5px;
        border: 1px solid #f6f6f6f6;
        box-shadow:
            8.6px 7px 10px rgba(0, 0, 0, 0.025),
            69px 56px 80px rgba(0, 0, 0, 0.05)
      ;
      }
    }

    .doctor {
      margin-top:20px;
    }
    //  深度选择器
    :deep(.el-button--success) {
      width: 15%;
      margin-right: 20px;
    }
  }

  :deep(.el-button--primary) {
    margin-left: 35%;
    margin-bottom: 20px;
    width: 30%;
    height: 40px;
  }
}

</style>
