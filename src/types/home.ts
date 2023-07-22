/* 设置网络请求参数类型 */

//请求医院列表
export interface THospitalsInfo {
    // page: number
    // limit: number
    hoscode?: string
    hosname?: string
    hostype?: string
    provinceCode?: string
    cityCode?: string
    districtCode?: string
    status?: number;
}
