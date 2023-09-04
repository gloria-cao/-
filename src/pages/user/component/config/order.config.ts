const orderConfig = {
    searchBtn: [
        {label: '就诊人', type: 'select', value: 'patient', placeholder: '请输入就诊人', list: 'patientList'},
        {label: '订单状态', type: 'select', value: 'status',placeholder: '请选择订单状态', list: 'statusList'},
    ],
    contentList: [
        { name: '就诊时间', type: 'reserveDate', width:'150px' },
        { name: '医院', type: 'hosname', width:'150px' },
        { name: '科室', type: 'depname', width:'150px' },
        { name: '医生', type: 'title', width:'120px' },
        { name: '医生服务费', type: 'amount', width:'100px' },
        { name: '就诊人', type: 'patientName', width:'100px' },
        { name: '订单状态', type: 'orderStatus', width:'80px' },
        { name: '操作', type: 'detailBtn', width:'80px' },
    ]
}

export default orderConfig
