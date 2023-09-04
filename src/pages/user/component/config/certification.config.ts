const certificationConfig = {
    successContent: [
        {
            name: '用户姓名', type: 'name'
        },
        {
            name: '证件类型', type: 'certificatesType'
        },
        {
            name: '证件号码', type: 'certificatesNo'
        },
    ],
    failedContent: [
        {
            label: '用户姓名', placeholder: '请输入用户姓名', type: 'normal', value: 'name'
        },
        {
            label: '证件类型', placeholder: '请选择证件类型', type: 'select', value: 'certificatesType',
            // options: [
            //     {
            //         label: '身份证'
            //     },
            //     {
            //         label: '户口本'
            //     }
            // ]
        },
        {
            label: '证件号码', placeholder: '请输入证件号码',  type: 'normal', value: 'certificatesNo'
        },
        {
            label: '证件照片', placeholder: '请输入证件号码',  type: 'upload', value: 'certificatesUrl'
        }
    ]
}

export default certificationConfig
