/* 统一管理首页模块数据 */

import cqRequest from "@/service";
import {THospitalsInfo} from "@/types/home";

/* 通过枚举管理首页模块的接口地址 */
enum API {
//    获取已有的医院的数据接口地址
    HOSPITAL_URL = "/hosp/hospital/",
    HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/',
    FINDBYHOSPITALNAME_URL = '/hosp/hospital/findByHosname/'
}
//  获取医院列表数据
export function getHospitalsList(page: number, limit: number,info?: THospitalsInfo) {
    if(!info) {
        return cqRequest.get(({
            url: `${API.HOSPITAL_URL}/${page}/${limit}`,
        }))
    }else {
        return cqRequest.get(({
            url: `${API.HOSPITAL_URL}/${page}/${limit}?`,
            params: info
        }))
    }
}

// 获取医院等级和地区接口
export function getHospitalLevelAndRegion(dictCode: string) {
    return cqRequest.get({
        url: `${API.HOSPITALLEVELANDREGION_URL}/${dictCode}`
    })
}

// 根据医院名称,获取医院数据
export function getHospitalByHosName(hosname: string) {
    return cqRequest.get({
        url: `${API.FINDBYHOSPITALNAME_URL}/${hosname}`,
    })
}
