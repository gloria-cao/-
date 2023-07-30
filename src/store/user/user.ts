import { defineStore} from "pinia";
import { IUserState } from "@/store/user/types";
import {getLoginSms, getWXLogin, postUserLogin} from "@/service/api/login";
import {MessageNoticeFn} from "@/util/messageNotificationFn";
import {ILoginInfo} from "@/types/user";
import {localCache} from "@/util/cache";
import {USER_TOKEN, USERNAME} from "@/global/constance";

//  定义用户相关的仓库 登陆页面是否展示
const useUserStore = defineStore('user', {
    state: ():IUserState => ({
        loginIsShow: false,
        token: '',
        userName: '',
        wxLogin: {}
    }),
    actions: {
    //    获取登录验证码
        async getLoginSmsAction(phone: string) {
            const SMSResult = await getLoginSms(phone)
            // console.log(SMSResult.data.code, SMSResult.data.data)
            MessageNoticeFn(SMSResult.data.code, SMSResult.data.data)
        },

    //    用户登录页面
        async postUserLoginAction(loginInfo: ILoginInfo) {
            const LoginInfoResult = await postUserLogin(loginInfo)
            MessageNoticeFn(LoginInfoResult.data.code, LoginInfoResult.data.message)
            if (LoginInfoResult.data.code === 200) {
                this.userName = LoginInfoResult.data.data.name
                this.token = LoginInfoResult.data.data.token
                localCache.setCache(USER_TOKEN, this.token)
                localCache.setCache(USERNAME, this.userName)
                return 'ok'
            }else {
                return '登陆失败'
            }
        },

    //    获取微信扫码登录页面
        async getWXLoginAction(wxRedirectUri: string) {
            const WXloginResult = await getWXLogin(wxRedirectUri)
            this.wxLogin = WXloginResult.data.data
        }
    }
})

export default useUserStore
