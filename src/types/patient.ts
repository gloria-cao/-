export interface IOrderInfo {
    hoscode: string
    scheduleId: string
    patientId: number
}

export interface IUserAuthInfo {
    certificatesNo: string
    certificatesType: string
    certificatesUrl: string
    name: string
}

export interface IOrderLimit {
    page: number
    limit: number
    patientName?: string
    orderStatus?: string
}

export interface IAddOrUpdate {
    id?: number
    name: string
    certificatesType: string
    certificatesNo: string
    sex: number
    birthdate: string
    phone: string
    isMarry: number
    isInsure: number
    addressSelected: string[]
    address: string
    contactsName: string
    contactsCertificatesType: string
    contactsCertificatesNo: string
    contactsPhone: string
}
