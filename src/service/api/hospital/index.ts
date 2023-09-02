import cqRequest from "@/service";
import {IHosBookingSchedule, IScheduleList} from "@/types/hospital"

// 枚举接口
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    HOSPITALDEPARTMENT_URL = '/hosp/hospital/department/',
    HOSPITALBOOKINGSCHEDULE_URL = '/hosp/hospital/auth/getBookingScheduleRule/',
    HOSPITALSCHEDULELIST_URL = '/hosp/hospital/auth/findScheduleList/',
    HOSPITALUSERINFO_URL = '/user/patient/auth/findAll',
    HOSPITALDOCTORINFO_URL = '/hosp/hospital/getSchedule/'
}

// 获取医院详情信息GET /api/hosp/hospital/{hoscode}
export function getHospitalDetail(hospcode: string) {
    return cqRequest.get({
        url: `${API.HOSPITALDETAIL_URL}/${hospcode}`
    })
}

// 获取医院科室列表/api/hosp/hospital/department/{hoscode}
export function getHospitalDepartment(hospcode: string) {
    return cqRequest.get({
        url: `${API.HOSPITALDEPARTMENT_URL}${hospcode}`
    })
}


// 获取可预约排班数据   GET /api/hosp/hospital/auth/getBookingScheduleRule/{page}/{limit}/{hoscode}/{depcode}
export  function getHospitalBookingSchedule(data: IHosBookingSchedule) {
    return cqRequest.get({
        url: `${API.HOSPITALBOOKINGSCHEDULE_URL}${data.page}/${data.limit}/${data.hoscode}/${data.depcode}`
    })
}

// 获取排班数据 GET /api/hosp/hospital/auth/findScheduleList/{hoscode}/{depcode}/{workDate}
export function getScheduleList(data:  IScheduleList) {
    return cqRequest.get({
        url:  `${API.HOSPITALSCHEDULELIST_URL}${data.hoscode}/${data.depcode}/${data.workDate}`
    })
}

// 获取某一个账号下就诊人的信息 GET /api/user/patient/auth/findAll
export function getAllPatients() {
    return cqRequest.get({
        url: `${API.HOSPITALUSERINFO_URL}`
    })
}

// 获取医生数据 GET /api/hosp/hospital/getSchedule/{scheduleId}
export function getDoctorInfo(doctorId: string) {
    return cqRequest.get({
        url: `${API.HOSPITALDOCTORINFO_URL}${doctorId}`
    })
}
