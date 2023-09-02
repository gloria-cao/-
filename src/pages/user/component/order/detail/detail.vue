<template>
  <div class="detail">
    <el-card class="box-card">
<!--  卡片头部的结构  -->
      <template #header>
        <div class="detail-header">
          {{detailConfig.title}}
        </div>
      </template>

<!--   展示身体部分的顶部结构   -->
      <div class="top">
        <el-tag class="ml-2" type="success">
         <div class="tag">
           <el-icon class="icon"><Select /></el-icon>
           <span>{{patientStore.cancelOrder}}</span>
         </div>
        </el-tag>
        <div class="right_info">
          <img class="wximg" src="../../../../../../src/assets/images/code_login_wechat.png" alt="">
          <div class="title">微信 关注 “北京114预约挂号”“快速挂号”</div>
        </div>
      </div>

<!--   订单详情底部结构   -->
      <div class="bottom">
        <div class="left">
          <el-descriptions :column="1" border>
            <template v-for="item in detailConfig.content" :key="item.name">
              <el-descriptions-item
                  :label="item.name"
                  label-align="center"
                  align="center"
                  label-class-name="my-label"
                  class-name="my-content"
                  width="100px"
              >
                {{patientStore.orderDetail[item.type]}}
              </el-descriptions-item>
            </template>
          </el-descriptions>

          <div class="btn" v-if="patientStore.orderDetail.orderStatus===0||patientStore.orderDetail.orderStatus===1">
            <el-popconfirm title="是否取消预约?" @confirm="handleCancleClick">
              <template #reference>
                <el-button plain>取消预约</el-button>
              </template>
            </el-popconfirm>
            <el-button type="primary" plain v-if="patientStore.orderDetail.orderStatus===0" @click="handlePayClick">支付</el-button>
          </div>
        </div>
        <div class="right">
          <div class="top">注意事项</div>
          <div class="content">
            <p>1.请确认就诊人信息是否准确，若填写错误将无法取号就诊,损失由本人承担;</p>
            <p>2.【取号】就诊当天需在{{patientStore.orderDetail.fetchTime}}前在医院取号，未取号视为爽约，该号不退不换;</p>
            <p> 3.【退号】在{{patientStore.orderDetail.quitTime}}前可在线退号，逾期将不可办理退号退费;</p>
            <p>4.北京114预约挂号支持自费患者使用身份证预约，同时支持北京市医保患者使用北京社保卡在平台预约挂号。请于就诊当日，携带预约挂号所使用的有效身份证件到院取号;</p>
            <p>5.请注意北京市医保患者在住院期间不能使用社保卡在门诊取号。</p>
          </div>
        </div>
      </div>
    </el-card>

<!--  展示支付二维码结构  -->
    <div class="dialog">
      <el-dialog v-model="dialogTableVisible" title="微信支付" width="500">
        <div class="content">
          <img class="payCode" :src="imgUrl" alt="">
          <p>请使用微信扫一扫</p>
          <p>扫描二维码支付</p>
        </div>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCloseClick">关闭窗口</el-button>
      </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import QRCode from 'qrcode'
import {onMounted, ref} from "vue";
import { ElMessage } from 'element-plus'

import {useRoute} from "vue-router";
import usePatientStore from "@/store/patient/patient";
import detailConfig from "@/pages/user/component/config/detail.config";



const $route = useRoute()
const orderId = $route.query.orderId as number
const patientStore = usePatientStore()
onMounted(() => {
  patientStore.getOrderInfoAction(orderId)
})

// 存储定时器的引用
let timer = ref<any>()

// 取消预约 orderState -1 取消预约  0 预约但没有支付  1预约且支付成功
const handleCancleClick = () => {
  patientStore.getCancelOrderAction(orderId)
  // 这个数据没有返回，我自己设置的
  patientStore.orderDetail.orderStatus = -1
  clearInterval(timer.value)
}
// 点击支付
// 展示微信支付弹窗
const dialogTableVisible = ref(false)
let imgUrl = ref<string>('')
const handlePayClick = async () => {
  await patientStore.getCreateNativeAction(orderId)
  dialogTableVisible.value = true
  // url转换成图片
  imgUrl.value = await QRCode.toDataURL(patientStore.codeImg)
//  进行一个长轮询，每隔几秒向服务器发起请求询问是否支付成功
  timer.value = setInterval(() => {
    patientStore.getPayStatusAction(orderId)
    //  支付成功
    let payStatus = patientStore.payStatue.data ?? false
    if(!payStatus) {
      dialogTableVisible.value = false
    }
  //  消息提示
    ElMessage({
      message: '支付成功！👍',
      type: 'success',
    })
  //  清除定时器
    clearInterval(timer.value)

  //  再次获取订单详情
    patientStore.getOrderInfoAction(orderId)
  }, 2000)
}

// 关闭窗口
const handleCloseClick = () => {
  dialogTableVisible.value = false
  clearInterval(timer.value)
}
</script>

<style lang="less" scoped>
.detail {
  width: 80vw;

  .detail-header {
    font-size: 26px;
    font-weight: bold;
  }

  .top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    padding: 10px;
    .tag {
      font-size: 16px;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        margin-right: 5px;
        font-size: inherit;
      }
    }
    .right_info {
      display: flex;
      align-items: center;
      .wximg {
        height: 50px;
        margin-right: 10px;
      }
      .title {
        width: 200px;
        font-size: 14px;
        line-height: 28px;
      }
    }

  }

  .bottom {
    display: flex;
    margin-top: 20px;
    .left {
      flex: 4;
      margin-right: 20px;

      .btn {
        margin-top: 10px;
      }
    }
    .right {
      flex: 6;
      border: 1px solid #cccccc;
      .top {
        padding: 20px;
        border-bottom: 1px solid #cccccc;
      }
      .content {
        padding: 20px;
        line-height: 26px;
        :nth-child(2) {
          color: red;
        }
      }
    }
  }

  .dialog {
    .content {
      padding: 20px;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      text-align: center;
      .payCode {
        width: 150px;
      }

      p {
        line-height:25px;
      }
    }
  }

}
</style>

