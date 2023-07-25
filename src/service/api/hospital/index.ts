import cqRequest from "@/service";

// 枚举接口
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    HOSPITALDEPARTMENT_URL = '/hosp/hospital/department/'
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
