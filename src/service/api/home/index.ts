/* 统一管理首页模块数据 */

import cqRequest from "@/service";
import {THospitalsInfo} from "@/types/home";

/* 通过枚举管理首页模块的接口地址 */
enum API {
//    获取已有的医院的数据接口地址
    HOSPITAL_URL = "/hosp/hospital/"
}
// FIXME: get请求无法拼接上去，需要使用模板字符串
export function getHospitalsList(info: THospitalsInfo) {
    return cqRequest.get(({
        url: `${API.HOSPITAL_URL}/${info.page}/${info.limit}`
    }))
}
