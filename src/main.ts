import {  createApp } from 'vue'
import pinia from './store'
// 清楚默认样式
import '@/assets/style/reset.scss'
import '@/assets/style/reset.less'


// 引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import Loader from './components/Loader/loader.vue'
import Login from '@/pages/login/index.vue'

import App from './App.vue'

// 引入路由并安装理由
import "@/router/index"
import router from "@/router";

// 自定义插件
import zhCnElement from "@/global/zhCn_Element";
import icons from "@/global/register-icon";

// 注册全局组件
const app = createApp(App)
app.use(icons)
app.use(pinia)
app.use(router)
app.use(zhCnElement)
app.component('HospitalTop', HospitalTop)
    .component('HospitalBottom', HospitalBottom)
    .component('Loading', Loader)
    .component('Login', Login)
app.mount('#app')

