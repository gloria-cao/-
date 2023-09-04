const addPatientConfig = {
    titleList: [
        {
            name: '就诊人信息',
            childList: [
                {label: '用户姓名', type: 'input', placeholder: '请输入用户姓名', value: 'name'},
                {label: '证件类型', type: 'select', placeholder: '请选择证件类型', value: 'certificatesType'},
                {label: '证件号码', type: 'input', placeholder: '请输入证件号码', value: 'certificatesNo'},
                {label: '用户性别', type: 'radio', placeholder: '请输入用户性别', value: 'sex'},
                {label: '出生日期', type: 'data', placeholder: '请输入出生日期', value: 'birthdate'},
                {label: '手机号码', type: 'input', placeholder: '请输入手机号码', value: 'phone'},
            ]
        },
        {
            name: '建档信息(完善后部分医院首次就诊不排队建档)',
            childList: [
                {label: '婚姻状况', type: 'radio', placeholder: '请选择婚姻状况', value: 'isMarry'},
                {label: '自费/医保', type: 'radio', placeholder: '请选择医保状况', value: 'isInsure'},
                {label: '当前住址', type: 'cascader ', placeholder: '请选择用户住址', value: 'addressSelected'},
                {label: '详细住址', type: 'input', placeholder: '请输入用户详细住址', value: 'address'},
            ]},
        {
            name: '联系人信息(选填)',
            childList: [
                {label: '用户姓名', type: 'input', placeholder: '请输入用户姓名', value: 'contactsName'},
                {label: '证件类型', type: 'select', placeholder: '请选择证件类型', value: 'contactsCertificatesType'},
                {label: '证件号码', type: 'input', placeholder: '请输入证件号码', value: 'contactsCertificatesNo'},
                {label: '手机号码', type: 'input', placeholder: '请输入手机号码', value: 'contactsPhone'},
            ]},
    ],

}

export default addPatientConfig
