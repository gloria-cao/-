import {defineStore} from "pinia";
import {IOrderInfo} from "@/types/patient";
import {
    getCancelOrder,
    getCertification,
    getCreateNative,
    getOrderId,
    getOrderInfo,
    getPayStatus
} from "@/service/api/user";
import {IPatientState} from "@/store/patient/types";

const usePatientStore = defineStore('patient',{
    state: ():IPatientState => ({
        orderId: 0,
        orderDetail: {},
        cancelOrder: '',
        codeImg: '',
        payStatue: '',
        certificationInfo: {}
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
            console.log(payStatue.data)
        },

    //    获取实名认证信息
        async getCertificationAction() {
            const certificationResult = await getCertification()
            this.certificationInfo = certificationResult.data.data
            console.log(this.certificationInfo)

        }
    }
})

export default usePatientStore
