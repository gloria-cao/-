import {defineStore} from "pinia";

import {IHospitalState} from "@/store/hospital/types";
import {getHospitalDepartment, getHospitalDetail} from "@/service/api/hospital";
import {localCache} from "@/util/cache";
import {HOSPITALDETAIL} from "@/global/constance";
import {MessageNoticeFn} from "@/util/messageNotificationFn";

const useHospitalStore = defineStore('hospital', {
    state: (): IHospitalState => ({
        hospitalDetail: [],
        hospitalDepartment: []
    }),
    actions: {
    //    获取医院详情
        async getHospitalDatailAction(hosCode: string) {
            const hosDetailResult = await getHospitalDetail(hosCode)
            this.hospitalDetail = hosDetailResult.data.data
            MessageNoticeFn(hosDetailResult.data.code, hosDetailResult.data.message)
            //    缓存数据实现pinia数据持久化
            localCache.setCache(HOSPITALDETAIL, this.hospitalDetail)
        },

    //    获取医院科室列表
        async getHospitalDepartmentAction(hosCode: string) {
            const hospitalDepartmentResult = await getHospitalDepartment(hosCode)
            this.hospitalDepartment = hospitalDepartmentResult.data.data
            MessageNoticeFn(hospitalDepartmentResult.data.code, hospitalDepartmentResult.data.message)
        }
    }
})

export default useHospitalStore
