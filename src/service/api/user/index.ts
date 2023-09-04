import cqRequest from "@/service";
import {IOrderInfo, IUserAuthInfo, IOrderLimit, IAddOrUpdate} from "@/types/patient";

enum API {
    USERORDERID_URL='/order/orderInfo/auth/submitOrder',
    USERORDERDETAIL_URL='/order/orderInfo/auth/getOrderInfo',
    USERCANCELORDER_URL='/order/orderInfo/auth/cancelOrder',
    USERCREATECODE_URL='/order/weixin/createNative',
    USERPAYSTATUS_URL='/order/weixin/queryPayStatus',
    USERCERTIFICATION_URL='/user/auth/getUserInfo',
    USERFINDBYDICCODE_URL='/cmn/dict/findByDictCode',
    USERAUAH_URL='/user/auth/userAuah',
    USERGETORDERINFOBY_URL='/order/orderInfo/auth',
    USERGETALLPAIENTS_URL='/user/patient/auth/findAll',
    USERGETALLSTAT_URL='/order/orderInfo/auth/getStatusList',
    USERFINDBYADDRESS_URL='/cmn/dict/findByParentId',
    USERADDPATIENT_URL='/user/patient/auth/save',
    USERUPDATEPATIENT_URL='/user/patient/auth/update',
    USERDELETEPATIENT_URL='/user/patient/auth/remove'
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

// 获取证件类型的接口 GET /api/cmn/dict/findByDictCode/{dictCode}
export function getByDictCode(dictCode:string) {
    return  cqRequest.get({
        url: `${API.USERFINDBYDICCODE_URL}/${dictCode}`,
    })
}

// 账号认证 POST /api/user/auth/userAuah
export function getAuthUser(userAuthInfo: IUserAuthInfo) {
    return cqRequest.post({
        url: `${API.USERAUAH_URL}/${userAuthInfo.certificatesNo}/${userAuthInfo.certificatesType}/${userAuthInfo.certificatesUrl}/${userAuthInfo.name}`
    })
}

// 获取分页列表 GET /api/order/orderInfo/auth/{page}/{limit}
export function getOrderInfoByLimit(orderInfo: IOrderLimit) {
    if (orderInfo.patientName && orderInfo.orderStatus) {
        return cqRequest.get({
            url: `${API.USERGETORDERINFOBY_URL}/${orderInfo.page}/${orderInfo.limit}?patientName=${orderInfo.patientName}&orderStatus=${orderInfo.orderStatus}`
        })
    }else if (orderInfo.orderStatus) {
        return cqRequest.get({
            url: `${API.USERGETORDERINFOBY_URL}/${orderInfo.page}/${orderInfo.limit}?orderStatus=${orderInfo.orderStatus}`
        })
    }else if (orderInfo.patientName){
        return cqRequest.get({
            url: `${API.USERGETORDERINFOBY_URL}/${orderInfo.page}/${orderInfo.limit}?patientName=${orderInfo.patientName}`
        })
    }else {
        return cqRequest.get({
            url: `${API.USERGETORDERINFOBY_URL}/${orderInfo.page}/${orderInfo.limit}`
        })
    }
}

// 获取就诊人列表 GET /api/user/patient/auth/findAll
export function getAllPatients() {
    return cqRequest.get({
        url: `${API.USERGETALLPAIENTS_URL}`
    })
}

// 获取订单状态接口 GET /api/order/orderInfo/auth/getStatusList
export function getAllStatusList() {
    return cqRequest.get({
        url: `${API.USERGETALLSTAT_URL}`
    })
}

// 获取地址 GET /api/cmn/dict/findByParentId/{parentId}
export function getAddressByParentId(parentId: number) {
    return cqRequest.get({
        url: `${API.USERFINDBYADDRESS_URL}/${parentId}`
    })
}

// 新增就诊人 POST /api/user/patient/auth/save
export function postAddOrUpdatePatient(data: IAddOrUpdate) {
    if(data.id) {
        return cqRequest.put({
            url: `${API.USERUPDATEPATIENT_URL}`,
            data: data
        })
    }else {
        return cqRequest.post({
            url: `${API.USERADDPATIENT_URL}`,
            data: data
        })
    }

}

// 删除就诊人 DELETE /api/user/patient/auth/remove/{id}
export function deletePatient(id: number) {
    return cqRequest.delete({
        url: `${API.USERDELETEPATIENT_URL}/${id}`
    })
}
