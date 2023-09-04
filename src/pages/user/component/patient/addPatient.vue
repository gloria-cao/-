<template>
  <div class="addPatient">
    <div class="item">
        <template v-for="(item, index) in addPatientConfig.titleList" :key="index">
          <el-divider content-position="left">{{item.name}}</el-divider>
          <el-form :model="userParams" label-width="100px" style="width: 60%;margin: 10px auto" >
          <div class="list">
              <template v-for="(iten, index) in item.childList">
                <el-form-item :label="iten.label" :prop="iten.value">
                <div class="data" v-if="iten.type==='input'">
                  <el-input v-model="userParams[iten.value]" :placeholder="iten.placeholder"  />
                </div>
                <div class="data" v-else-if="iten.type==='radio'">
                  <el-radio-group v-model="radio1" class="radio" :placeholder="iten.placeholder">
                    <el-radio label="男"  value="0">男</el-radio>
                    <el-radio label="女"  value="1">女</el-radio>
                  </el-radio-group>
                </div>
                <div class="data" v-else-if="iten.type==='select'">
                  <el-select v-model="userParams[iten.value]" class="m-2" placeholder="Select">
                    <el-option
                        label="户口本"
                        :value="item.value"
                    />
                    <el-option
                        label="身份证"
                        :value="item.value"
                    />
                  </el-select>
                </div>
                <div class="data" v-else-if="iten.type==='data'">
                  <el-date-picker
                      v-model="userParams[iten.value]"
                      type="date"
                      :placeholder="iten.placeholder"
                  />
                </div>
                <div class="data" v-else-if="iten.type==='cascader '">
                 <el-cascader v-model="userParams[iten.value]" :props="props" />
                </div>
                </el-form-item>

              </template>
          </div>
          </el-form>
        </template>
    </div>

    <div class="btn">
      <el-button plain @click="reset">重置</el-button>
      <el-button type="primary" plain @click="handleSubmitClick">提交</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import addPatientConfig from "./addPatient.config";
import {onMounted, reactive, ref, defineProps} from "vue";
import type { CascaderProps } from 'element-plus'
import usePatientStore from "@/store/patient/patient";
import {IAddOrUpdate} from "@/types/patient";
import {useRouter} from "vue-router";

const prop = defineProps(['patient'])
const $router = useRouter()
const patientStore = usePatientStore()
const certificatesType = ref()
const addressList = ref()
onMounted(async() => {
//   获取证件类型
  await patientStore.getByDictCodeAction('certificatesType')
  certificatesType.value = patientStore.certificatesType
  reset()

  Object.assign(userParams, prop.patient)
})

// 收集新增就诊人的数据
let userParams = reactive<IAddOrUpdate>({
  // id: 0,
  name: '',
  certificatesType: '',
  certificatesNo: '',
  sex: 0,
  birthdate: '',
  phone: '',
  isMarry: 0,
  isInsure: 0,
  addressSelected: [],
  address: '',
  contactsName: '',
  contactsCertificatesType: '',
  contactsCertificatesNo: '',
  contactsPhone: '',
})
// 清空表单内容
const reset = () => {
  Object.assign(userParams, {
    name: '',
    certificatesType: '',
    certificatesNo: '',
    sex: 0,
    birthdate: '',
    phone: '',
    isMarry: 0,
    isInsure: 0,
    addressSelected: [],
    address: '',
    contactsName: '',
    contactsCertificatesType: '',
    contactsCertificatesNo: '',
    contactsPhone: '',
  })
}

// 加载城市数据
const props: CascaderProps = {
  lazy: true,
  async lazyLoad(node, resolve) {
    //  获取地址 86 省份 node 拿到当前整理数据id
    await patientStore.getAddressByParentIdAction(node.data.id || 86)
    addressList.value = patientStore.addressList
  //   整理数据
    let showData = addressList.value.map((item) => {
      return {
        id: item.id,
        label: item.name,
        value: item.value,
        leaf: !item.hasChildren
      }
    })
  //  注入组件需要展示的数组
    resolve(showData)
  },
}

// 点击提交按钮
const handleSubmitClick = async() => {
  // postAddPatientAction
  await patientStore.postAddPatientAction(userParams)
  //  重新获取全部就诊人信息
  await patientStore.getCertificationAction()
//  返回展示就诊人信息
  await $router.push({path: '/user/patient', query: {fromIsShow: 1}})
  $router.go(0)
}
</script>

<style lang="less" scoped>
.item {
}

.btn {
  width: 40%;
  margin: 20px auto;
}
</style>
