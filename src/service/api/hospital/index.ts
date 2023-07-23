import cqRequest from "@/service";

// 枚举接口
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/'
}

// 获取医院详情信息GET /api/hosp/hospital/{hoscode}
export function getHospitalDetail(hospcode: string) {
    return cqRequest.get({
        url: `${API.HOSPITALDETAIL_URL}/${hospcode}`
    })
}
