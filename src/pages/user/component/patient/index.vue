<template>
  <div class="patient">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <div class="title">管理就诊人</div>
          <div class="btn">
            <el-button type="success" :icon="Plus" @click="handleAddPatientClick">添加就诊人</el-button>
          </div>
        </div>
      </template>
      <div v-show="cardIsShow===0" class="card">
        <card-info
            class="item"
            :clientConfig="clientConfig"
            v-for="(patient, index) in hospitalStore.patientList"
            :key="index"
            :patient="patient"
            :index="index"
            :delIcon="delIcon"
            @changeScene="changeScene"
        >
        </card-info>
      </div>
      <div v-show="cardIsShow===1"  class="formData">
        <add-patient
            @resetForm="resetForm"
            :patient="patient"
        ></add-patient>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import { Plus } from '@element-plus/icons-vue'

import CardInfo from '@/components/card_info/cardInfo.vue'
import AddPatient from './addPatient.vue'
import { clientConfig } from '../../../hospital/component/register/config/register.config'
import useHospitalStore from "@/store/hospital/hospital";
import {useRoute} from "vue-router";

const $route = useRoute()
const hospitalStore = useHospitalStore()
const delIcon = 'delIcon'
let cardIsShow = ref(1)
let patient = ref()
onMounted(() => {
//  组件一挂载完毕获取就诊人信息
  hospitalStore.getAllPatientsAction()
  if($route.query.fromIsShow === 0) {
    cardIsShow.value = 1
  }else {
    cardIsShow.value = 0
  }
})

//  添加就诊人
const handleAddPatientClick = () => {
  cardIsShow.value = 1
//   将表单清空
}
// 就诊人子组件自定义事件的回调
const changeScene = (patient) => {
  patient.value = patient
  // console.log(patient)
  cardIsShow.value = 1
}
</script>

<style lang="less" scoped>
.patient {
  width: 80vw;
  .card-header {
    display: flex;
    justify-content: space-between;
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 32%;
      margin: 5px;
    }
  }

  .formData {
    width: 100%;
  }
}
</style>
