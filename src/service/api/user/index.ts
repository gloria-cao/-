import cqRequest from "@/service";
import {IOrderInfo} from "@/types/patient";

enum API {
    USERORDERID_URL='/order/orderInfo/auth/submitOrder',
    USERORDERDETAIL_URL='/order/orderInfo/auth/getOrderInfo',
    USERCANCELORDER_URL='/order/orderInfo/auth/cancelOrder',
    USERCREATECODE_URL='/order/weixin/createNative',
    USERPAYSTATUS_URL='/order/weixin/queryPayStatus',
    USERCERTIFICATION_URL='/user/auth/getUserInfo'
}

///api/order/orderInfo/auth/submitOrder/{hoscode}/{scheduleId}/{patientId}
export function getOrderId(orderInfo: IOrderInfo) {
    return cqRequest.post({
        url: `${API.USERORDERID_URL}/${orderInfo.hoscode}/${orderInfo.scheduleId}/${orderInfo.patientId}`,
    })
}

// 获取订单接口 /api/order/orderInfo/auth/getOrderInfo/{id}
export function getOrderInfo(id: number){
    return cqRequest.get({
        url: `${API.USERORDERDETAIL_URL}/${id}`
    })
}

// 取消预约 GET /api/order/orderInfo/auth/cancelOrder/{orderId}
export function getCancelOrder(orderId: number) {
    return cqRequest.get({
        url: `${API.USERCANCELORDER_URL}/${orderId}`
    })
}

// 下单生成支付二维码 GET /api/order/weixin/createNative/{orderId}
export function getCreateNative(orderId: number) {
    return cqRequest.get({
        url: `${API.USERCREATECODE_URL}/${orderId}`
    })
}

// 查询订单支付的结果 GET /api/order/weixin/queryPayStatus/{orderId}
export function getPayStatus(orderId: number) {
    return cqRequest.get({
        url: `${API.USERPAYSTATUS_URL}/${orderId}`
    })
}

// 获取实名认证信息 GET /api/user/auth/getUserInfo 携带token
export function getCertification() {
    return cqRequest.get({
        url: `${API.USERCERTIFICATION_URL}`
    })
}
