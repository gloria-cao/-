/* 统一在仓库发home页面请求 */
import { defineStore } from "pinia";
import {getHospitalsList} from "@/service/api/home";
import {THospitalsInfo} from "@/types/home";
import {IHomeState} from "@/store/home/type";

const useHomeStore = defineStore('home', {
    state: (): IHomeState => ({
        hospitalsList: 0,
        totalHospitals: 0
    }),
    actions: {
    //    获取医院列表数据
        async getHospitalsListAction(info: THospitalsInfo) {
            const HospitalsListResult = await getHospitalsList(info)
            console.log("HosititalsListResult", HospitalsListResult.data)
            this.hospitalsList = HospitalsListResult.data.data.content
            this.totalHospitals = HospitalsListResult.data.data.totalElements
        }
    }
})

export default useHomeStore
