import {defineStore} from "pinia";
import {IAddOrUpdate, IOrderInfo, IOrderLimit, IUserAuthInfo} from "@/types/patient";
import {
    deletePatient,
    getAddressByParentId,
    getAllPatients, getAllStatusList,
    getAuthUser,
    getByDictCode,
    getCancelOrder,
    getCertification,
    getCreateNative,
    getOrderId,
    getOrderInfo, getOrderInfoByLimit,
    getPayStatus, postAddOrUpdatePatient, postAddPatient, putUpdatePatient
} from "@/service/api/user";
import {IPatientState} from "@/store/patient/types";

const usePatientStore = defineStore('patient',{
    state: ():IPatientState => ({
        orderId: 0,
        orderDetail: {},
        cancelOrder: '',
        codeImg: '',
        payStatue: '',
        certificationInfo: {},
        certificatesType: [],
        orderList: {},
        patientList: [],
        statusList: [],
        addressList: []
    }),
    actions: {
        //    创建用户订单
        async getOrderIdAction(orderId: IOrderInfo) {
            const orderResult = await getOrderId(orderId)
            this.orderId = orderResult.data.data
        },

        //    获取订单详情
        async getOrderInfoAction(id: number) {
            const orderDetail = await getOrderInfo(id)
            this.orderDetail = orderDetail.data.data
            this.cancelOrder = orderDetail.data.data.param.orderStatusString
        },

        //    取消订单
        async getCancelOrderAction(orderId: number) {
            const cancelOrder = await getCancelOrder(orderId)
            this.cancelOrder = cancelOrder.data.message
        },

        //    获取支付二维码
        async getCreateNativeAction(orderId: number) {
            const codeImg = await getCreateNative(orderId)
            this.codeImg = codeImg.data.data.codeUrl
        },

        //    获取订单支付状态
        async getPayStatusAction(orderId: number) {
            const payStatue = await getPayStatus(orderId)
            this.payStatue = payStatue.data
        },

        //    获取实名认证信息
        async getCertificationAction() {
            const certificationResult = await getCertification()
            this.certificationInfo = certificationResult.data.data
        },

        //    获取实名认证类型
        async getByDictCodeAction(dicCode: string) {
            const dicCodeResult = await getByDictCode(dicCode)
            this.certificatesType = dicCodeResult.data.data
        },

        //    账号认证
        async getUserAuahAction(userAuthInfo: IUserAuthInfo) {
            const userAuahResult = await getAuthUser(userAuthInfo)
            console.log(userAuahResult)
        },

        //    订单分页列表
        async getOrderInfoByLimitAction(orderInfo: IOrderLimit) {
            const result = await getOrderInfoByLimit(orderInfo)
            this.orderList = result.data.data
        },

        //    获取所有就诊人信息
        async getAllPatientsAction() {
            const result = await getAllPatients()
            this.patientList = result.data.data
        },

        //    获取订单状态接口
        async getAllStatusListAction() {
            const result = await getAllStatusList()
            this.statusList = result.data.data
        },

        //    获取地址
        async getAddressByParentIdAction(parentId: number) {
            const result = await getAddressByParentId(parentId)
            this.addressList = result.data.data
        },

        //    新增就诊人 修改就诊人
        async postAddPatientAction(data: IAddOrUpdate) {
            const result = await postAddOrUpdatePatient(data)
            console.log("新增", result)
        },

        //     删除就诊人
        async deletePatientAction(id: number) {
            const result = await deletePatient(id)
        }
    }

})

export default usePatientStore
