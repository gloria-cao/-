<template>
  <div class="login">
    <el-dialog v-model="loginIsShow" v-show="userStore.loginIsShow" title="医院登陆页面">
<!--   对话框内部内容   -->
      <div class="content">
        <div class="left">
          <div v-show="sense">
               <el-form ref="form" :model="loginForm" :rules="dataRules" >
                 <el-form-item prop="phone">
                   <el-input :prefix-icon="Iphone" placeholder="请输入用户手机号" v-model="loginForm.phone" />
                 </el-form-item>
                 <el-form-item prop="sms">
                   <el-input :prefix-icon="Lock" placeholder="请输入手机验证码" v-model="loginForm.sms" />
                 </el-form-item>
                 <el-form-item>
                   <el-button :disabled="!isPhone || flag ? true : false" @click="handleSMS">
                     <span v-show="!flag">获取验证码</span>
                     <count-down @get-flag="getFlag" v-show="flag" :flag="flag"/>
                   </el-button>
                 </el-form-item>
               </el-form>
               <!--    登录按钮      -->
               <div class="bottom">
                 <el-button style="width: 90%" type="primary"
                            @click="handleLoginBtn"
                            :disabled="(!isPhone || loginForm.sms.length != 6) ? true : false"
                 >用户登录</el-button>
                 <div @click="handleWechat" class="wechatLogin">
                   <p>微信扫码登录</p>
                   <svg t="1690297888594" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2337" width="32" height="32"><path d="M331.429 263.429q0-23.429-14.286-37.715t-37.714-14.285q-24.572 0-43.429 14.571t-18.857 37.429q0 22.285 18.857 36.857t43.429 14.571q23.428 0 37.714-14t14.286-37.428zM756 553.143q0-16-14.571-28.572T704 512q-15.429 0-28.286 12.857t-12.857 28.286q0 16 12.857 28.857T704 594.857q22.857 0 37.429-12.571T756 553.143zM621.143 263.429q0-23.429-14-37.715t-37.429-14.285q-24.571 0-43.428 14.571t-18.857 37.429q0 22.285 18.857 36.857t43.428 14.571q23.429 0 37.429-14t14-37.428zM984 553.143q0-16-14.857-28.572T932 512q-15.429 0-28.286 12.857t-12.857 28.286q0 16 12.857 28.857T932 594.857q22.286 0 37.143-12.571T984 553.143zM832 326.286Q814.286 324 792 324q-96.571 0-177.714 44T486.57 487.143 440 651.429q0 44.571 13.143 86.857-20 1.714-38.857 1.714-14.857 0-28.572-0.857t-31.428-3.714-25.429-4-31.143-6-28.571-6L124.57 792l41.143-124.571Q0 551.429 0 387.429q0-96.572 55.714-177.715T206.571 82t207.715-46.571q100.571 0 190 37.714T754 177.429t78 148.857z m338.286 320.571q0 66.857-39.143 127.714t-106 110.572l31.428 103.428-113.714-62.285q-85.714 21.143-124.571 21.143-96.572 0-177.715-40.286T512.857 797.714t-46.571-150.857T512.857 496t127.714-109.429 177.715-40.285q92 0 173.143 40.285t130 109.715 48.857 150.571z" fill="#0e932e" p-id="2338"></path></svg>
                 </div>
               </div>
             </div>
          <div v-show="!sense" class="wechatScan">
            <el-button :icon="Back" @click="handleWechat"  circle/>
            <span>微信扫码登录</span>
              <div class="login_container"></div>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="leftContent">
              <img src="../../assets/images/code_app.png">
              <svg t="1690333579654" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="32" height="32"><path d="M683.058 364.695c11 0 22 1.016 32.943 1.976C686.564 230.064 538.896 128 370.681 128c-188.104 0.66-342.237 127.793-342.237 289.226 0 93.068 51.379 169.827 136.725 229.256L130.72 748.43l119.796-59.368c42.918 8.395 77.37 16.79 119.742 16.79 11 0 21.46-0.48 31.914-1.442a259.168 259.168 0 0 1-10.455-71.358c0.485-148.002 128.744-268.297 291.403-268.297l-0.06-0.06z m-184.113-91.992c25.99 0 42.913 16.79 42.913 42.575 0 25.188-16.923 42.579-42.913 42.579-25.45 0-51.38-16.85-51.38-42.58 0-25.784 25.93-42.574 51.38-42.574z m-239.544 85.154c-25.384 0-51.374-16.85-51.374-42.58 0-25.784 25.99-42.574 51.374-42.574 25.45 0 42.918 16.79 42.918 42.575 0 25.188-16.924 42.579-42.918 42.579z m736.155 271.655c0-135.647-136.725-246.527-290.983-246.527-162.655 0-290.918 110.88-290.918 246.527 0 136.128 128.263 246.587 290.918 246.587 33.972 0 68.423-8.395 102.818-16.85l93.809 50.973-25.93-84.677c68.907-51.93 120.286-119.815 120.286-196.033z m-385.275-42.58c-16.923 0-34.452-16.79-34.452-34.179 0-16.79 17.529-34.18 34.452-34.18 25.99 0 42.918 16.85 42.918 34.18 0 17.39-16.928 34.18-42.918 34.18z m188.165 0c-16.984 0-33.972-16.79-33.972-34.179 0-16.79 16.927-34.18 33.972-34.18 25.93 0 42.913 16.85 42.913 34.18 0 17.39-16.983 34.18-42.913 34.18z" fill="#09BB07" p-id="2325"></path></svg>
              <p>微信扫一扫关注</p>
              <p>"快速预约挂号"</p>
            </div>
            <div class="rightContent">
              <img src="../../assets/images/code_login_wechat.png">
              <svg t="1690333653466" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3503" width="32" height="32"><path d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z" p-id="3504" fill="#8a8a8a"></path></svg>
              <p>扫一扫下载</p>
              <p>”预约挂号“APP</p>
            </div>
          </div>
          <div class="bottom">
            <p>xxxxxxx官方指定平台</p>
            <p>快速挂号 安全放心</p>
          </div>
        </div>
      </div>

<!--   底部按钮   -->
      <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="handleCloseDia" >
          关闭窗口
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, defineProps} from 'vue'
import { Iphone, Lock, Back  } from '@element-plus/icons-vue'
import type { FormRules } from 'element-plus'
// import WxLogin from 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'


import CountDown from '@/components/count_down/index.vue'

// 登录页面逻辑
import useUserStore from "@/store/user/user";
import {storeToRefs} from "pinia";

// 开启验证码倒时
let flag = ref(false); // false不开启倒计时

// 获取form实例
let form = ref<any>()

const props = defineProps(['getFlag'])
const getFlag = (childflag) => {
  flag = childflag
}

const userStore = useUserStore()
const { loginIsShow } = storeToRefs(userStore)

// 收集表单数据
const loginForm = reactive({
  phone: '',
  sms: ''
})
interface RuleForm {
  phone: string,
  sms: string
}

// 判断手机号格式是否正确 /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
let isPhone = computed(() => {
  const phoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
//  返回布尔值
  return phoneReg.test(loginForm.phone)
})

// 自定义校验规则
const validatePhone = (rule: any, value: any, callback: any) => {
  const phoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  if(phoneReg.test(value)) {
    callback()
  }else {
    callback(new Error('请输入正确的手机号码'))
  }
}
const validateCode = (rule: any, value: any, callback: any) => {
  if(/^\d{6}$/.test(value)) {
    callback()
  }else {
    callback(new Error('请输入六位验证码'))
  }
}

// 表单校验
const dataRules = reactive<FormRules<RuleForm>>({
  phone: [
    { validator: validatePhone, trigger: 'blur' },
  ],
  sms: [
    { validator: validateCode, trigger: 'blur' },
  ],
})


// 点击获取验证码按钮
const handleSMS = () => {
  userStore.getLoginSmsAction(loginForm.phone)
  // 传递给子组件，当flag为true时将开启倒计时
  flag.value = !flag.value
}

//  点击微信扫码登录
let sense = ref<boolean>(true) //true代表手机登录
const handleWechat = () => {
  sense.value = !sense.value
  let redireact_URL = encodeURIComponent(window.location.origin + '/wxlogin')
  userStore.getWXLoginAction(redireact_URL)
  const { wxLogin } = storeToRefs(userStore)
//  生成微信扫码登录二维码页面
//  @ts-ignore
  new WxLogin({
    self_redirect: true, // true:手机点击确认登陆可以在iframe内跳转到redirect
    id: "login_container", // 显示二维码容器
    appid: wxLogin.appid, // 应用位置标识
    scope: wxLogin.scope, // 当前微信扫码登录页面已经授权
    redirect_uri: wxLogin.redirectUri, // 填写授权回调域路径，就是用户授权成功后，微信服务器想公司服务器发送请求
    state: wxLogin.state, // state就是学校服务器重定向的地址携带用户信息
    style: "black",
  })
}

// 点击用户登录
const handleLoginBtn = async () => {
  // 验证表单都符合 elemnet-plue提供的方法，返回一个promise对象
  await form.value.validate();
  //  当表单验证通过了才执行下面的内容
  try {
    let phone = loginForm.phone
    let code = loginForm.sms
    await userStore.postUserLoginAction({phone: phone, code: code}).then((res) => {
      //  关闭弹窗
      userStore.loginIsShow = false
    })
  } catch (e) {
    console.log("用户登陆失败")
  }
}

// 点击关闭窗口
const handleClose = () => {
  userStore.loginIsShow = false
}

</script>


<style lang="less" scoped>
.login {
//  中间内容
  .content {
    display: flex;
    .left {
      flex: 5;
      padding: 10px;
      border: 1px solid #cccccc;

      .wechatScan {
        span {
          margin-left: 25%;
        }
      }

      .bottom {
        text-align: center;
        p {
          margin: 10px 0;
        }
      }
    }
    .right {
      flex: 5;
      .top {
        display: flex;
        .leftContent {
          margin-left: 20px;
          margin-right: 20px;
        }

        .rightContent, .leftContent {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 25px;
        }
        img {
          width: 130px;
        }
      }

      .bottom {
        margin-top: 30px;
        text-align: center;
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
  :deep(.el-dialog__body) {
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
  }
}
</style>
