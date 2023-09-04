// 路由全局守卫
import router from "./router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {USER_TOKEN} from "@/global/constance";
import useUserStore from "@/store/user/user";

// 用户未登录可以访问的路径
let whiteList = ['/home', '/hospital/register', '/hospital/detail', '/hospital/notification', '/hospital/undiagnosis', '/hospital/searchOrCancel', ]

// 添加相应全局守卫
//前置守卫
router.beforeEach((to, from, next) => {
    // 访问路由组件前，进度条开始
    NProgress.start();
    // 动态设置网页左上角标题
    document.title = `医院挂号-${to.meta.title}`

    // 用户登陆成功可以访问所有路由
    const userStore = useUserStore()
    const token = localStorage.getItem(USER_TOKEN)
    if(token) {
        next()
    }else {
    //    未登录只能访问个别几个路由页面
        if(whiteList.includes(to.path)) {
            next()
        }else {
        //    显示登陆组件
            userStore.loginIsShow = true
            next({path: '/home', query:{redirect: to.fullPath}})
        }
    }
    // next()
})

// 后置路由
router.afterEach((to, from) => {
//    访问路由组件结束进度条消失
    NProgress.done();
})
