import {defineStore} from "pinia";

import {IHospitalState} from "@/store/hospital/types";
import {getHospitalDetail} from "@/service/api/hospital";
import {localCache} from "@/util/cache";
import {HOSPITALDETAIL} from "@/global/constance";

const useHospitalStore = defineStore('hospital', {
    state: (): IHospitalState => ({
        hospitalDetail: []
    }),
    actions: {
    //    获取医院详情
        async getHospitalDatailAction(hosCode: string) {
            const hosDetailResult = await getHospitalDetail(hosCode)
            this.hospitalDetail = hosDetailResult.data.data
            localCache.setCache(HOSPITALDETAIL, this.hospitalDetail)
        }
    }
})

export default useHospitalStore
