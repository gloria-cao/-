const detailConfig = {
    title: '挂号详情',
    status: {
        type: 'param',
        childType: 'orderStatusString'
    },
    content: [
        {
            name: '就诊人信息',
            type: 'patientName'
        },
        {
            name: '就诊日期',
            type: 'reserveDate'
        },
        {
            name: '就诊医院',
            type: 'hosname'
        },
        {
            name: '就诊科室',
            type: 'depname'
        },
        {
            name: '医生职称',
            type: 'title'
        },
        {
            name: '医师服务费',
            type: 'amount'
        },
        {
            name: '挂号单号',
            type: 'hosRecordId'
        },
        {
            name: '挂号时间',
            type: 'fetchTime'
        }
    ]
}

export default detailConfig
