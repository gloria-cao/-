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
      <div v-if="patientStore.certificationInfo.authStatus" class="success">
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
        <el-form label-width="80">
          <template v-for="item in certificationConfig.failedContent" :key="item.label">
            <el-form-item :label="item.label">
              <div v-if="item.type === 'normal'">
                <el-input :placeholder="item.placeholder"></el-input>
              </div>
              <div v-else-if="item.type === 'select'">
                <el-select >
                  <template v-for="iten in item.options" :key="item.label">
                    <el-option :label="iten.label"></el-option>
                  </template>
                </el-select>
              </div>
              <div v-else-if="item.type === 'upload'">
                <!--    照片墙      -->
                <el-upload
                    list-type="picture-card"
                >
                  <el-icon><Plus /></el-icon>
                </el-upload>
              </div>
            </el-form-item>
          </template>
        </el-form>
        <div class="btn">
          <el-button type="primary" plain>提交</el-button>
          <el-button plain>重写</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import certificationConfig from '../config/certification.config'
import {onMounted} from "vue";
import usePatientStore from "@/store/patient/patient";

const patientStore = usePatientStore()
// 10是身份证 20是户口本
onMounted(() => {
  patientStore.getCertificationAction()
})

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
