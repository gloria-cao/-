import { createRouter, createWebHistory } from "vue-router";

/* 配置路由 */
const route = createRouter({
    // 路由模式
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue'),
            meta: {
                title: '首页'
            }
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue'),
            redirect: '/hospital/register',
            meta: {
                title: '医院'
            },
            children: [
                {
                    path:'register',
                    component: () => import('@/pages/hospital/component/register/register.vue'),
                    meta: {
                        title: '预约'
                    },
                },
                {
                    path:'detail',
                    component: () => import('@/pages/hospital/component/detail/detail.vue'),
                    meta: {
                        title: '医院详情'
                    },
                },
                {
                    path:'notification',
                    component: () => import('@/pages/hospital/component/notification/notification.vue'),
                    meta: {
                        title: '通知'
                    },
                },
                {
                    path:'searchOrCancel',
                    component: () => import('@/pages/hospital/component/searchOrCancel/searchOrCancel.vue'),
                    meta: {
                        title: '搜索、取消'
                    },
                },
                {
                    path:'undiagnosis',
                    component: () => import('@/pages/hospital/component/undiagnosis/undiagnosis.vue'),
                    meta: {
                        title: '停诊信息'
                    },
                },
                {
                    path: 'register_step1',
                    component: () => import('@/pages/hospital/component/register/register_step1.vue'),
                    meta: {
                        title: '预约第一步'
                    },
                },
                {
                    path: 'register_step2',
                    component: () => import('@/pages/hospital/component/register/register_step2.vue'),
                    meta: {
                        title: '预约第二步'
                    },
                },
            ]
        },
        {
            path: '/user',
            component: () => import('@/pages/user/index.vue'),
            redirect: '/user/order',
            meta: {
                title: '用户'
            },
            children: [
                {
                    path:'certification',
                    component: () => import('@/pages/user/component/certification/index.vue'),
                    meta: {
                        title: '实名认证'
                    }
                },
                {
                    path:'order',
                    component: () => import('@/pages/user/component/order/index.vue'),
                    meta: {
                        title: '订单详情'
                    },
                },
                {
                    path:'patient',
                    component: () => import('@/pages/user/component/patient/index.vue'),
                    meta: {
                        title: '就诊人管理'
                    }
                },
                {
                    path:'profile',
                    component: () => import('@/pages/user/component/profile/index.vue'),
                    meta: {
                        title: '个人中心'
                    },
                },
                {
                    path:'feedback',
                    component: () => import('@/pages/user/component/feedback/index.vue'),
                    meta: {
                        title: '意见反馈'
                    },
                },
            ]
        }
    ],
    // 滚动行为：控制滚动条的位置
    scrollBehavior() {
        return {
            top: 0,
            left: 0
        }
    }
})
export default route
