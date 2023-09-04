<template>
  <div class="allOrder">
    <el-card class="box-card">
<!--   头部   -->
      <template #header>
        <div class="title">
          挂号订单
        </div>
      </template>

<!--   搜索栏   -->
      <div class="searchBtn">
        <el-form :inline="true">
        <template v-for="item in orderConfig.searchBtn" :key="item.label">
            <el-form-item :label="item.label" label-width="80px" style="width: 400px">
              <el-select :placeholder="item.placeholder" v-model="formData.patientName" v-if="item.list==='patientList'" @change="handleChange">
                <el-option v-for="(iten, index) in patientList" :key="index" :label="iten.name" :value="iten.name"></el-option>
              </el-select>
              <el-select :placeholder="item.placeholder" v-model="formData.orderStatus" v-if="item.list==='statusList'" @change="handleChange">
                <el-option v-for="(iten, index) in statusList" :key="index" :label="iten.comment" :value="iten.status"></el-option>
              </el-select>
            </el-form-item>
        </template>
        </el-form>
      </div>

<!--   表单   -->
      <div class="table">
        <el-table :data="orderList" style="width: 100%" >
            <template v-for="(item, index) in orderConfig.contentList" :key="index">
              <el-table-column v-if="item.type==='detailBtn'" :prop="item.type" :label="item.name" :width="item.width">
                <el-button size="small" type="primary" plain text @click="handleDetailClick">详情</el-button>
              </el-table-column>
                <el-table-column v-else :prop="item.type" :label="item.name" :width="item.width"  />
            </template>
        </el-table>
      </div>
<!--   分页器   -->
      <el-pagination layout="prev, pager, next" :total="50" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import orderConfig from "@/pages/user/component/config/order.config";
import usePatientStore from "@/store/patient/patient";
import {IOrderLimit} from "@/types/patient";
const patientStore = usePatientStore()
// 收集表单数据
const formData = reactive<IOrderLimit>({
  page: 1,
  limit: 10,
  patientName: '',
  orderStatus: ''
})
const orderList = ref()
const patientList = ref()
const statusList = ref()
let patientId = ref(Infinity)
let statusId = ref(Infinity)
onMounted( async () => {
  await patientStore.getOrderInfoByLimitAction(formData)
  orderList.value = patientStore.orderList?.records
  await patientStore.getAllPatientsAction()
  patientList.value = patientStore.patientList
  await patientStore.getAllStatusListAction()
  statusList.value = patientStore.statusList
})

// 点击更改就诊人
const handleChange = async () => {
//  根据就诊人id再次获取数据展示数据即可
  await patientStore.getOrderInfoByLimitAction(formData)
  orderList.value = patientStore.orderList?.records
}

// 点击详情页面
const handleDetailClick = () => {
  console.log("详情页面")
}
</script>

<style lang="less" scoped>
.allOrder {
  .title {
    font-size:20px;
    font-weight: bold;
  }
}
</style>
