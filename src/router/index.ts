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
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue'),
            redirect: '/hospital/register',
            children: [
                {
                    path:'register',
                    component: () => import('@/pages/hospital/component/register/register.vue')
                },
                {
                    path:'detail',
                    component: () => import('@/pages/hospital/component/detail/detail.vue')
                },
                {
                    path:'notification',
                    component: () => import('@/pages/hospital/component/notification/notification.vue')
                },
                {
                    path:'searchOrCancel',
                    component: () => import('@/pages/hospital/component/searchOrCancel/searchOrCancel.vue')
                },
                {
                    path:'undiagnosis',
                    component: () => import('@/pages/hospital/component/undiagnosis/undiagnosis.vue')
                },
                {
                    path: 'register_step1',
                    component: () => import('@/pages/hospital/component/register/register_step1.vue')
                },
                {
                    path: 'register_step2',
                    component: () => import('@/pages/hospital/component/register/register_step2.vue')
                },
            ]
        },
        {
            path: '/user',
            component: () => import('@/pages/user/index.vue'),
            redirect: '/user/order',
            children: [
                {
                    path:'certification',
                    component: () => import('@/pages/user/component/certification/index.vue')
                },
                {
                    path:'order',
                    component: () => import('@/pages/user/component/order/index.vue')
                },
                {
                    path:'patient',
                    component: () => import('@/pages/user/component/patient/index.vue')
                },
                {
                    path:'profile',
                    component: () => import('@/pages/user/component/profile/index.vue')
                },
                {
                    path:'feedback',
                    component: () => import('@/pages/user/component/feedback/index.vue')
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
