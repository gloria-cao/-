// 登陆页面网络请求

import cqRequest from "@/service";
import {ILoginInfo} from "@/types/user";

enum API {
    HOSPITALGETSMS_URL ='/sms/send/',
    HOSPITALUSERLOGIN_URL = '/user/login',
    HOSPITALWXLOGIN_URL = '/user/weixin/getLoginParam'
}

//GET /api/sms/send/{phone}
// 获取登陆验证码
export function getLoginSms(phone: string) {
    return cqRequest.get({
        url: `${API.HOSPITALGETSMS_URL}/${phone}`
    })
}

// 用户登录接口 POST /api/user/login
export function postUserLogin(LoginInfo: ILoginInfo) {
    return cqRequest.post({
        url: `${API.HOSPITALUSERLOGIN_URL}`,
        data: LoginInfo
    })
}

// 获取微信扫码登录所需参数 GET /api/user/weixin/getLoginParam
export function getWXLogin(wxRedirectUri: string) {
    return cqRequest.get({
        url: `${API.HOSPITALWXLOGIN_URL}?wxRedirectUri=${wxRedirectUri}`
    })
}
