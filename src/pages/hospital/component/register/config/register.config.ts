export const contentConfig = {
  pageName: 'register',
  icon: 'Star',
  registerRule: '挂号规则',
  bookingTime: '预约周期',
  releaseTime: '放号时间',
  stopTime: '停挂时间',
  fullAddress: '具体地址',
  route: '规划路线',
  quitTime: '退号时间',
  bookingRule: '医院预约规则'

}

export const doctorConfig = {
  name: 'doctorPage',
  list: [
    {
      icon: 'Sunny',
      title: '上午号源',
      workTime: 0
    },
    {
      icon: 'Sunset',
      title: '下午号源',
      workTime: 1
    }
  ]
}

export const clientConfig = {
  name: '就诊人信息',
  contentList: [
    { type: 'param', name: '证件类型:', childType: 'certificatesTypeString'},
    { type: 'certificatesNo', name: '证件号码:'},
    { type: 'sex', name: '用户性别:'},
    { type: 'birthdate', name: '出生日期:'},
    { type: 'phone', name: '手机号码:'},
    { type: 'isMarry', name: '婚姻状况: '},
    { type: 'address', name: '当前住址:'},
    { type: 'param', name: '详细住址:', childType: 'fullAddress'},
  ]
}

export const registerConfig = {
  name: '挂号医生信息',
  contentList: [
    {type: 'workDate', name: '就诊日期'},
    {type: 'param', name: '就诊医院', childType: 'hosname'},
    {type: 'param', name: '就诊科室', childType: 'depname'},
    {type: 'docname', name: '医生姓名'},
    {type: 'title', name: '医生职称'},
    {type: 'skill', name: '医生专长'},
    {type: 'amount', name: '医师服务费'},
  ]
}
