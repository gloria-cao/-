<template>
  <div class="certification">
    <el-card class="box-card">
<!--   卡片头部   -->
      <template #header>
        <div class="card-header">
          <div class="title">实名认证信息</div>
        </div>
      </template>
<!--   实名认证头部   -->
      <div class="tip" v-if="!patientStore?.certificationInfo.authStatus">
        <el-icon><InfoFilled /></el-icon>
        <p class="text">完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前实名认证。  </p>
      </div>

<!--   卡片底部：认证成功和未认证页面   -->
      <div v-if="!patientStore.certificationInfo.authStatus" class="success">
        <el-descriptions :column="1" border>
         <template v-for="item in certificationConfig.successContent" :key="item.name">
           <el-descriptions-item
               :label="item.name"
               label-align="center"
               align="center"
               label-class-name="my-label"
               class-name="my-content"
               width="50px"
           ><div v-if="item.type==='certificatesType'">{{patientStore.certificationInfo[item.type] === '10' ? '身份证' : '户口本'}}</div>
             <div v-else>{{patientStore.certificationInfo[item.type]}}</div>
           </el-descriptions-item>
         </template>
        </el-descriptions>
      </div>

<!--   尚未认证   -->
      <div v-else class="failed">
        <el-form label-width="80"  ref="formRef" :model="formData">
          <template v-for="item in certificationConfig.failedContent" :key="item.label">
            <el-form-item
                :label="item.label"
                :prop="item.value"
                :rules="[
                    { required: true, message: `请填写${item.label}` },
                  ]"
            >
              <div v-if="item.type === 'normal'">
                <el-input
                    :placeholder="item.placeholder"
                    v-model="formData[item.value]"
                ></el-input>
              </div>
              <div v-else-if="item.type === 'select'">
                <el-select v-model="formData[item.value]" >
                  <template v-for="(iten, index) in patientStore?.certificatesType" :key="iten.index">
                    <el-option  :label="iten.name" :value="iten.value"></el-option>
                  </template>
                </el-select>
              </div>
              <div v-else-if="item.type === 'upload'">
                <!--    照片墙      -->
                <el-upload
                    ref="upload"
                    list-type="picture-card"
                    action="http://139.198.34.216:8205/api/oss/file/fileUpload?fileHost=userAuah"
                    method="post"
                    :limit="1"
                    :on-exceed="hanldeOnExceed"
                    :on-success="handleOnSuccess"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"

                >
                  <el-icon><Plus /></el-icon>
                </el-upload>

                <el-dialog v-model="dialogVisible">
                  <img w-full v-if="formData.certificatesUrl" style="width: 100%;height: 100%" :src="formData.certificatesUrl" alt="Preview Image" />
                </el-dialog>
              </div>
            </el-form-item>
          </template>
        </el-form>
        <div class="btn">
          <el-button type="primary" plain @click="handleSumbitClick(formRef)">提交</el-button>
          <el-button plain @click="handleResetForm(formRef)">重写</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import certificationConfig from '../config/certification.config'
import {onMounted, reactive,ref} from "vue";
import type { FormInstance, UploadFile, UploadFiles, UploadProps, UploadUserFile } from 'element-plus'
import { ElMessage } from 'element-plus'
import usePatientStore from "@/store/patient/patient";
import {IUserAuthInfo} from "@/types/patient";

const patientStore = usePatientStore()
// 10是身份证 20是户口本
onMounted(() => {
  // 获取实名认证消息
  patientStore.getCertificationAction()

//  获取证件类型进行展示 10：身份证  20：户口本
    patientStore.getByDictCodeAction('certificatesType')
})

// 用户进行实名认证
const formRef = ref<FormInstance>()
let formData = reactive<IUserAuthInfo>({
  certificatesNo: '',
  certificatesType: '',
  certificatesUrl: '',
  name: ''
})
// 图片上传数量
const hanldeOnExceed = () => {
  ElMessage({
    showClose: true,
    message: '最多只允许上传一张图片.',
    type: 'error',
  })
}
// 图片上传成功
let upload = ref()
const handleOnSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  formData.certificatesUrl = response.data
}
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  formData.certificatesUrl = ''
}
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

// 提交
const handleSumbitClick = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log(formData)
      patientStore.getUserAuahAction(formData)
      // patientStore.getCertificationAction()
    } else {
      console.log('error submit!')
      return false
    }
  })

}
// 重置
const handleResetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  console.log(upload.value.clearFiles())
  // TODO:用不了是怎么回事
  upload.value.clearFiles()
}

</script>

<style lang="less" scoped>
.certification {
  width: 70vw;

  .title {
    font-size: 24px;
  }

  .tip {
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      margin-left: 5px;
      font-size: 14px;
      color: #7f7f7f;
    }
  }

  .success {
    width: 60vw;
    margin: 20px auto;
  }

  .failed {
    margin: 20px auto;
    width: 40vw;

    .btn {
      margin-left: 80px;
    }
  }
}
</style>
