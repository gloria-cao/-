import {defineStore} from "pinia";

import {IHospitalState} from "@/store/hospital/types";
import {
    getAllPatients, getDoctorInfo,
    getHospitalBookingSchedule,
    getHospitalDepartment,
    getHospitalDetail,
    getScheduleList
} from "@/service/api/hospital";
import {localCache} from "@/util/cache";
import {HOSPITALDETAIL} from "@/global/constance";
import {MessageNoticeFn} from "@/util/messageNotificationFn";
import {IHosBookingSchedule, IScheduleList} from "@/types/hospital";

const useHospitalStore = defineStore('hospital', {
    state: (): IHospitalState => ({
        hospitalDetail: [],
        hospitalDepartment: [],
        hosBookingSchedule: [],
        scheduleList: [],
        patientList: [],
        doctorInfo: {}
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
        },

    //    获取可预约排班数据
        async getHospitalBookingScheduleAction(data: IHosBookingSchedule) {
            const hosBookingSchedule = await getHospitalBookingSchedule(data)
            this.hosBookingSchedule = hosBookingSchedule.data.data
            MessageNoticeFn(hosBookingSchedule.data.code, hosBookingSchedule.data.message)
        },

    //  获取排版数据
        async getScheduleListAction(data: IScheduleList) {
            const scheduleListRes = await getScheduleList(data)
            this.scheduleList = scheduleListRes.data.data
            MessageNoticeFn(scheduleListRes.data.code, scheduleListRes.data.message)
        },

    //    获取所有就诊人信息
        async getAllPatientsAction() {
            const patientListRes = await getAllPatients()
            this.patientList = patientListRes.data.data
            // 存储到仓库里面
            MessageNoticeFn(patientListRes.data.code, patientListRes.data.message)
        },

    //    获取医生数据
        async getDoctorInfoAction(doctorId: string) {
            const dctorInfo = await getDoctorInfo(doctorId)
            this.doctorInfo = dctorInfo.data.data
        }
    }
})

export default useHospitalStore
